import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "PhD Doctorate Full Dissertation Writing Services",
  description: "PhD Doctorate Full Dissertation Writing Consultation Services — Abstract to Conclusion. Expert PhD-qualified writers from UK & US. 3,500+ PhDs completed. Unlimited revisions.",
};

const dissertationComponents = [
  { n: "01", title: "Abstract", desc: "Approximately 250–350 words written after the full dissertation is complete. Includes brief summary of introduction/background, objectives, boundaries, methodology, results of the research, main conclusion, and recommendations." },
  { n: "02", title: "Acknowledgement", desc: "Brief statement ensuring appropriate acknowledgement of those who gave direct assistance. Includes declaration of original work, plagiarism compliance, word count statement, and confirmation that the dissertation passed through plagiarism software." },
  { n: "03", title: "Table of Contents", desc: "Lists chapter headings, appendices, references with page numbers. Separate lists for figures, tables, and abbreviations. Created using Microsoft Word indexing and style functions." },
  { n: "04", title: "Introduction", desc: "Brief description of the topic, research questions, and research objectives. Provides necessary background information, broad foundation from existing literature, general scope, overview of sections, and engages the readers." },
  { n: "05", title: "Literature, Context & Background", desc: "Covers: (a) studies conducted previously in your research field (b) familiarity with major themes (c) theories scholars use to analyse primary sources (d) gaps identified in the literature (e) further investigations intended (f) best methodologies for the study." },
  { n: "06", title: "Research Methodology", desc: "Essential section including overall methodological approach, research design, strategy (qualitative or quantitative), research philosophy, target area, population, sample size, primary or secondary data collection, ethical considerations, pilot study, validity, reliability, and statistical analysis." },
  { n: "07", title: "Results / Findings / Data Analysis", desc: "Findings presented as tables and figures with interpretation. Quantitative: descriptive statistics, regression, hypothesis testing, SEM. Qualitative: content, textual, case study analysis. Tools: SPSS, R, SAS, STATA, Minitab, SPSS AMOS." },
  { n: "08", title: "Discussion, Summary & Conclusion", desc: "Three sections: Discussion compares and contrasts findings with published literature aligned to research questions. The heart of the dissertation requiring analytics and critical thinking. Summary overview followed by conclusion with main findings and recommendations." },
  { n: "09", title: "References / Bibliography", desc: "Work cited or sources cited (in-text) from ProQuest, Emerald, IEEE, Web of Science, Academic Complete, SciDirect, JSTOR, Elsevier. Harvard, APA, Chicago, Vancouver, Turabian styles. Bibliography also included." },
  { n: "10", title: "Appendices", desc: "Experiment diagrams, questionnaires, permissions for human subject testing, ethical forms, raw data, SPSS/SAS/R output files, interview transcripts, and reflection materials." },
  { n: "11", title: "Dissertation Formatting", desc: "Full compliance check: word count, paper size, margin settings, line spacing, page numbering, fonts, alignment, front cover, chapter headings, citation format, academic style, ethics documentation, and assessment report." },
];

const serviceTiers = [
  { tier: "Basic", color: "#2563b0", desc: "Developed based on relevant sources, a reasonable attempt at finding an area that warrants research and evidence of an attempt to provide critical evaluation — mainly descriptive.", includes: ["Relevant academic sources", "Research gap attempt", "Basic critical evaluation", "Standard structure", "Proper referencing"] },
  { tier: "Advanced", color: "#1a2a6c", desc: "Wide range of sources, a clear identification of research gap in the literature along with aim and research questions.", includes: ["Wide range of sources", "Clear research gap", "Defined aims & research questions", "Strong academic writing", "Advanced analysis"] },
  { tier: "Premium", color: "#e87722", desc: "Wide range of seminal research with thorough engagement using latest resources. A solid gap identified and justified thoroughly. Excellent critical analysis shown (upgradable to publication standard).", includes: ["Seminal research", "Solid justified gap", "Excellent critical analysis", "Latest resources", "Upgradable to publication"] },
];

