import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
export const metadata: Metadata = { title: "Grant Proposal Writing Services | Research Funding", description: "Expert Grant Proposal Writing Services. Research funding applications, NIH, RCUK, Wellcome Trust, EU Horizon. Expert writers and core technical editors. Tutors India." };
const faqs = [
  { q: "What grant proposal writing services do you offer?", a: "Our expert grant writers and core technical and scientific editing professionals ensure to develop and edit grant proposals meeting funder requirements and demonstrating compelling research value. We cover research council applications (RCUK, NIH, NSF, EU Horizon, Wellcome Trust, NIHR), institutional grants, industry-funded research proposals, and charitable foundation applications." },
  { q: "Can you help with the full grant application?", a: "Yes. We provide end-to-end grant proposal support — from identifying suitable funding opportunities through to writing the complete application including lay summary, scientific case for support, impact statement, methodology, timeline, budget justification, CVs of key investigators, and letters of support." },
  { q: "Do you have experience with specific funding bodies?", a: "Yes. Our grant writers have experience with major funding bodies including RCUK (EPSRC, MRC, AHRC, ESRC, BBSRC, NERC), NIH, NSF, EU Horizon Europe, Wellcome Trust, NIHR, ERC, and many charitable and industry funders. We understand the specific requirements, review criteria, and language expected by each funder." },
  { q: "Can you edit an existing grant proposal?", a: "Yes. We provide grant proposal editing services — reviewing your existing draft for clarity, logical flow, scientific rigour, compliance with funder guidelines, and compelling presentation of research value. We also ensure the proposal meets all word count and formatting requirements." },
  { q: "How do you ensure our proposal stands out to reviewers?", a: "We cannot guarantee I will express how pleased I am with how the resume turned out. We focus on clearly articulating the originality, significance, feasibility, and impact of the research. Our writers have extensive experience interpreting funder review criteria and crafting proposals that directly address what reviewers are looking for." },
];
export default function GrantProposalPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}<Link href="/our-services/editing-services/" style={{ color: "#a0b8e0" }}>Editing Services</Link>{" / "}<span style={{ color: "#fff" }}>Grant Proposal Writing</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>Grant Proposal Writing Services</h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>Our expert grant writers and core technical &amp; scientific editing professionals ensure to develop and edit grant proposals meeting funder requirements and demonstrating compelling research value. We support applications to RCUK, NIH, NSF, EU Horizon Europe, Wellcome Trust, NIHR, and many more.</p>
            <p style={{ color: "#f9c74f", fontSize: "0.92rem", fontWeight: 600, marginBottom: "20px" }}>RCUK · NIH · NSF · EU Horizon · Wellcome Trust · NIHR &amp; more</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/tutorsindia-logo-hd.jpg" alt="Tutors India" style={{ width: "90px", height: "90px", objectFit: "contain", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>RCUK · NIH · NSF<br />EU Horizon<br />Wellcome Trust</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px", marginBottom: "28px" }} className="three-col-grid">
          {[{ icon: "✍️", t: "Full Proposal Writing", d: "Complete grant application writing from case for support to lay summary, impact, timeline, and budget justification." }, { icon: "✏️", t: "Proposal Editing", d: "Review and editing of existing grant proposal drafts for clarity, flow, scientific rigour, and funder compliance." }, { icon: "🎯", t: "Funder-Specific Support", d: "Tailored proposals meeting exact requirements of RCUK, NIH, EU Horizon, Wellcome Trust, NIHR, and more." }].map(s => (<div key={s.t} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px" }}><div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{s.icon}</div><h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{s.t}</h3><p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.65 }}>{s.d}</p></div>))}
        </div>
        <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "24px", marginBottom: "28px" }}>
          <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "14px" }}>Grant Proposal Sections We Write</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "10px" }} className="three-col-grid">
            {["Scientific case for support","Lay summary","Impact statement","Research methodology","Project timeline","Budget justification","CVs of key investigators","Letters of support","Data management plan","Ethics and risk assessment"].map(item => (<div key={item} style={{ display: "flex", gap: "8px", fontSize: "0.82rem", color: "#c5d5f0", padding: "5px 0", borderBottom: "1px solid rgba(255,255,255,0.1)" }}><span style={{ color: "#f9c74f", fontWeight: 700 }}>✓</span> {item}</div>))}
          </div>
        </div>
        <div style={{ marginBottom: "28px" }}><h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Frequently Asked Questions</h2><FaqAccordion faqs={faqs} /></div>
      </section>
      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Expert Grant Proposal Writing Support</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>RCUK · NIH · EU Horizon · Wellcome · Full Application · Response in 30 min</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
