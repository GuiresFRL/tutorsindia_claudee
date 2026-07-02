import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "Part / Chapter-wise PhD Dissertation Writing Help",
  description: "Part / Chapter-wise PhD Dissertation Writing Help & Consultation. Literature Review, Methodology, Data Analysis, Discussion — any chapter. 8000+ theses completed.",
};

const chapters = [
  { n: "01", title: "Abstract / Executive Summary", desc: "Approximately 250–350 words written after the full dissertation is complete. Covers background, objectives, boundaries, methodology, results, main conclusion, and recommendations." },
  { n: "02", title: "Acknowledgement", desc: "Brief statement acknowledging those who gave direct assistance. Includes declaration of original work, plagiarism compliance, word count statement, and plagiarism scan confirmation." },
  { n: "03", title: "Table of Contents", desc: "Chapter headings, appendices, references with page numbers. Separate lists for figures, tables, and abbreviations. Created using Microsoft Word indexing and style functions." },
  { n: "04", title: "Introduction Chapter", desc: "Brief description of the topic, research questions, and objectives. Provides necessary background, broad foundation from existing literature, general scope, section overview, and reader engagement." },
  { n: "05", title: "Aims, Objectives & Hypotheses", desc: "Clear statement of research aims, questions the researcher seeks to answer, or the hypothesis. Includes original contributions, detailed account of introduction points, and rationale." },
  { n: "06", title: "Literature, Context & Background", desc: "Covers: (a) previous studies in your field (b) major themes (c) theories scholars use (d) gaps identified in the literature (e) further investigations intended (f) best methodologies." },
  { n: "07", title: "Detailed Research Methodology", desc: "Overall methodological approach, research design, strategy, research philosophy, target area, population, sample size, data collection, ethics, pilot study, validity, reliability, and statistical analysis." },
  { n: "08", title: "Results / Findings / Data Analysis", desc: "Findings presented as tables and figures with interpretation. Quantitative: descriptive statistics, regression, hypothesis testing. Qualitative: content, textual, case study. Tools: SPSS, R, SAS, STATA, Minitab." },
  { n: "09", title: "Discussion, Summary & Conclusion", desc: "Three sections: Discussion compares findings with published literature in line with research questions. The heart of the dissertation requiring analytics and critical thinking. Summary and conclusion with recommendations." },
  { n: "10", title: "References & Bibliography", desc: "Work cited from ProQuest, Emerald, IEEE, Web of Science, Academic Complete, SciDirect, JSTOR, Elsevier. Harvard, APA, Chicago, Vancouver styles. Bibliography of works read but not cited also included." },
  { n: "11", title: "Appendices", desc: "Experiment diagrams, questionnaires, ethical forms, raw data, SPSS/SAS/R output files, interview transcripts, and reflection materials." },
  { n: "12", title: "Dissertation Formatting", desc: "Full compliance: word count, paper size, margins, line spacing, page numbering, fonts, front cover, headings, citation format, academic style, ethics documentation." },
];

const serviceTiers = [
  { tier: "Basic", color: "#2563b0", desc: "Developed based on relevant sources, reasonable attempt at finding an area that warrants research, evidence of attempt to provide critical evaluation — mainly descriptive.", includes: ["Relevant sources", "Research gap attempt", "Basic evaluation", "Standard formatting"] },
  { tier: "Advanced", color: "#1a2a6c", desc: "Wide range of sources, clear identification of research gap in the literature along with aim and research questions.", includes: ["Wide range of sources", "Clear research gap", "Defined aims & questions", "Strong writing"] },
  { tier: "Premium", color: "#e87722", desc: "Wide range of seminal research with thorough engagement using latest resources. Solid gap identified and justified thoroughly. Excellent critical analysis (upgradable).", includes: ["Seminal research", "Solid justified gap", "Excellent analysis", "Latest resources"] },
];

const faqs = [
  { q: "On which areas do you provide PhD part-dissertation writing services?", a: "We accept orders from Business Management (HR, operations, finance, digitalisation, technology, marketing), Economics, Computer Science, English, Literature, Engineering, Epidemiology, Public Health, Life Science, Nutrition, and all other academic disciplines. Our 2000+ expert writers cover every major academic discipline." },
  { q: "What information do I need to provide while ordering?", a: "To match exactly with your requirement, we need: (i) marking criteria, (ii) university guidelines, (iii) any feedback received, (iv) dissertation structure guidelines, (v) complete dissertation submitted so far, (vi) data sheet used for analysis, (vii) research proposal, and any other information you wish to share." },
  { q: "Does the work meet PhD-level university guidelines?", a: "Yes. Tutors India writers are very specific in following all UK, US, Australia and other university guidelines as well as meeting the highest academic standards at doctoral level. Our expertise is always up-to-date with university requirements and assessment criteria." },
  { q: "What PhD dissertation parts does Tutors India provide?", a: "We offer support for any individual chapter: Introduction, Statistical Analysis, Materials/Methods/Methodology, Literature Review, Findings or interpretation of statistical analysis, Conclusion, Discussion, or any other chapter. We also offer complete chapter-wise writing from start to finish." },
  { q: "Why do you provide free chapter drafts for all orders?", a: "We provide free chapter drafts after completing each chapter to ensure that our process flow is consistent. It helps researchers identify changes and give feedback to improve chapter-wise, making it easy to explain your work confidently to your supervisory committee. Feedback is immediately incorporated and changes made at no additional cost." },
];

