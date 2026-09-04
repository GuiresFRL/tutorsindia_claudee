import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "Research Proposal Writing Services | Tutors India",
  description: "Our expert writers offer research proposal writing services, ensuring your ideas are clearly communicated and aligned with academic or funding requirements.",
  keywords: "phd research proposal writing services, phd research proposal writing service uk, phd thesis proposal writing services, phd thesis proposal writing help, phd dissertation proposal writing services, phd dissertation proposal writing assistance, phd research proposal writers in uk, Research Proposal Writing Services, Dissertation Proposal Help, Research Proposal Writing Help",
  alternates: { canonical: "https://www.tutorsindia.com/our-services/phd-dba-dissertation/phd-research-proposal/" },
};

const faqs = [
  {
    q: "On which areas you provide dissertation proposal writing services?",
    a: "At Tutors India, we provide PhD/DBA dissertation proposal in broad areas of research such as employee engagement dissertations, customer buying behavior dissertation, project management dissertation, knowledge management dissertation, International marketing, performance management, strategic management and business policy, management of technology, international business, total quality management, public relation theories dissertation and many more. We also offer topics for various subjects such as MBA in HR, HRM, Finance, Economics, Operations, Nursing, medical, geographic, accounting, history, sociology, English, Music, advertising, fashion, tourism, architecture, computer science, politics, art, statistics.",
  },
  {
    q: "Time plan to complete My PhD dissertation research proposal?",
    a: "Time plan will designed based on the type of the research projects, research study and client's requirement.",
  },
  {
    q: "What Information that I need to provide while ordering for PhD dissertation proposal topic?",
    a: "To match exactly with your requirement, we required a title that you had already selected, scope, target country, industry experience and feasibility of data collection, if any. And any other information that our writer should know also can be provided from your end.",
  },
  {
    q: "What if I require some customization in the research proposal we deliver?",
    a: "Our service is completely flexible and tailor made to the customer. Hence, if you can provide the areas of customization related to research area initially proposed, we can make amendments in the research proposal.",
  },
  {
    q: "What if my guide/professor rejects the research proposal?",
    a: "The service we provide is completely flexible. Hence, we can tailor-made or customize your delivered research proposal based on the research area provided initially. Simply provide your modifications and we will deliver you according to the requirement.",
  },
  {
    q: "Why Tutorsindia is required for my PhD research proposal writing?",
    a: "The answer is very simple; Tutors India has included with number of dedicated researchers who undergoes numerous in-depth research session involving 10-15 professionals who conduct surveys, analysis and deep study to fulfil the requirement of your PhD research proposal.",
  },
];

const testimonials = [
  {
    quote: "Tutors India gathered enormous data for my research work on complexity in consumer problem. It helped me complete my research work faster. I am overwhelmed by their quality and speed of service. I would recommend Tutors India to any research scholar who finds it challenging to write a research proposal.",
    author: "Divij",
    location: "UK",
    avatar: "/images/testimonials/t14.jpg",
  },
];

