import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "The US / UK Critical Review Service",
  description: "UK Critical Review Writing at Tutors India will be strictly in British English, strictly follow University Requirement including Citation and Formatting. All our Writers belongs to British and the US.",
  alternates: { canonical: "https://tutorsindia.com/our-services/coursework-writing/critical-review/" },
};

const faqs = [
  {
    q: "How do you structure the critical review assignments?",
    a: "With our years of experience, we exclusively assist you in completing your critical thinking assignments. We direct and encourage scholars in obtaining valid reference and arguments to support their arguments. We ensure that the document follows a logical order and fluency of the topic. We evaluate their assumptions that branch between the theory and application and guarantee a successful completion.",
  },
  {
    q: "How can you help me in writing a critical review?",
    a: "Our experts have extensive experience in addressing your critical review requirement. Our sales team will extensively discuss to understand theoretical knowledge and turn into it to your practical experience. We will apply different hypothesis to support your concept and develop a comprehensive and satisfying reflective report experience.",
  },
  {
    q: "How is Tutors India different from other service providers?",
    a: "Tutors India experts with extensive experience apply in-depth critical evaluation concepts on a given topic from various aspects, supported by relevant framework.",
  },
  {
    q: "Who will write my critical reviews?",
    a: "We have a team of brilliant expertise who will write critical reviews on any topic or subjects. Our writers are passionate and talented in working any critical reviews writing to submit their work with more professional way. Our writers are highly qualified and trained in the academic writing field so know how to write your critical review, dissertation, research essays and terms paper on any topic.",
  },
  {
    q: "Can I get some of samples of your critical review writing?",
    a: "Sure, we share some of the sample critical writing reviews works so it is easy for students to analyze of our works.",
  },
  {
    q: "Is your pricing affordable at Tutors India for Critical review writing?",
    a: "Tutors India has been providing high quality dissertation to the students of all academic levels like PhD, masters, undergraduate.",
  },
];

const testimonials = [
  { quote: "Honestly, I didn't expect this level of quality. The team understood exactly what I needed and delivered work that felt genuinely professional. My confidence went from stressed to unstoppable.", author: "Amelia Brooks", location: "UK", avatar: "/images/testimonials/t15.jpg" },
  { quote: "I was stuck, frustrated, and running out of time. Tutors India stepped in at the perfect moment and turned everything around faster than I imagined. Worth every bit.", author: "Oliver Bennett", location: "UK", avatar: "/images/testimonials/t13.jpg" },
  { quote: "The attention to detail was incredible. It didn't feel like I was working with a service provider — it felt like I had an expert academic partner guiding me throughout.", author: "Layla Al Mansoori", avatar: "/images/testimonials/t16.jpg" },
  { quote: "My research finally started making sense after working with this team. Their guidance simplified complex ideas and gave my project the structure it was missing.", author: "Hassan Al Falasi", location: "UAE", avatar: "/images/testimonials/t17.jpg" },
  { quote: "I submitted my work with complete confidence for the first time ever. The quality, formatting, and clarity were all beyond what I hoped for.", author: "Charlotte Reed", location: "UK", avatar: "/images/testimonials/t18.jpg" },
  { quote: "The team handled everything professionally from start to finish. Timely updates, quick responses, and excellent academic quality — exactly what students need during stressful deadlines.", author: "Zain Al Hashmi", location: "UAE", avatar: "/images/testimonials/t19.jpg" },
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
  { title: "We Check Requirement", desc: "Once your critical review is completed we check for spelling, grammar, content, focus, sources quality against the client requirement." },
  { title: "Plagiarism Assurance", desc: "Once your critical review is completed it is checked for plagiarism with anti-plagiarism software before the delivery." },
  { title: "Free Appendices / Resources", desc: "We ensure not only to deliver your work but also additional reference materials will be shared via zip file through google drive or drop box." },
  { title: "Download Your Order", desc: "You can download your order through our CRM and reminder will be sent through email & SMS. Additional copy will be mailed." },
  { title: "Request for Amendment", desc: "If you required any changes, you can always come back to us, we are ready to unlimited revisions for the concept being committed. Comments can be shared through guidance@tutorsindia.com." },
  { title: "Researcher Makes the Changes", desc: "The document will be shared to our writer and once the work is completed, we will share you the complete work through email or you can download the order." },
];

