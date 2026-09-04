import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Q&A Forum — Expert Academic Answers",
  description: "Get answers to your academic questions from Tutors India's expert team. Statistical analysis, research methodology, nursing assignments, and more.",
  alternates: { canonical: "https://www.tutorsindia.com/qa-forum/" },
};

const statisticsQuestions = [
  { slug: "statistical-test-selection-research-design", title: "Which statistical test should I use for my research question?" },
  { slug: "hypothesis-formulation-testing-support", title: "Can you help me with hypothesis formulation and testing?" },
  { slug: "likert-scale-data-analysis", title: "Can you help analyze Likert scale data?" },
  { slug: "statistical-analysis-software-options", title: "What software do you use for statistical analysis?" },
  { slug: "p-values-confidence-intervals-explained", title: "Can you explain p-values and confidence intervals in simple terms?" },
  { slug: "anova-vs-ttest-difference", title: "What's the difference between ANOVA and t-test?" },
  { slug: "linear-regression-appropriateness", title: "How do I know if linear regression is appropriate for my data?" },
  { slug: "logistic-regression-output-interpretation", title: "Can you help me to interpret my logistic regression output?" },
  { slug: "factor-analysis-pca-survey-data", title: "Can you conduct factor analysis or PCA on my survey data?" },
  { slug: "structural-equation-modeling-dissertation", title: "Can I use Structural Equation Modeling (SEM) in my dissertation?" },
  { slug: "time-series-analysis-services", title: "Can you help with time series analysis?" },
  { slug: "bayesian-analysis-introduction", title: "What is Bayesian analysis and when should I use it?" },
  { slug: "statistical-method-justification", title: "Can you help me justify my chosen statistical method in my methodology chapter?" },
  { slug: "results-interpretation-assistance", title: "Do you help with writing the results and interpretation section?" },
  { slug: "ethical-plagiarism-free-assistance", title: "Is your service plagiarism-free and ethical?" },
];

const nursingQuestions = [
  { slug: "what-is-the-ideal-structure-for-a-nursing-assignment-in-the-uk", title: "What is the ideal structure for a nursing assignment in the UK?" },
  { slug: "how-do-i-start-my-nursing-assignment-introduction", title: "How do I start my nursing assignment introduction?" },
  { slug: "what-kind-of-evidence-should-i-use-in-a-nursing-assignment", title: "What kind of evidence should I use in a nursing assignment?" },
  { slug: "what-does-critical-analysis-mean-in-a-nursing-essay", title: "What does critical analysis mean in a nursing essay?" },
  { slug: "what-citation-style-should-i-follow-in-uk-nursing-assignments", title: "What citation style should I follow in UK nursing assignments?" },
  { slug: "can-i-include-case-studies-or-patient-examples-in-my-assignment", title: "Can I include case studies or patient examples in my assignment?" },
  { slug: "what-common-mistakes-do-i-have-to-avoid-in-nursing-assignments", title: "What common mistakes do I have to avoid in nursing assignments?" },
  { slug: "how-do-i-integrate-nursing-models-like-gibbs-reflective-cycle", title: "How do I integrate nursing models like Gibbs Reflective Cycle?" },
  { slug: "where-can-i-get-help-if-im-struggling-with-my-nursing-assignment", title: "Where can I get help if I'm struggling with my nursing assignment?" },
  { slug: "how-do-i-manage-word-count-effectively", title: "How do I manage word count effectively?" },
];

function QuestionCard({ slug, title, category }: { slug: string; title: string; category: string }) {
  return (
    <Link href={`/qa-forum/${slug}/`} style={{ textDecoration: "none" }}>
      <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px", marginBottom: "14px", transition: "box-shadow 0.2s" }}>
        <span style={{ background: "#e8f0fb", color: "#1a2a6c", padding: "3px 10px", borderRadius: "12px", fontSize: "0.73rem", fontWeight: 600, marginBottom: "10px", display: "inline-block" }}>{category}</span>
        <h2 style={{ fontSize: "0.97rem", fontWeight: 600, color: "#1a2a6c", lineHeight: 1.4, margin: "8px 0 0" }}>Q: {title}</h2>
        <div style={{ marginTop: "10px", color: "#e87722", fontSize: "0.83rem", fontWeight: 600 }}>View Answer →</div>
      </div>
    </Link>
  );
}

export default function QAForumPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Q&A Forum" }]} />
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.96rem", color: "#a0b8e0", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link> / Q&A Forum
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.4rem,3vw,2.2rem)", marginBottom: "12px" }}>QA Forums</h1>
          <p style={{ color: "#c5d5f0", fontSize: "1rem" }}>Get all your inquiries about writing and publishing addressed by experienced researchers and specialists!</p>
        </div>
      </section>

      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 20px", display: "grid", gridTemplateColumns: "2fr 1fr", gap: "40px" }} className="qa-layout">
        <div>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.15rem", color: "#1a2a6c", marginBottom: "20px" }}>Statistical Analysis <span style={{ background: "#e8f0fb", color: "#2563b0", padding: "2px 8px", borderRadius: "10px", fontSize: "0.78rem", fontWeight: 700, verticalAlign: "middle", marginLeft: "6px" }}>{statisticsQuestions.length} questions</span></h2>
          {statisticsQuestions.map((q) => <QuestionCard key={q.slug} slug={q.slug} title={q.title} category="Statistical Analysis" />)}

          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.15rem", color: "#1a2a6c", margin: "36px 0 20px" }}>Assignment Writing <span style={{ background: "#e8f0fb", color: "#2563b0", padding: "2px 8px", borderRadius: "10px", fontSize: "0.78rem", fontWeight: 700, verticalAlign: "middle", marginLeft: "6px" }}>{nursingQuestions.length} questions</span></h2>
          {nursingQuestions.map((q) => <QuestionCard key={q.slug} slug={q.slug} title={q.title} category="Assignment Writing" />)}
        </div>

        <div style={{ position: "sticky", top: "80px", alignSelf: "start" }}>
          <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "24px", marginBottom: "20px", textAlign: "center" }}>
            <h3 style={{ fontWeight: 700, marginBottom: "10px", fontFamily: "Merriweather,serif" }}>Have a Question?</h3>
            <p style={{ fontSize: "0.85rem", color: "#c5d5f0", marginBottom: "16px" }}>Our experts answer academic questions on statistics, methodology, writing, and more.</p>
            <Link href="/ask-an-expert/" style={{ display: "block", padding: "10px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 600, textAlign: "center" }}>Ask an Expert</Link>
          </div>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "20px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "0.95rem", color: "#1a2a6c", marginBottom: "12px" }}>Quick Links</h3>
            {[
              { href: "/data-analysis/", label: "Data Analysis Services" },
              { href: "/research-methodology/", label: "Research Methodology" },
              { href: "/masters-dissertation/", label: "Masters Dissertation" },
              { href: "/coursework-writing/", label: "Coursework Writing" },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{ display: "block", color: "#2563b0", fontSize: "0.85rem", marginBottom: "8px", fontWeight: 600 }}>→ {l.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <style>{`@media(max-width:768px){.qa-layout{grid-template-columns:1fr!important;}}`}</style>
    </>
  );
}
