import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "PhD Viva Voce Presentation Services",
  description: "Are you worried of how to face your Ph.D. viva-voce in front of your supervisor & doctoral committee? Tutors India offers world-class professional viva-voce training for your success.",
  alternates: { canonical: "https://www.tutorsindia.com/our-services/phd-dba-dissertation/phd-viva-voice/" },
};

const faqs = [
  {
    q: "Why Should I Hire Tutors India for PhD Viva voce preparation?",
    a: "At Tutor India, we prepare the potential viva voce examination format that fulfill the purpose i.e., it demonstrate the thesis of your work so one can verbally communicate on the professional way with ease.",
  },
  {
    q: "Whether you will prepare viva voce for all subjects/Topics?",
    a: "Sure, we will prepare the PhD viva voce for all subjects/Topics include Business Management, Economics, Computer Science, English, Literature, Engineering, Epidemiology, Public Health, Life Science, Nutrition, etc.",
  },
  {
    q: "Can I send Suggestion for Tutors India to prepare Viva voce based on my Supervisor Instruction?",
    a: "We understand that your Supervisor play a key role in developing a plan for your viva voce examination preparation. We warmly welcome to accept the feedback and suggestion to prepare the topic based on our client's requirement.",
  },
  {
    q: "Can you explain the purpose of my viva voce?",
    a: "Sure, our writers explain briefly the purpose of the viva so the students get the good knowledge of the field since they get the confidence in attending the viva voce examination by either normal or video conference.",
  },
  {
    q: "What are the costs Tutors India charges for the PhD Viva voce?",
    a: "We completely strategized the cost based on the client's requirement such as basic, advanced and premium.",
  },
  {
    q: "I am PhD Students. I want to look Sample work for the Viva voce. Will you send me sample?",
    a: "Yes. We will send you two or three viva voce of the sample work specific to your Topic.",
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
    avatar: "/images/testimonials/t17.jpg",
  },
  {
    quote: "I submitted my work with complete confidence for the first time ever. The quality, formatting, and clarity were all beyond what I hoped for.",
    author: "Charlotte Reed",
    location: "UK",
    avatar: "/images/testimonials/t18.jpg",
  },
  {
    quote: "The team handled everything professionally from start to finish. Timely updates, quick responses, and excellent academic quality — exactly what students need during stressful deadlines.",
    author: "Zain Al Hashmi",
    location: "UAE",
    avatar: "/images/testimonials/t19.jpg",
  },
];

