import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Tutors India's privacy policy covering data collection, usage, payment terms, and your rights as a user.",
  
  alternates: { canonical: "https://tutorsindia.com/privacy-policy/" },
};

const sections = [
  {
    heading: "Information We Collect",
    content: `<p>When you use Tutors India's services, we may collect the following personal information:</p>
    <ul>
      <li>Full name and contact details (email address, phone number, postal code)</li>
      <li>Financial information required to process payments</li>
      <li>Project details and academic requirements you provide</li>
      <li>Usage data and browser information collected automatically during site visits</li>
    </ul>`,
  },
  {
    heading: "How We Use Your Information",
    content: `<p>Your personal information is used strictly to:</p>
    <ul>
      <li>Process and fulfil your academic support orders</li>
      <li>Communicate project updates, queries, and delivery notifications</li>
      <li>Investigate and prevent fraudulent activity</li>
      <li>Comply with legal and regulatory requirements</li>
      <li>Improve our services and website experience</li>
    </ul>
    <p>We do not sell, rent, or share your personal data with third parties for marketing purposes. Your data is disclosed only with your permission or as required by law.</p>`,
  },
  {
    heading: "Payment & Cancellation",
    content: `<ul>
      <li>All payments are required in advance before order processing commences.</li>
      <li>Cancellations are accepted within <strong>24 hours</strong> of order placement (within <strong>3–6 hours</strong> for rush/urgent orders).</li>
      <li>No refunds are issued once work has commenced.</li>
      <li>Refund processing takes a minimum of <strong>14 working days</strong>.</li>
    </ul>`,
  },
  {
    heading: "Cookies & Tracking",
    content: `<p>Our website uses cookies to enhance your browsing experience and gather anonymous usage statistics. Cookies do not collect personally identifiable information. You may disable cookies in your browser settings; however, this may affect certain site functionality.</p>`,
  },
  {
    heading: "Data Security",
    content: `<p>We implement appropriate technical and organisational measures to safeguard your personal information against unauthorised access, alteration, or disclosure. However, no internet transmission is 100% secure, and we cannot guarantee absolute security of data sent via our website.</p>`,
  },
  {
    heading: "Intellectual Property",
    content: `<p>Tutors India's logos, images, and trademarks are registered and cannot be used, communicated, or distributed without specific written permission from Tutors India.</p>
    <p>Users are granted a limited licence to access the website for personal use only. Commercial use, copying, or creating derivative works from site content is strictly prohibited.</p>`,
  },
  {
    heading: "Disclaimer",
    content: `<p>Tutors India provides academic research support only. We do not guarantee exam passage, course completion, or any specific academic outcome. Our services are positioned as research support material and academic guidance only.</p>`,
  },
  {
    heading: "Governing Law & Jurisdiction",
    content: `<p>The laws of India shall apply to these terms and conditions. Courts in <strong>Chennai, India</strong> shall have exclusive authority over any disputes arising from the use of our services.</p>
    <p>Tutors India maintains registered offices at:</p>
    <ul>
      <li><strong>India:</strong> 10, Kutty Street, Nungambakkam, Chennai – 600034 | +91 8754446690</li>
      <li><strong>UK:</strong> 10 Park Place, Manchester M4 4EY | +44-1143520021</li>
    </ul>`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "52px 20px 44px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>
            <span style={{ color: "#a0b8e0" }}> / </span>
            <span style={{ color: "#fff" }}>Privacy Policy</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.4rem,3vw,2rem)", lineHeight: 1.3, marginBottom: "14px" }}>
            Privacy Policy
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "0.95rem" }}>
            How we collect, use, and protect your personal information.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "48px 20px" }}>
        {sections.map((s) => (
          <div key={s.heading} style={{ marginBottom: "28px", background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "28px" }}>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", color: "#1a2a6c", marginBottom: "12px" }}>{s.heading}</h2>
            <div className="wp-content" dangerouslySetInnerHTML={{ __html: s.content }} />
          </div>
        ))}

        <div style={{ background: "#f0f4ff", borderRadius: "10px", padding: "24px", textAlign: "center", marginTop: "8px" }}>
          <p style={{ color: "#555", marginBottom: "16px" }}>For privacy-related queries, please contact us directly.</p>
          <Link href="/contact-us/" style={{ padding: "10px 24px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
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
