/**
 * Payload CMS API client — replaces the WordPress REST API as the source
 * for both Blog and Academy content. Both live in a single unified `posts`
 * collection at guires.info, distinguished by a `source: "blog"|"academy"`
 * field, instead of being two separate WordPress installs.
 */

const PAYLOAD_BASE = "https://www.guires.info";
const API = `${PAYLOAD_BASE}/api`;

export type PayloadSource = "blog" | "academy";

export interface PayloadMedia {
  id: number;
  url: string;
  altText: string | null;
  title: string | null;
  width?: number;
  height?: number;
}

export interface PayloadCategory {
  id: number;
  name: string;
  slug: string;
}

export interface PayloadSeo {
  metaTitle: string | null;
  metaDescription: string | null;
  metaKeywords: string | null;
  canonicalURL: string | null;
  robots: string | null;
}

// Lexical rich-text node — deliberately loose since we only render the
// node types actually used in this content (paragraph, heading, text,
// link, upload/image, list/listitem, quote, linebreak).
export interface LexicalNode {
  type: string;
  tag?: string;
  format?: string | number;
  text?: string;
  url?: string;
  fields?: { url?: string; newTab?: boolean };
  value?: PayloadMedia;
  listType?: string;
  children?: LexicalNode[];
}

export interface PayloadPost {
  id: number;
  title: string;
  source: PayloadSource;
  slug: string;
  heroImage: PayloadMedia | null;
  author: string;
  categories: PayloadCategory[];
  content: { root: LexicalNode };
  seo: PayloadSeo;
  publishing: { status: string; publishedAt: string };
  updatedAt: string;
  createdAt: string;
}

export interface PayloadPostsPage {
  posts: PayloadPost[];
  total: number;
  totalPages: number;
}

const FETCH_OPTS = {
  headers: { Accept: "application/json" },
  next: { revalidate: 60 },
};

function whereQS(params: Record<string, string>): string {
  return Object.entries(params)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join("&");
}

/** One page of posts for a given source, newest first. */
export async function getPayloadPostsPage(
  source: PayloadSource,
  page = 1,
  perPage = 15,
  categoryId?: number,
  categorySlug?: string
): Promise<PayloadPostsPage> {
  try {
    const qs = new URLSearchParams({
      limit: String(perPage),
      page: String(page),
      sort: "-publishing.publishedAt",
    });
    let where = whereQS({
      "where[source][equals]": source,
      "where[publishing.status][equals]": "published",
    });
    if (categoryId) {
      where += `&${whereQS({ "where[categories][equals]": String(categoryId) })}`;
    } else if (categorySlug) {
      where += `&${whereQS({ "where[categories.slug][equals]": categorySlug })}`;
    }
    const res = await fetch(`${API}/posts?${qs}&${where}`, FETCH_OPTS);
    if (!res.ok) return { posts: [], total: 0, totalPages: 0 };
    const json = await res.json();
    return { posts: json.docs ?? [], total: json.totalDocs ?? 0, totalPages: json.totalPages ?? 0 };
  } catch (err) {
    console.error("[Payload] getPayloadPostsPage error:", err);
    return { posts: [], total: 0, totalPages: 0 };
  }
}

