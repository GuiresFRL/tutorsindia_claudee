import Link from "next/link";
import type { Metadata } from "next";
import { getTIChildPages, stripTIHtml } from "@/lib/api/tutorsindia";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Free Academic Writing Examples",
  description: "Browse free academic writing examples across all major subjects. Expert-written samples demonstrating proper structure, methodology, and referencing.",
  
  alternates: { canonical: "https://www.tutorsindia.com/examples/" },
};

export default async function ExamplesPage() {
  const subjects = await getTIChildPages(13815);

  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "52px 20px 44px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <span style={{ color: "#fff" }}>Examples</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.6rem,3vw,2.3rem)", marginBottom: "12px" }}>
            Free Academic Writing Examples
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "0.97rem", maxWidth: "680px", marginBottom: "20px" }}>
            Browse free academic writing examples written by our expert academics. Use them as a learning aid to understand proper academic structure, referencing, and methodology.
          </p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Link href="/order-now/" style={{ padding: "10px 24px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "0.96rem" }}>Get Writing Help</Link>
            <Link href="/essays/" style={{ padding: "10px 24px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, fontSize: "0.96rem" }}>Browse Essays</Link>
          </div>
        </div>
      </section>

      {/* Info strip */}
      <div style={{ background: "#fff8f4", borderBottom: "1px solid #ffe0c8", padding: "14px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", fontSize: "0.87rem", color: "#555" }}>
          📚 These examples are provided as a <strong>learning aid</strong> for your academic studies.
          {subjects.length > 0 && <> <strong>{subjects.length} subject areas available.</strong></>}
        </div>
      </div>

      {/* Subject grid */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "44px 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", color: "#1a2a6c", marginBottom: "24px" }}>
          Browse Examples by Subject
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
                  href={`/examples/${s.slug}/`}
                  style={{
                    display: "flex", flexDirection: "column", background: "#fff",
                    border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px",
                    textDecoration: "none", boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "8px" }}>
                    <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>📚</span>
                    <h3
                      style={{ fontFamily: "Merriweather,serif", fontSize: "0.94rem", fontWeight: 700, color: "#1a2a6c", lineHeight: 1.4 }}
                      dangerouslySetInnerHTML={{ __html: s.title.rendered }}
                    />
                  </div>
                  {desc && <p style={{ fontSize: "0.78rem", color: "#666", lineHeight: 1.55, flex: 1 }}>{desc}</p>}
                  <div style={{ marginTop: "12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    {date && <span style={{ fontSize: "0.72rem", color: "#999" }}>Updated {date}</span>}
                    <span style={{ fontSize: "0.78rem", color: "#e87722", fontWeight: 700 }}>View Examples →</span>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <p style={{ color: "#666" }}>Loading examples…</p>
        )}
      </section>

      {/* Related */}
      <section style={{ background: "#f5f6fa", padding: "36px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "14px" }}>Also Explore</h3>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {[
              { label: "Essays", href: "/essays/" },
              { label: "Dissertation Titles", href: "/title/" },
              { label: "Dissertation Topics", href: "/topic/" },
              { label: "Sample Works", href: "/our-sample-works/" },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{ padding: "8px 16px", border: "1.5px solid #1a2a6c", color: "#1a2a6c", borderRadius: "5px", fontSize: "0.85rem", fontWeight: 600 }}>{l.label}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "48px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: "10px" }}>Need Custom Academic Writing?</h2>
        <p style={{ color: "#c5d5f0", fontSize: "0.93rem", marginBottom: "20px" }}>Our PhD-qualified writers produce high-quality, plagiarism-free academic work tailored to your exact specifications.</p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 30px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 30px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
