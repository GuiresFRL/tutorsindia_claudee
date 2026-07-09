import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "PhD Doctorate Research Proposal Writing Help",
  description: "PhD Doctorate Research Proposal Writing Service by qualified US & UK researchers. Free Gantt chart, ethical form, executive summary. Unlimited revisions.",
};

const proposalStructure = [
  { n: "01", title: "Dissertation Proposal Title / Working Title", desc: "Although tentative, at Tutors India we use a precise working title to ensure acceptance. The title conveys the ideas of your investigation, orients readers to the topic, indicates the type of study you will conduct, the target population, and the geographical location." },
  { n: "02", title: "Introduction to the Topic", desc: "Brief description of the topic, research questions, and research objectives. Provides necessary background information, an overview of existing literature, and a general scope of the research. The section should engage readers and provide a sense of the overall research." },
  { n: "03", title: "Aim and Overall Objectives / Hypotheses", desc: "A description of what the research wants to achieve. Includes a clear statement of research objectives, the questions the researcher seeks to answer or the hypothesis. Also includes original contributions of your study, with a detailed account of points summarised in the introduction, and rationale." },
  { n: "04", title: "Literature, Context & Background", desc: "Provides insights on: (a) studies conducted previously in your research field (b) familiarity with major themes (c) theories scholars use to analyse primary sources (d) gaps identified in the literature (e) further investigations you intend to pursue (f) best methodologies for the study." },
  { n: "05", title: "The Detailed Research Methodology", desc: "Essential to a successful research proposal. Includes overall methodological approach, research design, strategy (qualitative or quantitative), research philosophy, target area, population, sample size, primary or secondary data collection, ethical considerations, pilot study, validity, reliability, and statistical analysis." },
  { n: "06", title: "Potential Outcomes / Significance of the Study", desc: "Discusses expected methodological and substantial outcomes, including theoretical contributions based on the proposed methodology and existing knowledge. Details the usefulness or benefits of the study, both for the research community and the outside world." },
  { n: "07", title: "Summary & Conclusion", desc: "An overview of the research proposal summarised in a paragraph. Includes a brief description of the relevant chapters: Introduction, Statement of the Problem, Literature Review, Research Objectives, Research Methodology, Scope and Limitations, and Potential Outcome / Significance of the Study." },
  { n: "08", title: "Timeline / Gantt Chart", desc: "Deliverables with start and finish dates (GANTT Chart). Includes a schedule with anticipated completion dates for specific parts of the dissertation, demonstrating whether the researcher has the capability to deliver the project as per institutional requirements." },
  { n: "09", title: "References", desc: "Work cited or sources referenced in the dissertation research proposal. Includes peer-reviewed scholarly articles, textbooks, newspaper articles, and annual reports from ProQuest, Emerald, IEEE, Web of Science, Academic Complete, SciDirect, JSTOR, Elsevier." },
  { n: "10", title: "Bibliography & Appendices", desc: "Works that were read but not cited. Informs readers about various sources that form the basis for the proposed study and methodology. Appendices may include experiment diagrams, questionnaires, permissions for human subject testing, ethical forms, and reflections." },
];

const serviceTiers = [
  { tier: "Basic", color: "#2563b0", desc: "Descriptive approach with reasonable research area identification and evidence of critical evaluation attempts.", includes: ["Appropriate academic sources", "Research area identification", "Basic critical evaluation", "Initial aims and objectives", "Standard referencing"] },
  { tier: "Advanced", color: "#1a2a6c", desc: "Identifies clear research gaps with aims and research questions using a wide range of sources.", includes: ["Wide range of sources", "Clear research gap identification", "Defined aims & research questions", "Strong academic writing", "Methodology overview"] },
  { tier: "Premium", color: "#e87722", desc: "Seminal research engagement with latest resources, thoroughly justified gaps, excellent critical analysis (upgradable option).", includes: ["Seminal research engagement", "Solid justified research gap", "Excellent critical analysis", "Latest resources used", "Upgradable to publication quality"] },
];

const freeDeliverables = [
  "Executive summary / abstract",
  "Free research articles used in writing",
  "Gantt chart with milestone schedule",
  "Ethical form filling",
  "University template formatting",
  "Reflective log or diary",
  "Free tutoring sessions",
  "SPSS output in Appendix (if applicable)",
];

