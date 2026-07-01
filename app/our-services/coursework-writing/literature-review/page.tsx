import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "UK Postgraduate & Doctorate Literature Review Writing Help",
  description: "The UK Postgraduate & Doctorate Literature Review Writing Help. Minimum 80 references. Systematic, critical, thematic reviews. Expert researchers. Tutors India.",
};

const litReviewTypes = [
  { icon: "📋", title: "Systematic Literature Review", desc: "PRISMA protocol, comprehensive multi-database search, inclusion/exclusion criteria, quality assessment tools (GRADE, CASP), and narrative or meta-analytic synthesis of findings." },
  { icon: "🗺️", title: "Scoping Review", desc: "Maps the existing evidence on a topic, identifies key concepts, theories, and sources of evidence. Identifies research gaps and informs future systematic review questions." },
  { icon: "🔍", title: "Critical / Narrative Review", desc: "Critical synthesis and evaluation of existing literature, identifying key themes, debates, methodological approaches, and gaps. The most common form in Masters dissertations." },
  { icon: "📊", title: "Integrative Review", desc: "Reviews and synthesises diverse methodologies (quantitative and qualitative) on a single topic. Provides a comprehensive understanding of a phenomenon or healthcare problem." },
  { icon: "🔬", title: "Conceptual Framework Review", desc: "Develops and justifies the theoretical and conceptual framework underpinning the research, drawing on established theories, models, and analytical concepts." },
  { icon: "📰", title: "Rapid Evidence Review", desc: "Streamlined literature review for applied settings where time is limited. Follows simplified systematic methods while maintaining methodological rigour." },
];

const reviewComponents = [
  { n: "01", title: "Search Strategy & Database Coverage", desc: "Systematic search across multiple databases (Web of Science, ProQuest, Emerald, IEEE, Scopus, PubMed) using appropriate keywords, Boolean operators, and search strings." },
  { n: "02", title: "Inclusion & Exclusion Criteria", desc: "Clear criteria for selecting and excluding sources — by date, language, study type, geographical focus, and relevance to research questions." },
  { n: "03", title: "Critical Appraisal", desc: "Quality assessment of included studies using appropriate tools (CASP, GRADE, JBI). Evaluation of research rigour, reliability, and validity." },
  { n: "04", title: "Thematic Synthesis", desc: "Identification of key themes, sub-themes, and patterns across the literature. How studies complement, contradict, and extend each other." },
  { n: "05", title: "Theoretical Framework Integration", desc: "Identification and application of relevant theories, models, and conceptual frameworks that underpin the research area." },
  { n: "06", title: "Research Gap Identification", desc: "Clear articulation of what is missing in the existing literature — the gap your research aims to address, supported by evidence from the reviewed studies." },
  { n: "07", title: "Minimum 80 References", desc: "At Tutors India, we ensure a minimum of 80 peer-reviewed references for the research framework, sourced from credible academic databases." },
  { n: "08", title: "Critical Analysis & Argumentation", desc: "Development of an argument across the literature rather than merely describing sources. Critical engagement demonstrating postgraduate academic capability." },
];

const serviceTiers = [
  { tier: "Basic", color: "#2563b0", desc: "Comprehensive coverage of key literature with identification of core themes and research gaps. 1000–3000 words with minimum 30 peer-reviewed references.", includes: ["30+ peer-reviewed references", "Key theme identification", "Research gap outlined", "Standard critical analysis", "Harvard/APA referencing"] },
  { tier: "Advanced", color: "#1a2a6c", desc: "Systematic coverage with wide source range, clear research gap justification, conceptual framework, and strong critical analysis. 3000–5000 words.", includes: ["50+ peer-reviewed references", "Systematic search strategy", "Clear research gap", "Conceptual framework", "Strong critical analysis"] },
  { tier: "Premium", color: "#e87722", desc: "Seminal research engagement with minimum 80 references, excellent critical analysis, thematic synthesis, and contribution to knowledge statement.", includes: ["80+ peer-reviewed references", "Full PRISMA/systematic protocol", "Excellent critical analysis", "Thematic synthesis", "Contribution to knowledge"] },
];

