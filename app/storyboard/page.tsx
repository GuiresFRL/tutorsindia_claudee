import Link from "next/link";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "StoryBoard",
  description: "Tutors India storyboard — visual showcase of our dissertation, data analysis, essay writing, and research services.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.tutorsindia.com/storyboard/" },
};

const BASE = "https://www.tutorsindia.net/wp-content/uploads";

const items = [
  {
    title: "Data Analysis",
    img: `${BASE}/2024/03/Data-analysis.jpg`,
    href: "/data-analysis/",
  },
  {
    title: "Conference Paper",
    img: `${BASE}/2024/03/Conference-Paper-600x416-1.jpg`,
    href: "/publication-support/",
  },
  {
    title: "UK Master's Dissertation Writing Help",
    img: `${BASE}/2018/08/Masters-Dissertation-Writing-Help-and-Guidance.jpg`,
    href: "/masters-dissertation/",
  },
  {
    title: "Essay Writing",
    img: `${BASE}/2024/03/Essay-Writing-600x416-1.jpg`,
    href: "/essay-writing/",
  },
  {
    title: "Make Data Analysis Easy",
    img: `${BASE}/2024/03/Data-analysis-made-easy-with-Tutors-India-600x428-1.jpg`,
    href: "/data-analysis/",
  },
  {
    title: "PhD Dissertation",
    img: `${BASE}/2024/03/Dissertation-600x357-1.jpg`,
    href: "/phd-dissertation/",
  },
  {
    title: "UK Masters Research Proposal Writing Help",
    img: `${BASE}/2024/03/UK-Masters-Research-Proposal-Writing-Help.jpg`,
    href: "/research-proposal/",
  },
  {
    title: "Medicine Thesis Writing for Ph.D. Students",
    img: `${BASE}/2024/03/Medicine-thesis-writing-for-Ph.D.-students.jpg`,
    href: "/phd-dissertation/",
  },
  {
    title: "Exam Notes",
    img: `${BASE}/2024/03/Exam-Notes-600x416-1.jpg`,
    href: "/coursework-writing/",
  },
  {
    title: "Masters Dissertation Proposal Writing Services",
    img: `${BASE}/2024/03/UK-Masters-Research-Proposal-Writing-Help.jpg`,
    href: "/masters-dissertation/",
  },
  {
    title: "Each and Every Assignment",
    img: `${BASE}/2024/03/3.jpg`,
    href: "/assignment-writing/",
  },
];

export default function StoryboardPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "52px 20px 44px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>
            <span style={{ color: "#a0b8e0" }}> / </span>
            <span style={{ color: "#fff" }}>Story Board</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.4rem,3vw,2rem)", marginBottom: "12px" }}>
            Story Board
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "0.97rem", maxWidth: "680px" }}>
            A visual showcase of our key academic writing services and capabilities.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "24px" }}>
          {items.map((item) => (
            <Link key={item.title} href={item.href} style={{ textDecoration: "none" }}>
              <div style={{
                background: "#fff",
                border: "1px solid #dde2ef",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
                transition: "box-shadow 0.2s",
              }}>
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ width: "100%", height: "200px", objectFit: "cover", display: "block" }}
                />
                <div style={{ padding: "16px 18px" }}>
                  <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "0.95rem", color: "#1a2a6c", margin: 0, lineHeight: 1.4 }}>
                    {item.title}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "44px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "10px" }}>Order Now</h2>
        <p style={{ color: "#c5d5f0", fontSize: "0.93rem", marginBottom: "18px", maxWidth: "640px", margin: "0 auto 18px" }}>
          Invest in your career by availing Part or chapter-wise master&apos;s dissertation writing service from our UK / US Qualified researchers.
        </p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "11px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "11px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
