"use strict";
const fs = require("fs");
const path = require("path");
const DATA_ROOT = path.join(__dirname, "..", "..", "lib", "data", "static-content");

const xml = fs.readFileSync(path.join(__dirname, "..", "..", "lib", "data", "original-sitemap.xml"), "utf8");
const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => {
  const p = m[1].replace(/^https?:\/\/(www\.)?tutorsindia\.(com|net)/, "");
  return p.endsWith("/") ? p : p + "/";
});
const known = new Set(locs);

function walk(dir, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.name.endsWith(".json")) out.push(full);
  }
}
const files = [];
walk(DATA_ROOT, files);
for (const f of files) {
  const json = JSON.parse(fs.readFileSync(f, "utf8"));
  if (json.path) known.add(json.path);
}
[
  "/", "/about-us/", "/order-now/", "/contact-us/", "/our-services/", "/subjects/",
  "/pricing/", "/our-writers/", "/testimonials/", "/faq/", "/privacy-policy/",
  "/terms-and-conditions/", "/blog/", "/academy/", "/search/", "/our-process/", "/guarantees/",
].forEach((p) => known.add(p));

const refs = new Map();
const FILE_EXT_RE = /\.(pdf|jpe?g|png|webp|gif|docx?|xlsx?|zip)$/i;
for (const f of files) {
  const json = JSON.parse(fs.readFileSync(f, "utf8"));
  if (typeof json.content !== "string") continue;
  const re = /href="(\/[^"#?]*)"/gi;
  let m;
  while ((m = re.exec(json.content))) {
    let p = m[1];
    if (FILE_EXT_RE.test(p)) continue;
    if (p.includes("\n")) continue;
    if (!p.endsWith("/")) p += "/";
    if (p.startsWith("/static-content/")) continue;
    if (p.startsWith("/category/")) continue;
    if (p === "/test/") continue;
    if (p.startsWith("/academy/")) continue; // Payload-managed, checked separately
    if (p.startsWith("//")) continue; // protocol-relative external asset, not an internal link
    if (!refs.has(p)) refs.set(p, []);
    if (refs.get(p).length < 3) refs.get(p).push(path.relative(DATA_ROOT, f).split(path.sep).join("/"));
  }
}

const unknown = [];
for (const [p, srcFiles] of refs) {
  if (!known.has(p)) unknown.push({ p, srcFiles });
}
unknown.sort((a, b) => a.p.localeCompare(b.p));
const lines = unknown.map((u) => u.p + "   <-- found in: " + u.srcFiles.join(", "));
fs.writeFileSync(path.join(__dirname, "..", "..", "broken_internal_links.txt"), lines.join("\n"));
console.log("total (excluding /category/ and /test/):", unknown.length);