const guarantees = [
  { t: "A complete secure & Confidential Service", d: "We offer 100% confidentiality of client's personal details, payment details, project works, and copyrights of research works. All your projects are given unique reference codes. Documents are accessed only by writers who signed NDA with Tutors India. Your financial information is protected by 128-bit secure socket layer (SSL) encryption." },
  { t: "Fully Referenced", d: "Our critical review work is fully referenced with latest articles and textbooks. We refer only peer-reviewed sources such as scholarly articles and textbooks. We refer databases including Web of Science, ProQuest, Google Scholar, Business Source Complete, and latest newspapers articles such as Economic Times, Forbes, The Wall Street, The Economics to identify the industrial problem." },
  { t: "Our Guarantees", d: "(1) Unlimited Revision for the work being committed. (2) We ensure on-time delivery (3) We support 24/7. (4) Our word count committed does not include references and bibliography & help you to locate the sources cited (5) Ensure three-level quality check including Technical QC, Editor QC and final check against the requirement (6) Confidentiality of the information (7) Plagiarism free work – less than 5% percent. (8) Only experienced and subject specific writers will be allotted." },
  { t: "Plagiarism Free Work", d: "We are aware of the consequences of plagiarism. Hence, critical review writing is completely plagiarism free. Our work is scanned against online sources in a similar way like WriteCheck or Turnitin. We ensure that our clients are not finding any issues with regards to plagiarism and so we issue plagiarism-free certificate. Our streamlined and high-quality research writing process ensures your critical review is not just copy-pasted, but written only after brainstorming sessions with our team of professional researchers." },
  { t: "On Time", d: "Our work is delivered at a specified date and time. Our specific changes to the delivered work will be carried out within 45 days of delivery. We guarantee delivery of minor changes within 24 working hours and significant changes within 48 working hours. We acknowledge all your emails within 30 minutes of working hours." },
  { t: "Experienced Writers", d: "Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities from India, the US, and the UK. We identify the perfect SME according to your subject and area. Expert is selected through a stringent selection process including the signing of non-disclosure and confidentiality agreement." },
];

