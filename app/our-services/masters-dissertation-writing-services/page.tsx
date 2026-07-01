import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Masters Dissertation Writing Services UK",
  description: "UK Master's and MBA Dissertation Writing Services. Expert US & UK writers, plagiarism-free, unlimited revisions. Trusted by 2,00,000+ scholars since 2001.",
};

const services = [
  {
    title: "Dissertation Topic Selection",
    href: "/our-services/masters-dissertation-writing-services/dissertation-topic/",
    icon: "🔍",
    desc: "At Tutors India, we offer thought-provoking suggestions for UK master's dissertation topics and titles that would mainly come from three principal sources — your experience, subject gaps, and emerging research trends.",
  },
  {
    title: "Dissertation Proposal",
    href: "/our-services/masters-dissertation-writing-services/dissertation-proposal/",
    icon: "📋",
    desc: "We develop the UK master's dissertation Proposal based on client's experience in the industry, interest area, and gap in the subject area identified through comprehensive literature search.",
  },
  {
    title: "Full Dissertation Writing",
    href: "/our-services/masters-dissertation-writing-services/full-dissertation/",
    icon: "📖",
    desc: "We develop the introduction chapter based on the background and problem statement and also develop aims and objectives along with the delimitations set, through to the final conclusion.",
  },
  {
    title: "Dissertation Part Writing",
    href: "/our-services/masters-dissertation-writing-services/dissertation-part/",
    icon: "📄",
    desc: "We not only provide support for writing full dissertation writing services, but our service also extends support for writing UK part-dissertation writing and individual chapter writing services.",
  },
  {
    title: "Resit Dissertation",
    href: "/our-services/masters-dissertation-writing-services/resit-dissertation/",
    icon: "🔄",
    desc: "Tutors India supports clients who required help in completing their resit UK dissertation by following supervisor remarks and rubric guidelines, with point-by-point responses to every comment.",
  },
  {
    title: "Specific Dissertation",
    href: "/our-services/masters-dissertation-writing-services/specific-dissertation/",
    icon: "🎯",
    desc: "Our exclusive UK dissertation writing and tutoring services cover systematic review, meta-analysis, library-based, secondary data, mixed methodology and business plan dissertations.",
  },
  {
    title: "Dissertation Statistical Analysis",
    href: "/our-services/masters-dissertation-writing-services/dissertation-statistical-analysis/",
    icon: "📊",
    desc: "Tutors India provides UK dissertation statistical analysis including interpretation help. We use various software such as SPSS, MATLAB, STATA, Minitab, E-Views, SAS, NVIVO, and more.",
  },
  {
    title: "Poster Presentation",
    href: "/our-services/masters-dissertation-writing-services/poster-presentation/",
    icon: "🖼️",
    desc: "Full assistance to develop your poster presentation that stands apart. Our large expert team with dedicated professional graphic designers specialise in attractive academic poster presentations.",
  },
  {
    title: "UG Dissertation Writing",
    href: "/our-services/masters-dissertation-writing-services/ug-dissertation/",
    icon: "🎓",
    desc: "Undergraduate dissertation writing services for students pursuing their final year research project. Full support from topic selection through to submission, meeting your university's specific guidelines.",
  },
  {
    title: "CV Writing Services",
    href: "/our-services/masters-dissertation-writing-services/cv-writing/",
    icon: "📝",
    desc: "Creating a good resume is the most significant first step in your professional career. Our expert CV writers help you craft a compelling curriculum vitae that stands out to employers.",
  },
];

