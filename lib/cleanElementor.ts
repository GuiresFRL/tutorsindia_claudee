/**
 * Extracts readable content from Elementor WP content.rendered.
 * Strategy: keep only semantic text elements that have no elementor-* class.
 * Strips wrapper divs/sections and elementor UI widgets (breadcrumbs, icons, share buttons).
 */
export function cleanElementorHtml(html: string): string {
  // 1. Remove scripts, styles, noscript
  let clean = html.replace(/<(script|style|noscript)[^>]*>[\s\S]*?<\/\1>/gi, "");

  // 2. Remove entire elementor widget blocks that are UI-only (icon lists, breadcrumbs, share)
  //    These are <ul class="elementor-icon-list-items...">...</ul>
  clean = clean.replace(/<ul[^>]*class="[^"]*elementor[^"]*"[^>]*>[\s\S]*?<\/ul>/gi, "");

  // 3. Remove SVG icons
  clean = clean.replace(/<svg[\s\S]*?<\/svg>/gi, "");

  // 4. Strip all <div> and <section> open/close tags (keep their inner content)
  clean = clean.replace(/<\/?section[^>]*>/gi, "");
  clean = clean.replace(/<\/?div[^>]*>/gi, "");

  // 5. Remove <li> elements that have elementor classes (leftover icon list items)
  clean = clean.replace(/<li[^>]*class="[^"]*elementor[^"]*"[^>]*>[\s\S]*?<\/li>/gi, "");

  // 6. Remove <span> elements with only icons/SVG references
  clean = clean.replace(/<span[^>]*class="[^"]*elementor-icon[^"]*"[^>]*>[\s\S]*?<\/span>/gi, "");

  // 7. Remove empty paragraphs and empty tags
  clean = clean.replace(/<p[^>]*>[\s]*(&nbsp;|\s)*[\s]*<\/p>/gi, "");
  clean = clean.replace(/<(h[1-6])[^>]*>\s*<\/\1>/gi, "");

  // 8. Collapse excess whitespace
  clean = clean.replace(/\n{3,}/g, "\n\n").trim();

  return clean;
}
