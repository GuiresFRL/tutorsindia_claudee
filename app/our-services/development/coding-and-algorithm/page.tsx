import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "Coding & Algorithm Development Services | IEEE Projects",
  description: "Expert Coding and Algorithm Development for IEEE Projects. NS2, Java, CloudSim, MATLAB, OMNET++, Android, Hadoop and 20+ tools. Tutors India.",
};

const tools = ["NS2","Java","CloudSim","MATLAB","OMNET++","Qualnet","Opnet","Android","ImageJ","NS3","Dotnet","Gridsim","Peersim","Hadoop","RTool","APACHE","MLOSS","JMLR","Vowpal Wabbit","MATLAB Simulink","ZigBee","Python","C++","R"];

const services = [
  { icon: "🔢", title: "Algorithm Design", desc: "Custom algorithm design and analysis — sorting, searching, graph algorithms, dynamic programming, greedy algorithms, and domain-specific algorithm development." },
  { icon: "📡", title: "Network Simulation (NS2/NS3)", desc: "Network simulation using NS2 and NS3 for academic IEEE projects — MANET, VANET, wireless sensor networks, routing protocols." },
  { icon: "☁️", title: "Cloud Computing (CloudSim)", desc: "Cloud simulation and modelling using CloudSim — resource scheduling, load balancing, energy optimisation in cloud environments." },
  { icon: "🤖", title: "MATLAB & Simulink", desc: "MATLAB algorithm implementation, Simulink modelling, image processing, signal processing, and control systems projects." },
  { icon: "📱", title: "Android Development", desc: "Android mobile application development for academic projects — Java/Kotlin, UI design, database integration, API connectivity." },
  { icon: "🐘", title: "Hadoop & Big Data", desc: "Apache Hadoop, Hive, Spark algorithm implementation for big data processing and distributed computing academic projects." },
];

const faqs = [
  { q: "What coding and algorithm development services do you offer?", a: "Tutors India offers Coding and Algorithm Development for IEEE Projects. We utilise various tools such as NS2, Java, CloudSim, MATLAB, OMNET++, Qualnet, Opnet, Android, ImageJ, NS3, Dotnet, Gridsim, Peersim, Hadoop, RTool, APACHE, MLOSS, JMLR, Vowpal Wabbit, IEEE MATLAB Simulink, microcontroller, ZigBee and many more software programming tools." },
  { q: "Which programming languages do you support?", a: "We support Python, Java, C, C++, R, MATLAB, JavaScript, Android (Java/Kotlin), Scala, and many other languages. We select the most appropriate language based on your project requirements, academic level, and target journal or conference specifications." },
  { q: "Can you help with complete IEEE project implementation?", a: "Yes. We provide end-to-end support for IEEE academic projects — from algorithm design and implementation through to simulation, testing, results generation, and documentation. We have extensive experience with network simulation (NS2/NS3), cloud computing (CloudSim), machine learning, and image processing projects." },
  { q: "Do you provide documentation alongside the code?", a: "Yes. All code deliveries include comprehensive documentation — algorithm description, implementation guide, code comments, test cases, results and screenshots, and a technical report suitable for academic submission. We ensure the documentation meets your university's and journal's requirements." },
  { q: "How do you handle project confidentiality?", a: "All projects are assigned unique reference codes. Code and documentation are accessed only by developers who have signed NDAs with Tutors India. Your financial information is protected by 128-bit SSL encryption. We never share your project with third parties." },
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

export default function CodingAlgorithmPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}<Link href="/our-services/development/" style={{ color: "#a0b8e0" }}>Development</Link>{" / "}<span style={{ color: "#fff" }}>Coding & Algorithm</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              Coding &amp; Algorithm Development Services for IEEE Projects
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Programming is difficult — we need to tell computers unambiguous instructions with no room for subjective interpretation. Tutors India offers expert Coding and Algorithm Development for IEEE Projects using 20+ tools including NS2, Java, CloudSim, MATLAB, OMNET++, Android, Hadoop and many more.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "20px" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/services/primary-secondary-research.webp" alt="Research and development planning" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#f9c74f" }}>20+</div>
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0" }}>Programming Tools<br />&amp; Frameworks<br />Supported</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px", marginBottom: "28px" }} className="three-col-grid">
          {services.map(s => (
            <div key={s.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{s.icon}</div>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{s.title}</h3>
              <p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.65 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Tools &amp; Technologies We Use</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {tools.map(t => (<span key={t} style={{ padding: "5px 12px", background: "#fff", border: "2px solid #1a2a6c", borderRadius: "16px", fontSize: "0.79rem", color: "#1a2a6c", fontWeight: 600 }}>{t}</span>))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "22px", marginBottom: "28px" }} className="two-col-grid">
          <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "14px" }}>What We Deliver</h3>
            {["Complete algorithm implementation and code","Documentation and code comments","Simulation results and screenshots","Technical report for submission","Test cases and validation","Plagiarism-free code and documentation","Unlimited revisions","24/7 support throughout project"].map(item => (
              <div key={item} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", fontSize: "0.83rem", color: "#c5d5f0" }}>
                <span style={{ color: "#f9c74f", fontWeight: 700 }}>✓</span> {item}
              </div>
            ))}
          </div>
          <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px", border: "1px solid #dde2ef" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our Guarantees</h3>
            {["Unlimited revisions for committed work","On-time delivery guaranteed","24/7 technical support","100% original code — no plagiarism","NDA-signed developers","Confidential project handling","All source files delivered","IEEE project compliance"].map((g, i) => (
              <div key={i} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid #dde2ef", fontSize: "0.83rem", color: "#555" }}>
                <span style={{ color: "#e87722", fontWeight: 700 }}>{i + 1}.</span> {g}
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Frequently Asked Questions</h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Your Coding &amp; Algorithm Project Developed</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>20+ Tools · NS2 · MATLAB · Hadoop · IEEE Projects · Response in 30 min</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
