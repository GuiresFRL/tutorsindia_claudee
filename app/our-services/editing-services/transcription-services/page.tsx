import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
export const metadata: Metadata = { title: "Academic Transcription Services | Interview & Audio", description: "Professional Transcription Services for academic research. Interview transcripts, focus group recordings, conference audio. Verbatim & intelligent. Tutors India." };
const services = [
  { icon: "🎤", title: "Interview Transcription", desc: "Verbatim or intelligent verbatim transcription of research interviews — one-to-one, semi-structured, and unstructured interview recordings." },
  { icon: "👥", title: "Focus Group Transcription", desc: "Multi-speaker focus group and group discussion transcriptions with speaker identification and timestamps." },
  { icon: "🎧", title: "Audio Recording Transcription", desc: "Any audio recording converted to accurate text — lectures, webinars, conferences, meetings, and phone interviews." },
  { icon: "🎬", title: "Video Transcription", desc: "Video interview and recording transcription for qualitative research data analysis, including subtitle generation." },
  { icon: "🌐", title: "Foreign Language Transcription", desc: "Transcription of non-English recordings with optional translation into English for qualitative research analysis." },
  { icon: "📝", title: "Research-Ready Formatting", desc: "Transcripts formatted for direct import into NVIVO, Atlas-ti, or MAXQDA for qualitative data analysis." },
];
const faqs = [
  { q: "What types of transcription do you offer?", a: "Transcription in qualitative research is a critical element that is theoretical, interpretive and representational. Our transcription experts handle audio/video research recordings with complete accuracy — interview transcriptions, focus group transcriptions, audio recording transcriptions, video transcriptions, and foreign language transcriptions with optional translation." },
  { q: "What is the difference between verbatim and intelligent verbatim transcription?", a: "Verbatim transcription captures everything spoken word-for-word including filler words (um, uh), repetitions, false starts, and non-verbal sounds (laughter, pauses). Intelligent verbatim removes filler words and false starts, producing a cleaner, more readable transcript while preserving the complete meaning — most appropriate for research analysis." },
  { q: "How accurate are your transcriptions?", a: "Our transcription experts achieve 99%+ accuracy on clear audio recordings. For recordings with background noise or heavy accents, accuracy may vary — we will advise if we expect any issues before beginning work. All transcripts are proofread before delivery." },
  { q: "How quickly can you transcribe my recordings?", a: "Standard turnaround is approximately 2–4 hours of transcript per day of working time. A 1-hour interview recording typically takes 4–6 hours to transcribe accurately. Express delivery is available. Contact us with your file length for an accurate timeline and cost estimate." },
  { q: "Can you format transcripts for NVIVO or Atlas-ti?", a: "Yes. We format transcripts ready for direct import into NVIVO, Atlas-ti, MAXQDA, and other qualitative data analysis software. We apply appropriate speaker labels, timestamps, and paragraph formatting to facilitate efficient coding and analysis." },
];
export default function TranscriptionPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}<Link href="/our-services/editing-services/" style={{ color: "#a0b8e0" }}>Editing Services</Link>{" / "}<span style={{ color: "#fff" }}>Transcription Services</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>Academic Transcription Services</h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>Transcription in qualitative research is a critical element that is theoretical, interpretive, and representational. Our transcription experts handle audio/video research recordings with complete accuracy — interviews, focus groups, conferences, and more — formatted ready for NVIVO, Atlas-ti, or MAXQDA.</p>
            <p style={{ color: "#f9c74f", fontSize: "0.92rem", fontWeight: 600, marginBottom: "20px" }}>99%+ Accuracy · Verbatim &amp; Intelligent · NVIVO-Ready · 24hr Delivery</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/tutorsindia-logo-hd.jpg" alt="Tutors India" style={{ width: "90px", height: "90px", objectFit: "contain", marginBottom: "10px" }} />
            <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#f9c74f" }}>99%+</div>
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0" }}>Transcription<br />Accuracy<br />Research-Ready</div>
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
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Your Recordings Transcribed by Experts</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>99%+ Accuracy · NVIVO-Ready · 24hr Delivery · All Audio/Video Formats · 30 min Response</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
