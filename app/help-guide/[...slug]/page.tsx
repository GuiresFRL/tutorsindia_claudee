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
    title: `${title} — Help Guide | Tutors India`,
    description: `Academic help guide on ${title}. Expert advice and guidance for Masters and PhD students from Tutors India.`,
  };
}

export default async function HelpGuideSlugPage({ params }: Props) {
  const { slug } = await params;
  const title = slugToTitle(slug[slug.length - 1]);
  const breadcrumbPath = ["", "help-guide", ...slug];

  return (
    <>
      <section style={{ background: "linear-gradient(135deg,var(--navy) 0%,#2563b0 100%)", color: "#fff", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.9rem", color: "#a0b8e0", marginBottom: "12px" }}>
            {breadcrumbPath.map((segment, i) => {
              const href = "/" + breadcrumbPath.slice(1, i + 1).join("/") + "/";
              const label = i === 0 ? "Home" : slugToTitle(segment);
              const isLast = i === breadcrumbPath.length - 1;
              return (
                <span key={i}>
                  {isLast ? label : <Link href={href} style={{ color: "#a0b8e0" }}>{label}</Link>}
                  {!isLast && " / "}
                </span>
              );
            })}
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "2rem", marginBottom: "12px" }}>{title}</h1>
          <p style={{ color: "#c5d5f0" }}>Help Guide for Academic Writers</p>
        </div>
      </section>

      <section style={{ maxWidth: "1200px", margin: "60px auto", padding: "0 20px", display: "grid", gridTemplateColumns: "2fr 1fr", gap: "40px", alignItems: "start" }} className="guide-layout">
        <article>
          <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "12px", padding: "32px" }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--navy)", marginBottom: "16px" }}>{title}</h2>
            <p style={{ color: "var(--text-mid)", lineHeight: 1.8, marginBottom: "16px" }}>
              This guide provides comprehensive information and guidance on {title.toLowerCase()}. Our academic experts at Tutors India have prepared this guide to help Masters and PhD students navigate the complexities of academic writing and research.
            </p>
            <p style={{ color: "var(--text-mid)", lineHeight: 1.8, marginBottom: "16px" }}>
              Whether you are just starting out or looking for advanced guidance, this resource will provide you with the knowledge and tools needed to succeed in your academic journey.
            </p>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--navy)", margin: "24px 0 12px" }}>Key Points to Remember</h3>
            <ul style={{ paddingLeft: "20px", color: "var(--text-mid)", lineHeight: 1.9 }}>
              <li>Always follow your institution&apos;s specific guidelines and requirements</li>
              <li>Ensure all sources are properly cited and referenced</li>
              <li>Maintain academic integrity throughout your work</li>
              <li>Seek guidance from your supervisor when in doubt</li>
              <li>Allow adequate time for revisions and proofreading</li>
            </ul>
            <div style={{ background: "var(--light-blue)", border: "1px solid var(--border)", borderRadius: "8px", padding: "20px", marginTop: "24px" }}>
              <p style={{ fontWeight: 600, color: "var(--navy)", marginBottom: "8px" }}>Need personalised help?</p>
              <p style={{ fontSize: "0.9rem", color: "var(--text-mid)", marginBottom: "12px" }}>
                Our team of PhD-qualified experts can provide personalised guidance and support for your specific academic requirements.
              </p>
              <Link href="/contact-us/" style={{ padding: "8px 20px", background: "var(--orange)", color: "#fff", borderRadius: "5px", fontSize: "0.88rem", fontWeight: 600 }}>Get Expert Help</Link>
            </div>
          </div>
        </article>
        <CTASidebar />
      </section>

      <style>{`@media(max-width:768px){.guide-layout{grid-template-columns:1fr!important;}}`}</style>
    </>
  );
}
