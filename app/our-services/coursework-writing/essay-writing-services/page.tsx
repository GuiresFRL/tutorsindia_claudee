"use client";
import Link from "next/link";
import FaqAccordion from "@/components/ui/FaqAccordion";

const essayFeatures = [
  { no: "1", title: "Research-Based Writing", desc: "All essays are built on extensive academic research using credible scholarly sources, journals, and online databases. We conduct thorough source analysis and note-making before writing begins." },
  { no: "2", title: "Critical Analysis & Argumentation", desc: "Our experts provide essays that reflect deep critical thinking, evidence-based arguments, and structured discussions aligned with your university's postgraduate assessment criteria." },
  { no: "3", title: "Proper Academic Referencing", desc: "We follow all major citation styles — Harvard, APA, MLA, OSCOLA, Chicago — and draw on scholarly journals, online databases, and books to ensure correct citation in every order." },
  { no: "4", title: "Plagiarism-Free Originality", desc: "Every essay is written from scratch, scanned for plagiarism before delivery, and supported by credible scholarly sources. We maintain strict anti-plagiarism policies across all work." },
];

const includedItems = [
  { title: "Introduction", desc: "Clear statement of the topic, research objectives, and scope of the essay." },
  { title: "Main Body", desc: "Logically organised body paragraphs supported by critical thinking and evidence-based arguments." },
  { title: "Conclusion", desc: "Concise summary of essay findings, analysis outcomes, and key takeaways." },
  { title: "Bibliography", desc: "Prepared and formatted according to your university's referencing guidelines." },
];

const serviceTiers = [
  {
    tier: "Basic",
    color: "#2563b0",
    title: "Foundational Essay Support",
    desc: "Essays constructed from quality academic sources, showing knowledge on the topic and basic critical analysis.",
    includes: [
      "Topic selection (3 options based on area of interest)",
      "1,000-word structured essay",
      "Academic research & referencing",
      "Introduction, body, and conclusion",
      "Plagiarism-free content",
    ],
  },
  {
    tier: "Advanced",
    color: "#1a2a6c",
    title: "Research-Driven Essay Writing",
    desc: "Extensive research and literature review with identification of core issues and strong analysis to university standards.",
    includes: [
      "1 focused topic",
      "Extensive literature review",
      "Research gap identification",
      "Evidence-based critical analysis",
      "Formatted bibliography",
      "Unlimited revisions",
    ],
  },
  {
    tier: "Premium",
    color: "#e87722",
    title: "Expert Academic Writing",
    desc: "Comprehensive academic writing with complex critical analysis, evidence-based arguments, and full quality assurance.",
    includes: [
      "Full research methodology",
      "Complex critical analysis",
      "Industry-specific insights (MBA)",
      "Detailed argumentative structure",
      "Plagiarism report included",
      "Priority delivery & revisions",
    ],
  },
];

const guarantees = [
  {
    icon: "🔒",
    title: "Complete Confidentiality",
    points: [
      "All academic/personal information kept fully confidential",
      "Work and documents managed in total privacy",
      "Confidentiality maintained from initial stages to final submission",
    ],
  },
  {
    icon: "📌",
    title: "Proper Referencing",
    points: [
      "Citation styles followed as per university guidelines",
      "Drawn from scholarly journals, databases, and books",
      "Correct citation style ensured across all orders",
    ],
  },
  {
    icon: "✅",
    title: "Plagiarism-Free Content",
    points: [
      "All orders written entirely from scratch",
      "Final draft scanned for plagiarism before submission",
      "Supported by credible scholarly sources",
    ],
  },
  {
    icon: "⏱",
    title: "Timely Delivery",
    points: [
      "Orders delivered well within the agreed deadline",
      "Constant updates on order progress",
      "Quick responses to all queries raised",
    ],
  },
  {
    icon: "👨‍🎓",
    title: "Experienced Writers",
    points: [
      "Writers with proven academic expertise",
      "Relevant subject knowledge across all disciplines",
      "Content customised to your specific topic and level",
    ],
  },
  {
    icon: "🔄",
    title: "Unlimited Revisions",
    points: [
      "100% custom-written, plagiarism-free papers",
      "Unlimited revision service provided",
      "Modifications addressed based on original instructions",
    ],
  },
];

