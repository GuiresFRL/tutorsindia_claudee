import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "Manuscript Qualitative & Statistical Analysis",
  description: "Expert manuscript statistical and qualitative analysis. SPSS, STATA, SAS, R, E-views. 4-6 hour express turnaround. Trusted since 2011. Tutors India.",
  alternates: { canonical: "https://www.tutorsindia.com/our-services/publication-support/manuscript-qualitative-textual-analysis/" },
};

const faqs = [
  {
    q: "Who will do my Manuscript statistics services?",
    a: "Tutors India, we have a brilliant statisticians hold advanced Masters and PhD degrees with 10+ years of experience and also have a wide range of statistical analysis experience. They will give the complete and concise manuscript statistics reporting based on well-developed plan.",
  },
  {
    q: "What Information that I need to provide while ordering for manuscript statistics?",
    a: "To provide manuscript statistics topic and match exactly with your requirement, provide key research interested areas within your scope, target country, industry experience and feasibility of data collection, if any. In addition, any other information that our writer should know also can be provided from your end.",
  },
  {
    q: "What are the statistical software tools used by Statisticians for Manuscript Statistical Analysis?",
    a: "Our well-experienced statisticians are capable of SPSS, STATA, SAS, R, E-views and many more.",
  },
  {
    q: "Are you familiar with Biostatistics service?",
    a: "Since 2011, Tutors India is the trusted mentors for the student in offering various Dissertations writing support. At Tutors India, we assist both statistics and biostatistics. The Manuscript Statistical data analysis is the most significant step in any Dissertation or thesis.",
  },
  {
    q: "Can I get Manuscript statistical analysis help with dissertation or other graduate level research?",
    a: "Apart from researchers, we assist the biostatical analysis services for the masters and PhD dissertation students or research paper so we strongly encourage getting help from our highly talented and experiencing statistician.",
  },
  {
    q: "Can I get samples for manuscript statistical analysis?",
    a: "Yes, we upload some of the manuscript statistics sample works at tutors india is written by our expertise.",
  },
];

const testimonials = [
  { quote: "Best experience you can imagine. Contacted Tutors India for manuscript statistical analysis and got my results chapter completed on time. The team handled SPSS analysis and interpretation brilliantly.", author: "Bhavin", avatar: "/images/testimonials/t22.jpg" },
  { quote: "I'm grateful to the team who guided me all the way through for completing my manuscript statistics. The biostatistical analysis was excellent and my paper was submitted on time.", author: "Divyansh", avatar: "/images/testimonials/t20.jpg" },
  { quote: "What impressed me most was how personalised the support felt. They understood my research design and delivered statistical analysis that perfectly matched the journal specifications.", author: "Khalid Al Nuaimi", avatar: "/images/testimonials/t17.jpg" },
  { quote: "Honestly, I didn't expect this level of quality. The team understood exactly what I needed and delivered work that felt genuinely professional. My confidence went from stressed to unstoppable.", author: "Amelia Brooks", location: "UK", avatar: "/images/testimonials/t15.jpg" },
  { quote: "I was stuck, frustrated, and running out of time. Tutors India stepped in at the perfect moment and turned everything around faster than I imagined. Worth every bit.", author: "Oliver Bennett", location: "UK", avatar: "/images/testimonials/t13.jpg" },
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management",
  "Engineering & Technology", "Natural Sciences & Mathematics",
  "Economics & Administration", "Humanities & Social Science", "Law",
  "Medicine & Health", "Education & Training", "Journalism & Media",
  "Agriculture & Forestry", "Computer Science & IT", "Hospitality, Leisure & Sports",
];

const software = [
  "SPSS", "SPSS AMOS", "SAS", "SYSTAT", "R", "STATA", "Epi-Info", "E-Views", "Excel",
];

const features = [
  "Data compiling and recoding",
  "Manuscript Statistical Data analysis help",
  "Manuscript Interpretation of statistical output",
  "Presentation of Tables and Figures",
  "Qualitative Manuscript Analysis Help",
  "Checking for normality, missing data, outliers",
  "Descriptive statistics",
  "Reliability testing",
  "Hypothesis testing",
];

