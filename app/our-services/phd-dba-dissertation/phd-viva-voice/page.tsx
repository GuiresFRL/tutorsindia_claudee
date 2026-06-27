import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "PhD / DBA Defense Viva-Voce Examination Training Help | Tutors India",
  description: "PhD / DBA Defense preparation & Public Viva-Voce Examination Training. World-class professional viva-voce training. Overcome viva fear. Tutors India.",
};

const vivaPreparation = [
  { icon: "🎤", title: "Panelist Introduction & Self-Presentation", desc: "Train how to introduce yourself and your research confidently to the examination panel. Learn the right tone, pace, and structure for your opening statement before committee examination." },
  { icon: "📋", title: "Review Institutional Viva Policies", desc: "Comprehensive review of your institution's specific viva voce examination policies, procedures, and expectations. Understand what the committee is looking for in your defence." },
  { icon: "❓", title: "Anticipated Questions Generation", desc: "Generate anticipated questions based on thorough re-examination of your thesis. Our experts identify every potential weakness or question point that examiners are likely to raise." },
  { icon: "🔍", title: "Identify & Document Potential Errors", desc: "Identify and document any potential errors, inconsistencies, or weaknesses in your thesis before the examination. Prepare robust responses and corrections for each identified issue." },
  { icon: "💬", title: "Coach Topic Explanation & Research Conclusions", desc: "Systematic coaching on how to explain your topic, justify your methodology, defend your findings, and present your conclusions clearly and confidently to a non-specialist audience." },
  { icon: "🛡️", title: "Defence of Thesis Details & Omissions", desc: "Prepare comprehensive defences for every aspect of your thesis including methodological choices, analytical decisions, literature selection, and any acknowledged limitations or omissions." },
  { icon: "🔭", title: "Discuss Future Research Enhancements", desc: "Prepare articulate responses about future research directions, how your work can be extended, what you would do differently, and how your research contributes to the broader academic field." },
  { icon: "📊", title: "Statistical Analysis Defence", desc: "Specific preparation to defend your statistical choices, analysis methods, results interpretation, and any limitations of your quantitative or qualitative analytical approach." },
];

const serviceTiers = [
  { tier: "Basic", color: "#2563b0", desc: "Descriptive approach with reasonable research identification and evidence of critical evaluation attempts.", includes: ["Thesis review and gap identification", "Key questions preparation", "Basic defence strategies", "Self-introduction coaching"] },
  { tier: "Advanced", color: "#1a2a6c", desc: "Clear research gaps, defined aims, structured research questions with comprehensive question preparation.", includes: ["All Basic features", "Comprehensive questions list", "Methodological defence", "Critical analysis coaching"] },
  { tier: "Premium", color: "#e87722", desc: "Seminal resources, thorough gap analysis, excellent critical analysis with full mock viva session included.", includes: ["All Advanced features", "Full mock viva session", "Video-recorded feedback", "Post-viva revision support"] },
];

const faqs = [
  { q: "What is a PhD viva voce examination?", a: "The viva-voce examination is the final representation of your research degree — it defines your thesis documentation and is your opportunity to defend your doctoral research before an examination panel. It typically lasts 1–3 hours and involves both internal and external examiners who will question every aspect of your research, methodology, findings, and conclusions." },
  { q: "How does Tutors India prepare me for my PhD viva?", a: "We provide comprehensive viva preparation including: review of your thesis to identify potential weaknesses, generation of anticipated examiner questions based on your specific research, coaching on how to explain your topic and defend your methodology, preparation of responses for each likely question, mock viva sessions, and specific preparation to defend your statistical choices and analytical decisions." },
  { q: "How long does viva preparation training take?", a: "The timeline depends on the complexity of your thesis and your current level of preparation. Typically, comprehensive viva preparation takes 5–10 working days. Express preparation is available for urgent examination dates. Contact us with your viva date for an immediate assessment of what is achievable within your timeline." },
  { q: "What if I fail my viva voce examination?", a: "Our viva preparation aims to comprehensively prepare you for every question and scenario. If you face a viva failure or receive major corrections, we provide continued support to help you address the committee's feedback. We prepare point-by-point responses to examiner comments and help you prepare for resubmission and any second viva." },
  { q: "Can you prepare me for online/virtual viva voce examinations?", a: "Yes. We provide preparation specifically tailored for both in-person and virtual viva voce examinations. This includes advice on technology setup, screen-sharing your presentation, maintaining eye contact through camera, managing nerves in a remote environment, and presenting your research effectively through a digital platform." },
  { q: "What subject areas do you support for PhD viva preparation?", a: "Our 2000+ expert writers cover all academic disciplines including Business Management, Finance, Engineering, Computer Science, Medicine, Healthcare, Law, Social Sciences, Arts & Humanities, Biological Sciences, Economics, Education, Journalism, Agriculture, Hospitality, and many more. We carefully match your viva preparation specialist to your specific research field." },
];

const testimonials = [
  { quote: "My PhD Defence viva was conducted successfully and I am now waiting for the formal notification from the University. Thank you once again for your support throughout the preparation process.", author: "Oliver", location: "Denmark", avatar: "/images/testimonials/t18.jpg" },
  { quote: "I have defended my research few days ago and scored a very good. The viva preparation sessions were absolutely invaluable — I felt completely confident walking into the examination room.", author: "Bryan", location: "Australia", avatar: "/images/testimonials/t15.jpg" },
  { quote: "Please thank the respected professor Ma'am for a brilliant discussion. Ever since she came onto the project things have been moving in the most ideal manner. My heartfelt thanks for all her time and effort in preparing me for the viva.", author: "Jesse Ryder", location: "New Zealand", avatar: "/images/testimonials/t21.jpg" },
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies", "Marketing & Communication",
  "Engineering & Technology", "Natural Sciences & Mathematics", "Biological & Life Science", "Economics & Administration",
  "Humanities & Social Science", "Law", "Medicine & Health", "Education & Training",
  "Journalism & Media", "Agriculture & Forestry", "Computer Science & IT", "Hospitality, Leisure & Sports",
];

