import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
export const metadata: Metadata = { title: "Medicine & Health Science Academic Writing | Masters, PhD", description: "Expert Medicine & Health Science academic writing. Clinical medicine, nursing, public health, pharmacology, epidemiology. PRISMA, CONSORT. Tutors India." };
const areas = ["Clinical Medicine","Nursing & Midwifery","Public Health","Pharmacology & Pharmacy","Epidemiology","Medical Education","Healthcare Management","Biomedical Science","Physiotherapy & Rehabilitation","Mental Health & Psychiatry","Nutrition & Dietetics","Occupational Health","Medical Microbiology","Pathology & Laboratory Medicine","Paediatrics","Anaesthesiology"];
const guidelines = ["CONSORT (Clinical Trials)","STROBE (Observational Studies)","PRISMA (Systematic Reviews)","CARE (Case Reports)","STARD (Diagnostic Studies)","ARRIVE (Animal Research)","SQUIRE (Quality Improvement)","TREND (Non-Randomised Trials)"];
const faqs = [
  { q: "What medicine and health science topics do you cover?", a: "It is the art or science of preventing, diagnosing, alleviating and treating diseases with curative drugs to preserve health. We cover clinical medicine, nursing & midwifery, public health, pharmacology, epidemiology, medical education, healthcare management, biomedical science, physiotherapy, mental health, nutrition, occupational health, medical microbiology, pathology, paediatrics, and anaesthesiology." },
  { q: "Do you follow medical reporting guidelines?", a: "Yes. We ensure compliance with all major medical reporting guidelines including CONSORT for clinical trials, STROBE for observational studies, PRISMA for systematic reviews and meta-analyses, CARE for case reports, STARD for diagnostic accuracy studies, ARRIVE for animal research, SQUIRE for quality improvement, and TREND for non-randomised trials." },
  { q: "What referencing styles do you use for medical writing?", a: "For medical writing, we primarily use Vancouver referencing (numbered system) for most medical journals, AMA style, Harvard, and journal-specific styles. We ensure all references are complete with DOIs, volume numbers, page numbers, and correct journal abbreviations as required by your target journal." },
  { q: "Can you help with systematic reviews and meta-analyses?", a: "Yes. We provide full systematic review and meta-analysis support — PRISMA protocol development, comprehensive database searches (PubMed, Cochrane, EMBASE, CINAHL, Scopus), inclusion/exclusion criteria, quality assessment (GRADE, CASP), data extraction, and narrative or meta-analytic synthesis." },
  { q: "Do you maintain patient confidentiality in case reports?", a: "Yes. All clinical case reports are handled with full HIPAA/GDPR awareness and patient anonymisation. Patient identifiers are removed and cases are presented following CARE reporting guidelines. We ensure ethical compliance documentation is included where required by the target medical journal." },
];
export default function MedicineHealthPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}><Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/subjects/" style={{ color: "#a0b8e0" }}>Subjects</Link>{" / "}<span style={{ color: "#fff" }}>Medicine & Health Science</span></div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>Medicine &amp; Health Science Academic Writing</h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>It is the art or science of preventing, diagnosing, alleviating and treating diseases with curative drugs to preserve health. Our expert medical and health science writers from clinical backgrounds provide comprehensive academic writing support for Masters and PhD students.</p>
            <p style={{ color: "#f9c74f", fontSize: "0.92rem", fontWeight: 600, marginBottom: "22px" }}>PRISMA · CONSORT · STROBE · CARE · Vancouver · All Health Disciplines</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}><Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link><Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link></div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/tutorsindia-logo-hd.jpg" alt="Tutors India" style={{ width: "90px", height: "90px", objectFit: "contain", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>MD/PhD Writers<br />PRISMA · CONSORT<br />Vancouver Style</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ marginBottom: "28px" }}><h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Medicine & Health Areas We Cover</h2><div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>{areas.map(a => (<span key={a} style={{ padding: "5px 13px", background: "#fff", border: "1.5px solid #dde2ef", borderRadius: "16px", fontSize: "0.79rem", color: "#1a2a6c", fontWeight: 500 }}>{a}</span>))}</div></div>
        <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "22px", marginBottom: "28px" }}><h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "12px" }}>Medical Reporting Guidelines We Follow</h3><div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>{guidelines.map(g => (<span key={g} style={{ padding: "5px 14px", background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "16px", fontSize: "0.82rem", color: "#fff", fontWeight: 600 }}>{g}</span>))}</div></div>
        <div style={{ marginBottom: "28px" }}><h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Frequently Asked Questions</h2><FaqAccordion faqs={faqs} /></div>
      </section>
      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Expert Medicine & Health Writing Support</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>MD/PhD Writers · PRISMA · CONSORT · All Health Areas · Response in 30 min</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}><Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link><Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link></div>
      </section>
    </>
  );
}
