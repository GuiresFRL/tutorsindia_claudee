import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { fetchProxiedPage } from "@/lib/api/proxyPage";

export const revalidate = 3600;

interface Props {
  params: Promise<{ slug: string[] }>;
}

function slugToTitle(slug: string): string {
  return slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const path = `/help-guide/${slug.join("/")}/`;
  const proxied = await fetchProxiedPage(path);
  const title = proxied?.title || slugToTitle(slug[slug.length - 1]);
  return {
    title: `${title}`,
    description: `${title} — Academic writing guidance from Tutors India's PhD-qualified experts.`,
    alternates: { canonical: `https://www.tutorsindia.com${path.replace(/\/$/, "")}` },
  };
}

export default async function HelpGuideSlugPage({ params }: Props) {
  const { slug } = await params;
  const path = `/help-guide/${slug.join("/")}/`;
  const proxied = await fetchProxiedPage(path);

  if (!proxied) notFound();

  const title = proxied.title || slugToTitle(slug[slug.length - 1]);
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Help Guide", href: "/help-guide/" },
    ...slug.map((segment, i) => ({
      label: slugToTitle(segment),
      href: `/help-guide/${slug.slice(0, i + 1).join("/")}/`,
    })),
  ];

  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "52px 20px 44px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "12px", display: "flex", flexWrap: "wrap", gap: "4px" }}>
            {crumbs.map((crumb, i) => {
              const isLast = i === crumbs.length - 1;
              // Only Home and the Help Guide hub are real pages.
              return (
                <span key={crumb.href} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  {i <= 1 ? (
                    <><Link href={crumb.href} style={{ color: "#a0b8e0" }}>{crumb.label}</Link><span style={{ color: "#a0b8e0" }}>/</span></>
                  ) : (
                    <><span style={{ color: isLast ? "#fff" : "#a0b8e0" }}>{crumb.label}</span>{!isLast && <span style={{ color: "#a0b8e0" }}>/</span>}</>
                  )}
                </span>
              );
            })}
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.2rem,2.5vw,1.9rem)", lineHeight: 1.35, marginBottom: "12px" }}>
            {title}
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "0.96rem" }}>Help Guide — Academic Writing Guidance</p>
        </div>
      </section>

      {/* Proxied content */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 20px" }}>
        {proxied.content && proxied.content.trim().length > 100 ? (
          <div
            className="library-content"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{ __html: proxied.content }}
          />
        ) : (
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "32px" }}>
            <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "16px" }}>
              Guidance on <strong>{title}</strong> is available on the live Tutors India website.
            </p>
            <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
              <Link href="/order-now/" style={{ padding: "10px 24px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
              <Link href="/help-guide/" style={{ padding: "10px 24px", border: "1.5px solid #1a2a6c", color: "#1a2a6c", borderRadius: "5px", fontWeight: 600 }}>← Help Guide</Link>
            </div>
          </div>
        )}
      </div>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "44px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "10px" }}>Need Expert Academic Writing Help?</h2>
        <p style={{ color: "#c5d5f0", fontSize: "0.96rem", marginBottom: "18px" }}>Our PhD-qualified writers provide tailored support for every stage of your academic journey.</p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "11px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "11px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
