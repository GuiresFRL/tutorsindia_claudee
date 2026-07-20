import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "Professional CV Writing Services UK | Resume Writing Help",
  description: "Professional Curriculum Vitae (CV) Personal Statement cover letter & LinkedIn Profile Writing Services. we assist for CV & Cover Letter Writing Service",
  keywords: "CV Writing services, Resume Writing services, LinkedIn Profile Writer",
  alternates: { canonical: "https://www.tutorsindia.com/our-services/masters-dissertation-writing-services/cv-writing" },
};

const cvIncludes = [
  { icon: "👤", title: "Personal Statement", desc: "Tailored personal statement that highlights your unique value proposition, career goals, and key strengths relevant to your target role or institution." },
  { icon: "🎓", title: "Qualifications & Certificates", desc: "All academic qualifications, professional certifications, and relevant training presented clearly and in the correct format for your target employer." },
  { icon: "📚", title: "Education", desc: "Educational history presented from GCSE level upwards, formatted appropriately for your career stage and the positions you are targeting." },
  { icon: "💼", title: "Employment History", desc: "Employment details in reverse-chronological order with achievement-focused bullet points that demonstrate impact and value to employers." },
  { icon: "⚡", title: "Key Skills", desc: "Core competencies, technical skills, and transferable skills identified and presented to maximise impact on both human reviewers and ATS systems." },
  { icon: "🎯", title: "Personal Interests", desc: "Relevant interests and hobbies that add personality and demonstrate well-roundedness while maintaining professional appropriateness." },
];

const cvServices = [
  { icon: "📄", title: "CV / Resume Writing", desc: "Written by certified specialists. Your CV is crafted to unearth your core accomplishments and choose exact words for maximum impact. Delivered in editable Word, PDF, and ASCII plain text formats.", badge: "Most Popular" },
  { icon: "✉️", title: "Cover Letter Writing", desc: "Tailored cover letters and application statements for specific roles. Each cover letter is uniquely written to address the employer's requirements and complement your CV.", badge: "" },
  { icon: "🔗", title: "LinkedIn Profile Optimisation", desc: "Boost your online professional presence. LinkedIn profile written and optimised with the right keywords to appear in recruiter searches and attract opportunities.", badge: "" },
  { icon: "🎓", title: "Personal Statement", desc: "Compelling personal statements for university enrolment, postgraduate applications, and professional programme applications tailored to specific requirements.", badge: "" },
];

