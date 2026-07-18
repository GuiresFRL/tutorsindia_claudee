import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Quality Procedures",
  description: "Learn about Tutors India's rigorous quality assurance procedures including plagiarism checks, editing, proofreading, and dual quality reviews.",
  
  alternates: { canonical: "https://www.tutorsindia.com/our-quality-procedures" },
};

const steps = [
  {
    num: "01",
    title: "Expert Assignment",
    desc: "Every project is assigned to a qualified expert matching your subject, level, and requirements — Masters or PhD-qualified academics with proven track records.",
  },
  {
    num: "02",
    title: "In-Depth Research",
    desc: "Our experts conduct thorough, resource-rich research using peer-reviewed journals, academic databases, and up-to-date references to produce original, high-quality work.",
  },
  {
    num: "03",
    title: "First Quality Review",
    desc: "The completed draft undergoes a detailed quality review by our editorial team to ensure accuracy, coherence, and alignment with the original brief.",
  },
  {
    num: "04",
    title: "Plagiarism Check",
    desc: "All work is processed through advanced plagiarism detection software. We guarantee a maximum plagiarism limit of 10% and provide the report on request.",
  },
  {
    num: "05",
    title: "Proofreading & Editing",
    desc: "A dedicated proofreader checks grammar, spelling, formatting, and citation compliance — ensuring the work meets your institution's style guide.",
  },
  {
    num: "06",
    title: "Final Quality Check",
    desc: "A second senior-level quality check is performed before delivery, verifying that all requirements have been met and the work is ready for submission.",
  },
];

const achievements = [
  "Doctoral scholars placed in MNC and corporate positions",
  "Postdoctoral fellowships secured by our PhD candidates",
  "Foreign universities granting scholarships and tuition fee waivers based on research proposals we supported",
  "Research groups receiving substantial funding from national and international agencies",
  "Over 200,000 students supported across the UK, US, Australia, and beyond",
];

export default function QualityProceduresPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "52px 20px 44px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>
            <span style={{ color: "#a0b8e0" }}> / </span>
            <span style={{ color: "#fff" }}>Our Quality Procedures</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.4rem,3vw,2.2rem)", lineHeight: 1.3, marginBottom: "14px" }}>
            Our Quality Procedures
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "1rem", maxWidth: "720px" }}>
            At Tutors India, every project goes through a rigorous multi-stage quality process — from expert assignment to final delivery — to ensure you receive work that meets the highest academic standards.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "52px 20px" }}>

        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", color: "#1a2a6c", marginBottom: "32px", textAlign: "center" }}>
          Our 6-Stage Quality Process
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "24px", marginBottom: "56px" }}>
          {steps.map((s) => (
            <div key={s.num} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "28px", position: "relative" }}>
              <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "#e8f0ff", fontFamily: "Merriweather,serif", marginBottom: "8px" }}>{s.num}</div>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>{s.title}</h3>
              <p style={{ fontSize: "0.96rem", color: "#555", lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "36px", marginBottom: "40px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", color: "#1a2a6c", marginBottom: "20px" }}>
            Proven Results from Our Quality-First Approach
          </h2>
          <ul style={{ paddingLeft: "20px", lineHeight: 1.9, color: "#444", fontSize: "0.95rem" }}>
            {achievements.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>

        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "32px", marginBottom: "40px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", color: "#1a2a6c", marginBottom: "16px" }}>Services Covered by Our Quality Guarantee</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {[
              ["Masters Dissertation", "/our-services/masters-dissertation-writing-services/"],
              ["PhD/DBA Dissertation", "/our-services/phd-dba-dissertation/"],
              ["Coursework Writing", "/our-services/coursework-writing/"],
              ["Publication Support", "/our-services/publication-support/"],
              ["Editing Services", "/our-services/editing-services/"],
              ["Development Services", "/our-services/development/"],
            ].map(([label, href]) => (
              <Link key={href} href={href} style={{ padding: "8px 16px", background: "#f0f4ff", color: "#1a2a6c", borderRadius: "20px", fontSize: "0.87rem", fontWeight: 600, textDecoration: "none", border: "1px solid #c5d5f0" }}>
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div style={{ background: "#f0f4ff", borderRadius: "10px", padding: "32px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", color: "#1a2a6c", marginBottom: "10px" }}>Ready to Experience Our Quality?</h2>
          <p style={{ color: "#555", marginBottom: "20px", fontSize: "0.96rem" }}>Place your order today and see why over 200,000 scholars trust Tutors India.</p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/order-now/" style={{ padding: "10px 24px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
            <Link href="/guarantees/" style={{ padding: "10px 24px", border: "1.5px solid #1a2a6c", color: "#1a2a6c", borderRadius: "5px", fontWeight: 600 }}>Our Guarantees</Link>
            <Link href="/contact-us/" style={{ padding: "10px 24px", border: "1.5px solid #1a2a6c", color: "#1a2a6c", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
          </div>
        </div>
      </div>

      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "44px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "10px" }}>Need Expert Academic Help?</h2>
        <p style={{ color: "#c5d5f0", fontSize: "0.96rem", marginBottom: "18px" }}>Our PhD-qualified writers provide tailored support for every stage of your academic journey.</p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "11px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "11px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
