import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disseration On Software Development -Tutors India",
  description: "Our software development Disserttion assignments are custom written by Professional expert software developers",
  keywords: "Software development, computer programming help, Computer dissertation help uk, computer thesis writing uk, computer science assignment writing, computer science dissertation, coding and algorithm, big data analytics, online tutoring services, Elearning content development, Tool development, Questionnaire development, Questionnaire survey help, web solutions, Animation and graphic design services",
  alternates: { canonical: "https://www.tutorsindia.com/our-services/development/" },
};

const services = [
  {
    title: "Coding and Algorithm",
    href: "/our-services/development/coding-and-algorithm/",
    desc: "Programming is difficult as we need to tell computer an unambiguous instruction thereby there is no room for subjective interpretation.",
    icon: "💻",
  },
  {
    title: "Software Programming",
    href: "/our-services/development/programming/",
    desc: "Programming is difficult as we need to tell computer an unambiguous instruction thereby there is no room for subjective interpretation.",
    icon: "⚙️",
  },
  {
    title: "Software Development",
    href: "/our-services/development/software-development/",
    desc: "Programming is difficult as we need to tell computer and unambiguous instruction thereby there is no room for subjective interpretation.",
    icon: "🛠️",
  },
  {
    title: "Big Data Analytics",
    href: "/our-services/development/big-data-analytics/",
    desc: "At Tutors India, we apply various models including Predictive Analytics (Time series methods (e.g. moving average, exponential smoothing, autoregressive models), Linear, non-linear and Logistic regression.",
    icon: "📊",
  },
  {
    title: "Animation Services",
    href: "/our-services/development/animation-services/",
    desc: "Our team have capability to deliver 3D Modelling design (3D animation, 3D Flythrough, 3D modelling), architectural design (Commercial, construction, design & drafting, interior design, landscape).",
    icon: "🎬",
  },
  {
    title: "Graphic Design Services",
    href: "/our-services/development/graphic-design-services/",
    desc: "With your busy schedule in completing your thesis work, it would be frustrating to complete your illustration work without any prior knowledge.",
    icon: "🎨",
  },
  {
    title: "Web Solutions",
    href: "/our-services/development/web-solutions/",
    desc: "Recently students have shown great interest in pursuing web design courses as part of their career. Due to increase in penetration of Internet, today more and more companies are going online.",
    icon: "🌐",
  },
  {
    title: "Online Tutoring Services",
    href: "/our-services/development/online-tutoring-services/",
    desc: "Tutoring services is to serve as centre of learning assistance to students in order to support for their academic courses.",
    icon: "🎓",
  },
  {
    title: "e-Learning Content Development",
    href: "/our-services/development/e-learning-content-development/",
    desc: "e-Learning has been defined as the delivery of technology supported learning and teaching with more of an interactive process between the teach and students based on sound pedagogical practices.",
    icon: "📱",
  },
  {
    title: "Tool Development",
    href: "/our-services/development/tool-development/",
    desc: "Developing primary and secondary data tools form an important step in progressing your dissertation research topic. However, the choice of an instrument for data collection is an important aspect to consider during the research design.",
    icon: "🔧",
  },
];

const teamRoles = [
  { title: "Frontend engineers", desc: "Responsible for developing the \"visible\" part of the project" },
  { title: "Backend engineers", desc: "Focus on developing the inner logic and background components" },
  { title: "QA engineers", desc: "In charge of quality of entire development lifecycle" },
  { title: "UX/UI designers", desc: "Ensure user experience is intuitive, simple, and engaging" },
  { title: "DevOps engineers", desc: "Coordinate development, operations, and testing efforts" },
  { title: "Business analysts", desc: "Bridge between IT team and business" },
  { title: "Project managers", desc: "Lead development team across all phases" },
];

const features = [
  { icon: "📋", title: "Plagiarism Free Work", desc: "Plagiarism-free work less than 5% or 0%. Work scanned via WriteCheck or Turnitin; plagiarism-free certificate issued." },
  { icon: "🔑", title: "Uniqueness", desc: "All our customized work is unique. Detailed plagiarism scan report provided to confirm uniqueness." },
  { icon: "📚", title: "Fully Referenced", desc: "Our work is fully referenced with latest articles and textbooks. Only peer-reviewed sources used." },
  { icon: "✅", title: "100% Requirement Match", desc: "Work tailored to your exact specifications and requirements." },
  { icon: "⏰", title: "On Time Delivery", desc: "Minor changes within 24 hours; significant changes within 48 hours. Delivered on or before agreed deadline." },
  { icon: "📄", title: "Word Count Committed", desc: "Exact word count compliance. Word count does not include references and bibliography." },
  { icon: "🏆", title: "Quality Assurance", desc: "Stringent quality assurance at every stage. Three-level quality check: Technical QC, Editor QC, requirement check." },
  { icon: "♾️", title: "Unlimited Revisions", desc: "Unlimited revisions free of cost until you are completely satisfied." },
  { icon: "💰", title: "Affordable", desc: "Competitive pricing with no compromise on quality." },
  { icon: "🎓", title: "Experienced Writers", desc: "Writers with a minimum degree of Master's with research experience from international and top-ranked universities." },
];

