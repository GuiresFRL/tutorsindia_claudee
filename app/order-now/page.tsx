import Link from "next/link";
import type { Metadata } from "next";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Order Your Project",
  description: "Order academic writing, dissertation support, statistical analysis or editing from Tutors India. Response within 30 minutes. Trusted since 2001.",
  alternates: { canonical: "https://www.tutorsindia.com/order-now" },
};

const processSteps = [
  { n: "01", title: "Fill in Your Details", desc: "Complete the enquiry form with your topic, word count, deadline, university guidelines, and any specific requirements.", icon: "📋" },
  { n: "02", title: "Receive Reference Number", desc: "Upon receiving your enquiry, we assign you a reference number. Track your paper status anytime via email or our CRM system.", icon: "🔢" },
  { n: "03", title: "Payment & Acknowledgement", desc: "After payment, an acknowledgement is sent. The writing process begins within a couple of days after receiving your order.", icon: "💳" },
  { n: "04", title: "Expert Assigned", desc: "We assign a passionate, qualified writer with relevant subject expertise and research experience to your project.", icon: "🎓" },
  { n: "05", title: "Quality Checking", desc: "Three-level quality check — Technical QC, Editor QC, final requirement verification and Turnitin plagiarism scan before delivery.", icon: "✅" },
  { n: "06", title: "Delivery & Revisions", desc: "Download your work through our CRM. Request unlimited free revisions until you are 100% satisfied.", icon: "📥" },
];

const whatWeNeed = [
  { icon: "📌", item: "Your dissertation or assignment topic (or area of interest if no topic yet)" },
  { icon: "📏", item: "Word count / page count required" },
  { icon: "📅", item: "Submission deadline" },
  { icon: "🏫", item: "University name and country" },
  { icon: "📋", item: "University-specific guidelines or rubric (if available)" },
  { icon: "📊", item: "Academic level (UG, Masters, MBA, PhD)" },
  { icon: "📚", item: "Preferred referencing style (Harvard, APA, MLA, Vancouver, etc.)" },
  { icon: "📝", item: "Any specific instructions or previous work for reference" },
];

const guarantees = [
  { icon: "🛡️", title: "Plagiarism Free", desc: "Less than 5% or 0% guaranteed with Turnitin certificate" },
  { icon: "🔁", title: "Unlimited Revisions", desc: "Free revisions even after project completion" },
  { icon: "⏱", title: "On-Time Delivery", desc: "95–98% on-time rate — minor changes in 24 hours" },
  { icon: "🔒", title: "100% Confidential", desc: "NDA-signed writers, unique project codes, SSL encryption" },
  { icon: "📞", title: "24/7 Support", desc: "Email, phone, WhatsApp — always available" },
  { icon: "💷", title: "Affordable Pricing", desc: "Student-friendly rates in your currency" },
];

