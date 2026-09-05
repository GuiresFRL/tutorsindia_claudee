import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Guarantees — Plagiarism Free, On Time",
  description: "Tutors India guarantees: 100% plagiarism-free work, unlimited revisions, on-time delivery, subject matter expertise, complete confidentiality, and free research articles.",
  alternates: { canonical: "https://www.tutorsindia.com/guarantees/" },
};

const guarantees = [
  {
    icon: "🛡️",
    title: "Plagiarism Free",
    points: [
      "Plagiarism is a serious offence — we do not condone or support any form of plagiarism",
      "We provide 100% original work — not copy-pasted, but written only after brainstorming sessions with our professional researchers",
      "All work scanned against online sources using Write Check or Turnitin before delivery",
      "We guarantee less than 5% or 0% plagiarism",
      "Plagiarism-free certificate issued with every order",
      "Advanced anti-plagiarism software eliminates all plagiarism possibility",
    ],
  },
  {
    icon: "🔁",
    title: "Unlimited Revisions",
    points: [
      "We provide unlimited revisions absolutely free of cost as per the commitment made by us",
      "We firmly believe that every researcher has a different perception and we respect your feedback",
      "Revision support continues even after the project is completed",
      "Minor changes delivered within 24 working hours",
      "Significant changes delivered within 48 working hours",
      "No additional charges for any number of revisions",
    ],
  },
  {
    icon: "⏱",
    title: "On-Time Delivery",
    points: [
      "All work delivered on time without any delay — we have achieved 95–98% on-time delivery",
      "Minor changes: within 24 working hours",
      "Significant changes: within 48 working hours",
      "Email acknowledgment within 30 minutes during business hours",
      "Emergency and urgent orders accommodated without degrading quality",
      "Delivery delays can be raised at customersupport@tutorsindia.com",
    ],
  },
  {
    icon: "🎓",
    title: "Subject Matter Expertise",
    points: [
      "250+ professional subject matter experts across global time zones",
      "Every work allocated to Subject Matter Expert with experience in writing your research works",
      "Experts qualified from international universities including Birmingham, London Business School, Harvard",
      "2000+ experts across subjects & countries (USA, UK, Australia, Canada, New Zealand, Germany, France, Russia, Ukraine)",
      "Minimum degree requirement: Master's with research experience",
      "All writers selected through stringent process including video interview, written test, and NDA signing",
    ],
  },
  {
    icon: "💬",
    title: "Communicate with Your Writer",
    points: [
      "Direct communication available with your writer via phone and WhatsApp",
      "You can come directly to our office with a prior appointment",
      "Conference calls and video meetings arranged during critical periods",
      "Customer support assists direct writer communication or message passing",
      "Exclusive coordinator contact for query clarification and delivery updates",
      "Messages forwarded immediately — check emails regularly for writer communications",
    ],
  },
  {
    icon: "📚",
    title: "Updated Academic Resources",
    points: [
      "High-quality, peer-reviewed journal articles and research databases utilised",
      "In-house library with international standard books updated monthly",
      "Access to Web of Science, ProQuest, Google Scholar, Business Source Complete, JSTOR, Emerald, Elsevier, SciDirect",
      "Industry problem identification from Economic Times, Forbes, Wall Street Journal, The Economist",
      "Content referenced properly according to your university requirements",
      "All content multiple-source verified to ensure plagiarism-free and up-to-date research",
    ],
  },
  {
    icon: "📎",
    title: "Free Research Articles",
    points: [
      "We completely understand you need to show your supervisor the references, books, and articles used",
      "Free research articles used in your work are provided in PDF format",
      "Links to paid articles shared without cost — accessible through your institutional account",
      "Raw data, SPSS output files, questionnaires, and interview guides shared free",
      "Additional reference materials shared via Google Drive or Dropbox",
      "No additional charges for appendices or supporting materials",
    ],
  },
  {
    icon: "🔒",
    title: "100% Confidentiality",
    points: [
      "Once you place an order, it's completely safe with us",
      "Identity never disclosed to third parties without your approval",
      "Neither your friends nor your teachers would ever know you used our service",
      "Non-Disclosure Agreements signed with all team members",
      "Copyright ownership remains with client after payment",
      "128-bit SSL encryption protects all financial information",
    ],
  },
];

export default function GuaranteesPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Guarantees" , url: "https://www.tutorsindia.com/guarantees/" }]} />
      <section style={{ background: "linear-gradient(135deg,var(--navy) 0%,#2563b0 100%)", color: "#fff", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.96rem", color: "#a0b8e0", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link> / Guarantees
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "2.2rem", marginBottom: "12px" }}>Our Guarantees</h1>
          <p style={{ color: "#c5d5f0", fontSize: "1.05rem" }}>What We promise, we deliver exactly the same</p>
        </div>
      </section>

      <section style={{ maxWidth: "1100px", margin: "60px auto", padding: "0 20px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <p style={{ fontSize: "1.05rem", color: "var(--text-mid)", maxWidth: "750px", margin: "0 auto", lineHeight: 1.8 }}>
            We work and strive for 100% Customer Satisfaction. At Tutors India, every guarantee is backed by our 22 years of experience serving over 2,00,000 students, scholars and entrepreneurs worldwide.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }} className="two-col-grid">
          {guarantees.map((g) => (
            <div key={g.title} style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "12px", padding: "28px" }}>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start", marginBottom: "16px" }}>
                <span style={{ fontSize: "2.2rem", flexShrink: 0 }}>{g.icon}</span>
                <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--navy)", margin: 0 }}>{g.title}</h2>
              </div>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {g.points.map((point) => (
                  <li key={point} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid var(--border)", fontSize: "0.94rem", color: "var(--text-mid)", lineHeight: 1.5 }}>
                    <span style={{ color: "var(--orange)", fontWeight: 700, flexShrink: 0, marginTop: "2px" }}>✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "40px", background: "var(--navy)", color: "#fff", borderRadius: "12px", padding: "32px", textAlign: "center" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "12px" }}>Ready to Experience Our Guarantees?</h2>
          <p style={{ color: "#c5d5f0", marginBottom: "20px" }}>Order today and see why 20000+ students trust Tutors India.</p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/order-now/" style={{ padding: "10px 28px", background: "var(--orange)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Order Now</Link>
            <Link href="/contact-us/" style={{ padding: "10px 28px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
