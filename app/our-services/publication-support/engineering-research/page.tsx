import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "Engineering Dissertation Writing Services | Engineering Thesis Help UK",
  description: "Engineering dissertation writing help. We write complete engineering dissertations that reflect novelty, theoretical analysis, and development of concepts.",
  keywords: "Engineering Dissertation Topics,Buy Engineering Dissertation Topics Online in UK",
  alternates: { canonical: "https://www.tutorsindia.com/our-services/publication-support/engineering-research/" },
};

const faqs = [
  {
    q: "Am I guaranteed of 100% Plagiarism Free IEEE Engineering and technology Papers?",
    a: "Yes, Tutors india has strict policies on checking the plagiarism errors. All the writers are a senior academician who follows professional ethics to the utmost level so your IEEE papers writing is high quality. In additional, the writing department is equipped with advanced anti plagiarism software Like Turnitin to eliminate the plagiarism.",
  },
  {
    q: "Can Customers Get Direct Contact With The Writers?",
    a: "Tutors india encourages transparent communication between writers and clients. Our customer support team help you to communicate the directly or pass their message to the writers directly and the vice versa.",
  },
  {
    q: "What Formatting Styles Does Your Tutors India Employ in IEEE papers?",
    a: "At Tutors India, we have adopted the some of the standard formatting and structuring styles. In additional, we have the expertise that have an experience in writing the various formatting styles like Vancouver, MLA, APA, Chicago, Harvard, and Turabia and more university specific styles.",
  },
  {
    q: "Can You Promise me a Particular Grade in IEEE Papers?",
    a: "In general, the grading of academic papers is influenced by external factors over which we do not have direct control. What we can promise is, your COMPUTER SCIENCE/IT PAPER that completely written with the highest academic standards and it meets your expectations. This is guaranteed by our QCR (Quality checklist Report) assurance.",
  },
  {
    q: "Can You Show me Sample Papers?",
    a: "We have some of the sample IEEE papers written by our experts so welcome to view our sample works at Tutors india.",
  },
  {
    q: "Can You Guarantee that my IEEE Papers is Unique?",
    a: "Yes, all our customized computer science/IT paper is unique. Once the task is completed, we provide you to offer a detailed plagiarism scan report to confirm your paper's uniqueness. The plagiarism report is created by the external provider Turnitin ,accepted by many colleges and universities.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const testimonials = [
  { quote: "Tutors India has more than fifteen years of experience in research and development in engineering. Their team provided invaluable assistance with complete satisfaction.", author: "PhD Student", location: "UK" },
  { quote: "My engineering dissertation was completed with highest academic standards. The IEEE formatting was perfect.", author: "Research Scholar", location: "Australia" },
  { quote: "Excellent support for engineering research. We not only spent time in writing but they made sure I could defend my paper without any problems.", author: "Engineering Researcher", location: "USA" },
];

export default function EngineeringResearchPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Services", url: "/our-services/" }, { name: "Publication Support", url: "/our-services/publication-support/" }, { name: "Engineering Research" , url: "https://www.tutorsindia.com/our-services/publication-support/engineering-research/" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
              <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}
              <Link href="/our-services/publication-support/" style={{ color: "#a0b8e0" }}>Publication Support</Link>{" / "}
              <span style={{ color: "#fff" }}>Engineering Research</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.4rem,3vw,2rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              Engineering Dissertation &amp; Manuscript Writing Services Help UK
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Thinking how to complete your engineering dissertation? Are you looking to outsource your engineering research work to a potential research firm? Look no further! Tutors India has an inbuilt experienced professional team to take care of your engineering research needs to perfection.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "20px" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Get A Free Quote</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/samples/publication-research.jpg" alt="Engineering Research Services" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>15+ Years Experience<br />5000+ PhD Theses<br />US &amp; UK Researchers</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      {/* Qualified Researchers */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Your professional Engineering Dissertation &amp; Manuscript is written by the qualified and experienced researchers from the US &amp; UK</h2>
        <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px" }}>
          Tutors India has more than fifteen years of experience in research and development in engineering and other academic works to provide invaluable assistance with complete satisfaction. Our team of engineering dissertation writers trained from international universities from the UK &amp; the US.
        </p>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          Till now we have completed more than 5000 Ph.D.&apos;s Thesis report and also supported for publication. We not only spend time in a piece of writing but also make sure that you can defend your paper without any problems.
        </p>
      </section>

      {/* Tutors India Difference */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Tutors India Difference in custom Engineering Dissertation &amp; Manuscript Writing Services UK</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "20px" }}>
            Engineering writers are expertise in handling different methodologies including modeling (reflecting real world scenario in a simplified model), theoretical engineering (conceptualization, modeling, analysis, data models, levels of abstractions, objects and operations – iteration, recursion &amp; induction), build methodology (building or designing the software system, programming language, testing), process methodologies (design or construction of software system and evaluation of human-computer interaction and understanding cognitive processes), experimental engineering (theory testing &amp; exploration) and computer simulation (investigation beyond current experimental capabilities).
          </p>
        </div>
      </section>

      {/* Handles Any Methodology */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Tutors India Expertise handles any kind of UK engineering dissertation methodology</h2>
        <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "24px" }}>
          At Tutors India, we offer engineering Research Guidance Service. Our experts are well versed in all major engineering research methodologies:
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
          {[
            { title: "Modeling", desc: "Reflecting real world scenario in a simplified model" },
            { title: "Theoretical Engineering", desc: "Conceptualization, modeling, analysis, data models, levels of abstractions, objects and operations – iteration, recursion & induction" },
            { title: "Build Methodology", desc: "Building or designing the software system, programming language, testing" },
            { title: "Process Methodologies", desc: "Design or construction of software system and evaluation of human-computer interaction and understanding cognitive processes" },
            { title: "Experimental Engineering", desc: "Theory testing & exploration" },
            { title: "Computer Simulation", desc: "Investigation beyond current experimental capabilities" },
          ].map((m) => (
            <div key={m.title} style={{ background: "#f5f6fa", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px" }}>
              <div style={{ fontWeight: 700, color: "#1a2a6c", marginBottom: "8px", fontSize: "0.92rem" }}>
                <span style={{ color: "#e87722", marginRight: "6px" }}>▶</span>{m.title}
              </div>
              <div style={{ fontSize: "0.82rem", color: "#555", lineHeight: 1.6 }}>{m.desc}</div>
            </div>
          ))}
        </div>
        <style>{`@media(max-width:768px){.three-col-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* Stunning Quality */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>We deliver stunning, and university accepted quality</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            Our engineering research writing services help guarantees that your data is confidential. We deliver more than your expectation – ensure to provider the proper context, delimit the boundary condition, cite landmark studies, accurately present the theoretical framework &amp; empirical contribution, stay focused on the research question, develop a coherent &amp; persuasive argument, a clear sense of direction, clear citation IEEE or any other specific style.
          </p>
        </div>
      </section>

      {/* Simply Easy */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Engineering dissertation &amp; Research Writing Services Are Simply easy &amp; Straightforward</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          Engineering dissertation writing service from Tutors India is simply easy and straightforward. Reply within 30 minutes of order placement. Just send us your topic and requirements and our expert researchers will take care of the rest.
        </p>
      </section>

      {/* Service Tiers */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "24px" }}>What Services do we offer under engineering dissertation &amp; manuscript writing services?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "22px", marginBottom: "40px" }} className="three-col-grid">
            {[
              {
                tier: "Basic",
                items: [
                  "3 Topics (Topic Selection based on area of interest)",
                  "1000 words",
                  "Objectives",
                  "Literature Review",
                  "Research Gap",
                  "Expected Contribution",
                  "Research Methodology",
                  "Data Analysis Guidelines",
                  "References Lists",
                ],
              },
              {
                tier: "Advanced",
                items: [
                  "1 topic",
                  "1000 words",
                  "Objectives",
                  "Literature Review",
                  "Research Gap",
                  "Expected Contribution",
                  "Research Methodology",
                  "Data Analysis Guidelines",
                  "References Lists",
                  "Bibliography (Additional reading)",
                ],
              },
              {
                tier: "Extended",
                items: [
                  "1 topic",
                  "Objectives",
                  "Literature Review",
                  "Research Gap",
                  "Expected Contribution",
                  "Research Methodology",
                  "Data Analysis Guidelines",
                  "References Lists",
                  "Bibliography",
                ],
              },
            ].map((t) => (
              <div key={t.tier} style={{ background: t.tier === "Advanced" ? "#1a2a6c" : "#fff", color: t.tier === "Advanced" ? "#fff" : "#333", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px" }}>
                <div style={{ fontSize: "1.1rem", fontWeight: 800, color: t.tier === "Advanced" ? "#f9c74f" : "#e87722", marginBottom: "16px" }}>{t.tier}</div>
                {t.items.map((item) => (
                  <div key={item} style={{ display: "flex", gap: "8px", padding: "5px 0", borderBottom: t.tier === "Advanced" ? "1px solid rgba(255,255,255,0.1)" : "1px solid #eef0f7", fontSize: "0.85rem", color: t.tier === "Advanced" ? "#c5d5f0" : "#555" }}>
                    <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Service Categories */}
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.15rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px" }}>Compilation of Work – Service Categories</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
            {[
              {
                cat: "Consultation Services",
                items: ["Dissertation Topic","Research Proposal","Dissertation (Full)","Specific Dissertation","Dissertation (Part)","Resit Dissertation","Dissertation Statistics","Poster Presentation","UG Dissertation","CV Writing"],
              },
              {
                cat: "Complete Writing Service",
                items: ["PhD Coursework","PhD Topic Selection","PhD Proposal","PhD Dissertation (Full)","PhD Dissertation (Part)","Dissertation Rework","PhD Synopsis","PhD Presentation","PhD Research Plan","PhD Viva Voice"],
              },
              {
                cat: "Publication Support",
                items: ["Manuscript Development","Conference/Seminar Papers","Textbook Writing","Manuscript Statistics","Abstracts","Medical Writing","Biostatistics Services","Computer Science & IT","Engineering Research","Statistical Services"],
              },
            ].map((cat) => (
              <div key={cat.cat} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px" }}>
                <div style={{ fontWeight: 700, color: "#e87722", marginBottom: "12px", fontSize: "0.95rem" }}>{cat.cat}</div>
                {cat.items.map((item) => (
                  <div key={item} style={{ display: "flex", gap: "8px", padding: "4px 0", borderBottom: "1px solid #eef0f7", fontSize: "0.82rem", color: "#555" }}>
                    <span style={{ color: "#e87722", flexShrink: 0 }}>→</span> {item}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subject Matter Expertise */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px" }}>Specialized Subject Matter Expertise across the globe</h2>
        <div style={{ marginBottom: "20px" }}>
          <div style={{ fontWeight: 700, color: "#1a2a6c", marginBottom: "10px", fontSize: "0.95rem" }}>Engineering Specialties:</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {["Electronics and Communication","Supply Chain Management","Computer Science Engineering","Sensor Technology","Environmental Engineering","Civil Engineering","Electrical Engineering","Chemical Engineering","Aerospace/Aeronautical Engineering","Automotive Engineering","Bioengineering","Oil and Gas Engineering","Mechatronics Engineering","Architecture Engineering","Industrial Engineering"].map((s) => (
              <span key={s} style={{ background: "#f0f4ff", border: "1px solid #c5d5f0", borderRadius: "20px", padding: "5px 14px", fontSize: "0.82rem", color: "#1a2a6c", fontWeight: 600 }}>{s}</span>
            ))}
          </div>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <div style={{ fontWeight: 700, color: "#1a2a6c", marginBottom: "10px", fontSize: "0.95rem" }}>Technical Technologies:</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {["VLSI","Wireless Communication","Information Theory","Instrumentation and Measurement","Vehicular Technology","Labview","Zigbee","Lightweight Technology","Embedded Systems","PLC","RFID","Robotics","Microcontroller","GSM/GPS","PIR","MatLab","Zwave","Broadcasting","Automatic Control"].map((s) => (
              <span key={s} style={{ background: "#1a2a6c", color: "#f9c74f", borderRadius: "6px", padding: "5px 12px", fontSize: "0.82rem", fontWeight: 700 }}>{s}</span>
            ))}
          </div>
        </div>
        <div>
          <div style={{ fontWeight: 700, color: "#1a2a6c", marginBottom: "10px", fontSize: "0.95rem" }}>Broader Subject Coverage:</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {["Arts & Humanities","Biological Sciences","Business & Management Studies","Marketing & Communication","Natural Sciences & Mathematics","Economics & Administration","Humanities & Social Science","Law","Medicine & Health","Education & Training","Journalism & Media","Agriculture & Forestry","Computer Science & IT","Hospitality, Leisure & Sports"].map((s) => (
              <span key={s} style={{ background: "#f0f4ff", border: "1px solid #c5d5f0", borderRadius: "20px", padding: "5px 14px", fontSize: "0.82rem", color: "#1a2a6c", fontWeight: 600 }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our deliverables while you order engineering dissertation &amp; manuscript writing services</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "24px" }}>
            We are completely aware that the manuscript or thesis or dissertation requires a specific format to be followed. Our deliverables include complete executable code, screenshots, project database, supporting tools, documentation, base paper and reference paper, Read Me File (project execution instructions), and Video File (project implementation procedure).
          </p>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Documentation List</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "10px" }} className="four-col-grid">
            {["Abstract","Introduction","Aim of project","Literature review","Current system","Disadvantages of current system","Definition of the problem","Benefits of proposed system","System requirements","Modules description","System architecture","Data flow diagram","Usecase diagram","Class diagram","Sequence diagram","Activity diagram","Collaboration diagram","ER diagram","Software description","System testing","System design","Feasibility study","Conclusion","Future enhancement"].map((item) => (
              <div key={item} style={{ background: "#fff", border: "1px solid #c5d5f0", borderRadius: "8px", padding: "10px 14px", fontSize: "0.82rem", color: "#1a2a6c", fontWeight: 600 }}>
                <span style={{ color: "#e87722", marginRight: "6px" }}>✓</span>{item}
              </div>
            ))}
          </div>
          <style>{`@media(max-width:768px){.four-col-grid{grid-template-columns:1fr 1fr!important;}}`}</style>
        </div>
      </section>

      {/* How Does it Work */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: "32px", textAlign: "center" }}>How Does UK engineering dissertation &amp; manuscript writing services works?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "22px" }} className="three-col-grid">
            {[
              { step: "01", title: "Order Confirmation", desc: "Order confirmation triggers team allocation to scrutinize work requirements and verify availability." },
              { step: "02", title: "Initial Queries & Outline", desc: "Clarification queries posed during early stage. Outline and manuscript analysis plan proposed for approval." },
              { step: "03", title: "Client Approval", desc: "Client approves outline and analysis plan before work begins." },
              { step: "04", title: "Draft Delivery", desc: "Draft work dispatched with progress updates provided throughout." },
              { step: "05", title: "Coordination & Data", desc: "Exclusive coordinators clarify queries. Primary data collection available (additional charge for proof of evidence). Excel data sheets provided in Appendix. Payment installment options available; work starts upon payment." },
              { step: "06", title: "Final Delivery", desc: "Work delivery per agreed schedule or earlier. Specific changes within 45 days of delivery. Minor changes within 24 working hours; significant changes within 48 working hours. All emails acknowledged within 30 minutes of working hours. Delays can be reported to customersupport@tutorsindia.com." },
            ].map((s) => (
              <div key={s.step} style={{ background: "rgba(255,255,255,0.07)", borderRadius: "10px", padding: "22px" }}>
                <div style={{ fontSize: "2rem", fontWeight: 800, color: "#f9c74f", marginBottom: "8px" }}>{s.step}</div>
                <div style={{ fontWeight: 700, marginBottom: "8px", fontSize: "0.95rem" }}>{s.title}</div>
                <div style={{ fontSize: "0.83rem", color: "#a0b8e0", lineHeight: 1.7 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px" }}>UK Engineering dissertation &amp; IEEE manuscript writing services features</h2>
        <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "24px" }}>
          Qualified researchers, engineering research methodology expertise, well experienced in IEEE papers writing, unlimited revision, only peer-reviewed articles, plagiarism report, 24/7 support, 100% match with the requirement and on time delivery.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "16px" }} className="four-col-grid">
          {["Qualified researchers","Engineering methodology expertise","IEEE papers expertise","Unlimited revision","Only peer-reviewed articles","Plagiarism report","24/7 support","100% match with requirement","On time delivery","Subject specific writers","Quality Assurance (QCR)","LaTeX formatting"].map((f) => (
            <div key={f} style={{ background: "#f5f6fa", border: "1px solid #dde2ef", borderRadius: "8px", padding: "14px", textAlign: "center", fontSize: "0.83rem", color: "#1a2a6c", fontWeight: 600 }}>
              <span style={{ display: "block", fontSize: "1.3rem", color: "#e87722", marginBottom: "6px" }}>★</span>
              {f}
            </div>
          ))}
        </div>
        <style>{`@media(max-width:768px){.four-col-grid{grid-template-columns:1fr 1fr!important;}}`}</style>
      </section>

      {/* Convince Committee */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Engineering dissertation &amp; manuscript writing need to convince the UK, the US supervisory committee</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            We write complete engineering dissertation that would reflect novelty from the introduction to recommendations. We not only spend time in a piece of writing but also make sure that you can defend your paper without any problems.
          </p>
        </div>
      </section>

      {/* What We Deliver */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>What we deliver while you order for engineering dissertation &amp; manuscript writing help UK</h2>
        <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "20px" }}>
          We deliver more than your expectation – ensure to provider the proper context, delimit the boundary condition, cite landmark studies, accurately present the theoretical framework &amp; empirical contribution, stay focused on the research question, develop a coherent &amp; persuasive argument, a clear sense of direction, clear citation IEEE or any other specific style.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
          {[
            { title: "Your engineering research paper writing", desc: "Complete engineering research paper written to the highest academic standards with proper IEEE or other citation style." },
            { title: "Quality Assurance", desc: "Our QCR (Quality checklist Report) assurance guarantees the paper meets all academic requirements and your expectations." },
            { title: "Plagiarism Report", desc: "Detailed plagiarism scan report from Turnitin confirming paper uniqueness, accepted by many colleges and universities." },
            { title: "Customer Interaction", desc: "Transparent communication between writers and clients throughout the entire writing process." },
            { title: "Complete Executable Code", desc: "Full project package including screenshots, project database, supporting tools, and documentation." },
            { title: "Video & Read Me Files", desc: "Read Me File with project execution instructions and Video File showing project implementation procedure." },
          ].map((item) => (
            <div key={item.title} style={{ background: "#f5f6fa", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px" }}>
              <div style={{ fontWeight: 700, color: "#1a2a6c", marginBottom: "8px", fontSize: "0.92rem" }}>✦ {item.title}</div>
              <div style={{ fontSize: "0.82rem", color: "#555", lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Exclusive */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Engineering dissertation &amp; manuscript writing Service is exclusive</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            As we do not just provide analysis, but the rather clear explanation and justification for the choice. Our engineering dissertation service provides clear explanations and justifications for every decision made in the research.
          </p>
        </div>
      </section>

      {/* Why Choose */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: "24px", textAlign: "center" }}>Why Choose Tutors India: Engineering dissertation &amp; manuscript writing Service features</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "16px" }} className="four-col-grid">
            {[
              { icon: "🎓", title: "Qualified researchers from US & UK", desc: "Expert writers trained from international universities." },
              { icon: "⚙️", title: "Engineering methodology expertise", desc: "In-depth knowledge of all engineering research methodologies." },
              { icon: "♾️", title: "Unlimited revisions", desc: "Revisions until you are 100% satisfied." },
              { icon: "📚", title: "Peer-reviewed sources only", desc: "All references from peer-reviewed journals." },
              { icon: "📋", title: "Plagiarism reports", desc: "Turnitin plagiarism reports provided with every order." },
              { icon: "🕐", title: "24/7 support", desc: "Round-the-clock support via email and CRM." },
              { icon: "✅", title: "100% requirement matching", desc: "Work tailored to your exact specifications." },
              { icon: "⏰", title: "On time delivery", desc: "Delivered on or before the agreed deadline." },
            ].map((g) => (
              <div key={g.title} style={{ background: "rgba(255,255,255,0.07)", borderRadius: "10px", padding: "20px" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{g.icon}</div>
                <div style={{ fontWeight: 700, fontSize: "0.94rem", marginBottom: "6px" }}>{g.title}</div>
                <div style={{ fontSize: "0.78rem", color: "#a0b8e0", lineHeight: 1.6 }}>{g.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Confidentiality + References */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px" }} className="two-col-grid">
          <div style={{ background: "#f5f6fa", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px" }}>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.15rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>A complete secure &amp; Confidential Service</h2>
            <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.96rem" }}>
              We offer 100% confidentiality of client&apos;s personal details, payment details, project works, and copyrights of research works. Documents accessed only by writers with NDA agreements. Financial information protected by 128-bit SSL encryption.
            </p>
          </div>
          <div style={{ background: "#f5f6fa", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px" }}>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.15rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Fully Referenced</h2>
            <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.96rem" }}>
              Our dissertation work is fully referenced with latest articles and textbooks. We refer only peer-reviewed sources such as scholarly articles and textbooks. We refer database including Web of Science, ProQuest, Google Scholar, Business Source Complete.
            </p>
          </div>
        </div>
        <style>{`@media(max-width:768px){.two-col-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* Guarantees */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "32px", textAlign: "center" }}>Our Guarantees</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "18px" }} className="four-col-grid">
            {[
              { icon: "♾️", title: "Unlimited Revision", desc: "Unlimited revision for the work being committed." },
              { icon: "⏰", title: "On-Time Delivery", desc: "We ensure on-time delivery." },
              { icon: "🕐", title: "Support 24/7", desc: "We support 24/7." },
              { icon: "📄", title: "Word Count Committed", desc: "Our word count committed does not include references and bibliography." },
              { icon: "✅", title: "Three-Level Quality Check", desc: "Technical QC, Editor QC and final check against the requirement." },
              { icon: "🔒", title: "Confidentiality", desc: "Confidentiality of the information." },
              { icon: "📋", title: "Plagiarism Free", desc: "Plagiarism free work – less than 5% percent." },
              { icon: "🎓", title: "Experienced Writers", desc: "Only experienced and subject specific writers will be allotted." },
            ].map((g) => (
              <div key={g.title} style={{ background: "#fff", border: "1px solid #c5d5f0", borderRadius: "10px", padding: "20px", textAlign: "center" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{g.icon}</div>
                <div style={{ fontWeight: 700, color: "#1a2a6c", marginBottom: "6px", fontSize: "0.94rem" }}>{g.title}</div>
                <div style={{ fontSize: "0.78rem", color: "#555", lineHeight: 1.6 }}>{g.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plagiarism / On Time / Experienced Writers */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "22px" }} className="three-col-grid">
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Plagiarism Free Work</h3>
            <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.7 }}>
              We are aware of the consequences of plagiarism. Hence, topic selection is completely plagiarism Free. Work scanned via WriteCheck or Turnitin; plagiarism-free certificate issued.
            </p>
          </div>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>On Time</h3>
            <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.7 }}>
              Our work is delivered at a specified date and time. Our specific changes to the delivered work will be carried out within 45 days of delivery. We guarantee delivery of minor changes within 24 working hours and significant changes within 48 working hours. We acknowledge all your emails within 30 minutes of working hours.
            </p>
          </div>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Experienced Writers</h3>
            <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.7 }}>
              Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities from India, the US, and the UK.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px" }}>Frequently Asked Questions</h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* Global Team */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Your Coding, Programming &amp; Algorithm development service is carried out by your choice of specialized expertise</h2>
        <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px" }}>
          We have a team of 2000+ expertise across the subjects &amp; countries (including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine).
        </p>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          Tutors India has capability and skills to handle subjects across the field. Invest in your career by availing language editing help from the UK &amp; the US Qualified researchers.
        </p>
      </section>

      {/* Testimonials */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "24px", textAlign: "center" }}>Voice of Our customer</h2>
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Order Now</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>Reply in 30 Minutes · US &amp; UK Researchers · IEEE Formatting · Unlimited Revisions</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
