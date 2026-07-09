import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "PhD Dissertation Topic Selection & Outline Help",
  description: "PhD & Professional Doctorate Dissertation Topic Selection & Outline Help. Research gap identification, aims, methodology from qualified UK & US researchers.",
};

const serviceTiers = [
  { tier: "Basic", color: "#2563b0", items: ["3-4 topics along with the research aim"] },
  { tier: "Advanced", color: "#1a2a6c", items: ["One standard topic selection and 500 words outline with research aim, objectives, literature review, research methodology, data analysis guidelines and references lists (upgradable)"] },
  { tier: "Premium", color: "#e87722", items: ["One standard topic with 1000 words along with advanced features and expected contribution, research gap, and bibliography for additional reading (upgradable)"] },
];

const topicFeatures = [
  { icon: "🔍", title: "Based on Research Gap", desc: "The dissertation topics are selected based on the research gap and future recommendations proposed by previous researchers." },
  { icon: "📖", title: "Detailed Literature Review & Industry Problem", desc: "The Aim and research objectives proposed which would be developed based on the detailed literature review and industry problem. We use a wide range of information to discover the topic including statistics, news reports, textbooks, historical information and of course recent peer-reviewed scholarly articles from the peer-reviewed journals." },
  { icon: "🗺️", title: "Proposed Methodology & Expected Outcome", desc: "A literature review would be key in your dissertation. Therefore, we provide recent articles published in the proposed area and gaps identified and proposed a methodology which would also cover research design, qualitative or quantitative, target population, data collection methods, tools used and finally expected outcome." },
  { icon: "🌍", title: "Topic Selection Sources", desc: "Student: As this would reflect some long-standing interest that they would have developed during the part of the course. Guide/supervisor/mentor/professor: Whom they would have built a relationship as part of an ongoing research project. Organization or Industry: An external organization where they are currently working. Research papers from database like PROQUEST, Science Direct, JSTOR, Emerald, Web of Science, IEEE, Google Scholar." },
];

const faqs = [
  { q: "On which areas you provide PhD dissertation topics and outline?", a: "At tutorsindia, we provide PhD dissertation topics in wide areas of research such as employee engagement dissertations, customer buying behavior dissertation, project management dissertation, knowledge management dissertation, International marketing, performance management, strategic management and business policy, management of technology, international business, total quality management, public relation theories dissertation and many more. We also offer topics for various subjects such as MBA in HR, HRM, Finance, Economics, Operations, Nursing, medical, geographic, accounting, history, sociology, English, Music, advertising, fashion, tourism, architecture, computer science, politics, art, statistics." },
  { q: "What Information that I need to provide while ordering for PhD dissertation topic and outline?", a: "To provide topic and match exactly with your requirement, provide key research interested areas within your scope, target country, industry experience and feasibility of data collection, if any. And any other information that our writer should know also can be provided from your end." },
  { q: "How I can use my PhD dissertation outline and topics?", a: "The topics we provide would provide you clear and precise understanding of the proposed research area and ensure that you move in the right direction. A dissertation topic can be used You can get familiarize with the proposed research area This topic would provide right direction and enable you to speak confidently with your tutor. You can discuss with your mentor/tutor and finalize the topics Outline proposal can be formulated Initial research on the topic can be initiated Time plan to complete your dissertation Based on the discussion with your tutor and independent you can develop further ideas." },
  { q: "What if I require some customization in the PhD topics we deliver?", a: "Our service is completely flexible and tailor made to the customer. Hence, if you can provide the areas of customization related to research area initially proposed, we can make amendments in the dissertation topics." },
  { q: "Is there any option that I can use my PhD dissertation topic and outline as a proposal?", a: "The outline and dissertation topics that we provide is only a starting valuable guidelines enable to kick start your dissertation writing. The requirement suits only for customized titles and introduction writing; therefore, it can only serve as guidelines for writing your proposal. Further, dissertation research proposal would have different set of guidelines and instructions specific to the university, and hence you should not be confused or expect research proposal with this requirement. However, we are happy to provide a custom proposal for your dissertation." },
  { q: "What if my guide/professor rejects the PhD topic and outline?", a: "The service we provide is completely flexible. Hence, we can tailor-made or customize your delivered topics based on the research area provided initially. Simply provide your modifications and we will deliver you according to the requirement." },
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
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>We Select Ph.D. level Topic for your UK dissertation</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            Identification of topic and research area would be difficult, challenging and poses a major obstacle to several researchers across the world. As doctorate dissertation need to a) provide original contributions to the field's knowledge base, b) should reflect scholar's writing, analytical, and training skills, c) reflects on the program, department, college and university as well, d) identifies society as an important player and e) individual reputation, along with university and advisor.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            The starting point of any Ph.D. dissertation is to identify well-conceptualized topic with a clear set of aims substantiated by convincing reasons. Yet, such process would be challenging as it needs sufficient investment of time and energy.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            Tutors India Dissertation topic/ title provide a convincing rationale for critical decisions. There are several factors that influence the selection of a dissertation topic that includes faculty and student-related factors, the eventual audience of published works, research funding, the nature of the topic, trend and duration of the study.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.94rem" }}>
            At Tutors India, we offer a topic that is well-grounded in the scholarly literature, manageable with given time frame, resources, availability of data sources, within your range of competence. After the order is confirmed, we allocate the special team to scrutinize the work regarding necessary availability requirements that would be essential to complete the work.
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
