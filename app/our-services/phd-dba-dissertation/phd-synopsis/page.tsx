import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "PhD Doctorate Synopsis Writing Consultation Services",
  description: "PhD Doctorate Synopsis Writing Service by qualified US & UK researchers. 5000+ PhD synopses completed. All components included. Unlimited revisions.",
};

const synopsisComponents = [
  { n: "01", title: "Abstract", desc: "250–350 words summarising introduction, objectives, boundaries, methodology, results, conclusions, and recommendations. Written after the full synopsis is complete." },
  { n: "02", title: "Acknowledgement", desc: "Recognition of assistance with plagiarism compliance declarations, word count statement, and confirmation of dissertation passing plagiarism software scan." },
  { n: "03", title: "Table of Contents", desc: "Chapter headings, appendices, references with page numbers. Separate lists for figures, tables, and abbreviations using Microsoft Word indexing functions." },
  { n: "04", title: "Full Dissertation Title", desc: "Precise, university-approved title conveying research investigation ideas, orients readers to the topic, indicates study type, target population, and geographical location." },
  { n: "05", title: "Introduction", desc: "Topic description, research questions, objectives with background context, broad foundation from existing literature, general scope, section overview, and reader engagement." },
  { n: "06", title: "Aim and Objectives / Hypotheses", desc: "Clear statement of research goals, questions or hypothesis. Includes original contributions of your study, detailed account of points summarised in the introduction, and rationale." },
  { n: "07", title: "Literature Review", desc: "Prior studies analysis, major themes, theoretical frameworks used to analyse primary sources, identified research gaps, further investigations intended, and best methodologies." },
  { n: "08", title: "Research Methodology", desc: "Overall approach, research design, strategy (qualitative or quantitative), philosophy, target area, population, sample size, data collection methods, ethical considerations, pilot study, validity, reliability." },
  { n: "09", title: "Results / Findings / Data Analysis", desc: "Findings presented with tables and figures. Quantitative: descriptive statistics, regression, hypothesis testing. Qualitative: content, textual analysis. Tools: SPSS, R, SAS, STATA, Minitab." },
  { n: "10", title: "Discussion, Summary & Conclusion", desc: "Comparative analysis against published research in line with research questions. Summary and conclusion with main findings and recommendations." },
  { n: "11", title: "References", desc: "Peer-reviewed scholarly articles, textbooks, newspaper articles, annual reports from ProQuest, Emerald, IEEE, Web of Science, Academic Complete, SciDirect, JSTOR, Elsevier." },
  { n: "12", title: "Bibliography & Appendices", desc: "Sources consulted but not cited. Appendices: experimental diagrams, questionnaires, ethical forms, permissions, reflective materials, SPSS outputs." },
];

const serviceTiers = [
  { tier: "Basic", color: "#2563b0", desc: "Develops from relevant sources with reasonable research area identification and descriptive evaluation attempt.", includes: ["Relevant academic sources", "Research area identification", "Descriptive evaluation", "Standard referencing"] },
  { tier: "Advanced", color: "#1a2a6c", desc: "Wide source range, clear research gap identification, explicit aims and research questions.", includes: ["Wide range of sources", "Clear research gap", "Explicit aims & questions", "Strong academic writing"] },
  { tier: "Premium", color: "#e87722", desc: "Extensive seminal research engagement, thoroughly justified research gaps based on current literature, excellent critical analysis (upgradable).", includes: ["Seminal research", "Solid justified gap", "Excellent critical analysis", "Upgradable quality"] },
];

const faqs = [
  { q: "Why choose Tutors India for PhD Synopsis writing?", a: "Tutors India has dedicated researchers who undergo numerous in-depth research sessions before developing synopses. We understand the specific structural differences between a synopsis and a full dissertation proposal, and we write to the exact requirements of your university. Our writers have experience from top-ranked international universities and have completed around 5,000 PhD synopses successfully." },
  { q: "What customisation can be provided for my PhD synopsis?", a: "Our service is completely flexible and tailor-made. If you can provide the areas of customisation related to the research area initially proposed, we can make amendments to the synopsis. Unlimited revisions are included. Even after delivery, if your supervisor requires changes, we will revise at no additional charge." },
  { q: "What is the timeline for completing a PhD synopsis?", a: "Timelines are designed based on the dissertation project type, the study nature, and your specific requirements. Standard synopses are typically delivered within 5–7 working days. Express delivery is available for urgent requirements. You will receive a reply within 30 minutes of your enquiry." },
  { q: "What if my guide rejects the PhD synopsis?", a: "Our service is completely flexible. If your supervisor or examiner rejects the synopsis, please share their specific feedback and requirements. We will revise accordingly at no additional charge. Our service is tailor-made to customise based on the modifications and research area requirements provided." },
  { q: "What subject areas do you cover for PhD Synopsis writing?", a: "Services span broad areas of research including employee engagement, customer behaviour, project management, knowledge management, international marketing, performance management, strategic management, international business, MBA specialisations (HR, Finance, Economics, Operations), healthcare, engineering, social sciences, computer science, politics, art, and statistics." },
  { q: "What information is included in a PhD synopsis?", a: "The synopsis comprises: introduction (title, background of study, objectives), problem statement (literature review), hypothesis, scope and limitation, research methodology, location, cost estimation, and time frame. We follow your specific university guidelines for the exact structure required." },
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies", "Marketing & Communication",
  "Engineering & Technology", "Natural Sciences & Mathematics", "Biological & Life Science", "Economics & Administration",
  "Humanities & Social Science", "Law", "Medicine & Health", "Education & Training",
  "Journalism & Media", "Agriculture & Forestry", "Computer Science & IT", "Hospitality, Leisure & Sports",
];

