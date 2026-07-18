import Link from "next/link";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Insights — Academic News & Trends",
  description: "Stay updated with the latest academic research trends, industry innovations, news, and educational resources from Tutors India.",
  
  alternates: { canonical: "https://www.tutorsindia.com/insights" },
};

const insightCards = [
  {
    href: "/about-us/",
    title: "Who We Are",
    desc: "Trust, Quality & Customer Care — learn about Tutors India's mission, values, and the expert team behind 200,000+ satisfied scholars.",
    icon: "🏛️",
    color: "#1a2a6c",
    external: false,
  },
  {
    href: "/blog/",
    title: "Blog",
    desc: "Improve your knowledge by reading our academic blog. Expert articles on dissertation writing, research methods, and study strategies.",
    icon: "📝",
    color: "#2563b0",
    external: false,
  },
  {
    href: "/insights/dissertation-journey/",
    title: "Dissertation Journey",
    desc: "Get to know how we handle our clients through every stage of the dissertation process — from topic selection to final submission.",
    icon: "🎓",
    color: "#1a2a6c",
    external: false,
  },
  {
    href: "/insights/essay-journey/",
    title: "Essay Journey",
    desc: "Get to know how we handle our clients through the essay writing process — research, drafting, editing, and referencing.",
    icon: "📄",
    color: "#2563b0",
    external: false,
  },
  {
    href: "/insights/brochure/",
    title: "Brochure",
    desc: "Download our service brochures — comprehensive guides to the academic writing and editing services offered by Tutors India.",
    icon: "📋",
    color: "#059669",
    external: false,
  },
  {
    href: "/insights/infographics/",
    title: "Infographics",
    desc: "Visual guides and academic infographics covering dissertation structure, referencing styles, research methodologies, and more.",
    icon: "📊",
    color: "#7c3aed",
    external: false,
  },
  {
    href: "/insights/storyboard/",
    title: "Storyboard",
    desc: "Get to know how we handle our clients through illustrated storyboards showing our expert writing and research process.",
    icon: "🎬",
    color: "#b45309",
    external: false,
  },
  {
    href: "/insights/videos-and-gif/",
    title: "Videos & GIFs",
    desc: "Watch video guides and animated explanations on academic writing, research methods, and how to make the most of Tutors India's services.",
    icon: "🎥",
    color: "#dc2626",
    external: false,
  },
  {
    href: "/insights/check-list/",
    title: "Checklist",
    desc: "Academic writing checklists to ensure your dissertation, essay, or assignment meets all requirements before submission.",
    icon: "✅",
    color: "#059669",
    external: false,
  },
  {
    href: "/insights/fact-sheet/",
    title: "Fact Sheet",
    desc: "Quick-reference fact sheets covering key academic writing rules, referencing formats, and university submission guidelines.",
    icon: "📑",
    color: "#0284c7",
    external: false,
  },
  {
    href: "/insights/template/",
    title: "Template",
    desc: "Downloadable academic templates for dissertations, research proposals, literature reviews, and other academic papers.",
    icon: "📐",
    color: "#6b7280",
    external: false,
  },
  {
    href: "/latest-research-trends/",
    title: "Latest Research Trends",
    desc: "Choose your topic from our curated latest research trends. Stay current with emerging methodologies and innovations across all disciplines.",
    icon: "🔬",
    color: "#1a2a6c",
    external: false,
  },
  {
    href: "/future-research-directions/",
    title: "Future Research Directions",
    desc: "Explore future research directions and emerging opportunities across all academic fields. Find your next research agenda.",
    icon: "🔭",
    color: "#2563b0",
    external: false,
  },
  {
    href: "/insights/press-release/",
    title: "Press Release",
    desc: "Official press releases and media announcements from Tutors India — company milestones, new services, and academic partnerships.",
    icon: "📰",
    color: "#374151",
    external: false,
  },
  {
    href: "/news/",
    title: "News",
    desc: "Latest academic and higher education news — AI in academia, assessment policy changes, and university updates from around the world.",
    icon: "🗞️",
    color: "#0284c7",
    external: false,
  },
  {
    href: "/how-to-artcile/",
    title: "How To Articles",
    desc: "Step-by-step how-to articles on academic writing, research skills, referencing styles, and using academic databases effectively.",
    icon: "📖",
    color: "#059669",
    external: false,
  },
];

