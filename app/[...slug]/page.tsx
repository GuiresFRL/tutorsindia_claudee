import Link from "next/link";
import type { Metadata } from "next";
import { getTIPageBySlug, getTIPostBySlug, getTIFeaturedImage, stripTIHtml } from "@/lib/api/tutorsindia";

interface Props {
  params: Promise<{ slug: string[] }>;
}

function slugToTitle(slug: string): string {
  return slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const lastSlug = slug[slug.length - 1];
  const content = (await getTIPageBySlug(lastSlug)) ?? (await getTIPostBySlug(lastSlug));
  if (!content) {
    const title = slugToTitle(lastSlug);
    return { title: `${title} | Tutors India` };
  }
  const title = stripTIHtml(content.title.rendered);
  const desc = stripTIHtml(content.excerpt?.rendered ?? "", 160);
  return {
    title: `${title} | Tutors India`,
    description: desc || `${title} — Academic writing support from Tutors India.`,
    robots: { index: false, follow: false },
  };
}

export default async function CatchAllPage({ params }: Props) {
  const { slug } = await params;
  const lastSlug = slug[slug.length - 1];

  // Try WP page first, then WP post
  const content = (await getTIPageBySlug(lastSlug)) ?? (await getTIPostBySlug(lastSlug));

  const breadcrumbPath = ["", ...slug];

  if (content) {
    const image = getTIFeaturedImage(content);
    const title = stripTIHtml(content.title.rendered);
    const date = content.modified
      ? new Date(content.modified).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
      : "";

    return (
      <>
        {/* Hero */}
        <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "52px 20px 44px" }}>
          <div style={{ maxWidth: "960px", margin: "0 auto" }}>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "12px" }}>
              {breadcrumbPath.map((segment, i) => {
                const href = "/" + breadcrumbPath.slice(1, i + 1).join("/") + "/";
                const label = i === 0 ? "Home" : slugToTitle(segment);
                const isLast = i === breadcrumbPath.length - 1;
                return (
                  <span key={i}>
                    {isLast
                      ? <span style={{ color: "#fff" }}>{label}</span>
                      : <Link href={href} style={{ color: "#a0b8e0" }}>{label}</Link>}
                    {!isLast && <span style={{ color: "#a0b8e0" }}> / </span>}
                  </span>
                );
              })}
            </div>
            <h1
              style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.4rem,3vw,2rem)", lineHeight: 1.35, marginBottom: "10px" }}
              dangerouslySetInnerHTML={{ __html: content.title.rendered }}
            />
            {date && <p style={{ color: "#a0b8e0", fontSize: "0.82rem" }}>Updated {date}</p>}
          </div>
        </section>

        {/* Content */}
        <article style={{ maxWidth: "960px", margin: "0 auto", padding: "40px 20px" }}>
          {image && (
            <div style={{ marginBottom: "28px", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}>
              <img src={image} alt={title} style={{ width: "100%", height: "auto", display: "block", maxHeight: "420px", objectFit: "cover" }} />
            </div>
          )}
          <div className="wp-content" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: content.content.rendered }} />

          <div style={{ marginTop: "36px", display: "flex", justifyContent: "flex-end", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
            <div style={{ display: "flex", gap: "10px" }}>
              <Link href="/order-now/" style={{ padding: "9px 20px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "0.87rem" }}>Order Now</Link>
              <Link href="/contact-us/" style={{ padding: "9px 20px", border: "1.5px solid #1a2a6c", color: "#1a2a6c", borderRadius: "5px", fontWeight: 600, fontSize: "0.87rem" }}>Contact Us</Link>
            </div>
          </div>
        </article>

        <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "44px 20px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "10px" }}>Need Expert Academic Help?</h2>
          <p style={{ color: "#c5d5f0", fontSize: "0.9rem", marginBottom: "18px" }}>Our PhD-qualified writers provide tailored support for every stage of your academic journey.</p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/order-now/" style={{ padding: "11px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
            <Link href="/contact-us/" style={{ padding: "11px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
          </div>
        </section>
      </>
    );
  }

  // Fallback: page not found in WP
  const title = slugToTitle(lastSlug);
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "60px 20px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <span style={{ color: "#fff" }}>{title}</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "2rem", marginBottom: "12px" }}>{title}</h1>
          <p style={{ color: "#c5d5f0" }}>Tutors India — Academic Writing & Research Services</p>
        </div>
      </section>

      <section style={{ maxWidth: "960px", margin: "60px auto", padding: "0 20px" }}>
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "32px" }}>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "16px" }}>
            Welcome to Tutors India&apos;s resource section on <strong>{title}</strong>. Our team of PhD-qualified experts provides comprehensive academic support across all disciplines.
          </p>
          <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
            <Link href="/order-now/" style={{ padding: "10px 24px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
            <Link href="/contact-us/" style={{ padding: "10px 24px", border: "1.5px solid #1a2a6c", color: "#1a2a6c", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
