import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "PhD Dissertation Topic Selection & Outline Help",
  description: "PhD & Professional Doctorate Dissertation Topic Selection & Outline Help. Research gap identification, aims, methodology from qualified UK & US researchers.",
};

const serviceTiers = [
  { tier: "Basic", color: "#2563b0", items: ["3–4 unique PhD topic suggestions", "Research aim for each topic", "1000 words of supporting rationale", "Feasibility assessment", "Subject area coverage"] },
  { tier: "Advanced", color: "#1a2a6c", items: ["1 standard topic selected", "500-word outline", "Research aim and objectives", "Literature review overview", "Research methodology outline", "Data analysis guidelines", "References list"] },
  { tier: "Premium", color: "#e87722", items: ["1 standard topic selected", "1000-word comprehensive outline", "Research gap identification", "Expected contribution to knowledge", "Bibliography for additional reading", "Full methodology recommendation", "Free topic with research proposal order"] },
];

const topicFeatures = [
  { icon: "🔍", title: "Based on Research Gap", desc: "Dissertation topics are selected based on the research gap and future recommendations proposed by previous researchers. Topics avoid being too narrow or too broad, ensuring genuine original contribution." },
  { icon: "📖", title: "Detailed Literature Review & Industry Problem", desc: "Aims and research objectives developed based on detailed literature review and industry problem. Sources include statistics, news, textbooks, historical data, and peer-reviewed articles from ProQuest, Emerald, IEEE, Web of Science, Google Scholar." },
  { icon: "🗺️", title: "Proposed Methodology & Expected Outcome", desc: "Methodology covers research design, qualitative/quantitative approaches, target population, data collection methods, statistical tools, and expected outcomes aligned with your doctoral programme requirements." },
  { icon: "🌍", title: "Based on Your Job Market Viability", desc: "Topics are suggested keeping in mind your viability in the job market, ensuring your research has both academic significance and practical industry relevance for your future career." },
];

const faqs = [
  { q: "On which areas do you provide PhD dissertation topics and outlines?", a: "At Tutors India, we provide PhD dissertation topics in wide areas including employee engagement, customer buying behaviour, project management, knowledge management, international marketing, performance management, strategic management, international business, total quality management, and many more. Additional subjects include MBA specialisations (HR, HRM, Finance, Economics, Operations), Nursing, Medical, Geography, Accounting, History, Sociology, English, Music, Advertising, Fashion, Tourism, Architecture, Computer Science, Politics, Art, and Statistics." },
  { q: "What information do I need to provide while ordering PhD dissertation topics?", a: "To provide topics that match exactly with your requirement, please provide: key research interest areas within your scope, target country, industry experience and feasibility of data collection if any, and any other information that would be relevant for the writer. Even a broad subject area is sufficient to get started." },
  { q: "How can I use my PhD dissertation outline and topics?", a: "You can use the topics and outline to: familiarise yourself with the proposed research area, move in the right direction, speak confidently with your tutor or supervisor, finalise the topic after discussion, formulate an outline proposal, initiate initial research, develop a time plan for your dissertation, and develop further ideas based on discussions with your supervisor." },
  { q: "What if I require customisation in the PhD topics delivered?", a: "Our service is completely flexible and tailor-made to the customer. If you can provide the areas of customisation related to the research area initially proposed, we can make amendments to the dissertation topics. Unlimited revisions are included at no additional charge." },
  { q: "Can I use my PhD dissertation topic and outline as a research proposal?", a: "The outline and dissertation topics that we provide are valuable starting guidelines to kick-start your dissertation writing. They serve as guidelines only — not as a complete research proposal, which has university-specific requirements. We offer a separate PhD Research Proposal service that builds comprehensively on the selected topic." },
  { q: "What if my guide/professor rejects the PhD topic and outline?", a: "The service we provide is completely flexible. We can tailor-make or customise your delivered topics based on the research area and supervisor feedback provided initially. Simply share the rejection feedback and we will revise the topics accordingly at no additional charge." },
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
  { quote: "Tutors India provides me with a great deal of flexibility in terms of choosing courses and research areas. The specialists assisted me in choosing a unique and significant research topic, as well as moving on to the next stage of my research.", author: "N.M.", location: "US", avatar: "/images/testimonials/user-profile.png" },
  { quote: "Thank you for your response Tutors India. You have provided some valuable insight into how to approach this research. You have made a good point about researching at a relevant and practical level — this is something I didn't think of and I will definitely consider this. Great job!", author: "Ethan", location: "Afghanistan", avatar: "/images/testimonials/Sanket.jpg" },
  { quote: "I must confess I was not quite convinced when I received the topics from their professionals. I thought they were too specific. But then my guide appreciated me for being that specific! There was no looking back then. They did my proposal tremendously well. Great team, great work, fair prices! Thank you Tutors India.", author: "Divij", location: "UK", avatar: "/images/testimonials/t20.jpg" },
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies",
  "Marketing & Communication", "Engineering & Technology", "Natural Sciences & Mathematics",
  "Biological & Life Science", "Economics & Administration", "Humanities & Social Science",
  "Law", "Medicine & Health", "Education & Training", "Journalism & Media",
  "Agriculture & Forestry", "Computer Science & IT", "Hospitality, Leisure & Sports",
];

