import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "Masters Full Dissertation Writing Services UK & US",
  description: "The US and UK Master's Complete Dissertation Writing Service. Abstract to Conclusion by qualified PhD/Masters writers. Plagiarism-free, unlimited revisions. Tutors India.",
};

const dissertationComponents = [
  { title: "Abstract", desc: "We write an abstract of approximately 250 to 350 words after the full dissertation is written. It includes a brief summary of introduction/background, objectives, boundaries, methodology, results, main conclusion, and recommendations." },
  { title: "Acknowledgement", desc: "A brief statement ensuring appropriate acknowledgement of family, friends, and those who gave direct assistance. The section includes confirmation that the dissertation is your own work, evidence of your findings, a declaration of compliance with university regulation on plagiarism, and a word count statement." },
  { title: "Table of Contents", desc: "Lists chapter headings, appendices, and references along with page numbers. Includes a separate list for figures, tables, and abbreviations. We use Microsoft Word to create lists using indexing and style functions." },
  { title: "Full Dissertation Title", desc: "A precise title as approved by the University. The title will convey the ideas of your investigation, orient your readers to the topic, indicate the type of study you will conduct, the population you target, and the geographical location." },
  { title: "Introduction to the Topic", desc: "A brief description of the topic, research questions, and research objectives. Provides necessary background information and gives readers a sense of overall research including general territory, broad foundation from existing literature, general scope, overview of sections, and engages the readers." },
  { title: "Aim and Overall Objective / Hypotheses", desc: "A description of what the research wants to achieve. The section includes a clear statement of research objectives, questions the researcher seeks to answer or the hypothesis, original contributions of your study, a detailed account of points summarised in the introduction, and rationale." },
  { title: "Literature, Context, Background", desc: "This provides insights on: (a) studies conducted previously in your field (b) familiarity with major themes (c) theories scholars use to analyse primary sources (d) gaps identified in the literature (e) further investigations you intend to pursue (f) best methodologies." },
  { title: "Detailed Research Methodology", desc: "Essential to a good dissertation. This section includes the overall methodological approach, research design, strategy, qualitative or quantitative approach, research philosophy, target area, population, sample size, primary or secondary data collection, ethical consideration, pilot study, validity, reliability, and statistical analysis." },
  { title: "Results / Findings / Data Analysis", desc: "Presents findings in the form of tables and figures with interpretation. Includes detailed quantitative models, hypothesis testing, descriptive statistics (mean, SD, regression), or qualitative analysis (content, textual, or case study). We use SPSS / R / SAS / STATA / Minitab for analysis." },
  { title: "Discussion, Summary & Conclusion", desc: "Three sections: Discussion compares and contrasts findings of previously published authors in line with research questions; Summary provides an overview; Conclusion covers main findings and recommendations. We ensure to develop analytics and critical thinking with reference to theoretical arguments grounded in the literature review." },
  { title: "References", desc: "Work cited or sources cited while writing the dissertation. Includes peer-reviewed scholarly articles, textbooks, newspaper articles, annual reports obtained from ProQuest, Emerald, IEEE, Web of Science, Academic Complete, SciDirect, JSTOR, Elsevier, and more." },
  { title: "Bibliography & Appendices", desc: "Lists sources that were read but not actually cited. Appendices may include experiment diagrams, questionnaire, permission for human subject testing, ethical forms, raw data, SPSS/SAS/R output files, and reflection." },
  { title: "Dissertation Formatting", desc: "We check word count, paper size, margin settings, line spacing, page numbering, text, font, alignment, front cover, acknowledgement, abstract, table of contents, lists of figures, tables, abbreviations, main text, chapter and section headings, citation format (e.g. Harvard), academic style, attribution, plagiarism, confidentiality, ethics, and assessment report." },
];

