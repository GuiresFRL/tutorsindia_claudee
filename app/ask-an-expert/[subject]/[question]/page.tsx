import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { subjects, getSubject, getQAItem } from "../../data";

export const revalidate = 3600;

interface Props {
  params: Promise<{ subject: string; question: string }>;
}

export async function generateStaticParams() {
  return subjects.flatMap((s) =>
    s.items.map((item) => ({ subject: s.slug, question: item.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subject: subjectSlug, question: questionSlug } = await params;
  const item = getQAItem(subjectSlug, questionSlug);
  const subject = getSubject(subjectSlug);
  if (!item || !subject) return { title: "Ask an Expert" };
  return {
    title: `${item.question}`,
    description: `Expert answer: ${item.question} — Free academic Q&A from Tutors India's PhD-qualified specialists.`,
    
    alternates: { canonical: `https://www.tutorsindia.com/ask-an-expert/${subjectSlug}/${questionSlug}/` },
  };
}

export default async function QAPage({ params }: Props) {
  const { subject: subjectSlug, question: questionSlug } = await params;
  const subject = getSubject(subjectSlug);
  const item = getQAItem(subjectSlug, questionSlug);
  if (!subject || !item) notFound();

  const currentIndex = subject.items.findIndex((i) => i.slug === questionSlug);
  const prevItem = currentIndex > 0 ? subject.items[currentIndex - 1] : null;
  const nextItem = currentIndex < subject.items.length - 1 ? subject.items[currentIndex + 1] : null;

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Ask an Expert", url: "/ask-an-expert/" }, { name: subject.title, url: `/ask-an-expert/${subject.slug}/` }, { name: "Expert Answer" , url: `https://www.tutorsindia.com/ask-an-expert/${subjectSlug}/${questionSlug}/` }]} />
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "52px 20px 44px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <Link href="/ask-an-expert/" style={{ color: "#a0b8e0" }}>Ask an Expert</Link>{" / "}
            <Link href={`/ask-an-expert/${subject.slug}/`} style={{ color: "#a0b8e0" }}>{subject.title}</Link>{" / "}
            <span style={{ color: "#fff" }}>Expert Answer</span>
          </div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.12)", borderRadius: "20px", padding: "4px 14px", fontSize: "0.78rem", marginBottom: "14px" }}>
            <span>{subject.icon}</span>
            <span>{subject.title}</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", lineHeight: 1.4, marginBottom: "10px" }}>
            {item.question}
          </h1>
          <p style={{ color: "#e87722", fontSize: "0.85rem", fontWeight: 700 }}>✓ Free Expert Answer</p>
        </div>
      </section>

      {/* Answer content */}
      <article style={{ maxWidth: "960px", margin: "0 auto", padding: "44px 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr minmax(0,280px)", gap: "32px", alignItems: "start" }}>

          {/* Main answer */}
          <div>
            {/* Info box */}
            <div style={{ background: "#f5f7fb", border: "1px solid #dde2ef", borderRadius: "8px", padding: "14px 18px", marginBottom: "28px", display: "flex", gap: "24px", flexWrap: "wrap" }}>
              <div>
                <span style={{ fontSize: "0.75rem", color: "#888", display: "block" }}>Subject</span>
                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1a2a6c" }}>{subject.title}</span>
              </div>
              <div>
                <span style={{ fontSize: "0.75rem", color: "#888", display: "block" }}>Service</span>
                <span style={{ display: "inline-block", padding: "2px 10px", background: "#1a2a6c", color: "#fff", borderRadius: "4px", fontSize: "0.78rem", fontWeight: 600 }}>Free Q&amp;A</span>
              </div>
              <div>
                <span style={{ fontSize: "0.75rem", color: "#888", display: "block" }}>Response Time</span>
                <span style={{ display: "inline-block", padding: "2px 10px", background: "#059669", color: "#fff", borderRadius: "4px", fontSize: "0.78rem", fontWeight: 600 }}>24 Hours</span>
              </div>
            </div>

            {/* Question box */}
            <div style={{ background: "#fff7ed", border: "1px solid #fed7a0", borderRadius: "8px", padding: "16px 20px", marginBottom: "24px" }}>
              <p style={{ fontSize: "0.78rem", fontWeight: 700, color: "#b45309", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Question</p>
              <p style={{ fontFamily: "Merriweather,serif", fontSize: "0.97rem", color: "#374151", lineHeight: 1.6, margin: 0 }}>{item.question}</p>
            </div>

            {/* Expert answer */}
            <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "28px", boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px", paddingBottom: "16px", borderBottom: "1px solid #eee" }}>
                <div style={{ width: "36px", height: "36px", background: "#1a2a6c", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "1rem" }}>🎓</div>
                <div>
                  <p style={{ fontWeight: 700, color: "#1a2a6c", fontSize: "0.94rem", margin: 0 }}>Tutors India Expert</p>
                  <p style={{ color: "#888", fontSize: "0.75rem", margin: 0 }}>PhD-Qualified Specialist</p>
                </div>
              </div>
              <div
                className="qa-answer"
                dangerouslySetInnerHTML={{ __html: item.answer }}
                suppressHydrationWarning
              />
            </div>

            {/* Prev/Next navigation */}
            <div style={{ display: "flex", gap: "12px", marginTop: "28px", justifyContent: "space-between", flexWrap: "wrap" }}>
              {prevItem ? (
                <Link href={`/ask-an-expert/${subject.slug}/${prevItem.slug}/`} style={{ flex: "1 1 240px", padding: "14px 16px", background: "#fff", border: "1px solid #dde2ef", borderRadius: "8px", textDecoration: "none" }}>
                  <p style={{ fontSize: "0.75rem", color: "#888", margin: "0 0 4px" }}>← Previous</p>
                  <p style={{ fontSize: "0.85rem", color: "#1a2a6c", fontWeight: 600, margin: 0, lineHeight: 1.4 }}>{prevItem.question}</p>
                </Link>
              ) : <div style={{ flex: "1 1 240px" }} />}
              {nextItem && (
                <Link href={`/ask-an-expert/${subject.slug}/${nextItem.slug}/`} style={{ flex: "1 1 240px", padding: "14px 16px", background: "#fff", border: "1px solid #dde2ef", borderRadius: "8px", textDecoration: "none", textAlign: "right" }}>
                  <p style={{ fontSize: "0.75rem", color: "#888", margin: "0 0 4px" }}>Next →</p>
                  <p style={{ fontSize: "0.85rem", color: "#1a2a6c", fontWeight: 600, margin: 0, lineHeight: 1.4 }}>{nextItem.question}</p>
                </Link>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ background: "#fff7ed", border: "1px solid #fed7a0", borderRadius: "10px", padding: "20px" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "0.92rem", color: "#b45309", marginBottom: "10px" }}>Have a Question?</h3>
              <p style={{ fontSize: "0.82rem", color: "#555", lineHeight: 1.6, marginBottom: "14px" }}>Submit your academic question and receive a free expert answer within 24 hours.</p>
              <Link href="/ask-an-expert/ask-a-question/" style={{ display: "block", textAlign: "center", padding: "10px 16px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "0.94rem" }}>
                Ask a Question Free
              </Link>
            </div>

            <div style={{ background: "#f0f4ff", border: "1px solid #c7d4f5", borderRadius: "10px", padding: "20px" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "0.92rem", color: "#1a2a6c", marginBottom: "10px" }}>Need More Help?</h3>
              <p style={{ fontSize: "0.82rem", color: "#555", lineHeight: 1.6, marginBottom: "14px" }}>For full dissertation or essay support, our PhD experts provide comprehensive personalised assistance.</p>
              <Link href="/order-now/" style={{ display: "block", textAlign: "center", padding: "10px 16px", background: "#1a2a6c", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "0.94rem" }}>
                Order Full Service
              </Link>
            </div>

            <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "0.96rem", color: "#1a2a6c", marginBottom: "12px" }}>More {subject.title} Q&amp;A</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {subject.items.filter((i) => i.slug !== questionSlug).slice(0, 5).map((i) => (
                  <Link key={i.slug} href={`/ask-an-expert/${subject.slug}/${i.slug}/`} style={{ fontSize: "0.82rem", color: "#2563b0", lineHeight: 1.4 }}>
                    → {i.question}
                  </Link>
                ))}
              </div>
              <Link href={`/ask-an-expert/${subject.slug}/`} style={{ display: "block", marginTop: "12px", fontSize: "0.82rem", color: "#e87722", fontWeight: 700 }}>
                View All {subject.title} Q&amp;A →
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "48px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "10px" }}>Need Expert Academic Writing Help?</h2>
        <p style={{ color: "#c5d5f0", fontSize: "0.96rem", marginBottom: "20px" }}>Our PhD-qualified writers provide tailored support for every stage of your academic journey.</p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 30px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 30px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
