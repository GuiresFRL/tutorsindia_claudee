import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "Computer Science & Engineering Research Writing",
  description: "Expert CS & Engineering Research Paper Writing. AI, ML, Data Science, Software Engineering, Networks, VLSI. IEEE, ACM, Springer publications. Tutors India.",
};

const csServices = [
  { icon: "🤖", title: "AI & Machine Learning", desc: "Research papers on artificial intelligence, machine learning, deep learning, neural networks, NLP, and computer vision for IEEE, ACM, and Springer publications." },
  { icon: "💻", title: "Software Engineering", desc: "Software design, development methodologies, software testing, DevOps, and software quality research papers with implementation documentation." },
  { icon: "🌐", title: "Computer Networks", desc: "Network architecture, wireless communications, IoT, 5G/6G, network security, and protocol design research papers." },
  { icon: "🔒", title: "Cybersecurity", desc: "Information security, cryptography, blockchain, cyber threat analysis, privacy-preserving computation, and security protocol research." },
  { icon: "📊", title: "Data Science & Big Data", desc: "Data analytics, Hadoop, Spark, data mining, pattern recognition, and big data processing research for top CS conferences and journals." },
  { icon: "⚡", title: "VLSI & Embedded Systems", desc: "VLSI design, digital circuits, embedded systems, FPGA, ASIC design, and semiconductor device research papers." },
];

const faqs = [
  { q: "What CS and IT research services do you offer?", a: "Computer Science draws its foundation from a wide variety of disciplines including computer engineering, mathematics, and electrical engineering. We offer research paper writing, literature reviews, algorithm development documentation, experimental results analysis, and complete manuscript preparation for IEEE, ACM, Springer, and Elsevier CS journals and conferences." },
  { q: "Can you help with implementation and code documentation?", a: "Yes. Our CS experts can help document algorithms, describe implementation details, present experimental results, and write the methodology section covering your technical approach. For algorithm-specific content, we ensure clear, reproducible descriptions of all implemented methods." },
  { q: "Which CS journals and conferences do you target?", a: "We support papers targeting IEEE Transactions, ACM Transactions, Springer journals, Elsevier (Pattern Recognition, Expert Systems, Information Sciences), ICML, NeurIPS, CVPR, IJCAI, AAAI, ICLR, and all major CS conferences and journals. We format according to each venue's author guidelines." },
  { q: "Do you cover emerging areas like AI and Blockchain?", a: "Yes. Our CS writers are up-to-date with the latest developments in AI/ML, deep learning, blockchain, edge computing, quantum computing, federated learning, and other emerging areas. We write research papers that position your work within the current state of the art." },
  { q: "How do you ensure technical accuracy in CS papers?", a: "Our CS research writers hold PhD or Masters degrees in Computer Science, Software Engineering, or related fields from top universities. They verify all technical claims, algorithm descriptions, complexity analyses, and experimental methodologies before submission. All work undergoes peer review by a subject matter expert." },
];

export default function ComputerSciencePage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}<Link href="/our-services/publication-support/" style={{ color: "#a0b8e0" }}>Publication Support</Link>{" / "}<span style={{ color: "#fff" }}>CS & IT Research</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              Computer Science &amp; Engineering (CSE &amp; IT) Research Writing Services
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Computer Science, different from Mathematics and Physics, draws its foundation from a wide variety of disciplines. Our team offers comprehensive support for CS and engineering research papers — ensuring 100% plagiarism-free content for IEEE, ACM, Springer, and Elsevier publications.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "20px" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/tutorsindia-logo-hd.jpg" alt="Tutors India" style={{ width: "90px", height: "90px", objectFit: "contain", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>IEEE · ACM<br />Springer · Elsevier<br />AI · ML · Networks</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px", marginBottom: "28px" }} className="three-col-grid">
          {csServices.map(s => (
            <div key={s.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{s.icon}</div>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{s.title}</h3>
              <p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.65 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Frequently Asked Questions</h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Your CS Research Paper Written by Experts</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>IEEE · ACM · Springer · AI/ML · Networks · Response in 30 min</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
