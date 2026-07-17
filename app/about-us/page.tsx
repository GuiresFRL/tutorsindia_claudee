import Link from "next/link";
import type { Metadata } from "next";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "About Us — Trusted Academic Guidance",
  description: "Tutors India is the world's reputed academic guidance provider since 2001, having guided more than 4,500 Ph.D. scholars and 10,500 Masters students across the globe.",
  alternates: { canonical: "https://www.tutorsindia.com/about-us/" },
};

const stats = [
  { number: "2,00,000+", label: "Scholars Served" },
  { number: "4,500+", label: "PhD Candidates Guided" },
  { number: "10,500+", label: "Masters Students Helped" },
  { number: "22+", label: "Years in Business" },
  { number: "2000+", label: "Expert Writers" },
  { number: "80+", label: "Countries Served" },
];

const features = [
  { icon: "🎓", title: "PhD-Qualified Writers", desc: "All our writers hold PhD or Masters degrees from top UK and US universities. Writers are trained at Harvard School, Oxford, London School of Business, and the University of Birmingham." },
  { icon: "🔒", title: "Complete Confidentiality", desc: "Research data kept confidential for internal purposes only. Non-Disclosure Agreements signed with all team members. Copyright ownership remains with client after payment. Research works never reused." },
  { icon: "📚", title: "Updated Academic Resources", desc: "In-house library with international standard books updated monthly. Access to journal databases comparable to leading university libraries — Web of Science, ProQuest, Emerald, IEEE, SciDirect, JSTOR." },
  { icon: "🌍", title: "Global Expert Network", desc: "2000+ expertise across subjects and countries including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia and Ukraine. 24/7 availability across all time zones." },
  { icon: "⚡", title: "Fast Response Time", desc: "Enquiries received during business hours (9:00 AM to 6:00 PM IST) receive responses within 1 hour. Out-of-hours enquiries get immediate phone responses. Email acknowledgment within 30 minutes." },
  { icon: "🛡️", title: "Secure Infrastructure", desc: "24-hour power backup, high-speed internet connectivity, password-protected CRM software for secure file access, and 128-bit SSL encryption for all financial information." },
];

const teamDetails = [
  { icon: "🏛️", title: "UK Office — Sheffield / Manchester", desc: "10 Park Place, Manchester M4 4EY, United Kingdom. Our UK office supports students at UK universities and manages our British editorial team." },
  { icon: "🇺🇸", title: "US Office — Dallas, Texas", desc: "Serving North American students at US and Canadian universities with PhD-qualified American researchers and statisticians." },
  { icon: "🇮🇳", title: "India Office — Chennai", desc: "10, Kutty Street, Nungambakkam, Chennai – 600034. Our central operations hub managing all research coordination, quality control, and customer support." },
];

const services = [
  { label: "Masters Dissertation Writing Services", href: "/our-services/masters-dissertation-writing-services/" },
  { label: "PhD / DBA Dissertation Writing Services", href: "/our-services/phd-dba-dissertation/" },
  { label: "Coursework Writing Services", href: "/our-services/coursework-writing/" },
  { label: "Publication Support", href: "/our-services/publication-support/" },
  { label: "Development Services", href: "/our-services/development/" },
  { label: "Editing Services", href: "/our-services/editing-services/" },
];

const whyPoints = [
  "Our team of writers & Statisticians are guided by high quality QC team from Harvard & Alabama",
  "Highest quality work in the industry — every piece reviewed by subject matter experts",
  "Registered Company based in Sheffield (UK), Dallas (US) and Chennai (India)",
  "We guarantee your work and care deeply about your academic success",
  "2000+ PhD and Masters-qualified researchers across 80+ countries",
  "22+ years of experience serving students at UK, US, and Australian universities",
  "Our unique approach has helped hundreds of scholars complete and submit dissertations globally",
  "We handle research works of all subjects from various countries across the globe",
];

