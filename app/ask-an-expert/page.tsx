import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import type { Metadata } from "next";
import { subjects } from "./data";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Ask an Expert — Free Academic Q&A in 24 Hours",
  description: "Ask any academic question and receive a free expert answer within 24 hours. Browse Q&A across Accounts, Statistics, Management, Nursing, Economics, and Psychology.",
  
  alternates: { canonical: "https://www.tutorsindia.com/ask-an-expert/" },
};

export default function AskAnExpertPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Ask an Expert" }]} />
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "52px 20px 44px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <span style={{ color: "#fff" }}>Ask an Expert</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.6rem,3vw,2.3rem)", marginBottom: "12px" }}>
            Ask an Expert
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "0.97rem", maxWidth: "680px", marginBottom: "8px" }}>
            Need some help? Ask us your academic question and receive a free expert answer within 24 hours. Any question, any topic — our team of experts have the solution.
          </p>
          <p style={{ color: "#e87722", fontWeight: 700, fontSize: "1rem", marginBottom: "20px" }}>
            Free Answer in 24 Hours
          </p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Link href="/ask-an-expert/ask-a-question/" style={{ padding: "11px 26px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "0.93rem" }}>Ask a Question</Link>
            <Link href="/order-now/" style={{ padding: "11px 26px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, fontSize: "0.93rem" }}>Order Full Service</Link>
          </div>
        </div>
      </section>

      {/* Info strip */}
      <section style={{ background: "#f5f7fb", borderBottom: "1px solid #dde2ef", padding: "18px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "32px", flexWrap: "wrap", alignItems: "center" }}>
          {[
            { label: "Free Answers", value: "100%" },
            { label: "Response Time", value: "24 hrs" },
            { label: "Subjects Covered", value: `${subjects.length}+` },
            { label: "Questions Answered", value: "500+" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1a2a6c" }}>{s.value}</div>
              <div style={{ fontSize: "0.78rem", color: "#666" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Subject categories */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "44px 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", color: "#1a2a6c", marginBottom: "8px" }}>
          Browse by Subject
        </h2>
        <p style={{ color: "#666", fontSize: "0.96rem", marginBottom: "28px" }}>
          Select a subject to browse expert answers in that area
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "18px" }}>
          {subjects.map((subject) => (
            <Link
              key={subject.slug}
              href={`/ask-an-expert/${subject.slug}/`}
              style={{
                display: "flex", flexDirection: "column", gap: "10px",
                background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px",
                padding: "22px", textDecoration: "none",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                borderTop: `4px solid ${subject.color}`,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "1.6rem" }}>{subject.icon}</span>
                <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", fontWeight: 700, color: subject.color }}>{subject.title}</h3>
              </div>
              <p style={{ fontSize: "0.83rem", color: "#555", lineHeight: 1.65, flex: 1 }}>{subject.desc}</p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: "0.78rem", color: "#888" }}>{subject.items.length} questions answered</span>
                <span style={{ fontSize: "0.78rem", color: "#e87722", fontWeight: 700 }}>View All →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Ask a question CTA */}
      <section style={{ background: "#f5f6fa", padding: "44px 20px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", color: "#1a2a6c", marginBottom: "10px" }}>
            Can&apos;t find your question?
          </h2>
          <p style={{ color: "#555", fontSize: "0.92rem", marginBottom: "20px" }}>
            Submit your own academic question and our expert team will respond with a detailed answer within 24 hours — completely free.
          </p>
          <Link href="/ask-an-expert/ask-a-question/" style={{ display: "inline-block", padding: "12px 32px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "0.95rem" }}>
            Ask Your Question Free →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "48px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: "10px" }}>Need Full Academic Writing Support?</h2>
        <p style={{ color: "#c5d5f0", fontSize: "0.93rem", marginBottom: "20px" }}>Our PhD-qualified experts provide comprehensive dissertation, essay and research support tailored to your requirements.</p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 30px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 30px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
