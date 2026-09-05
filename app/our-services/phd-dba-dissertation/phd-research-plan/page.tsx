import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "PhD Dissertation Research Planning Services | DBA Research Planning Help UK",
  description: "Professional PhD Research Planning. We help students to develop Research plan consists of research task content oriented framework and scope of research work.",
  keywords: "Research Planning & Writing,Writing a Good PhD Research Proposal",
  alternates: { canonical: "https://www.tutorsindia.com/our-services/phd-dba-dissertation/phd-research-plan/" },
};

const faqs = [
  {
    q: "On which areas you provide PhD Research plan?",
    a: "We accept orders from a wide range of subjects which include Business Management (HR, operation, finance, Digitalization, technology, marketing, and many more) Economics, Computer Science, English, Literature, Engineering, Epidemiology, Public Health, Life Science, and Nutrition. We take up Engineering dissertation writing and Engineering thesis writing in the following subjects/fields. Semiconductor Devices and Circuits Vehicular AdHoc Networks Wireless Sensor networks Analog Electronic Circuits Analog Integrated Circuits Analog VLSI Design Physics and Modeling of Semiconductor Devices Television and Video Engineering Electrical and Electronics If your topic or field of interest is not listed above, kindly contact us to know more about the dissertation writing services, dissertation writing tips, dissertation and thesis writing help",
  },
  {
    q: "Is my research plan satisfies the Department's evaluation criteria?",
    a: "Of course, We will design the research plan that address the important problem, meet the conceptual framework, design, methods and analyses as well as well-integrated and reasoned and suitable to the aim of the research plan objectives.",
  },
  {
    q: "What Information that I need to provide while ordering for PhD Research plan?",
    a: "To match exactly with your requirement, we required title that you had already selected, primary or secondary or business plan, university guidelines for style and referencing style, rubric scale and marketing criteria, scope, target country, industry experience, and feasibility of data collection, if any. Even if you have only research proposal is also fine. We will able to generate rest of the information. In addition, any other information that our writer should know also can be provided from your end.",
  },
  {
    q: "Is the proposed research and research plan innovative and Original?",
    a: "Yes, our research plan and proposed research are original and innovative i.e., it meets the typical evaluation criteria like Significance, approach, innovation, Application qualification, and Environment queries.",
  },
  {
    q: "What are the sections available in the PhD Research plan?",
    a: "Most of the PhD dissertation project should include this section the following: 1. Specific Aim- include interesting scientific question with answers, goal, objectives and Hypothesis 2. Background and Significance: Describe the why the work is more important? 3. Preliminary studies: what has been previously did? 4. Research design and Methods- How You are going to do this task",
  },
  {
    q: "Whether My PhD research plan is developed based research purpose and Audience?",
    a: "Yes, our expertise are brilliant in planning the research where we describes the proposed research, identify the status of the research significance and explain comprehensively how the research will be conducted and as well as develop the research based on audience and audience expertise.",
  },
];

const testimonials = [
  {
    quote: "I was really struggling with my final semester master's degree, that's when I heard about Tutors India. They really guided me the whole way to produce research proposal just from the idea of a research title. The level of detail which went into creating the research proposal is astonishing. The technical concepts they advised for methodology were very advanced and algorithms used were state of the art. Would definitely recommend Tutors India to anyone who is struggling to complete their research work.",
    author: "David Morrison",
    avatar: "/images/testimonials/t1.jpg",
  },
  {
    quote: "Tutors India helped me gain clarity on the direction my research proposal needed to go and provided me with more clarity in my work. The experts understand my difficulties in writing the research proposal and guided me accordingly. Even without having an in-depth background in the topic I'm able to understand the key aspects and was given the focus to the right place. I wholeheartedly endorse Tutors India as a best and professional service, as someone you can rely on completing your research works.",
    author: "Glenn McLaughlin",
    avatar: "/images/testimonials/t2.jpg",
  },
  {
    quote: "First and foremost, I want to express my gratitude for your writer's assistance and effort in developing this research technique for my research paper. It would be difficult to accomplish this assignment on deadline without your assistance and that of your writer. In fact, I believe that this legal subject is rather challenging for me, and that starting to create this law paper without your writer's assistance would be extremely difficult.",
    author: "Hunter W. Lindström, JD, PhD",
    avatar: "/images/testimonials/t3.jpg",
  },
  {
    quote: "Even though my professor refused to extend my deadline, I needed to find an assignment assistance provider, and I'm glad I found Tutors India. They responded quickly, and I received an exceptionally well-written paper before the deadline.",
    author: "Dr. Logan C. Sinclair, PhD",
    avatar: "/images/testimonials/t4.jpg",
  },
];

