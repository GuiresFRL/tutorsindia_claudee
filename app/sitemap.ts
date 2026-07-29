import type { MetadataRoute } from "next";
import { readFileSync } from "fs";
import { join } from "path";

const BASE = "https://www.tutorsindia.com";

export const revalidate = 86400; // re-read once per day

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    // The original WordPress-era sitemap.xml is bundled locally — the domain
    // it used to live at (www.tutorsindia.com) is now this deployment itself,
    // so fetching it live would be a self-referencing request.
    const xml = readFileSync(
      join(process.cwd(), "lib/data/original-sitemap.xml"),
      "utf-8"
    );

    const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) =>
      m[1].trim()
    );

   // Normalize host and keep trailing slash URLs to match Next.js trailingSlash: true
const mapped: MetadataRoute.Sitemap = locs.map((loc) => {
  let normalised = loc.replace(
    /^https?:\/\/(?:www\.)?tutorsindia\.com/,
    BASE
  );

  // Ensure all URLs have trailing slash
  if (!normalised.endsWith("/")) {
    normalised += "/";
  }

  return {
    url: normalised,
    lastModified: new Date().toISOString(),
    priority: 0.6,
    changeFrequency: "monthly",
  };
});

    // Deduplicate by URL
    const seen = new Set<string>();
    const deduped = mapped.filter((e) => {
      if (seen.has(e.url)) return false;
      seen.add(e.url);
      return true;
    });

    return deduped;
  } catch (err) {
    console.error("sitemap.ts: failed to read original sitemap", err);
return [
  {
    url: `${BASE}/`,
    lastModified: new Date().toISOString(),
    priority: 1.0,
  },
];  }
}
