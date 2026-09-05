import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "PhD Academic Poster Presentation Services | DBA PowerPoint PPT Help UK",
  description: "Exclusive power point presentation service. We develops world class PPT presentations for PhD scholars especially for Viva Voce/Interim report presentation.",
  keywords: "PowerPoint Presentation Service,Powerpoint: Presentation Tips ,PowerPoint Design,Buy PowerPoint Presentations",
  alternates: { canonical: "https://www.tutorsindia.com/our-services/phd-dba-dissertation/phd-presentation/" },
};

const faqs = [
  {
    q: "Why we need to choose Tutors India for presentation services for my PhD dissertation?",
    a: "We have a Giant team of experts where we has a separate professional and dedicated graphical designer department are in designing the attractive posters presentation for your masters scientific and academic projects. In addition, we have capability to do maximum number of poster presentation or complex designs posters with ease.",
  },
  {
    q: "What are the sections present in the Tutors India Academic and Scientific poster presentation?",
    a: "These are the below section usually present in the post presentation or any customization needed, we ready to tailor-made post presentation help.",
  },
  {
    q: "Can you create research poster power point template for my master dissertation?",
    a: "At Tutors India, we ready to offer the easy to use and fully customizable Masters Poster presentation template for your dissertation so you can use and customize the template based on their choice of color, text, graphics and images.",
  },
  {
    q: "How long will it take to complete Academic poster presentation?",
    a: "Time line depends on the post presentation length, features and any other graphic needs. We also do urgent delivery based on your research project nature.",
  },
  {
    q: "Will do revision for my poster presentation?",
    a: "Our expertise work has striven to work hard our work is never revised. At tutors India, we provide the unlimited revision until our customer gets 100% satisfaction.",
  },
  {
    q: "Can I see Client samples work of poster presentation?",
    a: "No, we do not show you the client's sample presentation because it is confidential rather than that we show our sample presentation, which is available here and purely done by our experts.",
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
    quote: "The final work looked so refined and well-structured that even my mentor appreciated the improvement immediately. Highly recommended for serious academic support.",
    author: "George Whitmore",
    location: "UK",
    avatar: "/images/testimonials/t14.jpg",
  },
];

const posterContent = [
  "Title",
  "Collaborators & institutional affiliations",
  "Abstract",
  "Background",
  "Literature review",
  "Research questions/objectives",
  "Materials, process, methods, or approach",
  "Results/conclusion (argument, insight, significance)",
  "Future directions",
  "Acknowledgement",
  "References",
  "Contact information",
];

const editingTiers = [
  { feature: "Typographical errors", premium: true, advanced: true, standard: true },
  { feature: "Punctuation", premium: true, advanced: true, standard: true },
  { feature: "Grammar", premium: true, advanced: true, standard: true },
  { feature: "Sentence construction", premium: true, advanced: true, standard: false },
  { feature: "Terminology/reference check", premium: true, advanced: true, standard: false },
  { feature: "Logic, relevance and clarity", premium: true, advanced: true, standard: false },
  { feature: "Word choice", premium: true, advanced: true, standard: false },
  { feature: "Journal formatting", premium: true, advanced: false, standard: false },
  { feature: "Cover letter", premium: true, advanced: false, standard: false },
  { feature: "Tutors India certificate", premium: "On request", advanced: false, standard: false },
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies",
  "Marketing & Communication", "Engineering & Technology", "Natural Sciences & Mathematics",
  "Biological & Life science", "Economics & Administration", "Humanities & Social Science",
  "Law", "Medicine & Health", "Education & Training",
  "Journalism & Media", "Agriculture & Forestry", "Computer Science & IT",
  "Hospitality, Leisure & Sports",
];

