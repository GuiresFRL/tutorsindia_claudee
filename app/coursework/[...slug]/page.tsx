import Link from "next/link";
import type { Metadata } from "next";
import { fetchProxiedPage } from "@/lib/api/proxyPage";
import { getTIPageBySlug, stripTIHtml } from "@/lib/api/tutorsindia";
import { cleanElementorHtml } from "@/lib/cleanElementor";

export const revalidate = 3600;

interface Props {
  params: Promise<{ slug: string[] }>;
}

function slugToTitle(slug: string): string {
  return slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const path = `/coursework/${slug.join("/")}/`;
  const lastSlug = slug[slug.length - 1];
  const wpPage = await getTIPageBySlug(lastSlug);
  const title = wpPage?.title?.rendered
    ? wpPage.title.rendered.replace(/<[^>]+>/g, "")
    : slugToTitle(lastSlug);
  const desc = wpPage?.excerpt?.rendered
    ? stripTIHtml(wpPage.excerpt.rendered, 160)
    : `${title} — Academic coursework guidance from Tutors India.`;
  return {
    title: `${title} | Tutors India`,
    description: desc,
    robots: { index: false, follow: false },
    alternates: { canonical: `https://tutorsindia.com${path}` },
  };
}

export default async function CourseworkSlugPage({ params }: Props) {
  const { slug } = await params;
  const path = `/coursework/${slug.join("/")}/`;
  const lastSlug = slug[slug.length - 1];

  // Try WP API first, clean Elementor wrappers
  const wpPage = await getTIPageBySlug(lastSlug);
  const rawWp = wpPage?.content?.rendered?.trim() ?? "";
  const wpContent = rawWp.length >= 50 ? cleanElementorHtml(rawWp) : "";

  // Proxy fallback
  const proxied = wpContent.length < 200 ? await fetchProxiedPage(path) : null;

  const title = wpPage?.title?.rendered
    ? wpPage.title.rendered.replace(/<[^>]+>/g, "")
    : proxied?.title || slugToTitle(lastSlug);

  const content = wpContent.length >= 200 ? wpContent : (proxied?.content ?? "");

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Coursework", href: "/coursework-writing/" },
    ...slug.map((s, i) => ({
      label: slugToTitle(s),
      href: `/coursework/${slug.slice(0, i + 1).join("/")}/`,
    })),
  ];

  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "52px 20px 44px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "12px", display: "flex", flexWrap: "wrap", gap: "4px" }}>
            {crumbs.map((c, i) => {
              const isLast = i === crumbs.length - 1;
              return (
                <span key={i} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  {isLast
                    ? <span style={{ color: "#fff" }}>{c.label}</span>
                    : <><Link href={c.href} style={{ color: "#a0b8e0" }}>{c.label}</Link><span style={{ color: "#a0b8e0" }}>/</span></>}
                </span>
              );
            })}
          </div>
          <h1
            style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.2rem,2.5vw,1.9rem)", lineHeight: 1.35, marginBottom: "12px" }}
            dangerouslySetInnerHTML={{ __html: wpPage?.title?.rendered || title }}
          />
        </div>
      </section>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 20px" }}>
        {content.trim().length > 100 ? (
          <div className="wp-content" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: content }} />
        ) : (
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "32px" }}>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", color: "#1a2a6c", marginBottom: "16px" }}>{title}</h2>
            <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "16px" }}>
              Expert academic guidance from Tutors India&apos;s team of PhD-qualified writers. Our coursework support covers essays, assignments, literature reviews, and more.
            </p>
            <div style={{ display: "flex", gap: "12px", marginTop: "20px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "10px 24px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
              <Link href="/our-services/coursework-writing/" style={{ padding: "10px 24px", border: "1.5px solid #1a2a6c", color: "#1a2a6c", borderRadius: "5px", fontWeight: 600 }}>← Coursework</Link>
            </div>
          </div>
        )}
      </div>

      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "44px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "10px" }}>Need Expert Coursework Help?</h2>
        <p style={{ color: "#c5d5f0", fontSize: "0.96rem", marginBottom: "18px" }}>Our PhD-qualified writers provide tailored support for every type of academic coursework.</p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "11px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "11px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
