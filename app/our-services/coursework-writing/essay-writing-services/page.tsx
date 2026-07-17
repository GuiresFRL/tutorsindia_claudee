import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "Expert Master’s Custom Essay Writing Services in UK, UAE",
  description: "Get Master's Custom Essay Writing Services in UK & UAE for students facing low grades, deadline pressure, plagiarism, and urgent academic support.",
  keywords: "Custom Essay Writing Services, Essay Writing Services in UK, MBA Essay Writing Services in UK, Academic Essay Writing Services in UK, Best Essay Writing Services in UK, Master's Essay Writing Services in UK, Essay Writing Support in UK, Essay Writing Help in UAE, MBA Essay Writing Help in UAE, Academic Essay Writing Help in UAE, Best Essay Writing Help in UAE, Master's Essay Writing Services in UAE, Master's Essay Writing Help in UAE.",
  alternates: { canonical: "https://tutorsindia.com/our-services/coursework-writing/essay-writing-services/" },
};

const faqs = [
  {
    q: "What does your MBA Essay Writing Service include?",
    a: "Our service covers every stage of essay development, from topic selection and research to writing, editing, and proofreading. We ensure that each essay is tailored to your university requirements and assessment criteria. Proper formatting and referencing are also included. The final document is delivered ready for submission.",
  },
  {
    q: "Are the essays customized according to my requirements?",
    a: "Yes, every essay is written exclusively for your academic needs. Our writers follow your instructions, university guidelines, and marking rubrics to create relevant content. We also consider your preferred reference style and specific objectives. This ensures a personalized and high-quality academic solution.",
  },
  {
    q: "How do you ensure originality in MBA essays?",
    a: "All essays are developed from scratch using credible academic sources and independent research. We follow strict plagiarism-free writing practices and avoid recycled content. Each assignment is reviewed for originality before delivery. This helps maintain academic integrity and university compliance.",
  },
  {
    q: "Can you handle urgent MBA essay deadlines?",
    a: "Yes, we provide support for both standard and urgent deadlines. Our academic experts work efficiently to deliver quality essays within the required timeframe. Even for short deadlines, we maintain high standards of research and writing. Timely delivery remains one of our top priorities.",
  },
  {
    q: "Is my personal and academic information secure?",
    a: "Absolutely. We maintain strict confidentiality and data protection measures for all clients. Your personal information, project details, and communication remain secure throughout the process. We never share your data with third parties. Your privacy is always protected.",
  },
  {
    q: "Do you offer revisions if changes are required?",
    a: "Yes, we provide revision support to ensure your essay meets your expectations. If any modifications are required based on the original instructions, our team will address them promptly. We aim to deliver work that aligns with your academic requirements. Student satisfaction is our priority.",
  },
];

const testimonials = [
  {
    quote: "Whether you believe it or not, I am completely delighted with the essay you wrote for me. I received a wonderful grade, and I am now certain that your promises are true. Tutors India, thank you.",
    author: "Dr. Declan O'Connell, MD, PhD",
    avatar: "/images/testimonials/t1.jpg",
  },
  {
    quote: "I have tried a few essay writing services but the others do not operate on the same level as Tutors India. This company provides not only great writing but great service. I love how easy it is to order essays and manage my files on their website. Thank you Tutors India for your excellent services. Great job!",
    author: "Eeshan",
    avatar: "/images/testimonials/t2.jpg",
  },
  {
    quote: "Excellent writing service with translation and editing. I want to thank the writers as without their hard work, it would have been really difficult to quickly get my essay completed. It was a pleasure to work with them. I appreciate their professionalism and thank them for the perfect services offered to me. I look forward for working with Tutors India for all my future assignments.",
    author: "Anay",
    location: "US",
    avatar: "/images/testimonials/t3.jpg",
  },
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies",
  "Marketing & Communication", "Engineering & Technology", "Natural Sciences & Mathematics",
  "Biological & Life science", "Economics & Administration", "Humanities & Social Science",
  "Law", "Medicine & Health", "Education & Training",
  "Journalism & Media", "Agriculture & Forestry", "Computer Science & IT",
  "Hospitality, Leisure & Sports",
];

