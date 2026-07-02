import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
export const metadata: Metadata = { title: "Research Tool & Instrument Development | Questionnaires", description: "Expert Research Tool Development. Questionnaires, interview guides, survey instruments, data collection tools. Validation & reliability testing. Tutors India." };
const toolTypes = [
  { icon: "📝", title: "Questionnaire Development", desc: "Open-ended, closed-ended, and Likert-scale questionnaires designed with proper question sequencing, response categories, and scale validation for your specific research design." },
  { icon: "🎤", title: "Interview Guide Development", desc: "Semi-structured and structured interview guides with probe questions, topic coverage matrices, and interviewer instructions aligned to your research questions and methodology." },
  { icon: "🔬", title: "Observation Frameworks", desc: "Structured observation instruments, coding sheets, field note templates, and observation protocols for qualitative and mixed-methods research." },
  { icon: "✅", title: "Survey Validation", desc: "Pilot testing, content validity assessment, reliability testing (Cronbach's alpha, test-retest), construct validity (CFA), and expert panel review of research instruments." },
  { icon: "💻", title: "Digital Survey Tools", desc: "Online survey design using SurveyMonkey, Google Forms, Qualtrics, and other platforms — with logic branching, skip patterns, and export to SPSS/Excel." },
  { icon: "📊", title: "Data Collection Forms", desc: "Data extraction forms for systematic reviews, case record forms for clinical research, and structured data collection templates for secondary research projects." },
];
const scales = ["Likert Scale (5/7-point)","Semantic Differential Scale","Thurstone Scale","Guttman Scale","Behavioural Frequency Scale","Visual Analogue Scale","Category Scale","Ranking Scale","Rating Scale","Market Scales"];
const faqs = [
  { q: "What research tool development services do you offer?", a: "Developing primary and secondary data tools forms an important step in progressing your dissertation research topic. The choice of an instrument for data collection is an important aspect to consider during the research design. At Tutors India, we assist you in developing questionnaires — open-ended, closed-ended, Objective questionnaire, structured and unstructured questionnaire, focus group guide, and interview guide for all your research work." },
  { q: "What response categories and scales do you use?", a: "We offer Market scales, leadership questionnaire, buying behaviour, product trait, psychology (Scales) related measures and more. Response categories include Use of Likert Scale, Category proliferation, Ranking, and many others. Statistical consideration should be based on questionnaire type, and we ensure appropriate scale selection for your specific research questions." },
  { q: "Can you validate my research instrument?", a: "Yes. We provide comprehensive instrument validation services — content validity (expert panel review), face validity, construct validity (Confirmatory Factor Analysis using SPSS AMOS), convergent and discriminant validity (Average Variance Extracted), and reliability testing (Cronbach's alpha, test-retest reliability, split-half reliability)." },
  { q: "Can you help design online surveys?", a: "Yes. We design and set up online surveys using SurveyMonkey, Google Forms, Qualtrics, LimeSurvey, and other platforms. We configure question logic, skip patterns, branching, and ensure the survey collects data in the optimal format for your statistical analysis (directly exportable to SPSS or Excel)." },
  { q: "What information do I need to provide to develop my research instrument?", a: "To develop your research instrument, please provide: your research questions and hypotheses, the constructs or variables you want to measure, your target population and sampling approach, any existing validated scales you want to adapt, your university's ethics requirements, and the intended analysis method (SPSS, R, etc.)." },
];
export default function ToolDevelopmentPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}<Link href="/our-services/development/" style={{ color: "#a0b8e0" }}>Development</Link>{" / "}<span style={{ color: "#fff" }}>Tool Development</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>Research Tool &amp; Instrument Development</h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>Developing primary and secondary data tools forms an important step in progressing your dissertation research topic. At Tutors India, we assist you in developing questionnaires — open-ended, closed-ended, objective questionnaire, structured and unstructured questionnaire, focus group guide, and interview guide for all your research work.</p>
            <p style={{ color: "#f9c74f", fontSize: "0.92rem", fontWeight: 600, marginBottom: "20px" }}>Questionnaires · Interview Guides · Survey Validation · Likert Scales</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/services/primary-secondary-research.webp" alt="Research and development planning" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>Questionnaires<br />Interview Guides<br />Validity &amp; Reliability</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px", marginBottom: "28px" }} className="three-col-grid">
          {toolTypes.map(s => (<div key={s.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px" }}><div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{s.icon}</div><h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{s.title}</h3><p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.65 }}>{s.desc}</p></div>))}
        </div>
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Scale Types We Design</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>{scales.map(s => (<span key={s} style={{ padding: "5px 12px", background: "#fff", border: "2px solid #1a2a6c", borderRadius: "16px", fontSize: "0.79rem", color: "#1a2a6c", fontWeight: 600 }}>{s}</span>))}</div>
        </div>
        <div style={{ marginBottom: "28px" }}><h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Frequently Asked Questions</h2><FaqAccordion faqs={faqs} /></div>
      </section>
      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Your Research Instrument Developed by Experts</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>Questionnaires · Interview Guides · Validation · Likert Scales · Response in 30 min</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
