import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { serviceCategories } from "@/lib/data/services";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return serviceCategories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = serviceCategories.find((c) => c.slug === category);
  if (!cat) return {};
  return {
    title: `${cat.title} Services`,
    description: `Expert ${cat.title} services from Tutors India — ${cat.services[0].description.slice(0, 120)}`,
  };
}

const categoryIntros: Record<string, { headline: string; intro: string }> = {
  "masters-dissertation-writing-services": {
    headline: "Are you looking for UK Master's and MBA Dissertation Writing or Tutoring Help?",
    intro: "Tutors India provides dissertation writing and tutoring assistance exclusively for UK and Australian universities. The US & UK writers at Tutors India aim at inculcating knowledge within students and building great confidence to submit their dissertation successfully. We not only provide MBA writing assistance but also tutoring at every dissertation stage.",
  },
  "phd-dba-dissertation": {
    headline: "Are you looking for MBA / DBA Writing & Editing Services?",
    intro: "You will be amazed with the in-depth research carried out to complete your dissertation. MBA or DBA thesis/dissertation writing requires extensive referencing search, including textbooks, journal articles, monographs, newspaper articles etc. We provide you the full articles used for referencing which helps you to check the authentication.",
  },
  "coursework-writing": {
    headline: "Are you struggling with your UK Master's M.Sc., M.Phil, MA, M.Ed. and MBA, DBA PhD Coursework Writing?",
    intro: "Tutors India offers excellent custom writing services by professional expert writers from the UK. We make a difference in terms of deadline and overall grade. The US & UK writers at Tutors India aim at inculcating knowledge within students and building great confidence in their academic work.",
  },
  "publication-support": {
    headline: "Are you looking to edit, redraw, rewrite, format your manuscript according to journal-specific guidelines?",
    intro: "Then you have reached the right place. We make a difference in terms of deadline and quality. A good manuscript writing and journal article writing not only requires high quality research but also should be able to present your findings and conclusion precisely with adherence to extensive journal guidelines.",
  },
  "development": {
    headline: "Expert Coding, Programming, Software Development & Data Analytics Services",
    intro: "Tutors India with their team of skilled expertise offers coding, algorithm development, software programming, big data analytics, animation, graphic design, web solutions, online tutoring and e-learning content development services to scholars across the world.",
  },
  "editing-services": {
    headline: "Professional Academic Editing, Proofreading & Language Services",
    intro: "The editing service has always been a requirement in any sort of academics, copywriting and especially in the research field. Our editors are native English speakers with industry experience and educational degrees from international and top-ranked universities, ensuring your work meets the highest academic standards.",
  },
};

const qualityFeatures = [
  { icon: "🛡️", title: "Plagiarism Free", desc: "Less than 5% or 0% plagiarism guaranteed. Turnitin certificate provided with every order." },
  { icon: "🔁", title: "Unlimited Revisions", desc: "Free unlimited revisions as per commitment, even after project completion." },
  { icon: "⏱", title: "On-Time Delivery", desc: "95–98% on-time delivery. Minor changes within 24 hours; significant changes within 48 hours." },
  { icon: "🎓", title: "Expert Writers", desc: "2000+ PhD/Masters qualified writers from UK, US, Australia, Canada, New Zealand, and more." },
  { icon: "🔒", title: "100% Confidential", desc: "NDA-signed writers, unique project codes, 128-bit SSL encryption for all financial data." },
  { icon: "📚", title: "Fully Referenced", desc: "Latest peer-reviewed articles from Web of Science, ProQuest, Google Scholar, Emerald, JSTOR, Elsevier." },
];

