import Link from "next/link";
import type { Metadata } from "next";
import { fetchProxiedPage } from "@/lib/api/proxyPage";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Sample Works — Academic Writing Examples",
  description: "View our sample academic work including dissertations, literature reviews, research proposals, and essays to understand the quality Tutors India delivers.",
  
  alternates: { canonical: "https://www.tutorsindia.com/our-sample-works/" },
};

const categories = [
  { href: "/our-sample-works/dissertation-samples/", title: "Dissertation Samples", icon: "🎓", count: "50+" },
  { href: "/our-sample-works/topic-selection/", title: "Topic Selection", icon: "🔍", count: "20+" },
  { href: "/our-sample-works/research-proposal-samples/", title: "Research Proposal Samples", icon: "📋", count: "25+" },
  { href: "/our-sample-works/introduction-samples/", title: "Introduction Samples", icon: "📖", count: "20+" },
  { href: "/our-sample-works/literature-review-samples/", title: "Literature Review Samples", icon: "📚", count: "30+" },
  { href: "/our-sample-works/research-methodology-samples/", title: "Research Methodology Samples", icon: "📐", count: "15+" },
  { href: "/our-sample-works/conclusion-and-discussion-samples/", title: "Conclusion & Discussion Samples", icon: "📑", count: "15+" },
  { href: "/our-sample-works/data-analysis-samples/", title: "Data Analysis Samples", icon: "📊", count: "20+" },
  { href: "/our-sample-works/business-plan-samples/", title: "Business Plan Samples", icon: "💼", count: "10+" },
  { href: "/our-sample-works/assignment-writing-samples/", title: "Assignment Writing Samples", icon: "✍️", count: "35+" },
  { href: "/our-sample-works/essay-writing-samples/", title: "Essay Writing Samples", icon: "📝", count: "40+" },
];

