import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "Part / Chapter-wise PhD Dissertation Writing Help & Consultation",
  description: "Part / Chapter-wise PhD Dissertation Writing Help & Consultation. 8000+ Thesis completed worldwide. Any chapter — Introduction to Conclusion. UK, US, Australia.",
};

const chapters = [
  { n: "01", title: "Abstract / Executive Summary", desc: "We write abstract for your PhD dissertation which would approximately contain 250 to 350 words. We complete the abstract after the full dissertation has been written that includes a brief summary of introduction or background, objectives, boundaries, methodology, the results of the dissertation research, main conclusion that you arrive, and recommendations." },
  { n: "02", title: "Acknowledgement Writing", desc: "A brief statement that ensures the following – we ensure to comment about family and friends at a minimum level while more concentration will be given on those who have given direct assistance. Further, the section will also provide assurance that the dissertation is own, evidence at your findings, a declaration to show the work complies with University regulation on plagiarism and a statement of the word count." },
  { n: "03", title: "Table of Content", desc: "The section will list the chapter headings, appendices, references along with the page numbers. Apart, there would be a separate list for lists of figures, tables, and abbreviations. We use Microsoft Word to create lists using the indexing and style functions." },
  { n: "04", title: "Full Dissertation Title", desc: "A precise Title as approved by the University. The title would convey the ideas of your investigation, orient your readers to the topic, indicate the type of study you will conduct, population you target and geographical location." },
  { n: "05", title: "Introduction Chapter", desc: "A Brief description of the topic, research questions, and research objectives. The section would provide necessary background information and provides readers with some sense of overall research including general territory, broad foundation (existing literature), the general scope, overview of the sections and finally should engage the readers." },
  { n: "06", title: "Aim and Overall Objective / Hypotheses Section", desc: "A description what research want to achieve from carrying out this research. The section includes a clear statement of the research objectives, questions that researcher seeks to answer or the hypothesis. The section also includes original contributions of your study, with a detailed account of the points summarized in the introduction, and rationale." },
  { n: "07", title: "Literature, Context, background section", desc: "This should provide some insights on (a) studies that have been conducted previously in your research field (b) familiarity with major themes, (c) the range of theories scholars use to analyse their primary sources (d) gaps identified in the literature (e) further investigations you intend to pursue as part of this dissertation and (f) best methodologies." },
  { n: "08", title: "Detailed research methodology Chapter", desc: "The section is essential to the good dissertation. This section includes the overall methodological approach, Research design, strategy, qualitative or quantitative, research philosophy, target area, population, sample size, primary or secondary data collection, ethical consideration, pilot study, validity, reliability, & statistical analysis." },
  { n: "09", title: "Results / Findings / Data Analysis Chapter", desc: "The chapter presents the findings of the study in the form of tables & figures along with the interpretation. Depending on the choice of research methodology, the page will have a detailed quantitative models, hypothesis testing, showing some basic descriptive statistics including mean, SD, regression. Or a qualitative analysis dealing with content or textual or case study description. We use SPSS / R / SAS / STATA / Minitab for analysis." },
  { n: "10", title: "Discussion, Summary & Conclusion Chapter", desc: "In this chapter, we introduce three section viz., discussion, summary, and conclusion. The discussion chapter compares and contrasts the findings of previously published authors in line with the research questions. Since this is the heart of the dissertation, we ensure to develop analytics and critical thinking concerning theoretical arguments grounded in the literature review. The other section would be just summary followed by the conclusion of main findings and recommendations." },
  { n: "11", title: "Dissertation References / Citation Compliance", desc: "Work Cited, or sources cited (in-text) or list of sources cited while writing a dissertation. This will include peer-reviewed scholarly articles, textbooks, newspaper articles, annual reports, obtained from various database including ProQuest, Emerald, IEEE, Web of Science, Academic Complete, SciDirect, JSTOR, Elsevier." },
  { n: "12", title: "Bibliography & Appendices", desc: "Lists that have read but not cited will also be included. The section will inform the readers about various sources that also form the basis for the proposed study and methodology. Appendices for the dissertation may include experiment diagrams, questionnaire, permission for human subject testing, ethical forms, and reflection." },
  { n: "13", title: "Dissertation Formatting or Structuring", desc: "We check for word count (e.g. 12,000 to 15,000 excludes abstract, references), paper size, margin settings, line spacing, page numbering, text, font, alignment, front cover, acknowledgement, abstract, table of contents, lists of figures, lists of tables, abbreviations, main text, chapter & section headings, citation format (e.g. the Harvard System of referencing), academic style of writing, approval of questionnaire and surveys, the lists of references, plagiarism, confidentiality, ethics, and assessment report." },
];

