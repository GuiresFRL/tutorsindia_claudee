import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ask an Expert — Free Academic Consultation | Tutors India",
  description: "Ask our academic experts any question about your dissertation, thesis, assignment, or research. Free consultation within 30 minutes. Tutors India.",
};

const expertAreas = [
  { icon: "📝", title: "Dissertation & Thesis", desc: "Topic selection, proposal writing, chapter structure, methodology, data analysis, viva preparation" },
  { icon: "📊", title: "Statistical Analysis", desc: "SPSS, R, STATA, NVIVO, quantitative & qualitative analysis, results interpretation" },
  { icon: "📚", title: "Literature Review", desc: "Research gap identification, thematic synthesis, systematic review, PRISMA" },
  { icon: "🔬", title: "Research Methodology", desc: "Research design, philosophical stance, sampling, data collection, validity & reliability" },
  { icon: "✏️", title: "Academic Writing & Editing", desc: "Language editing, technical editing, formatting, citation compliance, plagiarism checking" },
  { icon: "🎓", title: "Subject-Specific Help", desc: "Law, Engineering, Medicine, Business, Computer Science, Humanities, and all disciplines" },
  { icon: "📄", title: "Publication & Manuscripts", desc: "Journal targeting, reviewer responses, manuscript development, grant proposals" },
  { icon: "💼", title: "Career & CV Support", desc: "Professional CV writing, cover letters, LinkedIn profiles, academic career guidance" },
];

const experts = [
  { name: "Dr. Nancy", role: "Chief Technical Officer", qual: "PhD, University of Birmingham", expertise: "Research Methodology, Dissertation Writing", avatar: "🎓" },
  { name: "Prof. Michael", role: "Head of Statistical Services", qual: "PhD Statistics, London School of Economics", expertise: "SPSS, R, SEM, Biostatistics", avatar: "📊" },
  { name: "Dr. Sarah", role: "Senior Language Editor", qual: "PhD English, University of Oxford", expertise: "Language Editing, Academic Writing", avatar: "✍️" },
  { name: "Dr. Raj", role: "Engineering Research Lead", qual: "PhD Engineering, IIT & University of Manchester", expertise: "Engineering Research, IEEE Publications", avatar: "⚙️" },
  { name: "Dr. Emily", role: "Medical Writing Specialist", qual: "MD, PhD, Clinical Research", expertise: "Medical Writing, Systematic Reviews, PRISMA", avatar: "🏥" },
  { name: "Dr. Chen", role: "Computer Science Expert", qual: "PhD Computer Science, University of Edinburgh", expertise: "AI/ML, Software Engineering, IEEE", avatar: "💻" },
];

const howItWorks = [
  { n: "01", title: "Submit Your Question", desc: "Fill in the form below with your academic question, subject area, and university details." },
  { n: "02", title: "Expert Assigned", desc: "We match you with the most appropriate subject matter expert within 30 minutes." },
  { n: "03", title: "Get Your Answer", desc: "Receive a detailed, expert response via email within your specified timeframe." },
  { n: "04", title: "Follow Up", desc: "Ask follow-up questions or proceed to place an order for comprehensive academic support." },
];

