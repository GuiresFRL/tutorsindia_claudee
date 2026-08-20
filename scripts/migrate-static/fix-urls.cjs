"use strict";
const fs = require("fs");
const path = require("path");
const { DATA_ROOT } = (() => {
  const DATA_ROOT = path.join(__dirname, "..", "..", "lib", "data", "static-content");
  return { DATA_ROOT };
})();

function rewriteUrls(html) {
  let out = html;
  out = out.replace(/https?:\/\/qzg\.dmr\.mybluehost\.me/gi, "https://www.tutorsindia.com");
  out = out.replace(
    /((?:href|src|action)\s*=\s*['"]?\s*)https?:\/\/(?:www\.|test\.)?tutorsindia\.(?:com|net)\//gi,
    "$1/"
  );
  out = out.replace(
    /(url\(\s*['"]?)https?:\/\/(?:www\.|test\.)?tutorsindia\.(?:com|net)\//gi,
    "$1/"
  );
  out = out.replace(
    /((?:href|src|action)\s*=\s*['"]?\s*)https?:\/\/(?:www\.|test\.)?tutorsindia\.(?:com|net)(['"\s>])/gi,
    "$1/$2"
  );
  out = out.replace(/\s+srcset="[^"]*"/gi, "");
  out = out.replace(/\s+sizes="[^"]*"/gi, "");
  return out;
}

function walk(dir, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.name.endsWith(".json")) out.push(full);
  }
}

const files = [];
walk(DATA_ROOT, files);
console.log(`Scanning ${files.length} files...`);

let changed = 0;
for (const f of files) {
  const raw = fs.readFileSync(f, "utf8");
  let json;
  try {
    json = JSON.parse(raw);
  } catch {
    continue;
  }
  if (typeof json.content !== "string") continue;
  const before = json.content;
  const after = rewriteUrls(before);
  if (after !== before) {
    json.content = after;
    fs.writeFileSync(f, JSON.stringify(json, null, 2));
    changed++;
  }
}
console.log(`Done. ${changed} of ${files.length} files had links rewritten.`);
