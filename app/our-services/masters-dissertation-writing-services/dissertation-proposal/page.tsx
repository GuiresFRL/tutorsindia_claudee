import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "Masters Dissertation Proposal Writing Services UK & US | Tutors India",
  description: "UK and US Masters/MBA Dissertation Proposal Writing Services. Custom proposals by expert researchers. Unlimited revisions, plagiarism-free, on-time delivery.",
};

const proposalStructure = [
  { title: "Dissertation Proposal Title / Working Title", desc: "Although tentative, at Tutors India, we use a precise working title even at this stage to ensure its acceptance. The title will convey the ideas of your investigation, orient your readers to the topic, indicate the type of study you will conduct, the population you target, and the geographical location." },
  { title: "Introduction to the Topic", desc: "This section provides a brief description of the topic, research questions, and research objectives. It includes necessary background information, an overview of existing literature, and a general scope of the research. The section should engage the readers and provide a sense of the overall research." },
  { title: "Aim and Overall Objectives / Hypotheses", desc: "This section describes what the research aims to achieve. It includes a clear statement of the research objectives, the questions the researcher seeks to answer, or the hypotheses. It also outlines the original contributions of your study and provides a detailed account of the points summarised in the introduction, as well as the rationale behind the research." },
  { title: "Potential Outcomes / Significance of the Study", desc: "This section discusses the expected methodological and substantial outcomes, including theoretical contributions based on the proposed methodology and existing knowledge. It also details the usefulness or benefits of the study, both for the research community and the outside world." },
  { title: "Literature, Context, and Background", desc: "This section provides insights on: (a) Studies conducted previously in your research field (b) Familiarity with major themes (c) The range of theories scholars use to analyse their primary sources (d) Gaps identified in the literature (e) Further investigations you intend to pursue as part of this dissertation (f) Best methodologies for the study." },
  { title: "The Detailed Research Methodology", desc: "This section is crucial to a successful research proposal. It includes the overall methodological approach, research design, strategy (qualitative or quantitative), research philosophy, target area, population, sample size, primary or secondary data collection, ethical considerations, pilot study, validity, reliability, and statistical analysis." },
  { title: "Timeline / Gantt Chart", desc: "This section describes the deliverables with start and finish dates (GANTT Chart). It includes a schedule with anticipated completion dates for specific parts of the dissertation, demonstrating whether the researcher has the capability to deliver the project as per institutional requirements." },
  { title: "References", desc: "This section lists work cited or sources referenced in the dissertation research proposal. It includes peer-reviewed scholarly articles, textbooks, newspaper articles, and annual reports obtained from various databases, including ProQuest, Emerald, IEEE, Web of Science, Academic Complete, SciDirect, JSTOR, and Elsevier." },
  { title: "Bibliography & Appendices", desc: "This section includes works that were read but not cited in the proposal. It informs readers about various sources that form the basis for the proposed study and methodology. Appendices may include experiment diagrams, questionnaires, permissions for human subject testing, ethical forms, and reflections." },
  { title: "Summary & Conclusion", desc: "An overview of the research proposal is summarised in a paragraph. It includes a brief description of the relevant chapters: Introduction, Statement of the Problem, Literature Review, Research Objectives & Research Questions, Research Methodology, Scope and Limitations, and Potential Outcome / Significance of the Study." },
];

const serviceTiers = [
  { tier: "Basic", color: "#2563b0", desc: "Developed using appropriate sources, a rational effort to identify a topic that merits investigation, and proof of an effort to offer a critical judgment that is mostly descriptive.", includes: ["Appropriate academic sources", "Topic rationale", "Basic research objectives", "Initial literature overview", "Standard referencing"] },
  { tier: "Advanced", color: "#1a2a6c", desc: "A number of source types, the aim and research questions, and the details of the identified gap in the literature are all listed clearly.", includes: ["Wide range of source types", "Clear research gap identification", "Detailed aims and research questions", "Methodology overview", "Literature context"] },
  { tier: "Premium", color: "#e87722", desc: "This includes using the most latest materials while drawing heavily on a range of preparatory investigations. A notable and entirely justified gap based on the body of extant literature with excellent critical analysis.", includes: ["Latest seminal research", "Thorough gap analysis", "Advanced critical analysis", "Full methodology justification", "Gantt chart included", "Ethical form completion"] },
];

const freeDeliverables = [
  "Executive summary / abstract",
  "Free research articles used in writing the proposal",
  "Gantt chart with milestone schedule",
  "Ethical form filling",
  "Proposal formatted in your university template",
  "Reflective log or reflective diary",
];

