import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "Business Case Study Writing Services UK | Tutors India",
  description: "We write case reports from a GCSE-level essay to a PhD-level model, including planning, statistical analysis, proofreading.",
  keywords: "Cheap Case Study Writing Services and Help UK,Case Study Writing Services,Custom Case Study Writing Services",
  alternates: { canonical: "https://www.tutorsindia.com/our-services/coursework-writing/case-report-writing-services/" },
};

const faqs = [
  {
    q: "What Tutors India will deliver along with the Case report writing services: Service description?",
    a: "You need to specify the particular service that you are looking for whether, you required summary or critical evaluation or mixed. When you order for case report writing service, we provide 100-250 words.",
  },
  {
    q: "What Tutors India will deliver along with the Case report writing services: Service description?",
    a: "After the order confirmed, we allocate the special team to scrutinize the work in terms of availability necessary requirements that would be essential to complete 5o ask during the initial stage of your work to send the requirement.",
  },
  {
    q: "Why Tutors India is better in case report writing compare to others.",
    a: "We are included more competitive advantage that we implement like highly experience and skillful writers, 100% plagiarism free work, on-time delivery, affordable prices, brainstorming sessions*, and many more that why we are stand as the outstanding case service provider in the US, UK and Australian countries compare to other academic service providers.",
  },
  {
    q: "Who will write my case report writing?",
    a: "We have a team of brilliant expertise who will write case report writing on any topic or subjects. Our writers are passionate and talented in working any essays by submit their case report writing work with more professional way. Our writers are highly qualified and trained in the academic writing field so know how to write your case report-writing, critical review, reflective report, dissertation, and research essays and terms paper on any topic.",
  },
  {
    q: "How quickly can I Get my case report?",
    a: "After getting the Topic of your case report, we will talk with our writers to set the timeline. Even, we are ready to offer the high quality of Case report on urgent basis. We ensure that our essay papers will delivered on Time.",
  },
  {
    q: "Can I get some of samples of case report writing?",
    a: "Yes, we share some of the sample case report writing works so it is easy for students to analyze of our quality of our works.",
  },
];

const testimonials = [
  { quote: "Honestly, I didn't expect this level of quality. The team understood exactly what I needed and delivered work that felt genuinely professional. My confidence went from stressed to unstoppable.", author: "Amelia Brooks", location: "UK", avatar: "/images/testimonials/t15.jpg" },
  { quote: "I was stuck, frustrated, and running out of time. Tutors India stepped in at the perfect moment and turned everything around faster than I imagined. Worth every bit.", author: "Oliver Bennett", location: "UK", avatar: "/images/testimonials/t13.jpg" },
  { quote: "The attention to detail was incredible. It didn't feel like I was working with a service provider — it felt like I had an expert academic partner guiding me throughout.", author: "Layla Al Mansoori", avatar: "/images/testimonials/t16.jpg" },
  { quote: "My research finally started making sense after working with this team. Their guidance simplified complex ideas and gave my project the structure it was missing.", author: "Hassan Al Falasi", location: "UAE", avatar: "/images/testimonials/t17.jpg" },
  { quote: "I submitted my work with complete confidence for the first time ever. The quality, formatting, and clarity were all beyond what I hoped for.", author: "Charlotte Reed", location: "UK", avatar: "/images/testimonials/t18.jpg" },
  { quote: "The team handled everything professionally from start to finish. Timely updates, quick responses, and excellent academic quality — exactly what students need during stressful deadlines.", author: "Zain Al Hashmi", location: "UAE", avatar: "/images/testimonials/t19.jpg" },
  { quote: "I express my sincere gratitude to the team of Tutors India for guiding me to complete my case report. They prepared the case report for my research proposal and also guided me with thorough instructions. The support is fantastic!", author: "Audrey", avatar: "/images/testimonials/t15.jpg" },
  { quote: "The submission procedure was simple. Likewise, the peer review procedure was straightforward and completed on time. I really appreciate their taking the time to include a brief profile of the authors. I would recommend Tutors India for case report publication.", author: "Isabella", avatar: "/images/testimonials/t16.jpg" },
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies",
  "Marketing & Communication", "Engineering & Technology", "Natural Sciences & Mathematics",
  "Biological & Life science", "Economics & Administration", "Humanities & Social Science",
  "Law", "Medicine & Health", "Education & Training",
  "Journalism & Media", "Agriculture & Forestry", "Computer Science & IT",
  "Hospitality, Leisure & Sports",
];