const faqs = [
  { q: "On which subject areas do you provide PhD full dissertation writing services?", a: "We accept orders from Business Management (HR, operations, finance, digitalisation, technology, marketing), Economics, Computer Science, English, Literature, Engineering (all fields), Epidemiology, Public Health, Life Science, Nutrition, and all other academic disciplines. If your subject is not listed, please contact us to confirm availability." },
  { q: "Are all assigned writers qualified to write PhD dissertations?", a: "Yes. All our professional writers hold PhD or Masters degrees from top UK and US universities with additional research and industry experience. Some of our writers are trained at Harvard School, Oxford, London School of Business, and the University of Birmingham. Writers are selected through a stringent process including NDA signing." },
  { q: "Is there any chance of my PhD dissertation getting bad feedback from the committee?", a: "In some cases, you may receive feedback because different committee members have different perspectives. Our writers address minor feedback within 24 hours and significant changes within 48 working hours. We work through unlimited free revisions until you are completely satisfied. Our experienced researchers understand the mindset and standards required by top UK, US, and Australian universities." },
  { q: "Is there any possibility of plagiarism in my PhD dissertation?", a: "No, we give 100% guarantee of 0% plagiarism on your PhD dissertation document. All work is checked using internationally accepted premium Turnitin before delivery. We provide a plagiarism-free dissertation report to ensure your document is unique. Our writing process involves thorough brainstorming and original research — not copy-pasting." },
  { q: "How much do you charge for PhD dissertation revisions?", a: "We provide unlimited revisions completely free of cost. We do not charge even a penny for any number of revisions since we are committed to 100% customer satisfaction. Our commitment continues until you achieve a satisfactory grade, including resit support." },
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
  { quote: "I have defended my research few days ago and scored a very good grade. Thank you for all your support and guidance throughout the dissertation journey.", author: "Bryan", location: "Australia", avatar: "/images/testimonials/t15.jpg" },
  { quote: "My thesis accepted… thank you for your support. The team was professional and delivered exactly what I needed within the deadline.", author: "Nicholas", location: "Australia", avatar: "/images/testimonials/t13.jpg" },
  { quote: "Thank you for your help & support. My PhD Defence viva was conducted successfully and I am now waiting for formal notification from the University. Thank you once again.", author: "Oliver", location: "Denmark", avatar: "/images/testimonials/t18.jpg" },
  { quote: "Please thank the respected professor Ma'am for a brilliant discussion. Ever since she came onto the project, things have been moving in the most ideal manner. My heartfelt thanks for all her time and effort.", author: "Jesse Ryder", location: "New Zealand", avatar: "/images/testimonials/t21.jpg" },
  { quote: "Availing services from Tutors India was perhaps the best decision in my PhD journey. The writers were patient and more than willing to answer all my queries. They improved the Literature review to a great extent! Thank you for extraordinary work!", author: "Alexander", location: "Algeria", avatar: "/images/testimonials/t16.jpg" },
  { quote: "I contacted Tutors India for formulating the problem statement, which they did extremely well. The professionals then guided me with the framework and the methodology. They even helped me publish a research paper in support of my thesis. Great work!", author: "Farhan", location: "Japan", avatar: "/images/testimonials/t20.jpg" },
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies",
  "Marketing & Communication", "Engineering & Technology", "Natural Sciences & Mathematics",
  "Biological & Life Science", "Economics & Administration", "Humanities & Social Science",
  "Law", "Medicine & Health", "Education & Training", "Journalism & Media",
  "Agriculture & Forestry", "Computer Science & IT", "Hospitality, Leisure & Sports",
];

