import type { MetadataRoute } from "next";

const BASE = "https://tutorsindia.com";
const ORIGINAL_SITEMAP = "https://www.tutorsindia.com/sitemap.xml";

export const revalidate = 86400; // re-fetch once per day

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const res = await fetch(ORIGINAL_SITEMAP, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept: "application/xml,text/xml,*/*",
      },
      next: { revalidate: 86400 },
    });

    if (!res.ok) throw new Error(`Sitemap fetch failed: ${res.status}`);

    const xml = await res.text();

    // Extract all <loc> URLs
    const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) =>
      m[1].trim()
    );

    // Extract lastmod per URL if present
    const entries = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => {
      const block = m[1];
      const locMatch = block.match(/<loc>([^<]+)<\/loc>/);
      const lastmodMatch = block.match(/<lastmod>([^<]+)<\/lastmod>/);
      const priorityMatch = block.match(/<priority>([^<]+)<\/priority>/);
      const changefreqMatch = block.match(/<changefreq>([^<]+)<\/changefreq>/);
      return {
        loc: locMatch ? locMatch[1].trim() : "",
        lastmod: lastmodMatch ? lastmodMatch[1].trim() : new Date().toISOString(),
        priority: priorityMatch ? parseFloat(priorityMatch[1]) : 0.6,
        changefreq: changefreqMatch
          ? (changefreqMatch[1].trim() as MetadataRoute.Sitemap[number]["changeFrequency"])
          : ("monthly" as const),
      };
    });

    // Rewrite www.tutorsindia.com → tutorsindia.com
    const mapped: MetadataRoute.Sitemap = entries
      .filter((e) => e.loc)
      .map((e) => ({
        url: e.loc.replace(/^https?:\/\/(?:www\.)?tutorsindia\.com/, BASE),
        lastModified: e.lastmod,
        changeFrequency: e.changefreq,
        priority: e.priority,
      }));

    // Deduplicate by URL
    const seen = new Set<string>();
    const deduped = mapped.filter((e) => {
      if (seen.has(e.url)) return false;
      seen.add(e.url);
      return true;
    });

    return deduped;
  } catch (err) {
    console.error("sitemap.ts: failed to fetch original sitemap", err);
    // Fallback — return just the homepage so build never fails
    return [{ url: BASE + "/", lastModified: new Date().toISOString(), priority: 1.0 }];
  }
}
