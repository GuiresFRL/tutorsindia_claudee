import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "Masters Specific Dissertation Writing Services UK",
  description: "Business Plan, Meta-Analysis, Systematic Review, Secondary Data dissertations. Expert UK & US writers. Tutors India — 8000+ dissertations completed.",
};

const serviceTypes = [
  {
    icon: "📊",
    title: "Business Plan Dissertation",
    img: "",
    desc: "The most challenging dissertation for any student is undertaking the business plan as part of their dissertation work. At Tutors India, we are completely aware of business plan structure and our writers have already completed more than 2,500 Business Plan dissertations successfully. Our team consists of finance and accountancy professionals, subject matter experts and statistical analysts.",
    points: ["Market analysis and competitive landscape", "Financial projections and viability assessment", "SWOT and PESTLE analysis", "Business model canvas and strategy", "Operations plan and risk management", "Executive summary and investment case"],
  },
  {
    icon: "🔬",
    title: "Meta-Analysis Dissertation",
    img: "",
    desc: "Undertaking a dissertation for Meta-analysis is different from a systematic review as it combines the results of many individual studies relevant to the topic and determines the findings, allowing rigorous comparison. At Tutors India, we offer complete meta-analysis writing services covering comprehensive search strategy, setting inclusion and exclusion criteria, publication bias, effect size calculation, appropriate statistical methods, heterogeneity consideration, and visual analysis.",
    points: ["Comprehensive database search strategy", "Inclusion and exclusion criteria development", "Publication bias assessment (funnel plots)", "Effect size calculation and pooling", "Heterogeneity analysis (I² and Q-statistics)", "Forest plots and visual analysis", "PRISMA flow diagram and reporting"],
  },
  {
    icon: "📋",
    title: "Systematic Review",
    img: "",
    desc: "Doing a dissertation in a systematic review is common today as it brings the same level of rigour to reviewing research evidence using secondary data. Our experts are pioneers in examining both qualitative evidence and quantitative papers, or mixed, and outcomes are assessed for clinical effectiveness, appropriateness, feasibility, and meaningfulness. We follow wide-ranging reporting guidelines such as PRISMA (Preferred Reporting Items for Systematic Reviews and Meta-Analyses) for RCT and other intervention programmes.",
    points: ["PRISMA protocol development and flow diagram", "Comprehensive multi-database literature search", "Quality assessment using appropriate tools (GRADE, CASP)", "Data extraction and synthesis", "Narrative and thematic synthesis", "Subgroup analysis where applicable", "Recommendations based on evidence strength"],
  },
  {
    icon: "📚",
    title: "Secondary / Library Data Based",
    img: "",
    desc: "Although the majority of students prefer primary data due to its customisation advantages, there is another valuable approach called secondary sources of data. Our writers at Tutors India are pioneers in secondary research-based dissertations. We have completed more than 1,000+ secondary-based dissertations across wide disciplines including competitive analysis, business plans, meta-analyses, reviews, systematic reviews and many more.",
    points: ["ONS, World Bank, Eurostat, NHS Digital sourcing", "Annual reports and corporate data analysis", "Government policy and regulatory data", "Census and longitudinal datasets", "Published academic and industry datasets", "Critical appraisal of secondary sources", "Full referencing and data citation"],
  },
];

const serviceTiers = [
  { tier: "Basic", color: "#2563b0", desc: "Developed based on relevant sources, a reasonable attempt at finding an area that warrants research and evidence of an attempt to provide critical evaluation but mainly descriptive.", includes: ["Relevant academic sources", "Research gap attempt", "Basic critical evaluation", "Standard structure", "Proper referencing"] },
  { tier: "Advanced", color: "#1a2a6c", desc: "Wide range of sources, a clear identification of research gap in the literature along with aim and research questions.", includes: ["Wide range of sources", "Clear research gap identification", "Defined aims & research questions", "Strong academic writing", "Advanced methodology"] },
  { tier: "Premium", color: "#e87722", desc: "Wide range of seminal research with throughout engagement using latest resources. A solid gap identified based on current literature and justified thoroughly. Excellent critical analysis shown (upgradable).", includes: ["Seminal research engagement", "Solid justified research gap", "Excellent critical analysis", "Latest resources used", "Upgradable to publication standard"] },
];

const qaBoxes = [
  { img: "/images/services/masters-specific-type.png", title: "Specific Dissertation Sample", desc: "Check sample specific type dissertation from our expert writers", href: "/our-sample-works/" },
  { img: "/images/qa/Quality-Assurance.png", title: "Quality Assurance", desc: "We ensure quality at every stage and the process.", href: "/guarantees/" },
  { img: "/images/qa/Plagiarism-Report.png", title: "Plagiarism Report", desc: "We deliver the document after scanning for plagiarism.", href: "/guarantees/" },
  { img: "/images/qa/Customer-Interaction.png", title: "Customer Interaction", desc: "We interact with the customer at every stage in terms of amendments, query and delivery.", href: "/contact-us/" },
];

