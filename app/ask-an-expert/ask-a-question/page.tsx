import Link from "next/link";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Ask a Question — Free Expert Academic Answer in 24 Hours | Tutors India",
  description: "Submit your academic question and receive a free expert answer within 24 hours from Tutors India's team of PhD-qualified specialists.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://tutorsindia.com/ask-an-expert/ask-a-question/" },
};

export default function AskAQuestionPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "52px 20px 44px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <Link href="/ask-an-expert/" style={{ color: "#a0b8e0" }}>Ask an Expert</Link>{" / "}
            <span style={{ color: "#fff" }}>Ask a Question</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.6rem,3vw,2.3rem)", marginBottom: "12px" }}>
            Ask Your Academic Question
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "0.97rem", maxWidth: "680px", marginBottom: "8px" }}>
            Ask us your academic question here and you'll receive your free answer within 24 hours. It's that simple — any question, any topic, our team of experts have the solution to your problem.
          </p>
          <p style={{ color: "#e87722", fontWeight: 700, fontSize: "1rem" }}>Free Answer in 24 Hours</p>
        </div>
      </section>

      {/* Main content */}
      <section style={{ maxWidth: "960px", margin: "0 auto", padding: "44px 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr minmax(0, 340px)", gap: "32px", alignItems: "start" }}>

          {/* Form panel */}
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "32px", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", color: "#1a2a6c", marginBottom: "20px" }}>
              Submit Your Question
            </h2>
            <form action="https://tutorsindia.com/ask-an-expert/ask-a-question/" method="POST" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "#374151", display: "block", marginBottom: "6px" }}>Your Name *</label>
                <input name="name" required placeholder="Enter your full name" style={{ width: "100%", padding: "10px 14px", border: "1.5px solid #dde2ef", borderRadius: "6px", fontSize: "0.9rem", outline: "none", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "#374151", display: "block", marginBottom: "6px" }}>Email Address *</label>
                <input name="email" type="email" required placeholder="you@example.com" style={{ width: "100%", padding: "10px 14px", border: "1.5px solid #dde2ef", borderRadius: "6px", fontSize: "0.9rem", outline: "none", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "#374151", display: "block", marginBottom: "6px" }}>Subject / Topic *</label>
                <select name="subject" required style={{ width: "100%", padding: "10px 14px", border: "1.5px solid #dde2ef", borderRadius: "6px", fontSize: "0.9rem", background: "#fff", outline: "none", boxSizing: "border-box" }}>
                  <option value="">Select a subject</option>
                  <option>Accounts</option>
                  <option>Statistics</option>
                  <option>Management</option>
                  <option>Nursing</option>
                  <option>Economics</option>
                  <option>Psychology</option>
                  <option>Marketing</option>
                  <option>Philosophy</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "#374151", display: "block", marginBottom: "6px" }}>Your Question *</label>
                <textarea name="question" required rows={6} placeholder="Type your academic question here in as much detail as possible…" style={{ width: "100%", padding: "10px 14px", border: "1.5px solid #dde2ef", borderRadius: "6px", fontSize: "0.9rem", resize: "vertical", outline: "none", boxSizing: "border-box" }} />
              </div>
              <button type="submit" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", border: "none", borderRadius: "6px", fontWeight: 700, fontSize: "0.95rem", cursor: "pointer" }}>
                Submit Question →
              </button>
              <p style={{ fontSize: "0.78rem", color: "#888", marginTop: "4px" }}>
                By submitting you agree to our <Link href="/terms/" style={{ color: "#1a2a6c" }}>Terms of Service</Link>. We reply within 24 hours.
              </p>
            </form>
          </div>

          {/* Sidebar info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ background: "#f0f4ff", border: "1px solid #c7d4f5", borderRadius: "10px", padding: "20px" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "0.95rem", color: "#1a2a6c", marginBottom: "12px" }}>How It Works</h3>
              {[
                { step: "1", text: "Submit your question using the form" },
                { step: "2", text: "Our experts review and research your question" },
                { step: "3", text: "Receive your free answer within 24 hours" },
              ].map((s) => (
                <div key={s.step} style={{ display: "flex", gap: "10px", marginBottom: "10px", alignItems: "flex-start" }}>
                  <span style={{ minWidth: "24px", height: "24px", background: "#1a2a6c", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 700 }}>{s.step}</span>
                  <p style={{ fontSize: "0.85rem", color: "#374151", margin: 0, lineHeight: 1.5 }}>{s.text}</p>
                </div>
              ))}
            </div>

            <div style={{ background: "#fff7ed", border: "1px solid #fed7a0", borderRadius: "10px", padding: "20px" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "0.95rem", color: "#b45309", marginBottom: "10px" }}>Need More Help?</h3>
              <p style={{ fontSize: "0.83rem", color: "#555", lineHeight: 1.6, marginBottom: "14px" }}>
                For full dissertation, essay or research support, our PhD-qualified experts offer comprehensive personalised help.
              </p>
              <Link href="/order-now/" style={{ display: "block", textAlign: "center", padding: "10px 20px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "0.88rem" }}>
                Order Full Service
              </Link>
            </div>

            <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "0.9rem", color: "#1a2a6c", marginBottom: "10px" }}>Browse Existing Answers</h3>
              <p style={{ fontSize: "0.82rem", color: "#666", marginBottom: "12px" }}>Your question may already be answered in our expert Q&A library.</p>
              <Link href="/ask-an-expert/" style={{ fontSize: "0.85rem", color: "#2563b0", fontWeight: 600 }}>← Browse All Q&amp;A</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "48px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "10px" }}>Need Full Academic Writing Support?</h2>
        <p style={{ color: "#c5d5f0", fontSize: "0.9rem", marginBottom: "20px" }}>Our PhD-qualified experts provide comprehensive dissertation, essay and research support.</p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 30px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 30px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
