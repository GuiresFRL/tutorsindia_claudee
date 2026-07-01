import Link from "next/link";
import type { Metadata } from "next";
import { fetchProxiedPage } from "@/lib/api/proxyPage";

export const revalidate = 3600;

interface Props {
  params: Promise<{ slug: string }>;
}

function slugToTitle(slug: string): string {
  return slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const proxied = await fetchProxiedPage(`/our-sample-works/${slug}/`);
  const title = proxied?.title || slugToTitle(slug);
  return {
    title: `${title} — Sample Works | Tutors India`,
    description: `View our ${title.toLowerCase()} sample work. Tutors India provides high-quality academic writing examples for reference and guidance.`,
    robots: { index: false, follow: false },
    alternates: { canonical: `https://tutorsindia.com/our-sample-works/${slug}/` },
  };
}

export default async function SampleWorkPage({ params }: Props) {
  const { slug } = await params;
  const proxied = await fetchProxiedPage(`/our-sample-works/${slug}/`);
  const title = proxied?.title || slugToTitle(slug);

  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "52px 20px 44px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "12px", display: "flex", flexWrap: "wrap", gap: "4px" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>
              <span style={{ color: "#a0b8e0" }}>/</span>
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <Link href="/our-sample-works/" style={{ color: "#a0b8e0" }}>Sample Works</Link>
              <span style={{ color: "#a0b8e0" }}>/</span>
            </span>
            <span style={{ color: "#fff" }}>{title}</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.2rem,2.5vw,1.9rem)", lineHeight: 1.35, marginBottom: "12px" }}>
            {title}
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "0.9rem" }}>Academic Sample Work — For Reference Purposes</p>
        </div>
      </section>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ background: "#fffbe6", borderLeft: "4px solid #e87722", padding: "12px 16px", borderRadius: "0 6px 6px 0", marginBottom: "28px", fontSize: "0.85rem" }}>
          <strong style={{ color: "#c05000" }}>Disclaimer:</strong> This sample work is provided for educational reference purposes only and must not be submitted as your own work.
        </div>

        {proxied?.content && proxied.content.trim().length > 100 ? (
          <div className="library-content" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: proxied.content }} />
        ) : (
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "32px" }}>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", color: "#1a2a6c", marginBottom: "16px" }}>{title}</h2>
            <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "16px" }}>
              This sample demonstrates the quality, structure, and academic standard that Tutors India delivers in its writing services.
              Our expert writers produce work that meets the requirements of leading UK, US, and Australian universities.
            </p>
            <p style={{ color: "#555", lineHeight: 1.8 }}>
              If you need original academic work tailored to your specific requirements, our team of PhD-qualified writers is ready to help.
            </p>
            <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
              <Link href="/order-now/" style={{ padding: "10px 24px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
              <Link href="/our-sample-works/" style={{ padding: "10px 24px", border: "1.5px solid #1a2a6c", color: "#1a2a6c", borderRadius: "5px", fontWeight: 600 }}>← Sample Works</Link>
            </div>
          </div>
        )}
      </div>

      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "44px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "10px" }}>Need Expert Academic Help?</h2>
        <p style={{ color: "#c5d5f0", fontSize: "0.9rem", marginBottom: "18px" }}>Our PhD-qualified writers provide tailored support for every stage of your academic journey.</p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "11px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "11px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