const orderSteps = [
  { num: "01", title: "Identify your writer", desc: "Fill out a comprehensive form with all your requirements." },
  { num: "02", title: "Receive reference number", desc: "You receive a unique reference number for your order." },
  { num: "03", title: "Receive acknowledgment", desc: "Acknowledgment received upon payment confirmation." },
  { num: "04", title: "Check requirements", desc: "Our team checks and verifies all your requirements." },
  { num: "05", title: "Researcher makes changes", desc: "Expert assigned to your project begins work." },
  { num: "06", title: "Edit & proofreading", desc: "Thorough editing and proofreading of completed work." },
  { num: "07", title: "Plagiarism assurance check", desc: "Work scanned and plagiarism-free certificate issued." },
  { num: "08", title: "Free appendices/resources", desc: "Free appendices and resources provided via zip file through cloud storage." },
  { num: "09", title: "Download order", desc: "Download your completed order through our CRM." },
  { num: "10", title: "Unlimited revisions", desc: "Request amendments as needed. Unlimited revisions available." },
];

export default function DevelopmentPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Services", url: "/our-services/" }, { name: "Development" , url: "https://www.tutorsindia.com/our-services/development/" }]} />
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
              <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}
              <span style={{ color: "#fff" }}>Development</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.4rem,3vw,2rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              Do you want to develop, designing, engineering, deploying, supporting, and evolving various software types?
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Then You have reached the right place. We make difference in terms of deadline and quality. Tutors India is the leading technology solutions company that architects and engineers scalable and high-performing software solutions.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "20px" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Get A Free Quote</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/samples/publication-research.jpg" alt="Development Services" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>2000+ Experts<br />US &amp; UK Developers<br />10 Service Areas</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      {/* Right Place */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Then You have reached the right place</h2>
        <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px" }}>
          We make difference in terms of deadline and quality. We serve mid and large organizations, universities and software product companies across multiple industries.
        </p>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          Tutors India is committed to engineering excellence backed by software-driven thinking. Our skilled and talented professional UK developers deliver solutions that meet the highest academic and industry standards.
        </p>
      </section>

      {/* Development Services Grid */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "32px", textAlign: "center" }}>Development Service</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: "18px" }} className="five-col-grid">
            {services.map((s) => (
              <Link key={s.title} href={s.href} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "22px 18px", textDecoration: "none", display: "block", transition: "box-shadow 0.2s" }}>
                <div style={{ fontSize: "2rem", marginBottom: "10px" }}>{s.icon}</div>
                <div style={{ fontWeight: 700, color: "#1a2a6c", fontSize: "0.92rem", marginBottom: "8px" }}>{s.title}</div>
                <div style={{ fontSize: "0.78rem", color: "#666", lineHeight: 1.6 }}>{s.desc}</div>
                <div style={{ marginTop: "12px", color: "#e87722", fontWeight: 700, fontSize: "0.82rem" }}>Learn More →</div>
              </Link>
            ))}
          </div>
          <style>{`@media(max-width:1024px){.five-col-grid{grid-template-columns:repeat(3,1fr)!important;}}@media(max-width:640px){.five-col-grid{grid-template-columns:1fr 1fr!important;}}`}</style>
        </div>
      </section>

      {/* Serve Organizations */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>We serve mid and large organizations, universities and software product companies across multiple industries</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          Development service at Tutors India helps in designing, prototyping, development and Implementation. Migration to a new analytical system, Tutors India supports and produce an innovative big data solution. Tutors India Offers Coding and Algorithm Development for IEEE Projects.
        </p>
      </section>

      {/* Why Tutors India */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "24px" }}>Why Tutors India for Development Support?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "18px" }} className="four-col-grid">
            {[
              { icon: "🏗️", title: "Engineering Excellence", desc: "Committed to engineering excellence backed by software-driven thinking." },
              { icon: "🪶", title: "Lean Approach", desc: "Minimizing the wastage of everything possible, including money, time, and infrastructure." },
              { icon: "📉", title: "Low Product and Technical Debt", desc: "Focus on modern practices such as TDD, BDD, DevOps to minimise technical debt." },
              { icon: "🤖", title: "Smart Applications", desc: "Building products that leverage AI-ML, IoT, cloud-native philosophy." },
            ].map((f) => (
              <div key={f.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "22px", textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: "10px" }}>{f.icon}</div>
                <div style={{ fontWeight: 700, color: "#1a2a6c", marginBottom: "8px", fontSize: "0.92rem" }}>{f.title}</div>
                <div style={{ fontSize: "0.82rem", color: "#555", lineHeight: 1.6 }}>{f.desc}</div>
              </div>
            ))}
          </div>
          <style>{`@media(max-width:768px){.four-col-grid{grid-template-columns:1fr 1fr!important;}}`}</style>
        </div>
      </section>

      {/* Design & Implementation */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Development service at tutors India helps in designing, prototyping, development and Implementation</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          Migration to a new analytical system, Tutors India supports and produce an innovative big data solution.
        </p>
      </section>

      {/* IEEE Projects */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Tutors India Offers Coding and Algorithm Development for IEEE Projects</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            A Trusted Development Service. Our skilled and talented professional UK developers work across all IEEE project types. We deliver complete executable code, documentation, and project materials to the highest academic standards.
          </p>
        </div>
      </section>

      {/* Dedicated Project Team */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: "32px", textAlign: "center" }}>Our dedicated project team structure</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "18px" }} className="four-col-grid">
            {teamRoles.map((r) => (
              <div key={r.title} style={{ background: "rgba(255,255,255,0.07)", borderRadius: "10px", padding: "22px" }}>
                <div style={{ fontWeight: 700, fontSize: "0.92rem", marginBottom: "8px", color: "#f9c74f" }}>{r.title}</div>
                <div style={{ fontSize: "0.82rem", color: "#a0b8e0", lineHeight: 1.6 }}>{r.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "24px" }}>Our Development Service Features</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: "16px" }} className="five-col-grid">
          {features.map((f) => (
            <div key={f.title} style={{ background: "#f5f6fa", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px", textAlign: "center" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{f.icon}</div>
              <div style={{ fontWeight: 700, color: "#1a2a6c", marginBottom: "6px", fontSize: "0.85rem" }}>{f.title}</div>
              <div style={{ fontSize: "0.76rem", color: "#555", lineHeight: 1.5 }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Subject Matter Expertise */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Your Dissertation is written by your choice of Subject Matter Expertise</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "20px" }}>
            We have a team of 2000+ expertise across the subjects &amp; countries (including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine).
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {["Arts & Humanities","Biological Sciences","Business & Management Studies","Marketing & Communication","Engineering & Technology","Natural Sciences & Mathematics","Economics & Administration","Humanities & Social Science","Law","Medicine & Health","Education & Training","Journalism & Media","Agriculture & Forestry","Computer Science & IT","Hospitality, Leisure & Sports"].map((s) => (
              <span key={s} style={{ background: "#fff", border: "1px solid #c5d5f0", borderRadius: "20px", padding: "6px 16px", fontSize: "0.83rem", color: "#1a2a6c", fontWeight: 600 }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Free Additions */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "24px" }}>As well as your order, you will also get the following</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
          {[
            { title: "Authenticated References", desc: "All references fully authenticated and sourced from peer-reviewed databases." },
            { title: "Plagiarism Free", desc: "Work scanned via WriteCheck or Turnitin. Plagiarism-free certificate issued with every order." },
            { title: "Unlimited Revision Support", desc: "Unlimited revision support with quality check & assurance at no extra cost." },
            { title: "Free Appendices / Resources", desc: "Free appendices and resources shared via zip file through cloud storage." },
            { title: "24/7 Assistance", desc: "Round-the-clock support via email and CRM. Email responses within 30 minutes during working hours." },
            { title: "Additional Reference Materials", desc: "Additional reference materials included to support your work." },
          ].map((item) => (
            <div key={item.title} style={{ background: "#f5f6fa", border: "1px solid #c5d5f0", borderRadius: "10px", padding: "20px" }}>
              <div style={{ fontWeight: 700, color: "#1a2a6c", marginBottom: "6px", fontSize: "0.92rem" }}>✦ {item.title}</div>
              <div style={{ fontSize: "0.82rem", color: "#555", lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          ))}
        </div>
        <style>{`@media(max-width:768px){.three-col-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* Order Process */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: "32px", textAlign: "center" }}>Order Process</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: "16px" }} className="five-col-grid">
            {orderSteps.map((s) => (
              <div key={s.num} style={{ background: "rgba(255,255,255,0.07)", borderRadius: "10px", padding: "18px", textAlign: "center" }}>
                <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#f9c74f", marginBottom: "8px" }}>{s.num}</div>
                <div style={{ fontWeight: 700, fontSize: "0.85rem", marginBottom: "6px" }}>{s.title}</div>
                <div style={{ fontSize: "0.76rem", color: "#a0b8e0", lineHeight: 1.5 }}>{s.desc}</div>
              </div>
            ))}
          </div>
          <style>{`@media(max-width:768px){.five-col-grid{grid-template-columns:1fr 1fr!important;}}`}</style>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get A Free Quote Today</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>Invest in your Career · US &amp; UK Developers · Unlimited Revisions · Reply in 30 Minutes</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
