import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "UK Assignment Writing Services | Masters & MBA",
  description: "Professional UK Assignment Writing Services for Masters, MBA and PhD students. Expert writers assist at all stages. In-depth research, high-quality academic writing. Tutors India.",
};

const assignmentTypes = [
  { icon: "📝", title: "Research Assignments", desc: "In-depth research-based assignments requiring literature synthesis, critical analysis, and evidence-based argumentation at postgraduate level." },
  { icon: "📊", title: "Data Analysis Assignments", desc: "Quantitative and qualitative data analysis assignments using SPSS, R, STATA, NVIVO and other tools with full written interpretation." },
  { icon: "💼", title: "MBA Case Assignments", desc: "Business case analysis assignments applying management frameworks, strategic thinking, and industry-based insights to real-world scenarios." },
  { icon: "⚖️", title: "Legal Assignments", desc: "Law assignments covering legislation, case law, statutory interpretation, and legal argument with OSCOLA or Harvard (Legal) referencing." },
  { icon: "🔬", title: "Science & Engineering Assignments", desc: "Technical assignments across engineering, life sciences, computer science and natural sciences with mathematical, computational, or experimental components." },
  { icon: "🏥", title: "Healthcare & Nursing Assignments", desc: "Clinical practice assignments, nursing care plans, public health analyses, and health policy evaluations meeting professional regulatory standards." },
];

const serviceTiers = [
  { tier: "Basic", color: "#2563b0", desc: "Quality academic sources, showing knowledge on the topic and basic critical analysis meeting standard university requirements.", includes: ["Quality academic sources", "Topic knowledge demonstrated", "Basic critical analysis", "Standard referencing", "Rubric compliance"] },
  { tier: "Advanced", color: "#1a2a6c", desc: "Extensive research and literature with identification of core issues and good analysis aligned to university marking standards.", includes: ["Extensive research", "Core issues identified", "Strong critical analysis", "University standard writing", "Full citation compliance"] },
  { tier: "Premium", color: "#e87722", desc: "Complex critical analysis, evidence-based arguments, and conscientious academic writing meeting the highest postgraduate standards.", includes: ["Complex critical analysis", "Evidence-based arguments", "Highest postgraduate standard", "Original argumentation", "First-class quality writing"] },
];

const processSteps = [
  { n: "01", title: "Share Requirements", desc: "Provide assignment brief, marking rubric, word count, deadline, university guidelines, and any specific instructions." },
  { n: "02", title: "Expert Allocated", desc: "A subject-specific writer with relevant research experience is assigned to your assignment within 30 minutes." },
  { n: "03", title: "Research & Writing", desc: "Expert conducts thorough research, analyses sources, and writes your assignment to postgraduate academic standards." },
  { n: "04", title: "Quality Check", desc: "Three-level quality check — Technical QC, Editor QC, final requirement verification before delivery." },
  { n: "05", title: "Plagiarism Scan", desc: "Assignment scanned using Turnitin. Less than 5% plagiarism guaranteed with certificate provided." },
  { n: "06", title: "Delivery & Revisions", desc: "Assignment delivered on time. Unlimited free revisions provided until you are completely satisfied." },
];

const faqs = [
  { q: "What types of assignments does Tutors India support?", a: "Tutors at Tutors India work seriously with your assignments and assist you at all stages. We offer genuine UK assignment writing services covering research assignments, data analysis, MBA case assignments, legal assignments, science and engineering assignments, healthcare and nursing assignments, and all other postgraduate academic assignment types." },
  { q: "Are the assignments written from scratch?", a: "Yes. Every assignment is written from scratch based on your specific brief, university guidelines, and marking rubric. We never recycle previous assignments or use templates. Each piece of work is unique, original, and tailored to your specific module requirements." },
  { q: "How do you match writers to assignments?", a: "We assign a writer based on their subject matter expertise, academic qualification, and research experience. All writers hold PhD or Masters degrees from top UK and US universities. We carefully verify that the assigned writer has specific experience in your subject area and assignment type before allocation." },
  { q: "Can you handle urgent assignment deadlines?", a: "Yes. We provide support for both standard and urgent deadlines. Our academic experts work efficiently to deliver quality assignments within the required timeframe. Even for short deadlines, we maintain high standards of research and writing. Contact us immediately with your deadline for an accurate feasibility assessment." },
  { q: "What if my tutor is not satisfied with the assignment?", a: "We provide unlimited free revisions based on your tutor or supervisor's feedback. Simply share the feedback and we will revise accordingly at no additional charge. Minor changes are completed within 24 working hours and significant changes within 48 working hours. We work until you are completely satisfied." },
  { q: "Is my personal information kept confidential?", a: "Absolutely. All your personal information, project details, and communication remain secure throughout the process. All writers sign NDAs before accessing your work. Your financial information is protected by 128-bit SSL encryption. We never share your data with third parties. Your privacy is always protected." },
];

