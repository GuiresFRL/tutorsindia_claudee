"use client";

import Link from "next/link";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

const faqs = [
  {
    question: "What do I need to provide For the Initial Dissertation Statistics consultation? Why?",
    answer:
      "Adequate research study information is required through our customary CRM after payment confirmation. This is essential for the statistician's decision-making on the appropriate statistical analyses to be carried out for your dissertation.",
  },
  {
    question: "What are the statistical software tools used by Tutors India Statisticians?",
    answer:
      "Our statisticians have expertise in SPSS, STATA, SAS, R, E-views and additional tools to handle all types of quantitative and qualitative analyses.",
  },
  {
    question: "Are you familiar with dissertation statistics?",
    answer:
      "Since 2011, Tutors India is the trusted mentors for the master's student in offering various Dissertations writing support. We offer statistics, biostatistics, data compiling, recoding, analysis, interpretation, table presentation, and quality analysis for dissertations.",
  },
  {
    question: "What are the qualifications of statistician and what are they do?",
    answer:
      "Our statisticians have 10+ years of senior experience with PhD and Master's qualifications. They handle complex projects including cluster analysis and structural equation modeling, and have the ability to explain statistical work clearly to clients.",
  },
  {
    question: "I am a master's student. Can you help me to give a Tutor for the Dissertation Statistics service?",
    answer:
      "Yes, tutoring sessions are available separate from writing services. You will get an opportunity to discuss the process with our experts to complete your dissertation with accurate findings.",
  },
  {
    question: "On which are the areas you provide Dissertation statistics services?",
    answer:
      "We cover a wide range: Business Management, Finance, Operations Management, Supply Chain & Logistics, Human Resources, Psychology, History, Geography, Engineering, Healthcare, Economics, Computer Science, English, Literature, Epidemiology, Nursing, Medical, Public Health, Life Science, and Nutrition. Additional subjects are available upon inquiry.",
  },
];

const testimonials = [
  {
    quote:
      "I am a postgraduate student looked out for a source that could help me in writing dissertation in statistics. I was low and lacked confidence in writing. Then, I surfed through Google for sites providing dissertation writing services and found Tutors India for writing my dissertation. After lots of hard work they made a progress and completed my dissertation. The complete work was beyond my expectation. Thank you!",
    author: "Sara",
  },
  {
    quote:
      "Honestly, I didn't expect this level of quality. The team understood exactly what I needed and delivered work that felt genuinely professional. My confidence went from stressed to unstoppable.",
    author: "Amelia Brooks, UK",
    role: "Big Data Analytics",
  },
  {
    quote:
      "I was stuck, frustrated, and running out of time. Tutors India stepped in at the perfect moment and turned everything around faster than I imagined. Worth every bit.",
    author: "Oliver Bennett, UK",
    role: "Big Data Analytics",
  },
  {
    quote:
      "The attention to detail was incredible. It didn't feel like I was working with a service provider — it felt like I had an expert academic partner guiding me throughout.",
    author: "Layla Al Mansoori",
    role: "Essay Writing and Assignment Writing",
  },
  {
    quote:
      "My research finally started making sense after working with this team. Their guidance simplified complex ideas and gave my project the structure it was missing.",
    author: "Hassan Al Falasi, UAE",
    role: "Essay Writing and Assignment Writing",
  },
  {
    quote:
      "I submitted my work with complete confidence for the first time ever. The quality, formatting, and clarity were all beyond what I hoped for.",
    author: "Charlotte Reed, UK",
  },
  {
    quote:
      "The team handled everything professionally from start to finish. Timely updates, quick responses, and excellent academic quality — exactly what students need during stressful deadlines.",
    author: "Zain Al Hashmi, UAE",
  },
  {
    quote:
      "I was amazed at how naturally the content matched my writing style and university standards. It felt authentic, polished, and academically strong.",
    author: "Emily Carter",
  },
  {
    quote:
      "This service saved me during one of the most stressful phases of my academic journey. Reliable, professional, and genuinely supportive throughout the process.",
    author: "Noora Al Zaabi, UAE",
  },
  {
    quote:
      "The final work looked so refined and well-structured that even my mentor appreciated the improvement immediately. Highly recommended for serious academic support.",
    author: "George Whitmore, UK",
  },
];