export default async function SampleWorksPage() {
  const proxied = await fetchProxiedPage("/our-sample-works/");

  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "52px 20px 44px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <span style={{ color: "#fff" }}>Our Sample Works</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.2rem)", marginBottom: "10px" }}>
            {proxied?.title || "Our Sample Works"}
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "0.97rem", maxWidth: "680px" }}>
            Browse real academic writing samples across dissertations, essays, proposals and more — so you know exactly what to expect.
          </p>
        </div>
      </section>

      {/* Category grid */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "44px 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.35rem", color: "#1a2a6c", marginBottom: "24px" }}>Browse by Type</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: "18px", marginBottom: "44px" }}>
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              style={{ display: "flex", alignItems: "center", gap: "14px", background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px 20px", textDecoration: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
            >
              <span style={{ fontSize: "1.8rem" }}>{cat.icon}</span>
              <div>
                <div style={{ fontWeight: 700, color: "#1a2a6c", fontSize: "0.92rem" }}>{cat.title}</div>
                <div style={{ fontSize: "0.78rem", color: "#e87722", fontWeight: 600 }}>{cat.count} samples</div>
              </div>
            </Link>
          ))}
        </div>

        {/* More sample works */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.35rem", color: "#1a2a6c", marginBottom: "18px" }}>More Sample Works</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "44px" }}>
          <Link href="/topic-selection-sample-work/" style={{ padding: "9px 16px", border: "1.5px solid #dde2ef", borderRadius: "8px", color: "#1a2a6c", fontSize: "0.82rem", fontWeight: 600, background: "#fff" }}>Topic Selection Sample Work</Link>
            <Link href="/our-sample-works/the-importance-of-early-interventions-in-enhancing-childrens-outcomes/" style={{ padding: "9px 16px", border: "1.5px solid #dde2ef", borderRadius: "8px", color: "#1a2a6c", fontSize: "0.82rem", fontWeight: 600, background: "#fff" }}>The importance of early interventions in enhancing children’s outcomes</Link>
            <Link href="/our-sample-works/a-guide-for-conducting-textual-analysis/" style={{ padding: "9px 16px", border: "1.5px solid #dde2ef", borderRadius: "8px", color: "#1a2a6c", fontSize: "0.82rem", fontWeight: 600, background: "#fff" }}>A step-by-step guide for conducting a textual analysis</Link>
            <Link href="/our-sample-works/privacy-and-trust-framework-for-swarm-intelligence-in-intrusion-detection-systems-3/" style={{ padding: "9px 16px", border: "1.5px solid #dde2ef", borderRadius: "8px", color: "#1a2a6c", fontSize: "0.82rem", fontWeight: 600, background: "#fff" }}>Swarm Intelligence Dissertation Sample</Link>
            <Link href="/our-sample-works/impact-workplace-social-media-usage-organisation/" style={{ padding: "9px 16px", border: "1.5px solid #dde2ef", borderRadius: "8px", color: "#1a2a6c", fontSize: "0.82rem", fontWeight: 600, background: "#fff" }}>Social Media in Workplace – Dissertation Sample</Link>
            <Link href="/our-sample-works/psychological-interventions-on-the-performance-of-athletes/" style={{ padding: "9px 16px", border: "1.5px solid #dde2ef", borderRadius: "8px", color: "#1a2a6c", fontSize: "0.82rem", fontWeight: 600, background: "#fff" }}>A study on psychological interventions on athletes&apos; performance</Link>
            <Link href="/our-sample-works/transforming-differences-competitive-advantage/" style={{ padding: "9px 16px", border: "1.5px solid #dde2ef", borderRadius: "8px", color: "#1a2a6c", fontSize: "0.82rem", fontWeight: 600, background: "#fff" }}>Transforming Differences into Competitive Advantage</Link>
            <Link href="/our-sample-works/dissertation-csr-report-credibility/" style={{ padding: "9px 16px", border: "1.5px solid #dde2ef", borderRadius: "8px", color: "#1a2a6c", fontSize: "0.82rem", fontWeight: 600, background: "#fff" }}>CSR Report Credibility Dissertation Sample | Experts</Link>
            <Link href="/our-sample-works/significance-of-selecting-right-topic-research-studies/" style={{ padding: "9px 16px", border: "1.5px solid #dde2ef", borderRadius: "8px", color: "#1a2a6c", fontSize: "0.82rem", fontWeight: 600, background: "#fff" }}>Significance of Selecting the Right Topic in Research Studies</Link>
            <Link href="/our-sample-works/literature-review/" style={{ padding: "9px 16px", border: "1.5px solid #dde2ef", borderRadius: "8px", color: "#1a2a6c", fontSize: "0.82rem", fontWeight: 600, background: "#fff" }}>Literature Review Samples for Dissertation Research</Link>
            <Link href="/our-sample-works/assignment-samples-assignment-on-reflection-of-clincal-skills-in-nurses/" style={{ padding: "9px 16px", border: "1.5px solid #dde2ef", borderRadius: "8px", color: "#1a2a6c", fontSize: "0.82rem", fontWeight: 600, background: "#fff" }}>Nursing Clinical Skills Reflection | Sample Assignment</Link>
            <Link href="/our-sample-works/detection-of-mental-health-disorders-in-social-media/" style={{ padding: "9px 16px", border: "1.5px solid #dde2ef", borderRadius: "8px", color: "#1a2a6c", fontSize: "0.82rem", fontWeight: 600, background: "#fff" }}>Detection of mental health disorders in social media</Link>
            <Link href="/our-sample-works/factors-influencing-the-success-of-scm/" style={{ padding: "9px 16px", border: "1.5px solid #dde2ef", borderRadius: "8px", color: "#1a2a6c", fontSize: "0.82rem", fontWeight: 600, background: "#fff" }}>SCM Success Factors Sample Work</Link>
            <Link href="/our-sample-works/optimizing-task-scheduling-algorithm-cloud-computing/" style={{ padding: "9px 16px", border: "1.5px solid #dde2ef", borderRadius: "8px", color: "#1a2a6c", fontSize: "0.82rem", fontWeight: 600, background: "#fff" }}>Cloud Task Scheduling Algorithm | Dissertation Sample</Link>
            <Link href="/our-sample-works/the-feminist-and-marxist-perspectives-on-art/" style={{ padding: "9px 16px", border: "1.5px solid #dde2ef", borderRadius: "8px", color: "#1a2a6c", fontSize: "0.82rem", fontWeight: 600, background: "#fff" }}>Marxist and Feminist Views on Art</Link>
            <Link href="/our-sample-works/the-gdpr-effect-on-small-business-marketing-practices/" style={{ padding: "9px 16px", border: "1.5px solid #dde2ef", borderRadius: "8px", color: "#1a2a6c", fontSize: "0.82rem", fontWeight: 600, background: "#fff" }}>The GDPR effect on small businesses marketing practices</Link>
            <Link href="/our-sample-works/the-effect-of-early-clinical-simulation-exposure-on-fourth-year-medical-student-academic-performance/" style={{ padding: "9px 16px", border: "1.5px solid #dde2ef", borderRadius: "8px", color: "#1a2a6c", fontSize: "0.82rem", fontWeight: 600, background: "#fff" }}>Effect of clinical simulation on the Medical Students’ Performance</Link>
            <Link href="/our-sample-works/sample-medical-assignment-questions/" style={{ padding: "9px 16px", border: "1.5px solid #dde2ef", borderRadius: "8px", color: "#1a2a6c", fontSize: "0.82rem", fontWeight: 600, background: "#fff" }}>Sample Medical Assignment Questions | Expert Writers</Link>
            <Link href="/our-sample-works/study-on-applications-and-challenges-of-blockchain/" style={{ padding: "9px 16px", border: "1.5px solid #dde2ef", borderRadius: "8px", color: "#1a2a6c", fontSize: "0.82rem", fontWeight: 600, background: "#fff" }}>Blockchain Applications & Challenges | Sample Study</Link>
            <Link href="/our-sample-works/breastfeeding-mothers-with-hypertensive-and-diabetic-conditions/" style={{ padding: "9px 16px", border: "1.5px solid #dde2ef", borderRadius: "8px", color: "#1a2a6c", fontSize: "0.82rem", fontWeight: 600, background: "#fff" }}>Breastfeeding Moms with Hypertension and Diabetes</Link>
        </div>

        {/* Proxied content */}
        {proxied?.content && proxied.content.trim().length > 100 && (
          <div className="library-content" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: proxied.content }} />
        )}
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "48px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: "10px" }}>Need Your Own Custom Academic Work?</h2>
        <p style={{ color: "#c5d5f0", fontSize: "0.93rem", marginBottom: "20px" }}>Our PhD-qualified writers deliver work that meets the same quality standard as the samples you see here.</p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 30px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 30px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