const faqs = [
  { q: "What does your MBA Essay Writing Service include?", a: "Our service covers every stage of essay development, from topic selection and research to writing, editing, and proofreading. We ensure that each essay is tailored to your university requirements and assessment criteria. Proper formatting and referencing are also included. The final document is delivered ready for submission." },
  { q: "Are the essays customized according to my requirements?", a: "Yes, every essay is written exclusively for your academic needs. Our writers follow your instructions, university guidelines, and marking rubrics to create relevant content. We also consider your preferred reference style and specific objectives. This ensures a personalised and high-quality academic solution." },
  { q: "How do you ensure originality in MBA essays?", a: "All essays are developed from scratch using credible academic sources and independent research. We follow strict plagiarism-free writing practices and avoid recycled content. Each assignment is reviewed for originality before delivery. This helps maintain academic integrity and university compliance." },
  { q: "Can you handle urgent MBA essay deadlines?", a: "Yes, we provide support for both standard and urgent deadlines. Our academic experts work efficiently to deliver quality essays within the required timeframe. Even for short deadlines, we maintain high standards of research and writing. Timely delivery remains one of our top priorities." },
  { q: "Is my personal and academic information secure?", a: "Absolutely. We maintain strict confidentiality and data protection measures for all clients. Your personal information, project details, and communication remain secure throughout the process. We never share your data with third parties. Your privacy is always protected." },
  { q: "Do you offer revisions if changes are required?", a: "Yes, we provide revision support to ensure your essay meets your expectations. If any modifications are required based on the original instructions, our team will address them promptly. We aim to deliver work that aligns with your academic requirements. Student satisfaction is our priority." },
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies",
  "Marketing & Communication", "Engineering & Technology", "Natural Sciences & Mathematics",
  "Biological & Life Science", "Economics & Administration", "Humanities & Social Science",
  "Law", "Medicine & Health", "Education & Training", "Journalism & Media",
  "Agriculture & Forestry", "Computer Science & IT", "Hospitality, Leisure & Sports",
];

const essayProcess = [
  { step: "1", label: "Share Your Requirements", desc: "Provide your essay topic, university guidelines, word count, deadline, and any specific instructions or marking rubrics." },
  { step: "2", label: "Research & Planning", desc: "Our expert conducts thorough academic research, evaluates sources, identifies research gaps, and creates a structured outline." },
  { step: "3", label: "Writing & Drafting", desc: "Your essay is written from scratch with critical analysis, well-supported arguments, and proper academic referencing." },
  { step: "4", label: "Editing & Delivery", desc: "The draft is proofread, plagiarism-checked, and formatted before being delivered to you well within the deadline." },
];

