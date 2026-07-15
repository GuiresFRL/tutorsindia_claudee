import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "Engineering & Technology Academic Writing | Masters, PhD | Tutors India",
  description: "Expert Engineering & Technology academic writing. Civil, Mechanical, Electrical, Computer, Chemical, Aerospace. IEEE, ASCE, ASME publications. Masters & PhD. Tutors India.",
};

const faqs = [
  {
    q: "Why should I Choose Tutors India for Engineering & Technology writing services?",
    a: "Our native academic engineering writers are skillful and experienced in different subject fields especially in engineering writing — ensuring to understand your project well and deliver on time. With over 400+ academic writers, we endeavour to submit your PhD document that meets the terminology of the academic area but also has the native linguistic command over technical terms. Thereby, it boosts opportunities to achieve high credits in your thesis and increasing the chances of acceptance by high impact factor journal.\n\nOur engineering writing services uniqueness includes:\n• An original, fresh and 100% plagiarism free content.\n• Flawless, ideal and sound engineering research paper that meets recommended formatting rules.\n• Perfect and appropriate information to discover groundbreaking conceptualization.\n• On-Time delivery with no compromise on Quality.",
  },
  {
    q: "What kind of services do you offer?",
    a: "We offer an extensive variety of the following outstanding academic engineering supports for Masters and PhD including: Abstracts writing, journal articles and manuscripts, literature reviews, research proposal, research methodology, textual/data analysis, statistical analysis, findings, results, and conclusions, referencing, and more.\n\nIn addition, tailor-made assignment, essay and manuscript support, conference paper and textbook writing, coding and algorithm, programming, software and tool development, illustration, manuscript statistics and PhD research plan as well as editing services. We deliver a professional academic assistance to complete any research work and writing you may require.",
  },
  {
    q: "What are the topics covered in Engineering & Technology dissertation?",
    a: "We cover the wide range of engineering dissertation topics such as software programming and algorithm, hardware and network, information system, data security, cyber-security, data management system, data-driven robotic sampling, social networking, virtual-reality system, wireless multimedia networks, cross-layer architecture for wireless networks, WiMAX, wireless sensor networks, computer-based software engineering, software metrics, measurement and testing, software process and management and much more.",
  },
  {
    q: "If I am not satisfied with your Engineering writing, how do you address the issues?",
    a: "At Tutors India, our first motto is to offer 100% customer satisfaction, so it is a very rare event. However, we provide the guarantee of unlimited revisions*, so you need not worry about it.",
  },
  {
    q: "What if I need some customisation in the engineering dissertation?",
    a: "Of course, we are ready to help our clients. Our engineering writing service is completely flexible and tailor made to the customer. Hence, if you can provide the areas of customisation related to the research area initially proposed, we could make amendments to the document.",
  },
  {
    q: "Can you show me sample work of Engineering & Technology academic writing?",
    a: "Yes, we have uploaded some of the academic writing work samples. For more details, please talk with our academic engineering writers.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  }))
};

const testimonials = [
  {
    quote: "I was really struggling with my final semester master's degree, that's when I heard about Tutors India. They really guided me the whole way to produce research proposal just from the idea of a research title. The level of detail which went into creating the research proposal is astonishing. The technical concepts they advised for methodology were very advanced and algorithms used were state of the art. Would definitely recommend Tutors India to anyone who is struggling to complete their research work.",
    author: "David Morrison",
    avatar: "/wp-content/uploads/2021/09/user8-85x85.jpg",
  },
  {
    quote: "Tutors India helped me gain clarity on the direction my research proposal needed to go and provided me with more clarity in my work. The experts understand my difficulties in writing the research proposal and guided me accordingly. Even without having an in-depth background in the topic I'm able to understand the key aspects and was given the focus to the right place. I wholeheartedly endorse Tutors India as a best and professional service.",
    author: "Glenn McLaughlin",
    avatar: "/wp-content/uploads/2021/09/user2-85x85.jpg",
  },
  {
    quote: "I am pursuing masters in mechatronics; therefore I wanted to present a conference paper for my final year project. It was difficult to start with the abstract of my paper and decided to get help from Tutors India. I can tell that it is one of the best sites for writing conference papers. They submitted my work within limited period of time and also taught me and helped me to improve my writing. Happy working with Tutors India!",
    author: "Arnav",
    avatar: "/wp-content/uploads/2021/09/user-85x85.jpg",
  },
  {
    quote: "I thank Tutors India for the wonderful job in helping me develop my algorithm in computer programming. Everyone was professional, excellent and hard working. Thanks to them, I was able to achieve my goal on time, and I look forward to continue working with them in the future.",
    author: "Harrison",
    avatar: "/wp-content/uploads/2021/09/user1-85x85.jpg",
  },
  {
    quote: "Honestly, I didn't expect this level of quality. The team understood exactly what I needed and delivered work that felt genuinely professional. My confidence went from stressed to unstoppable.",
    author: "Amelia Brooks, UK",
    avatar: "/wp-content/uploads/2024/06/Amelia-Brooks-85x85.webp",
  },
  {
    quote: "I was stuck, frustrated, and running out of time. Tutors India stepped in at the perfect moment and turned everything around faster than I imagined. Worth every bit.",
    author: "Oliver Bennett, UK",
    avatar: "/wp-content/uploads/2024/06/Oliver-Bennett-85x85.webp",
  },
  {
    quote: "The team handled everything professionally from start to finish. Timely updates, quick responses, and excellent academic quality — exactly what students need during stressful deadlines.",
    author: "Zain Al Hashmi, UAE",
    avatar: "/wp-content/uploads/2024/06/Zain-Al-Hashmi-85x85.webp",
  },
  {
    quote: "My research finally started making sense after working with this team. Their guidance simplified complex ideas and gave my project the structure it was missing.",
    author: "Hassan Al Falasi, UAE",
    avatar: "/wp-content/uploads/2024/06/Hassan-Al-Falasi-85x85.webp",
  },
  {
    quote: "I submitted my work with complete confidence for the first time ever. The quality, formatting, and clarity were all beyond what I hoped for.",
    author: "Charlotte Reed, UK",
    avatar: "/wp-content/uploads/2024/06/Charlotte-Reed-85x85.webp",
  },
];

const qualityCards = [
  {
    img: "/wp-content/uploads/2021/09/Topic-Selection.png",
    title: "Topic Selection",
    desc: "Your Topic Selection — Basic, Advanced, premium — Sample report as such it delivered.",
    href: "/our-sample-works/",
  },
  {
    img: "/wp-content/uploads/2021/09/Quality-Assurance.png",
    title: "Quality Assurance",
    desc: "We ensure to achieve High Quality at every stage — Check of Quality Assurance & Enhancement activities report.",
    href: "/guarantees/",
  },
  {
    img: "/wp-content/uploads/2021/09/Plagiarism-Report.png",
    title: "Plagiarism Report",
    desc: "We have dedicated to deliver your document after correcting plagiarism using WriteCheck or Turnitin, and/or any other advanced plagiarism tools.",
    href: "/our-services/editing-services/plagiarism-report/",
  },
  {
    img: "/wp-content/uploads/2021/09/Customer-Interaction.png",
    title: "Customer Interaction",
    desc: "We act in real-time and interact with customers at every stage in terms of modifications, any query related to your project and order delivery.",
    href: "/contact-us/",
  },
];

export default function EngineeringPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* ── Hero ── */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="eng-hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
              <Link href="/subjects/" style={{ color: "#a0b8e0" }}>Subjects</Link>{" / "}
              <span style={{ color: "#fff" }}>Engineering &amp; Technology</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "10px" }}>
              Engineering &amp; Technology – Academic Writing
            </h1>
            <p style={{ color: "#f9c74f", fontSize: "0.95rem", fontWeight: 600, marginBottom: "12px" }}>
              PhD, Master&apos;s &amp; Authors / Publishers
            </p>
            <p style={{ color: "#c5d5f0", fontSize: "0.97rem", lineHeight: 1.75, marginBottom: "10px" }}>
              The US &amp; UK technical writers at Tutors India aim at inculcating knowledge within students and build a great confidence to submit their engineering academic writing successfully.
            </p>
            <p style={{ color: "#c5d5f0", fontSize: "0.92rem", lineHeight: 1.7, marginBottom: "22px" }}>
              Tutors India offers complete research and development assistance for scholars in UK, Europe, and Asian countries. With more than fifteen years of experience, we provide invaluable assistance with complete satisfaction across all engineering disciplines.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "16px", textAlign: "center" }} className="eng-hero-badge">
            <img src="/wp-content/uploads/2021/09/Topic-Selection.png" alt="Engineering & Technology Academic Writing" style={{ width: "220px", height: "160px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>PhD Engineers<br />All Disciplines<br />IEEE · ASCE</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.eng-hero-inner{grid-template-columns:1fr!important;}.eng-hero-badge{display:none!important;}}`}</style>
      </section>

      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>

        {/* ── Opening Description ── */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.45rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>
          Engineering &amp; Technology Professionals at Tutors India assures you the quality
        </h2>
        <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "14px" }}>
          Engineering research deals with the discovering and systematic conceptual structuring of knowledge. Engineers, in general, develop applications, design, construct and operate systems, machines, structures and devices of societal and economic value. Engineering research is driven by the anticipated value of an application. While science is concerned with knowledge of natural phenomena and how it serves humanity's needs and wants considering adaptability, producibility, computability, and costs, engineering involves the integration of experience, methods, techniques and knowledge from many fields.
        </p>
        <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "14px" }}>
          Engineering research involves empirical, experimental, and heuristic methods with underlying scientific principles. However, doing engineering research requires continuous support from mentors. We offer engineering research services to all areas of engineering including Civil, Mechanical, Electrical, Computer, Chemical, Petroleum, Aerospace, Architectural, Biomedical, Coastal, Environmental, Ocean and Marine, Manufacturing, Surveying, Systems, Metallurgical &amp; Materials.
        </p>
        <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "36px" }}>
          We use subject-specific language, exemplary presentation that demonstrates clear, logical, imaginative, creative &amp; original work — we demonstrate advances in the state of the art, literature survey, uses new or advanced techniques, has elements of theory &amp; experiment.
        </p>

        {/* ── 4 Quality Cards ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px", marginBottom: "48px" }} className="four-col-grid">
          {qualityCards.map(c => (
            <div key={c.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column" }}>
              <img src={c.img} alt={c.title} style={{ width: "100%", height: "130px", objectFit: "cover" }} />
              <div style={{ padding: "14px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "0.94rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "8px", lineHeight: 1.4 }}>{c.title}</h3>
                <p style={{ fontSize: "0.79rem", color: "#666", lineHeight: 1.6, marginBottom: "10px", flexGrow: 1 }}>{c.desc}</p>
                <Link href={c.href} style={{ fontSize: "0.8rem", color: "#e87722", fontWeight: 600 }}>View More →</Link>
              </div>
            </div>
          ))}
        </div>

        {/* ── Dissertation Features ── */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>
          An Engineering Dissertation Writing Service that helps you get the grade
        </h2>
        <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "28px" }}>
          We help you in the broad range of systematic literature reviews, a piece of qualitative or quantitative research, clinical audit, service evaluation, and the business case for a change in practice. Our research areas include biomechanical engineering, controls, designs, micro and nano engineering, green &amp; sustainable engineering, computer and simulation. Engineering dissertation topics are selected based on your area of interest, research gap, and feasibility of data collection. We make you strong in your dissertation by dealing with all the questions that you have in your mind. The process also entails data collection, statistical analysis or simulation and presentation in the format of your Institute.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "48px" }} className="two-col-grid">
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "24px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Research Methods</h3>
            <p style={{ fontSize: "0.94rem", color: "#555", lineHeight: 1.75 }}>
              Research methods are critical aspects of engineering research as they enable addressing an engineering challenge in a systematic manner, evaluating background literature, adhering to ethics, and documentation strategies. In general the methodology chapter includes analytical works, computer simulation, and experimental works. We help you describe the method used to carry out your dissertation including application of advanced mathematics and formulation or computer simulation using software including computational fluid dynamics and finite element analysis.
            </p>
          </div>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "24px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Experimental Work</h3>
            <p style={{ fontSize: "0.94rem", color: "#555", lineHeight: 1.75 }}>
              We help to write the experimental work to describe how results were obtained including the approach, facilities, validations, range of measurements, computer simulation, and sufficient detail on the proposed theory or a descriptive model to clearly understand the physical assumptions related to a theory or model (analytical). We use a wide range of tools and technologies in power electronics, power system, advanced communication technology, antennas &amp; propagation, robotics, signal processing, embedded system, industrial electronics, VLSI, LabVIEW, MATLAB, ANSYS, and more.
            </p>
          </div>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "24px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Engineering Specializations Covered</h3>
            <p style={{ fontSize: "0.94rem", color: "#555", lineHeight: 1.75 }}>
              Electrical, Mechanical, Civil (structural, architectural), Environmental Engineering, Geotechnical Engineering, Computer, Architectural, Bio-engineering, Biomedical, Project Management, Chemical Engineering, Electronics, Aerospace, Automotive, Robotics, Microelectronic, Material Science, Agricultural Engineering, Paper Engineering, Engineering Management, Industrial, Systems, Manufacturing, Petroleum, Nanotechnology, and more.
            </p>
          </div>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "24px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Free while you order dissertation</h3>
            <p style={{ fontSize: "0.94rem", color: "#555", lineHeight: 1.75, marginBottom: "10px" }}>
              We help to develop questionnaire or interview guide at free of cost while you order for dissertation. We also provide free:
            </p>
            <ul style={{ paddingLeft: "18px", fontSize: "0.85rem", color: "#555", lineHeight: 1.9 }}>
              <li>Appendices &amp; Abstract</li>
              <li>Title Page &amp; Copyright Page</li>
              <li>Table of Contents</li>
              <li>Lists of Charts, Graphs, Illustrations</li>
              <li>Formatting</li>
              <li>Personal statement for your research proposal</li>
              <li>Bibliography (a brief annotation on key primary text)</li>
            </ul>
          </div>
        </div>

        {/* ── Dark Features Panel ── */}
        <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "36px", marginBottom: "48px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "12px" }}>Engineering Academic Writing &amp; Editing Features</h2>
          <p style={{ color: "#c5d5f0", fontSize: "0.92rem", lineHeight: 1.75, marginBottom: "28px" }}>
            We help you to submit a plan of the dissertation (proposed structure / main argument), progress, and a sample of writing to their supervisor according to the style of reference — Draft would demonstrate evidence of imagination, creativity, critical insights and analytical rigour.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }} className="three-col-grid">
            <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: "8px", padding: "20px" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "0.95rem", fontWeight: 700, marginBottom: "10px", color: "#f9c74f" }}>Sources, Citation and Presentation</h3>
              <p style={{ fontSize: "0.82rem", color: "#c5d5f0", lineHeight: 1.7 }}>
                We help you identify an impressive range of primary and secondary resources in compliance with engineering research guidelines including the IEEE Citation reference overview, IEEE Editorial Style Manual, ACSE templates, and EndNote Guide. Our formatting and referencing team are aware of citations for books, published &amp; unpublished papers, government &amp; private publications, newspaper/magazines, and www sites. We use IEEE for electrical engineering and ASCE citation style for civil engineering.
              </p>
            </div>
            <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: "8px", padding: "20px" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "0.95rem", fontWeight: 700, marginBottom: "10px", color: "#f9c74f" }}>Technical Style &amp; Argument</h3>
              <p style={{ fontSize: "0.82rem", color: "#c5d5f0", lineHeight: 1.7 }}>
                We follow style rules including quotations, ellipsis, interpolations, abbreviations, dates, times, numbers, fractions and decimals, and footnotes. We write your dissertation in the manner which is argumentative — the logical and coherent construction substantiated by relevant primary and secondary sources. We ensure that our dissertation writing is free of plagiarism and we screen the article using Viper, iThenticate, CrossCheck, eTBLAST, SafeAssign, WCopyFind, Grammarly and others. We follow EASE guidelines.
              </p>
            </div>
            <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: "8px", padding: "20px" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "0.95rem", fontWeight: 700, marginBottom: "10px", color: "#f9c74f" }}>Tools &amp; Technologies</h3>
              <p style={{ fontSize: "0.82rem", color: "#c5d5f0", lineHeight: 1.7 }}>
                We use a wide range of tools and technologies including LabVIEW, ZigBee, PLC, Microcontroller, GSM/GPS, ARM, MATLAB, Z-wave, PIR, Finite element modelling &amp; analysis, High rise structures design, applied machine intelligence, RFID, robotics, microwave theory, display technology, sensors, signal processing, embedded system, industrial electronics, smart grid, vehicular technology, and VLSI.
              </p>
            </div>
          </div>
        </div>

        {/* ── Testimonials ── */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px" }}>What Our Clients Say</h2>
        <div style={{ marginBottom: "48px" }}>
          <TestimonialSlider testimonials={testimonials} />
        </div>

        {/* ── FAQ ── */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Frequently Asked Questions</h2>
        <div style={{ marginBottom: "48px" }}>
          <FaqAccordion faqs={faqs} />
        </div>

      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "8px" }}>Order Now</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>
          Invest in your career by availing language editing help from the UK &amp; the US Qualified researchers
        </p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>

      <style>{`
        @media(max-width:768px){
          .two-col-grid{grid-template-columns:1fr!important;}
          .three-col-grid{grid-template-columns:1fr!important;}
        }
        @media(max-width:900px){
          .four-col-grid{grid-template-columns:1fr 1fr!important;}
          .three-col-grid{grid-template-columns:1fr 1fr!important;}
        }
      `}</style>
    </>
  );
}
