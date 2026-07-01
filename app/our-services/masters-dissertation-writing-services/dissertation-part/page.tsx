import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "Masters Part / Chapter Dissertation Writing Services UK",
  description: "UK & US Master's Part / Chapter-wise Dissertation Writing Service. Introduction, Literature Review, Methodology, Results, Discussion — any chapter. Expert writers.",
};

const chapters = [
  { n: "01", title: "Abstract / Executive Summary", desc: "Approximately 250–350 words including background, objectives, boundaries, methodology, results, main conclusion, and recommendations. Completed after the full dissertation has been written." },
  { n: "02", title: "Acknowledgement Writing", desc: "Brief statements about family, friends, and those who gave direct assistance. Includes declaration of original work, plagiarism compliance, word count statement, and a copy of the plagiarism software scan results." },
  { n: "03", title: "Table of Contents", desc: "Chapter headings, appendices, references with page numbers. Separate lists for figures, tables, and abbreviations. Created using Microsoft Word indexing and style functions." },
  { n: "04", title: "Introduction Chapter — I", desc: "Brief description of the topic, research questions, and research objectives. Provides necessary background information, broad foundation from existing literature, general scope, overview of sections, and engages the readers." },
  { n: "05", title: "Aims, Objectives & Hypotheses — II", desc: "Clear statement of research objectives, questions the researcher seeks to answer, or the hypothesis. Includes original contributions, a detailed account of the introduction points, and rationale." },
  { n: "06", title: "Literature, Context & Background — III", desc: "Insights on: (a) previous studies in your research field (b) major themes (c) theories scholars use to analyse primary sources (d) gaps identified in the literature (e) further investigations intended (f) best methodologies." },
  { n: "07", title: "Detailed Research Methodology — IV", desc: "Overall methodological approach, research design, strategy (qualitative or quantitative), research philosophy, target area, population, sample size, primary or secondary data collection, ethical consideration, pilot study, validity, reliability, and statistical analysis." },
  { n: "08", title: "Results / Findings / Data Analysis — V", desc: "Findings presented as tables and figures with interpretation. Quantitative models, hypothesis testing, descriptive statistics (mean, SD, regression), or qualitative analysis (content, textual, case study). Uses SPSS / R / SAS / STATA / Minitab." },
  { n: "09", title: "Discussion, Summary & Conclusion — VI", desc: "Three sections: Discussion compares findings with previously published authors in line with research questions. Summary provides an overview. Conclusion covers main findings and recommendations." },
  { n: "10", title: "References / Citation Compliance", desc: "Work cited or sources cited (in-text) from ProQuest, Emerald, IEEE, Web of Science, Academic Complete, SciDirect, JSTOR, Elsevier. Harvard, APA, MLA, Chicago, Vancouver styles supported." },
  { n: "11", title: "Bibliography & Appendices", desc: "Lists of read but uncited sources. Appendices may include experiment diagrams, questionnaires, permissions for human subject testing, ethical forms, raw data, SPSS/SAS/R output, and reflection." },
  { n: "12", title: "Dissertation Formatting", desc: "Word count, paper size, margin settings, line spacing, page numbering, font, alignment, front cover, acknowledgement, abstract, table of contents, figures, tables, abbreviations, chapter headings, citation format, academic style, attribution, plagiarism check, ethics, and assessment report." },
];

const serviceTiers = [
  { tier: "Basic", color: "#2563b0", desc: "Developed based on relevant sources, a reasonable attempt at finding an area that warrants research and evidence of an attempt to provide critical evaluation — mainly descriptive.", includes: ["Relevant academic sources", "Research gap attempt", "Basic critical evaluation", "Standard formatting", "Proper referencing"] },
  { tier: "Advanced", color: "#1a2a6c", desc: "Wide range of sources, a clear identification of research gap in the literature along with aim and research questions.", includes: ["Wide range of sources", "Clear research gap", "Defined aims & research questions", "Strong academic writing", "Advanced methodology"] },
  { tier: "Premium", color: "#e87722", desc: "Wide range of seminal research with thorough engagement using latest resources. A solid gap identified and justified thoroughly. Excellent critical analysis shown (upgradable).", includes: ["Seminal research", "Solid justified research gap", "Excellent critical analysis", "Latest resources", "Upgradable quality"] },
];

const qaBoxes = [
  { img: "/images/services/masters-chapter-wise.png", title: "Chapter-Wise Sample", desc: "Check sample chapter-wise dissertation from our expert writers", href: "/our-sample-works/" },
  { img: "/images/qa/Quality-Assurance.png", title: "Quality Assurance", desc: "We ensure quality at every stage and the process.", href: "/guarantees/" },
  { img: "/images/qa/Plagiarism-Report.png", title: "Plagiarism Report", desc: "We deliver the document after scanning for plagiarism.", href: "/guarantees/" },
  { img: "/images/qa/Customer-Interaction.png", title: "Customer Interaction", desc: "We interact with the customer at every stage for amendments, queries and delivery.", href: "/contact-us/" },
];

