import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "Manuscript Development & Writing Services",
  description: "Expert Manuscript Development services. Rewrite based on reviewer comments, technical editing, proofreading, formatting to journal guidelines. Tutors India.",
};

const manuscriptServices = [
  { icon: "✍️", title: "Manuscript Writing from Scratch", desc: "Complete manuscript development from abstract to references, written to your target journal's specific author guidelines and formatting requirements." },
  { icon: "🔄", title: "Manuscript Rewriting", desc: "Rewrite your manuscript based on reviewer comments from Q1/Q2 journals. Point-by-point response document prepared for each reviewer comment." },
  { icon: "✂️", title: "Technical Editing", desc: "Grammar, syntax, sentence construction, terminology, word choice, logic, relevance and clarity — all elevated to international journal publication standards." },
  { icon: "🔍", title: "Proofreading & Language Editing", desc: "Native English speaker proofreading ensuring correct academic English — typographical errors, punctuation, grammar, and sentence structure corrected." },
  { icon: "📐", title: "Journal Formatting", desc: "Formatting to exact journal specifications — reference style (APA, AMA, Vancouver, IEEE, Harvard), word count, figures, tables, headings, and submission checklist." },
  { icon: "📊", title: "Statistical Analysis & Results", desc: "Results section writing with proper statistical presentation — descriptive statistics, inferential tests, tables, figures formatted per journal guidelines." },
];

const editingTiers = [
  { tier: "Standard Proofread", color: "#2563b0", items: ["Typographical errors", "Punctuation", "Grammar", "Surface-level language"] },
  { tier: "Advanced Editing", color: "#1a2a6c", items: ["All Standard features", "Sentence construction", "Terminology check", "Logic, relevance & clarity", "Word choice improvement"] },
  { tier: "Premium Editing", color: "#e87722", items: ["All Advanced features", "Journal formatting", "Cover letter writing", "Tutors India certificate", "Reviewer response support"] },
];

const faqs = [
  { q: "What does manuscript development include?", a: "Tutors India manuscript development provides a convincing rationale for critical decisions. We rewrite your manuscript based on the reviewer's comments, ensuring high quality research with precise presentation of findings. The service covers complete manuscript writing, rewriting, technical editing, language editing, proofreading, statistical analysis, and formatting to journal-specific guidelines." },
  { q: "Can you help after a manuscript rejection?", a: "Yes. We specialise in manuscript resubmission support after rejection. We systematically address all reviewer comments with a detailed point-by-point response document, strengthen the methodology and analysis, improve the language quality, and reformat according to the new target journal's guidelines." },
  { q: "Which journals do you target?", a: "We support manuscripts targeting journals across all impact factor categories including Q1, Q2, Q3, and Q4 Scopus/Web of Science indexed journals. We format according to each journal's specific author guidelines, reference styles (AMA, APA, Vancouver, IEEE, Harvard), and submission requirements." },
  { q: "How do you ensure the manuscript meets journal standards?", a: "Our editors are native English speakers with industry experience and educational degrees from international and top-ranked universities. They are familiar with the specific requirements of major journals across Medicine, Engineering, Business, Social Sciences, and Life Sciences." },
  { q: "What is the turnaround time for manuscript editing?", a: "Standard proofreading and language editing is completed within 24–48 hours. Technical editing and rewriting typically takes 3–7 days depending on the length and complexity. Express services are available. Contact us with your submission deadline for an accurate timeline." },
];

const testimonials = [
  { quote: "This is my first time writing a manuscript for an international publication. Thank you so much for helping me revise my work, Tutors India. My work has now been accepted by a prestigious international publication Q1 in the subject of education.", author: "Daksha", avatar: "/images/testimonials/Daksha.jpg" },
  { quote: "This to inform & congratulate that our manuscript has been completely accepted by the publisher & expected to get it published soon in the journal. Appreciating your extreme support & cooperation.", author: "Marcus", location: "Australia", avatar: "/images/testimonials/t15.jpg" },
  { quote: "Tutors India instructed and helped me complete my entire manuscript and also allowed me to engage with their experts to clarify every single doubt about my manuscript. Lots of Thanks!", author: "Jivin", avatar: "/images/testimonials/t16.jpg" },
];

const subjects = ["Medicine & Health", "Biological Sciences", "Engineering & Technology", "Computer Science & IT", "Business & Management", "Natural Sciences & Mathematics", "Social Sciences", "Law", "Education & Training", "Agriculture & Forestry"];

export default function ManuscriptDevelopmentPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}<Link href="/our-services/publication-support/" style={{ color: "#a0b8e0" }}>Publication Support</Link>{" / "}<span style={{ color: "#fff" }}>Manuscript Development</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              Manuscript Development &amp; Academic Writing Services
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Tutors India manuscript development provides a convincing rationale for critical decisions. We rewrite your manuscript based on the reviewer&apos;s comments, ensuring high quality research with precise presentation of findings and conclusion with adherence to extensive journal guidelines.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "20px" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/samples/publication-research.jpg" alt="Academic editing and research support" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>Q1 · Q2 · Q3<br />Journal Support<br />All Disciplines</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      <div style={{ background: "#12214a", padding: "16px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: "Q1/Q2/Q3", l: "Journals Targeted" }, { n: "Native English", l: "Editors" }, { n: "24–48h", l: "Standard Editing" }, { n: "< 5%", l: "Plagiarism" }, { n: "Unlimited", l: "Revisions" }, { n: "30 min", l: "Response" }].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
              <div style={{ fontSize: "0.68rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Expert Manuscript Development Service</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            A subject matter expert from Tutors India provides extensive support to write a manuscript — very well representing the research content, avoiding lapses in logic, highlighting important information, and ensuring perfect, error-free, standard language. Our editors are native English speakers with industry experience and educational degrees from international and top-ranked universities.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.94rem" }}>
            We support manuscripts targeting Scopus and Web of Science indexed journals across all Q-ranks. Our service covers complete manuscript writing from abstract to references, rewriting based on reviewer comments, technical and language editing, statistical analysis support, and formatting to exact journal-specific guidelines.
          </p>
        </div>

        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>What We Offer Under Manuscript Development</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
            {manuscriptServices.map(s => (
              <div key={s.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{s.icon}</div>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{s.title}</h3>
                <p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>Editing Service Tiers</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
            {editingTiers.map(t => (
              <div key={t.tier} style={{ background: "#fff", border: `2px solid ${t.color}`, borderRadius: "10px", overflow: "hidden" }}>
                <div style={{ background: t.color, color: "#fff", padding: "14px 18px", fontSize: "0.95rem", fontWeight: 700 }}>{t.tier}</div>
                <div style={{ padding: "16px" }}>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {t.items.map(i => (<li key={i} style={{ display: "flex", gap: "6px", fontSize: "0.82rem", color: "#555", padding: "5px 0", borderBottom: "1px solid #f0f2fa" }}><span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>✓</span> {i}</li>))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "22px", marginBottom: "28px" }} className="two-col-grid">
          <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "14px" }}>Free Deliverables</h3>
            {["Cover letter tailored to target journal", "Point-by-point reviewer response", "Plagiarism report (Turnitin)", "Copyright transfer assistance", "Submission checklist verification", "Reference formatting in required style"].map(item => (
              <div key={item} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", fontSize: "0.83rem", color: "#c5d5f0" }}>
                <span style={{ color: "#f9c74f", fontWeight: 700 }}>✓</span> {item}
              </div>
            ))}
          </div>
          <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px", border: "1px solid #dde2ef" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our Guarantees</h3>
            {["Unlimited revisions for committed work", "Native English editors", "Journal-specific formatting", "Three-level quality check", "100% confidentiality", "Plagiarism free — less than 5%", "On-time delivery", "Q1/Q2/Q3 journal targeting"].map((g, i) => (
              <div key={i} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid #dde2ef", fontSize: "0.83rem", color: "#555" }}>
                <span style={{ color: "#e87722", fontWeight: 700 }}>{i + 1}.</span> {g}
              </div>
            ))}
          </div>
        </div>

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

        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Frequently Asked Questions</h2>
          <FaqAccordion faqs={faqs} />
        </div>

        <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px" }}>
          <p style={{ color: "#666", fontSize: "0.86rem", marginBottom: "14px", fontWeight: 600 }}>Expert manuscript support across all academic disciplines</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {subjects.map(s => (<span key={s} style={{ padding: "5px 13px", background: "#fff", border: "1.5px solid #dde2ef", borderRadius: "16px", fontSize: "0.79rem", color: "#1a2a6c", fontWeight: 500 }}>{s}</span>))}
          </div>
        </div>
      </section>

      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Your Manuscript Published in a Top Journal</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>Native English Editors · Q1/Q2/Q3 Journals · Reviewer Response · 30 min Response</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
