import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "Dissertation Topic Selection Services | DBA Thesis Topics Help UK",
  description: "We Select unique PhD level Topic for your dissertation. We choose the Dissertation Topic that incorporates with the Well conceptualization and clear set of aims",
  keywords: "phd dissertation topic selection, phd dissertation topic writing services, phd dissertation topic writing help, phd thesis topic writing help, phd thesis topic selection, phd research topics statistics, phd research topics for college students",
  alternates: { canonical: "https://www.tutorsindia.com/our-services/phd-dba-dissertation/phd-dissertation-topic/" },
};

const faqs = [
  {
    q: "On which areas you provide PhD dissertation topics and outline?",
    a: "At tutorsindia, we provide PhD dissertation topics in wide areas of research such as employee engagement dissertations, customer buying behavior dissertation, project management dissertation, knowledge management dissertation, International marketing, performance management, strategic management and business policy, management of technology, international business, total quality management, public relation theories dissertation and many more. We also offer topics for various subjects such as MBA in HR, HRM, Finance, Economics, Operations, Nursing, medical, geographic, accounting, history, sociology, English, Music, advertising, fashion, tourism, architecture, computer science, politics, art, statistics.",
  },
  {
    q: "What Information that I need to provide while ordering?",
    a: "To provide topic and match exactly with your requirement, provide key research interested areas within your scope, target country, industry experience and feasibility of data collection, if any. And any other information that our writer should know also can be provided from your end.",
  },
  {
    q: "How I can use my PhD dissertation outline and topics?",
    a: "The topics we provide would provide you clear and precise understanding of the proposed research area and ensure that you move in the right direction. A dissertation topic can be used You can get familiarize with the proposed research area This topic would provide right direction and enable you to speak confidently with your tutor. You can discuss with your mentor/tutor and finalize the topics Outline proposal can be formulated Initial research on the topic can be initiated Time plan to complete your dissertation Based on the discussion with your tutor and independent you can develop further ideas",
  },
  {
    q: "What if I require some customization?",
    a: "Our service is completely flexible and tailor made to the customer. Hence, if you can provide the areas of customization related to research area initially proposed, we can make amendments in the dissertation topics.",
  },
  {
    q: "Is there any option that I can use my PhD dissertation topic as a proposal?",
    a: "The outline and dissertation topics that we provide is only a starting valuable guidelines enable to kick start your dissertation writing. The requirement suits only for customized titles and introduction writing; therefore, it can only serve as guidelines for writing your proposal. Further, dissertation research proposal would have different set of guidelines and instructions specific to the university, and hence you should not be confused or expect research proposal with this requirement. However, we are happy to provide a custom proposal for your dissertation. To order a custom research proposal, you need to fill simple online order form along with the university guidelines.",
  },
  {
    q: "What if my guide/professor rejects the PhD topic?",
    a: "The service we provide is completely flexible. Hence, we can tailor-made or customize your delivered topics based on the research area provided initially. Simply provide your modifications and we will deliver you according to the requirement.",
  },
];

const testimonials = [
  {
    quote: "Tutors India provides me with a great deal of flexibility in terms of choosing courses and research areas. The specialists assisted me in choosing a unique and significant research topic, as well as moving on to the next stage of my research.",
    author: "N.M.",
    location: "U.S.",
    avatar: "/images/testimonials/t15.jpg",
  },
  {
    quote: "Thank you for your response Tutors India. You have provided some valuable insight into how to approach this research. You have made a good point about researching at a relevant and practical level - this is something I didn't think of and I will definitely consider this. Great job!",
    author: "Ethan",
    location: "Afghanistan",
    avatar: "/images/testimonials/t13.jpg",
  },
  {
    quote: "I must confess I was not quite convinced when I received the topics from their professionals. I thought they were too specific. But then my guide appreciated me for being that specific! There was no looking back then. They did my proposal tremendously well. They stood by me until my thesis was finally accepted. Great team, great work, fair prices! Thank you Tutors India.",
    author: "Divij",
    location: "UK",
    avatar: "/images/testimonials/t14.jpg",
  },
];

const features = [
  {
    title: "Based on Research Gap",
    desc: "The dissertation topics are selected based on the research gap and future recommendations proposed by previous researchers.",
  },
  {
    title: "Detailed Literature Review & Industry Problem",
    desc: "The Aim and research objectives proposed which would be developed based on the detailed literature review and industry problem.",
  },
  {
    title: "Proposed Methodology & Expected Outcome",
    desc: "A literature review would be key in your dissertation. Therefore, we provide recent articles published in the proposed area and gaps identified and proposed a methodology which would also cover research design, qualitative or quantitative, target population, data collection methods, tools used and finally expected outcome.",
  },
  {
    title: "Well-Conceptualized & Precise Ph.D. Topic",
    desc: "To support our argument, we offer detailed references lists and bibliography.",
  },
];

