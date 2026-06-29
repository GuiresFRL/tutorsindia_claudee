/**
 * Academy WordPress REST API client.
 * Separate from the main blog — fetches posts from tutorsindia.com/academy
 * using paginated requests (WP REST API caps at 100 per page).
 */

const ACADEMY_API_BASE = "https://tutorsindia.com/academy/wp-json/wp/v2";

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
  next: { revalidate: 3600 },
  headers: { Accept: "application/json" },
};

/**
 * Fetch ALL published Academy posts — paginated through WP REST API.
 * WP REST API caps at 100 per page; this fetches every page in parallel.
 */
export async function getAcademyPosts(): Promise<AcademyPost[]> {
  try {
    // Step 1: fetch page 1 and read total pages from headers
    const firstRes = await fetch(
      `${ACADEMY_API_BASE}/posts?_embed&per_page=100&page=1&status=publish&orderby=date&order=desc`,
      FETCH_OPTS
    );

    if (!firstRes.ok) return [];

    const totalPages = parseInt(firstRes.headers.get("X-WP-TotalPages") ?? "1", 10);
    const total      = parseInt(firstRes.headers.get("X-WP-Total") ?? "0", 10);
    const firstPage: AcademyPost[] = await firstRes.json();

    console.log(`[Academy WP] Total: ${total} posts across ${totalPages} pages`);

    if (totalPages <= 1) return firstPage;

    // Step 2: fetch remaining pages in parallel
    const remainingResults = await Promise.allSettled(
      Array.from({ length: totalPages - 1 }, (_, i) => i + 2).map((pageNum) =>
        fetch(
          `${ACADEMY_API_BASE}/posts?_embed&per_page=100&page=${pageNum}&status=publish&orderby=date&order=desc`,
          FETCH_OPTS
        ).then((r) => (r.ok ? (r.json() as Promise<AcademyPost[]>) : []))
      )
    );

    const extraPosts = remainingResults.flatMap((r) =>
      r.status === "fulfilled" ? r.value : []
    );

    return [...firstPage, ...extraPosts];
  } catch (err) {
    console.error("[Academy WP] getAcademyPosts error:", err);
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

export function getAcademyAuthor(post: AcademyPost): string {
  return post._embedded?.author?.[0]?.name ?? "Tutors India";
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
