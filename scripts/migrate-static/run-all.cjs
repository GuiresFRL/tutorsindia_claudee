"use strict";
const fs = require("fs");
const path = require("path");
const {
  getTIPageBySlug,
  getTIPostBySlug,
  fetchProxiedLibraryPage,
  cleanElementorHtml,
  localizeImages,
  stripTIHtml,
  DATA_DIR,
  REPO_ROOT,
} = require("./lib.cjs");

const URL_LIST_PATH = path.join(REPO_ROOT, "..", "tutorsindia_net_dependent_urls_575.txt");
const SECTIONS = [
  "essays", "library", "title", "topic", "insights", "marketing", "qa-forum",
  "our-sample-works", "coursework", "help-guide", "referencing-and-citation-manual-of-styles",
  "examples", "infographics", "future-research-directions", "latest-research-trends",
  "storyboard", "topic-selection-sample-work",
];

function slugToTitle(slug) {
  return slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

function loadUrls() {
  const raw = fs.readFileSync(URL_LIST_PATH, "utf8").trim().split("\n");
  return raw.map((u) => {
    const p = u.replace(/^https?:\/\/(www\.)?tutorsindia\.com/, "").replace(/\/$/, "") + "/";
    const segs = p.split("/").filter(Boolean);
    const section = segs[0] || "root";
    const slug = segs[segs.length - 1] || "";
    return { url: u, path: p, section, slug, segs };
  });
}

async function migrateOne(entry) {
  const { path: path_, slug, section } = entry;

  const wpPage = await getTIPageBySlug(slug);
  const rawWpPage = wpPage?.content?.rendered?.trim() ?? "";
  const wpPageContent = rawWpPage.length >= 50 ? cleanElementorHtml(rawWpPage) : "";

  let wpPost = null, wpPostContent = "";
  if (wpPageContent.length < 200) {
    wpPost = await getTIPostBySlug(slug);
    const rawWpPost = wpPost?.content?.rendered?.trim() ?? "";
    wpPostContent = rawWpPost.length >= 50 ? cleanElementorHtml(rawWpPost) : "";
  }

  let source, title, content, excerptSrc;
  if (wpPageContent.length >= 200) {
    source = "wp-rest-page";
    title = wpPage.title?.rendered ? wpPage.title.rendered.replace(/<[^>]+>/g, "") : slugToTitle(slug);
    content = wpPageContent;
    excerptSrc = wpPage.excerpt?.rendered || content;
  } else if (wpPostContent.length >= 200) {
    source = "wp-rest-post";
    title = wpPost.title?.rendered ? wpPost.title.rendered.replace(/<[^>]+>/g, "") : slugToTitle(slug);
    content = wpPostContent;
    excerptSrc = wpPost.excerpt?.rendered || content;
  } else {
    const proxied = await fetchProxiedLibraryPage(path_);
    source = proxied ? "proxy-scrape" : "empty";
    title = proxied?.title || slugToTitle(slug);
    content = proxied?.content ?? "";
    excerptSrc = content;
  }

  const { content: localized, images } = await localizeImages(content);
  const excerpt = stripTIHtml(excerptSrc, 160);

  const outDir = path.join(DATA_DIR, section);
  fs.mkdirSync(outDir, { recursive: true });
  const fileSlug = entry.segs.slice(1).join("__") || "index";
  fs.writeFileSync(
    path.join(outDir, `${fileSlug}.json`),
    JSON.stringify({ url: entry.url, path: path_, section, slug, source, title, excerpt, content: localized, images, contentLen: content.length }, null, 2)
  );

  return { url: entry.url, source, contentLen: content.length, images: images.length };
}

async function main() {
  const onlySection = process.argv[2]; // optional: node run-all.cjs library
  const startAt = parseInt(process.argv[3] || "0", 10);
  const limit = parseInt(process.argv[4] || "999999", 10);

  let entries = loadUrls().filter((e) => SECTIONS.includes(e.section));
  if (onlySection) entries = entries.filter((e) => e.section === onlySection);
  entries = entries.slice(startAt, startAt + limit);

  console.log(`Processing ${entries.length} URLs${onlySection ? ` (section=${onlySection})` : ""}...`);

  const results = [];
  const empties = [];
  let i = 0;
  for (const entry of entries) {
    i++;
    try {
      const r = await migrateOne(entry);
      results.push(r);
      const flag = r.contentLen < 100 ? " ⚠ EMPTY" : "";
      if (flag) empties.push(r.url);
      console.log(`[${i}/${entries.length}] ${r.source.padEnd(14)} len=${String(r.contentLen).padStart(6)} imgs=${r.images}${flag}  ${entry.url}`);
    } catch (e) {
      console.log(`[${i}/${entries.length}] ERROR ${entry.url}: ${e.message}`);
      empties.push(entry.url);
    }
  }

  console.log(`\nDone. ${results.length} processed, ${empties.length} empty/error.`);
  if (empties.length) {
    console.log("EMPTY/ERROR URLs:");
    empties.forEach((u) => console.log("  " + u));
  }
}

main();