const features = [
  {
    title: "Plagiarism Free Work",
    icon: "🛡️",
    desc: "Our work is completely plagiarism free as we ensure to scan the works against online sources using Turnitin and Write Check. Less than 5% or 0% plagiarism guaranteed on every order.",
  },
  {
    title: "Uniqueness",
    icon: "✨",
    desc: "Every work is unique as our research assistance providers know how to write a high-quality and unique research thesis/dissertation. We provide only custom writing services by Subject Matter Experts who justify how each work is unique.",
  },
  {
    title: "Fully Referenced",
    icon: "📚",
    desc: "Our Masters dissertation projects are fully referenced with latest peer-reviewed research articles, textbooks, online sources, Newspaper articles. We comply 100% with Harvard, APA, Chicago, Vancouver, Turabian and all university-specific referencing guidelines.",
  },
  {
    title: "100% Requirement Match",
    icon: "✅",
    desc: "We match your requirement 100% since our experts understand the topic and analyze the feasibility before working on the dissertation. We always check with you before proceeding with next chapters, following your university guidelines and rubric exactly.",
  },
  {
    title: "On Time Delivery",
    icon: "⏱",
    desc: "Our work is delivered on specified time as per the commitment. We guarantee delivery of minor changes within 24 working hours and significant changes within 48 working hours. All emails acknowledged within 30 minutes of working hours.",
  },
  {
    title: "Word Count Committed",
    icon: "📏",
    desc: "We ensure your dissertation meets the exact word count as per your university regulations. Our experts have handled Masters dissertations ranging from 8,000 – 30,000 words, calculated excluding Table of Contents, References, and Appendices.",
  },
  {
    title: "Quality Assurance",
    icon: "🔬",
    desc: "We have stringent quality check and quality assurance process in every stage of your masters dissertation. Our experts check for subject matter, language, formatting, referencing, plagiarism and overall requirement compliance.",
  },
  {
    title: "Unlimited Revisions",
    icon: "🔁",
    desc: "We provide unlimited revisions as per the initial commitment which is completely free of cost even after the project is completed. We firmly believe that every researcher has different perception and we respect your feedback.",
  },
  {
    title: "Affordable",
    icon: "💷",
    desc: "We strive to provide masters dissertation writing services with world-class quality at affordable rates. Our rates are nominal, student-friendly and exclusively in your currency — constant irrespective of country, subject, and quality.",
  },
];

const processSteps = [
  { n: "01", title: "Fill Enquiry Form", desc: "Fill out the form with your information in a comprehensive manner including topic, word count, deadline, and university guidelines.", img: "/images/process/step-1.jpg" },
  { n: "02", title: "Reference Number", desc: "Upon receiving your Enquiry form, we assign you a reference number. Track your paper status anytime through email or our CRM system.", img: "/images/process/step-2.jpg" },
  { n: "03", title: "Acknowledgment", desc: "Once you have paid for your order you will receive an acknowledgement from us. The writing process begins within a couple of days after receiving your order.", img: "/images/process/step-3.jpg" },
  { n: "04", title: "Writer Assigned", desc: "At Tutors India we are equipped with writers who have passion towards research and associated with writing all their lives. A subject-specific expert is assigned to your project.", img: "/images/process/step-4.jpg" },
  { n: "05", title: "Edit & Proofreading", desc: "Once we receive an order from our writer, we ensure to proofread the document for grammar, syntax, clarity, and academic standard.", img: "/images/process/step-5.jpg" },
  { n: "06", title: "Requirements Check", desc: "Once your dissertation is completed we check for spelling, grammar, content, focus, sources quality against the client requirement and university guidelines.", img: "/images/process/step-6.jpg" },
  { n: "07", title: "Plagiarism Assurance", desc: "Once your dissertation is completed it is checked for plagiarism with anti-plagiarism software (Turnitin) before the delivery. We guarantee less than 5% or 0% plagiarism.", img: "/images/process/step-7.jpg" },
  { n: "08", title: "Free Appendices", desc: "We ensure not only to deliver your work but also additional reference materials, SPSS outputs, and questionnaires will be shared via Google Drive or Dropbox at no additional cost.", img: "/images/process/step-8.jpg" },
  { n: "09", title: "Download Your Order", desc: "You can download your order through our CRM and a reminder will be sent through email & SMS. An additional copy will be mailed on request.", img: "/images/process/step-9.jpg" },
  { n: "10", title: "Request Amendment", desc: "If you require any changes, you can always come back to us. We are ready to provide unlimited revisions for the concept being committed. Share comments through guidance@tutorsindia.com.", img: "/images/process/step-10.jpg" },
  { n: "11", title: "Unlimited Revisions", desc: "Since research can be viewed in different directions, we offer unlimited revision support for the concept being accepted — completely free of cost even after project completion.", img: "/images/process/step-11.jpg" },
  { n: "12", title: "Changes Implemented", desc: "The document will be shared to your writer and once the work is completed, we will share you the complete revised work through email or you can download it from the CRM.", img: "/images/process/step-12.jpg" },
];

