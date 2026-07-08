import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "PhD Dissertation Rework / Resubmission Writing Help UK",
  description: "PhD Dissertation Resubmission or Rework or Rewriting Help UK. 100% success rate in resit dissertation. Point-by-point supervisor response. Unlimited revisions.",
};

const rejectionReasons = [
  { icon: "📚", title: "Missing In-Text References", desc: "No proper citation within the text, missing peer-reviewed sources, or failure to cite all referenced works in the bibliography. We rewrite all sections with correct in-text citations and rebuild the reference list." },
  { icon: "🔬", title: "Inadequate Literature Review", desc: "Insufficient coverage of current literature, missing seminal works, or failure to identify a clear research gap. We comprehensively revise with up-to-date peer-reviewed sources." },
  { icon: "🎯", title: "Misaligned Research Objectives", desc: "Research objectives not matching literature review findings or not aligning with the methodology used. We restructure the dissertation to ensure all chapters are aligned." },
  { icon: "📊", title: "Poor Data Analysis & Results", desc: "Improperly formatted results, wrong statistical tools, missing SPSS outputs, or weak interpretation. Our statisticians re-run and reinterpret analysis with correct tools." },
  { icon: "💬", title: "Insufficient Discussion", desc: "Weak critical analysis, failure to compare findings with published literature, or missing connection between results and research questions. We rebuild the discussion comprehensively." },
  { icon: "🔀", title: "Flawed Research Methodology", desc: "Inappropriate research design, unjustified methodology choices, ethical issues, or inadequate sampling strategy. We rewrite the methodology with clear rationale." },
  { icon: "❓", title: "Missing Hypothesis", desc: "Research lacks a clear hypothesis, research questions are not measurable, or hypothesis testing is not properly conducted. We redevelop the conceptual framework." },
  { icon: "📝", title: "Weak Critical Analysis", desc: "Descriptive rather than analytical writing, lack of theoretical engagement, or failure to identify unidentified research gaps. We elevate all chapters to doctoral level." },
  { icon: "✅", title: "Non-Compliant Citation Styles", desc: "Incorrect referencing style, inconsistent citation format, or formatting not meeting university standards. We correct all references, citations, and formatting." },
  { icon: "🔒", title: "Plagiarism Issues", desc: "High similarity scores flagged by Turnitin. We rewrite all flagged sections with original content and ensure less than 5% plagiarism with a new Turnitin report." },
  { icon: "🏗️", title: "Unclear Introduction", desc: "Poorly structured introduction missing background, research context, scope, or aims. We rebuild the introduction following the rubric specifications exactly." },
  { icon: "📋", title: "Weak Research Objectives", desc: "Research objectives are too broad, not SMART, or not clearly connected to the methodology and findings. We redevelop specific, measurable research objectives." },
];

const rubricWeights = [
  { chapter: "Introduction", weight: "10%", color: "#2563b0" },
  { chapter: "Literature Review", weight: "20–40%", color: "#1a2a6c" },
  { chapter: "Research Methodology / Design", weight: "15–20%", color: "#6b21a8" },
  { chapter: "Results & Interpretation", weight: "30%", color: "#e87722" },
  { chapter: "Conclusion & Discussion", weight: "10%", color: "#059669" },
  { chapter: "Presentation & Referencing", weight: "10%", color: "#dc2626" },
];

