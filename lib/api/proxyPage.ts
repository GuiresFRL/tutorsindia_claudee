/** Extract a div (and all its nested children) from HTML by a CSS class substring. */
function extractDivByClass(html: string, classSubstring: string): string | null {
  const searchStr = `class="`;
  let pos = 0;
  while (pos < html.length) {
    const classIdx = html.indexOf(searchStr, pos);
    if (classIdx === -1) return null;
    const classEnd = html.indexOf('"', classIdx + searchStr.length);
    const classVal = html.slice(classIdx + searchStr.length, classEnd);
    if (classVal.includes(classSubstring)) {
      const divStart = html.lastIndexOf('<div', classIdx);
      if (divStart === -1) { pos = classEnd; continue; }
      const openEnd = html.indexOf('>', divStart) + 1;
      let depth = 1;
      let cursor = openEnd;
      while (depth > 0 && cursor < html.length) {
        const nextOpen = html.indexOf('<div', cursor);
        const nextClose = html.indexOf('</div>', cursor);
        if (nextClose === -1) break;
        if (nextOpen !== -1 && nextOpen < nextClose) {
          depth++;
          cursor = nextOpen + 4;
        } else {
          depth--;
          cursor = nextClose + 6;
        }
      }
      return html.slice(divStart, cursor);
    }
    pos = classEnd + 1;
  }
  return null;
}

/** Remove all divs whose class contains classSubstring */
function removeDivsByClass(html: string, classSubstring: string): string {
  let result = html;
  let found = extractDivByClass(result, classSubstring);
  while (found) {
    result = result.replace(found, '');
    found = extractDivByClass(result, classSubstring);
  }
  return result;
}

/** Remove all <script>...</script> blocks */
function removeScripts(html: string): string {
  return html.replace(/<script[\s\S]*?<\/script>/gi, '');
}

/** Remove all <style>...</style> blocks */
function removeStyles(html: string): string {
  return html.replace(/<style[\s\S]*?<\/style>/gi, '');
}

/** Remove sections that have a background-image inline style (live-site hero banners we don't want) */
function removeDecorativeSections(html: string): string {
  let result = html;
  // Find every <div class="section mcb-section..."> whose opening tag contains background-image:
  const openTagRe = /<div\s+class="section mcb-section[^"]*"[^>]*>/g;
  let match: RegExpExecArray | null;
  const toRemove: string[] = [];
  while ((match = openTagRe.exec(result)) !== null) {
    const openTag = match[0];
    if (!openTag.includes('background-image:')) continue;
    // Depth-track to find the closing tag
    const start = match.index;
    const afterOpen = start + openTag.length;
    let depth = 1;
    let cursor = afterOpen;
    while (depth > 0 && cursor < result.length) {
      const nextOpen = result.indexOf('<div', cursor);
      const nextClose = result.indexOf('</div>', cursor);
      if (nextClose === -1) break;
      if (nextOpen !== -1 && nextOpen < nextClose) {
        depth++;
        cursor = nextOpen + 4;
      } else {
        depth--;
        cursor = nextClose + 6;
      }
    }
    toRemove.push(result.slice(start, cursor));
  }
  for (const block of toRemove) {
    result = result.replace(block, '');
  }
  return result;
}

/** Remove excessive consecutive <br> tags (keep max 1) */
function collapseLineBreaks(html: string): string {
  return html.replace(/(<br\s*\/?>\s*){3,}/gi, '<br>');
}

/** Remove leading <br> spacers inside column_attr / section divs (left over from live-site spacing) */
function removeLeadingBreaks(html: string): string {
  return html.replace(/(<div class="column_attr[^"]*"[^>]*>)\s*(<br\s*\/?>\s*)+/gi, '$1');
}

/** Rewrite tutorsindia.com URLs to relative */
function rewriteUrls(html: string): string {
  return html
    .replace(/href="https?:\/\/(?:www\.)?tutorsindia\.com\//g, 'href="/')
    .replace(/href="https?:\/\/test\.tutorsindia\.com\//g, 'href="/')
    .replace(/src="https?:\/\/(?:www\.)?tutorsindia\.com\//g, 'src="https://www.tutorsindia.com/')
    .replace(/src="https?:\/\/test\.tutorsindia\.com\//g, 'src="https://www.tutorsindia.com/');
}

/** Remove the page-footer section (pagination, no content) */
function removePageFooter(html: string): string {
  return html.replace(/<div class="section section-page-footer">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/, '');
}

export interface ProxiedPage {
  title: string;
  content: string;
}

export async function fetchProxiedLibraryPage(path: string): Promise<ProxiedPage | null> {
  const normalised = path.endsWith('/') ? path : `${path}/`;
  const url = `https://www.tutorsindia.com${normalised}`;

  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; TutorsIndia-Mirror/1.0)' },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const html = await res.text();

    // Title
    const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
    const title = titleMatch
      ? titleMatch[1].replace(/\s*[|\-–]\s*Tutors\s*India.*/i, '').trim()
      : '';

    // Extract entry-content
    const entryContent = extractDivByClass(html, 'entry-content');
    if (!entryContent) return { title, content: '' };

    let content = entryContent;

    // Strip unwanted columns / sidebars
    content = removeDivsByClass(content, 'sidebarr');
    content = removeDivsByClass(content, 'rightsideidebg');
    content = removeDivsByClass(content, 'ppc-menu');

    // Strip scripts and styles (they reference live CDN / jQuery etc)
    content = removeScripts(content);
    content = removeStyles(content);

    // Remove purely decorative background-image sections with only br spacers
    content = removeDecorativeSections(content);

    // Remove page footer/pagination
    content = removePageFooter(content);

    // Collapse excessive line breaks
    content = collapseLineBreaks(content);

    // Remove leading <br> spacers from sections
    content = removeLeadingBreaks(content);

    // Rewrite URLs
    content = rewriteUrls(content);

    return { title, content };
  } catch {
    return null;
  }
}

/** Generic alias — fetch and proxy any tutorsindia.com page by path */
export const fetchProxiedPage = fetchProxiedLibraryPage;
