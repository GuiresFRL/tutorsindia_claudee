import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coursework & Assignment Help",
  description: "Expert coursework and assignment writing help for Masters, MBA and PhD students. Essays, reports, case studies, literature reviews, research methodology and more. Tutors India.",
  alternates: { canonical: "https://www.tutorsindia.com/coursework-assignment/" },
};

const assignmentTypes = [
  { icon: "📝", title: "Essay Writing", desc: "Critical academic essays at Masters and PhD level — argumentation, evidence, academic structure.", href: "/our-services/coursework-writing/essay-writing-services/" },
  { icon: "📋", title: "Assignment Writing", desc: "All assignment types for UK, US, and Australian universities at undergraduate and postgraduate level.", href: "/our-services/coursework-writing/assignment-writing-services/" },
  { icon: "📖", title: "Annotated Bibliography", desc: "Summary, critical evaluation, and mixed annotations in APA, MLA, Chicago, Harvard, Vancouver.", href: "/our-services/coursework-writing/annotated-bibliography/" },
  { icon: "🔍", title: "Critical Review", desc: "Critical evaluation of academic texts — initial appraisal, content appraisal, critical commentary.", href: "/our-services/coursework-writing/critical-review/" },
  { icon: "🪞", title: "Reflective Report", desc: "Gibbs (1988) and Kolb (1984) reflective reports — Double Entry, Learning Diary, Log Book formats.", href: "/our-services/coursework-writing/reflective-report/" },
  { icon: "🏥", title: "Case Report Writing", desc: "Medical, business, legal, and scientific case reports to university and publication standards.", href: "/our-services/coursework-writing/case-report-writing-services/" },
  { icon: "📚", title: "Literature Review", desc: "Systematic, critical, and narrative literature reviews — minimum 80 references for PhD level.", href: "/our-services/coursework-writing/literature-review/" },
  { icon: "🔬", title: "Research Methodology", desc: "Qualitative, quantitative, or mixed methods — full philosophical justification and sampling strategy.", href: "/our-services/coursework-writing/research-methodology/" },
  { icon: "📎", title: "References Collection", desc: "12+ academic databases searched — Web of Science, ProQuest, Emerald, IEEE. 8 citation styles.", href: "/our-services/coursework-writing/references-collection-services/" },
  { icon: "📊", title: "Exam Notes", desc: "Subject matter expert-prepared revision notes, model answer frameworks, past paper guidance.", href: "/our-services/coursework-writing/exam-notes/" },
];

const guarantees = [
  { icon: "🛡️", title: "Plagiarism Free", desc: "All work scanned using Turnitin. Less than 5% guaranteed with certificate." },
  { icon: "🔁", title: "Unlimited Revisions", desc: "Free revisions even after project completion." },
  { icon: "⏱", title: "On-Time Delivery", desc: "Minor changes within 24 hours, significant within 48 hours." },
  { icon: "🎓", title: "Subject Experts", desc: "Writers matched to your specific subject area and academic level." },
  { icon: "🔒", title: "Confidential", desc: "NDA-signed writers, unique project codes, 128-bit SSL encryption." },
  { icon: "📞", title: "24/7 Support", desc: "Email, phone, WhatsApp — always available." },
];

export default function CourseworkAssignmentPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Coursework &amp; Assignment" }]} />
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<span style={{ color: "#fff" }}>Coursework &amp; Assignment</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.6rem,3vw,2.3rem)", marginBottom: "14px" }}>Coursework &amp; Assignment Help</h1>
            <p style={{ color: "#c5d5f0", fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "22px", maxWidth: "700px" }}>
              Expert coursework and assignment writing help for Masters, MBA, and PhD students at UK, US, and Australian universities. Essays, reports, case studies, literature reviews, research methodology, and more — all written by subject matter experts to your exact university guidelines.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Get A Free Quote</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/samples/assignment-writing.jpg" alt="Student working on academic assignment" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#f9c74f" }}>10+</div>
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0" }}>Assignment<br />Types Covered</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      <div style={{ background: "#12214a", padding: "16px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: "2,000+", l: "Expert Writers" }, { n: "10+ Types", l: "Assignments" }, { n: "< 5%", l: "Plagiarism" }, { n: "Unlimited", l: "Revisions" }, { n: "24/7", l: "Support" }, { n: "30 min", l: "Response" }].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
              <div style={{ fontSize: "0.68rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px", textAlign: "center" }}>Coursework &amp; Assignment Types We Cover</h2>
        <p style={{ color: "#666", fontSize: "0.96rem", marginBottom: "28px", textAlign: "center" }}>Expert academic writing across all coursework types for UK, US, and Australian universities</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px", marginBottom: "48px" }} className="two-col-grid">
          {assignmentTypes.map(a => (
            <Link key={a.title} href={a.href} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px", display: "flex", gap: "14px", alignItems: "flex-start" }}>
              <span style={{ fontSize: "1.8rem", flexShrink: 0 }}>{a.icon}</span>
              <div>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "5px" }}>{a.title}</h3>
                <p style={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.6, marginBottom: "6px" }}>{a.desc}</p>
                <span style={{ fontSize: "0.8rem", color: "#e87722", fontWeight: 600 }}>Learn More →</span>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px", marginBottom: "40px" }} className="three-col-grid">
          {guarantees.map(g => (
            <div key={g.title} style={{ background: "#f5f6fa", borderRadius: "10px", padding: "20px", border: "1px solid #dde2ef", textAlign: "center" }}>
              <div style={{ fontSize: "2rem", marginBottom: "8px" }}>{g.icon}</div>
              <h3 style={{ fontSize: "0.96rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "5px" }}>{g.title}</h3>
              <p style={{ fontSize: "0.79rem", color: "#666", lineHeight: 1.55 }}>{g.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Expert Coursework Support Today</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>All Assignment Types · Subject Experts · UK & US Standards · Response in 30 min</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/our-services/coursework-writing/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>All Coursework Services</Link>
        </div>
      </section>
      <style>{`@media(max-width:768px){.two-col-grid{grid-template-columns:1fr!important;}.three-col-grid{grid-template-columns:1fr!important;}}`}</style>
    </>
  );
}