const faqs = [
  { q: "Can you meet my deadline for CV writing?", a: "Of course. We strive hard to work within your turnaround time to complete your CV after your order and payment process is completed successfully. We have a large team of excellent resume writers who provide flawless CV writing services for numerous countries including the US, UK, India, UAE, and many more. Contact us with your deadline for an immediate timeline assessment." },
  { q: "Why choose Tutors India for CV writing service?", a: "At Tutors India, our team of experts has years of experience in high quality and exceptional customisable CV writing services that will help to attract the interviewer so your resume is shortlisted soon in the top priority list. We have a long history of successfully getting our clients shortlisted and securing interviews across all major industries and career levels." },
  { q: "Does Tutors India have a satisfaction guarantee for CV writing?", a: "Yes, we offer 100% satisfaction guarantee that your resume will meet all industry standards. If you are looking for any changes or are not satisfied with our assigned writer's work after the CV is delivered, please let us know and we will surely address your feedback or assign new writers/editors to improve the work to your complete satisfaction." },
  { q: "Who will write my CV/Resume?", a: "At Tutors India, our professional resume writers will write your CV/Resume. They are certified and experienced CV writers who understand your specialisation and other significant elements. Our writers have industry experience across multiple sectors and understand exactly what employers in each field are looking for." },
  { q: "Is my information on CV being confidential?", a: "Yes, we keep all your information confidential without a doubt. All documents are accessed only by writers who have signed NDAs with Tutors India, and your financial information is protected by 128-bit SSL encryption. If you feel troubled sharing information, we can send only the sample CV template that suits your needs to start the process." },
  { q: "Can I select my own CV writer from Tutors India?", a: "If you have already used Tutors India's CV writing service, you may request the same writer you worked with originally. It is important to check with our service providers for writer availability to ensure the timeline can be met. We also work for urgent delivery — cost may vary based on turnaround requirements." },
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

const testimonials = [
  { quote: "I can't express how pleased I am with how the resume turned out. I used to worry that no one would hire me when I looked at my résumé, but now that I've changed it, I'm much more confident in applying for jobs.", author: "Dr. Mikael Sundström, PhD", avatar: "/images/testimonials/user-profile.png" },
  { quote: "I can't express how pleased I am with how the resume turned out. I used to worry that no one would hire me when I looked at my resume, but now that I've revised it, I'm much more confident in applying for jobs!", author: "Krish", avatar: "/images/testimonials/Lekh.jpg" },
  { quote: "Tutors India is passionate about writing effective CVs and Profiles, and writes clearly, honestly and with great attention to detail. They are totally tuned into the global jobs market and use their knowledge of diverse industries to select and write about the most job-relevant information. Tutors India is a thorough professional and I am extremely satisfied with their services!", author: "Daire", location: "Algeria", avatar: "/images/testimonials/t14.jpg" },
  { quote: "I would like to appreciate the determinations which you all have made to prepare my resume & cover letter. I am happy now that I can find good opportunities across countries. I would like to thank you all once again for your best work. I am glad to provide your contact numbers to others who are looking for good opportunities.", author: "Sofia", avatar: "/images/testimonials/t10.jpg" },
];

const subjects = [
  "Finance & Banking", "Healthcare & Medicine", "Engineering & Technology",
  "Business & Management", "Law & Legal", "Computer Science & IT",
  "Marketing & Communications", "Education & Academia", "Arts & Humanities",
  "Life Sciences & Research", "Economics & Administration", "Hospitality & Leisure",
];

export default function CVWritingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* ── HERO ── */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
              <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}
              <Link href="/our-services/masters-dissertation-writing-services/" style={{ color: "#a0b8e0" }}>Masters Dissertation</Link>{" / "}
              <span style={{ color: "#fff" }}>CV Writing</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              Professional Curriculum Vitae (CV), Personal Statement, Cover Letter &amp; LinkedIn Profile Writing Service
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              CV Writing Service is academically sound — we unearth your core accomplishments and choose exact words for maximum impact. Our service encourages clarity, creativity, and ability to stand on its own as a clear, logical presentation of your talent.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <a href="/docs/cv-writing-brochure.pdf" target="_blank" rel="noopener noreferrer" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>📄 Brochure</a>
              <Link href="/ask-an-expert/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.3)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Ask an Expert</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/samples/dissertation-samples.webp" alt="Academic experts collaborating" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>Word · PDF · ASCII<br />Editable Formats<br />100% Satisfaction</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      {/* ── STATS BAR ── */}
      <div style={{ background: "#12214a", padding: "16px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: "2000+", l: "Expert CV Writers" }, { n: "22+", l: "Years Experience" }, { n: "Global", l: "Jobs Market Knowledge" }, { n: "Unlimited", l: "Revisions" }, { n: "100%", l: "Satisfaction Guarantee" }, { n: "30 min", l: "Response" }].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
              <div style={{ fontSize: "0.68rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>

        {/* Services Grid */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>What Services Do We Offer Under CV Writing?</h2>
          <p style={{ color: "#666", fontSize: "0.96rem", marginBottom: "18px" }}>Complete professional career document services by certified UK and US specialists</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "18px" }} className="two-col-grid">
            {cvServices.map(svc => (
              <div key={svc.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "22px", position: "relative" }}>
                {svc.badge && (
                  <span style={{ position: "absolute", top: "14px", right: "14px", background: "#e87722", color: "#fff", fontSize: "0.68rem", fontWeight: 700, padding: "3px 8px", borderRadius: "10px" }}>{svc.badge}</span>
                )}
                <div style={{ fontSize: "2rem", marginBottom: "10px" }}>{svc.icon}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{svc.title}</h3>
                <p style={{ fontSize: "0.86rem", color: "#666", lineHeight: 1.65 }}>{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CV Includes */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>CV Writing Features — What We Include</h2>
          <p style={{ color: "#666", fontSize: "0.96rem", marginBottom: "18px" }}>An impressive resume needs to contain the right details, presented in the right way</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px" }} className="three-col-grid">
            {cvIncludes.map(item => (
              <div key={item.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{item.icon}</div>
                <h3 style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{item.title}</h3>
                <p style={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works + Free Offers */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "22px", marginBottom: "28px" }} className="two-col-grid">
          <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "14px" }}>How Does It Work?</h3>
            <p style={{ color: "#c5d5f0", fontSize: "0.87rem", lineHeight: 1.7, marginBottom: "14px" }}>After the order is confirmed, we allocate a specialist team. We will share the work in drafts so you get an opportunity to review the CV and share your feedback, where our UK writers will make amendments as per your request.</p>
            {["Order confirmed + team allocated", "Requirement scrutiny and initial queries", "First draft delivered for review", "Feedback incorporated by UK writers", "Final CV delivered in Word, PDF, ASCII", "Unlimited support until 100% satisfied"].map((step, i) => (
              <div key={i} style={{ display: "flex", gap: "10px", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", fontSize: "0.82rem", color: "#c5d5f0" }}>
                <span style={{ background: "#e87722", color: "#fff", borderRadius: "50%", width: "20px", height: "20px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem", fontWeight: 700, flexShrink: 0 }}>{i + 1}</span>
                {step}
              </div>
            ))}
          </div>
          <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px", border: "1px solid #dde2ef" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Why Choose Tutors India: CV Writing Features</h3>
            {["Extensive quality control at every stage", "Plan and outline before writing begins", "Draft review before final delivery", "Free amendments after delivery", "Customised to your specific requirements", "100% plagiarism-free content", "Competitive prices — student and professional friendly", "Written by UK / US CV certified experts", "Editable in Word, PDF and ASCII plain text", "Unlimited support — 100% satisfaction guarantee", "Complete confidentiality — NDA-signed writers", "128-bit SSL encryption for financial information"].map(item => (
              <div key={item} style={{ display: "flex", gap: "8px", padding: "5px 0", borderBottom: "1px solid #dde2ef", fontSize: "0.81rem", color: "#555" }}>
                <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <TestimonialSlider testimonials={testimonials} />

        {/* FAQ */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Frequently Asked Questions</h2>
          <FaqAccordion faqs={faqs} />
        </div>

        {/* Industries */}
        <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>CV Experts Across Industries &amp; Sectors</h2>
          <p style={{ color: "#666", fontSize: "0.86rem", marginBottom: "14px" }}>We have CV experts across the world — you are assured of quality and cultural nuance for your target market</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {subjects.map(s => (
              <span key={s} style={{ padding: "5px 13px", background: "#fff", border: "1.5px solid #dde2ef", borderRadius: "16px", fontSize: "0.79rem", color: "#1a2a6c", fontWeight: 500 }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Your Professional CV Written by Experts</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>Response within 30 minutes · Word, PDF, ASCII formats · Unlimited revisions</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
