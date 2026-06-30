import Link from "next/link";
import type { Metadata } from "next";
import { getTIPageById, stripTIHtml } from "@/lib/api/tutorsindia";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Insights — Academic News, Research Trends & Resources | Tutors India",
  description: "Stay updated with the latest academic research trends, industry innovations, news, and educational resources from Tutors India.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://tutorsindia.com/insights/" },
};

const sections = [
  { href: "/insights/news/", title: "News", icon: "📰", desc: "Latest news from the academic world — AI, assessment changes, and higher education policy updates." },
  { href: "/insights/r-and-d/", title: "R&D", icon: "🔬", desc: "Research and development insights, future research directions, and industry innovations." },
  { href: "/insights/case-studies/", title: "Case Studies", icon: "📊", desc: "Success stories and case studies from our clients across various academic disciplines." },
  { href: "/insights/fact-sheet/", title: "Fact Sheets", icon: "📋", desc: "Academic fact sheets and quick reference guides for students and researchers." },
  { href: "/insights/template/", title: "Templates", icon: "📝", desc: "Downloadable templates for dissertations, research proposals, and academic papers." },
  { href: "/insights/check-list/", title: "Checklists", icon: "✅", desc: "Academic writing checklists to ensure your work meets all requirements." },
];

export default async function InsightsPage() {
  const page = await getTIPageById(10491);

  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "52px 20px 44px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <span style={{ color: "#fff" }}>Insights</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.2rem)", marginBottom: "10px" }}>
            {page ? <span dangerouslySetInnerHTML={{ __html: page.title.rendered }} /> : "Insights"}
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "0.97rem", maxWidth: "680px" }}>
            Academic research trends, industry news, case studies, and practical resources for students and researchers.
          </p>
        </div>
      </section>

      {/* Section cards */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "44px 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "20px", marginBottom: "44px" }}>
          {sections.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              style={{ display: "flex", flexDirection: "column", gap: "10px", background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "24px", textDecoration: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
            >
              <span style={{ fontSize: "1.8rem" }}>{s.icon}</span>
              <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", fontWeight: 700, color: "#1a2a6c" }}>{s.title}</h2>
              <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.6, flex: 1 }}>{s.desc}</p>
              <span style={{ fontSize: "0.82rem", color: "#e87722", fontWeight: 700 }}>Read more →</span>
            </Link>
          ))}
        </div>

        {/* Also see */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "32px" }}>
          <Link href="/latest-research-trends/" style={{ padding: "10px 20px", background: "#1a2a6c", color: "#fff", borderRadius: "5px", fontWeight: 600, fontSize: "0.9rem" }}>Latest Research Trends →</Link>
          <Link href="/future-research-directions/" style={{ padding: "10px 20px", border: "1.5px solid #1a2a6c", color: "#1a2a6c", borderRadius: "5px", fontWeight: 600, fontSize: "0.9rem" }}>Future Research Directions</Link>
        </div>

        {/* WP content */}
        {page && (
          <div className="wp-content" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
        )}
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "48px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: "10px" }}>Need Academic Writing Help?</h2>
        <p style={{ color: "#c5d5f0", fontSize: "0.93rem", marginBottom: "20px" }}>Our team of PhD-qualified experts can assist with every stage of your academic research and writing.</p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 30px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 30px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
