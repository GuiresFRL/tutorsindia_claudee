import type { MetadataRoute } from "next";
import { readFileSync } from "fs";
import { join } from "path";
import { getAllPayloadSlugs } from "@/lib/api/payload";
import { isNoindexPath } from "@/lib/data/noindex-paths";

const BASE = "https://www.tutorsindia.com";

export const revalidate = 3600; // re-check for new blog/academy posts hourly

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date().toISOString();

  // The original WordPress-era sitemap.xml is bundled locally — the domain
  // it used to live at (www.tutorsindia.com) is now this deployment itself,
  // so fetching it live would be a self-referencing request. This covers
  // every static/service/subject page, but predates current blog/academy
  // content, so those two sections are fetched live below instead.
  let staticEntries: MetadataRoute.Sitemap = [];
  try {
    const xml = readFileSync(
      join(process.cwd(), "lib/data/original-sitemap.xml"),
      "utf-8"
    );
    const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());

    staticEntries = locs
      // Individual blog/academy post URLs come from the live WP fetch below
      // instead — drop every stale snapshot URL under those sections (blog
      // is flat, academy can be nested 1+ segments deep) so old/duplicate
      // paths don't sit alongside the live-fetched ones. Section index
      // pages (/blog/, /academy/) themselves are kept.
      .filter((loc) => !/\/blog\/[^/]+\/?$/.test(loc) && !/\/academy\/.+$/.test(loc))
      .map((loc) => {
        let normalised = loc.replace(/^https?:\/\/(?:www\.)?tutorsindia\.com/, BASE);
        if (!normalised.endsWith("/")) normalised += "/";
        return { url: normalised, lastModified: now, priority: 0.6, changeFrequency: "monthly" as const };
      });
  } catch (err) {
    console.error("sitemap.ts: failed to read original sitemap", err);
  }

  // Live blog + academy posts from Payload CMS — ensures posts published
  // after the static snapshot was taken (or at any point going forward)
  // appear automatically.
  const [blogPairs, academyPairs] = await Promise.all([
    getAllPayloadSlugs("blog"),
    getAllPayloadSlugs("academy"),
  ]);

  const blogEntries: MetadataRoute.Sitemap = blogPairs.map(({ slug }) => ({
    url: `${BASE}/blog/${slug}/`,
    lastModified: now,
    priority: 0.7,
    changeFrequency: "weekly",
  }));

  // Nested /academy/{category}/{slug}/ URLs — the category segment is this
  // post's first Payload category, so multi-category posts stay unambiguous.
  const academyEntries: MetadataRoute.Sitemap = academyPairs.map(({ category, slug }) => ({
    url: `${BASE}/academy/${category}/${slug}/`,
    lastModified: now,
    priority: 0.7,
    changeFrequency: "weekly",
  }));

  const combined = [...staticEntries, ...blogEntries, ...academyEntries]
    // Explicitly excluded pages — see lib/data/noindex-paths.ts
    .filter((entry) => !isNoindexPath(entry.url.replace(BASE, "")));

  // Deduplicate by URL (last occurrence wins)
  const seen = new Map<string, MetadataRoute.Sitemap[number]>();
  for (const entry of combined) seen.set(entry.url, entry);

  const deduped = [...seen.values()];
  return deduped.length ? deduped : [{ url: `${BASE}/`, lastModified: now, priority: 1.0 }];
}
