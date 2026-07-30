import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "UK Annotated Bibliography Writing Services",
  description: "The UK Annotated Bibliography Writing Help. We ensure that annotation would inform the reader of the relevance quality of the sources and accuracy.",
  keywords: "Cheap Annotated Bibliography Writing UK,UK Top Rated Annotated Bibliography Writing Services,Need Help Writing An Annotated Bibliography",
  alternates: { canonical: "https://www.tutorsindia.com/our-services/coursework-writing/annotated-bibliography/" },
};

const faqs = [
  {
    q: "Why should I consider Tutors India for writing my Annotated Bibliography services?",
    a: "Tutors India provides excellent service for all your academic Annotated Bibliography requirements. Our writers are highly experienced and professional in developing plagiarism free and high-quality manuscript. We provide well-cited and complete documents within the rules and guidelines in your stipulated time.",
  },
  {
    q: "Can you guarantee to produce quality Annotated Bibliography papers?",
    a: "Yes, our annotated bibliography papers are guarantee with exemplary writing structure, correct vocabulary, originality in the description and precise citations. With such a structured process, you assured to get high-quality annotated bibliography outputs.",
  },
  {
    q: "Where is Tutors India writers located?",
    a: "We have Ph.D. and Masters brilliant writer from both the USA and UK. All of our writers have worked as professors in various UK, the US, Australian and other top Asian universities.",
  },
  {
    q: "How do I know I will receive my Annotated Bibliography work within the deadline?",
    a: "At Tutors India, we work with the systematic process follow. Undoubtedly, we keep uprate with our work progress level regularly through OUR Customized CRM or via Email. It is very rare case that there will be a delay so we will inform you the same in the advance.",
  },
  {
    q: "How quickly can I Get my Annotated bibliography?",
    a: "After getting the Dissertation Task, we will talk with our writers to set the timeline but even we are ready to offer the Annotated bibliography that would listed in an alphabetical order. We ensure that our dissertation writers will delivered the task on Time.",
  },
  {
    q: "Can I look some of samples of your Annotated bibliography writing style?",
    a: "Sure, we share some of the Annotated bibliography sample works so it is easy for students to analyze of style and quality of our works.",
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

export default function AnnotatedBibliographyPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}
            <Link href="/our-services/coursework-writing/" style={{ color: "#a0b8e0" }}>Coursework Writing</Link>{" / "}
            <span style={{ color: "#fff" }}>Annotated Bibliography</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.4rem,3vw,2rem)", lineHeight: 1.3, marginBottom: "8px" }}>
            The UK Annotated Bibliography Writing Help
          </h1>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1rem,2.5vw,1.4rem)", lineHeight: 1.3, color: "#f9c74f", marginBottom: "16px", fontWeight: 700 }}>
            Then You&apos;ve Certainly Reached the Right place
          </h2>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#c5d5f0", fontWeight: 600, marginBottom: "12px" }}>
            Are you looking for a high-quality critical Annotated Bibliography writing company?
          </h3>
          <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
            UK Annotated Bibliography Writing Help at Tutors India compiles the literature for the purpose of an extended research project that showcases the mastery of the relevant background including contextual, critical &amp; theoretical evidence of a wide range of reading. We strictly write in British English, crisp expression, spelling, punctuation, grammar with accurate comprehensive referencing according to the university requirement.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, textDecoration: "none" }}>Place an Order</Link>
            <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, textDecoration: "none" }}>Contact Us</Link>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>

        {/* Qualified Researchers */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Your Annotated Bibliography is written by qualified and experienced researchers from the US &amp; UK</h2>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", fontWeight: 700, color: "#e87722", marginBottom: "10px" }}>Our Annotated Bibliography writers have experience in research methodology</h3>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
            Our Annotated Bibliography writers have experience in research methodology, specific domain experience, and educational degrees from international and top-ranked universities from India, the US, and the UK. The team has the capability to deliver a brief and a reflective note about each item around 150 words.
          </p>
        </div>

        {/* Central to Research Process */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>UK Annotated Bibliography Writing Service – Central to the Research Process</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "16px", fontSize: "1rem" }}>
            Annotated Bibliography accounts all the research being done on a given topic that would be listed in alphabetical order. Depending on the requirement, it either goes to large part of the dissertation, or it may be an independent piece of work. However, writing an annotated bibliography is a daunting task as before your start this part of the research, you need to undertake several activities. Firstly, you need to define the scope of work which would in turn help to identify what to include and exclude. Secondly, you need to see whether bibliography is part of research or independent piece of research? Thirdly, you need to develop sub-questions based on your main research questions. Fourthly, you should decide on whether you required journal articles or academic books or policy statement or government reports to write your annotated bibliography. Therefore, the student needs to step into all phases and skipping any step would significantly affect the quality of work.
          </p>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", fontWeight: 700, color: "#e87722", marginBottom: "10px" }}>Tutors India specialized in undertaking Annotated Bibliography Services</h3>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "1rem" }}>
            Tutors India specialized in undertaking Annotated Bibliography Services, as being a pioneer in doing a literature review, you can be assured of high-quality work in AB service as well. We ensure that the annotation would inform the reader of the relevance, quality of the sources, accuracy and more importantly we use both descriptive and critical expressions while writing AB for you.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
            At Tutors India, we follow strict plagiarism policy while writing an annotated bibliography for university and post-graduate level work. To ensure plagiarism free work, we write the work using own words /sentence and offer clear references for any quotations or substantial borrowings of facts or ideas. We provide an Annotated Bibliography writing for Psychology, English Essays writing, and Marketing Annotated Bibliography, chemistry Annotated Bibliography, science Annotated Bibliography, Public health Annotated Bibliography, performance management Annotated Bibliography, social work Annotated Bibliography, accounting, human resource management Annotated Bibliography and others. For if we need to write law-related AB, then our writers would look in a wide range of the law collections including case law, legislation, textbooks, journals, Halsbury&apos;s law of England, FINDit database, LexisLibrary, Westlaw, Lawtel, and Europa. We write Annotated Bibliography from a GCSE level Annotated Bibliography to a Ph.D. level model, at affordable rates including planning, statistical analysis, proofreading and critiquing.
          </p>
        </div>

        {/* Annotation Types */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>The annotation would inform the reader: Description &amp; Critique</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
            {[
              {
                title: "Summary",
                color: "#e0e7ff", border: "#b0bfff",
                desc: "We will summarize the content of the source in order to provide an overview of the argument but without judging the work.",
              },
              {
                title: "Critical Evaluation",
                color: "#fff3e0", border: "#ffd0a0",
                desc: "Just does not summarize but rather evaluate every part of the work critically and show how the work is different and its use in currently proposed a topic.",
              },
              {
                title: "Mixed",
                color: "#e8f5e9", border: "#a5d6a7",
                desc: "Combination of Summary and Critical Evaluation.",
              },
            ].map(t => (
              <div key={t.title} style={{ background: t.color, border: `1px solid ${t.border}`, borderRadius: "10px", padding: "20px" }}>
                <div style={{ fontFamily: "Merriweather,serif", fontWeight: 700, fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>{t.title}</div>
                <p style={{ fontSize: "0.85rem", color: "#444", lineHeight: 1.7, margin: 0 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Only chose materials highly relevant */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Our UK Annotated Bibliography Writing Service only chose materials that are highly relevant to the topic</h2>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", fontWeight: 700, color: "#e87722", marginBottom: "10px" }}>Our specific UK Annotated Bibliography writing demonstrates the succinct writing</h3>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
            Our Annotated Bibliography writing help guarantees that your Annotated Bibliography is confidential, and so you do not have to worry about it. Just send us your topic along with the deadline and see the results that are far justified and mark the success of your Annotated Bibliography.
          </p>
        </div>

        {/* Rubric Scale */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>UK Annotated Bibliography Writing follows specific rubric scale</h2>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", fontWeight: 700, color: "#e87722", marginBottom: "10px" }}>Our Annotated Bibliography writing demonstrates the ability to communicate complex ideas</h3>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
            Our Annotated Bibliography writing demonstrates the ability to communicate complex ideas critically, concisely, and clearly.
          </p>
        </div>

        {/* Simply Easy & Straightforward – Citation Formats */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Annotated Bibliography Writing Service is Simply easy &amp; Straightforward</h2>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", fontWeight: 700, color: "#e87722", marginBottom: "12px" }}>Annotated Bibliography Writing Service is Simply easy &amp; Straightforward</h3>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "16px", fontSize: "1rem" }}>
            Our annotated bibliography writing service supports all major citation formats as required by your university. We ensure annotations include an explanation to show that you have read and understood the source thoroughly and critically comment on the usefulness, effectiveness, and worth of the work.
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            {["American Psychological Association (APA)", "Modern Language Association (MLA)", "Chicago"].map(f => (
              <div key={f} style={{ background: "#fff", border: "1px solid #c5d0ea", borderRadius: "8px", padding: "12px 20px", display: "flex", gap: "10px", alignItems: "center" }}>
                <div style={{ width: "24px", height: "24px", background: "#1a2a6c", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "0.75rem", flexShrink: 0 }}>✓</div>
                <span style={{ fontSize: "0.94rem", color: "#1a2a6c", fontWeight: 600 }}>{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* What Services do we offer */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>What Services do we offer under UK Annotated Bibliography Writing Service?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
            {[
              { title: "Summary", color: "#e0e7ff", border: "#b0bfff", desc: "We will summarize the content of the source in order to provide an overview of the argument but without judging the work." },
              { title: "Critical evaluation", color: "#fff3e0", border: "#ffd0a0", desc: "Evaluate every part of the work critically and show how the work is different and its use in currently proposed a topic." },
              { title: "Mixed", color: "#e8f5e9", border: "#a5d6a7", desc: "Combination of Summary and Critical Evaluation." },
            ].map(t => (
              <div key={t.title} style={{ background: t.color, border: `1px solid ${t.border}`, borderRadius: "10px", padding: "20px" }}>
                <div style={{ fontFamily: "Merriweather,serif", fontWeight: 700, fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>{t.title}</div>
                <p style={{ fontSize: "0.85rem", color: "#444", lineHeight: 1.7, margin: 0 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Specialized Subject Matter Expertise */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Specialized Subject Matter Expertise across the globe</h2>
          <p style={{ color: "#666", fontSize: "0.96rem", marginBottom: "14px" }}>We have a team of 2000+ expertise across the subjects &amp; countries (including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine)</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {subjects.map(s => (
              <span key={s} style={{ background: "#f0f4ff", border: "1px solid #c5d0ea", borderRadius: "20px", padding: "6px 14px", fontSize: "0.82rem", color: "#1a2a6c", fontWeight: 500 }}>{s}</span>
            ))}
          </div>
        </div>

        {/* Our deliverables */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Our deliverables while you order custom Annotated Bibliography Writing Service</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              "Executive Summary",
              "Free articles used for the research",
              "SPSS data sheets (if applicable)",
              "Questionnaires / Interview guide",
              "Primary research output without data",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "12px", background: "#fff", border: "1px solid #dde2ef", borderRadius: "8px", padding: "12px 16px", alignItems: "center" }}>
                <div style={{ width: "26px", height: "26px", background: "#e87722", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "0.8rem", flexShrink: 0 }}>✓</div>
                <span style={{ fontSize: "0.94rem", color: "#555" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* How Does It Work */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>How Does it work?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "14px" }} className="three-col-grid">
            {[
              { n: "1", text: "After the order is confirmed, we allocate the special team to scrutinize the work regarding necessary availability requirements that would be essential to complete the work." },
              { n: "2", text: "Once the process is done, in case there are any queries, we ensure to ask during the initial stage of your work and send you the outline proposed." },
              { n: "3", text: "Once the outline along with the chapterization plan is approved, we will dispatch the work in chapters, and update you on the progress of your work. Our exclusive coordinators would get in touch with you to clarify any queries." },
              { n: "4", text: "You can also pay in installments and work will be started as soon as receive the payments." },
              { n: "5", text: "We deliver your work as per the schedule fixed and agreed or even before the schedule." },
            ].map(s => (
              <div key={s.n} style={{ background: "#f8f9ff", borderRadius: "10px", padding: "18px", border: "1px solid #dde2ef", display: "flex", gap: "12px" }}>
                <div style={{ width: "32px", height: "32px", background: "#1a2a6c", borderRadius: "50%", color: "#fff", fontWeight: 700, fontSize: "0.85rem", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{s.n}</div>
                <p style={{ fontSize: "0.84rem", color: "#555", lineHeight: 1.65, margin: 0 }}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* UK Annotated Bibliography Writing Service Features */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>UK Annotated Bibliography Writing Service Features</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "14px" }} className="two-col-grid">
            {[
              { t: "Summary – Informative", d: "Summarizes the content of the source to provide an overview of the argument without judging the work." },
              { t: "Summary – Indicative", d: "Indicates the content of the source and highlights the key themes and arguments covered." },
              { t: "Critical Evaluation – Initial Appraisal", d: "Evaluates the author's credentials, journal reputation, intended audience, and publication date." },
              { t: "Critical Evaluation – Content Appraisal", d: "Examines the research methodology, reliability, validity, and usefulness of the source for your topic." },
              { t: "Mixed Approach", d: "Combination of Summary and Critical Evaluation providing both an overview and a critical assessment of the work." },
              { t: "Plagiarism Free", d: "All annotated bibliographies are written using own words, scanned against Turnitin/WriteCheck, and delivered with a plagiarism-free certificate." },
            ].map(f => (
              <div key={f.t} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px" }}>
                <h3 style={{ fontSize: "0.96rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{f.t}</h3>
                <p style={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.65, margin: 0 }}>{f.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Needs to convince the supervisor */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>UK Annotated Bibliography Writing needs to convince the supervisor</h2>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
            We write a complete Annotated Bibliography including time planning. Though it looks very simple, it is a tedious task to complete each and every step.
          </p>
        </div>

        {/* What We deliver */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>What We deliver while your order for UK Annotated Bibliography writing</h2>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
            We deliver more than your expectation – ensure to provider the proper context, delimit the boundary condition, cite landmark studies, accurately present the theoretical framework &amp; empirical contribution, stay focused on the research question, develop a coherent &amp; persuasive argument, a clear sense of direction, clear citation, APA or any other specific style.
          </p>
        </div>

        {/* Our custom service is exclusive */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Our custom UK Annotated Bibliography writing service is exclusive</h2>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
            as we do not just provide chapter-wise dissertation writing service, but the rather clear explanation and justification for the choice.
          </p>
        </div>

        {/* Why Choose Tutors India */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Why Choose Tutors India: Annotated Bibliography Writing features</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "16px", fontSize: "1rem" }}>
            Qualified researchers, unlimited revision, only peer-reviewed articles, plagiarism report, 24/7 support, 100% match with the requirement and on time delivery.
          </p>

          {/* Guarantee cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "16px" }} className="two-col-grid">
            {[
              { t: "A complete secure & Confidential Service", d: "We offer 100% confidentiality of client's personal details, payment details, project works, and copyrights of research works. We ensure following for the conditionality, security & privacy: 1) All your projects are given unique reference codes 2) Documents are accessed only writers who signed NDA with Tutors India 3) Your financial information is protected by 128-bit secure socket layer (SSL) encryption." },
              { t: "Fully Referenced", d: "Our dissertation work is fully referenced with latest articles and textbooks. We refer only peer-reviewed sources such as scholarly articles and textbook to select the topic. We refer database including Web of Science, ProQuest, Google Scholar, Business Source Complete, and latest newspapers articles such as Economic Times, Forbes, The Wall Street, The Economics to identify the industrial problem." },
              { t: "Our Guarantees", d: "(1) Unlimited Revision for the work being committed. (2) We ensure on-time delivery (3) We support 24/7. (4) Our word count committed does not include references and bibliography & help you to locate the sources cited (5) Ensure three-level quality check including Technical QC, Editor QC and final check against the requirement (6) Confidentiality of the information (7) Plagiarism free work – less than 5% percent. (8) Only experienced and subject specific writers will be allotted." },
              { t: "Plagiarism Free Work", d: "We are aware of the consequences of plagiarism. Hence, annotated bibliography writing is completely plagiarism Free. Our work is scanned against online sources in a similar way like WriteCheck or Turnitin. We wanted to ensure that our clients i.e., researchers and students are not finding any issues with regards to plagiarism and so we issue plagiarism-free certificate*." },
              { t: "On Time", d: "Our work is delivered at a specified date and time. Our specific changes to the delivered work will be carried out within 45 days of delivery. We guarantee delivery of minor changes within 24 working hours and significant changes within 48 working hours. We acknowledge all your emails within 30 minutes of working hours." },
              { t: "Experienced Writers", d: "Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities from India, the US, and the UK. We identify the perfect SME according to your subject and area. Expert is selected through a stringent selection process including the signing of non-disclosure and confidentiality agreement." },
            ].map(f => (
              <div key={f.t} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px" }}>
                <h3 style={{ fontSize: "0.96rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{f.t}</h3>
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
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Your Annotated Bibliography is written by your choice of Subject Matter Expertise</h2>
          <p style={{ color: "#666", fontSize: "0.96rem", marginBottom: "14px" }}>We have a team of 2000+ expertise across the subjects &amp; countries (including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine)</p>
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

        {/* CTA */}
        <div style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", borderRadius: "12px", padding: "36px 28px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", color: "#fff", marginBottom: "10px" }}>Order Now</h2>
          <p style={{ color: "#c5d5f0", marginBottom: "20px", fontSize: "0.95rem" }}>Get expert Annotated Bibliography writing help from qualified US &amp; UK researchers today</p>
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
