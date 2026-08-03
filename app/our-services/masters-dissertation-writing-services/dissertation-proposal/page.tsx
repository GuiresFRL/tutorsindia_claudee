import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "Master's Research Proposal Writing Services by Experts",
  description: "Our expert writers offer research proposal writing services, ensuring your ideas are clearly communicated and aligned with academic.",
  keywords: "masters research proposal writing help, masters dissertation proposal writing service, masters thesis proposal writing service, masters research proposal writing service, research proposal writing services in uk, masters research proposal writers in uk",
  alternates: { canonical: "https://www.tutorsindia.com/our-services/masters-dissertation-writing-services/dissertation-proposal/" },
};

const serviceTiers = [
  {
    tier: "Basic",
    color: "#2563b0",
    title: "Basic",
    desc: "Developed using appropriate sources, a rational effort to identify a topic that merits investigation, and proof of an effort to offer a critical judgment that is mostly descriptive.",
  },
  {
    tier: "Advanced",
    color: "#1a2a6c",
    title: "Advanced",
    desc: "A number of source types, the aim and research questions, and the details of the identified gap in the literature are all listed.",
  },
  {
    tier: "Premium",
    color: "#e87722",
    title: "Premium",
    desc: "This includes using the most latest materials while drawing heavily on a range of preparatory investigations. There would be a notable and entirely justified gap based on the body of extant literature: There would be an excellent critical analysis.",
  },
];

const editingTypes = [
  { type: "Premium Editing", features: ["Typographical errors", "Punctuation", "Grammar", "Sentence construction", "Terminology/reference check", "Logic, relevance and clarity", "Word choice", "Journal formatting", "Cover letter", "Tutors India certificate", "Specialized Subject Matter Expertise"] },
  { type: "Advanced Editing", features: ["Typographical errors", "Punctuation", "Grammar", "Sentence construction", "Terminology/reference check", "Logic, relevance and clarity", "Word choice"] },
  { type: "Standard Proofread", features: ["Typographical errors", "Punctuation", "Grammar"] },
];

const proposalStructure = [
  { title: "Dissertation Proposal Title or a Working Title", desc: "Although tentative, at Tutors India, we use a precise working title even at this stage to ensure its acceptance. The title will convey the ideas of your investigation, orient your readers to the topic, indicate the type of study you will conduct, the population you target, and the geographical location." },
  { title: "Introduction to the Topic", desc: "This section provides a brief description of the topic, research questions, and research objectives. It includes necessary background information, an overview of existing literature, and a general scope of the research. The section should engage the readers and provide a sense of the overall research." },
  { title: "Aim and Overall Objectives / Hypotheses", desc: "This section describes what the research aims to achieve. It includes a clear statement of the research objectives, the questions the researcher seeks to answer, or the hypotheses. It also outlines the original contributions of your study and provides a detailed account of the points summarized in the introduction, as well as the rationale behind the research." },
  { title: "Potential Outcomes / Significance of the Study", desc: "This section discusses the expected methodological and substantial outcomes, including theoretical contributions based on the proposed methodology and existing knowledge. It also details the usefulness or benefits of the study, both for the research community and the outside world." },
  { title: "Summary & Conclusion", desc: "An overview of the research proposal is summarized in a paragraph. It includes a brief description of the relevant chapters: Introduction, Statement of the Problem, Literature Review, Research Objectives & Research Questions, Research Methodology, Scope and Limitations of the Proposal, and Potential Outcome / Significance of the Study." },
  { title: "Literature, Context, and Background", desc: "This section provides insights on: (a) Studies conducted previously in your research field (b) Familiarity with major themes (c) The range of theories scholars use to analyze their primary sources (d) Gaps identified in the literature (e) Further investigations you intend to pursue as part of this dissertation (f) Best methodologies for the study." },
  { title: "The Detailed Research Methodology", desc: "This section is crucial to a successful research proposal. It includes the overall methodological approach, research design, strategy, whether qualitative or quantitative, research philosophy, target area, population, sample size, primary or secondary data collection, ethical considerations, pilot study, validity, reliability, and statistical analysis." },
  { title: "Timeline", desc: "This section describes the deliverables with start and finish dates (GANTT Chart). It includes a schedule with anticipated completion dates for specific parts of the dissertation, demonstrating whether the researcher has the capability to deliver the project as per institutional requirements." },
  { title: "References", desc: "This section lists the work cited or sources referenced in the dissertation research proposal. It includes peer-reviewed scholarly articles, textbooks, newspaper articles, and annual reports obtained from various databases, including ProQuest, Emerald, IEEE, Web of Science, Academic Complete, SciDirect, JSTOR, and Elsevier." },
  { title: "Bibliography & Appendices", desc: "This section includes works that were read but not cited in the proposal. It informs readers about various sources that form the basis for the proposed study and methodology. Appendices may include experiment diagrams, questionnaires, permissions for human subject testing, ethical forms, and reflections." },
];