const orderProcess = [
  { title: "We Identify Your Writer", desc: "In order to get our service, you need to first fill out the form with your information in a comprehensive manner." },
  { title: "Reference Number", desc: "Upon receiving your Enquiry form, we assign you a reference number. You can know the status of your paper anytime by sending us an email or tracking through CRM." },
  { title: "Acknowledgment", desc: "Once you have paid for your order you will receive an acknowledgement from us. The writing process here with us begins within couple of days after receiving your order." },
  { title: "Analysis Plan Proposal", desc: "We submit a proposed analysis plan outline for your approval before beginning the statistical work." },
  { title: "We Check Requirement", desc: "Once your manuscript analysis is completed we check the output, tables, figures, and interpretation against the client requirement." },
  { title: "Plagiarism Assurance", desc: "Once your manuscript is completed it is checked for plagiarism with anti-plagiarism software before the delivery." },
  { title: "Free Appendices / Resources", desc: "SPSS outputs, data sheets, and additional reference materials will be shared via zip file through google drive or drop box." },
  { title: "Download Your Order", desc: "You can download your order through our CRM and reminder will be sent through email & SMS. Additional copy will be mailed." },
  { title: "Request for Amendment", desc: "If you required any changes, you can always come back to us, we are ready to unlimited revisions for the concept being committed." },
  { title: "Researcher Makes the Changes", desc: "The document will be shared to our statistician and once the work is completed, we will share you the complete work through email or you can download the order." },
];

const guarantees = [
  {
    t: "A complete secure & Confidential Service",
    d: "We offer 100% confidentiality of client's personal details, payment details, project works, and copyrights of research works. All your projects are given unique reference codes; documents accessed only by NDA-signed writers; 128-bit SSL encryption.",
  },
  {
    t: "Fully Referenced",
    d: "Our dissertation work is fully referenced with latest articles and textbooks. We refer only peer-reviewed sources such as scholarly articles and textbooks from top academic databases.",
  },
  {
    t: "Our Guarantees",
    d: "(1) Unlimited Revision for the work being committed. (2) We ensure on-time delivery (3) We support 24/7. (4) Our word count committed does not include references and bibliography & help you to locate the sources cited (5) Ensure three-level quality check including Technical QC, Editor QC and final check (6) Confidentiality of the information (7) Plagiarism free work – less than 5% percent. (8) Only experienced and subject specific writers will be allotted.",
  },
  {
    t: "Plagiarism Free Work",
    d: "Plagiarism-free certificate is issued with every delivery. Work is scanned like WriteCheck or Turnitin. Our analysis is not just copy-pasted, but written only after brainstorming sessions.",
  },
  {
    t: "On Time",
    d: "Our work is delivered at a specified date and time. Our specific changes to the delivered work will be carried out within 45 days of delivery. Minor changes within 24 working hours, significant changes within 48 working hours. We acknowledge all emails within 30 minutes of working hours.",
  },
  {
    t: "Experienced Writers",
    d: "Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities from India, the US, and the UK.",
  },
];

