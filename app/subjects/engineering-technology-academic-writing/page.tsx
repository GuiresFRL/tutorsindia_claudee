import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
export const metadata: Metadata = { title: "Engineering & Technology Academic Writing | Masters, PhD | Tutors India", description: "Expert Engineering & Technology academic writing. Civil, Mechanical, Electrical, Computer, Chemical, Aerospace. IEEE, ASCE, ASME publications. Masters & PhD. Tutors India." };
const disciplines = ["Civil & Structural Engineering","Mechanical Engineering","Electrical & Electronics Engineering","Computer Engineering & Software","Chemical Engineering","Aerospace & Aeronautical","Environmental Engineering","Biomedical Engineering","Materials Science","Industrial Engineering","Petroleum Engineering","Telecommunications Engineering","Automotive Engineering","Renewable Energy Engineering","Robotics & Mechatronics","VLSI & Embedded Systems"];
const faqs = [
  { q: "What engineering disciplines do you cover?", a: "Engineering research deals with the discovering and systematic conceptual structuring of knowledge. We cover all engineering disciplines including Civil & Structural, Mechanical, Electrical & Electronics, Computer Engineering, Chemical, Aerospace, Environmental, Biomedical, Materials Science, Industrial, Petroleum, Telecommunications, Automotive, Renewable Energy, Robotics & Mechatronics, and VLSI & Embedded Systems." },
  { q: "Which engineering journals and standards do you target?", a: "We support papers targeting IEEE Transactions, ASCE journals, ASME journals, Elsevier engineering journals, Springer engineering publications, and all major engineering conferences. We also ensure compliance with engineering standards and reporting requirements specific to each discipline." },
  { q: "Can you help with Masters and PhD engineering dissertations?", a: "Yes. We provide comprehensive support for Masters and PhD engineering dissertations — from topic selection and literature review through methodology, experimental design, results analysis, discussion, and conclusions. Our engineering experts have experience at both Masters and doctoral level in all engineering disciplines." },
  { q: "Do you help with technical calculations and simulations?", a: "Yes. Our engineering writers can help describe, explain, and present complex engineering calculations, simulations (MATLAB, ANSYS, COMSOL, LabVIEW), and mathematical derivations in clear academic writing. We ensure technical accuracy and compliance with your university's formatting requirements." },
  { q: "What citation styles do you use for engineering papers?", a: "For engineering, we primarily use IEEE (numbered) referencing for IEEE publications, and Harvard or APA for academic dissertations. We also support ASCE, ASME, and other discipline-specific referencing styles as required by your target journal or university." },
];
export default function EngineeringPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}><Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/subjects/" style={{ color: "#a0b8e0" }}>Subjects</Link>{" / "}<span style={{ color: "#fff" }}>Engineering & Technology</span></div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>Engineering &amp; Technology Academic Writing</h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>Engineering research deals with the discovering and systematic conceptual structuring of knowledge. Our team of qualified engineers provides academic writing support for Masters and PhD students across all engineering disciplines — from literature reviews to complete dissertations and journal publications.</p>
            <p style={{ color: "#f9c74f", fontSize: "0.92rem", fontWeight: 600, marginBottom: "22px" }}>IEEE · ASCE · ASME · All Engineering Disciplines · Masters &amp; PhD</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}><Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link><Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link></div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/tutorsindia-logo-hd.jpg" alt="Tutors India" style={{ width: "90px", height: "90px", objectFit: "contain", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>PhD Engineers<br />All Disciplines<br />IEEE · ASCE</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ marginBottom: "28px" }}><h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Engineering Disciplines We Cover</h2><div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>{disciplines.map(d => (<span key={d} style={{ padding: "5px 13px", background: "#fff", border: "1.5px solid #dde2ef", borderRadius: "16px", fontSize: "0.79rem", color: "#1a2a6c", fontWeight: 500 }}>{d}</span>))}</div></div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px", marginBottom: "28px" }} className="three-col-grid">
          {[{ icon: "📄", t: "Engineering Dissertations", d: "Complete Masters and PhD engineering dissertations with technical accuracy, experimental results, and IEEE/ASCE/ASME formatting." }, { icon: "🔬", t: "Technical Research Papers", d: "High-quality engineering research papers for journals and conferences across all IEEE, Elsevier, Springer, and ASME publications." }, { icon: "📊", t: "Simulation & Analysis", d: "MATLAB, ANSYS, COMSOL, LabVIEW simulation results written up and presented professionally for academic submission." }].map(s => (<div key={s.t} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px" }}><div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{s.icon}</div><h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{s.t}</h3><p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.65 }}>{s.d}</p></div>))}
        </div>
        <div style={{ marginBottom: "28px" }}><h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Frequently Asked Questions</h2><FaqAccordion faqs={faqs} /></div>
      </section>
      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Expert Engineering Writing Support</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>PhD Engineers · All Disciplines · IEEE · ASCE · Response in 30 min</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}><Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link><Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link></div>
      </section>
    </>
  );
}
