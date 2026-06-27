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
    title: `${title} — Sample Works | Tutors India`,
    description: `View our ${title.toLowerCase()} sample work. Tutors India provides high-quality academic writing examples for reference and guidance.`,
  };
}

export default async function SampleWorkPage({ params }: Props) {
  const { slug } = await params;
  const title = slugToTitle(slug);

  return (
    <>
      <section style={{ background: "linear-gradient(135deg,var(--navy) 0%,#2563b0 100%)", color: "#fff", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.9rem", color: "#a0b8e0", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link> / <Link href="/our-sample-works/" style={{ color: "#a0b8e0" }}>Sample Works</Link> / {title}
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "2rem", marginBottom: "12px" }}>{title}</h1>
          <p style={{ color: "#c5d5f0" }}>Academic Sample Work — For Reference Purposes</p>
        </div>
      </section>

      <section style={{ maxWidth: "1200px", margin: "60px auto", padding: "0 20px", display: "grid", gridTemplateColumns: "2fr 1fr", gap: "40px", alignItems: "start" }} className="sample-layout">
        <div>
          <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "12px", padding: "32px" }}>
            <div style={{ background: "#fffbe6", borderLeft: "4px solid var(--orange)", padding: "12px 16px", borderRadius: "0 6px 6px 0", marginBottom: "24px", fontSize: "0.85rem" }}>
              <strong style={{ color: "var(--orange-dark)" }}>Disclaimer:</strong> This sample work is provided for educational reference purposes only and must not be submitted as your own work.
            </div>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--navy)", marginBottom: "16px" }}>{title}</h2>
            <p style={{ color: "var(--text-mid)", lineHeight: 1.8, marginBottom: "16px" }}>
              This sample demonstrates the quality, structure, and academic standard that Tutors India delivers in its writing services. Our expert writers produce work that meets the requirements of leading UK, US, and Australian universities.
            </p>
            <p style={{ color: "var(--text-mid)", lineHeight: 1.8 }}>
              If you need original academic work tailored to your specific requirements, our team of PhD-qualified writers is ready to help. Contact us for a free consultation and quote.
            </p>
          </div>
        </div>
        <CTASidebar />
      </section>

      <style>{`@media(max-width:768px){.sample-layout{grid-template-columns:1fr!important;}}`}</style>
    </>
  );
}
