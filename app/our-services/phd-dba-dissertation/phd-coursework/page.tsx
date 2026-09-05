import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import type { Metadata } from "next";
import TestimonialSlider from "@/components/ui/TestimonialSlider";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "DBA | PhD Coursework Writing Services | Coursework Writing",
  description: "Coursework Writing Services & Consultation Help. We help in the submission of your research methodology literature review and annotated bibliography coursework.",
  keywords: "phd coursework writing service, phd coursework writing help, phd coursework writing in uk, phd coursework writing services uk, phd research coursework writing services, researchers coursework writing help, phd coursework writing assistance",
  alternates: { canonical: "https://www.tutorsindia.com/our-services/phd-dba-dissertation/phd-coursework/" },
};

const faqs = [
  {
    q: "On which areas you provide dissertation topics and outline?",
    a: "Business Management, Economics, Computer Science, English, Literature, Engineering, Epidemiology, Public Health, Life Science, Nutrition, and various engineering specializations.",
  },
  {
    q: "What will be the cost for dissertation writing, and timeline?",
    a: "Pricing depends on word-count and timeline. Request to submit finalized title, research areas, guidelines, and specifications for a quote.",
  },
  {
    q: "What information is needed when ordering?",
    a: "Provide key research interests, target country, industry experience, data collection feasibility, and any other relevant details.",
  },
  {
    q: "How can I believe my proposal will be accepted?",
    a: "Tutors India has 10+ years experience helping 3,500+ PhD scholars.",
  },
  {
    q: "Do you have PhD Scholars on staff?",
    a: "Yes, in-house expertise includes PhD Scholars, post-doctoral fellows, and MD-holding researchers.",
  },
  {
    q: "If unsatisfied, will work be replaced?",
    a: "Unlimited revisions provided based on directional feedback and comments.",
  },
  {
    q: "What basis is used to prepare dissertations?",
    a: "Based on requirements, word-count, guidelines, and specifications provided.",
  },
  {
    q: "Can I see samples?",
    a: "Yes, samples available on their website.",
  },
];

const testimonials = [
  {
    quote: "Statistical signal processing and its applications in sensor arrays and wireless sensor networks were the focus of my study...I am grateful to Tutors India for not only guiding me through my research project but also teaching me a lot about research paper writing strategies.",
    author: "Charles",
    location: "Statistical Signal Processing",
    avatar: "/images/testimonials/t13.jpg",
  },
  {
    quote: "I am very happy with Tutors India service for PhD Coursework...I got a brilliant internship abroad with a high prestige company.",
    author: "Gatik",
    location: "Andorra",
    avatar: "/images/testimonials/t14.jpg",
  },
  {
    quote: "Good job by Tutors India on drafting my coursework...There was no delay with their response and my coursework was delivered within the requested time.",
    author: "Jenifer Williams",
    location: "Japan",
    avatar: "/images/testimonials/t16.jpg",
  },
];

const services = [
  {
    title: "Literature Review Focus",
    desc: "This should provide some insights on (a) studies that have been conducted previously in your research field (b) familiarity with major themes, (c) the range of theories scholars use to analyse their primary sources (d) gaps identified in the literature (e) further investigations you intend to pursue as part of the coursework and (f) best methodologies.",
  },
  {
    title: "Research Methodology",
    desc: "The section is essential to the good research. This section includes the overall methodological approach, Research design, strategy, qualitative or quantitative, research philosophy, target area, population, sample size, primary or secondary data collection, ethical consideration, pilot study, validity, reliability, & statistical analysis.",
  },
  {
    title: "Statistical Analysis",
    desc: "In order to understand the findings of the study in the form of tables & figures along with the interpretation. Depending on the choice of research methodology, we help you to write a PhD coursework including a detailed quantitative models, hypothesis testing, showing some basic descriptive statistics including mean, SD, regression. Or a qualitative analysis dealing with content or textual or case study description. We use SPSS / R / SAS / STATA / Minitab for analysis.",
  },
  {
    title: "Coursework Coverage",
    desc: "Tutors India is well aware of course work structure and modules across the globe as our writers have successfully handled more than 10000 assignments and course works in various disciplines. We support coursework writing for management, finance, research methodology, statistics, economics, medical, nursing, public health, epidemiology, information technology and many others. We also support you for a case study, assignments, critical review, descriptive Questions and Answers, Quiz and much more. We support for Ph.D. Coursework across countries such as UK, USA, Australia, USA and Singaporean Universities.",
  },
];

