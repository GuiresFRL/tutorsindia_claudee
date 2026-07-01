import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "UK Case Report Writing Services | Medical, Business, Legal",
  description: "The US / UK Report Writing Service. Medical/Nursing case reports, Business case studies, Legal case reports. Expert UK & US writers. Plagiarism-free. Tutors India.",
};

const reportTypes = [
  {
    icon: "🏥",
    title: "Medical / Nursing Case Report",
    desc: "Clinical case reports documenting patient presentation, diagnosis, treatment, and outcomes. Written to medical journal standards with full ethical compliance and HIPAA-aware anonymisation.",
    points: ["Patient background and presenting complaint", "Clinical examination and investigation findings", "Diagnosis and differential diagnosis", "Treatment plan and management", "Outcomes and follow-up", "Discussion and learning points", "Full clinical referencing (Vancouver, AMA)"],
  },
  {
    icon: "💼",
    title: "Business Case Study",
    desc: "Company-specific or scenario-based business case studies. SWOT analysis, strategic evaluation, market analysis, financial review and recommendations presented academically.",
    points: ["Executive Summary", "Company/situation background", "Market Analysis and environment", "Key Issues identification", "SWOT, PESTLE, Porter's Five Forces", "Decision Criteria and Data Analysis", "Strategic Recommendations"],
  },
  {
    icon: "⚖️",
    title: "Legal Case Report",
    desc: "Legal case analysis covering statute law, case law, legislation, legal argument, and judicial reasoning. Written to academic legal standards with full OSCOLA or Harvard (Legal) referencing.",
    points: ["Case background and facts", "Legal issues and questions raised", "Applicable statutes and case law", "Judicial reasoning and analysis", "Critique and evaluation", "Implications and recommendations", "Full legal referencing (OSCOLA)"],
  },
  {
    icon: "🔬",
    title: "Scientific / Research Case Report",
    desc: "Scientific case reports for engineering, life science, and research-based programmes. Covers methodology, data collection, findings and analysis with appropriate statistical presentation.",
    points: ["Introduction and background", "Methodology and data collection", "Results and data analysis", "Discussion of findings", "Conclusions and recommendations", "References and appendices", "Statistical output (SPSS/R/STATA)"],
  },
];

const reportStructure = [
  { n: "01", title: "Cover Page", desc: "Title, author name, institution, module/course name, date, and word count as required by your university guidelines." },
  { n: "02", title: "Executive Summary / Abstract", desc: "Concise overview of the case, key issues, methodology, findings, and recommendations — typically 150–300 words." },
  { n: "03", title: "Introduction", desc: "Background context of the case, purpose of the report, scope, and structure of the document." },
  { n: "04", title: "Body / Main Analysis", desc: "Market analysis, key issues identification, SWOT/PESTLE (for business) or clinical examination/diagnosis (for medical), data analysis, and findings." },
  { n: "05", title: "Decision Criteria & Data Analysis", desc: "Evaluation of options, criteria used for decisions, quantitative and qualitative data analysis, statistical outputs where applicable." },
  { n: "06", title: "Recommendations", desc: "Actionable, evidence-based recommendations clearly linked to the analysis, prioritised and supported by academic literature." },
  { n: "07", title: "Conclusion", desc: "Summary of key findings, limitations of the report, and implications for practice, policy, or future research." },
  { n: "08", title: "References & Appendices", desc: "Full reference list in your required citation style (Harvard, APA, Vancouver, OSCOLA). Appendices include raw data, interview transcripts, and supporting materials." },
];

const serviceTiers = [
  { tier: "Basic", color: "#2563b0", desc: "Developed based on relevant sources, reasonable attempt at finding an area that warrants research — evidence of critical evaluation but mainly descriptive.", includes: ["Relevant academic sources", "Case background", "Basic critical evaluation", "Standard referencing", "Executive summary"] },
  { tier: "Advanced", color: "#1a2a6c", desc: "Wide range of sources, clear identification of core issues and research gaps with aims, research questions, and strong analysis.", includes: ["Wide range of sources", "Core issues identification", "Clear research gap", "Strong critical analysis", "Recommendations section"] },
  { tier: "Premium", color: "#e87722", desc: "Wide range of seminal research with thorough engagement using latest resources. Solid gap identified and justified. Excellent critical analysis (upgradable).", includes: ["Seminal research", "Solid justified gap", "Excellent critical analysis", "Full data analysis", "Upgradable quality"] },
];

