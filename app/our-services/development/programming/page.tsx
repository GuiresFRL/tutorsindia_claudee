import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
export const metadata: Metadata = { title: "Computer Programming Services | Python, Java, C++ | Tutors India", description: "Expert Computer Programming Services. Python, Java, C++, R, JavaScript, MATLAB, Scala. Academic and commercial programming projects. Tutors India." };
const langs = ["Python","Java","C","C++","R","MATLAB","JavaScript","Scala","Kotlin","Swift","PHP","Ruby","Go","Rust","SQL","TypeScript"];
const services = [
  { icon: "🐍", title: "Python Programming", desc: "Data analysis, machine learning, automation, web development (Django/Flask), and scientific computing projects using Python." },
  { icon: "☕", title: "Java Development", desc: "Enterprise Java applications, Android apps, Spring Boot services, and academic Java projects with full documentation." },
  { icon: "⚙️", title: "C/C++ Programming", desc: "System programming, embedded systems, algorithm implementation, and performance-critical application development in C and C++." },
  { icon: "📊", title: "R Programming", desc: "Statistical analysis, data visualisation, machine learning models, and bioinformatics projects using R and R Studio." },
  { icon: "🌐", title: "Web Programming", desc: "JavaScript, TypeScript, Node.js, React, Angular, and Vue.js programming for academic and commercial web projects." },
  { icon: "🗄️", title: "Database Programming", desc: "SQL, MySQL, PostgreSQL, MongoDB, Oracle database design, queries, stored procedures, and data management programming." },
];
const faqs = [
  { q: "What programming languages do you support?", a: "Programming is difficult as we need to tell computers unambiguous instructions with no room for subjective interpretation. We support Python, Java, C, C++, R, MATLAB, JavaScript, TypeScript, Scala, Kotlin, Swift, PHP, Ruby, Go, SQL, and many other languages — selecting the most appropriate one for your project." },
  { q: "Can you help with academic programming assignments?", a: "Yes. We provide programming support for academic coursework, dissertation chapters, research projects, and IEEE publications. All code is original, well-documented, and includes test cases demonstrating correctness. We ensure compliance with your university's academic integrity guidelines for what constitutes legitimate programming assistance." },
  { q: "Do you provide code documentation?", a: "Yes. All programming deliveries include comprehensive inline comments, a README file, algorithm description, test cases, and instructions for running the code. We ensure the documentation is clear enough for you to understand and explain the implementation." },
  { q: "How do you ensure the code is plagiarism-free?", a: "All code is written from scratch by our developers. We use industry-standard plagiarism detection for code (MOSS, JPlag) to verify originality. No code templates or recycled solutions are used. Every project is unique and custom-developed for your specific requirements." },
  { q: "Can you fix or debug existing code?", a: "Yes. We offer code review, debugging, optimisation, and refactoring services. Simply share your existing code along with the error messages or performance issues, and our developers will diagnose and fix the problems." },
];
const testimonials = [
  { quote: "Tutors India helped me with writing my dissertation in Python coding and I am very much satisfied with the protocol that they provided. Your expertise and professionalism is extraordinary. It is such a pleasure to work with Tutors India.", author: "Liam", avatar: "/images/testimonials/t17.jpg" },
  { quote: "Thank Tutors India for the wonderful job in helping me develop my algorithm in computer programming. Everyone was professional, excellent and hard working. Thanks to them, I was able to achieve my goal on time.", author: "Harrison", avatar: "/images/testimonials/t16.jpg" },
  { quote: "I am happy to seek help from Tutors India for assisting me in software development. Their team of experts worked closely with me throughout the process, staying on task and on budget. I also appreciate their quick and courteous responses.", author: "Mason", avatar: "/images/testimonials/t20.jpg" },
];
export default function ProgrammingPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}<Link href="/our-services/development/" style={{ color: "#a0b8e0" }}>Development</Link>{" / "}<span style={{ color: "#fff" }}>Programming</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>Computer Programming Services</h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>Programming is difficult as we need to tell computers unambiguous instructions — there is no room for subjective interpretation. Our experienced programmers handle all major languages and frameworks with expertise built on years of academic and commercial project experience.</p>
            <p style={{ color: "#f9c74f", fontSize: "0.92rem", fontWeight: 600, marginBottom: "20px" }}>Python · Java · C++ · R · MATLAB · JavaScript · SQL &amp; more</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/tutorsindia-logo-hd.jpg" alt="Tutors India" style={{ width: "90px", height: "90px", objectFit: "contain", marginBottom: "10px" }} />
            <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#f9c74f" }}>16+</div>
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0" }}>Languages<br />Supported</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px", marginBottom: "28px" }} className="three-col-grid">
          {services.map(s => (<div key={s.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px" }}><div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{s.icon}</div><h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{s.title}</h3><p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.65 }}>{s.desc}</p></div>))}
        </div>
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Programming Languages We Support</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>{langs.map(t => (<span key={t} style={{ padding: "5px 12px", background: "#fff", border: "2px solid #1a2a6c", borderRadius: "16px", fontSize: "0.79rem", color: "#1a2a6c", fontWeight: 600 }}>{t}</span>))}</div>
        </div>
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>What Our Clients Say</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px" }} className="three-col-grid">
            {testimonials.map((t, i) => (<div key={i} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px" }}><div style={{ color: "#e87722", fontSize: "2rem", lineHeight: 1, marginBottom: "6px", fontFamily: "serif" }}>&ldquo;</div><p style={{ color: "#555", fontSize: "0.84rem", lineHeight: 1.7, fontStyle: "italic", marginBottom: "12px" }}>{t.quote}</p><div style={{ display: "flex", alignItems: "center", gap: "10px" }}><img src={t.avatar} alt={t.author} style={{ width: "36px", height: "36px", borderRadius: "50%", objectFit: "cover" }} loading="lazy" /><div style={{ fontWeight: 700, color: "#1a2a6c", fontSize: "0.84rem" }}>{t.author}</div></div></div>))}
          </div>
        </div>
        <div style={{ marginBottom: "28px" }}><h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Frequently Asked Questions</h2><FaqAccordion faqs={faqs} /></div>
      </section>
      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Your Programming Project Delivered by Experts</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>16+ Languages · Academic &amp; Commercial · Documented Code · 30 min Response</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
