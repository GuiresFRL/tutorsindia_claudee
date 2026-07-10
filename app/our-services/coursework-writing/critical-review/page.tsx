import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "The US / UK Critical Review Service | Tutors India",
  description: "UK Critical Review Writing at Tutors India will be strictly in British English, strictly follow University Requirement including Citation and Formatting. All our Writers belongs to British and the US.",
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
  {
    quote: "Honestly, I didn't expect this level of quality. The team understood exactly what I needed and delivered work that felt genuinely professional. My confidence went from stressed to unstoppable.",
    author: "Amelia Brooks",
    location: "UK",
    avatar: "/images/testimonials/t15.jpg",
  },
  {
    quote: "I was stuck, frustrated, and running out of time. Tutors India stepped in at the perfect moment and turned everything around faster than I imagined. Worth every bit.",
    author: "Oliver Bennett",
    location: "UK",
    avatar: "/images/testimonials/t13.jpg",
  },
  {
    quote: "The attention to detail was incredible. It didn't feel like I was working with a service provider — it felt like I had an expert academic partner guiding me throughout.",
    author: "Layla Al Mansoori",
    avatar: "/images/testimonials/t16.jpg",
  },
  {
    quote: "My research finally started making sense after working with this team. Their guidance simplified complex ideas and gave my project the structure it was missing.",
    author: "Hassan Al Falasi",
    location: "UAE",
    avatar: "/images/testimonials/t17.jpg",
  },
  {
    quote: "I submitted my work with complete confidence for the first time ever. The quality, formatting, and clarity were all beyond what I hoped for.",
    author: "Charlotte Reed",
    location: "UK",
    avatar: "/images/testimonials/t18.jpg",
  },
  {
    quote: "The team handled everything professionally from start to finish. Timely updates, quick responses, and excellent academic quality — exactly what students need during stressful deadlines.",
    author: "Zain Al Hashmi",
    location: "UAE",
    avatar: "/images/testimonials/t19.jpg",
  },
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies",
  "Marketing & Communication", "Engineering & Technology", "Natural Sciences & Mathematics",
  "Biological & Life science", "Economics & Administration", "Humanities & Social Science",
  "Law", "Medicine & Health", "Education & Training",
  "Journalism & Media", "Agriculture & Forestry", "Computer Science & IT",
  "Hospitality, Leisure & Sports",
];

