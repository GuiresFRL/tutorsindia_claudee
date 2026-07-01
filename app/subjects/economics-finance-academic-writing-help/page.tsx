import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
export const metadata: Metadata = { title: "Economics & Finance Academic Writing Help | Masters, PhD", description: "Expert Economics & Finance academic writing. Macroeconomics, Microeconomics, Financial Markets, Econometrics. STATA, E-Views, R. Masters & PhD. Tutors India." };
const areas = ["Macroeconomics","Microeconomics","Financial Markets & Investments","Econometrics & Statistical Methods","Development Economics","International Economics & Trade","Monetary Policy & Banking","Behavioural Economics","Financial Accounting","Management Accounting","Taxation & Public Finance","Corporate Finance","Risk Management","Islamic Finance","Real Estate Finance","Economic Policy Analysis"];
const tools = ["STATA","E-Views","R","MATLAB","Bloomberg Terminal","DataStream","SPSS","Python (Pandas/NumPy)"];
const faqs = [
  { q: "What economics and finance topics do you cover?", a: "Writing an economic paper can be stressful, specifically when your objective is to obtain a good grade. We cover macroeconomics, microeconomics, financial markets, econometrics, development economics, international trade, monetary policy, banking, behavioural economics, accounting, taxation, corporate finance, risk management, Islamic finance, and economic policy analysis." },
  { q: "What econometric software do you use?", a: "We use STATA, E-Views, R, MATLAB, Python (Pandas/NumPy), Bloomberg Terminal, DataStream, and SPSS for quantitative economics and finance analysis. We select the most appropriate tool based on your research design and university requirements, and deliver all software output files alongside the written analysis." },
  { q: "Can you help with financial modelling for dissertations?", a: "Yes. Our finance experts can help develop financial models, conduct time series analysis (ARIMA, GARCH, VAR), run regression analyses, perform event studies, and present quantitative financial results in a format suitable for academic dissertation chapters." },
  { q: "What citation styles do you use for economics papers?", a: "Economics and finance papers most commonly use Harvard referencing, APA (7th edition), or journal-specific author-date systems. We also support Chicago author-date style for economics journals. We ensure all citations are complete and consistent with your target journal or university requirements." },
  { q: "Can you help me choose a dissertation topic in economics or finance?", a: "Yes. Our economics and finance specialists identify unique, researchable dissertation topics based on your area of interest, a genuine research gap in the literature, and feasibility of data access. Topics are selected from current debates in economic and financial literature using databases such as JSTOR, SSRN, NBER, IDEAS, and Web of Science." },
];
export default function EconomicsPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}><Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/subjects/" style={{ color: "#a0b8e0" }}>Subjects</Link>{" / "}<span style={{ color: "#fff" }}>Economics & Finance</span></div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>Economics &amp; Finance Academic Writing Help</h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>Writing an economic paper can be stressful, specifically when your objective is to obtain a good grade. Our expert economists and finance specialists from top UK and US universities provide comprehensive academic writing support for Masters and PhD students across all economics and finance disciplines.</p>
            <p style={{ color: "#f9c74f", fontSize: "0.92rem", fontWeight: 600, marginBottom: "22px" }}>STATA · E-Views · R · Bloomberg · Macroeconomics · Finance · Econometrics</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}><Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link><Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link></div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/tutorsindia-logo-hd.jpg" alt="Tutors India" style={{ width: "90px", height: "90px", objectFit: "contain", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>PhD Economists<br />STATA · E-Views<br />All Finance Areas</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ marginBottom: "28px" }}><h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Economics & Finance Areas We Cover</h2><div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>{areas.map(a => (<span key={a} style={{ padding: "5px 13px", background: "#fff", border: "1.5px solid #dde2ef", borderRadius: "16px", fontSize: "0.79rem", color: "#1a2a6c", fontWeight: 500 }}>{a}</span>))}</div></div>
        <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "22px", marginBottom: "28px" }}><h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "12px" }}>Econometric & Financial Analysis Tools</h3><div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>{tools.map(t => (<span key={t} style={{ padding: "5px 14px", background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "16px", fontSize: "0.82rem", color: "#fff", fontWeight: 600 }}>{t}</span>))}</div></div>
        <div style={{ marginBottom: "28px" }}><h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Frequently Asked Questions</h2><FaqAccordion faqs={faqs} /></div>
      </section>
      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Expert Economics & Finance Writing Support</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>PhD Economists · STATA · E-Views · All Finance Areas · Response in 30 min</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}><Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link><Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link></div>
      </section>
    </>
  );
}
