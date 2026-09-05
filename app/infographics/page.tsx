import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import type { Metadata } from "next";
import { getStaticContent } from "@/lib/api/staticContent";

export const revalidate = false;

export const metadata: Metadata = {
  title: "Dissertation & Thesis Infographics",
  description: "Visual infographics on dissertation writing, thesis preparation, PhD research, and academic writing concepts from Tutors India.",
  alternates: { canonical: "https://www.tutorsindia.com/infographics/" },
};

export default async function InfographicsPage() {
  const proxied = getStaticContent("infographics", []);

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Infographics" , url: "https://www.tutorsindia.com/infographics/" }]} />
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "52px 20px 44px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>
            <span style={{ color: "#a0b8e0" }}> / </span>
            <span style={{ color: "#fff" }}>Infographics</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.4rem,3vw,2rem)", marginBottom: "12px" }}>
            Dissertation | Thesis | PhD | Masters — Infographics
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "0.97rem", maxWidth: "680px" }}>
            Visual guides and infographics on dissertation writing, thesis preparation, research methodology, and academic concepts.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 20px" }}>
        {proxied?.content && proxied.content.trim().length > 100 ? (
          <div className="library-content" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: proxied.content }} />
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px" }}>
            {[
              { title: "Dissertation Writing Process", desc: "Step-by-step visual guide to completing your dissertation from topic selection to submission.", href: "/dissertation-writing-service/" },
              { title: "Research Methodology Overview", desc: "Visual breakdown of qualitative, quantitative and mixed-methods research approaches.", href: "/research-methodology/" },
              { title: "Harvard Referencing Guide", desc: "Quick-reference infographic for Harvard in-text citations and reference list entries.", href: "/referencing-and-citation-manual-of-styles/harvard-referencing-guide/" },
              { title: "Dissertation Structure", desc: "Chapter-by-chapter infographic showing the anatomy of a complete dissertation.", href: "/library/dissertation-index/" },
              { title: "Literature Review Tips", desc: "Visual checklist for writing a comprehensive and critical literature review.", href: "/help-guide/guidelines-for-writing-a-literature-review/" },
              { title: "APA Referencing at a Glance", desc: "Quick-reference infographic for APA 7th edition citations and reference formatting.", href: "/referencing-and-citation-manual-of-styles/apa-referencing-guide/" },
            ].map((card) => (
              <Link
                key={card.title}
                href={card.href}
                style={{ textDecoration: "none" }}
              >
                <div style={{
                  background: "#fff",
                  border: "1px solid #dde2ef",
                  borderRadius: "10px",
                  padding: "24px",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  transition: "box-shadow 0.2s",
                }}>
                  <div style={{
                    width: "48px",
                    height: "48px",
                    background: "linear-gradient(135deg,#1a2a6c,#2563b0)",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.4rem",
                    color: "#fff",
                    flexShrink: 0,
                  }}>
                    📊
                  </div>
                  <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "0.97rem", color: "#1a2a6c", margin: 0, lineHeight: 1.4 }}>
                    {card.title}
                  </h3>
                  <p style={{ color: "#555", fontSize: "0.87rem", lineHeight: 1.6, margin: 0 }}>
                    {card.desc}
                  </p>
                  <span style={{ color: "#e87722", fontSize: "0.85rem", fontWeight: 700, marginTop: "auto" }}>
                    Learn more →
                  </span>
                </div>
              </Link>
            ))}
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
