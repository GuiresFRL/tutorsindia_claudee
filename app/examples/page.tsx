import Link from "next/link";
import type { Metadata } from "next";
import { getTIPageById, stripTIHtml } from "@/lib/api/tutorsindia";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const page = await getTIPageById(13815);
  const desc = page ? stripTIHtml(page.excerpt.rendered, 160) : "";
  return {
    title: "Examples — Dissertation & Assignment Examples | Tutors India",
    description: desc || "View real dissertation and assignment examples from Tutors India — structure, formatting, and academic writing at its best.",
    robots: { index: false, follow: false },
    alternates: { canonical: "https://tutorsindia.com/examples/" },
  };
}

export default async function ExamplesPage() {
  const page = await getTIPageById(13815);

  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "52px 20px 44px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <span style={{ color: "#fff" }}>Examples</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.2rem)", marginBottom: "10px" }}>
            {page ? <span dangerouslySetInnerHTML={{ __html: page.title.rendered }} /> : "Examples"}
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "0.97rem", maxWidth: "680px" }}>
            Real dissertation and assignment examples to guide your academic writing journey.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "44px 20px" }}>
        {page ? (
          <div className="wp-content" dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
        ) : (
          <p style={{ color: "#666" }}>Content loading…</p>
        )}
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "48px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: "10px" }}>Need a Custom Example?</h2>
        <p style={{ color: "#c5d5f0", fontSize: "0.93rem", marginBottom: "20px" }}>2,00,000+ scholars helped since 2001. Let our experts write yours.</p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 30px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 30px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
