import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "Academic Software Development Service",
  description: "Expert academic software application development for CS dissertations. C, C++, Java, .NET, PHP, Python, MySQL, Oracle & more. US & UK qualified developers.",
  alternates: { canonical: "https://tutorsindia.com/our-services/development/software-development/" },
};

const faqs = [
  {
    q: "When do you initiate my software application project?",
    a: "After the order is confirmed and received your clear requirements, we will start working on your application development projects with help of experienced and well-trained application developer assist you.",
  },
  {
    q: "Why do companies hire Tutors India for application development?",
    a: "Our IT team strives hard to deliver the quality software products faster and, we gives independency to the clients to monitor the project status so identify the point to apply the necessary changes since no loss of quality, flexible processes and ability to continuously enhance products standard during the development lifecycle.",
  },
  {
    q: "What is the quality standards maintained in custom software application development?",
    a: "At Tutors India, at every stages of custom development process from conceptual design to final product, the highest quality standards maintained.",
  },
  {
    q: "What is the software application development, tutor India offers?",
    a: "We offer the bespoke web and desktop phone application, cloud application and web and user interface design.",
  },
  {
    q: "How do you start to work in application development process?",
    a: "We start from a pilot study to understand the project well in term of the technical and commercial aspects. Our expertise has many years of experience in software application development to meet your needs. Meticulously, we pay attention to the each stage as project quality and on-time delivery.",
  },
  {
    q: "Can I get sample work for software application?",
    a: "Yes, we have an uploaded some of the software application samples. Feel free to look our sample work page.",
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
  { quote: "Tutors India provided me with excellent service, and I am really pleased. They were on time, provided fair pricing, were professional and courteous in their dealings, and delivered products far ahead of schedule. For my stuff, I have a good e-commerce site. Because of Tutors India, my revenue has increased, and I would surely utilise your services again.", author: "Emma" },
  { quote: "I am happy to seek help from Tutors India for assisting me in software development. Their team of experts worked closely with me throughout the process, staying on task and on budget. I also appreciate their quick and courteous responses. I highly recommend their service.", author: "Mason" },
  { quote: "Thank you very much for the document. It is wonderful. Please thank Respected Ma'am. I think she has produced something great. I am deeply grateful to her for this.", author: "Derrick", location: "UK" },
  { quote: "I have defended my research few days ago and scored a very good.", author: "Bryan", location: "Australia" },
  { quote: "Thanks a lot for the file. It is very well written even beyond my expectation. Please send in the final file as soon as possible as I need to upload to the online submission portal today.", author: "Penelope", location: "Greece" },
  { quote: "Yesterday I completed review meeting and showed my code execution to my guide she got satisfied.", author: "Sal Monella", location: "UK" },
  { quote: "The thesis is good work. my professor is quite happy with it and I'm nearly on the brink of submitting the final report.", author: "Prateek", location: "India" },
  { quote: "I've read the research proposal and it is excellent.", author: "Evelyn", location: "UK" },
];

export default function SoftwareDevelopmentPage() {
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
              <span style={{ color: "#fff" }}>Software Development</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.4rem,3vw,2rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              Academic Software Application Development Service
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Are you having difficulty with your software programming? Would you like to obtain professional help to complete your application development? You have reached the right destination. Tutors India has well trained and experienced professionals to assist you with your software requirement.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "20px" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.8 }}>Java · .NET · Python<br />MySQL · Oracle · PHP<br />Reply in 30 Minutes</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      {/* Right Place */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Then You&apos;ve Certainly Reached the Right place</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          Expert academic software application development is just a message away. Our qualified and experienced researchers from the US &amp; UK are ready to assist with your dissertation, manuscript, and all software development needs.
        </p>
      </section>

      {/* Our Software Application Service */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our software application Service</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            Our software applications use advanced computing and algorithm with friendly GUI. We are also specialized in computer graphics, image and video analysis, 3D software and video rendering, Pattern and Object recognition and CAD applications. We also use custom plug-ins, application integration using APIs/SDK like eBay, Microsoft Dynamics, SPSS, Mapping services, QuickBooks, etc. We also have expert testers who can find bugs in your codes and debug them. Our experts have expertise in creating open database architecture in the internet, intranet or extranet, client server and decision support systems. Our technical team can maintain small/medium/large websites and can update them regularly.
          </p>
        </div>
      </section>

      {/* Tutors India Difference */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Tutors India Difference in software development Service</h2>
        <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "16px" }}>
          Programming is difficult as we need to tell computer and unambiguous instruction thereby there is no room for subjective interpretation. A program is written in some particular language. Tutors India offers a broad range of custom software development services in various domains and verticals. Our experienced subject matter experts can assist you from initializing the concept, prototyping, development, testing, and deployment till your complete submission. For scholars submitting perfect software to support their academic credentials is an important task. Tutors India fully supports and understands the significance of their time and efforts and offers a thorough evaluation and support to complete their software development task. We ensure comprehensive assistance in:
        </p>
        <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px", marginBottom: "16px" }}>
          {[
            "Offering precise designs and frameworks suitable for your requirement",
            "Full hands-on support from concept creation till development",
            "Complete testing by our professional testing team",
            "Full assistance in deployment",
          ].map((item) => (
            <li key={item} style={{ display: "flex", gap: "10px", background: "#f5f6fa", border: "1px solid #dde2ef", borderRadius: "8px", padding: "12px 16px" }}>
              <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>✓</span>
              <span style={{ fontSize: "0.96rem", color: "#444", lineHeight: 1.6 }}>{item}</span>
            </li>
          ))}
        </ul>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          For the majority of students, the UK / the US dissertation software development is by far the most challenging piece of academic work that they have attempted or are ever likely to try in the future. The majority of the students do agree and would have experienced the scenario.
        </p>
      </section>

      {/* Unique & Innovative */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Unique &amp; innovative software development service</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            Since the whole process of designing, analyzing, implementing, tuning, debugging and experimentally evaluating algorithm required a high level of expertise, Tutors India with their team of skilled expertise offer algorithm development service to scholars across the world. We provide services for Ph.D. scholars pursuing Computer Science Engineering, who mainly deal with data communication, computer application, network formation, and components of the computer. Further, we also help in web design and web development coding for client side includes HTML5, CSS3, Flash, JavaScript, Jquery, Microsoft Silverlight, Ajax, while for server side PHP (open source), ASP (Microsoft Proprietary), Active VFP (Open Source), CSP, Server Side (ANSI C), Cold Fusion (Adobe Proprietary, formerly Macromedia, formerly Allaire), CGI, Lotus domino, Node. Js, Perl, Erland, with Linux, Perl, Python,NET, Ruby, Smalltalk, SSJS server side javascript, WebDNA, &amp; Websphere. Database technology includes MySQL, Microsoft SQL service, and many others.
          </p>
        </div>
      </section>

      {/* Team of Software Developers */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Team of Software developers assures you the quality program for your academic work</h2>
        <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "20px" }}>
          Tutors India has a team of software expertise who have the capability to handle a wide range of programming tools includes, C, C++, ASP. NET, JAVA, Jquery, HTML, CSS, VB. Net, Windows 2005 server, Networking. In addition, the team also has experience and knowledge to handle a wide range of database including SQL server, Oracle, Sybase, Microsoft access, MYSQL.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {["C","C++","ASP.NET","JAVA","Jquery","HTML","CSS","VB.Net","Windows 2005 Server","Networking","SQL Server","Oracle","Sybase","Microsoft Access","MySQL"].map((s) => (
            <span key={s} style={{ background: "#1a2a6c", color: "#f9c74f", borderRadius: "6px", padding: "5px 12px", fontSize: "0.82rem", fontWeight: 700 }}>{s}</span>
          ))}
        </div>
      </section>

      {/* Simply Easy */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Software development service is Simply easy &amp; Straightforward</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            Our software service guarantees that your works confidential, and so you do not have to worry about it. Just send us your topic along with the deadline and see the results that are far justified and mark the success of your career.
          </p>
        </div>
      </section>

      {/* Service Tiers */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "24px" }}>What Services do we offer under coding, algorithm &amp; programming help?</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "22px" }} className="three-col-grid">
          {[
            { tier: "Basic", desc: "Only coding based on the concept shared" },
            { tier: "Advanced", desc: "In addition to the basic features, we will write interpretation and evaluation process." },
            { tier: "Premium", desc: "New conceptual development, coding, or programming, algorithm development and interpretation, evaluation of the new algorithm code and compare results with other established algorithms." },
          ].map((t) => (
            <div key={t.tier} style={{ background: t.tier === "Advanced" ? "#1a2a6c" : "#fff", color: t.tier === "Advanced" ? "#fff" : "#333", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 800, color: t.tier === "Advanced" ? "#f9c74f" : "#e87722", marginBottom: "16px" }}>{t.tier}</div>
              <p style={{ fontSize: "0.94rem", lineHeight: 1.7, color: t.tier === "Advanced" ? "#c5d5f0" : "#555" }}>{t.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "28px" }}>
          <Link href="/order-now/" style={{ padding: "13px 36px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "1rem" }}>ORDER NOW</Link>
        </div>
        <style>{`@media(max-width:768px){.three-col-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* Comprehensive Insight */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px" }}>Tutors India provides comprehensive insight of software development process in your project such as</h2>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
            {[
              "Identifying the right model",
              "Determine the process flow and data modeling",
              "Provide integrated development setup",
              "Define the software framework",
              "Assist best programming style",
            ].map((item) => (
              <li key={item} style={{ display: "flex", gap: "10px", background: "#fff", border: "1px solid #dde2ef", borderRadius: "8px", padding: "12px 16px" }}>
                <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: "0.96rem", color: "#444", lineHeight: 1.6 }}>{item}</span>
              </li>
            ))}
          </ul>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            With Tutors India support and assistance, you can be rest assured to submit your software application with confidence and satisfaction.
          </p>
        </div>
      </section>

      {/* Free Offers */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Free Offers along with your software development Help UK</h2>
        <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "20px" }}>
          We deliver more than your expectation – Abstract or Executive Summary, Graphs &amp; Tables (redrawn), analysis or evaluation of newly developed algorithm, software screen shots to ensure the process that we had carried out for doing the analyses. Free Tutoring for the work being carried out – to speak confidently with your program supervisors.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
          {[
            { title: "Abstract or Executive Summary", desc: "Professionally written summary included free with your order." },
            { title: "Graphs & Tables (redrawn)", desc: "All graphs and tables redrawn to publication standard." },
            { title: "Analysis or evaluation of newly developed algorithm", desc: "Complete analysis and evaluation of your newly developed algorithm included." },
            { title: "Software screenshots", desc: "Screenshots documenting the process that was carried out for the analyses." },
            { title: "Free Tutoring", desc: "Free Tutoring for the work being carried out – to speak confidently with your program supervisors." },
          ].map((item) => (
            <div key={item.title} style={{ background: "#f5f6fa", border: "1px solid #c5d5f0", borderRadius: "10px", padding: "20px" }}>
              <div style={{ fontWeight: 700, color: "#1a2a6c", marginBottom: "6px", fontSize: "0.92rem" }}>✦ {item.title}</div>
              <div style={{ fontSize: "0.82rem", color: "#555", lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px" }}>Software development Service for your CS dissertation features</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "12px" }} className="two-col-grid">
            {[
              "We will provide complete executable code",
              "Package will include screen shots",
              "Project database will also be included",
              "Package will include the supporting tools",
              "Package will include documentation",
              "Package will include the Base paper and Reference paper",
              "Package will include Read Me File which is the project execution instructions",
              "Package will include Video File which explains the project implementation procedure",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "10px", background: "#fff", border: "1px solid #dde2ef", borderRadius: "8px", padding: "14px" }}>
                <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: "0.87rem", color: "#444", lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
          <style>{`@media(max-width:768px){.two-col-grid{grid-template-columns:1fr!important;}}`}</style>
        </div>
      </section>

      {/* Documentation */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px" }}>Documentation</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {["ABSTRACT","INTRODUCTION","AIM OF PROJECT","LITERATURE REVIEW","CURRENT SYSTEM","DISADVANTAGES OF CURRENT SYSTEM","DEFINITION OF THE PROBLEM","BENEFITS OF PROPOSED SYSTEM","SYSTEM REQUIREMENTS","MODULES DESCRIPTION","SYSTEM ARCHITECTURE","DATA FLOW DIAGRAM","USERCASE DIAGRAM","CLASS DIAGRAM","SYSTEM TESTING","SYSTEM DESIGN","FEASIBILITY STUDY","CONCLUSION","FUTURE ENHANCEMENT"].map((s) => (
            <span key={s} style={{ background: "#f0f4ff", border: "1px solid #c5d5f0", borderRadius: "20px", padding: "5px 14px", fontSize: "0.82rem", color: "#1a2a6c", fontWeight: 600 }}>{s}</span>
          ))}
        </div>
      </section>

      {/* Embedded Systems */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Embedded System, PLC, VLSI, RFID, Robotic, Microcontroller, Zigbee, Lab View, GSM / GPS, ARM, PIR, MATLAB, ZWAVE – Power Electronics:</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>Switching of electronic circuits (power supplies, converter, inverter, and motor drives)</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "16px" }}>
            {["Embedded System","PLC","VLSI","RFID","Robotic","Microcontroller","Zigbee","Lab View","GSM/GPS","ARM","PIR","MATLAB","ZWAVE","Power Electronics"].map((s) => (
              <span key={s} style={{ background: "#fff", border: "1px solid #c5d5f0", borderRadius: "20px", padding: "5px 14px", fontSize: "0.82rem", color: "#1a2a6c", fontWeight: 600 }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our software development Service is exclusive</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          As we do not just provide analysis, but the rather clear explanation and justification for the choice.
        </p>
      </section>

      {/* Why Choose */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: "20px", textAlign: "center" }}>Why Choose Tutors India: software development Service features</h2>
          <p style={{ color: "#a0b8e0", lineHeight: 1.8, textAlign: "center", marginBottom: "28px", fontSize: "0.96rem" }}>
            Qualified researchers, research methodology expertise, well experienced coders, developers, programmers capable of handling various software and many more, only peer-reviewed articles, Tutoring and clarification, Tables and Interpretation with proper formatting for print-ready analysis, plagiarism report, 24/7 support, timely Support, 100% match with the requirement and on time delivery.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "16px" }} className="four-col-grid">
            {[
              { icon: "🎓", title: "Qualified researchers", desc: "Expert developers with international university degrees." },
              { icon: "💻", title: "Experienced developers", desc: "Well experienced in all major programming platforms." },
              { icon: "🔬", title: "Research methodology expertise", desc: "Comprehensive knowledge of CS research methods." },
              { icon: "📚", title: "Only peer-reviewed articles", desc: "All references from peer-reviewed journals." },
              { icon: "🧑‍🏫", title: "Tutoring and clarification", desc: "Free tutoring for the work being carried out." },
              { icon: "📊", title: "Tables and Interpretation", desc: "Proper formatting for print-ready analysis." },
              { icon: "📋", title: "Plagiarism report", desc: "Turnitin/WriteCheck reports provided with every order." },
              { icon: "🕐", title: "24/7 support", desc: "Round-the-clock support via email and CRM." },
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
              We offer 100% confidentiality of client&apos;s personal details, payment details, project works, and copyrights of research works. We ensure following for the conditionality, security &amp; privacy: 1) All your projects are given unique reference codes 2) Documents are accessed only writers who signed NDA with Tutors India 3) Your financial information is protected by 128-bit secure socket layer (SSL) encryption.
            </p>
          </div>
          <div style={{ background: "#f5f6fa", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px" }}>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.15rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Fully Referenced</h2>
            <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.96rem" }}>
              Our dissertation work is fully referenced with latest articles and textbooks. We refer only peer-reviewed sources such as scholarly articles and textbook to select the topic. We refer database including Web of Science, ProQuest, Google Scholar, Business Source Complete, and latest newspapers articles such as Economic Times, Forbes, The Wall Street, The Economics to identify the industrial problem.
            </p>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "32px", textAlign: "center" }}>Our Guarantees</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "18px" }} className="four-col-grid">
            {[
              { icon: "♾️", title: "Unlimited Revision", desc: "Unlimited Revision for the work being committed." },
              { icon: "⏰", title: "On-Time Delivery", desc: "We ensure on-time delivery." },
              { icon: "🕐", title: "Support 24/7", desc: "We support 24/7." },
              { icon: "📄", title: "Word Count Committed", desc: "Word count committed does not include references and bibliography & help you to locate the sources cited." },
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

      {/* Plagiarism / On Time / Experienced */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "22px" }} className="three-col-grid">
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Plagiarism Free Work</h3>
            <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.7 }}>
              We are aware of the consequences of plagiarism. Hence, topic selection is completely plagiarism Free. Our work is scanned against online sources in a similar way like WriteCheck or Turnitin. We wanted to ensure that our clients i.e., researchers and students are not finding any issues with regards to plagiarism and so we issue plagiarism-free certificate. Our streamlined and high-quality research writing process ensures your dissertation is not just copy-pasted, but written only after brainstorming sessions with our team of professional researchers.
            </p>
          </div>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>On Time</h3>
            <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.7 }}>
              Our work is delivered at a specified date and time. Our specific changes to the delivered work will be carried out within 45 days of delivery. We guarantee delivery of minor changes within 24 working hours and significant changes within 48 working hours. We acknowledge all your emails within 30 minutes of working hours. Further any delay in the delivery can be raised at customersupport@tutorsindia.com
            </p>
          </div>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Experienced Writers</h3>
            <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.7 }}>
              Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities from India, the US, and the UK. We identify the perfect SME according to your subject and area. Expert is selected through a stringent selection process including the signing of non-disclosure and confidentiality agreement. You can be very sure about the quality of the work since expert writer is identified as per International Research Experience.
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
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Your software development service is carried out by your choice of specialized expertise</h2>
        <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "16px" }}>
          We have a team of 2000+ expertise across the subjects &amp; countries (including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine).
        </p>
        <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "20px" }}>
          Tutors India has capability and skills to handle subjects across the field. We chose qualified and experienced subject specific expertise while you order your Ph.D. or Master&apos;s dissertation. We have more than 2000+ expertise working across the world who can handle arts, literature, sciences, engineering or medicine.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {["Arts & Humanities","Biological Sciences","Business & Management Studies","Marketing & Communication","Engineering & Technology","Natural Sciences & Mathematics","Biological & Life science","Economics & Administration","Humanities & Social Science","Law","Medicine & Health","Education & Training","Journalism & Media","Agriculture & Forestry","Computer Science & IT","Hospitality, Leisure & Sports"].map((s) => (
            <span key={s} style={{ background: "#f0f4ff", border: "1px solid #c5d5f0", borderRadius: "20px", padding: "6px 16px", fontSize: "0.83rem", color: "#1a2a6c", fontWeight: 600 }}>{s}</span>
          ))}
        </div>
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
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>Invest in your career by availing language editing help from the UK &amp; the US Qualified researchers.</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
