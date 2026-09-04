import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "PhD Dissertation Synopsis Writing Services | DBA Synopsis Writing UK",
  description: "PhD Synopsis Writing Services. We helps you in getting your complete thesis synopsis approval making sure that all the required details are in a proper manner.",
  keywords: "Thesis Synopsis Writing, help for PhD Completing Synopsis",
  alternates: { canonical: "https://www.tutorsindia.com/our-services/phd-dba-dissertation/phd-synopsis/" },
};

const faqs = [
  {
    q: "Why Tutors India is required for my PhD Synopsis?",
    a: "Tutors India has included with number of dedicated researchers who undergoes numerous in-depth research session before making some quantity of Synopsis. The service distinguishes between research proposals and synopses, understanding each structural detail and university-specific requirement.",
  },
  {
    q: "What if I require some customization in the PhD synopsis we deliver?",
    a: "Our service is completely flexible and tailor made to the customer. Hence, if you can provide the areas of customization related to research area initially proposed, we can make amendments in the dissertation research proposal.",
  },
  {
    q: "What is the Time plan to complete My PhD Synopsis/research proposal?",
    a: "Time plan will designed based on the type of the Dissertation projects, research study and client's requirement.",
  },
  {
    q: "What if my guide/professor rejects the PhD synopsis?",
    a: "The service we provide is completely flexible. Hence, we can customize your delivered Synopsis based on the research area provided initially. Simply provide your modifications and we will deliver you according to the requirement.",
  },
  {
    q: "On which areas you provide PhD Synopsis writing services?",
    a: "At Tutors India, we provide PhD/DBA Synopsis in broad areas of research. Namely, employee engagement dissertations, customer buying behavior dissertation, project management dissertation, knowledge management dissertation, International marketing, performance management, strategic management and business policy, management of technology, international business, total quality management, public relation theories dissertation and many more. We also offer topics for various subjects such as MBA in HR, HRM, Finance, Economics, Operations, Nursing, medical, geographic, accounting, history, sociology, English, Music, advertising, fashion, tourism, architecture, computer science, politics, art, statistics.",
  },
  {
    q: "What information Tutors India include in my PhD proposal writing?",
    a: "It is composed of the following the introduction (Title, the background of the study, objectives), problem statement (Literature review), Hypothesis, Scope and limitation, research methodology, location, cost estimation and time frame",
  },
];

const testimonials = [
  {
    quote: "Honestly, I didn't expect this level of quality. The team understood exactly what I needed and delivered work that felt genuinely professional. My confidence went from stressed to unstoppable.",
    author: "Amelia Brooks",
    location: "UK",
    avatar: "/images/testimonials/t15.jpg",
  },
  {
    quote: "I was stuck, frustrated, and running out of time. Tutors India stepped in at the perfect moment and turned everything around faster than I imagined. Worth every bit.",
    author: "Oliver Bennett",
    location: "UK",
    avatar: "/images/testimonials/t13.jpg",
  },
  {
    quote: "The attention to detail was incredible. It didn't feel like I was working with a service provider — it felt like I had an expert academic partner guiding me throughout.",
    author: "Layla Al Mansoori",
    avatar: "/images/testimonials/t16.jpg",
  },
  {
    quote: "My research finally started making sense after working with this team. Their guidance simplified complex ideas and gave my project the structure it was missing.",
    author: "Hassan Al Falasi",
    location: "UAE",
    avatar: "/images/testimonials/t14.jpg",
  },
];

