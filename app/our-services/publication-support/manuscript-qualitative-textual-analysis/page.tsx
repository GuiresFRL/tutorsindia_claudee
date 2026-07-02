import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "Manuscript Statistics & Qualitative Analysis Services",
  description: "Manuscript Statistical & Qualitative Textual Analysis for publications. SPSS, R, SAS, STATA, NVIVO. Medical, Engineering, Management. PhD-qualified statisticians. Tutors India.",
};

const softwareTools = ["SPSS", "SPSS AMOS", "R", "SAS", "STATA", "E-Views", "Minitab", "NVIVO", "Atlas-ti", "MAXQDA", "Excel", "Epi-Info"];

const analysisTypes = [
  { icon: "📊", title: "Manuscript Statistical Analysis", desc: "Preparing a manuscript statistical report needs patience and precise data. Whether it is for medical, engineering or management, our brilliant statisticians hold advanced Masters and PhD degrees with 10+ years experience delivering high-quality, timely statistical results." },
  { icon: "💬", title: "Qualitative / Textual Analysis", desc: "Content analysis, thematic analysis, discourse analysis, and grounded theory for qualitative research manuscripts. Full coding framework, theme development, and interpretation using NVIVO, Atlas-ti, and MAXQDA." },
  { icon: "🔀", title: "Mixed Methods Analysis", desc: "Integration of quantitative statistical findings with qualitative data analysis for mixed-method manuscripts, ensuring methodological coherence and clear presentation of combined results." },
  { icon: "📈", title: "Results Section Writing", desc: "Complete results section writing with proper statistical tables, figures, and interpretation aligned to your manuscript's objectives and journal's formatting requirements." },
];

const faqs = [
  { q: "What statistical analysis do you provide for manuscripts?", a: "Preparing a manuscript statistical report needs patience and precise data. Whether it is for medical, engineering or management, it necessarily requires preparation and statistics effects. We provide descriptive statistics, inferential tests (t-tests, ANOVA, regression, SEM), reliability analysis, and advanced statistical modelling using SPSS, R, SAS, STATA, and other tools." },
  { q: "Can you write the results section of my manuscript?", a: "Yes. We write complete results sections with properly formatted tables, figures, and statistical interpretation aligned to your manuscript's objectives and the target journal's formatting requirements. All outputs are presented clearly with appropriate statistical notation and significance reporting." },
  { q: "Which qualitative analysis methods do you support?", a: "We support thematic analysis, content analysis, grounded theory, discourse analysis, and narrative analysis using NVIVO, Atlas-ti, MAXQDA, and Wordstat. We provide full coding frameworks, theme development documentation, and clear presentation of qualitative findings for manuscript inclusion." },
  { q: "How quickly can you complete manuscript statistical analysis?", a: "Express statistical analysis is available within 4–6 hours for standard analyses. Complex analyses (SEM, longitudinal analysis, meta-analysis) typically take 2–5 days. Contact us with your manuscript deadline for an accurate timeline." },
  { q: "Do you provide the software output files?", a: "Yes. We deliver complete software output files (SPSS .sav and .spv, R scripts, STATA .do files, NVIVO .nvpx), screenshots of all analytical processes, tables and figures formatted per journal guidelines, and full written interpretation of all results." },
];

export default function ManuscriptStatisticsPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}<Link href="/our-services/publication-support/" style={{ color: "#a0b8e0" }}>Publication Support</Link>{" / "}<span style={{ color: "#fff" }}>Manuscript Statistics</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              Manuscript Statistical &amp; Qualitative Textual Analysis Services
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Preparing a manuscript statistical report needs patience and precise data. Our brilliant statisticians holding advanced Masters and PhD degrees with 10+ years experience deliver high-quality timely results for medical, engineering, and management manuscripts.
            </p>
            <p style={{ color: "#f9c74f", fontSize: "0.92rem", fontWeight: 600, marginBottom: "20px" }}>SPSS · R · SAS · STATA · NVIVO · Atlas-ti · Express 4–6hr Service Available</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/samples/publication-research.jpg" alt="Academic editing and research support" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#f9c74f" }}>4–6 hrs</div>
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0" }}>Express Statistical<br />Analysis Service</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "18px", marginBottom: "28px" }} className="two-col-grid">
          {analysisTypes.map(a => (
            <div key={a.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "22px" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{a.icon}</div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "8px" }}>{a.title}</h3>
              <p style={{ fontSize: "0.85rem", color: "#666", lineHeight: 1.65 }}>{a.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Software Tools We Use</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {softwareTools.map(tool => (<span key={tool} style={{ padding: "6px 14px", background: "#fff", border: "2px solid #1a2a6c", borderRadius: "20px", fontSize: "0.82rem", color: "#1a2a6c", fontWeight: 600 }}>{tool}</span>))}
          </div>
        </div>

        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Frequently Asked Questions</h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Expert Manuscript Statistical Analysis</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>Express 4–6hr Service · PhD Statisticians · SPSS, R, NVIVO · Response in 30 min</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
