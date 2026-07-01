import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "UK Undergraduate Bachelor's Dissertation Writing Service",
  description: "The UK Undergraduate / Bachelor's Complete or Part Dissertation Writing Service. 5000+ UG dissertations completed. Expert writers from UK & US universities.",
};

const chapters = [
  { n: "01", title: "Abstract", desc: "Approximately 250–350 words including brief summary of introduction/background, objectives, boundaries, methodology, results, main conclusion, and recommendations. Completed after the full dissertation is written." },
  { n: "02", title: "Acknowledgement", desc: "Brief statement ensuring appropriate acknowledgement of those who gave direct assistance. Includes declaration of original work, plagiarism compliance, word count statement, and plagiarism software scan confirmation." },
  { n: "03", title: "Table of Contents", desc: "Chapter headings, appendices, references with page numbers. Separate lists for figures, tables, and abbreviations. Created using Microsoft Word indexing and style functions." },
  { n: "04", title: "Introduction Chapter", desc: "Brief description of the topic, research questions, and research objectives. Provides necessary background information, broad foundation from existing literature, general scope, overview of sections, and reader engagement." },
  { n: "05", title: "Aim and Objectives / Hypotheses", desc: "Clear statement of research aims, questions the researcher seeks to answer, or the hypothesis. Includes original contributions of your study, detailed account of points summarised in the introduction, and rationale." },
  { n: "06", title: "Literature, Context & Background", desc: "Covers: (a) previous studies in your research field (b) familiarity with major themes (c) theories scholars use to analyse primary sources (d) gaps identified in the literature (e) further investigations intended (f) best methodologies." },
  { n: "07", title: "Research Methodology", desc: "Essential to the good dissertation. Includes overall methodological approach, research design, strategy (qualitative or quantitative), research philosophy, target area, population, sample size, data collection, ethics, pilot study, validity, reliability, and statistical analysis." },
  { n: "08", title: "Results / Findings / Data Analysis", desc: "Findings presented as tables and figures with interpretation. Quantitative: descriptive statistics, regression, hypothesis testing. Qualitative: content, textual, case study. Tools: SPSS, R, SAS, STATA, Minitab." },
  { n: "09", title: "Discussion, Summary & Conclusion", desc: "Discussion compares and contrasts findings of previously published authors in line with research questions. The 'heart of the dissertation' requiring analytics and critical thinking. Summary and conclusion with main findings and recommendations." },
  { n: "10", title: "References / Citation Compliance", desc: "Work cited or sources cited (in-text) from ProQuest, Emerald, IEEE, Web of Science, Academic Complete, SciDirect, JSTOR, Elsevier. Harvard, APA, Chicago, Vancouver styles supported." },
  { n: "11", title: "Bibliography & Appendices", desc: "Sources read but not cited. Appendices: experiment diagrams, questionnaires, human subject permissions, ethical forms, raw data, SPSS/SAS/R output, and reflections." },
  { n: "12", title: "Dissertation Formatting", desc: "Word count (12,000–15,000 excluding references; translation: 6,000 commentary: 6,000–7,000), paper size, margins, spacing, numbering, fonts, front cover, headings, Harvard referencing, academic style (third person passive), ethics documentation." },
];

const serviceTiers = [
  { tier: "Basic", color: "#2563b0", desc: "Developed based on relevant sources, a reasonable attempt at finding an area that warrants research and evidence of an attempt to provide critical evaluation — mainly descriptive.", includes: ["Relevant academic sources", "Research gap attempt", "Basic critical evaluation", "Standard structure", "Proper referencing"] },
  { tier: "Advanced", color: "#1a2a6c", desc: "Wide range of sources, a clear identification of research gap in the literature along with aim and research questions.", includes: ["Wide range of sources", "Clear research gap", "Defined aims & research questions", "Strong academic writing", "Advanced methodology"] },
  { tier: "Premium", color: "#e87722", desc: "Wide range of seminal research with thorough engagement using latest resources. A solid gap identified and justified thoroughly. Excellent critical analysis shown (upgradable).", includes: ["Seminal research", "Solid justified research gap", "Excellent critical analysis", "Latest resources", "Upgradable quality"] },
];

