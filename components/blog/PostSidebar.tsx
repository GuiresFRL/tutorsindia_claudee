import Link from "next/link";
import Image from "next/image";
import QuickEnquiryForm from "@/components/blog/QuickEnquiryForm";

export interface SidebarRecentPost {
  id: string | number;
  title: string;
  href: string;
  image: string | null;
  imageAlt: string;
  date: string;
}

interface Props {
  recentPosts: SidebarRecentPost[];
  recentHeading?: string;
}

const cardStyle: React.CSSProperties = {
  background: "#fff",
  border: "1px solid #dde2ef",
  borderRadius: "12px",
  padding: "22px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
};

export default function PostSidebar({ recentPosts, recentHeading = "Recent Posts" }: Props) {
  return (
    <aside style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      {/* Search */}
      <div style={cardStyle}>
        <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>
          Search
        </h3>
        <form action="/search" method="get" style={{ display: "flex", gap: "8px" }}>
          <input
            type="search"
            name="q"
            placeholder="Search articles…"
            aria-label="Search"
            style={{ flex: 1, minWidth: 0, padding: "10px 12px", border: "1px solid #dde2ef", borderRadius: "6px", fontSize: "0.88rem", boxSizing: "border-box" }}
          />
          <button
            type="submit"
            aria-label="Search"
            style={{ padding: "10px 16px", background: "#e87722", color: "#fff", border: "none", borderRadius: "6px", fontWeight: 700, cursor: "pointer", fontSize: "0.88rem", flexShrink: 0 }}
          >
            Go
          </button>
        </form>
      </div>

      {/* Recent posts */}
      {recentPosts.length > 0 && (
        <div style={cardStyle}>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>
            {recentHeading}
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {recentPosts.map((p) => (
              <Link key={p.id} href={p.href} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <div style={{ width: "64px", height: "64px", borderRadius: "8px", overflow: "hidden", background: "#e8f0fb", flexShrink: 0, position: "relative" }}>
                  {p.image ? (
                    <Image src={p.image} alt={p.imageAlt} fill sizes="64px" style={{ objectFit: "cover" }} />
                  ) : (
                    <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem" }}>📖</div>
                  )}
                </div>
                <div>
                  <div style={{ fontSize: "0.86rem", fontWeight: 700, color: "#1a2a6c", lineHeight: 1.4, marginBottom: "4px" }}>
                    {p.title}
                  </div>
                  <div style={{ fontSize: "0.74rem", color: "#888" }}>{p.date}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Quick enquiry form */}
      <div style={cardStyle}>
        <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "4px" }}>
          Need Academic Help?
        </h3>
        <p style={{ fontSize: "0.82rem", color: "#666", marginBottom: "16px" }}>
          Share your requirements and our team will respond within 30 minutes.
        </p>
        <QuickEnquiryForm />
      </div>
    </aside>
  );
}
