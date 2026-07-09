import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "The UK Annotated Bibliography Writing Help | Tutors India",
  description: "UK Annotated Bibliography Writing Help at Tutors India compiles the literature for the purpose of an extended research project that showcases the mastery of the relevant background including contextual, critical & theoretical evidence of a wide range of reading.",
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
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.4rem,3vw,2rem)", lineHeight: 1.3, marginBottom: "16px" }}>
            The UK Annotated Bibliography Writing Help
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "12px" }}>
            UK Annotated Bibliography Writing Help at Tutors India compiles the literature for the purpose of an extended research project that showcases the mastery of the relevant background including contextual, critical &amp; theoretical evidence of a wide range of reading.
          </p>
          <p style={{ color: "#f9c74f", fontSize: "1.05rem", fontWeight: 700, marginBottom: "20px" }}>
            Our Annotated Bibliography writers have experience in research methodology, specific domain experience, and educational degrees from international and top-ranked universities from India, the US, and the UK.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, textDecoration: "none" }}>Place an Order</Link>
            <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, textDecoration: "none" }}>Contact Us</Link>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div style={{ background: "#12214a", padding: "16px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: "2000+", l: "Expert Writers" }, { n: "< 5%", l: "Plagiarism" }, { n: "Unlimited", l: "Revisions" }, { n: "30 min", l: "Response Time" }, { n: "24/7", l: "Support" }].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
              <div style={{ fontSize: "0.68rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>

        {/* What is an Annotated Bibliography */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>What is an Annotated Bibliography?</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            An annotated bibliography is a compilation of literature for extended research projects listed in alphabetical order. It showcases mastery of the relevant background including contextual, critical &amp; theoretical evidence of a wide range of reading.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.94rem" }}>
            Writing an annotated bibliography is a daunting task requiring multiple phases: defining the scope of your project, determining if it is independent work or a component of a dissertation, developing sub-questions from your main research query, and selecting appropriate source types before writing begins. Skipping any of these steps would significantly affect the quality of work.
          </p>
        </div>

        {/* Types of Annotations */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>What are the Types of Annotations?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
            {[
              {
                title: "Summary",
                color: "#e0e7ff", border: "#b0bfff",
                desc: "Summarize the content of the source in order to provide an overview of the argument but without judging the work. Includes informative and indicative varieties.",
              },
              {
                title: "Critical Evaluation",
                color: "#fff3e0", border: "#ffd0a0",
                desc: "Just does not summarize but rather evaluate every part of the work critically and show how the work is different and its use in currently proposed a topic. Includes initial appraisal and content appraisal components examining methodology, reliability, and validity.",
              },
              {
                title: "Mixed",
                color: "#e8f5e9", border: "#a5d6a7",
                desc: "Combination of Summary and Critical Evaluation. This type provides both an overview of the argument and a critical assessment of the work's usefulness and limitations.",
              },
            ].map(t => (
              <div key={t.title} style={{ background: t.color, border: `1px solid ${t.border}`, borderRadius: "10px", padding: "20px" }}>
                <div style={{ fontFamily: "Merriweather,serif", fontWeight: 700, fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>{t.title}</div>
                <p style={{ fontSize: "0.85rem", color: "#444", lineHeight: 1.7, margin: 0 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Citation Formats */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Citation Formats Supported</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "16px", fontSize: "0.94rem" }}>
            Our annotated bibliography writing service supports all major citation formats as required by your university. We ensure annotations include an explanation to show that you have read and understood the source thoroughly and critically comment on the usefulness, effectiveness, and worth of the work.
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            {["American Psychological Association (APA)", "Modern Language Association (MLA)", "Chicago style"].map(f => (
              <div key={f} style={{ background: "#f0f4ff", border: "1px solid #c5d0ea", borderRadius: "8px", padding: "12px 20px", display: "flex", gap: "10px", alignItems: "center" }}>
                <div style={{ width: "24px", height: "24px", background: "#1a2a6c", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "0.75rem", flexShrink: 0 }}>✓</div>
                <span style={{ fontSize: "0.88rem", color: "#1a2a6c", fontWeight: 600 }}>{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* How to Write + What We Offer */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>How to Write an Annotated Bibliography</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "16px", fontSize: "0.94rem" }}>
            Writing an annotated bibliography requires a systematic approach. Before you begin, you need to define your project scope, determine whether the annotated bibliography is independent work or part of a dissertation, develop sub-questions from your main research query, and select appropriate source types.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "18px" }}>
            {[
              "Define project scope",
              "Determine if independent or dissertation component",
              "Develop sub-questions from main research query",
              "Select appropriate source types",
            ].map((step, i) => (
              <div key={i} style={{ display: "flex", gap: "12px", background: "#fff", border: "1px solid #dde2ef", borderRadius: "8px", padding: "12px 16px", alignItems: "center" }}>
                <div style={{ width: "28px", height: "28px", background: "#1a2a6c", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "0.8rem", flexShrink: 0 }}>{i + 1}</div>
                <span style={{ fontSize: "0.88rem", color: "#555" }}>{step}</span>
              </div>
            ))}
          </div>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>What Tutors India Offers</h2>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.94rem" }}>
            At Tutors India, we provide high-quality critical Annotated Bibliography writing in British English, with accurate referencing and work by qualified researchers from US &amp; UK universities. Our annotated bibliographies are compiled literature listings in alphabetical order. We handle scope definition, source selection, and development of sub-questions before writing begins — ensuring a thorough and academically sound output.
          </p>
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

        {/* Guarantees */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>Why Choose Tutors India for Annotated Bibliography Writing?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "16px" }} className="two-col-grid">
            {[
              { t: "A complete secure & Confidential Service", d: "We offer 100% confidentiality of client's personal details, payment details, project works, and copyrights of research works. We ensure following for the conditionality, security & privacy: 1) All your projects are given unique reference codes 2) Documents are accessed only writers who signed NDA with Tutors India 3) Your financial information is protected b 128-bit secure socket layer (SSL) encryption." },
              { t: "Fully Referenced", d: "Our dissertation work is fully referenced with latest articles and textbooks. We refer only peer-reviewed sources such as scholarly articles and textbook to select the topic. We refer database including Web of Science, ProQuest, Google Scholar, Business Source Complete, and latest newspapers articles such as Economic Times, Forbes, The Wall Street, The Economics to identify the industrial problem." },
              { t: "Our Guarantees", d: "(1) Unlimited Revision for the work being committed. (2) We ensure on-time delivery (3) We support 24/7. (4) Our word count committed does not include references and bibliography & help you to locate the sources cited (5) Ensure three-level quality check including Technical QC, Editor QC and final check against the requirement (6) Confidentiality of the information (7) Plagiarism free work – less than 5% percent. (8) Only experienced and subject specific writers will be allotted." },
              { t: "Plagiarism Free Work", d: "We are aware of the consequences of plagiarism. Hence, annotated bibliography writing is completely plagiarism Free. Our work is scanned against online sources in a similar way like WriteCheck or Turnitin. We wanted to ensure that our clients i.e., researchers and students are not finding any issues with regards to plagiarism and so we issue plagiarism-free certificate*." },
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

        {/* Subject Expertise */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Specialized Subject Matter Expertise across the globe</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "14px" }}>We have a team of 2000+ expertise across the subjects &amp; countries (including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine)</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {subjects.map(s => (
              <span key={s} style={{ background: "#f0f4ff", border: "1px solid #c5d0ea", borderRadius: "20px", padding: "6px 14px", fontSize: "0.82rem", color: "#1a2a6c", fontWeight: 500 }}>{s}</span>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>Voice of Our customer</h2>
          <TestimonialSlider testimonials={testimonials} />
        </div>

        {/* FAQs */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>Frequently Asked Questions</h2>
          <FaqAccordion faqs={faqs} />
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
