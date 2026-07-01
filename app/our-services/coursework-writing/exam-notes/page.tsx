import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "Exam Notes Writing Service UK",
  description: "UK Exam Notes Writing Service by subject matter experts. Concise, well-structured revision notes for Masters, MBA and PhD examinations. Tutors India.",
};

const noteTypes = [
  { icon: "📝", title: "Condensed Lecture Notes", desc: "Key lecture content distilled into concise, structured revision notes that capture essential concepts, theories, and arguments for each topic." },
  { icon: "🗂️", title: "Topic-Specific Revision Guides", desc: "Comprehensive coverage of specific exam topics with definitions, key theories, important authors, and application examples." },
  { icon: "📊", title: "Diagram & Mind Maps", desc: "Visual summaries of complex topics using mind maps, flowcharts, and concept diagrams to aid memory and understanding." },
  { icon: "✅", title: "Past Paper Analysis", desc: "Analysis of past exam papers with model answers and guidance on how to structure responses to maximise marks." },
  { icon: "🔖", title: "Key Term Glossaries", desc: "Subject-specific glossaries defining key terms, concepts, and theoretical frameworks in clear, accessible language." },
  { icon: "📋", title: "Essay Plans & Frameworks", desc: "Pre-prepared essay frameworks and answer templates for common exam question types, with bullet-point structures." },
];

const serviceTiers = [
  { tier: "Basic", color: "#2563b0", desc: "Concise notes based on relevant sources, covering key topics with basic critical analysis and essential definitions.", includes: ["Key topic coverage", "Essential definitions", "Basic critical points", "Source references", "Standard formatting"] },
  { tier: "Advanced", color: "#1a2a6c", desc: "Comprehensive notes with wide source range, identification of key debates, and good analysis aligned to university standards.", includes: ["Wide range of sources", "Key debates identified", "Good critical analysis", "Exam-focused structure", "Model answer frameworks"] },
  { tier: "Premium", color: "#e87722", desc: "Full exam preparation package with seminal research, excellent critical analysis, past paper guidance, and personalised revision strategy.", includes: ["Seminal research coverage", "Excellent critical analysis", "Past paper guidance", "Personalised revision plan", "Model answers included"] },
];

const faqs = [
  { q: "What are exam notes and why do I need them?", a: "Exam notes have a major say in crunch examination periods. Without them, years of study will go astray. Our subject matter expert-prepared exam notes ensure you can assure your grades. They distil complex module content into concise, structured revision material that allows you to revise effectively and efficiently in the lead-up to your examinations." },
  { q: "Who prepares the exam notes?", a: "Exam notes are prepared by subject matter experts who hold PhD and Masters degrees in the relevant field from top UK and US universities. They are not just writers — they are academics who understand the examination standards, marking criteria, and key knowledge areas expected at Masters, MBA, and PhD level." },
  { q: "Which subjects do you cover for exam notes?", a: "We cover all postgraduate subjects including Business Management, Finance, HR, Marketing, Operations, Strategy, Economics, Law, Medicine, Healthcare, Psychology, Engineering, Computer Science, Social Sciences, Education, and many more. Contact us if your specific subject is not listed." },
  { q: "Can you prepare exam notes based on specific module content?", a: "Yes. Please provide your module handbook, lecture slides, reading list, and any specific topics the exam will cover. Our subject experts will prepare targeted revision notes covering exactly the content you need for your specific university examination." },
  { q: "How quickly can you deliver exam notes?", a: "Exam notes can be delivered quickly depending on the scope. Single topic notes can be ready within 24–48 hours. Full module revision guides may take 3–5 days. Contact us immediately with your exam date for an accurate timeline. Urgent delivery is available." },
  { q: "Are the exam notes plagiarism-free?", a: "Yes. All exam notes are written from scratch using credible academic sources and are scanned using Turnitin before delivery. Less than 5% plagiarism is guaranteed. The notes are written in your own words and paraphrased appropriately so they can be used as legitimate study aids." },
];

const testimonials = [
  { quote: "Best experience you can imagine. When my exam was nearing, I ran out of notes and was helpless. Contacted Tutors India for assistance and got my notes completed on time and simultaneously learnt many things. For an international student, getting work done without travelling makes the whole experience incredible.", author: "Bhavin", avatar: "/images/testimonials/t22.jpg" },
  { quote: "I'm grateful to the team who guided me all the way through for completing my assignment work. It was excellent — they provided me with high quality technical content and my assignment was submitted on time. The academic writing service was more than I expected.", author: "Divyansh", avatar: "/images/testimonials/t20.jpg" },
  { quote: "What impressed me most was how personalised the support felt. They didn't just complete the work — they understood my goals and helped me present them better.", author: "Khalid Al Nuaimi", avatar: "/images/testimonials/khalid-al-nuaimi.webp" },
];

const subjects = [
  "Business & Management", "Finance & Accounting", "Human Resource Management", "Marketing & Strategy",
  "Economics", "Law", "Medicine & Health", "Nursing & Clinical Practice",
  "Psychology", "Engineering & Technology", "Computer Science & IT", "Education & Training",
];

