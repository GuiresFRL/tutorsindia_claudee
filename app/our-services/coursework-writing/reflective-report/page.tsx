import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "UK Reflective Report Writing Help | Tutors India",
  description: "UK Reflective Report Writing Service using Gibbs (1988) and Kolb's (1984) experiential learning cycle. Double Entry, Learning Diary, Reflective Note, Log Book. Tutors India.",
};

const reflectiveFormats = [
  { icon: "📓", title: "Double Entry / Journal", desc: "A two-column format where one side records experience or observations and the other records your reflection, analysis, and personal response to that experience." },
  { icon: "📖", title: "Learning Diary", desc: "A chronological record of your learning experiences, progress, challenges, and insights throughout a module, placement, or project. Demonstrates continuous professional development." },
  { icon: "📝", title: "Reflective Note", desc: "A concise reflective piece focusing on a specific event or experience, analysed through a reflective framework and linked to theoretical concepts." },
  { icon: "🗒️", title: "Log Book", desc: "A structured record of activities, decisions, and reflections kept over time — commonly used in professional placements, clinical settings, and research projects." },
  { icon: "📰", title: "Essay Diary", desc: "A reflective essay structure that combines personal narrative with critical analysis of theory and practice, following specific university assessment criteria." },
];

const gibbsCycle = [
  { n: "01", phase: "Description", desc: "What happened? A clear, factual account of the experience, situation, or event without interpretation or judgement." },
  { n: "02", phase: "Feelings", desc: "What were you thinking and feeling? An honest exploration of your emotional and cognitive responses during the experience." },
  { n: "03", phase: "Evaluation", desc: "What was good and bad about the experience? A balanced assessment of what went well and what was challenging." },
  { n: "04", phase: "Analysis", desc: "What sense can you make of the situation? Deep analysis using theoretical frameworks and academic literature to understand what happened and why." },
  { n: "05", phase: "Conclusion", desc: "What else could you have done? What have you learned? Drawing conclusions about the experience and your learning from it." },
  { n: "06", phase: "Action Plan", desc: "If it arose again, what would you do? A personal action plan outlining how you will apply your learning going forward." },
];

const serviceTiers = [
  { tier: "Basic", color: "#2563b0", desc: "Developed based on relevant sources, reasonable research area attempt, and mainly descriptive evaluation.", includes: ["Relevant academic sources", "Experience description", "Basic reflection", "Standard referencing", "Theory linkage"] },
  { tier: "Advanced", color: "#1a2a6c", desc: "Wide range of sources, clear identification of learning themes with specific aims and reflective analysis.", includes: ["Wide range of sources", "Clear learning themes", "Specific reflective aims", "Strong critical analysis", "Theoretical integration"] },
  { tier: "Premium", color: "#e87722", desc: "Wide range of seminal research, current literature engagement, solid gap identification, excellent critical analysis.", includes: ["Seminal research", "Solid theoretical framework", "Excellent critical analysis", "Personal action plan", "Publication-quality writing"] },
];

const faqs = [
  { q: "What does Tutors India deliver along with reflective writing services?", a: "The service provides 100–250 words per reflection entry depending on whether a summary, critical evaluation, or mixed approach is required. All reflective writing is supported by proper referenced bibliography, uses appropriate learning theories (Gibbs 1988, Kolb 1984), and is written in British English with accurate grammar and citation format." },
  { q: "How does the reflective report writing process work?", a: "Our team scrutinises availability requirements during the initial consultation, clarifying all queries by email before sending the outline for your approval. Once approved, chapters are dispatched with progress updates. You can review each draft and share feedback before the final delivery. Installment payment options are also available." },
  { q: "Why should I choose Tutors India for my reflective report services?", a: "Our professional team delivers excellent reports with referenced bibliography. Writers are assigned based on geographic location (UK/US) and subject expertise. All work is plagiarism-free with competitive pricing. We use established learning models like Gibbs (1988) and Kolb's (1984) experiential learning cycle, ensuring your reflection is theoretically grounded." },
  { q: "How can you help me in writing a reflective report?", a: "Our experts discuss your theoretical knowledge thoroughly and the practical experience application, applying various reflective hypotheses to develop comprehensive reflective reports. We link your personal experience to established theoretical frameworks and university-specific assessment criteria to ensure maximum marks." },
  { q: "How quickly can I get my reflective report?", a: "After receiving your task, timelines are discussed with our writers. High-quality reflective reports are available on an urgent basis with on-time delivery guaranteed. Minor changes are completed within 24 working hours and significant changes within 48 working hours. Contact us immediately with your deadline for an accurate timeline." },
  { q: "Do you provide unlimited revisions for reflective reports?", a: "Yes, unlimited free revisions are offered for any changes or feedback based on the original instructions. Slight changes typically require one day; substantial changes require up to one week maximum. No refunds are provided, but extensive revision options are available to ensure you are completely satisfied with the final work." },
];

