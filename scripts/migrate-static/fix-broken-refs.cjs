"use strict";
const fs = require("fs");
const path = require("path");
const DATA_ROOT = path.join(__dirname, "..", "..", "lib", "data", "static-content");

const QA_SLUGS = [
  "statistical-test-selection-research-design", "hypothesis-formulation-testing-support",
  "likert-scale-data-analysis", "statistical-analysis-software-options",
  "p-values-confidence-intervals-explained", "anova-vs-ttest-difference",
  "linear-regression-appropriateness", "logistic-regression-output-interpretation",
  "factor-analysis-pca-survey-data", "structural-equation-modeling-dissertation",
  "time-series-analysis-services", "bayesian-analysis-introduction",
  "statistical-method-justification", "results-interpretation-assistance",
  "ethical-plagiarism-free-assistance", "how-do-i-start-my-nursing-assignment-introduction",
  "what-kind-of-evidence-should-i-use-in-a-nursing-assignment",
  "what-does-critical-analysis-mean-in-a-nursing-essay",
  "what-citation-style-should-i-follow-in-uk-nursing-assignments",
  "can-i-include-case-studies-or-patient-examples-in-my-assignment",
  "what-common-mistakes-do-i-have-to-avoid-in-nursing-assignments",
  "how-do-i-integrate-nursing-models-like-gibbs-reflective-cycle",
  "where-can-i-get-help-if-im-struggling-with-my-nursing-assignment",
  "how-do-i-manage-word-count-effectively",
  "what-is-the-ideal-structure-for-a-nursing-assignment-in-the-uk",
];

// Known-dead internal links, ported from lib/cleanElementor.ts's
// BROKEN_LINK_PATHS, plus a few more confirmed dead against both
// tutorsindia.net and this site directly — unwrap the <a>, keep the text.
const DEAD_LINKS = [
  "/library/essay-index/management-essays/application-of-theory-of-iinternational-business-a-case-study-of-mcdonald",
  "/help-guide/study-guides/guide-for-writing-medical-assignments",
  "/help-guide/study-guides-how-to-write-a-dissertation-methodology",
  "/help-guide/jkk",
  "/our-services/coursework-writing/business-plan",
  "/our-services/coursework-writing/case-study",
  "/our-services/masters-dissertation-writing-services-/dissertation-proposal-",
  "/our-services/publication-support/statistical-analysis",
  "/subjects/humanities-assignment-writing-services",
  // confirmed dead against both tutorsindia.net and this site
  "/help-guide/study-guides-how-to-write-a-critical-essay",
  "/ask-an-expert/statistics/does-hypothesis-test-ever-prove-a-null-hypothesis",
  "/our-sample-works/nursing-literature-review-test",
];

// href -> href exact replacements for links that point at the wrong
// (old/renamed) URL but the content genuinely exists at a different path.
const REMAPS = {
  "/help-guide/study-guides-how-to-write-a-critical-essay/": null, // handled by DEAD_LINKS above
  "/study-guides/what-is-the-need-for-peer-reviewing-a-research-paper/": "/help-guide/study-guides/what-is-the-need-for-peer-reviewing-a-research-paper/",
  "/blog/future-research-in-analytics-driven-supply-chain/": "/insights/r-and-d/future-research-direction/future-research-in-analytics-driven-supply-chain/",
  "/insights/dissertation-journey/": "/dissertation-journey/",
  "/insights/essay-journey/": "/essay-journey/",
  "/our-services/assignment-writing/": "/our-services/coursework-writing/assignment-writing-services/",
  "/our-services/coursework-writing/assignment-writing-services/evaluating-public-relations-practice/": "/our-services/coursework-writing/assignment-writing-services/",
  "/our-services/development/coding-and-algorithm/artificial-intelligence-ml/": "/our-services/development/coding-and-algorithm/",
  "/our-services/references-collection/": "/our-services/editing-services/citation-compliance/",
  "/our-services/statistics-analysis/": "/our-services/publication-support/statistical-services/",
  "/our-services/data-collection/": "/our-services/", // already redirects via next.config.ts; point directly
  "/insights/brochure/": "/brochure/",
  "/insights/infographics/": "/infographics/",
  "/insights/recent-trends/": "/recent-trends/",
  "/insights/recent-trends": "/recent-trends/",
  "/insights/storyboard/": "/storyboard/",
  "/insights/videos-and-gif/": "/videos-and-gif/",
  "/insights/press-release/": "/insights/",
  "/news/": "/insights/news/",
  "/our-sample-works/the-evolution-of-monopoly-theory/.%20https:/www.econlib.org/library/Smith/smWN.html": "https://www.econlib.org/library/Smith/smWN.html",
};

function walk(dir, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.name.endsWith(".json")) out.push(full);
  }
}

function unwrapDeadLinks(html) {
  return html.replace(/<a\s+[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi, (match, href, inner) => {
    const p = href.replace(/^https?:\/\/(?:www\.)?tutorsindia\.com/, "").replace(/\/$/, "");
    return DEAD_LINKS.includes(p) ? inner : match;
  });
}

const files = [];
walk(DATA_ROOT, files);
let filesChanged = 0, qaLinksFixed = 0, titleLinksFixed = 0, deadLinksFixed = 0, remapsApplied = 0;
const qaRe = new RegExp(QA_SLUGS.map((s) => `href="/${s}/?"`).join("|"), "gi");

for (const f of files) {
  const raw = fs.readFileSync(f, "utf8");
  let json;
  try { json = JSON.parse(raw); } catch { continue; }
  if (typeof json.content !== "string") continue;
  let content = json.content;
  const before = content;

  qaLinksFixed += (content.match(qaRe) || []).length;
  for (const slug of QA_SLUGS) {
    const re = new RegExp(`href="/${slug}/?"`, "gi");
    content = content.replace(re, `href="/qa-forum/${slug}/"`);
  }

  const titleRe1 = /href="\/title\/biology-latest-titles(?:%20|\s)accessed(?:%20|\s)20(?:%20|\s)May(?:%20|\s)2025\/?"/gi;
  const titleRe2 = /href="\/title\/toursim-and-climate-change-titles\/?"/gi;
  titleLinksFixed += (content.match(titleRe1) || []).length + (content.match(titleRe2) || []).length;
  content = content.replace(titleRe1, 'href="/title/biology-latest-titles/"');
  content = content.replace(titleRe2, 'href="/title/tourism-and-climate-change-titles/"');

  const deadBefore = content;
  content = unwrapDeadLinks(content);
  if (content !== deadBefore) deadLinksFixed++;

  const remapBefore = content;
  for (const [from, to] of Object.entries(REMAPS)) {
    if (!to) continue;
    content = content.split(`href="${from}"`).join(`href="${to}"`);
  }
  if (content !== remapBefore) remapsApplied++;

  if (content !== before) {
    json.content = content;
    fs.writeFileSync(f, JSON.stringify(json, null, 2));
    filesChanged++;
  }
}

console.log(`Files changed: ${filesChanged}`);
console.log(`qa-forum links prefixed: ${qaLinksFixed}`);
console.log(`title link typos fixed: ${titleLinksFixed}`);
console.log(`dead links unwrapped: ${deadLinksFixed}`);
console.log(`remapped links fixed: ${remapsApplied}`);
