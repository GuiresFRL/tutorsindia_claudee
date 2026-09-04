import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Recent Academic Research Trends",
  description: "Stay updated with the latest academic writing trends, blog posts, and insights from Tutors India.",
  
  alternates: { canonical: "https://www.tutorsindia.com/recent-trends/" },
};

export default function RecentTrendsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Recent Trends" }]} />
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "52px 20px 44px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>
            <span style={{ color: "#a0b8e0" }}> / </span>
            <span style={{ color: "#fff" }}>Recent Trends</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.4rem,3vw,2rem)", marginBottom: "12px" }}>
            Tutors India Recent Trends
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "0.97rem", maxWidth: "680px" }}>
            Follow our latest posts, academic writing insights and updates across Twitter, LinkedIn and our blog.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "32px" }}>

          {/* Twitter Timeline */}
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}>
            <div style={{ padding: "16px 20px", background: "#1a2a6c", color: "#fff" }}>
              <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", margin: 0 }}>Twitter / X Posts</h2>
            </div>
            <div style={{ padding: "16px" }}>
              <a
                className="twitter-timeline"
                href="https://twitter.com/tutorsindia"
                data-height="500"
                data-theme="light"
              >
                Tweets by Tutorsindia
              </a>
              {/* eslint-disable-next-line @next/next/no-sync-scripts */}
              <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
            </div>
          </div>

          {/* LinkedIn */}
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}>
            <div style={{ padding: "16px 20px", background: "#1a2a6c", color: "#fff" }}>
              <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", margin: 0 }}>LinkedIn Updates</h2>
            </div>
            <div style={{ padding: "24px 20px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.7, margin: 0 }}>
                Follow Tutors India on LinkedIn for the latest academic writing tips, research insights, and company updates from our PhD-qualified team.
              </p>
              <a
                href="https://www.linkedin.com/company/tutors-india/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 20px",
                  background: "#0077b5",
                  color: "#fff",
                  borderRadius: "5px",
                  fontWeight: 700,
                  fontSize: "0.94rem",
                  textDecoration: "none",
                  width: "fit-content",
                }}
              >
                Follow on LinkedIn
              </a>
            </div>
          </div>

          {/* Blog */}
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}>
            <div style={{ padding: "16px 20px", background: "#1a2a6c", color: "#fff" }}>
              <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", margin: 0 }}>Assignment Blog</h2>
            </div>
            <div style={{ padding: "24px 20px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.7, margin: 0 }}>
                Read our latest blog posts on dissertation writing, referencing styles, research methodology, and academic best practices.
              </p>
              <Link
                href="/blog/"
                style={{
                  display: "inline-block",
                  padding: "10px 20px",
                  background: "#e87722",
                  color: "#fff",
                  borderRadius: "5px",
                  fontWeight: 700,
                  fontSize: "0.94rem",
                  textDecoration: "none",
                  width: "fit-content",
                }}
              >
                Read Our Blog
              </Link>
            </div>
          </div>

        </div>
      </div>

      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "44px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "10px" }}>Need Expert Academic Help?</h2>
        <p style={{ color: "#c5d5f0", fontSize: "0.96rem", marginBottom: "18px" }}>Our PhD-qualified writers provide tailored support for every stage of your academic journey.</p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "11px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "11px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
