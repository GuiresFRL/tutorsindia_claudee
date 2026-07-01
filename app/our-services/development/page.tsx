import Link from "next/link";
import type { Metadata } from "next";
import { serviceCategories } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Development Services | Coding, Software, Big Data, Animation",
  description: "Expert Development Services — Coding, Algorithm, Software Programming, Big Data Analytics, Animation, Graphic Design, Web Solutions, E-Learning. Tutors India.",
};

const cat = serviceCategories.find(c => c.slug === "development")!;

const capabilities = [
  { icon: "/images/capabilities/lean-agile.png", title: "Engineering Excellence", desc: "We are committed to engineering excellence backed by software-driven thinking and a product mindset. We integrate multiple business needs with a single and powerful one-stop software solution. Niche features can be added or removed with ease." },
  { icon: "/images/capabilities/lean-approach.png", title: "Lean Approach", desc: "Our lean approach involves minimising the wastage of everything — money, time, and infrastructure. We create comprehensive, detailed plans during the strategising phase to estimate resources involved. This combined with a metrics-driven approach enables maximum benefit from investments." },
  { icon: "/images/capabilities/technical.png", title: "Low Technical Debt", desc: "We ensure that customised products carry minimum technical debt due to modern practices such as TDD, BDD, DevOps, and automation-first approach. All strategies, processes, and development standards ensure we deliver high quality code with zero defects." },
  { icon: "/images/capabilities/smart-app.png", title: "Smart Applications", desc: "With the business world moving towards digitalisation, we build products for a digital-first world. We leverage AI-ML, IoT, cloud-native philosophy, and cutting-edge tech — keeping user needs at the centre of the product." },
];

const teamRoles = [
  { icon: "💻", role: "Frontend Engineers", desc: "Responsible for developing the 'visible' part of the project — coding and testing user interface elements and functionality." },
  { icon: "⚙️", role: "Backend Engineers", desc: "Experts that take care of everything backstage — developing inner logic and background components." },
  { icon: "🔍", role: "QA Engineers", desc: "In charge of the quality of the entire development lifecycle — ensuring bug-free products and optimal quality processes." },
  { icon: "🎨", role: "UX/UI Designers", desc: "Responsible for ensuring the user experience is intuitive, simple, and engaging." },
  { icon: "🚀", role: "DevOps Engineers", desc: "Professionals who better coordinate development, operations, and testing efforts." },
  { icon: "📊", role: "Business Analysts", desc: "Bridges between IT and business — evaluating processes, determining requirements, and offering data-driven suggestions." },
];

const testimonials = [
  { quote: "Honestly, I didn't expect this level of quality. The team understood exactly what I needed and delivered work that felt genuinely professional. My confidence went from stressed to unstoppable.", author: "Amelia Brooks", location: "UK", subject: "Big Data Analytics", avatar: "/images/testimonials/amelia-brooks.webp" },
  { quote: "I was stuck, frustrated, and running out of time. Tutors India stepped in at the perfect moment and turned everything around faster than I imagined. Worth every bit.", author: "Oliver Bennett", location: "UK", subject: "Big Data Analytics", avatar: "/images/testimonials/oliver-bennett.webp" },
  { quote: "The attention to detail was incredible. It didn't feel like I was working with a service provider — it felt like I had an expert academic partner guiding me throughout.", author: "Layla Al Mansoori", location: "", subject: "", avatar: "/images/testimonials/layla-al-mansoori.webp" },
  { quote: "My research finally started making sense after working with this team. Their guidance simplified complex ideas and gave my project the structure it was missing.", author: "Hassan Al Falasi", location: "UAE", subject: "", avatar: "/images/testimonials/hassan-al-falasi.webp" },
  { quote: "I submitted my work with complete confidence for the first time ever. The quality, formatting, and clarity were all beyond what I hoped for.", author: "Charlotte Reed", location: "UK", subject: "", avatar: "/images/testimonials/charlotte-reed.webp" },
  { quote: "The team handled everything professionally from start to finish. Timely updates, quick responses, and excellent academic quality — exactly what students need during stressful deadlines.", author: "Zain Al Hashmi", location: "UAE", subject: "", avatar: "/images/testimonials/noora-al-zaabi.webp" },
];

const subjects = [
  "Engineering & Technology", "Computer Science & IT", "Business & Management Studies",
  "Natural Sciences & Mathematics", "Economics & Administration", "Biological Sciences",
  "Medicine & Health", "Education & Training", "Arts & Humanities",
  "Agriculture & Forestry", "Journalism & Media", "Hospitality, Leisure & Sports",
];