export default function PhDFullDissertationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}<Link href="/our-services/phd-dba-dissertation/" style={{ color: "#a0b8e0" }}>PhD / DBA</Link>{" / "}<span style={{ color: "#fff" }}>PhD Full Dissertation</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              PhD Doctorate Full Dissertation Writing Consultation Services
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Are you looking for an expert writer of your specific subject for your PhD dissertation writing — completely from Abstract writing to Conclusion section with the high research quality? Your PhD Dissertation is written by qualified and experienced researchers from the US &amp; UK.
            </p>
            <p style={{ color: "#f9c74f", fontSize: "0.92rem", fontWeight: 600, marginBottom: "24px" }}>Then You've Certainly Reached the Right place</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/samples/dissertation-samples.webp" alt="Academic experts collaborating" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#f9c74f" }}>3,500+</div>
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0" }}>PhDs Completed<br />Since 2001</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      <div style={{ background: "#12214a", padding: "16px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: "3,500+", l: "PhDs Helped" }, { n: "2,000+", l: "Expert Writers" }, { n: "PhD Qualified", l: "All Writers" }, { n: "0%", l: "Plagiarism" }, { n: "Unlimited", l: "Revisions" }, { n: "30 min", l: "Response" }].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
              <div style={{ fontSize: "0.68rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>PhD Doctorate Full Dissertation Writing Service</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            We understand the importance of a doctoral dissertation as it represents the cumulative experience of one's entire educational experience. At Tutors India, we develop the entire dissertation right from introduction to recommendations, offering holistic and comprehensive support and working with you until successful completion of your viva voce.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.94rem" }}>
            Our team consists of PhD holders, postdoctoral fellows, MD-holding PhDs, statisticians, biostatisticians, copy editors, and project coordinators. Writers have experience in research methodology, specific domain experience, and educational degrees from top universities including Harvard School, Oxford, London School of Business, and the University of Birmingham.
          </p>
        </div>

        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Service Tiers for PhD Full Dissertation</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px", marginBottom: "28px" }} className="three-col-grid">
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
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>A Full PhD Dissertation Features — All Components</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "18px" }}>We follow specific university guidelines across the United States, United Kingdom, Australia, and other institutions.</p>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", overflow: "hidden" }}>
            {dissertationComponents.map((ch, i) => (
              <div key={ch.n} style={{ padding: "16px 22px", borderBottom: i < dissertationComponents.length - 1 ? "1px solid #f0f2fa" : "none", display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "50%", width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.72rem", fontWeight: 700, flexShrink: 0 }}>{ch.n}</div>
                <div>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "4px" }}>{ch.title}</h3>
                  <p style={{ fontSize: "0.84rem", color: "#666", lineHeight: 1.65 }}>{ch.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "22px", marginBottom: "28px" }} className="two-col-grid">
          <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "14px" }}>Free Deliverables with Your PhD Dissertation</h3>
            {["Abstract or Executive Summary", "Redrawn Graphs & Tables", "Statistical / textual analysis of data", "SPSS / software screenshots", "Free tutoring sessions on the work", "SPSS output in Appendix", "Free research articles used in writing", "Questionnaire or interview guide"].map(item => (
              <div key={item} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", fontSize: "0.83rem", color: "#c5d5f0" }}>
                <span style={{ color: "#f9c74f", fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
              </div>
            ))}
          </div>
          <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px", border: "1px solid #dde2ef" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our Guarantees</h3>
            {["Unlimited revisions for committed work", "On-time delivery guaranteed", "24/7 customer support", "Three-level quality check", "100% confidentiality — NDA-signed writers", "0% plagiarism — Turnitin verified", "Subject-specific PhD-qualified writers", "Chapter-by-chapter delivery"].map((g, i) => (
              <div key={i} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid #dde2ef", fontSize: "0.83rem", color: "#555" }}>
                <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>{i + 1}.</span> {g}
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>What Our PhD Clients Say</h2>
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
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>2000+ Experts Across Subjects &amp; Countries</h2>
          <p style={{ color: "#666", fontSize: "0.86rem", marginBottom: "14px" }}>USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {subjects.map(s => (<span key={s} style={{ padding: "5px 13px", background: "#fff", border: "1.5px solid #dde2ef", borderRadius: "16px", fontSize: "0.79rem", color: "#1a2a6c", fontWeight: 500 }}>{s}</span>))}
          </div>
        </div>
      </section>

      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Your PhD Full Dissertation Written by Experts</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>Response within 30 minutes · 0% Plagiarism · Unlimited Revisions · Viva Support</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
