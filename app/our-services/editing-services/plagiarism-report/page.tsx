import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
export const metadata: Metadata = { title: "Plagiarism Report & Detection Services | Turnitin | Tutors India", description: "Expert Plagiarism Report & Detection Services. Turnitin scans, plagiarism removal, < 5% guarantee, plagiarism-free certificate. Academic writing support. Tutors India." };
const faqs = [
  { q: "What plagiarism detection tools do you use?", a: "Plagiarism refers to the act of appropriation of another person's language, ideas, or other original process. We provide detailed plagiarism reports using Turnitin and WriteCheck — the same tools used by universities worldwide. All work is scanned before delivery and we guarantee less than 5% similarity." },
  { q: "Can you reduce the plagiarism in my existing document?", a: "Yes. We provide plagiarism removal services — rewriting, paraphrasing, and restructuring content to reduce similarity scores while maintaining the academic integrity and meaning of your work. We scan the revised document again with Turnitin to confirm the score is below the required threshold." },
  { q: "What plagiarism percentage is acceptable for universities?", a: "Most UK, US, and Australian universities require less than 10–20% similarity for dissertations and thesis submissions. Academic journals typically require less than 5%. At Tutors India, we guarantee less than 5% plagiarism across all our writing and editing services, well within even the strictest requirements." },
  { q: "Do you provide a plagiarism-free certificate?", a: "Yes. We issue a plagiarism-free certificate with every order that passes our scanning threshold. This certificate confirms your document has been checked using Turnitin and meets publication or submission standards. You can submit this certificate alongside your paper to your journal or university." },
  { q: "How quickly do you provide plagiarism reports?", a: "Standard plagiarism reports are delivered within 24 hours. Express reports can be provided within a few hours for urgent submissions. Contact us with your deadline for an immediate assessment." },
];
export default function PlagiarismReportPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}<Link href="/our-services/editing-services/" style={{ color: "#a0b8e0" }}>Editing Services</Link>{" / "}<span style={{ color: "#fff" }}>Plagiarism Report</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>Plagiarism Report &amp; Detection Services</h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>Plagiarism refers to the act of appropriation of another person&apos;s language, ideas, or other original process. We provide detailed plagiarism reports using Turnitin and other advanced detection tools — with less than 5% similarity guaranteed and a plagiarism-free certificate issued.</p>
            <p style={{ color: "#f9c74f", fontSize: "0.92rem", fontWeight: 600, marginBottom: "20px" }}>Turnitin Scans · &lt; 5% Guarantee · Plagiarism-Free Certificate · Removal Service</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/tutorsindia-logo-hd.jpg" alt="Tutors India" style={{ width: "90px", height: "90px", objectFit: "contain", marginBottom: "10px" }} />
            <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#f9c74f" }}>&lt; 5%</div>
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0" }}>Plagiarism<br />Guaranteed<br />Turnitin Verified</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px", marginBottom: "28px" }} className="three-col-grid">
          {[
            { icon: "🔍", title: "Turnitin Plagiarism Scan", desc: "Full document scan using the same Turnitin tool used by universities worldwide. Detailed similarity report showing all matches." },
            { icon: "✂️", title: "Plagiarism Removal", desc: "Rewriting, paraphrasing, and restructuring of flagged content to reduce similarity scores below your required threshold." },
            { icon: "🏆", title: "Plagiarism-Free Certificate", desc: "Official Tutors India certificate confirming your document has been scanned and meets publication or submission standards." },
          ].map(s => (<div key={s.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "22px" }}><div style={{ fontSize: "2rem", marginBottom: "10px" }}>{s.icon}</div><h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "8px" }}>{s.title}</h3><p style={{ fontSize: "0.85rem", color: "#666", lineHeight: 1.65 }}>{s.desc}</p></div>))}
        </div>
        <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "24px", marginBottom: "28px" }}>
          <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "14px" }}>Our Plagiarism Guarantee</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "14px" }} className="three-col-grid">
            {["Less than 5% similarity guaranteed on all work","Turnitin and WriteCheck scanning","Plagiarism-free certificate issued","Rewriting and paraphrasing services","Streamlined high-quality writing process","No copy-pasting — all brainstormed original content","Free re-scanning after revision","24-hour express report delivery"].map(item => (<div key={item} style={{ display: "flex", gap: "8px", fontSize: "0.82rem", color: "#c5d5f0", padding: "5px 0", borderBottom: "1px solid rgba(255,255,255,0.1)" }}><span style={{ color: "#f9c74f", fontWeight: 700 }}>✓</span> {item}</div>))}
          </div>
        </div>
        <div style={{ marginBottom: "28px" }}><h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Frequently Asked Questions</h2><FaqAccordion faqs={faqs} /></div>
      </section>
      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get a Plagiarism Report &amp; Certificate Today</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>Turnitin Scans · &lt;5% Guarantee · Certificate Issued · 24hr Delivery · 30 min Response</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
