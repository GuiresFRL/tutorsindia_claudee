import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "Expert Research Methodology Writing Services",
  description: "Research Methodology Service Help UK. We offer a wide range of dissertation methodology writing services such as Qualitative Research Grounded theory designs etc.",
  keywords: "research methodology writing service, research methodology academic writing, research methodology writing help, research methodology thesis writing, phd dissertation methodology writing help, phd research methodology writing help, uk dissertation research methodology writing service, custom research methodology writing service, qualitative research methodology writing service, quantitative research methodology writing service",
  alternates: { canonical: "https://www.tutorsindia.com/our-services/coursework-writing/research-methodology" },
};

const faqs = [
  {
    q: "How do you ensure that the research methodology meets the requisite academic standard?",
    a: "When you order for research methodology from us, it is not simple matter to maintain the academic standard but for every order we manage the standards carefully so select the qualified writers from the large numbers ensure to achieve high standards.",
  },
  {
    q: "Who will write my research methodology or dissertation full?",
    a: "Your research methodology paper will write by qualified and professional academic chapters who specialize in your field of discipline. For each order, we carefully select the white color academic writer.",
  },
  {
    q: "Why should I consider taking Tutors India for my research methodology writing services?",
    a: "We have an exceptional professional team to deliver excellent research methodology chapter with qualified, experienced writers, plagiarism-free work, best pricing, and subject-specific expertise from international universities.",
  },
  {
    q: "How will you select a writer to work on my essay or dissertation?",
    a: "Since we have more than 400+ academic writers, our project coordinators are carefully scrutinize these proposals and typically assign the qualified writers with the suitable educational background and academic credentials.",
  },
  {
    q: "How quickly can you provide research methodology?",
    a: "Turnaround depends on requirements; please contact us via our UK toll-free number or contact page for specific timelines, or review our customized pricing plans.",
  },
  {
    q: "How can I place an order?",
    a: "Complete our simple order form and submit your requirement we will you call you back or alternatively feel free to contact in our UK toll free number 08081891062.",
  },
];

const testimonials = [
  { quote: "Best experience you can imagine. Contacted Tutors India for research methodology writing and got my chapter completed on time. The methodology was exactly aligned with my research questions and university guidelines.", author: "Bhavin", avatar: "/images/testimonials/t22.jpg" },
  { quote: "I'm grateful to the team who guided me all the way through for completing my research methodology. It was excellent — they provided me with high quality academic content and my dissertation was submitted on time.", author: "Divyansh", avatar: "/images/testimonials/t20.jpg" },
  { quote: "What impressed me most was how personalised the support felt. They didn't just write the chapter — they understood my research question and built a methodology that genuinely supported my study.", author: "Khalid Al Nuaimi", avatar: "/images/testimonials/t17.jpg" },
  { quote: "Honestly, I didn't expect this level of quality. The team understood exactly what I needed and delivered work that felt genuinely professional. My confidence went from stressed to unstoppable.", author: "Amelia Brooks", location: "UK", avatar: "/images/testimonials/t15.jpg" },
  { quote: "I was stuck, frustrated, and running out of time. Tutors India stepped in at the perfect moment and turned everything around faster than I imagined. Worth every bit.", author: "Oliver Bennett", location: "UK", avatar: "/images/testimonials/t13.jpg" },
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies",
  "Marketing & Communication", "Engineering & Technology", "Natural Sciences & Mathematics",
  "Biological & Life Science", "Economics & Administration", "Humanities & Social Science",
  "Law", "Medicine & Health", "Education & Training",
  "Journalism & Media", "Agriculture & Forestry", "Computer Science & IT",
  "Hospitality, Leisure & Sports",
];

const methodologies = [
  "Qualitative Research", "Grounded Theory Designs", "Narrative Research",
  "Observation", "Documentary Analysis", "Interviews", "Focus Groups",
  "Visual Data Approaches", "Quantitative Methods", "Experimental Design",
  "Correlational Design", "Survey Design", "Mixed Methods", "Action Research",
];

