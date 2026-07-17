import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Resources",
  description: "Free academic resources from Tutors India — essays, dissertation examples, titles, topics, referencing guides, research trends, and more.",
  
  alternates: { canonical: "https://tutorsindia.com/free-resources/" },
};

const resourceGroups = [
  {
    title: "Essays & Examples",
    href: "/essays/",
    desc: "Browse thousands of sample essays and academic examples across disciplines — business, law, psychology, engineering, and more.",
    links: [
      { label: "Business Essays", href: "/essays/business/" },
      { label: "Psychology Essays", href: "/essays/psychology/" },
      { label: "Law Essays", href: "/essays/law/" },
      { label: "Medical Essays", href: "/essays/medical/" },
      { label: "All Essays", href: "/essays/" },
    ],
  },
  {
    title: "Dissertation Titles",
    href: "/title/",
    desc: "Hundreds of sample dissertation titles across subjects to inspire your own research direction.",
    links: [
      { label: "Business Dissertation Titles", href: "/title/business-dissertation-titles/" },
      { label: "Accounting Titles", href: "/title/accounting-dissertation-titles/" },
      { label: "Computer Science Titles", href: "/title/computer-science-titles/" },
      { label: "Art Dissertation Titles", href: "/title/art-dissertation-titles/" },
      { label: "All Titles", href: "/title/" },
    ],
  },
  {
    title: "Dissertation Topics",
    href: "/topic/",
    desc: "Explore dissertation topic ideas categorised by subject, curated by our PhD-qualified researchers.",
    links: [
      { label: "Business Topics", href: "/topic/business-dissertation-topics/" },
      { label: "Accounting Topics", href: "/topic/accounting-dissertation-topics/" },
      { label: "Computer Science Topics", href: "/topic/computer-science-topics/" },
      { label: "Chemistry Topics", href: "/topic/chemistry-dissertation-topics/" },
      { label: "All Topics", href: "/topic/" },
    ],
  },
  {
    title: "Referencing & Citation Guides",
    href: "/referencing-and-citation-manual-of-styles/",
    desc: "A complete guide to all major academic referencing styles — APA, Harvard, MLA, Chicago, Vancouver, and more.",
    links: [
      { label: "Harvard Referencing", href: "/referencing-and-citation-manual-of-styles/" },
      { label: "APA Style Guide", href: "/referencing-and-citation-manual-of-styles/" },
      { label: "MLA Referencing", href: "/referencing-and-citation-manual-of-styles/" },
      { label: "Chicago Style", href: "/referencing-and-citation-manual-of-styles/" },
      { label: "All Referencing Styles", href: "/referencing-and-citation-manual-of-styles/" },
    ],
  },
  {
    title: "Research Trends & Insights",
    href: "/insights/",
    desc: "Stay up to date with the latest developments in academic research, AI in education, and industry trends.",
    links: [
      { label: "STEM for Britain 2025", href: "/insights/stem-for-britain/" },
      { label: "Posters in Parliament 2025", href: "/insights/posters-in-parliament-2025/" },
      { label: "AI & Academic Integrity", href: "/insights/news/academic-integrity-under-scrutiny-as-ai-tools-disrupt-traditional-assessments/" },
      { label: "British Science Week 2025", href: "/insights/news/inspire-young-minds-british-science-week-poster-competition-2025-theme-change-and-adapt/" },
      { label: "All Insights", href: "/insights/" },
    ],
  },
  {
    title: "Help Guides",
    href: "/help-guide/",
    desc: "Step-by-step academic writing guides for undergraduate, Masters, MBA, and PhD students.",
    links: [
      { label: "Gibbs' Reflective Cycle", href: "/gibbs-reflective-cycle-explained/" },
      { label: "Driscoll's Reflective Model", href: "/driscolls-reflective-model/" },
      { label: "Gantt Chart Guide", href: "/gantt-chart-for-dissertation-research-projects/" },
      { label: "Writing a Thesis Statement", href: "/coursework/how-to-write-a-clear-focused-thesis-statement-with-examples/" },
      { label: "All Help Guides", href: "/help-guide/" },
    ],
  },
  {
    title: "Dissertation Library",
    href: "/library/",
    desc: "Browse our extensive library of sample dissertations, research proposals, and academic outlines.",
    links: [
      { label: "Dissertation Library", href: "/library/" },
      { label: "Sample Work", href: "/library/" },
      { label: "Coursework Samples", href: "/coursework/" },
    ],
  },
  {
    title: "QA Forum",
    href: "/qa-forum/",
    desc: "Expert answers to common academic writing questions — statistical analysis, nursing assignments, and more.",
    links: [
      { label: "Statistics Q&A", href: "/qa-forum/" },
      { label: "Nursing Assignment Q&A", href: "/coursework/nursing-assignment-q-and-a/" },
      { label: "Browse QA Forum", href: "/qa-forum/" },
    ],
  },
];

export default function FreeResourcesPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "52px 20px 44px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>
            <span style={{ color: "#a0b8e0" }}> / </span>
            <span style={{ color: "#fff" }}>Free Resources</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.4rem,3vw,2.2rem)", lineHeight: 1.3, marginBottom: "14px" }}>
            Free Academic Resources
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "1rem", maxWidth: "720px" }}>
            Explore our free library of essays, dissertation titles and topics, referencing guides, research insights, and academic how-to guides — curated by our PhD-qualified team.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "52px 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(340px,1fr))", gap: "28px" }}>
          {resourceGroups.map((g) => (
            <div key={g.href} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "28px" }}>
              <Link href={g.href} style={{ textDecoration: "none" }}>
                <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", color: "#1a2a6c", marginBottom: "10px" }}>{g.title}</h2>
              </Link>
              <p style={{ fontSize: "0.94rem", color: "#555", lineHeight: 1.7, marginBottom: "16px" }}>{g.desc}</p>
              <ul style={{ paddingLeft: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                {g.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} style={{ fontSize: "0.87rem", color: "#2563b0", textDecoration: "none" }}>→ {l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ background: "#f0f4ff", borderRadius: "10px", padding: "32px", textAlign: "center", marginTop: "48px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", color: "#1a2a6c", marginBottom: "10px" }}>Need Personalised Academic Support?</h2>
          <p style={{ color: "#555", marginBottom: "20px", fontSize: "0.96rem" }}>Our expert team provides tailored help for dissertations, coursework, publications, and more.</p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/order-now/" style={{ padding: "10px 24px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
            <Link href="/contact-us/" style={{ padding: "10px 24px", border: "1.5px solid #1a2a6c", color: "#1a2a6c", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
          </div>
        </div>
      </div>

      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "44px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "10px" }}>Need Expert Academic Help?</h2>
        <p style={{ color: "#c5d5f0", fontSize: "0.96rem", marginBottom: "18px" }}>Our PhD-qualified writers provide tailored support for every stage of your academic journey.</p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "11px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "11px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
