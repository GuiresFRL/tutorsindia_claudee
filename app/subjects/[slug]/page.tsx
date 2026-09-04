import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const subjects: Record<string, { title: string; icon: string; desc: string; services: string[] }> = {
  "academic-law-ug-masters-phd-writing-help": {
    title: "Academic Law", icon: "⚖️",
    desc: "UG, Masters and PhD writing help in commercial law, criminal law, international law, constitutional law and more.",
    services: ["Commercial Law Dissertation", "Criminal Law Assignment", "International Law Research", "Constitutional Law Help", "Contract Law Writing", "Tort Law Assistance"],
  },
  "medicine-health-science-academic-writing": {
    title: "Medicine & Health Science", icon: "🏥",
    desc: "Expert support for medical dissertations, clinical research, nursing assignments and healthcare management studies.",
    services: ["Medical Dissertation Writing", "Nursing Assignment Help", "Clinical Research Support", "Healthcare Management", "Public Health Research", "Biomedical Science Writing"],
  },
  "engineering-technology-academic-writing": {
    title: "Engineering & Technology", icon: "⚙️",
    desc: "Dissertation and assignment help for civil, mechanical, electrical, computer and software engineering students.",
    services: ["Civil Engineering Dissertation", "Mechanical Engineering Help", "Electrical Engineering Support", "Software Engineering Projects", "Chemical Engineering Writing", "Aerospace Engineering"],
  },
  "economics-finance-academic-writing-help": {
    title: "Economics & Finance", icon: "📊",
    desc: "Academic writing support for economics, finance, accounting, banking and investment management students.",
    services: ["Economics Dissertation", "Finance Research Writing", "Accounting Assignments", "Banking & Investment", "Financial Analysis Support", "Econometrics Help"],
  },
  "business-management-studies-academic-writing-help": {
    title: "Business & Management", icon: "💼",
    desc: "MBA, Masters and PhD dissertation help in business strategy, HRM, marketing, operations and entrepreneurship.",
    services: ["MBA Dissertation", "HRM Research", "Marketing Management", "Operations Management", "Business Strategy", "Entrepreneurship Studies"],
  },
  "arts-humanities-academic-writing-help": {
    title: "Arts & Humanities", icon: "🎨",
    desc: "Academic writing support for arts, literature, history, philosophy, sociology and cultural studies.",
    services: ["Literature Dissertation", "History Research", "Philosophy Essays", "Sociology Assignments", "Cultural Studies", "Media Studies Writing"],
  },
  "biological-life-science-academic-writing-help": {
    title: "Biological & Life Science", icon: "🔬",
    desc: "Research and dissertation support for biology, biochemistry, genetics, pharmacology and environmental science.",
    services: ["Biology Dissertation", "Biochemistry Research", "Genetics Studies", "Pharmacology Writing", "Environmental Science", "Ecology Research"],
  },
  "computer-science-information-technology-academic-writing": {
    title: "Computer Science & IT", icon: "💻",
    desc: "Expert help for CS dissertations, software engineering projects, AI research, networking and cybersecurity assignments.",
    services: ["CS Dissertation", "AI & Machine Learning", "Network Security", "Database Management", "Software Development", "Data Science Projects"],
  },
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(subjects).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const subject = subjects[slug];
  if (!subject) return {};
  return { title: `${subject.title} Academic Writing Help`, description: subject.desc };
}

export default async function SubjectPage({ params }: Props) {
  const { slug } = await params;
  const subject = subjects[slug];
  if (!subject) notFound();

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Subjects", url: "/subjects/" }, { name: subject.title }]} />
      <section style={{ background: "linear-gradient(135deg,var(--navy) 0%,#2563b0 100%)", color: "#fff", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.96rem", color: "#a0b8e0", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link> / <Link href="/subjects/" style={{ color: "#a0b8e0" }}>Subjects</Link> / {subject.title}
          </div>
          <span style={{ fontSize: "3rem" }}>{subject.icon}</span>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "2.2rem", margin: "12px 0" }}>{subject.title} Academic Writing Help</h1>
          <p style={{ color: "#c5d5f0", fontSize: "1.05rem", maxWidth: "700px" }}>{subject.desc}</p>
        </div>
      </section>

      <section style={{ maxWidth: "1200px", margin: "60px auto", padding: "0 20px", display: "grid", gridTemplateColumns: "2fr 1fr", gap: "40px" }} className="subject-layout">
        <div>
          <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "12px", padding: "32px", marginBottom: "24px" }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--navy)", marginBottom: "16px" }}>Expert {subject.title} Writing Support</h2>
            <p style={{ color: "var(--text-mid)", lineHeight: 1.8, marginBottom: "16px" }}>
              Tutors India provides comprehensive academic writing support for {subject.title} students at all levels — undergraduate, Masters, and PhD. Our team of subject-specialist writers have advanced degrees in {subject.title} from leading UK and US universities.
            </p>
            <p style={{ color: "var(--text-mid)", lineHeight: 1.8, marginBottom: "24px" }}>
              Whether you need help with your dissertation, research proposal, assignments, or publications, our experts are ready to guide you through every step of the academic writing process.
            </p>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--navy)", marginBottom: "14px" }}>Services We Offer in {subject.title}</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              {subject.services.map((svc) => (
                <div key={svc} style={{ display: "flex", gap: "8px", padding: "10px", background: "var(--gray)", borderRadius: "6px", fontSize: "0.94rem", color: "var(--text-mid)" }}>
                  <span style={{ color: "var(--orange)", fontWeight: 700 }}>✓</span>
                  {svc}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ position: "sticky", top: "80px" }}>
          <div style={{ background: "var(--navy)", color: "#fff", borderRadius: "12px", padding: "24px", textAlign: "center" }}>
            <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "10px" }}>Get Expert {subject.title} Help</h3>
            <p style={{ fontSize: "0.85rem", color: "#c5d5f0", marginBottom: "16px" }}>Response within 30 minutes. Free consultation available.</p>
            <Link href="/order-now/" style={{ display: "block", padding: "10px", background: "var(--orange)", color: "#fff", borderRadius: "5px", fontWeight: 600, marginBottom: "10px" }}>Order Now</Link>
            <Link href="/contact-us/" style={{ display: "block", padding: "10px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
          </div>
          <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "12px", padding: "20px", marginTop: "20px" }}>
            <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--navy)", marginBottom: "12px" }}>Explore Our Services</h4>
            {[
              { label: "Masters Dissertation", href: "/our-services/masters-dissertation-writing-services/" },
              { label: "PhD Dissertation", href: "/our-services/phd-dba-dissertation/" },
              { label: "Coursework Writing", href: "/our-services/coursework-writing/" },
              { label: "Editing Services", href: "/our-services/editing-services/" },
            ].map((s) => (
              <Link key={s.href} href={s.href} style={{ display: "block", padding: "8px 0", borderBottom: "1px solid var(--border)", fontSize: "0.87rem", color: "var(--blue)" }}>{s.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <style>{`@media(max-width:768px){.subject-layout{grid-template-columns:1fr!important;}}`}</style>
    </>
  );
}
