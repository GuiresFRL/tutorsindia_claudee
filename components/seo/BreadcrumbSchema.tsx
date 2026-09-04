export interface BreadcrumbItem {
  name: string;
  /** Absolute or root-relative URL. Omit only on the final (current-page) item. */
  url?: string;
}

const SITE = "https://www.tutorsindia.com";

/**
 * Renders schema.org BreadcrumbList JSON-LD. Pass the exact same items
 * used for the page's visible breadcrumb trail — Google expects the two
 * to match. The first item should be "Home" (url: "/"); the last item
 * (the current page) is conventionally left without a url.
 */
export default function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const itemListElement = items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    ...(item.url && { item: item.url.startsWith("http") ? item.url : `${SITE}${item.url}` }),
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
