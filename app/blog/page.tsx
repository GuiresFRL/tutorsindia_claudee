import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "@/lib/data/blog";

export const metadata: Metadata = {
  title: "Blog — Academic Writing Tips & Dissertation Guides",
  description: "Expert guides on dissertation writing, research methodology, and academic success. Tips from Tutors India's team of PhD and Masters qualified writers.",
};

const allCategories = Array.from(new Set(blogPosts.flatMap((p) => p.categories)));

export default function BlogPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,var(--navy) 0%,#2563b0 100%)", color: "#fff", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.9rem", color: "#a0b8e0", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link> / Blog
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "2.2rem", marginBottom: "12px" }}>Blog & Resources</h1>
          <p style={{ color: "#c5d5f0", fontSize: "1.05rem" }}>Expert guides, tips, and insights from Tutors India&apos;s academic team</p>
        </div>
      </section>

      <section style={{ maxWidth: "1200px", margin: "60px auto", padding: "0 20px", display: "grid", gridTemplateColumns: "2fr 1fr", gap: "40px", alignItems: "start" }} className="blog-layout">
        {/* Posts */}
        <div>
          <div style={{ display: "grid", gap: "24px" }}>
            {blogPosts.map((post) => (
              <article key={post.slug} style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "10px", overflow: "hidden", display: "flex", gap: "0" }}>
                <div style={{ background: "var(--light-blue)", width: "180px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3rem" }}>
                  📖
                </div>
                <div style={{ padding: "20px 24px" }}>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-light)", marginBottom: "6px" }}>
                    {post.date} • {post.categories.join(", ")}
                  </div>
                  <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--navy)", marginBottom: "8px", lineHeight: 1.4 }}>
                    <Link href={`/blog/${post.slug}/`}>{post.title}</Link>
                  </h2>
                  <p style={{ fontSize: "0.88rem", color: "var(--text-mid)", marginBottom: "12px", lineHeight: 1.6 }}>{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}/`} style={{ color: "var(--orange)", fontWeight: 600, fontSize: "0.85rem" }}>Read More →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div style={{ position: "sticky", top: "80px" }}>
          <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "12px", padding: "24px", marginBottom: "20px" }}>
            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--navy)", marginBottom: "14px" }}>Categories</h3>
            {allCategories.map((cat) => (
              <div key={cat} style={{ padding: "8px 0", borderBottom: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.9rem", color: "var(--text-mid)" }}>{cat}</span>
                <span style={{ fontSize: "0.78rem", background: "var(--light-blue)", color: "var(--blue)", padding: "2px 8px", borderRadius: "12px" }}>
                  {blogPosts.filter((p) => p.categories.includes(cat)).length}
                </span>
              </div>
            ))}
          </div>

          <div style={{ background: "var(--navy)", color: "#fff", borderRadius: "12px", padding: "24px", textAlign: "center" }}>
            <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "10px" }}>Need Writing Help?</h3>
            <p style={{ fontSize: "0.85rem", color: "#c5d5f0", marginBottom: "16px" }}>Get expert dissertation support from our PhD-qualified team.</p>
            <Link href="/order-now/" style={{ display: "block", padding: "10px", background: "var(--orange)", color: "#fff", borderRadius: "5px", fontWeight: 600, textAlign: "center" }}>
              Order Now
            </Link>
          </div>
        </div>
      </section>

      <style>{`@media(max-width:768px){.blog-layout{grid-template-columns:1fr!important;}}`}</style>
    </>
  );
}
