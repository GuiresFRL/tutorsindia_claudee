import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "Masters Resit Dissertation Writing Services UK",
  description: "Struggling with resit dissertation? Tutors India offers exclusive support to rework your dissertation based on supervisor comments and university guidelines. Unlimited revisions.",
};

const rejectionReasons = [
  { icon: "📚", title: "Weak Literature Review", desc: "Inadequate coverage of current literature, missing key sources, or failure to identify a clear research gap. We comprehensively revise the literature review with up-to-date peer-reviewed sources." },
  { icon: "🔬", title: "Poor Research Methodology", desc: "Unclear or inappropriate research design, unjustified methodology choices, or inadequate sampling. We rewrite the methodology with a clear rationale aligned to your research questions." },
  { icon: "📊", title: "Statistical Analysis Issues", desc: "Wrong statistical tools, incorrect interpretation of results, or failure to test hypotheses properly. Our statisticians rerun and reinterpret analysis using SPSS, R, STATA and other tools." },
  { icon: "📝", title: "Plagiarism Concerns", desc: "High similarity scores or improper paraphrasing flagged by Turnitin. We rewrite all flagged sections with original content and ensure less than 5% plagiarism with a new Turnitin report." },
  { icon: "🏗️", title: "Poor Structure & Clarity", desc: "Unclear introduction, misaligned objectives, weak discussion, or absent recommendations. We restructure the entire dissertation to align with your university's rubric and assessment criteria." },
  { icon: "✅", title: "Formatting & Referencing", desc: "Incorrect citation style, inconsistent referencing, or formatting not meeting university standards. We correct all references, citations, and formatting to your exact university requirements." },
];

const processSteps = [
  { n: "01", title: "Submit Your Dissertation & Feedback", desc: "Share your complete dissertation, supervisor comments, marking criteria, rubric guidelines, university guidelines, and any data sheets or research proposals used." },
  { n: "02", title: "Comprehensive Assessment", desc: "Our expert writers assess your dissertation comprehensively on a case-by-case basis, reviewing every comment and identifying every area that needs to be addressed." },
  { n: "03", title: "Point-by-Point Response Plan", desc: "We develop a structured response document addressing each supervisor comment with our proposed changes and justifications, ensuring nothing is missed." },
  { n: "04", title: "Rework in Track Changes", desc: "All corrections are delivered in Track Changes format so you can see every change made. A clean version without tracked changes is also provided." },
  { n: "05", title: "Chapter-by-Chapter Delivery", desc: "We dispatch the reworked dissertation chapter by chapter so you have full control over the delivery and can review each section before submission." },
  { n: "06", title: "Unlimited Revisions Until Passed", desc: "We provide unlimited free revisions until you achieve a satisfactory grade. Our commitment continues until your resit dissertation is fully accepted." },
];

const deliverables = [
  "Complete dissertation rework from introduction to recommendations",
  "Point-by-point written response to each supervisor/examiner comment",
  "All corrections in Track Changes format (tracked + clean versions)",
  "Abstract or Executive Summary (revised)",
  "Redrawn graphs, tables and figures",
  "Statistical analysis re-run (SPSS/R/STATA outputs included)",
  "SPSS data sheet, syntax and output files",
  "Revised references in your required citation style",
  "Questionnaire or interview guide revision if needed",
  "Free tutoring sessions to prepare for resubmission",
];

const qaBoxes = [
  { img: "/images/qa/Quality-Assurance.png", title: "Quality Assurance", desc: "We ensure quality at every stage and the process.", href: "/guarantees/" },
  { img: "/images/qa/Plagiarism-Report.png", title: "Plagiarism Report", desc: "We deliver the document after scanning for plagiarism.", href: "/guarantees/" },
  { img: "/images/qa/Customer-Interaction.png", title: "Customer Interaction", desc: "We interact with the customer at every stage for amendments, queries and delivery.", href: "/contact-us/" },
];