const qaBoxes = [
  { img: "/images/qa/Topic-Selection.png", title: "Research Proposal Sample", desc: "Check the sample dissertation research proposal from our expert writers", href: "/our-sample-works/" },
  { img: "/images/qa/Quality-Assurance.png", title: "Quality Assurance", desc: "We ensure quality at every stage and the process.", href: "/guarantees/" },
  { img: "/images/qa/Plagiarism-Report.png", title: "Plagiarism Report", desc: "We deliver the document after scanning for plagiarism.", href: "/guarantees/" },
  { img: "/images/qa/Customer-Interaction.png", title: "Customer Interaction", desc: "We interact with the customer at every stage for amendments, queries and delivery.", href: "/contact-us/" },
];

const faqs = [
  { q: "On which areas do you provide dissertation Proposal services?", a: "At Tutors India, we provide dissertation proposal writing services in wide areas including employee engagement, customer buying behaviour, project management, knowledge management, international marketing, performance management, strategic management, business policy, management of technology, international business, total quality management, public relations and many more. We also cover MBA in HR, HRM, Finance, Economics, Operations, Nursing, Medical, Geography, Accounting, History, Sociology, English, Music, Advertising, Fashion, Tourism, Architecture, Computer Science, Politics, Art, and Statistics." },
  { q: "What information do I need to provide while ordering a dissertation proposal?", a: "To match exactly with your requirement, we require a title that you have already selected, scope, target country, industry experience and feasibility of data collection, if any. Any other information that our writer should know can also be provided from your end. Even if you have only an idea and no title, we will help you develop everything from scratch." },
  { q: "Is there any time limit to complete my dissertation research proposal?", a: "The topics we provide would give you a clear and precise understanding of the proposed research area and ensure that you move in the right direction. A dissertation proposal can typically be completed within 3–7 days depending on its complexity. You can use it to get familiarised with the proposed research area, discuss with your mentor/tutor to finalise, formulate an outline, initiate initial research, and develop a time plan for your full dissertation." },
  { q: "What if I require some customisation in the research proposal?", a: "Our service is completely flexible and tailor-made to the customer. Hence, if you can provide the areas of customisation related to the research area initially proposed, we can make amendments to the dissertation research proposal. Unlimited revisions are included at no additional charge." },
  { q: "What if my guide/professor rejects the research proposal?", a: "Our service is completely flexible and tailor-made to the customer. If your supervisor rejects the proposal, please share the feedback and the areas they want changed. We can make amendments to the dissertation topics and proposal until it is fully accepted. This support is included as part of our unlimited revisions commitment." },
  { q: "Why is Tutors India required for your research proposal writing?", a: "Tutors India has dedicated researchers who undergo numerous in-depth research sessions before making research proposals. We put 10–15 professionals for survey purpose alone and also collect sample sizes of real customers based on product/services. Our writers are trained at institutions including Harvard, Oxford, and London Business School, and have minimum 5 years of research experience." },
];

const testimonials = [
  { quote: "I was really struggling with my final semester master's degree, that's when I heard about Tutors India. They really guided me the whole way to produce research proposal just from the idea of a research title. The level of detail which went into creating the research proposal is astonishing. The technical concepts they advised for methodology were very advanced and algorithms used were state of the art.", author: "David Morrison", location: "" },
  { quote: "Tutors India helped me gain clarity on the direction my research proposal needed to go and provided me with more clarity in my work. The experts understand my difficulties in writing the research proposal and guided me accordingly. I wholeheartedly endorse Tutors India as a best and professional service, as someone you can rely on completing your research works.", author: "Glenn McLaughlin", location: "" },
  { quote: "I've read the research proposal and it is excellent.", author: "Evelyn", location: "UK" },
  { quote: "I got the feedback for research proposal today. I am happy to share with you that I got the good comment on that proposal and they accepted the proposal and I must work on it.", author: "Eric", location: "UK" },
  { quote: "Joe: Your efforts considerably improved my position, allowing me to achieve my aim. I appreciate the way you walked me through the Master Proposal writing process. Thank you so much for making this possible. Without you, I would not have been able to accomplish this!", author: "Joe", location: "" },
  { quote: "I approached Tutors India for the second time to have my paper edited. I'm quite impressed with the editing quality and want to use Tutors India's services in the future.", author: "Dr. Henrik J. Olofsson, PhD", location: "" },
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
  { label: "Full Dissertation", href: "/our-services/masters-dissertation-writing-services/full-dissertation/" },
  { label: "Dissertation Part", href: "/our-services/masters-dissertation-writing-services/dissertation-part/" },
  { label: "Resit Dissertation", href: "/our-services/masters-dissertation-writing-services/resit-dissertation/" },
  { label: "Statistical Analysis", href: "/our-services/masters-dissertation-writing-services/dissertation-statistical-analysis/" },
];

