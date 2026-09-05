import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "Dissertation Abstract Writing Service | Thesis Abstract Writing Help UK",
  description: "Abstract Writing Help. The first opinion about your work. We assist you with distinct conference abstracts in limited time.",
  keywords: "How to write an abstract for a manuscript,PhD,Masters,Manuscript,Publication",
  alternates: { canonical: "https://www.tutorsindia.com/our-services/publication-support/conference-abstract/" },
};

const faqs = [
  {
    q: "On which areas you provide Abstract writing services?",
    a: "We accept orders from a wide range of subjects, which include Business Management (HR, operation, finance, Digitalization, technology, marketing, and many more) Economics, Computer Science, English, Literature, Engineering, Epidemiology, Public Health, Life Science, and Nutrition. Engineering dissertation writing covers Semiconductor Devices, Vehicular AdHoc Networks, Wireless Sensor networks, and Electronics. Contact us for unlisted fields.",
  },
  {
    q: "What Information that I need to provide while ordering for Dissertation abstracts?",
    a: "Provide dissertation topic, size and structure of abstract, research questions, and original draft of research papers (if any) and results. The company generates remaining information. Include any additional information the writer should know.",
  },
  {
    q: "I need a sample abstract works for Publication. Where I will get?",
    a: "Sample abstract works are uploaded on the site. This abstract format is sample one, it may varies based on the target country, university, student's and supervisor requirement so review samples to understand quality and format variations.",
  },
  {
    q: "What are the procedures Tutors India followed for abstract writing?",
    a: "We deliver the exception abstract writing services for publication with help of the writers who have a number of experience in research writing. The goal is creating an impeccable and crispy abstract that fulfills the study purpose.",
  },
  {
    q: "Do you keep a database of Pre-written abstract?",
    a: "Yes, the company maintains a customizable CRM software for accessing pre-written abstracts. Clients can request abstracts or customize existing ones.",
  },
  {
    q: "What if I do not like my abstract content?",
    a: "Revisions are welcome through clear comments to the writer. Some of the cases, you feel to add or exclude content or you are satisfaction might be low because, as we understand, different people has the different perception. Check revision policy for details.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function ConferenceAbstractPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Services", url: "/our-services/" }, { name: "Publication Support", url: "/our-services/publication-support/" }, { name: "Conference Abstract" , url: "https://www.tutorsindia.com/our-services/publication-support/conference-abstract/" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
              <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}
              <Link href="/our-services/publication-support/" style={{ color: "#a0b8e0" }}>Publication Support</Link>{" / "}
              <span style={{ color: "#fff" }}>Conference Abstract</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              Abstract Writing Help
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Are you having difficulty in framing your conference abstract? Would you like to get professional assistance to complete it and rest with satisfaction? Tutors India provides professional abstract writing services with experienced researchers from the US and UK.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "20px" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Get A Free Quote</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/samples/publication-research.jpg" alt="Abstract Writing Help" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>US & UK Researchers<br />Reply in 30 Minutes<br />All Disciplines</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      {/* Then You've Certainly Reached the Right place */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Then You've Certainly Reached the Right place</h2>
        <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px" }}>
          Tutors India brings years of experience to assist with perfection. The company offers qualified, experienced researchers who can help complete abstracts with satisfaction.
        </p>
      </section>

      {/* Qualified researchers */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Your Abstract is written by qualified and experienced researchers from the US &amp; UK</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px" }}>
            Our Abstract writers have experience in research methodology, specific domain experience, and educational degrees from international and top-ranked universities from India, the US, and the UK. One-on-one coaching is available with writers, statisticians, and editors.
          </p>
        </div>
      </section>

      {/* Easy & Straightforward */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Abstract Writing Service is Simply easy &amp; Straightforward</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          The service guarantees confidentiality. Clients submit their topic, manuscript, or dissertation with deadlines and receive professionally justified results.
        </p>
      </section>

      {/* Professional Abstract */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>The Professional Abstract – The first opinion about your work</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            Tutors India with its professional team can help and assist you with distinct conference abstract in limited time. Abstracts are grammatically correct and capture reader interest.
          </p>
        </div>
      </section>

      {/* Service Tiers */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "24px" }}>What Services do we offer under Abstract writing service?</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "22px" }} className="three-col-grid">
          {[
            {
              tier: "Basic",
              items: [
                "3 Topics (Topic Selection based on area of interest)",
                "1000 words",
                "Objectives",
                "Literature Review",
                "Research Gap",
                "Expected Contribution",
                "Research Methodology",
                "Data Analysis Guidelines",
                "References Lists",
                "Developed based on relevant sources with descriptive approach",
              ],
            },
            {
              tier: "Advanced",
              items: [
                "1 topic",
                "1000 words",
                "Clear identification of research gap with aim and research questions",
                "Wide range of sources",
              ],
            },
            {
              tier: "Premium",
              items: [
                "1 topic",
                "Wide range of seminal research with latest resources",
                "Solid gap identified and thoroughly justified",
                "Excellent critical analysis shown (upgradable)",
              ],
            },
          ].map((t) => (
            <div key={t.tier} style={{ background: t.tier === "Advanced" ? "#1a2a6c" : "#fff", color: t.tier === "Advanced" ? "#fff" : "#333", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 800, color: t.tier === "Advanced" ? "#f9c74f" : "#e87722", marginBottom: "16px" }}>{t.tier}</div>
              {t.items.map((item) => (
                <div key={item} style={{ display: "flex", gap: "8px", padding: "5px 0", borderBottom: t.tier === "Advanced" ? "1px solid rgba(255,255,255,0.1)" : "1px solid #eef0f7", fontSize: "0.85rem", color: t.tier === "Advanced" ? "#c5d5f0" : "#555" }}>
                  <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
                </div>
              ))}
            </div>
          ))}
        </div>
        <style>{`@media(max-width:768px){.three-col-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* Subject Matter Expertise */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px" }}>Specialized Subject Matter Expertise across the globe</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {["Management", "Finance & Economics", "Social Science", "Engineering", "Technology", "Life Science", "Medicine", "Arts & Literature", "Linguistics", "Arts & Humanities", "Biological Sciences", "Business & Management", "Computer Science & IT", "Economics & Finance", "Law", "Medicine & Healthcare", "Education & Training", "Journalism & Media", "Agriculture & Forestry", "Hospitality/Leisure/Sports"].map((s) => (
              <span key={s} style={{ background: "#fff", border: "1px solid #c5d5f0", borderRadius: "20px", padding: "6px 16px", fontSize: "0.83rem", color: "#1a2a6c", fontWeight: 600 }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our deliverables while you order custom Abstract Writing Service</h2>
        <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "20px" }}>
          Full abstract writing services from Tutors India research writing services is simply easy and straightforward. Reply within 30 minutes of order confirmation.
        </p>
      </section>

      {/* How Does it Work */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: "32px", textAlign: "center" }}>How Does it work?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "22px" }} className="three-col-grid">
            {[
              { step: "01", title: "Order Confirmation & Team Allocation", desc: "After order confirmed, special team scrutinizes work regarding necessary availability requirements." },
              { step: "02", title: "Initial Queries & Outline", desc: "If queries exist, they are asked during initial stage. Outline proposed for writing secondary data collection based dissertation." },
              { step: "03", title: "Approval", desc: "Outline along with chapterization plan is approved by client." },
              { step: "04", title: "Chapter-by-Chapter Delivery", desc: "Work dispatched in chapters with progress updates provided." },
              { step: "05", title: "Coordination & Clarification", desc: "Exclusive coordinators contact client to clarify queries; installment payment option available." },
              { step: "06", title: "Final Delivery", desc: "Work delivered as per scheduled date or earlier; revisions handled within specified timeframes." },
            ].map((s) => (
              <div key={s.step} style={{ background: "rgba(255,255,255,0.07)", borderRadius: "10px", padding: "22px" }}>
                <div style={{ fontSize: "2rem", fontWeight: 800, color: "#f9c74f", marginBottom: "8px" }}>{s.step}</div>
                <div style={{ fontWeight: 700, marginBottom: "8px", fontSize: "0.95rem" }}>{s.title}</div>
                <div style={{ fontSize: "0.83rem", color: "#a0b8e0", lineHeight: 1.7 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Abstract Writing Features */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Abstract Writing Features</h2>
        <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "24px" }}>
          The service follows university and publisher guidelines across the US, UK, Australia, and Asian universities. The abstract covers five main sections:
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }} className="three-col-grid">
          {[
            { num: "1", title: "Introduction to the Topic", desc: "A Brief description of the topic, research questions, and research objectives that provides background and engages readers with the research scope." },
            { num: "2", title: "Aim and Overall Objective/Hypotheses", desc: "Describes what the research intends to achieve, including clear statement of the research objectives, questions that researcher seeks to answer or the hypothesis." },
            { num: "3", title: "Brief Background with Literature", desc: "Covers previous studies, major themes, theories, identified gaps in existing research, and appropriate methodologies for investigation." },
            { num: "4", title: "Brief Research Methodology", desc: "Essential to the good abstract — includes methodological approach, research design, data collection methods, sample size, and statistical analysis techniques." },
            { num: "5", title: "Brief Results/Findings/Data Analysis", desc: "Presents the findings of the study in the form of tables & figures along with the interpretation using software like SPSS, R, or SAS." },
          ].map((f) => (
            <div key={f.num} style={{ background: "#f5f6fa", border: "1px solid #dde2ef", borderRadius: "10px", padding: "22px" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#e87722", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "1rem", marginBottom: "12px" }}>{f.num}</div>
              <div style={{ fontWeight: 700, color: "#1a2a6c", marginBottom: "8px", fontSize: "0.95rem" }}>{f.title}</div>
              <div style={{ fontSize: "0.83rem", color: "#555", lineHeight: 1.7 }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Convincing committee */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Abstract need to convince the Supervisory committee or editors or peer-review members</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            We write complete Abstract from the introduction to recommendations. Though it looks very simple, it is a tedious task to complete each and every step.
          </p>
        </div>
      </section>

      {/* Chapter by Chapter */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>We have Chapter by Chapter Delivery Process and Deadline</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          This is to ensure that clients have full control over the delivery and can look at the drafts of different sections. No additional charges for this structure.
        </p>
      </section>

      {/* Free Offers */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "24px" }}>Free Offers along with your Master's part or chapter-wise Dissertation Writing Services</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
            {[
              { title: "Abstract or Executive Summary", desc: "Professionally written summary included free with your order." },
              { title: "Graphs & Tables (redrawn)", desc: "All graphs and tables redrawn to publication standard." },
              { title: "Statistical analysis or textual analysis", desc: "Full analysis support included as part of the service." },
              { title: "SPSS/software screenshots", desc: "Screenshots documenting the analysis process included." },
              { title: "Free tutoring for supervisor consultations", desc: "One-on-one coaching available for supervisor meetings." },
              { title: "SPSS output in Appendix", desc: "Complete SPSS output appended to the work." },
            ].map((item) => (
              <div key={item.title} style={{ background: "#fff", border: "1px solid #c5d5f0", borderRadius: "10px", padding: "20px" }}>
                <div style={{ fontWeight: 700, color: "#1a2a6c", marginBottom: "6px", fontSize: "0.92rem" }}>✦ {item.title}</div>
                <div style={{ fontSize: "0.82rem", color: "#555", lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive / Features */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our custom abstract writing service is exclusive</h2>
        <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "28px" }}>
          Services include clear explanations and justifications for all choices made in the abstract.
        </p>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px" }}>Why Choose Tutors India: Abstract writing Service features</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "16px" }} className="four-col-grid">
          {["Qualified researchers", "Unlimited revision", "Only peer-reviewed articles", "Plagiarism report", "24/7 support", "100% match with the requirement", "On time delivery", "Subject specific writers"].map((f) => (
            <div key={f} style={{ background: "#f5f6fa", border: "1px solid #dde2ef", borderRadius: "8px", padding: "16px", textAlign: "center", fontSize: "0.85rem", color: "#1a2a6c", fontWeight: 600 }}>
              <span style={{ display: "block", fontSize: "1.4rem", color: "#e87722", marginBottom: "6px" }}>★</span>
              {f}
            </div>
          ))}
        </div>
        <style>{`@media(max-width:768px){.four-col-grid{grid-template-columns:1fr 1fr!important;}}`}</style>
      </section>

      {/* Confidentiality + References */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }} className="two-col-grid">
          <div>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", fontWeight: 700, marginBottom: "14px" }}>A complete secure &amp; Confidential Service</h2>
            <p style={{ color: "#c5d5f0", lineHeight: 1.8, fontSize: "0.96rem" }}>
              100% confidentiality of client's personal details, payment details, project works, and copyrights of research works. Documents accessed only by NDA-signed writers; 128-bit SSL encryption protects financial information.
            </p>
          </div>
          <div>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", fontWeight: 700, marginBottom: "14px" }}>Fully Referenced</h2>
            <p style={{ color: "#c5d5f0", lineHeight: 1.8, fontSize: "0.96rem" }}>
              Our dissertation work is fully referenced with latest articles and textbooks. Only peer-reviewed sources used; databases include Web of Science and ProQuest.
            </p>
          </div>
        </div>
        <style>{`@media(max-width:768px){.two-col-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* Guarantees */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "32px", textAlign: "center" }}>Our Guarantees</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "18px" }} className="four-col-grid">
            {[
              { icon: "♾️", title: "Unlimited Revision", desc: "Unlimited revision for the work being committed." },
              { icon: "⏰", title: "On-Time Delivery", desc: "Our work is delivered at a specified date and time." },
              { icon: "🕐", title: "Support 24/7", desc: "Round-the-clock support for all client queries." },
              { icon: "📄", title: "Word Count Committed", desc: "Word count does not include references and bibliography; helps locate cited sources." },
              { icon: "✅", title: "Three-Level Quality Check", desc: "Technical QC, Editor QC, and requirement check." },
              { icon: "🔒", title: "Confidentiality", desc: "Confidentiality of all personal and project information." },
              { icon: "📋", title: "Plagiarism Free", desc: "Plagiarism free work – less than 5%." },
              { icon: "🎓", title: "Experienced Writers", desc: "Only experienced and subject specific writers assigned." },
            ].map((g) => (
              <div key={g.title} style={{ background: "#fff", border: "1px solid #c5d5f0", borderRadius: "10px", padding: "20px", textAlign: "center" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{g.icon}</div>
                <div style={{ fontWeight: 700, color: "#1a2a6c", marginBottom: "6px", fontSize: "0.94rem" }}>{g.title}</div>
                <div style={{ fontSize: "0.78rem", color: "#555", lineHeight: 1.6 }}>{g.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plagiarism / On Time / Experienced Writers */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "22px" }} className="three-col-grid">
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Plagiarism Free Work</h3>
            <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.7 }}>
              We are aware of the consequences of plagiarism. Hence, topic selection is completely plagiarism Free. Work scanned via WriteCheck or Turnitin; plagiarism-free certificate issued.
            </p>
          </div>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>On Time</h3>
            <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.7 }}>
              Our work is delivered at a specified date and time. Minor changes within 24 hours; significant changes within 48 hours; emails acknowledged within 30 minutes.
            </p>
          </div>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Experienced Writers</h3>
            <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.7 }}>
              Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities from India, the US, and the UK.
            </p>
          </div>
        </div>
      </section>

      {/* Global Team */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Your Dissertation is written by your choice of Subject Matter Expertise</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            We have a team of 2000+ expertise across the subjects &amp; countries (including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine).
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px" }}>Frequently Asked Questions</h2>
        <FaqAccordion faqs={faqs} />
      </section>

      {/* CTA */}
      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Your Abstract Written by Experts</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>Reply in 30 Minutes · US &amp; UK Researchers · Plagiarism Free · Unlimited Revisions</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
