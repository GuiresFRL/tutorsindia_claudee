import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "UK / US Critical Review Writing Service | Tutors India",
  description: "The US / UK Critical Review Service. Expert critical evaluation and summary of academic texts. Peer-reviewed sources only. Plagiarism-free. Unlimited revisions. Tutors India.",
};

const criticalReviewSteps = [
  { n: "01", title: "Initial Appraisal", desc: "Identify author credentials, publication date, edition, publisher, and journal title. Establish the authority, currency, and relevance of the source before detailed analysis." },
  { n: "02", title: "Content Appraisal", desc: "Analyse intended audience, methodology used, objectives, quality of reasoning, source reliability, validity of arguments, and draw your own informed personal conclusion." },
  { n: "03", title: "Critical Summary", desc: "Summarise the source content providing an argument overview. Identify what the source says and the key questions or issues it addresses without personal judgment." },
  { n: "04", title: "Critical Evaluation", desc: "Evaluate the work critically — showing differences from other sources, current usage, strengths and limitations, and the contribution of the work to the field." },
  { n: "05", title: "Contextual Placement", desc: "Place the source in the context of your broader research. Explain how it relates to your topic, what gap it fills, and how it supports or challenges your arguments." },
  { n: "06", title: "Synthesis & Conclusion", desc: "Synthesise findings across multiple sources, draw conclusions about the state of knowledge in the field, and identify remaining gaps or areas for future research." },
];

const serviceTiers = [
  { tier: "Basic", color: "#2563b0", desc: "3 topics, 1000 words — literature review and research gap identification with basic critical evaluation.", includes: ["3 relevant sources reviewed", "Basic critical evaluation", "Literature overview", "Standard referencing", "Summary and critique"] },
  { tier: "Advanced", color: "#1a2a6c", desc: "1 topic, 1000 words — clear research gap identification with research questions and deeper analysis.", includes: ["1 focused source/topic", "Clear research gap", "Research questions identified", "Detailed critical analysis", "Academic argumentation"] },
  { tier: "Premium", color: "#e87722", desc: "Wide seminal research with current literature engagement, solid gap identification, excellent critical analysis (upgradable).", includes: ["Seminal research", "Current literature", "Solid gap identification", "Excellent critical analysis", "Upgradable quality"] },
];

const subjectCoverage = [
  { subject: "Management & Business", examples: "Strategy, HRM, Marketing, Finance, Operations" },
  { subject: "Psychology", examples: "Cognitive, Social, Clinical, Educational Psychology" },
  { subject: "Healthcare", examples: "Nursing, Medicine, Public Health, Epidemiology" },
  { subject: "Engineering", examples: "Civil, Mechanical, Electrical, Computer Engineering" },
  { subject: "Law", examples: "Case law, Legislation, Textbooks, Journals" },
  { subject: "Social Sciences", examples: "Sociology, Anthropology, Political Science, Economics" },
  { subject: "Education", examples: "Pedagogy, Curriculum, Educational Leadership" },
  { subject: "Computer Science", examples: "AI, Data Science, Software Engineering, Networks" },
];

const faqs = [
  { q: "What is a critical review and why is it important?", a: "Doing a critical review is one of the most challenging and difficult tasks for students, as it requires evaluating and summarising a text while providing your own opinion and judgment. A critical review demonstrates your ability to critically engage with academic literature, assess the quality of sources, and situate them within the broader field of knowledge. It is a key postgraduate academic skill assessed across many disciplines." },
  { q: "What subject areas do you cover for critical reviews?", a: "Our service covers critical reviews across all academic disciplines including Business Management, Psychology, Healthcare (including case law, legislation, textbooks, journals), English, Marketing, Chemistry, Science, Public Health, Performance Management, Social Work, Accounting, Human Resource Management, and Law. Our 2000+ expert team covers every major academic discipline." },
  { q: "How do you ensure the critical review is of high quality?", a: "Our writers use only peer-reviewed sources and articles, applying domain-specific expertise to critically evaluate works. The service maintains strict plagiarism policy — writing in original words with clear references for quotations. All work undergoes a three-level quality check (Technical QC, Editor QC, final requirement verification) and is scanned using Turnitin before delivery." },
  { q: "What information do I need to provide when ordering a critical review?", a: "To match exactly with your requirement, we need: the source(s) to be critically reviewed, your university guidelines and assessment criteria, the marking rubric, word count, deadline, and any specific focus areas or questions your supervisor has raised. The more detail you provide, the more accurately we can tailor the review to your specific requirements." },
  { q: "How are revisions handled for critical reviews?", a: "We provide unlimited free revisions for any changes or feedback based on the original instructions. Minor changes are completed within 24 working hours and significant changes within 48 working hours. If your supervisor or tutor provides specific feedback after delivery, share it with us and we will revise the review accordingly at no additional charge." },
  { q: "Can you write a critical review of multiple sources?", a: "Yes, we can write critical reviews of single sources (individual article/book reviews) as well as comparative reviews of multiple sources. For literature-based research, we can critically evaluate and synthesise multiple sources within a specific topic area, identifying key themes, debates, methodological approaches, and research gaps across the reviewed literature." },
];

