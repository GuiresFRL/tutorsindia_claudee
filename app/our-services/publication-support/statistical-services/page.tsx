import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "Statistical Data Analysis Services | Statistics Data Analysis Help UK",
  description: "We offer statistical services and apply a range of statistical techniques, including modern statistical computing, frequentist methods, and the Bayesian approach.",
  keywords: "Statistical Services for Dissertations,Statistical Consulting and Data Analysis Services",
  alternates: { canonical: "https://www.tutorsindia.com/our-services/publication-support/statistical-services/" },
};

const faqs = [
  {
    q: "What do I need to provide For the Initial Statistics consultation? Why?",
    a: "Tutors India requests information about your research study during initial consultation, either through customized CRM or email. Research study details are essential for statisticians to make informed decisions on statistical analyses.",
  },
  {
    q: "Are you familiar with Statistical service?",
    a: "Since 2011, Tutors India has served as mentor for master's students offering dissertation writing support. The organization provides statistics and biostatistics assistance, including data compiling, recoding, analysis help, output interpretation, and table/figure presentation.",
  },
  {
    q: "What are the statistical software tools used by Tutors India Statisticians?",
    a: "Our well-experienced statisticians are capable of handling SPSS, STATA, SAS, R, E-views and many more.",
  },
  {
    q: "What are the qualifications of statistician and what are they do?",
    a: "Senior statisticians with 10+ years experience and PhD/Master's qualifications oversee projects. They handle complex analyses including cluster analysis and structural equation modeling, offering dissertations services to master's and doctoral students plus corporate work.",
  },
  {
    q: "On which are the areas you provide statistical services?",
    a: "Services span Business Management, finance, operations management, supply chain, logistics, HR, psychology, history, geography, engineering, healthcare, economics, computer science, English, literature, epidemiology, nursing, medical, public health, life science, and nutrition.",
  },
  {
    q: "Can you help me to give a Tutor for the Statistical service?",
    a: "Yes, tutoring sessions available separate from writing services. Clients can speak with experts to understand processes and complete dissertations with accurate findings and data analysis outcomes.",
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
  { quote: "Tutors India's statisticians guided me in designing my study, data analysis, and interpretation. Prompt, reliable and understandable.", author: "PhD Student", location: "UK" },
  { quote: "Their SPSS and AMOS expertise is outstanding. The statistical report followed journal format perfectly.", author: "Research Scholar", location: "Australia" },
  { quote: "Excellent statistics homework help. They explained every step clearly so I could defend my results.", author: "Master's Student", location: "USA" },
];

export default function StatisticalServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Services", url: "/our-services/" }, { name: "Publication Support", url: "/our-services/publication-support/" }, { name: "Statistical Services" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
              <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}
              <Link href="/our-services/publication-support/" style={{ color: "#a0b8e0" }}>Publication Support</Link>{" / "}
              <span style={{ color: "#fff" }}>Statistical Services</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.4rem,3vw,2rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              Statistical Analysis Services – Management, Economics, Finance &amp; Engineering
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Are you struggling to interpret your survey findings? Do you find hard time to understand p-values, confidence intervals, t-test, ANOVA tables, and basic statistical models such as linear or logistic regression or survival analysis, Bayesian analysis, multivariate, and structural equation modeling, then you&apos;ve reached the right place.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "20px" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Get A Free Quote</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/samples/publication-research.jpg" alt="Statistical Analysis Services" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>Express 4–6 hrs<br />SPSS · SAS · R · STATA<br />Since 2011</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      {/* Qualified Statisticians */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Your statistics are done by the qualified and experienced statisticians from the US &amp; UK</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          We guide students and researchers in designing their study, data analysis, and interpretation. The purpose is to provide prompt, reliable and understandable information about data analysis. We are completely aware that the manuscript comes with a very tight deadline, and our team ensures to deliver the work on time along with the detailed report.
        </p>
      </section>

      {/* Tutors India Difference */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Tutors India Difference in statistical Services</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            Our analytical team brings in-depth knowledge and domain expertise across a broad spectrum of industries. Our statisticians and programmers have built a reputation for excellence by being responsive and collaborative, producing quality deliverables, and maintaining the highest level of scientific integrity.
          </p>
        </div>
      </section>

      {/* End-to-End Support */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Statistics End-to-End Support from Tutors India</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          Statisticians are expertise in handling AMOS, regression, PLS, Bayesian methods, casual inference. We also perform statistical programs to validate tables, figures to the client through an independent review of programming code.
        </p>
      </section>

      {/* We Assist */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>We assist you for the statistics Services – Whether it&apos;s for M.D, M.S., Ph. D</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "20px" }}>
            At Tutors India, we offer statistical services – We apply a range of statistical techniques for both small and big data including modern statistical computing, frequentist methods, non-parametric, likelihood, Bayesian approach, mathematical statistics.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {["SPSS","SPSS AMOS","SAS","SYSTAT","R","STATA","Epi-Info","E-Views","Excel"].map((s) => (
              <span key={s} style={{ background: "#1a2a6c", color: "#f9c74f", borderRadius: "6px", padding: "6px 16px", fontSize: "0.94rem", fontWeight: 700 }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Simply Easy */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Statistical Analytics Services Are Simply easy &amp; Straightforward</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          Reply within 30 minutes of order placement. Just send us your data and requirements and our statisticians will take care of the rest.
        </p>
      </section>

      {/* Service Tiers */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "24px" }}>What Services do we offer under statistics services?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "22px" }} className="three-col-grid">
            {[
              {
                tier: "Basic",
                items: [
                  "3 Topics (Topic Selection based on area of interest)",
                  "1000 words",
                  "Only Statistical Analysis based on raw data shared",
                  "Analysis using appropriate statistical tools",
                  "Output pasted with basic interpretation",
                  "No discussion against literature review",
                  "Objectives",
                  "Literature Review",
                  "Research Gap",
                  "Expected Contribution",
                  "Research Methodology",
                  "Data Analysis Guidelines",
                  "References Lists",
                  "Bibliography",
                ],
              },
              {
                tier: "Advanced",
                items: [
                  "1 topic",
                  "1000 words",
                  "Analysis using appropriate statistical tools",
                  "Tables formatted according to manuscript style with logical sense",
                  "Interpretation written with discussion",
                  "Comparison/contrast with previous studies from Chapter II (Literature Review)",
                  "Objectives",
                  "Literature Review",
                  "Research Gap",
                  "Expected Contribution",
                  "Research Methodology",
                  "Data Analysis Guidelines",
                  "References Lists",
                  "Bibliography",
                ],
              },
              {
                tier: "Premium",
                items: [
                  "1 topic",
                  "All Advanced features included",
                  "Data collection services undertaken",
                  "Reliability and validity checks for quantitative data",
                  "Rigor and trustworthiness assessment for qualitative textual analysis",
                  "Peer debriefing and support",
                  "Member checking",
                  "Negative case analysis",
                  "Auditing for qualitative textual analysis",
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
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px" }}>Specialized methodological experts that includes management, finance, economics</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {[
            "Arts & Humanities","Biological Sciences & Life Science","Business & Management Studies",
            "Marketing & Communication","Engineering & Technology","Natural Sciences & Mathematics",
            "Economics & Administration","Humanities & Social Science","Law","Medicine & Health",
            "Education & Training","Journalism & Media","Agriculture & Forestry","Computer Science & IT",
            "Hospitality, Leisure & Sports",
          ].map((s) => (
            <span key={s} style={{ background: "#f0f4ff", border: "1px solid #c5d5f0", borderRadius: "20px", padding: "6px 16px", fontSize: "0.83rem", color: "#1a2a6c", fontWeight: 600 }}>{s}</span>
          ))}
        </div>
      </section>

      {/* Deliverables */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our deliverables while you order clinical statistics help</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            At Tutors India, our team of expertise handles high-quality data analysis, biostatistical computing &amp; data management services. We apply statistics techniques to a wide range of clients in public health research and biomedical science including clinical trials, outcomes-based research, animal studies, and observational studies.
          </p>
        </div>
      </section>

      {/* How Does it Work */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: "32px", textAlign: "center" }}>How Does Clinical Statistics consultation work?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "22px" }} className="three-col-grid">
            {[
              { step: "01", title: "Order Confirmation", desc: "Order confirmation triggers special team allocation to scrutinize work requirements." },
              { step: "02", title: "Initial Queries & Outline", desc: "Initial queries clarified at early stage. Proposed manuscript analysis plan outlined." },
              { step: "03", title: "Plan Approval", desc: "Analysis plan approval obtained from client before work begins." },
              { step: "04", title: "Draft Delivery", desc: "Draft work dispatched with progress updates provided throughout." },
              { step: "05", title: "Coordination", desc: "Exclusive coordinators handle queries. Payment installment options available; work starts upon payment." },
              { step: "06", title: "Final Delivery", desc: "Work delivered per agreed schedule or earlier. Specific changes within 45 days of delivery. Minor changes within 24 working hours; significant changes within 48 working hours. All emails acknowledged within 30 minutes of working hours." },
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

      {/* Statistics Features */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Statistics Features</h2>
        <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "28px" }}>
          Qualified researchers, research methodology expertise, well experienced Statisticians capable of handling SPSS, SAS, R, E-Views, STATA and many more, Questionnaire development expertise, unlimited revision, only peer-reviewed articles, Statistics Tutoring and clarification, Tables and Interpretation with proper formatting for print-ready analysis, plagiarism report, 24/7 support, timely Support, 100% match with the requirement and on time delivery.
        </p>
      </section>

      {/* Statistical Programming Services */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "24px" }}>Statistical Programming Services</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "22px" }} className="two-col-grid">
            <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "24px" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Statistical Programming Services</h3>
              <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.7 }}>
                Statistical programming to create automatic tables and figures along with the validation. Further creating data entry format in excel, exporting data into SPSS or any software, labelling, checking for normality, missing data, data entry errors, outliers checking using appropriate analysis. Although there are several ways of analysing data, usual format starts with descriptive statistics (mean, standard deviation, minimum, maximum, range, standard error of the mean, confidence interval) of the socio-demographic variables (age, sex, occupation, income, marital status) and followed by the reliability of the composite scores.
              </p>
            </div>
            <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "24px" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Sample Size Calculation</h3>
              <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.7 }}>
                We help you to calculate the sample size to determine the optimum number of participants to arrive at scientifically and ethically valid findings. Our team of statisticians helps you to generate sample size for all your clinical investigations.
              </p>
            </div>
            <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "24px" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Statistical Analysis Plan &amp; Listing of Tables, Listings, and Graphs</h3>
              <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.7 }}>
                At Tutors India, the presentation of statistical output for Statistical Data analysis follows the journal format and apply an appropriate interpretation. Further, mock-up tables, figures, as part of the statistical analysis plan are produced.
              </p>
            </div>
            <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "24px" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Statistical Report</h3>
              <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.7 }}>
                At Tutors India, the presentation of statistical output for the Statistical Data analysis and Ph.D. thesis data analysis follows the journal format and apply appropriate interpretation not only based on numbers (quantitative expression) but also qualitatively including commenting your research methodology strength and Limitations.
              </p>
            </div>
          </div>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "24px", marginTop: "22px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Expertise</h3>
            <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.7 }}>
              At Tutors India, our team of expertise handles high-quality data analysis, biostatistical computing &amp; data management services. We apply statistics techniques to a wide range of clients in public health research and biomedical science including clinical trials, outcomes-based research, animal studies, and observational studies.
            </p>
          </div>
          <style>{`@media(max-width:768px){.two-col-grid{grid-template-columns:1fr!important;}}`}</style>
        </div>
      </section>

      {/* Express Services */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our Express Statistical Services</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          Find the solution within 4-6 hours&apos; quick turnaround solution. Tutors India has expertise in handling software like SPSS, SPSS AMOS, SAS, SYSTAT, R, STATA, Epi-Info, E-Views, Excel, etc.
        </p>
      </section>

      {/* Homework Help */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Statistics Homework &amp; Assignment Help from Tutors India Experts</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            Apart from data analysis using statistical tools, our statistician guides you in solving your biostatistical homework problems, Statistics coursework, statistics class work, Mathematics conference paper, Statistics conference paper, Biostatistical questions, and answers.
          </p>
        </div>
      </section>

      {/* Free Offers */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "24px" }}>Free Offers along with your Statistics Help UK</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
          {[
            { title: "Abstract or Executive Summary", desc: "Professionally written summary included free with your order." },
            { title: "Graphs & Tables (redrawn)", desc: "All graphs and tables redrawn to publication standard." },
            { title: "Statistical analysis or textual analysis of data", desc: "Full analysis support included as part of the service." },
            { title: "SPSS / other software screenshots", desc: "Screenshots documenting the analysis process included with delivery." },
            { title: "Free Tutoring", desc: "Free tutoring sessions for the work being carried out." },
            { title: "SPSS output in Appendix", desc: "Complete SPSS output appended to the work." },
          ].map((item) => (
            <div key={item.title} style={{ background: "#f5f6fa", border: "1px solid #c5d5f0", borderRadius: "10px", padding: "20px" }}>
              <div style={{ fontWeight: 700, color: "#1a2a6c", marginBottom: "6px", fontSize: "0.92rem" }}>✦ {item.title}</div>
              <div style={{ fontSize: "0.82rem", color: "#555", lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Exclusive */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our Statistics Service is exclusive</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            Our Statistics Service is exclusive as we do not just provide analysis, but the rather clear explanation and justification for the choice.
          </p>
        </div>
      </section>

      {/* Why Choose */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: "24px", textAlign: "center" }}>Why Choose Tutors India: Biostatistical Service features</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "16px" }} className="four-col-grid">
            {[
              { icon: "🎓", title: "Qualified researchers", desc: "Expert statisticians with international university degrees." },
              { icon: "🔬", title: "Research methodology expertise", desc: "Comprehensive knowledge of statistical research methods." },
              { icon: "💻", title: "SPSS, SAS, R, STATA experts", desc: "Well experienced in all major statistical software tools." },
              { icon: "📊", title: "Questionnaire development expertise", desc: "End-to-end survey design and development support." },
              { icon: "♾️", title: "Unlimited revision", desc: "Revisions until you are 100% satisfied." },
              { icon: "📚", title: "Only peer-reviewed articles", desc: "All references from peer-reviewed journals." },
              { icon: "📋", title: "Tables and Interpretation", desc: "Proper formatting for print-ready analysis." },
              { icon: "🧑‍🏫", title: "Statistics Tutoring and clarification", desc: "Clarification and tutoring for statistical methods used." },
              { icon: "🕐", title: "24/7 support", desc: "Round-the-clock support via email and CRM." },
              { icon: "⏰", title: "Timely Support", desc: "Response within 30 minutes of working hours." },
              { icon: "✅", title: "100% match with the requirement", desc: "Work tailored to your exact specifications." },
              { icon: "📑", title: "Plagiarism report", desc: "Turnitin/WriteCheck reports provided with every order." },
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
              100% confidentiality of client&apos;s personal details, payment details, project works, and copyrights of research works. Documents accessed only by writers with NDA agreements. Financial information protected by 128-bit SSL encryption.
            </p>
          </div>
          <div style={{ background: "#f5f6fa", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px" }}>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.15rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Fully Referenced</h2>
            <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.96rem" }}>
              Our dissertation work is fully referenced with latest articles and textbooks. Only peer-reviewed sources used; databases include Web of Science, ProQuest, Google Scholar, Business Source Complete.
            </p>
          </div>
        </div>
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
              { icon: "✅", title: "Three-Level Quality Check", desc: "Technical QC, Editor QC and final check against the requirement." },
              { icon: "🔒", title: "Confidentiality", desc: "Confidentiality of the information." },
              { icon: "📋", title: "Plagiarism Free", desc: "Plagiarism free work – less than 5%." },
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
              We are aware of the consequences of plagiarism. Hence, topic selection is completely plagiarism Free. Work scanned via WriteCheck or Turnitin; plagiarism-free certificate issued.
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
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Your statistics is carried out by your choice of specialized expertise</h2>
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
