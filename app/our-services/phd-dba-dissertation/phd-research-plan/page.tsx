import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "PhD & DBA Dissertation Research Planning & Consultation",
  description: "PhD & DBA Doctorate Dissertation Research Planning & Consultation Help. 5–10 page research plan with framework, Gantt chart, and timeline. 5000+ PhD theses supported.",
};

const researchPlanComponents = [
  { n: "01", title: "Title and Abstract (0.5 pages)", desc: "A precise title as approved by the university. Abstract of approximately 0.5 pages summarising the research task, framework, timeframe, and scope of the proposed research work." },
  { n: "02", title: "Introduction (1 page)", desc: "Brief description of the research topic, problem statement, and context. Provides necessary background information and sets the scene for the proposed doctoral investigation." },
  { n: "03", title: "Background and Motivation (1 page)", desc: "Detailed rationale for the research. Explains why this study is needed now, what gap exists in current knowledge, and why you are the right person to conduct this research." },
  { n: "04", title: "Importance of Research & Context (0.5 page)", desc: "Identifies the significance of the proposed research for the academic community and practical implications. Demonstrates why this doctoral study matters and what it contributes." },
  { n: "05", title: "Objectives / Goals (1 page)", desc: "Clear, SMART research objectives aligned with the research questions. Includes hypotheses where applicable and the expected original contribution to knowledge." },
  { n: "06", title: "Research Methodology (1 page)", desc: "Overall methodological approach, research design (qualitative, quantitative or mixed), research philosophy, target area, population, sample size, data collection methods, ethical considerations, and statistical analysis plan." },
  { n: "07", title: "Work Performed / Preliminary Work (0.5 page)", desc: "Description of any preliminary studies, pilot work, or existing knowledge that supports the feasibility of the proposed research. Demonstrates readiness to begin doctoral work." },
  { n: "08", title: "Research Time Plan / Gantt Chart (0.5 page)", desc: "Detailed Gantt chart with task completion dates for specific parts of the research. Demonstrates capability to deliver the project as per institutional requirements within the PhD timeline." },
  { n: "09", title: "Infrastructure / Software Requirements", desc: "Any specific software (SPSS, R, STATA, NVIVO, Atlas-ti), equipment, laboratory access, or research infrastructure requirements necessary to complete the proposed research." },
  { n: "10", title: "References and Literature", desc: "Comprehensive list of key references cited in the research plan, demonstrating familiarity with the field. Includes peer-reviewed sources from ProQuest, Emerald, IEEE, Web of Science, SciDirect, JSTOR." },
  { n: "11", title: "Appendix", desc: "Supporting materials such as draft survey instruments, ethical approval forms, preliminary data collection tools, pilot study results, or other supporting documentation." },
];

const specificAims = [
  { icon: "🎯", title: "Specific Aims", desc: "Scientific questions, research goals, objectives, and hypothesis clearly defined. SMART objectives that are measurable, achievable, and directly connected to your research questions." },
  { icon: "📖", title: "Background & Significance", desc: "Comprehensive review of existing knowledge in the field, demonstration of the research gap, and justification of why this research is needed at doctoral level at this time." },
  { icon: "🔬", title: "Preliminary Studies", desc: "Any pilot work, preliminary data collection, or initial studies that support the feasibility and relevance of the proposed research direction." },
  { icon: "🗺️", title: "Research Design & Methods", desc: "Detailed methodology covering approach, design, strategy, philosophy, population, sample size, data collection methods, statistical tools, and analysis plan." },
];