const proposalComponents = [
  {
    title: "Dissertation Proposal Title or A Working Title",
    desc: "This is although tentative but at tutors India we use precise working even at this stage to ensure its acceptance. The title would convey the ideas of your investigation, orient your readers to the topic, indicate the type of study you will conduct, population you target and geographical location.",
  },
  {
    title: "An Introduction to the Topic",
    desc: "A Brief description of the topic, research questions, and research objectives. The section would provide necessary background information and provides readers with some sense of overall research including general territory, broad foundation (existing literature), the general scope, overview of the sections and finally should engage the readers",
  },
  {
    title: "Aim and Overall Objective / Hypotheses",
    desc: "A clear statement of the research objectives, questions that researcher seeks to answer or the hypothesis and original contributions. Describes what the research aims to accomplish including research objectives, questions and hypotheses with original contributions to the field.",
  },
  {
    title: "Literature, Context, background",
    desc: "This should provide some insights on (a) studies that have been conducted previously in your research field (b) familiarity with major themes, (c) the range of theories scholars use to analyse their primary sources (d) gaps identified in the literature (e) further investigations you intend to pursue as part of the research and (f) best methodologies.",
  },
  {
    title: "The detailed research methodology",
    desc: "The section is essential to the best research proposal. This section includes the overall methodological approach, Research design, strategy, qualitative or quantitative, research philosophy, target area, population, sample size, primary or secondary data collection, ethical consideration, pilot study, validity, reliability, & statistical analysis.",
  },
  {
    title: "Potential Outcomes / Significance of the study",
    desc: "Discusses methodological and substantial outcomes with theoretical contributions and usefulness to both research communities and external stakeholders. Details expected results, theoretical contributions, and study benefits including significance of the study.",
  },
  {
    title: "Summary & Conclusion",
    desc: "An overview of the research proposal summarized in a paragraph including introduction, problem statement, literature review, objectives, methodology, and expected outcomes.",
  },
  {
    title: "Timeline",
    desc: "Description and deliverables with the start and finish dates [GANTT Chart]. The section will include a schedule with anticipated completion dates for a specific part of the dissertation.",
  },
  {
    title: "References",
    desc: "Work Cited, or sources cited (in-text) or list of sources cited while writing dissertation research proposal. This will include peer-reviewed scholarly articles, textbooks, newspaper articles, annual reports, obtained from various database including Web of Science, ProQuest, Google Scholar, Business Source Complete.",
  },
  {
    title: "Bibliography & Appendices",
    desc: "Lists that have read but not actually cited will also be included. The section will inform the readers about various sources that also form the basis for the proposed study and methodology. Appendices for the research proposal may include experiment diagrams, questionnaire, permission for human subject testing, ethical forms, and reflection",
  },
];

const deliverables = [
  "Proper context and delimited boundary conditions",
  "Cite landmark studies",
  "Accurately present theoretical framework & empirical contribution",
  "Stay focused on research question",
  "Develop coherent & persuasive argument",
  "Clear sense of direction",
  "Clear citation in APA or specific style",
];

