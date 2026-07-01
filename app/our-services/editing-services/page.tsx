import Link from "next/link";
import type { Metadata } from "next";
import { serviceCategories } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Academic Editing Services | Language, Technical, Scientific",
  description: "Professional Academic Editing Services — Language Editing, Technical Editing, Proofreading, Plagiarism Reports, Transcription, Translation, Citation Compliance. Tutors India.",
};

const cat = serviceCategories.find(c => c.slug === "editing-services")!;

const editingFeatures = [
  { icon: "✏️", title: "Language Editing", desc: "Native English speaker editors correct grammar, spelling, sentence construction, word choice, and academic style to publication standard." },
  { icon: "🔬", title: "Technical Editing", desc: "Subject matter experts review technical accuracy, methodology, argument clarity, and terminology across all academic disciplines." },
  { icon: "🛡️", title: "Plagiarism Free", desc: "Comprehensive plagiarism scanning using Turnitin. Less than 5% guaranteed with certificate. Zero plagiarism for academic submissions." },
  { icon: "📋", title: "Citation Compliance", desc: "Harvard, APA, MLA, Vancouver, Chicago, OSCOLA — correct and consistent referencing verified by specialist copyeditors." },
  { icon: "🔄", title: "Unlimited Revisions", desc: "Free re-editing if your paper is rejected for language errors we previously edited. Complete commitment to publication quality." },
  { icon: "🔒", title: "100% Confidential", desc: "NDA-signed editors, unique project codes, 128-bit SSL encryption. Your documents are never shared with third parties." },
];

const editingComparison = [
  { feature: "Typographical errors", premium: true, advanced: true, standard: true },
  { feature: "Punctuation", premium: true, advanced: true, standard: true },
  { feature: "Grammar", premium: true, advanced: true, standard: true },
  { feature: "Sentence construction", premium: true, advanced: true, standard: false },
  { feature: "Terminology / reference check", premium: true, advanced: true, standard: false },
  { feature: "Logic, relevance and clarity", premium: true, advanced: true, standard: false },
  { feature: "Word choice", premium: true, advanced: true, standard: false },
  { feature: "Journal formatting", premium: true, advanced: false, standard: false },
  { feature: "Cover letter", premium: true, advanced: false, standard: false },
  { feature: "Tutors India certificate", premium: true, advanced: false, standard: false },
];

const testimonials = [
  { quote: "I approached Tutors India for the second time to have my paper edited. I'm quite impressed with the editing quality and want to use Tutors India's services in the future. The editor performed an excellent job, and the crew that assisted me throughout the editing process was quite helpful.", author: "Dr. Henrik J. Olofsson, PhD", avatar: "/images/testimonials/user-profile.png" },
  { quote: "After evaluating a few outsourcers I decided to work with Tutors India because of their professional approach and ability to make changes about what I really needed in my language editing. I am very satisfied with our engagement and would consider working together on future projects too.", author: "Zoe", avatar: "/images/testimonials/t05.jpg" },
  { quote: "The wonderful team effort of Tutors India helped me in proofreading and technically edited my research paper. With their professionalism, prompt response and courteous service, I was able to receive what I expected. Proofreading has never been so efficient and so pleasant!", author: "Noah", avatar: "/images/testimonials/t17.jpg" },
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies", "Marketing & Communication",
  "Engineering & Technology", "Natural Sciences & Mathematics", "Biological & Life Science", "Economics & Administration",
  "Humanities & Social Science", "Law", "Medicine & Health", "Education & Training",
  "Journalism & Media", "Agriculture & Forestry", "Computer Science & IT", "Hospitality, Leisure & Sports",
];

