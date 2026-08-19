// Shared helpers for the tutorsindia.net -> static-content migration scripts.
"use strict";
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const TI_API = "https://www.tutorsindia.net/wp-json/wp/v2";
const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const IMG_DIR = path.join(REPO_ROOT, "public", "static-content", "images");
const DATA_DIR = path.join(REPO_ROOT, "lib", "data", "static-content");

async function getTIPageBySlug(slug) {
  try {
    const res = await fetch(`${TI_API}/pages?slug=${encodeURIComponent(slug)}&_embed&status=publish`, {
      headers: { Accept: "application/json" },
    });
    if (!res.ok) return null;
    const pages = await res.json();
    return pages[0] ?? null;
  } catch {
    return null;
  }
}

async function getTIPostBySlug(slug) {
  try {
    const res = await fetch(`${TI_API}/posts?slug=${encodeURIComponent(slug)}&_embed&status=publish`, {
      headers: { Accept: "application/json" },
    });
    if (!res.ok) return null;
    const posts = await res.json();
    return posts[0] ?? null;
  } catch {
    return null;
  }
}

// --- ported from lib/api/proxyPage.ts ---
function extractDivByClass(html, classSubstring) {
  const searchStr = 'class="';
  let pos = 0;
  while (pos < html.length) {
    const classIdx = html.indexOf(searchStr, pos);
    if (classIdx === -1) return null;
    const classEnd = html.indexOf('"', classIdx + searchStr.length);
    const classVal = html.slice(classIdx + searchStr.length, classEnd);
    if (classVal.includes(classSubstring)) {
      const divStart = html.lastIndexOf("<div", classIdx);
      if (divStart === -1) { pos = classEnd; continue; }
      const openEnd = html.indexOf(">", divStart) + 1;
      let depth = 1;
      let cursor = openEnd;
      while (depth > 0 && cursor < html.length) {
        const nextOpen = html.indexOf("<div", cursor);
        const nextClose = html.indexOf("</div>", cursor);
        if (nextClose === -1) break;
        if (nextOpen !== -1 && nextOpen < nextClose) { depth++; cursor = nextOpen + 4; }
        else { depth--; cursor = nextClose + 6; }
      }
      return html.slice(divStart, cursor);
    }
    pos = classEnd + 1;
  }
  return null;
}

function removeDivsByClass(html, classSubstring) {
  let result = html;
  let found = extractDivByClass(result, classSubstring);
  while (found) {
    result = result.replace(found, "");
    found = extractDivByClass(result, classSubstring);
  }
  return result;
}

function removeScripts(html) { return html.replace(/<script[\s\S]*?<\/script>/gi, ""); }

function removeDecorativeSections(html) {
  let result = html;
  const openTagRe = /<div\s+class="section mcb-section[^"]*"[^>]*>/g;
  let match;
  const toRemove = [];
  while ((match = openTagRe.exec(result)) !== null) {
    const openTag = match[0];
    if (!openTag.includes("background-image:")) continue;
    const start = match.index;
    const afterOpen = start + openTag.length;
    let depth = 1;
    let cursor = afterOpen;
    while (depth > 0 && cursor < result.length) {
      const nextOpen = result.indexOf("<div", cursor);
      const nextClose = result.indexOf("</div>", cursor);
      if (nextClose === -1) break;
      if (nextOpen !== -1 && nextOpen < nextClose) { depth++; cursor = nextOpen + 4; }
      else { depth--; cursor = nextClose + 6; }
    }
    const block = result.slice(start, cursor);
    const textContent = block.replace(/<br\s*\/?>/gi, "").replace(/<[^>]+>/g, "").trim();
    if (textContent.length < 50) toRemove.push(block);
  }
  for (const block of toRemove) result = result.replace(block, "");
  return result;
}

function collapseLineBreaks(html) { return html.replace(/(<br\s*\/?>\s*){3,}/gi, "<br>"); }
function removeLeadingBreaks(html) { return html.replace(/(<div class="column_attr[^"]*"[^>]*>)\s*(<br\s*\/?>\s*)+/gi, "$1"); }
function removePageFooter(html) { return html.replace(/<div class="section section-page-footer">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/, ""); }

async function fetchProxiedLibraryPage(pagePath) {
  const normalised = pagePath.endsWith("/") ? pagePath : `${pagePath}/`;
  const url = `https://tutorsindia.net${normalised}`;
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": UA, Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "Accept-Language": "en-GB,en;q=0.9" },
    });
    if (!res.ok) return null;
    const html = await res.text();
    const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
    const title = titleMatch ? titleMatch[1].replace(/\s*[|\-–]\s*Tutors\s*India.*/i, "").trim() : "";
    const entryContent = extractDivByClass(html, "entry-content");
    if (!entryContent) return { title, content: "", raw: html };
    let content = entryContent;
    content = removeDivsByClass(content, "sidebarr");
    content = removeDivsByClass(content, "rightsideidebg");
    content = removeDivsByClass(content, "ppc-menu");
    content = removeScripts(content);
    content = removeDecorativeSections(content);
    content = removePageFooter(content);
    content = collapseLineBreaks(content);
    content = removeLeadingBreaks(content);
    return { title, content, raw: html };
  } catch (e) {
    return null;
  }
}

