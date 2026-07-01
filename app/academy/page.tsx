import Link from "next/link";
import type { Metadata } from "next";
import AcademyCategoryFilter from "@/components/ui/AcademyCategoryFilter";
import {
  getAcademyPostsPage,
  getAcademyCategoryList,
  getAcademyFeaturedImage,
  getAcademyImageAlt,
  getAcademyAuthor,
  getAcademyCategories,
  stripAcademyHtml,
  formatAcademyDate,
} from "@/lib/api/academy";

export const metadata: Metadata = {
  title: "Academy — Academic Study Guides & Learning Resources",
  description:
    "Tutors India Academy — in-depth academic study guides, how-to articles, research tips, and learning resources for Masters, MBA and PhD students worldwide.",
  
  alternates: { canonical: "https://tutorsindia.com/academy/" },
};

export const revalidate = 3600;

const POSTS_PER_PAGE = 15;

interface Props {
  searchParams: Promise<{ page?: string; category?: string; "category-id"?: string }>;
}

export default async function AcademyPage({ searchParams }: Props) {
  const { page, category, "category-id": catIdParam } = await searchParams;
  const currentPage    = Math.max(1, parseInt(page ?? "1", 10));
  const activeCategory = category ?? "";
  const categoryId     = catIdParam ? parseInt(catIdParam, 10) : undefined;

  // Fetch categories + current page of posts in parallel
  const [categoriesData, postsData] = await Promise.all([
    getAcademyCategoryList(),
    getAcademyPostsPage(currentPage, POSTS_PER_PAGE, categoryId),
  ]);

  const { posts, total: totalPosts, totalPages } = postsData;
  const safePage = Math.min(currentPage, totalPages || 1);

  const pageHref = (p: number) => {
    const params = new URLSearchParams();
    if (activeCategory) params.set("category", activeCategory);
    if (categoryId)     params.set("category-id", String(categoryId));
    if (p > 1)          params.set("page", String(p));
    const qs = params.toString();
    return `/academy/${qs ? `?${qs}` : ""}`;
  };

  const categoryList = categoriesData.map((c) => ({ name: c.name, count: c.count, id: c.id }));

  const start = (safePage - 1) * POSTS_PER_PAGE;

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "52px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <span style={{ color: "#fff" }}>Academy</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", flexWrap: "wrap" }}>
            <div style={{ flex: 1 }}>
              <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.4rem,3vw,2.1rem)", marginBottom: "8px" }}>
                Tutors India Academy
              </h1>
              <p style={{ color: "#c5d5f0", fontSize: "0.97rem", maxWidth: "650px", marginBottom: "6px" }}>
                In-depth study guides, how-to articles, research tips, and academic resources for Masters, MBA and PhD students worldwide.
              </p>
              <p style={{ color: "#a0b8e0", fontSize: "0.8rem" }}>
                {totalPosts} {activeCategory ? `guides in "${activeCategory}"` : "resources"} · Page {safePage} of {Math.max(1, totalPages)}
              </p>
            </div>
            <Link
              href="/blog/"
              style={{ flexShrink: 0, padding: "9px 18px", background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", borderRadius: "6px", fontSize: "0.84rem", fontWeight: 600, whiteSpace: "nowrap", alignSelf: "center" }}
            >
              Visit Blog →
            </Link>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "28px 20px" }}>

        {/* ── DROPDOWN FILTER ── */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "16px 20px", marginBottom: "28px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
          <AcademyCategoryFilter categories={categoryList} activeCategory={activeCategory} />
          <span style={{ fontSize: "0.8rem", color: "#888", flexShrink: 0, whiteSpace: "nowrap" }}>
            {totalPosts} resource{totalPosts !== 1 ? "s" : ""} found
          </span>
        </div>

        {/* ── POSTS GRID ── */}
        {posts.length === 0 ? (
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "48px 20px", textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "12px" }}>🎓</div>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.15rem", color: "#1a2a6c", marginBottom: "8px" }}>
              {activeCategory ? `No guides in "${activeCategory}"` : "Academy resources coming soon"}
            </h2>
            {activeCategory && (
              <Link href="/academy/" style={{ display: "inline-block", marginTop: "10px", padding: "9px 22px", background: "#1a2a6c", color: "#fff", borderRadius: "5px", fontWeight: 600, fontSize: "0.88rem" }}>
                View All Resources
              </Link>
            )}
          </div>
        ) : (
          <>
            <div className="blog-grid" style={{ marginBottom: "36px" }}>
              {posts.map((post) => {
                const image   = getAcademyFeaturedImage(post);
                const alt     = getAcademyImageAlt(post);
                const author  = getAcademyAuthor(post);
                const cats    = getAcademyCategories(post);
                const excerpt = stripAcademyHtml(post.excerpt.rendered, 130);
                const date    = formatAcademyDate(post.date);

                return (
                  <article key={post.id} className="blog-card">
                    <Link href={`/academy/${post.slug}/`} className="blog-card-img">
                      {image ? (
                        <img src={image} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
                      ) : (
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", fontSize: "3rem" }}>🎓</div>
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
                        <Link href={`/academy/${post.slug}/`} dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                      </h2>
                      {excerpt && <p className="blog-card-excerpt">{excerpt}</p>}
                      <div className="blog-card-footer">
                        <Link href={`/academy/${post.slug}/`} className="blog-read-more">Read Guide →</Link>
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
                <nav aria-label="Academy pagination" className="pagination-nav">
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
                  Showing {start + 1}–{Math.min(start + POSTS_PER_PAGE, totalPosts)} of {totalPosts} resources
                </p>
              </div>
            )}
          </>
        )}

        {/* ── BOTTOM CTA ── */}
        <div className="blog-cta-strip">
          <div>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", fontWeight: 700, marginBottom: "6px" }}>
              Need Personal Academic Support?
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