const synopsisComponents = [
  {
    title: "Abstract",
    desc: "We write abstract for your PhD dissertation which would approximately contain 250 to 350 words. We complete the abstract after the full dissertation has been written that includes a brief summary of introduction or background, objectives, boundaries, methodology, the results of the dissertation research, main conclusion that you arrive, and recommendations",
  },
  {
    title: "Acknowledgement",
    desc: "A brief statement that ensures the following – we ensure to comment about family and friends at a minimum level while more concentration will be given on those who have given direct assistance. The section confirms dissertation ownership, complies with university plagiarism regulations, includes word count and plagiarism software reports.",
  },
  {
    title: "Table of Content",
    desc: "The section will list the chapter headings, appendices, references along with the page numbers. Apart, there would be a separate list for lists of figures, tables, and abbreviations.",
  },
  {
    title: "Full Dissertation Title",
    desc: "A precise Title as approved by the University. The title would convey the ideas of your investigation, orient your readers to the topic, indicate the type of study you will conduct, population you target and geographical location.",
  },
  {
    title: "An Introduction to the Topic",
    desc: "A Brief description of the topic, research questions, and research objectives. The section would provide necessary background information and provides readers with some sense of overall research including general territory, broad foundation (existing literature), the general scope, overview of the sections and finally should engage the readers",
  },
  {
    title: "Aim and Overall Objective / Hypotheses",
    desc: "A description what research want to achieve from carrying out this research. The section includes a clear statement of the research objectives, questions that researcher seeks to answer or the hypothesis.",
  },
  {
    title: "Literature, Context, background",
    desc: "This should provide some insights on (a) studies that have been conducted previously in your research field (b) familiarity with major themes, (c) the range of theories scholars use to analyse their primary sources (d) gaps identified in the literature (e) further investigations you intend to pursue as part of this dissertation and (f) best methodologies.",
  },
  {
    title: "The detailed research methodology",
    desc: "The section is essential to the good dissertation. This section includes the overall methodological approach, Research design, strategy, qualitative or quantitative, research philosophy, target area, population, sample size, primary or secondary data collection, ethical consideration, pilot study, validity, reliability, & statistical analysis.",
  },
  {
    title: "Brief Results / Findings / Data Analysis",
    desc: "The chapter presents the findings of the study in the form of tables & figures along with the interpretation. Depending on the choice of research methodology, the page will have a detailed quantitative models, hypothesis testing, showing some basic descriptive statistics including mean, SD, regression. Or a qualitative analysis dealing with content or textual or case study description. We use SPSS / R / SAS / STATA / Minitab for analysis.",
  },
  {
    title: "Discussion, Summary & Conclusion",
    desc: "The discussion chapter compares and contrasts the findings of previously published authors in line with the research questions. Ensures to develop analytics and critical thinking with reference to theoretical arguments grounded in the literature review.",
  },
  {
    title: "References",
    desc: "Work Cited, or sources cited (in-text) or list of sources cited while writing dissertation. This will include peer-reviewed scholarly articles, textbooks, newspaper articles, annual reports, obtained from various database including ProQuest, Emerald, IEEE, Web of Science, Academic Complete, SciDirect, JSTOR, Elsevier.",
  },
  {
    title: "Bibliography & Appendices",
    desc: "Lists that have read but not actually cited will also be included. The section will inform the readers about various sources that also form the basis for the proposed study and methodology. Appendices for the dissertation may include experiment diagrams, questionnaire, permission for human subject testing, ethical forms, and reflection.",
  },
];

const freeOffers = [
  "Abstract or Executive Summary",
  "Graphs & Tables (redrawn)",
  "Statistical analysis or textual analysis of data",
  "SPSS / other software screenshots to ensure the process that we had carried out for doing the analyses",
  "Free Tutoring for the work being carried out – to speak confidently with your program supervisors",
  "SPSS output in Appendix",
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies",
  "Marketing & Communication", "Engineering & Technology", "Natural Sciences & Mathematics",
  "Biological & Life science", "Economics & Administration", "Humanities & Social Science",
  "Law", "Medicine & Health", "Education & Training",
  "Journalism & Media", "Agriculture & Forestry", "Computer Science & IT",
  "Hospitality, Leisure & Sports",
];

