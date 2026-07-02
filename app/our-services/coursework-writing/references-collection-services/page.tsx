import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "UK References Collection Services",
  description: "Comprehensive References Collection Services. Peer-reviewed sources from Web of Science, ProQuest, Emerald, IEEE, Google Scholar. Harvard, APA, MLA, Chicago. Tutors India.",
};

const databaseSources = [
  { name: "Web of Science", type: "Multi-disciplinary", icon: "🌐" },
  { name: "ProQuest", type: "Business & Social Sciences", icon: "📊" },
  { name: "Google Scholar", type: "Multi-disciplinary", icon: "🔍" },
  { name: "Emerald Insight", type: "Business & Management", icon: "💼" },
  { name: "JSTOR", type: "Humanities & Social Sciences", icon: "📚" },
  { name: "ScienceDirect", type: "STEM & Medicine", icon: "🔬" },
  { name: "IEEE Xplore", type: "Engineering & CS", icon: "💻" },
  { name: "Academic Complete", type: "Multi-disciplinary", icon: "🎓" },
  { name: "PubMed / MEDLINE", type: "Medicine & Health", icon: "🏥" },
  { name: "Scopus", type: "Multi-disciplinary", icon: "📋" },
  { name: "CINAHL", type: "Nursing & Allied Health", icon: "🩺" },
  { name: "PsycINFO", type: "Psychology & Behavioural", icon: "🧠" },
];

const citationStyles = [
  { style: "Harvard", desc: "Most common in UK universities — author-date system" },
  { style: "APA (7th Ed.)", desc: "Psychology, Education, Social Sciences" },
  { style: "MLA", desc: "Humanities, Literature, Languages" },
  { style: "Chicago", desc: "History, Arts, Business" },
  { style: "Vancouver", desc: "Medicine, Health Sciences" },
  { style: "OSCOLA", desc: "Law — UK standard legal citation" },
  { style: "Turabian", desc: "Academic papers, theses" },
  { style: "IEEE", desc: "Engineering and Computer Science" },
];

const serviceTiers = [
  { tier: "Basic", color: "#2563b0", desc: "Collection of relevant peer-reviewed references from key academic databases with proper formatting in your required citation style.", includes: ["10–20 peer-reviewed sources", "Key database search", "Required citation style", "Alphabetical ordering", "DOI/URL included"] },
  { tier: "Advanced", color: "#1a2a6c", desc: "Comprehensive reference collection with annotated bibliography, covering a wider range of databases and source types.", includes: ["20–50 peer-reviewed sources", "Multiple database search", "Annotated bibliography", "Thematic organisation", "Full PDF sharing where possible"] },
  { tier: "Premium", color: "#e87722", desc: "Exhaustive reference collection with critical evaluation, full-text article sourcing, and organised thematic framework.", includes: ["50+ peer-reviewed sources", "Exhaustive database coverage", "Critical source evaluation", "Thematic framework", "Full-text PDFs shared"] },
];

const faqs = [
  { q: "What databases do you search for references?", a: "We search across the most comprehensive academic databases including Web of Science, ProQuest, Google Scholar, Emerald Insight, JSTOR, ScienceDirect (Elsevier), IEEE Xplore, Academic Complete, PubMed/MEDLINE, Scopus, CINAHL, and PsycINFO. We select the most relevant databases based on your subject area and research topic." },
  { q: "What types of sources do you collect?", a: "We collect peer-reviewed journal articles, academic textbooks, book chapters, conference papers, systematic reviews, meta-analyses, government reports, institutional publications, newspaper articles (e.g., Economic Times, Forbes, Wall Street Journal), and other credible academic and industry sources appropriate to your research topic and level of study." },
  { q: "Can you collect references on a specific topic?", a: "Yes. Please provide your research topic, key themes, any specific authors or seminal works you already know about, and your date range preference (e.g., last 5–7 years). Our researchers will conduct a systematic database search and return a comprehensive list of relevant, high-quality references." },
  { q: "Do you provide the full-text articles?", a: "We share full-text PDFs of articles wherever legally accessible through institutional or open-access databases. For paid sources, we provide the complete citation details (title, authors, journal, volume, pages, DOI) so you can access them through your own university library or database subscription." },
  { q: "Which citation styles do you support?", a: "We support all major citation styles including Harvard, APA (7th Edition), MLA, Chicago, Vancouver, OSCOLA (for law), Turabian, IEEE, and any other university-specific style. Simply specify your required referencing style when ordering and all references will be formatted accordingly." },
  { q: "How quickly can you collect references?", a: "Standard reference collection (10–30 sources) is delivered within 24–48 hours. Larger collections (50+ sources) may take 3–5 days depending on the breadth of the topic. Urgent delivery is available. Contact us with your requirements for an accurate timeline." },
];

