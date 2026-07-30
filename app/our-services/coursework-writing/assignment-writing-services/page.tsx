import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "Assignment Writing Service by Certified Writers",
  description: "Our assignment writing service provides customized solutions for university students, ensuring high-quality work.",
  keywords: "assignment writing service, assignment writing help, cheap assignment writing service, assignment help uk, assignment writers uk, assignment writing service uk, Assignment Writing Services, Assignment Writing Help, Assignment Writing Company",
  alternates: { canonical: "https://www.tutorsindia.com/our-services/coursework-writing/assignment-writing-services/" },
};

const faqs = [
  {
    q: "I am an academic student very much scared about plagiarism. How can you help me in assignment writing?",
    a: "Tutors India, we have a brilliant statisticians hold advanced Masters and PhD degrees with 10+ years of experience and also have a wide range of statistical analysis experience. They will give the complete and concise manuscript statistics reporting based on well-developed plan. AT Tutors India, Clients will get the high quality and timely deliverables without a doubt.",
  },
  {
    q: "Are you genuine assignment writing services UK service provider?",
    a: "To provide manuscript statistics topic and match exactly with your requirement, provide key research interested areas within your scope, target country, industry experience and feasibility of data collection, if any. In addition, any other information that our writer should know also can be provided from your end.",
  },
  {
    q: "What quality of work you give to us for assignment writing?",
    a: "Our well-experienced statisticians are capable of SPSS, STATA, SAS, R, E-views and many more.",
  },
  {
    q: "Can I Get assignment writing samples?",
    a: "Since 2011, Tutors India is the trusted mentors for the student in offering various Dissertations writing support. At Tutors India, we assist both statistics and biostatistics. The Manuscript Statistical data analysis is the most significant step in any Dissertation or thesis. We are excellent in offering the data compiling and recoding, statistical data analysis help and interpretation of statistical output. In additional, we offer the Presentation of table's manuscript statistical data analysis as well as figures, Quality analysis help and many more.",
  },
  {
    q: "Can I talk directly to the assignment writers?",
    a: "Apart from researchers, we assist the biostatical analysis services for the masters and PhD dissertation students or research paper so we strongly encourage getting help from our highly talented and experiencing statistician.",
  },
  {
    q: "What would be the price that you charge for assignment writing services?",
    a: "Yes, we upload some of the manuscript statistics sample works at tutors india is written by our expertise.",
  },
];

const testimonials = [
  { quote: "Best experience you can imagine. Contacted Tutors India for assignment assistance and got my work completed on time. For an international student, getting work done without travelling makes the whole experience incredible.", author: "Bhavin", avatar: "/images/testimonials/t22.jpg" },
  { quote: "I'm grateful to the team who guided me all the way through for completing my assignment work. It was excellent — they provided me with high quality technical content and my assignment was submitted on time.", author: "Divyansh", avatar: "/images/testimonials/t20.jpg" },
  { quote: "What impressed me most was how personalised the support felt. They didn't just complete the work — they understood my goals and helped me present them better.", author: "Khalid Al Nuaimi", avatar: "/images/testimonials/t17.jpg" },
  { quote: "Honestly, I didn't expect this level of quality. The team understood exactly what I needed and delivered work that felt genuinely professional. My confidence went from stressed to unstoppable.", author: "Amelia Brooks", location: "UK", avatar: "/images/testimonials/t15.jpg" },
  { quote: "I was stuck, frustrated, and running out of time. Tutors India stepped in at the perfect moment and turned everything around faster than I imagined. Worth every bit.", author: "Oliver Bennett", location: "UK", avatar: "/images/testimonials/t13.jpg" },
];

const subjects = [
  "OPM", "HRM", "Technology", "Teacher Training", "Sustainable Customer Value",
  "Marketing Management", "Research Methodology", "Resit", "Rural Leadership",
  "Information System Projects", "OB", "Nursing", "Marketing Communication",
  "Change Management", "TQM", "IBE", "CB", "Innovation", "Service Excellence",
  "HRPD", "Case Study", "Financial Plan", "Business Plan", "Market Research Plan",
  "English", "Education", "Economics", "Corporate Strategy", "Law",
  "Reflective Writing", "Medicine", "Business Research", "Maths", "Statistics",
  "ELT", "Biology", "Chemistry", "Physics", "Tourism", "Service Quality",
  "Public Health Epidemiology", "Dentistry", "Psychology", "Religion", "Spiritual Studies",
];

