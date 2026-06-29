import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
export const metadata: Metadata = { title: "Citation Compliance & Referencing Services | Tutors India", description: "Expert Citation Compliance services. Harvard, APA, MLA, Vancouver, Chicago, OSCOLA referencing. In-text citations, reference lists, bibliographies. 100% compliance. Tutors India." };
const styles = [
  { style: "Harvard", used: "Most common in UK universities — author-date system", icon: "🇬🇧" },
  { style: "APA (7th Ed.)", used: "Psychology, Education, Social Sciences", icon: "📊" },
  { style: "MLA (9th Ed.)", used: "Humanities, Literature, Languages", icon: "📚" },
  { style: "Chicago (18th Ed.)", used: "History, Arts, Business", icon: "🏛️" },
  { style: "Vancouver", used: "Medicine, Health Sciences", icon: "🏥" },
  { style: "OSCOLA", used: "Law — Oxford Standard for Citation of Legal Authorities", icon: "⚖️" },
  { style: "Turabian", used: "Academic papers and theses", icon: "🎓" },
  { style: "IEEE", used: "Engineering and Computer Science", icon: "💻" },
  { style: "AMA", used: "American Medical Association — Medical", icon: "🩺" },
];
const faqs = [
  { q: "What citation compliance services do you offer?", a: "At Tutors India, we have dedicated experts for citation (Harvard, APA, MLA, Vancouver, and Chicago) and references work, ensuring 100% compliance with your university's specific referencing guidelines. We correct all in-text citations, build and format complete reference lists and bibliographies, and ensure complete consistency throughout your document." },
  { q: "Can you convert my references from one style to another?", a: "Yes. We can convert your entire reference list and all in-text citations from one citation style to another — for example, from Vancouver to Harvard, or from APA to Chicago. All in-text citations are updated to match the new style and the reference list is completely reformatted." },
  { q: "Do you check references for accuracy?", a: "Yes. We verify all referenced sources — checking that author names, publication years, journal names, volume numbers, page numbers, and DOIs are accurate and complete. We identify and correct missing information, incorrect formatting, and inconsistencies between in-text citations and the reference list." },
  { q: "Can you format my dissertation references to my university's specific style?", a: "Yes. Every university has slightly different interpretations of standard citation styles. We review your university's specific referencing guide and ensure your references comply with their exact requirements — including how to cite specific source types (websites, legislation, grey literature, etc.)." },
  { q: "How quickly can you complete citation compliance?", a: "Standard citation checking and formatting for a dissertation (100 references) is typically completed within 24–48 hours. Larger documents or complex conversion between styles may take 3–5 days. Express service is available for urgent submission deadlines." },
];
export default function CitationCompliancePage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}<Link href="/our-services/editing-services/" style={{ color: "#a0b8e0" }}>Editing Services</Link>{" / "}<span style={{ color: "#fff" }}>Citation Compliance</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>Citation Compliance &amp; Referencing Services</h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>At Tutors India, we have dedicated experts for citation (Harvard, APA, MLA, Vancouver, Chicago, OSCOLA, and more) and references work, ensuring 100% compliance with your university&apos;s specific referencing guidelines. We handle in-text citations, reference lists, and bibliographies.</p>
            <p style={{ color: "#f9c74f", fontSize: "0.92rem", fontWeight: 600, marginBottom: "20px" }}>Harvard · APA · MLA · Vancouver · Chicago · OSCOLA · IEEE · 100% Compliance</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/tutorsindia-logo-hd.jpg" alt="Tutors India" style={{ width: "90px", height: "90px", objectFit: "contain", marginBottom: "10px" }} />
            <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#f9c74f" }}>9+</div>
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0" }}>Citation Styles<br />100% Compliance<br />All Disciplines</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>Citation Styles We Support</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "14px" }} className="three-col-grid">
            {styles.map(s => (<div key={s.style} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "16px", display: "flex", gap: "12px", alignItems: "center" }}>
              <span style={{ fontSize: "1.6rem" }}>{s.icon}</span>
              <div>
                <div style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1a2a6c" }}>{s.style}</div>
                <div style={{ fontSize: "0.76rem", color: "#666" }}>{s.used}</div>
              </div>
            </div>))}
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "22px", marginBottom: "28px" }} className="two-col-grid">
          <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "14px" }}>What We Check &amp; Correct</h3>
            {["All in-text citations verified for accuracy","Reference list fully formatted to style","Bibliographies correctly structured","DOIs and URLs verified and formatted","Author names and dates verified","Journal names, volumes, pages checked","Consistent abbreviation of journal names","Both in-text and list references matched"].map(item => (<div key={item} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", fontSize: "0.83rem", color: "#c5d5f0" }}><span style={{ color: "#f9c74f", fontWeight: 700 }}>✓</span> {item}</div>))}
          </div>
          <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px", border: "1px solid #dde2ef" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our Guarantees</h3>
            {["100% citation style compliance","Unlimited revisions for committed work","On-time delivery guaranteed","24/7 support","Three-level quality check","100% confidentiality","Style conversion available","University-specific guidelines followed"].map((g, i) => (<div key={i} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid #dde2ef", fontSize: "0.83rem", color: "#555" }}><span style={{ color: "#e87722", fontWeight: 700 }}>{i + 1}.</span> {g}</div>))}
          </div>
        </div>
        <div style={{ marginBottom: "28px" }}><h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Frequently Asked Questions</h2><FaqAccordion faqs={faqs} /></div>
      </section>
      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get 100% Citation Compliance for Your Document</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>9+ Citation Styles · 100% Compliant · 24–48hr Delivery · Response in 30 min</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
