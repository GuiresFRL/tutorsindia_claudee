import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Library — Academic Resources, Guides & Sample Work | Tutors India",
  description: "Tutors India Library — academic resources, dissertation index, help guides, referencing guides, sample works, and research tools for students and scholars.",
};

const resources = [
  { icon: "📚", title: "Dissertation Index", desc: "Browse topic ideas and research areas across all academic disciplines — Business, Medicine, Engineering, Law, Psychology, Arts and more.", href: "/library/dissertation-index/", cta: "Browse Topics" },
  { icon: "📖", title: "Help Guides", desc: "Academic writing guides for undergraduate, Masters, MBA, and PhD students — dissertation guidelines, essay writing, and subject-specific guides.", href: "/help-guide/", cta: "View Guides" },
  { icon: "📝", title: "Referencing Guide", desc: "Complete guide to all major citation styles — Harvard, APA, MLA, Chicago, Vancouver, OSCOLA, Turabian, IEEE with examples and key rules.", href: "/referencing-and-citation-manual-of-styles/", cta: "Referencing Guide" },
  { icon: "🔬", title: "Sample Works", desc: "View sample dissertations, essays, literature reviews, and other academic work produced by our expert writers across all disciplines.", href: "/our-sample-works/", cta: "View Samples" },
  { icon: "❓", title: "FAQ", desc: "Answers to the most common questions about our services, ordering process, payment, quality guarantees, and confidentiality policy.", href: "/faq/", cta: "Read FAQs" },
  { icon: "💡", title: "Ask an Expert", desc: "Free academic consultation — ask our PhD-qualified subject matter experts any question about your dissertation, thesis or research project.", href: "/ask-an-expert/", cta: "Ask Now" },
];

const academicTools = [
  { icon: "🎓", name: "Masters Dissertation Help", href: "/our-services/masters-dissertation-writing-services/" },
  { icon: "📊", name: "Statistical Analysis", href: "/our-services/masters-dissertation-writing-services/dissertation-statistical-analysis/" },
  { icon: "📋", name: "Research Proposal Writing", href: "/our-services/masters-dissertation-writing-services/dissertation-proposal/" },
  { icon: "📚", name: "Literature Review", href: "/our-services/coursework-writing/literature-review/" },
  { icon: "🔬", name: "Research Methodology", href: "/our-services/coursework-writing/research-methodology/" },
  { icon: "✏️", name: "Language Editing", href: "/our-services/editing-services/language-editing/" },
  { icon: "🛡️", name: "Plagiarism Report", href: "/our-services/editing-services/plagiarism-report/" },
  { icon: "📐", name: "Citation Compliance", href: "/our-services/editing-services/citation-compliance/" },
];

export default function LibraryPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<span style={{ color: "#fff" }}>Library</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.6rem,3vw,2.3rem)", marginBottom: "14px" }}>Tutors India Library</h1>
          <p style={{ color: "#c5d5f0", fontSize: "1.05rem", lineHeight: 1.75, maxWidth: "760px", marginBottom: "8px" }}>
            Your academic resource hub — dissertation indexes, help guides, referencing guides, sample works, FAQs, and expert consultation. Everything you need to succeed academically in one place.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "28px", textAlign: "center" }}>Academic Resources</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "22px", marginBottom: "56px" }} className="three-col-grid">
          {resources.map(r => (
            <div key={r.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "24px" }}>
              <div style={{ fontSize: "2.2rem", marginBottom: "12px" }}>{r.icon}</div>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "8px" }}>{r.title}</h3>
              <p style={{ fontSize: "0.84rem", color: "#666", lineHeight: 1.65, marginBottom: "16px" }}>{r.desc}</p>
              <Link href={r.href} style={{ fontSize: "0.85rem", color: "#e87722", fontWeight: 700 }}>{r.cta} →</Link>
            </div>
          ))}
        </div>

        {/* Quick Tools */}
        <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "32px", marginBottom: "40px", border: "1px solid #dde2ef" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px", textAlign: "center" }}>Quick Links to Academic Services</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "12px" }} className="four-col-grid">
            {academicTools.map(tool => (
              <Link key={tool.name} href={tool.href} style={{ display: "flex", alignItems: "center", gap: "8px", background: "#fff", border: "1px solid #dde2ef", borderRadius: "8px", padding: "12px 14px", fontSize: "0.83rem", color: "#1a2a6c", fontWeight: 500 }}>
                <span style={{ fontSize: "1.2rem" }}>{tool.icon}</span>
                {tool.name}
              </Link>
            ))}
          </div>
        </div>

        <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "36px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", fontWeight: 700, marginBottom: "10px" }}>Need Personal Academic Support?</h2>
          <p style={{ color: "#c5d5f0", fontSize: "0.93rem", marginBottom: "20px" }}>Our 2000+ PhD-qualified experts are available 24/7 to help with any academic challenge. Response within 30 minutes.</p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/order-now/" style={{ padding: "11px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
            <Link href="/ask-an-expert/" style={{ padding: "11px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Ask an Expert</Link>
          </div>
        </div>
      </section>
      <style>{`@media(max-width:768px){.three-col-grid{grid-template-columns:1fr!important;}} @media(max-width:900px){.four-col-grid{grid-template-columns:1fr 1fr!important;}}`}</style>
    </>
  );
}