const deliverables = [
  "Abstract or Executive Summary",
  "Graphs & Tables (redrawn)",
  "Statistical or textual analysis of data",
  "SPSS / other software screenshots to ensure the process that we had carried out for doing the analyses",
  "Free Tutoring for the work being carried out – to speak confidently with your program supervisors",
  "SPSS output in Appendix",
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies",
  "Marketing & Communication", "Engineering & Technology", "Natural Sciences & Mathematics",
  "Economics & Administration", "Humanities & Social Science", "Law",
  "Medicine & Health", "Education & Training", "Journalism & Media",
  "Agriculture & Forestry", "Computer Science & IT", "Hospitality, Leisure & Sports",
];

export default function PhDCourseworkPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Services", url: "/our-services/" }, { name: "PhD / DBA Dissertation", url: "/our-services/phd-dba-dissertation/" }, { name: "PhD Coursework" , url: "https://www.tutorsindia.com/our-services/phd-dba-dissertation/phd-coursework/" }]} />
      {/* ── HERO ── */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}
            <Link href="/our-services/phd-dba-dissertation/" style={{ color: "#a0b8e0" }}>PhD / DBA Dissertation</Link>{" / "}
            <span style={{ color: "#fff" }}>PhD Coursework</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.4rem,3vw,2rem)", lineHeight: 1.3, marginBottom: "16px" }}>
            A UK PhD &amp; Professional doctorate degree Coursework Writing Services &amp; Consultation Help
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "8px" }}>
            Are you looking for a coursework writing service for Ph.D. (doctor of philosophy, doctor of education &amp; doctor of medicine) who can provide full help in the submission of your research methodology, statistical review, annotated bibliography, citation review coursework?
          </p>
          <p style={{ color: "#f9c74f", fontSize: "1.05rem", fontWeight: 700, marginBottom: "20px" }}>
            Then You've Certainly Reached the Right place
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
          {[{ n: "3500+", l: "PhD Scholars Helped" }, { n: "10000+", l: "Assignments Done" }, { n: "< 5%", l: "Plagiarism" }, { n: "Unlimited", l: "Revisions" }, { n: "30 min", l: "Response Time" }, { n: "24/7", l: "Support" }].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
              <div style={{ fontSize: "0.68rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>

        {/* Ph.D. & DBA Coursework Writing, Editing & rewriting Service */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Ph.D. &amp; DBA Coursework Writing, Editing &amp; rewriting Service</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "1rem" }}>
            Custom PhD &amp; DBA coursework is written by qualified and experienced researchers from the US &amp; UK
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "1rem" }}>
            Our editors are native English speakers, with industry experience, and educational degrees from international and top-ranked universities from the US, and the UK.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "1rem" }}>
            Every program focuses on a different skill-set involving evaluative and analytical potential of student and assess their ability with strict rubric scale and marking criteria. Especially, coursework is mandatory for any Ph.D. and every scholar need to undergo such process for a minimum period of one semester or six months.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "1rem" }}>
            No doubt, every coursework requires a lot of effort in terms of studying, comprehending, and writing. Moreover, it is time-consuming and to meet the deadlines of submission is the most worrisome factor.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
            Hence, as a perfect alternative Tutors India coursework help comes handy to deal with crunch submission period.
          </p>
        </div>

        {/* Ph.D. dissertation Coursework according to your university guidelines */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Ph.D. dissertation Coursework according to your university guidelines</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "1rem" }}>
            At Tutors India, we have a team of experts who are familiar and experience in handling various coursework's relevant to Ph.D. Research. Whether you pursue practice-based PhD, PhD by published works or integrated PhD or collaborative degree, we have expertise who have a capability to handle any type of coursework.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
            Is your coursework is about statistical analysis through SPSS or any other software, econometrics, specific subject related work, research paper writing, conference and seminar paper publication, abstract writing, identifying relevant sources, question and answer sessions, research methodology, Ph.D. essay writing, Ph.D. case report writing, reflective report or critical review of a journal article or any other course work that you required help.
          </p>
        </div>

        {/* A UK Ph.D. & DBA Coursework Writers */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>A UK Ph.D. &amp; DBA Coursework Writers have capability &amp; Skills to write on any given complex topic</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "1rem" }}>
            Our Ph.D. coursework demonstrates the ability to communicate complex ideas critically, concisely, and clearly. Our writers write a truly convincing high-quality coursework of any given topic, regardless of your research area and the methodology you choose.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
            You will get the reply within 30 minutes which would enable to place your order quickly without any delay in submissions.
          </p>
        </div>

        {/* Service Tiers */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>Ph.D. &amp; DBA Coursework Writing Service is Simply easy &amp; Straightforward</h2>
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

        {/* What Services do we offer */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "8px" }}>What Services do we offer under Ph.D. &amp; DBA Coursework Writing Service?</h2>
          <p style={{ color: "#666", fontSize: "0.96rem", marginBottom: "18px" }}>
            We offer topic Selection for Management, Social Science, Engineering, Technology, Life Science, Medical, Arts &amp; Literature / Linguistics, and much more
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "18px" }} className="two-col-grid">
            {services.map((s, i) => (
              <div key={s.title} style={{ background: "#f8f9ff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px", display: "flex", gap: "14px" }}>
                <div style={{ width: "34px", height: "34px", background: "#1a2a6c", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "0.85rem", flexShrink: 0, marginTop: "2px" }}>{i + 1}</div>
                <div>
                  <h3 style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{s.title}</h3>
                  <p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subject Specialization */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Your coursework is written by your choice of Subject Matter Expertise</h2>
          <p style={{ color: "#666", fontSize: "0.96rem", marginBottom: "14px" }}>Specialized Subject Matter Expertise across the globe</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {subjects.map(s => (
              <span key={s} style={{ background: "#f0f4ff", border: "1px solid #c5d0ea", borderRadius: "20px", padding: "6px 14px", fontSize: "0.82rem", color: "#1a2a6c", fontWeight: 500 }}>{s}</span>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <div style={{ background: "#fff8f0", border: "1px solid #f5d9bb", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "8px" }}>Our deliverables while you order custom written PhD coursework writing service</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "14px", fontSize: "1rem" }}>
            We deliver more than your expectation –Abstract or Executive Summary, Graphs &amp; Tables (redrawn), statistical analysis or textual analysis of data, SPSS / other software screen shots to ensure the process that we had carried out for doing the analyses Free Tutoring for the work being carried out – to speak confidently with your program supervisors &amp; SPSS output in Appendix.
          </p>
          <ul style={{ margin: 0, paddingLeft: "20px" }}>
            {deliverables.map(d => (
              <li key={d} style={{ color: "#555", fontSize: "0.92rem", lineHeight: 1.8, marginBottom: "4px" }}>{d}</li>
            ))}
          </ul>
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

        {/* Service Features */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Ph.D. &amp; DBA Coursework Writing Service Features</h2>

          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "8px" }}>Coursework needs to convince the Supervisory committee</h3>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "1rem" }}>
            Understanding this challenging task, our experts at Tutors India who have vast experience in both theoretical and industrial knowledge will help you to write your Ph.D. level coursework.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "20px", fontSize: "1rem" }}>
            Our team comprised of Ph.D. and Master's in subject matter expertise (both theoretically and industrial experience) along with language editors and statisticians who will able to handle your coursework writing services.
          </p>

          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "8px" }}>Our custom PhD coursework writing &amp; editing service is exclusive</h3>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "20px", fontSize: "1rem" }}>
            Your custom PhD coursework writing &amp; editing service is exclusive as we do not just provide coursework writing service, but the rather clear explanation and justification for the choice
          </p>

          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Why Choose Tutors India: Full Master's Dissertation Service features</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "12px", marginBottom: "20px" }} className="two-col-grid">
            {[
              { t: "A complete secure & Confidential Service", d: "We offer 100% confidentiality of client's personal details, payment details, project works, and copyrights of research works. We ensure following for the conditionality, security & privacy: 1) All your projects are given unique reference codes 2) Documents are accessed only writers who signed NDA with Tutors India 3) Your financial information is protected b 128-bit secure socket layer (SSL) encryption." },
              { t: "Fully Referenced", d: "Our dissertation work is fully referenced with latest articles and textbooks. We refer only peer-reviewed sources such as scholarly articles and textbook to select the topic. We refer database including Web of Science, ProQuest, Google Scholar, Business Source Complete, and latest newspapers articles such as Economic Times, Forbes, The Wall Street, The Economics to identify the industrial problem." },
              { t: "Our Guarantees", d: "(1) Unlimited Revision for the work being committed. (2) We ensure on-time delivery (3) We support 24/7. (4) Our word count committed does not include references and bibliography & help you to locate the sources cited (5) Ensure three-level quality check including Technical QC, Editor QC and final check against the requirement (6) Confidentiality of the information (7) Plagiarism free work – less than 5% percent. (8) Only experienced and subject specific writers will be allotted." },
              { t: "Plagiarism Free Work", d: "We are aware of the consequences of plagiarism. Hence, topic selection is completely plagiarism Free. Our work is scanned against online sources in a similar way like WriteCheck or Turnitin. We wanted to ensure that our clients i.e., researchers and students are not finding any issues with regards to plagiarism and so we issue plagiarism-free certificate*. Our streamlined and high-quality research writing process ensures your dissertation is not just copy-pasted, but written only after brainstorming sessions with our team of professional researchers." },
              { t: "On Time", d: "Our work is delivered at a specified date and time. Our specific changes to the delivered work will be carried out within 45 days of delivery. We guarantee delivery of minor changes within 24 working hours and significant changes within 48 working hours. We acknowledge all your emails within 30 minutes of working hours. Further any delay in the delivery can be raised at customersupport@tutorsindia.com" },
              { t: "Experienced Writers", d: "Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities from India, the US, and the UK. We identify the perfect SME according to your subject and area. Expert is selected through a stringent selection process including the signing of non-disclosure and confidentiality agreement." },
            ].map(f => (
              <div key={f.t} style={{ background: "#f8f9ff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px" }}>
                <h4 style={{ fontSize: "0.96rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{f.t}</h4>
                <p style={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.65, margin: 0 }}>{f.d}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "#f0f4ff", borderRadius: "10px", padding: "18px", border: "1px solid #dde2ef" }}>
            <h4 style={{ fontSize: "0.96rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "8px" }}>Track Your Report through our customized CRM</h4>
            <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.7, margin: 0 }}>
              We have in-house expertise, consists of Ph.D. Scholars and post-doctoral fellows and MD holding Ph.D. scholars with rich experience from various universities, who can guide you throughout your research. We have a team of 2000+ expertise across the subjects &amp; countries (including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine). In Tutors India, we have been helping all sort of research from Ph.D. scholars to master level research work for more than 10 years; we also helped to complete 3,500(+) Ph.D.'s
            </p>
          </div>
        </div>

        {/* Free Offers */}
        <div style={{ background: "#fff8f0", border: "1px solid #f5d9bb", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Free Offers along with your coursework Writing Services</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "14px" }} className="three-col-grid">
            {deliverables.map(d => (
              <div key={d} style={{ background: "#fff", border: "1px solid #f5d9bb", borderRadius: "10px", padding: "16px", display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <div style={{ width: "28px", height: "28px", background: "#e87722", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "0.96rem", flexShrink: 0 }}>✓</div>
                <span style={{ fontSize: "0.84rem", color: "#555", lineHeight: 1.6 }}>{d}</span>
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
          <p style={{ color: "#c5d5f0", marginBottom: "20px", fontSize: "0.95rem" }}>Get your PhD / DBA Coursework written by qualified UK &amp; US researchers today</p>
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
