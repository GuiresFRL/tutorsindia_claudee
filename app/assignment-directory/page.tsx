import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assignment Directory",
  description: "Browse Tutors India's full directory of academic writing services — dissertations, coursework, publication support, editing, development, and more.",
  
  alternates: { canonical: "https://www.tutorsindia.com/assignment-directory/" },
};

const categories = [
  {
    title: "Masters Dissertation",
    href: "/our-services/masters-dissertation-writing-services/",
    color: "#1a2a6c",
    services: [
      { label: "Full Dissertation", href: "/our-services/masters-dissertation-writing-services/full-dissertation/" },
      { label: "Dissertation Proposal", href: "/our-services/masters-dissertation-writing-services/dissertation-proposal/" },
      { label: "Dissertation Topic Selection", href: "/our-services/masters-dissertation-writing-services/dissertation-topic/" },
      { label: "Dissertation Part", href: "/our-services/masters-dissertation-writing-services/dissertation-part/" },
      { label: "Statistical Analysis", href: "/our-services/masters-dissertation-writing-services/dissertation-statistical-analysis/" },
      { label: "Resit Dissertation", href: "/our-services/masters-dissertation-writing-services/resit-dissertation/" },
      { label: "UG Dissertation", href: "/our-services/masters-dissertation-writing-services/ug-dissertation/" },
      { label: "CV Writing", href: "/our-services/masters-dissertation-writing-services/cv-writing/" },
      { label: "Poster Presentation", href: "/our-services/masters-dissertation-writing-services/poster-presentation/" },
    ],
  },
  {
    title: "PhD / DBA Dissertation",
    href: "/our-services/phd-dba-dissertation/",
    color: "#2563b0",
    services: [
      { label: "Full PhD Dissertation", href: "/our-services/phd-dba-dissertation/phd-full-dissertation/" },
      { label: "Research Proposal", href: "/our-services/phd-dba-dissertation/phd-research-proposal/" },
      { label: "PhD Topic Selection", href: "/our-services/phd-dba-dissertation/phd-dissertation-topic/" },
      { label: "PhD Dissertation Part", href: "/our-services/phd-dba-dissertation/phd-dissertation-part/" },
      { label: "Research Plan", href: "/our-services/phd-dba-dissertation/phd-research-plan/" },
      { label: "Viva Voce Preparation", href: "/our-services/phd-dba-dissertation/phd-viva-voice/" },
      { label: "PhD Presentation", href: "/our-services/phd-dba-dissertation/phd-presentation/" },
      { label: "PhD Coursework", href: "/our-services/phd-dba-dissertation/phd-coursework/" },
      { label: "Dissertation Rework", href: "/our-services/phd-dba-dissertation/phd-dissertation-rework/" },
      { label: "PhD Synopsis", href: "/our-services/phd-dba-dissertation/phd-synopsis/" },
    ],
  },
  {
    title: "Coursework Writing",
    href: "/our-services/coursework-writing/",
    color: "#e87722",
    services: [
      { label: "Assignment Writing", href: "/our-services/coursework-writing/assignment-writing-services/" },
      { label: "Essay Writing", href: "/our-services/coursework-writing/essay-writing-services/" },
      { label: "Literature Review", href: "/our-services/coursework-writing/literature-review/" },
      { label: "Research Methodology", href: "/our-services/coursework-writing/research-methodology/" },
      { label: "Critical Review", href: "/our-services/coursework-writing/critical-review/" },
      { label: "Reflective Report", href: "/our-services/coursework-writing/reflective-report/" },
      { label: "Annotated Bibliography", href: "/our-services/coursework-writing/annotated-bibliography/" },
      { label: "Case Report Writing", href: "/our-services/coursework-writing/case-report-writing-services/" },
      { label: "Exam Notes", href: "/our-services/coursework-writing/exam-notes/" },
      { label: "References Collection", href: "/our-services/coursework-writing/references-collection-services/" },
    ],
  },
  {
    title: "Publication Support",
    href: "/our-services/publication-support/",
    color: "#1a7c4c",
    services: [
      { label: "Manuscript Development", href: "/our-services/publication-support/manuscript-development/" },
      { label: "Conference Paper", href: "/our-services/publication-support/conference-paper/" },
      { label: "Statistical Services", href: "/our-services/publication-support/statistical-services/" },
      { label: "Biostatistics", href: "/our-services/publication-support/biostatistics-services/" },
      { label: "Medical Writing", href: "/our-services/publication-support/medical-writing/" },
      { label: "Engineering Research", href: "/our-services/publication-support/engineering-research/" },
      { label: "CSE & IT Research", href: "/our-services/publication-support/computer-science-engineering-cse-and-it/" },
      { label: "Conference Abstract", href: "/our-services/publication-support/conference-abstract/" },
      { label: "Peer Review Submissions", href: "/our-services/publication-support/peer-review-submissions/" },
      { label: "Text Book Writing", href: "/our-services/publication-support/text-book-writing/" },
    ],
  },
  {
    title: "Editing Services",
    href: "/our-services/editing-services/",
    color: "#7c3a9b",
    services: [
      { label: "Language Editing", href: "/our-services/editing-services/language-editing/" },
      { label: "Scientific Editing", href: "/our-services/editing-services/scientific-editing-services/" },
      { label: "Technical Editing", href: "/our-services/editing-services/technical-editing/" },
      { label: "Formatting Service", href: "/our-services/editing-services/formatting-service/" },
      { label: "Citation Compliance", href: "/our-services/editing-services/citation-compliance/" },
      { label: "Plagiarism Report", href: "/our-services/editing-services/plagiarism-report/" },
      { label: "Translation Services", href: "/our-services/editing-services/translation-services/" },
      { label: "Transcription Services", href: "/our-services/editing-services/transcription-services/" },
      { label: "Grant Proposal Writing", href: "/our-services/editing-services/grant-proposal-writing/" },
    ],
  },
  {
    title: "Development Services",
    href: "/our-services/development/",
    color: "#c0392b",
    services: [
      { label: "Programming", href: "/our-services/development/programming/" },
      { label: "Coding and Algorithm", href: "/our-services/development/coding-and-algorithm/" },
      { label: "Software Development", href: "/our-services/development/software-development/" },
      { label: "Big Data Analytics", href: "/our-services/development/big-data-analytics/" },
      { label: "Web Solutions", href: "/our-services/development/web-solutions/" },
      { label: "Tool Development", href: "/our-services/development/tool-development/" },
      { label: "Graphic Design", href: "/our-services/development/graphic-design-services/" },
      { label: "Animation Services", href: "/our-services/development/animation-services/" },
      { label: "Online Tutoring", href: "/our-services/development/online-tutoring-services/" },
      { label: "E-Learning Development", href: "/our-services/development/e-learning-content-development/" },
    ],
  },
];

