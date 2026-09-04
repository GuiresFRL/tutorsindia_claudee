import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "Graphic design dissertation writing services",
  description: "Illustration and Redrawing Service for your Academic Career. A clear illustration of technical or scientific drawing can illustrate an in-depth concept easily.",
  keywords: "Dissertation subjects graphic design,Graphic design thesis",
  alternates: { canonical: "https://www.tutorsindia.com/our-services/development/graphic-design-services/" },
};

const faqs = [
  {
    q: "Can you work on a few designs free so that we can decide whether we want to hire or not?",
    a: "We uploaded some of the sample illustration design and redrawing task so it is an enough to judge our work. Still, if you are looking free design work. Feel free to talk to us.",
  },
  {
    q: "Can I talk to my illustrator/designer directly?",
    a: "Yes, you can talk to our illustrator/ designer directly through Skype or walk-in to our contact UK or the US official address.",
  },
  {
    q: "How long will it take to complete my illustrations and redrawing work?",
    a: "It purely depends upon the requirement so we set time limit after talking with the artist, art directors, designer, and/or clients. On average, we submit the illustration and redrawing project within 4 to 6 weeks. Creating custom artwork is a time-consuming and complicated process.",
  },
  {
    q: "Why do I hire a Tutors India graphic designer?",
    a: "At tutors India, we have an incredible team of graphic designer who has an in-depth knowledge of the graphic design and the experience.",
  },
  {
    q: "What format will I get my work back?",
    a: "All of your illustration, redrawing and artwork are supplied in the form of high res vector format (.PDF or .EPS) so no way lost your quality when the work is enlarged or diminished.",
  },
  {
    q: "Any more graphic design questions?",
    a: "If you have, any more graphic design questions/want a quote, please ask our experts or contact us.",
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
  {
    quote: "Tutors India designed a logo for my private psychiatry business. From beginning to end, they were professional, timely, and a pleasure to work with. They created a fantastic logo that I am extremely pleased with. I am happy to display it on my business cards, stationery, mouse pads, and coasters, as well as on the sign outside my medical practise. I would strongly advise you to choose Tutors India to design your professional logo.",
    author: "Ava",
  },
  {
    quote: "I have been working with Tutors India on several graphic designing projects. Their expertise and professionalism were evident throughout the development cycle, and I was very pleased with the final product. I have already completed three projects with Tutors India and am personally delighted with their services. They have shown enormous skill and vast domain knowledge that are reliable and trustworthy. I would recommend Tutors India to anyone looking for quality graphic designing services, delivered in a professional manner.",
    author: "Tarini",
  },
];

export default function GraphicDesignServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Services", url: "/our-services/" }, { name: "Development", url: "/our-services/development/" }, { name: "Graphic Design Services" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
              <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}
              <Link href="/our-services/development/" style={{ color: "#a0b8e0" }}>Development</Link>{" / "}
              <span style={{ color: "#fff" }}>Graphic Design Services</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.4rem,3vw,2rem)", lineHeight: 1.3, marginBottom: "8px" }}>
              graphic design services
            </h1>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.1rem,2vw,1.4rem)", lineHeight: 1.3, marginBottom: "16px", color: "#f9c74f", fontWeight: 700 }}>
              Illustration and Redrawing Service
            </h2>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Are you frustrated with current illustration works? Are your illustrations and drawing not up to your publication expectations and planning to outsource them to a trustworthy professional team? You have come to the right destination. Tutors India offers complete assistance for your thesis submission with full detailed attention at an affordable price.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "20px" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.8 }}>Photoshop · CorelDraw<br />Adobe Illustrator<br />Reply in 30 Minutes</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      {/* Right Place */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Then You&apos;ve Certainly Reached the Right place</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          Our team is equipped with experienced artists and designers to take care of your requirements with perfection.
        </p>
      </section>

      {/* For Students */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our video and animation design Services are exclusively for students pursuing Mechanical engineering, architectural design service, civil engineering, structural engineering, electrical engineering and film production and animation.</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            We offer mechanical engineering, architectural design service, civil engineering, structural engineering, electrical engineering and film production and animation illustration and redrawing services tailored to your academic requirements.
          </p>
        </div>
      </section>

      {/* Tutors India Difference */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Tutors India Difference in Illustration and redrawing services</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          With your busy schedule in completing your thesis work, it would be frustrating to complete your illustration work without any prior knowledge. Tutors India offers full assistance with redrawing and illustration work for all your scientific, medical, engineering subjects. Our team is edged with experienced illustrators and artists who can evaluate and assist your scientific and artistic requirements. Our subject matter experts are focused on precision and accuracy in their redrawing and illustration work.
        </p>
      </section>

      {/* Services Include */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px" }}>Our Illustration and redrawing services include</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }} className="three-col-grid">
            {[
              { icon: "💻", title: "Digital redrawing and Illustration work", desc: "High-quality digital redrawing and illustration using the latest software tools." },
              { icon: "📖", title: "Book redrawing and Illustration work", desc: "Professional book illustrations and redrawn figures for academic publications." },
              { icon: "🏥", title: "Medical redrawing and Illustration work", desc: "Precise and accurate medical illustrations and redrawn diagrams for research papers." },
            ].map((item) => (
              <div key={item.title} style={{ background: "#fff", border: "1px solid #c5d5f0", borderRadius: "12px", padding: "24px" }}>
                <div style={{ fontSize: "2rem", marginBottom: "10px" }}>{item.icon}</div>
                <div style={{ fontWeight: 700, color: "#1a2a6c", marginBottom: "8px", fontSize: "0.95rem" }}>{item.title}</div>
                <div style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
          <style>{`@media(max-width:768px){.three-col-grid{grid-template-columns:1fr!important;}}`}</style>
        </div>
      </section>

      {/* Illustration for Academic Career */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Illustration and redrawing for your Academic Career</h2>
        <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "16px" }}>
          The clarity and quality of an illustration or redrawing artwork define the success of your paper submission. A clear illustration of technical or scientific drawing can illustrate an in-depth concept easily. We apply the latest illustration software like Photoshop, CorelDraw and Adobe Illustrator for custom hand-drawn illustration work, digital drawings and animation work.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {["Photoshop","CorelDraw","Adobe Illustrator","PDF","EPS","High-res Vector Format"].map((s) => (
            <span key={s} style={{ background: "#1a2a6c", color: "#f9c74f", borderRadius: "6px", padding: "5px 12px", fontSize: "0.82rem", fontWeight: 700 }}>{s}</span>
          ))}
        </div>
      </section>

      {/* Simply Easy */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Illustration &amp; Redrawing for dissertation, manuscript &amp; textbook is simply easy &amp; Straightforward</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            Our illustration and redrawing for dissertation guarantees that your works confidential, and so you do not have to worry about it. Just send us your requirement along with the deadline and see the results that are far justified and mark the success of your career.
          </p>
        </div>
      </section>

      {/* Service Tiers */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>What Services do we offer under illustration &amp; redrwaing service?</h2>
        <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "24px", fontWeight: 600 }}>Customized costs based on the requirement</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "22px" }} className="three-col-grid">
          {[
            { tier: "Basic", desc: "Developed based on the relevant sources, a reasonable attempt at finding an area that warrant research & evidence of an attempt to provide critical evaluation but mainly descriptive." },
            { tier: "Advanced", desc: "Wide range of sources, a clear identification of research gap in the literature along with aim and research questions." },
            { tier: "Premium", desc: "Refers to a wide range of seminal research with throughout engagement using latest resources. A solid gap would be identified based on the current literature & justified thoroughly & Excellent critical analysis would be shown (upgradable)." },
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
      </section>

      {/* Subject Expertise */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px" }}>Specialized Subject Matter Expertise across the globe</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "16px" }}>
            We offer mechanical engineering, architectural design service, civil engineering, structural engineering, electrical engineering and film production and animation.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {["Arts & Humanities","Biological Sciences","Business & Management Studies","Marketing & Communication","Engineering & Technology","Natural Sciences & Mathematics","Biological & Life science","Economics & Administration","Humanities & Social Science","Law","Medicine & Health","Education & Training","Journalism & Media","Agriculture & Forestry","Computer Science & IT","Hospitality, Leisure & Sports"].map((s) => (
              <span key={s} style={{ background: "#fff", border: "1px solid #c5d5f0", borderRadius: "20px", padding: "6px 16px", fontSize: "0.83rem", color: "#1a2a6c", fontWeight: 600 }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our deliverables while you order Graphics &amp; illustration Help</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          Graphics &amp; illustration from Tutors India is simply easy and straightforward. You will get the reply within 30 minutes which would enable to place your order quickly without any delay in submissions.
        </p>
      </section>

      {/* How Does it Work */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: "24px", textAlign: "center" }}>How Does animation and multimedia Works?</h2>
          <p style={{ color: "#a0b8e0", lineHeight: 1.8, fontSize: "0.96rem" }}>
            We are completely aware that the dissertation or manuscript comes with a very tight deadline, and our team ensures to deliver the work on time along with the detailed report. The process is simple. After the order is confirmed, we allocate the special team to scrutinize the work regarding necessary availability requirements that would be essential to complete the work. Once the process is done, in case there are any queries, we ensure to ask during the initial stage of your work and send you the outline proposed manuscript analysis plan. Once the research analysis plan is approved, we will dispatch the work in the draft, and update you on the progress of your work. Our exclusive coordinators would get in touch with you to clarify any queries. For primary data collection, you need to pay an additional chart to offer this service. This would enable to show the proof of evidence of data collection to your university. We will paste the excel data sheet in Appendix, and this would be shared. You can also pay in installments and work will be started as soon as we receive the payments we deliver your work as per the schedule fixed and agreed or even before the schedule.
          </p>
        </div>
      </section>

      {/* Illustration Service Flow */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "28px" }}>Illustration Service flow</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "18px" }} className="four-col-grid">
          {[
            { step: "01", title: "Analyse the requirement", desc: "We come up with unique proposal based on the requirements after Brain storming sessions and our own research to choose the best creative direction." },
            { step: "02", title: "Pencil drawing", desc: "The next step would be development of rough character sketch, background designs using paint, pencil or ink or 2D, 3D or digital format." },
            { step: "03", title: "Client approval", desc: "We deliver the drafts for your approval." },
            { step: "04", title: "Final Illustration", desc: "Based on the final go, will share you the final illustration work." },
          ].map((s) => (
            <div key={s.step} style={{ background: "#f5f6fa", border: "1px solid #dde2ef", borderRadius: "12px", padding: "22px" }}>
              <div style={{ fontSize: "2rem", fontWeight: 800, color: "#e87722", marginBottom: "8px" }}>{s.step}</div>
              <div style={{ fontWeight: 700, color: "#1a2a6c", marginBottom: "8px", fontSize: "0.95rem" }}>{s.title}</div>
              <div style={{ fontSize: "0.83rem", color: "#555", lineHeight: 1.7 }}>{s.desc}</div>
            </div>
          ))}
        </div>
        <style>{`@media(max-width:768px){.four-col-grid{grid-template-columns:1fr 1fr!important;}}`}</style>
      </section>

      {/* Guaranteed Quality */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Guaranteed quality</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            We guarantee for full satisfaction with our animation and multimedia services.
          </p>
        </div>
      </section>

      {/* Deliverables 2 */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our deliverables while you order for animation &amp; multimedia Service</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          Tutoring services from Tutors India is simply easy and straightforward. You just need to buy the required service and that&apos;s it, we offer Photorealistic representation of projects, attention to every minute detail including colouring, landscaping and others. Offer complete visualization of aesthetics.
        </p>
      </section>

      {/* Exclusive */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Multimedia and animation Service is Exclusive</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            as we do not just provide analysis, but the rather clear explanation and justification for the choice.
          </p>
        </div>
      </section>

      {/* Why Choose */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: "20px", textAlign: "center" }}>Why Choose Tutors India: Our Service features</h2>
          <p style={{ color: "#a0b8e0", lineHeight: 1.8, textAlign: "center", marginBottom: "28px", fontSize: "0.96rem" }}>
            Qualified researchers, research methodology expertise, well experienced coders, developers, programmers capable of handling various software and many more, only peer-reviewed articles, Tutoring and clarification, Tables and Interpretation with proper formatting for print-ready analysis, plagiarism report, 24/7 support, timely Support, 100% match with the requirement and on time delivery.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "16px" }} className="four-col-grid">
            {[
              { icon: "🎓", title: "Qualified researchers", desc: "Expert illustrators and designers with advanced degrees." },
              { icon: "🎨", title: "Experienced artists & designers", desc: "Well experienced in Photoshop, CorelDraw, Adobe Illustrator." },
              { icon: "🔬", title: "Research methodology expertise", desc: "Precision and accuracy in all scientific and technical illustrations." },
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
              We offer 100% confidentiality of client&apos;s personal details, payment details, project works, and copyrights of research works. We ensure following for the conditionality, security &amp; privacy: 1) All your projects are given unique reference codes 2) Documents are accessed only writers who signed NDA with Tutors India 3) Your financial information is protected b 128-bit secure socket layer (SSL) encryption.
            </p>
          </div>
          <div style={{ background: "#f5f6fa", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px" }}>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.15rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Fully Referenced</h2>
            <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.96rem" }}>
              Our dissertation work is fully referenced with latest articles and textbooks. We refer only peer-reviewed sources such as scholarly articles and textbook to select the topic. We refer database including Web of Science, ProQuest, Google Scholar, Business Source Complete, and latest newspapers articles such as Economic Times, Forbes, The Wall Street, The Economics to identify the industrial problem.
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

      {/* CTA */}
      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Order Now</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>Reply in 30 Minutes · Photoshop · CorelDraw · Adobe Illustrator · Unlimited Revisions</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