const faqs = [
  { q: "On which areas you provide dissertation proposal writing services?", a: "At Tutors India, we provide PhD/DBA dissertation proposal in broad areas of research. Namely, employee engagement dissertations, customer buying behavior dissertation, project management dissertation, knowledge management dissertation, International marketing, performance management, strategic management and business policy, management of technology, international business, total quality management, public relation theories dissertation and many more. We also offer topics for various subjects such as MBA in HR, HRM, Finance, Economics, Operations, Nursing, medical, geographic, accounting, history, sociology, English, Music, advertising, fashion, tourism, architecture, computer science, politics, art, statistics." },
  { q: "Time plan to complete My PhD dissertation research proposal?", a: "Time plan will designed based on the type of the research projects, research study and client's requirement. Then, you will get your Time line to complete dissertation research proposal." },
  { q: "What Information that I need to provide while ordering for PhD dissertation proposal topic?", a: "To match exactly with your requirement, we required a title that you had already selected, scope, target country, industry experience and feasibility of data collection, if any. Moreover, any other information that our writer should know also can be provided from your end." },
  { q: "What if I require some customization in the research proposal we deliver?", a: "Our service is completely flexible and tailor made to the customer. Hence, if you can provide the areas of customization related to research area initially proposed, we can make amendments in the dissertation research proposal." },
  { q: "What if my guide/professor rejects the research proposal?", a: "The service we provide is completely flexible. Hence, we can tailor-made or customize your delivered research proposal based on the research area provided initially. Simply provide your modifications and we will deliver you according to the requirement." },
  { q: "Why Tutorsindia is required for my PhD research proposal writing?", a: "The answer is very simple; Tutors India has included with number of dedicated researchers who undergoes numerous in-depth research session before making some quantity of research proposal. This includes put 10-15 professionals for survey purpose and the sample size of real customers are collected based on product/services." },
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
  { quote: "Tutors India gathered enormous data for my research work on complexity in consumer problem. It helped me complete my research work faster.", author: "Divij", avatar: "/images/testimonials/t18.jpg" },
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies",
  "Marketing & Communication", "Engineering & Technology", "Natural Sciences & Mathematics",
  "Biological & Life Science", "Economics & Administration", "Humanities & Social Science",
  "Law", "Medicine & Health", "Education & Training", "Journalism & Media",
  "Agriculture & Forestry", "Computer Science & IT", "Hospitality, Leisure & Sports",
];

