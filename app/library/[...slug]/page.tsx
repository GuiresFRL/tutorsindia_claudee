import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { readFileSync } from "fs";
import { join } from "path";
import { fetchProxiedLibraryPage } from "@/lib/api/proxyPage";

export const revalidate = 3600;

interface Props {
  params: Promise<{ slug: string[] }>;
}

function slugToTitle(slug: string): string {
  return slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

// Pre-render every known /library/* URL at build time so real traffic hits a
// static page instead of a cold proxy-fetch-and-scrape of tutorsindia.net —
// that live round trip (network fetch + HTML parsing) was the cause of slow
// mobile loads. Any URL not in this list still works — it's rendered on
// first request and cached for `revalidate` seconds after that.
export async function generateStaticParams() {
  try {
    const xml = readFileSync(join(process.cwd(), "lib/data/original-sitemap.xml"), "utf-8");
    const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
    return locs
      .filter((u) => u.includes("/library/"))
      .map((u) => new URL(u).pathname.replace(/^\/library\//, "").replace(/\/$/, ""))
      .filter(Boolean)
      .map((path) => ({ slug: path.split("/") }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const path = `/library/${slug.join("/")}/`;
  const proxied = await fetchProxiedLibraryPage(path);
  const title = proxied?.title || slugToTitle(slug[slug.length - 1]);
  return {
    title: `${title}`,
    description: `${title} — Academic writing sample from Tutors India's library.`,
    alternates: { canonical: `https://www.tutorsindia.com${path.endsWith("/") ? path : path + "/"}` },
  };
}

export default async function LibrarySlugPage({ params }: Props) {
  const { slug } = await params;
  const path = `/library/${slug.join("/")}/`;
  const proxied = await fetchProxiedLibraryPage(path);

  if (!proxied) notFound();

  const title = proxied.title || slugToTitle(slug[slug.length - 1]);

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Library", href: "/library/" },
    ...slug.map((segment, i) => ({
      label: slugToTitle(segment),
      href: `/library/${slug.slice(0, i + 1).join("/")}/`,
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
              // Only Home and the Library hub are real pages.
              return (
                <span key={crumb.href} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  {i <= 1 ? (
                    <>
                      <Link href={crumb.href} style={{ color: "#a0b8e0" }}>{crumb.label}</Link>
                      <span style={{ color: "#a0b8e0" }}>/</span>
                    </>
                  ) : (
                    <>
                      <span style={{ color: isLast ? "#fff" : "#a0b8e0" }}>{crumb.label}</span>
                      {!isLast && <span style={{ color: "#a0b8e0" }}>/</span>}
                    </>
                  )}
                </span>
              );
            })}
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.2rem,2.5vw,1.9rem)", lineHeight: 1.35, marginBottom: "12px" }}>
            {title}
          </h1>
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
              Content for <strong>{title}</strong> is available on the live Tutors India website. Our PhD-qualified experts can provide similar academic support.
            </p>
            <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
              <Link href="/order-now/" style={{ padding: "10px 24px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
              <Link href="/library/" style={{ padding: "10px 24px", border: "1.5px solid #1a2a6c", color: "#1a2a6c", borderRadius: "5px", fontWeight: 600 }}>← Library</Link>
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
