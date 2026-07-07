import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "Research Methodology Writing Services UK",
  description: "Expert Research Methodology Writing for Masters, MBA and PhD dissertations. Qualitative, Quantitative and Mixed methods. SPSS, NVIVO, STATA. Tutors India.",
};

const methodologyTypes = [
  { icon: "📊", title: "Quantitative Research", desc: "Survey design, statistical analysis, hypothesis testing, regression, SEM. Software: SPSS, R, STATA, SAS, Minitab, E-Views. Descriptive and inferential statistics fully covered." },
  { icon: "💬", title: "Qualitative Research", desc: "Interviews, focus groups, ethnography, thematic analysis, content analysis, grounded theory. Software: NVIVO, Atlas-ti, MAXQDA. Full coding framework and theme development." },
  { icon: "🔀", title: "Mixed Methods / Triangulation", desc: "Combination of qualitative and quantitative approaches. Methodological justification, integration of data sources, and combined findings presentation." },
  { icon: "📋", title: "Systematic Review Methodology", desc: "PRISMA protocol development, database search strategy, inclusion/exclusion criteria, quality assessment, data extraction, and synthesis." },
  { icon: "🔍", title: "Action Research", desc: "Cyclical research processes, participatory action research, practitioner research. Common in education, healthcare, and organisational settings." },
  { icon: "📖", title: "Secondary / Library-Based", desc: "Secondary data analysis, archival research, document analysis. Sources: ONS, World Bank, Eurostat, NHS Digital, OECD, published datasets." },
];

const methodologyComponents = [
  { n: "01", title: "Research Philosophy", desc: "Epistemological and ontological positioning — Positivism, Interpretivism, Critical Realism, Pragmatism. Justification of the philosophical stance adopted for your specific research questions." },
  { n: "02", title: "Research Approach", desc: "Inductive vs. deductive reasoning, abductive approach. How your chosen approach aligns with your research questions and philosophical stance." },
  { n: "03", title: "Research Design", desc: "Exploratory, descriptive, explanatory, or evaluative design. Case study, survey, experimental, longitudinal, or cross-sectional design with full justification." },
  { n: "04", title: "Research Strategy", desc: "Survey, case study, experiment, action research, grounded theory, ethnography, archival research — with rationale for the chosen strategy." },
  { n: "05", title: "Time Horizon", desc: "Cross-sectional (one point in time) vs. longitudinal (extended period) research. Justification based on research questions and feasibility." },
  { n: "06", title: "Data Collection Methods", desc: "Primary: questionnaires, interviews, observation, focus groups. Secondary: existing datasets, published research, official statistics." },
  { n: "07", title: "Sampling Strategy", desc: "Probability sampling (random, stratified, systematic, cluster) vs. non-probability (purposive, snowball, convenience). Sample size determination and justification." },
  { n: "08", title: "Data Analysis Approach", desc: "Statistical analysis plan (quantitative) or analytical framework (qualitative). Tools: SPSS, R, STATA, NVIVO, Atlas-ti. Validity and reliability measures." },
  { n: "09", title: "Ethical Considerations", desc: "Informed consent, data protection (GDPR), confidentiality, anonymity, participant wellbeing, ethical approval process, and institutional ethics compliance." },
  { n: "10", title: "Limitations & Delimitations", desc: "Research boundaries, acknowledged limitations of the chosen methodology, potential biases, and how limitations are mitigated." },
];

const serviceTiers = [
  { tier: "Basic", color: "#2563b0", desc: "Sound methodology with appropriate design, clear research questions, and standard justification of methods chosen.", includes: ["Appropriate research design", "Clear research questions", "Standard justification", "Ethical considerations", "Basic sampling rationale"] },
  { tier: "Advanced", color: "#1a2a6c", desc: "Comprehensive methodology with wide philosophical justification, clear gap identification, detailed sampling, and data analysis plan.", includes: ["Full philosophical justification", "Clear research gap", "Detailed sampling strategy", "Data analysis plan", "Validity & reliability section"] },
  { tier: "Premium", color: "#e87722", desc: "Seminal research methodology with excellent critical analysis, thorough justification at every level, and primary data collection support.", includes: ["Seminal research engagement", "Excellent critical justification", "Primary data support", "Full analysis framework", "Upgradable quality"] },
];

