import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "PhD Full Dissertation Writing Service",
  description: "Are you looking for an expert writer of your specific subject for your PhD dissertation writing completely from Abstract writing to Conclusion section with the high research quality?",
  alternates: { canonical: "https://www.tutorsindia.com/our-services/phd-dba-dissertation/phd-full-dissertation" },
};

const faqs = [
  {
    q: "On which areas you provide resit dissertation writing services?",
    a: "We accept orders from a wide range of subjects which include Business Management, finance, operation management, supply chain and logistics management, entrepreneurial management, human resource management, psychology, history, geography, engineering, healthcare, Economics, Computer Science, English, Literature, Engineering, Epidemiology, nursing, medical, Public Health, Life Science, and Nutrition.",
  },
  {
    q: "What Information that I need to provide while ordering for resit dissertation writing services",
    a: "It purely depends on the level of service that you undertake. However, in general, to match with your requirement, we PhD dissertation topic, PhD research proposal, manuscripts that you had published already (for compilation work), data that you had already collected, choice of research design and method, primary or secondary, university guidelines for style and referencing style, rubric scale for DBA research and marketing criteria, scope, target country, industry experience, and feasibility of data collection, if any.",
  },
  {
    q: "What if my resit dissertation gets rejected?",
    a: "Yes, we are the most ideal PhD dissertation writing service provider in UK, the US and Australia. We ensure that all our professional writers are having the capability to write the research paper in the impeccable manner that completely stands out from the rest of the pile. Because all of our writers we appointed are having the high academic qualifications like PhD or Masters holder and passed out from the Top UK and the US universities and include we chosen writers or researchers who are passionate in research writing and best in analysis.",
  },
  {
    q: "Is there any chance of my dissertation hear bad feedback from my committee members after getting PhD di",
    a: "In general, each member of the committee is check and reviews the work within 6 weeks and offer feedback. Yes, in some cases hear less bad feedbacks because every committee members has the different perspective so it is possible to look your dissertation in the different direction and of course, put some feedback and suggestion to change it. Our writers or researchers are having ability to understand the professor's needs so change the minor feedback and suggestion within 24 hours and large substantial changes will be within a week.",
  },
  {
    q: "How much do you charge for PhD dissertation revisions?",
    a: "We are committed to give unlimited revisions to your dissertation full papers at free of cost, so we do not charge even a penny from you for any number of revisions. Since, we are committed for 100% customer satisfaction guarantee.",
  },
  {
    q: "Is there a possibility of plagiarism in my complete PhD dissertation paper?",
    a: "No, we give 100% guarantee of 0% plagiarism report on your dissertation document. All our excellent writers are experienced in writing the plagiarism free content. Although, we have our internationally accepted premium Turnitin tool (plagiarism detection tool) and also check using the own plagiarism tool so your checking is safe. Finally, Tutors india provides a plagiarism free dissertation paper report to ensures that your dissertation document uniqueness.",
  },
];

const testimonials = [
  {
    quote: "I used to use another service, but I usually received poorly written papers and overpaid for it. I made my decision after discovering your service and receiving a superb dissertation from you. Thank you very much.",
    author: "C S",
    location: "Sheffield, UK",
    avatar: "/images/testimonials/t13.jpg",
  },
  {
    quote: "My friend recommended that I use your service just when I was about to give up on my dissertation. Because I was trapped and didn't know what to do, the suggestion came at a good moment. I'm now a PhD holder, and I'm overjoyed about it. Thank you for your help.",
    author: "Ishani",
    avatar: "/images/testimonials/t16.jpg",
  },
  {
    quote: "I knew dissertation writing was way more difficult in the higher studies. But when it came to my research paper that was to be handed in in 72 hours, I had no variants. I made the right choice when I ordered my paper from Tutors India and I'll definitely use your services in the future.",
    author: "Olivia",
    location: "UK",
    avatar: "/images/testimonials/t15.jpg",
  },
  {
    quote: "Great service for non-native English writing authors! Tutors India's dissertation writing service helps me to formulate my ideas in more clear and straight forward way and to eliminate common grammatical errors. Moreover, the results are delivered in time and for very reasonable price. I am satisfied with the overall experience. Thanks a lot.",
    author: "Ryan",
    avatar: "/images/testimonials/t14.jpg",
  },
  {
    quote: "The dissertation presented by you for the project is truly commendable. I really appreciate your efforts and professionalism by which you have completed the project well on time. I once again, would like to thank you and congratulate you for your hard work and dedication. I'll definitely refer to my friends who struggle in writing the dissertation.",
    author: "Aryaman",
    avatar: "/images/testimonials/t13.jpg",
  },
];

