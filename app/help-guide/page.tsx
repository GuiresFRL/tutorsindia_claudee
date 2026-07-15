import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help Guide — Academic Writing & Dissertation Guides",
  description: "Academic writing help guides for undergraduate, Masters, MBA and PhD students. Essay writing, dissertation guidelines, subject-specific guides, referencing guides. Tutors India.",
};

const ugGuides = [
  { title: "Undergraduate Help Guides Index", desc: "Complete index of all undergraduate academic writing resources and guides.", href: "/help-guide/" },
  { title: "Essay Writing Guide", desc: "Step-by-step guide to writing academic essays at undergraduate level — structure, argumentation, referencing.", href: "/help-guide/" },
  { title: "Subject Specific Guide", desc: "Subject-specific academic writing guides for Law, Business, Science, Engineering, Humanities and more.", href: "/subjects/" },
  { title: "Referencing Guide", desc: "Complete guide to Harvard, APA, MLA, Chicago, Vancouver, OSCOLA and IEEE referencing styles.", href: "/referencing-and-citation-manual-of-styles/" },
];

const mastersGuides = [
  { title: "Master Dissertation Guidelines", desc: "Comprehensive guide to writing a Masters dissertation — from topic selection to final submission.", href: "/our-services/masters-dissertation-writing-services/" },
  { title: "Masters Study Guide", desc: "Academic study skills guide for Masters students — time management, research strategies, critical thinking.", href: "/help-guide/" },
  { title: "Masters Writing Guide", desc: "Academic writing style guide for postgraduate students — argumentation, evidence use, critical analysis.", href: "/help-guide/" },
];

const writingTips = [
  { icon: "🎯", title: "Choose the Right Topic", desc: "Select a topic that has a genuine research gap, is feasible within your timeframe, and aligns with your interests and career goals. Speak with your supervisor before finalising." },
  { icon: "📚", title: "Conduct Systematic Literature Review", desc: "Search comprehensively across databases (Web of Science, ProQuest, Emerald, PubMed). Use Boolean operators and note key themes, debates, and gaps." },
  { icon: "🔬", title: "Justify Your Methodology", desc: "Every methodological choice must be theoretically justified — not just practical. Explain why your chosen approach is most appropriate for your research questions." },
  { icon: "📊", title: "Present Data Clearly", desc: "Use appropriate tables, graphs, and figures. Ensure each visual element is properly numbered, captioned, and discussed in the main text." },
  { icon: "✏️", title: "Write Critically, Not Descriptively", desc: "At postgraduate level, critical analysis is expected — evaluate, compare, contrast, and synthesise rather than simply describing what others have said." },
  { icon: "🔁", title: "Review and Revise Thoroughly", desc: "Leave time between writing and reviewing. Check for logical flow, argument coherence, citation accuracy, and compliance with your university's formatting guidelines." },
];

const dissertationStages = [
  { n: "01", stage: "Topic Selection", desc: "Identify a unique, researchable topic with a genuine research gap. Get supervisor approval before proceeding.", link: "/our-services/masters-dissertation-writing-services/dissertation-topic/" },
  { n: "02", stage: "Research Proposal", desc: "Write a compelling proposal justifying your topic, methodology, and expected contribution to knowledge.", link: "/our-services/masters-dissertation-writing-services/dissertation-proposal/" },
  { n: "03", stage: "Literature Review", desc: "Conduct a systematic review of existing literature, identify themes, debates, and your research gap.", link: "/our-services/coursework-writing/literature-review/" },
  { n: "04", stage: "Research Methodology", desc: "Design and justify your research approach — philosophy, strategy, data collection, and analysis methods.", link: "/our-services/coursework-writing/research-methodology/" },
  { n: "05", stage: "Data Collection & Analysis", desc: "Collect primary or secondary data. Analyse using appropriate quantitative or qualitative methods.", link: "/our-services/masters-dissertation-writing-services/dissertation-statistical-analysis/" },
  { n: "06", stage: "Discussion & Conclusion", desc: "Critically discuss findings against the literature. Draw conclusions and make recommendations.", link: "/our-services/masters-dissertation-writing-services/full-dissertation/" },
];

