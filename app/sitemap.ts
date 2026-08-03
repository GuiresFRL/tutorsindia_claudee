import type { MetadataRoute } from "next";
import { readFileSync } from "fs";
import { join } from "path";
import { getAllPostSlugs } from "@/lib/api/wordpress";
import { getAllAcademySlugsWithCategory } from "@/lib/api/academy";

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
      // instead — drop the stale snapshot versions so new posts aren't
      // shadowed by old ones. Section index pages (/blog/, /academy/) stay.
      .filter((loc) => !/\/(blog|academy)\/[^/]+\/?$/.test(loc))
      .map((loc) => {
        let normalised = loc.replace(/^https?:\/\/(?:www\.)?tutorsindia\.com/, BASE);
        if (!normalised.endsWith("/")) normalised += "/";
        return { url: normalised, lastModified: now, priority: 0.6, changeFrequency: "monthly" as const };
      });
  } catch (err) {
    console.error("sitemap.ts: failed to read original sitemap", err);
  }

  // Live blog + academy posts — ensures posts published after the static
  // snapshot was taken (or at any point going forward) appear automatically.
  const [blogSlugs, academyPairs] = await Promise.all([
    getAllPostSlugs(),
    getAllAcademySlugsWithCategory(),
  ]);

  const blogEntries: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE}/blog/${slug}/`,
    lastModified: now,
    priority: 0.7,
    changeFrequency: "weekly",
  }));

  // Nested /academy/{category}/{slug}/ URLs, matching WordPress's own
  // permalink structure — the category segment is whichever category WP
  // itself resolves the post's link to, so multi-category posts are
  // unambiguous.
  const academyEntries: MetadataRoute.Sitemap = academyPairs.map(({ category, slug }) => ({
    url: `${BASE}/academy/${category}/${slug}/`,
    lastModified: now,
    priority: 0.7,
    changeFrequency: "weekly",
  }));

  const combined = [...staticEntries, ...blogEntries, ...academyEntries];

  // Deduplicate by URL (last occurrence wins)
  const seen = new Map<string, MetadataRoute.Sitemap[number]>();
  for (const entry of combined) seen.set(entry.url, entry);

  const deduped = [...seen.values()];
  return deduped.length ? deduped : [{ url: `${BASE}/`, lastModified: now, priority: 1.0 }];
}
