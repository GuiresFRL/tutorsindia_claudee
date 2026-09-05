import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import type { Metadata } from "next";
import { serviceCategories } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Our Services — Academic Writing & Editing",
  description: "Comprehensive academic services including Masters & PhD dissertation writing, coursework, editing, publication support and development from Tutors India.",
  alternates: { canonical: "https://www.tutorsindia.com/our-services/" },
};

export default function OurServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Our Services" }]} />
      <section style={{ background: "linear-gradient(135deg,var(--navy) 0%,#2563b0 100%)", color: "#fff", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "12px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link> / Our Services
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.6rem,3vw,2.2rem)", marginBottom: "12px" }}>Our Services</h1>
            <p style={{ color: "#c5d5f0", fontSize: "1.05rem", marginBottom: "20px" }}>Writing, Editing, Statistics, Designing, Coding &amp; Programming Services</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "10px 24px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "0.96rem" }}>Order Now</Link>
              <Link href="/contact-us/" style={{ padding: "10px 24px", border: "2px solid rgba(255,255,255,0.45)", color: "#fff", borderRadius: "5px", fontWeight: 600, fontSize: "0.96rem" }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/samples/dissertation-samples.webp" alt="Academic experts collaborating" loading="lazy" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.78rem", color: "#c5d5f0", lineHeight: 1.6 }}>Trusted Academic<br />Writing &amp; Editing<br />Since 2001</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      <section style={{ maxWidth: "1200px", margin: "60px auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "28px" }} className="services-grid">
          {serviceCategories.map((cat) => (
            <div key={cat.slug} style={{ border: "1px solid var(--border)", borderRadius: "12px", overflow: "hidden" }}>
              <div style={{ background: "var(--navy)", color: "#fff", padding: "20px 24px" }}>
                <span style={{ fontSize: "2rem" }}>{cat.icon}</span>
                <h2 style={{ fontSize: "1.2rem", fontWeight: 700, marginTop: "8px" }}>{cat.title}</h2>
              </div>
              <ul style={{ padding: "16px 24px", listStyle: "none" }}>
                {cat.services.slice(0, 6).map((svc) => (
                  <li key={svc.href} style={{ padding: "8px 0", borderBottom: "1px solid var(--border)", fontSize: "0.96rem" }}>
                    <Link href={svc.href} style={{ color: "var(--blue)", fontWeight: 500 }}>{svc.title}</Link>
                  </li>
                ))}
              </ul>
              <div style={{ padding: "0 24px 20px" }}>
                <Link href={`/our-services/${cat.slug}/`} style={{ padding: "8px 18px", background: "var(--orange)", color: "#fff", borderRadius: "5px", fontSize: "0.85rem", fontWeight: 600 }}>
                  View All →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @media(max-width:768px){.services-grid{grid-template-columns:1fr 1fr!important;}}
        @media(max-width:500px){.services-grid{grid-template-columns:1fr!important;}}
      `}</style>
    </>
  );
}
