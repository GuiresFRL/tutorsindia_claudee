import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts, getBlogPost } from "@/lib/data/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug && p.categories.some((c) => post.categories.includes(c))).slice(0, 4);

  return (
    <>
      <section style={{ background: "linear-gradient(135deg,var(--navy) 0%,#2563b0 100%)", color: "#fff", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.9rem", color: "#a0b8e0", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link> / <Link href="/blog/" style={{ color: "#a0b8e0" }}>Blog</Link> / {post.title}
          </div>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "12px" }}>
            {post.categories.map((cat) => (
              <span key={cat} style={{ background: "rgba(255,255,255,0.15)", padding: "3px 12px", borderRadius: "12px", fontSize: "0.8rem" }}>{cat}</span>
            ))}
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "2rem", lineHeight: 1.3, marginBottom: "12px" }}>{post.title}</h1>
          <p style={{ color: "#a0b8e0", fontSize: "0.9rem" }}>{post.date} • Tutors India Academic Team</p>
        </div>
      </section>

      <section style={{ maxWidth: "1200px", margin: "60px auto", padding: "0 20px", display: "grid", gridTemplateColumns: "2fr 1fr", gap: "40px", alignItems: "start" }} className="post-layout">
        <article>
          <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "12px", padding: "40px" }}>
            <p style={{ fontSize: "1.05rem", color: "var(--text-mid)", marginBottom: "24px", lineHeight: 1.8, fontStyle: "italic", borderLeft: "4px solid var(--orange)", paddingLeft: "16px" }}>
              {post.excerpt}
            </p>
            <div style={{ color: "var(--text-mid)", lineHeight: 1.9 }}>
              <p style={{ marginBottom: "16px" }}>
                Academic writing at the Masters and PhD level demands a deep understanding of your subject, rigorous research skills, and the ability to communicate complex ideas clearly and precisely. This is where many students struggle — not because they lack intelligence, but because academic writing is a skill that requires practice and guidance.
              </p>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--navy)", margin: "28px 0 12px" }}>Understanding the Requirements</h2>
              <p style={{ marginBottom: "16px" }}>
                Before beginning any academic writing task, it is essential to thoroughly understand the requirements set by your institution or journal. Each university has specific formatting guidelines, citation styles, and structural expectations that must be adhered to.
              </p>
              <p style={{ marginBottom: "16px" }}>
                At Tutors India, our team of PhD-qualified writers has extensive experience with UK, US, and Australian university requirements. We ensure that every piece of work we produce meets the precise standards required by your institution.
              </p>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--navy)", margin: "28px 0 12px" }}>Key Steps to Success</h2>
              <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
                <li style={{ marginBottom: "8px" }}>Identify a clear research question or objective</li>
                <li style={{ marginBottom: "8px" }}>Conduct a comprehensive literature review</li>
                <li style={{ marginBottom: "8px" }}>Choose an appropriate research methodology</li>
                <li style={{ marginBottom: "8px" }}>Collect and analyse data systematically</li>
                <li style={{ marginBottom: "8px" }}>Present findings with critical analysis</li>
                <li style={{ marginBottom: "8px" }}>Draw meaningful conclusions from your research</li>
              </ul>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--navy)", margin: "28px 0 12px" }}>How Tutors India Can Help</h2>
              <p style={{ marginBottom: "16px" }}>
                Our team of expert academic writers, statisticians, and subject matter specialists are available to provide guidance and support at every stage of your academic journey. Whether you need help with topic selection, research proposal writing, data analysis, or final editing, we have the expertise to help you succeed.
              </p>
              <div style={{ background: "var(--light-blue)", border: "1px solid var(--border)", borderRadius: "8px", padding: "20px", marginTop: "24px" }}>
                <p style={{ fontWeight: 600, color: "var(--navy)", marginBottom: "8px" }}>Note from Tutors India</p>
                <p style={{ fontSize: "0.9rem", color: "var(--text-mid)" }}>
                  This article is for educational purposes. Tutors India provides academic guidance and support services to help students understand and improve their academic work. All our services are designed to support learning and development.
                </p>
              </div>
            </div>
          </div>

          {/* Related posts */}
          {related.length > 0 && (
            <div style={{ marginTop: "32px" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--navy)", marginBottom: "16px" }}>Related Articles</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                {related.map((p) => (
                  <article key={p.slug} style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "8px", padding: "16px" }}>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-light)", marginBottom: "6px" }}>{p.date}</div>
                    <Link href={`/blog/${p.slug}/`} style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--navy)", lineHeight: 1.4 }}>{p.title}</Link>
                  </article>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* Sidebar */}
        <div style={{ position: "sticky", top: "80px" }}>
          <div style={{ background: "var(--navy)", color: "#fff", borderRadius: "12px", padding: "24px", marginBottom: "20px", textAlign: "center" }}>
            <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "10px" }}>Need Dissertation Help?</h3>
            <p style={{ fontSize: "0.85rem", color: "#c5d5f0", marginBottom: "16px" }}>Get expert support from our PhD-qualified team. Response within 30 minutes.</p>
            <Link href="/order-now/" style={{ display: "block", padding: "10px", background: "var(--orange)", color: "#fff", borderRadius: "5px", fontWeight: 600, marginBottom: "10px" }}>Order Now</Link>
            <Link href="/contact-us/" style={{ display: "block", padding: "10px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
          </div>

          <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "12px", padding: "20px", marginBottom: "20px" }}>
            <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--navy)", marginBottom: "12px" }}>Categories</h4>
            {post.categories.map((cat) => (
              <span key={cat} style={{ display: "inline-block", background: "var(--light-blue)", color: "var(--blue)", padding: "4px 12px", borderRadius: "12px", fontSize: "0.82rem", margin: "4px 4px 4px 0" }}>{cat}</span>
            ))}
          </div>

          <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "12px", padding: "20px" }}>
            <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--navy)", marginBottom: "12px" }}>Our Services</h4>
            {[
              { label: "Masters Dissertation", href: "/our-services/masters-dissertation-writing-services/" },
              { label: "PhD Dissertation", href: "/our-services/phd-dba-dissertation/" },
              { label: "Coursework Writing", href: "/our-services/coursework-writing/" },
              { label: "Editing Services", href: "/our-services/editing-services/" },
              { label: "Statistical Analysis", href: "/our-services/masters-dissertation-writing-services/dissertation-statistical-analysis/" },
            ].map((s) => (
              <Link key={s.href} href={s.href} style={{ display: "block", padding: "8px 0", borderBottom: "1px solid var(--border)", fontSize: "0.87rem", color: "var(--blue)" }}>{s.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <style>{`@media(max-width:768px){.post-layout{grid-template-columns:1fr!important;}}`}</style>
    </>
  );
}
