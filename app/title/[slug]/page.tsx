import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTIPageBySlug, getTIChildSlugs, getTIFeaturedImage, stripTIHtml } from "@/lib/api/tutorsindia";
import { cleanElementorHtml } from "@/lib/cleanElementor";

export const revalidate = 3600;

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const slugs = await getTIChildSlugs(15900);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = await getTIPageBySlug(slug);
  if (!page) return { title: "Dissertation Titles" };
  const desc = stripTIHtml(page.excerpt.rendered, 160);
  const title = stripTIHtml(page.title.rendered);
  return {
    title: `${title}`,
    description: desc,
    
    alternates: { canonical: `https://www.tutorsindia.com/title/${slug}/` },
  };
}

export default async function TitleDetailPage({ params }: Props) {
  const { slug } = await params;
  const page = await getTIPageBySlug(slug);
  if (!page) notFound();

  const image = getTIFeaturedImage(page);

  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "48px 20px 40px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <Link href="/title/" style={{ color: "#a0b8e0" }}>Dissertation Titles</Link>{" / "}
            <span style={{ color: "#fff" }} dangerouslySetInnerHTML={{ __html: page.title.rendered }} />
          </div>
          <h1
            style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.4rem,3vw,2rem)", lineHeight: 1.35, marginBottom: "12px" }}
            dangerouslySetInnerHTML={{ __html: page.title.rendered }}
          />
          <p style={{ color: "#a0b8e0", fontSize: "0.82rem" }}>
            📄 Dissertation Title Ideas · Free to use as inspiration
          </p>
        </div>
      </section>

      {/* Content */}
      <article style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 20px" }}>
        {image && (
          <div style={{ marginBottom: "32px", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}>
            <img src={image} alt={stripTIHtml(page.title.rendered)} style={{ width: "100%", height: "auto", display: "block", maxHeight: "400px", objectFit: "cover" }} />
          </div>
        )}
        <div className="wp-content" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: cleanElementorHtml(page.content.rendered) }} />

        {/* Nav */}
        <div style={{ marginTop: "36px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <Link href="/title/" style={{ fontSize: "0.94rem", color: "#2563b0", fontWeight: 600 }}>← All Dissertation Titles</Link>
          <div style={{ display: "flex", gap: "10px" }}>
            <Link href="/order-now/" style={{ padding: "9px 20px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "0.87rem" }}>Order Now</Link>
            <Link href="/contact-us/" style={{ padding: "9px 20px", border: "1.5px solid #1a2a6c", color: "#1a2a6c", borderRadius: "5px", fontWeight: 600, fontSize: "0.87rem" }}>Contact Us</Link>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "48px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: "10px" }}>Need Help Developing This Title?</h2>
        <p style={{ color: "#c5d5f0", fontSize: "0.93rem", marginBottom: "20px" }}>Our experts can turn any title into a full, well-researched dissertation.</p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 30px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 30px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
