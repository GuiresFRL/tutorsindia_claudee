import Link from "next/link";
import type { Metadata } from "next";
import { getStaticContent } from "@/lib/api/staticContent";

export const revalidate = false;

export const metadata: Metadata = {
  title: "Future Research Directions by Subject",
  description: "Explore future research directions and emerging opportunities across all academic disciplines. Expert insights to guide your research agenda.",

  alternates: { canonical: "https://www.tutorsindia.com/future-research-directions/" },
};

export default async function FutureResearchDirectionsPage() {
  const page = getStaticContent("future-research-directions", []);
  const image = page?.featuredImage?.local ?? null;

  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "52px 20px 44px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <Link href="/insights/" style={{ color: "#a0b8e0" }}>Insights</Link>{" / "}
            <span style={{ color: "#fff" }}>Future Research Directions</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.6rem,3vw,2.3rem)", marginBottom: "12px" }}>
            {page ? page.title : "Future Research Directions"}
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "0.97rem", maxWidth: "680px", marginBottom: "20px" }}>
            Discover emerging research opportunities and future directions across all academic fields. Find your next research agenda with expert-curated insights.
          </p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Link href="/latest-research-trends/" style={{ padding: "10px 24px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, fontSize: "0.96rem" }}>Latest Research Trends</Link>
            <Link href="/topic/" style={{ padding: "10px 24px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, fontSize: "0.96rem" }}>Dissertation Topics</Link>
          </div>
        </div>
      </section>

      {/* Full WP content (Elementor article cards with images) */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 20px" }}>
        {image && (
          <div style={{ marginBottom: "28px", borderRadius: "12px", overflow: "hidden" }}>
            <img src={image} alt="Future Research Directions" style={{ width: "100%", height: "auto", maxHeight: "380px", objectFit: "cover" }} />
          </div>
        )}
        {page ? (
          <div className="wp-content" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: page.content }} />
        ) : (
          <p style={{ color: "#666" }}>Loading content…</p>
        )}
      </section>

      {/* Related */}
      <section style={{ background: "#f5f6fa", padding: "36px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
          <div>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>Explore More</h3>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {[
                { label: "Latest Research Trends", href: "/latest-research-trends/" },
                { label: "Dissertation Topics", href: "/topic/" },
                { label: "Dissertation Titles", href: "/title/" },
                { label: "Insights", href: "/insights/" },
              ].map((l) => (
                <Link key={l.href} href={l.href} style={{ padding: "7px 14px", border: "1.5px solid #1a2a6c", color: "#1a2a6c", borderRadius: "5px", fontSize: "0.83rem", fontWeight: 600 }}>{l.label}</Link>
              ))}
            </div>
          </div>
          <Link href="/order-now/" style={{ padding: "11px 24px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, whiteSpace: "nowrap" }}>Order Now</Link>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "48px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: "10px" }}>Develop Your Research Agenda</h2>
        <p style={{ color: "#c5d5f0", fontSize: "0.93rem", marginBottom: "20px" }}>Our PhD-qualified experts identify unique, future-ready research directions tailored to your subject and academic level.</p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 30px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 30px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