export default function PhDVivaVoicePage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}<Link href="/our-services/phd-dba-dissertation/" style={{ color: "#a0b8e0" }}>PhD / DBA</Link>{" / "}<span style={{ color: "#fff" }}>PhD Viva Voice</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              A Ph.D. / DBA Defense Preparation or Public Viva-Voce Examination Training Help
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Are you worried about how to face your PhD viva-voce in front of your supervisor &amp; doctoral committee? Are you not sure how to overcome the viva-voce fear? Then You've Certainly Reached the Right Place!
            </p>
            <p style={{ color: "#f9c74f", fontSize: "0.92rem", fontWeight: 600, marginBottom: "24px" }}>Tutors India offers world-class professional viva-voce training for your success and perfection.</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/tutorsindia-logo-hd.jpg" alt="Tutors India" style={{ width: "90px", height: "90px", objectFit: "contain", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>Mock Viva Sessions<br />Question Preparation<br />Defence Coaching</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      <div style={{ background: "#12214a", padding: "16px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: "2,000+", l: "Expert Trainers" }, { n: "3,500+", l: "PhDs Helped" }, { n: "Mock Viva", l: "Sessions" }, { n: "Unlimited", l: "Practice" }, { n: "All Fields", l: "Covered" }, { n: "30 min", l: "Response" }].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
              <div style={{ fontSize: "0.68rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>PhD Viva Voce Preparation &amp; Training Service</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            The viva-voce examination is the final representation of your research degree that defines your thesis documentation. Tutors India provides comprehensive viva-voce training conducted by qualified researchers from the US and UK with expertise in research methodology and international university credentials.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.94rem" }}>
            Our viva preparation goes beyond simple question lists. We systematically review your thesis, identify every potential weakness or question point, prepare robust responses, and conduct mock viva sessions to build your confidence. Draft speeches are provided for client review with iterative feedback and amendments at every stage.
          </p>
        </div>

        {/* Viva Preparation Features */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Comprehensive Viva Preparation Training</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "18px" }}>World-class professional viva-voce training covering every aspect of your PhD defence</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "16px" }} className="four-col-grid">
            {vivaPreparation.map(v => (
              <div key={v.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{v.icon}</div>
                <h3 style={{ fontSize: "0.88rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{v.title}</h3>
                <p style={{ fontSize: "0.78rem", color: "#666", lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Tiers */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>Service Tiers for Viva Preparation</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
            {serviceTiers.map(t => (
              <div key={t.tier} style={{ background: "#fff", border: `2px solid ${t.color}`, borderRadius: "10px", overflow: "hidden" }}>
                <div style={{ background: t.color, color: "#fff", padding: "14px 18px" }}><div style={{ fontSize: "1.2rem", fontWeight: 700 }}>{t.tier}</div></div>
                <div style={{ padding: "16px" }}>
                  <p style={{ fontSize: "0.84rem", color: "#555", lineHeight: 1.65, marginBottom: "12px" }}>{t.desc}</p>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {t.includes.map(i => (<li key={i} style={{ display: "flex", gap: "6px", fontSize: "0.78rem", color: "#555", padding: "4px 0", borderBottom: "1px solid #f0f2fa" }}><span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>✓</span> {i}</li>))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process + Guarantees */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "22px", marginBottom: "28px" }} className="two-col-grid">
          <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "14px" }}>Viva Preparation Process</h3>
            {["Thesis review and weakness identification", "Generate 50–100 anticipated examiner questions", "Prepare detailed responses to each question", "Coach on self-introduction and presentation", "Mock viva session with feedback", "Identify and prepare for methodological challenges", "Prepare responses for limitations and omissions", "Statistical analysis defence preparation", "Future research directions coaching", "Final confidence-building session"].map((step, i) => (
              <div key={i} style={{ display: "flex", gap: "10px", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", fontSize: "0.82rem", color: "#c5d5f0" }}>
                <span style={{ background: "#e87722", color: "#fff", borderRadius: "50%", width: "20px", height: "20px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem", fontWeight: 700, flexShrink: 0 }}>{i + 1}</span>
                {step}
              </div>
            ))}
          </div>
          <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px", border: "1px solid #dde2ef" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our Guarantees</h3>
            {["Unlimited revision of preparation materials", "On-time delivery of all training materials", "24/7 customer support", "Three-level quality check", "100% confidentiality", "Subject-specific PhD-qualified trainers", "Draft responses reviewed and revised", "30-minute response guarantee"].map((g, i) => (
              <div key={i} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid #dde2ef", fontSize: "0.83rem", color: "#555" }}>
                <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>{i + 1}.</span> {g}
              </div>
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
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <img src={t.avatar} alt={t.author} style={{ width: "36px", height: "36px", borderRadius: "50%", objectFit: "cover" }} loading="lazy" />
                  <div>
                    <div style={{ fontWeight: 700, color: "#1a2a6c", fontSize: "0.84rem" }}>{t.author}</div>
                    {t.location && <div style={{ fontSize: "0.72rem", color: "#888" }}>{t.location}</div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
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
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Pass Your PhD Viva with Confidence</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>Mock Viva Sessions · 50–100 Questions Prepared · Unlimited Practice · All Subjects</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
