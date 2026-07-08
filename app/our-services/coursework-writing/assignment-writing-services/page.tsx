import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "UK Assignment Writing Services | Masters & MBA | Tutors India",
  description: "UK Professional help with assignments. High-quality critical assignment writing Services that ensure distinction. Masters, MBA, PhD. In-depth research, academic standards. Tutors India.",
};

const serviceTiers = [
  {
    tier: "Basic",
    color: "#2563b0",
    items: ["3 topics for selection", "1000 words", "Literature review", "Research gap", "References"],
  },
  {
    tier: "Advanced",
    color: "#1a2a6c",
    items: ["1 topic", "1000 words", "Research methodology guidelines", "Data analysis guidelines", "Full references"],
  },
  {
    tier: "Extended",
    color: "#e87722",
    items: ["1 topic", "Comprehensive coverage", "All methodology support", "Data collection guidance", "Full deliverables"],
  },
];

const guarantees = [
  { n: "01", title: "Unlimited Revision", desc: "We provide unlimited revisions for the work being committed." },
  { n: "02", title: "On-Time Delivery", desc: "We ensure on-time delivery as per commitment. Minor changes within 24 working hours." },
  { n: "03", title: "24/7 Support", desc: "We support 24/7 and acknowledge all your emails within 30 minutes of working hours." },
  { n: "04", title: "Less Than 5% Plagiarism", desc: "Plagiarism free work – less than 5% percent. Scanned using Turnitin before delivery." },
  { n: "05", title: "Three-Level Quality Check", desc: "Stringent quality check and quality assurance process in every stage of your assignment." },
  { n: "06", title: "Confidentiality", desc: "Complete confidentiality guaranteed. Your details are never shared with third parties." },
];

