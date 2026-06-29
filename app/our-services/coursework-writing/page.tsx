import Link from "next/link";
import type { Metadata } from "next";
import { serviceCategories } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Coursework Writing Services UK | Essays, Reports, Reviews | Tutors India",
  description: "Expert Coursework Writing Services for Master's, MBA and PhD students. Essay Writing, Annotated Bibliography, Reflective Reports, Critical Reviews and more. Tutors India.",
};

const cat = serviceCategories.find(c => c.slug === "coursework-writing")!;

const features = [
  { icon: "🎓", title: "Postgraduate Level Quality", desc: "All coursework written to Masters, MBA and PhD academic standards by qualified researchers with degrees from top UK and US universities." },
  { icon: "📚", title: "Peer-Reviewed Sources Only", desc: "We use only peer-reviewed scholarly articles, textbooks, and credible academic databases — ProQuest, Emerald, Web of Science, Google Scholar." },
  { icon: "✅", title: "Rubric-Based Writing", desc: "Every piece is written with the university assessment criteria and marking rubric in mind to maximise your grade potential." },
  { icon: "🛡️", title: "Plagiarism Free", desc: "All work scanned using Turnitin before delivery. Less than 5% plagiarism guaranteed with certificate. 100% original content." },
  { icon: "🔁", title: "Unlimited Revisions", desc: "Free unlimited revisions for committed work, even after project completion. Minor changes within 24 hours, significant within 48 hours." },
  { icon: "🔒", title: "100% Confidential", desc: "NDA-signed writers, unique project codes, 128-bit SSL encryption. Your identity and project details are never disclosed." },
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies",
  "Marketing & Communication", "Engineering & Technology", "Natural Sciences & Mathematics",
  "Biological & Life Science", "Economics & Administration", "Humanities & Social Science",
  "Law", "Medicine & Health", "Education & Training", "Journalism & Media",
  "Agriculture & Forestry", "Computer Science & IT", "Hospitality, Leisure & Sports",
];