const dissertationComponents = [
  {
    title: "Abstract",
    desc: "We write abstract for your PhD dissertation which would approximately contain 250 to 350 words. We complete the abstract after the full dissertation has been written that includes a brief summary of introduction or background, objectives, boundaries, methodology, the results of the dissertation research, main conclusion that you arrive, and recommendations",
  },
  {
    title: "Acknowledgement",
    desc: "A brief statement that ensures the following – we ensure to comment about family and friends at a minimum level while more concentration will be given on those who have given direct assistance.",
  },
  {
    title: "Table of Content",
    desc: "The section will list the chapter headings, appendices, references along with the page numbers. Apart, there would be a separate list for lists of figures, tables, and abbreviations.",
  },
  {
    title: "Introduction",
    desc: "A Brief description of the topic, research questions, and research objectives. The section would provide necessary background information and provides readers with some sense of overall research including general territory, broad foundation (existing literature), the general scope, overview of the sections and finally should engage the readers",
  },
  {
    title: "Literature Review Section",
    desc: "This should provide some insights on (a) studies that have been conducted previously in your research field (b) familiarity with major themes, (c) the range of theories scholars use to analyse their primary sources (d) gaps identified in the literature (e) further investigations you intend to pursue as part of this dissertation and (f) best methodologies.",
  },
  {
    title: "Research Methodology",
    desc: "The section is essential to the good dissertation. This section includes the overall methodological approach, Research design, strategy, qualitative or quantitative, research philosophy, target area, population, sample size, primary or secondary data collection, ethical consideration, pilot study, validity, reliability, & statistical analysis.",
  },
  {
    title: "Results/Findings",
    desc: "The chapter presents the findings of the study in the form of tables & figures along with the interpretation. Depending on the choice of research methodology, the page will have a detailed quantitative models, hypothesis testing, showing some basic descriptive statistics including mean, SD, regression.",
  },
  {
    title: "Discussion & Conclusion",
    desc: "In this chapter, we introduce three section viz., discussion, summary, and conclusion. The discussion chapter compares and contrasts the findings of previously published authors in line with the research questions.",
  },
  {
    title: "References",
    desc: "Work Cited, or sources cited (in-text) or list of sources cited while writing dissertation. This will include peer-reviewed scholarly articles, textbooks, newspaper articles, annual reports, obtained from various database including ProQuest, Emerald, IEEE, Web of Science, Academic Complete, SciDirect, JSTOR, Elsevier",
  },
];

const freeOffers = [
  "Abstract or Executive Summary",
  "Graphs & Tables (redrawn)",
  "Statistical analysis or textual analysis of data",
  "SPSS / other software screenshots to ensure the process that we had carried out for doing the analyses",
  "Free Tutoring for the work being carried out – to speak confidently with your program supervisors",
  "SPSS output in Appendix",
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies",
  "Marketing & Communication", "Engineering & Technology", "Natural Sciences & Mathematics",
  "Biological & Life science", "Economics & Administration", "Humanities & Social Science",
  "Law", "Medicine & Health", "Education & Training",
  "Journalism & Media", "Agriculture & Forestry", "Computer Science & IT",
  "Hospitality, Leisure & Sports",
];