const features = [
  { icon: "📄", title: "Plagiarism Free Work" },
  { icon: "✨", title: "Uniqueness" },
  { icon: "📚", title: "Fully Referenced" },
  { icon: "🎯", title: "100% Requirement Match" },
  { icon: "⏱", title: "On Time" },
  { icon: "📝", title: "Word Count Committed" },
  { icon: "✅", title: "Quality Assurance" },
  { icon: "🔄", title: "Unlimited Revisions" },
  { icon: "💰", title: "Affordable" },
  { icon: "👨‍🎓", title: "Experienced Writers with a minimum degree of Master's with research experience" },
];

const orderProcess = [
  { title: "We Identify Your Writer", desc: "In order to get our service, you need to first fill out the form with your information in a comprehensive manner." },
  { title: "Reference Number", desc: "Upon receiving your Enquiry form, we assign you a reference number. You can know the status of your paper anytime by sending us an email or tracking through CRM." },
  { title: "Acknowledgment", desc: "Once you have paid for your order you will receive an acknowledgement from us. The writing process here with us begins within couple of days after receiving your order." },
  { title: "Edit & Proofreading", desc: "Once we receive an order from our writer, we ensure to proofread the document." },
  { title: "We Check Requirement", desc: "Once your case report is completed we check for spelling, grammar, content, focus, sources quality against the client requirement." },
  { title: "Plagiarism Assurance", desc: "Once your case report is completed it is checked for plagiarism with anti-plagiarism software before the delivery." },
  { title: "Free Appendices / Resources", desc: "We ensure not only to deliver your work but also additional reference materials will be shared via zip file through google drive or drop box." },
  { title: "Download Your Order", desc: "You can download your order through our CRM and reminder will be sent through email & SMS. Additional copy will be mailed." },
  { title: "Request for Amendment", desc: "If you required any changes, you can always come back to us, we are ready to unlimited revisions for the concept being committed. Comments can be shared through guidance@tutorsindia.com." },
  { title: "Researcher Makes the Changes", desc: "The document will be shared to our writer and once the work is completed, we will share you the complete work through email or you can download the order." },
];

const guarantees = [
  {
    t: "A complete secure & Confidential Service",
    d: "We offer 100% confidentiality of client's personal details, payment details, project works, copyrights of research works.",
  },
  {
    t: "Fully Referenced",
    d: "Our dissertation proposal work is fully referenced with latest articles and textbooks. We refer only peer reviewed sources such as scholarly articles and textbook to write the research proposal. Further, we also read latest news papers articles such as Economic Times, Forbes, The Economics etc to identify the industrial problem.",
  },
  {
    t: "Our Guarantees",
    d: "Word Count Committed: Word count does not include references and bibliography and we help you to locate the sources cited. Quality Check: We have stringent quality checking process. Unlimited revisions: We provide unlimited revisions as per the initial commitment.",
  },
  {
    t: "Plagiarism Free Work",
    d: "We are aware of the consequences of plagiarism. Hence, research proposal is completely plagiarism free, where we ensure to acknowledge the authors of all publication, and re-write in our own words, if there is a necessity to quote an author ad verbatim, then we use quotation marks and italics to indicate the same.",
  },
  {
    t: "On Time",
    d: "Our work is delivered on specified time. Our specific changes to the delivered work within 45 days of delivery. We guarantee delivery of minor changes within 24 working hours and significant changes within 48 working hours. We acknowledge all your emails within 30 minutes of working hours.",
  },
  {
    t: "Experienced Writers",
    d: "Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities from India, the US, and the UK.",
  },
];

