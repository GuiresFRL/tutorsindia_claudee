import Link from "next/link";
import type { Metadata } from "next";
import { fetchProxiedPage } from "@/lib/api/proxyPage";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Topic Selection Sample Work",
  description: "Browse topic selection sample work from Tutors India's PhD-qualified academic experts. Dissertation and research topic samples across all disciplines.",
  
  alternates: { canonical: "https://tutorsindia.com/topic-selection-sample-work/" },
};

export default async function TopicSelectionSampleWorkPage() {
  const proxied = await fetchProxiedPage("/topic-selection-sample-work/");

  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "52px 20px 44px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <span style={{ color: "#fff" }}>Topic Selection Sample Work</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.4rem,3vw,2rem)", marginBottom: "12px" }}>
            {proxied?.title || "Topic Selection Sample Work"}
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "0.97rem", maxWidth: "680px" }}>
            Sample academic work covering topic selection across all disciplines — curated by our PhD-qualified expert writers.
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
              Topic selection sample work is available from our PhD-qualified expert writers. Contact us to discuss your specific requirements.
            </p>
            <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
              <Link href="/order-now/" style={{ padding: "10px 24px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
              <Link href="/our-services/masters-dissertation-writing-services/dissertation-topic/" style={{ padding: "10px 24px", border: "1.5px solid #1a2a6c", color: "#1a2a6c", borderRadius: "5px", fontWeight: 600 }}>Topic Selection Service</Link>
            </div>
          </div>
        )}
      </div>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "44px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "10px" }}>Need Help Selecting a Dissertation Topic?</h2>
        <p style={{ color: "#c5d5f0", fontSize: "0.96rem", marginBottom: "18px" }}>Our PhD-qualified experts help you identify and refine the perfect research topic for your dissertation.</p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "11px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "11px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