export default function ManuscriptQualitativeTextualAnalysisPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Our Services</Link>{" / "}
            <Link href="/our-services/publication-support/" style={{ color: "#a0b8e0" }}>Publication Support</Link>{" / "}
            <span style={{ color: "#fff" }}>Manuscript Statistics</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.6rem,3vw,2.4rem)", marginBottom: "18px", lineHeight: 1.3 }}>
            Manuscript Textual (Qualitative) &amp; Statistical (Quantitative) Analysis Help
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "1.05rem", maxWidth: "820px", lineHeight: 1.8, marginBottom: "16px" }}>
            Are you not confident of with your statistical analysis or not sure if it is designed/analysed according to journal specifications?
          </p>
          <p style={{ color: "#f9c74f", fontSize: "1.1rem", fontFamily: "Merriweather,serif", fontWeight: 700, marginBottom: "28px" }}>
            At Tutors India, we assist for Statistics, Biostatistics &amp; Qualitative Analysis (Content &amp; Thematic)
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <Link href="/order-now/" style={{ padding: "12px 32px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none" }}>Place an Order</Link>
            <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, fontSize: "0.95rem", textDecoration: "none" }}>Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Intro cards */}
      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        <div style={{ background: "#f0f4ff", borderRadius: "12px", padding: "32px 36px", marginBottom: "32px", borderLeft: "5px solid #1a2a6c" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.35rem", color: "#1a2a6c", marginBottom: "10px" }}>
            At Tutors India, we assist for Statistics, Biostatistics &amp; Qualitative Analysis (Content &amp; Thematic)
          </h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "10px" }}>
            Preparing a manuscript statistical report needs patience and precise data. Whether it is for medical, engineering or management, it necessarily requires preparation and statistics effects.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "10px" }}>
            We offer our manuscript statistical consultation services to a wide range of subjects including business, management, economics, finance, psychology, medicine, life science.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, margin: 0 }}>
            Our Statistics service for Manuscript statistical report (result in section) demonstrates ability to communicate complex ideas critically, concisely, comprehensive (Covers everything), clear and logical.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "20px", marginBottom: "32px" }}>
          <div style={{ background: "#fff", borderRadius: "10px", padding: "24px 28px", boxShadow: "0 2px 12px rgba(26,42,108,0.08)", borderTop: "4px solid #1a2a6c" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>
              A substantial manuscript needs to have
            </h3>
            <p style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.8, margin: 0 }}>
              Ample Literature review, Appropriate Citations, Clear Introduction, Enough Research questions, Adequate Samples, Tables and Figures, Standard Methodology, Precise statistical analysis and Techniques, Clear Discussion concepts.
            </p>
          </div>
          <div style={{ background: "#fff", borderRadius: "10px", padding: "24px 28px", boxShadow: "0 2px 12px rgba(26,42,108,0.08)", borderTop: "4px solid #e87722" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>
              Our Express Manuscript Statistical &amp; Text Analysis Service
            </h3>
            <p style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.7, margin: 0 }}>
              Find the solution within 4-6 hours&apos; quick turnaround solution. Tutors India has expertise in handling software like SPSS, SPSS AMOS, SAS, SYSTAT, R, STATA, Epi-Info, E-Views, Excel, etc.
            </p>
          </div>
        </div>

        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "28px 32px" }}>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", color: "#1a2a6c", marginBottom: "14px" }}>
            Statistics Homework &amp; Assignment Help from Tutors India Experts
          </h3>
          <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "14px" }}>
            Beyond data analysis tools, guidance is provided for statistical homework, coursework, classwork, conference papers, and mathematical problems.
          </p>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>
            UK Manuscript Statistical &amp; Textual Analytics Services Are Simply easy &amp; Straightforward
          </h3>
          <p style={{ color: "#444", lineHeight: 1.8, margin: 0 }}>
            The service guarantees confidentiality; clients submit their manuscript topic analysis, research plan, questionnaire, raw data and objectives with deadlines.
          </p>
        </div>
      </section>

      {/* Service Tiers */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "8px", textAlign: "center" }}>
            What Services do we offer under manuscript textual (Qualitative) and statistical (Quantitative) analysis?
          </h2>
          <p style={{ color: "#555", textAlign: "center", marginBottom: "32px", lineHeight: 1.7 }}>
            Three tiers provided with increasing features and scope — from basic statistical output to premium with data collection and qualitative rigour.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: "20px" }}>
            {[
              { tier: "Basic", color: "#1a2a6c", desc: "Only Statistical Analysis based on the raw data shared. We analyse the data using appropriate statistical tools and just paste the output and write the basic interpretation without any discussion against the literature review." },
              { tier: "Advanced", color: "#e87722", desc: "We analyse the given data using appropriate statistical tools and format the tables according to the manuscript style with logical sense. We write the interpretation of the statistics conducted along with the discussion by comparing and contrasting the previous studies conducted as presented in your Chapter II (Literature Review)." },
              { tier: "Premium", color: "#2563b0", desc: "In addition to the advanced features, we also undertake data collection services under premium. We also check for reliability, and validity for quantitative while rigor and trustworthiness including peer debriefing and support, member checking, negative case analysis and auditing for qualitative textual analysis." },
            ].map(t => (
              <div key={t.tier} style={{ background: "#fff", borderRadius: "10px", padding: "24px", boxShadow: "0 2px 8px rgba(26,42,108,0.07)", borderTop: `4px solid ${t.color}` }}>
                <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "8px" }}>{t.tier}</h3>
                <p style={{ color: "#555", fontSize: "0.94rem", lineHeight: 1.7, margin: 0 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features + Software + Free Offers */}
      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "8px" }}>
          A manuscript Qualitative textual and Quantitative statistical analysis Features
        </h2>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "24px" }}>
          Our manuscript analysis service covers all stages from raw data processing to final interpretation and presentation.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "14px", marginBottom: "40px" }}>
          {features.map((f, i) => (
            <div key={f} style={{ background: "#f5f7ff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "16px 20px", display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <div style={{ width: "30px", height: "30px", background: "#e87722", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "0.82rem", flexShrink: 0 }}>{i + 1}</div>
              <span style={{ color: "#1a2a6c", fontWeight: 600, fontSize: "0.94rem", lineHeight: 1.5, paddingTop: "3px" }}>{f}</span>
            </div>
          ))}
        </div>

        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.35rem", color: "#1a2a6c", marginBottom: "16px" }}>
          Statistical Software Expertise
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "48px" }}>
          {software.map(s => (
            <span key={s} style={{ background: "#f0f4ff", border: "1px solid #c5d0e8", color: "#1a2a6c", padding: "7px 18px", borderRadius: "20px", fontSize: "0.94rem", fontWeight: 700 }}>{s}</span>
          ))}
        </div>

        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.35rem", color: "#1a2a6c", marginBottom: "20px" }}>
          Free Offers along with your Manuscript Statistical and textual analysis Help UK
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "16px", marginBottom: "40px" }}>
          {[
            { n: "1", t: "Abstract or Executive Summary", d: "A concise abstract or executive summary included free with every manuscript analysis delivery." },
            { n: "2", t: "Graphs & Tables (redrawn)", d: "All graphs and tables redrawn to meet journal-specific formatting requirements." },
            { n: "3", t: "Statistical / Textual Analysis", d: "Statistical or textual data analysis included with your manuscript at no additional cost." },
            { n: "4", t: "SPSS / Software Screenshots", d: "SPSS output and software screenshots documenting all analyses performed, free of cost." },
            { n: "5", t: "Free Tutoring", d: "Free tutoring sessions for discussing your statistical work with program supervisors." },
            { n: "6", t: "SPSS Output in Appendix", d: "SPSS output pasted in Appendix as part of the free deliverables with every order." },
          ].map(f => (
            <div key={f.n} style={{ background: "#f5f7ff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px", display: "flex", gap: "14px" }}>
              <div style={{ width: "34px", height: "34px", background: "#e87722", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "0.96rem", flexShrink: 0 }}>{f.n}</div>
              <div>
                <h3 style={{ fontSize: "0.96rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "4px" }}>{f.t}</h3>
                <p style={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.6, margin: 0 }}>{f.d}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ background: "#f0f4ff", borderRadius: "10px", padding: "24px 28px", borderLeft: "4px solid #1a2a6c" }}>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>
            Our manuscript textual (Qualitative) and statistical (Quantitative) analysis Service is exclusive
          </h3>
          <p style={{ color: "#555", lineHeight: 1.8, margin: 0 }}>
            We are distinguished by clear explanation and justification for the choice of statistical methods rather than just providing analysis output. Quality assurance, plagiarism checking, and customer interaction occur throughout.
          </p>
        </div>
      </section>

      {/* Subject Expertise */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", marginBottom: "8px" }}>
            Specialized Subject Matter Expertise across the globe
          </h2>
          <p style={{ color: "#c5d5f0", lineHeight: 1.8, marginBottom: "10px" }}>
            We have a team of 2000+ expertise across the subjects &amp; countries (including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine)
          </p>
          <p style={{ color: "#c5d5f0", lineHeight: 1.8, marginBottom: "28px" }}>
            We offer dissertation and manuscript analysis services for management, finance, economics, social science, engineering, technology, life science, medicine, arts and linguistics.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "28px" }}>
            {subjects.map(s => (
              <span key={s} style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "6px 16px", borderRadius: "20px", fontSize: "0.85rem" }}>{s}</span>
            ))}
          </div>
          <Link href="/our-writers/" style={{ color: "#f9c74f", fontWeight: 600, fontSize: "0.95rem", textDecoration: "none" }}>Meet Our Writers →</Link>
        </div>
      </section>

      {/* Guarantee Cards */}
      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "8px" }}>
          Why Choose Tutors India: manuscript textual (Qualitative) and statistical (Quantitative) analysis Service features
        </h2>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "32px" }}>
          Qualified researchers with research methodology expertise, experienced statisticians, questionnaire development skills, unlimited revision, peer-reviewed articles only, 24/7 support.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "24px" }}>
          {guarantees.map(f => (
            <div key={f.t} style={{ background: "#f5f7ff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "24px" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>{f.t}</h3>
              <p style={{ color: "#555", fontSize: "0.94rem", lineHeight: 1.7, margin: 0 }}>{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Order Process */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "8px" }}>
            How Does Statistical consultation work?
          </h2>
          <p style={{ color: "#555", marginBottom: "8px" }}>Have a look at what makes us the best in the business</p>
          <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "32px" }}>
            After the order is confirmed, we allocate the special team to scrutinize the work. In case there are any queries, we ensure to ask during the initial stage and send you the proposed analysis plan outline for approval. Once approved, we dispatch the draft work and update you on progress. Minor changes completed within 24 working hours, significant changes within 48 working hours. All emails acknowledged within 30 minutes.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "20px" }}>
            {orderProcess.map((p, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: "10px", padding: "20px 24px" }}>
                <div style={{ width: "36px", height: "36px", background: "#e87722", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.95rem", marginBottom: "12px" }}>{i + 1}</div>
                <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "0.95rem", color: "#1a2a6c", marginBottom: "6px" }}>{p.title}</h3>
                <p style={{ color: "#555", fontSize: "0.86rem", lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "28px" }}>
          Frequently Asked Questions
        </h2>
        <FaqAccordion faqs={faqs} />
      </section>

      {/* Testimonials */}
      <TestimonialSlider testimonials={testimonials} />

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "56px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.6rem", marginBottom: "12px" }}>
          Order Now
        </h2>
        <p style={{ color: "#c5d5f0", marginBottom: "28px", fontSize: "1rem" }}>
          Get expert Manuscript Statistical &amp; Qualitative Analysis support. 4–6 hour express turnaround available. Confidential, plagiarism-free, and on time.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 36px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, textDecoration: "none" }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 36px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, textDecoration: "none" }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