const serviceTiers = [
  { tier: "Basic", color: "#2563b0", desc: "Developed based on relevant sources, a reasonable attempt at finding an area that warrants research, and evidence of an attempt to provide critical evaluation but mainly descriptive.", includes: ["Relevant academic sources", "Research gap attempt", "Standard structure", "Basic critical evaluation", "Proper referencing"] },
  { tier: "Advanced", color: "#1a2a6c", desc: "Wide range of sources, a clear identification of research gap in the literature along with aim and research questions. Strong academic writing throughout.", includes: ["Wide range of sources", "Clear research gap identification", "Defined aims & questions", "Strong academic writing", "Advanced referencing"] },
  { tier: "Premium", color: "#e87722", desc: "Refers to a wide range of seminal research with throughout engagement using latest resources. A solid gap identified and justified thoroughly. Excellent critical analysis shown (upgradable).", includes: ["Seminal research engagement", "Solid justified research gap", "Excellent critical analysis", "Latest resources used", "Upgradable to publication quality"] },
];

const freeDeliverables = [
  "Abstract or Executive Summary",
  "Graphs & Tables (redrawn)",
  "Statistical analysis or textual analysis of data",
  "SPSS / other software screenshots of analysis",
  "Free tutoring sessions on the work",
  "SPSS output in Appendix",
  "Free research articles used for writing (PDF format)",
  "Questionnaire or semi-structured interview guide",
];

const faqs = [
  { q: "On which areas do you provide master's full dissertation writing services?", a: "We accept orders from a wide range of subjects including Business Management (HR, Operations, Finance, Digitalisation, Technology, Marketing), Economics, Computer Science, English, Literature, Engineering, Epidemiology, Public Health, Life Science, and Nutrition. For Engineering, we cover Semiconductor Devices, Vehicular AdHoc Networks, Wireless Sensor Networks, Analog Electronic Circuits, Analog Integrated Circuits, Analog VLSI Design, Physics and Modelling of Semiconductor Devices, Television and Video Engineering, and Electrical & Electronics. If your topic is not listed, please contact us to know more." },
  { q: "What information do I need to provide while ordering full dissertation writing services?", a: "To match exactly with your requirement, we require: a title that you have already selected; primary or secondary research preference; university guidelines for style and referencing; rubric scale and marking criteria; scope, target country, industry experience; and feasibility of data collection, if any. Even if you have only a research proposal, that is also fine — we will be able to generate rest of the information. Any other information that our writer should know can also be provided from your end." },
  { q: "Are all my assigned writers qualified to provide ultimate dissertation writing services?", a: "Yes, we are an ideal dissertation writing service provider in the UK, the US and Australia. All our professional writers have the capability to write research papers in an impeccable manner. All writers appointed hold high academic qualifications like PhD or Masters from top UK and US universities. In addition, they have quality experience working in top corporate and research industries. This assures that we deliver the ultimate dissertation writing services for our clients along with flawless quality." },
  { q: "Is there any chance of my dissertation getting bad feedback from my committee members?", a: "In some cases, you may chance to hear feedback because different committee members have different perspectives. However, do not worry — our writers have the ability to understand the professor's needs. Minor feedback and suggestions will be changed within 24 hours, and large substantial changes will be modified within a week. Our experienced researchers have worked in various top UK universities so they understand the mindset and structure required. We are here to help you with unlimited revisions." },
  { q: "Is there any possibility of plagiarism in my complete dissertation paper?", a: "No, we give 100% guarantee of 0% plagiarism report on your dissertation document. All our excellent writers are experienced in writing plagiarism-free content. Further, we use our internationally accepted premium Turnitin tool (plagiarism detection tool) to check all work. At Tutors India, we provide a plagiarism free dissertation paper report to ensure that your dissertation document is unique." },
  { q: "How much do you charge for master's dissertation revisions?", a: "We are committed to giving unlimited revisions to your dissertation full masters papers at free of cost. We do not charge even a penny for any number of revisions since we are committed to 100% customer satisfaction guarantee." },
];

