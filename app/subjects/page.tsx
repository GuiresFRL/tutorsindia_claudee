import Link from "next/link";
import type { Metadata } from "next";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "Academic Writing by Subject | Law, Engineering, Medicine, Business",
  description: "Expert academic writing support across all subjects — Law, Engineering, Economics, Medicine, Business, Arts, Biological Sciences, Computer Science. Tutors India.",
};

const subjects = [
  { title: "Academic Law Writing", href: "/subjects/academic-law-ug-masters-phd-writing-help/", icon: "⚖️", color: "#1a2a6c", desc: "Expert legal academic writing for UG, Masters and PhD students. Case law, legislation, legal essays, dissertations. Harvard and OSCOLA referencing.", areas: ["Contract Law", "Criminal Law", "Constitutional Law", "International Law", "Company Law", "Human Rights Law"] },
  { title: "Engineering & Technology", href: "/subjects/engineering-technology-academic-writing/", icon: "⚙️", color: "#2563b0", desc: "Engineering research deals with the discovering and systematic conceptual structuring of knowledge. All engineering disciplines covered.", areas: ["Civil & Structural", "Mechanical", "Electrical & Electronics", "Chemical", "Computer Engineering", "Aerospace"] },
  { title: "Economics & Finance", href: "/subjects/economics-finance-academic-writing-help/", icon: "📈", color: "#1a2a6c", desc: "Writing an economic paper can be stressful, specifically when your objective is to obtain a good grade. Expert economists at your service.", areas: ["Macroeconomics", "Microeconomics", "Financial Markets", "Econometrics", "Development Economics", "International Finance"] },
  { title: "Medicine & Health Science", href: "/subjects/medicine-health-science-academic-writing/", icon: "🏥", color: "#2563b0", desc: "It is the art or science of preventing, diagnosing, alleviating and treating diseases. Expert medical and health science writers.", areas: ["Clinical Medicine", "Nursing", "Public Health", "Pharmacology", "Epidemiology", "Healthcare Management"] },
  { title: "Business & Management", href: "/subjects/business-management-studies-academic-writing-help/", icon: "💼", color: "#1a2a6c", desc: "Writing business and management paper can be stressful. Our 400+ academic writers cover all business disciplines.", areas: ["Strategic Management", "Human Resource Management", "Marketing", "Finance", "Operations", "Entrepreneurship"] },
  { title: "Arts & Humanities", href: "/subjects/arts-humanities-academic-writing-help/", icon: "🎨", color: "#2563b0", desc: "Writing an arts and humanities paper can be stressful. Our experts cover literature, history, philosophy, cultural studies.", areas: ["Literature & Linguistics", "History", "Philosophy", "Cultural Studies", "Media Studies", "Creative Arts"] },
  { title: "Biological & Life Science", href: "/subjects/biological-life-science-academic-writing-help/", icon: "🔬", color: "#1a2a6c", desc: "Writing a biology and life science paper can be stressful. Expert biological scientists covering genetics, ecology, biochemistry.", areas: ["Molecular Biology", "Genetics", "Ecology", "Biochemistry", "Microbiology", "Neuroscience"] },
  { title: "Computer Science & IT", href: "/subjects/computer-science-information-technology-academic-writing/", icon: "💻", color: "#2563b0", desc: "The Computer science engineering program aims to broaden knowledge in cutting edge computing areas. AI, ML, Networks.", areas: ["Artificial Intelligence", "Machine Learning", "Software Engineering", "Networks & Security", "Data Science", "Cloud Computing"] },
];

const testimonials = [
  { quote: "Honestly, I didn't expect this level of quality. The team understood exactly what I needed and delivered work that felt genuinely professional.", author: "Amelia Brooks", location: "UK", avatar: "/images/testimonials/amelia-brooks.webp" },
  { quote: "My research finally started making sense after working with this team. Their guidance simplified complex ideas and gave my project the structure it was missing.", author: "Hassan Al Falasi", location: "UAE", avatar: "/images/testimonials/hassan-al-falasi.webp" },
  { quote: "I submitted my work with complete confidence for the first time ever. The quality, formatting, and clarity were all beyond what I hoped for.", author: "Charlotte Reed", location: "UK", avatar: "/images/testimonials/charlotte-reed.webp" },
];

