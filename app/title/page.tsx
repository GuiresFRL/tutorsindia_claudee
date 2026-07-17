import Link from "next/link";
import type { Metadata } from "next";
import { getTIChildPages } from "@/lib/api/tutorsindia";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Free Dissertation Titles by Subject",
  description: "Browse hundreds of free dissertation title ideas across all subjects — Business, Engineering, Computer Science, Biology, Law, and more. Updated regularly.",
  
  alternates: { canonical: "https://www.tutorsindia.com/title/" },
};

export default async function TitlePage() {
  const pages = await getTIChildPages(15900); // parent ID for /title/

  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "52px 20px 44px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <span style={{ color: "#fff" }}>Dissertation Titles</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.2rem)", marginBottom: "10px" }}>
            Dissertation Title Ideas
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "0.97rem", maxWidth: "680px", marginBottom: "6px" }}>
            Browse free dissertation title ideas across {pages.length} subject areas. Get expert help turning a title into a full dissertation.
          </p>
          <p style={{ color: "#a0b8e0", fontSize: "0.8rem" }}>{pages.length} subject areas available</p>
        </div>
      </section>

      {/* Grid of subject cards */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "44px 20px" }}>
        <div className="three-col-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }}>
          {pages.map((p) => (
            <Link
              key={p.id}
              href={`/title/${p.slug}/`}
              style={{ display: "flex", flexDirection: "column", background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "22px", textDecoration: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.04)", transition: "box-shadow 0.2s" }}
            >
              <div style={{ fontSize: "1.6rem", marginBottom: "10px" }}>📄</div>
              <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "0.95rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "auto", lineHeight: 1.45 }}
                dangerouslySetInnerHTML={{ __html: p.title.rendered }} />
              <span style={{ marginTop: "14px", fontSize: "0.82rem", color: "#e87722", fontWeight: 700 }}>View Titles →</span>
            </Link>
          ))}
        </div>

        {/* Also see topics */}
        <div style={{ marginTop: "44px", background: "#f5f6fa", borderRadius: "12px", padding: "28px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
          <div>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", color: "#1a2a6c", marginBottom: "4px" }}>Also Browse Dissertation Topics</h3>
            <p style={{ fontSize: "0.86rem", color: "#666" }}>Looking for broader research topics instead of specific titles?</p>
          </div>
          <Link href="/topic/" style={{ padding: "10px 22px", background: "#1a2a6c", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "0.96rem", whiteSpace: "nowrap" }}>
            Dissertation Topics →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "48px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: "10px" }}>Need a Custom Dissertation Title?</h2>
        <p style={{ color: "#c5d5f0", fontSize: "0.93rem", marginBottom: "20px" }}>Our experts craft unique, researchable dissertation titles tailored to your subject and university.</p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 30px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 30px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