export default function PhDResearchProposalPage() {
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
              <Link href="/our-services/phd-dba-dissertation/" style={{ color: "#a0b8e0" }}>PhD / DBA Dissertation</Link>{" / "}
              <span style={{ color: "#fff" }}>PhD Research Proposal</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              Ph.D. Doctorate Research Proposal Writing Help
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Are you struggling to write a PhD research proposal or struck with an idea but lack research experience? Our qualified and experienced researchers from the US &amp; UK write all PhD Research Proposals with perfection based on University guidelines and specifications.
            </p>
            <p style={{ color: "#f9c74f", fontSize: "0.92rem", fontWeight: 600, marginBottom: "24px" }}>Response within 30 minutes — Free Gantt Chart &amp; Ethical Form Included</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <a href="/docs/phd-research-proposal-brochure.pdf" target="_blank" rel="noopener noreferrer" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>📄 Brochure</a>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "20px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/services/phd-research-proposal.png" alt="PhD Research Proposal" style={{ width: "90px", height: "90px", objectFit: "contain", marginBottom: "10px" }} loading="lazy" />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>3,500+ PhDs<br />Helped Since 2001<br />Unlimited Revisions</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      {/* ── STATS BAR ── */}
      <div style={{ background: "#12214a", padding: "16px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: "3,500+", l: "PhDs Helped" }, { n: "2,000+", l: "Expert Writers" }, { n: "30 min", l: "Response" }, { n: "Free", l: "Gantt Chart" }, { n: "Unlimited", l: "Revisions" }, { n: "< 5%", l: "Plagiarism" }].map(s => (
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
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Doctorate Dissertation Research Proposal Writing</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            The most demanding &amp; daunting task of the dissertation writing is the research proposal. At Tutors India, we offer research proposal writing service, where you can relax and remain stress-free given that work being handled by an experienced researcher. Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities from India, the US, and the UK.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            An essential requirement and preliminary activity for Ph.D. admission both international and nationally are having a good and convincing Ph.D. research proposal. Although this is an important task but undertaking such activity is a challenging and cumbersome process for any researcher who have little or no prior experience in the academic arena.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.94rem" }}>
            Understanding this challenging task, our experts at Tutors India who have vast experience in both theoretical and industrial knowledge will help you to write your PhD-level research proposal. Our Dissertation Research Proposals demonstrate the ability to communicate complex ideas critically, concisely, and clearly. We justify and plan a research project and show how your research projects contribute to existing research.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "14px", marginTop: "16px" }} className="three-col-grid">
            {[
              { icon: "🔬", title: "Primary or Secondary Research", desc: "We deliver proposals using primary or secondary research. Primary research is recommended for originality and original contribution to knowledge." },
              { icon: "📐", title: "Qualitative, Quantitative or Triangulation", desc: "Our subject matter experts advise on choosing the right methodology based on research questions and problem statement identified." },
              { icon: "📊", title: "Specific Dissertation Types", desc: "Services include business plans, systematic reviews, and meta-analyses as part of your PhD dissertation requirements." },
            ].map(item => (
              <div key={item.title} style={{ background: "#f5f6fa", borderRadius: "8px", padding: "16px", border: "1px solid #dde2ef" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "6px" }}>{item.icon}</div>
                <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "5px" }}>{item.title}</div>
                <div style={{ fontSize: "0.79rem", color: "#666", lineHeight: 1.55 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Free Includes Banner */}
        <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "22px", marginBottom: "28px" }}>
          <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "8px" }}>Writing a PhD Research Proposal is Simply Easy &amp; Straightforward</h3>
          <p style={{ color: "#c5d5f0", fontSize: "0.87rem", lineHeight: 1.7, marginBottom: "14px" }}>Along with the research proposal content, we provide the following completely free of cost:</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "8px" }} className="four-col-grid">
            {freeDeliverables.map(item => (
              <div key={item} style={{ display: "flex", gap: "6px", fontSize: "0.81rem", color: "#c5d5f0", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                <span style={{ color: "#f9c74f", fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
              </div>
            ))}
          </div>
        </div>

        {/* Service Tiers */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Service Tiers for PhD Research Proposal</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "18px" }}>Three levels of PhD research proposal writing based on your requirements</p>
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

        {/* Proposal Structure */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>PhD Dissertation Research Proposal Structure</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "18px" }}>We follow specific university guidelines across the United States, United Kingdom, Australia, and other institutions. Our PhD research proposal consists of:</p>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", overflow: "hidden" }}>
            {proposalStructure.map((item, i) => (
              <div key={item.n} style={{ padding: "16px 22px", borderBottom: i < proposalStructure.length - 1 ? "1px solid #f0f2fa" : "none", display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "50%", width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.72rem", fontWeight: 700, flexShrink: 0 }}>{item.n}</div>
                <div>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "4px" }}>{item.title}</h3>
                  <p style={{ fontSize: "0.84rem", color: "#666", lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* QA Boxes */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Our Quality Assurance Process</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "14px" }}>
            {[
              { img: "/images/qa/Quality-Assurance.png", title: "Quality Assurance", desc: "We ensure quality at every stage and the process.", href: "/guarantees/" },
              { img: "/images/qa/Plagiarism-Report.png", title: "Plagiarism Report", desc: "We deliver the document after scanning for plagiarism.", href: "/guarantees/" },
              { img: "/images/qa/Customer-Interaction.png", title: "Customer Interaction", desc: "We interact with you at every stage for amendments, queries and delivery.", href: "/contact-us/" },
            ].map(box => (
              <Link key={box.title} href={box.href} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", overflow: "hidden", textAlign: "center", display: "block" }}>
                <img src={box.img} alt={box.title} style={{ width: "100%", height: "100px", objectFit: "contain", padding: "10px", background: "#f5f6fa" }} loading="lazy" />
                <div style={{ padding: "10px" }}>
                  <div style={{ fontSize: "0.83rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "3px" }}>{box.title}</div>
                  <div style={{ fontSize: "0.74rem", color: "#666", lineHeight: 1.4 }}>{box.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <TestimonialSlider testimonials={testimonials} />

        {/* FAQ */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Frequently Asked Questions</h2>
          <FaqAccordion faqs={faqs} />
        </div>

        {/* Subject Areas */}
        <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>2000+ Experts Across Subjects &amp; Countries</h2>
          <p style={{ color: "#666", fontSize: "0.86rem", marginBottom: "14px" }}>USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {subjects.map(s => (
              <span key={s} style={{ padding: "5px 13px", background: "#fff", border: "1.5px solid #dde2ef", borderRadius: "16px", fontSize: "0.79rem", color: "#1a2a6c", fontWeight: 500 }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Your PhD Research Proposal Written by Experts</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>Response within 30 minutes · Free Gantt Chart · Free Ethical Form · Unlimited Revisions</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