export default function AskAnExpertPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<span style={{ color: "#fff" }}>Ask an Expert</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.6rem,3vw,2.2rem)", marginBottom: "14px" }}>Ask Our Academic Experts</h1>
            <p style={{ color: "#c5d5f0", fontSize: "1.05rem", marginBottom: "20px", maxWidth: "680px" }}>
              Have a question about your dissertation, thesis, research methodology, or any academic challenge? Our PhD-qualified subject matter experts are ready to help. Get a free consultation response within 30 minutes.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/contact-us/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact an Expert</Link>
              <Link href="/order-now/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Place an Order</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/tutorsindia-logo-hd.jpg" alt="Tutors India" style={{ width: "90px", height: "90px", objectFit: "contain", marginBottom: "10px" }} />
            <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#f9c74f" }}>30 min</div>
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0" }}>Response Time<br />Free Consultation</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      <div style={{ background: "#12214a", padding: "16px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: "2,000+", l: "Subject Experts" }, { n: "30 min", l: "Response Time" }, { n: "Free", l: "Consultation" }, { n: "24/7", l: "Availability" }, { n: "22+", l: "Years Experience" }, { n: "80+", l: "Countries Served" }].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
              <div style={{ fontSize: "0.68rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>

        {/* Areas of Expertise */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px", textAlign: "center" }}>Areas You Can Ask Our Experts About</h2>
        <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "28px", textAlign: "center" }}>Our 2000+ PhD-qualified experts cover all aspects of academic work</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "18px", marginBottom: "48px" }} className="four-col-grid">
          {expertAreas.map(area => (
            <div key={area.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px", textAlign: "center" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{area.icon}</div>
              <h3 style={{ fontSize: "0.9rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{area.title}</h3>
              <p style={{ fontSize: "0.78rem", color: "#666", lineHeight: 1.55 }}>{area.desc}</p>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "24px", textAlign: "center" }}>How It Works</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "16px", marginBottom: "48px" }} className="four-col-grid">
          {howItWorks.map(step => (
            <div key={step.n} style={{ background: "#f5f6fa", borderRadius: "10px", padding: "22px", textAlign: "center", border: "1px solid #dde2ef" }}>
              <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#1a2a6c", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.9rem", margin: "0 auto 12px" }}>{step.n}</div>
              <h4 style={{ fontSize: "0.9rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{step.title}</h4>
              <p style={{ fontSize: "0.79rem", color: "#666", lineHeight: 1.55 }}>{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Meet Our Experts */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px", textAlign: "center" }}>Meet Some of Our Experts</h2>
        <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "28px", textAlign: "center" }}>PhD-qualified academics from top UK and US universities</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px", marginBottom: "48px" }} className="three-col-grid">
          {experts.map(expert => (
            <div key={expert.name} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "22px", display: "flex", gap: "14px", alignItems: "flex-start" }}>
              <div style={{ width: "50px", height: "50px", borderRadius: "50%", background: "#1a2a6c", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", flexShrink: 0 }}>{expert.avatar}</div>
              <div>
                <div style={{ fontWeight: 700, color: "#1a2a6c", fontSize: "0.95rem", marginBottom: "2px" }}>{expert.name}</div>
                <div style={{ fontSize: "0.78rem", color: "#e87722", fontWeight: 600, marginBottom: "4px" }}>{expert.role}</div>
                <div style={{ fontSize: "0.76rem", color: "#888", marginBottom: "6px" }}>{expert.qual}</div>
                <div style={{ fontSize: "0.78rem", color: "#555" }}>{expert.expertise}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact / Ask Form CTA */}
        <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "40px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "12px" }}>Ask Your Question Now</h2>
          <p style={{ color: "#c5d5f0", fontSize: "0.95rem", marginBottom: "24px" }}>
            Contact us via any of the channels below and one of our subject matter experts will respond within 30 minutes during business hours. For urgent queries, call us directly.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px", maxWidth: "700px", margin: "0 auto 24px" }} className="three-col-grid">
            {[
              { icon: "📞", label: "UK Office", value: "+44-1143520021", href: "tel:+441143520021" },
              { icon: "📞", label: "India Office", value: "+91 8754446690", href: "tel:+918754446690" },
              { icon: "✉️", label: "Email", value: "info@tutorsindia.com", href: "mailto:info@tutorsindia.com" },
            ].map(c => (
              <a key={c.label} href={c.href} style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "8px", padding: "14px", textAlign: "center", color: "#fff", display: "block" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "6px" }}>{c.icon}</div>
                <div style={{ fontSize: "0.76rem", color: "#a0b8e0", marginBottom: "3px" }}>{c.label}</div>
                <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "#f9c74f" }}>{c.value}</div>
              </a>
            ))}
          </div>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact-us/" style={{ padding: "12px 32px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Send Your Question</Link>
            <Link href="/order-now/" style={{ padding: "12px 32px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Place an Order</Link>
          </div>
        </div>
      </section>
      <style>{`@media(max-width:900px){.four-col-grid{grid-template-columns:1fr 1fr!important;}.three-col-grid{grid-template-columns:1fr!important;}}`}</style>
    </>
  );
}