export default function SubjectsPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<span style={{ color: "#fff" }}>Subjects</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.6rem,3vw,2.3rem)", lineHeight: 1.3, marginBottom: "14px" }}>Academic Writing Support Across All Subjects</h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "22px" }}>Tutors India provides expert academic writing, editing, and research support across all major academic disciplines. Our 2000+ subject-specific experts from top UK and US universities are assigned based on your specific subject area to ensure the highest quality academic output.</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/samples/dissertation-samples.webp" alt="Academic experts collaborating" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#f9c74f" }}>2,000+</div>
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0" }}>Subject Experts<br />All Disciplines</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      <div style={{ background: "#12214a", padding: "16px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: "2,000+", l: "Subject Experts" }, { n: "8 Disciplines", l: "Covered" }, { n: "Masters & PhD", l: "Level" }, { n: "< 5%", l: "Plagiarism" }, { n: "UK & US", l: "Standards" }, { n: "30 min", l: "Response" }].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
              <div style={{ fontSize: "0.68rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px", textAlign: "center" }}>Choose Your Subject Area</h2>
        <p style={{ color: "#666", fontSize: "0.95rem", marginBottom: "32px", textAlign: "center" }}>Invest in your career by availing topic selection from our UK / US Qualified researchers</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "48px" }} className="two-col-grid">
          {subjects.map(subj => (
            <Link key={subj.href} href={subj.href} style={{ display: "block", textDecoration: "none" }}>
              <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.05)", height: "100%" }}>
                <div style={{ background: subj.color, color: "#fff", padding: "18px 22px", display: "flex", alignItems: "center", gap: "14px" }}>
                  <span style={{ fontSize: "2rem" }}>{subj.icon}</span>
                  <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700 }}>{subj.title}</h3>
                </div>
                <div style={{ padding: "18px 22px" }}>
                  <p style={{ fontSize: "0.87rem", color: "#555", lineHeight: 1.7, marginBottom: "14px" }}>{subj.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "12px" }}>
                    {subj.areas.map(area => (<span key={area} style={{ padding: "3px 10px", background: "#f5f6fa", border: "1px solid #dde2ef", borderRadius: "12px", fontSize: "0.75rem", color: "#1a2a6c", fontWeight: 500 }}>{area}</span>))}
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "#e87722", fontWeight: 600 }}>Learn More →</div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "36px", marginBottom: "48px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: "16px", textAlign: "center" }}>Why Tutors India for Subject-Specific Academic Writing?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "16px" }} className="four-col-grid">
            {[{ icon: "🎓", title: "Subject Experts Only", desc: "Writers assigned based on specific subject expertise and academic qualification" }, { icon: "🛡️", title: "Plagiarism Free", desc: "All work scanned using Turnitin. Less than 5% guaranteed with certificate" }, { icon: "🔁", title: "Unlimited Revisions", desc: "Free revisions until 100% satisfied — even after project completion" }, { icon: "⏱", title: "On-Time Delivery", desc: "Minor changes within 24 hours, significant changes within 48 hours" }, { icon: "📚", title: "Peer-Reviewed Sources", desc: "Only peer-reviewed academic sources from credible international databases" }, { icon: "🔒", title: "100% Confidential", desc: "NDA-signed writers, 128-bit SSL encryption, unique project codes" }, { icon: "📞", title: "24/7 Support", desc: "Email, phone, WhatsApp support across all time zones" }, { icon: "💷", title: "Affordable Pricing", desc: "Student-friendly rates in your currency with instalment options" }].map(f => (
              <div key={f.title} style={{ textAlign: "center", padding: "16px" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{f.icon}</div>
                <div style={{ fontSize: "0.94rem", fontWeight: 700, marginBottom: "5px" }}>{f.title}</div>
                <div style={{ fontSize: "0.76rem", color: "#c5d5f0", lineHeight: 1.5 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <TestimonialSlider testimonials={testimonials} />
      </section>

      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "8px" }}>Invest in Your Career — Place Your Order Today</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>Availing topic selection from our UK / US Qualified researchers across all subject areas</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
      <style>{`@media(max-width:768px){.two-col-grid{grid-template-columns:1fr!important;}} @media(max-width:900px){.four-col-grid{grid-template-columns:1fr 1fr!important;}}`}</style>
    </>
  );
}