export default function DevelopmentPage() {
  const half = Math.ceil(cat.services.length / 2);
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}<span style={{ color: "#fff" }}>Development</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.2rem)", lineHeight: 1.3, marginBottom: "14px" }}>
              Do you want to develop, design, engineer, deploy, support, and evolve various software types?
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Then You have reached the right place. We are the leading technology solutions company — architecting and engineering scalable, high-performing software solutions. We serve mid and large organisations, universities, and software product companies across multiple industries including retail, financial services, manufacturing, healthcare, and education.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <a href="https://www.tutorsindia.com/wp-content/uploads/2021/11/Development.pdf" target="_blank" rel="noopener noreferrer" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>📄 Brochure</a>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/tutorsindia-logo-hd.jpg" alt="Tutors India" style={{ width: "90px", height: "90px", objectFit: "contain", marginBottom: "10px" }} />
            <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#f9c74f" }}>2,00,000+</div>
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0" }}>Scholars Served<br />Since 2001</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      <div style={{ background: "#12214a", padding: "16px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: "2,000+", l: "Expert Developers" }, { n: "10 Services", l: "Development" }, { n: "24/7", l: "Support" }, { n: "Agile", l: "Methodology" }, { n: "TDD/BDD", l: "Standards" }, { n: "30 min", l: "Response" }].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
              <div style={{ fontSize: "0.68rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>

        {/* Services listing */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>What Services Do We Offer Under Development?</h2>
        <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "24px" }}>Coding, Software, Big Data, Animation, Graphic Design, Web Solutions, E-Learning and more</p>
        <div style={{ background: "#fff", borderRadius: "12px", border: "1px solid #dde2ef", padding: "28px", marginBottom: "36px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0" }} className="service-two-col">
            <div style={{ paddingRight: "20px" }}>
              {cat.services.slice(0, half).map(svc => (
                <div key={svc.href} style={{ padding: "16px 0", borderBottom: "1px solid #f0f2fa" }}>
                  <Link href={svc.href}><h3 style={{ fontSize: "0.95rem", fontWeight: 600, color: "#2563b0", marginBottom: "5px" }}>{svc.title}</h3></Link>
                  <p style={{ fontSize: "0.84rem", color: "#666", lineHeight: 1.6, marginBottom: "6px" }}>{svc.description}</p>
                  <Link href={svc.href} style={{ fontSize: "0.82rem", color: "#e87722", fontWeight: 600 }}>Learn More →</Link>
                </div>
              ))}
            </div>
            <div style={{ paddingLeft: "20px", borderLeft: "1px solid #dde2ef" }}>
              {cat.services.slice(half).map(svc => (
                <div key={svc.href} style={{ padding: "16px 0", borderBottom: "1px solid #f0f2fa" }}>
                  <Link href={svc.href}><h3 style={{ fontSize: "0.95rem", fontWeight: 600, color: "#2563b0", marginBottom: "5px" }}>{svc.title}</h3></Link>
                  <p style={{ fontSize: "0.84rem", color: "#666", lineHeight: 1.6, marginBottom: "6px" }}>{svc.description}</p>
                  <Link href={svc.href} style={{ fontSize: "0.82rem", color: "#e87722", fontWeight: 600 }}>Learn More →</Link>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: "#fff8f0", borderLeft: "4px solid #e87722", padding: "12px 16px", borderRadius: "0 6px 6px 0", marginTop: "18px", fontSize: "0.86rem", color: "#555" }}>
            <strong style={{ color: "#e87722" }}>Note:</strong> {cat.note}
          </div>
        </div>

        {/* Capabilities */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px" }}>Our Development Capabilities</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px", marginBottom: "40px" }} className="four-col-grid">
          {capabilities.map(c => (
            <div key={c.title} style={{ background: "#fff", borderRadius: "10px", padding: "22px", border: "1px solid #dde2ef", textAlign: "center" }}>
              <img src={c.icon} alt={c.title} style={{ width: "56px", height: "56px", objectFit: "contain", marginBottom: "12px" }} loading="lazy" />
              <h3 style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "8px" }}>{c.title}</h3>
              <p style={{ fontSize: "0.79rem", color: "#666", lineHeight: 1.6 }}>{c.desc}</p>
            </div>
          ))}
        </div>

        {/* Team Roles */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Our Dedicated Project Team</h2>
        <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "20px" }}>A full-stack team of specialists assigned to every project</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px", marginBottom: "40px" }} className="three-col-grid">
          {teamRoles.map(r => (
            <div key={r.role} style={{ background: "#fff", borderRadius: "10px", padding: "20px", border: "1px solid #dde2ef" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{r.icon}</div>
              <h3 style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{r.role}</h3>
              <p style={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.6 }}>{r.desc}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px" }}>What Our Clients Say</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px", marginBottom: "40px" }} className="three-col-grid">
          {testimonials.map((t, i) => (
            <div key={i} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px" }}>
              <div style={{ color: "#e87722", fontSize: "2rem", lineHeight: 1, marginBottom: "6px", fontFamily: "serif" }}>&ldquo;</div>
              <p style={{ color: "#555", fontSize: "0.84rem", lineHeight: 1.7, fontStyle: "italic", marginBottom: "12px" }}>{t.quote}</p>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img src={t.avatar} alt={t.author} style={{ width: "38px", height: "38px", borderRadius: "50%", objectFit: "cover" }} loading="lazy" />
                <div>
                  <div style={{ fontWeight: 700, color: "#1a2a6c", fontSize: "0.84rem" }}>{t.author}</div>
                  {t.location && <div style={{ fontSize: "0.72rem", color: "#888" }}>{t.location}</div>}
                  {t.subject && <div style={{ fontSize: "0.7rem", color: "#e87722" }}>{t.subject}</div>}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subject Areas */}
        <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Industries &amp; Domains We Serve</h2>
          <p style={{ color: "#666", fontSize: "0.86rem", marginBottom: "14px" }}>Retail, Financial Services, Manufacturing, Healthcare, Education and more</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {subjects.map(s => (<span key={s} style={{ padding: "5px 13px", background: "#fff", border: "1.5px solid #dde2ef", borderRadius: "16px", fontSize: "0.79rem", color: "#1a2a6c", fontWeight: 500 }}>{s}</span>))}
          </div>
        </div>
      </section>

      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Ready to Build Your Solution?</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>Response within 30 minutes · Agile Development · On-Time Delivery · 24/7 Support</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>

      <style>{`
        @media(max-width:768px){.service-two-col{grid-template-columns:1fr!important;} .two-col-grid{grid-template-columns:1fr!important;}}
        @media(max-width:900px){.four-col-grid{grid-template-columns:1fr 1fr!important;}}
      `}</style>
    </>
  );
}