const serviceTiers = [
  { tier: "Basic", color: "#2563b0", desc: "Developed based on the relevant sources, a reasonable attempt at finding an area that warrant research & evidence of an attempt to provide critical evaluation but mainly descriptive.", includes: ["Relevant sources", "Research gap attempt", "Basic evaluation", "Standard formatting"] },
  { tier: "Advanced", color: "#1a2a6c", desc: "Wide range of sources, a clear identification of research gap in the literature along with aim and research questions", includes: ["Wide range of sources", "Clear research gap", "Defined aims & questions", "Strong writing"] },
  { tier: "Premium", color: "#e87722", desc: "Refers to a wide range of seminal research with throughout engagement using latest resources. A solid gap would be identified based on the current literature & justified thoroughly & Excellent critical analysis would be shown (upgradable)", includes: ["Seminal research", "Solid justified gap", "Excellent analysis", "Latest resources"] },
];

const faqs = [
  { q: "On which areas you provide PhD part-dissertation writing services?", a: "We accept orders from a wide range of subjects, which include Business Management, Economics, Computer Science, English, Literature, Engineering, Epidemiology, Public Health, Life Science, Nutrition, etc. If your topic or field of interest is not listed above, kindly contact us to know more about the dissertation writing services, dissertation writing tips, dissertation and thesis writing help." },
  { q: "What Information that I need to provide while ordering for PhD part dissertation?", a: "To match exactly with your requirement, we required a title that you had already selected, primary or secondary or business plan, university guidelines for style and referencing style, rubric scale and marketing criteria, scope, target country, industry experience, and feasibility of data collection, if any. Even if you have only research proposal is also fine. We will able to generate rest of the information." },
  { q: "Whether my PhD Dissertation part wrote based on my University guidelines?", a: "Of Course, Tutors India writers are very specific in following all the UK, US, Australia and other Universities guidelines as well as meet the high academic standards in writing the best dissertation. We ensure that your PhD dissertation part followed with recent university guidelines because our expertise always up-to-date with the universities guidelines." },
  { q: "What PhD Dissertation part Does Tutors India Provide?", a: "If you are looking to avail our services only to write PhD dissertation part then we offer introduction, statistical analysis, materials or methods/methodology, literature review, findings or interpretation of your statistical analysis and conclusion or dissertation part services." },
  { q: "Why do you Provide PhD part dissertation free drafts for all orders?", a: "We provide the PhD part dissertation free draft after completing each chapter or dissertation part to ensure that our process flow is consistent. It helps the students to identify the errors and give the feedback to change chapter wise so it is easy to explain to your committee easily through oral." },
  { q: "Is it true about unqualified people being assigned?", a: "Yeah, we have also heard many stories as well. Tutor India has conduct brainstorming session so you will get opportunities to talk with our expertise directly as to understand their skill set and experience then you will decide whether you need to take the services or not." },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── HERO ── */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
              <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}
              <Link href="/our-services/phd-dba-dissertation/" style={{ color: "#a0b8e0" }}>PhD / DBA</Link>{" / "}
              <span style={{ color: "#fff" }}>PhD Dissertation Part</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              Part / Chapter-wise PhD Dissertation Writing Help &amp; Consultation
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "6px" }}>
              Dissertation Chapter Writing is Simply easy &amp; Straightforward
            </p>
            <p style={{ color: "#f9c74f", fontSize: "0.92rem", fontWeight: 600, marginBottom: "24px" }}>
              Then You've Certainly Reached the Right place
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/samples/dissertation-samples.webp" alt="PhD Dissertation Part Writing" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#f9c74f" }}>8,000+</div>
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0" }}>Theses Completed<br />Worldwide</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      {/* ── STATS BAR ── */}
      <div style={{ background: "#12214a", padding: "16px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: "8,000+", l: "Theses Done" }, { n: "2,000+", l: "Expert Writers" }, { n: "13 Chapters", l: "Supported" }, { n: "< 5%", l: "Plagiarism" }, { n: "Unlimited", l: "Revisions" }, { n: "30 min", l: "Response" }].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
              <div style={{ fontSize: "0.68rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>

        {/* Qualified Researchers */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Your Part Dissertation (Chapter) is written by qualified and experienced researchers from the US &amp; UK</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            Our dissertation writers have experience in research methodology, specific industry experience, and educational degrees from international and top-ranked universities from India, the US, and the UK.
          </p>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.15rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px", marginTop: "16px" }}>Custom Ph.D. doctorate Dissertation Chapter Writing</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            Writing a dissertation is a daunting task as student need to produce an original piece of research work on a topic of special interest. However, writing a dissertation requires a range of planning and research skills as it demand specific writing style as per the university requirement. Understanding, Tutors India, only provide support for writing your part dissertation, but our service also extends support for writing part-dissertation chapter writing services. Our PhD writers have vast experience and knowledge in conducting the research in wider areas.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            We thoroughly understand your requirement, have sessions and regular conference calls with the researcher and think and act from their perspective and ensure that the research is completed successfully. Our PhD Writers have completed so far 8000 Thesis across the world including the UK, Australia and the U.S.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.94rem" }}>
            Part custom Dissertation writing services and thesis writing services at Tutors India are handled and written by the style, design, and format of an ideal dissertation required by the UK, Australia, and the US universities. We assist you to complete your part dissertation namely, a topic selection, research proposal writing, reflection journals for your dissertation, the introduction, the literature review, research methodology, presenting and discussing findings, research ethics, citations and referencing, and references along with the Appendices.
          </p>
        </div>

        {/* Dissertation Type & Methodology */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Dissertation Type &amp; Choice of Research Methodology</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            We offer dissertation by research and dissertation by Translation / commentary (Title page, abstract, acknowledgement, content page, introduction, commentary (literature review, translation commentary and conclusion), and references. The dissertation will also have references and appendix includes source text and translated text.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.94rem" }}>
            Our writers are proficient in handling dissertation with qualitative (e.g. interview guide design or semi-structured, focus group, observation, case study), quantitative (e.g. survey) or triangulation choice of methodology (e.g. mixed choice).
          </p>
        </div>

        {/* Service Tiers */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>What Services do we offer under part dissertation?</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "18px" }}>Three levels of PhD part dissertation writing services based on your requirements</p>
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

        {/* How Does It Work */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>How Does it work?</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            After the order is confirmed, we allocate the special team to scrutinize the work regarding necessary availability requirements that would be essential to complete the work. Once the process is done, in case there are any queries, we ensure to ask during the initial stage of your work and send you the outline proposed for writing secondary data collection based dissertation.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            Once the outline along with the chapterization plan is approved, we will dispatch the work in chapters, and update you on the progress of your work. Our exclusive coordinators would get in touch with you to clarify any queries. You can also pay in installments and work will be started as soon as receive the payments.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.94rem" }}>
            We deliver your work as per the schedule fixed and agreed or even before the schedule.
          </p>
        </div>

        {/* Part Dissertation Features / Chapters */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>A Part Dissertation Features</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "18px" }}>We follow according to the specific university guidelines across the United States, United Kingdom, Australia, and other Asian Universities. Part dissertation structure consists of the following components:</p>
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

        {/* Chapter by Chapter Delivery */}
        <div style={{ background: "#fff8f0", border: "1px solid #f5d9bb", borderRadius: "12px", padding: "24px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.15rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>We have Chapter by Chapter Delivery Process and Deadline</h2>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.94rem" }}>
            This is to ensure that clients have full control over the delivery and can look at the drafts of different sections. Unlike other companies, we do not charge any costs for such structure as we ensure client satisfaction at every stage of the work.
          </p>
        </div>

        {/* Free Deliverables + Guarantees */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "22px", marginBottom: "28px" }} className="two-col-grid">
          <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "14px" }}>Free Offers along with your Ph.D. part or chapter-wise Dissertation Writing Services</h3>
            {["Abstract or Executive Summary", "Graphs & Tables (redrawn)", "Statistical analysis or textual analysis", "SPSS/other software screenshots", "Free Tutoring on the work", "SPSS output in Appendix"].map(item => (
              <div key={item} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", fontSize: "0.83rem", color: "#c5d5f0" }}>
                <span style={{ color: "#f9c74f", fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
              </div>
            ))}
          </div>
          <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px", border: "1px solid #dde2ef" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our Guarantees</h3>
            {[
              "(1) Unlimited Revision for the work being committed.",
              "(2) We ensure on-time delivery",
              "(3) We support 24/7.",
              "(4) Our word count committed does not include references and bibliography & help you to locate the sources cited",
              "(5) Ensure three-level quality check including Technical QC, Editor QC and final check against the requirement",
              "(6) Confidentiality of the information",
              "(7) Plagiarism free work – less than 5% percent.",
              "(8) Only experienced and subject specific writers will be allotted.",
            ].map((g, i) => (
              <div key={i} style={{ padding: "5px 0", borderBottom: "1px solid #dde2ef", fontSize: "0.82rem", color: "#555" }}>{g}</div>
            ))}
          </div>
        </div>

        {/* Why Choose */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Why Choose Tutors India: Ph.D. Part or chapter-wise Dissertation Service features</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px" }} className="two-col-grid">
            {[
              { title: "A complete secure & Confidential Service", desc: "We offer 100% confidentiality of client's personal details, payment details, project works, and copyrights of research works. We ensure following for the conditionality, security & privacy: 1) All your projects are given unique reference codes 2) Documents are accessed only writers who signed NDA with Tutors India 3) Your financial information is protected b 128-bit secure socket layer (SSL) encryption." },
              { title: "Fully Referenced", desc: "Our dissertation work is fully referenced with latest articles and textbooks. We refer only peer-reviewed sources such as scholarly articles and textbook to select the topic. We refer database including Web of Science, ProQuest, Google Scholar, Business Source Complete, and latest newspapers articles such as Economic Times, Forbes, The Wall Street, The Economics to identify the industrial problem." },
              { title: "Plagiarism Free Work", desc: "We are aware of the consequences of plagiarism. Hence, topic selection is completely plagiarism Free. Our work is scanned against online sources in a similar way like WriteCheck or Turnitin. We wanted to ensure that our clients i.e., researchers and students are not finding any issues with regards to plagiarism and so we issue plagiarism-free certificate*. Our streamlined and high-quality research writing process ensures your dissertation is not just copy-pasted, but written only after brainstorming sessions with our team of professional researchers." },
              { title: "On Time", desc: "Our work is delivered at a specified date and time. Our specific changes to the delivered work will be carried out within 45 days of delivery. We guarantee delivery of minor changes within 24 working hours and significant changes within 48 working hours. We acknowledge all your emails within 30 minutes of working hours. Further any delay in the delivery can be raised at customersupport@tutorsindia.com" },
              { title: "Experienced Writers", desc: "Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities from India, the US, and the UK. We identify the perfect SME according to your subject and area. Expert is selected through a stringent selection process including the signing of non-disclosure and confidentiality agreement. You can be very sure about the quality of the work since expert writer is identified as per International Research Experience." },
            ].map(f => (
              <div key={f.title} style={{ background: "#f8f9ff", borderRadius: "10px", padding: "18px", border: "1px solid #e0e4f0" }}>
                <h3 style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{f.title}</h3>
                <p style={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>Voice of Our customer</h2>
          <TestimonialSlider testimonials={testimonials} />
        </div>

        {/* FAQ */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Frequently Asked Questions</h2>
          <FaqAccordion faqs={faqs} />
        </div>

        {/* Subject Areas */}
        <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Your Dissertation is written by your choice of Subject Matter Expertise</h2>
          <p style={{ color: "#666", fontSize: "0.86rem", marginBottom: "14px" }}>We have a team of 2000+ expertise across the subjects &amp; countries (including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine)</p>
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

      <style>{`
        @media(max-width:900px){.three-col-grid{grid-template-columns:1fr 1fr!important;}}
        @media(max-width:600px){.three-col-grid,.two-col-grid{grid-template-columns:1fr!important;}}
      `}</style>
    </>
  );
}
