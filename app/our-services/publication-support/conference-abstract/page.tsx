import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "Conference Abstract Writing Services",
  description: "Expert Conference Abstract Writing. Structured, compelling abstracts for academic conferences. All disciplines. Unique topic selection. Tutors India.",
};

const faqs = [
  { q: "What is a conference abstract and what should it include?", a: "An abstract defines a brief description of your concept that can be presented at an academic conference meeting. You need to establish that the selected topic is unique and a perfect selection for your paper. A conference abstract typically includes: research background and motivation, research objectives and questions, methodology, key findings, and contribution to knowledge — all within 250–500 words." },
  { q: "How do you ensure my abstract is accepted?", a: "We study the conference's call for papers, scope, and past accepted abstracts to understand what the reviewers are looking for. Our experienced writers frame your abstract to clearly communicate the research contribution, novelty, and relevance to the conference theme, maximising your chances of acceptance." },
  { q: "Can you help if I only have an idea and no completed research?", a: "Yes. We can write conference abstracts based on your proposed research idea, preliminary findings, or existing literature. We help you formulate a compelling research narrative that demonstrates the significance and potential contribution of your work." },
  { q: "How quickly can you deliver a conference abstract?", a: "Standard conference abstract delivery is within 24–48 hours. Express delivery within a few hours is available for urgent submission deadlines. Contact us immediately with your submission deadline." },
  { q: "Do you help with the full paper after the abstract is accepted?", a: "Yes. Tutors India provides end-to-end conference paper support — from abstract writing through to the full paper, PowerPoint presentation, and speaker notes. Once your abstract is accepted, we can develop the complete conference paper to the conference's author guidelines." },
];

export default function ConferenceAbstractPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}<Link href="/our-services/publication-support/" style={{ color: "#a0b8e0" }}>Publication Support</Link>{" / "}<span style={{ color: "#fff" }}>Conference Abstract</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              Conference Abstract Writing Services
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              An abstract defines a brief description of your concept that can be presented at an academic conference meeting. You need to establish that the selected topic is unique and is a perfect selection for your paper. Our experts write compelling conference abstracts across all disciplines that maximise your acceptance chances.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "20px" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/samples/publication-research.jpg" alt="Academic editing and research support" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>250–500 Words<br />24–48hr Delivery<br />All Conferences</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Expert Conference Abstract Writing</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>Our experts write compelling conference abstracts that clearly communicate your research background, objectives, methodology, key findings, and contribution to knowledge. We study the conference scope and past accepted abstracts to ensure your abstract aligns with what reviewers are looking for.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "14px", marginTop: "16px" }} className="four-col-grid">
            {[
              { icon: "🎯", title: "Research Background", desc: "Clear context and motivation for the research" },
              { icon: "❓", title: "Research Objectives", desc: "Well-defined questions the study addresses" },
              { icon: "🔬", title: "Methodology", desc: "Concise description of research approach" },
              { icon: "💡", title: "Key Contribution", desc: "Clear statement of novel contribution to field" },
            ].map(item => (
              <div key={item.title} style={{ background: "#f5f6fa", borderRadius: "8px", padding: "14px", border: "1px solid #dde2ef" }}>
                <div style={{ fontSize: "1.4rem", marginBottom: "6px" }}>{item.icon}</div>
                <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "4px" }}>{item.title}</div>
                <div style={{ fontSize: "0.76rem", color: "#666" }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "22px", marginBottom: "28px" }} className="two-col-grid">
          <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "14px" }}>What We Deliver</h3>
            {["250–500 word structured abstract", "Tailored to conference call for papers", "Background, objectives, methodology, findings", "Contribution to knowledge statement", "Plagiarism-free with Turnitin report", "Unlimited revisions until accepted", "Full paper support after acceptance"].map(item => (
              <div key={item} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", fontSize: "0.83rem", color: "#c5d5f0" }}>
                <span style={{ color: "#f9c74f", fontWeight: 700 }}>✓</span> {item}
              </div>
            ))}
          </div>
          <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px", border: "1px solid #dde2ef" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Conferences We Target</h3>
            {["IEEE, ACM, Elsevier conferences", "Springer conferences", "Wiley journal conferences", "Medical and health conferences", "Business and management conferences", "Engineering and technology conferences", "Social science conferences", "All disciplines covered"].map(s => (
              <div key={s} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid #dde2ef", fontSize: "0.83rem", color: "#555" }}>
                <span style={{ color: "#e87722", fontWeight: 700 }}>→</span> {s}
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Frequently Asked Questions</h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Your Conference Abstract Written by Experts</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>24–48hr Delivery · All Disciplines · Unlimited Revisions · Response in 30 min</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