const faqs = [
  { q: "On which areas do you provide Masters part-dissertation writing services?", a: "We accept orders from Business Management, Finance, Operations, Supply Chain, Logistics, Entrepreneurship, HR, Psychology, History, Geography, Engineering, Healthcare, Economics, Computer Science, English, Literature, Epidemiology, Nursing, Medical, Public Health, Life Science, and Nutrition. If your field is not listed, please contact us." },
  { q: "What information do I need to provide while ordering?", a: "To match exactly with your requirement, we need: (i) marking criteria, (ii) university guidelines, (iii) professor feedback, (iv) dissertation structure guidelines from the university, (v) complete dissertation previously submitted, (vi) data sheet used for the analysis, (vii) research proposal, and any other information you wish to share." },
  { q: "Does the work meet university guidelines and high academic standards?", a: "Of course. Tutors India writers are very specific in following all UK, US, Australia and other university guidelines as well as meeting the highest academic standards. We ensure your Masters Dissertation part follows recent university guidelines because our expertise is always up-to-date with the latest university requirements." },
  { q: "What dissertation parts does Tutors India provide?", a: "We offer support for: Introduction, Statistical Analysis, Materials/Methods/Methodology, Literature Review, Findings or interpretation of statistical analysis, Conclusion, and any other chapter writing services. Alternatively, get complete chapter-wise writing services from our domain expertise." },
  { q: "I have heard stories about unqualified people writing dissertations. How do you ensure quality?", a: "Tutors India conducts brainstorming sessions so you get opportunities to talk with our experts directly — to understand their skill set and experience — before you decide to take the services. This company relies entirely on good word of mouth from clients who have experienced our service firsthand." },
  { q: "Why do you provide free drafts for all orders?", a: "We provide the Masters Part dissertation free draft after completing each chapter or dissertation part to ensure that our process flow is consistent. It helps students identify changes and give feedback to improve chapter-wise, so it is easy to explain to your committee through oral examination. Get back suggestions and instantly make changes." },
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies",
  "Marketing & Communication", "Engineering & Technology", "Natural Sciences & Mathematics",
  "Biological & Life Science", "Economics & Administration", "Humanities & Social Science",
  "Law", "Medicine & Health", "Education & Training", "Journalism & Media",
  "Agriculture & Forestry", "Computer Science & IT", "Hospitality, Leisure & Sports",
];

