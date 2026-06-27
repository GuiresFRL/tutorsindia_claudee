import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
export const metadata: Metadata = { title: "Arts & Humanities Academic Writing Help | Masters, PhD | Tutors India", description: "Expert Arts & Humanities academic writing. Literature, History, Philosophy, Cultural Studies, Media Studies, Sociology. Masters & PhD. Tutors India." };
const areas = ["English Literature & Linguistics","History & Historiography","Philosophy & Ethics","Cultural Studies","Media & Communication Studies","Sociology","Anthropology","Political Science","International Relations","Gender Studies","Archaeology","Art History","Music & Musicology","Theatre & Performance Studies","Creative Writing","Education & Pedagogy"];
const faqs = [
  { q: "What arts and humanities subjects do you cover?", a: "Writing an arts and humanities paper can be stressful, specifically when your objective is to obtain a good grade. We cover English Literature & Linguistics, History, Philosophy & Ethics, Cultural Studies, Media & Communication, Sociology, Anthropology, Political Science, International Relations, Gender Studies, Archaeology, Art History, Music, Theatre, Creative Writing, and Education." },
  { q: "What citation styles do you use for arts and humanities?", a: "For humanities disciplines, we primarily use MLA (9th edition) for literature and languages, Chicago (18th edition) for history, Turabian for theses and papers, Harvard for social sciences, and APA for psychology and education. We ensure the exact style required by your university or journal." },
  { q: "Can you help with literary analysis dissertations?", a: "Yes. Our literature specialists provide comprehensive support for literary analysis dissertations — close textual analysis, theoretical framework application (post-colonialism, feminism, psychoanalysis, structuralism, deconstruction), comparative literature, historical contextualisation, and critical engagement with secondary literature." },
  { q: "Do you handle historical research and archival work?", a: "Yes. Our history specialists provide support for historical research dissertations and essays — identifying appropriate primary and secondary sources, historiographical analysis, critical evaluation of historical evidence, archival research guidance, and presentation of historical arguments in clear academic prose." },
  { q: "What philosophical writing support do you offer?", a: "We provide philosophy essay and dissertation support covering major philosophical traditions (analytic, continental, Eastern), ethical theory, political philosophy, metaphysics, epistemology, philosophy of mind, and applied ethics. All philosophical arguments are developed with logical rigour and proper citation of philosophical literature." },
];
export default function ArtsHumanitiesPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}><Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/subjects/" style={{ color: "#a0b8e0" }}>Subjects</Link>{" / "}<span style={{ color: "#fff" }}>Arts & Humanities</span></div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>Arts &amp; Humanities Academic Writing Help</h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>Writing an arts and humanities paper can be stressful, specifically when your objective is to obtain a good grade. Our expert writers in literature, history, philosophy, cultural studies and creative arts provide comprehensive academic writing support for Masters and PhD students.</p>
            <p style={{ color: "#f9c74f", fontSize: "0.92rem", fontWeight: 600, marginBottom: "22px" }}>MLA · Chicago · Turabian · Literature · History · Philosophy · Cultural Studies</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}><Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link><Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link></div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/tutorsindia-logo-hd.jpg" alt="Tutors India" style={{ width: "90px", height: "90px", objectFit: "contain", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>PhD Humanists<br />MLA · Chicago<br />All Disciplines</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ marginBottom: "28px" }}><h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Arts & Humanities Areas We Cover</h2><div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>{areas.map(a => (<span key={a} style={{ padding: "5px 13px", background: "#fff", border: "1.5px solid #dde2ef", borderRadius: "16px", fontSize: "0.79rem", color: "#1a2a6c", fontWeight: 500 }}>{a}</span>))}</div></div>
        <div style={{ marginBottom: "28px" }}><h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Frequently Asked Questions</h2><FaqAccordion faqs={faqs} /></div>
      </section>
      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Expert Arts & Humanities Writing Support</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>PhD Humanists · MLA · Chicago · All Disciplines · Response in 30 min</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}><Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link><Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link></div>
      </section>
    </>
  );
}