const relatedServices = [
  { label: "Annotated Bibliography", href: "/our-services/coursework-writing/annotated-bibliography/" },
  { label: "Reflective Report", href: "/our-services/coursework-writing/reflective-report/" },
  { label: "Critical Review", href: "/our-services/coursework-writing/critical-review/" },
  { label: "Report Writing", href: "/our-services/coursework-writing/report-writing/" },
  { label: "Assignment Writing", href: "/our-services/coursework-writing/assignment-writing/" },
  { label: "Literature Review", href: "/our-services/coursework-writing/literature-review/" },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(f => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function EssayWritingServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Our Services</Link>{" / "}
            <Link href="/our-services/coursework-writing/" style={{ color: "#a0b8e0" }}>Coursework Writing</Link>{" / "}
            <span style={{ color: "#fff" }}>Essay Writing Services</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.6rem,3vw,2.4rem)", marginBottom: "18px", lineHeight: 1.3 }}>
            Custom Essay Writing Services for Academic Success in the UK and UAE
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "1.05rem", maxWidth: "800px", lineHeight: 1.8, marginBottom: "28px" }}>
            Are you finding it difficult to cope with your essay deadlines, research assignments, and academic pressures at your university? Tutors India provides expert academic writing assistance to help students studying for Master&apos;s or MBA degree courses in the UK or UAE — high quality, original essays written in beautiful British English.
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <Link href="/order-now/" style={{ padding: "12px 32px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "0.95rem" }}>Place an Order</Link>
            <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, fontSize: "0.95rem" }}>Reach Our Experts</Link>
          </div>
        </div>
      </section>

      {/* Intro + Key Features */}
      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "12px" }}>
          Supporting Master&apos;s Students with Research-Based Academic Writing
        </h2>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "10px" }}>
          Master&apos;s degree level essays require high-level research skills and critical analysis. Our postgraduate assistance ensures your essays are in line with the required standards set by UK and UAE universities. We apply a structured method which includes extensive research, source analysis, note-making, outline creation, composition, and editing.
        </p>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "36px" }}>
          Our academic writing help is offered across many subject areas including psychology, marketing, accounting, public health, human resource management, science, social work, and business management — from undergraduate through to MBA and PhD level. We provide essays that reflect subject proficiency, critical analysis skills, logical structure, and sound argumentation.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "24px" }}>
          {essayFeatures.map(f => (
            <div key={f.no} style={{ background: "#f5f7ff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "24px" }}>
              <div style={{ width: "40px", height: "40px", background: "#1a2a6c", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "1.1rem", marginBottom: "14px" }}>{f.no}</div>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "8px" }}>{f.title}</h3>
              <p style={{ color: "#555", fontSize: "0.92rem", lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What's Included */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "8px" }}>
            Perfectly Structured Essays Designed to Meet University Criteria
          </h2>
          <p style={{ color: "#555", marginBottom: "32px" }}>
            Every essay we deliver has been written with university assessment criteria in mind — well researched, thoroughly evaluated, and supported by reliable academic sources with consistent postgraduate-level citation.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: "20px", marginBottom: "32px" }}>
            {includedItems.map(item => (
              <div key={item.title} style={{ background: "#fff", borderRadius: "10px", padding: "20px 24px", borderTop: "4px solid #1a2a6c" }}>
                <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ color: "#555", fontSize: "0.9rem", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ color: "#444", lineHeight: 1.8 }}>
            In addition to being able to write an academic essay well, analytical discussion, deep research, critical thinking, and a proper academic structure are required to create an excellent one. Our experts use credible scholarly references while composing essays across business, healthcare, engineering, management, and social science disciplines.
          </p>
        </div>
      </section>

      {/* Service Tiers */}
      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", textAlign: "center", marginBottom: "8px" }}>
          Structure of Our Essay Writing Services
        </h2>
        <p style={{ textAlign: "center", color: "#555", marginBottom: "36px" }}>
          Choose the level of support that matches your academic needs and submission timeline.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "24px" }}>
          {serviceTiers.map(t => (
            <div key={t.tier} style={{ background: "#fff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 2px 12px rgba(26,42,108,0.08)" }}>
              <div style={{ background: t.color, color: "#fff", padding: "18px 24px" }}>
                <div style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "1px", opacity: 0.8, marginBottom: "4px" }}>{t.tier.toUpperCase()}</div>
                <div style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700 }}>{t.title}</div>
              </div>
              <div style={{ padding: "20px 24px" }}>
                <p style={{ color: "#555", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "16px" }}>{t.desc}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {t.includes.map(item => (
                    <li key={item} style={{ display: "flex", gap: "8px", alignItems: "flex-start", color: "#444", fontSize: "0.88rem", marginBottom: "6px" }}>
                      <span style={{ color: t.color, fontWeight: 700, flexShrink: 0 }}>✓</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <Link href="/order-now/" style={{ padding: "12px 36px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
        </div>
      </section>

      {/* Process */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "8px" }}>
            Our Essay Writing Process
          </h2>
          <p style={{ color: "#555", marginBottom: "32px" }}>
            Provide us with all the information concerning your essay, and we will conduct the research, write, and review it for you.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: "20px" }}>
            {essayProcess.map(p => (
              <div key={p.step} style={{ background: "#fff", borderRadius: "10px", padding: "24px" }}>
                <div style={{ width: "44px", height: "44px", background: "#e87722", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "1.1rem", marginBottom: "14px" }}>{p.step}</div>
                <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "0.95rem", color: "#1a2a6c", marginBottom: "6px" }}>{p.label}</h3>
                <p style={{ color: "#555", fontSize: "0.88rem", lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "8px" }}>
          Essay Writing Services that Guarantee Your Academic Success
        </h2>
        <p style={{ color: "#555", marginBottom: "32px" }}>
          We are recognised by students seeking the best essay writing help in the UK and UAE for quality-focused, research-driven academic assistance.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "20px" }}>
          {guarantees.map(g => (
            <div key={g.title} style={{ background: "#f5f7ff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px 24px" }}>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "12px" }}>
                <span style={{ fontSize: "1.5rem" }}>{g.icon}</span>
                <span style={{ fontWeight: 700, color: "#1a2a6c", fontSize: "0.95rem" }}>{g.title}</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {g.points.map(pt => (
                  <li key={pt} style={{ display: "flex", gap: "8px", alignItems: "flex-start", color: "#555", fontSize: "0.87rem", marginBottom: "6px" }}>
                    <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>✓</span>{pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Subject Areas */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", marginBottom: "8px" }}>
            Academic Excellence with Global Expertise Across All Disciplines
          </h2>
          <p style={{ color: "#a0b8e0", marginBottom: "28px" }}>
            With 2,000+ academic writers worldwide, we provide expert essay writing assistance across Arts, Literature, Science, Engineering, Medicine, and much more — all with knowledge tailored to your specific subject area and university standards.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "28px" }}>
            {subjects.map(s => (
              <span key={s} style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "6px 16px", borderRadius: "20px", fontSize: "0.85rem" }}>{s}</span>
            ))}
          </div>
          <Link href="/our-writers/" style={{ color: "#f9c74f", fontWeight: 600, fontSize: "0.95rem" }}>Meet Our Writers →</Link>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "28px" }}>
          Frequently Asked Questions
        </h2>
        <FaqAccordion faqs={faqs} />
      </section>

      {/* Related Services */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", color: "#1a2a6c", marginBottom: "20px" }}>Related Coursework Services</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {relatedServices.map(s => (
              <Link key={s.label} href={s.href} style={{ padding: "10px 22px", background: "#fff", border: "1px solid #dde2ef", borderRadius: "5px", color: "#1a2a6c", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none" }}>{s.label}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "56px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.6rem", marginBottom: "12px" }}>
          Get Expert Essay Writing Support Today
        </h2>
        <p style={{ color: "#c5d5f0", marginBottom: "28px", fontSize: "1rem" }}>
          Need assistance with a challenging essay, complex research topic, or approaching deadline? Share your academic requirements and we&apos;ll deliver a high-quality, original essay tailored to your university standards.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 36px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
          <Link href="/contact-us/" style={{ padding: "12px 36px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