const softwareTools = [
  "SPSS", "SPSS AMOS", "R", "STATA", "SAS", "E-Views", "Minitab",
  "NVIVO", "Atlas-ti", "MAXQDA", "Excel", "Epi-Info",
];

const faqs = [
  { q: "Why is research methodology so important in a dissertation?", a: "Determining an appropriate research methodology is an important element of any master's dissertation. Our writers have acquired both theoretical and practical skills on respective elements to be included in any methodology chapter. A well-justified methodology demonstrates rigour, credibility, and appropriateness of your research approach — directly impacting your dissertation grade." },
  { q: "How do you select the right methodology for my research?", a: "Our subject matter experts assess your research questions, the nature of your topic, your university's requirements, and the practical feasibility of data collection before recommending and justifying a methodology. We consider the philosophical stance, research approach, design, strategy, data collection methods, and analysis tools that best fit your specific study." },
  { q: "Can you write the methodology for qualitative and quantitative research?", a: "Yes. We cover all research approaches including purely qualitative (NVIVO, Atlas-ti, thematic analysis), purely quantitative (SPSS, R, STATA, statistical analysis), and mixed methods (combining both). Our statisticians and qualitative researchers hold PhD and Masters degrees with 10+ years of experience in their respective methodological areas." },
  { q: "Do you help with the actual data collection as well?", a: "We provide advice on data collection design and can help develop data collection instruments (questionnaires, interview guides, observation frameworks). For primary data collection itself, we can assist at an additional cost. Secondary data sourcing is also supported through our reference and data collection services." },
  { q: "What software do you use for data analysis?", a: "We use SPSS, SPSS AMOS, R, STATA, SAS, E-Views, Minitab, Epi-Info, and Excel for quantitative analysis. For qualitative analysis we use NVIVO, Atlas-ti, MAXQDA, and Wordstat. All software outputs are shared as appendix material with screenshots documenting the analytical process." },
  { q: "Can you help if my supervisor has rejected my methodology?", a: "Yes. If your supervisor has rejected your methodology chapter, please share their specific feedback and we will comprehensively revise and strengthen the methodology. We provide a point-by-point response to all supervisor comments and unlimited revisions until the chapter is fully accepted. This is included at no additional charge." },
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
  { quote: "It was hard to write the research methodology for my research proposal. Tutors India helped me in drafting research methodology and it was the most life-changing experience I ever had. The work they provided was amazing and valuable. Thank you team.", author: "Chitaksh", avatar: "/images/testimonials/t21.jpg" },
  { quote: "Found Tutors India for writing my research methodology in data science, when I desperately needed help. Their team was very friendly and showed a genuine interest in my academic progress and prospects. The document they provided was of high quality — many thanks to the team.", author: "Leo", avatar: "/images/testimonials/t14.jpg" },
  { quote: "I have gone through the Research Methodology chapter. Seems quite good. Good work done. The supervisor was satisfied with the methodological approach chosen and justified.", author: "Xander", location: "Germany", avatar: "/images/testimonials/t19.jpg" },
];

const subjects = [
  "Business & Management", "Psychology & Behavioural Science", "Medicine & Health", "Nursing & Clinical Practice",
  "Engineering & Technology", "Computer Science & IT", "Social Sciences", "Education & Training",
  "Economics & Finance", "Law", "Biological Sciences", "Natural Sciences",
];

