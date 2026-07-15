import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { subjects, getSubject } from "../data";

export const revalidate = 3600;

interface Props {
  params: Promise<{ subject: string }>;
}

export async function generateStaticParams() {
  return subjects.map((s) => ({ subject: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subject: subjectSlug } = await params;
  const subject = getSubject(subjectSlug);
  if (!subject) return { title: "Ask an Expert | Tutors India" };
  return {
    title: `${subject.title} Q&A — Expert Answers | Tutors India`,
    description: `Browse free expert answers to ${subject.title} questions. ${subject.desc}`,
    
    alternates: { canonical: `https://tutorsindia.com/ask-an-expert/${subject.slug}/` },
  };
}

export default async function SubjectPage({ params }: Props) {
  const { subject: subjectSlug } = await params;
  const subject = getSubject(subjectSlug);
  if (!subject) notFound();

  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "52px 20px 44px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <Link href="/ask-an-expert/" style={{ color: "#a0b8e0" }}>Ask an Expert</Link>{" / "}
            <span style={{ color: "#fff" }}>{subject.title}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "12px" }}>
            <span style={{ fontSize: "2rem" }}>{subject.icon}</span>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.2rem)" }}>
              {subject.title} — Expert Q&amp;A
            </h1>
          </div>
          <p style={{ color: "#c5d5f0", fontSize: "0.97rem", maxWidth: "680px", marginBottom: "20px" }}>
            {subject.desc} Browse free expert answers below or submit your own question.
          </p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Link href="/ask-an-expert/ask-a-question/" style={{ padding: "10px 22px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "0.96rem" }}>Ask a Question Free</Link>
            <Link href="/ask-an-expert/" style={{ padding: "10px 22px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, fontSize: "0.96rem" }}>All Subjects</Link>
          </div>
        </div>
      </section>

      {/* Q&A listing */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "44px 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.15rem", color: "#1a2a6c", marginBottom: "6px" }}>
          {subject.items.length} Expert Answers in {subject.title}
        </h2>
        <p style={{ color: "#666", fontSize: "0.94rem", marginBottom: "28px" }}>Click any question to read the full expert answer.</p>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {subject.items.map((item, idx) => (
            <Link
              key={item.slug}
              href={`/ask-an-expert/${subject.slug}/${item.slug}/`}
              style={{
                display: "flex", alignItems: "flex-start", gap: "16px",
                background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px",
                padding: "20px 22px", textDecoration: "none",
                boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
              }}
            >
              <span style={{ minWidth: "32px", height: "32px", background: subject.color, color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem", fontWeight: 700, marginTop: "2px" }}>
                {idx + 1}
              </span>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "0.95rem", color: "#1a2a6c", marginBottom: "4px", lineHeight: 1.45 }}>
                  {item.question}
                </h3>
                <span style={{ fontSize: "0.78rem", color: "#e87722", fontWeight: 700 }}>Read Expert Answer →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Other subjects */}
      <section style={{ background: "#f5f6fa", padding: "36px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "14px" }}>Explore Other Subjects</h3>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {subjects.filter((s) => s.slug !== subject.slug).map((s) => (
              <Link key={s.slug} href={`/ask-an-expert/${s.slug}/`} style={{ padding: "8px 16px", border: "1.5px solid #1a2a6c", color: "#1a2a6c", borderRadius: "5px", fontSize: "0.85rem", fontWeight: 600 }}>
                {s.icon} {s.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "48px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "10px" }}>Need Full Academic Support?</h2>
        <p style={{ color: "#c5d5f0", fontSize: "0.96rem", marginBottom: "20px" }}>Our PhD-qualified experts provide comprehensive dissertation, essay, and research support.</p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 30px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 30px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
