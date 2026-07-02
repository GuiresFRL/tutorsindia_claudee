import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
export const metadata: Metadata = { title: "Journal & Dissertation Formatting Service", description: "Expert Formatting Service for journals and dissertations. Word count, margins, fonts, headings, citations, figures, tables. All journal and university styles. Tutors India." };
const faqs = [
  { q: "What does your formatting service include?", a: "Our journal and dissertation formatting support team ensures your paper meets your journal's or university's exact requirements. We handle word count compliance, paper size, margin settings, line spacing, page numbering, text font, alignment, front cover, acknowledgement, abstract, table of contents, lists of figures and tables, abbreviations, main text, chapter and section headings, citation format, academic style, attribution, plagiarism check, and assessment report." },
  { q: "Which formatting styles do you support?", a: "We handle all formatting styles including Harvard, APA (7th edition), MLA (9th edition), Chicago (18th edition), Vancouver, Turabian, OSCOLA, IEEE, AMA, and any other university-specific or journal-specific formatting requirements. We review your target journal's author guidelines or your university's dissertation formatting guide before beginning work." },
  { q: "Can you format my dissertation to my university's exact specifications?", a: "Yes. Every university has specific dissertation formatting requirements. We review your university's official dissertation submission guidelines and ensure complete compliance including margin settings, font and point size, line spacing, header/footer requirements, page numbering, table of contents formatting, and figure and table conventions." },
  { q: "Do you also format figures and tables?", a: "Yes. All figures, tables, charts, and graphs are formatted to your target journal's or university's specific requirements — including captions, numbering, font sizes, borders, and resolution. We ensure all figures meet print-ready quality standards (typically 300 DPI for journal submission)." },
  { q: "How quickly can you complete formatting?", a: "Standard formatting for a dissertation or manuscript is typically completed within 24–48 hours. Complex documents with many figures, tables, and appendices may take 3–5 days. Express formatting is available for urgent submission deadlines." },
];
export default function FormattingServicePage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}<Link href="/our-services/editing-services/" style={{ color: "#a0b8e0" }}>Editing Services</Link>{" / "}<span style={{ color: "#fff" }}>Formatting Service</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>Journal &amp; Dissertation Formatting Service</h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>Our journal and dissertation formatting support team ensures your paper meets your journal&apos;s exact requirement. We handle all formatting styles including Harvard, APA, MLA, Chicago, Vancouver, Turabian, IEEE, and any university-specific formatting requirements.</p>
            <p style={{ color: "#f9c74f", fontSize: "0.92rem", fontWeight: 600, marginBottom: "20px" }}>All Journals · All Universities · Figures &amp; Tables · 24–48hr Delivery</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/samples/publication-research.jpg" alt="Academic editing and research support" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>All Journals<br />All Universities<br />300 DPI Figures</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Complete Formatting Checklist</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "12px" }} className="three-col-grid">
            {["Word count compliance","Paper size and margins","Line spacing (single, 1.5, double)","Page numbering and headers/footers","Font type and size (body and headings)","Front cover and title page","Acknowledgement page","Abstract formatting","Table of contents (auto-generated)","Lists of figures and tables","Abbreviations list","Chapter and section headings hierarchy","Main text academic style","Citation format (in-text)","Reference list formatting","Figure formatting and captions","Table formatting and captions","Appendices structure","Ethical compliance statement","Assessment report compliance"].map(item => (<div key={item} style={{ display: "flex", gap: "7px", fontSize: "0.81rem", color: "#555", padding: "5px 0", borderBottom: "1px solid #f0f2fa" }}><span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>✓</span> {item}</div>))}
          </div>
        </div>
        <div style={{ marginBottom: "28px" }}><h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Frequently Asked Questions</h2><FaqAccordion faqs={faqs} /></div>
      </section>
      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Your Document Formatted to Publication Standard</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>All Journals · All Universities · Figures &amp; Tables · 24–48hr Delivery · 30 min Response</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
