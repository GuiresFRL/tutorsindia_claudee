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
  REPO_ROOT,
} = require("./lib.cjs");

function slugToTitle(slug) {
  return slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

function loadUrls() {
  const raw = fs.readFileSync(path.join(__dirname, "catchall_urls.txt"), "utf8").trim().split("\n");
  return raw.filter(Boolean).map((u) => {
    const p = u.replace(/^https?:\/\/(www\.)?tutorsindia\.com/, "").replace(/\/$/, "") + "/";
    const segs = p.split("/").filter(Boolean);
    const slug = segs[segs.length - 1] || "";
    return { url: u, path: p, slug, segs };
  });
}

async function migrateOne(entry) {
  const { path: path_, slug } = entry;

  const wpPage = await getTIPageBySlug(slug);
  const wpContent = wpPage?.content?.rendered?.trim().length > 50 ? wpPage : (await getTIPostBySlug(slug));
  const hasWp = wpContent && wpContent.content?.rendered?.trim().length > 50;

  let source, title, content, featuredImageUrl;
  if (hasWp) {
    source = wpContent === wpPage ? "wp-rest-page" : "wp-rest-post";
    title = stripTIHtml(wpContent.title.rendered);
    content = cleanElementorHtml(wpContent.content.rendered);
    featuredImageUrl = getTIFeaturedImage(wpContent);
  } else {
    const proxied = await fetchProxiedLibraryPage(path_);
    source = proxied ? "proxy-scrape" : "empty";
    title = proxied?.title || slugToTitle(slug);
    content = proxied?.content ?? "";
    featuredImageUrl = null;
  }

  const { content: localized, images } = await localizeImages(content);

  let featuredImage = null;
  if (featuredImageUrl) {
    const local = await downloadImage(featuredImageUrl);
    if (local) featuredImage = { src: featuredImageUrl, local };
  }

  const excerpt = stripTIHtml(content, 160);

  const outDir = path.join(DATA_DIR, "_root");
  fs.mkdirSync(outDir, { recursive: true });
  const fileSlug = entry.segs.join("__") || "index";
  fs.writeFileSync(
    path.join(outDir, `${fileSlug}.json`),
    JSON.stringify({ url: entry.url, path: path_, slug, source, title, excerpt, content: localized, images, featuredImage, contentLen: content.length }, null, 2)
  );

  return { url: entry.url, source, contentLen: content.length, images: images.length + (featuredImage ? 1 : 0) };
}

async function main() {
  const startAt = parseInt(process.argv[2] || "0", 10);
  const limit = parseInt(process.argv[3] || "999999", 10);
  const entries = loadUrls().slice(startAt, startAt + limit);
  console.log(`Processing ${entries.length} catch-all URLs...`);

  const empties = [];
  let i = 0;
  for (const entry of entries) {
    i++;
    try {
      const r = await migrateOne(entry);
      const flag = r.contentLen < 100 ? " ⚠ EMPTY" : "";
      if (flag) empties.push(r.url);
      console.log(`[${i}/${entries.length}] ${r.source.padEnd(14)} len=${String(r.contentLen).padStart(6)} imgs=${r.images}${flag}  ${entry.url}`);
    } catch (e) {
      console.log(`[${i}/${entries.length}] ERROR ${entry.url}: ${e.message}`);
      empties.push(entry.url);
    }
  }

  console.log(`\nDone. ${entries.length} processed, ${empties.length} empty/error.`);
  if (empties.length) {
    console.log("EMPTY/ERROR URLs:");
    empties.forEach((u) => console.log("  " + u));
  }
}

main();