const whyChoose = [
  { title: "A Complete Secure & Confidential Service", desc: "(1) Unlimited Revision for the work being committed. (2) We ensure on-time delivery (3) We support 24/7. (4) Committed word counts do not include references and bibliography. (5) Ensure three-level quality check including Technical QC, Editor QC and final check against the requirement (6) Confidentiality of the information (7) Plagiarism free work – less than 5% percent. (8) Only experienced and subject specific writers will be allotted." },
  { title: "Fully Referenced", desc: "Our dissertation work is fully referenced with latest articles and textbooks. We refer only peer-reviewed sources such as scholarly articles and textbook to select the topic. We refer database including Web of Science, ProQuest, Google Scholar, Business Source Complete, and latest newspapers articles such as Economic Times, Forbes, The Wall Street, The Economics to identify the industrial problem." },
  { title: "Our Guarantees", desc: "(1) Unlimited Revision for the work being committed. (2) We ensure on-time delivery (3) We support 24/7. (4) Our word count committed does not include references and bibliography & help you to locate the sources cited (5) Ensure three-level quality check including Technical QC, Editor QC and final check against the requirement (6) Confidentiality of the information (7) Plagiarism free work – less than 5% percent. (8) Only experienced and subject specific writers will be allotted." },
  { title: "Plagiarism Free Work", desc: "We are aware of the consequences of plagiarism. Hence, topic selection is completely plagiarism Free. Our work is scanned against online sources in a similar way like WriteCheck or Turnitin. We issue plagiarism-free certificate*. Our streamlined and high-quality research writing process ensures your dissertation is not just copy-pasted, but written only after brainstorming sessions with our team of professional researchers." },
  { title: "On Time", desc: "Our work is delivered at a specified date and time. Our specific changes to the delivered work will be carried out within 45 days of delivery. We guarantee delivery of minor changes within 24 working hours and significant changes within 48 working hours. We acknowledge all your emails within 30 minutes of working hours. Further any delay in the delivery can be raised at customersupport@tutorsindia.com" },
  { title: "Experienced Writers", desc: "Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities from India, the US, and the UK. We identify the perfect SME according to your subject and area. Expert is selected through a stringent selection process including the signing of non-disclosure and confidentiality agreement. You can be very sure about the quality of the work since expert writer is identified as per International Research Experience." },
];

