import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Read Tutors India's terms and conditions covering service delivery, payment, refunds, revisions, and quality assurance.",
  
  alternates: { canonical: "https://tutorsindia.com/terms-and-conditions/" },
};

const sections = [
  {
    heading: "Our Organisation",
    content: `Tutors India operates through three key departments:
    <ul>
      <li><strong>Admin Division</strong> — handles all client inquiries, project coordination, and payments.</li>
      <li><strong>Technical Support / Expert Team</strong> — responsible for project execution by qualified academic experts.</li>
      <li><strong>Complaint / Feedback Team</strong> — addresses all post-delivery concerns, revisions, and client feedback.</li>
    </ul>
    <p>Tutors India acts as a facilitator connecting clients with qualified experts. Any delivery time period or pricing specified on the website is for representation purposes only; final terms are determined after thorough project assessment.</p>`,
  },
  {
    heading: "Payment Policy",
    content: `<ul>
      <li>Projects under <strong>30,000 words</strong> require 100% upfront payment before work commences.</li>
      <li>Larger projects (30,000+ words) may be eligible for installment payment options — please contact us to discuss.</li>
      <li>All payments must be received and confirmed before a project is assigned to an expert.</li>
      <li>We accept payments via all major credit/debit cards, bank transfers, and online payment gateways.</li>
    </ul>`,
  },
  {
    heading: "Refund Policy",
    content: `<ul>
      <li>Full refunds are only applicable if a project has <strong>not been assigned to a writer</strong> and has not started within 2 hours of payment confirmation.</li>
      <li>No refunds are permitted once work has commenced.</li>
      <li>Refund processing takes a minimum of <strong>14 working days</strong>.</li>
      <li>Cancellations are accepted within 24 hours of order placement (or within 3–6 hours for rush/urgent orders).</li>
    </ul>`,
  },
  {
    heading: "Revision & Alteration Policy",
    content: `<p>We offer a structured revision policy to ensure your satisfaction:</p>
    <ul>
      <li><strong>0–15 days post-delivery:</strong> Free minor revisions based on the original brief.</li>
      <li><strong>15–30 days post-delivery:</strong> Revision costs 10% of the original project fee.</li>
      <li><strong>30–60 days post-delivery:</strong> Revision costs up to 50% of the original project fee.</li>
      <li><strong>Beyond 60 days:</strong> New work is treated as a separate project and priced accordingly.</li>
    </ul>
    <p>Revisions must be based on the original project brief. Any change in scope or requirements will be treated as a new order.</p>`,
  },
  {
    heading: "Quality Assurance",
    content: `<ul>
      <li>All completed work undergoes a rigorous plagiarism check. The maximum permissible plagiarism limit is <strong>10%</strong>.</li>
      <li>A plagiarism report is available upon request at no additional charge.</li>
      <li>All work is proofread and quality-checked by our editorial team before delivery.</li>
      <li>We guarantee that all work is original, properly cited, and produced by qualified academic experts.</li>
    </ul>`,
  },
  {
    heading: "Disclaimer",
    content: `<p>Tutors India provides academic research support only. We explicitly state that we <strong>cannot guarantee that the client will obtain a specific grade or score</strong> as a result of using our services.</p>
    <p>Our services are intended as academic guidance and support material only, not as a substitute for a client's own independent academic work or professional advice.</p>
    <p>Tutors India reserves the right to reject or terminate any project at its discretion, including but not limited to cases involving unethical requirements, incomplete information, or breach of these terms.</p>`,
  },
  {
    heading: "Intellectual Property",
    content: `<p>All content, logos, images, and trademarks on this website are the property of Tutors India and may not be reproduced, distributed, or used without express written permission.</p>
    <p>Work completed on behalf of a client is delivered for the client's personal academic use only. Resale or redistribution of delivered work is strictly prohibited.</p>`,
  },
  {
    heading: "Governing Law",
    content: `<p>These terms and conditions are governed by the laws of India. Any disputes arising from the use of our services shall be subject to the exclusive jurisdiction of the courts in Chennai, India.</p>
    <p>By using our services, you agree to these terms and conditions in full.</p>`,
  },
];

export default function TermsPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "52px 20px 44px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>
            <span style={{ color: "#a0b8e0" }}> / </span>
            <span style={{ color: "#fff" }}>Terms and Conditions</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.4rem,3vw,2rem)", lineHeight: 1.3, marginBottom: "14px" }}>
            Terms and Conditions
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "0.95rem" }}>
            Please read these terms carefully before using Tutors India's services.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "48px 20px" }}>
        {sections.map((s) => (
          <div key={s.heading} style={{ marginBottom: "36px", background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "28px" }}>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.15rem", color: "#1a2a6c", marginBottom: "14px" }}>{s.heading}</h2>
            <div className="wp-content" dangerouslySetInnerHTML={{ __html: s.content }} />
          </div>
        ))}

        <div style={{ background: "#f0f4ff", borderRadius: "10px", padding: "28px", textAlign: "center", marginTop: "16px" }}>
          <p style={{ color: "#555", marginBottom: "16px" }}>Questions about our terms? Contact our team for clarification.</p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact-us/" style={{ padding: "10px 24px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
            <Link href="/order-now/" style={{ padding: "10px 24px", border: "1.5px solid #1a2a6c", color: "#1a2a6c", borderRadius: "5px", fontWeight: 600 }}>Order Now</Link>
          </div>
        </div>
      </div>

      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "44px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "10px" }}>Ready to Get Started?</h2>
        <p style={{ color: "#c5d5f0", fontSize: "0.96rem", marginBottom: "18px" }}>Join over 200,000 scholars who trust Tutors India for expert academic support.</p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "11px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/guarantees/" style={{ padding: "11px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Our Guarantees</Link>
        </div>
      </section>
    </>
  );
}
