"use strict";
const fs = require("fs");
const path = require("path");
const {
  getTIPageBySlug,
  getTIPostBySlug,
  fetchProxiedLibraryPage,
  cleanElementorHtml,
  localizeImages,
  downloadImage,
  getTIFeaturedImage,
  stripTIHtml,
  DATA_DIR,
} = require("./lib.cjs");

function slugToTitle(slug) {
  return slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

const KNOWN_SECTIONS = [
  "essays", "library", "title", "topic", "insights", "marketing", "qa-forum",
  "our-sample-works", "coursework", "help-guide", "referencing-and-citation-manual-of-styles",
  "examples", "infographics", "future-research-directions", "latest-research-trends",
  "storyboard", "topic-selection-sample-work",
];

async function migrateOne(fullPath) {
  const p = fullPath.endsWith("/") ? fullPath : fullPath + "/";
  const segs = p.split("/").filter(Boolean);
  const section = KNOWN_SECTIONS.includes(segs[0]) ? segs[0] : "_root";
  const slugSegs = section === "_root" ? segs : segs.slice(1);
  const lastSlug = slugSegs[slugSegs.length - 1] || segs[0];

  const wpPage = await getTIPageBySlug(lastSlug);
  const wpPageContent = wpPage?.content?.rendered?.trim().length > 50 ? cleanElementorHtml(wpPage.content.rendered) : "";

  let wpPost = null, wpPostContent = "";
  if (wpPageContent.length < 200) {
    wpPost = await getTIPostBySlug(lastSlug);
    wpPostContent = wpPost?.content?.rendered?.trim().length > 50 ? cleanElementorHtml(wpPost.content.rendered) : "";
  }

  let source, title, content, featuredImageUrl = null;
  if (wpPageContent.length >= 200) {
    source = "wp-rest-page";
    title = stripTIHtml(wpPage.title.rendered);
    content = wpPageContent;
    featuredImageUrl = getTIFeaturedImage(wpPage);
  } else if (wpPostContent.length >= 200) {
    source = "wp-rest-post";
    title = stripTIHtml(wpPost.title.rendered);
    content = wpPostContent;
    featuredImageUrl = getTIFeaturedImage(wpPost);
  } else {
    const proxied = await fetchProxiedLibraryPage(p);
    source = proxied ? "proxy-scrape" : "empty";
    title = proxied?.title || slugToTitle(lastSlug);
    content = proxied?.content ?? "";
  }

  const { content: localized, images } = await localizeImages(content);
  let featuredImage = null;
  if (featuredImageUrl) {
    const local = await downloadImage(featuredImageUrl);
    if (local) featuredImage = { src: featuredImageUrl, local };
  }
  const excerpt = stripTIHtml(content, 160);

  const outDir = path.join(DATA_DIR, section);
  fs.mkdirSync(outDir, { recursive: true });
  const fileSlug = slugSegs.join("__") || "index";
  fs.writeFileSync(
    path.join(outDir, `${fileSlug}.json`),
    JSON.stringify({ url: `https://www.tutorsindia.com${p}`, path: p, section, slug: lastSlug, source, title, excerpt, content: localized, images, featuredImage, contentLen: content.length }, null, 2)
  );
  return { path: p, section, fileSlug, source, contentLen: content.length, images: images.length };
}

async function main() {
  const paths = require("./final_migrate_list.json");
  console.log(`Migrating ${paths.length} additional URLs...`);
  let i = 0;
  const empties = [];
  for (const p of paths) {
    i++;
    try {
      const r = await migrateOne(p);
      const flag = r.contentLen < 100 ? " ⚠ EMPTY" : "";
      if (flag) empties.push(p);
      console.log(`[${i}/${paths.length}] ${r.section}/${r.fileSlug}.json  source=${r.source} len=${r.contentLen} imgs=${r.images}${flag}`);
    } catch (e) {
      console.log(`[${i}/${paths.length}] ERROR ${p}: ${e.message}`);
      empties.push(p);
    }
  }
  console.log(`\nDone. ${empties.length} empty/error.`);
  empties.forEach((p) => console.log("  " + p));
}

main();
