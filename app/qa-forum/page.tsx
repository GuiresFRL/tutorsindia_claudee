import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Q&A Forum — Academic Questions & Expert Answers | Tutors India",
  description: "Get answers to your academic questions from Tutors India's expert team. Statistical analysis, research methodology, nursing assignments, and more.",
};

const questions = [
  { slug: "statistical-test-selection-research-design", title: "How do I select the right statistical test for my research design?", category: "Statistics" },
  { slug: "hypothesis-formulation-testing-support", title: "How do I formulate and test a hypothesis for my dissertation?", category: "Research Methods" },
  { slug: "likert-scale-data-analysis", title: "How should I analyse Likert scale data in my survey?", category: "Statistics" },
  { slug: "statistical-analysis-software-options", title: "What statistical analysis software should I use for my research?", category: "Statistics" },
  { slug: "p-values-confidence-intervals-explained", title: "Can you explain p-values and confidence intervals in simple terms?", category: "Statistics" },
  { slug: "anova-vs-ttest-difference", title: "What is the difference between ANOVA and t-test?", category: "Statistics" },
  { slug: "what-is-the-ideal-structure-for-a-nursing-assignment-in-the-uk", title: "What is the ideal structure for a nursing assignment in the UK?", category: "Nursing" },
  { slug: "how-do-i-start-my-nursing-assignment-introduction", title: "How do I start my nursing assignment introduction?", category: "Nursing" },
  { slug: "what-kind-of-evidence-should-i-use-in-a-nursing-assignment", title: "What kind of evidence should I use in a nursing assignment?", category: "Nursing" },
  { slug: "what-citation-style-should-i-follow-in-uk-nursing-assignments", title: "What citation style should I follow in UK nursing assignments?", category: "Nursing" },
];

export default function QAForumPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,var(--navy) 0%,#2563b0 100%)", color: "#fff", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.9rem", color: "#a0b8e0", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link> / Q&A Forum
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "2.2rem", marginBottom: "12px" }}>Q&A Forum</h1>
          <p style={{ color: "#c5d5f0", fontSize: "1.05rem" }}>Expert answers to your academic questions</p>
        </div>
      </section>

      <section style={{ maxWidth: "1200px", margin: "60px auto", padding: "0 20px", display: "grid", gridTemplateColumns: "2fr 1fr", gap: "40px" }} className="qa-layout">
        <div>
          {questions.map((q) => (
            <Link key={q.slug} href={`/qa-forum/${q.slug}/`}>
              <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "10px", padding: "20px", marginBottom: "16px" }}>
                <span style={{ background: "var(--light-blue)", color: "var(--blue)", padding: "3px 10px", borderRadius: "12px", fontSize: "0.75rem", fontWeight: 600, marginBottom: "10px", display: "inline-block" }}>{q.category}</span>
                <h2 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--navy)", lineHeight: 1.4 }}>Q: {q.title}</h2>
                <div style={{ marginTop: "10px", color: "var(--blue)", fontSize: "0.85rem", fontWeight: 600 }}>View Answer →</div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ position: "sticky", top: "80px" }}>
          <div style={{ background: "var(--navy)", color: "#fff", borderRadius: "12px", padding: "24px", marginBottom: "20px", textAlign: "center" }}>
            <h3 style={{ fontWeight: 700, marginBottom: "10px" }}>Have a Question?</h3>
            <p style={{ fontSize: "0.85rem", color: "#c5d5f0", marginBottom: "16px" }}>Our experts answer academic questions on statistics, methodology, writing, and more.</p>
            <Link href="/ask-an-expert/" style={{ display: "block", padding: "10px", background: "var(--orange)", color: "#fff", borderRadius: "5px", fontWeight: 600, textAlign: "center" }}>Ask an Expert</Link>
          </div>
        </div>
      </section>

      <style>{`@media(max-width:768px){.qa-layout{grid-template-columns:1fr!important;}}`}</style>
    </>
  );
}