const orderProcess = [
  { title: "We Identify Your Writer", desc: "In order to get our service, you need to first fill out the form with your information in a comprehensive manner." },
  { title: "Reference Number", desc: "Upon receiving your Enquiry form, we assign you a reference number. You can know the status of your paper anytime by sending us an email or tracking through CRM." },
  { title: "Acknowledgment", desc: "Once you have paid for your order you will receive an acknowledgement from us. The writing process here with us begins within couple of days after receiving your order." },
  { title: "Edit & Proofreading", desc: "Once we receive an order from our writer, we ensure to proofread the document." },
  { title: "We Check Requirement", desc: "Once your assignment is completed we check for spelling, grammar, content, focus, sources quality against the client requirement." },
  { title: "Plagiarism Assurance", desc: "Once your assignment is completed it is checked for plagiarism with anti-plagiarism software before the delivery." },
  { title: "Free Appendices / Resources", desc: "We ensure not only to deliver your work but also additional reference materials will be shared via zip file through google drive or drop box." },
  { title: "Download Your Order", desc: "You can download your order through our CRM and reminder will be sent through email & SMS. Additional copy will be mailed." },
  { title: "Request for Amendment", desc: "If you required any changes, you can always come back to us, we are ready to unlimited revisions for the concept being committed." },
  { title: "Researcher Makes the Changes", desc: "The document will be shared to our writer and once the work is completed, we will share you the complete work through email or you can download the order." },
];

const guarantees = [
  {
    t: "A complete secure & Confidential Service",
    d: "We offer 100% confidentiality of client's personal details, payment details, project works, and copyrights of research works.",
  },
  {
    t: "Fully Referenced",
    d: "Our assignment work is fully referenced with latest articles and textbooks. We refer only peer reviewed sources such as scholarly articles and textbooks to write the assignment.",
  },
  {
    t: "Our Guarantees",
    d: "(1) Unlimited Revision for the work being committed. (2) We ensure on-time delivery (3) We support 24/7. (4) Our word count committed does not include references and bibliography (5) Ensure three-level quality check (6) Confidentiality of the information (7) Plagiarism free work – less than 5% percent. (8) Only experienced and subject specific writers will be allotted.",
  },
  {
    t: "Plagiarism Free Work",
    d: "We are aware of the consequences of plagiarism. Hence, assignment writing is completely plagiarism free, where we ensure to acknowledge the authors of all publication, and re-write in our own words. We scan every document similar to WriteCheck or Turnitin before delivering.",
  },
  {
    t: "On Time",
    d: "Our work is delivered at a specified date and time. Our specific changes to the delivered work will be carried out within 45 days of delivery. We guarantee delivery of minor changes within 24 working hours and significant changes within 48 working hours. We acknowledge all your emails within 30 minutes of working hours.",
  },
  {
    t: "Experienced Writers",
    d: "Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities from India, the US, and the UK.",
  },
];

