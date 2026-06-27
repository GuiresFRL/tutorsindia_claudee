import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "Textbook Writing Services | Tutors India",
  description: "Professional Textbook Writing Services. Experienced creative copywriters deliver brilliant, pedagogically sound textbooks across all academic disciplines. Tutors India.",
};

const textbookServices = [
  { icon: "📖", title: "Full Textbook Writing", desc: "Complete textbook writing from concept to finished manuscript — structured chapters, learning objectives, exercises, case studies, and summaries." },
  { icon: "✏️", title: "Chapter Development", desc: "Individual chapter writing or rewriting to meet publisher and curriculum requirements." },
  { icon: "🔍", title: "Textbook Review & Editing", desc: "Comprehensive review, editing, and rewriting of existing textbook drafts to publisher-ready standard." },
  { icon: "📊", title: "Instructional Design", desc: "Pedagogically sound structure with learning objectives, key concepts, self-assessment questions, and instructor resources." },
  { icon: "🎓", title: "Academic Course Material", desc: "Course readers, lecture notes, and supplementary study materials aligned to specific academic programmes." },
  { icon: "🌐", title: "E-Learning Content", desc: "Digital textbook and e-learning content development adapted for online delivery with interactive elements." },
];

const faqs = [
  { q: "What does your textbook writing service include?", a: "Writing a textbook is not an easy task. There is an enormous demand for the ideal textbook to recommend for students. Our experienced creative copywriters deliver brilliant textbook writing services covering full textbook writing, chapter development, review and editing, instructional design, and course material creation." },
  { q: "How long does it take to write a textbook?", a: "Textbook timeline depends on the scope, length, and complexity. Individual chapters can be completed within 1–2 weeks. Complete textbooks typically take 3–6 months. We work to your publisher's deadline and can agree milestone deliveries chapter-by-chapter." },
  { q: "Do you have expertise in specific subject areas?", a: "Yes. Our 2000+ expert writers cover all academic disciplines including Business, Management, Finance, Economics, Engineering, Computer Science, Medicine, Healthcare, Law, Social Sciences, Education, and Humanities. Each textbook is assigned to a writer with subject matter expertise in the specific field." },
  { q: "Can you help with the pedagogical structure of the textbook?", a: "Yes. We ensure every textbook has pedagogically sound structure including clear learning objectives, organised chapter structure, key concept boxes, worked examples, self-assessment questions, glossary terms, and end-of-chapter exercises. All designed to maximise student learning outcomes." },
  { q: "Is the content plagiarism-free?", a: "Yes. All textbook content is written from scratch and scanned for plagiarism before delivery. Less than 5% plagiarism is guaranteed. All sources are properly cited and referenced according to your publisher's required citation style." },
];

export default function TextbookWritingPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}<Link href="/our-services/publication-support/" style={{ color: "#a0b8e0" }}>Publication Support</Link>{" / "}<span style={{ color: "#fff" }}>Textbook Writing</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              Professional Textbook Writing Services
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Writing a textbook is not an easy task. There is an enormous demand for the ideal textbook to recommend for students. Our experienced creative copywriters deliver brilliant textbook writing services across all academic disciplines — from chapter development to complete textbook manuscripts.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "20px" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/tutorsindia-logo-hd.jpg" alt="Tutors India" style={{ width: "90px", height: "90px", objectFit: "contain", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>Creative Copywriters<br />All Disciplines<br />Publisher-Ready</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ marginBottom: "28px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
            {textbookServices.map(s => (
              <div key={s.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{s.icon}</div>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{s.title}</h3>
                <p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "22px", marginBottom: "28px" }} className="two-col-grid">
          <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "14px" }}>What We Deliver</h3>
            {["Publisher-ready manuscript", "Learning objectives per chapter", "Key concept boxes and summaries", "Worked examples and case studies", "Self-assessment questions and exercises", "Glossary of key terms", "Instructor resource guide", "Plagiarism-free with Turnitin report"].map(item => (
              <div key={item} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", fontSize: "0.83rem", color: "#c5d5f0" }}>
                <span style={{ color: "#f9c74f", fontWeight: 700 }}>✓</span> {item}
              </div>
            ))}
          </div>
          <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px", border: "1px solid #dde2ef" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Textbook Subjects We Cover</h3>
            {["Business Management & Finance", "Engineering & Technology", "Medicine & Healthcare", "Computer Science & IT", "Law & Legal Studies", "Social Sciences", "Education & Training", "Biological & Life Sciences", "Economics & Administration", "Arts & Humanities"].map(s => (
              <div key={s} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid #dde2ef", fontSize: "0.83rem", color: "#555" }}>
                <span style={{ color: "#e87722", fontWeight: 700 }}>→</span> {s}
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Frequently Asked Questions</h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Your Textbook Written by Experts</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>Publisher-Ready · All Disciplines · Chapter-by-Chapter Delivery · Response in 30 min</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