export default function PhDResearchProposalPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Services", url: "/our-services/" }, { name: "PhD / DBA Dissertation", url: "/our-services/phd-dba-dissertation/" }, { name: "PhD Research Proposal" }]} />
      {/* ── HERO ── */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}
            <Link href="/our-services/phd-dba-dissertation/" style={{ color: "#a0b8e0" }}>PhD / DBA Dissertation</Link>{" / "}
            <span style={{ color: "#fff" }}>PhD Research Proposal</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.4rem,3vw,2rem)", lineHeight: 1.3, marginBottom: "16px" }}>
            Ph.D. Doctorate Research Proposal Writing Help
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "8px" }}>
            Are you struggling to write a research proposal or struck with an idea but lack research experience or thought to complete the work? Alternatively, you have an idea but do not know how to make professional doctorate research proposal to impress your supervisor or according to the UK Ph.D. research proposal university guidelines?
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
          {[{ n: "3500+", l: "PhD Scholars Helped" }, { n: "< 5%", l: "Plagiarism" }, { n: "Unlimited", l: "Revisions" }, { n: "30 min", l: "Response Time" }, { n: "24/7", l: "Support" }].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
              <div style={{ fontSize: "0.68rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>

        {/* Main Intro */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>All your Ph.D. Research Proposals are written by qualified and experienced researchers from the US &amp; UK</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "1rem" }}>
            The most demanding &amp; daunting task of the dissertation writing is the research proposal. At Tutors India, we offer research proposal writing service, where you can relax and remain stress-free given that work being handled by an experienced researcher.
          </p>
        </div>

        {/* Service Tiers */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>PhD Research Proposal Writing Service Tiers</h2>
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

        {/* Proposal Structure Components */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>Ph.D. Research Proposal Structure</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "18px" }} className="two-col-grid">
            {proposalComponents.map((c, i) => (
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

        {/* What We Deliver */}
        <div style={{ background: "#fff8f0", border: "1px solid #f5d9bb", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>What We Deliver</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "12px" }} className="two-col-grid">
            {deliverables.map(d => (
              <div key={d} style={{ background: "#fff", border: "1px solid #f5d9bb", borderRadius: "8px", padding: "14px", display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <div style={{ width: "26px", height: "26px", background: "#e87722", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "0.85rem", flexShrink: 0 }}>✓</div>
                <span style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.6 }}>{d}</span>
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

        {/* Other Services */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Other Services</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "14px", fontSize: "1rem" }}>
            At an additional cost, we also offer:
          </p>
          <ul style={{ paddingLeft: "20px", margin: 0 }}>
            {["Semi-structured interview questions and questionnaire development", "Primary data collection for dissertations"].map(s => (
              <li key={s} style={{ color: "#555", fontSize: "0.92rem", lineHeight: 1.8, marginBottom: "4px" }}>{s}</li>
            ))}
          </ul>
        </div>

        {/* Guarantees */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>Why Choose Tutors India for PhD Research Proposal Writing</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "16px" }} className="two-col-grid">
            {[
              { t: "A complete secure & Confidential Service", d: "We offer 100% confidentiality of client's personal details, payment details, project works, and copyrights of research works. We ensure following for the conditionality, security & privacy: 1) All your projects are given unique reference codes 2) Documents are accessed only writers who signed NDA with Tutors India 3) Your financial information is protected b 128-bit secure socket layer (SSL) encryption." },
              { t: "Fully Referenced", d: "Our dissertation work is fully referenced with latest articles and textbooks. We refer only peer-reviewed sources such as scholarly articles and textbook to select the topic. We refer database including Web of Science, ProQuest, Google Scholar, Business Source Complete, and latest newspapers articles such as Economic Times, Forbes, The Wall Street, The Economics to identify the industrial problem." },
              { t: "Our Guarantees", d: "(1) Unlimited Revision for the work being committed. (2) We ensure on-time delivery (3) We support 24/7. (4) Our word count committed does not include references and bibliography & help you to locate the sources cited (5) Ensure three-level quality check including Technical QC, Editor QC and final check against the requirement (6) Confidentiality of the information (7) Plagiarism free work – less than 5% percent. (8) Only experienced and subject specific writers will be allotted." },
              { t: "Plagiarism Free Work", d: "We are aware of the consequences of plagiarism. Hence, topic selection is completely plagiarism Free. Our work is scanned against online sources in a similar way like WriteCheck or Turnitin. We wanted to ensure that our clients i.e., researchers and students are not finding any issues with regards to plagiarism and so we issue plagiarism-free certificate*. Our streamlined and high-quality research writing process ensures your dissertation is not just copy-pasted, but written only after brainstorming sessions with our team of professional researchers." },
              { t: "On Time", d: "Our work is delivered at a specified date and time. Our specific changes to the delivered work will be carried out within 45 days of delivery. We guarantee delivery of minor changes within 24 working hours and significant changes within 48 working hours. We acknowledge all your emails within 30 minutes of working hours. Further any delay in the delivery can be raised at customersupport@tutorsindia.com" },
              { t: "Experienced Writers", d: "Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities from India, the US, and the UK. We identify the perfect SME according to your subject and area. Expert is selected through a stringent selection process including the signing of non-disclosure and confidentiality agreement." },
            ].map(f => (
              <div key={f.t} style={{ background: "#f8f9ff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px" }}>
                <h3 style={{ fontSize: "0.96rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{f.t}</h3>
                <p style={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.65, margin: 0 }}>{f.d}</p>
              </div>
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
          <p style={{ color: "#c5d5f0", marginBottom: "20px", fontSize: "0.95rem" }}>Get your PhD Research Proposal written by qualified UK &amp; US researchers today</p>
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