export default function CaseReportWritingServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Our Services", url: "/our-services/" }, { name: "Coursework Writing", url: "/our-services/coursework-writing/" }, { name: "Case Report Writing Services" }]} />
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Our Services</Link>{" / "}
            <Link href="/our-services/coursework-writing/" style={{ color: "#a0b8e0" }}>Coursework Writing</Link>{" / "}
            <span style={{ color: "#fff" }}>Case Report Writing Services</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.6rem,3vw,2.4rem)", marginBottom: "18px", lineHeight: 1.3 }}>
            The US / UK Report Writing Service
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "1.05rem", maxWidth: "820px", lineHeight: 1.8, marginBottom: "16px" }}>
            UK Report Writing at Tutors India will be strictly in British English, strictly follow university requirement including Citation and formatting. Our team of US &amp; British Writers guarantees your grade.
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <Link href="/order-now/" style={{ padding: "12px 32px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none" }}>Get A Free Quote</Link>
            <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, fontSize: "0.95rem", textDecoration: "none" }}>Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Intro cards + trust paragraph */}
      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        <div style={{ background: "#f0f4ff", borderRadius: "12px", padding: "32px 36px", marginBottom: "32px", borderLeft: "5px solid #1a2a6c" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", color: "#1a2a6c", marginBottom: "8px" }}>
            UK/ the US Reflective Report Writing Writing Service
          </h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "4px" }}>
            Our specific UK essay writing demonstrates the ability to communicate complex ideas critically, concisely, and clearly..
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, margin: 0 }}>
            You will be Amazed with the quality of your Case Report
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "20px", marginBottom: "32px" }}>
          <div style={{ background: "#fff", borderRadius: "10px", padding: "24px 28px", boxShadow: "0 2px 12px rgba(26,42,108,0.08)", borderTop: "4px solid #1a2a6c" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>
              Your Report is written by qualified and experienced researchers from the US &amp; UK
            </h3>
            <p style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.7, margin: 0 }}>
              Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities from the US, UK &amp; India.
            </p>
          </div>
          <div style={{ background: "#fff", borderRadius: "10px", padding: "24px 28px", boxShadow: "0 2px 12px rgba(26,42,108,0.08)", borderTop: "4px solid #e87722" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>
              Reports are written with utmost care based on your specific university guidelines &amp; Specifications
            </h3>
            <p style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.7, margin: 0 }}>
              We write case report from a GCSE level essay to a PhD level model, at an affordable rates including planning, statistical analysis, proofreading and critiquing.
            </p>
          </div>
        </div>

        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "28px 32px" }}>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", color: "#1a2a6c", marginBottom: "14px" }}>
            Report Writing Service
          </h3>
          <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "14px" }}>
            A case study design provides an opportunity to collect research data from various sources while utilizing different data collection techniques to take advantage of multiple sources of evidence. According to Yin, a rigorous research design is essential to guide a researcher throughout a study. Case study researchers explore, describe, and depict a setting, an individual, or a situation. Our team of expertise has a capability to handle any type of case study such as medical /nursing (case report), business case study (specific company) or scenario based.
          </p>
          <p style={{ color: "#444", lineHeight: 1.8, margin: 0 }}>
            UK Report Writing specific is Simply easy &amp; Straightforward — Our UK Case Report writing help guarantees that your essay is confidential, and so you do not have to worry about it. Just send us your essay topic along with the deadline and see the results that are far justified and mark the success of your case report.
          </p>
        </div>
      </section>

      {/* Service Tiers */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "8px", textAlign: "center" }}>
            What Services do we offer under Report Writing?
          </h2>
          <p style={{ color: "#555", textAlign: "center", marginBottom: "32px", lineHeight: 1.7 }}>
            We write complete essay from the introduction to recommendations. Although it looks simple, but in practical, it&apos;s a tedious task to complete each and every step.
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

      {/* Service Features */}
      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "8px" }}>
          UK Report Writing Service Feature
        </h2>
        <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", color: "#1a2a6c", marginBottom: "8px", fontWeight: 400 }}>
          A Report Writing Service features that helps to get the grade
        </h3>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "32px" }}>
          Qualified researchers, unlimited revision, only peer reviewed articles, plagiarism report, 24/7 support, 100% match with the requirement and on time delivery.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "16px", marginBottom: "48px" }}>
          {features.map(f => (
            <div key={f.title} style={{ background: "#f5f7ff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px 20px", display: "flex", gap: "10px", alignItems: "flex-start" }}>
              <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>{f.icon}</span>
              <span style={{ color: "#1a2a6c", fontWeight: 600, fontSize: "0.94rem", lineHeight: 1.5 }}>{f.title}</span>
            </div>
          ))}
        </div>

        <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", color: "#1a2a6c", marginBottom: "10px" }}>
          Our Report Writing Services Is Well Structured
        </h3>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "20px" }}>
          Our report writing services is well structured covering all essential components of a comprehensive case report.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "16px", marginBottom: "32px" }}>
          {[
            { n: "1", t: "Cover Page", d: "Include student names and student Ids." },
            { n: "2", t: "Executive Summary", d: "If appropriate – should be written last to focus on key points/findings." },
            { n: "3", t: "Introduction", d: "Current Situation Analysis and pertinent Background including a synopsis of the relevant information from the case analysis tool short form." },
            { n: "4", t: "Body", d: "May include Target Market Identification, Market Needs, Forms of IMC in use, Analysis of Case, Key Issues/Goals, Recommendations, Decision Criteria, Assumptions, Data Analysis, Preferred Alternative with rationale." },
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

        <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", color: "#1a2a6c", marginBottom: "10px" }}>
          Reflective Report Writing need to convince the Supervisory committee
        </h3>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "14px" }}>
          We also offer specific essay from the introduction to recommendations. Further, we offer an expository essay, persuasive essay, descriptive essay and narrative essays. Though it looks very simple, it is a tedious task to complete each and every step.
        </p>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "28px" }}>
          <strong>Justification/Predicted Outcome:</strong> It is important that all guesstimates or creative ideas be founded upon some marketing rationale and a solid understanding of the metrics related to the target market and anticipated financial changes/impact. Using target market analysis and education estimation of population, $, and units is appropriate. If you are not confident in your ability to do so…PLEASE FEEL FREE TO DISCUSS "HOW TO" as a team with the professor well in advance of your submission.
        </p>
      </section>

      {/* Free Offers + Deliverables */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", color: "#1a2a6c", marginBottom: "28px" }}>
            Free Offers along with your Reflective Report Writing Services
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "24px" }}>
            <div style={{ background: "#fff", borderRadius: "10px", padding: "24px", borderLeft: "4px solid #e87722" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "8px" }}>
                Free Tutoring
              </h3>
              <p style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.7 }}>
                We deliver more than your expectation – Free Tutoring for the work being carried out – to speak confidently with your program supervisors.
              </p>
            </div>
            <div style={{ background: "#fff", borderRadius: "10px", padding: "24px", borderLeft: "4px solid #1a2a6c" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "8px" }}>
                Our Deliverables
              </h3>
              <p style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.7 }}>
                Essay writing services from Tutors India research writing services is simply easy and straightforward. You will get the reply within 30 minutes which would enable to place your order quickly without any delay in submissions. We would provide executive summary /abstract, free articles used for writing the part dissertation, SPSS data sheet and output, questionnaire or semi-structured interview questions and any other information that we have used to write the dissertation such as reflective log or diary.
              </p>
            </div>
            <div style={{ background: "#fff", borderRadius: "10px", padding: "24px", borderLeft: "4px solid #2563b0" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "8px" }}>
                Our Report Writing Service is Exclusive
              </h3>
              <p style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.7 }}>
                We do not just provide a report, but rather clear explanation and justification for the content written. Our UK Case Report writing help guarantees that your essay is confidential, and so you do not have to worry about it.
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
            We offer topic Selection for Management, Social Science, Engineering, Technology, Life Science, Medical, Arts &amp; Literature / Linguistics, and many more.
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
          Why Choose Tutors India: Report Writing Service features
        </h2>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "32px" }}>
          Qualified researchers, unlimited revision, only peer reviewed articles, plagiarism report, 24/7 support, 100% match with the requirement and on time delivery.
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
            After the order is confirmed, we allocate the special team to scrutinize the work regarding necessary availability requirements that would be essential to complete the work. Once the process is done, in case there are any queries, we ensure to ask during the initial stage of your work and send you the outline proposed for writing secondary data collection based dissertation. Once the outline along with the chapterization plan is approved, we will dispatch the work in chapters, and update you on the progress of your work. Our exclusive coordinators would get in touch with you to clarify any queries. You can also pay in instalments and work will be started as soon as receive the payments. We deliver your work as per the schedule fixed and agreed or even before the schedule.
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
          Get A Free Quote Today
        </h2>
        <p style={{ color: "#c5d5f0", marginBottom: "28px", fontSize: "1rem" }}>
          Get expert case report writing assistance from qualified US &amp; UK researchers. Confidential, plagiarism-free, and delivered on time.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 36px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, textDecoration: "none" }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 36px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, textDecoration: "none" }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
