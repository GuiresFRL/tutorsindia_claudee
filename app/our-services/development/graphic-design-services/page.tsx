import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
export const metadata: Metadata = { title: "Graphic Design Services for Academic & Research", description: "Professional Graphic Design Services for thesis, research and academic work. Infographics, illustrations, branding, poster design. Expert designers. Tutors India." };
const services = [
  { icon: "📊", title: "Research Infographics", desc: "Visual representations of complex research data — charts, graphs, process diagrams, and data visualisations formatted for publications and presentations." },
  { icon: "🖼️", title: "Academic Illustrations", desc: "Technical illustrations, scientific diagrams, anatomical drawings, engineering schematics, and conceptual artwork for academic publications." },
  { icon: "🪧", title: "Poster Design", desc: "A1/A2 academic conference posters, research poster design, and scientific poster presentations for conferences and departmental showcases." },
  { icon: "🎨", title: "Branding & Identity", desc: "Logo design, brand identity, company profiles, and visual identity systems for academic institutions and commercial organisations." },
  { icon: "📄", title: "Report & Document Design", desc: "Professional layout and design for research reports, annual reports, dissertations, and academic publications." },
  { icon: "🌐", title: "Web & Digital Graphics", desc: "Digital graphics, social media visuals, UI/UX design mockups, and web design assets for digital platforms." },
];
const faqs = [
  { q: "What graphic design services do you offer for academic work?", a: "With your busy schedule in completing your thesis work, it would be frustrating to complete your illustration work without any prior knowledge. Our graphic designers deliver professional visuals for academic and commercial use including research infographics, academic illustrations, conference posters, technical diagrams, and complete document design." },
  { q: "What software do your designers use?", a: "Our designers use industry-standard software including Adobe Illustrator, Photoshop, InDesign, Canva Pro, Figma, and CorelDRAW. We select the most appropriate tool for your specific project type and deliver files in all required formats." },
  { q: "Can you design graphs and charts from my research data?", a: "Yes. We create professional graphs, charts, tables, and data visualisations from your research data. All outputs are formatted to your target journal's or university's specifications — with appropriate axis labels, legends, captions, and resolution (300 DPI for print)." },
  { q: "What formats do you deliver graphic design files in?", a: "We deliver files in all required formats — print-ready PDF, high-resolution PNG and JPEG, editable Illustrator or InDesign files, and web-optimised formats. We always provide editable source files so you can make future modifications." },
  { q: "Can you create graphics for my dissertation or thesis?", a: "Yes. We create professional figures, diagrams, conceptual frameworks, research model illustrations, and infographics specifically for dissertation and thesis submissions. All graphics meet the quality standards and resolution requirements of UK, US, and Australian universities." },
];
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  }))
};
export default function GraphicDesignPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}<Link href="/our-services/development/" style={{ color: "#a0b8e0" }}>Development</Link>{" / "}<span style={{ color: "#fff" }}>Graphic Design</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>Graphic Design Services for Academic &amp; Research</h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>With your busy schedule in completing thesis work, it would be frustrating to complete illustration work without any prior knowledge. Our graphic designers deliver professional visuals for academic and commercial use — infographics, illustrations, posters, branding, and complete document design.</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "20px" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/services/primary-secondary-research.webp" alt="Research and development planning" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>Illustrator<br />Photoshop · InDesign<br />Print &amp; Digital</div>
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
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Professional Graphic Design for Your Academic Work</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>Infographics · Illustrations · Posters · 300 DPI Print Quality · Response in 30 min</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
