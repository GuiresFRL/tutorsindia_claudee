import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "Statistical Services for Research & Publication",
  description: "Expert Statistical Services for academic research and publication. SPSS, R, SAS, STATA, E-Views, Minitab. In-depth domain expertise across industries. Tutors India.",
};

const statisticalServices = [
  { icon: "📊", title: "Descriptive Statistics", desc: "Mean, median, mode, standard deviation, variance, frequency distributions, cross-tabulations, and comprehensive data summarisation." },
  { icon: "🔬", title: "Inferential Statistics", desc: "Hypothesis testing (t-tests, ANOVA, chi-square), regression analysis (linear, logistic, multiple), correlation, and non-parametric tests." },
  { icon: "📈", title: "Time Series & Econometrics", desc: "ARIMA, GARCH, cointegration, panel data analysis, and econometric modelling using E-Views and STATA." },
  { icon: "🧩", title: "Structural Equation Modelling", desc: "SEM using SPSS AMOS and Mplus — CFA, path analysis, mediation, moderation, and multi-group analysis." },
  { icon: "🗺️", title: "Spatial & GIS Analysis", desc: "Geographic information system analysis, spatial statistics, spatial regression, and location-based analytical methods." },
  { icon: "💼", title: "Business Analytics", desc: "Market research analysis, customer analytics, operations research, supply chain analytics, and business intelligence statistical methods." },
];

const softwareTools = ["SPSS", "SPSS AMOS", "R", "SAS", "STATA", "E-Views", "Minitab", "NVIVO", "Atlas-ti", "Excel", "Epi-Info", "Mplus"];

const faqs = [
  { q: "What statistical services do you provide?", a: "Our analytical team brings in-depth knowledge and domain expertise across a broad spectrum of industries. We provide descriptive statistics, inferential tests, regression analysis, time series and econometrics, structural equation modelling, survival analysis, factor analysis, cluster analysis, and all other statistical methods required for academic research and publication." },
  { q: "Which software tools do you use?", a: "We use SPSS, SPSS AMOS, R, SAS, STATA, E-Views, Minitab, NVIVO, Atlas-ti, Excel, Epi-Info, and Mplus. We select the most appropriate tool based on your research design, data type, and target journal or university requirements. All software outputs and files are shared with your delivery." },
  { q: "Can you write the results section for my research paper?", a: "Yes. We provide complete results section writing with properly formatted tables, figures, and written interpretation of all statistical findings. All outputs are presented clearly with appropriate statistical notation and aligned to your target journal's formatting requirements." },
  { q: "Do you provide interpretation alongside the statistical output?", a: "Yes. All statistical analysis is accompanied by clear written interpretation aligned to your research objectives and hypotheses. We explain what the results mean in the context of your study and, for Advanced and Premium tiers, compare findings with published literature." },
  { q: "How quickly can you complete statistical analysis?", a: "We offer a 4–6 hour express service for urgent statistical analysis requests. Standard analysis is completed within 24–48 hours. Complex analyses (SEM, longitudinal analysis, advanced econometrics) may take 3–5 days. Contact us immediately with your deadline for an accurate timeline." },
];

const testimonials = [
  { quote: "Tutors India is highly recommended! I was able to complete my doctoral studies because of their statistical analysis ability. Throughout the process, they were meticulous, prompt, and enthusiastic. Without their assistance, I would not have been able to complete the statistical analyses.", author: "Divit", avatar: "/images/testimonials/Divit.jpg" },
  { quote: "I felt stimulated and nurtured academically as the statistical writing was very difficult. Tutors India helped me in writing statistics dissertation and I gained a robust and diverse body of knowledge. I was even able to publish my dissertation in a scholarly journal. Tons of thanks!", author: "Amelia", avatar: "/images/testimonials/t07.jpg" },
  { quote: "Sophia: Tutors India comes highly recommended. Few quants have it all — solid qualifications, strong statistical and data mining skills, the initiative to anticipate client needs, compelling communications, and a results-oriented mindset. The quality has been excellent.", author: "Sophia", avatar: "/images/testimonials/user7.jpg" },
];

export default function StatisticalServicesPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}<Link href="/our-services/publication-support/" style={{ color: "#a0b8e0" }}>Publication Support</Link>{" / "}<span style={{ color: "#fff" }}>Statistical Services</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              Statistical Services for Research &amp; Publication
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Our analytical team brings in-depth knowledge and domain expertise across a broad spectrum of industries. We provide comprehensive statistical analysis services for academic research and publication — from descriptive statistics through to advanced SEM, econometrics, and survival analysis.
            </p>
            <p style={{ color: "#f9c74f", fontSize: "0.92rem", fontWeight: 600, marginBottom: "20px" }}>Express 4–6hr Service · SPSS · R · SAS · STATA · E-Views · Minitab</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/samples/publication-research.jpg" alt="Academic editing and research support" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#f9c74f" }}>4–6 hrs</div>
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0" }}>Express Statistical<br />Analysis Service<br />Available</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px", marginBottom: "28px" }} className="three-col-grid">
          {statisticalServices.map(s => (
            <div key={s.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{s.icon}</div>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{s.title}</h3>
              <p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.65 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Statistical Software We Use</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {softwareTools.map(tool => (<span key={tool} style={{ padding: "6px 14px", background: "#fff", border: "2px solid #1a2a6c", borderRadius: "20px", fontSize: "0.82rem", color: "#1a2a6c", fontWeight: 600 }}>{tool}</span>))}
          </div>
        </div>

        <div style={{ marginBottom: "28px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px" }} className="three-col-grid">
            {testimonials.map((t, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px" }}>
                <div style={{ color: "#e87722", fontSize: "2rem", lineHeight: 1, marginBottom: "6px", fontFamily: "serif" }}>&ldquo;</div>
                <p style={{ color: "#555", fontSize: "0.84rem", lineHeight: 1.7, fontStyle: "italic", marginBottom: "12px" }}>{t.quote}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <img src={t.avatar} alt={t.author} style={{ width: "36px", height: "36px", borderRadius: "50%", objectFit: "cover" }} loading="lazy" />
                  <div style={{ fontWeight: 700, color: "#1a2a6c", fontSize: "0.84rem" }}>{t.author}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Frequently Asked Questions</h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Expert Statistical Analysis for Your Research</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>Express 4–6hr · SPSS · R · STATA · E-Views · All Statistical Methods · 30 min Response</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
