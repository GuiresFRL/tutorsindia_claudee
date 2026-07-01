import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Centre — Support & Account Management",
  description: "Tutors India Customer Centre — track your order, request revisions, contact support, download your work. 24/7 support for all clients.",
};

const supportOptions = [
  { icon: "📞", title: "Phone Support", desc: "Call our UK or India office for immediate assistance. Available Monday–Saturday 9AM–9PM, Sunday 10AM–6PM.", ukPhone: "+44-1143520021", indiaPhone: "+91 8754446690" },
  { icon: "✉️", title: "Email Support", desc: "Send your query to our support team. Response guaranteed within 30 minutes during business hours.", email: "info@tutorsindia.com", feedback: "feedback@tutorsindia.com" },
  { icon: "💬", title: "WhatsApp Support", desc: "Quick queries and order tracking via WhatsApp. Available 24/7 for urgent matters.", whatsapp: "+91 8754446690" },
  { icon: "🌐", title: "Live Chat", desc: "Chat directly with our support team through the website for instant assistance with any query.", action: "Available on website" },
];

const selfServiceLinks = [
  { icon: "📋", title: "Place a New Order", desc: "Submit your requirements and receive a quote within 30 minutes.", href: "/order-now/" },
  { icon: "❓", title: "Frequently Asked Questions", desc: "Find answers to common questions about our services, payment, and delivery.", href: "/faq/" },
  { icon: "💡", title: "Ask an Expert", desc: "Free consultation with our PhD-qualified subject matter experts.", href: "/ask-an-expert/" },
  { icon: "💰", title: "Pricing", desc: "View our transparent pricing for all academic writing services.", href: "/pricing/" },
  { icon: "📖", title: "Help Guide", desc: "Academic writing guides and dissertation resources for students.", href: "/help-guide/" },
  { icon: "⭐", title: "Testimonials", desc: "Read real reviews from 2,00,000+ satisfied scholars worldwide.", href: "/testimonials/" },
];

const officeHours = [
  { office: "UK Office (Manchester)", hours: [{ day: "Monday – Saturday", time: "09:00 – 21:00 BST" }, { day: "Sunday", time: "10:00 – 18:00 BST" }] },
  { office: "India Office (Chennai)", hours: [{ day: "Monday – Saturday", time: "09:00 – 21:00 IST" }, { day: "Sunday", time: "10:00 – 18:00 IST" }] },
];

export default function CustomerCentrePage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<span style={{ color: "#fff" }}>Customer Centre</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.6rem,3vw,2.3rem)", marginBottom: "14px" }}>Customer Centre</h1>
          <p style={{ color: "#c5d5f0", fontSize: "1.05rem", lineHeight: 1.75, maxWidth: "700px", marginBottom: "22px" }}>
            Welcome to the Tutors India Customer Centre. Get support, manage your orders, track deliveries, request revisions, and access all client resources in one place. Our team is available 24/7 to assist you.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
            <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Support</Link>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>

        {/* Support Options */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px", textAlign: "center" }}>Get Support</h2>
        <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "28px", textAlign: "center" }}>Multiple ways to reach our support team — response guaranteed within 30 minutes</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "20px", marginBottom: "48px" }} className="two-col-grid">
          {supportOptions.map(opt => (
            <div key={opt.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "24px" }}>
              <div style={{ fontSize: "2rem", marginBottom: "10px" }}>{opt.icon}</div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "8px" }}>{opt.title}</h3>
              <p style={{ fontSize: "0.84rem", color: "#666", lineHeight: 1.65, marginBottom: "12px" }}>{opt.desc}</p>
              {opt.ukPhone && (
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <a href={`tel:${opt.ukPhone.replace(/[^+\d]/g, "")}`} style={{ fontSize: "0.9rem", fontWeight: 700, color: "#1a2a6c" }}>🇬🇧 {opt.ukPhone}</a>
                  <a href={`tel:${opt.indiaPhone?.replace(/[^+\d]/g, "")}`} style={{ fontSize: "0.9rem", fontWeight: 700, color: "#1a2a6c" }}>🇮🇳 {opt.indiaPhone}</a>
                </div>
              )}
              {opt.email && (
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <a href={`mailto:${opt.email}`} style={{ fontSize: "0.9rem", fontWeight: 700, color: "#e87722" }}>{opt.email}</a>
                  <a href={`mailto:${opt.feedback}`} style={{ fontSize: "0.82rem", color: "#666" }}>{opt.feedback}</a>
                </div>
              )}
              {opt.whatsapp && <a href={`https://wa.me/${opt.whatsapp.replace(/[^+\d]/g, "")}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.9rem", fontWeight: 700, color: "#25d366" }}>{opt.whatsapp}</a>}
              {opt.action && <span style={{ fontSize: "0.9rem", color: "#666" }}>{opt.action}</span>}
            </div>
          ))}
        </div>

        {/* Office Hours */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "48px" }} className="two-col-grid">
          {officeHours.map(office => (
            <div key={office.office} style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "24px" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "14px" }}>🕐 {office.office}</h3>
              {office.hours.map(h => (
                <div key={h.day} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", fontSize: "0.85rem" }}>
                  <span style={{ color: "#c5d5f0" }}>{h.day}</span>
                  <span style={{ color: "#f9c74f", fontWeight: 600 }}>{h.time}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Self-Service Links */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px", textAlign: "center" }}>Self-Service Resources</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px", marginBottom: "40px" }} className="three-col-grid">
          {selfServiceLinks.map(link => (
            <Link key={link.title} href={link.href} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px", display: "block" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{link.icon}</div>
              <h3 style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "5px" }}>{link.title}</h3>
              <p style={{ fontSize: "0.8rem", color: "#666", lineHeight: 1.55 }}>{link.desc}</p>
            </Link>
          ))}
        </div>

        {/* Guarantee panel */}
        <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "32px", border: "1px solid #dde2ef" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px", textAlign: "center" }}>Our Client Commitments</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "14px" }} className="four-col-grid">
            {[
              { icon: "⏱", t: "30 min Response", d: "During business hours" },
              { icon: "🔁", t: "Unlimited Revisions", d: "Free, even post-delivery" },
              { icon: "🛡️", t: "< 5% Plagiarism", d: "Turnitin certificate" },
              { icon: "🔒", t: "100% Confidential", d: "NDA-signed writers" },
            ].map(c => (
              <div key={c.t} style={{ textAlign: "center", padding: "14px" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "6px" }}>{c.icon}</div>
                <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "3px" }}>{c.t}</div>
                <div style={{ fontSize: "0.75rem", color: "#666" }}>{c.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style>{`@media(max-width:768px){.two-col-grid{grid-template-columns:1fr!important;}.three-col-grid{grid-template-columns:1fr!important;}} @media(max-width:900px){.four-col-grid{grid-template-columns:1fr 1fr!important;}}`}</style>
    </>
  );
}