export default function CourseworkWritingPage() {
  const half = Math.ceil(cat.services.length / 2);
  return (
    <>
      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
              <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}
              <span style={{ color: "#fff" }}>Coursework Writing</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.2rem)", lineHeight: 1.3, marginBottom: "14px" }}>
              Are you struggling with your UK Master's M.Sc., M.Phil, MA, M.Ed. and MBA, DBA PhD Coursework Writing?
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Tutors India offers excellent custom coursework writing services by professional expert writers from the UK. We make a difference in terms of deadline and overall grade. Our US &amp; UK writers aim at inculcating knowledge within students and building great confidence in their academic work.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/tutorsindia-logo-hd.jpg" alt="Tutors India" style={{ width: "90px", height: "90px", objectFit: "contain", marginBottom: "10px" }} />
            <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#f9c74f" }}>2,00,000+</div>
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0" }}>Scholars Served<br />Since 2001</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      {/* STATS BAR */}
      <div style={{ background: "#12214a", padding: "16px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: "2,000+", l: "Expert Writers" }, { n: "2,00,000+", l: "Scholars Served" }, { n: "22+", l: "Years Experience" }, { n: "< 5%", l: "Plagiarism" }, { n: "Unlimited", l: "Revisions" }, { n: "30 min", l: "Response" }].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
              <div style={{ fontSize: "0.68rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES LISTING */}
      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>
          What Services Do We Offer Under Coursework Writing?
        </h2>
        <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "24px" }}>Comprehensive academic coursework support for every level of study</p>
        <div style={{ background: "#fff", borderRadius: "12px", border: "1px solid #dde2ef", padding: "28px", marginBottom: "36px" }}>
          <div className="service-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0" }}>
            <div style={{ paddingRight: "20px" }}>
              {cat.services.slice(0, half).map(svc => (
                <div key={svc.href} style={{ padding: "16px 0", borderBottom: "1px solid #f0f2fa" }}>
                  <Link href={svc.href}><h3 style={{ fontSize: "0.95rem", fontWeight: 600, color: "#2563b0", marginBottom: "5px" }}>{svc.title}</h3></Link>
                  <p style={{ fontSize: "0.84rem", color: "#666", lineHeight: 1.6, marginBottom: "6px" }}>{svc.description}</p>
                  <Link href={svc.href} style={{ fontSize: "0.82rem", color: "#e87722", fontWeight: 600 }}>Learn More →</Link>
                </div>
              ))}
            </div>
            <div style={{ paddingLeft: "20px", borderLeft: "1px solid #dde2ef" }} className="service-right">
              {cat.services.slice(half).map(svc => (
                <div key={svc.href} style={{ padding: "16px 0", borderBottom: "1px solid #f0f2fa" }}>
                  <Link href={svc.href}><h3 style={{ fontSize: "0.95rem", fontWeight: 600, color: "#2563b0", marginBottom: "5px" }}>{svc.title}</h3></Link>
                  <p style={{ fontSize: "0.84rem", color: "#666", lineHeight: 1.6, marginBottom: "6px" }}>{svc.description}</p>
                  <Link href={svc.href} style={{ fontSize: "0.82rem", color: "#e87722", fontWeight: 600 }}>Learn More →</Link>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: "#fff8f0", borderLeft: "4px solid #e87722", padding: "12px 16px", borderRadius: "0 6px 6px 0", marginTop: "18px", fontSize: "0.86rem", color: "#555" }}>
            <strong style={{ color: "#e87722" }}>Note:</strong> {cat.note}
          </div>
        </div>

        {/* FEATURES */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>
          Why Choose Tutors India for Coursework Writing?
        </h2>
        <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "20px" }}>Trusted by 2,00,000+ scholars since 2001</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px", marginBottom: "40px" }} className="three-col-grid">
          {features.map(f => (
            <div key={f.title} style={{ background: "#fff", borderRadius: "10px", padding: "22px", border: "1px solid #dde2ef" }}>
              <div style={{ fontSize: "2rem", marginBottom: "10px" }}>{f.icon}</div>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "7px" }}>{f.title}</h3>
              <p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.65 }}>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* FREE DELIVERABLES + EXPERT TEAM */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px", marginBottom: "40px", alignItems: "start" }} className="two-col-grid">
          <div>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Free Deliverables with Every Order</h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {["Abstract or Executive Summary", "Graphs & Tables (redrawn)", "Statistical / textual data analysis", "SPSS / software screenshots", "Free tutoring sessions", "Free research articles used in writing", "Questionnaire or interview guide", "Appendices at no additional cost"].map(item => (
                <li key={item} style={{ display: "flex", gap: "8px", padding: "8px 0", borderBottom: "1px solid #f0f2fa", fontSize: "0.88rem", color: "#555" }}>
                  <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "28px" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "12px" }}>Our Expert Team</h3>
            <ul style={{ listStyle: "none", padding: 0, marginBottom: "20px" }}>
              {["2000+ experts across subjects & countries", "USA, UK, Australia, Canada, New Zealand, Germany, France, Russia, Ukraine", "PhD and Masters degree holders", "Trained at Harvard, Oxford, London Business School", "Minimum 5 years research experience", "NDA-signed and background-checked", "24/7 availability across all time zones"].map(item => (
                <li key={item} style={{ display: "flex", gap: "8px", padding: "7px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", fontSize: "0.85rem", color: "#c5d5f0" }}>
                  <span style={{ color: "#f9c74f" }}>→</span> {item}
                </li>
              ))}
            </ul>
            <div style={{ display: "flex", gap: "10px" }}>
              <Link href="/order-now/" style={{ flex: 1, textAlign: "center", padding: "10px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Order Now</Link>
              <Link href="/contact-us/" style={{ flex: 1, textAlign: "center", padding: "10px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
        </div>

        {/* SUBJECTS */}
        <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Subject Matter Expertise Areas</h2>
          <p style={{ color: "#666", fontSize: "0.86rem", marginBottom: "14px" }}>USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {subjects.map(s => (<span key={s} style={{ padding: "5px 13px", background: "#fff", border: "1.5px solid #dde2ef", borderRadius: "16px", fontSize: "0.79rem", color: "#1a2a6c", fontWeight: 500 }}>{s}</span>))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Ready to Get Started with Your Coursework?</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>Join 2,00,000+ scholars. Response within 30 minutes · Unlimited Revisions · Plagiarism-Free</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>

      <style>{`@media(max-width:768px){.service-two-col{grid-template-columns:1fr!important;}.service-right{padding-left:0!important;border-left:none!important;margin-top:16px;}}`}</style>
    </>
  );
}
