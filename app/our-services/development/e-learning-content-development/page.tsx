import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
export const metadata: Metadata = { title: "E-Learning Content Development Services", description: "Expert E-Learning Content Development. Interactive modules, SCORM, LMS integration, instructional design, video lectures. All subjects. Tutors India." };
const services = [
  { icon: "📱", title: "Interactive E-Learning Modules", desc: "Engaging, interactive e-learning modules with quizzes, assessments, branching scenarios, and multimedia elements developed using Articulate Storyline, Rise, and Adobe Captivate." },
  { icon: "🎬", title: "Video Lecture Production", desc: "Professional lecture video production — screen recordings, talking head videos, whiteboard animations, and fully edited educational video content." },
  { icon: "📋", title: "SCORM Compliant Content", desc: "SCORM 1.2, SCORM 2004, and xAPI compliant e-learning content that integrates seamlessly with Moodle, Blackboard, Canvas, and all major LMS platforms." },
  { icon: "🎨", title: "Instructional Design", desc: "Pedagogically sound instructional design using ADDIE, Bloom's Taxonomy, and constructivist learning principles to maximise learner engagement and knowledge retention." },
  { icon: "🌐", title: "LMS Setup & Configuration", desc: "Moodle, Blackboard, Canvas, and custom LMS setup, configuration, course upload, and learner management system implementation." },
  { icon: "📊", title: "Assessment & Quiz Development", desc: "Online assessments, knowledge checks, formative quizzes, summative tests, and automated feedback systems aligned to learning objectives." },
];
const faqs = [
  { q: "What e-learning content development services do you offer?", a: "E-Learning is the delivery of technology-supported learning and teaching with more of an interactive process between the teacher and students based on sound pedagogical practices. We develop comprehensive e-learning modules and digital course content — interactive modules, video lectures, SCORM content, LMS setup, instructional design, and assessment development." },
  { q: "Which authoring tools do you use?", a: "We use Articulate Storyline 360, Articulate Rise, Adobe Captivate, iSpring Suite, Lectora, and H5P for e-learning content development. We select the most appropriate tool based on your LMS requirements, interactivity needs, and budget." },
  { q: "Is the content SCORM compliant?", a: "Yes. All e-learning content we develop is SCORM 1.2, SCORM 2004, or xAPI (Tin Can) compliant and integrates seamlessly with all major LMS platforms including Moodle, Blackboard, Canvas, Teachable, and custom LMS installations." },
  { q: "Can you help set up our LMS?", a: "Yes. We provide full LMS setup and configuration services for Moodle, Blackboard, Canvas, and other platforms — including course structure, user management, assessment configuration, gradebook setup, and initial content upload. We can train your staff on LMS administration as well." },
  { q: "How long does it take to develop an e-learning course?", a: "A standard 1-hour SCORM e-learning module typically takes 4–6 weeks from content receipt to delivery. A full course of 10+ modules may take 3–6 months depending on complexity and revision cycles. Contact us with your specific requirements for an accurate timeline." },
];
export default function ELearningPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}<Link href="/our-services/development/" style={{ color: "#a0b8e0" }}>Development</Link>{" / "}<span style={{ color: "#fff" }}>E-Learning Development</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>E-Learning Content Development Services</h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>E-Learning is the delivery of technology-supported learning and teaching with more of an interactive process between the teacher and students based on sound pedagogical practices. We develop comprehensive e-learning modules and digital course content for universities, training organisations, and corporate clients.</p>
            <p style={{ color: "#f9c74f", fontSize: "0.92rem", fontWeight: 600, marginBottom: "20px" }}>SCORM · Articulate Storyline · Moodle · Canvas · Blackboard</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/tutorsindia-logo-hd.jpg" alt="Tutors India" style={{ width: "90px", height: "90px", objectFit: "contain", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>SCORM Compliant<br />ADDIE Framework<br />LMS Integration</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px", marginBottom: "28px" }} className="three-col-grid">
          {services.map(s => (<div key={s.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px" }}><div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{s.icon}</div><h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{s.title}</h3><p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.65 }}>{s.desc}</p></div>))}
        </div>
        <div style={{ marginBottom: "28px" }}><h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Frequently Asked Questions</h2><FaqAccordion faqs={faqs} /></div>
      </section>
      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Build Your E-Learning Course with Expert Instructional Designers</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>SCORM · Articulate · Moodle · Video Lectures · All LMS · Response in 30 min</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
