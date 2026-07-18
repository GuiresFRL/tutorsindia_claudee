import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "Expert Statistical Analysis Services ",
  description: "We offer statistical analysis services using advanced tools to transform your raw data into meaningful results for research purposes.",
  keywords: "Dissertation statistical analysis,Statistical Services for Dissertations,Dissertation Statistics Help",
  alternates: { canonical: "https://www.tutorsindia.com/our-services/masters-dissertation-writing-services/dissertation-statistical-analysis" },
};

const faqs = [
  {
    q: "What do I need to provide For the Initial Dissertation Statistics consultation? Why?",
    a: "Tutors India experts will ask you to provide adequate information about your research study during the initial consultation, or you send the information through our customized CRM (Login Credential gave) ID after payment process confirmed. Without your research study, it is very difficult for the statisticians to make decisions on the statistical analyses.",
  },
  {
    q: "What are the statistical software tools used by Tutors India Statisticians?",
    a: "Our well-experienced statisticians are capable of SPSS, STATA, SAS, R, E-views and many more.",
  },
  {
    q: "Are you familiar with dissertation statistics?",
    a: "Since 2011, Tutors India is the trusted mentors for the master's student in offering various Dissertations writing support. At Tutors India, we assist both statistics and biostatistics. Statistical data analysis is the most important step in any Dissertation or thesis. We are excellent in offering the data compiling and recoding, statistical data analysis help and interpretation of statistical output. In additional, we offer the Presentation of tables master's statistical data analysis as well as figures, Quality analysis help and many more.",
  },
  {
    q: "What are the qualifications of statistician and what are they do.",
    a: "We have 10+years of experience senior's statistician oversees all projects from UK, the US and other abroad countries offers Dissertation statistics services to masters and doctoral students as well as work for real corporate projects. Their qualification is PhD and masters so can their having ability to handle complex project that involve cluster analysis and structural equation modeling. Our consultant have years of experience in doing the statistical work so easily explain to clients in a way that can easily understand.",
  },
  {
    q: "I am a master's student. Can you help me to give a Tutor for the Dissertation Statistics service?",
    a: "Yes. You are welcome to get Dissertation Statistics Tutoring apart from writing. We offer some sessions to understand what are the process so you will get the chance to talk with the expertise to complete dissertation with best and accurate finding or data analysis outcome.",
  },
  {
    q: "On which are the areas you provide Dissertation statistics services?",
    a: "We accept orders from a wide range of subjects, which include Business Management, finance, operation management, supply chain and logistics management, entrepreneurial management, human resource management, psychology, history, geography, engineering, healthcare, Economics, Computer Science, English, Literature, Engineering, Epidemiology, nursing, medical, Public Health, Life Science, and Nutrition. If your topic or field of interest is not listed above, kindly contact us to know more about the dissertation writing services, dissertation writing tips, dissertation and thesis writing help",
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
  },
  {
    quote:
      "I was stuck, frustrated, and running out of time. Tutors India stepped in at the perfect moment and turned everything around faster than I imagined. Worth every bit.",
    author: "Oliver Bennett, UK",
  },
  {
    quote:
      "The attention to detail was incredible. It didn't feel like I was working with a service provider — it felt like I had an expert academic partner guiding me throughout.",
    author: "Layla Al Mansoori",
  },
  {
    quote:
      "My research finally started making sense after working with this team. Their guidance simplified complex ideas and gave my project the structure it was missing.",
    author: "Hassan Al Falasi, UAE",
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

const serviceTiers = [
  {
    tier: "Basic",
    color: "#2563b0",
    desc: "Only Statistical Analysis based on the raw data shared. We analyse the data using appropriate statistical tools and just paste the output and write the basic interpretation without any discussion against the literature review",
  },
  {
    tier: "Advanced",
    color: "#1a2a6c",
    desc: "We analyse the given data using appropriate statistical tools and format the tables according to the manuscript style with logical sense. We write the interpretation of the statistics conducted along with the discussion by comparing and contrasting the previous studies conducted as presented in your Chapter II (Literature Review).",
  },
  {
    tier: "Premium",
    color: "#e87722",
    desc: "In addition to the advanced features, we also undertake data collection services under premium. We also check for reliability, and validity for quantitative while rigor and trustworthiness including peer debriefing and support, member checking, negative case analysis and auditing for qualitative textual analysis",
  },
];

const analysisFeatures = [
  {
    title: "Data Compiling and Recoding",
    body: "Creating data entry format in excel, exporting data into SPSS or any software, labelling, checking for normality, missing data, data entry errors, outliers checking using appropriate analysis.",
  },
  {
    title: "Dissertation Statistical Data Analysis Help",
    body: "Although there are several ways of analysing data, usual format starts with descriptive statistics (mean, standard deviation, minimum, maximum, range, standard error of the mean, confidence interval) of the socio-demographic variables (age, sex, occupation, income, marital status) and followed by the reliability of the composite scores. Further, the data analysis is focused on hypothesis testing using appropriate statistical tools",
  },
  {
    title: "Dissertation Interpretation of Statistical Output",
    body: "The output provided in any software will be exhaustive, and it is not necessary to interpret all the numbers. At Tutors India, we interpret the data that are relevant to the thesis and make sure you completely understand the output.",
  },
  {
    title: "Presentation of Tables and Figures",
    body: "At Tutors India, the presentation of statistical output for the Masters Statistical Data analysis and Ph.D. thesis data analysis follows the journal format and apply appropriate interpretation not only based on numbers (quantitative expression) but also qualitatively including commenting your research methodology strength and Limitations.",
  },
  {
    title: "Qualitative Dissertation Analysis Help",
    body: "Avail our qualitative text analysis service in which, we assist in analysing your textual data using NVIVO software and also through Thematic analysis approach.",
  },
  {
    title: "Our Express Dissertation Statistical & Text Analysis Service",
    body: "Find the solution within 4-6 hours' quick turnaround solution. Tutors India has expertise in handling software like SPSS, SPSS AMOS, SAS, SYSTAT, R, STATA, Epi-Info, E-Views, Excel, etc.",
  },
  {
    title: "Chapter by Chapter Delivery Process",
    body: "This is to ensure that clients have full control over the delivery and can look at the drafts of different sections. Unlike other companies, we do not charge any costs for such structure as we ensure client satisfaction at every stage of the work.",
  },
  {
    title: "Statistics Homework & Assignment Help",
    body: "Apart from data analysis using statistical tools, our statistician guides you in solving your statistical homework problems, Statistics coursework, Statistics class work, Mathematics conference paper, Statistics conference paper, Statistical questions, and answers.",
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

const consultationSteps = [
  "After the order is confirmed, we allocate the special team to scrutinize the work regarding necessary availability requirements.",
  "Our team will get back to you with initial queries for clarifications and provide an outline of the proposed analysis.",
  "We will dispatch the work in the draft, and update you on the progress.",
  "You can reach us through your exclusive coordinator for any clarifications.",
  "Additional payment may be required for primary data collection if applicable.",
  "Excel data sheet will be placed in Appendix for full transparency.",
  "Installment payment options are available.",
  "Final delivery is made per agreed schedule or earlier.",
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
        }}
      >
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <p style={{ fontSize: "1rem", opacity: 0.8, marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Dissertation statistical analysis
          </p>
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
            Are you not familiar with statistical &amp; content analysis tools? You have data but does not how to recode it? Do you have a problem in analysing your hypothesis?
          </p>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, maxWidth: 740, margin: "0 auto 12px", opacity: 0.9 }}>
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

      {/* Author byline */}
      <div
        style={{
          background: "#1a2a6c",
          color: "rgba(255,255,255,0.82)",
          padding: "10px 24px",
          textAlign: "center",
          fontSize: "0.82rem",
          letterSpacing: "0.02em",
        }}
      >
        Reviewed by the <strong style={{ color: "#f9c74f" }}>Tutors India Statistical Analysis Team</strong> — SPSS, SAS, R &amp; STATA Certified Statisticians · PhD &amp; Master&apos;s qualified · 10+ years of dissertation research experience
      </div>

      {/* Core intro */}
      <section style={{ background: "#f8f9fc", padding: "52px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Merriweather, serif", fontSize: "1.55rem", color: "#1a2a6c", marginBottom: 16 }}>
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

      {/* Scope callouts */}
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
                style={{ background: "#f8f9fc", borderRadius: 8, padding: "22px 20px", borderTop: "4px solid #2563b0" }}
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
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 20 }}>
            {serviceTiers.map((t) => (
              <div
                key={t.tier}
                style={{ background: "#fff", border: `2px solid ${t.color}`, borderRadius: 10, overflow: "hidden" }}
              >
                <div style={{ background: t.color, color: "#fff", padding: "14px 18px" }}>
                  <div style={{ fontSize: "1.2rem", fontWeight: 700 }}>{t.tier}</div>
                </div>
                <div style={{ padding: "18px 16px" }}>
                  <p style={{ fontSize: "0.94rem", color: "#444", lineHeight: 1.75 }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section style={{ padding: "52px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather, serif", fontSize: "1.55rem", color: "#1a2a6c", marginBottom: 16 }}>
            Our Deliverables While You Order Statistical Help for Master&apos;s Dissertation Service UK
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#444" }}>
            You will get the reply within 30 minutes which would enable to place your order quickly without any delay in submissions. We would provide executive summary /abstract, SPSS data sheet and output, questionnaire or semi-structured interview questions and any other information that have used to develop dissertation statistical report.
          </p>
        </div>
      </section>

      {/* How consultation works */}
      <section style={{ background: "#f8f9fc", padding: "52px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather, serif", fontSize: "1.4rem", color: "#1a2a6c", marginBottom: 20 }}>
            How Does Statistical Consultation Work?
          </h2>
          <ol style={{ paddingLeft: 20, margin: 0 }}>
            {consultationSteps.map((step, i) => (
              <li key={i} style={{ fontSize: "1rem", lineHeight: 1.8, color: "#444", marginBottom: 10 }}>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Analysis Features Grid */}
      <section style={{ padding: "52px 24px", background: "#fff" }}>
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
                  background: "#f8f9fc",
                  borderRadius: 8,
                  padding: "22px 20px",
                  borderTop: "4px solid #2563b0",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                }}
              >
                <h4 style={{ fontFamily: "Merriweather, serif", fontSize: "0.97rem", color: "#1a2a6c", marginBottom: 10 }}>
                  {f.title}
                </h4>
                <p style={{ fontSize: "0.92rem", lineHeight: 1.75, color: "#555" }}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistical Software Tools */}
      <section style={{ background: "#f8f9fc", padding: "52px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather, serif", fontSize: "1.4rem", color: "#1a2a6c", marginBottom: 16 }}>
            Statistical &amp; Qualitative Analysis Software Tools
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#444", marginBottom: 12 }}>
            Quantitative (Statistical) Analysis: SPSS, SAS, Excel, R, STATA, Minitab, SPSS AMOS, SYSTAT, Epi-Info, E-Views
          </p>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#444" }}>
            Qualitative (Textual) Analysis: Atlas-ti, MAXQDA, Nvivo, Wordstat, T-lab, TextPack
          </p>
        </div>
      </section>

      {/* Convince committee */}
      <section style={{ padding: "52px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather, serif", fontSize: "1.4rem", color: "#1a2a6c", marginBottom: 16 }}>
            Master&apos;s Dissertation Part or Chapter Need to Convince the Supervisory Committee
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#444" }}>
            identification of topic, reviewing the literature or literature review, problem statement, research question(s) and research hypothesis development, research design (sampling, measures, procedures and data collection), statistical analysis, (data analysis preparation, data entry and screening, interpretation), discussion, results, recommendation and conclusion.
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
                <p style={{ fontSize: "0.96rem", lineHeight: 1.7, color: "#555" }}>{card.body}</p>
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
                style={{ background: "#f8f9fc", borderRadius: 8, padding: "22px 20px", borderTop: "4px solid #e87722" }}
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
                  fontSize: "0.94rem",
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