export default function PhDDissertationTopicPage() {
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
              <Link href="/our-services/phd-dba-dissertation/" style={{ color: "#a0b8e0" }}>PhD / DBA Dissertation</Link>{" / "}
              <span style={{ color: "#fff" }}>PhD Dissertation Topic</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              PhD &amp; Professional Doctorate Dissertation Topic Selection &amp; Outline Help &amp; Consultation
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              At Tutors India, we offer thought-provoking suggestions for PhD dissertation topics and titles keeping in mind your viability in the job market. The starting point of any PhD dissertation is to identify a well-conceptualized topic with a clear set of aims substantiated by convincing reasons.
            </p>
            <div style={{ background: "rgba(255,193,7,0.15)", border: "1px solid rgba(249,199,79,0.4)", borderRadius: "8px", padding: "10px 16px", marginBottom: "20px", fontSize: "0.85rem", color: "#f9c74f" }}>
              🎁 <strong>Special Offer:</strong> Order a dissertation proposal and get a free dissertation topic &amp; outline — Use Promo Code: <strong>PHDTOPICPROP</strong>
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/ask-an-expert/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Ask an Expert</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/samples/dissertation-samples.webp" alt="Academic experts collaborating" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>Research Gap<br />Identification<br />Original Topics</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      {/* ── STATS BAR ── */}
      <div style={{ background: "#12214a", padding: "16px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: "2000+", l: "Expert Researchers" }, { n: "3–4", l: "Topic Suggestions (Basic)" }, { n: "22+", l: "Years Experience" }, { n: "All Fields", l: "Covered" }, { n: "Unlimited", l: "Revisions" }, { n: "30 min", l: "Response" }].map(s => (
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
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>We Select PhD Level Topic for Your UK Dissertation</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            Topic identification can be a real challenge for doctoral researchers. PhD dissertations must provide original contributions to knowledge, reflect scholarly skills, and maintain institutional reputation. Our researchers identify topics that are well-grounded in the scholarly literature, manageable within the given time frame and resources, within your range of competence, and drawing on available data sources.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.94rem" }}>
            Our PhD topic selection sources include: student's own interest and experience, supervisor and organizational input, and research papers from databases (ProQuest, Science Direct, JSTOR, Emerald, Web of Science, IEEE, Google Scholar). Early topic selection helps with tractability, data availability, career prospects, analytical skill development, and knowledge contribution.
          </p>
        </div>

        {/* Topic Features */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "18px", marginBottom: "28px" }} className="two-col-grid">
          {topicFeatures.map(f => (
            <div key={f.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "22px" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{f.icon}</div>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{f.title}</h3>
              <p style={{ fontSize: "0.85rem", color: "#666", lineHeight: 1.65 }}>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Service Tiers */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>What Services Do We Offer Under PhD Topic Selection?</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "18px" }}>Three service levels for PhD dissertation topic selection and outline development</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
            {serviceTiers.map(t => (
              <div key={t.tier} style={{ background: "#fff", border: `2px solid ${t.color}`, borderRadius: "10px", overflow: "hidden" }}>
                <div style={{ background: t.color, color: "#fff", padding: "14px 18px" }}>
                  <div style={{ fontSize: "1.2rem", fontWeight: 700 }}>{t.tier}</div>
                </div>
                <div style={{ padding: "16px" }}>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {t.items.map(item => (
                      <li key={item} style={{ display: "flex", gap: "6px", fontSize: "0.82rem", color: "#555", padding: "5px 0", borderBottom: "1px solid #f0f2fa" }}>
                        <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Free Offers + Guarantees */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "22px", marginBottom: "28px" }} className="two-col-grid">
          <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "14px" }}>Free Offers with Your PhD Topic Order</h3>
            {["Abstract or Executive Summary", "Redrawn graphs & tables", "Statistical / textual data analysis", "SPSS / software screenshots", "Free tutoring sessions", "SPSS output in Appendix", "Research articles used in writing"].map(item => (
              <div key={item} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", fontSize: "0.83rem", color: "#c5d5f0" }}>
                <span style={{ color: "#f9c74f", fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
              </div>
            ))}
          </div>
          <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px", border: "1px solid #dde2ef" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our Guarantees</h3>
            {["Unlimited revisions for committed work", "On-time delivery guaranteed", "24/7 customer support", "Three-level quality check", "100% confidentiality", "Plagiarism free — less than 5%", "Subject-specific experienced researchers", "30-minute response time during working hours"].map((g, i) => (
              <div key={i} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid #dde2ef", fontSize: "0.83rem", color: "#555" }}>
                <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>{i + 1}.</span> {g}
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

      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Find the Perfect PhD Topic — Expert Guidance Today</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>Response within 30 minutes · Research gap identification · Unlimited revisions</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