export default function CriticalReviewPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}
            <Link href="/our-services/coursework-writing/" style={{ color: "#a0b8e0" }}>Coursework Writing</Link>{" / "}
            <span style={{ color: "#fff" }}>Critical Review</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.4rem,3vw,2rem)", lineHeight: 1.3, marginBottom: "12px" }}>
            The US / UK Critical Review Service
          </h1>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(0.9rem,2vw,1.1rem)", lineHeight: 1.5, color: "#c5d5f0", fontWeight: 600, marginBottom: "12px" }}>
            UK Critical Review Writing at Tutors India will be strictly in British English, strictly follow University Requirement including Citation and Formatting. All our Writers belongs to British and the US
          </h2>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1rem,2.5vw,1.4rem)", color: "#f9c74f", fontWeight: 700, marginBottom: "16px" }}>
            Then You&apos;ve Certainly Reached the Right place
          </h2>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, textDecoration: "none" }}>Place an Order</Link>
            <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, textDecoration: "none" }}>Contact Us</Link>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>

        {/* Qualified Researchers */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Your critical review is written by qualified and experienced researchers from the US &amp; UK</h2>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.94rem" }}>
            Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities from the US, UK &amp; India.
          </p>
        </div>

        {/* Critical Review Service */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Critical Review Service</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            Doing critical review is one of the challenging and difficult tasks for students, as it requires students to evaluate and summarize a text and provide their opinion and judgment. This is a challenging task because you need to read selected article and carefully, analyse it and evaluate the quality and originality of the research thereby assess the usefulness and validity of research findings. Further, you also need to explore its weakness and strengths followed by its overall value.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.94rem" }}>
            At Tutors India, our experts being in the research field for more than 20 years, and being part of peer review member for different journals, have capability to handle critical review of various articles at different levels. Our critical review experts attempt to understand the topic of context from different perspectives with reference to the approaches, theories and frameworks. Our aim is to not write another book or journal article but critically evaluate the author&apos;s argument.
          </p>
        </div>

        {/* University Guidelines */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Critical Reviews are written with utmost care based on your specific university guidelines &amp; Specifications</h2>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.94rem" }}>
            At Tutors India, our experts being in the research field for more than 20 years, and being part of peer review member for different journals, have capability to handle critical review of various articles at different levels.
          </p>
        </div>

        {/* UK/US Critical Review Writing Service */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>UK/ the US Critical Review Writing Service</h2>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.94rem" }}>
            Our specific Critical Review writing demonstrates an objective, selective, balanced and insightfully critical approach to the contents of the article and include references to research issues including rationale, methodology and findings.
          </p>
        </div>

        {/* Simply Easy & Straightforward */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>UK Critical Review Writing specific is Simply easy &amp; Straightforward</h2>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.94rem" }}>
            Our UK Critical Review writing help guarantees that your review is confidential, and so you do not have to worry about it. Just send us your topic along with the deadline and see the results that are far justified and mark the success of your Critical Review.
          </p>
        </div>

        {/* What Services do we offer – 3 tiers */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>What Services do we offer under Critical Review Writing?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
            {[
              { tier: "Basic", color: "#e0e7ff", border: "#b0bfff", desc: "Developed based on the relevant sources, a reasonable attempt at finding an area that warrant research & evidence of an attempt to provide critical evaluation but mainly descriptive." },
              { tier: "Advanced", color: "#fff3e0", border: "#ffd0a0", desc: "Wide range of sources, a clear identification of research gap in the literature along with aim and research questions." },
              { tier: "Premium", color: "#e8f5e9", border: "#a5d6a7", desc: "Refers to a wide range of seminal research with throughout engagement using latest resources. A solid gap would be identified based on the current literature & justified thoroughly & Excellent critical analysis would be shown (upgradable)." },
            ].map(t => (
              <div key={t.tier} style={{ background: t.color, border: `1px solid ${t.border}`, borderRadius: "10px", padding: "20px" }}>
                <div style={{ fontFamily: "Merriweather,serif", fontWeight: 700, fontSize: "1.05rem", color: "#1a2a6c", marginBottom: "10px" }}>{t.tier}</div>
                <p style={{ fontSize: "0.85rem", color: "#444", lineHeight: 1.7, margin: 0 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Specialized Subject Matter Expertise */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Specialized Subject Matter Expertise across the globe</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "14px" }}>We have a team of 2000+ expertise across the subjects &amp; countries (including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine)</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {subjects.map(s => (
              <span key={s} style={{ background: "#f0f4ff", border: "1px solid #c5d0ea", borderRadius: "20px", padding: "6px 14px", fontSize: "0.82rem", color: "#1a2a6c", fontWeight: 500 }}>{s}</span>
            ))}
          </div>
        </div>

        {/* Our deliverables */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Our deliverables while you order custom UK Critical Review writing services</h2>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.94rem" }}>
            Critical Review writing services from Tutors India research writing services is simply easy and straightforward. You will get the reply within 30 minutes which would enable to place your order quickly without any delay in submissions. We would provide executive summary /abstract, free articles used for writing the part dissertation, SPSS data sheet and output, questionnaire or semi-structured interview questions and any other information that we have used to write the dissertation such as reflective log or diary.
          </p>
        </div>

        {/* How Does It Work */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>How Does it work?</h2>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.94rem" }}>
            After the order is confirmed, we allocate the special team to scrutinize the work regarding necessary availability requirements that would be essential to complete the work. Once the process is done, in case there are any queries, we ensure to ask during the initial stage of your work and send you the outline proposed for writing secondary data collection based dissertation. Once the outline along with the chapterization plan is approved, we will dispatch the work in chapters, and update you on the progress of your work. Our exclusive coordinators would get in touch with you to clarify any queries. You can also pay in installments and work will be started as soon as receive the payments. We deliver your work as per the schedule fixed and agreed or even before the schedule.
          </p>
        </div>

        {/* Well Structured – Four Basic Parts */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Our Critical Review Writing Services is Well Structured Focusing On Four Basic Parts</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "14px" }} className="two-col-grid">
            {[
              { n: "1", t: "Introduction", d: "Provides context for the work being reviewed, states the purpose of the review, and outlines the structure of the critique." },
              { n: "2", t: "Summary", d: "Briefly summarizes the main argument, purpose, methods, findings, and conclusions of the reviewed work." },
              { n: "3", t: "Critique", d: "Evaluates the strengths and weaknesses of the work, assessing the quality of evidence, logic, methodology, and overall contribution." },
              { n: "4", t: "Conclusion", d: "Summarises the main points of the critique and provides an overall assessment of the value of the reviewed work." },
            ].map(f => (
              <div key={f.n} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px", display: "flex", gap: "14px" }}>
                <div style={{ width: "34px", height: "34px", background: "#1a2a6c", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "0.9rem", flexShrink: 0 }}>{f.n}</div>
                <div>
                  <h3 style={{ fontSize: "0.9rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{f.t}</h3>
                  <p style={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.65, margin: 0 }}>{f.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Help in critically reviewing */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>At Tutors India, we provide help in critically reviewing</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              "A journal article",
              "A chapter",
              "Text Book",
              "Movie or any other",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "12px", background: "#f8f9ff", border: "1px solid #dde2ef", borderRadius: "8px", padding: "12px 16px", alignItems: "center" }}>
                <div style={{ width: "26px", height: "26px", background: "#e87722", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "0.8rem", flexShrink: 0 }}>✓</div>
                <span style={{ fontSize: "0.88rem", color: "#555" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Convince the Supervisory Committee */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Critical Review Writing need to convince the Supervisory committee</h2>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.94rem" }}>
            We write a complete Critical Review that would convince your supervisory committee. Our critical review demonstrates an objective, selective, balanced and insightfully critical approach to the contents of the article and include references to research issues including rationale, methodology and findings.
          </p>
        </div>

        {/* Free Offers */}
        <div style={{ background: "#fff8f0", border: "1px solid #f5d9bb", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Free Offers along with your Critical Review Writing Services</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              "Free Tutoring for the work being carried out – to speak confidently with your program supervisors",
              "Executive Summary / Abstract",
              "Free articles used for writing the dissertation",
              "SPSS data sheet and output (if applicable)",
              "Questionnaire or semi-structured interview questions",
              "Reflective log or diary used during research",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "12px", background: "#fff", border: "1px solid #f5d9bb", borderRadius: "8px", padding: "12px 16px", alignItems: "flex-start" }}>
                <div style={{ width: "26px", height: "26px", background: "#e87722", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "0.8rem", flexShrink: 0, marginTop: "1px" }}>✓</div>
                <span style={{ fontSize: "0.88rem", color: "#555", lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Our service is exclusive */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Our Critical review service is exclusive</h2>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.94rem" }}>
            We do not just provide dissertation, but rather clear explanation and justification for the content written.
          </p>
        </div>

        {/* Why Choose Tutors India + Guarantees */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Why Choose Tutors India: Critical Review Writing Service features</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "18px", fontSize: "0.94rem" }}>
            Qualified researchers, unlimited revision, only peer-reviewed articles, plagiarism report, 24/7 support, 100% match with the requirement and on time delivery.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "16px" }} className="two-col-grid">
            {[
              { t: "A complete secure & Confidential Service", d: "We offer 100% confidentiality of client's personal details, payment details, project works, and copyrights of research works. We ensure following for the conditionality, security & privacy: 1) All your projects are given unique reference codes 2) Documents are accessed only writers who signed NDA with Tutors India 3) Your financial information is protected b 128-bit secure socket layer (SSL) encryption." },
              { t: "Fully Referenced", d: "Our dissertation work is fully referenced with latest articles and textbooks. We refer only peer-reviewed sources such as scholarly articles and textbook to select the topic. We refer database including Web of Science, ProQuest, Google Scholar, Business Source Complete, and latest newspapers articles such as Economic Times, Forbes, The Wall Street, The Economics to identify the industrial problem." },
              { t: "Our Guarantees", d: "(1) Unlimited Revision for the work being committed. (2) We ensure on-time delivery (3) We support 24/7. (4) Our word count committed does not include references and bibliography & help you to locate the sources cited (5) Ensure three-level quality check including Technical QC, Editor QC and final check against the requirement (6) Confidentiality of the information (7) Plagiarism free work – less than 5% percent. (8) Only experienced and subject specific writers will be allotted." },
              { t: "Plagiarism Free Work", d: "We are aware of the consequences of plagiarism. Hence, topic selection is completely plagiarism Free. Our work is scanned against online sources in a similar way like WriteCheck or Turnitin. We wanted to ensure that our clients i.e., researchers and students are not finding any issues with regards to plagiarism and so we issue plagiarism-free certificate*. Our streamlined and high-quality research writing process ensures your dissertation is not just copy-pasted, but written only after brainstorming sessions with our team of professional researchers." },
              { t: "On Time", d: "Our work is delivered at a specified date and time. Our specific changes to the delivered work will be carried out within 45 days of delivery. We guarantee delivery of minor changes within 24 working hours and significant changes within 48 working hours. We acknowledge all your emails within 30 minutes of working hours." },
              { t: "Experienced Writers", d: "Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities from India, the US, and the UK. We identify the perfect SME according to your subject and area. Expert is selected through a stringent selection process including the signing of non-disclosure and confidentiality agreement." },
            ].map(f => (
              <div key={f.t} style={{ background: "#f8f9ff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px" }}>
                <h3 style={{ fontSize: "0.9rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{f.t}</h3>
                <p style={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.65, margin: 0 }}>{f.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>Frequently Asked Questions</h2>
          <FaqAccordion faqs={faqs} />
        </div>

        {/* Subject Matter Expertise by choice */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Your Dissertation is written by your choice of Subject Matter Expertise</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "14px" }}>We have a team of 2000+ expertise across the subjects &amp; countries (including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine)</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {subjects.map(s => (
              <span key={s} style={{ background: "#fff", border: "1px solid #c5d0ea", borderRadius: "20px", padding: "6px 14px", fontSize: "0.82rem", color: "#1a2a6c", fontWeight: 500 }}>{s}</span>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>Voice of Our customer</h2>
          <TestimonialSlider testimonials={testimonials} />
        </div>

        {/* Track Your Report */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Track Your Report through our customized CRM</h2>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.94rem" }}>
            You need not check email frequently rather your report is safe on our customizable CRM and you can download later at any point of time by using your unique username and password.
          </p>
        </div>

        {/* CTA */}
        <div style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", borderRadius: "12px", padding: "36px 28px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", color: "#fff", marginBottom: "10px" }}>Order Now</h2>
          <p style={{ color: "#c5d5f0", marginBottom: "20px", fontSize: "0.95rem" }}>Get expert Critical Review writing help from qualified US &amp; UK researchers today</p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/order-now/" style={{ padding: "13px 32px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, textDecoration: "none" }}>Order Now</Link>
            <Link href="/contact-us/" style={{ padding: "13px 32px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, textDecoration: "none" }}>Contact Us</Link>
          </div>
        </div>

      </section>

      <style>{`
        @media(max-width:900px){.three-col-grid{grid-template-columns:1fr 1fr!important;}}
        @media(max-width:600px){.three-col-grid,.two-col-grid{grid-template-columns:1fr!important;}}
      `}</style>
    </>
  );
}