const faqs = [
  { q: "On which subject areas do you provide UG dissertation writing services?", a: "We accept orders from Business Management (HR, operations, finance, digitalisation, technology, marketing), Economics, Computer Science, English, Literature, Engineering (Semiconductor Devices, Vehicular AdHoc Networks, Wireless Sensor Networks, Analog Electronics, VLSI Design, Electrical/Electronics), Epidemiology, Public Health, Life Science, and Nutrition. If your topic or field is not listed, please contact us to know more." },
  { q: "Are all assigned writers qualified for undergraduate dissertation writing?", a: "Yes, all our professional writers are capable of writing research papers in an impeccable manner that completely stands out. All writers hold PhD or Masters degrees from top UK and US universities with additional corporate/research industry experience. This assures you of the ultimate undergraduate dissertation writing service with flawless quality." },
  { q: "Is there any chance of my dissertation getting bad feedback?", a: "In some cases, you may receive feedback because different committee members have different perspectives. However, our writers have the ability to understand the professor's needs. Minor feedback and suggestions will be addressed within 24 hours, and large substantial changes within a week. Our experienced researchers have worked across top UK universities and understand the required structure and mindset." },
  { q: "Is there any possibility of plagiarism in my UG dissertation?", a: "No, we give 100% guarantee of 0% plagiarism on your dissertation document. All our excellent writers are experienced in writing plagiarism-free content. We use internationally accepted premium Turnitin to check all work. At Tutors India, we provide a plagiarism-free dissertation paper report to ensure that your dissertation document is unique." },
  { q: "How much do you charge for undergraduate dissertation revisions?", a: "We provide unlimited revisions to your undergraduate dissertation at free of cost. We do not charge even a penny for any number of revisions since we are committed to 100% customer satisfaction. Our commitment continues until you are completely satisfied with the work delivered." },
];

const testimonials = [
  { quote: "Unbelievable! I would say the writer followed all of my specifications and produced a fantastic dissertation. What I particularly enjoy is that no one thinks that my dissertation was not authored by me. Thanks.", author: "Dr. Olivia W. Carter, MD, PhD", avatar: "/images/testimonials/user-profile.png" },
  { quote: "I am quite grateful for my writer's efforts on my study report. He patiently answered all of my queries and fulfilled all of my requirements. I'm only going to use your service from now on. Tutors India, thank you.", author: "Ananya", avatar: "/images/testimonials/Rachana.jpg" },
  { quote: "I am an undergraduate student at Cambridge University and I was struggling with my dissertation. Tutors India experts helped me to complete my computer science dissertation in Python at the end of my deadline, and got an excellent grade for this work. Thank you team.", author: "Adam", location: "Cambridge, UK", avatar: "/images/testimonials/t15.jpg" },
  { quote: "Thank you Tutors India for giving me wonderful topic selection, it got approved and further from research proposal to citation, I need the same support.", author: "K S", location: "Boston, US", avatar: "/images/testimonials/happy-client.png" },
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies",
  "Marketing & Communication", "Engineering & Technology", "Natural Sciences & Mathematics",
  "Biological & Life Science", "Economics & Administration", "Humanities & Social Science",
  "Law", "Medicine & Health", "Education & Training", "Journalism & Media",
  "Agriculture & Forestry", "Computer Science & IT", "Hospitality, Leisure & Sports",
];

