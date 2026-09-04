import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "Web Solution services for Master’s & PhD Academic Dissertation",
  description: "Web Solutions for Masters & PhD Academic Dissertations. We offer a CMS-based web application. SEO/SEM Digital Marketing and Social Media Impact Analysis",
  keywords: "Looking for EAI/Web services ideas for a thesis?,Web Solution services for Master’s dissertation",
  alternates: { canonical: "https://www.tutorsindia.com/our-services/development/web-solutions/" },
};

const faqs = [
  {
    q: "Why should I hire Tutors India for web solutions?",
    a: "At tutors India, we offer the astounding web solutions for all size companies including Digital marketing, CRM based web application, SEO/SEM with help of ultimate team such as web Developers, web designers, digital marketers and content developers.",
  },
  {
    q: "Who will provide the web solution for my company?",
    a: "Tutors India has incorporated with the experienced and qualified developers, designers, creative content developer and digital marketers from the US, UK and India.",
  },
  {
    q: "What are the technologies used at Tutors India for website development?",
    a: "Some of the technologies are listed here below Animation: Flash, ActionScript, AJAX, jQuery UI, JavaScript, maya CMS: WordPress, Bitrix,, Joomla, Drupal, Amiro, AxCMS, Sitefinity. Programming: Java, PHP, ASP, C#, ASP.NET, ASP.NET+MVC, Python, Django, Ruby. Databases: MS SQL, MySQL, Oracle, SQLite, PostgreSQL.",
  },
  {
    q: "Do you offer digital marketing /website promotion?",
    a: "Yes, we do, we offer the complete range of website promotion from in-depth market research to search engine optimization.",
  },
  {
    q: "How many revisions to you provide for my web design?",
    a: "In the pricing structure, it explained clearly that the number of revisions has done based on the type of pricing plan you taken.",
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
  { quote: "I'd want to convey our gratitude for your assistance in the creation of our web application. The Tutors India squad performed admirably. I am pleased with the solution provided to us as well as the project's communication flow. I would suggest Tutors India and hope to collaborate with them on future projects.", author: "Advik" },
  { quote: "Tutors India provided me with excellent service, and I am really pleased. They were on time, provided fair pricing, were professional and courteous in their dealings, and delivered products far ahead of schedule. For my stuff, I have a good e-commerce site. Because of Tutors India, my revenue has increased, and I would surely utilise your services again.", author: "Emma" },
  { quote: "I am happy to seek help from Tutors India for assisting me in software development. Their team of experts worked closely with me throughout the process, staying on task and on budget. I also appreciate their quick and courteous responses. I highly recommend their service.", author: "Mason" },
  { quote: "I didn't expect this level of quality. The team grasped exactly what I required and presented work that felt genuinely professional. My confidence shifted from stressed to unstoppable.", author: "Amelia Brooks", location: "UK" },
  { quote: "I was stuck, frustrated, and running out of time. Tutors India stepped in at the perfect moment and turned everything around faster than I imagined. Worth every bit.", author: "Oliver Bennett", location: "UK" },
  { quote: "The attention to detail was incredible. It didn't feel like working with a service provider — it felt like I had an expert academic partner guiding me throughout.", author: "Layla Al Mansoori" },
  { quote: "The team handled everything professionally from start to finish. Timely updates, quick responses, and excellent academic quality — exactly what students need during stressful deadlines.", author: "Zain Al Hashmi", location: "UAE" },
  { quote: "I submitted my work with complete confidence for the first time ever. The quality, formatting, and clarity were all beyond what I hoped for.", author: "Charlotte Reed", location: "UK" },
];

export default function WebSolutionsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Services", url: "/our-services/" }, { name: "Development", url: "/our-services/development/" }, { name: "Web Solutions" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
              <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}
              <Link href="/our-services/development/" style={{ color: "#a0b8e0" }}>Development</Link>{" / "}
              <span style={{ color: "#fff" }}>Web Solutions</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.4rem,3vw,2rem)", lineHeight: 1.3, marginBottom: "8px" }}>
              Web solutions
            </h1>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.1rem,2vw,1.4rem)", lineHeight: 1.3, marginBottom: "16px", color: "#f9c74f", fontWeight: 700 }}>
              Web Solutions for Master&apos;s &amp; PhD Academic Dissertation &amp; Coursework Writing
            </h2>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Are you looking for web solutions services that includes web design, SEO / SEM, digital marketing or software programming or web based application using CMS (Drupal etc)? Then You&apos;ve come to the right destination. Tutors India offers complete assistance for your thesis submission with full detailed attention at an affordable price.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "20px" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.8 }}>SEO/SEM · CMS · Drupal<br />PHP · Python · Django<br />Reply in 30 Minutes</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      {/* Right Place */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Then You&apos;ve Certainly Reached the Right place</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          Our writers have industry experience, and educational degrees from international and top-ranked universities from India, the US, and the UK.
        </p>
      </section>

      {/* Qualified Researchers */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>All your Web Solutions are done by qualified and experienced researchers from the US &amp; UK</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            Our writers have industry experience, and educational degrees from international and top-ranked universities from India, the US, and the UK.
          </p>
        </div>
      </section>

      {/* Tutors India Difference */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Tutors India Difference in Web Solutions</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          Recently students have shown great interest in pursuing web design courses as part of their career. Due to increase in penetration of Internet, today more and more companies are going online, thereby there is a huge need for web designers, web application developers and digital marketers. Students those who pursue their web designing courses or courses in digital marketing or application development need to undergo dissertation on web design or other relevant areas. However, such process would be challenging to most of the students since it is an amalgamation of scientific experiment and theoretical knowledge.
        </p>
      </section>

      {/* Unique & Innovative */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Unique &amp; Innovative Web designs based on the recent trends from Tutors India Web Developers Team</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            Tutors India team is equipped with developers, designers and marketers who can help you to design a user interface, information, page navigation, imagery, fonts, layouts and templates. We also help you to identify an appropriate topic on web design, SEO / SEM, digital marketing or software programming or web based application using CMS (Drupal etc),
          </p>
        </div>
      </section>

      {/* Web Solutions for Dissertation */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Web Solutions for Master&apos;s &amp; PhD Academic Dissertation &amp; Coursework Writing</h2>
        <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "16px" }}>
          CMS based Web Application, SEO / SEM, Digital Marketing, Social Media Impact Analysis
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {["CMS based Web Application","SEO / SEM","Digital Marketing","Social Media Impact Analysis","Website Development","Web Application","Website Promotion","Search Engine Optimization"].map((s) => (
            <span key={s} style={{ background: "#1a2a6c", color: "#f9c74f", borderRadius: "6px", padding: "5px 12px", fontSize: "0.82rem", fontWeight: 700 }}>{s}</span>
          ))}
        </div>
      </section>

      {/* Simply Easy */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Web solutions for dissertation, manuscript &amp; textbook is simply easy &amp; Straightforward</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            Our web solutions for dissertation guarantees that your works confidential, and so you do not have to worry about it. Just send us your requirement along with the deadline and see the results that are far justified and mark the success of your career.
          </p>
        </div>
      </section>

      {/* Service Tiers */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>What Services do we offer under web solutions service?</h2>
        <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "24px", fontWeight: 600 }}>Customized costs based on the requirement</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "22px" }} className="three-col-grid">
          {[
            { tier: "Basic", items: ["3 Topics (Topic Selection based on area of interest)", "1000 words"], desc: "Developed based on the relevant sources, a reasonable attempt at finding an area that warrant research & evidence of an attempt to provide critical evaluation but mainly descriptive." },
            { tier: "Advanced", items: ["1 topic","1000 words","Objectives","Literature Review","Research Gap","Expected Contribution","Research Methodology","Data Analysis Guidelines","References Lists","Bibliography (Additional reading)"], desc: "Wide range of sources, a clear identification of research gap in the literature along with aim and research questions." },
            { tier: "Extended", items: ["1 topic","Objectives","Literature Review","Research Gap","Expected Contribution","Research Methodology","Data Analysis Guidelines","References Lists","Bibliography (Additional reading)"], desc: "Refers to a wide range of seminal research with throughout engagement using latest resources. A solid gap would be identified based on the current literature & justified thoroughly & Excellent critical analysis would be shown (upgradable)." },
          ].map((t) => (
            <div key={t.tier} style={{ background: t.tier === "Advanced" ? "#1a2a6c" : "#fff", color: t.tier === "Advanced" ? "#fff" : "#333", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 800, color: t.tier === "Advanced" ? "#f9c74f" : "#e87722", marginBottom: "12px" }}>{t.tier}</div>
              <p style={{ fontSize: "0.85rem", lineHeight: 1.7, color: t.tier === "Advanced" ? "#c5d5f0" : "#555", marginBottom: "12px" }}>{t.desc}</p>
              {t.items.map((item) => (
                <div key={item} style={{ display: "flex", gap: "8px", padding: "4px 0", fontSize: "0.82rem", color: t.tier === "Advanced" ? "#c5d5f0" : "#555", borderBottom: t.tier === "Advanced" ? "1px solid rgba(255,255,255,0.08)" : "1px solid #eef0f7" }}>
                  <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>✓</span>{item}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "28px" }}>
          <Link href="/order-now/" style={{ padding: "13px 36px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "1rem" }}>ORDER NOW</Link>
        </div>
        <style>{`@media(max-width:768px){.three-col-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* Specialized Expertise */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Specialized Subject Matter Expertise across the globe</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "16px" }}>
            Developers, designers, coder, marketers (Digital marketers, SEO / SEM), and content developers
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
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our deliverables while you order web solutions Help</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          Web solutions services from Tutors India is simply easy and straightforward. You will get the reply within 30 minutes which would enable to place your order quickly without any delay in submissions.
        </p>
      </section>

      {/* How Does it Work */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: "24px", textAlign: "center" }}>How Does it work?</h2>
          <p style={{ color: "#a0b8e0", lineHeight: 1.8, fontSize: "0.96rem" }}>
            After the order is confirmed, we allocate the special team to scrutinize the work regarding necessary availability requirements that would be essential to complete the work. Once the process is done, in case there are any queries, we ensure to ask during the initial stage of your work and send you the outline proposed for writing secondary data collection based dissertation. Once the outline along with the chapterization plan is approved, we will dispatch the work in chapters, and update you on the progress of your work. Our exclusive coordinators would get in touch with you to clarify any queries. You can also pay in installments and work will be started as soon as receive the payments. We deliver your work as per the schedule fixed and agreed or even before the schedule.
          </p>
        </div>
      </section>

      {/* Web Solutions Features */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px" }}>Web Solutions Features</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "12px", marginBottom: "24px" }} className="two-col-grid">
          {["Full HTML / CSS Access","Download full Source code","Ultimate design flexibility","FTP access"].map((item) => (
            <div key={item} style={{ display: "flex", gap: "10px", background: "#f5f6fa", border: "1px solid #dde2ef", borderRadius: "8px", padding: "16px" }}>
              <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>✓</span>
              <span style={{ fontSize: "0.96rem", color: "#444", fontWeight: 600 }}>{item}</span>
            </div>
          ))}
        </div>
        <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Technologies Used</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "14px" }} className="four-col-grid">
          {[
            { label: "Animation", items: ["Flash","ActionScript","AJAX","jQuery UI","JavaScript","Maya"] },
            { label: "CMS", items: ["WordPress","Bitrix","Joomla","Drupal","Amiro","AxCMS","Sitefinity"] },
            { label: "Programming", items: ["Java","PHP","ASP","C#","ASP.NET","ASP.NET+MVC","Python","Django","Ruby"] },
            { label: "Databases", items: ["MS SQL","MySQL","Oracle","SQLite","PostgreSQL"] },
          ].map((group) => (
            <div key={group.label} style={{ background: "#f5f6fa", border: "1px solid #dde2ef", borderRadius: "10px", padding: "16px" }}>
              <div style={{ fontWeight: 700, color: "#1a2a6c", marginBottom: "10px", fontSize: "0.94rem" }}>{group.label}</div>
              {group.items.map((item) => (
                <div key={item} style={{ fontSize: "0.8rem", color: "#555", padding: "3px 0", borderBottom: "1px solid #eef0f7" }}>{item}</div>
              ))}
            </div>
          ))}
        </div>
        <style>{`@media(max-width:768px){.two-col-grid{grid-template-columns:1fr!important;}.four-col-grid{grid-template-columns:1fr 1fr!important;}}`}</style>
      </section>

      {/* Guaranteed Quality */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Guaranteed quality</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>We guarantee for full satisfaction with our graphics &amp; illustration services.</p>
        </div>
      </section>

      {/* Deliverables 2 */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our deliverables while you order for web solutions Service for your academic work</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          Tutoring services from Tutors India is simply easy and straightforward. You just need to buy the required service and that&apos;s it, we offer Website Development, Web Application, SEO, SEM, Digital Marketing as part of Academic Dissertation.
        </p>
      </section>

      {/* Exclusive + Topic / QA / Plagiarism / Customer */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Web solutions Service is Exclusive</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "24px" }}>
            as we do not just provide chapter-wise dissertation writing service, but the rather clear explanation and justification for the choice.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "22px" }} className="two-col-grid">
            <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "24px" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "8px" }}>Your web solutions sample</h3>
              <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.7, marginBottom: "12px" }}>Check the sample dissertation research proposal from our expert writers.</p>
              <Link href="/sample-works/" style={{ color: "#e87722", fontWeight: 700, fontSize: "0.85rem" }}>Our Sample Works →</Link>
            </div>
            <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "24px" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "8px" }}>Quality Assurance</h3>
              <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.7, marginBottom: "12px" }}>We ensure quality at every stage and the process.</p>
              <Link href="/guarantees/" style={{ color: "#e87722", fontWeight: 700, fontSize: "0.85rem" }}>Guarantees →</Link>
            </div>
            <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "24px" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "8px" }}>Plagiarism Report</h3>
              <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.7, marginBottom: "12px" }}>We deliver the document after scanning for plagiarism.</p>
              <Link href="/plagiarism-report/" style={{ color: "#e87722", fontWeight: 700, fontSize: "0.85rem" }}>View Report →</Link>
            </div>
            <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "24px" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "8px" }}>Customer Interaction</h3>
              <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.7, marginBottom: "12px" }}>We interact with the customer at every stage in terms of amendments, query and delivery.</p>
              <Link href="/contact-us/" style={{ color: "#e87722", fontWeight: 700, fontSize: "0.85rem" }}>Contact Us →</Link>
            </div>
          </div>
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
              { icon: "🎓", title: "Qualified researchers", desc: "Expert developers with international university degrees." },
              { icon: "💻", title: "Experienced developers", desc: "Well experienced in all major web and CMS platforms." },
              { icon: "📈", title: "Digital marketing expertise", desc: "SEO/SEM, social media and full digital marketing support." },
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
        <style>{`@media(max-width:768px){.three-col-grid{grid-template-columns:1fr!important;}}`}</style>
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
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Your web solution service is carried out by your choice of specialized expertise</h2>
        <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "14px" }}>
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