const faqs = [
  { q: "What information do I need to provide for resit dissertation services?", a: "To match exactly with your requirement, we need: (i) marking criteria, (ii) University guidelines, (iii) professor feedback, (iv) dissertation structure guidelines from the University, (v) complete dissertation that you had submitted to the University, (vi) data sheet used for the analysis, (vii) research proposal, and any other information you wish to share." },
  { q: "Which subject areas do you provide resit dissertation support?", a: "We accept orders from Business Management, Finance, Operations, Supply Chain, Logistics, Entrepreneurship, HR, Psychology, History, Geography, Engineering, Healthcare, Economics, Computer Science, English, Literature, Epidemiology, Nursing, Medical, Public Health, Life Science, and Nutrition. If your field is not listed, please contact us." },
  { q: "What if my dissertation gets rejected again after the resit?", a: "We provide unlimited free revisions and our writers will continue working on your dissertation until it meets your supervisor's requirements. Our commitment is to work until you achieve a satisfactory outcome. We address every piece of feedback comprehensively and ensure each revision improves the work significantly." },
  { q: "How quickly can you complete a resit dissertation?", a: "The timeline depends on the extent of changes required. Minor revisions across a few chapters can be completed in 5–7 days. Complete dissertation reworks typically take 2–4 weeks. We guarantee delivery of minor changes within 24 working hours and significant changes within 48 working hours, and acknowledge all emails within 30 minutes of working hours." },
  { q: "How can I trust that the resit dissertation will meet academic standards?", a: "Tutors India conducts brainstorming sessions so you get opportunities to talk with our experts directly to understand their skill set and experience. We have been helping Master's and PhD researchers for more than 22 years and have helped complete 3,500+ PhDs and 8,000+ Masters dissertations. The company relies entirely on good word of mouth from satisfied clients." },
  { q: "Do you guarantee no plagiarism in the resit dissertation?", a: "Tutors India has provided top quality dissertation documents with no plagiarism. We never allow any dissertation to look average in quality. We maintain high quality and uniqueness in your resit dissertation by facilitating a comprehensive quality-checking department. All work is scanned using Turnitin before delivery and a plagiarism-free certificate is provided." },
];

const testimonials = [
  { quote: "Tutors India helped me gain clarity on the direction my research proposal needed to go and provided me with more clarity in my work. The experts understood my difficulties in writing the research proposal and guided me accordingly. I wholeheartedly endorse Tutors India as a best and professional service.", author: "Glenn McLaughlin", location: "" },
  { quote: "My thesis accepted… thank you for your support.", author: "Nicholas", location: "Australia" },
  { quote: "I just got my result on leading effective teams. I got 68. Please do convey this to my writer. I got all above 60 in your works. Hope you continue the same with the remaining work.", author: "Iris", location: "UK" },
  { quote: "I have defended my research few days ago and scored a very good grade.", author: "Bryan", location: "Australia" },
  { quote: "The thesis is good work. My professor is quite happy with it and I'm nearly on the brink of submitting the final report.", author: "Prateek", location: "India" },
  { quote: "Thank you for what you have done to make the report look good and especially from supervisor feedback.", author: "David", location: "UK" },
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies",
  "Marketing & Communication", "Engineering & Technology", "Natural Sciences & Mathematics",
  "Biological & Life Science", "Economics & Administration", "Humanities & Social Science",
  "Law", "Medicine & Health", "Education & Training", "Journalism & Media",
  "Agriculture & Forestry", "Computer Science & IT", "Hospitality, Leisure & Sports",
];