const testimonials = [
  {
    quote: "I used to use another service, but I usually received poorly written papers and overpaid for it. I made my decision after discovering your service and receiving a superb dissertation from you. Thank you very much.",
    author: "C S",
    location: "Sheffield, UK",
    avatar: "/images/testimonials/user-profile.png",
  },
  {
    quote: "My friend recommended that I use your service just when I was about to give up on my dissertation. Because I was trapped and didn't know what to do, the suggestion came at a good moment. I'm now a PhD holder, and I'm overjoyed about it. Thank you for your help.",
    author: "Ishani",
    location: "",
    avatar: "/images/testimonials/Sahana.jpg",
  },
  {
    quote: "I knew dissertation writing was way more difficult in the higher studies. But when it came to my research paper that was to be handed in in 72 hours, I had no variants. I made the right choice when I ordered my paper from Tutors India and I'll definitely use your services in the future.",
    author: "Olivia",
    location: "UK",
    avatar: "/images/testimonials/t08.jpg",
  },
  {
    quote: "Great service for non-native English writing authors! Tutors India's dissertation writing service helps me to formulate my ideas in more clear and straight forward way and to eliminate common grammatical errors. Moreover, the results are delivered in time and for very reasonable price. I am satisfied with the overall experience. Thanks a lot.",
    author: "Ryan",
    location: "",
    avatar: "/images/testimonials/t21.jpg",
  },
  {
    quote: "The dissertation presented by you for the project is truly commendable. I really appreciate your efforts and professionalism by which you have completed the project well on time. I once again, would like to thank you and congratulate you for your hard work and dedication. I'll definitely refer to my friends who struggle in writing the dissertation.",
    author: "Aryaman",
    location: "",
    avatar: "/images/testimonials/t13.jpg",
  },
];

const subjects = [
  ["Arts & Humanities", "/subjects/arts-humanities-academic-writing-help/"],
  ["Biological Sciences", "/subjects/biological-life-science-academic-writing-help/"],
  ["Business & Management Studies", "/subjects/business-management-studies-academic-writing-help/"],
  ["Marketing & Communication", "/subjects/business-management-studies-academic-writing-help/"],
  ["Engineering & Technology", "/subjects/engineering-technology-academic-writing/"],
  ["Natural Sciences & Mathematics", "/subjects/engineering-technology-academic-writing/"],
  ["Economics & Administration", "/subjects/economics-finance-academic-writing-help/"],
  ["Humanities & Social Science", "/subjects/arts-humanities-academic-writing-help/"],
  ["Law", "/subjects/academic-law-ug-masters-phd-writing-help/"],
  ["Medicine & Health", "/subjects/medicine-health-science-academic-writing/"],
  ["Education & Training", "/subjects/business-management-studies-academic-writing-help/"],
  ["Journalism & Media", "/subjects/arts-humanities-academic-writing-help/"],
  ["Agriculture & Forestry", "/subjects/arts-humanities-academic-writing-help/"],
  ["Computer Science & IT", "/subjects/computer-science-information-technology-academic-writing/"],
  ["Hospitality, Leisure & Sports", "/subjects/business-management-studies-academic-writing-help/"],
  ["Biological & Life Science", "/subjects/biological-life-science-academic-writing-help/"],
];

const freeDeliverables = [
  "Research articles used in your dissertation (PDF format)",
  "Questionnaire or Interview guide development",
  "Primary research output without data",
  "SPSS / SAS / R software output files",
  "Abstract or Executive Summary",
  "Redrawn graphs, tables and figures",
  "Appendices (Appendix A, B, C…)",
  "Turnitin plagiarism report",
  "Formatting and referencing included",
  "Free tutoring sessions on the work delivered",
];