const faqs = [
  {
    q: "I am an academic student very much scared about plagiarism. How can you help me in assignment writing?",
    a: "Tutors India, we have brilliant statisticians hold advanced Masters and PhD degrees with 10+ years of experience and also have a wide range of statistical analysis experience. They will give the complete and concise manuscript statistics reporting based on well-developed plan.",
  },
  {
    q: "Are you genuine assignment writing services UK service provider?",
    a: "To provide manuscript statistics topic and match exactly with your requirement, provide key research interested areas within your scope, target country, industry experience and feasibility of data collection, if any.",
  },
  {
    q: "What quality of work you give to us for assignment writing?",
    a: "Our well-experienced statisticians are capable of SPSS, STATA, SAS, R, E-views and many more.",
  },
  {
    q: "Can I Get assignment writing samples?",
    a: "Since 2011, Tutors India is the trusted mentors for the student in offering various Dissertations writing support. At Tutors India, we assist both statistics and biostatistics.",
  },
  {
    q: "Can I talk directly to the assignment writers?",
    a: "Apart from researchers, we assist the biostatical analysis services for the masters and PhD dissertation students or research paper so we strongly encourage getting help from our highly talented and experiencing statistician.",
  },
  {
    q: "What would be the price that you charge for assignment writing services?",
    a: "Yes, we upload some of the manuscript statistics sample works at tutors india is written by our expertise.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const testimonials = [
  {
    quote:
      "Even though my professor refused to extend my deadline, I needed to find an assignment assistance provider, and I'm glad I found Tutors India. They responded quickly, and I received an exceptionally well-written paper before the deadline.",
    author: "Dr. Logan C. Sinclair, PhD",
    avatar: "/images/testimonials/t1.jpg",
  },
  {
    quote:
      "It was my first experience with the Tutors India and to be honest I was unsure. I was worrying whether I will get my research paper I needed on time. But all my doubts faded away when I met my excellent writer for my assignment. Now I know for sure if I ever need a paper again I can definitely rely on Tutors India. Thanks team.",
    author: "Suveer",
    location: "Singapore",
    avatar: "/images/testimonials/t2.jpg",
  },
  {
    quote:
      "I am grateful to the Tutors India for quality work on completing my scientific assignment. Came in on time as scheduled and highlighted the scientific merit of the study. Thank you tutors India for your fast and accurate work.",
    author: "Max",
    avatar: "/images/testimonials/t3.jpg",
  },
  {
    quote:
      "I'm grateful to the team who guided me all the way through for completing my assignment work in financial regulation. It was excellent as they provided me with high quality technical content and my assignment was submitted on time. The academic writing service was more than I expected. Thanks Tutors India!",
    author: "Divyansh",
    avatar: "/images/testimonials/t4.jpg",
  },
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies", "Marketing & Communication",
  "Engineering & Technology", "Natural Sciences & Mathematics", "Biological & Life Science", "Economics & Administration",
  "Humanities & Social Science", "Law", "Medicine & Health", "Education & Training",
  "Journalism & Media", "Agriculture & Forestry", "Computer Science & IT", "Hospitality, Leisure & Sports",
];

export default function AssignmentWritingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "72px 24px 60px", textAlign: "center" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontSize: "0.85rem", color: "#a0b8e0", marginBottom: "14px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}
            <Link href="/our-services/coursework-writing/" style={{ color: "#a0b8e0" }}>Coursework Writing</Link>{" / "}
            <span style={{ color: "#fff" }}>Assignment Writing Services</span>
          </p>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.6rem,3vw,2.4rem)", lineHeight: 1.3, marginBottom: "16px" }}>
            UK Professional help with assignments
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "8px" }}>
            Are you looking for a high-quality critical assignment writing Services that ensure distinction?
          </p>
          <p style={{ color: "#f9c74f", fontSize: "1.15rem", fontWeight: 700, marginBottom: "28px" }}>
            Then You&apos;ve Certainly Reached the Right place
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/order-now/" style={{ padding: "13px 32px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "1rem" }}>Place an Order</Link>
            <Link href="/contact-us/" style={{ padding: "13px 32px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, fontSize: "1rem" }}>Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div style={{ background: "#12214a", padding: "16px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: "2,000+", l: "Expert Writers" }, { n: "All Subjects", l: "Covered" }, { n: "< 5%", l: "Plagiarism" }, { n: "Unlimited", l: "Revisions" }, { n: "24/7", l: "Support" }, { n: "30 min", l: "Response" }].map((s) => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
              <div style={{ fontSize: "0.68rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <section style={{ maxWidth: "1100px", margin: "52px auto", padding: "0 24px" }}>

        {/* Intro */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "32px", marginBottom: "30px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Assignment Writing Service</h2>
          <p style={{ color: "#555", lineHeight: 1.85, marginBottom: "14px", fontSize: "0.94rem" }}>
            UK Assignment Writing Help at Tutors India match your study needs across a broad range of subjects. Your Assignment would demonstrate all learning outcomes for that unit and showcase intellectual debate, critical analysis, evidence of original thought and generation of new ideas.
          </p>
          <p style={{ color: "#555", lineHeight: 1.85, fontSize: "0.94rem" }}>
            Students sometimes feel left out when they are given certain topics that are out of reach for them due to lack of original source for their topics.
          </p>
        </div>

        {/* Two info cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "22px", marginBottom: "30px" }} className="two-col-grid">
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "24px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>UK Assignment Editing Services</h3>
            <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.9rem" }}>
              Our service demonstrates the ability to communicate complex ideas critically, concisely, and clearly. Assignments are written with utmost care based on your specific university guidelines & Specifications, ensuring that papers are logically organized, easy to follow, and professionally formatted.
            </p>
          </div>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "24px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Wide Range of Topics – UK Assignment Writing</h3>
            <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.9rem" }}>
              Coverage includes OPM, HRM, Technology, Teacher Training, Sustainable Customer Value, Marketing Management and many other disciplines across engineering, law, medicine, business, and humanities. Our team can interpret the instructions provided to produce a critical and balanced review of practitioner issues.
            </p>
          </div>
        </div>

        {/* Service tiers */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "8px" }}>
          What services do we offer under our UK Assignment Writing Service?
        </h2>
        <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "18px" }}>
          Assignment Writing Service is simple, easy, and straightforward
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px", marginBottom: "30px" }} className="three-col-grid">
          {serviceTiers.map((t) => (
            <div key={t.tier} style={{ background: "#fff", border: `2px solid ${t.color}`, borderRadius: "10px", overflow: "hidden" }}>
              <div style={{ background: t.color, color: "#fff", padding: "16px 18px" }}>
                <div style={{ fontSize: "1.2rem", fontWeight: 700 }}>{t.tier}</div>
              </div>
              <div style={{ padding: "16px" }}>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {t.items.map((i) => (
                    <li key={i} style={{ display: "flex", gap: "8px", fontSize: "0.85rem", color: "#555", padding: "6px 0", borderBottom: "1px solid #f0f2fa" }}>
                      <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>✓</span> {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Quality features */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "26px", marginBottom: "30px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>UK Assignment Writing Service Features</h2>
          <p style={{ color: "#555", lineHeight: 1.85, marginBottom: "12px", fontSize: "0.93rem" }}>
            Our academic writing process ensures strong critical thinking, including in-depth research, credible source identification, careful note-taking, and detailed outlining. Every assignment is written to the specific university marking rubric and assessment criteria, ensuring maximum grade potential.
          </p>
          <p style={{ color: "#555", lineHeight: 1.85, fontSize: "0.93rem" }}>
            Within our assignment writing services, we provide students with work that reflects subject proficiency, critical analysis skills, logical structure, and sound argumentation at the postgraduate level. We demonstrate the ability to communicate complex ideas critically, concisely, and clearly.
          </p>
        </div>

        {/* What We Deliver */}
        <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "28px", marginBottom: "30px" }}>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "18px" }}>What We deliver while your order for UK Assignment writing</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }} className="two-col-grid">
            {[
              "Executive summaries or abstracts",
              "Edited references and supporting articles",
              "SPSS data sheets and outputs",
              "Original content written in our own words",
              "Clear references for all quotations and sourced ideas",
              "Plagiarism certificate (less than 5%)",
              "Three-level quality check report",
              "Unlimited free revisions until satisfied",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "8px", fontSize: "0.85rem", color: "#c5d5f0", alignItems: "flex-start" }}>
                <span style={{ color: "#f9c74f", flexShrink: 0, marginTop: "2px" }}>→</span> {item}
              </div>
            ))}
          </div>
        </div>

        {/* A complete secure & Confidential Service */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "26px", marginBottom: "30px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>A complete secure &amp; Confidential Service</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "10px", fontSize: "0.93rem" }}>
            We maintain a strict plagiarism policy delivering original content written in our own words with clear references for all quotations and sourced ideas. Our work is completely plagiarism free as we ensure to scan the works against online sources like Turnitin so that you can be very sure about the plagiarism-free output.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.93rem" }}>
            All your personal information, project details, and communication remain secure throughout the process. We never share your data with third parties. Your privacy is always protected.
          </p>
        </div>

        {/* Guarantees */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>Our Guarantees</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px", marginBottom: "32px" }} className="three-col-grid">
          {guarantees.map((g) => (
            <div key={g.n} style={{ background: "#fff", borderTop: "4px solid #2563b0", borderRadius: "8px", padding: "22px 20px", border: "1px solid #dde2ef" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "#e87722", marginBottom: "6px" }}>{g.n}</div>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{g.title}</h3>
              <p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.65 }}>{g.desc}</p>
            </div>
          ))}
        </div>

        {/* Subject expertise */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.25rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "8px" }}>
          Your Assignment is written by your choice of Subject Matter Expertise
        </h2>
        <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "16px" }}>
          Specialized Subject Matter Expertise across the globe — 2000+ expertise across the subjects &amp; countries (including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine)
        </p>
        <section style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "28px", marginBottom: "32px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {subjects.map((s) => (
              <span key={s} style={{ padding: "6px 14px", background: "rgba(255,255,255,0.12)", borderRadius: "20px", fontSize: "0.82rem", color: "#fff" }}>{s}</span>
            ))}
          </div>
          <p style={{ fontSize: "0.85rem", color: "#a0b8e0", marginTop: "16px" }}>
            USA · UK · Australia · Canada · New Zealand · Germany · France · Russia · Ukraine
          </p>
        </section>

        {/* Voice of Our customer */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>Voice of Our customer</h2>
        <TestimonialSlider testimonials={testimonials} />

        {/* FAQ */}
        <div style={{ marginTop: "32px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Frequently Asked Questions</h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#e87722", color: "#fff", padding: "52px 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Your Assignment Written by UK Experts</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>All Subjects · Plagiarism-Free · Unlimited Revisions · Response in 30 min</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>

      <style>{`
        @media(max-width:768px){
          .two-col-grid{grid-template-columns:1fr!important;}
          .three-col-grid{grid-template-columns:1fr 1fr!important;}
        }
        @media(max-width:480px){
          .three-col-grid{grid-template-columns:1fr!important;}
        }
      `}</style>
    </>
  );
}
