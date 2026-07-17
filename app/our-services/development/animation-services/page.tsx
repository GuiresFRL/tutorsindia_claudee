import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "2D, 3D & Multimedia Animation Services",
  description: "Expert 2D, 3D animation, CAD design, architectural rendering, mechanical engineering visuals and multimedia services for dissertations and academic projects.",
  alternates: { canonical: "https://www.tutorsindia.com/our-services/development/animation-services/" },
};

const faqs = [
  {
    q: "How long will it take to produce a 3D animated Film?",
    a: "First stage development takes 4-5 weeks; actual production requires 4-6 weeks. Storyboarding and feedback rounds extend timelines. Accurate estimates depend on specific client requirements.",
  },
  {
    q: "How long should my video be?",
    a: "Most videos are under 2 minutes, as longer content reduces audience engagement. Multiple shorter videos work better than extended single videos for online viewership.",
  },
  {
    q: "Do we need to meet face-to-face or can we work remotely with you on a process?",
    a: "Tutors India operates as a virtual organization, comfortable working remotely via FTP uploads, emails, Skype, and video conferences.",
  },
  {
    q: "How much does it cost to create an animated marketing video or tutorial?",
    a: "One-minute animations typically range $5,000-$7,000 depending on animation style and character requirements. Basic slideshows cost less; full character animation costs more.",
  },
  {
    q: "What's the turnaround time for an animated video or tutorial?",
    a: "Typical single video projects complete in 6-8 weeks. Final completion depends on deposit timing and client feedback responsiveness.",
  },
  {
    q: "What are your terms of payment?",
    a: "Standard arrangement requires one-third upon commission, one-third at preview stage, and final third upon completion.",
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
  { quote: "Honestly, I didn't expect this level of quality. My confidence went from stressed to unstable — in the best possible way. The animation work exceeded all expectations.", author: "Amelia Brooks", location: "UK" },
  { quote: "I was stuck, frustrated, and running out of time. Tutors India turned everything around faster than I imagined. Their 3D modelling work was outstanding.", author: "Oliver Bennett", location: "UK" },
  { quote: "The attention to detail was incredible. Working with them felt like having an expert academic partner dedicated to my project.", author: "Layla Al Mansoori" },
  { quote: "My research finally started making sense. Their guidance and visualisation work simplified complex ideas beautifully.", author: "Hassan Al Falasi", location: "UAE" },
  { quote: "Thank you very much for the document. It is wonderful. I think she has produced something great. I am deeply grateful for this.", author: "Derrick", location: "UK" },
  { quote: "I have defended my research few days ago and scored a very good.", author: "Bryan", location: "Australia" },
  { quote: "I must say your company is so professional, available and legitimate with your services. I just want to say thank you and I will refer all my students to you.", author: "Cory Ander", location: "New Zealand" },
];

export default function AnimationServicesPage() {
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
              <span style={{ color: "#fff" }}>Animation Services</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.4rem,3vw,2rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              Engineering &amp; Animation – 2D, 3D &amp; Multimedia Services
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Are you frustrated with current design and drawings works? Are your drawings are not up to your expectations and planning to outsource them to a trustworthy professional team?
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "20px" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.8 }}>2D · 3D · CAD · VFX<br />Architectural Rendering<br />Reply in 30 Minutes</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      {/* Right Place */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Then You&apos;ve Certainly Reached the Right place</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          Tutors India offers complete assistance for your thesis submission with full detailed attention at an affordable price.
        </p>
      </section>

      {/* For Students */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our video and animation design Services are exclusively for students pursuing Mechanical engineering, architectural design service, civil engineering, structural engineering, electrical engineering and film production and animation.</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            Intros &amp; animated videos, whiteboard &amp; explainer videos, promotional &amp; brand videos, editing &amp; post production, spokesperson &amp; testimonials, video greetings, animated characters (3D &amp; 2D) &amp; modelling, CAD animation, Architectural Modeling, rendering and walk through
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, marginTop: "10px", fontWeight: 600 }}>
            Customized costs based on the requirement
          </p>
        </div>
      </section>

      {/* Tutors India Difference */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Tutors India Difference in 3D Modeling Design, 3D CAD Design Services</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          Our experienced subject matter experts deliver professional animation, 3D modelling, CAD design and multimedia services for academic and commercial projects. We bring together engineering expertise and creative talent to deliver work that meets the highest quality standards.
        </p>
      </section>

      {/* Trusted Professionals */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Tutors India Engineering &amp; Animation Team Are Trusted Professionals</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            Our team of trusted professionals brings together engineering expertise, artistic ability and technical mastery to deliver world-class 2D, 3D and multimedia solutions. Each project is handled with the utmost attention to detail and delivered to your exact specifications.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px" }}>Our Capabilities and Skills</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "12px" }} className="two-col-grid">
          {[
            "3D Modelling design (animation, flythrough, modelling)",
            "Architectural design (commercial, residential, interior, landscape)",
            "CAD drawing & design (civil, electrical, mechanical drafting)",
            "Consumer products design (furniture, jewelry, lighting, toys)",
            "Engineering services across multiple disciplines",
            "Manufacturing and rapid prototyping",
            "2D creative solutions and graphic design",
            "Video production (intros, whiteboard, promotional, explainer videos)",
            "CAD animation and architectural rendering",
            "Character animation (2D & 3D)",
          ].map((item) => (
            <div key={item} style={{ display: "flex", gap: "10px", background: "#f5f6fa", border: "1px solid #dde2ef", borderRadius: "8px", padding: "14px" }}>
              <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>✓</span>
              <span style={{ fontSize: "0.87rem", color: "#444", lineHeight: 1.6 }}>{item}</span>
            </div>
          ))}
        </div>
        <style>{`@media(max-width:768px){.two-col-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* Simply Easy */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Animation and Multimedia for dissertation &amp; manuscript is simply easy &amp; Straightforward</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            Our animation and multimedia service guarantees that your work is confidential, and so you do not have to worry about it. Just send us your topic along with the deadline and see the results that are far justified and mark the success of your career.
          </p>
        </div>
      </section>

      {/* Service Tiers */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "24px" }}>What Services do we offer under animation and multimedia service?</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "18px" }} className="four-col-grid">
          {[
            { tier: "Basic", desc: "Developed based on relevant sources with reasonable research attempt and descriptive evaluation." },
            { tier: "Advanced", desc: "Wide range of sources with clear research gap identification and research questions." },
            { tier: "Extended", desc: "Comprehensive coverage with in-depth analysis and integration of multiple data sources." },
            { tier: "Premium", desc: "Seminal research with thorough engagement using latest resources, solid gap identification, excellent critical analysis." },
          ].map((t, i) => (
            <div key={t.tier} style={{ background: i === 1 ? "#1a2a6c" : "#fff", color: i === 1 ? "#fff" : "#333", border: "1px solid #dde2ef", borderRadius: "12px", padding: "24px" }}>
              <div style={{ fontSize: "1.05rem", fontWeight: 800, color: i === 1 ? "#f9c74f" : "#e87722", marginBottom: "12px" }}>{t.tier}</div>
              <p style={{ fontSize: "0.85rem", lineHeight: 1.7, color: i === 1 ? "#c5d5f0" : "#555" }}>{t.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "28px" }}>
          <Link href="/order-now/" style={{ padding: "13px 36px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "1rem" }}>ORDER NOW</Link>
        </div>
        <style>{`@media(max-width:768px){.four-col-grid{grid-template-columns:1fr 1fr!important;}}`}</style>
      </section>

      {/* Subject Matter Expertise */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px" }}>Specialized Subject Matter Expertise across the globe</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {["Arts & Humanities","Biological Sciences","Business & Management Studies","Marketing & Communication","Engineering & Technology","Natural Sciences & Mathematics","Biological & Life science","Economics & Administration","Humanities & Social Science","Law","Medicine & Health","Education & Training","Journalism & Media","Agriculture & Forestry","Computer Science & IT","Hospitality, Leisure & Sports"].map((s) => (
              <span key={s} style={{ background: "#fff", border: "1px solid #c5d5f0", borderRadius: "20px", padding: "6px 16px", fontSize: "0.83rem", color: "#1a2a6c", fontWeight: 600 }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our deliverables while you order Animation &amp; Multimedia Help</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          Animation and multimedia from Tutors India is simply easy and straightforward. You will get the reply within 30 minutes which would enable to place your order quickly without any delay in submissions. We would provide executive summary/abstract, and output, and any other information that have used to develop the output.
        </p>
      </section>

      {/* How Does it Work */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: "24px", textAlign: "center" }}>How Does animation and multimedia Works?</h2>
          <p style={{ color: "#a0b8e0", lineHeight: 1.8, fontSize: "0.96rem", marginBottom: "28px" }}>
            We are completely aware that the dissertation or manuscript comes with a very tight deadline, and our team ensures to deliver the work on time along with the detailed report. The process is simple. After the order is confirmed, we allocate the special team to scrutinize the work regarding necessary availability requirements that would be essential to complete the work. Once the process is done, in case there are any queries, we ensure to ask during the initial stage of your work and send you the outline proposed manuscript analysis plan. Once the research analysis plan is approved, we will dispatch the work in the draft, and update you on the progress of your work.
          </p>
        </div>
      </section>

      {/* Features */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px" }}>Multimedia &amp; Animation Services features</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "12px" }} className="two-col-grid">
          {[
            "We will provide complete executable/deliverable files",
            "Package will include screen shots",
            "Project database will also be included",
            "Package will include the supporting tools",
            "Package will include documentation",
            "Package will include the Base paper and Reference paper",
            "Package will include Read Me File which is the project execution instructions",
            "Package will include Video File which explains the project implementation procedure",
          ].map((item) => (
            <div key={item} style={{ display: "flex", gap: "10px", background: "#f5f6fa", border: "1px solid #dde2ef", borderRadius: "8px", padding: "14px" }}>
              <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>✓</span>
              <span style={{ fontSize: "0.87rem", color: "#444", lineHeight: 1.6 }}>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Guaranteed Quality */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "24px" }}>Guaranteed quality</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "22px" }} className="three-col-grid">
            {[
              { title: "Mechanical Engineering Service", desc: "Covers machine design, consumer product design, finite element analysis, 3D product animation, plant design, piping, CAD conversion, tooling, and reverse engineering." },
              { title: "Architectural Design Service", desc: "Includes drafting, detailing, 3D animation, 3D rendering, and 3D furniture modelling with landscape design capabilities." },
              { title: "Civil Engineering", desc: "Provides MEP design, drafting, paper-to-CAD conversion, HVAC services, metric mapping, photogrammetric services, and terrain modelling." },
              { title: "Structural engineering", desc: "Offers finite element modelling, analysis, peer review, custom design, retrofitting, and high-rise structure design." },
              { title: "Movies, features, digital promos, online flash application", desc: "Provides 3D character animation, 2D animation, design services, and story script development for films, features and digital promotions." },
            ].map((item) => (
              <div key={item.title} style={{ background: "#fff", border: "1px solid #c5d5f0", borderRadius: "12px", padding: "22px" }}>
                <div style={{ fontWeight: 700, color: "#1a2a6c", marginBottom: "8px", fontSize: "0.95rem" }}>{item.title}</div>
                <div style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
          <style>{`@media(max-width:768px){.three-col-grid{grid-template-columns:1fr!important;}}`}</style>
        </div>
      </section>

      {/* Deliverables 2 */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our deliverables while you order for animation &amp; multimedia Service</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          We deliver comprehensive animation and multimedia packages including all source files, rendered outputs, documentation, and revision files as agreed upon in the project brief.
        </p>
      </section>

      {/* Exclusive */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Multimedia and animation Service is Exclusive</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            As we do not just provide animation, but the rather clear explanation and justification for every design and creative choice made in the project.
          </p>
        </div>
      </section>

      {/* Why Choose */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: "20px", textAlign: "center" }}>Why Choose Tutors India: Our Service features</h2>
          <p style={{ color: "#a0b8e0", lineHeight: 1.8, textAlign: "center", marginBottom: "28px", fontSize: "0.96rem" }}>
            Qualified researchers, research methodology expertise, well experienced animators, developers, designers capable of handling various software and many more, only peer-reviewed articles, Tutoring and clarification, Tables and Interpretation with proper formatting for print-ready analysis, plagiarism report, 24/7 support, timely Support, 100% match with the requirement and on time delivery.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "16px" }} className="four-col-grid">
            {[
              { icon: "🎓", title: "Qualified researchers", desc: "Expert animators and designers with advanced degrees." },
              { icon: "🎨", title: "Experienced animators & designers", desc: "Well experienced in 2D, 3D, CAD and multimedia platforms." },
              { icon: "🔬", title: "Research methodology expertise", desc: "Comprehensive knowledge of engineering and design methods." },
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
              We are aware of the consequences of plagiarism. Hence, topic selection is completely plagiarism Free. Our work is scanned against online sources in a similar way like WriteCheck or Turnitin. We wanted to ensure that our clients i.e., researchers and students are not finding any issues with regards to plagiarism and so we issue plagiarism-free certificate*. Our streamlined and high-quality research writing process ensures your dissertation is not just copy-pasted, but written only after brainstorming sessions with our team of professional researchers.
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
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Your Big Data Analytics service is carried out by your choice of specialized expertise</h2>
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

      {/* Track CRM */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Track Your Report through our customized CRM</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          Track the progress of your animation and multimedia project at any time through our customized CRM portal. Login credentials are provided upon order confirmation.
        </p>
      </section>

      {/* CTA */}
      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Order Now</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>Reply in 30 Minutes · 2D &amp; 3D Animation · CAD Design · Architectural Rendering · Unlimited Revisions</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
