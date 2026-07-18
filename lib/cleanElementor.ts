/**
 * Internal links baked into WordPress article bodies (Academy/Blog/Help Guide/QA
 * Forum content) that point at pages with no equivalent on this site — found via a
 * full-site link audit (2026-07-18). Includes malformed hrefs where a raw citation
 * or file reference was mistakenly wrapped as a link by the WP editor.
 * stripBrokenLinks() unwraps these anchors (keeps the visible text, drops the <a>).
 */
const BROKEN_LINK_PATHS = [
  "/academy/%E2%80%A2%09Braun,%20V.,%20&%20Clarke,%20V.%20(2022).%20Thematic%20analysis:%20A%20practical%20guide.%20Sage%20Publications.",
  "/academy/10.1109",
  "/academy/assignment-writing",
  "/academy/Blog-%20PA-%20E&T-%20Civil.docx",
  "/academy/business-management",
  "/academy/coding-algorithm",
  "/academy/coding-algorithms-development",
  "/academy/dissertation-part",
  "/academy/ebooks",
  "/academy/futuretopics-titles",
  "/academy/Having%20a%20robust%20methodology%20chapter%20is%20crucial%20for%20producing%20a%20high-quality%20dissertation.%20By%20applying%20the%20principles%20outlined%20in%20this%20French%20master%E2%80%99s%20Research%20Methodology%20Guide,%20students%20can%20ensure%20that%20their%20research%20demonstrates%20strong%20methodological%20clarity.",
  "/academy/how-to-article",
  "/academy/india.com",
  "/academy/manuscript-writing",
  "/academy/phd-dissertation",
  "/academy/q-and-a",
  "/academy/recent-trends",
  "/academy/research-concepts",
  "/academy/research-methodology",
  "/academy/research-papers",
  "/academy/resources",
  "/academy/tag",
  "/academy/technology-news",
  "/academy/University",
  "/academy/wp-admin",
  "/academy/wp-content",
  "/blog/2)%09Gopee,%20N.,%20&%20Deane,%20M.%20(2013).%20Strategies%20for%20successful%20academic%20writing%E2%80%94Institutional%20and%20non-institutional%20support%20for%20students.%20Nurse%20education%20today,%2033(12),%201624-1631.",
  "/blog/Dalsky,%20D.%20(2007).%20Students%E2%80%99%20Perception%20of%20Difficulties%20with%20Academic%20Writing.",
  "/blog/If%20you%20are%20not%20aware%20of%20writing%20a%20literature%20review,%20you%20can%20get",
  "/blog/MBA%20Assignment%20Writing%20Help%20in%20UAE",
  "/blog/Saunders,%20Mark%20N.%20K.,%20Lewis,%20Philip,%20&%20Thornhill,%20Adrian.%20(2019).%20Research%20methods%20for%20business%20students%20(8th%20ed.).%20Pearson%20Education",
  "/blog/tutorsindia.com",
  "/help-guide/jkk",
  "/help-guide/study-guides-how-to-write-a-dissertation-methodology",
  "/help-guide/study-guides/guide-for-writing-medical-assignments",
  "/library/essay-index/management-essays/application-of-theory-of-iinternational-business-a-case-study-of-mcdonald",
  "/our-services/coursework-writing/business-plan",
  "/our-services/coursework-writing/case-study",
  "/our-services/data-collection",
  "/our-services/masters-dissertation-writing-services-/dissertation-proposal-",
  "/our-services/publication-support/statistical-analysis",
  "/subjects/humanities-assignment-writing-services",
];

const BROKEN_LINK_SET = new Set(
  BROKEN_LINK_PATHS.map((p) => p.replace(/\/$/, ""))
);

/** Unwrap <a> tags (keep inner text) whose href points at a known-dead internal page. */
export function stripBrokenLinks(html: string): string {
  return html.replace(
    /<a\s+[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi,
    (match, href: string, inner: string) => {
      const path = href
        .replace(/^https?:\/\/(?:www\.)?tutorsindia\.com/, "")
        .replace(/\/$/, "");
      return BROKEN_LINK_SET.has(path) ? inner : match;
    }
  );
}

/**
 * Extracts readable content from a proxied tutorsindia.com page.
 * Keeps only semantic content elements — headings, paragraphs, lists, images, tables.
 * Strips all Elementor/BeTheme wrapper divs, scripts, styles, SVGs, and nav widgets.
 */
export function cleanElementorHtml(html: string): string {
  let clean = html;

  // 1. Remove scripts, styles, noscript entirely
  clean = clean.replace(/<(script|style|noscript)[^>]*>[\s\S]*?<\/\1>/gi, "");

  // 2. Remove SVG icons
  clean = clean.replace(/<svg[\s\S]*?<\/svg>/gi, "");

  // 3. Remove navigation / UI-only Elementor widgets by class patterns
  const uiWidgets = [
    'elementor-widget-image-box',
    'elementor-widget-icon-list',
    'elementor-widget-social-icons',
    'elementor-widget-breadcrumbs',
    'elementor-widget-button',
    'ppc-menu',
    'sidebarr',
    'rightsideidebg',
    'nav-menu',
    'site-footer',
    'section-page-footer',
  ];
  for (const cls of uiWidgets) {
    // Remove the entire containing div for these widget types
    const re = new RegExp(`<div[^>]*class="[^"]*${cls}[^"]*"[^>]*>[\\s\\S]*?<\\/div>`, 'gi');
    clean = clean.replace(re, '');
  }

  // 4. Remove elementor icon-list <ul> blocks (these are UI decorations, not content lists)
  clean = clean.replace(/<ul[^>]*class="[^"]*elementor-icon-list[^"]*"[^>]*>[\s\S]*?<\/ul>/gi, "");

  // 5. Remove <li> with elementor classes
  clean = clean.replace(/<li[^>]*class="[^"]*elementor[^"]*"[^>]*>[\s\S]*?<\/li>/gi, "");

  // 6. Remove <span> icon wrappers
  clean = clean.replace(/<span[^>]*class="[^"]*elementor-icon[^"]*"[^>]*>[\s\S]*?<\/span>/gi, "");

  // 7. Strip all <div> and <section> open/close tags — keep their inner content
  clean = clean.replace(/<\/?section[^>]*>/gi, "");
  clean = clean.replace(/<\/?div[^>]*>/gi, "");

  // 8. Clean up image tags — remove lazy-load placeholders, keep real src
  // Replace data-src / data-lazy-src with src where src is a placeholder
  clean = clean.replace(/src="[^"]*placeholder[^"]*"\s+data-src="([^"]+)"/gi, 'src="$1"');
  clean = clean.replace(/data-lazy-src="([^"]+)"/gi, 'src="$1"');
  clean = clean.replace(/data-src="([^"]+)"/gi, 'src="$1"');

  // 9. Remove elementor classes from remaining tags (clean up attributes)
  clean = clean.replace(/\s+class="[^"]*elementor[^"]*"/gi, '');
  clean = clean.replace(/\s+data-[a-z-]+="[^"]*"/gi, '');

  // 10. Remove empty paragraphs and empty headings
  clean = clean.replace(/<p[^>]*>[\s]*(&nbsp;|\s)*[\s]*<\/p>/gi, "");
  clean = clean.replace(/<(h[1-6])[^>]*>\s*<\/\1>/gi, "");

  // 11. Collapse excess whitespace
  clean = clean.replace(/\n{3,}/g, "\n\n").trim();

  // 12. Unwrap links to known-dead internal pages
  clean = stripBrokenLinks(clean);

  return clean;
}