export default function DissertationPartPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
              <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}
              <Link href="/our-services/masters-dissertation-writing-services/" style={{ color: "#a0b8e0" }}>Masters Dissertation</Link>{" / "}
              <span style={{ color: "#fff" }}>Dissertation Part</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              The US and the UK Master's Part / Chapter-wise Dissertation Writing Service
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Looking to write only part of your master's dissertation — Introduction, Literature Review, Methodology, Findings, Statistical Analysis, Discussion or Conclusion chapter?
            </p>
            <p style={{ color: "#f9c74f", fontSize: "0.92rem", fontWeight: 600, marginBottom: "24px" }}>Then You've Certainly Reached the Right place</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <a href="https://www.tutorsindia.com/wp-content/uploads/2020/10/TI-DISSERTATION-PART.pdf" target="_blank" rel="noopener noreferrer" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>📄 Brochure</a>
              <Link href="/ask-an-expert/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.3)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Ask an Expert</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/tutorsindia-logo-hd.jpg" alt="Tutors India" style={{ width: "90px", height: "90px", objectFit: "contain", marginBottom: "10px" }} />
            <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#f9c74f" }}>8,000+</div>
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0" }}>Dissertations<br />Completed</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      {/* ── STATS BAR ── */}
      <div style={{ background: "#12214a", padding: "16px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: "8,000+", l: "Dissertations Done" }, { n: "2,000+", l: "Expert Writers" }, { n: "12 Chapters", l: "Supported" }, { n: "< 5%", l: "Plagiarism" }, { n: "Unlimited", l: "Revisions" }, { n: "30 min", l: "Response" }].map(s => (
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
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Custom Master's Dissertation Chapter Writing</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            Writing a dissertation is a daunting task as students need to produce an original piece of research work on a topic of special interest. Tutors India not only provides support for writing full dissertations, but our service also extends support for writing part-dissertation chapter writing services.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            We can write starting from abstract or executive summary, introduction chapter, literature review, theoretical framework, hypotheses development, questionnaire development, research questions and objectives, data analysis, discussions, conclusions, recommendations, interview transcript analysis, ethical form filling, appendices, and any other help you may require with your dissertation.
          </p>
          <div style={{ background: "#fff8f0", borderLeft: "4px solid #e87722", borderRadius: "0 8px 8px 0", padding: "14px 18px", marginTop: "14px" }}>
            <p style={{ color: "#555", fontSize: "0.88rem", lineHeight: 1.7 }}>
              <strong style={{ color: "#1a2a6c" }}>Dissertation Chapter Writing is Simply Easy &amp; Straightforward.</strong> Our professional dissertation writers have completed around 8,000 Masters Dissertations successfully. Just send us your dissertation topic along with the deadline and see results that are far justified and mark the success of your dissertation.
            </p>
          </div>
        </div>

        {/* 12 Chapter Types */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>A Part Dissertation Features — All Chapters We Support</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "18px" }}>We follow specific university guidelines across the United States, United Kingdom, Australia, and other Asian Universities.</p>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", overflow: "hidden" }}>
            {chapters.map((ch, i) => (
              <div key={ch.n} style={{ padding: "16px 22px", borderBottom: i < chapters.length - 1 ? "1px solid #f0f2fa" : "none", display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "50%", width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.72rem", fontWeight: 700, flexShrink: 0 }}>{ch.n}</div>
                <div>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "4px" }}>{ch.title}</h3>
                  <p style={{ fontSize: "0.84rem", color: "#666", lineHeight: 1.65 }}>{ch.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* University Guidelines note */}
        <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "24px", marginBottom: "28px" }}>
          <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "12px" }}>Dissertation Chapter Writing with Utmost Care</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="two-col-grid">
            <div>
              <p style={{ color: "#c5d5f0", fontSize: "0.88rem", lineHeight: 1.7, marginBottom: "10px" }}>
                Part custom Dissertation writing services at Tutors India are handled and written by the style, design, and format of an ideal dissertation required by the UK, Australia, and the US universities. We assist you to complete your part dissertation covering: topic selection, research proposal writing, reflection journals, introduction, literature review, research methodology, presenting and discussing findings, research ethics, citations and referencing, and references along with Appendices.
              </p>
            </div>
            <div>
              <p style={{ color: "#c5d5f0", fontSize: "0.88rem", lineHeight: 1.7, marginBottom: "10px" }}>
                <strong style={{ color: "#f9c74f" }}>We have Chapter by Chapter Delivery Process and Deadline.</strong> This is to ensure that clients have full control over the delivery and can look at the drafts of different sections. Unlike other companies, we do not charge any costs for such structure as we ensure client satisfaction at every stage of the work.
              </p>
              <div style={{ display: "flex", gap: "10px", marginTop: "14px" }}>
                <Link href="/order-now/" style={{ flex: 1, textAlign: "center", padding: "10px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "0.88rem" }}>Order Now</Link>
                <Link href="/our-sample-works/" style={{ flex: 1, textAlign: "center", padding: "10px", border: "2px solid rgba(255,255,255,0.4)", color: "#fff", borderRadius: "5px", fontWeight: 600, fontSize: "0.88rem" }}>Sample Work</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Service Tiers */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>What Services Do We Offer Under Part Dissertation?</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "18px" }}>Three levels of quality for your chapter-wise dissertation writing</p>
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

        {/* Free Deliverables */}
        <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px", marginBottom: "28px", border: "1px solid #dde2ef" }}>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "8px" }}>Free Offers Along with Your Master's Part Dissertation Writing Services</h3>
          <p style={{ color: "#666", fontSize: "0.87rem", lineHeight: 1.7, marginBottom: "14px" }}>We deliver more than your expectation:</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "10px" }} className="four-col-grid">
            {["Abstract or Executive Summary", "Graphs & Tables (redrawn)", "Statistical / textual data analysis", "SPSS / software screenshots", "Free tutoring sessions on the work", "SPSS output in Appendix", "Free research articles used", "Questionnaire or interview guide"].map(item => (
              <div key={item} style={{ background: "#fff", borderRadius: "8px", padding: "12px", border: "1px solid #dde2ef", display: "flex", gap: "6px", alignItems: "flex-start" }}>
                <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0, fontSize: "0.9rem" }}>✓</span>
                <span style={{ fontSize: "0.8rem", color: "#555" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* QA Boxes */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Our Quality Assurance Process</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "14px" }} className="four-col-grid">
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
        </div>

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

      {/* ── CTA ── */}
      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Your Dissertation Chapters Written by Experts</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>Join 2,00,000+ scholars. Response within 30 minutes · Chapter-by-Chapter Delivery · Unlimited Revisions</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