const faqs = [
  { q: "On which areas do you provide PhD research plan writing?", a: "We accept orders from Business Management (HR, operations, finance, digitalisation, technology, marketing), Economics, Computer Science, English, Literature, Engineering (including Semiconductor Devices, Vehicular AdHoc Networks, Wireless Sensor Networks, Analog Electronics, VLSI Design, Electrical/Electronics), Epidemiology, Public Health, Life Science, and Nutrition. Contact us if your specific area is not listed." },
  { q: "Does my research plan satisfy the Department's evaluation criteria?", a: "Yes. Our research plans are designed to address important research problems, meet conceptual frameworks, include appropriate design, methods and analyses, and are well-integrated and reasoned. Our writers understand the specific evaluation criteria of doctoral programmes at UK, US, and Australian universities." },
  { q: "What information do I need to provide while ordering a PhD research plan?", a: "To match exactly with your requirement, we need: your selected title (if any), whether it is primary or secondary research, university guidelines and referencing style, rubric scale and marking criteria, scope, target country, industry experience, data collection feasibility. Any existing work, research proposals, or supervisor feedback are also very helpful." },
  { q: "Is the PhD research plan innovative and original?", a: "Yes. All research plans meet the evaluation criteria for: Significance (will the research advance knowledge?), Approach (is the methodology sound?), Innovation (does it challenge existing paradigms?), Application (are the concepts applied correctly?), and Qualification (does the researcher have the necessary background?). We ensure all criteria are addressed." },
  { q: "What specific sections does a PhD research plan include?", a: "A comprehensive PhD research plan includes: (1) Specific Aims — scientific questions, goals, objectives, hypothesis; (2) Background and Significance — literature context and justification; (3) Preliminary Studies — any pilot work conducted; (4) Research Design and Methods — detailed methodology, sample, tools, and analysis. Additional sections include timeline, infrastructure requirements, and references." },
  { q: "Can the research plan be used as a basis for my full research proposal?", a: "The PhD research plan provides valuable starting guidelines to kick-start your dissertation writing. While the plan serves as a foundation, a full research proposal has additional university-specific requirements. We offer a separate PhD Research Proposal service that builds comprehensively on the research plan, expanding each section to meet your university's full proposal requirements." },
];

const testimonials = [
  { quote: "The attention to detail was incredible. It felt like an expert academic partner guiding me throughout the entire research planning process. I couldn't have started my PhD without this support.", author: "Layla Al Mansoori", avatar: "/images/testimonials/layla-al-mansoori.webp" },
  { quote: "Contacted Tutors India for formulating the problem statement and research objectives, which they did extremely well. The professionals then guided me with the framework and methodology. Even helped me publish a research paper supporting my thesis.", author: "Farhan", location: "Japan", avatar: "/images/testimonials/t20.jpg" },
  { quote: "Please progress with the next chapters. I will be sending payment. The feedback from the professors — very positive. The research plan was exactly what my supervisor needed to approve my PhD registration.", author: "Elias", location: "Sweden", avatar: "/images/testimonials/t17.jpg" },
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies", "Marketing & Communication",
  "Engineering & Technology", "Natural Sciences & Mathematics", "Biological & Life Science", "Economics & Administration",
  "Humanities & Social Science", "Law", "Medicine & Health", "Education & Training",
  "Journalism & Media", "Agriculture & Forestry", "Computer Science & IT", "Hospitality, Leisure & Sports",
];