// --- ported from lib/cleanElementor.ts (URL-rewrite/broken-link steps omitted; handled separately) ---
function cleanElementorHtml(html) {
  let clean = html;
  clean = clean.replace(/<(script|style|noscript)[^>]*>[\s\S]*?<\/\1>/gi, "");
  clean = clean.replace(/<svg[\s\S]*?<\/svg>/gi, "");
  const uiWidgets = [
    "elementor-widget-image-box", "elementor-widget-icon-list", "elementor-widget-social-icons",
    "elementor-widget-breadcrumbs", "elementor-widget-button", "ppc-menu", "sidebarr",
    "rightsideidebg", "nav-menu", "site-footer", "section-page-footer",
  ];
  for (const cls of uiWidgets) {
    const re = new RegExp(`<div[^>]*class="[^"]*${cls}[^"]*"[^>]*>[\\s\\S]*?<\\/div>`, "gi");
    clean = clean.replace(re, "");
  }
  clean = clean.replace(/<ul[^>]*class="[^"]*elementor-icon-list[^"]*"[^>]*>[\s\S]*?<\/ul>/gi, "");
  clean = clean.replace(/<li[^>]*class="[^"]*elementor[^"]*"[^>]*>[\s\S]*?<\/li>/gi, "");
  clean = clean.replace(/<span[^>]*class="[^"]*elementor-icon[^"]*"[^>]*>[\s\S]*?<\/span>/gi, "");
  clean = clean.replace(/<\/?section[^>]*>/gi, "");
  clean = clean.replace(/<\/?div[^>]*>/gi, "");
  clean = clean.replace(/src="[^"]*placeholder[^"]*"\s+data-src="([^"]+)"/gi, 'src="$1"');
  clean = clean.replace(/data-lazy-src="([^"]+)"/gi, 'src="$1"');
  clean = clean.replace(/data-src="([^"]+)"/gi, 'src="$1"');
  clean = clean.replace(/\s+class="[^"]*elementor[^"]*"/gi, "");
  clean = clean.replace(/\s+data-[a-z-]+="[^"]*"/gi, "");
  clean = clean.replace(/<p[^>]*>[\s]*(&nbsp;|\s)*[\s]*<\/p>/gi, "");
  clean = clean.replace(/<(h[1-6])[^>]*>\s*<\/\1>/gi, "");
  clean = clean.replace(/\n{3,}/g, "\n\n").trim();
  return clean;
}

// --- image download + rewrite ---
const imgCache = new Map(); // url -> local path (dedupe across pages)

async function downloadImage(srcUrl) {
  if (imgCache.has(srcUrl)) return imgCache.get(srcUrl);
  try {
    const res = await fetch(srcUrl, { headers: { "User-Agent": UA } });
    if (!res.ok) return null;
    const buf = Buffer.from(await res.arrayBuffer());
    const ext = (path.extname(new URL(srcUrl).pathname) || ".jpg").split("?")[0].slice(0, 5) || ".jpg";
    const hash = crypto.createHash("sha1").update(srcUrl).digest("hex").slice(0, 16);
    const filename = `${hash}${ext}`;
    fs.mkdirSync(IMG_DIR, { recursive: true });
    fs.writeFileSync(path.join(IMG_DIR, filename), buf);
    const localPath = `/static-content/images/${filename}`;
    imgCache.set(srcUrl, localPath);
    return localPath;
  } catch {
    return null;
  }
}

function absoluteUrl(src) {
  if (/^https?:\/\//i.test(src)) return src;
  if (src.startsWith("/")) return `https://tutorsindia.net${src}`;
  return null;
}

/** Find every img src / background-image url pointing at tutorsindia.(com|net), download it, rewrite content to local path. Returns { content, images: [{src, local}] }. */
async function localizeImages(html) {
  const found = new Set();
  const imgSrcRe = /<img[^>]+src="([^"]+)"/gi;
  const bgRe = /background-image:\s*url\((['"]?)([^'")]+)\1\)/gi;
  let m;
  while ((m = imgSrcRe.exec(html))) found.add(m[1]);
  while ((m = bgRe.exec(html))) found.add(m[2]);

  const rewriteMap = new Map();
  const images = [];
  for (const src of found) {
    const isTIHost = /tutorsindia\.(com|net)/i.test(src) || src.startsWith("/wp-content") || src.startsWith("/blog/wp-content") || src.startsWith("/academy/wp-content");
    if (!isTIHost) continue;
    const abs = absoluteUrl(src);
    if (!abs) continue;
    const local = await downloadImage(abs);
    if (local) {
      rewriteMap.set(src, local);
      images.push({ src: abs, local });
    }
  }

  let content = html;
  for (const [orig, local] of rewriteMap) {
    content = content.split(orig).join(local);
  }
  return { content, images };
}

function getTIFeaturedImage(wpContent) {
  const media = wpContent?._embedded?.["wp:featuredmedia"]?.[0];
  if (!media) return null;
  const s = media.media_details?.sizes;
  return s?.medium_large?.source_url ?? s?.medium?.source_url ?? s?.full?.source_url ?? media.source_url ?? null;
}

function stripTIHtml(html, max = 160) {
  const plain = html
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&hellip;/g, "…").replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ").trim();
  if (plain.length <= max) return plain;
  return plain.slice(0, max).replace(/\s\S+$/, "") + "…";
}

module.exports = {
  getTIPageBySlug,
  getTIPostBySlug,
  fetchProxiedLibraryPage,
  cleanElementorHtml,
  localizeImages,
  downloadImage,
  getTIFeaturedImage,
  stripTIHtml,
  DATA_DIR,
  IMG_DIR,
  REPO_ROOT,
};
