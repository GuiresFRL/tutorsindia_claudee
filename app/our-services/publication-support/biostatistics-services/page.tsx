import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "Biostatistics Services | Clinical Trial Analysis | Tutors India",
  description: "Expert Biostatistics Services. Clinical trial analysis, survival analysis, logistic regression, SEM. SPSS, R, SAS, STATA. PhD biostatisticians. Tutors India.",
};

const biostatServices = [
  { icon: "📊", title: "Clinical Trial Analysis", desc: "Phase I–IV clinical trial statistical analysis — primary/secondary endpoint analysis, interim analysis, safety data, CONSORT-compliant reporting." },
  { icon: "📈", title: "Survival Analysis", desc: "Kaplan-Meier curves, Cox proportional hazards regression, log-rank tests, competing risks analysis, and time-to-event modelling for clinical research." },
  { icon: "🧬", title: "Epidemiological Analysis", desc: "Cohort and case-control study analysis, odds ratios, relative risks, confidence intervals, confounding adjustment, and disease burden estimation." },
  { icon: "🔬", title: "Diagnostic Test Analysis", desc: "Sensitivity, specificity, predictive values, ROC curve analysis, AUC, likelihood ratios, and inter-rater reliability (kappa) for diagnostic and screening research." },
  { icon: "📉", title: "Regression & Modelling", desc: "Linear, logistic, Poisson, negative binomial, mixed-effects, and generalised linear models for health data. Multivariate analysis with confounding adjustment." },
  { icon: "🏥", title: "Health Economics", desc: "Cost-effectiveness analysis, QALY calculation, Markov modelling, decision tree analysis, and HTA submission statistical support." },
];

const softwareTools = ["SPSS", "R", "SAS", "STATA", "SPSS AMOS", "Epi-Info", "RevMan", "OpenBUGS", "Mplus", "Excel"];

const faqs = [
  { q: "What is biostatistics and what services do you offer?", a: "Biostatistics concentrates on the development and application of statistical techniques to address problems related to health fields such as medicine, pharmacology, epidemiology, and public health. Our biostatisticians hold advanced degrees with 10+ years of therapeutic experience, providing clinical trial analysis, survival analysis, epidemiological analysis, diagnostic test analysis, regression modelling, and health economics." },
  { q: "What qualifications do your biostatisticians hold?", a: "Our biostatisticians hold PhD or Masters degrees in Statistics, Biostatistics, Epidemiology, or related quantitative sciences. They have minimum 10 years of experience working on clinical research projects and are familiar with ICH E9 guidelines, CONSORT, STROBE, PRISMA, and other reporting standards required for publication." },
  { q: "Can you help with clinical study statistical analysis plans?", a: "Yes. We develop comprehensive Statistical Analysis Plans (SAPs) covering primary and secondary endpoints, sample size calculations, power analyses, handling of missing data, sensitivity analyses, and all planned statistical methods — aligned to ICH E9(R1) and ICH E9 guidelines." },
  { q: "Which software do you use for biostatistics?", a: "We use SPSS, R, SAS, STATA, Epi-Info, RevMan (for systematic reviews/meta-analysis), OpenBUGS (for Bayesian analysis), and Mplus (for structural equation modelling). We select the most appropriate tool based on your research design, regulatory requirements, and journal preferences." },
  { q: "Do you write the statistical methods section for manuscripts?", a: "Yes. We write complete statistical methods sections and results sections for clinical and epidemiological manuscripts, following journal-specific requirements and reporting guidelines (CONSORT for RCTs, STROBE for observational studies, PRISMA for systematic reviews, etc.)." },
];

const testimonials = [
  { quote: "Tutors India team is very knowledgeable and great to work with. I've worked with them on biostatistical projects and their insights were invaluable for creating effective clinical study evaluation plans. I would highly recommend them to anyone seeking statistical support. Thank you!", author: "Jivika", location: "Albania", avatar: "/images/testimonials/Saisha.jpg" },
  { quote: "Worked with Tutors India on several biostatistical projects of clinical research for the last few years. They have always been able to analyse requirements and complexities, implement creative solutions, and deliver outstanding services within the timelines.", author: "Yuvaan", location: "Andorra", avatar: "/images/testimonials/Tanvik.jpg" },
  { quote: "These folks are well-informed, thorough, speedy, and trustworthy. They are biostatisticians but also have a deep understanding of the regulatory and clinical environments, so their contributions are far more than surface-level.", author: "Ekiya", avatar: "/images/testimonials/Ekiya.jpg" },
];

export default function BiostatisticsPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}<Link href="/our-services/publication-support/" style={{ color: "#a0b8e0" }}>Publication Support</Link>{" / "}<span style={{ color: "#fff" }}>Biostatistics Services</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              Biostatistics Services for Clinical &amp; Health Research
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Biostatistics is the branch of science that concentrates on the development and application of statistical techniques to address problems related to health fields such as medicines, pharmacology, epidemiology, and public health. Our biostatisticians hold advanced degrees with 10+ years of therapeutic experience.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "20px" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/tutorsindia-logo-hd.jpg" alt="Tutors India" style={{ width: "90px", height: "90px", objectFit: "contain", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>PhD Biostatisticians<br />ICH-GCP Standards<br />10+ Years Experience</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px", marginBottom: "28px" }} className="three-col-grid">
          {biostatServices.map(s => (
            <div key={s.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{s.icon}</div>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{s.title}</h3>
              <p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.65 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Biostatistics Software We Use</h2>
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
                  <div>
                    <div style={{ fontWeight: 700, color: "#1a2a6c", fontSize: "0.84rem" }}>{t.author}</div>
                    {t.location && <div style={{ fontSize: "0.72rem", color: "#888" }}>{t.location}</div>}
                  </div>
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
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Expert Biostatistics Support</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>PhD Biostatisticians · ICH-GCP · SPSS, R, SAS, STATA · Response in 30 min</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
