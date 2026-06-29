import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights — Academic News, Research Trends & Resources | Tutors India",
  description: "Stay updated with the latest academic research trends, industry innovations, news, and educational resources from Tutors India.",
};

const sections = [
  { href: "/insights/news/", title: "News", icon: "📰", desc: "Latest news from the academic world — AI, assessment changes, and higher education policy updates." },
  { href: "/insights/r-and-d/", title: "R&D", icon: "🔬", desc: "Research and development insights, future research directions, and industry innovations." },
  { href: "/insights/case-studies/", title: "Case Studies", icon: "📊", desc: "Success stories and case studies from our clients across various academic disciplines." },
  { href: "/insights/fact-sheet/", title: "Fact Sheets", icon: "📋", desc: "Academic fact sheets and quick reference guides for students and researchers." },
  { href: "/insights/template/", title: "Templates", icon: "📝", desc: "Downloadable templates for dissertations, research proposals, and academic papers." },
  { href: "/insights/check-list/", title: "Checklists", icon: "✅", desc: "Academic writing checklists to ensure your work meets all requirements." },
];

export default function InsightsPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,var(--navy) 0%,#2563b0 100%)", color: "#fff", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.9rem", color: "#a0b8e0", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link> / Insights
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "2.2rem", marginBottom: "12px" }}>Insights</h1>
          <p style={{ color: "#c5d5f0", fontSize: "1.05rem" }}>Academic news, research trends, case studies, and resources</p>
        </div>
      </section>

      <section style={{ maxWidth: "1200px", margin: "60px auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px" }} className="insights-grid">
          {sections.map((section) => (
            <Link key={section.href} href={section.href}>
              <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "12px", padding: "24px", height: "100%" }}>
                <div style={{ fontSize: "2rem", marginBottom: "10px" }}>{section.icon}</div>
                <h2 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--navy)", marginBottom: "8px" }}>{section.title}</h2>
                <p style={{ fontSize: "0.85rem", color: "var(--text-mid)", lineHeight: 1.6 }}>{section.desc}</p>
                <div style={{ marginTop: "12px", color: "var(--orange)", fontWeight: 600, fontSize: "0.85rem" }}>Explore →</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <style>{`
        @media(max-width:768px){.insights-grid{grid-template-columns:1fr 1fr!important;}}
        @media(max-width:500px){.insights-grid{grid-template-columns:1fr!important;}}
      `}</style>
    </>
  );
}
