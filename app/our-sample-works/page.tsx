import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sample Works — Academic Writing Examples | Tutors India",
  description: "View our sample academic work including dissertations, literature reviews, research proposals, and essays to understand the quality Tutors India delivers.",
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

export default function SampleWorksPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,var(--navy) 0%,#2563b0 100%)", color: "#fff", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.9rem", color: "#a0b8e0", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link> / Sample Works
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "2.2rem", marginBottom: "12px" }}>Our Sample Works</h1>
          <p style={{ color: "#c5d5f0", fontSize: "1.05rem" }}>Browse our academic writing samples to understand the quality we deliver</p>
        </div>
      </section>

      <section style={{ maxWidth: "1200px", margin: "60px auto", padding: "0 20px" }}>
        <div style={{ background: "#fffbe6", borderLeft: "4px solid var(--orange)", padding: "16px 20px", borderRadius: "0 8px 8px 0", marginBottom: "36px", fontSize: "0.9rem" }}>
          <strong style={{ color: "var(--orange-dark)" }}>Note:</strong> All sample works are provided for educational reference purposes only. They are intended to demonstrate quality and structure, not to be submitted as your own work.
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }} className="samples-grid">
          {categories.map((cat) => (
            <Link key={cat.href} href={cat.href}>
              <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "12px", padding: "24px", textAlign: "center" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "10px" }}>{cat.icon}</div>
                <h2 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--navy)", marginBottom: "6px" }}>{cat.title}</h2>
                <span style={{ background: "var(--light-blue)", color: "var(--blue)", padding: "3px 12px", borderRadius: "12px", fontSize: "0.8rem", fontWeight: 600 }}>{cat.count} samples</span>
                <div style={{ marginTop: "14px", color: "var(--orange)", fontWeight: 600, fontSize: "0.85rem" }}>Browse →</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <style>{`
        @media(max-width:768px){.samples-grid{grid-template-columns:1fr 1fr!important;}}
        @media(max-width:500px){.samples-grid{grid-template-columns:1fr!important;}}
      `}</style>
    </>
  );
}
