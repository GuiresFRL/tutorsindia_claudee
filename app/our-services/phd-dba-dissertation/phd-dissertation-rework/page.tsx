import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "PhD Dissertation Rework & Resubmission",
  description: "Are you resubmitting your dissertation? Struggling to handle resit dissertation and looking to clear in the second attempt. Tutors India offers exclusive support to rework completely your dissertation based on the supervisor comments.",
  alternates: { canonical: "https://www.tutorsindia.com/our-services/phd-dba-dissertation/phd-dissertation-rework/" },
};

const faqs = [
  {
    q: "What Information that I need to provide while ordering for Dissertation rework writing services",
    a: "To match exactly with your requirement, we required your i) marking criteria, ii) University guidelines, iii) professor feedback, iv) dissertation structure guidelines from the University v) complete dissertation that you had submitted to the University vi) data sheet used for the analysis vii) research proposal and any other information that you wanted to share.",
  },
  {
    q: "What if my Dissertation reworks or resit dissertation is rejected?",
    a: "This is unlikely to happen at Tutors India, for the following reasons: (a) we offer our services to our clients with complete justification – if you wanted to reject the work, there is a need for proof to show the reasons based on the client's perceptions. Since the communication was made between client and Tutors India. (b) Secondly, we provide unlimited revisions to support our client for the commitment we had made initially.",
  },
  {
    q: "On which areas you provide Dissertation rework writing services?",
    a: "We accept orders from a wide range of subjects, which include Business Management, finance, operation management, supply chain and logistics management, entrepreneurial management, human resource management, psychology, history, geography, engineering, healthcare, Economics, Computer Science, English, Literature, Engineering, Epidemiology, nursing, medical, Public Health, Life Science, and Nutrition.",
  },
  {
    q: "What PhD Dissertation part Does Tutors India Provide?",
    a: "If you are looking to avail our services only to write PhD dissertation part then we offer introduction, statistical analysis, materials or methods/methodology, literature review, findings or interpretation of your statistical analysis and conclusion or dissertation part services. Alternatively, Get the PhD Dissertation chapter wise writing services from our Domain expertise",
  },
  {
    q: "Why do you Provide PhD part dissertation free drafts for all orders?",
    a: "We provide the PhD part dissertation free draft after completing each chapter or dissertation part to ensure that our process flow is consistent. It helps the students to identify the errors and give the feedback to change chapter wise so it is easy to explain to your committee easily through oral.",
  },
  {
    q: "I have heard many horror stories about unqualified people being assigning to write PhD dissertation-writing services. Is it true?",
    a: "Yeah, we have also heard many stories as well. Tutor India has conduct brainstorming session so you will get opportunities to talk with our expertise directly as to understand their skill set and experience then you will decide whether you need to take the services or not. Further, this company relies on good word of mouth from many clients.",
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
  {
    quote: "I submitted my work with complete confidence for the first time ever. The quality, formatting, and clarity were all beyond what I hoped for.",
    author: "Charlotte Reed",
    location: "UK",
    avatar: "/images/testimonials/t15.jpg",
  },
  {
    quote: "The team handled everything professionally from start to finish. Timely updates, quick responses, and excellent academic quality — exactly what students need during stressful deadlines.",
    author: "Zain Al Hashmi",
    location: "UAE",
    avatar: "/images/testimonials/t13.jpg",
  },
];

const qualityChecks = [
  {
    title: "Rubric Scale, Line by Line & Chapter wise Scrutinization",
    desc: "In general university has the assessment criteria, where chapter I, an introduction part carries 10% weight, a literature review (Chapter II) has 20-40% weight, research methodology (Chapter III) or design carries 15-20 %, while 30% of results and interpretation (Chapter IV) and 10% for conclusion and discussion (Chapter V). Overall, 10% for presentation and referencing.",
  },
  {
    title: "The relevance of Sources and critical approach",
    desc: "We check whether the reviews of relevant sources are organized in chronological order and logical sequence and ensure whether appropriates gaps are identified using latest references from peer reviewed articles?",
  },
  {
    title: "Analysis and Critical Interpretation",
    desc: "Whether statistical analyses are relevant to the objectives and research questions identified? We check each and every step, including analysis tools such as tools and techniques, whether applied correct tool for the identified objectives.",
  },
  {
    title: "Conclusive Coherence and New Knowledge",
    desc: "Whether conclusion is made with relevance to the research objective and research questions? Does researcher could able to shed new knowledge to the research? Whether a critical analysis has been taken by comparing the objectives, literature review and results obtained in the present study.",
  },
  {
    title: "Organized references and Completely referenced",
    desc: "Whether references are well organized and according to the style posed by the Universities? The document is whether well referenced both using textbooks and journal articles.",
  },
];

const commonIssues = [
  "No in-text references", "Lack of an appropriate literature review",
  "Research objectives doesn't match with literature review", "Introduction was not clear",
  "Results are not in appropriate format", "Lack of discussion",
  "Lack of hypothesis", "Lack of research objectives",
  "Research objectives are too broad to answer your findings", "Not in APA style format",
  "SPSS output has been pasted as such", "Need in journal formatting",
  "Lack of critical review", "Could not find research gaps",
  "Lack of an appropriate research methodology", "Confusing methodology",
  "Results don't support your argument", "And many more",
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies",
  "Marketing & Communication", "Engineering & Technology", "Natural Sciences & Mathematics",
  "Biological & Life science", "Economics & Administration", "Humanities & Social Science",
  "Law", "Medicine & Health", "Education & Training",
  "Journalism & Media", "Agriculture & Forestry", "Computer Science & IT",
  "Hospitality, Leisure & Sports",
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

export default function PhDDissertationReworkPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}
            <Link href="/our-services/phd-dba-dissertation/" style={{ color: "#a0b8e0" }}>PhD / DBA Dissertation</Link>{" / "}
            <span style={{ color: "#fff" }}>PhD Dissertation Rework</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.4rem,3vw,2rem)", lineHeight: 1.3, marginBottom: "16px" }}>
            Ph.D. Dissertation Resubmission or Rework or Rewriting Help the UK
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "8px" }}>
            Are you resubmitting your dissertation? Struggling to handle resit dissertation and looking to clear in the second attempt. Then You've Certainly Reached the Right Place! Tutors India offers exclusive support to rework completely your dissertation based on the supervisor comments and as per the university guidelines.
          </p>
          <p style={{ color: "#f9c74f", fontSize: "1rem", fontWeight: 700, marginBottom: "20px" }}>
            We have a 100% success rate in resit dissertation.
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
          {[{ n: "100%", l: "Resit Success Rate" }, { n: "2000+", l: "Expert Writers" }, { n: "< 5%", l: "Plagiarism" }, { n: "Unlimited", l: "Revisions" }, { n: "30 min", l: "Response Time" }, { n: "24/7", l: "Support" }].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
              <div style={{ fontSize: "0.68rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>

        {/* Qualified Writers */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Your Resit Dissertation is written by qualified and experienced researchers from the UK</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "1rem" }}>
            Our dissertation writers have experience in handling students who faced rejection for their dissertation. Our dissertation team consists of a subject-specific writer with industry experience, statisticians, research methodology expertise, editors and proofreaders with educational degrees from international and top-ranked universities from India, the US, and the UK.
          </p>
        </div>

        {/* Resitting intro */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Resitting or resubmitting the UK Master's Dissertation</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "1rem" }}>
            Resitting a master's dissertation with perfection is not an easy task. Even excellent students need to resit their dissertations for various inevitable reasons. It puts a lot of pressure on the scholars as the dissertation is the prime factor in deciding their future. The most common cause for resitting dissertation is that the research is not sufficiently comprehensive or valid.
          </p>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px", marginTop: "18px" }}>Tutors India for your Ph.D. dissertation resubmission or rework help</h2>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
            Doing a dissertation Resit requires a thorough understanding of your previous research work done and the subsequent feedback that was given for that work. Tutors India is a legitimate Dissertation service for students who want to do a Dissertation Rework based on the specific University Guidelines.
          </p>
        </div>

        {/* Common Issues */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Tutors India have undertaken Resit dissertations that have undertaken due to following reasons</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {commonIssues.map(i => (
              <span key={i} style={{ background: "#fef2ec", border: "1px solid #f5c6a0", borderRadius: "20px", padding: "5px 14px", fontSize: "0.82rem", color: "#c0440e", fontWeight: 500 }}>{i}</span>
            ))}
          </div>
        </div>

        {/* Complete Resit + Straightforward */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Complete Resit Ph.D. Dissertation rewriting Help UK</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "16px", fontSize: "1rem" }}>
            Tutors India ensures to add enough additional values as much as possible for the resit dissertation to be successful. It ensures that the scholar gets best high grades. We confirm that the value addition is comprehensive and chapter wise, and each stage is handled with utmost care.
          </p>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>PhD Resit Dissertation Writing is Simply easy &amp; Straightforward</h2>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
            Our thesis and dissertation writing help guarantees that your dissertation is confidential, and so you do not have to worry about it. Just send us your original dissertation along with any support materials, the list of references, the feedback for the changes or supervisor comments, your comments if any, and finally the deadline for submission.
          </p>
        </div>

        {/* Services Offered */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>UK PhD Resit Dissertation Writing Services</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "18px" }} className="two-col-grid">
            {[
              { title: "UK PhD Resit Dissertation Writing Service", desc: "We write complete master's resit dissertation from the introduction to recommendations. Although it looks simple, but in practical, it's a tedious task to complete each and every step." },
              { title: "Point-by-Point Response", desc: "We will go through your Dissertation considering all your points raised by your professor and respond it one by one using an appropriate format. Point-By-Point Response to all Questions Raised by the Reviewers / Professors." },
              { title: "Track Changes format", desc: "Also, all the corrections will be carried using 'Track Changes format'. However, will send both Track changes and non-track changes." },
              { title: "Unlimited Revisions", desc: "We undertake unlimited revisions till you obtain a good grade. Before we accept your Resit dissertation, we will be discussing with you in-person or over phone /Skype or any preferable mode to clarify all our issues before acceptance." },
            ].map((s, i) => (
              <div key={s.title} style={{ background: "#f8f9ff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px", display: "flex", gap: "14px" }}>
                <div style={{ width: "34px", height: "34px", background: "#1a2a6c", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "0.85rem", flexShrink: 0, marginTop: "2px" }}>{i + 1}</div>
                <div>
                  <h3 style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{s.title}</h3>
                  <p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Assurance */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>Quality Assurance Process</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "18px" }} className="two-col-grid">
            {qualityChecks.map((q, i) => (
              <div key={q.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px", display: "flex", gap: "14px" }}>
                <div style={{ width: "34px", height: "34px", background: "#e87722", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "0.85rem", flexShrink: 0, marginTop: "2px" }}>{i + 1}</div>
                <div>
                  <h3 style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{q.title}</h3>
                  <p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.65, margin: 0 }}>{q.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features — Reviewing Feedback & Decision Factor */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>A PhD Rework Dissertation UK Features</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "18px" }} className="two-col-grid">
            <div style={{ background: "#f8f9ff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px" }}>
              <h3 style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "8px" }}>Reviewing the Feedback</h3>
              <p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.65, margin: 0 }}>
                We review the feedback thoroughly given by the supervisor or the review committee. Our writers at Tutors India ensure to pay attention to each and every comment and ensure that we work on the specific comment as raised by your supervisor.
              </p>
            </div>
            <div style={{ background: "#f8f9ff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px" }}>
              <h3 style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "8px" }}>Decision factor</h3>
              <p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.65, margin: 0 }}>
                Based on the analysis, we decide whether to carry out a complete rewiring or editing services. By analyzing, would help to predict the timeline of various expertise involved in a resit dissertation. The following are the factors considered while we undertake resit dissertation writing that includes, resubmission deadline, number of remarks, especially remarks in the research methodology and data collection chapters, style of writing, and supervisor tone
              </p>
            </div>
          </div>
        </div>

        {/* Editing Tiers Table */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px", overflowX: "auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>Editing Service Tiers</h2>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
            <thead>
              <tr style={{ background: "#1a2a6c", color: "#fff" }}>
                <th style={{ padding: "12px 16px", textAlign: "left", borderRadius: "8px 0 0 0" }}>Feature</th>
                <th style={{ padding: "12px 16px", textAlign: "center" }}>Premium Editing</th>
                <th style={{ padding: "12px 16px", textAlign: "center" }}>Advanced Editing</th>
                <th style={{ padding: "12px 16px", textAlign: "center", borderRadius: "0 8px 0 0" }}>Standard Proofread</th>
              </tr>
            </thead>
            <tbody>
              {editingTiers.map((row, i) => (
                <tr key={row.feature} style={{ background: i % 2 === 0 ? "#f8f9ff" : "#fff" }}>
                  <td style={{ padding: "10px 16px", color: "#333", fontWeight: 500 }}>{row.feature}</td>
                  <td style={{ padding: "10px 16px", textAlign: "center", color: row.premium === true ? "#1a9e3f" : row.premium === "On request" ? "#e87722" : "#ccc" }}>
                    {row.premium === true ? "✓" : row.premium === "On request" ? "On request" : "—"}
                  </td>
                  <td style={{ padding: "10px 16px", textAlign: "center", color: row.advanced ? "#1a9e3f" : "#ccc" }}>
                    {row.advanced ? "✓" : "—"}
                  </td>
                  <td style={{ padding: "10px 16px", textAlign: "center", color: row.standard ? "#1a9e3f" : "#ccc" }}>
                    {row.standard ? "✓" : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Deliverables */}
        <div style={{ background: "#fff8f0", border: "1px solid #f5d9bb", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Deliverables</h2>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
            UK Resit Dissertation writing services from Tutors India research writing services is simply easy and straightforward. You will get the reply within 30 minutes which would enable to place your order quickly without any delay in submissions. We would provide executive summary /abstract, free articles used for writing the full dissertation, SPSS data sheet and output, questionnaire or semi-structured interview questions and any other information that we have used to write the dissertation such as reflective log or diary.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem", marginTop: "12px" }}>
            We deliver more than your expectation –Abstract or Executive Summary, Graphs &amp; Tables (redrawn), statistical analysis or textual analysis of data, SPSS / other software screen shots to ensure the process that we had carried out for doing the analyses Free Tutoring for the work being carried out – to speak confidently with your program supervisors &amp; SPSS output in Appendix.
          </p>
        </div>

        {/* How Does It Work */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>How Does it work?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "14px" }} className="three-col-grid">
            {[
              { n: "1", text: "We are completely aware that the resit dissertation comes with a very tight deadline, and our team ensures to deliver the work on time along with the detailed report. The process is simple. After the order is confirmed, we allocate the special team to scrutinize the work regarding necessary availability requirements that would be essential to complete the work." },
              { n: "2", text: "Once the outline along with the chapterization plan is approved, we will dispatch the work in chapters, and update you on the progress of your work. Our exclusive coordinators would get in touch with you to clarify any queries." },
              { n: "3", text: "For primary data collection, you need to pay an additional chart to offer this service. This would enable to show the proof of evidence of data collection to your university." },
              { n: "4", text: "We deliver your work as per the schedule fixed and agreed or even before the schedule." },
            ].map(s => (
              <div key={s.n} style={{ background: "#f8f9ff", borderRadius: "10px", padding: "18px", border: "1px solid #dde2ef", display: "flex", gap: "12px" }}>
                <div style={{ width: "32px", height: "32px", background: "#1a2a6c", borderRadius: "50%", color: "#fff", fontWeight: 700, fontSize: "0.85rem", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{s.n}</div>
                <p style={{ fontSize: "0.84rem", color: "#555", lineHeight: 1.65, margin: 0 }}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantees */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>Why Choose Tutors India for PhD Dissertation Rework</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "16px" }} className="two-col-grid">
            {[
              { t: "A complete secure & Confidential Service", d: "We offer 100% confidentiality of client's personal details, payment details, project works, and copyrights of research works. We ensure following for the conditionality, security & privacy: 1) All your projects are given unique reference codes 2) Documents are accessed only writers who signed NDA with Tutors India 3) Your financial information is protected b 128-bit secure socket layer (SSL) encryption." },
              { t: "Fully Referenced", d: "Our dissertation work is fully referenced with latest articles and textbooks. We refer only peer-reviewed sources such as scholarly articles and textbook to select the topic. We refer database including Web of Science, ProQuest, Google Scholar, Business Source Complete, and latest newspapers articles such as Economic Times, Forbes, The Wall Street, The Economics to identify the industrial problem." },
              { t: "Our Guarantees", d: "(1) Unlimited Revision for the work being committed. (2) We ensure on-time delivery (3) We support 24/7. (4) Our word count committed does not include references and bibliography & help you to locate the sources cited (5) Ensure three-level quality check including Technical QC, Editor QC and final check against the requirement (6) Confidentiality of the information (7) Plagiarism free work – less than 5% percent. (8) Only experienced and subject specific writers will be allotted." },
              { t: "Plagiarism Free Work", d: "We are aware of the consequences of plagiarism. Hence, topic selection is completely plagiarism Free. Our work is scanned against online sources in a similar way like WriteCheck or Turnitin. We wanted to ensure that our clients i.e., researchers and students are not finding any issues with regards to plagiarism and so we issue plagiarism-free certificate. Our streamlined and high-quality research writing process ensures your dissertation is not just copy-pasted, but written only after brainstorming sessions with our team of professional researchers." },
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

        {/* Subject Expertise */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>We offer Ph.D dissertation chapter writing service for Management, Finance &amp; Economics, Social Science, Engineering, Technology, Computer Science Life Science, Medicine, Arts &amp; Literature / Linguistics, and more</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "14px" }}>
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
          <p style={{ color: "#c5d5f0", marginBottom: "20px", fontSize: "0.95rem" }}>Get your PhD Dissertation Rework handled by qualified UK &amp; US researchers today</p>
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
