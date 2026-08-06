import type { Metadata } from "next";
import Link from "next/link";
import { serviceCategories } from "@/lib/data/services";
import { searchPayloadPosts, excerptFromLexical, getPayloadCategorySlug } from "@/lib/api/payload";

export const metadata: Metadata = {
  title: "Search Results | Tutors India",
  robots: { index: false, follow: true },
};

interface ServiceResult {
  title: string;
  description: string;
  href: string;
}

function searchServices(query: string): ServiceResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const results: ServiceResult[] = [];
  for (const category of serviceCategories) {
    for (const service of category.services) {
      if (
        service.title.toLowerCase().includes(q) ||
        service.description.toLowerCase().includes(q)
      ) {
        results.push(service);
      }
    }
  }
  return results.slice(0, 12);
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = (q ?? "").trim();

  const [serviceResults, blogResults, academyResults] = query
    ? await Promise.all([
        Promise.resolve(searchServices(query)),
        searchPayloadPosts("blog", query, 8),
        searchPayloadPosts("academy", query, 8),
      ])
    : [[], [], []];

  const totalResults = serviceResults.length + blogResults.length + academyResults.length;

  return (
    <main style={{ maxWidth: "1000px", margin: "0 auto", padding: "48px 20px 80px" }}>
      <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", color: "#1a2a6c", marginBottom: "8px" }}>
        Search {query && <>Results for &ldquo;{query}&rdquo;</>}
      </h1>

      <form action="/search" method="get" style={{ display: "flex", gap: "10px", margin: "24px 0 40px", maxWidth: "560px" }}>
        <input
          type="search"
          name="q"
          defaultValue={query}
          placeholder="Search services, blog, academy…"
          style={{ flex: 1, padding: "12px 16px", border: "1px solid #dde2ef", borderRadius: "6px", fontSize: "1rem" }}
        />
        <button
          type="submit"
          style={{ padding: "12px 24px", background: "#e87722", color: "#fff", border: "none", borderRadius: "6px", fontWeight: 700, cursor: "pointer" }}
        >
          Search
        </button>
      </form>

      {!query && (
        <p style={{ color: "#666" }}>Enter a keyword above to search our services, blog and academy articles.</p>
      )}

      {query && totalResults === 0 && (
        <p style={{ color: "#666" }}>
          No results found for &ldquo;{query}&rdquo;. Try a different keyword, or{" "}
          <Link href="/contact-us/" style={{ color: "#e87722", fontWeight: 600 }}>contact us</Link> for help.
        </p>
      )}

      {serviceResults.length > 0 && (
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", color: "#1a2a6c", marginBottom: "16px", borderBottom: "2px solid #e87722", paddingBottom: "8px" }}>
            Services
          </h2>
          <div style={{ display: "grid", gap: "14px" }}>
            {serviceResults.map((r) => (
              <Link key={r.href} href={r.href} style={{ display: "block", padding: "16px", border: "1px solid #dde2ef", borderRadius: "8px" }}>
                <div style={{ fontWeight: 700, color: "#1a2a6c", marginBottom: "4px" }}>{r.title}</div>
                <div style={{ color: "#555", fontSize: "0.92rem", lineHeight: 1.6 }}>{r.description}</div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {blogResults.length > 0 && (
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", color: "#1a2a6c", marginBottom: "16px", borderBottom: "2px solid #e87722", paddingBottom: "8px" }}>
            Blog
          </h2>
          <div style={{ display: "grid", gap: "14px" }}>
            {blogResults.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}/`} style={{ display: "block", padding: "16px", border: "1px solid #dde2ef", borderRadius: "8px" }}>
                <div style={{ fontWeight: 700, color: "#1a2a6c", marginBottom: "4px" }}>{post.title}</div>
                <div style={{ color: "#555", fontSize: "0.92rem", lineHeight: 1.6 }}>{excerptFromLexical(post.content)}</div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {academyResults.length > 0 && (
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", color: "#1a2a6c", marginBottom: "16px", borderBottom: "2px solid #e87722", paddingBottom: "8px" }}>
            Study Guide / Academy
          </h2>
          <div style={{ display: "grid", gap: "14px" }}>
            {academyResults.map((post) => (
              <Link key={post.id} href={`/academy/${getPayloadCategorySlug(post)}/${post.slug}/`} style={{ display: "block", padding: "16px", border: "1px solid #dde2ef", borderRadius: "8px" }}>
                <div style={{ fontWeight: 700, color: "#1a2a6c", marginBottom: "4px" }}>{post.title}</div>
                <div style={{ color: "#555", fontSize: "0.92rem", lineHeight: 1.6 }}>{excerptFromLexical(post.content)}</div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
