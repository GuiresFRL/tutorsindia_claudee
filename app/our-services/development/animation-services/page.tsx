import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
export const metadata: Metadata = { title: "Animation & VFX Services | 3D Modelling, Architectural Design", description: "Professional Animation Services. 3D Modelling, Architectural Design, 2D/3D Animation, VFX, Interior Design, Landscape Design. Tutors India." };
const services = [
  { icon: "🏙️", title: "3D Modelling & Animation", desc: "3D animation, 3D flythrough, 3D modelling for academic, commercial, and research purposes with photorealistic rendering." },
  { icon: "🏗️", title: "Architectural Design", desc: "Commercial, construction, design & drafting, interior design, and landscape design with accurate architectural visualisations." },
  { icon: "🎬", title: "2D/3D Animation", desc: "Character animation, explainer videos, product animations, educational animations, and scientific visualisations." },
  { icon: "✨", title: "VFX & Visual Effects", desc: "Visual effects for academic presentations, research videos, product demonstrations, and commercial content." },
  { icon: "🏠", title: "Interior Design Rendering", desc: "Photorealistic interior design renderings and walkthroughs for architectural projects and academic submissions." },
  { icon: "🌿", title: "Landscape Design", desc: "Landscape architecture visualisations, garden and outdoor space design renderings, and urban planning animations." },
];
const faqs = [
  { q: "What animation services do you offer?", a: "Our team has the capability to deliver 3D Modelling design (3D animation, 3D flythrough, 3D modelling), architectural design (Commercial, construction, design & drafting, interior design, landscape design), 2D/3D animation, VFX, and any other animation or visualisation requirement for academic or commercial purposes." },
  { q: "What software do you use for animation?", a: "We use industry-standard software including Autodesk 3ds Max, Maya, Blender, Cinema 4D, Adobe After Effects, Adobe Premiere, SketchUp, AutoCAD, Revit, and Lumion. We select the most appropriate tool based on the type of animation and your specific requirements." },
  { q: "Can you help with academic research visualisations?", a: "Yes. We create scientific and academic visualisations including 3D molecular models, anatomical renderings, engineering component visualisations, data visualisation animations, and research process explainer videos — all suitable for academic presentations, posters, and publications." },
  { q: "How long does it take to complete an animation project?", a: "Timeline depends on the complexity and length of the animation. A simple 3D model takes 2–5 days. Architectural flythroughs typically take 1–2 weeks. Full animation productions take 3–6 weeks. Contact us with your specific requirements for an accurate timeline." },
  { q: "Do you deliver editable project files?", a: "Yes. We deliver all editable source files (3ds Max, Maya, Blender project files) along with the final rendered outputs in your required format (MP4, AVI, MOV, PNG sequences). You retain full ownership of all delivered assets." },
];
export default function AnimationServicesPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}<Link href="/our-services/development/" style={{ color: "#a0b8e0" }}>Development</Link>{" / "}<span style={{ color: "#fff" }}>Animation Services</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>Animation &amp; VFX Services</h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>Our team delivers 3D Modelling design (3D animation, 3D Flythrough, 3D modelling), architectural design (Commercial, construction, design &amp; drafting, interior design, landscape design), 2D/3D animation, and VFX services for academic and commercial clients worldwide.</p>
            <p style={{ color: "#f9c74f", fontSize: "0.92rem", fontWeight: 600, marginBottom: "20px" }}>3D Modelling · Architectural · 2D/3D Animation · VFX · Interior Design</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/services/primary-secondary-research.webp" alt="Research and development planning" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>3D · 2D · VFX<br />Architectural<br />Academic &amp; Commercial</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px", marginBottom: "28px" }} className="three-col-grid">
          {services.map(s => (<div key={s.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px" }}><div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{s.icon}</div><h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{s.title}</h3><p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.65 }}>{s.desc}</p></div>))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "22px", marginBottom: "28px" }} className="two-col-grid">
          <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "14px" }}>Software We Use</h3>
            {["Autodesk 3ds Max","Autodesk Maya","Blender","Cinema 4D","Adobe After Effects","Adobe Premiere Pro","SketchUp","AutoCAD","Autodesk Revit","Lumion"].map(t => (<div key={t} style={{ display: "flex", gap: "8px", padding: "5px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", fontSize: "0.82rem", color: "#c5d5f0" }}><span style={{ color: "#f9c74f", fontWeight: 700 }}>→</span> {t}</div>))}
          </div>
          <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px", border: "1px solid #dde2ef" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>What We Deliver</h3>
            {["Photorealistic 3D renders","Animated flythrough videos","Editable source project files","MP4, AVI, MOV final outputs","PNG image sequences","2D explainer animations","VFX composited videos","Print-ready architectural plans"].map((g, i) => (<div key={i} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid #dde2ef", fontSize: "0.83rem", color: "#555" }}><span style={{ color: "#e87722", fontWeight: 700 }}>✓</span> {g}</div>))}
          </div>
        </div>
        <div style={{ marginBottom: "28px" }}><h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Frequently Asked Questions</h2><FaqAccordion faqs={faqs} /></div>
      </section>
      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Your Animation Project Delivered</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>3D · 2D · VFX · Architectural · Academic &amp; Commercial · Response in 30 min</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
