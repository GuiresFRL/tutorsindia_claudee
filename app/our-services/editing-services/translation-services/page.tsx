import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
export const metadata: Metadata = { title: "Academic Translation Services | Research & Manuscript", description: "Professional Translation Services for academic manuscripts and research documents. Original to desired language with academic integrity. Expert translators. Tutors India." };
const languages = ["English (British & American)","French","German","Spanish","Italian","Portuguese","Dutch","Russian","Japanese","Chinese (Simplified & Traditional)","Arabic","Korean","Turkish","Polish","Swedish"];
const faqs = [
  { q: "What translation services do you offer?", a: "Our professional translation experts provide full assistance to develop your final manuscript from original to desired language, maintaining academic integrity and technical precision. We translate academic manuscripts, dissertations, research papers, journal articles, conference papers, and other research documents." },
  { q: "Do you maintain academic terminology in translations?", a: "Yes. All translations are performed by academic translators who are subject matter experts in the relevant discipline. They ensure that technical terminology, academic conventions, and discipline-specific language are accurately translated and appropriate for the target language academic context." },
  { q: "Can you translate research manuscripts for journal submission?", a: "Yes. We translate complete research manuscripts for international journal submission — ensuring the translated version meets the journal's language standards and author guidelines. We can also perform quality checking and light editing of your translated manuscript before submission." },
  { q: "Do you translate to and from all languages?", a: "We support translation between English and all major world languages including French, German, Spanish, Italian, Portuguese, Dutch, Russian, Japanese, Chinese, Arabic, Korean, Turkish, Polish, and Swedish. Contact us to confirm availability for your specific language pair." },
  { q: "How do you ensure translation quality?", a: "All translations are performed by native speakers of the target language who are also academic subject matter experts. Every translated document is reviewed by a second translator for accuracy. We also offer back-translation verification for critical research documents to ensure accuracy." },
];
export default function TranslationServicesPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}<Link href="/our-services/editing-services/" style={{ color: "#a0b8e0" }}>Editing Services</Link>{" / "}<span style={{ color: "#fff" }}>Translation Services</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>Academic Translation Services</h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>Our professional translation experts provide full assistance to develop your final manuscript from original to desired language, maintaining academic integrity and technical precision. We serve researchers, academics, and institutions requiring accurate, context-appropriate translation of research documents.</p>
            <p style={{ color: "#f9c74f", fontSize: "0.92rem", fontWeight: 600, marginBottom: "20px" }}>15+ Languages · Academic Accuracy · Subject Matter Experts · Journal-Ready</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/samples/publication-research.jpg" alt="Academic editing and research support" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#f9c74f" }}>15+</div>
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0" }}>Languages<br />Supported<br />Native Translators</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Languages We Support</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>{languages.map(l => (<span key={l} style={{ padding: "6px 14px", background: "#f5f6fa", border: "1.5px solid #dde2ef", borderRadius: "16px", fontSize: "0.82rem", color: "#1a2a6c", fontWeight: 500 }}>{l}</span>))}</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px", marginBottom: "28px" }} className="three-col-grid">
          {[{ icon: "📄", t: "Manuscript Translation", d: "Complete research manuscripts translated maintaining academic terminology and conventions for target language journals." }, { icon: "🎓", t: "Dissertation Translation", d: "Full dissertation and thesis translation — chapter by chapter with consistent terminology throughout." }, { icon: "✏️", t: "Post-Translation Editing", d: "Quality editing of translated documents by native speakers to ensure natural academic language flow." }].map(s => (<div key={s.t} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px" }}><div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{s.icon}</div><h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{s.t}</h3><p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.65 }}>{s.d}</p></div>))}
        </div>
        <div style={{ marginBottom: "28px" }}><h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Frequently Asked Questions</h2><FaqAccordion faqs={faqs} /></div>
      </section>
      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Your Research Translated by Academic Experts</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>15+ Languages · Native Speakers · Academic Accuracy · Response in 30 min</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