export default function EssayWritingServicesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}
            <Link href="/our-services/coursework-writing/" style={{ color: "#a0b8e0" }}>Coursework Writing</Link>{" / "}
            <span style={{ color: "#fff" }}>Essay Writing Services</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.4rem,3vw,2rem)", lineHeight: 1.3, marginBottom: "16px" }}>
            Custom Essay Writing Services for Academic Success in the UK and UAE
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
            Are you finding it difficult to cope with your essay deadlines, research assignments, and academic pressures at your university? If so, then consider turning to Tutors India, which provides expert academic writing assistance to help students who are studying for a Master's or MBA degree course in the UK or UAE.
          </p>
          <p style={{ color: "#f9c74f", fontSize: "1.05rem", fontWeight: 700, marginBottom: "20px" }}>
            This is the time to approach us at Tutors India and get professional help with essay writing tailored to meet your needs as a student in UK &amp; UAE. Our essays are carefully researched and critically analyzed with credible academic sources and arguments.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, textDecoration: "none" }}>Place an Order</Link>
            <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, textDecoration: "none" }}>Contact Us</Link>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>

        {/* Supporting Master's Students */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Supporting master's Students with Research-Based Academic Writing Support</h2>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
            Master's degree level essays need high-level research skills and analysis as well. Our postgraduate-level assistance ensures essays meet university standards through expert research, critical analysis, and academic rigor tailored specifically for your course requirements.
          </p>
        </div>

        {/* Perfectly Structured Essays */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Perfectly Structured Essays Designed to Meet University Criteria</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              "Has been written with the university assessment criteria in mind",
              "A well thought out and evaluated piece of work",
              "Supported by reliable academic sources",
              "Proper citations have been made",
              "Consistent with the academic level of postgraduate studies",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "12px", alignItems: "center", background: "#fff", border: "1px solid #dde2ef", borderRadius: "8px", padding: "12px 16px" }}>
                <div style={{ width: "26px", height: "26px", background: "#e87722", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "0.8rem", flexShrink: 0 }}>✓</div>
                <span style={{ fontSize: "0.94rem", color: "#555" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* UK Essay Writing Service */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>UK Essay Writing Service Tailored to Every Academic Level</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "1rem" }}>
            Our essay writing service follows a structured methodology including extensive research, sources analysis, note-making, outline creation, composition and editing. Services span psychology, marketing, accounting, and other disciplines across undergraduate through PhD levels.
          </p>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Best Essay Writing Services in UK – For Excellence in Academic Essays</h2>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
            In addition to being able to write an academic essay well, other things are also required. Writing requirements include analytical discussion, deep research, critical thinking, and proper academic structure using credible scholarly references.
          </p>
        </div>

        {/* Service Tiers */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>What Services Do We Offer Under Our Essay Writing Service?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
            {[
              { tier: "Basic", color: "#e0e7ff", border: "#b0bfff", desc: "Essays constructed out of quality academic sources, showing knowledge on the topic and basic critical analysis." },
              { tier: "Advanced", color: "#fff3e0", border: "#ffd0a0", desc: "Extensive research and literature with identification of the core issues and good analysis according to university standards." },
              { tier: "Premium", color: "#e8f5e9", border: "#a5d6a7", desc: "Conscientious academic writing includes complex critical analysis and evidence-based arguments." },
            ].map(t => (
              <div key={t.tier} style={{ background: t.color, border: `1px solid ${t.border}`, borderRadius: "10px", padding: "20px" }}>
                <div style={{ fontFamily: "Merriweather,serif", fontWeight: 700, fontSize: "1.05rem", color: "#1a2a6c", marginBottom: "10px" }}>{t.tier}</div>
                <p style={{ fontSize: "0.85rem", color: "#444", lineHeight: 1.7, margin: 0 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Tier Comparison Table */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px", overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
            <thead>
              <tr style={{ background: "#1a2a6c", color: "#fff" }}>
                <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 700 }}>Feature</th>
                <th style={{ padding: "12px 16px", textAlign: "center", fontWeight: 700 }}>Basic</th>
                <th style={{ padding: "12px 16px", textAlign: "center", fontWeight: 700 }}>Advanced</th>
                <th style={{ padding: "12px 16px", textAlign: "center", fontWeight: 700 }}>Extended</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: "Number of Topics (Topic Selection based on area of interest)", basic: "3 Topics", advanced: "1 Topic", extended: "1 Topic" },
                { feature: "Word Count", basic: "1000 words", advanced: "1000 words", extended: "" },
                { feature: "Objectives", basic: "✓", advanced: "✓", extended: "✓" },
                { feature: "Literature Review", basic: "✓", advanced: "✓", extended: "✓" },
                { feature: "Research Gap", basic: "✓", advanced: "✓", extended: "✓" },
                { feature: "Expected Contribution", basic: "✓", advanced: "✓", extended: "✓" },
                { feature: "Research Methodology", basic: "✓", advanced: "✓", extended: "✓" },
                { feature: "Data Analysis Guidelines", basic: "✓", advanced: "✓", extended: "✓" },
                { feature: "References Lists", basic: "✓", advanced: "✓", extended: "✓" },
                { feature: "Bibliography (Additional Reading)", basic: "✓", advanced: "✓", extended: "✓" },
              ].map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#f8f9ff" : "#fff", borderBottom: "1px solid #dde2ef" }}>
                  <td style={{ padding: "10px 16px", color: "#333", fontWeight: 500 }}>{row.feature}</td>
                  <td style={{ padding: "10px 16px", textAlign: "center", color: "#555" }}>{row.basic}</td>
                  <td style={{ padding: "10px 16px", textAlign: "center", color: "#555" }}>{row.advanced}</td>
                  <td style={{ padding: "10px 16px", textAlign: "center", color: "#555" }}>{row.extended}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* MBA + UAE sections */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Strategic Academic Support for MBA Students</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "18px", fontSize: "1rem" }}>
            Our MBA Essay Writing Services in UK for academic writing assistance for MBA students help them exhibit strategic thinking. Services emphasize management theories and industry-based insights for business-focused coursework. Our experts help students connect theoretical frameworks with real-world business scenarios to meet the high expectations of MBA programmes.
          </p>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Academic Writing Support for Students in the UAE</h2>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
            Share your academic requirements, university guidelines, and deadlines with us for customized essay assistance. Our team of experienced academic writers is ready to support students in the UAE with research-based, properly referenced essays that meet international university standards.
          </p>
        </div>

        {/* What You Will Receive + Process */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Where Knowledge of Your Subject Meets Academic Success</h2>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700, color: "#e87722", marginBottom: "10px" }}>Your Trusted Partner in Academic Excellence</h3>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "18px", fontSize: "1rem" }}>
            We offer custom essays based on research to suit all your subject-specific requirements through experienced academic professionals. With 2,000+ academic writers all around the world, we provide expertise in fields like Arts, Literature, Science, Engineering, Medicine, and much more.
          </p>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>What You Will Receive from Us for Your Essay Writing Assistance</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "18px", fontSize: "1rem" }}>
            Students will be offered academically oriented material that is well-researched through the use of credible scholarly sources, correct citations, structured argumentation, analysis, and quality control.
          </p>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Our Essay Writing Process</h2>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", fontWeight: 700, color: "#e87722", marginBottom: "10px" }}>Discover Our Process</h3>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
            Provide us with all the information concerning your essay, and we will conduct the research, write your essay, and review your essay in the process. Postgraduate academic assistance from us is intended to assist students in handling the intricacies of university expectations by means of structured research and essay development.
          </p>
        </div>

        {/* Essay Structure */}
        <div style={{ background: "#fff8f0", border: "1px solid #f5d9bb", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Structure of Our Essay Writing Services</h2>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.15rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>What Is Included in Your Essay?</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              "Introduction – stating the topic and objectives of the paper",
              "Essay's main body which is organized with the help of critical thinking and substantiated by evidence",
              "Conclusion containing the summary of the essay findings",
              "Bibliography prepared and formatted according to university guidelines",
              "Essay Written Based on Academic Research and Critical Thinking",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "12px", background: "#fff", border: "1px solid #f5d9bb", borderRadius: "8px", padding: "14px", alignItems: "flex-start" }}>
                <div style={{ width: "28px", height: "28px", background: "#1a2a6c", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "0.78rem", flexShrink: 0, marginTop: "1px" }}>{i + 1}</div>
                <p style={{ fontSize: "0.94rem", color: "#555", lineHeight: 1.65, margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>

          {/* Feature quality cards */}
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.15rem", fontWeight: 700, color: "#1a2a6c", margin: "20px 0 12px" }}>Essay Written Based on Academic Research and Critical Thinking</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "14px" }} className="two-col-grid">
            {[
              { t: "Well-Structured Academic Essays", d: "Every essay is developed with a clear introduction, logically organized body paragraphs, a concise conclusion, and a properly formatted bibliography that aligns with your university's academic and referencing guidelines." },
              { t: "Research-Driven and Critically Developed Content", d: "Our essays are based on extensive academic research, credible scholarly sources, and critical analysis to present well-supported arguments, demonstrate subject knowledge, and meet the required learning outcomes." },
            ].map(f => (
              <div key={f.t} style={{ background: "#fff", border: "1px solid #f5d9bb", borderRadius: "10px", padding: "18px" }}>
                <h3 style={{ fontSize: "0.96rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{f.t}</h3>
                <p style={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.65, margin: 0 }}>{f.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Plagiarism + Professional Writing */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Original Essays Free of Plagiarism Based on Academic Sources</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "18px", fontSize: "1rem" }}>
            We are proud of having strict anti-plagiarism policies. All the essays we write are written based on academic sources and cited appropriately. Each assignment is reviewed for originality before delivery, maintaining academic integrity and university compliance.
          </p>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Essays Professionally Written Based on Research and Criticism</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "18px", fontSize: "1rem" }}>
            We provide academic writing help that will enable students to come up with essays that have research-based arguments and discussions and proper structure and integrity.
          </p>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Why Choose our Essay Writing Services UAE?</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "16px", fontSize: "1rem" }}>
            Apart from academic writing, we provide a wide variety of other quality-focused services which consist of research help, academic editing, plagiarism checker services, and student guidance throughout the entire process. Our Essay Writing Services in UAE come along with such perks as availability of qualified writers, guarantee of quality, revisions, and customized assistance at the academic level.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "16px" }} className="two-col-grid">
            {[
              { t: "Custom Written Essays", d: "Enjoy custom-made research papers that are written exclusively keeping in mind your university guidelines." },
              { t: "Quality Guarantee", d: "All essays are checked for their quality so that you receive an error-free paper." },
              { t: "Originality Reports", d: "All your papers are checked for plagiarism to ensure that they are delivered only after they pass all checks." },
              { t: "Student Assistance", d: "Maintain constant communication with our academic experts at any stage of the assignment." },
            ].map(f => (
              <div key={f.t} style={{ background: "#f8f9ff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px", display: "flex", gap: "12px" }}>
                <div style={{ width: "34px", height: "34px", background: "#e87722", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "0.85rem", flexShrink: 0, marginTop: "2px" }}>✓</div>
                <div>
                  <h3 style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{f.t}</h3>
                  <p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.65, margin: 0 }}>{f.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features List */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Essay Writing Services that Guarantee Your Academic Success!</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "10px" }} className="two-col-grid">
            {[
              "100% custom-written, plagiarism-free papers.",
              "Unlimited revision service provided.",
              "Academic writing assistance.",
              "All orders are written from scratch.",
              "The final draft is scanned for plagiarism and then submitted to you.",
              "Supported by credible scholarly sources.",
              "We deliver our orders well within time.",
              "Constant updates about the progress of the order.",
              "Quick responses to the questions/queries raised.",
              "MBA Essay Writing Service in UAE uses experienced professional writers.",
              "They possess the relevant expertise and knowledge.",
              "Customized according to your topic.",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start", background: "#fff", border: "1px solid #dde2ef", borderRadius: "8px", padding: "10px 14px" }}>
                <div style={{ width: "22px", height: "22px", background: "#1a2a6c", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "0.75rem", flexShrink: 0, marginTop: "1px" }}>✓</div>
                <span style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.55 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantees */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>Our Guarantees</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "16px" }} className="two-col-grid">
            {[
              { t: "Complete Confidentiality", d: "All your academic/personal information is kept completely confidential. Your work and documents are managed in total confidentiality. Total confidentiality is ensured from the initial stages until final submission." },
              { t: "Proper Referencing", d: "Citation styles are followed as per required guidelines of universities. We rely on scholarly journals, online databases, and books and ensure correct citation style in all orders." },
              { t: "Plagiarism-Free Content", d: "We follow strict anti-plagiarism policies. All essays are written based on academic sources and cited appropriately, reviewed for originality before delivery to maintain academic integrity." },
              { t: "Timely Delivery", d: "We deliver our orders well within time. Even for urgent deadlines, we maintain high standards of research and writing. Timely delivery remains one of our top priorities." },
              { t: "Experienced Writers", d: "MBA Essay Writing Service in UAE uses experienced professional writers who possess the relevant expertise and knowledge, customized according to your topic and university requirements." },
              { t: "Unlimited Revisions", d: "We provide revision support to ensure your essay meets your expectations. If any modifications are required based on the original instructions, our team will address them promptly." },
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
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Academic Excellence with the Benefit of Global Expertise in Various Subjects</h2>
          <p style={{ color: "#666", fontSize: "0.96rem", marginBottom: "14px" }}>Tutors India has the capability to cater to many different subjects in the academic world. With 2,000+ academic writers all around the world, we can provide expertise in fields like Arts, Literature, Science, Engineering, Medicine, and much more.</p>
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
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", color: "#fff", marginBottom: "10px" }}>Get Expert Essay Writing Support Today</h2>
          <p style={{ color: "#c5d5f0", marginBottom: "20px", fontSize: "0.95rem" }}>Professional essay writing assistance for Master's and MBA students in the UK &amp; UAE</p>
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
