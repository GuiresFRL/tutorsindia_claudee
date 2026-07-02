import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
export const metadata: Metadata = { title: "Scientific Editing Services | Medical & Research Manuscripts", description: "Expert Scientific Editing Services for medical and research manuscripts. Native English editors with scientific expertise. Publication quality. Reporting guidelines. Tutors India." };
const faqs = [
  { q: "What is scientific editing?", a: "A medical writer has to communicate scientific information in a clear manner appropriate to the target audience. Our scientific editors ensure your research meets the highest publication standards by combining language editing with technical accuracy review — ensuring scientific claims, terminology, data presentation, and methodology descriptions are all accurate and clearly communicated." },
  { q: "What scientific documents do you edit?", a: "We edit all types of scientific documents including original research articles, review articles, systematic reviews, meta-analyses, case reports, letters to the editor, conference abstracts, grant proposals, clinical study reports, and scientific theses and dissertations across all life science, medical, engineering, and natural science disciplines." },
  { q: "Do your editors have scientific expertise?", a: "Yes. All our scientific editors are subject matter experts with PhD or Masters degrees in the relevant scientific discipline. They are not just copy editors — they understand the science, assess the soundness of the methodology and conclusions, and ensure the technical content is accurately and clearly communicated." },
  { q: "Do you follow scientific reporting guidelines?", a: "Yes. We ensure compliance with all major scientific reporting guidelines including CONSORT (for randomised controlled trials), STROBE (for observational studies), PRISMA (for systematic reviews and meta-analyses), CARE (for case reports), STARD (for diagnostic accuracy studies), and ARRIVE (for animal research)." },
  { q: "How quickly can you complete scientific editing?", a: "Standard scientific editing for a journal manuscript (3,000–5,000 words) is typically completed within 2–5 days. Longer documents or comprehensive technical editing may take up to 7 days. Express service is available for urgent journal submission deadlines." },
];
export default function ScientificEditingPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}<Link href="/our-services/editing-services/" style={{ color: "#a0b8e0" }}>Editing Services</Link>{" / "}<span style={{ color: "#fff" }}>Scientific Editing</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>Scientific Editing Services for Research Manuscripts</h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>A medical writer has to communicate scientific information in a clear manner appropriate to the target audience. Our scientific editors ensure your research meets the highest publication standards — combining language editing with technical accuracy review across all life science, medical, engineering, and natural science disciplines.</p>
            <p style={{ color: "#f9c74f", fontSize: "0.92rem", fontWeight: 600, marginBottom: "20px" }}>CONSORT · STROBE · PRISMA · CARE · PhD Scientific Editors</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/samples/publication-research.jpg" alt="Academic editing and research support" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>PhD Scientific<br />Editors Only<br />All Reporting Guidelines</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px", marginBottom: "28px" }} className="three-col-grid">
          {[{ icon: "🔬", t: "Language & Scientific Editing", d: "Combined language editing and technical accuracy review by native English-speaking subject matter experts." }, { icon: "📋", t: "Reporting Guideline Compliance", d: "CONSORT, STROBE, PRISMA, CARE, STARD, and ARRIVE compliance checking and completion." }, { icon: "📄", t: "Journal-Specific Formatting", d: "Formatting to exact target journal specifications — author guidelines, reference styles, figure requirements." }].map(s => (<div key={s.t} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px" }}><div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{s.icon}</div><h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{s.t}</h3><p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.65 }}>{s.d}</p></div>))}
        </div>
        <div style={{ marginBottom: "28px" }}><h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Frequently Asked Questions</h2><FaqAccordion faqs={faqs} /></div>
      </section>
      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Expert Scientific Editing for Your Manuscript</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>PhD Editors · All Disciplines · CONSORT/STROBE/PRISMA · Response in 30 min</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
