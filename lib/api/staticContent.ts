/**
 * Reads the pre-migrated tutorsindia.net content snapshot saved under
 * lib/data/static-content/{section}/{slug}.json — see scripts/migrate-static.
 * Replaces live fetches to tutorsindia.net for sections that have been
 * migrated to static.
 */
import fs from "fs";
import path from "path";

export interface StaticContentPage {
  url: string;
  path: string;
  section?: string;
  slug: string;
  source: string;
  title: string;
  excerpt: string;
  content: string;
  images: { src: string; local: string }[];
  featuredImage?: { src: string; local: string } | null;
  contentLen: number;
}

const DATA_ROOT = path.join(process.cwd(), "lib", "data", "static-content");

/** section = "coursework", slugSegments = ["nursing-assignment-q-and-a"] (segments after the section prefix) */
export function getStaticContent(section: string, slugSegments: string[]): StaticContentPage | null {
  const fileSlug = slugSegments.join("__") || "index";
  const filePath = path.join(DATA_ROOT, section, `${fileSlug}.json`);
  try {
    const raw = fs.readFileSync(filePath, "utf8");
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

/** For the root catch-all route — slugSegments is the full path (e.g. ["press-release", "some-article"]). */
export function getStaticRootContent(slugSegments: string[]): StaticContentPage | null {
  return getStaticContent("_root", slugSegments);
}

export function getAllStaticSlugs(section: string): string[][] {
  const dir = path.join(DATA_ROOT, section);
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => f.endsWith(".json"))
      .map((f) => f.replace(/\.json$/, "").split("__"));
  } catch {
    return [];
  }
}