const subjects = [
  { label: "Academic Law", href: "/subjects/academic-law-ug-masters-phd-writing-help/" },
  { label: "Engineering & Technology", href: "/subjects/engineering-technology-academic-writing/" },
  { label: "Economics & Finance", href: "/subjects/economics-finance-academic-writing-help/" },
  { label: "Medicine & Health Science", href: "/subjects/medicine-health-science-academic-writing/" },
  { label: "Business & Management", href: "/subjects/business-management-studies-academic-writing-help/" },
  { label: "Arts & Humanities", href: "/subjects/arts-humanities-academic-writing-help/" },
  { label: "Biological & Life Science", href: "/subjects/biological-life-science-academic-writing-help/" },
  { label: "Computer Science & IT", href: "/subjects/computer-science-information-technology-academic-writing/" },
];

export default function AssignmentDirectoryPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Assignment Directory" }]} />
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "52px 20px 44px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>
            <span style={{ color: "#a0b8e0" }}> / </span>
            <span style={{ color: "#fff" }}>Assignment Directory</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.4rem,3vw,2.2rem)", lineHeight: 1.3, marginBottom: "14px" }}>
            Assignment Directory
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "1rem", maxWidth: "720px" }}>
            Browse our complete directory of academic writing services — from Masters dissertations to programming assignments, across all subjects and levels.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "52px 20px" }}>

        {categories.map((cat) => (
          <div key={cat.href} style={{ marginBottom: "40px" }}>
            <Link href={cat.href} style={{ textDecoration: "none" }}>
              <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", color: cat.color, marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                {cat.title} <span style={{ fontSize: "0.85rem", fontWeight: 400, color: "#888" }}>→ View all</span>
              </h2>
            </Link>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: "10px" }}>
              {cat.services.map((s) => (
                <Link key={s.href} href={s.href} style={{ padding: "10px 14px", background: "#fff", border: "1px solid #dde2ef", borderRadius: "6px", fontSize: "0.94rem", color: "#333", textDecoration: "none", display: "block" }}>
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
        ))}

        <div style={{ marginTop: "48px", background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "32px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", color: "#1a2a6c", marginBottom: "20px" }}>Browse by Subject</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {subjects.map((s) => (
              <Link key={s.href} href={s.href} style={{ padding: "9px 18px", background: "#f0f4ff", color: "#1a2a6c", borderRadius: "20px", fontSize: "0.87rem", fontWeight: 600, textDecoration: "none", border: "1px solid #c5d5f0" }}>
                {s.label}
              </Link>
            ))}
          </div>
        </div>

        <div style={{ background: "#f0f4ff", borderRadius: "10px", padding: "32px", textAlign: "center", marginTop: "32px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", color: "#1a2a6c", marginBottom: "10px" }}>Can't Find What You Need?</h2>
          <p style={{ color: "#555", marginBottom: "20px", fontSize: "0.96rem" }}>Contact us — we support a wide range of academic tasks across all levels and disciplines.</p>
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
