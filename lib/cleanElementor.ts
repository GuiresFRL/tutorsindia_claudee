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

  return clean;
}
