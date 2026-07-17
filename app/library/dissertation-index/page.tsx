import Link from "next/link";
import type { Metadata } from "next";
import { fetchProxiedPage } from "@/lib/api/proxyPage";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Dissertation Index — Sample Works",
  description: "Browse PhD and Masters dissertation sample works across all academic disciplines. Tutors India library of dissertation examples.",
  
  alternates: { canonical: "https://tutorsindia.com/library/dissertation-index/" },
};

export default async function DissertationIndexPage() {
  const proxied = await fetchProxiedPage("/library/dissertation-index/");

  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "52px 20px 44px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <Link href="/library/" style={{ color: "#a0b8e0" }}>Library</Link>{" / "}
            <span style={{ color: "#fff" }}>Dissertation Index</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.4rem,3vw,2rem)", marginBottom: "12px" }}>
            {proxied?.title || "Dissertation Index"}
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "0.97rem", maxWidth: "680px" }}>
            Browse PhD and Masters dissertation sample works across all academic disciplines.
          </p>
        </div>
      </section>

      {/* Proxied content */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 20px" }}>
        {proxied?.content && proxied.content.trim().length > 100 ? (
          <div
            className="library-content"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{ __html: proxied.content }}
          />
        ) : (
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "32px" }}>
            <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "16px" }}>
              Our dissertation index contains sample works across all academic subjects. Please visit the live site or order our expert support.
            </p>
            <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
              <Link href="/order-now/" style={{ padding: "10px 24px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
              <Link href="/library/" style={{ padding: "10px 24px", border: "1.5px solid #1a2a6c", color: "#1a2a6c", borderRadius: "5px", fontWeight: 600 }}>← Library</Link>
            </div>
          </div>
        )}
      </div>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "44px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "10px" }}>Need Dissertation Writing Help?</h2>
        <p style={{ color: "#c5d5f0", fontSize: "0.96rem", marginBottom: "18px" }}>Our PhD-qualified writers provide comprehensive dissertation support from topic selection to submission.</p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "11px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "11px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
