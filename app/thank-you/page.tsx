import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your enquiry has been received. Our team will contact you within 30 minutes.",
  alternates: { canonical: "https://www.tutorsindia.com/thank-you/" },
};

export default function ThankYouPage() {
  return (
    <>
    <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Thank You" , url: "https://www.tutorsindia.com/thank-you/" }]} />
    <section style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "60px 20px", background: "#f5f7fb" }}>
      <div style={{ maxWidth: "560px", width: "100%", background: "#fff", borderRadius: "12px", border: "1px solid #dde2ef", boxShadow: "0 4px 24px rgba(26,42,108,0.08)", padding: "48px 40px", textAlign: "center" }}>
        {/* Checkmark */}
        <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "linear-gradient(135deg,#1a2a6c,#2563b0)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 18L15 25L28 11" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <h1 style={{ fontFamily: "Merriweather, serif", fontSize: "1.8rem", color: "#1a2a6c", marginBottom: "12px" }}>
          Thank You!
        </h1>
        <p style={{ fontSize: "1.05rem", color: "#444", lineHeight: 1.7, marginBottom: "8px" }}>
          Your enquiry has been received successfully.
        </p>
        <p style={{ fontSize: "0.95rem", color: "#666", lineHeight: 1.7, marginBottom: "32px" }}>
          One of our academic consultants will contact you within <strong>30 minutes</strong> with a detailed quote and next steps.
        </p>

        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" style={{ background: "#1a2a6c", color: "#fff", padding: "12px 28px", borderRadius: "6px", fontWeight: 600, fontSize: "0.95rem", textDecoration: "none" }}>
            Back to Home
          </Link>
          <Link href="/our-services/" style={{ background: "#fff", color: "#1a2a6c", padding: "12px 28px", borderRadius: "6px", fontWeight: 600, fontSize: "0.95rem", border: "2px solid #1a2a6c", textDecoration: "none" }}>
            Our Services
          </Link>
        </div>

        <p style={{ marginTop: "32px", fontSize: "0.82rem", color: "#aaa" }}>
          Need urgent help?{" "}
          <a href="https://wa.me/918754446690" style={{ color: "#25d366", fontWeight: 600 }}>WhatsApp us</a>{" "}
          or call{" "}
          <a href="tel:+441143520021" style={{ color: "#1a2a6c", fontWeight: 600 }}>+44-1143520021</a>
        </p>
      </div>
    </section>
    </>
  );
}
