import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "PhD & Professional Doctorate Coursework Writing Service",
  description: "UK PhD & Professional Doctorate Coursework Writing, Editing & Consultation Help. Research methodology, statistical analysis, literature review and more. Expert writers.",
};

const courseworkTypes = [
  { icon: "🔬", title: "Research Methodology Coursework", desc: "Comprehensive support for research design, philosophical positioning, data collection methods, ethical considerations, validity and reliability. Written by experienced research methodologists." },
  { icon: "📊", title: "Statistical Analysis Coursework", desc: "SPSS, R, SAS, STATA, Minitab — our statisticians handle descriptive statistics, inferential tests, regression, SEM, and interpretation for your doctoral coursework." },
  { icon: "📚", title: "Literature Review Coursework", desc: "Systematic and critical literature reviews identifying research gaps from the latest peer-reviewed sources. Annotated bibliographies and thematic synthesis included." },
  { icon: "❓", title: "Question & Answer Sessions", desc: "Direct consultation with subject matter experts who answer your coursework questions and guide you through complex theoretical and practical concepts." },
  { icon: "📝", title: "Research Paper Writing", desc: "High-quality research papers written to doctoral standards, fully referenced, with critical analysis, original contribution to knowledge, and journal-ready formatting." },
  { icon: "🎤", title: "Conference & Seminar Papers", desc: "Expert preparation of conference papers and seminar presentations that communicate your research effectively to academic audiences." },
];

const serviceTiers = [
  { tier: "Basic", color: "#2563b0", desc: "Developed based on relevant sources, a reasonable attempt at finding research areas with evidence of critical evaluation — mainly descriptive.", includes: ["Relevant academic sources", "Research area identification", "Basic critical evaluation", "Standard referencing", "Standard formatting"] },
  { tier: "Advanced", color: "#1a2a6c", desc: "Wide range of sources, clear identification of research gaps with aim and research questions.", includes: ["Wide range of sources", "Clear research gap identification", "Defined aims & research questions", "Strong academic writing", "Advanced analysis"] },
  { tier: "Premium", color: "#e87722", desc: "Wide range of seminal research with thorough engagement using latest resources. Solid gap identification with excellent critical analysis (upgradable).", includes: ["Seminal research engagement", "Solid justified research gap", "Excellent critical analysis", "Latest resources", "Upgradable to publication standard"] },
];

const faqs = [
  { q: "What types of PhD coursework do you support?", a: "We support all types of doctoral coursework including research methodology, statistical analysis (SPSS, R, SAS, STATA, Minitab), literature reviews, annotated bibliographies, research papers, conference papers, seminar papers, and citation reviews. If your specific coursework type is not listed, please contact us to discuss your requirements." },
  { q: "How do your writers handle complex doctoral-level coursework?", a: "Our writers are PhD and Masters graduates from top UK and US universities with minimum 5 years of research experience in their respective fields. They have experience in research methodology, statistical analysis, literature synthesis, and the specific writing style expected at doctoral level. We carefully match writers to your subject area and coursework requirements." },
  { q: "Can you help with coursework that is already partially completed?", a: "Yes, absolutely. We offer editing, rewriting, and continuation services for partially completed doctoral coursework. Simply share your work along with the coursework requirements and professor feedback, and our experts will assess the work and provide a plan for completing or improving it to the required standard." },
  { q: "What information do I need to provide for PhD coursework writing?", a: "To match exactly with your requirement, please provide: (i) complete coursework brief or instructions, (ii) university guidelines, (iii) rubric and marking criteria, (iv) word count and deadline, (v) any feedback or instructions from your supervisor, and (vi) any reference materials you have already collected. The more detail you provide, the more accurately we can match your requirements." },
  { q: "Is the coursework plagiarism-free?", a: "Yes, all doctoral coursework is written from scratch and checked using Turnitin before delivery. We guarantee less than 5% plagiarism and provide a plagiarism-free certificate on request. Our high-quality research writing process ensures your coursework is written after thorough brainstorming sessions with our team of professional researchers — not copy-pasted." },
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
  { quote: "Statistical signal processing and its applications in sensor arrays were the focus of my study. The knowledge I gained during my PhD studies, as well as the research methods I learnt, are priceless to me. I am grateful to Tutors India for guiding me through my research project and teaching me research paper writing strategies.", author: "Charles", avatar: "/images/testimonials/Advik.jpg" },
  { quote: "I am very happy with Tutors India service for PhD Coursework. I can tell that their professional skills are visible once the final results are done. I got a brilliant internship abroad with a high prestige company. I have been getting great comments during my entire PhD coursework processes.", author: "Gatik", location: "Andorra", avatar: "/images/testimonials/t14.jpg" },
  { quote: "Good job on drafting my coursework. I had a lot of clarity about the process as it was kept very transparent throughout. There was no delay with their response and my coursework was delivered within the requested time. The review was very good. I will definitely come back with more requests.", author: "Jenifer Williams", location: "Japan", avatar: "/images/testimonials/t16.jpg" },
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies",
  "Marketing & Communication", "Engineering & Technology", "Natural Sciences & Mathematics",
  "Biological & Life Science", "Economics & Administration", "Humanities & Social Science",
  "Law", "Medicine & Health", "Education & Training", "Journalism & Media",
  "Agriculture & Forestry", "Computer Science & IT", "Hospitality, Leisure & Sports",
];

