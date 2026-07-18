import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Writers — PhD & Masters Experts",
  description: "Tutors India's 2000+ expert writers hold PhD or Masters degrees from top UK and US universities. Native English speakers with 5+ years research experience.",
  alternates: { canonical: "https://www.tutorsindia.com/our-writers" },
};

const countries = ["United States", "United Kingdom", "Australia", "Canada", "New Zealand", "Germany", "France", "Russia", "Ukraine", "India"];

const qualifications = [
  { title: "PhD Holders", desc: "Senior writers and research advisors with doctoral degrees from leading UK and US universities including Harvard, Oxford, University of Birmingham, and London Business School." },
  { title: "Post-Doctoral Fellows", desc: "Researchers who have completed their PhD and continue in advanced academic research, bringing cutting-edge knowledge to every project." },
  { title: "MD/PhD Holders", desc: "Medical doctors with doctoral degrees, specialising in medical writing, biostatistics, clinical research, and healthcare-related academic work." },
  { title: "Masters Degree Holders", desc: "Highly qualified writers with Masters degrees in their specialised fields, with minimum 5 years of research and writing experience at postgraduate level." },
  { title: "Statisticians & Biostatisticians", desc: "Senior statisticians with 10+ years experience using SPSS, SAS, R, STATA, NVIVO, Atlas-ti and other statistical and qualitative analysis software." },
  { title: "Subject Matter Experts", desc: "Specialists across 50+ academic subjects including Engineering, Medicine, Law, Computer Science, Business, Economics, Arts, and Biological Sciences." },
];

const selectionProcess = [
  "Rigorous academic qualification verification (PhD/Masters from accredited institutions)",
  "video interview conducted to assess subject knowledge and communication",
  "Written test to evaluate research and writing standards",
  "Sample work submission and portfolio review",
  "Background check and identity verification",
  "Non-Disclosure Agreement (NDA) signing",
  "International Research Experience criteria assessment",
  "Minimum qualification: Masters degree with research experience",
];

export default function OurWritersPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,var(--navy) 0%,#2563b0 100%)", color: "#fff", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.96rem", color: "#a0b8e0", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link> / Our Writers
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "2.2rem", marginBottom: "12px" }}>Our Writers</h1>
          <p style={{ color: "#c5d5f0", fontSize: "1.05rem" }}>2000+ PhD & Masters qualified academic experts across subjects and countries</p>
        </div>
      </section>

      <section style={{ maxWidth: "1200px", margin: "60px auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: "48px" }} className="two-col-grid">
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--navy)", marginBottom: "16px" }}>Why we are unique from others?</h2>
            <p style={{ color: "var(--text-mid)", lineHeight: 1.85, marginBottom: "14px" }}>
              Our team of UK dissertation writing experts consists of experienced professionals holding PhD degrees from prestigious universities from the UK, US, and Australia. They are referred to as <strong>&apos;Researchers&apos;</strong> since every topic they handle is unique and challenging.
            </p>
            <p style={{ color: "var(--text-mid)", lineHeight: 1.85, marginBottom: "14px" }}>
              Some of our writers are trained at <strong>Harvard School, Oxford, London School of Business, and the University of Birmingham</strong>. Our team of 2000+ expertise spans subjects and countries including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia, and Ukraine.
            </p>
            <p style={{ color: "var(--text-mid)", lineHeight: 1.85, marginBottom: "24px" }}>
              <strong>85% of our writers graduated from top UK universities</strong>. All writers are native English speakers with industry experience and educational degrees from international and top-ranked universities, cleared through our in-house screening process including video interview, written test, and NDA signing.
            </p>

            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--navy)", marginBottom: "14px" }}>Writer Selection Process</h3>
            <ul style={{ listStyle: "none", padding: 0, marginBottom: "28px" }}>
              {selectionProcess.map((item) => (
                <li key={item} style={{ display: "flex", gap: "10px", padding: "8px 0", borderBottom: "1px solid var(--border)", fontSize: "0.94rem", color: "var(--text-mid)" }}>
                  <span style={{ color: "var(--orange)", fontWeight: 700, flexShrink: 0 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--navy)", marginBottom: "12px" }}>Countries We Source Writers From</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {countries.map((c) => (
                <span key={c} style={{ background: "var(--light-blue)", color: "var(--blue)", padding: "5px 14px", borderRadius: "20px", fontSize: "0.82rem", fontWeight: 500 }}>{c}</span>
              ))}
            </div>
          </div>

          <div>
            {/* Stats */}
            <div style={{ background: "var(--navy)", color: "#fff", borderRadius: "12px", padding: "24px", marginBottom: "20px" }}>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "16px" }}>Writer Team at a Glance</h3>
              {[
                { label: "Total Experts", value: "2000+" },
                { label: "Countries Represented", value: "9+" },
                { label: "Minimum Qualification", value: "Masters Degree" },
                { label: "Average Experience", value: "7+ years" },
                { label: "UK University Graduates", value: "85%" },
                { label: "Subjects Covered", value: "50+" },
              ].map((stat) => (
                <div key={stat.label} style={{ display: "flex", justifyContent: "space-between", padding: "9px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", fontSize: "0.94rem" }}>
                  <span style={{ color: "#c5d5f0" }}>{stat.label}</span>
                  <span style={{ color: "#f9c74f", fontWeight: 700 }}>{stat.value}</span>
                </div>
              ))}
            </div>

            <div style={{ background: "var(--orange)", color: "#fff", borderRadius: "12px", padding: "20px", textAlign: "center" }}>
              <h4 style={{ fontWeight: 700, marginBottom: "10px" }}>Work With Our Experts</h4>
              <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.85)", marginBottom: "14px" }}>You can interact directly with our experts before committing to the service.</p>
              <Link href="/order-now/" style={{ display: "block", padding: "10px", background: "#fff", color: "var(--orange)", borderRadius: "5px", fontWeight: 700, textAlign: "center" }}>Get Started</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Writer categories */}
      <section style={{ background: "var(--gray)", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--navy)", textAlign: "center", marginBottom: "32px" }}>Our Team Composition</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }} className="three-col-grid">
            {qualifications.map((q) => (
              <div key={q.title} style={{ background: "#fff", borderRadius: "12px", padding: "24px", border: "1px solid var(--border)" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--navy)", marginBottom: "8px" }}>{q.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--text-mid)", lineHeight: 1.7 }}>{q.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
