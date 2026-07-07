import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
export const metadata: Metadata = { title: "Technical Editing Services | Academic & Scientific", description: "Expert Technical Editing Services for academic and scientific manuscripts. Subject matter experts review technical accuracy, argument, clarity, and structure. Tutors India." };
const checks = [
  { icon: "🔬", title: "Technical Accuracy", desc: "Subject matter experts verify all technical claims, equations, methodology descriptions, data interpretations, and scientific terminology." },
  { icon: "📐", title: "Argument Structure", desc: "Logical flow of technical arguments reviewed. Gaps in reasoning identified and recommendations provided for clearer technical communication." },
  { icon: "📊", title: "Data Presentation", desc: "Tables, figures, graphs, and statistical outputs reviewed for accuracy, appropriate formatting, and clear captioning." },
  { icon: "🏗️", title: "Structure & Organisation", desc: "Manuscript structure assessed against target journal standards — abstract, introduction, methods, results, discussion, conclusion organisation." },
  { icon: "✍️", title: "Terminology Consistency", desc: "Technical terminology checked for consistency throughout the document. Subject-specific vocabulary verified against current literature." },
  { icon: "📋", title: "Reference Accuracy", desc: "Citations and references verified for accuracy, completeness, and compliance with the required citation style (APA, Vancouver, IEEE, etc.)." },
];
const faqs = [
  { q: "What is technical editing and how does it differ from language editing?", a: "Technical editing involves reviewing the technical accuracy, methodological soundness, argument structure, data presentation, and subject-specific terminology of your manuscript — performed by a subject matter expert. Language editing focuses on grammar, spelling, and writing style. Bad language writing, grammar, punctuation, and spelling can develop an inappropriate response from the examiner, and our technical editors ensure your work meets the highest academic and publication standards." },
  { q: "Who performs technical editing?", a: "Our technical editors are subject matter experts who hold PhD or Masters degrees from top international universities in the relevant discipline. They are not just copy editors — they read and understand your research, assess the soundness of your arguments, and provide substantive feedback alongside corrections." },
  { q: "What types of documents do you technically edit?", a: "We technically edit journal manuscripts, dissertations, theses, conference papers, grant proposals, technical reports, book chapters, and any other academic or scientific writing across all disciplines. We cover social sciences, biological sciences, engineering, medicine, computer science, business, and all other fields." },
  { q: "Do you also provide language editing alongside technical editing?", a: "Yes. Our premium technical editing service includes both technical and language editing — ensuring your manuscript is both technically sound and linguistically polished. This comprehensive service is the most appropriate for journal submissions and dissertation final drafts." },
  { q: "How quickly can you complete technical editing?", a: "Standard technical editing is completed within 3–7 days depending on document length and complexity. Express service is available for urgent deadlines. Contact us with your submission deadline for an accurate timeline assessment." },
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
export default function TechnicalEditingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}<Link href="/our-services/editing-services/" style={{ color: "#a0b8e0" }}>Editing Services</Link>{" / "}<span style={{ color: "#fff" }}>Technical Editing</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>Technical Editing Services for Academic &amp; Scientific Manuscripts</h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>Bad language writing, grammar, punctuation, and spelling can develop an inappropriate response from the examiner. Our technical editors are subject matter experts who ensure your work meets the highest academic and publication standards across all disciplines.</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "20px" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/samples/publication-research.jpg" alt="Academic editing and research support" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>Subject Matter<br />Expert Editors<br />All Disciplines</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px", marginBottom: "28px" }} className="three-col-grid">
          {checks.map(c => (<div key={c.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px" }}><div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{c.icon}</div><h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{c.title}</h3><p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.65 }}>{c.desc}</p></div>))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "22px", marginBottom: "28px" }} className="two-col-grid">
          <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "14px" }}>What Our Technical Editors Check</h3>
            {["Technical accuracy of all claims","Methodological soundness","Logical flow of arguments","Data and statistical presentation","Technical terminology consistency","Reference accuracy and completeness","Structure against journal standards","Compliance with reporting guidelines (CONSORT, STROBE, PRISMA)"].map(item => (<div key={item} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", fontSize: "0.83rem", color: "#c5d5f0" }}><span style={{ color: "#f9c74f", fontWeight: 700 }}>✓</span> {item}</div>))}
          </div>
          <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px", border: "1px solid #dde2ef" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our Guarantees</h3>
            {["Unlimited revisions for committed work","On-time delivery guaranteed","24/7 support","Subject matter expert allocated","Three-level quality check","100% confidentiality","Plagiarism free — less than 5%","Native English language check included"].map((g, i) => (<div key={i} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid #dde2ef", fontSize: "0.83rem", color: "#555" }}><span style={{ color: "#e87722", fontWeight: 700 }}>{i + 1}.</span> {g}</div>))}
          </div>
        </div>
        <div style={{ marginBottom: "28px" }}><h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Frequently Asked Questions</h2><FaqAccordion faqs={faqs} /></div>
      </section>
      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Expert Technical Editing for Your Manuscript</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>Subject Matter Experts · All Disciplines · 3–7 Day Delivery · Response in 30 min</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
