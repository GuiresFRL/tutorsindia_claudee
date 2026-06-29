/**
 * WordPress REST API client — Headless CMS integration.
 * Fetches ALL blog posts from WordPress at guires.info/blog
 * using paginated requests (WP REST API caps at 100 per page).
 */

const WP_API_BASE = "https://guires.info/blog/wp-json/wp/v2";

export interface WPPost {
  id: number;
  slug: string;
  link: string;
  date: string;
  modified: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
      media_details?: {
        sizes?: {
          medium?: { source_url: string };
          medium_large?: { source_url: string };
          thumbnail?: { source_url: string };
          full?: { source_url: string };
        };
      };
    }>;
    author?: Array<{ name: string; avatar_urls?: Record<string, string> }>;
    "wp:term"?: Array<Array<{ id: number; name: string; slug: string }>>;
  };
}

const FETCH_OPTS = {
  next: { revalidate: 3600 },
  headers: { Accept: "application/json" },
};

/**
 * Fetch ALL published blog posts by paginating through the WP REST API.
 * WP REST API maximum is 100 per page — this function fetches every page
 * in parallel and returns the full combined list filtered to /blog/ posts.
 */
export async function getBlogPosts(): Promise<WPPost[]> {
  try {
    // ── Step 1: fetch page 1 and read total pages from headers ──
    const firstRes = await fetch(
      `${WP_API_BASE}/posts?_embed&per_page=100&page=1&status=publish&orderby=date&order=desc`,
      FETCH_OPTS
    );

    if (!firstRes.ok) return [];

    const totalPages = parseInt(firstRes.headers.get("X-WP-TotalPages") ?? "1", 10);
    const total      = parseInt(firstRes.headers.get("X-WP-Total") ?? "0", 10);

    const firstPage: WPPost[] = await firstRes.json();

    if (totalPages <= 1) {
      return firstPage.filter((p) => p.link.includes("/blog/"));
    }

    // ── Step 2: fetch remaining pages in parallel ──
    const remainingPageNumbers = Array.from(
      { length: totalPages - 1 },
      (_, i) => i + 2           // pages 2, 3, 4 …
    );

    const remainingResults = await Promise.allSettled(
      remainingPageNumbers.map((pageNum) =>
        fetch(
          `${WP_API_BASE}/posts?_embed&per_page=100&page=${pageNum}&status=publish&orderby=date&order=desc`,
          FETCH_OPTS
        ).then((r) => (r.ok ? (r.json() as Promise<WPPost[]>) : []))
      )
    );

    // ── Step 3: combine all pages ──
    const extraPosts = remainingResults.flatMap((result) =>
      result.status === "fulfilled" ? result.value : []
    );

    const allPosts = [...firstPage, ...extraPosts];

    console.log(
      `[WP] Fetched ${allPosts.length}/${total} posts across ${totalPages} pages`
    );

    // Filter to posts whose link contains "/blog/"
    return allPosts.filter((p) => p.link.includes("/blog/"));
  } catch (err) {
    console.error("[WP] getBlogPosts error:", err);
    return [];
  }
}

/**
 * Fetch only the first page (up to `count` posts) — lightweight for related posts.
 * Does NOT paginate; used where only a handful of recent posts are needed.
 */
export async function getRecentPosts(count = 6): Promise<WPPost[]> {
  try {
    const res = await fetch(
      `${WP_API_BASE}/posts?_embed&per_page=${Math.min(count, 100)}&page=1&status=publish&orderby=date&order=desc`,
      FETCH_OPTS
    );
    if (!res.ok) return [];
    const posts: WPPost[] = await res.json();
    return posts.filter((p) => p.link.includes("/blog/"));
  } catch {
    return [];
  }
}

/** Fetch a single post by slug */
export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  try {
    const res = await fetch(
      `${WP_API_BASE}/posts?slug=${encodeURIComponent(slug)}&_embed&status=publish`,
      FETCH_OPTS
    );
    if (!res.ok) return null;
    const posts: WPPost[] = await res.json();
    return posts[0] ?? null;
  } catch {
    return null;
  }
}

/** Get all post slugs for generateStaticParams (filtered to /blog/ posts) */
export async function getAllPostSlugs(): Promise<string[]> {
  try {
    // Fetch all slugs with lightweight fields only — paginated
    const firstRes = await fetch(
      `${WP_API_BASE}/posts?per_page=100&page=1&status=publish&_fields=slug,link`,
      FETCH_OPTS
    );
    if (!firstRes.ok) return [];

    const totalPages = parseInt(firstRes.headers.get("X-WP-TotalPages") ?? "1", 10);
    const firstPage: WPPost[] = await firstRes.json();

    let allPosts = [...firstPage];

    if (totalPages > 1) {
      const remaining = await Promise.allSettled(
        Array.from({ length: totalPages - 1 }, (_, i) => i + 2).map((pageNum) =>
          fetch(
            `${WP_API_BASE}/posts?per_page=100&page=${pageNum}&status=publish&_fields=slug,link`,
            FETCH_OPTS
          ).then((r) => (r.ok ? (r.json() as Promise<WPPost[]>) : []))
        )
      );
      remaining.forEach((r) => {
        if (r.status === "fulfilled") allPosts = [...allPosts, ...r.value];
      });
    }

    return allPosts
      .filter((p) => p.link.includes("/blog/"))
      .map((p) => p.slug);
  } catch {
    return [];
  }
}

/* ── Helper utilities ── */

export function getFeaturedImage(post: WPPost): string | null {
  const media = post._embedded?.["wp:featuredmedia"]?.[0];
  if (!media) return null;
  const s = media.media_details?.sizes;
  return s?.medium_large?.source_url ?? s?.medium?.source_url ?? s?.full?.source_url ?? media.source_url ?? null;
}

export function getFeaturedImageAlt(post: WPPost): string {
  return post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || post.title.rendered;
}

export function getAuthorName(post: WPPost): string {
  return post._embedded?.author?.[0]?.name ?? "Tutors India";
}

export function getCategories(post: WPPost): string[] {
  return (post._embedded?.["wp:term"]?.[0] ?? []).map((t) => t.name);
}

export function stripHtml(html: string, maxLength = 160): string {
  const plain = html
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&hellip;/g, "…")
    .replace(/\s+/g, " ").trim();
  if (plain.length <= maxLength) return plain;
  return plain.slice(0, maxLength).replace(/\s\S+$/, "") + "…";
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric", month: "long", year: "numeric",
  });
}
