/**
 * Rank Math (the SEO plugin the WordPress sites actually run) doesn't expose
 * its configured title/description/keywords on the standard wp/v2 REST API,
 * and this install doesn't have Rank Math's optional getHead REST route
 * enabled. The only place the real, plugin-configured values exist is the
 * live rendered page's own <head> — so we fetch that directly and use it
 * verbatim, with no truncation or rewriting of our own.
 */
export interface RankMathMeta {
  title: string | null;
  description: string | null;
  keywords: string | null;
}

function decodeEntities(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&#0?39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&#8217;/g, "’")
    .replace(/&#8216;/g, "‘")
    .replace(/&#8220;/g, "“")
    .replace(/&#8221;/g, "”");
}

export async function fetchRankMathMeta(liveUrl: string): Promise<RankMathMeta> {
  try {
    const res = await fetch(liveUrl, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; TutorsIndiaBot/1.0)" },
      next: { revalidate: 60 },
    });
    if (!res.ok) return { title: null, description: null, keywords: null };
    const html = await res.text();

    const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
    const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]*)"/i);
    const keywordsMatch = html.match(/<meta\s+name="keywords"\s+content="([^"]*)"/i);

    return {
      title: titleMatch ? decodeEntities(titleMatch[1].trim()) : null,
      description: descMatch ? decodeEntities(descMatch[1].trim()) : null,
      keywords: keywordsMatch ? decodeEntities(keywordsMatch[1].trim()) : null,
    };
  } catch {
    return { title: null, description: null, keywords: null };
  }
}
