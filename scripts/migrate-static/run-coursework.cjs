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
} = require("./lib.cjs");

const SLUGS = [
  "nursing-assignment-q-and-a",
  "statistical-analysis",
  "how-to-write-a-clear-focused-thesis-statement-with-examples",
  "biology-titles",
];

function slugToTitle(slug) {
  return slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

async function migrateOne(slug) {
  const path_ = `/coursework/${slug}/`;
  console.log(`\n--- ${path_} ---`);

  const wpPage = await getTIPageBySlug(slug);
  const rawWpPage = wpPage?.content?.rendered?.trim() ?? "";
  const wpPageContent = rawWpPage.length >= 50 ? cleanElementorHtml(rawWpPage) : "";

  const wpPost = wpPageContent.length < 200 ? await getTIPostBySlug(slug) : null;
  const rawWpPost = wpPost?.content?.rendered?.trim() ?? "";
  const wpPostContent = rawWpPost.length >= 50 ? cleanElementorHtml(rawWpPost) : "";

  let source, title, content;
  if (wpPageContent.length >= 200) {
    source = "wp-rest-page";
    title = wpPage.title?.rendered ? wpPage.title.rendered.replace(/<[^>]+>/g, "") : slugToTitle(slug);
    content = wpPageContent;
  } else if (wpPostContent.length >= 200) {
    source = "wp-rest-post";
    title = wpPost.title?.rendered ? wpPost.title.rendered.replace(/<[^>]+>/g, "") : slugToTitle(slug);
    content = wpPostContent;
  } else {
    const proxied = await fetchProxiedLibraryPage(path_);
    source = "proxy-scrape";
    title = proxied?.title || slugToTitle(slug);
    content = proxied?.content ?? "";
  }

  console.log(`source=${source} title="${title}" contentLen=${content.length}`);

  const { content: localized, images } = await localizeImages(content);
  console.log(`images found+downloaded: ${images.length}`);
  images.forEach((i) => console.log(`  ${i.src} -> ${i.local}`));

  const excerpt = stripTIHtml(content, 160);

  const outDir = path.join(DATA_DIR, "coursework");
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(
    path.join(outDir, `${slug}.json`),
    JSON.stringify({ slug, path: path_, source, title, excerpt, content: localized, images }, null, 2)
  );
  console.log(`saved -> lib/data/static-content/coursework/${slug}.json`);
}

(async () => {
  for (const slug of SLUGS) {
    await migrateOne(slug);
  }
})();
