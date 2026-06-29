import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
export const metadata: Metadata = { title: "Biological & Life Science Academic Writing | Masters, PhD | Tutors India", description: "Expert Biological & Life Science academic writing. Molecular Biology, Genetics, Ecology, Biochemistry, Microbiology. Masters & PhD. Tutors India." };
const areas = ["Molecular Biology","Cell Biology & Cytology","Genetics & Genomics","Ecology & Environmental Biology","Biochemistry","Microbiology","Immunology","Neuroscience","Pharmacology","Physiology","Plant Biology & Botany","Zoology & Animal Biology","Marine Biology","Evolutionary Biology","Bioinformatics","Developmental Biology"];
const faqs = [
  { q: "What biological and life science subjects do you cover?", a: "Writing a biology and life science paper can be stressful, specifically when your objective is to obtain a good grade. We cover molecular biology, cell biology, genetics & genomics, ecology, biochemistry, microbiology, immunology, neuroscience, pharmacology, physiology, plant biology, zoology, marine biology, evolutionary biology, bioinformatics, and developmental biology." },
  { q: "What referencing styles do you use for life science writing?", a: "For biological and life science papers, we use Vancouver, APA, Harvard, CSE (Council of Science Editors), and journal-specific styles. Nature, Science, Cell, and other high-impact biology journals have specific formatting requirements which we carefully follow for manuscript submissions." },
  { q: "Can you help with systematic reviews in biological science?", a: "Yes. We provide full systematic review support for biological and life science topics — comprehensive database searches (PubMed, Cochrane, Scopus, Web of Science, EMBASE), PRISMA protocol development, quality assessment, data extraction, and synthesis." },
  { q: "Do you help with statistical analysis for biological research?", a: "Yes. Our biologists and biostatisticians use SPSS, R, SAS, GraphPad Prism, and MATLAB for biological data analysis — including survival analysis, ANOVA, regression, correlation, and bioinformatics tools for genomic and proteomic data analysis." },
  { q: "Can you write biology literature reviews from scratch?", a: "Yes. We write comprehensive biological science literature reviews drawing from the latest peer-reviewed sources in PubMed, Web of Science, Scopus, and specialist biology databases. We identify research gaps, synthesise existing evidence, and position your research within the current state of knowledge." },
];
export default function BiologicalSciencePage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}><Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/subjects/" style={{ color: "#a0b8e0" }}>Subjects</Link>{" / "}<span style={{ color: "#fff" }}>Biological & Life Science</span></div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>Biological &amp; Life Science Academic Writing Help</h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>Writing a biology and life science paper can be stressful, specifically when your objective is to obtain a good grade. Our expert biological scientists covering genetics, ecology, biochemistry, molecular biology and more provide comprehensive academic writing support for Masters and PhD students.</p>
            <p style={{ color: "#f9c74f", fontSize: "0.92rem", fontWeight: 600, marginBottom: "22px" }}>PubMed · Nature · Science · Cell · PRISMA · SPSS · R · All Disciplines</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}><Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link><Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link></div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/tutorsindia-logo-hd.jpg" alt="Tutors India" style={{ width: "90px", height: "90px", objectFit: "contain", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>PhD Biologists<br />PubMed · Nature<br />All Life Sciences</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ marginBottom: "28px" }}><h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Biological & Life Science Areas We Cover</h2><div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>{areas.map(a => (<span key={a} style={{ padding: "5px 13px", background: "#fff", border: "1.5px solid #dde2ef", borderRadius: "16px", fontSize: "0.79rem", color: "#1a2a6c", fontWeight: 500 }}>{a}</span>))}</div></div>
        <div style={{ marginBottom: "28px" }}><h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Frequently Asked Questions</h2><FaqAccordion faqs={faqs} /></div>
      </section>
      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Expert Biological Science Writing Support</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>PhD Biologists · PubMed · PRISMA · All Life Sciences · Response in 30 min</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}><Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link><Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link></div>
      </section>
    </>
  );
}
