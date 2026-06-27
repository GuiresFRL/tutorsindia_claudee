import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
export const metadata: Metadata = { title: "Peer Review Submissions & Pre-Submission Support | Tutors India", description: "Expert Peer Review Submission support. Pre-submission checks, cover letter writing, reviewer response letters, resubmission support. All journals. Tutors India." };
const faqs = [
  { q: "What peer review submission services do you offer?", a: "We assist in preparing high-quality peer review submissions that meet journal standards and editorial expectations, ensuring your paper is in accordance with the target audience's expectations. Our services include pre-submission manuscript checks, cover letter writing, reviewer response letter preparation, resubmission support, and journal selection guidance." },
  { q: "Can you help me respond to peer reviewer comments?", a: "Yes. We provide comprehensive reviewer response letter writing — systematically addressing every reviewer comment with clear explanations of changes made and scientific justifications for unchanged elements. All responses are written in the professional, objective tone expected by journal editors and reviewers." },
  { q: "Can you help select the right journal for my manuscript?", a: "Yes. Our experts assess your manuscript's scope, methodology, and novelty and recommend appropriate target journals based on impact factor, readership, acceptance rates, and alignment with your research area. We help you avoid desk rejections by matching your manuscript to the most appropriate publication venue." },
  { q: "Do you help with the cover letter?", a: "Yes. We write compelling cover letters tailored to the target journal — clearly stating why your research is significant, why it is appropriate for the journal's readership, and what original contribution it makes to the field. Cover letters are included with our premium editing tier." },
  { q: "Can you help after a rejection?", a: "Yes. If your paper is rejected, we help you assess whether to revise and resubmit to the same journal or target a different publication. We assist with revising the manuscript based on reviewer feedback, preparing a resubmission letter, and reformatting for the new target journal." },
];
export default function PeerReviewPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}<Link href="/our-services/editing-services/" style={{ color: "#a0b8e0" }}>Editing Services</Link>{" / "}<span style={{ color: "#fff" }}>Peer Review Submissions</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>Peer Review Submissions &amp; Pre-Submission Support</h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>We assist in preparing high-quality peer review submissions that meet journal standards and editorial expectations, ensuring your paper is in accordance with the target audience&apos;s expectations. From journal selection to reviewer response letters — complete submission cycle support.</p>
            <p style={{ color: "#f9c74f", fontSize: "0.92rem", fontWeight: 600, marginBottom: "20px" }}>Pre-Submission Checks · Cover Letters · Reviewer Responses · Resubmission Support</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/tutorsindia-logo-hd.jpg" alt="Tutors India" style={{ width: "90px", height: "90px", objectFit: "contain", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>Full Submission<br />Cycle Support<br />All Journals</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px", marginBottom: "28px" }} className="three-col-grid">
          {[
            { icon: "🔍", t: "Pre-Submission Check", d: "Comprehensive pre-submission manuscript review — checking journal compliance, reporting guidelines, formatting, and language quality before submission." },
            { icon: "📧", t: "Cover Letter Writing", d: "Compelling cover letters tailored to the target journal — clearly stating significance, novelty, and relevance to the journal's readership." },
            { icon: "💬", t: "Reviewer Response Letters", d: "Professional point-by-point reviewer response letters addressing every comment with scientific justification and changes made." },
            { icon: "🎯", t: "Journal Selection", d: "Expert journal selection guidance — identifying the most appropriate publication venue based on scope, impact factor, and acceptance rates." },
            { icon: "🔄", t: "Resubmission Support", d: "Complete resubmission support after rejection — revising the manuscript, reformatting for the new journal, and preparing resubmission letter." },
            { icon: "📋", t: "Copyright & Ethics Forms", d: "Assistance with copyright transfer agreements, author contribution statements, conflict of interest declarations, and ethics documentation." },
          ].map(s => (<div key={s.t} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px" }}><div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{s.icon}</div><h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{s.t}</h3><p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.65 }}>{s.d}</p></div>))}
        </div>
        <div style={{ marginBottom: "28px" }}><h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Frequently Asked Questions</h2><FaqAccordion faqs={faqs} /></div>
      </section>
      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Complete Peer Review Submission Support</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>Pre-Submission · Cover Letters · Reviewer Responses · Resubmission · 30 min Response</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