export default function PhDPresentationPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Services", url: "/our-services/" }, { name: "PhD / DBA Dissertation", url: "/our-services/phd-dba-dissertation/" }, { name: "PhD Presentation" , url: "https://www.tutorsindia.com/our-services/phd-dba-dissertation/phd-presentation/" }]} />
      {/* ── HERO ── */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}
            <Link href="/our-services/phd-dba-dissertation/" style={{ color: "#a0b8e0" }}>PhD / DBA Dissertation</Link>{" / "}
            <span style={{ color: "#fff" }}>PhD Presentation</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.4rem,3vw,2rem)", lineHeight: 1.3, marginBottom: "16px" }}>
            Academic PowerPoint Presentation Service
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "8px" }}>
            Are you finding it difficult to create an effective PowerPoint Presentation? Are you not sure what are the factors need to be included in your presentation to be submitted to your external/internal committee? Would you like to get professional help to complete your poster with perfection?
          </p>
          <p style={{ color: "#f9c74f", fontSize: "1.05rem", fontWeight: 700, marginBottom: "20px" }}>
            Then You've Certainly Reached the Right Place for designing academic power point presentation! and you can be rest assured to submit your presentation with confidence and perfection.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, textDecoration: "none" }}>Get A Free Quote</Link>
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

        {/* Academic & Scientific Posters */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Academic &amp; Scientific Posters are done by the UK Poster experts</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "1rem" }}>
            Scientific &amp; Academic Poster presentation is academically sound, highlight the context of your work through maps, photographs, your methods and results in the forms of charts, tables, graphs and photographs.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
            We offer poster presentation service to the students to support dissertation, assignment or any other research.
          </p>
        </div>

        {/* At Tutors India we assist for poster preparation */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>At Tutors India, we assist for poster preparation</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "1rem" }}>
            Presenting an effective poster presentation is a significant phase in your major research paper as it is an advertisement of your hard work.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "1rem" }}>
            Poster presentations need to be self-explanatory or theme based to relate to the research subject or it's just an illustrated abstract.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
            The presentation needs to create a critical discussion among colleagues and your professors.
          </p>
        </div>

        {/* We make an impact */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>We make an impact through our exclusive power point presentation service</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "1rem" }}>Producing effective presentations is significant for a Ph.D. submission to be successful.</p>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "1rem" }}>An excellent presentation creates a high impact on your efforts in front of your internal or external committee.</p>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "1rem" }}>Tutors India develops world class PowerPoint presentations for Ph.D. scholars, especially for Viva Voce / Interim report presentation.</p>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "1rem" }}>We can help you to translate your 200-250 pages of the thesis into one single and effective PowerPoint presentation.</p>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "1rem" }}>PowerPoint presentations can range from engineering PPT or Science Ph.D. thesis for Viva Voce interim submission.</p>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "1rem" }}>This will have a huge reference in your Ph.D. external and internal committee reports.</p>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "1rem" }}>Our academic writers have the capability to write and design a good PPT.</p>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "1rem" }}>Our team ensures that the content is readable from about 10 feet away, the title is short and draws interest to the readers, restricted word count, clear text and to the point, with more of bullets, numbering, and headlines, and effective use of graphs, fonts, colors and clear layout.</p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>The power point also includes your name, institutional affiliation and acknowledgment.</p>
        </div>

        {/* Best spoke PowerPoint + Academic Help + Straightforward */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Best spoke PowerPoint – Power Presentation for Academic Conferences</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "18px", fontSize: "1rem" }}>
            Our Poster Presentation services encourage clarity, creativity, and ability to stand on its own as a clear, logical presentation of your work, without any explanation from you.
          </p>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Academic PowerPoint Presentation Help the UK</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "1rem" }}>
            Tutors India ensures to add enough additional values as much as possible for the poster presentation to be successful.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "18px", fontSize: "1rem" }}>
            It ensures that the scholar gets best high grades.
          </p>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Our Academic &amp; Scientific Power Point Presentation Service is Simply easy &amp; Straightforward</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "1rem" }}>
            Our poster presentation help guarantees that the poster designed (Poster designing service, Presentation writing service) would capable of exchanging ideas between the audience and the presenter.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
            All our posters are rechecked for plagiarism and linguistic mistakes, thus ensure that our work is unique and matchless.
          </p>
        </div>

        {/* Service Tiers */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>What Services do we offer under academic poster presentation?</h2>
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

        {/* Poster Features */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>Academic PowerPoint Presentation Features</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "18px" }} className="two-col-grid">
            {[
              { title: "Posters with clarity", desc: "A poster presentation is part of the initial task in research or Ph.D. project. Posters need to express a message with clarity. It should clearly depict the central message, what are the main arguments that will support your theme, how it can be significant to the audiences and how best it is presented. Tutors India offers end to end assistance to scholars with total clarity." },
              { title: "Best aspects of a Poster", desc: "An impressive poster needs to depict an explicit content, diagrams, structured flow chart, efficient font size, careful selection of color in graphs, charts, and fonts. Tutors India ensures a complete poster development experience with all essential factors included." },
              { title: "Posters as the best classification tool", desc: "Properly designed posters will be the best way to classify and dissect your presentation. It is the best mode of explaining your research to your colleagues who can offer best perceptions to enhance your research. Tutors India assists poster presentation in initiating healthy discussion on various aspects." },
              { title: "Posters in Social Media", desc: "To increase your poster credentials, the posters can be added to online poster directories. It can assist in the application of Facebook, Twitter or social media in linking and promoting your poster content" },
            ].map((f, i) => (
              <div key={f.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px", display: "flex", gap: "14px" }}>
                <div style={{ width: "34px", height: "34px", background: "#1a2a6c", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "0.85rem", flexShrink: 0, marginTop: "2px" }}>{i + 1}</div>
                <div>
                  <h3 style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{f.title}</h3>
                  <p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our PowerPoint Presentation Service + How does it work + Poster Presentation Service */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Our PowerPoint Presentation Service</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "18px", fontSize: "1rem" }}>
            We focus on clarity of content, create visual interest and accessibility.
          </p>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Academic PowerPoint Presentation Service – How does it work</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "1rem" }}>
            We will share you the work in drafts of speech or writing, along with your poster services.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "18px", fontSize: "1rem" }}>
            By this way, you will get an opportunity to review the poster and share your feedback, where our UK writers will do the amendment as per your request.
          </p>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Our Poster Presentation Service</h2>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
            We focus on clarity of content, create visual interest and accessibility.
          </p>
        </div>

        {/* Poster Content */}
        <div style={{ background: "#fff8f0", border: "1px solid #f5d9bb", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Our Free deliverables while you order for academic power point presentation service UK</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "16px", fontSize: "1rem" }}>
            Specific sources, models, graphs, charts, images, referencing with required style, plagiarism scanning, and unlimited revisions.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "12px" }} className="three-col-grid">
            {posterContent.map(d => (
              <div key={d} style={{ background: "#fff", border: "1px solid #f5d9bb", borderRadius: "8px", padding: "14px", display: "flex", gap: "10px", alignItems: "center" }}>
                <div style={{ width: "26px", height: "26px", background: "#e87722", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "0.85rem", flexShrink: 0 }}>✓</div>
                <span style={{ fontSize: "0.83rem", color: "#555", lineHeight: 1.5 }}>{d}</span>
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
              { n: "3", text: "We will share you the work in drafts of speech or writing, along with your poster services. By this way, you will get an opportunity to review the poster and share your feedback, where our UK writers will do the amendment as per your request." },
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

        {/* Editing Tiers Table */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px", overflowX: "auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>Editing Service Tiers</h2>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
            <thead>
              <tr style={{ background: "#1a2a6c", color: "#fff" }}>
                <th style={{ padding: "12px 16px", textAlign: "left" }}>Feature</th>
                <th style={{ padding: "12px 16px", textAlign: "center" }}>Premium Editing</th>
                <th style={{ padding: "12px 16px", textAlign: "center" }}>Advanced Editing</th>
                <th style={{ padding: "12px 16px", textAlign: "center" }}>Standard Proofread</th>
              </tr>
            </thead>
            <tbody>
              {editingTiers.map((row, i) => (
                <tr key={row.feature} style={{ background: i % 2 === 0 ? "#f8f9ff" : "#fff" }}>
                  <td style={{ padding: "10px 16px", color: "#333", fontWeight: 500 }}>{row.feature}</td>
                  <td style={{ padding: "10px 16px", textAlign: "center", color: row.premium === true ? "#1a9e3f" : row.premium === "On request" ? "#e87722" : "#ccc" }}>
                    {row.premium === true ? "✓" : row.premium === "On request" ? "On request" : "—"}
                  </td>
                  <td style={{ padding: "10px 16px", textAlign: "center", color: row.advanced ? "#1a9e3f" : "#ccc" }}>{row.advanced ? "✓" : "—"}</td>
                  <td style={{ padding: "10px 16px", textAlign: "center", color: row.standard ? "#1a9e3f" : "#ccc" }}>{row.standard ? "✓" : "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Guarantees */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>Why Choose Tutors India: Scientific &amp; Academic Poster Presentation Service features</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "16px", fontSize: "1rem" }}>
            We follow according to the specific university guidelines across the United States, United Kingdom, Australia, and other Asian Universities.
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
                <h3 style={{ fontSize: "0.96rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{f.t}</h3>
                <p style={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.65, margin: 0 }}>{f.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Subject Expertise */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Your academic PowerPoint presentation is written by your choice of Subject Matter Expertise</h2>
          <p style={{ color: "#666", fontSize: "0.96rem", marginBottom: "14px" }}>Specialized Subject Matter Expertise across the globe</p>
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
          <p style={{ color: "#c5d5f0", marginBottom: "20px", fontSize: "0.95rem" }}>Get your Academic PowerPoint Presentation designed by UK experts today</p>
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