export default function MastersDissertationPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: "linear-gradient(135deg, #1a2a6c 0%, #2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Breadcrumb */}
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>
            {" / "}
            <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>
            {" / "}
            <span style={{ color: "#fff" }}>Masters Dissertation Writing Services</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
            <div>
              <h1 style={{ fontFamily: "Merriweather, serif", fontSize: "clamp(1.6rem,3vw,2.3rem)", lineHeight: 1.3, marginBottom: "16px" }}>
                Are you looking for UK Master's and MBA Dissertation Writing or Tutoring Help?
              </h1>
              <p style={{ fontSize: "1rem", color: "#c5d5f0", marginBottom: "10px", lineHeight: 1.75 }}>
                Tutors India provides dissertation writing and tutoring assistance exclusively for UK and Australian universities. The US &amp; UK writers at Tutors India aim at inculcating knowledge within students and build a great confidence to submit their dissertation successfully.
              </p>
              <p style={{ fontSize: "0.92rem", color: "#a0b8e0", marginBottom: "26px" }}>
                We make difference in terms of deadline and overall grade.
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link href="/order-now/" style={{ padding: "12px 30px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "0.95rem" }}>
                  Place an Order
                </Link>
                <a href="https://www.tutorsindia.com/wp-content/uploads/2021/11/Master-Dissertation.pdf" target="_blank" rel="noopener noreferrer"
                  style={{ padding: "12px 30px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, fontSize: "0.95rem" }}>
                  📄 Download Brochure
                </a>
              </div>
            </div>

            {/* Hero badge */}
            <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px 28px", textAlign: "center", minWidth: "190px" }} className="hero-badge">
              <img src="/tutorsindia-logo-hd.jpg" alt="Tutors India" style={{ width: "90px", height: "90px", objectFit: "contain", marginBottom: "10px" }} />
              <div style={{ fontSize: "0.82rem", color: "#c5d5f0", lineHeight: 1.6 }}>Trusted Academic<br />Writing &amp; Editing<br />Services Since 2001</div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      {/* ── STATS BAR ── */}
      <div style={{ background: "#12214a", padding: "18px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "32px", flexWrap: "wrap", justifyContent: "center" }}>
          {[
            { n: "2000+", l: "Expert Writers" },
            { n: "2,00,000+", l: "Scholars Served" },
            { n: "22+", l: "Years Experience" },
            { n: "8,000–30,000", l: "Words Handled" },
            { n: "< 5%", l: "Plagiarism" },
            { n: "30 min", l: "Response Time" },
          ].map((s) => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.15rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
              <div style={{ fontSize: "0.7rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── INTRO SECTION ── */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "56px 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start" }} className="two-col-grid">
          <div>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>
              Post Graduate / Master's Dissertation Writing Service
            </h2>
            <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "14px", fontSize: "0.95rem" }}>
              Tutors India has skilled and talented professional UK writers who work with your UK Master's and MBA projects and assist you at all the stages of your UK MBA dissertation writing either online or email based. They assist you 24/7 and provide evidence that we deliver what exactly you expect.
            </p>
            <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "14px", fontSize: "0.95rem" }}>
              Our team of UK dissertation writing experts consists of experienced professionals who are holding at least a Master's degree and also Ph.D. holders from the prestigious universities from the UK, US, and Australia, who can help you in writing any dissertation whether it is science or management or computer science or Engineering or environmental science.
            </p>
            <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "20px", fontSize: "0.95rem" }}>
              Tutors India has in-house internal committee consisting of UK and US based Ph.D. holders, research advisors, postdoctoral fellows and M.D holding Ph.D. with rich experience in research. Some of our writers are trained at Harvard School, Oxford, London School of Business, and the University of Birmingham.
            </p>
            <Link href="/about-us/" style={{ padding: "10px 24px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 600, fontSize: "0.9rem", display: "inline-block" }}>
              About Us →
            </Link>
          </div>

          <div>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>
              We just don't provide writing assistance — we also provide Tutoring
            </h2>
            <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "14px", fontSize: "0.95rem" }}>
              Given that dissertation plays a significant role in completing the UK university degree, at Tutors India, we offer both tutoring and writing services. We not only provide you writing assistance but also tutor you at every stage on how we proceeded with the dissertation along with the keywords strategy used.
            </p>

            <img
              src="/images/services/dissertation-features.jpg"
              alt="Dissertation Writing Service Features"
              style={{ width: "100%", borderRadius: "8px", marginBottom: "14px", objectFit: "cover" }}
              loading="lazy"
            />

            <div style={{ background: "#fff8f0", border: "1px solid #fde8cc", borderLeft: "4px solid #e87722", borderRadius: "0 8px 8px 0", padding: "14px 18px", fontSize: "0.88rem", color: "#555" }}>
              <strong style={{ color: "#1a2a6c" }}>Why Tutors India?</strong> — Our unique approach has helped hundreds of scholars to complete and submit their UK MBA and Master's dissertation across the globe successfully. Our exclusive Masters dissertation writing service is exclusively for UK and Australian universities.
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section style={{ background: "#f5f6fa", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.7rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "8px" }}>
              What Services do we offer under Masters Dissertation?
            </h2>
            <p style={{ color: "#666", fontSize: "0.95rem" }}>Complete support from topic selection to final submission</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }} className="services-grid">
            {services.map((svc) => (
              <div key={svc.href} style={{ background: "#fff", borderRadius: "10px", padding: "22px", border: "1px solid #dde2ef", display: "flex", gap: "16px", alignItems: "flex-start", transition: "box-shadow 0.2s" }}>
                <div style={{ fontSize: "2rem", flexShrink: 0, width: "44px", height: "44px", background: "#e8f0fb", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {svc.icon}
                </div>
                <div>
                  <Link href={svc.href}>
                    <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{svc.title}</h3>
                  </Link>
                  <p style={{ fontSize: "0.85rem", color: "#666", lineHeight: 1.6, marginBottom: "8px" }}>{svc.desc}</p>
                  <Link href={svc.href} style={{ fontSize: "0.82rem", color: "#e87722", fontWeight: 600 }}>Learn More →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.services-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ── RESEARCH METHODOLOGY ── */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "56px 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start" }} className="two-col-grid">
          <div>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>
              Your Choice of Primary or Secondary Research
            </h2>
            <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "14px", fontSize: "0.93rem" }}>
              Choice of data collection depends on the research design (quantitative or qualitative design). Tutors India helps in survey tool validation and also online and face to face data collection process.
            </p>
            <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "16px", fontSize: "0.93rem" }}>
              We help you to conduct surveys including: in person Interviews (formal to informal; structured to unstructured); focus group discussion; observations; self-administered questionnaire; diaries; Delphi techniques; expert judgment; online surveys; and secondary sources such as journals, newspaper articles, annual reports, government sources such as census, budgets, policies, procedures, etc.
            </p>
            <img
              src="/images/services/primary-secondary-research.webp"
              alt="Primary or Secondary Research"
              style={{ width: "100%", borderRadius: "8px", objectFit: "cover" }}
              loading="lazy"
            />
          </div>

          <div>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>
              Quantitative, Qualitative or Triangulation Methodologies
            </h2>
            <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "14px", fontSize: "0.93rem" }}>
              We are completely aware of the way and difference in the methodology section being written for management and health care or economics. Every discipline has its structure of methodologies and therefore Tutors India provides consultation and writing services for your research methodology using our subject matter expertise.
            </p>
            <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "14px", fontSize: "0.93rem" }}>
              We offer a wide range of dissertation research methodology writing services — either being qualitative methods, quantitative research methods, a combination of both, or critical and action oriented. Our writers are well experienced in handling any methodology across the discipline.
            </p>

            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Development of Questionnaire or Interview Questions</h3>
            <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "14px", fontSize: "0.93rem" }}>
              At Tutors India, we assist you in developing questionnaires — Open ended, closed ended, Objective questionnaire, structured and unstructured questionnaire, focus group guide, interview guide for all your research work.
            </p>
            <img
              src="/images/services/questionnaire.jpg"
              alt="Development of Questionnaire"
              style={{ width: "100%", borderRadius: "8px", objectFit: "cover" }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── FEATURES GRID ── */}
      <section style={{ background: "#f5f6fa", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.7rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "8px" }}>
              Our Master's Dissertation Writing Service Features
            </h2>
            <p style={{ color: "#666", fontSize: "0.95rem" }}>Why Tutors India is the most trusted dissertation writing service</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }} className="three-col-grid">
            {features.map((f) => (
              <div key={f.title} style={{ background: "#fff", borderRadius: "10px", padding: "22px", border: "1px solid #dde2ef" }}>
                <div style={{ fontSize: "2rem", marginBottom: "10px" }}>{f.icon}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "8px" }}>{f.title}</h3>
                <p style={{ fontSize: "0.84rem", color: "#666", lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FREE DELIVERABLES + EXPERT TEAM ── */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "56px 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "start" }} className="two-col-grid">
          <div>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>
              Get Our Service Features at Free of Cost
            </h2>
            <p style={{ color: "#555", lineHeight: 1.75, marginBottom: "16px", fontSize: "0.93rem" }}>
              We share references sourced for your dissertation in the form of PDFs, questionnaire or interview guide and primary research output without data at free of cost. Appendices are also provided at no additional cost.
            </p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {freeDeliverables.map((item) => (
                <li key={item} style={{ display: "flex", gap: "10px", padding: "9px 0", borderBottom: "1px solid #eef0f8", fontSize: "0.88rem", color: "#555" }}>
                  <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "28px" }}>
            <h2 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "12px" }}>
              Your Dissertation is Written by Your Choice of Subject Matter Expertise
            </h2>
            <p style={{ color: "#c5d5f0", fontSize: "0.88rem", lineHeight: 1.7, marginBottom: "16px" }}>
              We have a team of <strong style={{ color: "#f9c74f" }}>2000+</strong> expertise across the subjects &amp; countries including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine.
            </p>
            <ul style={{ listStyle: "none", padding: 0, marginBottom: "20px" }}>
              {[
                "PhD & Masters degree holders",
                "Trained at Harvard, Oxford, London Business School",
                "Minimum 5 years research experience",
                "NDA-signed and background-checked",
                "Subject-specific allocation for every project",
                "Arts, Sciences, Engineering, Management, Medicine & more",
                "24/7 availability across all time zones",
              ].map((item) => (
                <li key={item} style={{ display: "flex", gap: "8px", padding: "7px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", fontSize: "0.85rem", color: "#c5d5f0" }}>
                  <span style={{ color: "#f9c74f", flexShrink: 0 }}>→</span> {item}
                </li>
              ))}
            </ul>
            <Link href="/our-sample-works/" style={{ display: "block", textAlign: "center", padding: "11px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.04em" }}>
              View Our Exclusive Sample Works
            </Link>
          </div>
        </div>
      </section>

      {/* ── SUBJECTS ── */}
      <section style={{ background: "#f5f6fa", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", fontWeight: 700, color: "#1a2a6c", textAlign: "center", marginBottom: "28px" }}>
            Subject Specialisations We Cover
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
            {subjects.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                style={{ padding: "7px 16px", background: "#fff", border: "1.5px solid #dde2ef", borderRadius: "20px", fontSize: "0.83rem", color: "#1a2a6c", fontWeight: 500, transition: "all 0.15s" }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ORDER PROCESS (12 steps) ── */}
      <section style={{ padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.7rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "8px" }}>
              Order Process — Have a look at what makes us the best
            </h2>
            <p style={{ color: "#666", fontSize: "0.95rem" }}>Simple, transparent 12-step process from enquiry to delivery</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }} className="process-four-grid">
            {processSteps.map((step) => (
              <div key={step.n} style={{ background: "#fff", borderRadius: "10px", border: "1px solid #dde2ef", overflow: "hidden", textAlign: "center" }}>
                <div style={{ background: "#1a2a6c", padding: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img
                    src={step.img}
                    alt={step.title}
                    style={{ width: "52px", height: "52px", objectFit: "contain" }}
                    loading="lazy"
                  />
                </div>
                <div style={{ padding: "14px" }}>
                  <div style={{ fontSize: "0.72rem", color: "#e87722", fontWeight: 700, letterSpacing: "0.06em", marginBottom: "4px" }}>STEP {step.n}</div>
                  <h4 style={{ fontSize: "0.88rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{step.title}</h4>
                  <p style={{ fontSize: "0.78rem", color: "#666", lineHeight: 1.55 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "8px" }}>Invest in your Career</h3>
            <p style={{ color: "#666", marginBottom: "16px", fontSize: "0.95rem" }}>Place Your Order Today</p>
            <Link href="/order-now/" style={{ padding: "13px 40px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "1rem" }}>
              Order Now
            </Link>
          </div>
        </div>
        <style>{`@media(max-width:900px){.process-four-grid{grid-template-columns:repeat(3,1fr)!important;}} @media(max-width:600px){.process-four-grid{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ background: "#f5f6fa", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.7rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "8px" }}>
              Client Voice
            </h2>
            <p style={{ color: "#666", fontSize: "0.95rem" }}>What our scholars say about Tutors India</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }} className="testimonial-grid">
            {testimonials.map((t, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: "10px", padding: "22px", border: "1px solid #dde2ef" }}>
                <div style={{ color: "#e87722", fontSize: "2.5rem", lineHeight: 1, marginBottom: "8px", fontFamily: "serif" }}>&ldquo;</div>
                <p style={{ color: "#555", fontSize: "0.87rem", lineHeight: 1.7, fontStyle: "italic", marginBottom: "16px" }}>{t.quote}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <img
                    src={t.avatar}
                    alt={t.author}
                    style={{ width: "44px", height: "44px", borderRadius: "50%", objectFit: "cover", border: "2px solid #dde2ef" }}
                    loading="lazy"
                  />
                  <div>
                    <div style={{ fontWeight: 700, color: "#1a2a6c", fontSize: "0.88rem" }}>{t.author}</div>
                    {t.location && <div style={{ fontSize: "0.76rem", color: "#888" }}>{t.location}</div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "28px" }}>
            <Link href="/testimonials/" style={{ padding: "10px 28px", border: "2px solid #1a2a6c", color: "#1a2a6c", borderRadius: "5px", fontWeight: 600, fontSize: "0.9rem" }}>
              View All Testimonials →
            </Link>
          </div>
        </div>
        <style>{`@media(max-width:900px){.testimonial-grid{grid-template-columns:1fr 1fr!important;}} @media(max-width:500px){.testimonial-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ── ADDITIONAL FEATURES (Authenticated References etc) ── */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "56px 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "28px", textAlign: "center" }}>
          Our Commitment to Quality
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px" }} className="three-col-grid">
          {[
            {
              icon: "📎",
              title: "Authenticated References",
              desc: "All our research writing, editing, and rewriting services are fully referenced and cited academically using the style guide provided by the university. We reference all paraphrased materials and quotes, providing both in-text and reference list citations covering books, journal articles, electronic sources, web documents, interviews, and more.",
            },
            {
              icon: "🛡️",
              title: "Plagiarism Free Guarantee",
              desc: "We ensure that the document is less than 5% or 0% plagiarism. We correct all errors in grammar, syntax, and usage. We paraphrase the content using our own words, re-reading the original article, summarising, digesting and explaining through our own words — evaluating limitations and strengths of arguments across multiple authors.",
            },
            {
              icon: "🔁",
              title: "Unlimited Revision Support",
              desc: "We consult researchers on how to handle the research work in every step — when choosing a topic, framing the right methodology, collecting the data, and every such step, which no other service provider does. We provide unlimited revisions absolutely free of cost as per the commitment made by us, even after the project is completed.",
            },
          ].map((item) => (
            <div key={item.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "22px" }}>
              <div style={{ fontSize: "2rem", marginBottom: "10px" }}>{item.icon}</div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "8px" }}>{item.title}</h3>
              <p style={{ fontSize: "0.84rem", color: "#666", lineHeight: 1.65 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 700, marginBottom: "10px" }}>
          Invest in your Career — Place Your Order Today
        </h2>
        <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.88)", marginBottom: "8px" }}>
          Join 2,00,000+ scholars who have trusted Tutors India since 2001.
        </p>
        <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.72)", marginBottom: "26px" }}>
          Response within 30 minutes · Plagiarism-Free · Unlimited Revisions · On-Time Delivery
        </p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "13px 36px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700, fontSize: "1rem" }}>
            Order Now
          </Link>
          <Link href="/contact-us/" style={{ padding: "13px 36px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "1rem" }}>
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