const faqs = [
  { q: "On which areas you provide dissertation Proposal services?", a: "At Tutors India, we provide dissertation proposal writing services in wide areas of research such as employee engagement dissertations, customer buying behaviour dissertation, project management dissertation, knowledge management dissertation, International marketing, performance management, strategic management and business policy, management of technology, international business, total quality management, public relation theories dissertation and many more. We also offer proposal writing services for various subjects such as MBA in HR, HRM, Finance, Economics, Operations, Nursing, medical, geographic, accounting, history, sociology, English, Music, advertising, fashion, tourism, architecture, computer science, politics, art, statistics." },
  { q: "What Information that I need to provide while ordering for dissertation proposal topic?", a: "To match exactly with your requirement, we required a title that you had already selected, scope, target country, industry experience and feasibility of data collection, if any. Moreover, any other information that our writer should know also can provide from your end." },
  { q: "Is any time limit to complete my dissertation research proposal?", a: "The topics we provide would provide you clear and precise understanding of the proposed research area and ensure that you move in the right direction. A dissertation topic can be used to get familiarize with the proposed research area, provide right direction and enable you to speak confidently with your tutor. You can discuss with your mentor/tutor and finalize the topics, formulate an outline proposal, initiate initial research on the topic, create a time plan to complete your dissertation, and develop further ideas based on discussion." },
  { q: "What if I require some customization in the research proposal we deliver?", a: "Our service is completely flexible, and tailor made to the customer. Hence, if you can provide the areas of customization related to research area initially proposed, we can make amendments to the dissertation research proposal." },
  { q: "What if my guide/professor rejects the research proposal?", a: "Our service is completely flexible and tailor made to the customer. Hence, if you can provide the areas of customization related to research area initially proposed, we can make amendments in the dissertation topics." },
  { q: "Why is Tutors India required for your research proposal writing?", a: "Tutors India has included with some dedicated researchers who undergoes numerous in-depth research session before making some quantity of research proposal. We put 10-15 professionals for survey purpose alone and also the sample size of real customers are collected based on product/services." },
];

const qaBoxes = [
  { img: "/images/qa/Topic-Selection.png", title: "Research Proposal", desc: "Check the sample dissertation research proposal from our expert writers", href: "/our-sample-works/" },
  { img: "/images/qa/Quality-Assurance.png", title: "Quality Assurance", desc: "We ensure quality at every stage and the process.", href: "/guarantees/" },
  { img: "/images/qa/Plagiarism-Report.png", title: "Plagiarism Report", desc: "We deliver the document after scanning for plagiarism", href: "/guarantees/" },
  { img: "/images/qa/Customer-Interaction.png", title: "Customer Interaction", desc: "We interact with the customer at every stage in terms of amendments, query and delivery.", href: "/contact-us/" },
];

