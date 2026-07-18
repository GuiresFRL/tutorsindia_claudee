import Link from "next/link";
import type { Metadata } from "next";
import { fetchProxiedLibraryPage } from "@/lib/api/proxyPage";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Library — Essay & Dissertation Samples",
  description: "Browse Tutors India's academic library: essays, dissertations, proposals, methodologies, literature reviews, and manuscript templates across all subjects.",
  
  alternates: { canonical: "https://www.tutorsindia.com/library" },
};

const sections = [
  { href: "/library/essay-index/", title: "Essay Index", icon: "📝", desc: "Browse sample essays across all academic subjects — management, law, engineering, medicine, and more." },
  { href: "/library/dissertation-index/", title: "Dissertation Index", icon: "🎓", desc: "Full and partial dissertation samples at Masters and PhD level." },
  { href: "/library/proposals/", title: "Proposals", icon: "📋", desc: "Research proposal examples — structure, literature, methodology, and scope." },
  { href: "/library/introductions/", title: "Introductions", icon: "📖", desc: "Sample dissertation and thesis introduction chapters across multiple subjects." },
  { href: "/library/methodologies/", title: "Methodologies", icon: "🔬", desc: "Research methodology chapters — qualitative, quantitative, and mixed methods." },
  { href: "/library/literature-review/", title: "Literature Review", icon: "📚", desc: "Sample literature review chapters across communication, marketing, healthcare, and more." },
  { href: "/library/conclusion-and-discussion/", title: "Conclusion & Discussion", icon: "💬", desc: "Sample conclusion and discussion chapters from dissertations and research projects." },
  { href: "/library/research-projects/", title: "Research Projects", icon: "🔭", desc: "Complete research project samples demonstrating full academic writing workflows." },
  { href: "/library/manuscript-development/", title: "Manuscript Development", icon: "📄", desc: "Journal manuscript templates and formatting guides for academic publication." },
  { href: "/library/request-a-removal/", title: "Request a Removal", icon: "🗑️", desc: "Submit a request to remove your content from the Tutors India library." },
];

export default async function LibraryPage() {
  const proxied = await fetchProxiedLibraryPage("/library/");

  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "52px 20px 44px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <span style={{ color: "#fff" }}>Library</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.6rem,3vw,2.3rem)", marginBottom: "12px" }}>
            {proxied?.title || "Academic Library"}
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "0.97rem", maxWidth: "680px", marginBottom: "20px" }}>
            Browse our extensive collection of sample essays, dissertations, proposals, literature reviews, and methodologies across all academic disciplines.
          </p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Link href="/library/essay-index/" style={{ padding: "10px 24px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "0.96rem" }}>Browse Essays</Link>
            <Link href="/library/dissertation-index/" style={{ padding: "10px 24px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, fontSize: "0.96rem" }}>Dissertations</Link>
          </div>
        </div>
      </section>

      {/* Section cards */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "44px 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", color: "#1a2a6c", marginBottom: "8px" }}>Library Sections</h2>
        <p style={{ color: "#666", fontSize: "0.96rem", marginBottom: "28px" }}>{sections.length} sections — click any card to browse samples</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "18px" }}>
          {sections.map((s) => (
            <Link key={s.href} href={s.href} style={{
              display: "flex", flexDirection: "column", gap: "10px",
              background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px",
              padding: "22px", textDecoration: "none",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              borderTop: "4px solid #1a2a6c",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "1.5rem" }}>{s.icon}</span>
                <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "0.95rem", fontWeight: 700, color: "#1a2a6c" }}>{s.title}</h3>
              </div>
              <p style={{ fontSize: "0.83rem", color: "#555", lineHeight: 1.65, flex: 1 }}>{s.desc}</p>
              <span style={{ fontSize: "0.78rem", color: "#e87722", fontWeight: 700 }}>Browse →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Live proxied content (if non-trivial) */}
      {proxied?.content && proxied.content.trim().length > 200 && (
        <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px 40px" }}>
          <div className="library-content" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: proxied.content }} />
        </section>
      )}

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "48px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: "10px" }}>Need Academic Writing Help?</h2>
        <p style={{ color: "#c5d5f0", fontSize: "0.93rem", marginBottom: "20px" }}>Our PhD-qualified experts provide comprehensive support across all academic disciplines.</p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 30px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 30px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