export default async function ServiceCategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = serviceCategories.find((c) => c.slug === category);
  if (!cat) notFound();

  const intro = categoryIntros[category] ?? {
    headline: `${cat.title} Services`,
    intro: `Tutors India provides comprehensive ${cat.title.toLowerCase()} support for UK, US, and Australian university students at all academic levels.`,
  };

  const half = Math.ceil(cat.services.length / 2);

  return (
    <>
      <section style={{ background: "linear-gradient(135deg,var(--navy) 0%,#2563b0 100%)", color: "#fff", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "12px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link> / <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link> / {cat.title}
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", margin: "0 0 14px" }}>{intro.headline}</h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", maxWidth: "760px", lineHeight: 1.75, marginBottom: "22px" }}>{intro.intro}</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "11px 26px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "0.92rem" }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "11px 26px", border: "2px solid rgba(255,255,255,0.45)", color: "#fff", borderRadius: "5px", fontWeight: 600, fontSize: "0.92rem" }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/samples/dissertation-samples.webp" alt="Academic experts collaborating" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.78rem", color: "#c5d5f0", lineHeight: 1.6 }}>Trusted Academic<br />Writing &amp; Editing<br />Since 2001</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      {/* Services listing */}
      <section style={{ maxWidth: "1200px", margin: "60px auto", padding: "0 20px" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--navy)", marginBottom: "24px" }}>
          What Services do we offer under {cat.title}?
        </h2>
        <div style={{ background: "#fff", borderRadius: "12px", padding: "28px", border: "1px solid var(--border)" }}>
          <div className="service-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
            <div style={{ paddingRight: "20px" }}>
              {cat.services.slice(0, half).map((svc) => (
                <div key={svc.href} style={{ padding: "16px 0", borderBottom: "1px solid var(--border)" }}>
                  <Link href={svc.href}>
                    <h3 style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--blue)", marginBottom: "4px" }}>{svc.title}</h3>
                  </Link>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-mid)", lineHeight: 1.6 }}>{svc.description}</p>
                  <Link href={svc.href} style={{ fontSize: "0.82rem", color: "var(--orange)", fontWeight: 600, marginTop: "6px", display: "inline-block" }}>Learn More →</Link>
                </div>
              ))}
            </div>
            <div style={{ paddingLeft: "20px", borderLeft: "1px solid var(--border)" }} className="service-right">
              {cat.services.slice(half).map((svc) => (
                <div key={svc.href} style={{ padding: "16px 0", borderBottom: "1px solid var(--border)" }}>
                  <Link href={svc.href}>
                    <h3 style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--blue)", marginBottom: "4px" }}>{svc.title}</h3>
                  </Link>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-mid)", lineHeight: 1.6 }}>{svc.description}</p>
                  <Link href={svc.href} style={{ fontSize: "0.82rem", color: "var(--orange)", fontWeight: 600, marginTop: "6px", display: "inline-block" }}>Learn More →</Link>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: "#fffbe6", borderLeft: "4px solid var(--orange)", padding: "14px 18px", borderRadius: "0 6px 6px 0", marginTop: "20px", fontSize: "0.94rem", color: "#555" }}>
            <strong style={{ color: "var(--orange-dark)" }}>Note:</strong> {cat.note}
          </div>
        </div>
      </section>

      {/* Quality features */}
      <section style={{ background: "var(--gray)", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--navy)", textAlign: "center", marginBottom: "32px" }}>
            Why Choose Tutors India for {cat.title}?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }} className="three-col-grid">
            {qualityFeatures.map((f) => (
              <div key={f.title} style={{ background: "#fff", borderRadius: "10px", padding: "20px", border: "1px solid var(--border)" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{f.icon}</div>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--navy)", marginBottom: "6px" }}>{f.title}</h3>
                <p style={{ fontSize: "0.83rem", color: "var(--text-mid)", lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free deliverables */}
      <section style={{ maxWidth: "1200px", margin: "60px auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "start" }} className="two-col-grid">
          <div>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--navy)", marginBottom: "16px" }}>Free Deliverables with Every Order</h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {[
                "Abstract or Executive Summary",
                "Redrawn graphs and tables",
                "Statistical or textual data analysis",
                "SPSS/software screenshots documenting analysis",
                "Free tutoring sessions for the work",
                "Free research articles used in writing (PDF format)",
                "Questionnaire or interview guide development",
                "Formatting and referencing included",
                "Appendices at no additional cost",
              ].map((item) => (
                <li key={item} style={{ display: "flex", gap: "8px", padding: "8px 0", borderBottom: "1px solid var(--border)", fontSize: "0.94rem", color: "var(--text-mid)" }}>
                  <span style={{ color: "var(--orange)", fontWeight: 700 }}>✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ background: "var(--navy)", color: "#fff", borderRadius: "12px", padding: "28px" }}>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "14px" }}>Our Expert Team</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {[
                "2000+ experts across subjects & countries",
                "USA, UK, Australia, Canada, New Zealand, Germany, France, Russia, Ukraine",
                "PhD and Masters degree holders",
                "Trained at Harvard, Oxford, London Business School, University of Birmingham",
                "Minimum 5 years research experience",
                "NDA-signed and background-checked",
                "24/7 availability across all time zones",
              ].map((item) => (
                <li key={item} style={{ display: "flex", gap: "8px", padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", fontSize: "0.94rem", color: "#c5d5f0" }}>
                  <span style={{ color: "#f9c74f" }}>→</span> {item}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
              <Link href="/order-now/" style={{ flex: 1, textAlign: "center", padding: "10px", background: "var(--orange)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Order Now</Link>
              <Link href="/contact-us/" style={{ flex: 1, textAlign: "center", padding: "10px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
