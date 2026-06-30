/**
 * tutorsindia.com main WordPress REST API client.
 * Used for pages: essays, examples, title, topic, our-sample-works,
 * latest-research-trends, future-research-directions, referencing, insights.
 */

const TI_API = "https://www.tutorsindia.com/wp-json/wp/v2";

const FETCH_OPTS = {
  next: { revalidate: 3600 },
  headers: { Accept: "application/json" },
};

export interface TIPage {
  id: number;
  slug: string;
  link: string;
  date: string;
  modified: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  parent: number;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
      media_details?: { sizes?: { medium_large?: { source_url: string }; medium?: { source_url: string }; full?: { source_url: string } } };
    }>;
    author?: Array<{ name: string }>;
  };
}

/** Fetch a single page by slug */
export async function getTIPageBySlug(slug: string): Promise<TIPage | null> {
  try {
    const res = await fetch(
      `${TI_API}/pages?slug=${encodeURIComponent(slug)}&_embed&status=publish`,
      FETCH_OPTS
    );
    if (!res.ok) return null;
    const pages: TIPage[] = await res.json();
    return pages[0] ?? null;
  } catch { return null; }
}

/** Fetch a single page by ID */
export async function getTIPageById(id: number): Promise<TIPage | null> {
  try {
    const res = await fetch(`${TI_API}/pages/${id}?_embed`, FETCH_OPTS);
    if (!res.ok) return null;
    return res.json();
  } catch { return null; }
}

/** Fetch all child pages of a parent (for title/topic listing pages) */
export async function getTIChildPages(parentId: number): Promise<TIPage[]> {
  try {
    const res = await fetch(
      `${TI_API}/pages?parent=${parentId}&per_page=100&status=publish&orderby=title&order=asc&_fields=id,slug,title,excerpt,date,link`,
      FETCH_OPTS
    );
    if (!res.ok) return [];
    return res.json();
  } catch { return []; }
}

/** Get all child page slugs for generateStaticParams */
export async function getTIChildSlugs(parentId: number): Promise<string[]> {
  try {
    const res = await fetch(
      `${TI_API}/pages?parent=${parentId}&per_page=100&status=publish&_fields=slug`,
      FETCH_OPTS
    );
    if (!res.ok) return [];
    const pages: TIPage[] = await res.json();
    return pages.map((p) => p.slug);
  } catch { return []; }
}

/* ── Helpers ── */

export function getTIFeaturedImage(page: TIPage): string | null {
  const media = page._embedded?.["wp:featuredmedia"]?.[0];
  if (!media) return null;
  const s = media.media_details?.sizes;
  return s?.medium_large?.source_url ?? s?.medium?.source_url ?? s?.full?.source_url ?? media.source_url ?? null;
}

export function stripTIHtml(html: string, max = 160): string {
  const plain = html
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&hellip;/g, "…").replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ").trim();
  if (plain.length <= max) return plain;
  return plain.slice(0, max).replace(/\s\S+$/, "") + "…";
}
