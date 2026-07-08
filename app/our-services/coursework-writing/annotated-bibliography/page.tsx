import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "UK Annotated Bibliography Writing Services",
  description: "UK Annotated Bibliography Writing Help. Summary, Critical Evaluation, and Mixed annotations. APA, MLA, Chicago. 8000+ annotated bibliographies completed. Tutors India.",
};

const annotationTypes = [
  {
    icon: "📄",
    title: "Summary Annotation",
    desc: "Summarises source content providing argument overview without judgment. Two kinds exist:",
    subtypes: [
      { name: "Informative", desc: "Summarises the content — what the source says." },
      { name: "Indicative", desc: "Provides real information about the questions or issues addressed by the source." },
    ],
  },
  {
    icon: "🔍",
    title: "Critical Evaluation",
    desc: "Evaluates work critically, showing differences and current usage. Includes two phases:",
    subtypes: [
      { name: "Initial Appraisal", desc: "Author, publication date, edition, publisher, journal title — establishes authority and relevance." },
      { name: "Content Appraisal", desc: "Audience, methodology, objectives, reasoning, reliability, validity, and your personal conclusion." },
    ],
  },
  {
    icon: "🔀",
    title: "Mixed Annotation",
    desc: "Combination of Summary and Critical Evaluation — provides both an overview of the source content and your critical assessment of its value, quality, and relevance to your research.",
    subtypes: [],
  },
];

const deliverables = [
  "Bibliography content formatted per appropriate citation style (APA, MLA, Chicago)",
  "Explanation showing thorough source understanding (~150 words per source)",
  "Author qualification and authority critique",
  "Critical commentary on usefulness, effectiveness, and worth",
  "Author's point of view and bias assessment",
  "Relevance, quality, and accuracy evaluation",
  "Scope and limitations of the source identified",
  "Plagiarism-free certificate on request",
];

const citationStyles = [
  { style: "APA", full: "American Psychological Association", used: "Psychology, Education, Social Sciences" },
  { style: "MLA", full: "Modern Language Association", used: "Humanities, Literature, Languages" },
  { style: "Chicago", full: "Chicago Manual of Style", used: "History, Arts, Business" },
  { style: "Harvard", full: "Harvard Referencing", used: "UK Universities — most common" },
  { style: "Vancouver", full: "Vancouver System", used: "Medicine, Health Sciences" },
];

const qaBoxes = [
  { img: "/images/qa/Quality-Assurance.png", title: "Quality Assurance", desc: "We ensure quality at every stage and the process.", href: "/guarantees/" },
  { img: "/images/qa/Plagiarism-Report.png", title: "Plagiarism Report", desc: "We deliver the document after scanning for plagiarism.", href: "/guarantees/" },
  { img: "/images/qa/Customer-Interaction.png", title: "Customer Interaction", desc: "We interact with you at every stage for amendments, queries and delivery.", href: "/contact-us/" },
];

const faqs = [
  { q: "Why choose Tutors India for Annotated Bibliography services?", a: "Tutors India provides excellent service for all your academic Annotated Bibliography requirements. Our writers are highly experienced and professional in developing plagiarism-free and high-quality manuscripts. We have successfully completed around 8,000 annotated bibliographies and are pioneers in handling different types of annotated bibliography writing. Our experts are assigned based on your specific subject area and referencing style requirements." },
  { q: "Can the quality of the annotated bibliography be guaranteed?", a: "Yes, our annotated bibliography papers are guaranteed with exemplary writing structure, correct vocabulary, originality in the description, and precise citations. All work undergoes a three-level quality check (Technical QC, Editor QC, final requirement verification) before delivery. Less than 5% plagiarism is guaranteed and a plagiarism-free certificate is provided on request." },
  { q: "Where are your writers located?", a: "We have PhD and Masters brilliant writers from both the USA and UK. All of our writers have worked as professors in various UK, US, Australian and other top Asian universities. They have specific domain expertise and are assigned based on your subject area. Writers are selected through a stringent process including signing of non-disclosure and confidentiality agreements." },
  { q: "Can you meet tight deadlines for annotated bibliography?", a: "At Tutors India, we work with a systematic process. After getting the dissertation or bibliography task, we discuss the timeline with our writers and can offer the annotated bibliography listed in alphabetical order within your required timeframe. Minor changes are completed within 24 working hours and significant changes within 48 working hours." },
  { q: "Do you provide sample annotated bibliographies?", a: "Yes, we share some of our annotated bibliography sample works so it is easy for students to analyse the style and quality of our work. This helps you understand exactly what you will receive before placing your order. Contact us or visit our sample works page to review examples." },
  { q: "What subject areas do you cover for annotated bibliography?", a: "We cover all academic subjects including Psychology, English Essays, Marketing, Chemistry, Science, Public Health, Performance Management, Social Work, Accounting, Human Resource Management, and Law (including case law, legislation, textbooks, and journals). Our 2000+ expert team covers every major academic discipline." },
];
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  }))
};