const qaBoxes = [
  { img: "/images/qa/Quality-Assurance.png", title: "Quality Assurance", desc: "We ensure quality at every stage and the process.", href: "/guarantees/" },
  { img: "/images/qa/Plagiarism-Report.png", title: "Plagiarism Report", desc: "We deliver the document after scanning for plagiarism.", href: "/guarantees/" },
  { img: "/images/qa/Customer-Interaction.png", title: "Customer Interaction", desc: "We interact with you at every stage for amendments, queries and delivery.", href: "/contact-us/" },
];

const faqs = [
  { q: "What types of case reports does Tutors India write?", a: "We write medical/nursing case reports, business case studies (company-specific or scenario-based), legal case reports, and scientific/research case reports. Our 2000+ expert writers cover all academic disciplines and case study types required by UK, US, and Australian universities." },
  { q: "What information do I need to provide when ordering a case report?", a: "To match exactly with your requirement, we need: the case scenario or company/patient details, university guidelines and assessment criteria, marking rubric, word count, deadline, and any specific sections or questions the case report should address. The more detail you provide, the more accurately we can tailor the report." },
  { q: "Do you write medical case reports for nursing students?", a: "Yes, we have specialist medical and nursing writers who are experienced in writing clinical case reports to medical journal standards. All clinical information is handled with full ethical awareness and patient anonymisation. We reference using Vancouver, AMA, and other medical citation styles as required." },
  { q: "How do you ensure the case report is plagiarism-free?", a: "All case reports are written from scratch and scanned using Turnitin before delivery. We guarantee less than 5% plagiarism and provide a plagiarism-free certificate. Our writing process involves thorough research and original analysis — not copy-pasting of existing case studies." },
  { q: "Can you write a case report on a specific company?", a: "Yes. We write business case studies on specific companies, industries, or scenarios as required by your university. We research the company thoroughly using credible academic and industry sources and apply appropriate frameworks (SWOT, PESTLE, Porter's Five Forces) to produce a comprehensive analysis." },
  { q: "Do you offer revisions for case reports?", a: "Yes, we provide unlimited free revisions for any changes required based on the original instructions. Minor changes are completed within 24 working hours and significant changes within 48 working hours. If your tutor or supervisor provides specific feedback, share it with us and we will revise accordingly at no additional charge." },
];

const testimonials = [
  { quote: "Express sincere gratitude to the team of Tutors India for guiding me to complete my case report. They prepared the case report for my research proposal and also guided me with thorough instructions. The support is fantastic!", author: "Audrey", avatar: "/images/testimonials/t07.jpg" },
  { quote: "The submission procedure was simple. The peer review procedure was straightforward and completed on time. I really appreciate their taking the time to include a brief profile of the authors. I would recommend Tutors India for case report publication.", author: "Isabella", avatar: "/images/testimonials/user8.jpg" },
  { quote: "Honestly, I didn't expect this level of quality. The team understood exactly what I needed and delivered work that felt genuinely professional. My confidence went from stressed to unstoppable.", author: "Amelia Brooks", location: "UK", avatar: "/images/testimonials/amelia-brooks.webp" },
];

const subjects = [
  "Medicine & Health", "Nursing & Clinical Practice", "Business & Management", "Law & Legal Studies",
  "Engineering & Technology", "Biological Sciences", "Psychology", "Social Work",
  "Education & Training", "Marketing & Communication", "Computer Science & IT", "Economics & Finance",
];