export default function UGDissertationPage() {
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
              <span style={{ color: "#fff" }}>UG Dissertation</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              The UK Undergraduate or Bachelor's Complete or Part Dissertation Writing Service
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Are you looking for an expert writer of your specific subject for your undergraduate dissertation writing — completely from Abstract writing to Conclusion and Recommendation section with the quality expected?
            </p>
            <p style={{ color: "#f9c74f", fontSize: "0.92rem", fontWeight: 600, marginBottom: "24px" }}>Then You've Certainly Reached the Right place</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <a href="https://www.tutorsindia.com/wp-content/uploads/2020/11/TI-UG-DISSERTATION-FINAL.pdf" target="_blank" rel="noopener noreferrer" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>📄 Brochure</a>
              <Link href="/ask-an-expert/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.3)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Ask an Expert</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/tutorsindia-logo-hd.jpg" alt="Tutors India" style={{ width: "90px", height: "90px", objectFit: "contain", marginBottom: "10px" }} />
            <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#f9c74f" }}>5,000+</div>
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0" }}>UG Dissertations<br />Completed</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      {/* ── STATS BAR ── */}
      <div style={{ background: "#12214a", padding: "16px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: "5,000+", l: "UG Dissertations" }, { n: "2,000+", l: "Expert Writers" }, { n: "8–10K", l: "Word Range" }, { n: "< 5%", l: "Plagiarism" }, { n: "Unlimited", l: "Revisions" }, { n: "30 min", l: "Response" }].map(s => (
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
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Full Professional Undergraduate Dissertation Writing</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            Undergraduate dissertations in UK and US universities represent an extended piece of writing, detailing your independent research and culminating your academic studies. A typical undergraduate dissertation is 8,000–10,000 words (exclusive of footnotes, references, and appendices). Universities employ plagiarism detection and the consequences for similarity issues can be severe.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            At Tutors India, part custom UG dissertation writing services are handled and written by the style, design, and format of an ideal dissertation required by the UK, Australia, and the US universities. We assist you to complete your dissertation covering: topic selection, research proposal writing, reflection journals, introduction, literature review, research methodology, presenting and discussing findings, research ethics, citations and referencing, and references along with the Appendices.
          </p>
          <div style={{ background: "#fff8f0", borderLeft: "4px solid #e87722", borderRadius: "0 8px 8px 0", padding: "14px 18px" }}>
            <p style={{ color: "#555", fontSize: "0.88rem", lineHeight: 1.7 }}>
              <strong style={{ color: "#1a2a6c" }}>The UK Complete (Full &amp; Chapter-wise) Professional UG Dissertation Writing.</strong> Our professional dissertation writers have completed around 5,000 UG Dissertations successfully. Just send us your dissertation topic along with the deadline and see results that are far justified and mark the success of your dissertation.
            </p>
          </div>
        </div>

        {/* Methodology */}
        <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px", marginBottom: "28px", border: "1px solid #dde2ef" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Dissertation Type &amp; Choice of Research Methodology</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px" }} className="three-col-grid">
            {[
              { icon: "🔬", title: "Qualitative Research", desc: "Interviews, focus groups, observation, case studies — suitable for exploratory research understanding experiences and perspectives." },
              { icon: "📊", title: "Quantitative Research", desc: "Surveys, statistical analysis — suitable for testing hypotheses, measuring relationships, and generalising findings to a population." },
              { icon: "🔀", title: "Mixed / Triangulation", desc: "Combination of qualitative and quantitative approaches — provides a more complete and robust understanding of the research problem." },
            ].map(m => (
              <div key={m.title} style={{ background: "#fff", borderRadius: "10px", padding: "18px", border: "1px solid #dde2ef" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{m.icon}</div>
                <h3 style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{m.title}</h3>
                <p style={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.6 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 12 Chapter Structure */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>A Full UG Dissertation Features — All Chapter Components</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "18px" }}>We follow specific university guidelines across the United States, United Kingdom, Australia, and other universities. Our UG dissertation structure consists of:</p>
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

        {/* Service Tiers */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>What Services Do We Offer?</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "18px" }}>Three levels of UG dissertation writing services based on your academic needs</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
            {serviceTiers.map(t => (
              <div key={t.tier} style={{ background: "#fff", border: `2px solid ${t.color}`, borderRadius: "10px", overflow: "hidden" }}>
                <div style={{ background: t.color, color: "#fff", padding: "14px 18px" }}>
                  <div style={{ fontSize: "1.2rem", fontWeight: 700 }}>{t.tier}</div>
                </div>
                <div style={{ padding: "16px" }}>
                  <p style={{ fontSize: "0.84rem", color: "#555", lineHeight: 1.65, marginBottom: "12px" }}>{t.desc}</p>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {t.includes.map(item => (
                      <li key={item} style={{ display: "flex", gap: "6px", fontSize: "0.78rem", color: "#555", padding: "4px 0", borderBottom: "1px solid #f0f2fa" }}>
                        <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Free Deliverables + Guarantees */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "22px", marginBottom: "28px" }} className="two-col-grid">
          <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "14px" }}>Free Deliverables with Your Order</h3>
            {["Abstract or Executive Summary", "Free research articles used in writing", "SPSS data sheets and outputs", "Questionnaire or interview guide", "Reflective log or diary", "Free tutoring sessions on the work", "Graphs & Tables (redrawn)", "SPSS output in Appendix"].map(item => (
              <div key={item} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", fontSize: "0.83rem", color: "#c5d5f0" }}>
                <span style={{ color: "#f9c74f", fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
              </div>
            ))}
          </div>
          <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px", border: "1px solid #dde2ef" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our Guarantees</h3>
            {["Unlimited revisions for committed work", "On-time delivery guaranteed", "24/7 customer support", "Three-level quality check (Technical QC, Editor QC, final check)", "100% confidentiality — NDA-signed writers", "Plagiarism free — less than 5%", "Subject-specific experienced writers allocated", "Chapter-by-chapter delivery with full client control"].map((g, i) => (
              <div key={i} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid #dde2ef", fontSize: "0.83rem", color: "#555" }}>
                <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>{i + 1}.</span> {g}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>What Our Clients Say</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "16px" }} className="two-col-grid">
            {testimonials.map((t, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px" }}>
                <div style={{ color: "#e87722", fontSize: "2rem", lineHeight: 1, marginBottom: "6px", fontFamily: "serif" }}>&ldquo;</div>
                <p style={{ color: "#555", fontSize: "0.87rem", lineHeight: 1.7, fontStyle: "italic", marginBottom: "14px" }}>{t.quote}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <img src={t.avatar} alt={t.author} style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" }} loading="lazy" />
                  <div>
                    <div style={{ fontWeight: 700, color: "#1a2a6c", fontSize: "0.85rem" }}>{t.author}</div>
                    {t.location && <div style={{ fontSize: "0.74rem", color: "#888" }}>{t.location}</div>}
                  </div>
                </div>
              </div>
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

      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Your UG Dissertation Written by Experts</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>Join 2,00,000+ scholars. Response within 30 minutes · Unlimited Revisions · Plagiarism-Free</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
