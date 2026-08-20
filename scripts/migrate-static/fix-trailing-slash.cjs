"use strict";
const fs = require("fs");
const path = require("path");
const DATA_ROOT = path.join(__dirname, "..", "..", "lib", "data", "static-content");
const FILE_EXT_RE = /\.(pdf|jpe?g|png|webp|gif|docx?|xlsx?|zip|css|js)$/i;

function walk(dir, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.name.endsWith(".json")) out.push(full);
  }
}

const files = [];
walk(DATA_ROOT, files);
let filesChanged = 0, linksFixed = 0;

for (const f of files) {
  const json = JSON.parse(fs.readFileSync(f, "utf8"));
  if (typeof json.content !== "string") continue;
  const before = json.content;
  const content = before.replace(/href="(\/[^"#?]*[a-zA-Z0-9])"/g, (match, p) => {
    if (FILE_EXT_RE.test(p) || p.startsWith("/static-content/")) return match;
    linksFixed++;
    return `href="${p}/"`;
  });
  if (content !== before) {
    json.content = content;
    fs.writeFileSync(f, JSON.stringify(json, null, 2));
    filesChanged++;
  }
}
console.log(`Files changed: ${filesChanged}, links fixed: ${linksFixed}`);