const externalLinks = [
  { href: "https://www.slideshare.net/tutorsindia", label: "SlideShare", icon: "🖥️", desc: "Academic presentations and research slides" },
  { href: "https://www.quora.com/profile/Jacob-Ethan-28", label: "Quora", icon: "💬", desc: "Q&A on academic writing and research" },
  { href: "https://tutorsindia.tumblr.com", label: "Tumblr", icon: "📷", desc: "Academic tips and study inspiration" },
  { href: "https://sheffield.academia.edu/TutorsIndia", label: "Academia.edu", icon: "🎓", desc: "Academic papers and research publications" },
  { href: "https://tutorsindia.wordpress.com", label: "WordPress Blog", icon: "✍️", desc: "Extended articles and academic guides" },
];

export default function InsightsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "52px 20px 44px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <span style={{ color: "#fff" }}>Insights</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.6rem,3vw,2.3rem)", marginBottom: "12px" }}>
            Insights
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "0.97rem", maxWidth: "680px", marginBottom: "20px" }}>
            Academic research trends, industry news, case studies, practical resources, and expert guides for students and researchers worldwide.
          </p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Link href="/latest-research-trends/" style={{ padding: "10px 24px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "0.96rem" }}>Research Trends</Link>
            <Link href="/blog/" style={{ padding: "10px 24px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, fontSize: "0.96rem" }}>Read Our Blog</Link>
          </div>
        </div>
      </section>

      {/* Main insight cards grid */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "44px 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", color: "#1a2a6c", marginBottom: "8px" }}>
          All Insights & Resources
        </h2>
        <p style={{ color: "#666", fontSize: "0.96rem", marginBottom: "28px" }}>
          {insightCards.length} sections available — click any card to explore
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "18px" }}>
          {insightCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              style={{
                display: "flex", flexDirection: "column", gap: "10px",
                background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px",
                padding: "22px", textDecoration: "none",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                borderTop: `4px solid ${card.color}`,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "1.6rem" }}>{card.icon}</span>
                <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "0.95rem", fontWeight: 700, color: card.color }}>{card.title}</h3>
              </div>
              <p style={{ fontSize: "0.83rem", color: "#555", lineHeight: 1.65, flex: 1 }}>{card.desc}</p>
              <span style={{ fontSize: "0.78rem", color: "#e87722", fontWeight: 700 }}>Explore →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* External platforms */}
      <section style={{ background: "#f5f6fa", padding: "40px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", color: "#1a2a6c", marginBottom: "20px" }}>
            Find Us On Other Platforms
          </h2>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            {externalLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: "8px",
                  padding: "10px 18px", background: "#fff",
                  border: "1px solid #dde2ef", borderRadius: "8px",
                  textDecoration: "none", color: "#1a2a6c",
                  fontSize: "0.94rem", fontWeight: 600,
                  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                }}
              >
                <span style={{ fontSize: "1.1rem" }}>{l.icon}</span>
                {l.label}
                <span style={{ fontSize: "0.7rem", color: "#888" }}>↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Quick nav to research resources */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "36px 20px" }}>
        <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "14px" }}>Related Resources</h3>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {[
            { label: "Essays", href: "/essays/" },
            { label: "Examples", href: "/examples/" },
            { label: "Dissertation Titles", href: "/title/" },
            { label: "Dissertation Topics", href: "/topic/" },
            { label: "Sample Works", href: "/our-sample-works/" },
            { label: "Referencing Styles", href: "/referencing-and-citation-manual-of-styles/" },
          ].map((l) => (
            <Link key={l.href} href={l.href} style={{ padding: "8px 16px", border: "1.5px solid #1a2a6c", color: "#1a2a6c", borderRadius: "5px", fontSize: "0.85rem", fontWeight: 600 }}>{l.label}</Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "48px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: "10px" }}>Need Academic Writing Help?</h2>
        <p style={{ color: "#c5d5f0", fontSize: "0.93rem", marginBottom: "20px" }}>Our team of PhD-qualified experts can assist with every stage of your academic research and writing.</p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 30px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 30px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