export default function ResitDissertationPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
              <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}
              <Link href="/our-services/masters-dissertation-writing-services/" style={{ color: "#a0b8e0" }}>Masters Dissertation</Link>{" / "}
              <span style={{ color: "#fff" }}>Resit Dissertation</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              The UK Dissertation Resitting or Resubmission Writing Help UK
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Are you resubmitting your dissertation? Struggling to handle a resit dissertation and looking to clear in the second attempt? Tutors India offers exclusive support to completely rework your dissertation based on supervisor comments and as per the university guidelines.
            </p>
            <p style={{ color: "#f9c74f", fontSize: "0.92rem", fontWeight: 600, marginBottom: "24px" }}>Then You've Certainly Reached the Right Place!</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/tutorsindia-logo-hd.jpg" alt="Tutors India" style={{ width: "90px", height: "90px", objectFit: "contain", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.78rem", color: "#c5d5f0", lineHeight: 1.6 }}>Unlimited Revisions<br />Until You Pass</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      {/* ── STATS BAR ── */}
      <div style={{ background: "#12214a", padding: "16px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: "8,000+", l: "Dissertations Done" }, { n: "22+", l: "Years Experience" }, { n: "Unlimited", l: "Revisions" }, { n: "< 5%", l: "Plagiarism" }, { n: "24/7", l: "Support" }, { n: "30 min", l: "Response" }].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
              <div style={{ fontSize: "0.68rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>

        {/* Intro */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>
            UK Resit Dissertation Writing Service — Expert Rework &amp; Resubmission Support
          </h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            Our dissertation writers have experience in handling students who faced rejection for their dissertation. Our dissertation team consists of a subject-specific writer with industry experience, statisticians, research methodology experts, editors and proofreaders with educational degrees from international and top-ranked universities from India, the US, and the UK.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.94rem" }}>
            Our expert writers assess dissertations comprehensively on a case-by-case basis. We provide a thorough rubric scale analysis and chapter-by-chapter evaluation — Introduction (10%), Literature Review (20–40%), Methodology (15–20%), Results (30%) — and ensure comprehensive value addition for a successful resit.
          </p>
        </div>

        {/* Common Rejection Reasons */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Common Reasons for Dissertation Resit — We Fix Them All</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "18px" }}>Our expert writers identify and resolve every issue that caused your dissertation to be rejected</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
            {rejectionReasons.map(r => (
              <div key={r.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{r.icon}</div>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{r.title}</h3>
                <p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.65 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Our Resit Dissertation Process</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "18px" }}>Systematic, transparent 6-step process from assessment to successful resubmission</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px" }} className="three-col-grid">
            {processSteps.map(step => (
              <div key={step.n} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px" }}>
                <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "50%", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem", fontWeight: 700, marginBottom: "10px" }}>{step.n}</div>
                <h3 style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{step.title}</h3>
                <p style={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables + Guarantees */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "22px", marginBottom: "28px" }} className="two-col-grid">
          <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "14px" }}>What We Deliver with Your Resit Order</h3>
            {deliverables.map(item => (
              <div key={item} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", fontSize: "0.83rem", color: "#c5d5f0" }}>
                <span style={{ color: "#f9c74f", fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
              </div>
            ))}
          </div>
          <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px", border: "1px solid #dde2ef" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our Guarantees</h3>
            {["Unlimited Revisions until you achieve satisfactory grades", "On-time delivery guaranteed", "24/7 customer support", "Three-level quality check (Technical QC, Editor QC, final check)", "Complete confidentiality — 128-bit SSL, NDA-signed writers", "Plagiarism free work — less than 5%", "Point-by-point response to all supervisor comments", "Track Changes format delivery"].map((g, i) => (
              <div key={i} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid #dde2ef", fontSize: "0.83rem", color: "#555" }}>
                <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>{i + 1}.</span> {g}
              </div>
            ))}
          </div>
        </div>

        {/* QA Boxes */}
        <div style={{ marginBottom: "28px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "14px" }}>
            {qaBoxes.map(box => (
              <Link key={box.title} href={box.href} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", overflow: "hidden", textAlign: "center", display: "block" }}>
                <img src={box.img} alt={box.title} style={{ width: "100%", height: "100px", objectFit: "contain", padding: "10px", background: "#f5f6fa" }} loading="lazy" />
                <div style={{ padding: "10px" }}>
                  <div style={{ fontSize: "0.83rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "3px" }}>{box.title}</div>
                  <div style={{ fontSize: "0.74rem", color: "#666", lineHeight: 1.4 }}>{box.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>What Our Clients Say</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px" }} className="three-col-grid">
            {testimonials.map((t, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px" }}>
                <div style={{ color: "#e87722", fontSize: "2rem", lineHeight: 1, marginBottom: "6px", fontFamily: "serif" }}>&ldquo;</div>
                <p style={{ color: "#555", fontSize: "0.84rem", lineHeight: 1.7, fontStyle: "italic", marginBottom: "12px" }}>{t.quote}</p>
                <div style={{ fontWeight: 700, color: "#1a2a6c", fontSize: "0.84rem" }}>{t.author}</div>
                {t.location && <div style={{ fontSize: "0.74rem", color: "#888" }}>{t.location}</div>}
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Frequently Asked Questions</h2>
          <FaqAccordion faqs={faqs} />
        </div>

        {/* Subject Areas */}
        <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>2000+ Experts Across Subjects &amp; Countries</h2>
          <p style={{ color: "#666", fontSize: "0.86rem", marginBottom: "14px" }}>USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {subjects.map(s => (
              <span key={s} style={{ padding: "5px 13px", background: "#fff", border: "1.5px solid #dde2ef", borderRadius: "16px", fontSize: "0.79rem", color: "#1a2a6c", fontWeight: 500 }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Pass Your Resit Dissertation — Expert Support Available Now</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>Response within 30 minutes · Track Changes Delivery · Unlimited Revisions Until You Pass</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