/** All categories in use for a given source, with post counts. */
export async function getPayloadCategories(source: PayloadSource): Promise<(PayloadCategory & { count: number })[]> {
  try {
    const where = whereQS({ "where[source][equals]": source, "where[publishing.status][equals]": "published" });
    const res = await fetch(
      `${API}/posts?limit=1000&${where}&select[categories]=true`,
      { headers: FETCH_OPTS.headers, next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const json = await res.json();
    const map = new Map<string, PayloadCategory & { count: number }>();
    for (const doc of json.docs ?? []) {
      for (const cat of doc.categories ?? []) {
        const existing = map.get(cat.slug);
        if (existing) existing.count += 1;
        else map.set(cat.slug, { id: cat.id, name: cat.name, slug: cat.slug, count: 1 });
      }
    }
    return [...map.values()];
  } catch {
    return [];
  }
}

/**
 * Single post by source + slug — cached for 60s.
 *
 * Deliberately does NOT swallow fetch/network errors into `null`: a transient
 * failure reaching guires.info must not be indistinguishable from "this post
 * doesn't exist," because the caller calls notFound() on `null` and Next's
 * ISR then caches that 404 response for the revalidate window — turning one
 * flaky request into a real 404 for every visitor until the cache clears.
 * Letting the error throw instead surfaces a (uncached) error page and lets
 * the next request retry cleanly.
 */
export async function getPayloadPostBySlug(source: PayloadSource, slug: string): Promise<PayloadPost | null> {
  const where = whereQS({
    "where[source][equals]": source,
    "where[slug][equals]": slug,
    "where[publishing.status][equals]": "published",
  });
  const res = await fetch(`${API}/posts?limit=1&${where}`, { headers: FETCH_OPTS.headers, next: { revalidate: 60 } });
  if (!res.ok) throw new Error(`[Payload] getPayloadPostBySlug: ${res.status} fetching ${source}/${slug}`);
  const json = await res.json();
  return json.docs?.[0] ?? null;
}

/** Search published posts by keyword (title only — Payload's REST API has no full-text search param without a plugin). */
export async function searchPayloadPosts(source: PayloadSource, query: string, limit = 8): Promise<PayloadPost[]> {
  if (!query.trim()) return [];
  try {
    const where = whereQS({
      "where[source][equals]": source,
      "where[publishing.status][equals]": "published",
      "where[title][like]": query,
    });
    const res = await fetch(`${API}/posts?limit=${limit}&${where}`, { headers: FETCH_OPTS.headers, next: { revalidate: 60 } });
    if (!res.ok) return [];
    const json = await res.json();
    return json.docs ?? [];
  } catch {
    return [];
  }
}

/** All {category, slug} pairs for a source — used by generateStaticParams and the sitemap. */
export async function getAllPayloadSlugs(source: PayloadSource): Promise<{ category: string; slug: string }[]> {
  try {
    const where = whereQS({ "where[source][equals]": source, "where[publishing.status][equals]": "published" });
    const res = await fetch(
      `${API}/posts?limit=1000&${where}&select[slug]=true&select[categories]=true`,
      FETCH_OPTS
    );
    if (!res.ok) return [];
    const json = await res.json();
    return (json.docs ?? []).map((d: PayloadPost) => ({
      category: getPayloadCategorySlug(d),
      slug: d.slug,
    }));
  } catch {
    return [];
  }
}

/** Recent posts for a source (first page only) — cached 60s, used for "related"/homepage teasers. */
export async function getRecentPayloadPosts(source: PayloadSource, count = 6): Promise<PayloadPost[]> {
  const { posts } = await getPayloadPostsPage(source, 1, count);
  return posts;
}

/* ── Helpers ── */

/** First category's slug — the URL segment this post lives under. Mirrors WP's single-category-per-URL convention. */
export function getPayloadCategorySlug(post: PayloadPost): string {
  return post.categories?.[0]?.slug ?? "general";
}

export function getPayloadCategoryNames(post: PayloadPost): string[] {
  return (post.categories ?? []).map((c) => c.name);
}

export function getPayloadImageUrl(media: PayloadMedia | null | undefined): string | null {
  if (!media?.url) return null;
  return media.url.startsWith("http") ? media.url : `${PAYLOAD_BASE}${media.url}`;
}

export function getPayloadImageAlt(post: PayloadPost): string {
  return post.heroImage?.altText || post.title;
}

export function getPayloadAuthor(_post: PayloadPost): string {
  return "Tutors India";
}

export function formatPayloadDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export function stripPayloadHtml(html: string, maxLength = 160): string {
  const plain = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  if (plain.length <= maxLength) return plain;
  return plain.slice(0, maxLength).replace(/\s\S+$/, "") + "…";
}

/**
 * Plain-text excerpt straight from the Lexical tree — walks paragraph/text
 * nodes only, skipping headings/images, until it has enough characters.
 */
export function excerptFromLexical(content: { root: LexicalNode } | null | undefined, maxLength = 160): string {
  if (!content?.root) return "";
  let text = "";
  const walk = (node: LexicalNode) => {
    if (text.length >= maxLength) return;
    if (node.type === "text" && node.text) text += node.text + " ";
    for (const child of node.children ?? []) walk(child);
  };
  walk(content.root);
  text = text.replace(/\s+/g, " ").trim();
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).replace(/\s\S+$/, "") + "…";
}

/* ── Lexical → HTML renderer ──
 * Covers the node types actually present in this content: paragraph,
 * heading, text (bold/italic/underline/strikethrough/code via the format
 * bitmask), link, upload (image), list/listitem, quote, linebreak.
 * Anything unrecognised is skipped rather than throwing, so an unusual
 * node in one post can't take down the whole page.
 */
function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderTextNode(node: LexicalNode): string {
  let text = escapeHtml(node.text ?? "");
  const format = typeof node.format === "number" ? node.format : 0;
  if (format & 16) text = `<code>${text}</code>`;
  if (format & 1) text = `<strong>${text}</strong>`;
  if (format & 2) text = `<em>${text}</em>`;
  if (format & 8) text = `<u>${text}</u>`;
  if (format & 4) text = `<s>${text}</s>`;
  return text;
}

function renderChildren(nodes: LexicalNode[] | undefined, skip: { upload: boolean }): string {
  return (nodes ?? []).map((n) => renderLexicalNode(n, skip)).join("");
}

function renderLexicalNode(node: LexicalNode, skip: { upload: boolean }): string {
  switch (node.type) {
    case "text":
      return renderTextNode(node);
    case "linebreak":
      return "<br />";
    case "paragraph": {
      const inner = renderChildren(node.children, skip);
      return inner.trim() ? `<p>${inner}</p>` : "";
    }
    case "heading": {
      const tag = node.tag && /^h[1-6]$/.test(node.tag) ? node.tag : "h2";
      return `<${tag}>${renderChildren(node.children, skip)}</${tag}>`;
    }
    case "link": {
      const href = node.fields?.url ?? "#";
      const target = node.fields?.newTab ? ' target="_blank" rel="noopener noreferrer"' : "";
      return `<a href="${escapeHtml(href)}"${target}>${renderChildren(node.children, skip)}</a>`;
    }
    case "list": {
      const tag = node.listType === "number" ? "ol" : "ul";
      return `<${tag}>${renderChildren(node.children, skip)}</${tag}>`;
    }
    case "listitem":
      return `<li>${renderChildren(node.children, skip)}</li>`;
    case "quote":
      return `<blockquote>${renderChildren(node.children, skip)}</blockquote>`;
    case "upload": {
      // The page already shows the post's featured image in the banner —
      // drop the article's own first inline image so it doesn't repeat
      // immediately underneath as a visually redundant second banner image.
      if (skip.upload) {
        skip.upload = false;
        return "";
      }
      const img = node.value;
      const src = getPayloadImageUrl(img);
      if (!src) return "";
      const alt = escapeHtml(img?.altText || img?.title || "");
      return `<img src="${src}" alt="${alt}" loading="lazy" />`;
    }
    default:
      // Unknown node type (embed, table, etc. not yet supported) — render
      // its children as plain text rather than dropping the content silently.
      return renderChildren(node.children, skip);
  }
}

export function renderLexicalToHtml(
  content: { root: LexicalNode } | null | undefined,
  skipFirstImage = false
): string {
  if (!content?.root) return "";
  return renderChildren(content.root.children, { upload: skipFirstImage });
}