const faqs = [
  { q: "How many references should a literature review include?", a: "A dissertation literature review contributes 40% of weight towards the overall dissertation grade. At Tutors India, we ensure a minimum of 80 peer-reviewed references for the research framework for doctoral dissertations. Masters dissertations typically require 30–60 references. We collect exhaustive, up-to-date literature from credible academic databases to make you hassle-free." },
  { q: "What databases do you use for literature searching?", a: "We search comprehensively across Web of Science, ProQuest, Google Scholar, Business Source Complete, Emerald Insight, Scopus, IEEE Xplore, ScienceDirect, PubMed/MEDLINE, CINAHL, PsycINFO, JSTOR, and Academic Complete. We also use latest newspaper articles from Economic Times, Forbes, The Wall Street, and The Economist to identify industrial problems." },
  { q: "Can you write a systematic literature review?", a: "Yes. We develop full PRISMA-compliant systematic literature reviews including protocol development, comprehensive multi-database searches, inclusion/exclusion criteria, quality assessment (using CASP, GRADE, or JBI tools), data extraction, and narrative or thematic synthesis. We also support meta-analyses." },
  { q: "How do you ensure the literature review is not plagiarised?", a: "Our literature reviews are written from scratch with original critical analysis and synthesis. All work is scanned using Turnitin before delivery. Less than 5% plagiarism is guaranteed. We paraphrase all sources in our own words, with clear in-text citations for all referenced material." },
  { q: "Can I provide feedback during the writing process?", a: "Yes. We share the literature review in drafts, allowing you to review each section and provide feedback. Our experts then incorporate your feedback before proceeding. This iterative process ensures the final literature review aligns perfectly with your supervisor's expectations and university requirements." },
  { q: "What if my supervisor requires changes to the literature review?", a: "We provide unlimited free revisions. If your supervisor requires any changes to the literature review, simply share their feedback and we will revise accordingly at no additional charge. Minor changes are completed within 24 working hours and significant revisions within 48 working hours." },
];

const testimonials = [
  { quote: "Writing a literature review for a research paper is challenging and rigorous. Tutors India's service cultivates the tutors who excel in scholarly writing. They delivered my project and clarified my queries more than I expected. Thanks — looking forward to working with you again.", author: "Grace", avatar: "/images/testimonials/t10.jpg" },
  { quote: "Tutors India has been very helpful in writing the literature review for my research paper. Their experts are very professional and the staff who helped me have been very hospitable and cleared all my doubts. Great work!", author: "Arhaan", avatar: "/images/testimonials/t20.jpg" },
  { quote: "Availing services from Tutors India was perhaps the best decision in my PhD journey. The writers were patient and more than willing to answer all my queries. They not only wrote the chapters amazingly well, they improved the Literature review to a great extent!", author: "Alexander", location: "Algeria", avatar: "/images/testimonials/t16.jpg" },
  { quote: "Applied substantive literature writing services and I am pleased with the results. Good quality work and all adequate changes made in the literature review of my research paper. Received a polished and advanced quality literature review. Highly satisfactory performance!", author: "Shawn Garcia", location: "UK", avatar: "/images/testimonials/t06.jpg" },
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies", "Marketing & Communication",
  "Engineering & Technology", "Natural Sciences & Mathematics", "Biological & Life Science", "Economics & Administration",
  "Humanities & Social Science", "Law", "Medicine & Health", "Education & Training",
  "Journalism & Media", "Agriculture & Forestry", "Computer Science & IT", "Hospitality, Leisure & Sports",
];

