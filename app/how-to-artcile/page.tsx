import Link from "next/link";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "How To Articles",
  description: "Step-by-step how-to guides and academic writing articles from Tutors India's expert team.",
  
  alternates: { canonical: "https://www.tutorsindia.com/how-to-artcile/" },
};

const articles = [
  {
    title: "How to Write a Clear and Focused Thesis Statement with Examples",
    href: "/coursework/how-to-write-a-clear-focused-thesis-statement-with-examples/",
    excerpt: "A step-by-step guide to crafting a strong, focused thesis statement for any discipline, with cross-disciplinary examples.",
    date: "2025",
  },
  {
    title: "Gibbs' Reflective Cycle Explained",
    href: "/gibbs-reflective-cycle-explained/",
    excerpt: "Understand how to apply Gibbs' Reflective Cycle in academic assignments, nursing essays, and professional reflections.",
    date: "2025",
  },
  {
    title: "Driscoll's Reflective Model",
    href: "/driscolls-reflective-model/",
    excerpt: "A practical explanation of Driscoll's What? So What? Now What? model for structured academic reflection.",
    date: "2025",
  },
  {
    title: "The Integrated Reflective Cycle (Bassot, 2013)",
    href: "/integrated-reflective-cycle-bassot/",
    excerpt: "Learn how Bassot's Integrated Reflective Cycle can deepen your academic reflective writing practice.",
    date: "2025",
  },
  {
    title: "The Four F's Reflection Model (Greenaway, 1995)",
    href: "/four-fs-reflection-model-greenaway/",
    excerpt: "Explore the Facts, Feelings, Findings, and Futures framework for structured experiential reflection.",
    date: "2025",
  },
  {
    title: "The CARL Reflection Framework",
    href: "/carl-reflection-model-framework/",
    excerpt: "How to use the Context, Action, Results, and Learning framework in your reflective essays.",
    date: "2025",
  },
  {
    title: "The 5R Reflective Framework",
    href: "/5r-reflective-framework/",
    excerpt: "A guide to Bain et al.'s five-stage reflective framework: Reporting, Responding, Relating, Reasoning, and Reconstructing.",
    date: "2025",
  },
  {
    title: "Gantt Chart for Dissertation Research Projects",
    href: "/gantt-chart-for-dissertation-research-projects/",
    excerpt: "How to plan and manage your dissertation timeline with a Gantt chart — practical guide with examples.",
    date: "2025",
  },
  {
    title: "Scholarly Database-Driven Topic Generation",
    href: "/scholarly-database-driven-topic-generation/",
    excerpt: "How Tutors India uses academic databases to generate relevant, original dissertation topics for students.",
    date: "2025",
  },
];

export default function HowToArticlePage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "52px 20px 44px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>
            <span style={{ color: "#a0b8e0" }}> / </span>
            <span style={{ color: "#fff" }}>How To Articles</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.4rem,3vw,2.2rem)", lineHeight: 1.3, marginBottom: "14px" }}>
            How To Articles
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "1rem", maxWidth: "700px" }}>
            Step-by-step academic guides and how-to articles from Tutors India's PhD-qualified team.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: "24px" }}>
          {articles.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              style={{ textDecoration: "none", display: "block", background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "24px", transition: "box-shadow 0.2s", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}
            >
              <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px", lineHeight: 1.4 }}>
                {a.title}
              </h2>
              <p style={{ fontSize: "0.94rem", color: "#555", lineHeight: 1.7, marginBottom: "14px" }}>{a.excerpt}</p>
              <span style={{ fontSize: "0.82rem", color: "#e87722", fontWeight: 600 }}>Read more →</span>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: "48px", background: "#f0f4ff", borderRadius: "10px", padding: "32px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", color: "#1a2a6c", marginBottom: "10px" }}>Need Personalised Academic Support?</h2>
          <p style={{ color: "#555", fontSize: "0.96rem", marginBottom: "20px" }}>
            Our expert team can help with dissertations, reflective essays, coursework, and more.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/order-now/" style={{ padding: "10px 24px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
            <Link href="/contact-us/" style={{ padding: "10px 24px", border: "1.5px solid #1a2a6c", color: "#1a2a6c", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
          </div>
        </div>
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
