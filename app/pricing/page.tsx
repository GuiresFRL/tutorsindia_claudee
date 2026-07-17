import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Academic Writing Services",
  description: "Transparent pricing for Masters dissertation, PhD dissertation, statistical analysis, manuscript writing and editing services. Competitive student-friendly rates. Tutors India.",
  alternates: { canonical: "https://tutorsindia.com/pricing/" },
};

const ugPgPricing = [
  { service: "Topic & Problem Identification", detail: "2–3 topics with 500-word descriptions each", price: "From £320" },
  { service: "Research Proposal", detail: "1,000–1,500 words with full proposal structure", price: "From £300" },
  { service: "Full Dissertation (UG/PG)", detail: "12,000 words — complete dissertation", price: "From £950" },
  { service: "Questionnaire Development", detail: "20–25 questions with response categories", price: "From £300" },
  { service: "Literature Review", detail: "3,000–5,000 words with 80+ references", price: "From £320" },
  { service: "Research Methodology", detail: "2,000–3,000 words with full justification", price: "From £280" },
  { service: "Statistical Analysis", detail: "Data analysis plus 2,000 words interpretation", price: "From £450" },
  { service: "Editing & Proofreading", detail: "Per 10,000 words — language and technical", price: "From £180" },
];

const phdPricing = [
  { service: "PhD Topic & Problem Identification", detail: "2–3 topics with 500-word descriptions each", price: "From £480" },
  { service: "PhD Research Proposal", detail: "2,500–3,500 words with full structure", price: "From £640" },
  { service: "PhD Full Dissertation", detail: "25,000 words — complete doctoral dissertation", price: "From £1,700" },
  { service: "PhD Synopsis", detail: "2,000–3,000 words synopsis document", price: "From £480" },
  { service: "PhD Statistical Analysis", detail: "Complex analysis plus 3,000+ words", price: "From £890" },
  { service: "PhD Literature Review", detail: "5,000–8,000 words with 100+ references", price: "From £560" },
  { service: "PhD Viva Preparation", detail: "Comprehensive viva coaching package", price: "From £480" },
  { service: "PhD Dissertation Rework", detail: "Full rework based on examiner feedback", price: "From £960" },
];

const publicationPricing = [
  { service: "Journal Manuscript Writing", detail: "2,500 words (under 1.0 impact factor)", price: "From £933" },
  { service: "Statistical Analysis for Manuscripts", detail: "Analysis plus results section writing", price: "From £890" },
  { service: "Language Editing", detail: "Per 10,000 words — native English editors", price: "From £180" },
  { service: "Technical Editing", detail: "Per 10,000 words — subject matter expert", price: "From £240" },
  { service: "Conference Abstract", detail: "300–500 words compelling abstract", price: "From £180" },
  { service: "Grant Proposal Writing", detail: "Complete grant application package", price: "From £960" },
];

const includes = [
  "Abstract or Executive Summary — Free",
  "Free research articles used in writing (PDF)",
  "Questionnaire or interview guide — Free",
  "SPSS data sheets and output — Free",
  "Redrawn graphs and tables — Free",
  "Free tutoring sessions on the work",
  "Appendices at no additional cost",
  "Plagiarism report (Turnitin certificate)",
  "Unlimited free revisions",
  "Three-level quality check",
  "Chapter-by-chapter delivery",
  "Dedicated project coordinator",
];