const testimonials = [
  { quote: "Tutors India has expanded its academic services and provided me with solid reference collection that I am looking for. They restlessly worked for gathering references for my research work all over the world which are of great value. The best experience you can imagine!", author: "Ishir", avatar: "/images/testimonials/t18.jpg" },
  { quote: "Thank you Tutors India for giving me wonderful topic selection, it got approved and further from research proposal to citation, I need the same support.", author: "K S", location: "Boston, US", avatar: "/images/testimonials/user-profile.png" },
  { quote: "Our dissertation work is fully referenced with latest articles and textbooks. They refer only peer-reviewed sources from Web of Science, ProQuest, Google Scholar, and more. The quality of sources was exceptional.", author: "Alexander", location: "Algeria", avatar: "/images/testimonials/t16.jpg" },
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies", "Marketing & Communication",
  "Engineering & Technology", "Natural Sciences & Mathematics", "Biological & Life Science", "Economics & Administration",
  "Humanities & Social Science", "Law", "Medicine & Health", "Education & Training",
  "Psychology", "Computer Science & IT", "Agriculture & Forestry", "Hospitality, Leisure & Sports",
];

export default function ReferencesCollectionPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}<Link href="/our-services/coursework-writing/" style={{ color: "#a0b8e0" }}>Coursework Writing</Link>{" / "}<span style={{ color: "#fff" }}>References Collection</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              Comprehensive UK References Collection Services
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Referencing is given major significance in your dissertation and academic work. Our experts collect comprehensive, up-to-date references from peer-reviewed journals, textbooks, and credible academic databases — formatted precisely in your required citation style.
            </p>
            <p style={{ color: "#f9c74f", fontSize: "0.92rem", fontWeight: 600, marginBottom: "24px" }}>
              Web of Science · ProQuest · Emerald · IEEE · Google Scholar · Scopus &amp; more
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/samples/assignment-writing.jpg" alt="Student working on academic assignment" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>12+ Databases<br />8 Citation Styles<br />24–48hr Delivery</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      <div style={{ background: "#12214a", padding: "16px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: "12+", l: "Academic Databases" }, { n: "8", l: "Citation Styles" }, { n: "Peer-Reviewed", l: "Sources Only" }, { n: "24–48h", l: "Delivery" }, { n: "Unlimited", l: "Revisions" }, { n: "30 min", l: "Response" }].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
              <div style={{ fontSize: "0.68rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Expert References Collection Service</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            Our experts collect comprehensive references from the most credible academic databases including Web of Science, ProQuest, Google Scholar, Business Source Complete, and latest newspaper articles such as Economic Times, Forbes, The Wall Street Journal, and The Economist to identify the industrial problem and support your research arguments.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.94rem" }}>
            We strongly believe in using updated research content from multiple sources to ensure the research works are updated, plagiarism-free, and justified from different perceptions. All references are sourced from high-quality, peer-reviewed journals and research databases and referenced properly according to university requirements.
          </p>
        </div>

        {/* Database Sources Grid */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Academic Databases We Search</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "18px" }}>12+ premium academic databases across all disciplines</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "12px" }} className="four-col-grid">
            {databaseSources.map(db => (
              <div key={db.name} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "14px", display: "flex", gap: "10px", alignItems: "center" }}>
                <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>{db.icon}</span>
                <div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1a2a6c" }}>{db.name}</div>
                  <div style={{ fontSize: "0.72rem", color: "#888" }}>{db.type}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Citation Styles */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Citation Styles We Support</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "18px" }}>All major citation and referencing styles across academic disciplines</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "12px" }} className="four-col-grid">
            {citationStyles.map(c => (
              <div key={c.style} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "8px", padding: "14px" }}>
                <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "5px", padding: "4px 10px", fontSize: "0.82rem", fontWeight: 700, display: "inline-block", marginBottom: "6px" }}>{c.style}</div>
                <div style={{ fontSize: "0.76rem", color: "#666" }}>{c.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Tiers */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>Service Tiers</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
            {serviceTiers.map(t => (
              <div key={t.tier} style={{ background: "#fff", border: `2px solid ${t.color}`, borderRadius: "10px", overflow: "hidden" }}>
                <div style={{ background: t.color, color: "#fff", padding: "14px 18px" }}><div style={{ fontSize: "1.2rem", fontWeight: 700 }}>{t.tier}</div></div>
                <div style={{ padding: "16px" }}>
                  <p style={{ fontSize: "0.84rem", color: "#555", lineHeight: 1.65, marginBottom: "12px" }}>{t.desc}</p>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {t.includes.map(i => (<li key={i} style={{ display: "flex", gap: "6px", fontSize: "0.78rem", color: "#555", padding: "4px 0", borderBottom: "1px solid #f0f2fa" }}><span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>✓</span> {i}</li>))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What We Deliver */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "22px", marginBottom: "28px" }} className="two-col-grid">
          <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "14px" }}>What We Deliver</h3>
            {["Fully formatted reference list in required style", "Peer-reviewed journal articles", "Academic textbooks and book chapters", "Conference papers and proceedings", "Government reports and institutional publications", "Industry reports and newspaper articles", "Full-text PDFs where accessible", "DOI links for all journal articles", "Alphabetically organised list", "Annotated bibliography on request"].map(item => (
              <div key={item} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", fontSize: "0.83rem", color: "#c5d5f0" }}>
                <span style={{ color: "#f9c74f", fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
              </div>
            ))}
          </div>
          <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px", border: "1px solid #dde2ef" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our Guarantees</h3>
            {["Peer-reviewed sources only", "Latest publications (typically last 5–7 years)", "Unlimited revisions if sources not relevant", "24–48 hour standard delivery", "Three-level quality check", "100% confidentiality", "DOI verified for all journal articles", "Subject-specific researcher allocation"].map((g, i) => (
              <div key={i} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid #dde2ef", fontSize: "0.83rem", color: "#555" }}>
                <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>{i + 1}.</span> {g}
              </div>
            ))}
          </div>
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
                  <div>
                    <div style={{ fontWeight: 700, color: "#1a2a6c", fontSize: "0.84rem" }}>{t.author}</div>
                    {t.location && <div style={{ fontSize: "0.72rem", color: "#888" }}>{t.location}</div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Frequently Asked Questions</h2>
          <FaqAccordion faqs={faqs} />
        </div>

        <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px" }}>
          <p style={{ color: "#666", fontSize: "0.86rem", marginBottom: "14px", fontWeight: 600 }}>Expert researchers covering all academic disciplines</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {subjects.map(s => (<span key={s} style={{ padding: "5px 13px", background: "#fff", border: "1.5px solid #dde2ef", borderRadius: "16px", fontSize: "0.79rem", color: "#1a2a6c", fontWeight: 500 }}>{s}</span>))}
          </div>
        </div>
      </section>

      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Your References Collected by Academic Experts</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>12+ Databases · 8 Citation Styles · 24–48hr Delivery · Peer-Reviewed Only</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