const testimonials = [
  { quote: "I was really struggling with my final semester master's degree, that's when I heard about Tutors India. They really guided me the whole way to produce research proposal just from the idea of a research title. The level of detail which went into creating the research proposal is astonishing. The technical concepts they advised for methodology were very advanced and algorithms used were state of the art. Would definitely recommend Tutors India to anyone who is struggling to complete their research work.", name: "David Morrison", location: "" },
  { quote: "Tutors India helped me gain clarity on the direction my research proposal needed to go and provided me with more clarity in my work. The experts understand my difficulties in writing the research proposal and guided me accordingly. Even without having an in-depth background in the topic I'm able to understand the key aspects and was given the focus to the right place. I wholeheartedly endorse Tutors India as a best and professional service, as someone you can rely on completing your research works.", name: "Glenn McLaughlin", location: "" },
  { quote: "Your efforts considerably improved my position, allowing me to achieve my aim. I appreciate the way you walked me through the Master Proposal writing process. Thank you so much for making this possible. Without you, I would not have been able to accomplish this!", name: "Joe", location: "" },
  { quote: "I must confess I was not quite convinced when I received the topics from their professionals. I thought they were too specific. But then my guide appreciated me for being that specific! There was no looking back then. They did my proposal tremendously well. They stood by me until my thesis was finally accepted. Great team, great work, fair prices! Thank you Tutors India.", name: "Divij", location: "UK" },
  { quote: "I contacted tutors India for formulating the problem statement, which they did extremely well. The professionals then guided me with the framework and the methodology. They even helped me publish a research paper in support of my thesis. All in all, I would say the professionals are experts in their respective fields and their experience is a blessing to any scholar. Great work!", name: "Farhan", location: "Japan" },
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies",
  "Marketing & Communication", "Engineering & Technology", "Natural Sciences & Mathematics",
  "Biological & Life Science", "Economics & Administration", "Humanities & Social Science",
  "Law", "Medicine & Health", "Education & Training", "Journalism & Media",
  "Agriculture & Forestry", "Computer Science & IT", "Hospitality, Leisure & Sports",
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const productSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "Master's Research Proposal Writing Services",
      image: "https://www.tutorsindia.com/wp-content/uploads/2025/02/New-Project.jpg",
      description: "Professional dissertation proposal writing services providing research topic selection, proposal development, literature review, research methodology design, gap identification, Gantt chart preparation, ethical considerations, and university-specific proposal support for master's and MBA students.",
      url: "https://www.tutorsindia.com/our-services/masters-dissertation-writing-services/dissertation-proposal/",
      brand: {
        "@type": "Organization",
        name: "Tutors India",
        areaServed: [
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Country", name: "United Arab Emirates" },
          { "@type": "Place", name: "Europe" },
          { "@type": "Place", name: "Gulf Region" },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "795",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tutorsindia.com/" },
    { "@type": "ListItem", position: 2, name: "Our Services", item: "https://www.tutorsindia.com/our-services/" },
    { "@type": "ListItem", position: 3, name: "Masters Dissertation", item: "https://www.tutorsindia.com/our-services/masters-dissertation-writing-services/" },
    { "@type": "ListItem", position: 4, name: "Dissertation Proposal", item: "https://www.tutorsindia.com/our-services/masters-dissertation-writing-services/dissertation-proposal/" },
  ],
};

export default function DissertationProposalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Our Services</Link>{" / "}
            <Link href="/our-services/masters-dissertation-writing-services/" style={{ color: "#a0b8e0" }}>Masters Dissertation</Link>{" / "}
            <span style={{ color: "#fff" }}>Dissertation Proposal</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.6rem,3vw,2.4rem)", marginBottom: "18px", lineHeight: 1.3 }}>
            UK and US Masters/MBA Dissertation Proposal Writing Services
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "1.05rem", maxWidth: "820px", lineHeight: 1.8, marginBottom: "14px" }}>
            Are you struggling with <Link href="/blog/how-to-writing-a-research-proposal-in-apa-style/" style={{ color: "#c5d5f0", textDecoration: "underline" }}>writing the research proposal</Link> or convert your idea into a solid research plan? Alternatively, you may have an idea but lack the experience to create a professional research proposal or need assistance aligning it with professional standards. Our dissertation proposal writing Help can help you write a compelling and well-structured research proposal that meets academic standards and sets you up for success.
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "24px" }}>
            <Link href="/order-now/" style={{ padding: "12px 32px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "0.95rem" }}>Place an Order</Link>
            <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, fontSize: "0.95rem" }}>Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Custom Dissertation Proposal Services */}
      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "12px" }}>
          Custom Dissertation Proposal Writing Services from Industry Experts
        </h2>
        <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "28px" }}>
          The most demanding and daunting task of dissertation writing is the research proposal. At Tutors India, we offer a research proposal writing service, where you can relax and remain stress-free, knowing that the work is being handled by an experienced researcher.
        </p>

        <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.15rem", color: "#1a2a6c", marginBottom: "10px" }}>Writing a Research Proposal</h3>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "28px" }}>
          Writing a dissertation research proposal is a crucial step toward completing your undergraduate or master&apos;s dissertation. This proposal allows you to explore a specific topic in depth, apply the concepts and theories learned throughout your program, integrate relevant frameworks, and propose innovative solutions. Further, it encourages students to engage with industry experts and showcase their project planning abilities and skills to <Link href="/academy/how-to-article/research-proposal-realistic-dissertation-timeline/" style={{ color: "#1a2a6c", fontWeight: 600 }}>meet deadlines</Link>. Moreover, our expert dissertation proposal writing services help relieve the stress of these challenging tasks and ensure that your proposal is prepared with extraordinary professionalism and care.
        </p>

        <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.15rem", color: "#1a2a6c", marginBottom: "10px" }}>
          Our Dissertation Proposal Writing Services Provide Customized Support Based on University Specific Guidelines
        </h3>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "14px" }}>
          At Tutors India, our research proposals are written by our expert team, aligned with the specific requirements of your university and ethical guidelines. Further, our team ensures that each proposal includes persuasive justification for important decisions, whether it is a topic from the student, supervisor, or external organization.
        </p>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "14px" }}>
          <strong>Primary or Secondary Research:</strong> We deliver dissertation research proposals that utilize either primary or secondary research, or secondary research only. If you have been given a choice between primary or secondary, we strongly recommend primary research over secondary, as it offers valuable insights into originality. Although it is time-consuming, it is worth contributing something new to the research repository.
        </p>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "14px" }}>
          <strong>Qualitative, Quantitative, or Triangulation:</strong> We are fully aware that courses vary in terms of research methodologies. Hence, our subject matter expertise will advise you on choosing the right methodology based on the research questions and <Link href="/help-guide/study-guides/how-to-write-a-problem-statement-for-the-research-proposal/" style={{ color: "#1a2a6c", fontWeight: 600 }}>problem statement</Link> that you have identified, or they will help you identify the right one for you.
        </p>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "28px" }}>
          <strong>Specific Dissertation:</strong> Our dissertation proposal writing services also include business plans, <Link href="/our-services/coursework-writing/literature-review/" style={{ color: "#1a2a6c", fontWeight: 600 }}>systematic reviews</Link>, and meta-analyses as part of your dissertation requirements. Our dissertation proposal writers are highly skilled in delivering these services to meet your academic needs.
        </p>

        <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.15rem", color: "#1a2a6c", marginBottom: "10px" }}>UK / the US Dissertation Proposal Writing</h3>
        <p style={{ color: "#444", lineHeight: 1.8 }}>
          Our proposal writing services can help elevate your dissertation proposal to new heights. Whether you are in the US or the UK, our proposal writing services will help you in all stages of your research work.
        </p>
      </section>

      {/* Simply Easy & Straightforward */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", color: "#1a2a6c", marginBottom: "12px" }}>
            Writing a Research Proposal is Simply Easy &amp; Straightforward
          </h2>
          <p style={{ color: "#444", lineHeight: 1.8 }}>
            You will get a reply within 30 minutes, which will enable you to place your order quickly without any delay in submissions. Along with the research proposal content, we provide an executive summary/abstract, free articles used for writing the research proposal, a Gantt chart, ethical form filling, your proposal formatted in the university template, and a reflective log or diary to accompany your proposal. However, if you require a questionnaire along with the research proposal and a reflective log or reflective diary, an extra charge will apply.
          </p>
        </div>
      </section>

      {/* Service Tiers */}
      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", textAlign: "center", marginBottom: "8px" }}>
          What Services We Do Offer Under Dissertation Proposal Help
        </h2>
        <p style={{ textAlign: "center", color: "#555", marginBottom: "32px" }}>
          We offer three levels of master&apos;s dissertation research proposal writing services based on area of your interest.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "24px", marginBottom: "40px" }}>
          {serviceTiers.map(t => (
            <div key={t.tier} style={{ background: "#fff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 2px 12px rgba(26,42,108,0.08)" }}>
              <div style={{ background: t.color, color: "#fff", padding: "18px 24px" }}>
                <div style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", fontWeight: 700 }}>{t.title}</div>
              </div>
              <div style={{ padding: "20px 24px" }}>
                <p style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.7 }}>{t.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Editing Types */}
        <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", color: "#1a2a6c", marginBottom: "16px" }}>Type of Editing</h3>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.94rem" }}>
            <thead>
              <tr style={{ background: "#1a2a6c", color: "#fff" }}>
                {editingTypes.map(e => (
                  <th key={e.type} style={{ padding: "12px 16px", textAlign: "left", fontFamily: "Merriweather,serif" }}>{e.type}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: Math.max(...editingTypes.map(e => e.features.length)) }).map((_, ri) => (
                <tr key={ri} style={{ background: ri % 2 === 0 ? "#f5f7ff" : "#fff" }}>
                  {editingTypes.map(e => (
                    <td key={e.type} style={{ padding: "10px 16px", color: "#444", borderBottom: "1px solid #e8ecf4" }}>
                      {e.features[ri] ? <span>✓ {e.features[ri]}</span> : ""}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: "28px" }}>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "8px" }}>
            <strong>Specialized Subject Matter Expertise Across the Globe</strong> — We offer professional proposal writing services for Management, Social Science, Engineering, Technology, Life Science, Medical, Arts &amp; Literature / Linguistics, and much more.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            <strong>All your Research Proposals are Written by Qualified and Experienced Researchers from US &amp; UK.</strong> Our writers have experience in <Link href="/our-services/coursework-writing/research-methodology/" style={{ color: "#1a2a6c", fontWeight: 600 }}>Research Methodology</Link>, industry experience, and educational degrees from international and top-ranked universities from India, the US, and the UK.
          </p>
        </div>
        <div style={{ textAlign: "center", marginTop: "28px" }}>
          <Link href="/order-now/" style={{ padding: "12px 36px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
        </div>
      </section>

      {/* Proposal Structure */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "8px" }}>
            Dissertation Research Proposal Features
          </h2>
          <p style={{ color: "#555", marginBottom: "32px" }}>
            We follow specific university guidelines across the United States, United Kingdom, Australia, and other Asian universities. Our dissertation proposal structure consists of:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "20px" }}>
            {proposalStructure.map((s, i) => (
              <div key={s.title} style={{ background: "#fff", borderRadius: "10px", padding: "20px 24px", borderLeft: "4px solid #1a2a6c" }}>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginBottom: "8px" }}>
                  <span style={{ width: "26px", height: "26px", background: "#e87722", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 700, flexShrink: 0 }}>{i + 1}</span>
                  <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "0.95rem", color: "#1a2a6c" }}>{s.title}</h3>
                </div>
                <p style={{ color: "#555", fontSize: "0.87rem", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Proposal Convincing + Other Services */}
      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        <div style={{ background: "#f5f7ff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "28px 32px", marginBottom: "24px" }}>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", color: "#1a2a6c", marginBottom: "8px" }}>
            Research Proposal need to convince the Supervisory committee
          </h3>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            Yet quality depends not only on the quality of your proposed project rather the quality of your proposal writing. Since the application processes are different for each university, we ensure to follow the guidelines.
          </p>
        </div>

        <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", color: "#1a2a6c", marginBottom: "12px" }}>
          Other Services we offer along with your dissertation research proposal writing services at an additional cost
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "16px", marginBottom: "32px" }}>
          <div style={{ borderLeft: "4px solid #e87722", paddingLeft: "16px" }}>
            <p style={{ color: "#444", lineHeight: 1.7 }}>Semi-structured interview questions &amp; questionnaire for your primary research data collection</p>
          </div>
          <div style={{ borderLeft: "4px solid #e87722", paddingLeft: "16px" }}>
            <p style={{ color: "#444", lineHeight: 1.7 }}>Primary data collection for your full master&apos;s dissertation writing services</p>
          </div>
        </div>

        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "28px 32px", marginBottom: "24px" }}>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", color: "#1a2a6c", marginBottom: "8px" }}>
            What We Deliver with Your Order for Questionnaire Development Service
          </h3>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            We deliver more than your expectations. Our thesis proposal writing services ensure that we provide the proper context, delimit the boundary conditions, cite landmark studies, stay focused on the research question, and offer a clear sense of direction. We also ensure clear citations, following APA, MLA, Chicago or any other specific style required.
          </p>
        </div>

        <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "10px", padding: "24px 32px" }}>
          <p style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", fontWeight: 700, marginBottom: "6px" }}>
            Our master&apos;s dissertation research proposal writing &amp; editing service is exclusive
          </p>
          <p style={{ color: "#c5d5f0" }}>
            as we do not just provide research proposal, but the rather clear explanation and justification for the choice
          </p>
        </div>
      </section>

      {/* QA Boxes */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "20px" }}>
            {qaBoxes.map(q => (
              <Link key={q.title} href={q.href} style={{ background: "#fff", borderRadius: "10px", padding: "24px", textAlign: "center", textDecoration: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", display: "block" }}>
                <img src={q.img} alt={q.title} style={{ height: "64px", objectFit: "contain", marginBottom: "12px" }} />
                <div style={{ fontWeight: 700, color: "#1a2a6c", fontSize: "0.95rem", marginBottom: "6px" }}>{q.title}</div>
                <div style={{ color: "#666", fontSize: "0.85rem" }}>{q.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Tutors India */}
      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "8px" }}>
          Why Choose Tutors India: Our Service Features
        </h2>
        <p style={{ color: "#555", marginBottom: "32px" }}>
          Qualified researchers, unlimited revision, only peer reviewed articles, plagiarism report, 24/7 support, 100% match with the requirement and on time delivery
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "20px" }}>
          {whyChoose.map(w => (
            <div key={w.title} style={{ background: "#f5f7ff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px 24px" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "0.95rem", color: "#1a2a6c", marginBottom: "8px" }}>{w.title}</h3>
              <p style={{ color: "#555", fontSize: "0.87rem", lineHeight: 1.7 }}>{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "28px" }}>
            Frequently Asked Questions
          </h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* Subject Expertise */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", marginBottom: "10px" }}>
            Your Dissertation is Written by Your Choice of Subject Matter Expertise
          </h2>
          <p style={{ color: "#c5d5f0", marginBottom: "10px" }}>
            We have a team of 2000+ expertise across the subjects &amp; countries (including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine)
          </p>
          <p style={{ color: "#c5d5f0", lineHeight: 1.8, marginBottom: "28px" }}>
            Tutors India has capability and skills to handle subjects across the field. We chose qualified and experienced subject specific expertise while you order your Ph.D. or Master&apos;s dissertation. We have more than 2000+ expertise working across the world who can handle arts, literature, sciences, engineering or medicine.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "28px" }}>
            {subjects.map(s => (
              <span key={s} style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "6px 16px", borderRadius: "20px", fontSize: "0.85rem" }}>{s}</span>
            ))}
          </div>
          <Link href="/our-writers/" style={{ color: "#f9c74f", fontWeight: 600, fontSize: "0.95rem" }}>Meet Our Writers →</Link>
        </div>
      </section>

      {/* Testimonials Slider */}
      <TestimonialSlider testimonials={testimonials.map(t => ({ ...t, author: t.name }))} />

      {/* Related Services */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", color: "#1a2a6c", marginBottom: "20px" }}>Related Services</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {[
              { label: "Dissertation Topic", href: "/our-services/masters-dissertation-writing-services/dissertation-topic/" },
              { label: "Full Dissertation", href: "/our-services/masters-dissertation-writing-services/full-dissertation/" },
              { label: "Dissertation Part", href: "/our-services/masters-dissertation-writing-services/dissertation-part/" },
              { label: "Resit Dissertation", href: "/our-services/masters-dissertation-writing-services/resit-dissertation/" },
              { label: "Statistical Analysis", href: "/our-services/masters-dissertation-writing-services/dissertation-statistical-analysis/" },
              { label: "CV Writing", href: "/our-services/masters-dissertation-writing-services/cv-writing/" },
            ].map(s => (
              <Link key={s.label} href={s.href} style={{ padding: "10px 22px", background: "#fff", border: "1px solid #dde2ef", borderRadius: "5px", color: "#1a2a6c", fontWeight: 600, fontSize: "0.96rem", textDecoration: "none" }}>{s.label}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "56px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.6rem", marginBottom: "12px" }}>
          Place Your Order Today
        </h2>
        <p style={{ color: "#c5d5f0", marginBottom: "28px", fontSize: "1rem" }}>
          Get expert dissertation proposal writing support from our qualified academics today.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 36px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 36px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