const testimonials = [
  { quote: "Availing services from Tutors India was perhaps the best decision in my PhD journey. The writers were patient and more than willing to answer all my queries. They improved the Literature review to a great extent! Thank you for extraordinary work!", author: "Alexander", location: "Algeria", avatar: "/images/testimonials/t16.jpg" },
  { quote: "I have gone through the Research Methodology chapter. Seems quite good. Good work done.", author: "Xander", location: "Germany", avatar: "/images/testimonials/t19.jpg" },
  { quote: "Thank you for the commitment. The paper is excellent, and I am very grateful for the work which has been done.", author: "Catherine", location: "UK", avatar: "/images/testimonials/t04.jpg" },
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies", "Marketing & Communication",
  "Engineering & Technology", "Natural Sciences & Mathematics", "Biological & Life Science", "Economics & Administration",
  "Humanities & Social Science", "Law", "Medicine & Health", "Education & Training",
  "Journalism & Media", "Agriculture & Forestry", "Computer Science & IT", "Hospitality, Leisure & Sports",
];

export default function PhDDissertationPartPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}<Link href="/our-services/phd-dba-dissertation/" style={{ color: "#a0b8e0" }}>PhD / DBA</Link>{" / "}<span style={{ color: "#fff" }}>PhD Dissertation Part</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              Part / Chapter-wise PhD Dissertation Writing Help &amp; Consultation
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Looking to write only part of your PhD dissertation — Introduction, Literature Review, Methodology, Findings, Statistical Analysis, Discussion or Conclusion? Our professional PhD dissertation writers have completed around 8,000 theses across the world.
            </p>
            <p style={{ color: "#f9c74f", fontSize: "0.92rem", fontWeight: 600, marginBottom: "24px" }}>Then You've Certainly Reached the Right place</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/samples/dissertation-samples.webp" alt="Academic experts collaborating" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#f9c74f" }}>8,000+</div>
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0" }}>Theses Completed<br />Worldwide</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      <div style={{ background: "#12214a", padding: "16px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: "8,000+", l: "Theses Done" }, { n: "2,000+", l: "Expert Writers" }, { n: "12 Chapters", l: "Supported" }, { n: "< 5%", l: "Plagiarism" }, { n: "Unlimited", l: "Revisions" }, { n: "30 min", l: "Response" }].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
              <div style={{ fontSize: "0.68rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Custom PhD Dissertation Chapter Writing</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            At Tutors India, we not only provide support for writing full PhD dissertations, but our service also extends to writing part-dissertation chapter writing services. We can write any chapter — from abstract to appendices — and ensure chapter-by-chapter delivery with full client control over the delivery and progress of your work.
          </p>
          <div style={{ background: "#fff8f0", borderLeft: "4px solid #e87722", borderRadius: "0 8px 8px 0", padding: "14px 18px" }}>
            <p style={{ color: "#555", fontSize: "0.88rem", lineHeight: 1.7 }}>
              <strong style={{ color: "#1a2a6c" }}>We have Chapter by Chapter Delivery Process and Deadline.</strong> Unlike other companies, we do not charge any costs for such structure as we ensure client satisfaction at every stage. All your work is handled and written by the style, design, and format of an ideal dissertation required by UK, Australia, and US universities.
            </p>
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
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>All PhD Dissertation Chapters We Support</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "18px" }}>We follow specific university guidelines across the United States, United Kingdom, Australia, and other institutions.</p>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", overflow: "hidden" }}>
            {chapters.map((ch, i) => (
              <div key={ch.n} style={{ padding: "14px 20px", borderBottom: i < chapters.length - 1 ? "1px solid #f0f2fa" : "none", display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "50%", width: "30px", height: "30px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.68rem", fontWeight: 700, flexShrink: 0 }}>{ch.n}</div>
                <div>
                  <h3 style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "3px" }}>{ch.title}</h3>
                  <p style={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.6 }}>{ch.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "22px", marginBottom: "28px" }} className="two-col-grid">
          <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "14px" }}>Free Deliverables with Every Chapter</h3>
            {["Abstract or Executive Summary", "Redrawn Graphs & Tables", "Statistical / textual analysis", "SPSS / software screenshots", "Free tutoring sessions", "SPSS output in Appendix", "Free research articles used"].map(item => (
              <div key={item} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", fontSize: "0.83rem", color: "#c5d5f0" }}>
                <span style={{ color: "#f9c74f", fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
              </div>
            ))}
          </div>
          <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px", border: "1px solid #dde2ef" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our Guarantees</h3>
            {["Unlimited revisions for committed work", "On-time delivery guaranteed", "24/7 customer support", "Three-level quality check", "100% confidentiality", "Plagiarism free — less than 5%", "Subject-specific PhD-qualified writers", "Chapter-by-chapter delivery"].map((g, i) => (
              <div key={i} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid #dde2ef", fontSize: "0.83rem", color: "#555" }}>
                <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>{i + 1}.</span> {g}
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
          <p style={{ color: "#666", fontSize: "0.86rem", marginBottom: "14px", fontWeight: 600 }}>2000+ Experts — USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {subjects.map(s => (<span key={s} style={{ padding: "5px 13px", background: "#fff", border: "1.5px solid #dde2ef", borderRadius: "16px", fontSize: "0.79rem", color: "#1a2a6c", fontWeight: 500 }}>{s}</span>))}
          </div>
        </div>
      </section>

      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Your PhD Chapter Written by Experts</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>Response within 30 minutes · Chapter-by-Chapter Delivery · Unlimited Revisions</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
