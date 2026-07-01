import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
export const metadata: Metadata = { title: "Web Solutions & Development Services", description: "Expert Web Solutions. E-commerce, corporate websites, web applications, CMS, SEO. React, Angular, WordPress, Shopify. Full web development services. Tutors India." };
const services = [
  { icon: "🌐", title: "Corporate Website Development", desc: "Professional corporate websites designed to represent your brand — responsive, fast, SEO-optimised, and built for conversion." },
  { icon: "🛒", title: "E-Commerce Solutions", desc: "Full e-commerce website development — Shopify, WooCommerce, Magento — with product management, payment gateway integration, and order management." },
  { icon: "📱", title: "Responsive Web Design", desc: "Mobile-first responsive web design ensuring perfect display across all devices — mobile, tablet, and desktop." },
  { icon: "⚙️", title: "CMS Development", desc: "WordPress, Drupal, and Joomla development — custom themes, plugins, and content management systems tailored to your needs." },
  { icon: "🔧", title: "Web Application Development", desc: "React, Angular, Vue.js, and Node.js web applications with REST API integration, real-time features, and scalable architecture." },
  { icon: "📊", title: "SEO & Digital Marketing", desc: "Search engine optimisation, Google Analytics setup, meta tags, schema markup, page speed optimisation, and digital marketing integration." },
];
const faqs = [
  { q: "What web solutions do you offer?", a: "Due to the increase in penetration of the internet, today more and more companies are going online. We provide full web development, e-commerce, and digital solutions tailored to your requirements — from simple corporate websites to complex web applications and e-commerce platforms." },
  { q: "Which technologies do you use for web development?", a: "We use React, Angular, Vue.js, and Next.js for frontend development; Node.js, Python (Django/Flask), PHP (Laravel), and Java (Spring Boot) for backend development; MySQL, PostgreSQL, MongoDB for databases; and AWS, Azure, Google Cloud for hosting and deployment." },
  { q: "Can you help students with web design coursework?", a: "Yes. Recently students have shown great interest in pursuing web design courses as part of their career. We provide academic web design and development project support — from simple HTML/CSS projects to full-stack web application development assignments." },
  { q: "Do you provide ongoing website maintenance?", a: "Yes. We provide ongoing website maintenance, hosting support, security updates, performance optimisation, content updates, and feature additions. We offer flexible maintenance packages to keep your website running smoothly after delivery." },
  { q: "How long does it take to build a website?", a: "Timeline depends on complexity. A simple corporate website takes 1–2 weeks. E-commerce sites typically take 3–6 weeks. Complex web applications may take 2–3 months. Contact us with your specific requirements for an accurate project timeline and cost estimate." },
];
export default function WebSolutionsPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}<Link href="/our-services/development/" style={{ color: "#a0b8e0" }}>Development</Link>{" / "}<span style={{ color: "#fff" }}>Web Solutions</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>Web Solutions &amp; Development Services</h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>Due to the increase in penetration of the Internet, today more and more companies are going online. We provide full web development, e-commerce, and digital solutions tailored to your requirements — helping businesses and academic institutions establish and grow their online presence.</p>
            <p style={{ color: "#f9c74f", fontSize: "0.92rem", fontWeight: 600, marginBottom: "20px" }}>React · Angular · WordPress · Shopify · Node.js · Full-Stack</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/tutorsindia-logo-hd.jpg" alt="Tutors India" style={{ width: "90px", height: "90px", objectFit: "contain", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>React · Next.js<br />WordPress · Shopify<br />Full-Stack Dev</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px", marginBottom: "28px" }} className="three-col-grid">
          {services.map(s => (<div key={s.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px" }}><div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{s.icon}</div><h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{s.title}</h3><p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.65 }}>{s.desc}</p></div>))}
        </div>
        <div style={{ marginBottom: "28px" }}><h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Frequently Asked Questions</h2><FaqAccordion faqs={faqs} /></div>
      </section>
      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Build Your Web Presence with Expert Developers</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>React · WordPress · E-Commerce · SEO · All Industries · Response in 30 min</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
