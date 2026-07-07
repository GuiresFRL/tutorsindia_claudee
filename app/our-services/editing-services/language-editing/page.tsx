import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "Language Editing & Proofreading Services UK",
  description: "Professional Language Editing & Proofreading by native English speakers. Grammar, spelling, sentence construction, word choice. Publication quality. Tutors India.",
};

const editingLevels = [
  { tier: "Standard Proofread", color: "#2563b0", items: ["Typographical errors", "Punctuation", "Grammar", "Surface-level corrections"] },
  { tier: "Advanced Editing", color: "#1a2a6c", items: ["All Standard features", "Sentence construction", "Terminology / reference check", "Logic, relevance and clarity", "Word choice improvement"] },
  { tier: "Premium Editing", color: "#e87722", items: ["All Advanced features", "Journal formatting", "Cover letter writing", "Tutors India certificate (on request)", "Free re-edit if rejected for language"] },
];

const editingChecks = [
  { icon: "📝", title: "Grammar & Spelling", desc: "All grammatical errors, spelling mistakes, and typographical errors corrected by native English-speaking editors." },
  { icon: "✂️", title: "Sentence Construction", desc: "Awkward phrasing, run-on sentences, sentence fragments, and non-parallel structure identified and corrected." },
  { icon: "🎯", title: "Word Choice", desc: "Inappropriate word choice, terminology inconsistency, and ESL grammar issues resolved for academic clarity." },
  { icon: "📐", title: "Logic & Clarity", desc: "Logic, relevance, and clarity of arguments assessed. Incoherent or ambiguous passages rewritten for maximum impact." },
  { icon: "📋", title: "Style & Consistency", desc: "Consistency in academic style (British or American English), terminology, font, and page layout ensured throughout." },
  { icon: "📄", title: "Journal Formatting", desc: "Document formatted to your target journal's or university's exact specifications — headings, margins, references, figures." },
];

const qaBoxes = [
  { img: "/images/qa/language-editing.webp", title: "Language Editing Sample", desc: "Check samples of our language editing work", href: "/our-sample-works/" },
  { img: "/images/qa/Quality-Assurance-2024.webp", title: "Quality Assurance", desc: "We ensure quality at every stage and the process.", href: "/guarantees/" },
  { img: "/images/qa/Plagiarism-Report-2024.webp", title: "Plagiarism Report", desc: "We deliver the document after scanning for plagiarism.", href: "/guarantees/" },
  { img: "/images/qa/Customer-Interaction-2024.webp", title: "Customer Interaction", desc: "We interact with you at every stage for amendments, queries and delivery.", href: "/contact-us/" },
];

const faqs = [
  { q: "What types of documents do you edit and proofread?", a: "At Tutors India, we edit and proofread documents such as Microsoft Word, PDF, text files, PowerPoint, WordPerfect, and Open Office documents. We accept journal articles, dissertations, book manuscripts, theses, reports, speeches, and more. With PDF documents, we use an annotation tool so our recommended changes appear as notes on your document." },
  { q: "What editing services does Tutors India provide?", a: "We offer language editing, thesis editing, copyediting, manuscript editing, proofreading, dissertation editing, ESL editing, academic editing, technical editing, business editing, and personal editing services. Customers can receive help with style and readability, or focus specifically on grammar, punctuation, and error removal." },
  { q: "Who are Tutors India's professional language editors?", a: "Tutors India professional editors are all highly qualified writers, professors, graduate students, lawyers, or business professionals with extensive editing experience. They are all native English speakers who have graduated from top universities with the highest academic qualifications. Our ESL editors have specific experience with English grammar help and resolving ESL grammar issues." },
  { q: "What is the timeline to complete language editing?", a: "Based on the discussion with your tutor about your language-editing requirement, we set the timeline. Standard proofreading is typically completed within 24–48 hours. Comprehensive language editing may take 3–7 days depending on document length and complexity. Express delivery is available for urgent submissions." },
  { q: "What if my paper is rejected for language errors?", a: "We are totally confident in our editing service. We will be happy to re-edit your document for free in case your paper is rejected by your journal for English language errors that our editors previously edited. This free re-edit guarantee does not cover material added to the paper after our final editing was completed." },
  { q: "Do you provide a certificate of language editing?", a: "Yes. We allow you to submit a certificate of language editing along with the final draft of your paper to your journal to prove that your manuscript has been edited by a native English-speaking editor. Our certificate proves your paper is already edited for English language — a step closer to publication. However, not every paper earns a certificate; every document is considered individually." },
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
  { quote: "I approached Tutors India for the second time to have my paper edited. I'm quite impressed with the editing quality and want to use Tutors India's services in the future. The editor performed an excellent job, and the crew that assisted me throughout the editing process was quite helpful.", author: "Dr. Henrik J. Olofsson, PhD", avatar: "/images/testimonials/user-profile.png" },
  { quote: "After evaluating a few outsourcers I decided to work with Tutors India because of their professional approach and ability to make changes about what I really needed in my language editing. I am very satisfied with our engagement. I appreciate their promptness and quality of work. Keep up the good work.", author: "Zoe", avatar: "/images/testimonials/t05.jpg" },
  { quote: "The wonderful team effort of Tutors India helped me in proofreading and technically edited my research paper. With their professionalism, prompt response and courteous service, I was able to receive what I expected. Proofreading has never been so efficient and so pleasant!", author: "Noah", avatar: "/images/testimonials/t17.jpg" },
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies", "Marketing & Communication",
  "Engineering & Technology", "Natural Sciences & Mathematics", "Biological & Life Science", "Economics & Administration",
  "Humanities & Social Science", "Law", "Medicine & Health", "Education & Training",
  "Journalism & Media", "Agriculture & Forestry", "Computer Science & IT", "Hospitality, Leisure & Sports",
];