const faqs = [
  { q: "What information do I need to provide for PhD rework services?", a: "To match exactly with your requirement, we need: (i) marking criteria, (ii) university guidelines, (iii) professor/examiner feedback, (iv) dissertation structure guidelines from the university, (v) complete dissertation that you had submitted to the university, (vi) data sheet used for the analysis, (vii) research proposal, and any other information you wish to share." },
  { q: "What if my reworked PhD dissertation is rejected again?", a: "This is unlikely to happen at Tutors India due to our comprehensive feedback review process, unlimited revisions, and direct communication throughout. However, if a reworked dissertation is rejected, we continue providing revisions at no additional charge until your dissertation meets the required standards and is accepted by your supervisory committee." },
  { q: "Which subject areas do you provide PhD dissertation rework?", a: "We accept orders from Business Management, Finance, Supply Chain, HR, Psychology, Geography, Engineering, Healthcare, Economics, Computer Science, Literature, Epidemiology, Nursing, Medical, and Public Health. Our 2000+ expert writers cover every major academic discipline at doctoral level." },
  { q: "What PhD dissertation parts can be reworked individually?", a: "We offer rework support for any individual chapter: Introduction, Statistical Analysis, Materials/Methods/Methodology, Literature Review, Findings/interpretation, Conclusion, and Discussion. We can rework just the chapters that received negative feedback, or we can comprehensively rework the entire dissertation." },
  { q: "Why do you provide free chapter drafts during the rework process?", a: "We provide free chapter drafts after reworking each chapter to ensure that our process flow is consistent and meets your supervisory committee's expectations. It helps researchers identify any remaining issues and give feedback to improve chapter-wise. This ensures you can explain the changes confidently during oral examination." },
  { q: "How is the reworked dissertation delivered?", a: "All corrections are delivered in Track Changes format so you can see every single change made. A clean version without tracked changes is also provided. We additionally prepare a point-by-point response document addressing each examiner or supervisor comment with our justification for each change made." },
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
  { quote: "Honestly, I didn't expect this level of quality. The team understood exactly what I needed and delivered work that felt genuinely professional. My confidence went from stressed to unstoppable.", author: "Amelia Brooks", location: "UK", avatar: "/images/testimonials/amelia-brooks.webp" },
  { quote: "I was stuck, frustrated, and running out of time. Tutors India stepped in at the perfect moment and turned everything around faster than I imagined. Worth every bit.", author: "Oliver Bennett", location: "UK", avatar: "/images/testimonials/oliver-bennett.webp" },
  { quote: "The attention to detail was incredible. It didn't feel like I was working with a service provider — it felt like I had an expert academic partner guiding me throughout.", author: "Layla Al Mansoori", location: "", avatar: "/images/testimonials/layla-al-mansoori.webp" },
  { quote: "My research finally started making sense after working with this team. Their guidance simplified complex ideas and gave my project the structure it was missing.", author: "Hassan Al Falasi", location: "UAE", avatar: "/images/testimonials/hassan-al-falasi.webp" },
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies", "Marketing & Communication",
  "Engineering & Technology", "Natural Sciences & Mathematics", "Biological & Life Science", "Economics & Administration",
  "Law", "Medicine & Health", "Education & Training", "Computer Science & IT",
];