const testimonials = [
  { quote: "Good job by Tutors India on drafting my coursework. I had a lot of clarity about the process as it was kept very transparent throughout. There was no delay with their response and my coursework was delivered within the requested time. The review was very good. I will definitely come back with more requests.", author: "Jenifer Williams", location: "Japan", avatar: "/images/testimonials/t16.jpg" },
  { quote: "Excellent writing service with translation and editing. I want to thank the writers as without their hard work, it would have been really difficult to quickly get my essay completed. I appreciate their professionalism and thank them for the perfect services offered to me.", author: "Anay", location: "US", avatar: "/images/testimonials/t17.jpg" },
  { quote: "I was amazed at how naturally the content matched my writing style and university standards. It felt authentic, polished, and academically strong.", author: "Emily Carter", avatar: "/images/testimonials/charlotte-reed.webp" },
  { quote: "The team handled everything professionally from start to finish. Timely updates, quick responses, and excellent academic quality — exactly what students need during stressful deadlines.", author: "Zain Al Hashmi", location: "UAE", avatar: "/images/testimonials/noora-al-zaabi.webp" },
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies", "Marketing & Communication",
  "Engineering & Technology", "Natural Sciences & Mathematics", "Biological & Life Science", "Economics & Administration",
  "Humanities & Social Science", "Law", "Medicine & Health", "Education & Training",
  "Journalism & Media", "Agriculture & Forestry", "Computer Science & IT", "Hospitality, Leisure & Sports",
];

export default function AssignmentWritingPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}<Link href="/our-services/coursework-writing/" style={{ color: "#a0b8e0" }}>Coursework Writing</Link>{" / "}<span style={{ color: "#fff" }}>Assignment Writing</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              UK Assignment Writing Services for Masters &amp; MBA Students
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Tutors at Tutors India work seriously with your assignments and assist you in all the stages. We offer genuine UK assignment writing services meeting high academic standards with in-depth research. Our US &amp; UK writers deliver excellence across all postgraduate subjects.
            </p>
            <p style={{ color: "#f9c74f", fontSize: "0.92rem", fontWeight: 600, marginBottom: "24px" }}>All Subjects · All Assignment Types · All Postgraduate Levels</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
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

      <div style={{ background: "#12214a", padding: "16px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: "2,000+", l: "Expert Writers" }, { n: "All Subjects", l: "Covered" }, { n: "< 5%", l: "Plagiarism" }, { n: "Unlimited", l: "Revisions" }, { n: "24/7", l: "Support" }, { n: "30 min", l: "Response" }].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
              <div style={{ fontSize: "0.68rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Professional UK Assignment Writing Service</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            Tutors at Tutors India work seriously with your assignments and assist you in all the stages. We offer genuine UK assignment writing services meeting high academic standards with in-depth research. Every assignment is written to the specific university marking rubric and assessment criteria, ensuring maximum grade potential.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.94rem" }}>
            Our academic writing process applies a structured method — extensive research, sources analysis, note-making, outline creation, composition, and editing. Within our assignment writing services, we provide students with work that reflects subject proficiency, critical analysis skills, logical structure, and sound argumentation at the postgraduate level.
          </p>
        </div>

        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Assignment Types We Cover</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "18px" }}>Expert writers across every type of postgraduate assignment</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
            {assignmentTypes.map(a => (
              <div key={a.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{a.icon}</div>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{a.title}</h3>
                <p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.65 }}>{a.desc}</p>
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

        <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "24px", marginBottom: "28px" }}>
          <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "16px" }}>Our Assignment Writing Process — 6 Steps</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "14px" }} className="three-col-grid">
            {processSteps.map(step => (
              <div key={step.n} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <div style={{ background: "#e87722", color: "#fff", borderRadius: "50%", width: "28px", height: "28px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.72rem", fontWeight: 700, flexShrink: 0 }}>{step.n}</div>
                <div>
                  <div style={{ fontSize: "0.88rem", fontWeight: 700, marginBottom: "3px" }}>{step.title}</div>
                  <div style={{ fontSize: "0.78rem", color: "#c5d5f0", lineHeight: 1.55 }}>{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>What Our Clients Say</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "16px" }} className="two-col-grid">
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
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Your Assignment Written by UK Experts</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>All Subjects · Plagiarism-Free · Unlimited Revisions · Response in 30 min</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
