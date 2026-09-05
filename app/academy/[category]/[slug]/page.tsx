import Link from "next/link";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import {
  getPayloadPostBySlug,
  getAllPayloadSlugs,
  getPayloadCategorySlug,
  getRecentPayloadPosts,
  getPayloadImageUrl,
  getPayloadImageAlt,
  getPayloadAuthor,
  getPayloadCategoryNames,
  excerptFromLexical,
  renderLexicalToHtml,
  formatPayloadDate,
} from "@/lib/api/payload";
import PostSidebar, { type SidebarRecentPost } from "@/components/blog/PostSidebar";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

// ISR — a fresh article regenerates within a minute of publishing, but
// repeat requests in between are served from cache instead of re-fetching
// the Payload API on every hit.
export const revalidate = 60;

export async function generateStaticParams() {
  return getAllPayloadSlugs("academy");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPayloadPostBySlug("academy", slug);
  if (!post) return { title: "Guide Not Found — Academy" };

  const image = getPayloadImageUrl(post.heroImage);
  const title = post.seo?.metaTitle || post.title;
  const description = post.seo?.metaDescription || excerptFromLexical(post.content, 160);
  const canonicalCategory = getPayloadCategorySlug(post);

  return {
    title,
    description,
    keywords: post.seo?.metaKeywords || undefined,
    alternates: { canonical: `https://www.tutorsindia.com/academy/${canonicalCategory}/${slug}/` },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.publishing?.publishedAt,
      modifiedTime: post.updatedAt,
      url: `https://tutorsindia.com/academy/${canonicalCategory}/${slug}/`,
      images: image ? [{ url: image, alt: getPayloadImageAlt(post) }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : [],
    },
  };
}