export default function PhDDissertationReworkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}<Link href="/our-services/phd-dba-dissertation/" style={{ color: "#a0b8e0" }}>PhD / DBA</Link>{" / "}<span style={{ color: "#fff" }}>PhD Dissertation Rework</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              Ph.D. Dissertation Resubmission or Rework or Rewriting Help — UK
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Are you resubmitting your dissertation? Struggling to handle resit dissertation and looking to clear in the second attempt? Then You've Certainly Reached the Right Place!
            </p>
            <div style={{ background: "rgba(249,199,79,0.2)", border: "1px solid rgba(249,199,79,0.4)", borderRadius: "8px", padding: "10px 16px", marginBottom: "20px" }}>
              <span style={{ color: "#f9c74f", fontWeight: 700, fontSize: "0.9rem" }}>🏆 We have a 100% success rate in resit dissertation.</span>
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/samples/dissertation-samples.webp" alt="Academic experts collaborating" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#f9c74f" }}>100%</div>
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0" }}>Success Rate<br />in Resit PhD</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      <div style={{ background: "#12214a", padding: "16px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: "100%", l: "Success Rate" }, { n: "2,000+", l: "Expert Writers" }, { n: "Track Changes", l: "Delivery Format" }, { n: "< 5%", l: "Plagiarism" }, { n: "Unlimited", l: "Revisions" }, { n: "30 min", l: "Response" }].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
              <div style={{ fontSize: "0.68rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>PhD Dissertation Rework & Resubmission Writing Service</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            Our dissertation writers have experience in handling PhD scholars who faced rejection for their dissertation. Our team consists of subject-specific writers with industry experience, statisticians, research methodology experts, editors and proofreaders with educational degrees from top-ranked international universities.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.94rem" }}>
            Our expert writers assess dissertations comprehensively on a case-by-case basis. We provide a thorough rubric scale analysis and chapter-by-chapter evaluation, delivering all corrections in Track Changes format with a detailed point-by-point response to every supervisor or examiner comment.
          </p>
        </div>

        {/* Rubric Weights */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>PhD Dissertation Assessment Criteria Analysis</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "14px" }} className="three-col-grid">
            {rubricWeights.map(r => (
              <div key={r.chapter} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px", display: "flex", gap: "14px", alignItems: "center" }}>
                <div style={{ background: r.color, color: "#fff", borderRadius: "8px", padding: "8px 12px", fontSize: "1rem", fontWeight: 700, flexShrink: 0 }}>{r.weight}</div>
                <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "#1a2a6c" }}>{r.chapter}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Common Rejection Reasons */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Common Rejection Reasons — We Fix All of Them</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "18px" }}>Our expert writers identify and systematically resolve every issue that caused your PhD dissertation to be rejected</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "14px" }} className="four-col-grid">
            {rejectionReasons.map(r => (
              <div key={r.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "16px" }}>
                <div style={{ fontSize: "1.6rem", marginBottom: "6px" }}>{r.icon}</div>
                <h3 style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "5px" }}>{r.title}</h3>
                <p style={{ fontSize: "0.76rem", color: "#666", lineHeight: 1.55 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables + Guarantees */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "22px", marginBottom: "28px" }} className="two-col-grid">
          <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "14px" }}>What We Deliver with Your Rework Order</h3>
            {["Complete rework from Introduction to Recommendations", "Point-by-point response to each supervisor comment", "All corrections in Track Changes format", "Clean version without tracked changes", "Redrawn Graphs, Tables & Figures", "Statistical re-analysis with SPSS/R/STATA outputs", "Revised references in required citation style", "Free tutoring sessions for viva preparation"].map(item => (
              <div key={item} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", fontSize: "0.83rem", color: "#c5d5f0" }}>
                <span style={{ color: "#f9c74f", fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
              </div>
            ))}
          </div>
          <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px", border: "1px solid #dde2ef" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our Guarantees</h3>
            {["Unlimited revisions until satisfactory grade achieved", "On-time delivery guaranteed", "24/7 customer support", "Minor changes within 24 hours", "Significant changes within 48 working hours", "Three-level quality check", "100% confidentiality — NDA-signed writers", "Plagiarism free — less than 5%"].map((g, i) => (
              <div key={i} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid #dde2ef", fontSize: "0.83rem", color: "#555" }}>
                <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>{i + 1}.</span> {g}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <TestimonialSlider testimonials={testimonials} />

        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Frequently Asked Questions</h2>
          <FaqAccordion faqs={faqs} />
        </div>

        <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px" }}>
          <p style={{ color: "#666", fontSize: "0.86rem", marginBottom: "14px", fontWeight: 600 }}>2000+ Experts — USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {subjects.map(s => (<span key={s} style={{ padding: "5px 13px", background: "#fff", border: "1.5px solid #dde2ef", borderRadius: "16px", fontSize: "0.79rem", color: "#1a2a6c", fontWeight: 500 }}>{s}</span>))}
          </div>
        </div>
      </section>

      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Pass Your PhD Resit — 100% Success Rate at Tutors India</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>Track Changes Delivery · Point-by-Point Response · Unlimited Revisions Until You Pass</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