export default function HelpGuidePage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<span style={{ color: "#fff" }}>Help Guide</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.6rem,3vw,2.3rem)", marginBottom: "14px" }}>Help Guide Index — Dissertation &amp; Assignment</h1>
          <p style={{ color: "#c5d5f0", fontSize: "1.05rem", lineHeight: 1.75, maxWidth: "760px" }}>
            Academic writing help guides for undergraduate, Masters, MBA and PhD students. Find step-by-step guidance on dissertation writing, essay writing, referencing, and subject-specific academic support.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>

        {/* Guide Categories */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", marginBottom: "48px", alignItems: "start" }} className="two-col-grid">
          <div>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>📘 Undergraduate Help</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {ugGuides.map(g => (
                <Link key={g.title} href={g.href} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "16px 18px", display: "block" }}>
                  <div style={{ fontWeight: 700, color: "#1a2a6c", fontSize: "0.92rem", marginBottom: "4px" }}>{g.title}</div>
                  <div style={{ fontSize: "0.8rem", color: "#666" }}>{g.desc}</div>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>🎓 Masters Help</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {mastersGuides.map(g => (
                <Link key={g.title} href={g.href} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "16px 18px", display: "block" }}>
                  <div style={{ fontWeight: 700, color: "#1a2a6c", fontSize: "0.92rem", marginBottom: "4px" }}>{g.title}</div>
                  <div style={{ fontSize: "0.8rem", color: "#666" }}>{g.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Dissertation Stages */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Dissertation Writing — Stage by Stage</h2>
        <p style={{ color: "#666", fontSize: "0.96rem", marginBottom: "20px" }}>Navigate every step of your dissertation journey</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px", marginBottom: "48px" }} className="three-col-grid">
          {dissertationStages.map(stage => (
            <Link key={stage.n} href={stage.link} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px", display: "block" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "50%", width: "30px", height: "30px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.72rem", fontWeight: 700, flexShrink: 0 }}>{stage.n}</div>
                <h3 style={{ fontSize: "0.96rem", fontWeight: 700, color: "#1a2a6c" }}>{stage.stage}</h3>
              </div>
              <p style={{ fontSize: "0.8rem", color: "#666", lineHeight: 1.6, marginBottom: "8px" }}>{stage.desc}</p>
              <span style={{ fontSize: "0.78rem", color: "#e87722", fontWeight: 600 }}>Get Help →</span>
            </Link>
          ))}
        </div>

        {/* Writing Tips */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Top Academic Writing Tips</h2>
        <p style={{ color: "#666", fontSize: "0.96rem", marginBottom: "20px" }}>Guidance from our PhD-qualified academic writing experts</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px", marginBottom: "48px" }} className="three-col-grid">
          {writingTips.map(tip => (
            <div key={tip.title} style={{ background: "#f5f6fa", borderRadius: "10px", padding: "20px", border: "1px solid #dde2ef" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{tip.icon}</div>
              <h3 style={{ fontSize: "0.96rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{tip.title}</h3>
              <p style={{ fontSize: "0.8rem", color: "#666", lineHeight: 1.6 }}>{tip.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "36px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", fontWeight: 700, marginBottom: "10px" }}>Need Personal Academic Guidance?</h2>
          <p style={{ color: "#c5d5f0", fontSize: "0.93rem", marginBottom: "20px" }}>Our PhD-qualified experts provide hands-on support at every stage of your dissertation. Response within 30 minutes.</p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/order-now/" style={{ padding: "11px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
            <Link href="/ask-an-expert/" style={{ padding: "11px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Ask an Expert</Link>
          </div>
        </div>
      </section>
      <style>{`@media(max-width:768px){.two-col-grid{grid-template-columns:1fr!important;}.three-col-grid{grid-template-columns:1fr!important;}}`}</style>
    </>
  );
}
