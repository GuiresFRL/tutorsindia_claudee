import Link from "next/link";
import type { Metadata } from "next";
import CTASidebar from "@/components/ui/CTASidebar";

interface Props {
  params: Promise<{ slug: string[] }>;
}

function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title = slugToTitle(slug[slug.length - 1]);
  return {
    title: `${title} | Tutors India`,
    description: `${title} — Academic writing support from Tutors India. Expert Masters and PhD dissertation services since 2001.`,
  };
}

export default async function CatchAllPage({ params }: Props) {
  const { slug } = await params;
  const title = slugToTitle(slug[slug.length - 1]);
  const breadcrumbPath = ["", ...slug];

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
          <p style={{ color: "#c5d5f0" }}>Tutors India — Academic Writing & Research Services</p>
        </div>
      </section>

      <section style={{ maxWidth: "1200px", margin: "60px auto", padding: "0 20px", display: "grid", gridTemplateColumns: "2fr 1fr", gap: "40px", alignItems: "start" }} className="catchall-layout">
        <article>
          <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "12px", padding: "32px" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--navy)", marginBottom: "16px" }}>{title}</h2>
            <p style={{ color: "var(--text-mid)", lineHeight: 1.8, marginBottom: "16px" }}>
              Welcome to Tutors India&apos;s resource section on <strong>{title}</strong>. Our team of PhD-qualified academic experts has extensive knowledge and experience in this area, and we provide comprehensive support to Masters and PhD students.
            </p>
            <p style={{ color: "var(--text-mid)", lineHeight: 1.8, marginBottom: "16px" }}>
              At Tutors India, we have been providing expert academic writing, editing, and research support services since 2001. We serve over 200,000 students worldwide, with offices in Sheffield (UK) and Dallas (US).
            </p>
            <p style={{ color: "var(--text-mid)", lineHeight: 1.8, marginBottom: "24px" }}>
              Whether you need help with your dissertation, research proposal, statistical analysis, or any other academic task, our team is here to support you every step of the way.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {[
                { icon: "✓", text: "PhD-qualified expert writers" },
                { icon: "✓", text: "On-time delivery guaranteed" },
                { icon: "✓", text: "100% plagiarism-free work" },
                { icon: "✓", text: "Unlimited free revisions" },
              ].map((item) => (
                <div key={item.text} style={{ display: "flex", gap: "8px", padding: "10px", background: "var(--gray)", borderRadius: "6px", fontSize: "0.88rem", color: "var(--text-mid)" }}>
                  <span style={{ color: "var(--orange)", fontWeight: 700 }}>{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: "24px", background: "var(--orange)", color: "#fff", borderRadius: "12px", padding: "24px", textAlign: "center" }}>
            <h3 style={{ fontWeight: 700, marginBottom: "10px" }}>Need Help with {title}?</h3>
            <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.85)", marginBottom: "16px" }}>Contact our expert team for a free consultation and quote.</p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "10px 24px", background: "#fff", color: "var(--orange)", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
              <Link href="/contact-us/" style={{ padding: "10px 24px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
            </div>
          </div>
        </article>

        <CTASidebar />
      </section>

      <style>{`@media(max-width:768px){.catchall-layout{grid-template-columns:1fr!important;}}`}</style>
    </>
  );
}