export default function PhDCourseworkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* ── HERO ── */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
              <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}
              <Link href="/our-services/phd-dba-dissertation/" style={{ color: "#a0b8e0" }}>PhD / DBA Dissertation</Link>{" / "}
              <span style={{ color: "#fff" }}>PhD Coursework</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              A UK PhD &amp; Professional Doctorate Degree Coursework Writing Services &amp; Consultation Help
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              At Tutors India, we have a team of experts who are familiar and experienced in handling various coursework relevant to PhD Research. Coursework is mandatory for PhD programs, requiring a lot of hard work, dedication, and time investment.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/samples/assignment-writing.jpg" alt="Student working on academic assignment" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>PhD Qualified Writers<br />10+ Years Experience<br />All Subjects</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      {/* ── STATS BAR ── */}
      <div style={{ background: "#12214a", padding: "16px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: "3,500+", l: "PhDs Helped" }, { n: "2,000+", l: "Expert Writers" }, { n: "PhD & Masters", l: "Qualified" }, { n: "< 5%", l: "Plagiarism" }, { n: "Unlimited", l: "Revisions" }, { n: "30 min", l: "Response" }].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
              <div style={{ fontSize: "0.68rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>

        {/* Intro */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>PhD &amp; DBA Coursework Writing, Editing &amp; Rewriting Service</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            Our PhD coursework writers are qualified and experienced researchers from the US &amp; UK, who are native English speakers with degrees from top-ranked international universities. They help students manage research methodology, statistical reviews, annotated bibliographies, and citation reviews with the precision and depth expected at doctoral level.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.94rem" }}>
            We follow specific university guidelines across the United States, United Kingdom, Australia, and other institutions. Our service includes chapter-by-chapter delivery with full client control, installment payment options, and comprehensive coordinator support at every stage.
          </p>
        </div>

        {/* Coursework Types */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Specialised PhD Coursework Offerings</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "18px" }}>Comprehensive support across all doctoral coursework requirements</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
            {courseworkTypes.map(c => (
              <div key={c.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{c.icon}</div>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{c.title}</h3>
                <p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.65 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Tiers */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Service Tiers</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
            {serviceTiers.map(t => (
              <div key={t.tier} style={{ background: "#fff", border: `2px solid ${t.color}`, borderRadius: "10px", overflow: "hidden" }}>
                <div style={{ background: t.color, color: "#fff", padding: "14px 18px" }}>
                  <div style={{ fontSize: "1.2rem", fontWeight: 700 }}>{t.tier}</div>
                </div>
                <div style={{ padding: "16px" }}>
                  <p style={{ fontSize: "0.84rem", color: "#555", lineHeight: 1.65, marginBottom: "12px" }}>{t.desc}</p>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {t.includes.map(i => (
                      <li key={i} style={{ display: "flex", gap: "6px", fontSize: "0.78rem", color: "#555", padding: "4px 0", borderBottom: "1px solid #f0f2fa" }}>
                        <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>✓</span> {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Free Deliverables + Guarantees */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "22px", marginBottom: "28px" }} className="two-col-grid">
          <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "14px" }}>Free Deliverables with Every Order</h3>
            {["Abstract or Executive Summary", "Graphs & Tables (redrawn)", "Statistical analysis or textual analysis of data", "SPSS / software screenshots", "Free tutoring sessions on the work", "SPSS output in Appendix", "Free research articles used in writing"].map(item => (
              <div key={item} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", fontSize: "0.83rem", color: "#c5d5f0" }}>
                <span style={{ color: "#f9c74f", fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
              </div>
            ))}
          </div>
          <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px", border: "1px solid #dde2ef" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our Guarantees</h3>
            {["Unlimited revisions for committed work", "On-time delivery guaranteed", "24/7 customer support", "Three-level quality check", "100% confidentiality — NDA-signed writers", "Plagiarism free — less than 5%", "Subject-specific experienced writers", "Chapter-by-chapter delivery"].map((g, i) => (
              <div key={i} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid #dde2ef", fontSize: "0.83rem", color: "#555" }}>
                <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>{i + 1}.</span> {g}
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

        {/* Subject Areas */}
        <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>2000+ Experts Across Subjects &amp; Countries</h2>
          <p style={{ color: "#666", fontSize: "0.86rem", marginBottom: "14px" }}>USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {subjects.map(s => (
              <span key={s} style={{ padding: "5px 13px", background: "#fff", border: "1.5px solid #dde2ef", borderRadius: "16px", fontSize: "0.79rem", color: "#1a2a6c", fontWeight: 500 }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Expert PhD Coursework Support Today</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>Response within 30 minutes · PhD-qualified writers · Unlimited revisions</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
