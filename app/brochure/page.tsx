import Link from "next/link";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Tutors India Brochure List | Download Service Brochures",
  description: "Download Tutors India service brochures — Dissertation, Coursework, Publication Support, Development, Editing and more.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://tutorsindia.com/brochure/" },
};

const BASE = "https://www.tutorsindia.com/wp-content/uploads";

const brochures = [
  {
    title: "Best Doctoral Dissertation Writing Service",
    img: `${BASE}/2024/08/Best-Doctoral-Dissertation-Writing-Service-scaled-1.webp`,
    pdf: null,
  },
  {
    title: "Economics and Finance Dissertation Writing Guidance",
    img: `${BASE}/2024/08/Economics-and-Finance-Dissertation-Writing-Guidance-scaled-1.webp`,
    pdf: null,
  },
  {
    title: "Life Science Dissertation and Assignment Help",
    img: `${BASE}/2024/08/Life-Science-dissertation-and-assignment-help-scaled-1.webp`,
    pdf: null,
  },
  {
    title: "Coursework Writing",
    img: `${BASE}/2024/08/Coursework-Writing-1.webp`,
    pdf: `${BASE}/2021/11/Coursework-Writing.pdf`,
  },
  {
    title: "Publication Support",
    img: `${BASE}/2024/08/Publication-Support.webp`,
    pdf: `${BASE}/2021/11/Publication-Support.pdf`,
  },
  {
    title: "Master Dissertation Writing Service",
    img: `${BASE}/2024/08/Master-Dissertation-writing-service.webp`,
    pdf: `${BASE}/2021/11/Master-Dissertation.pdf`,
  },
  {
    title: "Development",
    img: `${BASE}/2024/08/Development-1.webp`,
    pdf: `${BASE}/2021/11/Development.pdf`,
  },
  {
    title: "Editing Services",
    img: `${BASE}/2024/08/Editing-Services-2.webp`,
    pdf: `${BASE}/2021/11/Editing-Services.pdf`,
  },
  {
    title: "PhD / DBA Dissertation",
    img: `${BASE}/2024/08/PHD-Dissertation.webp`,
    pdf: `${BASE}/2021/11/PHD-Dissertation.pdf`,
  },
];

export default function BrochurePage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "52px 20px 44px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>
            <span style={{ color: "#a0b8e0" }}> / </span>
            <span style={{ color: "#fff" }}>Brochure</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.4rem,3vw,2rem)", marginBottom: "12px" }}>
            Tutors India Brochure List
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "0.97rem", maxWidth: "680px" }}>
            Download our service brochures to learn more about how Tutors India can support your academic journey.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 20px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: "28px",
        }}>
          {brochures.map((b) => (
            <div key={b.title} style={{
              background: "#fff",
              border: "1px solid #dde2ef",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
              display: "flex",
              flexDirection: "column",
            }}>
              <img
                src={b.img}
                alt={b.title}
                style={{ width: "100%", height: "180px", objectFit: "cover", display: "block" }}
              />
              <div style={{ padding: "16px", flexGrow: 1, display: "flex", flexDirection: "column", gap: "12px" }}>
                <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "0.95rem", color: "#1a2a6c", lineHeight: 1.4, margin: 0 }}>
                  {b.title}
                </h3>
                {b.pdf ? (
                  <a
                    href={b.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      marginTop: "auto",
                      display: "inline-block",
                      padding: "8px 18px",
                      background: "#e87722",
                      color: "#fff",
                      borderRadius: "5px",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      textDecoration: "none",
                      textAlign: "center",
                    }}
                  >
                    View / Download
                  </a>
                ) : (
                  <span style={{ marginTop: "auto", fontSize: "0.82rem", color: "#888" }}>Coming soon</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "44px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "10px" }}>Need Academic Writing Help?</h2>
        <p style={{ color: "#c5d5f0", fontSize: "0.9rem", marginBottom: "18px" }}>Our PhD-qualified writers provide tailored support for every stage of your academic journey.</p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "11px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "11px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