const testimonials = [
  { quote: "Tutors India helped me gain clarity on the direction my research proposal needed to go and provided me with more clarity in my work. The experts understood my difficulties and guided me accordingly. I wholeheartedly endorse Tutors India as a best and professional service.", author: "Niamh McLaughlin", location: "" },
  { quote: "This service saved me during one of the most stressful phases of my academic journey. Reliable, professional, and genuinely supportive throughout the process.", author: "Noora Al Zaabi", location: "UAE", avatar: "/images/testimonials/noora-al-zaabi.webp" },
  { quote: "The final work looked so refined and well-structured that even my mentor appreciated the improvement immediately. Highly recommended for serious academic support.", author: "George Whitmore", location: "UK", avatar: "/images/testimonials/george-whitmore.webp" },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<span style={{ color: "#fff" }}>About Us</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.6rem,3vw,2.3rem)", marginBottom: "14px" }}>About Tutors India</h1>
            <p style={{ color: "#c5d5f0", fontSize: "1.05rem", marginBottom: "8px" }}>World&apos;s Reputed Academic Guidance Provider — Since 2001</p>
            <p style={{ color: "#a0b8e0", fontSize: "0.95rem", lineHeight: 1.75, marginBottom: "24px", maxWidth: "700px" }}>
              Tutors India is the world&apos;s reputed academic guidance provider for the past 22 years, having guided more than 4,500 Ph.D. scholars and 10,500 Masters students across the globe. We assist students, research scholars, entrepreneurs, and professionals with writing and analytical services.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "10px 24px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
              <Link href="/contact-us/" style={{ padding: "10px 24px", border: "2px solid rgba(255,255,255,0.45)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/samples/dissertation-samples.webp" alt="Academic experts collaborating" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#f9c74f" }}>22+</div>
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0" }}>Years of Academic<br />Excellence</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      {/* STATS */}
      <section style={{ background: "#12214a", padding: "28px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: "20px", textAlign: "center" }} className="stats-grid">
          {stats.map(s => (
            <div key={s.label}>
              <div style={{ fontSize: "1.6rem", fontWeight: 700, color: "#f9c74f", fontFamily: "Merriweather,serif" }}>{s.number}</div>
              <div style={{ fontSize: "0.72rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: "4px" }}>{s.label}</div>
            </div>
          ))}
        </div>
        <style>{`@media(max-width:900px){.stats-grid{grid-template-columns:repeat(3,1fr)!important;}} @media(max-width:500px){.stats-grid{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
      </section>

      {/* MAIN ABOUT */}
      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>

        {/* Vision & Why */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", marginBottom: "48px", alignItems: "start" }} className="two-col-grid">
          <div>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Why Tutors India?</h2>
            <p style={{ color: "#555", marginBottom: "14px", fontSize: "0.95rem" }}>A Genuine Company with presence across the World including the US, UK</p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {whyPoints.map(item => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "12px", fontSize: "0.93rem", color: "#555" }}>
                  <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0, marginTop: "2px" }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our Vision &amp; Mission</h2>
            <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "14px", fontSize: "1rem" }}>
              Tutors India aspires to be the best research guidance provider in the world through its holistic approach irrespective of subjects, countries, and specializations.
            </p>
            <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "14px", fontSize: "1rem" }}>
              To achieve this vision, Tutors India approaches each and every research work through a unique methodology after a lot of discussion between research expertise, professors, data management experts, industry professionals, and language &amp; technical editors. We develop the research work handling all subjects from various countries across the globe.
            </p>
            <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
              We guide a wide range of researchers including Research Scholars, Professors and Heads of various departments in prestigious universities, Working Professionals, Entrepreneurs, Industrialists, and students.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "24px", textAlign: "center" }}>What Makes Tutors India Different?</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "22px", marginBottom: "48px" }} className="three-col-grid">
          {features.map(f => (
            <div key={f.title} style={{ background: "#fff", borderRadius: "10px", padding: "22px", border: "1px solid #dde2ef" }}>
              <div style={{ fontSize: "2rem", marginBottom: "10px" }}>{f.icon}</div>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "8px" }}>{f.title}</h3>
              <p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.65 }}>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Infrastructure & Security */}
        <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "36px", marginBottom: "48px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "20px", textAlign: "center" }}>Infrastructure &amp; Security</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }} className="three-col-grid">
            {[
              { icon: "⚡", title: "24-Hour Power Backup", desc: "Uninterrupted power supply ensuring continuous operations and file security at all times." },
              { icon: "🌐", title: "High-Speed Internet", desc: "Enterprise-grade internet connectivity ensuring fast, reliable communication with clients worldwide." },
              { icon: "📚", title: "In-House Library", desc: "International standard books updated monthly. Access to journal databases comparable to leading universities." },
              { icon: "🔐", title: "Secured CRM Software", desc: "Password-protected CRM software for secure file access. All client data encrypted and protected." },
              { icon: "🔒", title: "128-bit SSL Encryption", desc: "All financial information protected by 128-bit SSL encryption — the same standard used by banks." },
              { icon: "📋", title: "NDA Compliance", desc: "Non-Disclosure Agreements signed with all team members. Client data retained for 6 months only." },
            ].map(item => (
              <div key={item.title} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: "8px" }}>{item.icon}</div>
                <div style={{ fontSize: "0.94rem", fontWeight: 700, marginBottom: "5px" }}>{item.title}</div>
                <div style={{ fontSize: "0.78rem", color: "#c5d5f0", lineHeight: 1.55 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Offices */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "24px", textAlign: "center" }}>Our Global Offices</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px", marginBottom: "48px" }} className="three-col-grid">
          {teamDetails.map(t => (
            <div key={t.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "22px", textAlign: "center" }}>
              <div style={{ fontSize: "2.2rem", marginBottom: "10px" }}>{t.icon}</div>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "8px" }}>{t.title}</h3>
              <p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.65 }}>{t.desc}</p>
            </div>
          ))}
        </div>

        {/* Services */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", marginBottom: "48px", alignItems: "start" }} className="two-col-grid">
          <div>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Our Service Categories</h2>
            {services.map(svc => (
              <Link key={svc.href} href={svc.href} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px 0", borderBottom: "1px solid #f0f2fa", fontSize: "0.96rem", color: "#2563b0", fontWeight: 500 }}>
                <span style={{ color: "#e87722" }}>→</span> {svc.label}
              </Link>
            ))}
          </div>
          <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "28px", border: "1px solid #dde2ef" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Confidentiality &amp; Privacy</h3>
            <p style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.75, marginBottom: "14px" }}>
              Once you have placed an order with us, it&apos;s safe with us. We maintain the confidentiality that you expect. Your identity is never disclosed to third parties without your approval. Neither your friends nor your teachers would ever know that you have used our service.
            </p>
            {["NDA signed with all writers and editors", "Unique project reference codes assigned", "Data retained for 6 months only", "Copyright transferred to you after payment", "Research works never reused or resold", "128-bit SSL encryption on all transactions"].map(item => (
              <div key={item} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid #dde2ef", fontSize: "0.84rem", color: "#555" }}>
                <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <TestimonialSlider testimonials={testimonials} />
      </section>

      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Find More About Tutors India</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>Who are we? Where are we? Why we do it? — Let us help you succeed academically</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
      <style>{`@media(max-width:768px){.two-col-grid{grid-template-columns:1fr!important;}.three-col-grid{grid-template-columns:1fr!important;}}`}</style>
    </>
  );
}
