import Link from "next/link";
import type { Metadata } from "next";
import BlogCategoryFilter from "@/components/ui/BlogCategoryFilter";
import {
  getBlogPosts,
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

const POSTS_PER_PAGE = 9;

interface Props {
  searchParams: Promise<{ page?: string; category?: string }>;
}

export default async function BlogPage({ searchParams }: Props) {
  const { page, category } = await searchParams;
  const currentPage = Math.max(1, parseInt(page ?? "1", 10));
  const activeCategory = category ?? "";

  const allPosts = await getBlogPosts(); // fetches ALL posts (paginated)

  // Build category list with counts
  const categoryMap = new Map<string, number>();
  allPosts.forEach((p) => {
    getCategories(p).forEach((cat) => {
      categoryMap.set(cat, (categoryMap.get(cat) ?? 0) + 1);
    });
  });
  const categoryList = Array.from(categoryMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => a.name.localeCompare(b.name));

  // Filter posts by category
  const filteredPosts = activeCategory
    ? allPosts.filter((p) => getCategories(p).includes(activeCategory))
    : allPosts;

  const totalPosts = filteredPosts.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const safePage = Math.min(currentPage, totalPages || 1);
  const start = (safePage - 1) * POSTS_PER_PAGE;
  const posts = filteredPosts.slice(start, start + POSTS_PER_PAGE);

  const pageHref = (p: number) => {
    const params = new URLSearchParams();
    if (activeCategory) params.set("category", activeCategory);
    if (p > 1) params.set("page", String(p));
    const qs = params.toString();
    return `/blog/${qs ? `?${qs}` : ""}`;
  };

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

          {/* Post count summary */}
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
            {/* Grid */}
            <div className="blog-grid">
              {posts.map((post) => {
                const image = getFeaturedImage(post);
                const alt = getFeaturedImageAlt(post);
                const author = getAuthorName(post);
                const cats = getCategories(post);
                const excerpt = stripHtml(post.excerpt.rendered, 130);
                const date = formatDate(post.date);

                return (
                  <article key={post.id} className="blog-card">
                    {/* Image */}
                    <Link href={`/blog/${post.slug}/`} className="blog-card-img">
                      {image ? (
                        <img src={image} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
                      ) : (
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", fontSize: "3rem" }}>📖</div>
                      )}
                      {cats[0] && (
                        <span className="blog-card-badge">{cats[0]}</span>
                      )}
                    </Link>

                    {/* Content */}
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
                          <span
                            onClick={() => {}}
                            style={{ fontSize: "0.7rem", background: "#f5f6fa", color: "#555", padding: "2px 8px", borderRadius: "8px", border: "1px solid #dde2ef" }}
                          >
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

      <style>{`
        /* Blog grid */
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 36px;
        }
        .blog-card {
          background: #fff;
          border: 1px solid #dde2ef;
          border-radius: 12px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          transition: box-shadow 0.2s;
        }
        .blog-card:hover { box-shadow: 0 6px 20px rgba(0,0,0,0.09); }
        .blog-card-img {
          display: block;
          background: #e8f0fb;
          height: 185px;
          overflow: hidden;
          flex-shrink: 0;
          position: relative;
        }
        .blog-card-badge {
          position: absolute;
          bottom: 8px;
          left: 8px;
          font-size: 0.66rem;
          background: rgba(26,42,108,0.88);
          color: #fff;
          padding: 2px 9px;
          border-radius: 10px;
          font-weight: 600;
          max-width: calc(100% - 16px);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .blog-card-body {
          padding: 14px 16px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .blog-card-meta {
          font-size: 0.72rem;
          color: #888;
          margin-bottom: 6px;
          display: flex;
          gap: 5px;
          flex-wrap: wrap;
        }
        .blog-card-title {
          font-family: Merriweather, serif;
          font-size: 0.93rem;
          font-weight: 700;
          color: #1a2a6c;
          line-height: 1.5;
          margin-bottom: 8px;
          flex: 1;
        }
        .blog-card-title a { color: #1a2a6c; }
        .blog-card-title a:hover { color: #e87722; }
        .blog-card-excerpt {
          font-size: 0.8rem;
          color: #666;
          line-height: 1.65;
          margin-bottom: 10px;
        }
        .blog-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
        }
        .blog-read-more {
          font-size: 0.82rem;
          color: #e87722;
          font-weight: 700;
        }

        /* Pagination */
        .pagination-wrap { margin-bottom: 36px; }
        .pagination-nav {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 5px;
          flex-wrap: wrap;
          margin-bottom: 8px;
        }
        .page-btn {
          padding: 8px 14px;
          border-radius: 6px;
          font-size: 0.84rem;
          font-weight: 600;
          border: 1.5px solid #dde2ef;
          background: #fff;
          color: #1a2a6c;
          white-space: nowrap;
        }
        .page-btn--next {
          background: #1a2a6c;
          border-color: #1a2a6c;
          color: #fff;
        }
        .page-btn--disabled {
          background: #f5f6fa;
          color: #bbb;
          cursor: not-allowed;
        }
        .page-num {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 6px;
          font-size: 0.84rem;
          font-weight: 700;
          border: 1.5px solid #dde2ef;
          background: #fff;
          color: #1a2a6c;
        }
        .page-num--active {
          background: #1a2a6c;
          border-color: #1a2a6c;
          color: #fff;
        }
        .page-ellipsis { font-size: 0.84rem; color: #888; padding: 0 2px; }
        .pagination-info { text-align: center; font-size: 0.76rem; color: #888; }

        /* CTA strip */
        .blog-cta-strip {
          background: linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%);
          color: #fff;
          border-radius: 12px;
          padding: 28px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }
        .blog-cta-buttons { display: flex; gap: 10px; flex-shrink: 0; flex-wrap: wrap; }

        /* ── Tablet 900px ── */
        @media (max-width: 900px) {
          .blog-grid { grid-template-columns: 1fr 1fr !important; gap: 16px; }
          .blog-card-img { height: 160px; }
        }

        /* ── Mobile 640px ── */
        @media (max-width: 640px) {
          .blog-grid { grid-template-columns: 1fr !important; gap: 14px; }
          .blog-card { flex-direction: row; height: auto; }
          .blog-card-img { width: 120px; min-width: 120px; height: auto; min-height: 140px; flex-shrink: 0; border-radius: 0; }
          .blog-card-body { padding: 12px 14px; }
          .blog-card-title { font-size: 0.88rem; }
          .blog-card-excerpt { display: none; }
          .blog-cta-strip { flex-direction: column; padding: 22px 18px; text-align: center; }
          .blog-cta-buttons { justify-content: center; }
          .pagination-nav { gap: 4px; }
          .page-btn { padding: 7px 10px; font-size: 0.8rem; }
        }

        /* ── Small mobile 420px ── */
        @media (max-width: 420px) {
          .blog-card { flex-direction: column; }
          .blog-card-img { width: 100%; min-width: unset; height: 160px; }
          .blog-card-excerpt { display: block; }
        }
      `}</style>
    </>
  );
}
