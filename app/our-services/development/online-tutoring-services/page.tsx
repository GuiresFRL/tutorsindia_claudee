import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
export const metadata: Metadata = { title: "Online Tutoring Services | Masters, MBA, PhD", description: "Expert Online Tutoring Services for Masters, MBA and PhD students. 1-on-1 tutoring, research guidance, subject-specific support. 2000+ tutors. Tutors India." };
const subjects = [
  { icon: "💼", title: "Business & Management", desc: "Strategy, HRM, Marketing, Operations, Finance, Entrepreneurship, International Business, and MBA-specific subject tutoring." },
  { icon: "📊", title: "Statistics & Research Methods", desc: "Research methodology, statistical analysis, SPSS/R/STATA guidance, dissertation methodology chapter support, and data interpretation." },
  { icon: "🔬", title: "Science & Engineering", desc: "Physics, Chemistry, Biology, Electrical, Mechanical, Civil, Chemical, and Computer Engineering subject tutoring." },
  { icon: "⚖️", title: "Law & Social Sciences", desc: "Contract law, criminal law, constitutional law, sociology, psychology, political science, and social work tutoring." },
  { icon: "🏥", title: "Medicine & Healthcare", desc: "Anatomy, physiology, pharmacology, nursing science, public health, and clinical practice academic support." },
  { icon: "💻", title: "Computer Science & IT", desc: "Data structures, algorithms, machine learning, network security, software engineering, and database management tutoring." },
];
const faqs = [
  { q: "What online tutoring services do you offer?", a: "Tutoring services serve as a centre of learning assistance to students in order to support their academic courses. Our expert tutors provide one-to-one support across all subjects and levels — from undergraduate through to Masters, MBA, and PhD. We cover subject-specific tutoring, research methodology guidance, dissertation support, and exam preparation." },
  { q: "How are tutoring sessions conducted?", a: "Sessions are conducted via video call (Zoom, Google Meet), email correspondence, or our CRM platform. You can choose your preferred mode of communication. Sessions can be scheduled at your convenience 24/7, and our tutors are available across all time zones." },
  { q: "How do you match me with the right tutor?", a: "We carefully match you with a tutor based on your specific subject area, academic level, university guidelines, and any particular areas of difficulty. All our tutors hold PhD or Masters degrees from top UK and US universities and have minimum 5 years of teaching and research experience." },
  { q: "Can tutors help with my dissertation?", a: "Yes. Our tutors provide comprehensive dissertation support — from topic selection and proposal development through literature review, methodology, data analysis, and final writing. They can review chapter drafts, explain statistical concepts, help you understand feedback from supervisors, and prepare you for your viva voce." },
  { q: "How many sessions will I need?", a: "The number of sessions depends on your specific needs and academic goals. Some students need a single clarification session (1–2 hours), while others benefit from ongoing weekly support throughout their programme. We offer flexible scheduling so you can book as many or as few sessions as you need." },
];
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  }))
};
export default function OnlineTutoringPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}<Link href="/our-services/development/" style={{ color: "#a0b8e0" }}>Development</Link>{" / "}<span style={{ color: "#fff" }}>Online Tutoring</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>Online Tutoring Services</h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>Tutoring services serve as a centre of learning assistance to students in order to support their academic courses. Our expert tutors provide one-to-one support across all subjects and levels — helping Masters, MBA, and PhD students build confidence, understand complex concepts, and achieve academic success.</p>
            <p style={{ color: "#f9c74f", fontSize: "0.92rem", fontWeight: 600, marginBottom: "20px" }}>1-on-1 · All Subjects · All Levels · Zoom/Meet/Email · 24/7 Available</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/services/primary-secondary-research.webp" alt="Research and development planning" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#f9c74f" }}>2,000+</div>
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0" }}>Expert Tutors<br />All Subjects<br />24/7 Available</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px", marginBottom: "28px" }} className="three-col-grid">
          {subjects.map(s => (<div key={s.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px" }}><div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{s.icon}</div><h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{s.title}</h3><p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.65 }}>{s.desc}</p></div>))}
        </div>
        <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "24px", marginBottom: "28px" }}>
          <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "14px" }}>Tutoring Support We Provide</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "10px" }} className="three-col-grid">
            {["Subject-specific concept explanation","Dissertation chapter review & feedback","Research methodology guidance","Statistical analysis help","Exam preparation & revision","Literature review support","Viva voce preparation","Assignment feedback & direction"].map(item => (
              <div key={item} style={{ display: "flex", gap: "8px", fontSize: "0.82rem", color: "#c5d5f0", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                <span style={{ color: "#f9c74f", fontWeight: 700 }}>✓</span> {item}
              </div>
            ))}
          </div>
        </div>
        <div style={{ marginBottom: "28px" }}><h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Frequently Asked Questions</h2><FaqAccordion faqs={faqs} /></div>
      </section>
      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Expert Tutoring Support Today</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>2000+ Tutors · All Subjects · PhD Qualified · 24/7 Available · Response in 30 min</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Book a Session</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