const testimonials = [
  { quote: "Applied substantive literature writing services, pleased with results from Tutors India. Good quality work, adequate changes made in literature review of my research paper. Received polished and advance quality literature review. Highly satisfactory performance!", author: "Shawn Garcia", location: "UK", avatar: "/images/testimonials/t06.jpg" },
  { quote: "The final work looked so refined and well-structured that even my mentor appreciated the improvement immediately. Highly recommended for serious academic support.", author: "George Whitmore", location: "UK", avatar: "/images/testimonials/george-whitmore.webp" },
  { quote: "My research finally started making sense after working with this team. Their guidance simplified complex ideas and gave my project the structure it was missing.", author: "Hassan Al Falasi", location: "UAE", avatar: "/images/testimonials/hassan-al-falasi.webp" },
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies", "Marketing & Communication",
  "Engineering & Technology", "Natural Sciences & Mathematics", "Biological & Life Science", "Economics & Administration",
  "Humanities & Social Science", "Law", "Medicine & Health", "Education & Training",
  "Journalism & Media", "Agriculture & Forestry", "Computer Science & IT", "Hospitality, Leisure & Sports",
];

export default function CriticalReviewPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}<Link href="/our-services/coursework-writing/" style={{ color: "#a0b8e0" }}>Coursework Writing</Link>{" / "}<span style={{ color: "#fff" }}>Critical Review</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              The US / UK Critical Review Writing Service
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Doing a critical review is one of the most challenging and difficult tasks for students, as it requires evaluating and summarising a text while providing your opinion and judgment. Tutors India offers critical review writing assistance in British English, following university requirements for citation and formatting.
            </p>
            <p style={{ color: "#f9c74f", fontSize: "0.92rem", fontWeight: 600, marginBottom: "24px" }}>Expert Writers from the US &amp; UK — Peer-Reviewed Sources Only</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/tutorsindia-logo-hd.jpg" alt="Tutors India" style={{ width: "90px", height: "90px", objectFit: "contain", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>Critical Evaluation<br />Summary<br />Mixed Approach</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      <div style={{ background: "#12214a", padding: "16px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: "2,000+", l: "Expert Writers" }, { n: "All Subjects", l: "Covered" }, { n: "Peer-Reviewed", l: "Sources Only" }, { n: "< 5%", l: "Plagiarism" }, { n: "Unlimited", l: "Revisions" }, { n: "30 min", l: "Response" }].map(s => (
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
            UK Critical Review Writing Service — Expertly Structured Academic Critique
          </h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            Tutors India is a pioneer in handling different types of critical reviews. Our highly experienced, professional writers develop plagiarism-free, high-quality critical reviews that demonstrate your ability to evaluate academic sources rigorously. All critical reviews are written in British English with university-specific citation and formatting requirements met in full.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.94rem" }}>
            Critical Review writing services at Tutors India are handled and written by the style, design, and format of an ideal review required by UK, Australian, and US universities. Our service covers complete critical reviews from introduction to recommendations, with domain-specific expertise across multiple subjects and only peer-reviewed sources and articles used throughout.
          </p>
        </div>

        {/* 6-Step Process */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Our Critical Review Writing Process</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "18px" }}>A systematic, rigorous approach to critical evaluation that meets doctoral and postgraduate standards</p>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", overflow: "hidden" }}>
            {criticalReviewSteps.map((step, i) => (
              <div key={step.n} style={{ padding: "16px 22px", borderBottom: i < criticalReviewSteps.length - 1 ? "1px solid #f0f2fa" : "none", display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "50%", width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.72rem", fontWeight: 700, flexShrink: 0 }}>{step.n}</div>
                <div>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "4px" }}>{step.title}</h3>
                  <p style={{ fontSize: "0.84rem", color: "#666", lineHeight: 1.65 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Tiers */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>Service Tiers for Critical Review</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
            {serviceTiers.map(t => (
              <div key={t.tier} style={{ background: "#fff", border: `2px solid ${t.color}`, borderRadius: "10px", overflow: "hidden" }}>
                <div style={{ background: t.color, color: "#fff", padding: "14px 18px" }}><div style={{ fontSize: "1.2rem", fontWeight: 700 }}>{t.tier}</div></div>
                <div style={{ padding: "16px" }}>
                  <p style={{ fontSize: "0.84rem", color: "#555", lineHeight: 1.65, marginBottom: "12px" }}>{t.desc}</p>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {t.includes.map(i => (<li key={i} style={{ display: "flex", gap: "6px", fontSize: "0.78rem", color: "#555", padding: "4px 0", borderBottom: "1px solid #f0f2fa" }}><span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>✓</span> {i}</li>))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subject Coverage */}
        <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px", marginBottom: "28px", border: "1px solid #dde2ef" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Specialized Subject Coverage</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "12px" }} className="four-col-grid">
            {subjectCoverage.map(s => (
              <div key={s.subject} style={{ background: "#fff", borderRadius: "8px", padding: "14px", border: "1px solid #dde2ef" }}>
                <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "4px" }}>{s.subject}</div>
                <div style={{ fontSize: "0.76rem", color: "#666", lineHeight: 1.45 }}>{s.examples}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantees */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "22px", marginBottom: "28px" }} className="two-col-grid">
          <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "14px" }}>Our Core Guarantees</h3>
            {["Unlimited revision for committed work", "On-time delivery — 45 days for specific changes", "Minor changes within 24 working hours", "Significant changes within 48 working hours", "24/7 support available", "Plagiarism-free — less than 5%", "Three-level quality checks", "100% confidentiality maintained", "Only experienced, subject-specific writers"].map((g, i) => (
              <div key={i} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", fontSize: "0.83rem", color: "#c5d5f0" }}>
                <span style={{ color: "#f9c74f", fontWeight: 700, flexShrink: 0 }}>{i + 1}.</span> {g}
              </div>
            ))}
          </div>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>What You Receive</h3>
            {["Critical evaluation of source quality, relevance, and authority", "Summary of key arguments and findings", "Critical commentary on usefulness, effectiveness, and worth", "Author's point of view and potential bias identified", "Relevance to your specific research topic", "Scope and limitations of the source", "Contextual placement within broader literature", "Fully referenced per your citation style", "Plagiarism-free certificate on request", "Three-level quality check before delivery"].map(item => (
              <div key={item} style={{ display: "flex", gap: "7px", fontSize: "0.82rem", color: "#555", padding: "5px 0", borderBottom: "1px solid #f0f2fa" }}>
                <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>What Our Clients Say</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px" }} className="three-col-grid">
            {testimonials.map((t, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px" }}>
                <div style={{ color: "#e87722", fontSize: "2rem", lineHeight: 1, marginBottom: "6px", fontFamily: "serif" }}>&ldquo;</div>
                <p style={{ color: "#555", fontSize: "0.84rem", lineHeight: 1.7, fontStyle: "italic", marginBottom: "12px" }}>{t.quote}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <img src={t.avatar} alt={t.author} style={{ width: "36px", height: "36px", borderRadius: "50%", objectFit: "cover" }} loading="lazy" />
                  <div>
                    <div style={{ fontWeight: 700, color: "#1a2a6c", fontSize: "0.84rem" }}>{t.author}</div>
                    {t.location && <div style={{ fontSize: "0.72rem", color: "#888" }}>{t.location}</div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

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
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Your Critical Review Written by Experts</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>Peer-Reviewed Sources · US &amp; UK Writers · Unlimited Revisions · Response in 30 min</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