const orderProcess = [
  { title: "We Identify Your Writer", desc: "In order to get our service, you need to first fill out the form with your information in a comprehensive manner." },
  { title: "Reference Number", desc: "Upon receiving your Enquiry form, we assign you a reference number. You can know the status of your paper anytime by sending us an email or tracking through CRM." },
  { title: "Acknowledgment", desc: "Once you have paid for your order you will receive an acknowledgement from us. The writing process here with us begins within couple of days after receiving your order." },
  { title: "Edit & Proofreading", desc: "Once we receive an order from our writer, we ensure to proofread the document." },
  { title: "We Check Requirement", desc: "Once your research methodology is completed we check for spelling, grammar, content, focus, sources quality against the client requirement." },
  { title: "Plagiarism Assurance", desc: "Once your research methodology is completed it is checked for plagiarism with anti-plagiarism software before the delivery." },
  { title: "Free Appendices / Resources", desc: "We ensure not only to deliver your work but also additional reference materials will be shared via zip file through google drive or drop box." },
  { title: "Download Your Order", desc: "You can download your order through our CRM and reminder will be sent through email & SMS. Additional copy will be mailed." },
  { title: "Request for Amendment", desc: "If you required any changes, you can always come back to us, we are ready to unlimited revisions for the concept being committed." },
  { title: "Researcher Makes the Changes", desc: "The document will be shared to our writer and once the work is completed, we will share you the complete work through email or you can download the order." },
];

const guarantees = [
  {
    t: "A complete secure & Confidential Service",
    d: "All your projects are given unique reference codes with restricted access. Documents are accessed only by writers who signed NDA with Tutors India. Your financial information is protected by 128-bit secure socket layer (SSL) encryption.",
  },
  {
    t: "Fully Referenced",
    d: "Our dissertation work is fully referenced with latest articles and textbooks. We refer only peer reviewed sources such as scholarly articles and textbooks. Database sources include Web of Science, ProQuest, and Google Scholar.",
  },
  {
    t: "Our Guarantees",
    d: "(1) Unlimited Revision for the work being committed. (2) We ensure on-time delivery (3) We support 24/7. (4) Our word count committed does not include references and bibliography (5) Ensure three-level quality check (6) Confidentiality of the information (7) Plagiarism free work – less than 5% percent. (8) Only experienced and subject specific writers will be allotted.",
  },
  {
    t: "Plagiarism Free Work",
    d: "Our work is scanned against online sources in a similar way like WriteCheck or Turnitin. We are aware of the consequences of plagiarism. Hence, research methodology writing is completely plagiarism free, where we ensure to acknowledge the authors of all publication. We issue plagiarism-free certificates.",
  },
  {
    t: "On Time",
    d: "Our work is delivered at a specified date and time. Our specific changes to the delivered work will be carried out within 45 days of delivery. We guarantee delivery of minor changes within 24 working hours and significant changes within 48 working hours. We acknowledge all your emails within 30 minutes of working hours.",
  },
  {
    t: "Experienced Writers",
    d: "Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities from India, the US, and the UK. Selection follows stringent vetting including non-disclosure agreements.",
  },
];

