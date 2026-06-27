import Link from "next/link";
import type { Metadata } from "next";
import { serviceCategories } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Publication Support Services | Manuscript, Medical Writing, Biostatistics | Tutors India",
  description: "Publication Support Services — Manuscript Development, Conference Papers, Medical Writing, Biostatistics, Statistical Services. Expert UK & US writers. Tutors India.",
};

const cat = serviceCategories.find(c => c.slug === "publication-support")!;

const processSteps = [
  { n: "01", title: "Fill Enquiry Form", img: "/images/process/step-1.jpg", desc: "Submit your requirements with comprehensive information." },
  { n: "02", title: "Reference Number", img: "/images/process/step-2.jpg", desc: "Receive a reference number to track your paper status via CRM." },
  { n: "03", title: "Acknowledgment", img: "/images/process/step-3.jpg", desc: "Acknowledgment sent once payment received. Writing begins within days." },
  { n: "04", title: "Writer Assigned", img: "/images/process/step-4.jpg", desc: "Expert writer with passion for research assigned to your project." },
  { n: "05", title: "Edit & Proofreading", img: "/images/process/step-5.jpg", desc: "We ensure to proofread the document once received from our writer." },
  { n: "06", title: "Requirements Check", img: "/images/process/step-6.jpg", desc: "Checked for spelling, grammar, content, focus, sources quality against client requirements." },
  { n: "07", title: "Plagiarism Assurance", img: "/images/process/step-7.jpg", desc: "Checked with anti-plagiarism software before the delivery." },
  { n: "08", title: "Free Appendices", img: "/images/process/step-8.jpg", desc: "Additional reference materials shared via Google Drive or Dropbox." },
  { n: "09", title: "Download Your Order", img: "/images/process/step-9.jpg", desc: "Download through CRM with email & SMS reminders." },
  { n: "10", title: "Request Amendment", img: "/images/process/step-10.jpg", desc: "Contact us at guidance@tutorsindia.com for any changes needed." },
  { n: "11", title: "Unlimited Revisions", img: "/images/process/step-11.jpg", desc: "Unlimited revision support for the concept being committed." },
  { n: "12", title: "Changes Implemented", img: "/images/process/step-12.jpg", desc: "Document shared to writer and complete work sent through email or CRM." },
];

const features = [
  { icon: "🛡️", title: "Plagiarism Free", desc: "Work scanned against online sources using WriteCheck or Turnitin. Less than 5% or 0% guaranteed with Turnitin certificate." },
  { icon: "✨", title: "Uniqueness", desc: "Every work is unique. We provide only custom manuscript writing by Subject Matter Experts who justify how each work is unique." },
  { icon: "📚", title: "Fully Referenced", desc: "Fully referenced with latest peer-reviewed articles, textbooks, online sources. We comply with Harvard, APA, Chicago, Vancouver, Turabian." },
  { icon: "✅", title: "100% Requirement Match", desc: "We match your requirement 100% — experts understand the topic and analyse feasibility before working on the manuscript." },
  { icon: "⏱", title: "On Time", desc: "Minor changes within 24 working hours; significant changes within 48 working hours. Emails acknowledged within 30 minutes." },
  { icon: "🔁", title: "Unlimited Revisions", desc: "Unlimited revisions as per initial commitment — completely free of cost, even after project completion." },
];

const testimonials = [
  { quote: "I used to use another service, but I usually received poorly written papers and overpaid for it. I made my decision after discovering your service and receiving a superb dissertation from you. Thank you very much.", author: "C S", location: "Sheffield, UK", avatar: "/images/testimonials/user-profile.png" },
  { quote: "My friend recommended that I use your service just when I was about to give up on my dissertation. I'm now a PhD holder, and I'm overjoyed about it. Thank you for your help.", author: "Ishani", avatar: "/images/testimonials/Sahana.jpg" },
  { quote: "Great service for non-native English writing authors! Tutors India's dissertation writing service helps me to formulate my ideas in more clear and straightforward way and to eliminate common grammatical errors.", author: "Ryan", avatar: "/images/testimonials/t21.jpg" },
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies", "Marketing & Communication",
  "Engineering & Technology", "Natural Sciences & Mathematics", "Biological & Life Science", "Economics & Administration",
  "Humanities & Social Science", "Law", "Medicine & Health", "Education & Training",
  "Journalism & Media", "Agriculture & Forestry", "Computer Science & IT", "Hospitality, Leisure & Sports",
];