export default function EditingServicesPage() {
  const half = Math.ceil(cat.services.length / 2);
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}<span style={{ color: "#fff" }}>Editing Services</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.2rem)", lineHeight: 1.3, marginBottom: "14px" }}>
              Are you looking for academic &amp; Research editing, transcription, translation, peer review and pre-submission help?
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Looking for plagiarism-free editing without changing the context and logical flow? We make a difference in terms of deadline and overall grade. The editing service has always been a requirement in any sort of academics, copywriting, and especially in the research field.
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
          {[{ n: "Native English", l: "Editors" }, { n: "< 5%", l: "Plagiarism" }, { n: "24/7", l: "Support" }, { n: "Unlimited", l: "Revisions" }, { n: "Free Re-edit", l: "If Rejected" }, { n: "30 min", l: "Response" }].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
              <div style={{ fontSize: "0.68rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>

        {/* Services listing */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>What Services Do We Offer Under Editing?</h2>
        <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "24px" }}>Professional editing services for academic papers, dissertations, manuscripts, and research publications</p>
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

        {/* Key Features */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px" }}>Editing Service Features</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px", marginBottom: "40px" }} className="three-col-grid">
          {editingFeatures.map(f => (
            <div key={f.title} style={{ background: "#fff", borderRadius: "10px", padding: "22px", border: "1px solid #dde2ef" }}>
              <div style={{ fontSize: "2rem", marginBottom: "10px" }}>{f.icon}</div>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "7px" }}>{f.title}</h3>
              <p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.65 }}>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Service Comparison Table */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px" }}>Editing Service Tiers — What&apos;s Included</h2>
        <div style={{ background: "#fff", borderRadius: "12px", border: "1px solid #dde2ef", overflow: "hidden", marginBottom: "40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", background: "#1a2a6c", color: "#fff", padding: "14px 20px" }}>
            <div style={{ fontSize: "0.88rem", fontWeight: 700 }}>Feature</div>
            <div style={{ fontSize: "0.88rem", fontWeight: 700, textAlign: "center" }}>Standard Proofread</div>
            <div style={{ fontSize: "0.88rem", fontWeight: 700, textAlign: "center" }}>Advanced Editing</div>
            <div style={{ fontSize: "0.88rem", fontWeight: 700, textAlign: "center", color: "#f9c74f" }}>Premium Editing</div>
          </div>
          {editingComparison.map((row, i) => (
            <div key={row.feature} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", padding: "12px 20px", borderBottom: i < editingComparison.length - 1 ? "1px solid #f0f2fa" : "none", background: i % 2 === 0 ? "#fff" : "#f9f9ff" }}>
              <div style={{ fontSize: "0.85rem", color: "#333", fontWeight: 500 }}>{row.feature}</div>
              <div style={{ textAlign: "center", color: row.standard ? "#059669" : "#ddd", fontSize: "1.1rem" }}>{row.standard ? "✓" : "—"}</div>
              <div style={{ textAlign: "center", color: row.advanced ? "#059669" : "#ddd", fontSize: "1.1rem" }}>{row.advanced ? "✓" : "—"}</div>
              <div style={{ textAlign: "center", color: row.premium ? "#059669" : "#ddd", fontSize: "1.1rem" }}>{row.feature === "Tutors India certificate" ? "On request" : row.premium ? "✓" : "—"}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px" }}>What Our Clients Say</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px", marginBottom: "40px" }} className="three-col-grid">
          {testimonials.map((t, i) => (
            <div key={i} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px" }}>
              <div style={{ color: "#e87722", fontSize: "2rem", lineHeight: 1, marginBottom: "6px", fontFamily: "serif" }}>&ldquo;</div>
              <p style={{ color: "#555", fontSize: "0.85rem", lineHeight: 1.7, fontStyle: "italic", marginBottom: "14px" }}>{t.quote}</p>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img src={t.avatar} alt={t.author} style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" }} loading="lazy" />
                <div style={{ fontWeight: 700, color: "#1a2a6c", fontSize: "0.85rem" }}>{t.author}</div>
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
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Your Document Edited to Publication Standard</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>Native English Editors · Free Re-edit if Rejected · 30 min Response · Unlimited Revisions</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>

      <style>{`@media(max-width:768px){.service-two-col{grid-template-columns:1fr!important;}}`}</style>
    </>
  );
}
