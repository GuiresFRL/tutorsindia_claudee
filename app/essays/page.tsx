import Link from "next/link";
import type { Metadata } from "next";
import { getTIChildPages, stripTIHtml } from "@/lib/api/tutorsindia";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Essays — Free University Essay Examples by Subject | Tutors India",
  description: "Browse free university essay examples across 50+ subjects. Expert-written samples demonstrating proper structure, research methods, and citation styles.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://tutorsindia.com/essays/" },
};

export default async function EssaysPage() {
  const subjects = await getTIChildPages(14476);

  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "52px 20px 44px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <span style={{ color: "#fff" }}>Essays</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.6rem,3vw,2.3rem)", marginBottom: "12px" }}>
            Free University Essay Examples
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "0.97rem", maxWidth: "680px", marginBottom: "20px" }}>
            Browse essay samples written by our expert academics to demonstrate proper structure, research methods, and citation styles. Use them as a learning aid for your studies.
          </p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Link href="/order-now/" style={{ padding: "10px 24px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "0.9rem" }}>Get Essay Help</Link>
            <Link href="/our-sample-works/" style={{ padding: "10px 24px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, fontSize: "0.9rem" }}>View Sample Works</Link>
          </div>
        </div>
      </section>

      {/* Info strip */}
      <div style={{ background: "#fff8f4", borderBottom: "1px solid #ffe0c8", padding: "14px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", fontSize: "0.87rem", color: "#555" }}>
          📝 These essay examples are provided as a <strong>learning aid</strong> for your studies.
          {subjects.length > 0 && <> <strong>{subjects.length} subjects available.</strong></>}
        </div>
      </div>

      {/* Subject grid */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "44px 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", color: "#1a2a6c", marginBottom: "24px" }}>
          Browse Essays by Subject
        </h2>

        {subjects.length > 0 ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "16px" }}>
            {subjects.map((s) => {
              const raw = stripTIHtml(s.excerpt?.rendered ?? "", 90);
              const desc = raw.includes("Info:") || raw.includes("Published:") ? "" : raw;
              const date = s.modified
                ? new Date(s.modified).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })
                : "";
              return (
                <Link
                  key={s.id}
                  href={`/essays/${s.slug}/`}
                  style={{
                    display: "flex", flexDirection: "column", background: "#fff",
                    border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px",
                    textDecoration: "none", boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "8px" }}>
                    <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>📄</span>
                    <h3
                      style={{ fontFamily: "Merriweather,serif", fontSize: "0.88rem", fontWeight: 700, color: "#1a2a6c", lineHeight: 1.4 }}
                      dangerouslySetInnerHTML={{ __html: s.title.rendered }}
                    />
                  </div>
                  {desc && <p style={{ fontSize: "0.78rem", color: "#666", lineHeight: 1.55, flex: 1 }}>{desc}</p>}
                  <div style={{ marginTop: "12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    {date && <span style={{ fontSize: "0.72rem", color: "#999" }}>Updated {date}</span>}
                    <span style={{ fontSize: "0.78rem", color: "#e87722", fontWeight: 700 }}>View Essays →</span>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <p style={{ color: "#666" }}>Loading essay subjects…</p>
        )}
      </section>

      {/* Essay Writing Service CTA strip */}
      <section style={{ background: "#f5f6fa", padding: "36px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}>
          <div>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", color: "#1a2a6c", marginBottom: "6px" }}>Essay Writing Service</h2>
            <p style={{ color: "#555", fontSize: "0.9rem", maxWidth: "560px" }}>Need a custom essay? Our expert writers craft original, plagiarism-free essays tailored to your subject, level, and deadline.</p>
          </div>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Link href="/our-services/coursework-writing/essay-writing-services/" style={{ padding: "11px 24px", background: "#1a2a6c", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "0.9rem" }}>Essay Writing Service</Link>
            <Link href="/order-now/" style={{ padding: "11px 24px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "0.9rem" }}>Order Now</Link>
          </div>
        </div>
      </section>

      {/* Also explore */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "28px 20px" }}>
        <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "14px" }}>Also Explore</h3>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {[
            { label: "Examples", href: "/examples/" },
            { label: "Dissertation Titles", href: "/title/" },
            { label: "Dissertation Topics", href: "/topic/" },
            { label: "Sample Works", href: "/our-sample-works/" },
            { label: "Referencing Styles", href: "/referencing-and-citation-manual-of-styles/" },
          ].map((l) => (
            <Link key={l.href} href={l.href} style={{ padding: "8px 16px", border: "1.5px solid #1a2a6c", color: "#1a2a6c", borderRadius: "5px", fontSize: "0.85rem", fontWeight: 600 }}>{l.label}</Link>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "48px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: "10px" }}>Need a Custom Essay Written?</h2>
        <p style={{ color: "#c5d5f0", fontSize: "0.93rem", marginBottom: "20px" }}>Our PhD-qualified writers produce high-quality, plagiarism-free essays tailored to your exact specifications.</p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 30px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 30px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