export default function PhDSynopsisPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Services", url: "/our-services/" }, { name: "PhD / DBA Dissertation", url: "/our-services/phd-dba-dissertation/" }, { name: "PhD Synopsis" }]} />
      {/* ── HERO ── */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}
            <Link href="/our-services/phd-dba-dissertation/" style={{ color: "#a0b8e0" }}>PhD / DBA Dissertation</Link>{" / "}
            <span style={{ color: "#fff" }}>PhD Synopsis</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.4rem,3vw,2rem)", lineHeight: 1.3, marginBottom: "16px" }}>
            PhD Doctorate Synopsis Writing Consultation Services
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "8px" }}>
            Are you looking an expert writer of your specific subject for your PhD dissertation writing completely from Abstract writing to Conclusion section with the high research quality?
          </p>
          <p style={{ color: "#f9c74f", fontSize: "1.05rem", fontWeight: 700, marginBottom: "20px" }}>
            Then You've Certainly Reached the Right place
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, textDecoration: "none" }}>Place an Order</Link>
            <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, textDecoration: "none" }}>Contact Us</Link>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div style={{ background: "#12214a", padding: "16px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: "5000+", l: "PhD Synopsis Done" }, { n: "2000+", l: "Expert Writers" }, { n: "< 5%", l: "Plagiarism" }, { n: "Unlimited", l: "Revisions" }, { n: "30 min", l: "Response Time" }, { n: "24/7", l: "Support" }].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
              <div style={{ fontSize: "0.68rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>

        {/* Qualified Researchers */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Your PhD Dissertation Synopsis is written by qualified and experienced researchers from the US &amp; UK</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "1rem" }}>
            Creating a thesis synopsis represents the most vital step before writing your actual thesis. The service ensures complete thesis synopsis approval with all required details organized properly according to university guidelines.
          </p>
        </div>

        {/* PhD Synopsis Writing Service */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>PhD Synopsis Writing Service</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "14px", fontSize: "1rem" }}>
            The service helps students get thesis approval by ensuring all required details meet university guidelines. Coverage includes topic selection, literature review, research methodology, findings presentation, and proper citation.
          </p>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>PhD Synopsis are written with utmost care based on your specific university guidelines &amp; Specifications</h2>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
            Writing follows university-required style, design, and format. The service addresses topic, research proposal, reflection journals, introduction, literature review, methodology, findings discussion, research ethics, citations, and references.
          </p>
        </div>

        {/* By Leveraging + The PhD Synopsis Writing */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>By Leveraging Tutors India Capability and Research Skills, ensure your career success</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "14px", fontSize: "1rem" }}>
            We have PhD and Master's holders in our batch of professionals who can guide you step by step in writing your PhD paper successfully.
          </p>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>The PhD Synopsis Writing</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "14px", fontSize: "1rem" }}>
            Our PhD Dissertation Synopsis writing demonstrates the ability to communicate complex ideas critically, concisely, and clearly.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "14px", fontSize: "1rem" }}>
            Our professional dissertation writers have completed around 5000 PhD Synopsis successfully.
          </p>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>PhD Dissertation Synopsis Writing is Simply easy &amp; Straightforward</h2>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
            Just send us your dissertation topic along with the deadline and see the results that are far justified and mark the success of your dissertation.
          </p>
        </div>

        {/* Service Tiers */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "8px" }}>What Services do we offer under PhD Synopsis Writing?</h2>
          <p style={{ color: "#666", fontSize: "0.96rem", marginBottom: "18px" }}>Specialized Subject Matter Expertise across the globe – Management, Finance, Economics, Social Science, Engineering, Technology, Computer Science, Life Science, Medicine, Arts &amp; Literature</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
            {[
              { tier: "Basic", color: "#e0e7ff", border: "#b0bfff", desc: "Developed based on the relevant sources, a reasonable attempt at finding an area that warrant research & evidence of an attempt to provide critical evaluation but mainly descriptive." },
              { tier: "Advanced", color: "#fff3e0", border: "#ffd0a0", desc: "Wide range of sources, a clear identification of research gap in the literature along with aim and research questions" },
              { tier: "Premium", color: "#e8f5e9", border: "#a5d6a7", desc: "Refers to a wide range of seminal research with throughout engagement using latest resources. A solid gap would be identified based on the current literature & justified thoroughly & Excellent critical analysis would be shown (upgradable)" },
            ].map(t => (
              <div key={t.tier} style={{ background: t.color, border: `1px solid ${t.border}`, borderRadius: "10px", padding: "20px" }}>
                <div style={{ fontFamily: "Merriweather,serif", fontWeight: 700, fontSize: "1.05rem", color: "#1a2a6c", marginBottom: "10px" }}>{t.tier}</div>
                <p style={{ fontSize: "0.85rem", color: "#444", lineHeight: 1.7 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Synopsis Components */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>PhD Synopsis Structure Components</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "18px" }} className="two-col-grid">
            {synopsisComponents.map((c, i) => (
              <div key={c.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px", display: "flex", gap: "14px" }}>
                <div style={{ width: "34px", height: "34px", background: "#1a2a6c", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "0.85rem", flexShrink: 0, marginTop: "2px" }}>{i + 1}</div>
                <div>
                  <h3 style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{c.title}</h3>
                  <p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.65, margin: 0 }}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <div style={{ background: "#fff8f0", border: "1px solid #f5d9bb", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "8px" }}>Our deliverables while you order custom written PhD Synopsis dissertation writing service</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "16px", fontSize: "1rem" }}>
            We deliver more than your expectation –Abstract or Executive Summary, Graphs &amp; Tables (redrawn), statistical analysis or textual analysis of data, SPSS / other software screen shots to ensure the process that we had carried out for doing the analyses Free Tutoring for the work being carried out – to speak confidently with your program supervisors &amp; SPSS output in Appendix.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "12px" }} className="three-col-grid">
            {freeOffers.map(d => (
              <div key={d} style={{ background: "#fff", border: "1px solid #f5d9bb", borderRadius: "8px", padding: "14px", display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <div style={{ width: "26px", height: "26px", background: "#e87722", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "0.85rem", flexShrink: 0 }}>✓</div>
                <span style={{ fontSize: "0.83rem", color: "#555", lineHeight: 1.6 }}>{d}</span>
              </div>
            ))}
          </div>
        </div>

        {/* How Does It Work */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>How Does it work?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "14px" }} className="three-col-grid">
            {[
              { n: "1", text: "After the order is confirmed, we allocate the special team to scrutinize the work regarding necessary availability requirements that would be essential to complete the work." },
              { n: "2", text: "Once the process is done, in case there are any queries, we ensure to ask during the initial stage of your work and send you the outline proposed for writing secondary data collection based dissertation." },
              { n: "3", text: "Once the outline along with the chapterization plan is approved, we will dispatch the work in chapters, and update you on the progress of your work. Our exclusive coordinators would get in touch with you to clarify any queries." },
              { n: "4", text: "You can also pay in installments and work will be started as soon as receive the payments." },
              { n: "5", text: "We deliver your work as per the schedule fixed and agreed or even before the schedule." },
            ].map(s => (
              <div key={s.n} style={{ background: "#f8f9ff", borderRadius: "10px", padding: "18px", border: "1px solid #dde2ef", display: "flex", gap: "12px" }}>
                <div style={{ width: "32px", height: "32px", background: "#1a2a6c", borderRadius: "50%", color: "#fff", fontWeight: 700, fontSize: "0.85rem", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{s.n}</div>
                <p style={{ fontSize: "0.84rem", color: "#555", lineHeight: 1.65, margin: 0 }}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Tutors India */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "8px" }}>A PhD Synopsis Service Features</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "18px", fontSize: "1rem" }}>
            Follows university guidelines across US, UK, Australia, and Asian universities.
          </p>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Why Choose Tutors India: PhD Dissertation Synopsis Writing &amp; Support Service features</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "16px" }} className="two-col-grid">
            {[
              { t: "A complete secure & Confidential Service", d: "We offer 100% confidentiality of client's personal details, payment details, project works, and copyrights of research works. We ensure following for the conditionality, security & privacy: 1) All your projects are given unique reference codes 2) Documents are accessed only writers who signed NDA with Tutors India 3) Your financial information is protected b 128-bit secure socket layer (SSL) encryption." },
              { t: "Fully Referenced", d: "Our dissertation work is fully referenced with latest articles and textbooks. We refer only peer-reviewed sources such as scholarly articles and textbook to select the topic. We refer database including Web of Science, ProQuest, Google Scholar, Business Source Complete, and latest newspapers articles such as Economic Times, Forbes, The Wall Street, The Economics to identify the industrial problem." },
              { t: "Our Guarantees", d: "(1) Unlimited Revision for the work being committed. (2) We ensure on-time delivery (3) We support 24/7. (4) Our word count committed does not include references and bibliography & help you to locate the sources cited (5) Ensure three-level quality check including Technical QC, Editor QC and final check against the requirement (6) Confidentiality of the information (7) Plagiarism free work – less than 5% percent. (8) Only experienced and subject specific writers will be allotted." },
              { t: "Plagiarism Free Work", d: "We are aware of the consequences of plagiarism. Hence, topic selection is completely plagiarism Free. Our work is scanned against online sources in a similar way like WriteCheck or Turnitin. We wanted to ensure that our clients i.e., researchers and students are not finding any issues with regards to plagiarism and so we issue plagiarism-free certificate*. Our streamlined and high-quality research writing process ensures your dissertation is not just copy-pasted, but written only after brainstorming sessions with our team of professional researchers." },
              { t: "On Time", d: "Our work is delivered at a specified date and time. Our specific changes to the delivered work will be carried out within 45 days of delivery. We guarantee delivery of minor changes within 24 working hours and significant changes within 48 working hours. We acknowledge all your emails within 30 minutes of working hours." },
              { t: "Experienced Writers", d: "Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities from India, the US, and the UK. We identify the perfect SME according to your subject and area. Expert is selected through a stringent selection process including the signing of non-disclosure and confidentiality agreement." },
            ].map(f => (
              <div key={f.t} style={{ background: "#f8f9ff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px" }}>
                <h3 style={{ fontSize: "0.96rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{f.t}</h3>
                <p style={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.65, margin: 0 }}>{f.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Subject Matter Expertise */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Specialized Subject Matter Expertise across the globe</h2>
          <p style={{ color: "#666", fontSize: "0.96rem", marginBottom: "14px" }}>We offer PhD dissertation synopsis writing service for Management, Social Science, Engineering, Technology, Life Science, Medical, Arts &amp; Literature / Linguistics, and much more</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {subjects.map(s => (
              <span key={s} style={{ background: "#f0f4ff", border: "1px solid #c5d0ea", borderRadius: "20px", padding: "6px 14px", fontSize: "0.82rem", color: "#1a2a6c", fontWeight: 500 }}>{s}</span>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>Voice of Our customer</h2>
          <TestimonialSlider testimonials={testimonials} />
        </div>

        {/* FAQs */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>Frequently Asked Questions</h2>
          <FaqAccordion faqs={faqs} />
        </div>

        {/* CTA */}
        <div style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", borderRadius: "12px", padding: "36px 28px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", color: "#fff", marginBottom: "10px" }}>Order Now</h2>
          <p style={{ color: "#c5d5f0", marginBottom: "20px", fontSize: "0.95rem" }}>Get your PhD Synopsis written by qualified UK &amp; US researchers today</p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/order-now/" style={{ padding: "13px 32px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, textDecoration: "none" }}>Order Now</Link>
            <Link href="/contact-us/" style={{ padding: "13px 32px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, textDecoration: "none" }}>Contact Us</Link>
          </div>
        </div>

      </section>

      <style>{`
        @media(max-width:900px){.three-col-grid{grid-template-columns:1fr 1fr!important;}}
        @media(max-width:600px){.three-col-grid,.two-col-grid{grid-template-columns:1fr!important;}}
      `}</style>
    </>
  );
}
