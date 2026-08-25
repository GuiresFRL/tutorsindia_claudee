/**
 * Pages explicitly excluded from the sitemap and marked noindex,nofollow —
 * requested directly, not derived from any migration/audit logic. Paths are
 * site-relative with a leading and trailing slash.
 */
export const NOINDEX_PATHS: string[] = [
  "/coursework/how-to-write-a-clear-focused-thesis-statement-with-examples/",
  "/help-guide/management-guides/",
  "/help-guide/referencing-help-guide/",
  "/help-guide/stages-of-a-phd/",
  "/help-guide/study-guides/dissertation/",
  "/help-guide/subject-specific-guides/engineering-coursework-help-guide/",
  "/help-guide/undergraduate-help-guides-index/",
  "/insights/check-list/",
  "/insights/news/",
  "/insights/r-and-d/latest-research-trends/",
  "/latest-research-trends/",
  "/lending-ratios/",
  "/library/conclusion-and-discussion/qualitative-results-and-discussion/",
  "/library/dissertation-index/masters-sample-work/",
  "/library/essay-index/health-and-medical/motor-evoked-potential-mep-recording-from-vocal-cords/",
  "/library/manuscript-template-for-the-international-journal-of-design/",
  "/library/research-projects/",
  "/our-sample-works/privacy-and-trust-framework-for-swarm-intelligence-in-intrusion-detection-systems-3/",
  "/help-guide/subject-specific-help-guide/",
  "/help-guide/jkk/thesis-preparation-submission/",
];

export function isNoindexPath(path: string): boolean {
  const normalized = path.endsWith("/") ? path : `${path}/`;
  return NOINDEX_PATHS.includes(normalized);
}
