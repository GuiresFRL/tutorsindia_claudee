import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "Clinical Biostatistics Consulting Service | Biometric Publication Help UK",
  description: "Our biostatisticians are experts in handling Bayesian methods, causal inference, genetic hierarchical models, phylogeny, and missing data analysis.",
  keywords: "Biometric Services,Biostatistics services,Biostatistics and Clinical Programming Services",
  alternates: { canonical: "https://www.tutorsindia.com/our-services/publication-support/biostatistics-services/" },
};

const faqs = [
  {
    q: "Who will do my Biostatistics services?",
    a: "Tutors India, we have a global biostatistics team has a brilliant statisticians hold advanced degrees with 10+ years of experience and also have a wide range of therapeutic experience. They will give the complete and concise Biostatistics reporting based on well-developed plan.",
  },
  {
    q: "I am a master/PhD student working on a thesis or project; can you do the Biostatistics analysis for my project?",
    a: "Yes, our statistician are having an excellent years of experience and subject matter expertise in doing a number of student and corporate Biostatistics projects by submitting an appropriate statistical design/analysis.",
  },
  {
    q: "I need help designing a survey. Can you help?",
    a: "Of course, we can certainly assist you in designing the survey where we appreciate to send us the objectives/Sample sizes.",
  },
  {
    q: "Can I get Biostatistics help with dissertation or other graduate level research?",
    a: "Apart from researchers, we assist the students for the biostatical analysis services so we strongly encourage students to get help of our highly talented and experience statistician.",
  },
  {
    q: "Are you familiar with Biostatistics service?",
    a: "Since 2011, Tutors India is the trusted mentors for the master's student in offering various Dissertations writing support. At Tutors India, we assist both statistics and biostatistics. Statistical data analysis is the most important step in any Dissertation or thesis.",
  },
  {
    q: "What are the statistical software tools used by Tutors India Statisticians?",
    a: "Our well-experienced statisticians are capable of SPSS, STATA, SAS, R, E-views and many more.",
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
  { quote: "Tutors India has brilliant statisticians with advanced degrees and wide therapeutic experience.", author: "Research Scholar", location: "UK" },
  { quote: "They completed my biostatistics analysis on time and provided clear interpretation of results.", author: "PhD Student", location: "Australia" },
  { quote: "Excellent SPSS and R support. The team explained every statistical decision clearly.", author: "Clinical Researcher", location: "USA" },
];

export default function BiostatisticsServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Services", url: "/our-services/" }, { name: "Publication Support", url: "/our-services/publication-support/" }, { name: "Biostatistics Services" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
              <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}
              <Link href="/our-services/publication-support/" style={{ color: "#a0b8e0" }}>Publication Support</Link>{" / "}
              <span style={{ color: "#fff" }}>Biostatistics Services</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.4rem,3vw,2rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              Clinical Biostatistics / Biometric Services – Biology, Public Health and the Biomedical Sciences
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Are you struggling to interpret your real world experiments? Do you find hard time to understand p-values, confidence intervals, t-test, ANOVA tables? Tutors India provides expert biostatistical services by qualified biostatisticians from the US &amp; UK.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "20px" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/samples/publication-research.jpg" alt="Biostatistics Services" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>Express 4–6 hrs<br />SPSS · SAS · R · STATA<br />US &amp; UK Statisticians</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      {/* Qualified Biostatisticians */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Your biostatistics are done by the qualified and experienced biostatisticians from the US &amp; UK</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          Biostatistics is the branch of science that concentrates on the development and application of statistical techniques to address problems related in health fields. Our qualified and experienced biostatisticians from the US &amp; UK bring the expertise needed for your research.
        </p>
      </section>

      {/* Tutors India Difference */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Tutors India Difference in Biostatistical Services for emerging research areas</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            Biostatistics is the branch of science that concentrates on the development and application of statistical techniques to address problems related in health fields. Biostatisticians are expertise in handling Bayesian methods, casual inference, genetic hierarchical models, survival analysis, phylogeny, longitudinal data analysis.
          </p>
        </div>
      </section>

      {/* End-to-End Support */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Biostatistics End-to-End Support from Tutors India</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          Biostatisticians are expertise in handling Bayesian methods, casual inference, genetic hierarchical models, survival analysis, phylogeny, longitudinal data analysis. Our team of expertise handle high quality data analysis, biostatistical computing &amp; data management services.
        </p>
      </section>

      {/* We Assist */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>We assist you for the biostatistics Services</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            At Tutors India, we offer biostatistical services – We apply range of statistical techniques for both small and big data. Our well-experienced statisticians are capable of SPSS, STATA, SAS, R, E-views and many more.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "20px" }}>
            {["SPSS","SPSS AMOS","SAS","SYSTAT","R","STATA","Epi-Info","E-Views","Excel"].map((s) => (
              <span key={s} style={{ background: "#1a2a6c", color: "#f9c74f", borderRadius: "6px", padding: "6px 16px", fontSize: "0.94rem", fontWeight: 700 }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Simply Easy */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Biostatistical Analytics Services Are Simply easy &amp; Straightforward</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          Reply within 30 minutes of order placement. Just send us your data and requirements and our biostatisticians will take care of the rest.
        </p>
      </section>

      {/* Service Tiers */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "24px" }}>What Services do we offer under biostatistics services?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "22px" }} className="three-col-grid">
            {[
              {
                tier: "Basic",
                items: [
                  "3 topics (Topic Selection based on area of interest)",
                  "1000 words",
                  "Only Statistical Analysis based on raw data shared",
                  "Analysis using appropriate statistical tools",
                  "Output pasted with basic interpretation",
                  "No discussion against literature review",
                  "Literature Review",
                  "Research Gap",
                  "Expected Contribution",
                  "Research Methodology",
                  "Data Analysis Guidelines",
                  "References Lists",
                ],
              },
              {
                tier: "Advanced",
                items: [
                  "1 topic",
                  "1000 words",
                  "Statistical analysis using appropriate tools",
                  "Tables formatted according to manuscript style with logical sense",
                  "Interpretation of statistics with discussion",
                  "Comparison and contrasting with previous studies from Chapter II (Literature Review)",
                ],
              },
              {
                tier: "Premium",
                items: [
                  "1 topic",
                  "All advanced features included",
                  "Data collection services undertaken",
                  "Reliability and validity checks for quantitative data",
                  "Rigor and trustworthiness assessment for qualitative analysis",
                  "Peer debriefing and member checking",
                  "Negative case analysis and auditing",
                ],
              },
            ].map((t) => (
              <div key={t.tier} style={{ background: t.tier === "Advanced" ? "#1a2a6c" : "#fff", color: t.tier === "Advanced" ? "#fff" : "#333", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px" }}>
                <div style={{ fontSize: "1.1rem", fontWeight: 800, color: t.tier === "Advanced" ? "#f9c74f" : "#e87722", marginBottom: "16px" }}>{t.tier}</div>
                {t.items.map((item) => (
                  <div key={item} style={{ display: "flex", gap: "8px", padding: "5px 0", borderBottom: t.tier === "Advanced" ? "1px solid rgba(255,255,255,0.1)" : "1px solid #eef0f7", fontSize: "0.85rem", color: t.tier === "Advanced" ? "#c5d5f0" : "#555" }}>
                    <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <style>{`@media(max-width:768px){.three-col-grid{grid-template-columns:1fr!important;}}`}</style>
        </div>
      </section>

      {/* Subject Matter Expertise */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px" }}>Specialized Subject Matter Expertise across the globe</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {["Arts & Humanities","Biological Sciences","Business & Management Studies","Engineering & Technology","Medicine & Health Sciences","Economics & Administration","Computer Science & IT","Law","Social Sciences"].map((s) => (
            <span key={s} style={{ background: "#f0f4ff", border: "1px solid #c5d5f0", borderRadius: "20px", padding: "6px 16px", fontSize: "0.83rem", color: "#1a2a6c", fontWeight: 600 }}>{s}</span>
          ))}
        </div>
      </section>

      {/* Deliverables */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our deliverables while you order clinical biostatistics help</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            The presentation of statistical output for Statistical Data analysis and Ph.D. thesis data analysis follows the journal format and apply appropriate interpretation not only based on numbers (quantitative expression) but also qualitatively.
          </p>
        </div>
      </section>

      {/* How Does it Work */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: "32px", textAlign: "center" }}>How Does Clinical Biostatistics consultation work?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "22px" }} className="three-col-grid">
            {[
              { step: "01", title: "Order Confirmation & Team Allocation", desc: "Order confirmation triggers team allocation to scrutinize work requirements and verify necessary availability requirements for completion." },
              { step: "02", title: "Initial Queries & Outline", desc: "Initial queries addressed early in process. Outline of proposed manuscript analysis plan sent for approval." },
              { step: "03", title: "Client Approval", desc: "Outline along with analysis plan is approved by client." },
              { step: "04", title: "Draft Delivery", desc: "Work dispatched in draft format with progress updates provided." },
              { step: "05", title: "Coordination & Data", desc: "Exclusive coordinators clarify queries. For primary data, additional chart/payment required. Excel data sheet placed in Appendix with proof of collection. Payment installments available; work begins upon receipt." },
              { step: "06", title: "Final Delivery", desc: "Delivery per agreed schedule or earlier. Specific changes within 45 days of delivery. Minor changes within 24 working hours; significant changes within 48 working hours. All emails acknowledged within 30 minutes of working hours." },
            ].map((s) => (
              <div key={s.step} style={{ background: "rgba(255,255,255,0.07)", borderRadius: "10px", padding: "22px" }}>
                <div style={{ fontSize: "2rem", fontWeight: 800, color: "#f9c74f", marginBottom: "8px" }}>{s.step}</div>
                <div style={{ fontWeight: 700, marginBottom: "8px", fontSize: "0.95rem" }}>{s.title}</div>
                <div style={{ fontSize: "0.83rem", color: "#a0b8e0", lineHeight: 1.7 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Biostatistics Features */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px" }}>Biostatistics Features</h2>
        <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "28px" }}>
          Qualified researchers, research methodology expertise, well experienced Statisticians capable of handling SPSS, SAS, R, E-Views, STATA and many more, Questionnaire development expertise, unlimited revision, only peer-reviewed articles, Statistics Tutoring and clarification, Tables and Interpretation with proper formatting for print-ready analysis, plagiarism report, 24/7 support, timely Support, 100% match with the requirement and on time delivery.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "22px" }} className="three-col-grid">
          {[
            {
              title: "Statistical Programming Services",
              desc: "Statistical programming to create automatic tables and figures along with the validation. Further creating data entry format in excel, exporting data into SPSS, labeling, normality checks, missing data analysis, outlier detection, descriptive statistics, and hypothesis testing.",
            },
            {
              title: "Meta-Analysis Services",
              desc: "Undertaking dissertation for Meta-analysis is different from systematic review as it combines the results of many individual studies relevant to the topic. Includes comprehensive search strategy, inclusion/exclusion criteria, publication bias assessment, effect size calculation, and heterogeneity consideration.",
            },
            {
              title: "Sample Size Calculation",
              desc: "We help you to calculate the sample size to determine the optimum number of participants to arrive at scientifically and ethically valid findings for clinical investigations.",
            },
            {
              title: "Randomization",
              desc: "Randomization helps prevent bias in produces treatment, subject allocation that are similar in unknown and known prognostic and demographic factors. Uses SAS software for schedule generation.",
            },
            {
              title: "Statistical Analysis Plan & Listing of Tables, Listings and Graphs",
              desc: "The presentation of statistical output for Statistical Data analysis follows the journal format and apply appropriate interpretation with mock up tables, figures, and journal-format presentation.",
            },
            {
              title: "Statistical Report",
              desc: "The presentation of statistical output for the Statistical Data analysis and Ph.D. thesis data analysis follows the journal format and apply appropriate interpretation not only based on numbers (quantitative expression) but also qualitatively.",
            },
          ].map((item) => (
            <div key={item.title} style={{ background: "#f5f6fa", border: "1px solid #dde2ef", borderRadius: "10px", padding: "22px" }}>
              <div style={{ fontWeight: 700, color: "#1a2a6c", marginBottom: "8px", fontSize: "0.95rem" }}>
                <span style={{ color: "#e87722", marginRight: "8px" }}>▶</span>{item.title}
              </div>
              <div style={{ fontSize: "0.83rem", color: "#555", lineHeight: 1.7 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Express Services */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our Express Biostatistical Services</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            Find the solution within 4-6 hours&apos; quick turnaround solution. Tutors India has expertise in handling software like SPSS, SPSS AMOS, SAS, SYSTAT, R, STATA. Our express service ensures you meet the most urgent research deadlines without compromising on quality.
          </p>
        </div>
      </section>

      {/* Homework Help */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Biostatistics Homework &amp; Assignment Help from Tutors India Experts</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          Apart from data analysis using statistical tools, our statistician guides you in solving your biostatistical homework problems, Biostatistics coursework. We provide step-by-step explanations so you can understand the statistical methods applied to your research.
        </p>
      </section>

      {/* Free Offers */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "24px" }}>Free Offers along with your Biostatistics Help UK</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
            {[
              { title: "Abstract or Executive Summary", desc: "Professionally written summary included free with your order." },
              { title: "Graphs & Tables (redrawn)", desc: "All graphs and tables redrawn to publication standard." },
              { title: "Statistical analysis or textual analysis of data", desc: "Full analysis support included as part of the service." },
              { title: "SPSS / other software screenshots", desc: "Screenshots to ensure the process are included with delivery." },
              { title: "Free Tutoring", desc: "Free tutoring for the work being carried out." },
              { title: "SPSS output in Appendix", desc: "Complete SPSS output appended to the work." },
            ].map((item) => (
              <div key={item.title} style={{ background: "#fff", border: "1px solid #c5d5f0", borderRadius: "10px", padding: "20px" }}>
                <div style={{ fontWeight: 700, color: "#1a2a6c", marginBottom: "6px", fontSize: "0.92rem" }}>✦ {item.title}</div>
                <div style={{ fontSize: "0.82rem", color: "#555", lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our Biostatistics Service is exclusive</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          As we do not just provide analysis, but the rather clear explanation and justification for the choice. Our biostatisticians provide complete transparency in their methodology and decision-making process.
        </p>
      </section>

      {/* Why Choose */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: "24px", textAlign: "center" }}>Why Choose Tutors India: Biostatistical Service features</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "16px" }} className="four-col-grid">
            {[
              { icon: "🎓", title: "Qualified researchers", desc: "Expert biostatisticians with international university degrees." },
              { icon: "🔬", title: "Research methodology expertise", desc: "Comprehensive knowledge of statistical research methods." },
              { icon: "💻", title: "SPSS, SAS, R, STATA experts", desc: "Well experienced in all major statistical software tools." },
              { icon: "📊", title: "Questionnaire development expertise", desc: "End-to-end survey design and development support." },
              { icon: "♾️", title: "Unlimited revision", desc: "Revisions until you are 100% satisfied." },
              { icon: "📚", title: "Only peer-reviewed articles", desc: "All references from peer-reviewed journals." },
              { icon: "📋", title: "Tables and Interpretation", desc: "Proper formatting for print-ready analysis." },
              { icon: "🕐", title: "24/7 support", desc: "Round-the-clock support via email and CRM." },
              { icon: "✅", title: "100% match with the requirement", desc: "Work tailored to your exact specifications." },
              { icon: "⏰", title: "On time delivery", desc: "Delivered on or before the agreed deadline." },
              { icon: "🧪", title: "Statistics Tutoring", desc: "Clarification and tutoring for statistical methods used." },
              { icon: "📋", title: "Plagiarism report", desc: "Turnitin/WriteCheck reports provided with every order." },
            ].map((g) => (
              <div key={g.title} style={{ background: "rgba(255,255,255,0.07)", borderRadius: "10px", padding: "18px" }}>
                <div style={{ fontSize: "1.6rem", marginBottom: "8px" }}>{g.icon}</div>
                <div style={{ fontWeight: 700, fontSize: "0.85rem", marginBottom: "6px" }}>{g.title}</div>
                <div style={{ fontSize: "0.76rem", color: "#a0b8e0", lineHeight: 1.6 }}>{g.desc}</div>
              </div>
            ))}
          </div>
          <style>{`@media(max-width:768px){.four-col-grid{grid-template-columns:1fr 1fr!important;}}`}</style>
        </div>
      </section>

      {/* Confidentiality + References */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px" }} className="two-col-grid">
          <div style={{ background: "#f5f6fa", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px" }}>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.15rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>A complete secure &amp; Confidential Service</h2>
            <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.96rem" }}>
              100% confidentiality of client&apos;s personal details, payment details, project works, and copyrights of research works. All projects assigned unique reference codes. Documents accessed only by writers with NDA agreements. Financial information protected by 128-bit SSL encryption.
            </p>
          </div>
          <div style={{ background: "#f5f6fa", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px" }}>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.15rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Fully Referenced</h2>
            <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.96rem" }}>
              Our dissertation work is fully referenced with latest articles and textbooks. Only peer-reviewed sources used; databases include Web of Science and ProQuest.
            </p>
          </div>
        </div>
        <style>{`@media(max-width:768px){.two-col-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* Guarantees */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "32px", textAlign: "center" }}>Our Guarantees</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "18px" }} className="four-col-grid">
            {[
              { icon: "♾️", title: "Unlimited Revision", desc: "Unlimited revision for the work being committed." },
              { icon: "⏰", title: "On-Time Delivery", desc: "We ensure on-time delivery." },
              { icon: "🕐", title: "Support 24/7", desc: "We support 24/7." },
              { icon: "📄", title: "Word Count Committed", desc: "Our word count committed does not include references and bibliography." },
              { icon: "✅", title: "Three-Level Quality Check", desc: "Ensure three-level quality check including Technical QC, Editor QC and final check against the requirement." },
              { icon: "🔒", title: "Confidentiality", desc: "Confidentiality of the information." },
              { icon: "📋", title: "Plagiarism Free", desc: "Plagiarism free work – less than 5% percent." },
              { icon: "🎓", title: "Experienced Writers", desc: "Only experienced and subject specific writers will be allotted." },
            ].map((g) => (
              <div key={g.title} style={{ background: "#fff", border: "1px solid #c5d5f0", borderRadius: "10px", padding: "20px", textAlign: "center" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{g.icon}</div>
                <div style={{ fontWeight: 700, color: "#1a2a6c", marginBottom: "6px", fontSize: "0.94rem" }}>{g.title}</div>
                <div style={{ fontSize: "0.78rem", color: "#555", lineHeight: 1.6 }}>{g.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plagiarism / On Time / Experienced Writers */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "22px" }} className="three-col-grid">
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Plagiarism Free Work</h3>
            <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.7 }}>
              We issue plagiarism-free certificate. Our streamlined and high-quality research writing process ensures your dissertation is not just copy-pasted, but written only after brainstorming sessions with our team of professional researchers.
            </p>
          </div>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>On Time</h3>
            <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.7 }}>
              Our work is delivered at a specified date and time. Our specific changes to the delivered work will be carried out within 45 days of delivery. We guarantee delivery of minor changes within 24 working hours and significant changes within 48 working hours. We acknowledge all your emails within 30 minutes of working hours.
            </p>
          </div>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Experienced Writers</h3>
            <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.7 }}>
              Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities from India, the US, and the UK.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px" }}>Frequently Asked Questions</h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* Global Team */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Your biostatistics is carried out by your choice of specialized expertise</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          We have a team of 2000+ expertise across the subjects &amp; countries (including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine).
        </p>
      </section>

      {/* Testimonials */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "24px", textAlign: "center" }}>Voice of Our customer</h2>
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Order Now</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>Reply in 30 Minutes · Express 4–6 hrs · US &amp; UK Statisticians · Unlimited Revisions</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
