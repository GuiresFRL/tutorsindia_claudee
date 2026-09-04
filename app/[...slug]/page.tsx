import Link from "next/link";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { getStaticRootContent, getAllStaticSlugs } from "@/lib/api/staticContent";
import { isNoindexPath } from "@/lib/data/noindex-paths";
import { getPayloadPostBySlug, getPayloadCategorySlug } from "@/lib/api/payload";

export const revalidate = false;

interface Props {
  params: Promise<{ slug: string[] }>;
}

function slugToTitle(slug: string): string {
  return slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

export function generateStaticParams() {
  return getAllStaticSlugs("_root").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const lastSlug = slug[slug.length - 1];
  const path = `/${slug.join("/")}/`;

  const wpContent = getStaticRootContent(slug);
  const noindex = isNoindexPath(path);
  if (wpContent && wpContent.content?.trim().length > 50) {
    return {
      title: wpContent.title,
      description: wpContent.excerpt || `${wpContent.title} — Academic writing support from Tutors India.`,
      alternates: { canonical: `https://www.tutorsindia.com${path.endsWith("/") ? path : path + "/"}` },
      ...(noindex && { robots: { index: false, follow: false } }),
    };
  }

  const title = wpContent?.title || slugToTitle(lastSlug);
  return {
    title: `${title}`,
    description: `${title} — Academic writing support from Tutors India.`,
    alternates: { canonical: `https://www.tutorsindia.com${path.endsWith("/") ? path : path + "/"}` },
    ...(noindex && { robots: { index: false, follow: false } }),
  };
}

export default async function CatchAllPage({ params }: Props) {
  const { slug } = await params;
  const lastSlug = slug[slug.length - 1];
  const breadcrumbPath = ["", ...slug];

  // Stray /academy/<...>/<slug> URLs (3+ segments) fall through to this
  // catch-all instead of app/academy/[category]/[slug] — usually because
  // Payload's legacy `urlPath` field still reflects an old category the
  // post was later moved out of. Rather than serve a thin placeholder at
  // a URL search engines might have discovered, look the slug up directly
  // and send it to its real, current canonical URL.
  if (slug[0] === "academy" && slug.length > 2) {
    const post = await getPayloadPostBySlug("academy", lastSlug);
    if (post) {
      const correctCategory = getPayloadCategorySlug(post);
      redirect(`/academy/${correctCategory}/${lastSlug}/`);
    }
  }

  const wpContent = getStaticRootContent(slug);

  if (wpContent && wpContent.content?.trim().length > 50) {
    const image = wpContent.featuredImage?.local ?? null;
    const title = wpContent.title;
    const date = "";

    return (
      <>
        <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "52px 20px 44px" }}>
          <div style={{ maxWidth: "960px", margin: "0 auto" }}>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "12px" }}>
              {breadcrumbPath.map((segment, i) => {
                const label = i === 0 ? "Home" : slugToTitle(segment);
                const isLast = i === breadcrumbPath.length - 1;
                // Only "Home" is a real page — this route handles arbitrary-depth
                // legacy WordPress permalinks, so intermediate segments (e.g. a
                // category prefix) have no matching page on this site and must
                // not be linked (they were 404ing when crawled).
                return (
                  <span key={i}>
                    {i === 0 ? <Link href="/" style={{ color: "#a0b8e0" }}>{label}</Link> : <span style={{ color: isLast ? "#fff" : "#a0b8e0" }}>{label}</span>}
                    {!isLast && <span style={{ color: "#a0b8e0" }}> / </span>}
                  </span>
                );
              })}
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.4rem,3vw,2rem)", lineHeight: 1.35, marginBottom: "10px" }}>
              {title}
            </h1>
            {date && <p style={{ color: "#a0b8e0", fontSize: "0.82rem" }}>Updated {date}</p>}
          </div>
        </section>

        <article style={{ maxWidth: "960px", margin: "0 auto", padding: "40px 20px" }}>
          {image && (
            <div style={{ marginBottom: "28px", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}>
              <img src={image} alt={title} style={{ width: "100%", height: "auto", display: "block", maxHeight: "420px", objectFit: "cover" }} />
            </div>
          )}
          <div className="wp-content" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: wpContent.content }} />
          <div style={{ marginTop: "36px", display: "flex", justifyContent: "flex-end", gap: "12px" }}>
            <Link href="/order-now/" style={{ padding: "9px 20px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "0.87rem" }}>Order Now</Link>
            <Link href="/contact-us/" style={{ padding: "9px 20px", border: "1.5px solid #1a2a6c", color: "#1a2a6c", borderRadius: "5px", fontWeight: 600, fontSize: "0.87rem" }}>Contact Us</Link>
          </div>
        </article>

        <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "44px 20px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "10px" }}>Need Expert Academic Help?</h2>
          <p style={{ color: "#c5d5f0", fontSize: "0.96rem", marginBottom: "18px" }}>Our PhD-qualified writers provide tailored support for every stage of your academic journey.</p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/order-now/" style={{ padding: "11px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
            <Link href="/contact-us/" style={{ padding: "11px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
          </div>
        </section>
      </>
    );
  }

  // Fallback: content extracted via raw-HTML scrape during migration
  const proxied = wpContent;
  const title = proxied?.title || slugToTitle(lastSlug);

  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "52px 20px 44px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "12px", display: "flex", flexWrap: "wrap", gap: "4px" }}>
            {breadcrumbPath.map((segment, i) => {
              const label = i === 0 ? "Home" : slugToTitle(segment);
              const isLast = i === breadcrumbPath.length - 1;
              // Only "Home" is a real page — see comment in the WP-API branch above.
              return (
                <span key={i} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  {i === 0
                    ? <><Link href="/" style={{ color: "#a0b8e0" }}>{label}</Link><span style={{ color: "#a0b8e0" }}>/</span></>
                    : <><span style={{ color: isLast ? "#fff" : "#a0b8e0" }}>{label}</span>{!isLast && <span style={{ color: "#a0b8e0" }}>/</span>}</>}
                </span>
              );
            })}
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.2rem,2.5vw,1.9rem)", lineHeight: 1.35, marginBottom: "12px" }}>{title}</h1>
        </div>
      </section>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 20px" }}>
        {proxied?.content && proxied.content.trim().length > 100 ? (
          <div className="library-content" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: proxied.content }} />
        ) : (
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "32px" }}>
            <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "16px" }}>
              Content for <strong>{title}</strong> is available on the live Tutors India website.
            </p>
            <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
              <Link href="/order-now/" style={{ padding: "10px 24px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
              <Link href="/contact-us/" style={{ padding: "10px 24px", border: "1.5px solid #1a2a6c", color: "#1a2a6c", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
        )}
      </div>

      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "44px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "10px" }}>Need Expert Academic Help?</h2>
        <p style={{ color: "#c5d5f0", fontSize: "0.96rem", marginBottom: "18px" }}>Our PhD-qualified writers provide tailored support for every stage of your academic journey.</p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "11px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "11px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
