import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
export const metadata: Metadata = { title: "Software Development Services | Custom Applications", description: "Expert Software Development Services. Custom software, web apps, mobile apps, enterprise systems. Agile methodology. All industries. Tutors India." };
const services = [
  { icon: "🖥️", title: "Custom Software Development", desc: "Bespoke software solutions tailored to your specific academic or business requirements — desktop, web, and enterprise applications." },
  { icon: "📱", title: "Mobile App Development", desc: "iOS and Android mobile application development with intuitive UX/UI design, backend integration, and comprehensive testing." },
  { icon: "🌐", title: "Web Application Development", desc: "Full-stack web application development using modern frameworks — React, Angular, Vue.js, Node.js, Django, Spring Boot." },
  { icon: "🏢", title: "Enterprise Systems", desc: "ERP, CRM, HR systems, and large-scale enterprise software development with scalability, security, and performance in mind." },
  { icon: "🔌", title: "API Development", desc: "RESTful and GraphQL API design and development, third-party API integration, and microservices architecture." },
  { icon: "☁️", title: "Cloud Solutions", desc: "Cloud-native application development on AWS, Azure, and Google Cloud — serverless, containerisation, and DevOps CI/CD pipelines." },
];
const faqs = [
  { q: "What types of software development projects do you handle?", a: "Our service covers a broad range of custom software development in various domains and verticals. We serve mid and large organisations, universities, and software product companies across multiple industries including retail, financial services, manufacturing, healthcare, and education." },
  { q: "What is your development methodology?", a: "We follow Agile/Scrum methodology with iterative development, sprint planning, regular client updates, and continuous delivery. We integrate TDD (Test-Driven Development), BDD (Behaviour-Driven Development), and DevOps practices to ensure high-quality, maintainable code with zero defects." },
  { q: "How do you manage project timelines?", a: "We create comprehensive, detailed project plans during the strategising phase to estimate resources involved. This, combined with a metrics-driven approach, enables our clients to get maximum benefit. We guarantee on-time delivery with minor changes addressed within 24 working hours and significant changes within 48 working hours." },
  { q: "Do you provide source code with the project?", a: "Yes. All software development projects include full source code, documentation, deployment guides, and technical specifications. All code is original and developed specifically for your project. NDA-signed developers ensure complete confidentiality." },
  { q: "Can you scale the software after initial delivery?", a: "Yes. We engineer scalable and high-performing software solutions to meet the challenges of our clients. Our lean approach ensures niche features can be added or removed with ease, which is not possible with off-the-shelf software solutions. The solution syncs well with business operations and can be scaled quickly." },
];
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  }))
};
export default function SoftwareDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}<Link href="/our-services/development/" style={{ color: "#a0b8e0" }}>Development</Link>{" / "}<span style={{ color: "#fff" }}>Software Development</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>Custom Software Development Services</h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>Tutors India offers a broad range of custom software development services in various domains and verticals. We architect and engineer scalable, high-performing software solutions — serving mid and large organisations, universities, and software product companies across multiple industries.</p>
            <p style={{ color: "#f9c74f", fontSize: "0.92rem", fontWeight: 600, marginBottom: "20px" }}>Agile · TDD/BDD · DevOps · Cloud-Native · Scalable Architecture</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/services/primary-secondary-research.webp" alt="Research and development planning" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>Agile · Scrum<br />TDD/BDD<br />DevOps CI/CD</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px", marginBottom: "28px" }} className="three-col-grid">
          {services.map(s => (<div key={s.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px" }}><div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{s.icon}</div><h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{s.title}</h3><p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.65 }}>{s.desc}</p></div>))}
        </div>
        <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "24px", marginBottom: "28px" }}>
          <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "14px" }}>Our Development Team</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "12px" }} className="three-col-grid">
            {[{ r: "Frontend Engineers", d: "User interface & experience development" }, { r: "Backend Engineers", d: "Server-side logic & background components" }, { r: "QA Engineers", d: "Quality assurance & bug-free delivery" }, { r: "UX/UI Designers", d: "Intuitive, engaging design systems" }, { r: "DevOps Engineers", d: "Development, operations & testing coordination" }, { r: "Business Analysts", d: "IT-business bridge & requirement analysis" }].map(m => (
              <div key={m.r} style={{ background: "rgba(255,255,255,0.1)", borderRadius: "8px", padding: "12px" }}>
                <div style={{ fontSize: "0.88rem", fontWeight: 700, marginBottom: "3px" }}>{m.r}</div>
                <div style={{ fontSize: "0.76rem", color: "#c5d5f0" }}>{m.d}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ marginBottom: "28px" }}><h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Frequently Asked Questions</h2><FaqAccordion faqs={faqs} /></div>
      </section>
      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Build Your Custom Software Solution</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>Agile Development · Scalable Architecture · All Industries · Response in 30 min</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