const deliverables = [
  "Abstract or Executive Summary",
  "Graphs & Tables (redrawn)",
  "Statistical analysis or textual analysis of data",
  "SPSS / other software screenshots",
  "Free Tutoring for the work being carried out – to speak confidently with your program supervisors",
  "SPSS output in Appendix",
];

export default function PhDDissertationTopicPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Services", url: "/our-services/" }, { name: "PhD / DBA Dissertation", url: "/our-services/phd-dba-dissertation/" }, { name: "PhD Dissertation Topic" , url: "https://www.tutorsindia.com/our-services/phd-dba-dissertation/phd-dissertation-topic/" }]} />
      {/* ── HERO ── */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}
            <Link href="/our-services/phd-dba-dissertation/" style={{ color: "#a0b8e0" }}>PhD / DBA Dissertation</Link>{" / "}
            <span style={{ color: "#fff" }}>PhD Dissertation Topic</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.4rem,3vw,2rem)", lineHeight: 1.3, marginBottom: "16px" }}>
            PhD &amp; Professional Doctorate Dissertation Topic Selection &amp; Outline Help &amp; Consultation
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "20px" }}>
            Are you looking for unique, innovative &amp; convincing Ph.D. dissertation topic based on the strong research gap substantiated with the latest review?
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, textDecoration: "none" }}>Get A Free Quote</Link>
            <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, textDecoration: "none" }}>Contact Us</Link>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div style={{ background: "#12214a", padding: "16px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: "3500+", l: "PhD Scholars Helped" }, { n: "< 5%", l: "Plagiarism" }, { n: "Unlimited", l: "Revisions" }, { n: "30 min", l: "Response Time" }, { n: "24/7", l: "Support" }].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
              <div style={{ fontSize: "0.68rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>

        {/* We Select Ph.D. level Topic */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>We Select Ph.D. level Topic for your UK dissertation</h2>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
            Are you looking for unique, innovative &amp; convincing Ph.D. dissertation topic based on the strong research gap substantiated with the latest review? Would you like to assess feasibility of the proposed research topic or want to conduct some brainstorming session about your PhD dissertation topic selection?
          </p>
        </div>

        {/* Service Tiers */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>PhD Dissertation Topic Selection Service Tiers</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
            {[
              {
                tier: "Basic",
                color: "#e0e7ff", border: "#b0bfff",
                includes: ["3 Topics", "Research Aim", "1000 words"],
                desc: "3-4 topics with research aims (1000 words total). Developed based on research gap and latest peer-reviewed articles.",
              },
              {
                tier: "Advanced",
                color: "#fff3e0", border: "#ffd0a0",
                includes: ["1 Topic", "500 word outline", "Research Aim & Objectives", "Literature Review", "Research Methodology", "Data Analysis Guidelines", "References Lists"],
                desc: "One standard topic selection and 500 words outline with research aim, objectives, literature review, research methodology, data analysis guidelines and references lists (upgradable)",
              },
              {
                tier: "Premium",
                color: "#e8f5e9", border: "#a5d6a7",
                includes: ["1 Topic", "1000 word outline", "Research Gap", "Expected Contribution", "Advanced Features", "Bibliography"],
                desc: "One standard topic with 1000 words along with advanced features and expected contribution, research gap, and bibliography for additional reading (upgradable)",
              },
            ].map(t => (
              <div key={t.tier} style={{ background: t.color, border: `1px solid ${t.border}`, borderRadius: "10px", padding: "20px" }}>
                <div style={{ fontFamily: "Merriweather,serif", fontWeight: 700, fontSize: "1.05rem", color: "#1a2a6c", marginBottom: "10px" }}>{t.tier}</div>
                <p style={{ fontSize: "0.85rem", color: "#444", lineHeight: 1.7, marginBottom: "12px" }}>{t.desc}</p>
                <ul style={{ paddingLeft: "16px", margin: 0 }}>
                  {t.includes.map(i => <li key={i} style={{ fontSize: "0.82rem", color: "#333", lineHeight: 1.8 }}>{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Special Offer */}
        <div style={{ background: "linear-gradient(135deg,#e87722 0%,#f0a040 100%)", borderRadius: "12px", padding: "24px 28px", marginBottom: "28px", color: "#fff" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.15rem", fontWeight: 700, marginBottom: "12px" }}>Special Offer</h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, marginBottom: "8px" }}>
            <strong>Free:</strong> Order a dissertation proposal, receive complimentary dissertation topic &amp; outline – Use Promo code: <strong>PHDTOPICPROP</strong>
          </p>
          <p style={{ fontSize: "1rem", lineHeight: 1.8 }}>
            <strong>Discounts:</strong> Purchase proposal and get equivalent amount discounted on full dissertation – Promo Code: <strong>PHDPROPDISS</strong>
          </p>
        </div>

        {/* Features */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>PhD Dissertation Topic Selection Features</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "18px" }} className="two-col-grid">
            {features.map((f, i) => (
              <div key={f.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px", display: "flex", gap: "14px" }}>
                <div style={{ width: "34px", height: "34px", background: "#1a2a6c", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "0.85rem", flexShrink: 0, marginTop: "2px" }}>{i + 1}</div>
                <div>
                  <h3 style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{f.title}</h3>
                  <p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Free Deliverables */}
        <div style={{ background: "#fff8f0", border: "1px solid #f5d9bb", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Free Offers along with your Topic Selection Service</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "14px" }} className="three-col-grid">
            {deliverables.map(d => (
              <div key={d} style={{ background: "#fff", border: "1px solid #f5d9bb", borderRadius: "10px", padding: "16px", display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <div style={{ width: "28px", height: "28px", background: "#e87722", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "0.96rem", flexShrink: 0 }}>✓</div>
                <span style={{ fontSize: "0.84rem", color: "#555", lineHeight: 1.6 }}>{d}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantees */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>Why Choose Tutors India for PhD Topic Selection</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "16px" }} className="two-col-grid">
            {[
              {
                t: "A complete secure & Confidential Service",
                d: "We offer 100% confidentiality of client's personal details, payment details, project works, and copyrights of research works. We ensure following for the conditionality, security & privacy: 1) All your projects are given unique reference codes 2) Documents are accessed only writers who signed NDA with Tutors India 3) Your financial information is protected b 128-bit secure socket layer (SSL) encryption.",
              },
              {
                t: "Fully Referenced",
                d: "Our dissertation work is fully referenced with latest articles and textbooks. We refer only peer-reviewed sources such as scholarly articles and textbook to select the topic. We refer database including Web of Science, ProQuest, Google Scholar, Business Source Complete, and latest newspapers articles such as Economic Times, Forbes, The Wall Street, The Economics to identify the industrial problem.",
              },
              {
                t: "Our Guarantees",
                d: "(1) Unlimited Revision for the work being committed. (2) We ensure on-time delivery (3) We support 24/7. (4) Our word count committed does not include references and bibliography & help you to locate the sources cited (5) Ensure three-level quality check including Technical QC, Editor QC and final check against the requirement (6) Confidentiality of the information (7) Plagiarism free work – less than 5% percent. (8) Only experienced and subject specific writers will be allotted.",
              },
              {
                t: "Plagiarism Free Work",
                d: "We are aware of the consequences of plagiarism. Hence, topic selection is completely plagiarism Free. Our work is scanned against online sources in a similar way like WriteCheck or Turnitin. We wanted to ensure that our clients i.e., researchers and students are not finding any issues with regards to plagiarism and so we issue plagiarism-free certificate*. Our streamlined and high-quality research writing process ensures your dissertation is not just copy-pasted, but written only after brainstorming sessions with our team of professional researchers.",
              },
              {
                t: "On Time",
                d: "Our work is delivered at a specified date and time. Our specific changes to the delivered work will be carried out within 45 days of delivery. We guarantee delivery of minor changes within 24 working hours and significant changes within 48 working hours. We acknowledge all your emails within 30 minutes of working hours. Further any delay in the delivery can be raised at customersupport@tutorsindia.com",
              },
              {
                t: "Experienced Writers",
                d: "Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities from India, the US, and the UK. We identify the perfect SME according to your subject and area. Expert is selected through a stringent selection process including the signing of non-disclosure and confidentiality agreement. You can be very sure about the quality of the work since expert writer is identified as per International Research Experience",
              },
            ].map(f => (
              <div key={f.t} style={{ background: "#f8f9ff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px" }}>
                <h3 style={{ fontSize: "0.96rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{f.t}</h3>
                <p style={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.65, margin: 0 }}>{f.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>Voice of Our customer</h2>
          <TestimonialSlider testimonials={testimonials} />
        </div>

        {/* FAQs */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>Frequently Asked Questions</h2>
          <FaqAccordion faqs={faqs} />
        </div>

        {/* CTA */}
        <div style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", borderRadius: "12px", padding: "36px 28px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", color: "#fff", marginBottom: "10px" }}>Order Now</h2>
          <p style={{ color: "#c5d5f0", marginBottom: "20px", fontSize: "0.95rem" }}>Get your PhD Dissertation Topic selected by expert UK &amp; US researchers today</p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/order-now/" style={{ padding: "13px 32px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, textDecoration: "none" }}>Order Now</Link>
            <Link href="/contact-us/" style={{ padding: "13px 32px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, textDecoration: "none" }}>Contact Us</Link>
          </div>
        </div>

      </section>

      <style>{`
        @media(max-width:900px){.three-col-grid{grid-template-columns:1fr 1fr!important;}}
        @media(max-width:600px){.three-col-grid,.two-col-grid{grid-template-columns:1fr!important;}}
      `}</style>
    </>
  );
}