const editingTiers = [
  { feature: "Typographical errors", premium: true, advanced: true, standard: true },
  { feature: "Punctuation", premium: true, advanced: true, standard: true },
  { feature: "Grammar", premium: true, advanced: true, standard: true },
  { feature: "Sentence construction", premium: true, advanced: true, standard: false },
  { feature: "Terminology/reference check", premium: true, advanced: true, standard: false },
  { feature: "Logic, relevance and clarity", premium: true, advanced: true, standard: false },
  { feature: "Word choice", premium: true, advanced: true, standard: false },
  { feature: "Journal formatting", premium: true, advanced: true, standard: false },
  { feature: "Cover letter", premium: true, advanced: false, standard: false },
  { feature: "Tutors India certificate", premium: "On request", advanced: false, standard: false },
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies",
  "Marketing & Communication", "Engineering & Technology", "Natural Sciences & Mathematics",
  "Biological & Life science", "Economics & Administration", "Humanities & Social Science",
  "Law", "Medicine & Health", "Education & Training",
  "Journalism & Media", "Agriculture & Forestry", "Computer Science & IT",
  "Hospitality, Leisure & Sports",
];

const researchPlanComponents = [
  "Title and abstract (0.5 pages) – Why, What, How? the introduction, (1 page) – background and motivation. Explanation of basic knowledge required along with scientific or economic need state of research, (1 page)",
  "Importance of the research & its context, (0.5page) – literature study, analysis, modeling, numerical techniques, simulations, designs, experimental techniques, testing and verification",
  "Objectives Goals to be achieved, (1 pages) – narrow down your study field, define, and establish a thesis or an argument",
  "Methodology, (1 page) Work performed, (0.5 page)",
  "Research time plan, (0.5 page) including mind map to plan literature review, write up, draft chapters, plan data collection, collection, training needs analysis, books and attend training, conduct interview and survey.",
  "Publication, & conferences presentation expected",
  "Infrastructure or software required to complete the research, References and literature, and Finally, appendix (pictures, tables and elements).",
];

