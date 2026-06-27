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
    title: `${title} — Library | Tutors India`,
    description: `Access ${title} from the Tutors India academic library. Sample dissertations, essays, proposals, and more.`,
  };
}

export default async function LibrarySlugPage({ params }: Props) {
  const { slug } = await params;
  const title = slugToTitle(slug[slug.length - 1]);
  const breadcrumbPath = ["", "library", ...slug];

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
          <p style={{ color: "#c5d5f0" }}>Tutors India Academic Library</p>
        </div>
      </section>

      <section style={{ maxWidth: "1200px", margin: "60px auto", padding: "0 20px", display: "grid", gridTemplateColumns: "2fr 1fr", gap: "40px", alignItems: "start" }} className="lib-layout">
        <div>
          <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "12px", padding: "32px" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--navy)", marginBottom: "16px" }}>{title}</h2>
            <p style={{ color: "var(--text-mid)", lineHeight: 1.8, marginBottom: "16px" }}>
              This section of the Tutors India library contains sample academic work, guides, and resources to help you understand what high-quality academic writing looks like. Our library samples are provided for educational and reference purposes.
            </p>
            <p style={{ color: "var(--text-mid)", lineHeight: 1.8, marginBottom: "24px" }}>
              These resources are intended to help you understand the structure, style, and standard expected in academic work at the Masters and PhD level. Our team of expert writers can help you create original work tailored to your specific requirements.
            </p>
            <div style={{ background: "#fffbe6", borderLeft: "4px solid var(--orange)", padding: "14px 18px", borderRadius: "0 6px 6px 0", fontSize: "0.88rem", color: "#555" }}>
              <strong style={{ color: "var(--orange-dark)" }}>Note:</strong> All content in this library is provided for educational reference only. For original academic work tailored to your requirements, please <Link href="/contact-us/" style={{ color: "var(--blue)", fontWeight: 600 }}>contact us</Link>.
            </div>
          </div>
        </div>
        <CTASidebar />
      </section>

      <style>{`@media(max-width:768px){.lib-layout{grid-template-columns:1fr!important;}}`}</style>
    </>
  );
}
