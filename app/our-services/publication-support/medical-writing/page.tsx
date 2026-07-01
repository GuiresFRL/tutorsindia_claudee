import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "Medical Writing Services | Clinical, Regulatory, Scientific",
  description: "Professional Medical Writing Services — Clinical manuscripts, regulatory documents, systematic reviews, case reports, grant proposals. PhD Medical Writers. Tutors India.",
};

const medicalServices = [
  { icon: "🏥", title: "Clinical Manuscript Writing", desc: "Original research papers, clinical trial reports, observational studies, and cohort studies written to target journal standards (NEJM, Lancet, BMJ, JAMA, and specialty journals)." },
  { icon: "📋", title: "Systematic Review & Meta-Analysis", desc: "PRISMA-compliant systematic reviews and meta-analyses across clinical medicine, public health, nursing, pharmacy, and allied health disciplines." },
  { icon: "📰", title: "Case Report Writing", desc: "Medical case reports for academic publication — documenting rare conditions, novel treatments, or unexpected outcomes with full clinical detail and ethical compliance." },
  { icon: "📝", title: "Grant Proposal Writing", desc: "Competitive grant applications for research funding — clearly articulating research significance, methodology, team qualifications, and expected outcomes." },
  { icon: "📊", title: "Clinical Biostatistics", desc: "Statistical analysis for clinical research — survival analysis, logistic regression, clinical trial analysis, bioequivalence, and all methods used in clinical publications." },
  { icon: "🔬", title: "Regulatory Medical Writing", desc: "Clinical study reports (CSRs), clinical overview, summary of clinical efficacy/safety, investigator brochures, and regulatory submission documents." },
];

const faqs = [
  { q: "What medical writing services do you offer?", a: "Most medical students, fellows, and residents find writing a scientific medical manuscript challenging. Our professional medical writers deliver high-quality work quickly and consistently. We cover clinical manuscripts, systematic reviews, meta-analyses, case reports, grant proposals, biostatistics, and regulatory medical writing." },
  { q: "What qualifications do your medical writers hold?", a: "Our medical writers hold MD/PhD, PhD, or Masters degrees in medicine, healthcare, pharmacology, or related biomedical sciences. They have experience publishing in high-impact journals including NEJM, Lancet, BMJ, JAMA, and specialty journals. All writers are selected through stringent vetting including NDA signing." },
  { q: "Can you help with PRISMA-compliant systematic reviews?", a: "Yes. We develop fully PRISMA-compliant systematic literature reviews including protocol development, comprehensive multi-database searches (PubMed, Cochrane, Scopus, EMBASE, CINAHL), inclusion/exclusion criteria, quality assessment (GRADE, CASP, JBI), data extraction, and narrative or meta-analytic synthesis." },
  { q: "Do you write regulatory documents?", a: "Yes. Our regulatory medical writers are experienced with ICH-GCP guidelines and can write clinical study reports (CSRs), clinical overviews, summaries of clinical efficacy and safety, investigator brochures, and regulatory submission documents for pharmaceutical and biotech companies." },
  { q: "Is patient confidentiality maintained in case reports?", a: "Absolutely. All clinical case reports are handled with full HIPAA/GDPR awareness and patient anonymisation. Patient identifiers are removed and cases are presented following CARE reporting guidelines. We also ensure ethical compliance documentation is included where required by the target journal." },
];

const testimonials = [
  { quote: "Worked with Tutors India approaching a medical writer for my research paper in multiple chronic conditions. They are truly exceptional. Diligent, enthusiastic, with great attention to detail. They combined broad scientific knowledge and technical skills to produce documents of great quality delivered on time.", author: "Heidi", avatar: "/images/testimonials/t19.jpg" },
  { quote: "I was struggling to write a medical manuscript of cancer biomarkers in a professional manner. After many attempts, a friend suggested Tutors India. I'm very much satisfied with their service!", author: "Nitara", avatar: "/images/testimonials/t04.jpg" },
  { quote: "Tutors India is a skilled and experienced medical writing service that can deliver high-quality work quickly and consistently. I trust Tutors India to handle writing jobs that require a speedy turnaround.", author: "Brinda", avatar: "/images/testimonials/Brinda.jpg" },
];

export default function MedicalWritingPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}<Link href="/our-services/publication-support/" style={{ color: "#a0b8e0" }}>Publication Support</Link>{" / "}<span style={{ color: "#fff" }}>Medical Writing</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              Professional Medical Writing Services
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Most medical students, fellows, and residents find writing a scientific medical manuscript challenging. Tutors India&apos;s professional medical writers deliver high-quality work quickly and consistently — from clinical manuscripts to regulatory documents, systematic reviews to grant proposals.
            </p>
            <p style={{ color: "#f9c74f", fontSize: "0.92rem", fontWeight: 600, marginBottom: "20px" }}>NEJM · Lancet · BMJ · JAMA · Specialty Journals</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/tutorsindia-logo-hd.jpg" alt="Tutors India" style={{ width: "90px", height: "90px", objectFit: "contain", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>MD/PhD Writers<br />PRISMA Compliant<br />ICH-GCP Standards</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px", marginBottom: "28px" }} className="three-col-grid">
          {medicalServices.map(s => (
            <div key={s.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{s.icon}</div>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{s.title}</h3>
              <p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.65 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>What Our Clients Say</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px" }} className="three-col-grid">
            {testimonials.map((t, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px" }}>
                <div style={{ color: "#e87722", fontSize: "2rem", lineHeight: 1, marginBottom: "6px", fontFamily: "serif" }}>&ldquo;</div>
                <p style={{ color: "#555", fontSize: "0.84rem", lineHeight: 1.7, fontStyle: "italic", marginBottom: "12px" }}>{t.quote}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <img src={t.avatar} alt={t.author} style={{ width: "36px", height: "36px", borderRadius: "50%", objectFit: "cover" }} loading="lazy" />
                  <div style={{ fontWeight: 700, color: "#1a2a6c", fontSize: "0.84rem" }}>{t.author}</div>
                </div>
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
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Expert Medical Writing Support</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>MD/PhD Writers · PRISMA Compliant · All Medical Journals · Response in 30 min</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