export default function ExamNotesPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}<Link href="/our-services/coursework-writing/" style={{ color: "#a0b8e0" }}>Coursework Writing</Link>{" / "}<span style={{ color: "#fff" }}>Exam Notes</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              UK Exam Notes Writing Service by Subject Matter Experts
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Exam notes have a major say in crunch examination periods. Without them, years of study will go astray. Our subject matter expert-prepared exam notes ensure you can assure your grades — concise, well-structured, and tailored to your specific university module and examination.
            </p>
            <p style={{ color: "#f9c74f", fontSize: "0.92rem", fontWeight: 600, marginBottom: "24px" }}>Prepared by Subject Matter Experts · Masters, MBA &amp; PhD Level</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/tutorsindia-logo-hd.jpg" alt="Tutors India" style={{ width: "90px", height: "90px", objectFit: "contain", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>Expert-Prepared<br />Concise Notes<br />24–48hr Delivery</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      <div style={{ background: "#12214a", padding: "16px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: "2,000+", l: "Expert Writers" }, { n: "All Subjects", l: "Covered" }, { n: "24–48h", l: "Fast Delivery" }, { n: "< 5%", l: "Plagiarism" }, { n: "Unlimited", l: "Revisions" }, { n: "30 min", l: "Response" }].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
              <div style={{ fontSize: "0.68rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Expert Exam Notes for Academic Success</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            Subject matter experts prepare our exam notes, so you can assure your grades. Exam notes have a major say in the crunch examination period — without them, years of study will go astray. Our service provides concise, structured, and comprehensive revision notes covering all key topics, theories, and arguments required for your specific module examination.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.94rem" }}>
            All exam notes are written by academics who hold PhD and Masters degrees in the relevant field. They understand the examination standards, marking criteria, and key knowledge areas expected at postgraduate level. Notes are tailored to your specific university module, reading list, and examination format.
          </p>
        </div>

        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Types of Exam Notes We Provide</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "18px" }}>Comprehensive exam preparation materials tailored to your module and examination format</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
            {noteTypes.map(n => (
              <div key={n.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{n.icon}</div>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{n.title}</h3>
                <p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.65 }}>{n.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>Service Tiers</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
            {serviceTiers.map(t => (
              <div key={t.tier} style={{ background: "#fff", border: `2px solid ${t.color}`, borderRadius: "10px", overflow: "hidden" }}>
                <div style={{ background: t.color, color: "#fff", padding: "14px 18px" }}><div style={{ fontSize: "1.2rem", fontWeight: 700 }}>{t.tier}</div></div>
                <div style={{ padding: "16px" }}>
                  <p style={{ fontSize: "0.84rem", color: "#555", lineHeight: 1.65, marginBottom: "12px" }}>{t.desc}</p>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {t.includes.map(i => (<li key={i} style={{ display: "flex", gap: "6px", fontSize: "0.78rem", color: "#555", padding: "4px 0", borderBottom: "1px solid #f0f2fa" }}><span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>✓</span> {i}</li>))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "22px", marginBottom: "28px" }} className="two-col-grid">
          <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "14px" }}>What You Receive</h3>
            {["Concise, structured revision notes per topic", "Key theory summaries with author references", "Critical analysis points for exam responses", "Model answer frameworks for common questions", "Key term glossary for the module", "Past paper question guidance", "Mind maps and visual summaries on request", "Plagiarism-free certificate"].map(item => (
              <div key={item} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", fontSize: "0.83rem", color: "#c5d5f0" }}>
                <span style={{ color: "#f9c74f", fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
              </div>
            ))}
          </div>
          <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px", border: "1px solid #dde2ef" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our Guarantees</h3>
            {["Unlimited revisions for committed work", "Fast delivery — 24–48 hours for single topics", "24/7 customer support", "Three-level quality check", "100% confidentiality", "Plagiarism free — less than 5%", "Subject matter expert allocation", "Module-specific tailoring"].map((g, i) => (
              <div key={i} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid #dde2ef", fontSize: "0.83rem", color: "#555" }}>
                <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>{i + 1}.</span> {g}
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>What Our Clients Say</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px" }} className="three-col-grid">
            {testimonials.map((t, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px" }}>
                <div style={{ color: "#e87722", fontSize: "2rem", lineHeight: 1, marginBottom: "6px", fontFamily: "serif" }}>&ldquo;</div>
                <p style={{ color: "#555", fontSize: "0.84rem", lineHeight: 1.7, fontStyle: "italic", marginBottom: "12px" }}>{t.quote}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <img src={t.avatar} alt={t.author} style={{ width: "36px", height: "36px", borderRadius: "50%", objectFit: "cover" }} loading="lazy" />
                  <div style={{ fontWeight: 700, color: "#1a2a6c", fontSize: "0.84rem" }}>{t.author}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Frequently Asked Questions</h2>
          <FaqAccordion faqs={faqs} />
        </div>

        <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px" }}>
          <p style={{ color: "#666", fontSize: "0.86rem", marginBottom: "14px", fontWeight: 600 }}>Subject Matter Experts — All Postgraduate Disciplines</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {subjects.map(s => (<span key={s} style={{ padding: "5px 13px", background: "#fff", border: "1.5px solid #dde2ef", borderRadius: "16px", fontSize: "0.79rem", color: "#1a2a6c", fontWeight: 500 }}>{s}</span>))}
          </div>
        </div>
      </section>

      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Your Exam Notes Prepared by Subject Experts</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>24–48hr Delivery · All Subjects · Unlimited Revisions · Response in 30 min</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
