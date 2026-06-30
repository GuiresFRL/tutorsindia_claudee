import Link from "next/link";
import type { Metadata } from "next";
import { getTIPageById, stripTIHtml } from "@/lib/api/tutorsindia";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Sample Works — Academic Writing Examples | Tutors India",
  description: "View our sample academic work including dissertations, literature reviews, research proposals, and essays to understand the quality Tutors India delivers.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://tutorsindia.com/our-sample-works/" },
};

const categories = [
  { href: "/our-sample-works/dissertation-samples/", title: "Dissertation Samples", icon: "🎓", count: "50+" },
  { href: "/our-sample-works/literature-review-samples/", title: "Literature Review Samples", icon: "📚", count: "30+" },
  { href: "/our-sample-works/research-proposal-samples/", title: "Research Proposal Samples", icon: "📋", count: "25+" },
  { href: "/our-sample-works/introduction-samples/", title: "Introduction Samples", icon: "📖", count: "20+" },
  { href: "/our-sample-works/essay-writing-samples/", title: "Essay Writing Samples", icon: "📝", count: "40+" },
  { href: "/our-sample-works/assignment-writing-samples/", title: "Assignment Writing Samples", icon: "✍️", count: "35+" },
  { href: "/our-sample-works/topic-selection-samples/", title: "Topic Selection Samples", icon: "🔍", count: "20+" },
];

export default async function SampleWorksPage() {
  const page = await getTIPageById(9585);

  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "52px 20px 44px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <span style={{ color: "#fff" }}>Our Sample Works</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.2rem)", marginBottom: "10px" }}>
            {page ? <span dangerouslySetInnerHTML={{ __html: page.title.rendered }} /> : "Our Sample Works"}
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "0.97rem", maxWidth: "680px" }}>
            Browse real academic writing samples across dissertations, essays, proposals and more — so you know exactly what to expect.
          </p>
        </div>
      </section>

      {/* Category grid */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "44px 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.35rem", color: "#1a2a6c", marginBottom: "24px" }}>Browse by Type</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: "18px", marginBottom: "44px" }}>
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              style={{ display: "flex", alignItems: "center", gap: "14px", background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px 20px", textDecoration: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
            >
              <span style={{ fontSize: "1.8rem" }}>{cat.icon}</span>
              <div>
                <div style={{ fontWeight: 700, color: "#1a2a6c", fontSize: "0.92rem" }}>{cat.title}</div>
                <div style={{ fontSize: "0.78rem", color: "#e87722", fontWeight: 600 }}>{cat.count} samples</div>
              </div>
            </Link>
          ))}
        </div>

        {/* WP content */}
        {page && (
          <div className="wp-content" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
        )}
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "48px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: "10px" }}>Need Your Own Custom Academic Work?</h2>
        <p style={{ color: "#c5d5f0", fontSize: "0.93rem", marginBottom: "20px" }}>Our PhD-qualified writers deliver work that meets the same quality standard as the samples you see here.</p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 30px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 30px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