const analysisFeatures = [
  {
    title: "Data Compiling and Recoding",
    body: "Excel data entry format creation, SPSS export with labeling, normality checking, missing data detection, and outlier analysis.",
  },
  {
    title: "Dissertation Statistical Data Analysis Help",
    body: "Descriptive statistics (mean, standard deviation, range), reliability of composite scores, hypothesis testing with appropriate statistical tools.",
  },
  {
    title: "Dissertation Interpretation of Statistical Output",
    body: "Relevant data interpretation only, complete output understanding support, and meaningful commentary tied to your research objectives.",
  },
  {
    title: "Presentation of Tables and Figures",
    body: "Journal format presentation of results, quantitative and qualitative commentary, and professionally formatted tables and figures.",
  },
  {
    title: "Qualitative Dissertation Analysis Help",
    body: "NVIVO software analysis, thematic analysis approach, content analysis, and other qualitative methodologies.",
  },
  {
    title: "Our Express Dissertation Statistical & Text Analysis Service",
    body: "4-6 hours turnaround solution available. Software expertise: SPSS, SAS, STATA, R, Excel, Epi-Info, E-Views.",
  },
  {
    title: "Chapter by Chapter Delivery Process",
    body: "Full client control over drafts at every stage. Unlike other companies, we do not charge any additional costs for this structure.",
  },
  {
    title: "Statistics Homework & Assignment Help",
    body: "Statistical homework problem solving, statistics coursework and classwork support, and concept understanding guidance from expert statisticians.",
  },
];

const serviceTiers = [
  {
    tier: "Basic",
    color: "#2563b0",
    desc: "Statistical Analysis based on raw data with basic interpretation without literature discussion.",
    includes: [
      "Statistical Analysis based on raw data",
      "Basic interpretation without literature discussion",
    ],
  },
  {
    tier: "Advanced",
    color: "#1a2a6c",
    desc: "Appropriate statistical tools with manuscript formatting and interpretation with literature comparison.",
    includes: [
      "Appropriate statistical tools",
      "Manuscript formatting",
      "Interpretation with literature comparison",
    ],
  },
  {
    tier: "Premium",
    color: "#e87722",
    desc: "Data collection services included with reliability/validity checks for quantitative and qualitative rigor assessment.",
    includes: [
      "Data collection services included",
      "Reliability/validity checks",
      "Quantitative and qualitative rigor assessment",
    ],
  },
];

const guarantees = [
  {
    title: "A Complete Secure & Confidential Service",
    body: "We offer 100% confidentiality of client's personal details, payment details, project works, and copyrights of research works. We ensure: 1) All your projects are given unique reference codes 2) Documents are accessed only by writers who signed NDA with Tutors India 3) Your financial information is protected by 128-bit secure socket layer (SSL) encryption.",
  },
  {
    title: "Fully Referenced",
    body: "Our dissertation work is fully referenced with latest articles and textbooks. We refer only peer-reviewed sources such as scholarly articles and textbooks. We refer databases including Web of Science, ProQuest, Google Scholar, Business Source Complete, and latest newspapers such as Economic Times, Forbes, The Wall Street, The Economics.",
  },
  {
    title: "Our Guarantees",
    body: "(1) Unlimited Revision for the work being committed. (2) We ensure on-time delivery (3) We support 24/7. (4) Our word count committed does not include references and bibliography (5) Ensure three-level quality check including Technical QC, Editor QC and final check (6) Confidentiality of the information (7) Plagiarism free work – less than 5% percent. (8) Only experienced and subject specific writers will be allotted.",
  },
  {
    title: "Plagiarism Free Work",
    body: "We are aware of the consequences of plagiarism. Our work is scanned against online sources in a similar way like WriteCheck or Turnitin. We issue plagiarism-free certificate*. Our streamlined and high-quality research writing process ensures your dissertation is not just copy-pasted, but written only after brainstorming sessions with our team of professional researchers.",
  },
  {
    title: "On Time",
    body: "Our work is delivered at a specified date and time. Our specific changes to the delivered work will be carried out within 45 days of delivery. We guarantee delivery of minor changes within 24 working hours and significant changes within 48 working hours. We acknowledge all your emails within 30 minutes of working hours.",
  },
  {
    title: "Experienced Writers",
    body: "Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities from the US and UK. Expert is selected through a stringent selection process including the signing of non-disclosure and confidentiality agreement.",
  },
];

