import Link from "next/link";
import type { Metadata } from "next";
import BlogCategoryFilter from "@/components/ui/BlogCategoryFilter";
import {
  getBlogPostsPage,
  getBlogCategories,
  getFeaturedImage,
  getFeaturedImageAlt,
  getAuthorName,
  getCategories,
  stripHtml,
  formatDate,
} from "@/lib/api/wordpress";

export const metadata: Metadata = {
  title: "Blog — Academic Writing Tips & Dissertation Guides | Tutors India",
  description:
    "Expert guides on dissertation writing, research methodology, referencing, statistical analysis and academic success from Tutors India's PhD-qualified team.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://tutorsindia.com/blog/" },
};

export const revalidate = 3600;

const POSTS_PER_PAGE = 15;

interface Props {
  searchParams: Promise<{ page?: string; category?: string; "category-id"?: string }>;
}

export default async function BlogPage({ searchParams }: Props) {
  const { page, category, "category-id": catIdParam } = await searchParams;
  const currentPage    = Math.max(1, parseInt(page ?? "1", 10));
  const activeCategory = category ?? "";
  const categoryId     = catIdParam ? parseInt(catIdParam, 10) : undefined;

  // Fetch categories + first page of posts in parallel
  const [categoriesData, postsData] = await Promise.all([
    getBlogCategories(),
    getBlogPostsPage(currentPage, POSTS_PER_PAGE, categoryId),
  ]);

  const { posts, total: totalPosts, totalPages } = postsData;
  const safePage = Math.min(currentPage, totalPages || 1);

  const pageHref = (p: number) => {
    const params = new URLSearchParams();
    if (activeCategory) params.set("category", activeCategory);
    if (categoryId)     params.set("category-id", String(categoryId));
    if (p > 1)          params.set("page", String(p));
    const qs = params.toString();
    return `/blog/${qs ? `?${qs}` : ""}`;
  };

  // Shape categories for the filter component: { name, count }
  const categoryList = categoriesData.map((c) => ({ name: c.name, count: c.count, id: c.id }));

  const start = (safePage - 1) * POSTS_PER_PAGE;

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "52px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <span style={{ color: "#fff" }}>Blog</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.4rem,3vw,2.1rem)", marginBottom: "8px" }}>
            Blog &amp; Academic Resources
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "0.97rem", maxWidth: "650px", marginBottom: "6px" }}>
            Expert guides on dissertation writing, research methodology, referencing and academic success.
          </p>
          <p style={{ color: "#a0b8e0", fontSize: "0.8rem" }}>
            {totalPosts} {activeCategory ? `posts in "${activeCategory}"` : "articles"} · Page {safePage} of {Math.max(1, totalPages)}
          </p>
        </div>
      </section>

      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "28px 20px" }}>

        {/* ── DROPDOWN FILTER BAR ── */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "16px 20px", marginBottom: "28px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
          <BlogCategoryFilter categories={categoryList} activeCategory={activeCategory} />
          <span style={{ fontSize: "0.8rem", color: "#888", flexShrink: 0, whiteSpace: "nowrap" }}>
            {totalPosts} post{totalPosts !== 1 ? "s" : ""} found
          </span>
        </div>

        {/* ── POSTS GRID ── */}
        {posts.length === 0 ? (
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "48px 20px", textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "12px" }}>📝</div>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.15rem", color: "#1a2a6c", marginBottom: "8px" }}>
              {activeCategory ? `No posts found in "${activeCategory}"` : "Blog posts coming soon"}
            </h2>
            <p style={{ color: "#666", fontSize: "0.88rem", marginBottom: "16px" }}>
              {activeCategory ? "Try another category or view all posts." : "We're working on expert guides. Check back shortly."}
            </p>
            {activeCategory && (
              <Link href="/blog/" style={{ display: "inline-block", padding: "9px 22px", background: "#1a2a6c", color: "#fff", borderRadius: "5px", fontWeight: 600, fontSize: "0.88rem" }}>
                View All Posts
              </Link>
            )}
          </div>
        ) : (
          <>
            <div className="blog-grid">
              {posts.map((post) => {
                const image   = getFeaturedImage(post);
                const alt     = getFeaturedImageAlt(post);
                const author  = getAuthorName(post);
                const cats    = getCategories(post);
                const excerpt = stripHtml(post.excerpt.rendered, 130);
                const date    = formatDate(post.date);

                return (
                  <article key={post.id} className="blog-card">
                    <Link href={`/blog/${post.slug}/`} className="blog-card-img">
                      {image ? (
                        <img src={image} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
                      ) : (
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", fontSize: "3rem" }}>📖</div>
                      )}
                      {cats[0] && <span className="blog-card-badge">{cats[0]}</span>}
                    </Link>

                    <div className="blog-card-body">
                      <div className="blog-card-meta">
                        <span>📅 {date}</span>
                        <span>·</span>
                        <span>✍️ {author}</span>
                      </div>
                      <h2 className="blog-card-title">
                        <Link href={`/blog/${post.slug}/`} dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                      </h2>
                      {excerpt && <p className="blog-card-excerpt">{excerpt}</p>}
                      <div className="blog-card-footer">
                        <Link href={`/blog/${post.slug}/`} className="blog-read-more">Read More →</Link>
                        {cats[1] && (
                          <span style={{ fontSize: "0.7rem", background: "#f5f6fa", color: "#555", padding: "2px 8px", borderRadius: "8px", border: "1px solid #dde2ef" }}>
                            {cats[1]}
                          </span>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* ── PAGINATION ── */}
            {totalPages > 1 && (
              <div className="pagination-wrap">
                <nav aria-label="Blog pagination" className="pagination-nav">
                  {safePage > 1 ? (
                    <Link href={pageHref(safePage - 1)} className="page-btn">← Prev</Link>
                  ) : (
                    <span className="page-btn page-btn--disabled">← Prev</span>
                  )}

                  {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter((p) => p === 1 || p === totalPages || Math.abs(p - safePage) <= 1)
                    .reduce<(number | "…")[]>((acc, p, idx, arr) => {
                      if (idx > 0 && (arr[idx - 1] as number) + 1 < p) acc.push("…");
                      acc.push(p);
                      return acc;
                    }, [])
                    .map((item, idx) =>
                      item === "…" ? (
                        <span key={`e-${idx}`} className="page-ellipsis">…</span>
                      ) : (
                        <Link key={item} href={pageHref(item as number)} className={`page-num ${item === safePage ? "page-num--active" : ""}`}>
                          {item}
                        </Link>
                      )
                    )}

                  {safePage < totalPages ? (
                    <Link href={pageHref(safePage + 1)} className="page-btn page-btn--next">Next →</Link>
                  ) : (
                    <span className="page-btn page-btn--disabled">Next →</span>
                  )}
                </nav>
                <p className="pagination-info">
                  Showing {start + 1}–{Math.min(start + POSTS_PER_PAGE, totalPosts)} of {totalPosts} posts
                </p>
              </div>
            )}
          </>
        )}

        {/* ── BOTTOM CTA ── */}
        <div className="blog-cta-strip">
          <div>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", fontWeight: 700, marginBottom: "6px" }}>
              Need Expert Academic Support?
            </h2>
            <p style={{ color: "#c5d5f0", fontSize: "0.86rem" }}>
              2,00,000+ scholars helped since 2001. Dissertations, assignments, statistical analysis &amp; editing.
            </p>
          </div>
          <div className="blog-cta-buttons">
            <Link href="/order-now/" style={{ padding: "10px 22px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "0.9rem", whiteSpace: "nowrap", display: "inline-block" }}>Order Now</Link>
            <Link href="/contact-us/" style={{ padding: "10px 22px", border: "2px solid rgba(255,255,255,0.45)", color: "#fff", borderRadius: "5px", fontWeight: 600, fontSize: "0.9rem", whiteSpace: "nowrap", display: "inline-block" }}>Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