export default function PhDSynopsisPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}<Link href="/our-services/phd-dba-dissertation/" style={{ color: "#a0b8e0" }}>PhD / DBA</Link>{" / "}<span style={{ color: "#fff" }}>PhD Synopsis</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              PhD Doctorate Synopsis Writing Consultation Services
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Your PhD Dissertation Synopsis is written by qualified and experienced researchers from the US &amp; UK. If you are unsure of what to do after selecting your PhD topic, our expert writers provide comprehensive synopsis writing from abstract to appendices.
            </p>
            <p style={{ color: "#f9c74f", fontSize: "0.92rem", fontWeight: 600, marginBottom: "24px" }}>Then You've Certainly Reached the Right place</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/tutorsindia-logo-hd.jpg" alt="Tutors India" style={{ width: "90px", height: "90px", objectFit: "contain", marginBottom: "10px" }} />
            <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#f9c74f" }}>5,000+</div>
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0" }}>PhD Synopses<br />Completed</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      <div style={{ background: "#12214a", padding: "16px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: "5,000+", l: "Synopses Done" }, { n: "2,000+", l: "Expert Writers" }, { n: "PhD Qualified", l: "All Writers" }, { n: "< 5%", l: "Plagiarism" }, { n: "Unlimited", l: "Revisions" }, { n: "30 min", l: "Response" }].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
              <div style={{ fontSize: "0.68rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>PhD Dissertation Synopsis Writing Service</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            Our writers possess experience in research methodology, specific domain experience, and educational degrees from international and top-ranked universities from India, the US, and the UK. We offer one-on-one coaching with writers, statisticians, research methodologists, and editors to ensure your synopsis meets doctoral standards.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.94rem" }}>
            After the order is confirmed, we allocate a specialist team to scrutinise the work. Once the outline and chapterisation plan is approved, we dispatch the work in chapters with progress updates. You can also pay in instalments and work will start immediately upon receipt of payment. We deliver your work as per the agreed schedule, or even before.
          </p>
        </div>

        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>Service Tiers for PhD Synopsis</h2>
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

        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Complete PhD Synopsis Components</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "18px" }}>We follow specific university guidelines across the United States, United Kingdom, Australia, and other institutions.</p>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", overflow: "hidden" }}>
            {synopsisComponents.map((ch, i) => (
              <div key={ch.n} style={{ padding: "14px 20px", borderBottom: i < synopsisComponents.length - 1 ? "1px solid #f0f2fa" : "none", display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "50%", width: "30px", height: "30px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.68rem", fontWeight: 700, flexShrink: 0 }}>{ch.n}</div>
                <div>
                  <h3 style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "3px" }}>{ch.title}</h3>
                  <p style={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.6 }}>{ch.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "22px", marginBottom: "28px" }} className="two-col-grid">
          <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "14px" }}>Free Deliverables with Your Synopsis</h3>
            {["Abstract or Executive Summary", "Redrawn Graphs & Tables", "Statistical / textual analysis", "SPSS / software screenshots", "Free tutoring sessions", "SPSS output in Appendix", "Free research articles used in writing"].map(item => (
              <div key={item} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", fontSize: "0.83rem", color: "#c5d5f0" }}>
                <span style={{ color: "#f9c74f", fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
              </div>
            ))}
          </div>
          <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px", border: "1px solid #dde2ef" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our Guarantees</h3>
            {["Unlimited revisions for committed work", "On-time delivery guaranteed", "24/7 customer support", "Three-level quality check", "100% confidentiality", "Plagiarism free — less than 5%", "Subject-specific PhD-qualified writers", "Chapter-by-chapter delivery"].map((g, i) => (
              <div key={i} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid #dde2ef", fontSize: "0.83rem", color: "#555" }}>
                <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>{i + 1}.</span> {g}
              </div>
            ))}
          </div>
        </div>

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
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Your PhD Synopsis Written by Experts</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>Response within 30 minutes · 5000+ Synopses Completed · Unlimited Revisions</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
