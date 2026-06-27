import Link from "next/link";
import type { Metadata } from "next";
import CTASidebar from "@/components/ui/CTASidebar";

interface Props {
  params: Promise<{ slug: string }>;
}

function slugToTitle(slug: string): string {
  return slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title = slugToTitle(slug);
  return {
    title: `${title} — Q&A Forum | Tutors India`,
    description: `Expert answer to: ${title}. Get academic guidance from Tutors India's team of PhD-qualified specialists.`,
  };
}

export default async function QASlugPage({ params }: Props) {
  const { slug } = await params;
  const title = slugToTitle(slug);

  return (
    <>
      <section style={{ background: "linear-gradient(135deg,var(--navy) 0%,#2563b0 100%)", color: "#fff", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.9rem", color: "#a0b8e0", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link> / <Link href="/qa-forum/" style={{ color: "#a0b8e0" }}>Q&A Forum</Link> / {title}
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "2rem", marginBottom: "8px" }}>{title}</h1>
        </div>
      </section>

      <section style={{ maxWidth: "1200px", margin: "60px auto", padding: "0 20px", display: "grid", gridTemplateColumns: "2fr 1fr", gap: "40px", alignItems: "start" }} className="qa-detail-layout">
        <article>
          <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "12px", padding: "32px" }}>
            <div style={{ display: "flex", gap: "12px", alignItems: "flex-start", marginBottom: "24px" }}>
              <div style={{ background: "var(--light-blue)", color: "var(--blue)", borderRadius: "50%", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, flexShrink: 0 }}>Q</div>
              <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--navy)" }}>{title}</h2>
            </div>
            <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <div style={{ background: "var(--orange)", color: "#fff", borderRadius: "50%", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, flexShrink: 0 }}>A</div>
              <div style={{ color: "var(--text-mid)", lineHeight: 1.8 }}>
                <p style={{ marginBottom: "14px" }}>
                  This is a great question that many academic students face. At Tutors India, our team of PhD-qualified specialists regularly assist students with this type of query as part of our comprehensive academic support services.
                </p>
                <p style={{ marginBottom: "14px" }}>
                  The key to addressing this successfully is to first understand the fundamental principles and then apply them carefully to your specific research context. Every academic situation is unique, which is why personalised guidance is so important.
                </p>
                <p>
                  If you need personalised support for your specific requirements, our expert team is available to provide tailored guidance. Contact us for a free consultation.
                </p>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "20px", background: "var(--gray)", borderRadius: "10px", padding: "20px" }}>
            <p style={{ fontSize: "0.88rem", color: "var(--text-mid)" }}>
              <strong>Answered by:</strong> Tutors India Academic Expert Team — PhD-qualified specialists with experience in UK/US higher education systems.
            </p>
          </div>
        </article>
        <CTASidebar />
      </section>

      <style>{`@media(max-width:768px){.qa-detail-layout{grid-template-columns:1fr!important;}}`}</style>
    </>
  );
}
