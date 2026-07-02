import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "Academic PowerPoint Presentation Service for PhD",
  description: "Academic PowerPoint Presentation Service for PhD scholars. World-class presentations for internal/external committee. Professional graphic designers. Tutors India.",
};

const posterContent = [
  "Title — clear, concise, impactful",
  "Collaborators & Institutional Affiliations",
  "Abstract — concise research overview",
  "Background & Context of the study",
  "Literature Review — key themes and research gap",
  "Research Questions / Objectives",
  "Materials, process, methods or approach",
  "Results / Conclusion — argument, insight, significance",
  "Future Directions for research",
  "Acknowledgements",
  "References — fully cited in required style",
  "Contact Information",
];

const presentationFeatures = [
  { icon: "🎨", title: "Professional Design", desc: "World-class PowerPoint presentations developed by professional academic designers with experience in PhD committee submissions across UK, US, and Australian universities." },
  { icon: "📐", title: "Multiple Formats", desc: "PowerPoint (.pptx), PDF, and poster formats available. A1, A2, A3, A4 sizes for academic posters. Full customisation of colour scheme, fonts, and layout to your university branding." },
  { icon: "🔬", title: "Scientifically Sound", desc: "Scientific & Academic presentations are academically rigorous, highlighting context through maps, photographs, methods and results via charts, tables, graphs and photographs." },
  { icon: "📊", title: "Clear Data Visualisation", desc: "Effective charts, graphs, tables, and infographics that communicate your findings clearly. SPSS/R/STATA statistical outputs formatted for presentation display." },
  { icon: "✅", title: "Plagiarism Checked", desc: "All presentation content undergoes plagiarism checking and linguistic review for uniqueness. Plagiarism-free certificate provided on request." },
  { icon: "🔄", title: "Draft Review Process", desc: "Work shared in drafts allowing reviewer feedback before final delivery. UK writers implement amendments as per your request at no additional charge." },
  { icon: "🎤", title: "Speech Script Optional", desc: "Oral presentation speech script and Q&A preparation notes available on request to help you present confidently to your internal or external PhD committee." },
  { icon: "⚡", title: "Express Delivery", desc: "Urgent delivery available based on project nature and submission deadline. Contact us immediately with your requirements for an accurate timeline assessment." },
];

const faqs = [
  { q: "Why choose Tutors India for PhD presentation services?", a: "We have a large team of experts with a separate professional graphic designer department specialising in designing attractive academic PowerPoint presentations for PhD scholars. Our team has completed the maximum number of PhD presentations and posters, handling even the most complex academic designs with ease. Our presentations create a high impact on your efforts in front of internal or external committees." },
  { q: "Can you create a PowerPoint template for my PhD dissertation?", a: "Yes. At Tutors India, we are ready to offer easy-to-use and fully customisable PhD Presentation templates so you can customise based on your choice of colour, text, graphics and images. Custom modifications are available upon request at no additional charge." },
  { q: "What sections are typically present in a PhD Academic Presentation?", a: "A standard PhD academic presentation includes: Title, Collaborators & Affiliations, Abstract, Background, Literature Review, Research Questions/Objectives, Materials/Methods/Approach, Results/Conclusion, Future Directions, Acknowledgements, References, and Contact Information. All sections can be customised based on your supervisor's requirements." },
  { q: "How long will it take to complete a PhD Academic presentation?", a: "The timeline depends on the presentation length, features, and graphic needs. Standard presentation design takes 48–72 hours. Express 24-hour delivery is available for urgent committee submission deadlines. Contact us with your deadline for an immediate feasibility assessment." },
  { q: "Will you provide revisions for my PhD presentation?", a: "At Tutors India, we provide unlimited revisions until you get 100% satisfaction. Simply share your feedback and our designers will implement changes promptly. Work is shared in draft form allowing for reviewer feedback before final delivery — amendments are made as per your request at no additional cost." },
];

