import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Process — 12-Step Quality Process",
  description: "Tutors India's 12-step quality process: from writer identification to unlimited revisions. 100% confidentiality guaranteed with unique project reference codes.",
  alternates: { canonical: "https://www.tutorsindia.com/our-process/" },
};

const steps = [
  { step: 1, title: "Submit Your Requirements", desc: "Fill out our comprehensive enquiry form with complete project details including topic, word count, deadline, university guidelines, referencing style, and any specific requirements." },
  { step: 2, title: "Receive Reference Number", desc: "Upon enquiry submission, you receive a unique reference number (format: #15xxx000) for tracking your paper status via email or our CRM system at any time." },
  { step: 3, title: "Payment & Acknowledgment", desc: "After payment confirmation, an acknowledgement is sent. The writing process begins within a couple of days. Payment via credit/debit cards, PayPal, bank transfer, Western Union, or wire transfer." },
  { step: 4, title: "Writer Identification", desc: "We assign a passionate, experienced researcher with relevant subject expertise and degrees from international top-ranked universities. Some writers trained at Harvard, Oxford, and London Business School." },
  { step: 5, title: "Edit & Proofreading", desc: "Orders undergo thorough proofreading and editing upon completion from writers, covering spelling, grammar, sentence construction, terminology, logic, clarity, word choice, and formatting." },
  { step: 6, title: "Check Against Requirements", desc: "Completed work reviewed for spelling, grammar, content focus, source quality, and alignment against your specific requirements, university guidelines, and rubric scale." },
  { step: 7, title: "Plagiarism Check", desc: "Completed work checked with anti-plagiarism software (Turnitin, iThenticate, SafeAssign) before delivery. We guarantee less than 5% or 0% plagiarism with certificate provided." },
  { step: 8, title: "Free Appendices & Resources", desc: "Additional reference materials, raw data, SPSS/SAS output files, questionnaires, and interview guides shared via zip file through Google Drive or Dropbox — all free of charge." },
  { step: 9, title: "Download Your Order", desc: "Access your completed work through our secure CRM portal with email and SMS reminders. Physical mailing available on request. Three-level quality check completed at this stage." },
  { step: 10, title: "Request Amendments", desc: "Submit any changes to guidance@tutorsindia.com with your project reference code. Writers/programmers implement changes and share completed work via email or CRM portal." },
  { step: 11, title: "Unlimited Revisions", desc: "We offer unlimited revision support for the concept being committed, completely free of cost, even after the project is completed. Minor changes within 24 hours; significant changes within 48 hours." },
  { step: 12, title: "100% Satisfaction Guaranteed", desc: "We work until you are 100% satisfied. Always come back to us — we are ready for unlimited revisions for the concept being committed. Your academic success is our priority." },
];

export default function OurProcessPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Our Process" }]} />
      <section style={{ background: "linear-gradient(135deg,var(--navy) 0%,#2563b0 100%)", color: "#fff", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.96rem", color: "#a0b8e0", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link> / Our Process
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "2.2rem", marginBottom: "12px" }}>Our Process</h1>
          <p style={{ color: "#c5d5f0", fontSize: "1.05rem" }}>We work and strive for 100% Customer Satisfaction — you can customise your requirement the way you want!</p>
        </div>
      </section>

      <section style={{ maxWidth: "1100px", margin: "60px auto", padding: "0 20px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <p style={{ fontSize: "1.05rem", color: "var(--text-mid)", maxWidth: "700px", margin: "0 auto", lineHeight: 1.8 }}>
            Urgent and regular orders accepted. Emergency requirements accommodated. Our streamlined 12-step process ensures quality, confidentiality, and on-time delivery every time.
          </p>
        </div>

        <div style={{ display: "grid", gap: "16px" }}>
          {steps.map((s) => (
            <div key={s.step} style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "10px", padding: "22px 24px", display: "flex", gap: "20px", alignItems: "flex-start" }}>
              <div style={{ background: "var(--navy)", color: "#fff", borderRadius: "50%", width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "1rem", flexShrink: 0 }}>
                {s.step}
              </div>
              <div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--navy)", marginBottom: "6px" }}>{s.title}</h3>
                <p style={{ fontSize: "0.96rem", color: "var(--text-mid)", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Confidentiality section */}
        <div style={{ marginTop: "48px", background: "var(--gray)", borderRadius: "12px", padding: "32px" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--navy)", marginBottom: "16px" }}>100% Confidentiality Policy</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }} className="two-col-grid">
            <div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--navy)", marginBottom: "10px" }}>Project Reference Codes</h3>
              <p style={{ color: "var(--text-mid)", fontSize: "0.96rem", lineHeight: 1.7, marginBottom: "12px" }}>
                Every project receives a unique confirmation code (format: #15xxx000) confirming your title, work type, word count, deadline, and payment status. Use this code in all correspondence.
              </p>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--navy)", marginBottom: "10px" }}>Communication Protocol</h3>
              <p style={{ color: "var(--text-mid)", fontSize: "0.96rem", lineHeight: 1.7 }}>
                Payment details sent only to admin team (info@tutorsindia.com). Technical queries directed to experts&apos; team with project code. Neither your friends nor your teachers would ever know you used our service.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--navy)", marginBottom: "10px" }}>Data Security</h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {[
                  "128-bit SSL encryption for all financial information",
                  "Non-Disclosure Agreements signed with all team members",
                  "Document access restricted to NDA-signed writers only",
                  "Data retained securely for six months maximum",
                  "Copyright ownership remains with client after payment",
                  "Research works never reused by company or writers",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", gap: "8px", padding: "7px 0", borderBottom: "1px solid var(--border)", fontSize: "0.94rem", color: "var(--text-mid)" }}>
                    <span style={{ color: "var(--orange)", fontWeight: 700 }}>✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "32px", background: "var(--orange)", color: "#fff", borderRadius: "12px", padding: "28px", textAlign: "center" }}>
          <h3 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "10px" }}>Ready to Get A Free Quote?</h3>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: "20px" }}>Get a response within 30 minutes. Invest in your career by availing services from our UK/US qualified researchers.</p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/order-now/" style={{ padding: "11px 28px", background: "#fff", color: "var(--orange)", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
            <Link href="/contact-us/" style={{ padding: "11px 28px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
