import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
export const metadata: Metadata = { title: "Computer Science & IT Academic Writing | Masters, PhD", description: "Expert Computer Science & IT academic writing. AI, ML, Data Science, Software Engineering, Networks, Cybersecurity. IEEE, ACM. Masters & PhD. Tutors India." };
const areas = ["Artificial Intelligence & ML","Data Science & Big Data","Software Engineering","Computer Networks","Cybersecurity & Information Security","Database Management Systems","Cloud Computing","Human-Computer Interaction","Computer Vision","Natural Language Processing","IoT & Embedded Systems","Blockchain Technology","Quantum Computing","High-Performance Computing","Operating Systems","Compiler Design"];
const journals = ["IEEE Transactions","ACM Computing Surveys","Journal of Systems & Software","Computers & Security","Expert Systems with Applications","Information Sciences","Pattern Recognition","Neural Networks","Knowledge-Based Systems","Future Generation Computer Systems"];
const faqs = [
  { q: "What computer science and IT topics do you cover?", a: "The Computer science engineering program aims to broaden knowledge in cutting edge computing areas. We cover Artificial Intelligence & Machine Learning, Data Science & Big Data, Software Engineering, Computer Networks, Cybersecurity, Database Management, Cloud Computing, Human-Computer Interaction, Computer Vision, NLP, IoT, Blockchain, Quantum Computing, and all other CS disciplines." },
  { q: "Can you help with algorithm documentation and implementation write-up?", a: "Yes. Our CS experts can help document algorithms, describe implementation details, present experimental results, and write the methodology section covering your technical approach. We ensure clear, reproducible descriptions of all implemented methods suitable for academic submission or journal publication." },
  { q: "Which CS journals and conferences do you target?", a: "We support papers targeting IEEE Transactions, ACM journals and conferences, Elsevier journals (Pattern Recognition, Expert Systems, Information Sciences, Neural Networks), Springer CS publications, and all major CS conferences (ICML, NeurIPS, CVPR, IJCAI, AAAI, ICLR). We format according to each venue's author guidelines." },
  { q: "Do you help with AI and machine learning research papers?", a: "Yes. Our AI/ML specialists are up-to-date with the latest developments in deep learning, reinforcement learning, federated learning, transformer models, computer vision, NLP, and all other ML areas. We write research papers that position your work within the current state of the art and clearly articulate your novel contribution." },
  { q: "What citation style do you use for CS papers?", a: "For CS papers, we primarily use IEEE referencing (numbered) for IEEE publications and ACM referencing for ACM publications. We also support Harvard, APA, and Chicago for CS dissertations and university submissions. We ensure all references are correctly formatted according to your target venue's requirements." },
];
export default function ComputerSciencePage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}><Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/subjects/" style={{ color: "#a0b8e0" }}>Subjects</Link>{" / "}<span style={{ color: "#fff" }}>Computer Science & IT</span></div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>Computer Science &amp; Information Technology Academic Writing</h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>The Computer science engineering program aims to broaden knowledge in cutting edge computing areas through comprehensive academic study. Our CS specialists provide academic writing support across AI, ML, Data Science, Software Engineering, Networks, Cybersecurity, and all CS disciplines.</p>
            <p style={{ color: "#f9c74f", fontSize: "0.92rem", fontWeight: 600, marginBottom: "22px" }}>IEEE · ACM · AI/ML · Data Science · Networks · Cybersecurity · All CS Areas</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}><Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link><Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link></div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/samples/dissertation-samples.webp" alt="Academic experts collaborating" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>PhD CS Experts<br />IEEE · ACM<br />AI · ML · Networks</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ marginBottom: "28px" }}><h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>CS & IT Areas We Cover</h2><div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>{areas.map(a => (<span key={a} style={{ padding: "5px 13px", background: "#fff", border: "1.5px solid #dde2ef", borderRadius: "16px", fontSize: "0.79rem", color: "#1a2a6c", fontWeight: 500 }}>{a}</span>))}</div></div>
        <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "22px", marginBottom: "28px" }}><h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "12px" }}>Target Journals & Conferences</h3><div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>{journals.map(j => (<span key={j} style={{ padding: "5px 14px", background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "16px", fontSize: "0.82rem", color: "#fff", fontWeight: 500 }}>{j}</span>))}</div></div>
        <div style={{ marginBottom: "28px" }}><h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Frequently Asked Questions</h2><FaqAccordion faqs={faqs} /></div>
      </section>
      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Expert CS & IT Writing Support</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>PhD CS Experts · IEEE · ACM · AI/ML · All CS Areas · Response in 30 min</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}><Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link><Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link></div>
      </section>
    </>
  );
}