export default function OrderNowPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<span style={{ color: "#fff" }}>Order Now</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.6rem,3vw,2.2rem)", marginBottom: "14px" }}>Order Your Project</h1>
            <p style={{ color: "#c5d5f0", fontSize: "1.05rem", marginBottom: "10px" }}>Invest in Your Career — Place Your Order Today</p>
            <p style={{ color: "#a0b8e0", fontSize: "0.92rem", lineHeight: 1.75, maxWidth: "660px", marginBottom: "22px" }}>
              Join 2,00,000+ scholars who have trusted Tutors India with their academic success since 2001. You will get a reply within 30 minutes which enables you to place your order quickly without any delay in submissions.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/contact-us/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Send Enquiry Now</Link>
              <a href="tel:+441143520021" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>📞 Call UK Office</a>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/samples/dissertation-samples.webp" alt="Academic experts collaborating" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#f9c74f" }}>30 min</div>
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0" }}>Response<br />Guaranteed</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      {/* Stats */}
      <div style={{ background: "#12214a", padding: "16px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: "10,000+", l: "Scholars Served" }, { n: "25+", l: "Years Experience" }, { n: "150+", l: "Expert Writers" }, { n: "< 5%", l: "Plagiarism" }, { n: "Unlimited", l: "Revisions" }, { n: "30 min", l: "Response" }].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
              <div style={{ fontSize: "0.68rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>

        {/* Contact Info + What We Need */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", marginBottom: "48px", alignItems: "start" }} className="two-col-grid">

          {/* Contact Form */}
          <div>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px" }}>Contact Us to Place Your Order</h2>
            <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "24px" }}>
              <ContactForm />
            </div>
          </div>

          {/* What We Need */}
          <div>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px" }}>What Information Do We Need?</h2>
            <p style={{ color: "#666", fontSize: "0.96rem", marginBottom: "16px", lineHeight: 1.65 }}>
              To provide you with an accurate quote within 30 minutes and ensure we deliver exactly what you need, please have the following information ready when you contact us:
            </p>
            {whatWeNeed.map(item => (
              <div key={item.item} style={{ display: "flex", gap: "10px", padding: "10px 0", borderBottom: "1px solid #f0f2fa", fontSize: "0.94rem", color: "#555" }}>
                <span style={{ fontSize: "1.1rem", flexShrink: 0 }}>{item.icon}</span>
                {item.item}
              </div>
            ))}
            <div style={{ marginTop: "20px" }}>
              <Link href="/contact-us/" style={{ display: "block", textAlign: "center", padding: "12px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "0.95rem" }}>
                Send Your Requirements Now →
              </Link>
            </div>
          </div>
        </div>

        {/* Order Process */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px", textAlign: "center" }}>Our Order Process — 6 Simple Steps</h2>
        <p style={{ color: "#666", fontSize: "0.96rem", marginBottom: "28px", textAlign: "center" }}>Transparent, straightforward, and designed around your success</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px", marginBottom: "48px" }} className="three-col-grid">
          {processSteps.map(step => (
            <div key={step.n} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "22px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "50%", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem", fontWeight: 700, flexShrink: 0 }}>{step.n}</div>
                <div style={{ fontSize: "1.4rem" }}>{step.icon}</div>
              </div>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{step.title}</h3>
              <p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.6 }}>{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Guarantees */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "24px", textAlign: "center" }}>Our Guarantees When You Order</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px", marginBottom: "48px" }} className="three-col-grid">
          {guarantees.map(g => (
            <div key={g.title} style={{ background: "#f5f6fa", borderRadius: "10px", padding: "20px", border: "1px solid #dde2ef", textAlign: "center" }}>
              <div style={{ fontSize: "2rem", marginBottom: "8px" }}>{g.icon}</div>
              <h3 style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "5px" }}>{g.title}</h3>
              <p style={{ fontSize: "0.8rem", color: "#666", lineHeight: 1.55 }}>{g.desc}</p>
            </div>
          ))}
        </div>

        {/* Services List */}
        <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "36px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "20px", textAlign: "center" }}>Services You Can Order</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "8px" }} className="three-col-grid">
            {["Masters Dissertation Writing","PhD / DBA Dissertation","Dissertation Proposal","Dissertation Topic Selection","Resit Dissertation","Statistical Analysis","Literature Review","Research Methodology","Essay Writing","Assignment Writing","Case Report Writing","Exam Notes","Annotated Bibliography","Reflective Report","Critical Review","References Collection","Manuscript Development","Conference Paper","Medical Writing","Biostatistics Services","Language Editing","Technical Editing","Plagiarism Report","Citation Compliance","Formatting Service","Scientific Editing","Grant Proposal Writing","Coding & Algorithm","Software Development","Big Data Analytics","Web Solutions","Graphic Design","Online Tutoring","E-Learning Development","CV Writing","Poster Presentation"].map(svc => (
              <div key={svc} style={{ display: "flex", gap: "7px", fontSize: "0.8rem", color: "#c5d5f0", padding: "4px 0" }}>
                <span style={{ color: "#f9c74f", fontWeight: 700, flexShrink: 0 }}>✓</span> {svc}
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "24px" }}>
            <Link href="/our-services/" style={{ padding: "10px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "0.96rem" }}>
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Ready to Get Started? Contact Us Now</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>Response within 30 minutes · No obligation · Free consultation</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/contact-us/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Send Enquiry</Link>
          <a href="tel:+441143520021" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>📞 Call UK: +44-1143520021</a>
        </div>
      </section>
      <style>{`@media(max-width:768px){.two-col-grid{grid-template-columns:1fr!important;}.three-col-grid{grid-template-columns:1fr!important;}}`}</style>
    </>
  );
}
