import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Download Service Brochures",
  description: "Download Tutors India service brochures — Dissertation, Coursework, Publication Support, Development, Editing and more.",
  alternates: { canonical: "https://www.tutorsindia.com/brochure/" },
};

const brochures = [
  {
    title: "Best Doctoral Dissertation Writing Service",
    img: "/images/brochures/doctoral-dissertation.webp",
    pdf: null,
  },
  {
    title: "Economics and Finance Dissertation Writing Guidance",
    img: "/images/brochures/economics-finance.webp",
    pdf: null,
  },
  {
    title: "Life Science Dissertation and Assignment Help",
    img: "/images/brochures/life-science.webp",
    pdf: null,
  },
  {
    title: "Coursework Writing",
    img: "/images/brochures/coursework-writing.webp",
    pdf: "/docs/coursework-writing-brochure.pdf",
  },
  {
    title: "Publication Support",
    img: "/images/brochures/publication-support.webp",
    pdf: "/docs/publication-support-brochure.pdf",
  },
  {
    title: "Master Dissertation Writing Service",
    img: "/images/brochures/master-dissertation.webp",
    pdf: "/docs/master-dissertation-brochure.pdf",
  },
  {
    title: "Development",
    img: "/images/brochures/development.webp",
    pdf: "/docs/development-brochure.pdf",
  },
  {
    title: "Editing Services",
    img: "/images/brochures/editing-services.webp",
    pdf: "/docs/editing-services-brochure.pdf",
  },
  {
    title: "PhD / DBA Dissertation",
    img: "/images/brochures/phd-dissertation.webp",
    pdf: "/docs/phd-dissertation-brochure.pdf",
  },
];

export default function BrochurePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Brochure" }]} />
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
        <p style={{ color: "#c5d5f0", fontSize: "0.96rem", marginBottom: "18px" }}>Our PhD-qualified writers provide tailored support for every stage of your academic journey.</p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "11px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "11px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
