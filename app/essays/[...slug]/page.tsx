import Link from "next/link";
import type { Metadata } from "next";
import { getStaticContent, getAllStaticSlugs } from "@/lib/api/staticContent";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const revalidate = false;

interface Props {
  params: Promise<{ slug: string[] }>;
}

function slugToTitle(slug: string): string {
  return slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

export function generateStaticParams() {
  return getAllStaticSlugs("essays").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const path = `/essays/${slug.join("/")}/`;
  const page = getStaticContent("essays", slug);
  const title = page?.title || slugToTitle(slug[slug.length - 1]);
  const desc = page?.excerpt || `${title} — Free university essay example from Tutors India.`;
  return {
    title: `${title} — Essays`,
    description: desc,
    alternates: { canonical: `https://www.tutorsindia.com${path.endsWith("/") ? path : path + "/"}` },
  };
}

export default async function EssaysSlugPage({ params }: Props) {
  const { slug } = await params;
  const lastSlug = slug[slug.length - 1];
  const isCategory = slug.length === 1;

  const page = getStaticContent("essays", slug);
  const title = page?.title || slugToTitle(lastSlug);
  const content = page?.content ?? "";

  // Build breadcrumb
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Essays", href: "/essays/" },
    ...slug.map((s, i) => ({
      label: slugToTitle(s),
      href: `/essays/${slug.slice(0, i + 1).join("/")}/`,
    })),
  ];

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Essays", url: "/essays/" }, { name: title , url: `https://www.tutorsindia.com/essays/${slug.join("/")}/` }]} />
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "52px 20px 44px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "12px", display: "flex", flexWrap: "wrap", gap: "4px" }}>
            {crumbs.map((c, i) => {
              const isLast = i === crumbs.length - 1;
              // Only Home and the Essays hub are real pages.
              return (
                <span key={i} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  {i <= 1
                    ? <><Link href={c.href} style={{ color: "#a0b8e0" }}>{c.label}</Link><span style={{ color: "#a0b8e0" }}>/</span></>
                    : <><span style={{ color: isLast ? "#fff" : "#a0b8e0" }}>{c.label}</span>{!isLast && <span style={{ color: "#a0b8e0" }}>/</span>}</>}
                </span>
              );
            })}
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.2rem,2.5vw,1.9rem)", lineHeight: 1.35, marginBottom: "12px" }}>
            {title}
          </h1>
          {isCategory && (
            <p style={{ color: "#c5d5f0", fontSize: "0.93rem" }}>
              Free essay examples demonstrating proper structure, research methods, and citation styles.
            </p>
          )}
          {!isCategory && (
            <p style={{ color: "#c5d5f0", fontSize: "0.85rem" }}>Free Essay — For educational reference purposes only</p>
          )}
        </div>
      </section>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 20px" }}>
        {!isCategory && (
          <div style={{ background: "#fffbe6", borderLeft: "4px solid #e87722", padding: "12px 16px", borderRadius: "0 6px 6px 0", marginBottom: "28px", fontSize: "0.85rem" }}>
            <strong style={{ color: "#c05000" }}>Disclaimer:</strong> This essay is provided for educational reference purposes only and must not be submitted as your own work.
          </div>
        )}

        {content.trim().length > 200 ? (
          <div className="wp-content" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: content }} />
        ) : (
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "32px" }}>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", color: "#1a2a6c", marginBottom: "16px" }}>{title}</h2>
            <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "16px" }}>
              {isCategory
                ? `Browse our collection of ${title} essay examples written by our PhD-qualified academic writers.`
                : `This essay demonstrates the quality, structure, and academic standard that Tutors India delivers. Our expert writers produce work meeting the requirements of leading UK, US, and Australian universities.`}
            </p>
            <div style={{ display: "flex", gap: "12px", marginTop: "20px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "10px 24px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
              <Link href="/essays/" style={{ padding: "10px 24px", border: "1.5px solid #1a2a6c", color: "#1a2a6c", borderRadius: "5px", fontWeight: 600 }}>← All Essays</Link>
            </div>
          </div>
        )}
      </div>

      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "44px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "10px" }}>Need a Custom Essay Written?</h2>
        <p style={{ color: "#c5d5f0", fontSize: "0.96rem", marginBottom: "18px" }}>Our PhD-qualified writers produce high-quality, plagiarism-free essays tailored to your exact specifications.</p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "11px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "11px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