export default function PublicationSupportPage() {
  const half = Math.ceil(cat.services.length / 2);
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}<span style={{ color: "#fff" }}>Publication Support</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.2rem)", lineHeight: 1.3, marginBottom: "14px" }}>
              Are you looking to edit, redraw, rewrite, format your manuscript according to the journal specific guidelines?
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Then You have reached the right place. We make a difference in terms of deadline and quality. A good manuscript writing and journal article writing not only requires high quality research but also should be able to present your findings and conclusion precisely with adherence to extensive journal guidelines.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
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
          {[{ n: "2,000+", l: "Expert Writers" }, { n: "22+", l: "Years Experience" }, { n: "< 5%", l: "Plagiarism" }, { n: "Unlimited", l: "Revisions" }, { n: "24/7", l: "Support" }, { n: "30 min", l: "Response" }].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
              <div style={{ fontSize: "0.68rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        {/* Intro */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "36px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>A Trusted Journal &amp; Publication Support Service</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }} className="two-col-grid">
            <div>
              <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
                The US &amp; UK writers at Tutors India aim at inculcating knowledge within students and build great confidence to submit their publication successfully. A subject matter expert from Tutors India would provide extensive support to write a manuscript — very well representing the research content, avoiding lapses in logic, highlighting important information, and ensuring perfect, error-free, and standard language.
              </p>
              <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.94rem" }}>
                Our team consists of experienced professionals holding at least a Master&apos;s degree and also Ph.D. holders from prestigious universities from the UK, US, and Australia. Some of our writers are trained at Harvard School, Oxford, London School of Business, and the University of Birmingham.
              </p>
            </div>
            <div>
              <img src="/images/services/primary-secondary-research.webp" alt="Publication Support" style={{ width: "100%", borderRadius: "8px", objectFit: "cover" }} loading="lazy" />
            </div>
          </div>
        </div>

        {/* Services listing */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>What Services Do We Offer Under Publication Support?</h2>
        <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "24px" }}>Comprehensive manuscript and publication support across all academic and scientific disciplines</p>
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

        {/* Features */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px" }}>Publication Support Service Features</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px", marginBottom: "40px" }} className="three-col-grid">
          {features.map(f => (
            <div key={f.title} style={{ background: "#fff", borderRadius: "10px", padding: "22px", border: "1px solid #dde2ef" }}>
              <div style={{ fontSize: "2rem", marginBottom: "10px" }}>{f.icon}</div>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "7px" }}>{f.title}</h3>
              <p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.65 }}>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Order Process */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Order Process — What Makes Us the Best</h2>
        <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "20px" }}>Systematic 12-step process from enquiry to delivery</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "16px", marginBottom: "40px" }} className="process-four-grid">
          {processSteps.map(step => (
            <div key={step.n} style={{ background: "#fff", borderRadius: "10px", border: "1px solid #dde2ef", overflow: "hidden", textAlign: "center" }}>
              <div style={{ background: "#1a2a6c", padding: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src={step.img} alt={step.title} style={{ width: "48px", height: "48px", objectFit: "contain", filter: "brightness(0) invert(1)" }} loading="lazy" />
              </div>
              <div style={{ padding: "12px" }}>
                <div style={{ fontSize: "0.7rem", color: "#e87722", fontWeight: 700, letterSpacing: "0.06em", marginBottom: "3px" }}>STEP {step.n}</div>
                <h4 style={{ fontSize: "0.84rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "5px" }}>{step.title}</h4>
                <p style={{ fontSize: "0.74rem", color: "#666", lineHeight: 1.5 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <style>{`@media(max-width:900px){.process-four-grid{grid-template-columns:repeat(3,1fr)!important;}} @media(max-width:600px){.process-four-grid{grid-template-columns:1fr 1fr!important;}}`}</style>

        {/* Testimonials */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px" }}>Client Voice</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px", marginBottom: "40px" }} className="three-col-grid">
          {testimonials.map((t, i) => (
            <div key={i} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px" }}>
              <div style={{ color: "#e87722", fontSize: "2rem", lineHeight: 1, marginBottom: "6px", fontFamily: "serif" }}>&ldquo;</div>
              <p style={{ color: "#555", fontSize: "0.85rem", lineHeight: 1.7, fontStyle: "italic", marginBottom: "14px" }}>{t.quote}</p>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img src={t.avatar} alt={t.author} style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" }} loading="lazy" />
                <div>
                  <div style={{ fontWeight: 700, color: "#1a2a6c", fontSize: "0.85rem" }}>{t.author}</div>
                  {t.location && <div style={{ fontSize: "0.74rem", color: "#888" }}>{t.location}</div>}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subject Areas */}
        <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>2000+ Experts Across Subjects &amp; Countries</h2>
          <p style={{ color: "#666", fontSize: "0.86rem", marginBottom: "14px" }}>USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {subjects.map(s => (<span key={s} style={{ padding: "5px 13px", background: "#fff", border: "1.5px solid #dde2ef", borderRadius: "16px", fontSize: "0.79rem", color: "#1a2a6c", fontWeight: 500 }}>{s}</span>))}
          </div>
        </div>
      </section>

      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Invest in Your Career — Place Your Order Today</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>Join 2,00,000+ scholars. Response within 30 minutes · Unlimited Revisions · Plagiarism-Free</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>

      <style>{`
        @media(max-width:768px){.service-two-col{grid-template-columns:1fr!important;} .two-col-grid{grid-template-columns:1fr!important;}}
      `}</style>
    </>
  );
}
