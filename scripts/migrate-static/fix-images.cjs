"use strict";
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const DATA_ROOT = path.join(__dirname, "..", "..", "lib", "data", "static-content");
const IMG_DIR = path.join(__dirname, "..", "..", "public", "static-content", "images");
const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

function walk(dir, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.name.endsWith(".json")) out.push(full);
  }
}

async function downloadImage(srcUrl, attempt = 1) {
  try {
    const res = await fetch(srcUrl, { headers: { "User-Agent": UA } });
    if (!res.ok) {
      if (attempt < 3) {
        await new Promise((r) => setTimeout(r, 400 * attempt));
        return downloadImage(srcUrl, attempt + 1);
      }
      return null;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    const ext = (path.extname(new URL(srcUrl).pathname) || ".jpg").split("?")[0].slice(0, 6) || ".jpg";
    const hash = crypto.createHash("sha1").update(srcUrl).digest("hex").slice(0, 16);
    const filename = `${hash}${ext}`;
    fs.mkdirSync(IMG_DIR, { recursive: true });
    fs.writeFileSync(path.join(IMG_DIR, filename), buf);
    return `/static-content/images/${filename}`;
  } catch {
    if (attempt < 3) {
      await new Promise((r) => setTimeout(r, 400 * attempt));
      return downloadImage(srcUrl, attempt + 1);
    }
    return null;
  }
}

function absoluteUrl(src) {
  if (/^https?:\/\//i.test(src)) return src;
  if (src.startsWith("/")) return `https://tutorsindia.net${src}`;
  return null;
}

async function main() {
  const files = [];
  walk(DATA_ROOT, files);
  console.log(`Scanning ${files.length} files for un-localized images...`);

  let totalFound = 0, totalDownloaded = 0, totalFailed = 0, filesChanged = 0;
  const failures = [];

  for (const f of files) {
    const json = JSON.parse(fs.readFileSync(f, "utf8"));
    if (typeof json.content !== "string") continue;

    const found = new Set();
    const imgSrcRe = /<img[^>]+src="([^"]+)"/gi;
    const bgRe = /background-image:\s*url\((['"]?)([^'")]+)\1\)/gi;
    let m;
    while ((m = imgSrcRe.exec(json.content))) found.add(m[1]);
    while ((m = bgRe.exec(json.content))) found.add(m[2]);

    const rewriteMap = new Map();
    let fileChanged = false;

    for (const src of found) {
      if (src.startsWith("/static-content/")) continue; // already localized
      const isTIHost = /tutorsindia\.(com|net)/i.test(src) || src.startsWith("/wp-content") || src.startsWith("/blog/wp-content") || src.startsWith("/academy/wp-content");
      if (!isTIHost) continue;
      const abs = absoluteUrl(src);
      if (!abs) continue;
      totalFound++;
      const local = await downloadImage(abs);
      if (local) {
        totalDownloaded++;
        rewriteMap.set(src, local);
        if (!json.images.some((i) => i.local === local)) {
          json.images.push({ src: abs, local });
        }
        fileChanged = true;
      } else {
        totalFailed++;
        failures.push({ file: path.relative(DATA_ROOT, f), url: abs });
      }
    }

    if (fileChanged) {
      let content = json.content;
      for (const [orig, local] of rewriteMap) content = content.split(orig).join(local);
      json.content = content;
      fs.writeFileSync(f, JSON.stringify(json, null, 2));
      filesChanged++;
    }
  }

  console.log(`\nDone. Found ${totalFound} un-localized image refs across ${filesChanged} files.`);
  console.log(`Downloaded: ${totalDownloaded}, Failed: ${totalFailed}`);
  if (failures.length) {
    console.log("\nFAILURES:");
    failures.forEach((x) => console.log(" ", x.file, "=>", x.url));
  }
}

main();
