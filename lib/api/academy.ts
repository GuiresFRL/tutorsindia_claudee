/**
 * Academy WordPress REST API client.
 * Separate from the main blog — fetches posts from tutorsindia.com/academy
 * using paginated requests (WP REST API caps at 100 per page).
 */

const ACADEMY_API_BASE = "https://tutorsindia.net/academy/wp-json/wp/v2";

export interface AcademyPost {
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
  cache: "no-store" as const,
  headers: { Accept: "application/json" },
};

/**
 * Fetch ALL published Academy posts — paginated through WP REST API.
 * WP REST API caps at 100 per page; this fetches every page in parallel.
 */
const LISTING_FIELDS = "_fields=id,slug,date,modified,title,excerpt,_links,_embedded";

export interface AcademyCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

export interface AcademyPostsPage {
  posts: AcademyPost[];
  total: number;
  totalPages: number;
}

// Excluded category slugs — non-subject content types
const EXCLUDED_SLUGS = new Set([
  "uncategorized", "ebooks", "infographics", "videos",
  "futuretopics-titles", "future-topics-titles",
  "engineering-and-technology-ebooks",
  "engineering-and-technology-infographics",
  "engineering-and-technology-videos",
  "business-management-videos", "business-management-info",
]);

/** Fetch one page of academy posts — used by the listing page (server-side pagination) */
export async function getAcademyPostsPage(
  page = 1,
  perPage = 15,
  categoryId?: number
): Promise<AcademyPostsPage> {
  try {
    const qs = new URLSearchParams({
      _embed: "1",
      per_page: String(perPage),
      page: String(page),
      status: "publish",
      orderby: "date",
      order: "desc",
    });
    const url = `${ACADEMY_API_BASE}/posts?${qs}&${LISTING_FIELDS}${categoryId ? `&categories=${categoryId}` : ""}`;
    const res = await fetch(url, FETCH_OPTS);
    if (!res.ok) return { posts: [], total: 0, totalPages: 0 };
    const total      = parseInt(res.headers.get("X-WP-Total") ?? "0", 10);
    const totalPages = parseInt(res.headers.get("X-WP-TotalPages") ?? "0", 10);
    const posts: AcademyPost[] = await res.json();
    return { posts, total, totalPages };
  } catch (err) {
    console.error("[Academy WP] getAcademyPostsPage error:", err);
    return { posts: [], total: 0, totalPages: 0 };
  }
}

/** Fetch academy categories for the filter dropdown */
export async function getAcademyCategoryList(): Promise<AcademyCategory[]> {
  try {
    const res = await fetch(
      `${ACADEMY_API_BASE}/categories?per_page=100&hide_empty=true&orderby=count&order=desc`,
      FETCH_OPTS
    );
    if (!res.ok) return [];
    const cats: AcademyCategory[] = await res.json();
    return cats.filter((c) => !EXCLUDED_SLUGS.has(c.slug));
  } catch {
    return [];
  }
}

/** Fetch a single Academy post by slug */
export async function getAcademyPostBySlug(slug: string): Promise<AcademyPost | null> {
  try {
    const res = await fetch(
      `${ACADEMY_API_BASE}/posts?slug=${encodeURIComponent(slug)}&_embed&status=publish`,
      FETCH_OPTS
    );
    if (!res.ok) return null;
    const posts: AcademyPost[] = await res.json();
    return posts[0] ?? null;
  } catch {
    return null;
  }
}

/** Get all Academy post slugs for generateStaticParams */
export async function getAllAcademySlugs(): Promise<string[]> {
  try {
    const firstRes = await fetch(
      `${ACADEMY_API_BASE}/posts?per_page=100&page=1&status=publish&_fields=slug`,
      FETCH_OPTS
    );
    if (!firstRes.ok) return [];

    const totalPages = parseInt(firstRes.headers.get("X-WP-TotalPages") ?? "1", 10);
    const firstPage: AcademyPost[] = await firstRes.json();

    let allPosts = [...firstPage];

    if (totalPages > 1) {
      const remaining = await Promise.allSettled(
        Array.from({ length: totalPages - 1 }, (_, i) => i + 2).map((pageNum) =>
          fetch(
            `${ACADEMY_API_BASE}/posts?per_page=100&page=${pageNum}&status=publish&_fields=slug`,
            FETCH_OPTS
          ).then((r) => (r.ok ? (r.json() as Promise<AcademyPost[]>) : []))
        )
      );
      remaining.forEach((r) => {
        if (r.status === "fulfilled") allPosts = [...allPosts, ...r.value];
      });
    }

    return allPosts.map((p) => p.slug);
  } catch {
    return [];
  }
}

/** Lightweight recent posts for sidebar/related (first page only) */
export async function getRecentAcademyPosts(count = 6): Promise<AcademyPost[]> {
  try {
    const res = await fetch(
      `${ACADEMY_API_BASE}/posts?_embed&per_page=${Math.min(count, 100)}&page=1&status=publish&orderby=date&order=desc`,
      FETCH_OPTS
    );
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

/* ── Helper utilities (mirrors blog helpers) ── */

export function getAcademyFeaturedImage(post: AcademyPost): string | null {
  const media = post._embedded?.["wp:featuredmedia"]?.[0];
  if (!media) return null;
  const s = media.media_details?.sizes;
  return s?.medium_large?.source_url ?? s?.medium?.source_url ?? s?.full?.source_url ?? media.source_url ?? null;
}

export function getAcademyImageAlt(post: AcademyPost): string {
  return post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || post.title.rendered;
}

export function getAcademyAuthor(_post: AcademyPost): string {
  // All content is published under the Tutors India brand.
  return "Tutors India";
}

export function getAcademyCategories(post: AcademyPost): string[] {
  return (post._embedded?.["wp:term"]?.[0] ?? []).map((t) => t.name);
}

export function stripAcademyHtml(html: string, maxLength = 160): string {
  const plain = html
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&hellip;/g, "…")
    .replace(/\s+/g, " ").trim();
  if (plain.length <= maxLength) return plain;
  return plain.slice(0, maxLength).replace(/\s\S+$/, "") + "…";
}

export function formatAcademyDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric", month: "long", year: "numeric",
  });
}
