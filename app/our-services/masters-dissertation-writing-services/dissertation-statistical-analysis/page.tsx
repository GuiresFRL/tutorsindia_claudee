import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "Masters Dissertation Statistical Analysis Services UK",
  description: "UK Master's Dissertation Textual (Qualitative) & Statistical (Quantitative) Analysis Help. SPSS, R, STATA, NVIVO, Atlas-ti and more. Expert statisticians with PhD & Masters.",
};

const softwareGroups = [
  {
    category: "Quantitative Tools",
    color: "#1a2a6c",
    tools: ["SPSS", "SPSS AMOS", "SAS", "R", "STATA", "E-Views", "Minitab", "SYSTAT", "Epi-Info", "Excel"],
  },
  {
    category: "Qualitative Tools",
    color: "#2563b0",
    tools: ["NVIVO", "Atlas-ti", "MAXQDA", "Wordstat", "T-lab", "TextPack"],
  },
];

const analysisTypes = [
  { icon: "📊", title: "Descriptive Statistics", desc: "Mean, standard deviation, range, confidence intervals, frequency tables, socio-demographic analysis, cross-tabulations and data summarisation." },
  { icon: "🔬", title: "Inferential Statistics", desc: "Hypothesis testing (t-tests, ANOVA, Chi-square), regression analysis (linear, logistic, multiple), correlation, and non-parametric tests." },
  { icon: "🧩", title: "Structural Equation Modelling", desc: "SEM using SPSS AMOS, confirmatory factor analysis (CFA), path analysis, model fit indices, and mediation/moderation analysis." },
  { icon: "📈", title: "Time Series & Econometrics", desc: "E-Views and STATA for time series analysis, panel data, cointegration, ARIMA, GARCH models, and economic forecasting." },
  { icon: "💬", title: "Qualitative Analysis", desc: "Thematic analysis, content analysis, grounded theory, phenomenological analysis, discourse analysis using NVIVO, Atlas-ti and MAXQDA." },
  { icon: "🔗", title: "Reliability & Validity", desc: "Cronbach's alpha reliability, construct validity, convergent validity, discriminant validity, pilot study analysis, and internal consistency checks." },
  { icon: "📋", title: "Data Preparation", desc: "Data cleaning, recoding, dummy variable creation, Excel data entry format, SPSS dataset preparation, outlier detection and treatment." },
  { icon: "🖼️", title: "Tables & Figures", desc: "All outputs formatted in journal standard (APA, Harvard) ready for dissertation insertion — tables, graphs, charts, and interpretation." },
];

const serviceTiers = [
  { tier: "Basic", color: "#2563b0", desc: "Statistical Analysis based on raw data with basic interpretation without discussion against literature review.", includes: ["Data cleaning and preparation", "Descriptive statistics", "Basic inferential tests", "Tables and figures", "Basic interpretation"] },
  { tier: "Advanced", color: "#1a2a6c", desc: "Data analysis with formatted tables, interpretation with discussion comparing findings against previous studies.", includes: ["All basic features", "Advanced statistical tests", "Discussion against literature", "Journal-formatted output", "Full interpretation"] },
  { tier: "Premium", color: "#e87722", desc: "Includes primary data collection support, reliability/validity checks, trustworthiness assessment (for qualitative), and complete write-up.", includes: ["All advanced features", "Data collection support", "Reliability & validity tests", "Trustworthiness assessment", "Complete chapter write-up"] },
];

const faqs = [
  { q: "What statistical software do you use?", a: "We use a comprehensive range of software including SPSS, SPSS AMOS, SAS, R, STATA, E-Views, Minitab, SYSTAT, Epi-Info, Excel for quantitative analysis, and NVIVO, Atlas-ti, MAXQDA, Wordstat, T-lab, and TextPack for qualitative analysis. We select the most appropriate tool based on your research design and university requirements." },
  { q: "What are the qualifications of your statisticians?", a: "Our statisticians hold PhD and Masters qualifications with 10+ years of experience handling complex statistical projects involving cluster analysis, structural equation modelling (SEM), multivariate analysis, time series, and advanced qualitative analysis. They have worked on dissertations across business, healthcare, social sciences, engineering, and life sciences." },
  { q: "Can you analyse my data even if it is incomplete or messy?", a: "Yes. Our statisticians are experienced in data cleaning, recoding, handling missing values, outlier treatment, and data preparation. We can work with raw survey data (Excel/SPSS), interview transcripts, secondary datasets, and partially collected data. We will advise the best approach for your specific dataset." },
  { q: "Do you provide interpretation alongside the analysis?", a: "Absolutely. All statistical output is accompanied by clear written interpretation aligned to your research objectives and hypothesis. We explain what the results mean in the context of your study, compare findings with previous literature (in the Advanced and Premium tiers), and present everything in tables and figures formatted for your dissertation." },
  { q: "How quickly can you complete a statistical analysis?", a: "We offer express turnaround for urgent analysis — typically within 4–6 hours for simple analyses. Standard analysis is delivered within 24–48 hours. More complex analyses (SEM, meta-analysis, multi-level modelling, longitudinal analysis) may take 3–5 days. Contact us immediately for an accurate timeline based on your data." },
  { q: "Will you provide the SPSS data file and output?", a: "Yes. We deliver the complete SPSS (.sav) data file, syntax file (.sps), output file (.spv), and tables/figures formatted for your dissertation. Screenshots of all software output are also provided as appendix material. For qualitative analysis, NVIVO/Atlas-ti project files are shared along with coding framework and theme development documentation." },
];
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  }))
};