const faqs = [
  { q: "On which areas do you provide specific dissertation writing services?", a: "We accept orders from a wide range of subjects including Business Management (HR, Operations, Finance, Digitalisation, Technology, Marketing), Economics, Computer Science, English, Literature, Engineering, Epidemiology, Public Health, Life Science, and Nutrition. If your topic or field of interest is not listed, please contact us to know more." },
  { q: "What information do I need to provide while ordering a specific dissertation?", a: "To match exactly with your requirement, we require: the title you have already selected, whether it is primary, secondary, or business plan, university guidelines for style and referencing, rubric scale and marking criteria, scope, target country, industry experience, and feasibility of data collection, if any. Even if you only have a research proposal, that is also fine." },
  { q: "Do you have PhD Scholars in your firm?", a: "Yes, we have in-house expertise consisting of PhD Scholars, postdoctoral fellows, and MD-holding PhD scholars with rich experience from various universities, who can guide you throughout your research. Our team also includes research methodology experts, statisticians, and subject-specific editors." },
  { q: "How can I be sure my specific dissertation will be accepted?", a: "At Tutors India, we have been helping all sorts of research from PhD scholars to Masters-level research work for more than 22 years. We have helped complete 3,500+ PhDs and 8,000+ Masters dissertations. We provide unlimited revisions on whatever we commit, and our team works with you until your supervisor is satisfied." },
  { q: "If I am not satisfied with my dissertation, will it be replaced?", a: "If you are not satisfied with the work being done, we appreciate you specifying/providing us directional comments and feedback, so we can check with our expertise and provide justification for the same. We provide unlimited revisions on whatever we commit, completely free of charge." },
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

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies",
  "Marketing & Communication", "Engineering & Technology", "Natural Sciences & Mathematics",
  "Biological & Life Science", "Economics & Administration", "Humanities & Social Science",
  "Law", "Medicine & Health", "Education & Training", "Journalism & Media",
  "Agriculture & Forestry", "Computer Science & IT", "Hospitality, Leisure & Sports",
];

