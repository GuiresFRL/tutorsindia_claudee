import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "Engineering Research Writing Services | Masters & PhD | Tutors India",
  description: "Expert Engineering Research Paper Writing for Masters and PhD. Civil, Mechanical, Electrical, Chemical, Structural Engineering. IEEE, ASCE, ASME. Tutors India.",
};

const engineeringAreas = [
  { icon: "🏗️", title: "Civil & Structural Engineering", desc: "Structural analysis, construction management, geotechnical engineering, transportation, environmental engineering research papers." },
  { icon: "⚙️", title: "Mechanical Engineering", desc: "Thermodynamics, fluid mechanics, manufacturing, materials science, robotics, CAD/CAM, and mechatronics research." },
  { icon: "⚡", title: "Electrical & Electronics", desc: "Power systems, control systems, signal processing, microelectronics, and power electronics research papers." },
  { icon: "🔬", title: "Chemical Engineering", desc: "Process engineering, reaction kinetics, materials processing, polymer science, and chemical process design research." },
  { icon: "🌱", title: "Environmental Engineering", desc: "Environmental impact assessment, waste management, water treatment, sustainability, and green engineering research." },
  { icon: "🛸", title: "Aerospace & Automotive", desc: "Aerodynamics, propulsion, structural mechanics, vehicle dynamics, and aerospace systems research papers." },
];

const faqs = [
  { q: "What engineering research writing services do you offer?", a: "At Tutors India, in a very short time we help you refocus and prepare significant progress on your engineering Masters or PhD thesis or research paper. We specialise in all areas of engineering research including Civil, Mechanical, Electrical, Chemical, Environmental, Aerospace, and Automotive engineering." },
  { q: "Can you help with experimental data analysis and results?", a: "Yes. Our engineering research writers can analyse experimental data, present results with appropriate engineering statistical methods, create tables and figures, and interpret findings in the context of existing engineering literature. We ensure results are presented clearly and professionally." },
  { q: "Which engineering journals and conferences do you target?", a: "We support papers for IEEE, ASCE (American Society of Civil Engineers), ASME (American Society of Mechanical Engineers), Elsevier engineering journals, Springer engineering publications, and all major engineering conferences and journals across all specialisms." },
  { q: "Do you help with Masters and PhD engineering theses?", a: "Yes. We provide comprehensive support for Masters and PhD engineering dissertations and theses — from topic selection and literature review through methodology, experimental design, results, discussion, and conclusions. Our engineering experts have experience at both Masters and doctoral level." },
  { q: "How do you handle complex engineering calculations?", a: "Our engineering writers hold Masters or PhD degrees in the relevant engineering discipline. They are capable of describing, explaining, and presenting complex engineering calculations, simulations, and mathematical derivations in clear academic writing aligned to your university's formatting requirements." },
];

export default function EngineeringResearchPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}<Link href="/our-services/publication-support/" style={{ color: "#a0b8e0" }}>Publication Support</Link>{" / "}<span style={{ color: "#fff" }}>Engineering Research</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              Engineering Research Writing Services
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              At Tutors India, in a very short time we help you refocus and prepare significant progress on your engineering Masters or PhD thesis. Our engineers specialise in all areas of engineering research — helping you publish in IEEE, ASCE, ASME, and other leading engineering journals.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "20px" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/tutorsindia-logo-hd.jpg" alt="Tutors India" style={{ width: "90px", height: "90px", objectFit: "contain", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>IEEE · ASCE · ASME<br />All Engineering<br />Masters &amp; PhD</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px", marginBottom: "28px" }} className="three-col-grid">
          {engineeringAreas.map(s => (
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
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Your Engineering Research Paper Written by Experts</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>IEEE · ASCE · ASME · All Engineering Disciplines · Response in 30 min</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