export default function LanguageEditingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}<Link href="/our-services/editing-services/" style={{ color: "#a0b8e0" }}>Editing Services</Link>{" / "}<span style={{ color: "#fff" }}>Language Editing</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              Language Editing &amp; Proofreading — Academic Support
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Are you worried about the language quality of your paper presentation? Tutors India offers professional and complete language editing assistance to submit your papers with perfection and confidence. All documents are edited and proofread by qualified native English-speaking researchers from the US &amp; UK.
            </p>
            <p style={{ color: "#f9c74f", fontSize: "0.92rem", fontWeight: 600, marginBottom: "24px" }}>Native English Editors · British or American English · Free Re-edit if Rejected</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <a href="/docs/language-editing-brochure.pdf" target="_blank" rel="noopener noreferrer" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>📄 Brochure</a>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/samples/publication-research.jpg" alt="Academic editing and research support" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>Native English<br />Speakers Only<br />PhD-Level Editors</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      <div style={{ background: "#12214a", padding: "16px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: "Native English", l: "Editors Only" }, { n: "British/American", l: "English Supported" }, { n: "24–48h", l: "Standard Editing" }, { n: "< 5%", l: "Plagiarism" }, { n: "Free Re-edit", l: "If Rejected" }, { n: "30 min", l: "Response" }].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
              <div style={{ fontSize: "0.68rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>

        {/* Intro */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>
            End-to-End Copyediting &amp; Proofreading Services
          </h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            The Editing service has always been a requirement in any sort of academics, copywriting and especially in the Research field. Simple mistakes in spelling or grammar are not noticed by the students when in full flow, but they stand out to a third party. Therefore, editing is an essential part of the writing process. English language editing and journal formatting are key frames of Tutors India.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.94rem" }}>
            Tutors India offers complete editing services for the complete manuscript, dissertation, assignment, and publications. Our professional language editors ensure that research work and assignments are thoroughly checked for no language errors before submission. Your paper may be a 60,000-word thesis or an abstract of 300 words — our staff will work on the proper use of words, language, grammar and spelling, giving your paper a professional touch assuring it has reached publication quality.
          </p>
        </div>

        {/* 6 Editing Checks */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>What We Check &amp; Correct</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "18px" }}>Comprehensive editing covering every aspect of academic language quality</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
            {editingChecks.map(c => (
              <div key={c.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{c.icon}</div>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{c.title}</h3>
                <p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.65 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Tiers */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>Editing Service Tiers</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
            {editingLevels.map(t => (
              <div key={t.tier} style={{ background: "#fff", border: `2px solid ${t.color}`, borderRadius: "10px", overflow: "hidden" }}>
                <div style={{ background: t.color, color: "#fff", padding: "14px 18px", fontSize: "0.95rem", fontWeight: 700 }}>{t.tier}</div>
                <div style={{ padding: "16px" }}>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {t.items.map(i => (<li key={i} style={{ display: "flex", gap: "6px", fontSize: "0.82rem", color: "#555", padding: "5px 0", borderBottom: "1px solid #f0f2fa" }}><span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>✓</span> {i}</li>))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* QA Boxes */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "14px", marginBottom: "28px" }} className="four-col-grid">
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

        {/* Guarantees */}
        <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "24px", marginBottom: "28px" }}>
          <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "14px" }}>Our Guarantees</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "10px" }} className="four-col-grid">
            {["Unlimited Revision for committed work", "On-time delivery guaranteed", "24/7 support", "Word count excludes references", "Three-level quality check", "Confidentiality of information", "Plagiarism free — less than 5%", "Experienced subject-specific editors"].map((g, i) => (
              <div key={i} style={{ display: "flex", gap: "8px", fontSize: "0.81rem", color: "#c5d5f0", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                <span style={{ color: "#f9c74f", fontWeight: 700, flexShrink: 0 }}>{i + 1}.</span> {g}
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
                  <div style={{ fontWeight: 700, color: "#1a2a6c", fontSize: "0.84rem" }}>{t.author}</div>
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
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Your Document Edited by Native English Speakers</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>British or American English · 24–48hr Delivery · Free Re-edit if Rejected · Response in 30 min</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
