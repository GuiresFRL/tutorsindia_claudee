"use strict";
const fs = require("fs");
const path = require("path");
const DATA_ROOT = path.join(__dirname, "..", "..", "lib", "data", "static-content");

// Safe, unambiguous typo fixes found in the original WordPress content —
// these are obviously-mistyped internal hrefs, not ambiguous scope gaps.
const FIXES = [
  [/href="\/help-guid\/study-guides\//gi, 'href="/help-guide/study-guides/'],
  [/href="\/help-guidetudy-guides-test\//gi, 'href="/help-guide/study-guides/'],
  [/href="\/our-sample-works-test\//gi, 'href="/our-sample-works/'],
];

function walk(dir, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.name.endsWith(".json")) out.push(full);
  }
}

const files = [];
walk(DATA_ROOT, files);
let changed = 0;
for (const f of files) {
  const raw = fs.readFileSync(f, "utf8");
  let json;
  try { json = JSON.parse(raw); } catch { continue; }
  if (typeof json.content !== "string") continue;
  let content = json.content;
  let touched = false;
  for (const [re, replacement] of FIXES) {
    const next = content.replace(re, replacement);
    if (next !== content) { content = next; touched = true; }
  }
  if (touched) {
    json.content = content;
    fs.writeFileSync(f, JSON.stringify(json, null, 2));
    changed++;
  }
}
console.log(`Fixed obvious typo'd links in ${changed} files.`);
