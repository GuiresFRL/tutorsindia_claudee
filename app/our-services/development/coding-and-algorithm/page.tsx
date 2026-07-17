import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "Coding and Algorithm Development Services for Research",
  description: "Get expert coding and algorithm development services for your software projects, from design to implementation.",
  keywords: "Algorithm Design and Development,Algorithm Development Services UK",
  alternates: { canonical: "https://www.tutorsindia.com/our-services/development/coding-and-algorithm/" },
};

const faqs = [
  {
    q: "I am totally new to this coding and algorithm. Will your experts give me a consultation?",
    a: "Of course, after order is confirmed, we allocate the special team to arrange the special consultation where our experts clearly explain the core to advanced how we proceed this task.",
  },
  {
    q: "List of Tools by Tutors india research analyst for the MATLAB platform?",
    a: "At tutors india, we used a wide variety of platforms including IEEE Matlab Simulink, ZigBee, and many more specialized MATLAB tools for your project requirements.",
  },
  {
    q: "What are the types of platform used for coding and algorithm process?",
    a: "We used various platforms for coding and algorithm process such as JAVA, DOTNET, EMBEDDED SYSTEM, LINUX and so on.",
  },
  {
    q: "Whether you Novel algorithm for my project?",
    a: "Yes, off course, our qualified and professional research analyst is used only novel algorithm for your projects.",
  },
  {
    q: "List of Tools used by Tutors india research analyst for the HADOOP platform?",
    a: "They are various list of tools used by Tutors india for HADOOP HDFS(Hadoop Distributed File system), Hbase, HIVE, Sqoop, Pig, NOSQL, ZooKeeper, Mahout, Mapreduce and much more.",
  },
  {
    q: "Can you show me the samples of your coding and algorithm work?",
    a: "Yes, we have uploaded some of the sample coding and algorithm works.",
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
  { quote: "Their experts explained the core to advanced concepts clearly. My IEEE project was delivered on time with complete documentation.", author: "Engineering Student", location: "UK" },
  { quote: "Novel algorithm development was exactly what I needed. Professional team with deep MATLAB expertise.", author: "Research Scholar", location: "Australia" },
  { quote: "Excellent Hadoop and big data analytics support. The code was clean, well documented and executable.", author: "PhD Candidate", location: "USA" },
];

export default function CodingAlgorithmPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
              <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}
              <Link href="/our-services/development/" style={{ color: "#a0b8e0" }}>Development</Link>{" / "}
              <span style={{ color: "#fff" }}>Coding &amp; Algorithm</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.4rem,3vw,2rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              Coding &amp; Algorithm Development Support for Engineering Dissertation &amp; Manuscript
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Our Coding, Programming &amp; Algorithm development services help guarantees that your data is confidential, and so you do not have to worry about it. Expert coding support for IEEE projects, engineering dissertations and manuscripts.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "20px" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/samples/publication-research.jpg" alt="Coding Algorithm Development" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>IEEE Projects<br />MATLAB · Java · Hadoop<br />Reply in 30 Minutes</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      {/* Right Place */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Then You&apos;ve Certainly Reached the Right place</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          Programming is difficult as we need to tell computer an unambiguous instruction thereby there is no room for subjective interpretation. Tutors India provides expert coding, programming and algorithm development support for those seeking to publish in IEEE and conferences.
        </p>
      </section>

      {/* Qualified Coders */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Your Coding, Programming &amp; Algorithm development is done by the qualified and experienced coders</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            Our qualified and experienced coders from the US &amp; UK handle all programming and algorithm projects to the highest academic and industry standards.
          </p>
        </div>
      </section>

      {/* Tutors India Difference */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Tutors India Difference in coding, programming and algorithm development Service</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          Programming is difficult as we need to tell computer an unambiguous instruction thereby there is no room for subjective interpretation. Our team brings the expertise to design, analyze, implement, and evaluate algorithms that meet your exact requirements.
        </p>
      </section>

      {/* Unique & Innovative */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Unique &amp; innovative coding, programming and algorithm development service</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            Designing, analyzing, implementing, and evaluating algorithms requires expertise that Tutors India provides. Each project is approached with fresh, novel solutions tailored to your specific research requirements.
          </p>
        </div>
      </section>

      {/* IEEE Projects */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Tutors India Offers Coding and Algorithm Development for IEEE Projects.</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          Our services are specifically tailored for IEEE project requirements. We deliver complete executable code packages containing screenshots, project databases, supporting tools, complete documentation, reference materials, README files, and implementation video tutorials.
        </p>
      </section>

      {/* Simply Easy */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Coding, Programming &amp; Algorithm development Services Are Simply easy &amp; Straightforward</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            Our Coding, Programming &amp; Algorithm development services help guarantees that your data is confidential, and so you do not have to worry about it. You will get the reply within 30 minutes.
          </p>
        </div>
      </section>

      {/* Service Tiers */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "24px" }}>What Services do we offer under coding, algorithm &amp; programming help?</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "22px" }} className="three-col-grid">
          {[
            {
              tier: "Basic",
              items: ["Only coding based on the concept shared"],
            },
            {
              tier: "Advanced",
              items: ["In addition to the basic features, we will write interpretation and evaluation process."],
            },
            {
              tier: "Premium",
              items: ["New conceptual development, coding, or programming, algorithm development and interpretation, evaluation of the new algorithm code and compare results with other established algorithms."],
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
        <style>{`@media(max-width:768px){.three-col-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* Subject Matter Expertise */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px" }}>Specialized Subject Matter Expertise across the globe</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {["Arts & Humanities","Biological Sciences","Business & Management Studies","Engineering & Technology","Computer Science & IT","Medicine & Health","Law","Education & Training","Economics & Administration","Natural Sciences & Mathematics","Journalism & Media","Agriculture & Forestry","Hospitality, Leisure & Sports"].map((s) => (
              <span key={s} style={{ background: "#fff", border: "1px solid #c5d5f0", borderRadius: "20px", padding: "6px 16px", fontSize: "0.83rem", color: "#1a2a6c", fontWeight: 600 }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our deliverables while you order Coding, Algorithm &amp; Programming Help</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          Coding, Programming and algorithm development from Tutors India is simply easy and straightforward. You will get the reply within 30 minutes. Our deliverables include complete executable code, screenshots, project database, supporting tools, documentation, base paper and reference paper, Read Me File (project execution instructions), and Video File (project implementation procedure).
        </p>
      </section>

      {/* How Does it Work */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: "32px", textAlign: "center" }}>How Does Coding, Algorithm &amp; Programming consultation work?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "22px" }} className="three-col-grid">
            {[
              { step: "01", title: "Order Confirmation", desc: "After order is confirmed, we allocate the special team to scrutinize work requirements." },
              { step: "02", title: "Special Consultation", desc: "Our experts clearly explain the core to advanced how we proceed the task. Initial queries addressed at early stage." },
              { step: "03", title: "Outline & Plan", desc: "Analysis plan proposed and approved by client before work begins." },
              { step: "04", title: "Draft Delivery", desc: "Draft work dispatched with progress updates provided throughout." },
              { step: "05", title: "Coordination", desc: "Exclusive coordinators clarify queries. Payment installment options available; work starts upon payment." },
              { step: "06", title: "Final Delivery", desc: "Work delivered per agreed schedule or earlier. Minor changes within 24 working hours; significant changes within 48 working hours. All emails acknowledged within 30 minutes of working hours." },
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

      {/* Features & Tools */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px" }}>Coding, Programming &amp; Algorithm development Features</h2>
        <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "24px" }}>
          Services include executable code, screenshots, project database, documentation, base papers, and video implementation guides. Qualified researchers, research methodology expertise, well experienced coders, developers, programmers capable of handling various software and many more.
        </p>
        <div style={{ marginBottom: "28px" }}>
          <div style={{ fontWeight: 700, color: "#1a2a6c", marginBottom: "12px", fontSize: "0.95rem" }}>Software Tools &amp; Platforms:</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {["NS2","Java","CloudSim","Matlab","Omnet++","Qualnet","Opnet","Android","ImageJ","NS3","Dotnet","Gridsim","Peersim","Hadoop","RTool","APACHE","MLOSS","JMLR","Vowpal wabbit","IEEE Matlab Simulink","ZigBee","HDFS","Hbase","HIVE","Sqoop","Pig","NOSQL","ZooKeeper","Mahout","Mapreduce"].map((s) => (
              <span key={s} style={{ background: "#1a2a6c", color: "#f9c74f", borderRadius: "6px", padding: "5px 12px", fontSize: "0.82rem", fontWeight: 700 }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Systems */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Embedded System, PLC, VLSI, RFID, Robotic, Microcontroller, Zigbee, Lab View, GSM / GPS, ARM, PIR, MATLAB, ZWAVE – Power Electronics:</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            Switching of electronic circuits (power supplies, converter, inverter, and motor drives). Our team specialises in embedded systems, VLSI, RFID, robotics, and microcontroller programming for all IEEE and engineering dissertation project types.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "18px" }}>
            {["Embedded System","PLC","VLSI","RFID","Robotics","Microcontroller","Zigbee","LabView","GSM/GPS","ARM","PIR","MATLAB","ZWAVE","Power Electronics"].map((s) => (
              <span key={s} style={{ background: "#fff", border: "1px solid #c5d5f0", borderRadius: "20px", padding: "5px 14px", fontSize: "0.82rem", color: "#1a2a6c", fontWeight: 600 }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Free Offers */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "24px" }}>Free Offers along with your coding, programming &amp; Algorithm development Help UK</h2>
        <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "20px" }}>
          We deliver more than your expectation – Abstract or Executive Summary, Graphs &amp; Tables (redrawn), analysis or evaluation of newly developed algorithm.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
          {[
            { title: "Abstract or Executive Summary", desc: "Professionally written summary included free with your order." },
            { title: "Graphs & Tables (redrawn)", desc: "All graphs and tables redrawn to publication standard." },
            { title: "Analysis or evaluation of newly developed algorithm", desc: "Complete analysis and evaluation of your newly developed algorithm included." },
            { title: "Software screenshots", desc: "Screenshots documenting the implementation process included with delivery." },
            { title: "Free Tutoring", desc: "Free tutoring for the work being carried out." },
          ].map((item) => (
            <div key={item.title} style={{ background: "#f5f6fa", border: "1px solid #c5d5f0", borderRadius: "10px", padding: "20px" }}>
              <div style={{ fontWeight: 700, color: "#1a2a6c", marginBottom: "6px", fontSize: "0.92rem" }}>✦ {item.title}</div>
              <div style={{ fontSize: "0.82rem", color: "#555", lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Exclusive */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our Coding, Programming &amp; Algorithm development Service is exclusive</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            As we do not just provide analysis, but the rather clear explanation and justification for the choice. Our team provides complete transparency in their methodology and decision-making process.
          </p>
        </div>
      </section>

      {/* Why Choose */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: "24px", textAlign: "center" }}>Why Choose Tutors India: Coding, Programming &amp; Algorithm development Service features</h2>
          <p style={{ color: "#a0b8e0", lineHeight: 1.8, textAlign: "center", marginBottom: "28px", fontSize: "0.96rem" }}>
            Qualified researchers, research methodology expertise, well experienced coders, developers, programmers capable of handling various software and many more, unlimited revision, only peer-reviewed articles, plagiarism report, 24/7 support, 100% match with the requirement and on time delivery.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "16px" }} className="four-col-grid">
            {[
              { icon: "🎓", title: "Qualified researchers", desc: "Expert coders with international university degrees." },
              { icon: "💻", title: "Experienced coders & developers", desc: "Well experienced in all major programming platforms." },
              { icon: "🔬", title: "Research methodology expertise", desc: "Comprehensive knowledge of engineering research methods." },
              { icon: "♾️", title: "Unlimited revision", desc: "Revisions until you are 100% satisfied." },
              { icon: "📚", title: "Only peer-reviewed articles", desc: "All references from peer-reviewed journals." },
              { icon: "📋", title: "Plagiarism report", desc: "Turnitin/WriteCheck reports provided with every order." },
              { icon: "🕐", title: "24/7 support", desc: "Round-the-clock support via email and CRM." },
              { icon: "✅", title: "100% match with the requirement", desc: "Work tailored to your exact specifications." },
            ].map((g) => (
              <div key={g.title} style={{ background: "rgba(255,255,255,0.07)", borderRadius: "10px", padding: "18px" }}>
                <div style={{ fontSize: "1.6rem", marginBottom: "8px" }}>{g.icon}</div>
                <div style={{ fontWeight: 700, fontSize: "0.85rem", marginBottom: "6px" }}>{g.title}</div>
                <div style={{ fontSize: "0.76rem", color: "#a0b8e0", lineHeight: 1.6 }}>{g.desc}</div>
              </div>
            ))}
          </div>
          <style>{`@media(max-width:768px){.four-col-grid{grid-template-columns:1fr 1fr!important;}}`}</style>
        </div>
      </section>

      {/* Confidentiality + References */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px" }} className="two-col-grid">
          <div style={{ background: "#f5f6fa", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px" }}>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.15rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>A complete secure &amp; Confidential Service</h2>
            <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.96rem" }}>
              100% confidentiality of client&apos;s personal details, payment details, project works, and copyrights of research works. Documents accessed only by writers with NDA agreements. Financial information protected by 128-bit SSL encryption.
            </p>
          </div>
          <div style={{ background: "#f5f6fa", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px" }}>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.15rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Fully Referenced</h2>
            <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.96rem" }}>
              Our work references only peer-reviewed sources such as scholarly articles and textbooks to select the topic. We refer databases including Web of Science, ProQuest, Google Scholar, Business Source Complete.
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
              { icon: "⏰", title: "On-Time Delivery", desc: "Our work is delivered at a specified date and time." },
              { icon: "🕐", title: "Support 24/7", desc: "We support 24/7." },
              { icon: "📄", title: "Word Count Committed", desc: "Word count committed does not include references and bibliography." },
              { icon: "✅", title: "Three-Level Quality Check", desc: "Technical QC, Editor QC and final check against the requirement." },
              { icon: "🔒", title: "Confidentiality", desc: "Confidentiality of the information." },
              { icon: "📋", title: "Plagiarism Free", desc: "Plagiarism free work – less than 5%." },
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

      {/* Plagiarism / On Time / Experienced */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "22px" }} className="three-col-grid">
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Plagiarism Free Work</h3>
            <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.7 }}>
              Our work is scanned against online sources in a similar way like WriteCheck or Turnitin. Plagiarism-free certificate issued with every order.
            </p>
          </div>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>On Time</h3>
            <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.7 }}>
              Our work is delivered at a specified date and time. Minor changes within 24 working hours; significant changes within 48 working hours. All emails acknowledged within 30 minutes of working hours.
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
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          We have a team of 2000+ expertise across the subjects &amp; countries (including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine).
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
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>Reply in 30 Minutes · US &amp; UK Coders · Novel Algorithms · Unlimited Revisions</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