export default function LiteratureReviewPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}<Link href="/our-services/coursework-writing/" style={{ color: "#a0b8e0" }}>Coursework Writing</Link>{" / "}<span style={{ color: "#fff" }}>Literature Review</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              The UK Postgraduate &amp; Doctorate Literature Review Writing Help
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Are you looking for an expert writer who can guide you in writing the Literature Review in a systematic way? A dissertation literature review contributes 40% of weight towards your overall grade. Tutors India&apos;s experts find the easy way to handle this tension — collecting exhaustive, up-to-date literature to make you hassle-free.
            </p>
            <p style={{ color: "#f9c74f", fontSize: "0.92rem", fontWeight: 600, marginBottom: "24px" }}>
              Minimum 80 References · Systematic · Critical · Thematic Synthesis
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/tutorsindia-logo-hd.jpg" alt="Tutors India" style={{ width: "90px", height: "90px", objectFit: "contain", marginBottom: "10px" }} />
            <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#f9c74f" }}>80+</div>
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0" }}>References Minimum<br />per Dissertation<br />Literature Review</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      <div style={{ background: "#12214a", padding: "16px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: "80+", l: "References Min." }, { n: "12+ Databases", l: "Searched" }, { n: "6 Review Types", l: "Covered" }, { n: "< 5%", l: "Plagiarism" }, { n: "Unlimited", l: "Revisions" }, { n: "30 min", l: "Response" }].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
              <div style={{ fontSize: "0.68rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Expert Literature Review Writing Service</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            Our service identifies the critical issues in the literature, shows how arguments have developed within the area, discusses how authors&apos; works complement one another, as well as disagree. Tutors India&apos;s literature review experts find an easy way to handle this tension — collecting exhaustive, up-to-date literature to make you hassle-free.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.94rem" }}>
            A dissertation literature review requires minimum 80 peer-reviewed references for the research framework. Our experts are qualified researchers from US &amp; UK universities with experience in research methodology, industry experience, and educational degrees from international and top-ranked universities. All literature reviews undergo three-level quality checks and plagiarism scanning before delivery.
          </p>
        </div>

        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Literature Review Types We Cover</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
            {litReviewTypes.map(l => (
              <div key={l.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{l.icon}</div>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{l.title}</h3>
                <p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.65 }}>{l.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Literature Review Key Components</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "18px" }}>We follow specific university guidelines ensuring every component meets doctoral and postgraduate standards</p>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", overflow: "hidden" }}>
            {reviewComponents.map((item, i) => (
              <div key={item.n} style={{ padding: "14px 20px", borderBottom: i < reviewComponents.length - 1 ? "1px solid #f0f2fa" : "none", display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "50%", width: "30px", height: "30px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.68rem", fontWeight: 700, flexShrink: 0 }}>{item.n}</div>
                <div>
                  <h3 style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "3px" }}>{item.title}</h3>
                  <p style={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>Service Tiers</h2>
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

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "22px", marginBottom: "28px" }} className="two-col-grid">
          <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "14px" }}>Free Deliverables with Your Literature Review</h3>
            {["Abstract or Executive Summary", "Reference list in required citation style", "Free research articles (PDFs where accessible)", "Thematic framework or concept map", "Free tutoring sessions on the review", "Plagiarism report (Turnitin)", "Annotated bibliography on request", "Research gap statement"].map(item => (
              <div key={item} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", fontSize: "0.83rem", color: "#c5d5f0" }}>
                <span style={{ color: "#f9c74f", fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
              </div>
            ))}
          </div>
          <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px", border: "1px solid #dde2ef" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our Guarantees</h3>
            {["Minimum 80 references for doctoral work", "Unlimited revisions for committed work", "On-time delivery guaranteed", "24/7 customer support", "Three-level quality check", "100% confidentiality", "Plagiarism free — less than 5%", "Draft sharing for incremental feedback"].map((g, i) => (
              <div key={i} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid #dde2ef", fontSize: "0.83rem", color: "#555" }}>
                <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>{i + 1}.</span> {g}
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>What Our Clients Say</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "16px" }} className="two-col-grid">
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
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Your Literature Review Written by Experts</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>80+ References · 12+ Databases · Systematic · Unlimited Revisions · 30 min Response</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