export default function PricingPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<span style={{ color: "#fff" }}>Pricing</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.6rem,3vw,2.2rem)", marginBottom: "14px" }}>Pricing</h1>
            <p style={{ color: "#c5d5f0", fontSize: "1.05rem", marginBottom: "10px" }}>A Trusted &amp; Academically Sound Service Representing Various Countries</p>
            <p style={{ color: "#a0b8e0", fontSize: "0.92rem", lineHeight: 1.7, maxWidth: "680px", marginBottom: "20px" }}>
              Tutors India provides world-class academic writing services at affordable, student-friendly rates. Our experts are globally available and work as per your currency rates and timings. All prices are in GBP — contact us for rates in USD, AED, INR, AUD, and other currencies.
            </p>
            <div style={{ background: "rgba(249,199,79,0.2)", border: "1px solid rgba(249,199,79,0.4)", borderRadius: "8px", padding: "10px 16px", marginBottom: "22px", fontSize: "0.85rem", color: "#f9c74f" }}>
              ⚠️ <strong>Note:</strong> Prices shown are starting prices. Final price depends upon your specific requirements, deadline, and complexity. Contact us for an exact quote within 30 minutes.
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Get a Free Quote</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/samples/dissertation-samples.webp" alt="Academic experts collaborating" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>GBP · USD · AED<br />INR · AUD<br />All Currencies</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>

        {/* UG/PG Pricing */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>
          Masters / Postgraduate Services
        </h2>
        <p style={{ color: "#666", fontSize: "0.96rem", marginBottom: "20px" }}>UG &amp; PG level dissertation, assignment and research support</p>
        <div style={{ background: "#fff", borderRadius: "12px", border: "1px solid #dde2ef", overflow: "hidden", marginBottom: "40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr auto", background: "#1a2a6c", color: "#fff", padding: "14px 20px" }}>
            <div style={{ fontSize: "0.94rem", fontWeight: 700 }}>Service</div>
            <div style={{ fontSize: "0.94rem", fontWeight: 700 }}>Details</div>
            <div style={{ fontSize: "0.94rem", fontWeight: 700, textAlign: "right" }}>Starting Price</div>
          </div>
          {ugPgPricing.map((row, i) => (
            <div key={row.service} style={{ display: "grid", gridTemplateColumns: "1fr 1fr auto", padding: "14px 20px", borderBottom: i < ugPgPricing.length - 1 ? "1px solid #f0f2fa" : "none", background: i % 2 === 0 ? "#fff" : "#f9f9ff", alignItems: "center" }}>
              <div style={{ fontSize: "0.94rem", fontWeight: 600, color: "#1a2a6c" }}>{row.service}</div>
              <div style={{ fontSize: "0.82rem", color: "#666" }}>{row.detail}</div>
              <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#e87722", textAlign: "right", whiteSpace: "nowrap" }}>{row.price}</div>
            </div>
          ))}
        </div>

        {/* PhD Pricing */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>PhD / DBA Services</h2>
        <p style={{ color: "#666", fontSize: "0.96rem", marginBottom: "20px" }}>Doctoral level dissertation, research, and academic support</p>
        <div style={{ background: "#fff", borderRadius: "12px", border: "1px solid #dde2ef", overflow: "hidden", marginBottom: "40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr auto", background: "#2563b0", color: "#fff", padding: "14px 20px" }}>
            <div style={{ fontSize: "0.94rem", fontWeight: 700 }}>Service</div>
            <div style={{ fontSize: "0.94rem", fontWeight: 700 }}>Details</div>
            <div style={{ fontSize: "0.94rem", fontWeight: 700, textAlign: "right" }}>Starting Price</div>
          </div>
          {phdPricing.map((row, i) => (
            <div key={row.service} style={{ display: "grid", gridTemplateColumns: "1fr 1fr auto", padding: "14px 20px", borderBottom: i < phdPricing.length - 1 ? "1px solid #f0f2fa" : "none", background: i % 2 === 0 ? "#fff" : "#f9f9ff", alignItems: "center" }}>
              <div style={{ fontSize: "0.94rem", fontWeight: 600, color: "#1a2a6c" }}>{row.service}</div>
              <div style={{ fontSize: "0.82rem", color: "#666" }}>{row.detail}</div>
              <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#e87722", textAlign: "right", whiteSpace: "nowrap" }}>{row.price}</div>
            </div>
          ))}
        </div>

        {/* Publication Pricing */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Publication &amp; Editing Services</h2>
        <p style={{ color: "#666", fontSize: "0.96rem", marginBottom: "20px" }}>Manuscript writing, editing, statistical analysis, and publication support</p>
        <div style={{ background: "#fff", borderRadius: "12px", border: "1px solid #dde2ef", overflow: "hidden", marginBottom: "48px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr auto", background: "#059669", color: "#fff", padding: "14px 20px" }}>
            <div style={{ fontSize: "0.94rem", fontWeight: 700 }}>Service</div>
            <div style={{ fontSize: "0.94rem", fontWeight: 700 }}>Details</div>
            <div style={{ fontSize: "0.94rem", fontWeight: 700, textAlign: "right" }}>Starting Price</div>
          </div>
          {publicationPricing.map((row, i) => (
            <div key={row.service} style={{ display: "grid", gridTemplateColumns: "1fr 1fr auto", padding: "14px 20px", borderBottom: i < publicationPricing.length - 1 ? "1px solid #f0f2fa" : "none", background: i % 2 === 0 ? "#fff" : "#f9f9ff", alignItems: "center" }}>
              <div style={{ fontSize: "0.94rem", fontWeight: 600, color: "#1a2a6c" }}>{row.service}</div>
              <div style={{ fontSize: "0.82rem", color: "#666" }}>{row.detail}</div>
              <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#e87722", textAlign: "right", whiteSpace: "nowrap" }}>{row.price}</div>
            </div>
          ))}
        </div>

        {/* What's Included */}
        <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "36px", marginBottom: "48px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "16px", textAlign: "center" }}>Everything Included — No Hidden Charges</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "10px" }} className="four-col-grid">
            {includes.map(item => (
              <div key={item} style={{ display: "flex", gap: "8px", fontSize: "0.82rem", color: "#c5d5f0", padding: "6px 0" }}>
                <span style={{ color: "#f9c74f", fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
              </div>
            ))}
          </div>
        </div>

        {/* Get Quote */}
        <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "36px", border: "1px solid #dde2ef", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Get Your Custom Quote in 30 Minutes</h2>
          <p style={{ color: "#666", fontSize: "0.93rem", marginBottom: "20px" }}>
            Prices may vary based on your specific requirements, deadline, and complexity. Contact us now for an accurate, no-obligation quote.
          </p>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap", marginBottom: "16px" }}>
            <a href="tel:+441143520021" style={{ color: "#1a2a6c", fontWeight: 600 }}>📞 +44-1143520021 (UK)</a>
            <a href="tel:+918754446690" style={{ color: "#1a2a6c", fontWeight: 600 }}>📞 +91 8754446690 (India)</a>
            <a href="mailto:info@tutorsindia.com" style={{ color: "#1a2a6c", fontWeight: 600 }}>✉ info@tutorsindia.com</a>
          </div>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/order-now/" style={{ padding: "12px 32px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Get a Free Quote</Link>
            <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #1a2a6c", color: "#1a2a6c", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
          </div>
        </div>
      </section>
      <style>{`@media(max-width:900px){.four-col-grid{grid-template-columns:1fr 1fr!important;}} @media(max-width:600px){.four-col-grid{grid-template-columns:1fr!important;} .price-row{grid-template-columns:1fr!important;}}`}</style>
    </>
  );
}