export default function SpecificDissertationPage() {
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
              <Link href="/our-services/masters-dissertation-writing-services/" style={{ color: "#a0b8e0" }}>Masters Dissertation</Link>{" / "}
              <span style={{ color: "#fff" }}>Specific Dissertation</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              The US and the UK Master's Complete Specific Type of Dissertation Writing Help
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Are you looking for an expert writer of your specific type of Master's or postgraduate dissertation — Business Plan, Meta-Analysis, Systematic Review, Reflective Practice, Secondary data based, dissertation by translation, or Library-based dissertation?
            </p>
            <p style={{ color: "#f9c74f", fontSize: "0.92rem", fontWeight: 600, marginBottom: "24px" }}>Then You've Certainly Reached the Right place</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/ask-an-expert/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Ask an Expert</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/samples/dissertation-samples.webp" alt="Academic experts collaborating" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.78rem", color: "#c5d5f0", lineHeight: 1.6 }}>Trusted Academic<br />Writing &amp; Editing<br />Since 2001</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      {/* ── STATS BAR ── */}
      <div style={{ background: "#12214a", padding: "16px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: "8,000+", l: "Dissertations Done" }, { n: "2,500+", l: "Business Plans" }, { n: "1,000+", l: "Secondary Dissertations" }, { n: "3,500+", l: "PhDs Helped" }, { n: "2,000+", l: "Expert Writers" }, { n: "< 5%", l: "Plagiarism" }].map(s => (
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
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>
            What is a Specific Type of Dissertation?
          </h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            At Tutors India, we write complete master's dissertations from introduction to recommendations, covering specific dissertation types that go beyond the standard primary research design. Our professional dissertation writers have completed around 8,000 Masters Dissertations successfully across all formats.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.94rem" }}>
            After the order is confirmed, we allocate a specialist team to scrutinise the work. Once the outline and chapterisation plan is approved, we dispatch the work in chapters and update you on progress. You can also pay in instalments. We deliver your work as per the agreed schedule, or even before.
          </p>
        </div>

        {/* 4 Service Types */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>
          Specific Dissertation Types We Cover
        </h2>
        <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "22px" }}>Expert support for every specialised dissertation format required by UK, US and Australian universities</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "22px", marginBottom: "32px" }} className="two-col-grid">
          {serviceTypes.map(svc => (
            <div key={svc.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <span style={{ fontSize: "2rem" }}>{svc.icon}</span>
                <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c" }}>{svc.title}</h3>
              </div>
              <p style={{ color: "#555", fontSize: "0.87rem", lineHeight: 1.75, marginBottom: "14px" }}>{svc.desc}</p>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {svc.points.map(p => (
                  <li key={p} style={{ display: "flex", gap: "8px", fontSize: "0.82rem", color: "#555", padding: "5px 0", borderBottom: "1px solid #f0f2fa" }}>
                    <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>✓</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Service Tiers */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>
            What Services Do We Offer?
          </h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "18px" }}>We write complete master's dissertations from introduction to recommendations across three quality tiers</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
            {serviceTiers.map(t => (
              <div key={t.tier} style={{ background: "#fff", border: `2px solid ${t.color}`, borderRadius: "10px", overflow: "hidden" }}>
                <div style={{ background: t.color, color: "#fff", padding: "14px 18px" }}>
                  <div style={{ fontSize: "1.2rem", fontWeight: 700 }}>{t.tier}</div>
                </div>
                <div style={{ padding: "16px" }}>
                  <p style={{ fontSize: "0.84rem", color: "#555", lineHeight: 1.65, marginBottom: "12px" }}>{t.desc}</p>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {t.includes.map(i => (
                      <li key={i} style={{ display: "flex", gap: "6px", fontSize: "0.78rem", color: "#555", padding: "4px 0", borderBottom: "1px solid #f0f2fa" }}>
                        <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>✓</span> {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Free Deliverables + Guarantees */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "22px", marginBottom: "28px" }} className="two-col-grid">
          <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "14px" }}>Free Deliverables with Your Order</h3>
            {["Abstract or Executive Summary", "Free research articles used in writing", "SPSS data sheet and output", "Questionnaire or interview guide", "Reflective log or diary", "Free tutoring sessions on the work", "Graphs & Tables (redrawn)", "SPSS output in Appendix"].map(item => (
              <div key={item} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", fontSize: "0.84rem", color: "#c5d5f0" }}>
                <span style={{ color: "#f9c74f", fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
              </div>
            ))}
          </div>
          <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px", border: "1px solid #dde2ef" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our Guarantees</h3>
            {["Unlimited Revision for the work being committed", "We ensure on-time delivery", "We support 24/7", "Word count excludes references and bibliography", "Three-level quality check (Technical QC, Editor QC, final check)", "Confidentiality of information at all times", "Plagiarism free work — less than 5%", "Only experienced and subject-specific writers allocated"].map((g, i) => (
              <div key={i} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid #dde2ef", fontSize: "0.84rem", color: "#555" }}>
                <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>{i + 1}.</span> {g}
              </div>
            ))}
          </div>
        </div>

        {/* QA Boxes */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.25rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Our Quality Assurance Process</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "14px" }} className="four-col-grid">
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
        </div>

        {/* Confidentiality + References */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "22px", marginBottom: "28px" }} className="two-col-grid">
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "22px" }}>
            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>🔒 Complete Secure &amp; Confidential Service</h3>
            <p style={{ color: "#666", fontSize: "0.86rem", lineHeight: 1.65, marginBottom: "10px" }}>We offer 100% confidentiality of client's personal details, payment details, project works, and copyrights of research works.</p>
            {["All projects given unique reference codes", "Documents accessed only by NDA-signed writers", "Financial information protected by 128-bit SSL encryption"].map(p => (
              <div key={p} style={{ display: "flex", gap: "7px", fontSize: "0.81rem", color: "#555", padding: "5px 0", borderBottom: "1px solid #f0f2fa" }}>
                <span style={{ color: "#e87722", fontWeight: 700 }}>→</span> {p}
              </div>
            ))}
          </div>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "22px" }}>
            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>📚 Fully Referenced Work</h3>
            <p style={{ color: "#666", fontSize: "0.86rem", lineHeight: 1.65, marginBottom: "10px" }}>Our dissertation work is fully referenced with latest articles and textbooks from the most credible sources.</p>
            {["Web of Science, ProQuest, Google Scholar", "Emerald, JSTOR, Elsevier, SciDirect, IEEE", "Economic Times, Forbes, Wall Street, Economist", "Harvard, APA, MLA, Chicago, Vancouver styles"].map(p => (
              <div key={p} style={{ display: "flex", gap: "7px", fontSize: "0.81rem", color: "#555", padding: "5px 0", borderBottom: "1px solid #f0f2fa" }}>
                <span style={{ color: "#e87722", fontWeight: 700 }}>→</span> {p}
              </div>
            ))}
          </div>
        </div>

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

      {/* ── CTA ── */}
      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Your Specific Dissertation Written by Experts</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>Join 2,00,000+ scholars. Response within 30 minutes · Unlimited Revisions · Plagiarism-Free</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