export default function PhDFullDissertationPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}
            <Link href="/our-services/phd-dba-dissertation/" style={{ color: "#a0b8e0" }}>PhD / DBA Dissertation</Link>{" / "}
            <span style={{ color: "#fff" }}>PhD Full Dissertation</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.4rem,3vw,2rem)", lineHeight: 1.3, marginBottom: "16px" }}>
            PhD Doctorate Full Dissertation Writing Consultation Services
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "8px" }}>
            Are you looking an expert writer of your specific subject for your PhD dissertation writing completely from Abstract writing to Conclusion section with the high research quality?
          </p>
          <p style={{ color: "#f9c74f", fontSize: "1.05rem", fontWeight: 700, marginBottom: "20px" }}>
            Then You've Certainly Reached the Right place
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
          {[{ n: "2000+", l: "Expert Writers" }, { n: "3500+", l: "PhD Scholars Helped" }, { n: "< 5%", l: "Plagiarism" }, { n: "Unlimited", l: "Revisions" }, { n: "30 min", l: "Response Time" }, { n: "24/7", l: "Support" }].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
              <div style={{ fontSize: "0.68rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>

        {/* Qualified Researchers */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Your Dissertation is written by qualified and experienced researchers from the US &amp; UK</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "1rem" }}>
            Our dissertation writers have experience in research methodology, specific domain experience, and educational degrees from international and top-ranked universities from India, the US, and the UK.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "1rem" }}>
            We understand the importance of doctoral dissertation as a PhD dissertation is a scholarly document which represents the cumulative experience of one's entire educational experience.
          </p>
        </div>

        {/* PhD Full Dissertation Support */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>PhD Full Dissertation Support</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "1rem" }}>
            Tutors India develop the entire dissertation right from introduction to recommendations. Our mantra includes holistic and comprehensive support and work with you until completion of your viva successfully.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "1rem" }}>
            Full Dissertation writing services and thesis writing services at Tutors India are handled and written by the style, design, and format of an ideal dissertation required by the UK, Australia, and the US universities.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "14px" }}>
            {["Topic Identification", "Literature Review", "Problem Statement", "Research Questions", "Hypothesis Development", "Research Design", "Statistical Analysis", "Data Analysis", "Discussion", "Results", "Recommendations", "Conclusion"].map(t => (
              <span key={t} style={{ background: "#e0e7ff", border: "1px solid #b0bfff", borderRadius: "20px", padding: "5px 14px", fontSize: "0.8rem", color: "#1a2a6c", fontWeight: 500 }}>{t}</span>
            ))}
          </div>
        </div>

        {/* Dissertation Type & Methodology */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>PhD Full Dissertation Writing Service Tiers</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
            {[
              { tier: "Basic", color: "#e0e7ff", border: "#b0bfff", desc: "Developed based on the relevant sources, a reasonable attempt at finding an area that warrant research & evidence of an attempt to provide critical evaluation but mainly descriptive." },
              { tier: "Advanced", color: "#fff3e0", border: "#ffd0a0", desc: "Wide range of sources, a clear identification of research gap in the literature along with aim and research questions" },
              { tier: "Premium", color: "#e8f5e9", border: "#a5d6a7", desc: "Refers to a wide range of seminal research with throughout engagement using latest resources. A solid gap would be identified based on the current literature & justified thoroughly & Excellent critical analysis would be shown (upgradable)" },
            ].map(t => (
              <div key={t.tier} style={{ background: t.color, border: `1px solid ${t.border}`, borderRadius: "10px", padding: "20px" }}>
                <div style={{ fontFamily: "Merriweather,serif", fontWeight: 700, fontSize: "1.05rem", color: "#1a2a6c", marginBottom: "10px" }}>{t.tier}</div>
                <p style={{ fontSize: "0.85rem", color: "#444", lineHeight: 1.7 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dissertation Components */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>PhD Full Dissertation Structure</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "18px" }} className="two-col-grid">
            {dissertationComponents.map((c, i) => (
              <div key={c.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px", display: "flex", gap: "14px" }}>
                <div style={{ width: "34px", height: "34px", background: "#1a2a6c", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "0.85rem", flexShrink: 0, marginTop: "2px" }}>{i + 1}</div>
                <div>
                  <h3 style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{c.title}</h3>
                  <p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.65, margin: 0 }}>{c.desc}</p>
                </div>
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
              { n: "2", text: "Once the process is done, in case there are any queries, we ensure to ask during the initial stage of your work and send you the outline proposed for writing secondary data collection based dissertation." },
              { n: "3", text: "Once the outline along with the chapterization plan is approved, we will dispatch the work in chapters, and update you on the progress of your work." },
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

        {/* Free Offers */}
        <div style={{ background: "#fff8f0", border: "1px solid #f5d9bb", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "8px" }}>Free Offers along with your PhD Full Dissertation Writing Service</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "16px", fontSize: "1rem" }}>
            We deliver more than your expectation –Abstract or Executive Summary, Graphs &amp; Tables (redrawn), statistical analysis or textual analysis of data, SPSS / other software screen shots to ensure the process that we had carried out for doing the analyses Free Tutoring for the work being carried out – to speak confidently with your program supervisors &amp; SPSS output in Appendix.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "12px" }} className="three-col-grid">
            {freeOffers.map(d => (
              <div key={d} style={{ background: "#fff", border: "1px solid #f5d9bb", borderRadius: "8px", padding: "14px", display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <div style={{ width: "26px", height: "26px", background: "#e87722", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "0.85rem", flexShrink: 0 }}>✓</div>
                <span style={{ fontSize: "0.83rem", color: "#555", lineHeight: 1.6 }}>{d}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantees */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>Why Choose Tutors India for PhD Full Dissertation Writing</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "16px" }} className="two-col-grid">
            {[
              { t: "A complete secure & Confidential Service", d: "We offer 100% confidentiality of client's personal details, payment details, project works, and copyrights of research works. We ensure following for the conditionality, security & privacy: 1) All your projects are given unique reference codes 2) Documents are accessed only writers who signed NDA with Tutors India 3) Your financial information is protected b 128-bit secure socket layer (SSL) encryption." },
              { t: "Fully Referenced", d: "Our dissertation work is fully referenced with latest articles and textbooks. We refer only peer-reviewed sources such as scholarly articles and textbook to select the topic. We refer database including Web of Science, ProQuest, Google Scholar, Business Source Complete, and latest newspapers articles such as Economic Times, Forbes, The Wall Street, The Economics to identify the industrial problem." },
              { t: "Our Guarantees", d: "(1) Unlimited Revision for the work being committed. (2) We ensure on-time delivery (3) We support 24/7. (4) Our word count committed does not include references and bibliography & help you to locate the sources cited (5) Ensure three-level quality check including Technical QC, Editor QC and final check against the requirement (6) Confidentiality of the information (7) Plagiarism free work – less than 5% percent." },
              { t: "Plagiarism Free Work", d: "We are aware of the consequences of plagiarism. Hence, topic selection is completely plagiarism Free. Our work is scanned against online sources in a similar way like WriteCheck or Turnitin. We wanted to ensure that our clients i.e., researchers and students are not finding any issues with regards to plagiarism and so we issue plagiarism-free certificate*. Our streamlined and high-quality research writing process ensures your dissertation is not just copy-pasted, but written only after brainstorming sessions with our team of professional researchers." },
              { t: "On Time", d: "Our work is delivered at a specified date and time. Our specific changes to the delivered work will be carried out within 45 days of delivery. We guarantee delivery of minor changes within 24 working hours and significant changes within 48 working hours. We acknowledge all your emails within 30 minutes of working hours." },
              { t: "Experienced Writers", d: "Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities from India, the US, and the UK. We identify the perfect SME according to your subject and area. Expert is selected through a stringent selection process including the signing of non-disclosure and confidentiality agreement." },
            ].map(f => (
              <div key={f.t} style={{ background: "#f8f9ff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px" }}>
                <h3 style={{ fontSize: "0.96rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{f.t}</h3>
                <p style={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.65, margin: 0 }}>{f.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Subject Matter Expertise */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Your Dissertation is written by your choice of Subject Matter Expertise</h2>
          <p style={{ color: "#666", fontSize: "0.96rem", marginBottom: "8px" }}>We have a team of 2000+ expertise across the subjects &amp; countries (including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine)</p>
          <p style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.75, marginBottom: "14px" }}>Tutors India has capability and skills to handle subjects across the field. We chose qualified and experienced subject specific expertise while you order your Ph.D. or Master's dissertation. We have more than 2000+ expertise working across the world who can handle arts, literature, sciences, engineering or medicine.</p>
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
          <p style={{ color: "#c5d5f0", marginBottom: "20px", fontSize: "0.95rem" }}>Get your PhD Full Dissertation written by qualified UK &amp; US researchers today</p>
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