export default function CaseReportPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}<Link href="/our-services/coursework-writing/" style={{ color: "#a0b8e0" }}>Coursework Writing</Link>{" / "}<span style={{ color: "#fff" }}>Case Report Writing</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              The US / UK Case Report Writing Service
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              UK Report Writing at Tutors India will be strictly in British English, following university requirements including citation and formatting. Our team of US &amp; British Writers guarantees your grade across medical, business, legal, and scientific case reports.
            </p>
            <p style={{ color: "#f9c74f", fontSize: "0.92rem", fontWeight: 600, marginBottom: "24px" }}>Medical · Nursing · Business · Legal · Scientific Case Reports</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/tutorsindia-logo-hd.jpg" alt="Tutors India" style={{ width: "90px", height: "90px", objectFit: "contain", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>Medical · Business<br />Legal · Scientific<br />All Case Types</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      <div style={{ background: "#12214a", padding: "16px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: "2,000+", l: "Expert Writers" }, { n: "4 Types", l: "Case Reports" }, { n: "British English", l: "Standard" }, { n: "< 5%", l: "Plagiarism" }, { n: "Unlimited", l: "Revisions" }, { n: "30 min", l: "Response" }].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
              <div style={{ fontSize: "0.68rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Expert Case Report &amp; Case Study Writing Service</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            A case study design provides an opportunity to collect research data from various sources while utilizing different data collection techniques to take advantage of multiple sources of evidence. Tutors India offers full management, legal, medical and clinical case report services — handling medical/nursing (case report), business case study (specific company) or scenario-based cases, and legal case reports.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.94rem" }}>
            Our reports are written with utmost care based on your specific university guidelines &amp; specifications. All case reports are written strictly in British English following university citation and formatting requirements. Writers are selected based on their specific domain expertise — medical writers for nursing case reports, business experts for company case studies, legal specialists for law case reports.
          </p>
        </div>

        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Case Report Types We Cover</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "18px" }}>Expert writers for every type of academic case report</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }} className="two-col-grid">
            {reportTypes.map(r => (
              <div key={r.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "22px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                  <span style={{ fontSize: "2rem" }}>{r.icon}</span>
                  <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", fontWeight: 700, color: "#1a2a6c" }}>{r.title}</h3>
                </div>
                <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.7, marginBottom: "12px" }}>{r.desc}</p>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {r.points.map(p => (
                    <li key={p} style={{ display: "flex", gap: "7px", fontSize: "0.8rem", color: "#555", padding: "4px 0", borderBottom: "1px solid #f0f2fa" }}>
                      <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>✓</span> {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Case Report Structure</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "18px" }}>We follow specific university guidelines across the United States, United Kingdom, Australia, and other institutions</p>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", overflow: "hidden" }}>
            {reportStructure.map((item, i) => (
              <div key={item.n} style={{ padding: "14px 20px", borderBottom: i < reportStructure.length - 1 ? "1px solid #f0f2fa" : "none", display: "flex", gap: "14px", alignItems: "flex-start" }}>
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

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "22px", marginBottom: "28px" }} className="two-col-grid">
          <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "14px" }}>Free Deliverables with Every Order</h3>
            {["Executive summary / abstract", "Free research articles used in writing", "SPSS data sheets and output", "Questionnaire or semi-structured interview guide", "Redrawn graphs, tables, and figures", "Free tutoring sessions on the work", "Plagiarism report (Turnitin)", "Appendices at no additional cost"].map(item => (
              <div key={item} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", fontSize: "0.83rem", color: "#c5d5f0" }}>
                <span style={{ color: "#f9c74f", fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
              </div>
            ))}
          </div>
          <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px", border: "1px solid #dde2ef" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our Guarantees</h3>
            {["Unlimited revisions for committed work", "On-time delivery guaranteed", "24/7 customer support", "Three-level quality check", "100% confidentiality — NDA-signed writers", "Plagiarism free — less than 5%", "Domain-specific expert writers", "British English standard throughout"].map((g, i) => (
              <div key={i} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid #dde2ef", fontSize: "0.83rem", color: "#555" }}>
                <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>{i + 1}.</span> {g}
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "14px", marginBottom: "28px" }}>
          {qaBoxes.map(box => (
            <Link key={box.title} href={box.href} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", overflow: "hidden", textAlign: "center", display: "block" }}>
              <img src={box.img} alt={box.title} style={{ width: "100%", height: "100px", objectFit: "contain", padding: "10px", background: "#f5f6fa" }} loading="lazy" />
              <div style={{ padding: "10px" }}>
                <div style={{ fontSize: "0.83rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "3px" }}>{box.title}</div>
                <div style={{ fontSize: "0.74rem", color: "#666", lineHeight: 1.4 }}>{box.desc}</div>
              </div>
            </Link>
          ))}
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
          <p style={{ color: "#666", fontSize: "0.86rem", marginBottom: "14px", fontWeight: 600 }}>2000+ Experts — USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {subjects.map(s => (<span key={s} style={{ padding: "5px 13px", background: "#fff", border: "1.5px solid #dde2ef", borderRadius: "16px", fontSize: "0.79rem", color: "#1a2a6c", fontWeight: 500 }}>{s}</span>))}
          </div>
        </div>
      </section>

      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Your Case Report Written by Domain Experts</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>Medical · Business · Legal · Scientific · Response in 30 min · Unlimited Revisions</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