const testimonials = [
  { quote: "I was low and lacked confidence in writing. After lots of hard work they made progress and completed my dissertation. The complete work was beyond my expectation. Thank you!", author: "Sara", location: "" },
  { quote: "Tutors India is highly recommended! I was able to complete my doctoral studies because of their statistical analysis ability. Throughout the process, they were meticulous, prompt, and enthusiastic. Without their assistance, I would not have been able to complete the statistical analyses.", author: "Divit", location: "" },
  { quote: "I had felt stimulated and nurtured academically as the statistical writing was very difficult. Tutors India helped me in writing statistics dissertation and I gained a robust and diverse body of knowledge. I was even able to publish my dissertation in a scholarly journal. Tons of thanks!", author: "Amelia", location: "" },
  { quote: "These folks are well-informed, thorough, speedy, and trustworthy. They are biostatisticians with a deep understanding of the regulatory and clinical environments, so their contributions are far more than surface-level.", author: "Ekiya", location: "" },
  { quote: "I would like to express my satisfaction on the co-operation regarding the data collection of big data analysis of my project. The experts and the technical team did a very professional job.", author: "Faiyaz", location: "" },
  { quote: "Worked with Tutors India on several biostatistical projects of clinical research. They have always been able to analyse requirements and complexities, implement creative solutions, and deliver outstanding services within the timelines.", author: "Yuvaan", location: "Andorra" },
];

const subjects = [
  "Business & Management", "Economics & Finance", "Psychology & Behavioural Science",
  "Medicine & Healthcare", "Life Sciences & Biostatistics", "Engineering & Technology",
  "Social Sciences", "Education & Training", "Computer Science & IT",
  "Marketing & Communication", "Law & Criminology", "Agriculture & Nutrition",
];