export default function ResearchMethodologyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}<Link href="/our-services/coursework-writing/" style={{ color: "#a0b8e0" }}>Coursework Writing</Link>{" / "}<span style={{ color: "#fff" }}>Research Methodology</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              Research Methodology Writing Services for UK Dissertations
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Determining an appropriate research methodology is an important element of any master's or doctoral dissertation. Our writers have acquired both theoretical and practical skills on respective elements to be included in any methodology — covering qualitative, quantitative, and mixed methods approaches across all disciplines.
            </p>
            <p style={{ color: "#f9c74f", fontSize: "0.92rem", fontWeight: 600, marginBottom: "24px" }}>SPSS · R · STATA · NVIVO · Atlas-ti · All Methodological Approaches</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/samples/assignment-writing.jpg" alt="Student working on academic assignment" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>Qualitative<br />Quantitative<br />Mixed Methods</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      <div style={{ background: "#12214a", padding: "16px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: "6 Approaches", l: "Covered" }, { n: "12 Software", l: "Tools" }, { n: "PhD Qualified", l: "Statisticians" }, { n: "< 5%", l: "Plagiarism" }, { n: "Unlimited", l: "Revisions" }, { n: "30 min", l: "Response" }].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
              <div style={{ fontSize: "0.68rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Expert Research Methodology Writing Service</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            We are completely aware that there is a way and difference in the methodology section being written for management and healthcare or economics. Every discipline has its structure of methodologies and therefore Tutors India provides consultation and writing services for your research methodology using our subject matter expertise.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.94rem" }}>
            We offer a wide range of dissertation research methodology writing services — either being qualitative methods, quantitative research methods, a combination of both, or critical and action-oriented. Our writers are well experienced in handling any methodology across the discipline, with specific software skills and theoretical knowledge grounded in the research methods literature.
          </p>
        </div>

        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Research Methodology Types We Cover</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
            {methodologyTypes.map(m => (
              <div key={m.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{m.icon}</div>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{m.title}</h3>
                <p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.65 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Research Methodology Chapter Components</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "18px" }}>Comprehensive coverage of all methodology chapter sections</p>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", overflow: "hidden" }}>
            {methodologyComponents.map((item, i) => (
              <div key={item.n} style={{ padding: "14px 20px", borderBottom: i < methodologyComponents.length - 1 ? "1px solid #f0f2fa" : "none", display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "50%", width: "30px", height: "30px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.68rem", fontWeight: 700, flexShrink: 0 }}>{item.n}</div>
                <div>
                  <h3 style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "3px" }}>{item.title}</h3>
                  <p style={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Statistical &amp; Qualitative Software We Use</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {softwareTools.map(tool => (
              <span key={tool} style={{ padding: "6px 14px", background: "#fff", border: "2px solid #1a2a6c", borderRadius: "20px", fontSize: "0.82rem", color: "#1a2a6c", fontWeight: 600 }}>{tool}</span>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>Service Tiers</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
            {serviceTiers.map(t => (
              <div key={t.tier} style={{ background: "#fff", border: `2px solid ${t.color}`, borderRadius: "10px", overflow: "hidden" }}>
                <div style={{ background: t.color, color: "#fff", padding: "14px 18px" }}><div style={{ fontSize: "1.2rem", fontWeight: 700 }}>{t.tier}</div></div>
                <div style={{ padding: "16px" }}>
                  <p style={{ fontSize: "0.84rem", color: "#555", lineHeight: 1.65, marginBottom: "12px" }}>{t.desc}</p>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {t.includes.map(i => (<li key={i} style={{ display: "flex", gap: "6px", fontSize: "0.78rem", color: "#555", padding: "4px 0", borderBottom: "1px solid #f0f2fa" }}><span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>✓</span> {i}</li>))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>What Our Clients Say</h2>
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

        <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px" }}>
          <p style={{ color: "#666", fontSize: "0.86rem", marginBottom: "14px", fontWeight: 600 }}>Subject-specific methodology experts across all disciplines</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {subjects.map(s => (<span key={s} style={{ padding: "5px 13px", background: "#fff", border: "1.5px solid #dde2ef", borderRadius: "16px", fontSize: "0.79rem", color: "#1a2a6c", fontWeight: 500 }}>{s}</span>))}
          </div>
        </div>
      </section>

      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Your Research Methodology Written by Experts</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>All Approaches · SPSS · R · NVIVO · Unlimited Revisions · Response in 30 min</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
