import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "Conference Paper & Seminar Presentation Writing Services",
  description: "Expert Conference Paper and Seminar Presentation Writing. Abstract to full paper, PowerPoint, speaker notes. All disciplines. Tutors India.",
};

const paperTypes = [
  { icon: "📄", title: "Full Conference Paper", desc: "Complete conference paper written to the target conference's author guidelines — from abstract and introduction through to results, discussion, conclusion and references." },
  { icon: "📋", title: "Extended Abstract", desc: "Extended abstract (300–1000 words) that clearly communicates your research contribution, methodology, findings and significance for conference reviewer evaluation." },
  { icon: "🖥️", title: "PowerPoint Presentation", desc: "Professional conference presentation slides designed to communicate your research clearly and visually to academic and professional audiences." },
  { icon: "🎤", title: "Speaker Notes & Script", desc: "Detailed speaker notes and presentation script to help you deliver your conference paper with confidence and within the allotted time." },
  { icon: "🪧", title: "Conference Poster", desc: "A1/A2 academic poster designed and written to present your research at poster sessions — print-ready PDF and editable PowerPoint delivered." },
  { icon: "📝", title: "Seminar Paper", desc: "Seminar papers and presentations where performance and effectiveness of the presentation matters. Written to academic seminar standards." },
];

const faqs = [
  { q: "What does your conference paper writing service include?", a: "As an academic student, seminar presentation is one of the requirements where the performance and effectiveness of the presentation matters. Our dedicated, experienced writers deliver exceptional conference and seminar papers covering the full paper, extended abstract, PowerPoint presentation, speaker notes, and conference poster." },
  { q: "Which conferences do you target?", a: "We support papers targeting IEEE, ACM, Elsevier, Springer, Wiley, and other major academic and scientific conferences across Engineering, Computer Science, Medicine, Business, Social Sciences, and all other disciplines. We format according to each conference's specific author guidelines and templates." },
  { q: "Can you help if my paper was rejected from a conference?", a: "Yes. We can revise and strengthen a rejected conference paper, addressing reviewer comments and improving the research presentation to increase acceptance chances at the target or alternative conferences." },
  { q: "How quickly can you write a conference paper?", a: "Timeline depends on the paper length and complexity. A standard 6–8 page conference paper typically takes 5–7 days. Extended abstracts can be completed within 24–48 hours. Contact us with your submission deadline for an accurate assessment." },
  { q: "Do you help with the presentation as well as the paper?", a: "Yes. We offer a complete conference package including the full paper, extended abstract, PowerPoint presentation slides, speaker notes, and Q&A preparation. Each element is tailored to your specific conference format and time allocation." },
];

const testimonials = [
  { quote: "Pursuing masters in mechatronics, I wanted to present a conference paper for my final year project. It was difficult to start with the abstract. I can tell that it is one of the best sites for writing conference papers. They submitted my work within a limited period of time and also taught me to improve my writing.", author: "Arnav", avatar: "/images/testimonials/t22.jpg" },
  { quote: "Under tight deadlines and with high expectations, Tutors India was a pleasure to work with on a high profile scientific peer-review process. The experts were professional, conscientious and thoroughly competent. Ultimately, a top guide to peer review your manuscript. Great services!", author: "Atharva", avatar: "/images/testimonials/t19.jpg" },
  { quote: "This was my first experience with PosterPresentations. I was incredibly impressed with the ease and speed of placing the order. The delivery got to me an hour before I had to present on the poster in a conference. The fabric poster was high quality.", author: "Dhanuk", avatar: "/images/testimonials/t20.jpg" },
];

export default function ConferencePaperPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}<Link href="/our-services/publication-support/" style={{ color: "#a0b8e0" }}>Publication Support</Link>{" / "}<span style={{ color: "#fff" }}>Conference Paper</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              Conference Paper &amp; Seminar Presentation Writing Services
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              As an academic student, seminar presentation is one of the requirements where the performance and the effectiveness of the presentation matters. Our dedicated, experienced writers deliver exceptional conference and seminar papers across all disciplines.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "20px" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/samples/publication-research.jpg" alt="Academic editing and research support" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>IEEE · ACM<br />Elsevier · Springer<br />All Conferences</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      <div style={{ background: "#12214a", padding: "16px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: "IEEE · ACM", l: "Conferences" }, { n: "6 Formats", l: "Supported" }, { n: "A1 Poster", l: "Available" }, { n: "< 5%", l: "Plagiarism" }, { n: "Unlimited", l: "Revisions" }, { n: "30 min", l: "Response" }].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
              <div style={{ fontSize: "0.68rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>Conference Paper Services We Offer</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
            {paperTypes.map(p => (
              <div key={p.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{p.icon}</div>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{p.title}</h3>
                <p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.65 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "22px", marginBottom: "28px" }} className="two-col-grid">
          <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "14px" }}>What We Deliver</h3>
            {["Full conference paper to author guidelines", "Extended abstract (300–1000 words)", "Professional PowerPoint slides", "Speaker notes and script", "A1/A2 conference poster (print-ready)", "Plagiarism report", "References formatted to conference style", "Unlimited revisions"].map(item => (
              <div key={item} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", fontSize: "0.83rem", color: "#c5d5f0" }}>
                <span style={{ color: "#f9c74f", fontWeight: 700 }}>✓</span> {item}
              </div>
            ))}
          </div>
          <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px", border: "1px solid #dde2ef" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our Guarantees</h3>
            {["Unlimited revisions for committed work", "On-time delivery guaranteed", "24/7 customer support", "Three-level quality check", "100% confidentiality", "Plagiarism free — less than 5%", "Conference-specific formatting", "Subject-specific expert writers"].map((g, i) => (
              <div key={i} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid #dde2ef", fontSize: "0.83rem", color: "#555" }}>
                <span style={{ color: "#e87722", fontWeight: 700 }}>{i + 1}.</span> {g}
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
                  <div style={{ fontWeight: 700, color: "#1a2a6c", fontSize: "0.84rem" }}>{t.author}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Frequently Asked Questions</h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Your Conference Paper Written by Experts</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>Full Paper · Abstract · PowerPoint · Poster · Response in 30 min</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