const testimonials = [
  { quote: "I was blown away by the ease and speed with which I was able to place my order. The presentation was excellent and helped me impress my doctoral committee. This is a service I will definitely use again!", author: "Dr. Yelena P. Orlov, PhD", avatar: "/images/testimonials/user-profile.png" },
  { quote: "Tutors India is highly recommended! I was able to complete my doctoral studies because of their assistance. Throughout the process, they were meticulous, prompt, and enthusiastic.", author: "Divit", avatar: "/images/testimonials/Divit.jpg" },
  { quote: "Just when I was about to give up, my friend advised me to use Tutors India. It was timely advice. I could finally present the poster of my PhD project with confidence and I am so happy about it.", author: "Zoe", location: "Japan", avatar: "/images/testimonials/t04.jpg" },
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies", "Marketing & Communication",
  "Engineering & Technology", "Natural Sciences & Mathematics", "Biological & Life Science", "Economics & Administration",
  "Law", "Medicine & Health", "Education & Training", "Computer Science & IT",
];

export default function PhDPresentationPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}<Link href="/our-services/phd-dba-dissertation/" style={{ color: "#a0b8e0" }}>PhD / DBA</Link>{" / "}<span style={{ color: "#fff" }}>PhD Presentation</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              Academic PowerPoint Presentation Service for PhD Scholars
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Are you finding it difficult to create an effective PowerPoint Presentation for your PhD committee? Producing effective presentations is significant for a PhD submission to be successful. Tutors India develops world-class PowerPoint presentations for PhD scholars.
            </p>
            <p style={{ color: "#f9c74f", fontSize: "0.92rem", fontWeight: 600, marginBottom: "24px" }}>Then You've Certainly Reached the Right Place!</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/samples/dissertation-samples.webp" alt="Academic experts collaborating" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>PowerPoint · PDF<br />A1 Poster · A2 · A3<br />Unlimited Revisions</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      <div style={{ background: "#12214a", padding: "16px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: "2,000+", l: "Expert Designers" }, { n: "48–72h", l: "Standard Delivery" }, { n: "Multiple", l: "Formats" }, { n: "< 5%", l: "Plagiarism" }, { n: "Unlimited", l: "Revisions" }, { n: "30 min", l: "Response" }].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
              <div style={{ fontSize: "0.68rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Academic &amp; Scientific PhD Presentations by UK Experts</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            Scientific &amp; Academic Poster presentations are academically sound, highlighting the context of your work through maps, photographs, methods and results in the forms of charts, tables, graphs and photographs. An excellent presentation creates a high impact on your efforts in front of your internal or external committee.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.94rem" }}>
            Our poster presentation service creates clarity, creativity, and self-standing presentation capability — your presentation should be able to stand on its own as a clear, logical presentation of your research, without any explanation from you. All posters undergo plagiarism checking and linguistic review for uniqueness.
          </p>
        </div>

        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>What Services Do We Offer?</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "18px" }}>Comprehensive PhD presentation and poster services by professional academic designers</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "16px" }} className="four-col-grid">
            {presentationFeatures.map(f => (
              <div key={f.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{f.icon}</div>
                <h3 style={{ fontSize: "0.88rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{f.title}</h3>
                <p style={{ fontSize: "0.78rem", color: "#666", lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "22px", marginBottom: "28px" }} className="two-col-grid">
          <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "14px" }}>General Presentation Content — What We Include</h3>
            {posterContent.map(item => (
              <div key={item} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", fontSize: "0.83rem", color: "#c5d5f0" }}>
                <span style={{ color: "#f9c74f", fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
              </div>
            ))}
          </div>
          <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px", border: "1px solid #dde2ef" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Why Choose Tutors India for PhD Presentations</h3>
            {["Extensive quality control at every stage", "Draft review before final delivery", "Free amendments after delivery", "Customised to your specific requirements", "100% plagiarism-free content", "Competitive prices — researcher friendly", "Written and designed by UK academic experts", "Fully referenced to your required citation style", "Unlimited revisions — 100% satisfaction guarantee", "128-bit SSL encryption — complete confidentiality", "NDA-signed designers and writers"].map(item => (
              <div key={item} style={{ display: "flex", gap: "8px", padding: "5px 0", borderBottom: "1px solid #dde2ef", fontSize: "0.81rem", color: "#555" }}>
                <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
              </div>
            ))}
          </div>
        </div>

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
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Your PhD Presentation Designed by Experts</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>PowerPoint · PDF · A1 Poster · Unlimited Revisions · 48–72hr Delivery</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
