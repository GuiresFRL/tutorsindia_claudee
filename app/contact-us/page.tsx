import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import type { Metadata } from "next";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Tutors India for academic writing, dissertation support, and research assistance. Response within 30 minutes.",
  alternates: { canonical: "https://www.tutorsindia.com/contact-us/" },
};

const contactDetails = [
  { icon: "📞", title: "UK Office", value: "+44-1143520021", href: "tel:+441143520021", sub: "Sheffield / Manchester, UK" },
  { icon: "📞", title: "India Office", value: "+91 8754446690", href: "tel:+918754446690", sub: "Chennai, India" },
  { icon: "✉️", title: "Email", value: "info@tutorsindia.com", href: "mailto:info@tutorsindia.com", sub: "Response within 30 minutes" },
  { icon: "💬", title: "WhatsApp", value: "+91 8754446690", href: "https://wa.me/918754446690", sub: "Available 24/7" },
];

const offices = [
  { code: "UK", country: "United Kingdom", address: "10 Park Place, Manchester M4 4EY" },
  { code: "US", country: "United States", address: "Dallas, Texas, USA" },
  { code: "IN", country: "India", address: "10, Kutty Street, Nungambakkam, Chennai – 600034" },
];

const faqs = [
  { q: "How quickly will I get a response?", a: "We respond to all enquiries within 30 minutes during business hours. For urgent requirements, please call our UK or India office directly." },
  { q: "How do I know my information is safe?", a: "All communications are protected with 128-bit SSL encryption. Your personal information and project details are never shared with third parties. All our writers sign NDAs before working on any project." },
  { q: "Can I speak directly with my writer?", a: "Yes. Once your project is assigned, you can communicate directly with your writer via phone, email, or WhatsApp. You will also have a dedicated project coordinator as your primary point of contact." },
  { q: "What information do I need to provide?", a: "Please provide your subject area, university, level of study (Masters/PhD), word count, deadline, and any specific guidelines from your university. The more detail you provide, the more accurate your quote will be." },
];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Contact Us" }]} />
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,var(--navy) 0%,#2563b0 100%)", color: "#fff", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.85rem", color: "#a0b8e0", marginBottom: "12px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link> / <span style={{ color: "#fff" }}>Contact Us</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.6rem,3vw,2.2rem)", marginBottom: "12px" }}>Contact Us</h1>
            <p style={{ color: "#c5d5f0", fontSize: "1.05rem", maxWidth: "600px", marginBottom: "20px" }}>We respond within 30 minutes. Let us help you achieve academic success with confidence.</p>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              {[
                { icon: "📞", text: "+44-1143520021", href: "tel:+441143520021" },
                { icon: "📞", text: "+91 8754446690", href: "tel:+918754446690" },
              ].map((c) => (
                <a key={c.text} href={c.href} style={{ color: "#fff", fontWeight: 600, fontSize: "0.95rem", display: "flex", gap: "6px", alignItems: "center" }}>
                  {c.icon} {c.text}
                </a>
              ))}
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/samples/dissertation-samples.webp" alt="Academic experts collaborating" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.78rem", color: "#c5d5f0", lineHeight: 1.6 }}>Trusted Academic<br />Writing &amp; Editing<br />Since 2001</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      {/* Main section */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "48px", alignItems: "start" }} className="contact-grid">

        {/* Left: Info */}
        <div>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--navy)", marginBottom: "20px" }}>Get In Touch</h2>

          {contactDetails.map((c) => (
            <div key={c.title} style={{ display: "flex", gap: "16px", padding: "16px 0", borderBottom: "1px solid var(--border)" }}>
              <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{c.icon}</span>
              <div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-light)", textTransform: "uppercase", letterSpacing: "0.04em" }}>{c.title}</div>
                <a href={c.href} style={{ fontSize: "1rem", fontWeight: 600, color: "var(--blue)", display: "block" }}>{c.value}</a>
                <div style={{ fontSize: "0.8rem", color: "var(--text-light)" }}>{c.sub}</div>
              </div>
            </div>
          ))}

          <div style={{ marginTop: "28px" }}>
            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--navy)", marginBottom: "14px" }}>Our Global Offices</h3>
            {offices.map((o) => (
              <div key={o.country} style={{ display: "flex", gap: "12px", padding: "12px 0", borderBottom: "1px solid var(--border)", alignItems: "center" }}>
                <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: "var(--light-blue)", color: "var(--navy)", fontSize: "0.72rem", fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{o.code}</span>
                <div>
                  <div style={{ fontWeight: 600, color: "var(--navy)", fontSize: "0.96rem" }}>{o.country}</div>
                  <div style={{ color: "var(--text-mid)", fontSize: "0.83rem" }}>{o.address}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "28px", background: "var(--light-blue)", borderRadius: "10px", padding: "20px", border: "1px solid var(--border)" }}>
            <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--navy)", marginBottom: "8px" }}>Why Contact Us?</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {[
                "Free, no-obligation consultation",
                "Response within 30 minutes",
                "Customised quote for your exact requirements",
                "Dedicated project coordinator assigned",
                "100% confidential — NDA-signed writers",
              ].map((item) => (
                <li key={item} style={{ display: "flex", gap: "8px", padding: "6px 0", fontSize: "0.85rem", color: "var(--text-mid)" }}>
                  <span style={{ color: "var(--orange)", fontWeight: 700 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/order-now/" style={{ display: "inline-block", marginTop: "14px", padding: "9px 22px", background: "var(--orange)", color: "#fff", borderRadius: "5px", fontWeight: 600, fontSize: "0.94rem" }}>
              Order Now Directly →
            </Link>
          </div>
        </div>

        {/* Right: Form */}
        <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "12px", padding: "32px", boxShadow: "0 4px 16px rgba(0,0,0,0.05)" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--navy)", marginBottom: "6px" }}>Send Us Your Enquiry</h2>
          <p style={{ color: "var(--text-mid)", fontSize: "0.94rem", marginBottom: "22px" }}>Fill in the form below and receive a free, customised quote within 30 minutes.</p>
          <ContactForm />
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "var(--gray)", padding: "56px 20px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--navy)", textAlign: "center", marginBottom: "32px" }}>Common Questions</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="two-col-grid">
            {faqs.map((faq) => (
              <div key={faq.q} style={{ background: "#fff", borderRadius: "10px", padding: "20px", border: "1px solid var(--border)" }}>
                <h4 style={{ fontSize: "0.96rem", fontWeight: 700, color: "var(--navy)", marginBottom: "8px" }}>{faq.q}</h4>
                <p style={{ fontSize: "0.84rem", color: "var(--text-mid)", lineHeight: 1.65 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr!important;}}`}</style>
    </>
  );
}