const testimonials = [
  { quote: "Thank you for the draft. I read the article and it has come out well.", author: "Finn", location: "UK" },
  { quote: "The thesis is good work. My professor is quite happy with it and I'm nearly on the brink of submitting the final report.", author: "Prateek", location: "India" },
  { quote: "Thank you for helping to complete my thesis.", author: "Owen", location: "UK" },
  { quote: "My thesis accepted… thank you for your support.", author: "Nicholas", location: "Australia" },
  { quote: "Unbelievable! I would say the writer followed all of my specifications and produced a fantastic dissertation. What I particularly enjoy is that no one thinks that my dissertation was not authored by me. Thanks.", author: "Dr. Olivia W. Carter, MD, PhD", location: "" },
  { quote: "I have defended my research few days ago and scored a very good. The complete work was beyond my expectation. Thank you!", author: "Bryan", location: "Australia" },
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies",
  "Marketing & Communication", "Engineering & Technology", "Natural Sciences & Mathematics",
  "Biological & Life Science", "Economics & Administration", "Humanities & Social Science",
  "Law", "Medicine & Health", "Education & Training", "Journalism & Media",
  "Agriculture & Forestry", "Computer Science & IT", "Hospitality, Leisure & Sports",
];

const relatedServices = [
  { label: "Dissertation Topic", href: "/our-services/masters-dissertation-writing-services/dissertation-topic/" },
  { label: "Dissertation Proposal", href: "/our-services/masters-dissertation-writing-services/dissertation-proposal/" },
  { label: "Dissertation Part", href: "/our-services/masters-dissertation-writing-services/dissertation-part/" },
  { label: "Resit Dissertation", href: "/our-services/masters-dissertation-writing-services/resit-dissertation/" },
  { label: "Statistical Analysis", href: "/our-services/masters-dissertation-writing-services/dissertation-statistical-analysis/" },
  { label: "Specific Dissertation", href: "/our-services/masters-dissertation-writing-services/specific-dissertation/" },
];