export default function AssignmentWritingServicesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Our Services</Link>{" / "}
            <Link href="/our-services/coursework-writing/" style={{ color: "#a0b8e0" }}>Coursework Writing</Link>{" / "}
            <span style={{ color: "#fff" }}>Assignment Writing Services</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.6rem,3vw,2.4rem)", marginBottom: "18px", lineHeight: 1.3 }}>
            UK Professional help with assignments
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "1.05rem", maxWidth: "820px", lineHeight: 1.8, marginBottom: "12px" }}>
            Are you looking for a high-quality critical assignment writing Services that ensure distinction?
          </p>
          <p style={{ color: "#f9c74f", fontSize: "1.1rem", fontFamily: "Merriweather,serif", fontWeight: 700, marginBottom: "28px" }}>
            Then You&apos;ve Certainly Reached the Right place
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <Link href="/order-now/" style={{ padding: "12px 32px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none" }}>Place an Order</Link>
            <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, fontSize: "0.95rem", textDecoration: "none" }}>Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        <div style={{ background: "#f0f4ff", borderRadius: "12px", padding: "32px 36px", marginBottom: "32px", borderLeft: "5px solid #1a2a6c" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.35rem", color: "#1a2a6c", marginBottom: "10px" }}>
            Your assignment is written by qualified and experienced British assignment writers and researchers from the US and the UK
          </h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "10px" }}>
            UK Assignment Writing Help at Tutors India match your study needs across a broad range of subjects. Your Assignment would demonstrate all learning outcomes for that unit and showcase intellectual debate, critical analysis, evidence of original thought and generation of new ideas.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "10px" }}>
            Our Assignment writers have experience in specific domain experience, aware of theories of learning and educational degrees from international and top-ranked universities from India, the US, and the UK.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, margin: 0 }}>
            Whether it is <Link href="/blog/perfecting-an-engineering-course-assignment/" style={{ color: "#1a2a6c", fontWeight: 600 }}>assignment writing</Link> for engineering or business studies, every submission draws only on <Link href="/our-services/editing-services/language-editing/" style={{ color: "#1a2a6c", fontWeight: 600 }}>peer reviewed sources</Link> and the <Link href="/our-services/coursework-writing/references-collection-services/" style={{ color: "#1a2a6c", fontWeight: 600 }}>latest resources</Link> from credible academic databases.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "20px", marginBottom: "32px" }}>
          <div style={{ background: "#fff", borderRadius: "10px", padding: "24px 28px", boxShadow: "0 2px 12px rgba(26,42,108,0.08)", borderTop: "4px solid #1a2a6c" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>
              Assignment Writing Service
            </h3>
            <p style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.7, margin: 0 }}>
              Assignments are given to students in order to prepare them for certain topics comprehensively with deep knowledge and understanding. Tutors at Tutors India work seriously with your assignments and assist you in all stages either online or email-based.
            </p>
          </div>
          <div style={{ background: "#fff", borderRadius: "10px", padding: "24px 28px", boxShadow: "0 2px 12px rgba(26,42,108,0.08)", borderTop: "4px solid #e87722" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>
              Assignments are written with utmost care based on your specific university guidelines &amp; Specifications
            </h3>
            <p style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.7, margin: 0 }}>
              We take a careful approach to following institutional requirements without plagiarism and to communicating complex ideas critically and concisely.
            </p>
          </div>
        </div>

        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "28px 32px" }}>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", color: "#1a2a6c", marginBottom: "14px" }}>
            UK Assignment Editing Services – Demonstrate knowledge, argument, analysis, language and expression, and scholarly apparatus
          </h3>
          <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "14px" }}>
            Our UK Assignment Writing editing services help demonstrate knowledge, argument, analysis, language and expression, and scholarly apparatus. We communicate complex ideas critically and concisely.
          </p>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>
            Assignment Writing Service is simple, easy, and straightforward
          </h3>
          <p style={{ color: "#444", lineHeight: 1.8, margin: 0 }}>
            Our help to write an assignment guarantees that your assignment remains confidential, so you do not have to worry about it. Just send us your topic along with the deadline and see results that are fully justified and mark the success of your assignment.
          </p>
        </div>
      </section>

      {/* Service Tiers */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "8px", textAlign: "center" }}>
            What services do we offer under our UK Assignment Writing Service?
          </h2>
          <p style={{ color: "#555", textAlign: "center", marginBottom: "32px", lineHeight: 1.7 }}>
            We handle a wide range of assignments including business, nursing, law, and many other fields across three service tiers.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: "20px" }}>
            {[
              { tier: "Basic", color: "#1a2a6c", desc: "Developed based on the relevant sources, a reasonable attempt at finding an area that warrant research & evidence of an attempt to provide critical evaluation but mainly descriptive." },
              { tier: "Advanced", color: "#e87722", desc: "Wide range of sources, a clear identification of research gap in the literature along with aim and research questions." },
              { tier: "Premium", color: "#2563b0", desc: "Refers to a wide range of seminal research with throughout engagement using latest resources. A solid gap would be identified based on the current literature & justified thoroughly & Excellent critical analysis would be shown (upgradable)." },
            ].map(t => (
              <div key={t.tier} style={{ background: "#fff", borderRadius: "10px", padding: "24px", boxShadow: "0 2px 8px rgba(26,42,108,0.07)", borderTop: `4px solid ${t.color}` }}>
                <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "8px" }}>{t.tier}</h3>
                <p style={{ color: "#555", fontSize: "0.94rem", lineHeight: 1.7, margin: 0 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wide Range of Topics + 4-part structure */}
      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "8px" }}>
          Wide Range of Topics – UK Assignment Writing
        </h2>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "32px" }}>
          We handle a wide range of assignments, including OPM, HRM, Technology, Teacher Training, Sustainable Customer Value, Marketing Management, Research Methodology, Resit, Rural Leadership, Information System Projects, OB, Nursing, Marketing Communication, Change Management, TQM, IBE, CB, Innovation, Service Excellence, HRPD, Case Study, Financial Plan, Business Plan, Market Research Plan, English, Education, Economics, Corporate Strategy, Law, Reflective Writing, Medicine, <Link href="/blog/coursework-writing-support-in-uk/" style={{ color: "#1a2a6c", fontWeight: 600 }}>Business Research</Link>, Maths, Statistics, ELT, Biology, Chemistry, Physics, Tourism, Service Quality, Public Health Epidemiology, Dentistry, Psychology, Religion, Spiritual Studies, and many more.
        </p>

        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.35rem", color: "#1a2a6c", marginBottom: "10px" }}>
          UK Assignment Writing Service Features
        </h2>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "20px" }}>
          UK Assignment Writing needs to convince the professor. Our complete assignment writing service includes time planning and multiple procedural steps to meet the highest academic requirements.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "16px", marginBottom: "40px" }}>
          {[
            { n: "1", t: "Introduction", d: "Orientation to topic & Brief statement of the main topic" },
            { n: "2", t: "Body", d: "Topic Sentence A, B, and C" },
            { n: "3", t: "Conclusion", d: "Restatement or summary" },
            { n: "4", t: "Reference list", d: "" },
          ].map(f => (
            <div key={f.n} style={{ background: "#f5f7ff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px", display: "flex", gap: "14px" }}>
              <div style={{ width: "34px", height: "34px", background: "#e87722", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "0.96rem", flexShrink: 0 }}>{f.n}</div>
              <div>
                <h3 style={{ fontSize: "0.96rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{f.t}</h3>
                {f.d && <p style={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.65, margin: 0 }}>{f.d}</p>}
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.15rem", color: "#1a2a6c", marginBottom: "10px" }}>
          What We deliver while your order for UK Assignment writing
        </h3>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "14px" }}>
          Our custom UK Assignment writing service is exclusive. We do not just provide an essay, but rather clear explanation and justification for the content written.
        </p>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "28px" }}>
          We deliver more than your expectation – ensure to provider the proper context, delimit the boundary condition, cite landmark studies, accurately present the theoretical framework &amp; empirical contribution, stay focused on the research question, develop a coherent &amp; persuasive argument, a clear sense of direction, clear citation, APA or any other specific style.
        </p>
      </section>

      {/* Deliverables free offers */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", color: "#1a2a6c", marginBottom: "28px" }}>
            Our deliverables while you order custom Assignment Writing Service
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "24px" }}>
            <div style={{ background: "#fff", borderRadius: "10px", padding: "24px", borderLeft: "4px solid #e87722" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "8px" }}>
                Your Assignment / Quality Assurance
              </h3>
              <p style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.7 }}>
                We provide your assignment along with sample work and conduct three-level quality checks to ensure every assignment meets the highest academic standard before delivery.
              </p>
            </div>
            <div style={{ background: "#fff", borderRadius: "10px", padding: "24px", borderLeft: "4px solid #1a2a6c" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "8px" }}>
                Plagiarism Report
              </h3>
              <p style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.7 }}>
                All assignments are scanned using anti-plagiarism software before delivery. Less than 5% plagiarism is guaranteed. A plagiarism-free certificate is included with your submission.
              </p>
            </div>
            <div style={{ background: "#fff", borderRadius: "10px", padding: "24px", borderLeft: "4px solid #2563b0" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "8px" }}>
                Customer Interaction
              </h3>
              <p style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.7 }}>
                Our exclusive coordinators will get in touch with you to clarify any queries throughout the process. We ensure clear communication between you and the assigned writer.
              </p>
            </div>
          </div>
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
            Your Assignment is written by your choice of Subject Matter Expertise. Tutors India has capability and skills to handle subjects across management, finance, engineering, medicine, and other areas.
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
          Why Choose Tutors India: Assignment Writing features
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
            Our Process
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
          Get expert Assignment writing assistance from qualified US &amp; UK researchers. Confidential, plagiarism-free, and delivered on time.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 36px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, textDecoration: "none" }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 36px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, textDecoration: "none" }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