const defenseFeatures = [
  "Train you how to compliment the viva-voce panel and introduce yourself",
  "Help you check your institution's policies and practices",
  "Prepare possible lists of questions by re-reading your thesis and staying current with research",
  "Identify mistakes in the thesis that examiners might comment on",
  "Coach explaining your research topic, SWOT analysis, conclusions, and recommendations",
  "Coach confirming thesis details and content not included",
  "Teach discussing future enhancements in your work",
  "Illustrate the thesis represents your original work",
  "Demonstrate verbal defense understanding",
  "Estimate engagement with original research and analysis",
  "Ensure thesis meets degree submission standards",
  "Help modify and enhance written work based on examiner feedback",
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

export default function PhDVivaVoicePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}
            <Link href="/our-services/phd-dba-dissertation/" style={{ color: "#a0b8e0" }}>PhD / DBA Dissertation</Link>{" / "}
            <span style={{ color: "#fff" }}>PhD Viva Voice</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.4rem,3vw,2rem)", lineHeight: 1.3, marginBottom: "16px" }}>
            A Ph.D. / DBA Defense preparation or Public Viva-Voce Examination Training Help
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "8px" }}>
            Are you worried of how to face your Ph.D. viva-voce in front of your supervisor &amp; doctoral committee? Are you not sure of how to overcome the viva-voce fear?
          </p>
          <p style={{ color: "#f9c74f", fontSize: "1.05rem", fontWeight: 700, marginBottom: "20px" }}>
            Then You've Certainly Reached the Right Place! Tutors India offers world-class professional viva-voce training for your success.
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
          {[{ n: "2000+", l: "Expert Writers" }, { n: "5000+", l: "PhD Dissertations" }, { n: "Unlimited", l: "Revisions" }, { n: "30 min", l: "Response Time" }, { n: "24/7", l: "Support" }].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
              <div style={{ fontSize: "0.68rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>

        {/* Training from PhD Experts */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>A Ph.D. Viva Voice Training from our Ph.D. Experts</h2>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
            Ph.D. Viva Voice Training from qualified and experienced researchers from the US &amp; UK. Our PhD dissertation writers have experience in research methodology, specific domain experience, and educational degrees from international and top-ranked universities from India, the US, and the UK. You can have one-on-one coaching with a writer, statistician, research methodologist and editor.
          </p>
        </div>

        {/* Viva Voce Examination Service */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Viva Voce Examination Service</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "1rem" }}>
            The viva-voce examination is the final representation of your research degree. It is the oral examination, where you will get a chance to discuss your work with experts. It demonstrates your capability to attend academic research discussions and confirms there is no plagiarism in your work.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="two-col-grid">
            <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontWeight: 700, fontSize: "0.95rem", color: "#1a2a6c", marginBottom: "8px" }}>Primary or secondary research</h3>
              <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.7, margin: 0 }}>We deliver dissertation research proposal that utilized either primary or secondary research or using secondary research only. If you have given a choice of primary or secondary, we would strongly recommend primary than secondary, as it offers some insights on the originality. Although its time consuming, it is worth contributing something unknown to the research repository.</p>
            </div>
            <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontWeight: 700, fontSize: "0.95rem", color: "#1a2a6c", marginBottom: "8px" }}>Qualitative or Quantitative or triangulation</h3>
              <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.7, margin: 0 }}>We completely aware that courses vary in terms of research methodologies. Hence our subject matter expertise would advise choosing the right methodology based on the research questions and problem statement that you had identified, or they would enable to identify the right one for you.</p>
            </div>
            <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontWeight: 700, fontSize: "0.95rem", color: "#1a2a6c", marginBottom: "8px" }}>Specific Dissertation</h3>
              <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.7, margin: 0 }}>Our dissertation proposal writing services also include economic research, operational research, coding &amp; algorithm, software development, programming, systematic review, meta-analysis as part of your dissertation requirement.</p>
            </div>
            <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontWeight: 700, fontSize: "0.95rem", color: "#1a2a6c", marginBottom: "8px" }}>Best spoke Training – Power Presentation for Viva Voice</h3>
              <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.7, margin: 0 }}>Our Poster Presentation services encourage clarity, creativity, and ability to stand on its own as a clear, logical presentation of your work using power point service.</p>
            </div>
          </div>
        </div>

        {/* Defense / Viva voice Preparation Help */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Defense / Viva voice Preparation Help</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "1rem" }}>
            Tutors India ensures to add enough additional values as much as possible for the presentation to be successful. It ensures that the scholar gets best high grades.
          </p>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Our Defense / Viva voice Preparation Service is Simply easy &amp; Straightforward</h3>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
            You will get the reply within 30 minutes which would enable to place your order quickly without any delay in submissions. We would also provide possible questions along with the solutions that may arise during the presentation.
          </p>
        </div>

        {/* Service Tiers */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>What Services do we offer under viva voce?</h2>
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

        {/* Free Deliverables */}
        <div style={{ background: "#fff8f0", border: "1px solid #f5d9bb", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Our Free deliverables while you order for defense preparation service UK</h2>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
            When you order our defense preparation service, we provide possible questions that may arise during viva voce along with solutions. You will also receive training materials, question lists tailored to your thesis, and guidance on how to handle unexpected questions from the examination panel.
          </p>
        </div>

        {/* Defense Preparation Features */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "8px" }}>Ph.D. / DBA Defense Preparation Features</h2>
          <p style={{ color: "#666", fontSize: "0.96rem", marginBottom: "16px" }}>We follow according to the specific university guidelines across the United States, United Kingdom, Australia, and other Asian Universities.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "12px" }} className="two-col-grid">
            {defenseFeatures.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "12px", background: "#f8f9ff", border: "1px solid #dde2ef", borderRadius: "8px", padding: "14px", alignItems: "flex-start" }}>
                <div style={{ width: "28px", height: "28px", background: "#1a2a6c", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "0.78rem", flexShrink: 0, marginTop: "1px" }}>{i + 1}</div>
                <p style={{ fontSize: "0.86rem", color: "#555", lineHeight: 1.65, margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How Does it work */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Defense Preparation Service – How Does it work?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "14px" }} className="three-col-grid">
            {[
              { n: "1", text: "After the order is confirmed, we allocate the special team to scrutinize the work regarding necessary availability requirements that would be essential to complete the work." },
              { n: "2", text: "Once the process is done, in case there are any queries, we ensure to ask during the initial stage of your work and send you the outline proposed." },
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

        {/* Viva-voce needs to convince */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Viva-voce needs to convince the Supervisory committee</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "14px", fontSize: "1rem" }}>
            Our experts at Tutors India who have vast experience in both theoretical and industrial knowledge will help you prepare and convince your supervisory committee. We write complete PhD dissertation viva-voce preparation from the introduction to the final defense.
          </p>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Our Defense presentation Service is exclusive</h3>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "1rem" }}>
            as we do not just provide chapter-wise dissertation writing service, but the rather clear explanation and justification for the choice.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "16px" }} className="two-col-grid">
            {[
              { t: "Sample Work", d: "Check the sample PhD viva voce preparation from our expert writers" },
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
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>Why Choose Tutors India: Defense preparation Service features</h2>
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

        {/* Subject Expertise */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Specialized Subject Matter Expertise across the globe</h2>
          <p style={{ color: "#666", fontSize: "0.96rem", marginBottom: "14px" }}>We have a team of 2000+ expertise across the subjects &amp; countries (including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine)</p>
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
          <p style={{ color: "#c5d5f0", marginBottom: "20px", fontSize: "0.95rem" }}>Get your PhD Viva Voce preparation from qualified experts from the US &amp; UK today</p>
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