export default function ResearchMethodologyPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Our Services</Link>{" / "}
            <Link href="/our-services/coursework-writing/" style={{ color: "#a0b8e0" }}>Coursework Writing</Link>{" / "}
            <span style={{ color: "#fff" }}>Research Methodology</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.6rem,3vw,2.4rem)", marginBottom: "18px", lineHeight: 1.3 }}>
            The UK Post-graduate &amp; Doctorate Research Methodology Writing Help
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "1.05rem", maxWidth: "820px", lineHeight: 1.8, marginBottom: "16px" }}>
            Are you looking for an expert writer who can guide in writing the research methodology in a systematic way? We provide detailed blueprints for research approaches, data collection methods, and ethical considerations.
          </p>
          <p style={{ color: "#f9c74f", fontSize: "1.1rem", fontFamily: "Merriweather,serif", fontWeight: 700, marginBottom: "28px" }}>
            Your UK Dissertation Research Methodologies are written by qualified and experienced researchers from the US &amp; UK
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
            UK Dissertation Research Methodology Writing Service – A Detailed Blueprint to carry out your Research
          </h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "10px" }}>
            Determining an appropriate research methodology is crucial for master&apos;s dissertations. Though this section comprises only 15% of the dissertation&apos;s weight, universities require students to demonstrate application of learned methods and techniques. This chapter typically appears as Chapter III, following the literature review and preceding data analysis. Professors expect a reflective, critical account rather than a merely descriptive one.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "10px" }}>
            The complete process spans from theoretical foundations through data collection to analysis, presenting solutions for investigated problems. Methodologies refer to the overall approach to the research process, from the theoretical underpinning to the collection and analysis of data.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, margin: 0 }}>
            Many master&apos;s and doctorate students find this chapter challenging due to its comprehensive scope. Tutors India&apos;s research methodology experts help leverage critical approaches for quality, professional methodologies.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "20px", marginBottom: "32px" }}>
          <div style={{ background: "#fff", borderRadius: "10px", padding: "24px 28px", boxShadow: "0 2px 12px rgba(26,42,108,0.08)", borderTop: "4px solid #1a2a6c" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>
              UK Dissertation Research Methodology Service – Theoretical and Practical Overview
            </h3>
            <p style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.7, margin: 0 }}>
              Whether collecting data for theoretical development like grounded theory or qualitative approaches, or testing hypotheses through quantitative methods, Tutors India provides extensive support. The service ensures validity testing, ethical considerations, and reliability inclusion as fundamental components.
            </p>
          </div>
          <div style={{ background: "#fff", borderRadius: "10px", padding: "24px 28px", boxShadow: "0 2px 12px rgba(26,42,108,0.08)", borderTop: "4px solid #e87722" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>
              Our UK Dissertation Research Methodology Writing Service Help
            </h3>
            <p style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.7, margin: 0 }}>
              Our specific UK Research Methodology writing demonstrates the succinct writing, critical analysis, and justification for the choice of methods chosen. Our professional writers have completed around 10,000 research methodologies while following university guidelines.
            </p>
          </div>
        </div>

        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "28px 32px" }}>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", color: "#1a2a6c", marginBottom: "14px" }}>
            UK Research Methodology Service Help for different Type of Dissertation and designed specific to Subjects
          </h3>
          <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "14px" }}>
            Awareness of disciplinary differences is essential; methodology structures vary significantly between management, healthcare, and economics. Tutors India provides subject-specific consultation and writing services leveraging expert domain knowledge.
          </p>
          <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "14px" }}>
            The organization references extensive textbooks relevant to specializations, including works by Saunders et al., Bryman, Yin, Collis and Hussey, and others.
          </p>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>
            UK Research Methodology Writing Service is Simply easy &amp; Straightforward
          </h3>
          <p style={{ color: "#444", lineHeight: 1.8, margin: 0 }}>
            The ordering process remains confidential and straightforward. Just send us your topic along with the deadline and see the results that are far justified and mark the success of your research methodology.
          </p>
        </div>
      </section>

      {/* Service Tiers */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "8px", textAlign: "center" }}>
            What Services do we offer under UK Research Methodology Writing Service?
          </h2>
          <p style={{ color: "#555", textAlign: "center", marginBottom: "32px", lineHeight: 1.7 }}>
            Three service tiers accommodate different needs: Basic, Quantitative, and Quantitative + Qualitative with grounded theory approaches.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: "20px", marginBottom: "32px" }}>
            {[
              { tier: "Basic", color: "#1a2a6c", desc: "Developed based on the relevant sources, a reasonable attempt at finding an area that warrant research & evidence of an attempt to provide critical evaluation but mainly descriptive." },
              { tier: "Quantitative", color: "#e87722", desc: "Developed based on the relevant sources, a reasonable attempt at finding an area that warrant research & evidence of an attempt to provide critical evaluation but mainly descriptive." },
              { tier: "Quantitative + Qualitative with grounded theory", color: "#2563b0", desc: "Refers to a wide range of seminal research with throughout engagement using latest resources. A solid gap would be identified based on the current literature & justified thoroughly & Excellent critical analysis would be shown (upgradable)." },
            ].map(t => (
              <div key={t.tier} style={{ background: "#fff", borderRadius: "10px", padding: "24px", boxShadow: "0 2px 8px rgba(26,42,108,0.07)", borderTop: `4px solid ${t.color}` }}>
                <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "8px" }}>{t.tier}</h3>
                <p style={{ color: "#555", fontSize: "0.94rem", lineHeight: 1.7, margin: 0 }}>{t.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "#fff", borderRadius: "10px", padding: "24px 28px", borderLeft: "4px solid #e87722" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>
              Two possible ways would occur while ordering for dissertation research methodology
            </h3>
            <p style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.7, marginBottom: "10px" }}>
              <strong>Already Completed Part:</strong> When students have finished other sections including statistical analysis, literature review with identified gaps, introduction with research objectives and questions, they need only the methodology chapter. Information required includes target area, population, sampling methods chosen, sample size, and study conduct descriptions.
            </p>
            <p style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.7, margin: 0 }}>
              <strong>Not Yet Started:</strong> For contemporary work, required information includes proposed research questions, objectives, identified gaps, target population, sample size targets, country, industry details, and data collection feasibility assessments. Existing research proposals suffice as starting points.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology types + deliverables */}
      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "8px" }}>
          UK Dissertation Research Methodology Service – Theoretical and Practical Overview
        </h2>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "14px" }}>
          Research methodology begins with research question formulation alongside sampling decisions — whether probabilistic or non-probabilistic. This continues through measurement via surveys and scaling, then research design selection (experimental or quasi-experimental), concluding with statistical analysis, interpretation, and organised presentation of findings.
        </p>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "24px" }}>
          The RM section typically begins with research design and philosophy overviews, explaining design justifications, sampling method rationale, and data source validation for both primary and secondary sources.
        </p>

        <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", color: "#1a2a6c", marginBottom: "16px" }}>
          Offered Methodologies
        </h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "40px" }}>
          {methodologies.map(m => (
            <span key={m} style={{ background: "#f0f4ff", border: "1px solid #c5d0e8", color: "#1a2a6c", padding: "6px 16px", borderRadius: "20px", fontSize: "0.85rem", fontWeight: 600 }}>{m}</span>
          ))}
        </div>

        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.35rem", color: "#1a2a6c", marginBottom: "10px" }}>
          What We deliver while your order for UK Research Methodology writing
        </h2>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "14px" }}>
          Deliverables exceed expectations, providing proper context, boundary condition delimitation, appropriate theory application, and learning outcome alignment. The organisation ensures three-level quality checks: Technical QC, Editor QC, and final requirement verification.
        </p>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "28px" }}>
          UK Research Methodology Writing needs to convince the supervisor. Our complete research methodology contains three essential elements: &quot;retell, relate &amp; reflect.&quot; This approach builds supervisor confidence in proposed methods.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "16px" }}>
          {[
            { n: "1", t: "Your Research Methodology", d: "Our custom UK Research Methodology writing service is exclusive. We provide more than basic writing — clear explanation and justification for the choice of methods chosen." },
            { n: "2", t: "Quality Assurance", d: "Three-level quality checks: Technical QC, Editor QC, and final requirement verification against client specifications." },
            { n: "3", t: "Plagiarism Report", d: "All research methodology chapters are scanned using anti-plagiarism software before delivery. Less than 5% plagiarism guaranteed with a plagiarism-free certificate." },
            { n: "4", t: "Customer Interaction", d: "Our exclusive coordinators get in touch with you to clarify any queries throughout the process. Clear communication between you and the assigned writer." },
          ].map(f => (
            <div key={f.n} style={{ background: "#f5f7ff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px", display: "flex", gap: "14px" }}>
              <div style={{ width: "34px", height: "34px", background: "#e87722", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "0.96rem", flexShrink: 0 }}>{f.n}</div>
              <div>
                <h3 style={{ fontSize: "0.96rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{f.t}</h3>
                <p style={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.65, margin: 0 }}>{f.d}</p>
              </div>
            </div>
          ))}
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
            Your UK Dissertation Research Methodology is written by your choice of Subject Matter Expertise. Over 2,000 experts handle subjects across arts, sciences, engineering, and medicine.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "28px" }}>
            {subjects.map(s => (
              <span key={s} style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "6px 16px", borderRadius: "20px", fontSize: "0.85rem" }}>{s}</span>
            ))}
          </div>
          <Link href="/our-writers/" style={{ color: "#f9c74f", fontWeight: 600, fontSize: "0.95rem", textDecoration: "none" }}>Meet Our Writers →</Link>
        </div>
      </section>

      {/* Why Choose — Guarantee Cards */}
      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "8px" }}>
          Why Choose Tutors India: Research Methodology Writing features
        </h2>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "32px" }}>
          Qualified researchers, unlimited revision, only peer-reviewed articles, plagiarism report, 24/7 support, 100% match with the requirement and on time delivery.
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
            How Does it work?
          </h2>
          <p style={{ color: "#555", marginBottom: "8px" }}>Have a look at what makes us the best in the business</p>
          <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "32px" }}>
            After the order is confirmed, we allocate the special team to scrutinize the work regarding necessary availability requirements that would be essential to complete the work. Once the process is done, in case there are any queries, we ensure to ask during the initial stage of your work and send you the outline proposed. Once the outline is approved, we will dispatch the work and update you on the progress. Our exclusive coordinators would get in touch with you to clarify any queries.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "20px" }}>
            {orderProcess.map((p, i) => (
              <div key={p.title} style={{ background: "#fff", borderRadius: "10px", padding: "20px 24px" }}>
                <div style={{ width: "36px", height: "36px", background: "#e87722", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.95rem", marginBottom: "12px" }}>{i + 1}</div>
                <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "0.95rem", color: "#1a2a6c", marginBottom: "6px" }}>{p.title}</h3>
                <p style={{ color: "#555", fontSize: "0.86rem", lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ color: "#555", fontSize: "0.94rem", marginTop: "24px", lineHeight: 1.7 }}>
            Track Your Report through our customized CRM — You need not check your email frequently rather your report is safe on our customizable CRM and you can download at any point of time by using your unique username and password.
          </p>
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
          Get expert Research Methodology writing assistance from qualified US &amp; UK researchers. Confidential, plagiarism-free, and delivered on time.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 36px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, textDecoration: "none" }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 36px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, textDecoration: "none" }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
