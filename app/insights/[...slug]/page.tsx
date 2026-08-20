import Link from "next/link";
import type { Metadata } from "next";
import { getStaticContent, getAllStaticSlugs } from "@/lib/api/staticContent";

export const revalidate = false;

interface Props {
  params: Promise<{ slug: string[] }>;
}

function slugToTitle(slug: string): string {
  return slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

export function generateStaticParams() {
  return getAllStaticSlugs("insights").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const path = `/insights/${slug.join("/")}/`;
  const page = getStaticContent("insights", slug);
  const title = page?.title || slugToTitle(slug[slug.length - 1]);
  return {
    title: `${title} — Insights`,
    description: `${title} — Academic insights, news, and research trends from Tutors India.`,
    alternates: { canonical: `https://www.tutorsindia.com${path.endsWith("/") ? path : path + "/"}` },
  };
}

export default async function InsightsSlugPage({ params }: Props) {
  const { slug } = await params;
  const page = getStaticContent("insights", slug);
  const title = page?.title || slugToTitle(slug[slug.length - 1]);
  const content = page?.content ?? "";

  const breadcrumbPath = ["", "insights", ...slug];

  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "52px 20px 44px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "12px", display: "flex", flexWrap: "wrap", gap: "4px" }}>
            {breadcrumbPath.map((segment, i) => {
              const href = i === 0 ? "/" : "/insights/";
              const label = i === 0 ? "Home" : slugToTitle(segment);
              const isLast = i === breadcrumbPath.length - 1;
              // Only Home and the Insights hub are real pages.
              return (
                <span key={i} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  {i <= 1
                    ? <><Link href={href} style={{ color: "#a0b8e0" }}>{label}</Link><span style={{ color: "#a0b8e0" }}>/</span></>
                    : <><span style={{ color: isLast ? "#fff" : "#a0b8e0" }}>{label}</span>{!isLast && <span style={{ color: "#a0b8e0" }}>/</span>}</>}
                </span>
              );
            })}
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.2rem,2.5vw,1.9rem)", lineHeight: 1.35, marginBottom: "12px" }}>
            {title}
          </h1>
        </div>
      </section>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 20px" }}>
        {content.trim().length > 100 ? (
          <div className="wp-content" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: content }} />
        ) : (
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "32px" }}>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", color: "#1a2a6c", marginBottom: "16px" }}>{title}</h2>
            <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "16px" }}>
              Tutors India keeps you updated on the latest developments in academic research, industry innovations, and educational trends.
              Our insights section is curated by our team of PhD-qualified researchers and academic professionals.
            </p>
            <p style={{ color: "#555", lineHeight: 1.8 }}>
              For personalised academic support and guidance, contact our expert team today.
            </p>
            <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
              <Link href="/order-now/" style={{ padding: "10px 24px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
              <Link href="/insights/" style={{ padding: "10px 24px", border: "1.5px solid #1a2a6c", color: "#1a2a6c", borderRadius: "5px", fontWeight: 600 }}>← Insights</Link>
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