export default function PhDResearchPlanPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}<Link href="/our-services/phd-dba-dissertation/" style={{ color: "#a0b8e0" }}>PhD / DBA</Link>{" / "}<span style={{ color: "#fff" }}>PhD Research Plan</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              PhD &amp; DBA Doctorate Dissertation Research Planning &amp; Consultation Help
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Are you not sure how to conduct a PhD Research Plan? Obtaining a PhD typically requires 3–8 years. At Tutors India, we help you develop a PhD research plan with realistic goals that can be achieved within the given timeframe. Our research plan is approximately 5–10 pages.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "20px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/services/phd-research-plan.png" alt="PhD Research Plan" style={{ width: "90px", height: "90px", objectFit: "contain", marginBottom: "10px" }} loading="lazy" />
            <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#f9c74f" }}>5,000+</div>
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0" }}>PhD Theses<br />Supported</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      <div style={{ background: "#12214a", padding: "16px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: "5,000+", l: "PhD Theses Supported" }, { n: "5–10 Pages", l: "Research Plan" }, { n: "Gantt Chart", l: "Included Free" }, { n: "< 5%", l: "Plagiarism" }, { n: "Unlimited", l: "Revisions" }, { n: "30 min", l: "Response" }].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
              <div style={{ fontSize: "0.68rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>PhD Dissertation Research Planning Service</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            Obtaining a PhD typically requires 3–8 years, with the timeline depending on your supervisor, topic scope, methodology, and university regulations. Developing a PhD research plan with realistic goals is essential, typically completed within the first year after registration. Our research plan consists of the research task, content-oriented framework, timeframe, and scope of research work — presented to your supervisor and examination board.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.94rem" }}>
            Till now we have completed more than 5,000 PhD theses and also supported publication. Some of our writers are trained at Harvard School, London School of Business, and the University of Birmingham. Our team includes PhD holders, postdoctoral fellows, statisticians, and research methodology experts.
          </p>
        </div>

        {/* Specific Aims */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Key Sections of Your PhD Research Plan</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "16px" }} className="four-col-grid">
            {specificAims.map(a => (
              <div key={a.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{a.icon}</div>
                <h3 style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{a.title}</h3>
                <p style={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.6 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Full Components */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Complete PhD Research Plan Structure</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "18px" }}>Our research plan is approximately 5–10 pages and consists of the following sections:</p>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", overflow: "hidden" }}>
            {researchPlanComponents.map((ch, i) => (
              <div key={ch.n} style={{ padding: "14px 20px", borderBottom: i < researchPlanComponents.length - 1 ? "1px solid #f0f2fa" : "none", display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "50%", width: "30px", height: "30px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.68rem", fontWeight: 700, flexShrink: 0 }}>{ch.n}</div>
                <div>
                  <h3 style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "3px" }}>{ch.title}</h3>
                  <p style={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.6 }}>{ch.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* QA + Guarantees */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "22px", marginBottom: "28px" }} className="two-col-grid">
          <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "14px" }}>Free Deliverables with Your Research Plan</h3>
            {["Executive summary / abstract", "Free research articles used in writing", "SPSS data sheets and output", "Questionnaire or semi-structured interview questions", "Reflective log or diary entries", "Gantt chart with task completion dates", "Three-level quality assurance report", "Plagiarism report"].map(item => (
              <div key={item} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", fontSize: "0.83rem", color: "#c5d5f0" }}>
                <span style={{ color: "#f9c74f", fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
              </div>
            ))}
          </div>
          <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px", border: "1px solid #dde2ef" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our Guarantees</h3>
            {["Unlimited revisions for committed work", "On-time delivery guaranteed", "24/7 customer support", "Word count excludes references/bibliography", "Three-level quality check", "100% confidentiality", "Plagiarism free — less than 5%", "Subject-specific experienced writers"].map((g, i) => (
              <div key={i} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid #dde2ef", fontSize: "0.83rem", color: "#555" }}>
                <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>{i + 1}.</span> {g}
              </div>
            ))}
          </div>
        </div>

        {/* QA Boxes */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "14px", marginBottom: "28px" }}>
          {[
            { img: "/images/qa/Quality-Assurance.png", title: "Quality Assurance", desc: "We ensure quality at every stage.", href: "/guarantees/" },
            { img: "/images/qa/Plagiarism-Report.png", title: "Plagiarism Report", desc: "Document scanned before delivery.", href: "/guarantees/" },
            { img: "/images/qa/Customer-Interaction.png", title: "Customer Interaction", desc: "We interact at every stage for queries and delivery.", href: "/contact-us/" },
          ].map(box => (
            <Link key={box.title} href={box.href} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", overflow: "hidden", textAlign: "center", display: "block" }}>
              <img src={box.img} alt={box.title} style={{ width: "100%", height: "90px", objectFit: "contain", padding: "10px", background: "#f5f6fa" }} loading="lazy" />
              <div style={{ padding: "10px" }}>
                <div style={{ fontSize: "0.83rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "3px" }}>{box.title}</div>
                <div style={{ fontSize: "0.74rem", color: "#666" }}>{box.desc}</div>
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
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Your PhD Research Plan Written by Experts</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>5–10 pages · Free Gantt Chart · Response within 30 minutes · Unlimited Revisions</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