export default function FullDissertationPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}
            <Link href="/our-services/masters-dissertation-writing-services/" style={{ color: "#a0b8e0" }}>Masters Dissertation</Link>{" / "}
            <span style={{ color: "#fff" }}>Full Dissertation</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
            <div>
              <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>
                The US and the UK Master's Complete Dissertation Writing Service
              </h1>
              <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
                Are you looking for an expert writer of your specific subject for your Master's or postgraduate dissertation writing — completely from Abstract writing to Conclusion and Recommendation section with the quality expected?
              </p>
              <p style={{ color: "#a0b8e0", fontSize: "0.92rem", marginBottom: "10px" }}>
                Your Dissertation is written by qualified and experienced researchers from the US &amp; UK.
              </p>
              <p style={{ color: "#f9c74f", fontSize: "0.9rem", fontWeight: 600, marginBottom: "24px" }}>
                Then You've Certainly Reached the Right place.
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link href="/order-now/" style={{ padding: "12px 30px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
                <a href="/docs/master-dissertation-brochure.pdf" target="_blank" rel="noopener noreferrer" style={{ padding: "12px 30px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>📄 Brochure</a>
              </div>
            </div>
            <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "190px" }} className="hero-badge">
              <img src="/images/samples/dissertation-samples.webp" alt="Academic experts collaborating" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
              <div style={{ fontSize: "1.3rem", fontWeight: 700, color: "#f9c74f" }}>8,000+</div>
              <div style={{ fontSize: "0.78rem", color: "#c5d5f0" }}>Dissertations<br />Completed</div>
              <div style={{ fontSize: "0.72rem", color: "#a0b8e0", marginTop: "8px" }}>7,000 – 20,000 words<br />Chapter-by-Chapter</div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      {/* ── STATS BAR ── */}
      <div style={{ background: "#12214a", padding: "16px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "32px", flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: "8,000+", l: "Dissertations Done" }, { n: "2000+", l: "Expert Writers" }, { n: "7,000–20,000", l: "Words Range" }, { n: "0%", l: "Plagiarism" }, { n: "Unlimited", l: "Revisions" }, { n: "30 min", l: "Response" }].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
              <div style={{ fontSize: "0.68rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>

        <div>
          {/* Intro */}
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "24px" }}>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>
              Full Professional Master's Dissertation Writing
            </h2>
            <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "14px", fontSize: "0.94rem" }}>
              Writing a full Master's or postgraduate dissertation is a challenging task for students pursuing higher studies. A dissertation in UK and US universities is an extended piece of academic writing and must be written and formatted according to university guidelines. A Master's dissertation typically ranges from 7,000 to 20,000 words and usually should not exceed 15,000 words, excluding footnotes, references, and appendices.
            </p>
            <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "14px", fontSize: "0.94rem" }}>
              At Tutors India, our full dissertation writing services and thesis writing services are delivered in line with the style, structure, and formatting standards required by universities in the UK, Australia, and the US. We demonstrate advanced academic knowledge beyond undergraduate level while maintaining the appropriate scope and depth taught in your programme.
            </p>
            <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "14px", fontSize: "0.94rem" }}>
              We support students at every stage — from choosing suitable dissertation topics and understanding how long is a dissertation, to completing each section including topic selection, research proposal writing, reflection journals, introduction, literature review, research methodology, presentation and discussion of findings, research ethics, citations, references, and appendices.
            </p>

            <div style={{ background: "#fff8f0", borderLeft: "4px solid #e87722", borderRadius: "0 8px 8px 0", padding: "14px 18px", marginTop: "16px" }}>
              <strong style={{ color: "#1a2a6c", fontSize: "0.9rem" }}>Dissertation Writing Full is Simply Easy &amp; Straightforward</strong>
              <p style={{ color: "#666", fontSize: "0.85rem", lineHeight: 1.65, marginTop: "6px" }}>
                Our professional dissertation writers have completed around 8,000 Masters Dissertations successfully. Just send us your dissertation topic along with the deadline and see the results that are far justified and mark the success of your dissertation. Our thesis and dissertation writing help guarantees confidentiality so you do not have to worry.
              </p>
            </div>
          </div>

          {/* Service Tiers */}
          <div style={{ marginBottom: "24px" }}>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>
              What Services Do We Offer Under Full Dissertation?
            </h2>
            <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "18px" }}>We write complete master's dissertation from the introduction to recommendations across three service tiers</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px" }} className="three-col-grid">
              {serviceTiers.map(t => (
                <div key={t.tier} style={{ background: "#fff", border: `2px solid ${t.color}`, borderRadius: "10px", overflow: "hidden" }}>
                  <div style={{ background: t.color, color: "#fff", padding: "14px 16px" }}>
                    <div style={{ fontSize: "1.2rem", fontWeight: 700 }}>{t.tier}</div>
                  </div>
                  <div style={{ padding: "16px" }}>
                    <p style={{ fontSize: "0.83rem", color: "#555", lineHeight: 1.6, marginBottom: "12px" }}>{t.desc}</p>
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

          {/* How It Works */}
          <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "24px", marginBottom: "24px" }}>
            <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "14px" }}>How Does It Work?</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {[
                { n: "01", t: "Order Confirmed", d: "After the order is confirmed, we allocate a special team to scrutinise the work regarding necessary availability requirements." },
                { n: "02", t: "Initial Queries", d: "In case there are any queries, we ensure to ask during the initial stage and send you the proposed outline for writing." },
                { n: "03", t: "Outline Approved", d: "Once the outline along with the chapterisation plan is approved, we dispatch the work in chapters and update you on progress." },
                { n: "04", t: "Chapter Delivery", d: "Exclusive coordinators get in touch with you to clarify any queries. You can also pay in instalments. Work starts on receipt of payment." },
                { n: "05", t: "On-Schedule Delivery", d: "We deliver your work as per the schedule fixed and agreed, or even before the schedule. We ensure to meet every deadline." },
                { n: "06", t: "Free Revisions", d: "If any changes are required, our writers implement them within 24 hours for minor changes and 48 hours for significant revisions." },
              ].map(step => (
                <div key={step.n} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <div style={{ background: "#e87722", color: "#fff", borderRadius: "50%", width: "30px", height: "30px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 700, flexShrink: 0 }}>{step.n}</div>
                  <div>
                    <div style={{ fontSize: "0.88rem", fontWeight: 700, marginBottom: "3px" }}>{step.t}</div>
                    <div style={{ fontSize: "0.78rem", color: "#c5d5f0", lineHeight: 1.55 }}>{step.d}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "18px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.15)", display: "flex", gap: "10px" }}>
              <Link href="/order-now/" style={{ flex: 1, textAlign: "center", padding: "10px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
              <Link href="/our-process/" style={{ flex: 1, textAlign: "center", padding: "10px", border: "2px solid rgba(255,255,255,0.4)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Our Full Process</Link>
            </div>
          </div>

          {/* Dissertation Components */}
          <div style={{ marginBottom: "24px" }}>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>
              A Full Dissertation Features
            </h2>
            <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "18px" }}>We follow specific university guidelines across the United States, United Kingdom, Australia, and other Asian Universities. Our full dissertation structure consists of:</p>
            <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", overflow: "hidden" }}>
              {dissertationComponents.map((item, i) => (
                <div key={item.title} style={{ padding: "16px 20px", borderBottom: i < dissertationComponents.length - 1 ? "1px solid #f0f2fa" : "none", display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "50%", width: "30px", height: "30px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.72rem", fontWeight: 700, flexShrink: 0 }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "4px" }}>{item.title}</h3>
                    <p style={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Free Deliverables */}
          <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px", marginBottom: "24px" }}>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>
              Free Offers Along With Your Full Master's Dissertation Writing Services
            </h2>
            <p style={{ color: "#666", fontSize: "0.88rem", lineHeight: 1.7, marginBottom: "16px" }}>
              We deliver more than your expectation. Chapter-by-chapter delivery ensures clients have full control over the delivery and can look at the drafts of different sections. Unlike other companies, we do not charge any costs for such structure as we ensure client satisfaction at every stage.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
              {freeDeliverables.map(item => (
                <div key={item} style={{ display: "flex", gap: "8px", padding: "8px", background: "#fff", borderRadius: "6px", fontSize: "0.84rem", color: "#555", border: "1px solid #dde2ef" }}>
                  <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
                </div>
              ))}
            </div>
          </div>

          {/* Security + Guarantees */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "24px" }} className="two-col-grid">
            <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "20px" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>🔒 Complete Security & Confidentiality</h3>
              <p style={{ color: "#666", fontSize: "0.85rem", lineHeight: 1.65, marginBottom: "10px" }}>We offer 100% confidentiality of client's personal details, payment details, project works, and copyrights of research works.</p>
              {["All your projects are given unique reference codes", "Documents accessed only by NDA-signed writers", "Financial information protected by 128-bit SSL encryption"].map(p => (
                <div key={p} style={{ display: "flex", gap: "7px", fontSize: "0.8rem", color: "#555", padding: "5px 0", borderBottom: "1px solid #f0f2fa" }}>
                  <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>→</span> {p}
                </div>
              ))}
            </div>
            <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "20px" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>📚 Fully Referenced Work</h3>
              <p style={{ color: "#666", fontSize: "0.85rem", lineHeight: 1.65, marginBottom: "10px" }}>Our dissertation work is fully referenced with latest articles and textbooks from the most credible sources.</p>
              {["Web of Science, ProQuest, Google Scholar", "Business Source Complete, Emerald, JSTOR", "Elsevier, SciDirect, IEEE, Academic Complete", "Latest newspaper articles (Economic Times, Forbes, The Wall Street)"].map(p => (
                <div key={p} style={{ display: "flex", gap: "7px", fontSize: "0.8rem", color: "#555", padding: "5px 0", borderBottom: "1px solid #f0f2fa" }}>
                  <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>→</span> {p}
                </div>
              ))}
            </div>
          </div>

          {/* Our Guarantees */}
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "22px", marginBottom: "24px" }}>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>
              Why Choose Tutors India: Full Master's Dissertation Service Features
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "12px" }} className="four-col-grid">
              {[
                { icon: "🎓", title: "Qualified Researchers", desc: "PhD & Masters holders from UK, US, Australia universities" },
                { icon: "🔁", title: "Unlimited Revisions", desc: "Free unlimited revisions even after project completion" },
                { icon: "📚", title: "Peer-Reviewed Only", desc: "Only peer-reviewed articles from credible databases" },
                { icon: "🛡️", title: "Plagiarism Report", desc: "0% plagiarism guaranteed with Turnitin certificate" },
                { icon: "📞", title: "24/7 Support", desc: "Email, phone, WhatsApp — round-the-clock support" },
                { icon: "✅", title: "100% Requirement Match", desc: "Exact match with your university guidelines and rubric" },
                { icon: "⏱", title: "On-Time Delivery", desc: "95–98% on-time delivery, minor changes within 24 hours" },
                { icon: "🔒", title: "Confidential", desc: "128-bit SSL, NDA-signed writers, unique project codes" },
              ].map(g => (
                <div key={g.title} style={{ textAlign: "center", padding: "14px", background: "#f5f6fa", borderRadius: "8px", border: "1px solid #dde2ef" }}>
                  <div style={{ fontSize: "1.6rem", marginBottom: "6px" }}>{g.icon}</div>
                  <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "4px" }}>{g.title}</div>
                  <div style={{ fontSize: "0.72rem", color: "#666", lineHeight: 1.4 }}>{g.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div style={{ marginBottom: "24px" }}>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Frequently Asked Questions</h2>
            <FaqAccordion faqs={faqs} />
          </div>

          {/* Testimonials */}
          <div style={{ marginBottom: "24px" }}>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>What Our Clients Say</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="two-col-grid">
              {testimonials.map((t, i) => (
                <div key={i} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px" }}>
                  <div style={{ color: "#e87722", fontSize: "2rem", lineHeight: 1, marginBottom: "6px", fontFamily: "serif" }}>&ldquo;</div>
                  <p style={{ color: "#555", fontSize: "0.84rem", lineHeight: 1.7, fontStyle: "italic", marginBottom: "12px" }}>{t.quote}</p>
                  <div style={{ fontWeight: 700, color: "#1a2a6c", fontSize: "0.84rem" }}>{t.author}</div>
                  {t.location && <div style={{ fontSize: "0.74rem", color: "#888" }}>{t.location}</div>}
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "16px" }}>
              <Link href="/testimonials/" style={{ padding: "9px 24px", border: "2px solid #1a2a6c", color: "#1a2a6c", borderRadius: "5px", fontWeight: 600, fontSize: "0.88rem" }}>View All Testimonials →</Link>
            </div>
          </div>

          {/* Subject Areas */}
          <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "22px" }}>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>2000+ Experts Across Subjects & Countries</h2>
            <p style={{ color: "#666", fontSize: "0.85rem", marginBottom: "14px" }}>USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {subjects.map(s => (
                <span key={s} style={{ padding: "5px 13px", background: "#fff", border: "1.5px solid #dde2ef", borderRadius: "16px", fontSize: "0.78rem", color: "#1a2a6c", fontWeight: 500 }}>{s}</span>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>
          Invest in Your Career — Place Your Order Today
        </h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>
          Join 2,00,000+ scholars. Qualified researchers · Unlimited revisions · Plagiarism-free · 24/7 support
        </p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