export default function StatisticalAnalysisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* ── HERO ── */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
              <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}
              <Link href="/our-services/masters-dissertation-writing-services/" style={{ color: "#a0b8e0" }}>Masters Dissertation</Link>{" / "}
              <span style={{ color: "#fff" }}>Dissertation Statistical Analysis</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              The UK Master's Dissertation Textual (Qualitative) &amp; Statistical (Quantitative) Analysis Help
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Not familiar with statistical &amp; content analysis tools? Have data but don't know how to recode it? Have a problem analysing your hypothesis? Tutors India is a hub for dissertation qualitative and quantitative analysis services.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/samples/dissertation-samples.webp" alt="Academic experts collaborating" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#f9c74f" }}>10+</div>
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0" }}>Years Statistical<br />Experience</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      {/* ── STATS BAR ── */}
      <div style={{ background: "#12214a", padding: "16px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: "16+", l: "Software Tools" }, { n: "PhD & Masters", l: "Qualified Analysts" }, { n: "10+ Years", l: "Experience" }, { n: "4–6 hrs", l: "Express Service" }, { n: "< 5%", l: "Plagiarism" }, { n: "24/7", l: "Support" }].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
              <div style={{ fontSize: "0.68rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>

        {/* Intro */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Expert Dissertation Statistical Analysis Services</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            Dissertation statistical data analysis is the most important step in any dissertation or thesis. Students require help in explaining their work through statistical data analysis and displaying results that can be propagated as the work of research. Our analysis covers business, management, economics, finance, psychology, medicine, life science and related fields.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.94rem" }}>
            Your dissertation analysis is completed by qualified and experienced statisticians from the US &amp; UK who hold PhD and Masters degrees with 10+ years experience. They provide complete, concise reporting delivered on well-developed analysis plans, ensuring high-quality and timely deliverables — including a 4–6 hour express turnaround service for urgent requirements.
          </p>
        </div>

        {/* Software Tools */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>Statistical Software We Use</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px" }} className="two-col-grid">
            {softwareGroups.map(group => (
              <div key={group.category} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", overflow: "hidden" }}>
                <div style={{ background: group.color, color: "#fff", padding: "12px 18px", fontWeight: 700, fontSize: "0.95rem" }}>{group.category}</div>
                <div style={{ padding: "16px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {group.tools.map(tool => (
                    <span key={tool} style={{ padding: "5px 14px", background: "#f5f6fa", border: "1.5px solid #dde2ef", borderRadius: "20px", fontSize: "0.82rem", color: "#1a2a6c", fontWeight: 600 }}>{tool}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Analysis Types */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Types of Analysis We Provide</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "18px" }}>Comprehensive coverage of all quantitative and qualitative analysis methods required for UK, US and Australian university dissertations</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "16px" }} className="four-col-grid">
            {analysisTypes.map(a => (
              <div key={a.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{a.icon}</div>
                <h3 style={{ fontSize: "0.88rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{a.title}</h3>
                <p style={{ fontSize: "0.78rem", color: "#666", lineHeight: 1.6 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Tiers */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Service Tiers</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "18px" }}>Choose the right level of statistical analysis support for your dissertation</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
            {serviceTiers.map(t => (
              <div key={t.tier} style={{ background: "#fff", border: `2px solid ${t.color}`, borderRadius: "10px", overflow: "hidden" }}>
                <div style={{ background: t.color, color: "#fff", padding: "14px 18px" }}>
                  <div style={{ fontSize: "1.2rem", fontWeight: 700 }}>{t.tier}</div>
                </div>
                <div style={{ padding: "16px" }}>
                  <p style={{ fontSize: "0.84rem", color: "#555", lineHeight: 1.65, marginBottom: "12px" }}>{t.desc}</p>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {t.includes.map(i => (
                      <li key={i} style={{ display: "flex", gap: "6px", fontSize: "0.78rem", color: "#555", padding: "4px 0", borderBottom: "1px solid #f0f2fa" }}>
                        <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>✓</span> {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What's Included */}
        <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "24px", marginBottom: "28px" }}>
          <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "14px" }}>What We Deliver with Your Statistical Analysis Order</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "10px" }} className="three-col-grid">
            {["Executive summary / abstract", "SPSS .sav data file", "SPSS syntax (.sps) file", "SPSS output (.spv) file", "Formatted tables & figures", "Written interpretation of results", "NVIVO/Atlas-ti project file (qualitative)", "Coding framework & themes (qualitative)", "Express 4–6 hour turnaround available", "Free tutoring sessions to understand analysis"].map(item => (
              <div key={item} style={{ display: "flex", gap: "8px", fontSize: "0.82rem", color: "#c5d5f0", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                <span style={{ color: "#f9c74f", fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
              </div>
            ))}
          </div>
        </div>

        {/* Subject Areas */}
        <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "22px", marginBottom: "28px", border: "1px solid #dde2ef" }}>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Subject Areas We Cover</h3>
          <p style={{ color: "#666", fontSize: "0.86rem", marginBottom: "14px" }}>Our statisticians have domain expertise across all major academic disciplines</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {subjects.map(s => (
              <span key={s} style={{ padding: "5px 13px", background: "#fff", border: "1.5px solid #dde2ef", borderRadius: "16px", fontSize: "0.79rem", color: "#1a2a6c", fontWeight: 500 }}>{s}</span>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>What Our Clients Say</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px" }} className="three-col-grid">
            {testimonials.map((t, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px" }}>
                <div style={{ color: "#e87722", fontSize: "2rem", lineHeight: 1, marginBottom: "6px", fontFamily: "serif" }}>&ldquo;</div>
                <p style={{ color: "#555", fontSize: "0.84rem", lineHeight: 1.7, fontStyle: "italic", marginBottom: "12px" }}>{t.quote}</p>
                <div style={{ fontWeight: 700, color: "#1a2a6c", fontSize: "0.84rem" }}>{t.author}</div>
                {t.location && <div style={{ fontSize: "0.74rem", color: "#888" }}>{t.location}</div>}
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Frequently Asked Questions</h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Expert Statistical Analysis for Your Dissertation</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>Express 4–6 hour service available · SPSS, R, STATA, NVIVO and more · PhD-qualified statisticians</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