const subjects = [
  "Arts & Humanities",
  "Biological Sciences",
  "Business & Management Studies",
  "Marketing & Communication",
  "Engineering & Technology",
  "Natural Sciences & Mathematics",
  "Economics & Administration",
  "Humanities & Social Science",
  "Law",
  "Medicine & Health",
  "Education & Training",
  "Journalism & Media",
  "Agriculture & Forestry",
  "Computer Science & IT",
  "Hospitality, Leisure & Sports",
];

export default function DissertationStatisticalAnalysisPage() {
  return (
    <div style={{ fontFamily: "Georgia, serif", color: "#222" }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)",
          color: "#fff",
          padding: "72px 24px 60px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <h1
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: "clamp(1.6rem,3.5vw,2.6rem)",
              fontWeight: 700,
              lineHeight: 1.3,
              marginBottom: 20,
            }}
          >
            The UK Master&apos;s Dissertation Textual (Qualitative) &amp; Statistical (Quantitative) Analysis Help
          </h1>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, maxWidth: 760, margin: "0 auto 12px", opacity: 0.95 }}>
            Then You&apos;ve Certainly Reached the Right Place! Tutors India, a hub for dissertation qualitative and quantitative analysis Services
          </p>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, maxWidth: 740, margin: "0 auto 28px", opacity: 0.9 }}>
            Your dissertation Textual &amp; Statistical Analysis are done by the qualified and experienced Statisticians from the US &amp; UK
          </p>
          <Link
            href="/contact-us"
            style={{
              display: "inline-block",
              background: "#e87722",
              color: "#fff",
              padding: "14px 36px",
              borderRadius: 4,
              fontWeight: 700,
              fontSize: "1rem",
              textDecoration: "none",
            }}
          >
            Get Expert Help Now
          </Link>
        </div>
      </section>

      {/* Team intro */}
      <section style={{ background: "#f8f9fc", padding: "52px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: "1.55rem",
              color: "#1a2a6c",
              marginBottom: 16,
            }}
          >
            We provide support for all your dissertation analysis
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#444", maxWidth: 780, margin: "0 auto 16px" }}>
            We have a team of expertise who can handle both qualitative or textual and quantitative or statistical analysis for your Master&apos;s or postgraduate dissertation.
          </p>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#444", maxWidth: 780, margin: "0 auto 16px" }}>
            At Tutors India, we assist for Statistics, Biostatistics &amp; Qualitative Analysis (Content &amp; Thematic) – Statistical Consultation for Dissertation Research.
          </p>
          <div
            style={{
              background: "#1a2a6c",
              color: "#fff",
              borderRadius: 8,
              padding: "18px 24px",
              maxWidth: 700,
              margin: "20px auto 0",
              fontStyle: "italic",
              fontSize: "1.05rem",
              lineHeight: 1.7,
            }}
          >
            &ldquo;Dissertation statistical data analysis is the most important step in any dissertation or thesis.&rdquo;
          </div>
        </div>
      </section>

      {/* Scope + Guarantee callouts */}
      <section style={{ padding: "52px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 20 }}>
            {[
              {
                heading: "Wide Subject Coverage",
                body: "We offer our dissertation statistical consultation services to a wide range of subjects including business, management, economics, finance, psychology, medicine, life science and many more.",
              },
              {
                heading: "UK Dissertation Statistics & Textual Analysis Services",
                body: "Guaranteed committee approval through our rigorous quality process and expert statistician team.",
              },
              {
                heading: "Simply Easy & Straightforward",
                body: "UK Dissertation Statistical & Textual Analytics Services – just send your data and requirements and we handle the rest.",
              },
            ].map((c) => (
              <div
                key={c.heading}
                style={{
                  background: "#f8f9fc",
                  borderRadius: 8,
                  padding: "22px 20px",
                  borderTop: "4px solid #2563b0",
                }}
              >
                <h3 style={{ fontFamily: "Merriweather, serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: 10 }}>
                  {c.heading}
                </h3>
                <p style={{ fontSize: "0.92rem", lineHeight: 1.75, color: "#555" }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section style={{ background: "#f8f9fc", padding: "52px 24px" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: "1.55rem",
              color: "#1a2a6c",
              marginBottom: 32,
              textAlign: "center",
            }}
          >
            What Services do we offer under Specific Type of Dissertation?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 20 }}>
            {serviceTiers.map((t) => (
              <div
                key={t.tier}
                style={{
                  background: "#fff",
                  border: `2px solid ${t.color}`,
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              >
                <div style={{ background: t.color, color: "#fff", padding: "14px 18px" }}>
                  <div style={{ fontSize: "1.2rem", fontWeight: 700 }}>{t.tier}</div>
                </div>
                <div style={{ padding: "16px" }}>
                  <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.65, marginBottom: 12 }}>{t.desc}</p>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {t.includes.map((item) => (
                      <li
                        key={item}
                        style={{
                          display: "flex",
                          gap: 6,
                          fontSize: "0.8rem",
                          color: "#555",
                          padding: "4px 0",
                          borderBottom: "1px solid #f0f2fa",
                        }}
                      >
                        <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables + How it works */}
      <section style={{ padding: "52px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: "1.55rem",
              color: "#1a2a6c",
              marginBottom: 16,
            }}
          >
            Our Deliverables While You Order Statistical Help for Master&apos;s Dissertation Service UK
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#444", marginBottom: 28 }}>
            Our deliverables include executive summary/abstract, SPSS data sheet and output, questionnaire or semi-structured interview questions, and any other information we have used to complete the analysis.
          </p>

          <h2
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: "1.4rem",
              color: "#1a2a6c",
              marginBottom: 14,
            }}
          >
            How Does Statistical Consultation Work?
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#444" }}>
            The process involves order confirmation, team allocation, requirement scrutiny, initial consultation, outline approval, draft delivery with progress updates, and final delivery per the agreed schedule.
          </p>
        </div>
      </section>

      {/* Analysis Features Grid */}
      <section style={{ background: "#f8f9fc", padding: "52px 24px" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: "1.55rem",
              color: "#1a2a6c",
              marginBottom: 32,
              textAlign: "center",
            }}
          >
            A Dissertation Qualitative Textual and Quantitative Statistical Analysis Features
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 20 }}>
            {analysisFeatures.map((f) => (
              <div
                key={f.title}
                style={{
                  background: "#fff",
                  borderRadius: 8,
                  padding: "22px 20px",
                  borderTop: "4px solid #2563b0",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                }}
              >
                <h4
                  style={{
                    fontFamily: "Merriweather, serif",
                    fontSize: "0.97rem",
                    color: "#1a2a6c",
                    marginBottom: 10,
                  }}
                >
                  {f.title}
                </h4>
                <p style={{ fontSize: "0.92rem", lineHeight: 1.75, color: "#555" }}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Convince committee */}
      <section style={{ padding: "52px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: "1.4rem",
              color: "#1a2a6c",
              marginBottom: 14,
            }}
          >
            Master&apos;s Dissertation Part or Chapter Need to Convince the Supervisory Committee
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#444" }}>
            Covers: introduction, literature review, problem statement, research questions, hypothesis development, research design, statistical analysis, data entry/screening, interpretation, discussion, results, recommendations, and conclusion.
          </p>
        </div>
      </section>

      {/* Free Offers */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "44px 24px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Merriweather, serif", fontSize: "1.45rem", marginBottom: 16 }}>
            Free Offers Along with Your Master&apos;s Dissertation Statistical and Textual Analysis Help UK
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.85, opacity: 0.93 }}>
            We deliver more than your expectation – Abstract or Executive Summary, Graphs &amp; Tables (redrawn), statistical/textual analysis of data, SPSS / other software screenshots to ensure the process that we had carried out for doing the analyses, Free Tutoring for the work being carried out – to speak confidently with your program supervisors &amp; SPSS output in Appendix.
          </p>
        </div>
      </section>

      {/* QA cards */}
      <section style={{ padding: "52px 24px", background: "#f8f9fc" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 18 }}>
            {[
              { title: "Master Dissertation Statistical Analysis", body: "Check the sample dissertation statistical analysis from our expert statisticians." },
              { title: "Quality Assurance", body: "We ensure quality at every stage and the process." },
              { title: "Plagiarism Report", body: "We deliver the document after scanning for plagiarism." },
              { title: "Customer Interaction", body: "We interact with the customer at every stage in terms of amendments, query and delivery." },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  background: "#fff",
                  borderRadius: 8,
                  padding: "20px",
                  borderLeft: "4px solid #e87722",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                }}
              >
                <h4 style={{ fontFamily: "Merriweather, serif", fontSize: "0.95rem", color: "#1a2a6c", marginBottom: 8 }}>
                  {card.title}
                </h4>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "#555" }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose – Guarantees */}
      <section style={{ padding: "52px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: "1.55rem",
              color: "#1a2a6c",
              marginBottom: 8,
              textAlign: "center",
            }}
          >
            Why Choose Tutors India: Dissertation Textual (Qualitative) and Statistical (Quantitative) Analysis Service Features
          </h2>
          <p style={{ textAlign: "center", color: "#555", marginBottom: 36 }}>
            Qualified researchers, research methodology expertise, experienced statisticians (SPSS, SAS, R, E-Views, STATA), questionnaire development, unlimited revision, peer-reviewed articles only, statistics tutoring, formatted tables/interpretation, plagiarism reports, 24/7 support, on-time delivery
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 20 }}>
            {guarantees.map((g) => (
              <div
                key={g.title}
                style={{
                  background: "#f8f9fc",
                  borderRadius: 8,
                  padding: "22px 20px",
                  borderTop: "4px solid #e87722",
                }}
              >
                <h4 style={{ fontFamily: "Merriweather, serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: 10 }}>
                  {g.title}
                </h4>
                <p style={{ fontSize: "0.93rem", lineHeight: 1.75, color: "#555" }}>{g.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#f8f9fc", padding: "52px 24px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: "1.55rem",
              color: "#1a2a6c",
              marginBottom: 28,
              textAlign: "center",
            }}
          >
            Frequently Asked Questions
          </h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* Subject Matter Expertise */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "52px 24px" }}>
        <div style={{ maxWidth: 980, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Merriweather, serif", fontSize: "1.55rem", marginBottom: 12 }}>
            Your Dissertation Statistical Analysis is Done by Your Choice of Subject Matter Expertise
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, opacity: 0.92, maxWidth: 760, margin: "0 auto 28px" }}>
            We have a team of 2000+ expertise across the subjects &amp; countries (including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine). Tutors India has capability and skills to handle subjects across the field.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {subjects.map((s) => (
              <span
                key={s}
                style={{
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  borderRadius: 20,
                  padding: "6px 16px",
                  fontSize: "0.88rem",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: "52px 24px", background: "#f8f9fc" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: "1.55rem",
              color: "#1a2a6c",
              textAlign: "center",
              marginBottom: 32,
            }}
          >
            Voice of Our Customer
          </h2>
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)",
          color: "#fff",
          padding: "56px 24px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontFamily: "Merriweather, serif", fontSize: "1.8rem", marginBottom: 16 }}>
          Ready to Get Expert Dissertation Statistical Analysis?
        </h2>
        <p style={{ fontSize: "1.05rem", marginBottom: 28, opacity: 0.92 }}>
          Invest in your career by availing dissertation statistical analysis help from qualified UK &amp; US researchers.
        </p>
        <Link
          href="/contact-us"
          style={{
            display: "inline-block",
            background: "#e87722",
            color: "#fff",
            padding: "14px 40px",
            borderRadius: 4,
            fontWeight: 700,
            fontSize: "1rem",
            textDecoration: "none",
          }}
        >
          Order Now
        </Link>
      </section>
    </div>
  );
}