const testimonials = [
  { quote: "Availing services from Tutors India was perhaps the best decision in my academic journey. The writers were patient and more than willing to answer all my queries. They improved the literature review to a great extent! Thank you for extraordinary work!", author: "Alexander", location: "Algeria", avatar: "/images/testimonials/t16.jpg" },
  { quote: "The attention to detail was incredible. It didn't feel like I was working with a service provider — it felt like I had an expert academic partner guiding me throughout.", author: "Layla Al Mansoori", avatar: "/images/testimonials/layla-al-mansoori.webp" },
  { quote: "I submitted my work with complete confidence for the first time ever. The quality, formatting, and clarity were all beyond what I hoped for.", author: "Charlotte Reed", location: "UK", avatar: "/images/testimonials/charlotte-reed.webp" },
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies", "Marketing & Communication",
  "Engineering & Technology", "Natural Sciences & Mathematics", "Biological & Life Science", "Economics & Administration",
  "Law", "Medicine & Health", "Education & Training", "Computer Science & IT", "Hospitality, Leisure & Sports",
];

export default function AnnotatedBibliographyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}<Link href="/our-services/coursework-writing/" style={{ color: "#a0b8e0" }}>Coursework Writing</Link>{" / "}<span style={{ color: "#fff" }}>Annotated Bibliography</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              The UK Annotated Bibliography Writing Help
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Tutors India offers annotated bibliography writing that compiles literature for extended research projects, showcasing mastery of background including contextual, critical, and theoretical evidence. Written in British English with accurate comprehensive referencing per university requirements.
            </p>
            <p style={{ color: "#f9c74f", fontSize: "0.92rem", fontWeight: 600, marginBottom: "24px" }}>8,000+ Annotated Bibliographies Completed Successfully</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <a href="/docs/master-dissertation-brochure.pdf" target="_blank" rel="noopener noreferrer" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>📄 Brochure</a>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/samples/assignment-writing.jpg" alt="Student working on academic assignment" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#f9c74f" }}>8,000+</div>
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0" }}>Annotated Bibliographies<br />Completed</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      <div style={{ background: "#12214a", padding: "16px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: "8,000+", l: "Completed" }, { n: "2,000+", l: "Expert Writers" }, { n: "APA · MLA · Chicago", l: "Citation Styles" }, { n: "< 5%", l: "Plagiarism" }, { n: "Unlimited", l: "Revisions" }, { n: "30 min", l: "Response" }].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
              <div style={{ fontSize: "0.68rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>

        {/* Intro */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>
            UK Annotated Bibliography Writing Service — Central to the Research Process
          </h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            Annotated bibliography requires defining the scope, determining if bibliography is independent or part-research, developing sub-questions from the main research question, and deciding on source types (journal articles, academic books, policy statements, government reports). The annotation informs the reader about source relevance, quality, accuracy — using descriptive and critical expressions.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.94rem" }}>
            Our UK Annotated Bibliography Writing Service only chooses materials that are highly relevant to the topic. It demonstrates succinct writing, critical analysis, and information literacy. The service maintains a strict plagiarism policy, writing in original words with clear references for quotations. We ensure logical organisation, smooth transitions, professional formatting, no mechanical errors, and appropriate subject-specific vocabulary.
          </p>
        </div>

        {/* 3 Annotation Types */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Three Main Annotation Types We Provide</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "18px" }}>Choose the annotation approach that best meets your university's requirements</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
            {annotationTypes.map(a => (
              <div key={a.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "22px" }}>
                <div style={{ fontSize: "2rem", marginBottom: "10px" }}>{a.icon}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "8px" }}>{a.title}</h3>
                <p style={{ fontSize: "0.84rem", color: "#555", lineHeight: 1.65, marginBottom: "12px" }}>{a.desc}</p>
                {a.subtypes.map(sub => (
                  <div key={sub.name} style={{ background: "#f5f6fa", borderRadius: "6px", padding: "10px 12px", marginBottom: "6px" }}>
                    <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "3px" }}>{sub.name}</div>
                    <div style={{ fontSize: "0.78rem", color: "#666" }}>{sub.desc}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables + Citation Styles */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "22px", marginBottom: "28px" }} className="two-col-grid">
          <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "14px" }}>What We Deliver with Your Annotated Bibliography</h3>
            {deliverables.map(item => (
              <div key={item} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", fontSize: "0.83rem", color: "#c5d5f0" }}>
                <span style={{ color: "#f9c74f", fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
              </div>
            ))}
          </div>
          <div>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Citation Format Support</h3>
            {citationStyles.map(c => (
              <div key={c.style} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "8px", padding: "12px 16px", marginBottom: "8px", display: "flex", gap: "12px", alignItems: "center" }}>
                <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "6px", padding: "6px 10px", fontSize: "0.82rem", fontWeight: 700, flexShrink: 0 }}>{c.style}</div>
                <div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "#1a2a6c" }}>{c.full}</div>
                  <div style={{ fontSize: "0.75rem", color: "#888" }}>{c.used}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* QA Boxes */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "14px", marginBottom: "28px" }}>
          {qaBoxes.map(box => (
            <Link key={box.title} href={box.href} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", overflow: "hidden", textAlign: "center", display: "block" }}>
              <img src={box.img} alt={box.title} style={{ width: "100%", height: "100px", objectFit: "contain", padding: "10px", background: "#f5f6fa" }} loading="lazy" />
              <div style={{ padding: "10px" }}>
                <div style={{ fontSize: "0.83rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "3px" }}>{box.title}</div>
                <div style={{ fontSize: "0.74rem", color: "#666", lineHeight: 1.4 }}>{box.desc}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* Guarantees row */}
        <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "22px", marginBottom: "28px", border: "1px solid #dde2ef" }}>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Why Choose Tutors India: Our Service Features</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "12px" }} className="four-col-grid">
            {[
              { icon: "🎓", t: "Qualified Researchers", d: "PhD & Masters holders from top UK and US universities" },
              { icon: "🔁", t: "Unlimited Revisions", d: "Free revisions even after project completion" },
              { icon: "📚", t: "Peer-Reviewed Only", d: "Only peer-reviewed articles from credible databases" },
              { icon: "🛡️", t: "Plagiarism Report", d: "0–5% plagiarism guaranteed with Turnitin certificate" },
              { icon: "📞", t: "24/7 Support", d: "Email, phone, WhatsApp — round-the-clock support" },
              { icon: "✅", t: "100% Requirement Match", d: "Exact match with your university guidelines and rubric" },
              { icon: "⏱", t: "On-Time Delivery", d: "Minor changes within 24 hours" },
              { icon: "🔒", t: "Confidential", d: "128-bit SSL, NDA-signed writers" },
            ].map(g => (
              <div key={g.t} style={{ background: "#fff", borderRadius: "8px", padding: "14px", border: "1px solid #dde2ef", textAlign: "center" }}>
                <div style={{ fontSize: "1.6rem", marginBottom: "6px" }}>{g.icon}</div>
                <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "4px" }}>{g.t}</div>
                <div style={{ fontSize: "0.72rem", color: "#666", lineHeight: 1.4 }}>{g.d}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <TestimonialSlider testimonials={testimonials} />

        {/* FAQ */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Frequently Asked Questions</h2>
          <FaqAccordion faqs={faqs} />
        </div>

        <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px" }}>
          <p style={{ color: "#666", fontSize: "0.86rem", marginBottom: "14px", fontWeight: 600 }}>2000+ Experts — USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {subjects.map(s => (<span key={s} style={{ padding: "5px 13px", background: "#fff", border: "1.5px solid #dde2ef", borderRadius: "16px", fontSize: "0.79rem", color: "#1a2a6c", fontWeight: 500 }}>{s}</span>))}
          </div>
        </div>
      </section>

      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Your Annotated Bibliography Written by Experts</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>8,000+ Completed · APA · MLA · Chicago · Harvard · Unlimited Revisions</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