export default function CriticalReviewPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Our Services</Link>{" / "}
            <Link href="/our-services/coursework-writing/" style={{ color: "#a0b8e0" }}>Coursework Writing</Link>{" / "}
            <span style={{ color: "#fff" }}>Critical Review</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.6rem,3vw,2.4rem)", marginBottom: "18px", lineHeight: 1.3 }}>
            The US / UK Critical Review Service
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "1.05rem", maxWidth: "820px", lineHeight: 1.8, marginBottom: "16px" }}>
            UK Critical Review Writing at Tutors India will be strictly in British English, strictly follow University Requirement including Citation and Formatting. All our Writers belongs to British and the US.
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

      {/* Intro cards + trust paragraph */}
      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        <div style={{ background: "#f0f4ff", borderRadius: "12px", padding: "32px 36px", marginBottom: "32px", borderLeft: "5px solid #1a2a6c" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", color: "#1a2a6c", marginBottom: "8px" }}>
            UK / US Critical Review Writing Service
          </h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "4px" }}>
            Assistance for Tutoring and Writing Services exclusively for the UK and Australian Universities –
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, margin: 0 }}>
            You will be Amazed with the quality of your Critical Review
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "20px", marginBottom: "32px" }}>
          <div style={{ background: "#fff", borderRadius: "10px", padding: "24px 28px", boxShadow: "0 2px 12px rgba(26,42,108,0.08)", borderTop: "4px solid #1a2a6c" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>
              Your critical review is written by qualified and experienced researchers from the US &amp; UK
            </h3>
            <p style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.7, margin: 0 }}>
              Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities from the US, UK &amp; India.
            </p>
          </div>
          <div style={{ background: "#fff", borderRadius: "10px", padding: "24px 28px", boxShadow: "0 2px 12px rgba(26,42,108,0.08)", borderTop: "4px solid #e87722" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>
              UK/ the US Critical Review Writing Service
            </h3>
            <p style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.7, margin: 0 }}>
              Our specific Critical Review writing demonstrates an objective, selective, balanced and insightfully critical approach to the contents of the article and include references to research issues including rationale, methodology and findings.
            </p>
          </div>
        </div>

        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "28px 32px" }}>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", color: "#1a2a6c", marginBottom: "14px" }}>
            Critical Review Service
          </h3>
          <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "14px" }}>
            Doing critical review is one of the challenging and difficult tasks for students, as it requires students to evaluate and summarize a text and provide their opinion and judgment. This is a challenging task because you need to read selected article and carefully, analyse it and evaluate the quality and originality of the research thereby assess the usefulness and validity of research findings. Further, you also need to explore its weakness and strengths followed by its overall value.
          </p>
          <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "14px" }}>
            At Tutors India, our experts being in the research field for more than 20 years, and being part of peer review member for different journals, have capability to handle critical review of various articles at different levels. Our critical review experts attempt to understand the topic of context from different perspectives with reference to the approaches, theories and frameworks. Our aim is to not write another book or journal article but critically evaluate the author&apos;s argument.
          </p>
          <p style={{ color: "#444", lineHeight: 1.8, margin: 0 }}>
            Critical Reviews are written with utmost care based on your specific university guidelines &amp; Specifications. At Tutors India, our experts being in the research field for more than 20 years, and being part of peer review member for different journals, have capability to handle critical review of various articles at different levels.
          </p>
        </div>
      </section>

      {/* Service Tiers */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "8px", textAlign: "center" }}>
            What Services do we offer under Critical Review Writing?
          </h2>
          <p style={{ color: "#555", textAlign: "center", marginBottom: "32px", lineHeight: 1.7 }}>
            We write complete critical review from the introduction to recommendations. Although it looks simple, but in practical, it&apos;s a tedious task to complete each and every step.
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
          UK Critical Review Writing Service Feature
        </h2>
        <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", color: "#1a2a6c", marginBottom: "8px", fontWeight: 400 }}>
          A Critical Review Writing Service features that helps to get the grade
        </h3>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "32px" }}>
          Our UK Critical Review writing help guarantees that your review is confidential, and so you do not have to worry about it. Just send us your topic along with the deadline and see the results that are far justified and mark the success of your Critical Review.
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
          Our Critical Review Writing Services is Well Structured Focusing On Four Basic Parts
        </h3>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "28px" }}>
          At Tutors India, we provide help in critically reviewing a journal article, a chapter, text book, movie or any other. Our critical review is well structured focusing on four basic parts.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "16px", marginBottom: "32px" }}>
          {[
            { n: "1", t: "Introduction", d: "Provides context for the work being reviewed, states the purpose of the review, and outlines the structure of the critique." },
            { n: "2", t: "Summary", d: "Briefly summarizes the main argument, purpose, methods, findings, and conclusions of the reviewed work." },
            { n: "3", t: "Critique", d: "Evaluates the strengths and weaknesses of the work, assessing the quality of evidence, logic, methodology, and overall contribution." },
            { n: "4", t: "Conclusion", d: "Summarises the main points of the critique and provides an overall assessment of the value of the reviewed work." },
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
          Critical Review Writing need to convince the Supervisory committee
        </h3>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "28px" }}>
          We write a complete Critical Review that would convince your supervisory committee. Our critical review demonstrates an objective, selective, balanced and insightfully critical approach to the contents of the article and include references to research issues including rationale, methodology and findings. We also offer specific essay from the introduction to recommendations. Further, we offer an expository essay, persuasive essay, descriptive essay and narrative essays.
        </p>
      </section>

      {/* Free Offers + Deliverables */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", color: "#1a2a6c", marginBottom: "28px" }}>
            Free Offers along with your Critical Review Writing Services
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "24px" }}>
            <div style={{ background: "#fff", borderRadius: "10px", padding: "24px", borderLeft: "4px solid #e87722" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "8px" }}>
                Free Tutoring
              </h3>
              <p style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.7 }}>
                Free Tutoring for the work being carried out – to speak confidently with your program supervisors. We deliver more than your expectation.
              </p>
            </div>
            <div style={{ background: "#fff", borderRadius: "10px", padding: "24px", borderLeft: "4px solid #1a2a6c" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "8px" }}>
                Our Deliverables
              </h3>
              <p style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.7 }}>
                Executive Summary / Abstract, free articles used for writing the dissertation, SPSS data sheet and output, questionnaire or semi-structured interview questions and reflective log or diary used during research.
              </p>
            </div>
            <div style={{ background: "#fff", borderRadius: "10px", padding: "24px", borderLeft: "4px solid #2563b0" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "8px" }}>
                Our Critical Review Service is Exclusive
              </h3>
              <p style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.7 }}>
                We do not just provide a critical review, but rather clear explanation and justification for the content written. Critical Review writing services from Tutors India is simply easy and straightforward. You will get the reply within 30 minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subject Expertise */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", marginBottom: "8px" }}>
            Your Critical Review is Written by Your Choice of Subject Matter Expertise
          </h2>
          <p style={{ color: "#c5d5f0", lineHeight: 1.8, marginBottom: "10px" }}>
            We have a team of 2000+ expertise across the subjects &amp; countries (including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine)
          </p>
          <p style={{ color: "#c5d5f0", lineHeight: 1.8, marginBottom: "28px" }}>
            Tutors India has capability and skills to handle subjects across the field. We chose qualified and experienced subject specific expertise while you order your critical review. We offer topic selection for Management, Social Science, Engineering, Technology, Life Science, Medical, Arts &amp; Literature / Linguistics, and many more.
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
          Why Choose Tutors India: Critical Review Writing Service features
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
            After the order is confirmed, we allocate the special team to scrutinize the work regarding necessary availability requirements that would be essential to complete the work.
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
            Track Your Report through our customized CRM — You need not check email frequently rather your report is safe on our customizable CRM and you can download later at any point of time by using your unique username and password.
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
          Place Your Order Today
        </h2>
        <p style={{ color: "#c5d5f0", marginBottom: "28px", fontSize: "1rem" }}>
          Invest in your Career — get expert Critical Review writing support from our qualified academics today.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 36px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, textDecoration: "none" }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 36px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, textDecoration: "none" }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