export default function DissertationProposalPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}
            <Link href="/our-services/masters-dissertation-writing-services/" style={{ color: "#a0b8e0" }}>Masters Dissertation</Link>{" / "}
            <span style={{ color: "#fff" }}>Dissertation Proposal</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
            <div>
              <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>
                UK and US Masters / MBA Dissertation Proposal Writing Services
              </h1>
              <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
                Are you struggling to write a research proposal or convert your idea into a solid research plan? Our dissertation proposal writing help can write a compelling and well-structured research proposal that meets academic standards and sets you up for success.
              </p>
              <p style={{ color: "#a0b8e0", fontSize: "0.92rem", marginBottom: "26px" }}>
                Then You've Certainly Reached the Right place. Response within 30 minutes.
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link href="/order-now/" style={{ padding: "12px 30px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
                <a href="https://www.tutorsindia.com/wp-content/uploads/2021/11/Master-Dissertation.pdf" target="_blank" rel="noopener noreferrer" style={{ padding: "12px 30px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>📄 Brochure</a>
                <Link href="/ask-an-expert/" style={{ padding: "12px 30px", border: "2px solid rgba(255,255,255,0.3)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Ask an Expert</Link>
              </div>
            </div>
            <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px 28px", textAlign: "center", minWidth: "180px" }} className="hero-badge">
              <img src="/tutorsindia-logo-hd.jpg" alt="Tutors India" style={{ width: "90px", height: "90px", objectFit: "contain", marginBottom: "10px" }} />
              <div style={{ fontSize: "1.4rem", fontWeight: 700, color: "#f9c74f" }}>30 min</div>
              <div style={{ fontSize: "0.8rem", color: "#c5d5f0" }}>Response Time</div>
              <div style={{ fontSize: "0.72rem", color: "#a0b8e0", marginTop: "8px" }}>Free Gantt Chart<br />Free Ethical Form<br />Free Articles</div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      {/* ── STATS BAR ── */}
      <div style={{ background: "#12214a", padding: "16px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "32px", flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: "2000+", l: "Expert Writers" }, { n: "2,00,000+", l: "Scholars Served" }, { n: "22+", l: "Years Experience" }, { n: "< 5%", l: "Plagiarism" }, { n: "Unlimited", l: "Revisions" }, { n: "30 min", l: "Response" }].map(s => (
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
              Custom Dissertation Proposal Writing Services from Industry Experts
            </h2>
            <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "14px", fontSize: "0.94rem" }}>
              The most demanding and daunting task of dissertation writing is the research proposal. At Tutors India, we offer a research proposal writing service, where you can relax and remain stress-free, knowing that the work is being handled by an experienced researcher.
            </p>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Writing a Research Proposal</h3>
            <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "14px", fontSize: "0.94rem" }}>
              Writing a dissertation research proposal is a crucial step toward completing your undergraduate or master's dissertation. This proposal allows you to explore a specific topic in depth, apply the concepts and theories learned throughout your program, integrate relevant frameworks, and propose innovative solutions. Further, it encourages students to engage with industry experts and showcase their project planning abilities and skills to meet deadlines.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "14px", marginTop: "20px" }} className="three-col-grid">
              {[
                { icon: "🔬", title: "Primary or Secondary Research", desc: "We deliver proposals using primary or secondary research, or secondary only. We strongly recommend primary research where possible as it offers valuable insights into originality." },
                { icon: "📐", title: "Qualitative, Quantitative or Triangulation", desc: "Our subject matter experts will advise you on choosing the right methodology based on your research questions and problem statement." },
                { icon: "📊", title: "Specific Dissertation Types", desc: "Our services also include business plans, systematic reviews, and meta-analyses as part of your dissertation proposal requirements." },
              ].map(item => (
                <div key={item.title} style={{ background: "#f5f6fa", borderRadius: "8px", padding: "16px", border: "1px solid #dde2ef" }}>
                  <div style={{ fontSize: "1.5rem", marginBottom: "6px" }}>{item.icon}</div>
                  <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "5px" }}>{item.title}</div>
                  <div style={{ fontSize: "0.79rem", color: "#666", lineHeight: 1.55 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* What's Included */}
          <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "24px", marginBottom: "24px" }}>
            <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "8px" }}>Writing a Research Proposal is Simply Easy & Straightforward</h2>
            <p style={{ color: "#c5d5f0", fontSize: "0.88rem", lineHeight: 1.7, marginBottom: "16px" }}>
              You will get a reply within 30 minutes, which will enable you to place your order quickly without any delay. Along with the research proposal content, we provide:
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
              {freeDeliverables.map(item => (
                <div key={item} style={{ display: "flex", gap: "8px", fontSize: "0.83rem", color: "#c5d5f0", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <span style={{ color: "#f9c74f", fontWeight: 700 }}>✓</span> {item}
                </div>
              ))}
            </div>
            <p style={{ color: "#a0b8e0", fontSize: "0.78rem", marginTop: "12px" }}>
              * If you require a questionnaire along with the research proposal and a reflective log or diary, an extra charge will apply.
            </p>
          </div>

          {/* Service Tiers */}
          <div style={{ marginBottom: "24px" }}>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>
              What Services We Offer Under Dissertation Proposal Help
            </h2>
            <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "18px" }}>Three levels of master's dissertation research proposal writing services based on your area of interest</p>
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

          {/* Proposal Structure */}
          <div style={{ marginBottom: "24px" }}>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>
              Dissertation Research Proposal Features
            </h2>
            <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "18px" }}>We follow specific university guidelines across the United States, United Kingdom, Australia, and other Asian universities. Our dissertation proposal structure consists of:</p>
            <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", overflow: "hidden" }}>
              {proposalStructure.map((item, i) => (
                <div key={item.title} style={{ padding: "16px 20px", borderBottom: i < proposalStructure.length - 1 ? "1px solid #f0f2fa" : "none", display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "50%", width: "28px", height: "28px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 700, flexShrink: 0 }}>
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

          {/* QA Boxes */}
          <div style={{ marginBottom: "24px" }}>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Our Service Quality Process</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "14px" }} className="four-col-grid">
              {qaBoxes.map(box => (
                <Link key={box.title} href={box.href} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", overflow: "hidden", textAlign: "center", display: "block" }}>
                  <img src={box.img} alt={box.title} style={{ width: "100%", height: "90px", objectFit: "contain", padding: "10px", background: "#f5f6fa" }} loading="lazy" />
                  <div style={{ padding: "10px" }}>
                    <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "3px" }}>{box.title}</div>
                    <div style={{ fontSize: "0.73rem", color: "#666", lineHeight: 1.4 }}>{box.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Guarantees */}
          <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px", marginBottom: "24px" }}>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Why Choose Tutors India: Our Service Features</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "14px" }} className="three-col-grid">
              {[
                { icon: "🔒", title: "100% Confidential", desc: "All projects given unique reference codes. Documents accessed only by NDA-signed writers. Financial information protected by 128-bit SSL encryption." },
                { icon: "📚", title: "Fully Referenced", desc: "Our dissertation work is fully referenced with latest articles and textbooks from Web of Science, ProQuest, Google Scholar, Business Source Complete, Emerald, Forbes, and more." },
                { icon: "🔁", title: "Unlimited Revisions", desc: "Unlimited Revision for the work being committed. Three-level quality check including Technical QC, Editor QC and final check against the requirement." },
                { icon: "⏱", title: "On Time Delivery", desc: "Minor changes within 24 working hours and significant changes within 48 working hours. All emails acknowledged within 30 minutes of working hours." },
                { icon: "🛡️", title: "Plagiarism Free", desc: "Our work is scanned against online sources using WriteCheck or Turnitin. We issue a plagiarism-free certificate. Less than 5% guaranteed." },
                { icon: "🎓", title: "Experienced Writers", desc: "Writers have experience in research methodology, industry experience, and educational degrees from international top-ranked universities in India, the US, and the UK." },
              ].map(g => (
                <div key={g.title} style={{ background: "#fff", borderRadius: "8px", padding: "16px", border: "1px solid #dde2ef" }}>
                  <div style={{ fontSize: "1.5rem", marginBottom: "6px" }}>{g.icon}</div>
                  <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "5px" }}>{g.title}</div>
                  <div style={{ fontSize: "0.79rem", color: "#666", lineHeight: 1.55 }}>{g.desc}</div>
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

          {/* Subjects */}
          <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "22px" }}>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>2000+ Experts Across Subjects & Countries</h2>
            <p style={{ color: "#666", fontSize: "0.85rem", marginBottom: "14px" }}>USA, UK, Australia, Canada, New Zealand, Germany, France, Russia & Ukraine</p>
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
          Get Your Research Proposal Written by Experts Today
        </h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>
          Join 2,00,000+ scholars. Response within 30 minutes · Free Gantt Chart · Free Ethical Form
        </p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
