import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dissertation Index | Topic Ideas & Research Areas | Tutors India",
  description: "Browse our Dissertation Index for topic ideas, research areas, and subject-specific dissertation guidance across all academic disciplines. Tutors India.",
};

const categories = [
  { subject: "Business & Management", icon: "💼", topics: ["Strategic Management & Leadership", "Human Resource Management", "International Business", "Marketing Management", "Operations & Supply Chain", "Entrepreneurship & Innovation", "Digital Marketing", "Corporate Social Responsibility", "Financial Management", "Organisational Behaviour"] },
  { subject: "Medicine & Healthcare", icon: "🏥", topics: ["Clinical Practice & Patient Care", "Public Health & Epidemiology", "Nursing Research", "Healthcare Management", "Mental Health & Wellbeing", "Medical Education", "Pharmacology & Drug Development", "Global Health Issues", "Healthcare Policy", "Biomedical Research"] },
  { subject: "Engineering & Technology", icon: "⚙️", topics: ["Sustainable Engineering", "AI & Machine Learning Applications", "Civil Infrastructure Development", "Renewable Energy Systems", "Software Architecture", "Cybersecurity & Data Protection", "Robotics & Automation", "Environmental Engineering", "Telecommunications", "Materials Science"] },
  { subject: "Economics & Finance", icon: "📈", topics: ["Financial Market Analysis", "Macroeconomic Policy", "Corporate Finance & Valuation", "International Trade & Economics", "Behavioural Economics", "Banking & Financial Regulation", "Cryptocurrency & Blockchain", "Development Economics", "Econometric Modelling", "Environmental Economics"] },
  { subject: "Computer Science & IT", icon: "💻", topics: ["Artificial Intelligence & Deep Learning", "Big Data Analytics", "Cloud Computing Architecture", "Network Security & Privacy", "Internet of Things (IoT)", "Natural Language Processing", "Computer Vision", "Quantum Computing", "Human-Computer Interaction", "Software Engineering Practices"] },
  { subject: "Law & Legal Studies", icon: "⚖️", topics: ["Corporate Law & Governance", "International Human Rights Law", "Criminal Law & Justice", "Environmental Law & Policy", "Medical Law & Ethics", "Intellectual Property Law", "EU Law & Brexit", "Employment Law", "Contract Law", "Constitutional Law"] },
  { subject: "Psychology & Social Sciences", icon: "🧠", topics: ["Cognitive & Behavioural Psychology", "Clinical & Counselling Psychology", "Organisational Psychology", "Developmental Psychology", "Social Media & Mental Health", "Cross-Cultural Psychology", "Neuropsychology", "Educational Psychology", "Health Psychology", "Forensic Psychology"] },
  { subject: "Arts & Humanities", icon: "🎨", topics: ["Post-Colonial Literature", "Gender Studies & Feminism", "Cultural Identity & Globalisation", "Media Representation & Bias", "Historical Analysis", "Philosophy of Mind & Ethics", "Film Studies & Semiotics", "Linguistics & Language Change", "Architecture & Urban Design", "Music & Cultural Impact"] },
];

export default function DissertationIndexPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/library/" style={{ color: "#a0b8e0" }}>Library</Link>{" / "}<span style={{ color: "#fff" }}>Dissertation Index</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.6rem,3vw,2.3rem)", marginBottom: "14px" }}>Dissertation Index</h1>
          <p style={{ color: "#c5d5f0", fontSize: "1.05rem", lineHeight: 1.75, maxWidth: "760px", marginBottom: "22px" }}>
            Browse research areas and topic ideas across all major academic disciplines. Find inspiration for your dissertation topic and discover what research areas our expert writers specialise in.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link href="/our-services/masters-dissertation-writing-services/dissertation-topic/" style={{ padding: "11px 26px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Get Topic Help</Link>
            <Link href="/contact-us/" style={{ padding: "11px 26px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "48px" }} className="two-col-grid">
          {categories.map(cat => (
            <div key={cat.subject} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", overflow: "hidden" }}>
              <div style={{ background: "#1a2a6c", color: "#fff", padding: "14px 20px", display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "1.5rem" }}>{cat.icon}</span>
                <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "0.98rem", fontWeight: 700 }}>{cat.subject}</h3>
              </div>
              <div style={{ padding: "16px 20px" }}>
                {cat.topics.map((topic, i) => (
                  <div key={topic} style={{ display: "flex", gap: "8px", padding: "7px 0", borderBottom: i < cat.topics.length - 1 ? "1px solid #f0f2fa" : "none", fontSize: "0.82rem", color: "#555", alignItems: "flex-start" }}>
                    <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0, marginTop: "1px" }}>→</span>
                    {topic}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ background: "#e87722", color: "#fff", borderRadius: "12px", padding: "36px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", fontWeight: 700, marginBottom: "10px" }}>Need a Unique Dissertation Topic?</h2>
          <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.93rem", marginBottom: "20px" }}>Our researchers identify original, researchable topics with genuine research gaps — approved by supervisors on first submission.</p>
          <Link href="/our-services/masters-dissertation-writing-services/dissertation-topic/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700, display: "inline-block" }}>
            Topic Selection Service →
          </Link>
        </div>
      </section>
      <style>{`@media(max-width:768px){.two-col-grid{grid-template-columns:1fr!important;}}`}</style>
    </>
  );
}