export default async function AcademyPostPage({ params }: Props) {
  const { category, slug } = await params;

  const [post, recentPosts] = await Promise.all([
    getPayloadPostBySlug("academy", slug),
    getRecentPayloadPosts("academy", 6),
  ]);

  if (!post) notFound();

  // Keep exactly one canonical URL per post — if the category segment in
  // the request doesn't match this post's actual (first) category, send
  // crawlers/users to the correct nested URL instead of serving duplicate
  // content under both.
  const correctCategory = getPayloadCategorySlug(post);
  if (category !== correctCategory) {
    redirect(`/academy/${correctCategory}/${slug}/`);
  }

  const image    = getPayloadImageUrl(post.heroImage);
  const alt      = getPayloadImageAlt(post);
  const author   = getPayloadAuthor(post);
  const cats     = getPayloadCategoryNames(post);
  const date     = formatPayloadDate(post.publishing?.publishedAt || post.createdAt);
  const modified = formatPayloadDate(post.updatedAt);
  const contentHtml = renderLexicalToHtml(post.content, post.title);

  const related = recentPosts.filter((p) => p.slug !== slug).slice(0, 3);
  const sidebarPosts: SidebarRecentPost[] = recentPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 5)
    .map((p) => ({
      id: p.id,
      title: p.title,
      href: `/academy/${getPayloadCategorySlug(p)}/${p.slug}/`,
      image: getPayloadImageUrl(p.heroImage),
      imageAlt: getPayloadImageAlt(p),
      date: formatPayloadDate(p.publishing?.publishedAt || p.createdAt),
    }));

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Academy", url: "/academy/" }, { name: post.title , url: `https://www.tutorsindia.com/academy/${correctCategory}/${slug}/` }]} />
      {/* ── HERO ── */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "48px 20px 40px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          {/* Breadcrumb */}
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <Link href="/academy/" style={{ color: "#a0b8e0" }}>Academy</Link>{" / "}
            <span style={{ color: "#fff" }}>{post.title}</span>
          </div>

          {/* Categories */}
          {cats.length > 0 && (
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "12px" }}>
              {cats.map((cat) => (
                <span key={cat} style={{ fontSize: "0.74rem", background: "rgba(255,255,255,0.15)", color: "#fff", padding: "3px 12px", borderRadius: "12px", fontWeight: 600 }}>
                  🎓 {cat}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.4rem,3.5vw,2.1rem)", lineHeight: 1.35, marginBottom: "16px" }}>
            {post.title}
          </h1>

          {/* Meta */}
          <div style={{ display: "flex", gap: "18px", flexWrap: "wrap", fontSize: "0.83rem", color: "#a0b8e0" }}>
            <span>📅 {date}</span>
            {post.updatedAt !== post.createdAt && <span>🔄 Updated: {modified}</span>}
            <span>✍️ {author}</span>
          </div>
        </div>
      </section>

      {/* ── ARTICLE + SIDEBAR ── */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px", display: "grid", gridTemplateColumns: "1fr 340px", gap: "40px", alignItems: "start" }} className="post-layout">
      <article style={{ minWidth: 0 }}>

        {/* Featured image */}
        {image && (
          <div style={{ marginBottom: "32px", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}>
            <Image
              src={image}
              alt={alt}
              width={post.heroImage?.width ?? 1200}
              height={post.heroImage?.height ?? 630}
              sizes="(max-width: 900px) 100vw, 900px"
              priority
              style={{ width: "100%", height: "auto", display: "block", maxHeight: "500px", objectFit: "cover" }}
            />
          </div>
        )}

        {/* Article content — rendered from Payload's Lexical rich text */}
        <div className="wp-content" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: contentHtml }} />

        {/* Author card */}
        <div style={{ marginTop: "44px", padding: "22px", background: "#f5f6fa", border: "1px solid #dde2ef", borderRadius: "12px", display: "flex", gap: "14px", alignItems: "center" }}>
          <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#1a2a6c", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "1.1rem", flexShrink: 0 }}>
            {author.charAt(0)}
          </div>
          <div>
            <div style={{ fontWeight: 700, color: "#1a2a6c", fontSize: "0.92rem" }}>{author}</div>
            <div style={{ fontSize: "0.78rem", color: "#888", marginTop: "2px" }}>Published: {date}</div>
            {cats.length > 0 && (
              <div style={{ display: "flex", gap: "6px", marginTop: "6px", flexWrap: "wrap" }}>
                {cats.map((cat) => (
                  <span key={cat} style={{ fontSize: "0.72rem", background: "#e8f0fb", color: "#2563b0", padding: "2px 10px", borderRadius: "10px", fontWeight: 600 }}>{cat}</span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Navigation row */}
        <div style={{ marginTop: "28px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <Link href="/academy/" style={{ fontSize: "0.94rem", color: "#2563b0", fontWeight: 600 }}>
            ← Back to Academy
          </Link>
          <div style={{ display: "flex", gap: "10px" }}>
            <Link href="/order-now/" style={{ padding: "9px 20px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "0.87rem" }}>Order Now</Link>
            <Link href="/contact-us/" style={{ padding: "9px 20px", border: "1.5px solid #1a2a6c", color: "#1a2a6c", borderRadius: "5px", fontWeight: 600, fontSize: "0.87rem" }}>Contact Us</Link>
          </div>
        </div>
      </article>

      <PostSidebar recentPosts={sidebarPosts} recentHeading="Recent Guides" />
      </div>

      {/* ── RELATED GUIDES — FULL WIDTH ── */}
      {related.length > 0 && (
        <section style={{ background: "#f5f6fa", padding: "48px 20px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "24px", textAlign: "center" }}>
              More Academy Resources
            </h2>
            <div className="related-grid">
              {related.map((rp) => {
                const rImage = getPayloadImageUrl(rp.heroImage);
                const rCats  = getPayloadCategoryNames(rp);
                const rCategorySlug = getPayloadCategorySlug(rp);
                return (
                  <Link key={rp.id} href={`/academy/${rCategorySlug}/${rp.slug}/`} style={{ display: "block", background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                    <div style={{ background: "#e8f0fb", height: "155px", overflow: "hidden", position: "relative" }}>
                      {rImage ? (
                        <Image src={rImage} alt={getPayloadImageAlt(rp)} fill sizes="(max-width: 768px) 100vw, 380px" style={{ objectFit: "cover" }} />
                      ) : (
                        <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2.5rem" }}>🎓</div>
                      )}
                    </div>
                    <div style={{ padding: "14px 16px" }}>
                      {rCats[0] && (
                        <span style={{ fontSize: "0.7rem", background: "#e8f0fb", color: "#2563b0", padding: "2px 8px", borderRadius: "8px", fontWeight: 600, display: "inline-block", marginBottom: "6px" }}>{rCats[0]}</span>
                      )}
                      <div style={{ fontSize: "0.76rem", color: "#888", marginBottom: "5px" }}>{formatPayloadDate(rp.publishing?.publishedAt || rp.createdAt)}</div>
                      <div style={{ fontSize: "0.96rem", fontWeight: 700, color: "#1a2a6c", lineHeight: 1.4 }}>{rp.title}</div>
                      <div style={{ fontSize: "0.82rem", color: "#e87722", fontWeight: 600, marginTop: "8px" }}>Read Guide →</div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA BANNER ── */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "48px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: "10px" }}>
          Need Expert Academic Support?
        </h2>
        <p style={{ color: "#c5d5f0", fontSize: "0.93rem", marginBottom: "20px" }}>
          Join 20000+ scholars who trusted Tutors India. Dissertations, assignments, statistical analysis &amp; editing.
        </p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 30px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 30px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>

      {/* Content styles — identical to blog post */}
      <style>{`
        @media (max-width: 768px) { .related-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 480px) { .related-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 900px) { .post-layout { grid-template-columns: 1fr !important; } }

        .wp-content { font-size: 1rem; line-height: 1.85; color: #444; }
        .wp-content h2 { font-family: Merriweather, serif; font-size: 1.45rem; font-weight: 700; color: #1a2a6c; margin: 34px 0 12px; padding-bottom: 8px; border-bottom: 2px solid #f0f2fa; }
        .wp-content h3 { font-family: Merriweather, serif; font-size: 1.18rem; font-weight: 700; color: #1a2a6c; margin: 26px 0 10px; }
        .wp-content h4 { font-size: 1rem; font-weight: 700; color: #1a2a6c; margin: 20px 0 8px; }
        .wp-content p { margin-bottom: 18px; }
        .wp-content ul { margin: 0 0 18px 0; padding-left: 0; list-style: none; }
        .wp-content ul li { padding: 5px 0 5px 22px; position: relative; color: #555; }
        .wp-content ul li::before { content: "→"; position: absolute; left: 0; color: #e87722; font-weight: 700; }
        .wp-content ol { margin: 0 0 18px 24px; }
        .wp-content ol li { margin-bottom: 7px; color: #555; }
        .wp-content a { color: #2563b0; text-decoration: underline; }
        .wp-content a:hover { color: #e87722; }
        .wp-content img { max-width: 100%; height: auto; border-radius: 8px; margin: 20px 0; }
        .wp-content blockquote { border-left: 4px solid #e87722; padding: 14px 20px; margin: 24px 0; background: #fff8f0; border-radius: 0 8px 8px 0; font-style: italic; color: #555; }
        .wp-content .wp-table-wrap { overflow-x: auto; margin: 22px 0; }
        .wp-content table { width: 100%; border-collapse: collapse; margin: 0; font-size: 0.9rem; border-radius: 8px; overflow: hidden; }
        .wp-content th { background: #1a2a6c; color: #fff; padding: 11px 16px; text-align: left; font-size: 0.88rem; }
        .wp-content td { padding: 9px 16px; border-bottom: 1px solid #dde2ef; }
        .wp-content tr:last-child td { border-bottom: none; }
        .wp-content tr:nth-child(even) td { background: #f9f9ff; }
        .wp-content pre { background: #1a2a6c; color: #e8f0fb; padding: 18px; border-radius: 8px; overflow-x: auto; font-size: 0.88rem; margin: 20px 0; }
        .wp-content code { background: #f0f0f8; color: #1a2a6c; padding: 2px 7px; border-radius: 4px; font-size: 0.87rem; }
        .wp-content pre code { background: transparent; color: inherit; padding: 0; }
        .wp-content figure { margin: 22px 0; }
        .wp-content figcaption { text-align: center; font-size: 0.8rem; color: #888; margin-top: 6px; font-style: italic; }
        .wp-content strong { color: #333; }
      `}</style>
    </>
  );
}