const testimonials = [
  { quote: "I'm grateful to the team who guided me all the way through for completing my assignment work in financial regulation. It was excellent — they provided me with high quality technical content and my assignment was submitted on time. The academic writing service was more than I expected.", author: "Divyansh", avatar: "/images/testimonials/t20.jpg" },
  { quote: "Writing a reflective piece for a research paper is challenging and rigorous. It's a full-time academic experience with Tutors India that both cultivates and demonstrates scholarly writing skills. They delivered my project and clarified my queries more than I expected.", author: "Grace", avatar: "/images/testimonials/t10.jpg" },
  { quote: "Submitted my work with complete confidence for the first time ever. The quality, formatting, and clarity were all beyond what I hoped for.", author: "Charlotte Reed", location: "UK", avatar: "/images/testimonials/charlotte-reed.webp" },
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies", "Marketing & Communication",
  "Engineering & Technology", "Natural Sciences & Mathematics", "Biological & Life Science", "Economics & Administration",
  "Humanities & Social Science", "Law", "Medicine & Health", "Education & Training",
  "Journalism & Media", "Agriculture & Forestry", "Computer Science & IT", "Hospitality, Leisure & Sports",
];

export default function ReflectiveReportPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}<Link href="/our-services/coursework-writing/" style={{ color: "#a0b8e0" }}>Coursework Writing</Link>{" / "}<span style={{ color: "#fff" }}>Reflective Report</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              The UK Reflective Report Writing Help
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Are you looking for a high-quality critical Reflective Report? Our service helps students prepare effective reflective logs, accounts, or reports. Written in British English with crisp expression, accurate grammar, and comprehensive referencing per university requirements.
            </p>
            <p style={{ color: "#f9c74f", fontSize: "0.92rem", fontWeight: 600, marginBottom: "24px" }}>
              Using Gibbs (1988) &amp; Kolb&apos;s (1984) Experiential Learning Cycle
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <a href="https://www.tutorsindia.com/wp-content/uploads/2020/11/TI-REFLECTIVE-REPORT.pdf" target="_blank" rel="noopener noreferrer" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>📄 Brochure</a>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/services/reflective-report.webp" alt="Reflective Report" style={{ width: "90px", height: "90px", objectFit: "contain", marginBottom: "10px" }} loading="lazy" />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>Gibbs 1988<br />Kolb 1984<br />Learning Theories</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      <div style={{ background: "#12214a", padding: "16px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: "2,000+", l: "Expert Writers" }, { n: "Gibbs & Kolb", l: "Learning Theories" }, { n: "5 Formats", l: "Supported" }, { n: "< 5%", l: "Plagiarism" }, { n: "Unlimited", l: "Revisions" }, { n: "30 min", l: "Response" }].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
              <div style={{ fontSize: "0.68rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>

        {/* Intro */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>
            UK Reflective Report Writing Service — Central to the Research Process
          </h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            &quot;Reflection in professional practice gives us back, not what is, but what might be.&quot; The service enables students to reflect on theory versus practice, deepening learning from personal experience and academic material. Our experts write critical reflections using learning theories like Gibbs (1988) and Kolb&apos;s (1984) experiential learning cycle, integrating both practice and theory.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.94rem" }}>
            Our UK Reflective Report Writing Service strictly follows guidelines based on the theory of reflection — covering description, feelings, evaluation, analysis, conclusion, and personal action plans. The service reflects three areas: technical/academic components, social group components, and individual/self-components. It demonstrates succinct writing, critical analysis, and information literacy — the three key elements that convince supervisors.
          </p>
        </div>

        {/* Gibbs Cycle */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Gibbs Reflective Cycle (1988) — The Foundation</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "18px" }}>Our experts use established reflective models to ensure your report meets university standards</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px" }} className="three-col-grid">
            {gibbsCycle.map(g => (
              <div key={g.n} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "50%", width: "30px", height: "30px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.72rem", fontWeight: 700, flexShrink: 0 }}>{g.n}</div>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a2a6c" }}>{g.phase}</h3>
                </div>
                <p style={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.6 }}>{g.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 5 Reflective Formats */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Reflective Report Formats We Support</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "18px" }}>Five formats of reflective writing to match your university's specific requirements</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: "14px" }} className="five-col-grid">
            {reflectiveFormats.map(f => (
              <div key={f.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "16px", textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: "8px" }}>{f.icon}</div>
                <h3 style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{f.title}</h3>
                <p style={{ fontSize: "0.76rem", color: "#666", lineHeight: 1.55 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Tiers */}
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

        {/* QA Boxes */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "14px", marginBottom: "28px" }} className="four-col-grid">
          {[
            { img: "/images/qa/Quality-Assurance-2024.webp", title: "Quality Assurance", desc: "We ensure quality at every stage.", href: "/guarantees/" },
            { img: "/images/qa/Plagiarism-Report-2024.webp", title: "Plagiarism Report", desc: "Document scanned before delivery.", href: "/guarantees/" },
            { img: "/images/qa/Customer-Interaction-2024.webp", title: "Customer Interaction", desc: "We interact at every stage for queries.", href: "/contact-us/" },
            { img: "/images/qa/Quality-Assurance.png", title: "Our Process", desc: "Systematic 12-step delivery process.", href: "/our-process/" },
          ].map(box => (
            <Link key={box.title} href={box.href} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", overflow: "hidden", textAlign: "center", display: "block" }}>
              <img src={box.img} alt={box.title} style={{ width: "100%", height: "90px", objectFit: "contain", padding: "8px", background: "#f5f6fa" }} loading="lazy" />
              <div style={{ padding: "10px" }}>
                <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "2px" }}>{box.title}</div>
                <div style={{ fontSize: "0.72rem", color: "#666", lineHeight: 1.4 }}>{box.desc}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* Testimonials */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>What Our Clients Say</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px" }} className="three-col-grid">
            {testimonials.map((t, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px" }}>
                <div style={{ color: "#e87722", fontSize: "2rem", lineHeight: 1, marginBottom: "6px", fontFamily: "serif" }}>&ldquo;</div>
                <p style={{ color: "#555", fontSize: "0.84rem", lineHeight: 1.7, fontStyle: "italic", marginBottom: "12px" }}>{t.quote}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <img src={t.avatar} alt={t.author} style={{ width: "36px", height: "36px", borderRadius: "50%", objectFit: "cover" }} loading="lazy" />
                  <div>
                    <div style={{ fontWeight: 700, color: "#1a2a6c", fontSize: "0.84rem" }}>{t.author}</div>
                    {t.location && <div style={{ fontSize: "0.72rem", color: "#888" }}>{t.location}</div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Frequently Asked Questions</h2>
          <FaqAccordion faqs={faqs} />
        </div>

        <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px" }}>
          <p style={{ color: "#666", fontSize: "0.86rem", marginBottom: "14px", fontWeight: 600 }}>2000+ Experts — USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {subjects.map(s => (<span key={s} style={{ padding: "5px 13px", background: "#fff", border: "1.5px solid #dde2ef", borderRadius: "16px", fontSize: "0.79rem", color: "#1a2a6c", fontWeight: 500 }}>{s}</span>))}
          </div>
        </div>
      </section>

      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Your Reflective Report Written by Experts</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>Gibbs 1988 · Kolb 1984 · British English · Unlimited Revisions · Response in 30 min</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>

      <style>{`@media(max-width:900px){.five-col-grid{grid-template-columns:repeat(3,1fr)!important;}} @media(max-width:600px){.five-col-grid{grid-template-columns:1fr 1fr!important;}}`}</style>
    </>
  );
}
