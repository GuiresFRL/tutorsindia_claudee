import Link from "next/link";
import type { Metadata } from "next";
import CTASidebar from "@/components/ui/CTASidebar";

interface Props {
  params: Promise<{ slug: string[] }>;
}

function slugToTitle(slug: string): string {
  return slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title = slugToTitle(slug[slug.length - 1]);
  return {
    title: `${title} — Ask an Expert`,
    description: `Expert academic answer on: ${title}. Get guidance from Tutors India's PhD-qualified team.`,
  };
}

export default async function AskExpertSlugPage({ params }: Props) {
  const { slug } = await params;
  const title = slugToTitle(slug[slug.length - 1]);
  const breadcrumbPath = ["", "ask-an-expert", ...slug];

  return (
    <>
      <section style={{ background: "linear-gradient(135deg,var(--navy) 0%,#2563b0 100%)", color: "#fff", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.96rem", color: "#a0b8e0", marginBottom: "12px" }}>
            {breadcrumbPath.map((segment, i) => {
              const href = i === 0 ? "/" : "/ask-an-expert/";
              const label = i === 0 ? "Home" : slugToTitle(segment);
              const isLast = i === breadcrumbPath.length - 1;
              // Only Home and the Ask-an-Expert hub are real pages — deeper
              // segments are subject/question slugs with no page of their own.
              return (
                <span key={i}>
                  {i <= 1 ? <Link href={href} style={{ color: "#a0b8e0" }}>{label}</Link> : label}
                  {!isLast && " / "}
                </span>
              );
            })}
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "2rem", marginBottom: "12px" }}>{title}</h1>
          <p style={{ color: "#c5d5f0" }}>Expert Academic Answer</p>
        </div>
      </section>

      <section style={{ maxWidth: "1200px", margin: "60px auto", padding: "0 20px", display: "grid", gridTemplateColumns: "2fr 1fr", gap: "40px", alignItems: "start" }} className="expert-layout">
        <article>
          <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "12px", padding: "32px" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--navy)", marginBottom: "20px" }}>{title}</h2>
            <p style={{ color: "var(--text-mid)", lineHeight: 1.8, marginBottom: "16px" }}>
              This question is answered by Tutors India&apos;s team of PhD-qualified academic specialists. We provide expert guidance on all aspects of academic writing, research methodology, and subject-specific questions.
            </p>
            <p style={{ color: "var(--text-mid)", lineHeight: 1.8 }}>
              For personalised support with your specific academic requirements, contact our expert team. We respond within 30 minutes and offer free consultations.
            </p>
          </div>
        </article>
        <CTASidebar />
      </section>

      <style>{`@media(max-width:768px){.expert-layout{grid-template-columns:1fr!important;}}`}</style>
    </>
  );
}