export default function PhDResearchPlanPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Services", url: "/our-services/" }, { name: "PhD / DBA Dissertation", url: "/our-services/phd-dba-dissertation/" }, { name: "PhD Research Plan" }]} />
      {/* ── HERO ── */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}
            <Link href="/our-services/phd-dba-dissertation/" style={{ color: "#a0b8e0" }}>PhD / DBA Dissertation</Link>{" / "}
            <span style={{ color: "#fff" }}>PhD Research Plan</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.4rem,3vw,2rem)", lineHeight: 1.3, marginBottom: "16px" }}>
            PhD &amp; DBA Doctorate Dissertation Research Planning &amp; Consultation Help
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "8px" }}>
            Are you not sure how to conduct a Ph.D. Research Plan? Are you looking an expert writer for your PhD Doctorate research plan writing? Look no further.
          </p>
          <p style={{ color: "#f9c74f", fontSize: "1.05rem", fontWeight: 700, marginBottom: "20px" }}>
            Then You've Certainly Reached the Right place You have come to the right spot. Tutors India can provide full assistance to develop the structure of the research Ph.D. research plan as per your university guidelines.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, textDecoration: "none" }}>Get A Free Quote</Link>
            <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, textDecoration: "none" }}>Contact Us</Link>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div style={{ background: "#12214a", padding: "16px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: "2000+", l: "Expert Writers" }, { n: "5000+", l: "PhD Dissertations" }, { n: "Unlimited", l: "Revisions" }, { n: "30 min", l: "Response Time" }, { n: "24/7", l: "Support" }].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
              <div style={{ fontSize: "0.68rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>

        {/* Writer Qualifications */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Your Dissertation Research Plan is written by qualified and experienced researchers from the US &amp; UK</h2>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
            Our PhD dissertation writers have experience in research methodology, specific domain experience, and educational degrees from international and top-ranked universities from India, the US, and the UK. You can have one-on-one coaching with a writer, statistician, research methodologist and editor.
          </p>
        </div>

        {/* PhD & DBA Research Planning Overview */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>PhD &amp; DBA Research Planning Overview</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "14px", fontSize: "1rem" }}>
            Obtaining a successfully PhD Degree is time consuming process as it would take a minimum of 3 years to maximum 6-8 years. Yet timeline depends on the various factors including supervisor, scope of the topic, methodology chosen (e.g. data collection) and university regulations. Therefore, there is a need to develop a PhD research plan with realistic goals that can be achieved in the given timeframe within the first year after registration. However, PhD Student / scholar must remember that the goal of the project and the work plan /schedule should be aligned between the PhD student and PhD supervisor (s).
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
            PhD Research plan should be approximately 5-10 pages. At Tutors India we help to develop the research plan that would consists of research task, content oriented framework, time frame and scope of research work. We help you to present the research plan to the supervisor, followed by defended to an examination board and finally to the doctoral committee to the department.
          </p>
        </div>

        {/* Research Methodology Options */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>Research Methodology Options</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px", marginBottom: "18px" }} className="two-col-grid">
            <div style={{ background: "#f8f9ff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontWeight: 700, fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>Primary or Secondary Research</h3>
              <p style={{ fontSize: "0.94rem", color: "#555", lineHeight: 1.7, margin: 0 }}>We deliver dissertation research proposal that utilized either primary or secondary research or using secondary research only. If you have given a choice of primary or secondary, we would strongly recommend primary than secondary, as it offers some insights on the originality. Although its time consuming, it is worth contributing something unknown to the research repository.</p>
            </div>
            <div style={{ background: "#f8f9ff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontWeight: 700, fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>Qualitative or Quantitative</h3>
              <p style={{ fontSize: "0.94rem", color: "#555", lineHeight: 1.7, margin: 0 }}>We completely aware that courses vary in terms of research methodologies. Hence our subject matter expertise would advise choosing the right methodology based on the research questions and problem statement that you had identified, or they would enable to identify the right one for you.</p>
            </div>
          </div>
          <div style={{ background: "#f8f9ff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontWeight: 700, fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>Specific Dissertation Support</h3>
            <p style={{ fontSize: "0.94rem", color: "#555", lineHeight: 1.7, margin: 0 }}>Our dissertation proposal writing services also include economic research, operational research, coding &amp; algorithm, software development, programming, systematic review, meta-analysis as part of your dissertation requirement.</p>
          </div>
        </div>

        {/* Company Capability Statement */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>By Leveraging Tutors India Capability and Research Skills, ensure your career success</h2>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
            At Tutors India, in a very short time will help you refocus and prepare significant progress on your PhD Thesis. Till now we have completed more than 5000 PhD Thesis report and also supported for publication. We are at par than other PhD thesis writing services! We help you in writing your PhD dissertations and thesis by putting our top professional writers and researchers into work for you. When you are done with your degree or masters then you may have to write your dissertation or thesis to submit it successfully in order to get your PhD. We truly understand the importance of PhD dissertations and PhD thesis that is the essential paper for your doctorate as without completing the dissertation one cannot be a PhD holder. We have PhD and Master's holders in our batch of professionals who can guide you step by step in writing your PhD paper successfully. We not only spend time in piece of writing but also make sure that you can defend your paper without any problems. Right from selecting dissertation topic to phase of writing and understanding, our PhD professionals who are research advisors, post-doctoral fellows and M.D holding PhD with rich experience in research will guide you all the way to complete and defend your PhD dissertations successfully. You can be now confident as some of our writers are trained at Harvard School, London School of Business, and University of Birmingham.
          </p>
        </div>

        {/* Professional Dissertation Writing */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>The Professional PhD Doctorate Dissertation Research Planning</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "1rem" }}>
            Our Dissertation writing demonstrates the ability to communicate complex ideas critically, concisely, and clearly. Our professional dissertation writers have completed around 5000 PhD Dissertation successfully. We match your research interest along with the current state of knowledge and any recent debates. We format a research plan for your particular subject. Since it forms part of the assessment of your PhD application, we take utmost care to complete the proposal.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "14px", fontSize: "1rem" }}>
            If you are unsure of what to do, avail our full or complete thesis writing.
          </p>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>PhD Research Plan is Simply easy &amp; Straightforward</h3>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
            Our thesis and dissertation writing help guarantees that your dissertation is confidential, and so you do not have to worry about it. Just send us your dissertation topic along with the deadline and see the results that are far justified and mark the success of your dissertation.
          </p>
        </div>

        {/* Service Tiers */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>Service Tiers</h2>
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

        {/* A Research Plan Covers */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "8px" }}>A PhD Doctorate Dissertation Research Planning Features</h2>
          <p style={{ color: "#666", fontSize: "0.96rem", marginBottom: "16px" }}>We follow according to the specific university guidelines across the United States, United Kingdom, Australia, and other Asian Universities.</p>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>A research plan covers</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {researchPlanComponents.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "14px", background: "#f8f9ff", border: "1px solid #dde2ef", borderRadius: "8px", padding: "14px" }}>
                <div style={{ width: "30px", height: "30px", background: "#1a2a6c", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "0.82rem", flexShrink: 0, marginTop: "2px" }}>{i + 1}</div>
                <p style={{ fontSize: "0.94rem", color: "#555", lineHeight: 1.7, margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Committee Requirements */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>PhD Doctorate Dissertation Research Planning need to convince the Supervisory committee</h2>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
            We write complete PhD dissertation research plan from the introduction to recommendations including time planning. Though it looks very simple, it is a tedious task to complete each and every step. The steps involved in such tedious task. Namely identification of topic, reviewing the literature or literature review, problem statement, research question(s) and research hypothesis development, research design (sampling, measures, procedures and data collection), statistical analysis, (data analysis preparation, data entry and screening, interpretation), discussion, results, recommendation and conclusion.
          </p>
        </div>

        {/* Deliverables */}
        <div style={{ background: "#fff8f0", border: "1px solid #f5d9bb", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Our deliverables while you order custom PhD Doctorate Dissertation Research Planning Service</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "14px", fontSize: "1rem" }}>
            Full Dissertation writing services from Tutors India research writing services is simply easy and straightforward. You will get the reply within 30 minutes which would enable to place your order quickly without any delay in submissions. We would provide executive summary /abstract, free articles used for writing the full dissertation, SPSS data sheet and output, questionnaire or semi-structured interview questions and any other information that we have used to write the dissertation such as reflective log or diary.
          </p>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>What We deliver while your order for PhD Research Planning</h3>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "14px", fontSize: "1rem" }}>
            We deliver more than your expectation – ensure to provider the proper context, delimit the boundary condition, cite landmark studies, accurately present the theoretical framework &amp; empirical contribution, stay focused on the research question, develop a coherent &amp; persuasive argument, a clear sense of direction, clear citation, APA or any other specific style.
          </p>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Free Offers along with your Master's part or chapter-wise Dissertation Writing Services</h3>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
            We deliver more than your expectation – Abstract or Executive Summary, Graphs &amp; Tables (redrawn), statistical analysis or textual analysis of data, SPSS / other software screen shots to ensure the process that we had carried out for doing the analyses Free Tutoring for the work being carried out – to speak confidently with your program supervisors &amp; SPSS output in Appendix.
          </p>
        </div>

        {/* Service Distinctiveness */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Our custom PhD Doctorate Dissertation Research Planning service is exclusive</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "18px", fontSize: "1rem" }}>
            as we do not just provide dissertation writing service, but the rather clear explanation and justification for the choice.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "16px" }} className="two-col-grid">
            {[
              { t: "Sample Work", d: "Check the sample PhD dissertation planning from our expert writers" },
              { t: "Quality Assurance", d: "We ensure quality at every stage and the process." },
              { t: "Plagiarism Report", d: "We deliver the document after scanning for plagiarism" },
              { t: "Customer Interaction", d: "We interact with the customer at every stage in terms of amendments, query and delivery." },
            ].map(f => (
              <div key={f.t} style={{ background: "#f8f9ff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px", display: "flex", gap: "12px" }}>
                <div style={{ width: "32px", height: "32px", background: "#e87722", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "0.85rem", flexShrink: 0, marginTop: "2px" }}>✓</div>
                <div>
                  <h3 style={{ fontSize: "0.96rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "4px" }}>{f.t}</h3>
                  <p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.65, margin: 0 }}>{f.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>How Does it work?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "14px" }} className="three-col-grid">
            {[
              { n: "1", text: "After the order is confirmed, we allocate the special team to scrutinize the work regarding necessary availability requirements that would be essential to complete the work." },
              { n: "2", text: "Once the process is done, in case there are any queries, we ensure to ask during the initial stage of your work and send you the outline proposed for writing secondary data collection based dissertation." },
              { n: "3", text: "Once the outline along with the chapterization plan is approved, we will dispatch the work in chapters, and update you on the progress of your work. Our exclusive coordinators would get in touch with you to clarify any queries." },
              { n: "4", text: "You can also pay in installments and work will be started as soon as receive the payments." },
              { n: "5", text: "We deliver your work as per the schedule fixed and agreed or even before the schedule." },
            ].map(s => (
              <div key={s.n} style={{ background: "#fff", borderRadius: "10px", padding: "18px", border: "1px solid #dde2ef", display: "flex", gap: "12px" }}>
                <div style={{ width: "32px", height: "32px", background: "#1a2a6c", borderRadius: "50%", color: "#fff", fontWeight: 700, fontSize: "0.85rem", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{s.n}</div>
                <p style={{ fontSize: "0.84rem", color: "#555", lineHeight: 1.65, margin: 0 }}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Editing Tiers Table */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px", overflowX: "auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>Editing Service Tiers</h2>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
            <thead>
              <tr style={{ background: "#1a2a6c", color: "#fff" }}>
                <th style={{ padding: "12px 16px", textAlign: "left" }}>Feature</th>
                <th style={{ padding: "12px 16px", textAlign: "center" }}>Premium Editing</th>
                <th style={{ padding: "12px 16px", textAlign: "center" }}>Advanced Editing</th>
                <th style={{ padding: "12px 16px", textAlign: "center" }}>Standard Proofread</th>
              </tr>
            </thead>
            <tbody>
              {editingTiers.map((row, i) => (
                <tr key={row.feature} style={{ background: i % 2 === 0 ? "#f8f9ff" : "#fff" }}>
                  <td style={{ padding: "10px 16px", color: "#333", fontWeight: 500 }}>{row.feature}</td>
                  <td style={{ padding: "10px 16px", textAlign: "center", color: row.premium === true ? "#1a9e3f" : row.premium === "On request" ? "#e87722" : "#ccc" }}>
                    {row.premium === true ? "✓" : row.premium === "On request" ? "On request" : "—"}
                  </td>
                  <td style={{ padding: "10px 16px", textAlign: "center", color: row.advanced ? "#1a9e3f" : "#ccc" }}>{row.advanced ? "✓" : "—"}</td>
                  <td style={{ padding: "10px 16px", textAlign: "center", color: row.standard ? "#1a9e3f" : "#ccc" }}>{row.standard ? "✓" : "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Guarantees */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "8px" }}>Why Choose Tutors India: PhD Doctorate Dissertation Research Planning Service features</h2>
          <p style={{ color: "#666", fontSize: "0.96rem", marginBottom: "18px" }}>Qualified researchers, unlimited revision, only peer-reviewed articles, plagiarism report, 24/7 support, 100% match with the requirement and on time delivery.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "16px" }} className="two-col-grid">
            {[
              { t: "A complete secure & Confidential Service", d: "We offer 100% confidentiality of client's personal details, payment details, project works, and copyrights of research works. We ensure following for the conditionality, security & privacy: 1) All your projects are given unique reference codes 2) Documents are accessed only writers who signed NDA with Tutors India 3) Your financial information is protected b 128-bit secure socket layer (SSL) encryption." },
              { t: "Fully Referenced", d: "Our dissertation work is fully referenced with latest articles and textbooks. We refer only peer-reviewed sources such as scholarly articles and textbook to select the topic. We refer database including Web of Science, ProQuest, Google Scholar, Business Source Complete, and latest newspapers articles such as Economic Times, Forbes, The Wall Street, The Economics to identify the industrial problem." },
              { t: "Our Guarantees", d: "(1) Unlimited Revision for the work being committed. (2) We ensure on-time delivery (3) We support 24/7. (4) Our word count committed does not include references and bibliography & help you to locate the sources cited (5) Ensure three-level quality check including Technical QC, Editor QC and final check against the requirement (6) Confidentiality of the information (7) Plagiarism free work – less than 5% percent. (8) Only experienced and subject specific writers will be allotted." },
              { t: "Plagiarism Free Work", d: "We are aware of the consequences of plagiarism. Hence, topic selection is completely plagiarism Free. Our work is scanned against online sources in a similar way like WriteCheck or Turnitin. We wanted to ensure that our clients i.e., researchers and students are not finding any issues with regards to plagiarism and so we issue plagiarism-free certificate*. Our streamlined and high-quality research writing process ensures your dissertation is not just copy-pasted, but written only after brainstorming sessions with our team of professional researchers." },
              { t: "On Time", d: "Our work is delivered at a specified date and time. Our specific changes to the delivered work will be carried out within 45 days of delivery. We guarantee delivery of minor changes within 24 working hours and significant changes within 48 working hours. We acknowledge all your emails within 30 minutes of working hours. Further any delay in the delivery can be raised at customersupport@tutorsindia.com" },
              { t: "Experienced Writers", d: "Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities from India, the US, and the UK. We identify the perfect SME according to your subject and area. Expert is selected through a stringent selection process including the signing of non-disclosure and confidentiality agreement. You can be very sure about the quality of the work since expert writer is identified as per International Research Experience" },
            ].map(f => (
              <div key={f.t} style={{ background: "#f8f9ff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px" }}>
                <h3 style={{ fontSize: "0.96rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{f.t}</h3>
                <p style={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.65, margin: 0 }}>{f.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Subject Expertise */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Your academic PowerPoint presentation is written by your choice of Subject Matter Expertise</h2>
          <p style={{ color: "#666", fontSize: "0.96rem", marginBottom: "8px" }}>We have a team of 2000+ expertise across the subjects &amp; countries (including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine)</p>
          <p style={{ color: "#666", fontSize: "0.96rem", marginBottom: "14px" }}>Tutors India has capability and skills to handle subjects across the field. We chose qualified and experienced subject specific expertise while you order your Ph.D. or Master's dissertation. We have more than 2000+ expertise working across the world who can handle arts, literature, sciences, engineering or medicine.</p>
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
          <p style={{ color: "#c5d5f0", marginBottom: "20px", fontSize: "0.95rem" }}>Get your PhD Doctorate Dissertation Research Plan developed by qualified experts from the US &amp; UK today</p>
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
