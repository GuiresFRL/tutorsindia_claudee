import Link from "next/link";
import type { Metadata } from "next";
import { getTIPageById } from "@/lib/api/tutorsindia";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Referencing & Citation Style Guides",
  description: "Complete guide to referencing and citation styles — Harvard, APA, MLA, Chicago, Vancouver, OSCOLA, Turabian, IEEE. Free referencing guide for academic writing. Tutors India.",
  
  alternates: { canonical: "https://www.tutorsindia.com/referencing-and-citation-manual-of-styles/" },
};

const styles = [
  {
    name: "Harvard Referencing",
    code: "HAR",
    color: "#1a2a6c",
    used: "Most common in UK universities",
    format: 'Smith, J. (2023) "Title of article", Journal Name, Vol. 10, No. 2, pp. 45–60.',
    notes: "Author-date system. Author surname, initial(s), year, title in quotation marks or italics, source details. No footnotes.",
    disciplines: ["Business & Management", "Social Sciences", "Humanities", "Health Sciences"],
    includes: ["In-text: (Smith, 2023)", "Reference list: alphabetical", "Books, journals, websites, reports all covered", "Specific UK university variations apply"],
  },
  {
    name: "APA (7th Edition)",
    code: "APA",
    color: "#2563b0",
    used: "Psychology, Education, Social Sciences",
    format: "Smith, J. A. (2023). Title of article. Journal Name, 10(2), 45–60. https://doi.org/xxxxx",
    notes: "American Psychological Association. Author-date. 7th edition introduced doi/URL formatting changes.",
    disciplines: ["Psychology", "Education", "Social Sciences", "Nursing"],
    includes: ["In-text: (Smith, 2023, p. 45)", "References page: hanging indent", "DOI/URL required for electronic sources", "Up to 20 authors listed"],
  },
  {
    name: "MLA (9th Edition)",
    code: "MLA",
    color: "#7c3aed",
    used: "Humanities, Literature, Languages",
    format: 'Smith, John. "Title of Article." Journal Name, vol. 10, no. 2, 2023, pp. 45–60.',
    notes: "Modern Language Association. Works Cited page. Author-page in-text (Smith 45). 9th edition emphasizes containers.",
    disciplines: ["English Literature", "Linguistics", "Cultural Studies", "Film Studies"],
    includes: ["In-text: (Smith 45)", "Works Cited: alphabetical", "Container system for nested sources", "No date required in in-text"],
  },
  {
    name: "Chicago (18th Edition)",
    code: "CHI",
    color: "#b45309",
    used: "History, Arts, Business",
    format: 'Smith, John. "Title of Article." Journal Name 10, no. 2 (2023): 45–60.',
    notes: "Two systems: Notes-Bibliography (humanities) and Author-Date (sciences). 18th edition updated digital source guidance.",
    disciplines: ["History", "Arts & Humanities", "Business", "Social Sciences"],
    includes: ["Notes-Bibliography: footnotes + bibliography", "Author-Date: in-text + reference list", "Full notes vs. shortened notes", "Ibid. for repeated citations"],
  },
  {
    name: "Vancouver System",
    code: "VAN",
    color: "#059669",
    used: "Medicine, Health Sciences, Sciences",
    format: "1. Smith J, Jones A. Title of article. J Med. 2023;10(2):45-60.",
    notes: "Numbered system. Citations in text are sequential numbers in superscript or brackets. Common in medical journals (BMJ, Lancet).",
    disciplines: ["Medicine", "Nursing", "Pharmacology", "Biomedical Sciences"],
    includes: ["In-text: superscript number (¹) or [1]", "Reference list: numbered sequentially", "Abbreviated journal names (NLM)", "Up to 6 authors, then et al."],
  },
  {
    name: "OSCOLA",
    code: "OSC",
    color: "#dc2626",
    used: "Law — UK Standard",
    format: "Smith v Jones [2023] EWCA Civ 123 (Court of Appeal); Jane Smith, 'Title' (Oxford UP 2023) 45.",
    notes: "Oxford Standard for the Citation of Legal Authorities. Footnote-based system for legal documents and academic law papers.",
    disciplines: ["Law", "Legal Studies", "Jurisprudence", "Human Rights"],
    includes: ["Footnote citations throughout", "Separate bibliography", "Case law, statutes, secondary sources", "Pinpoint citations to specific paragraphs"],
  },
  {
    name: "Turabian",
    code: "TUR",
    color: "#6b7280",
    used: "Theses, Dissertations, Academic Papers",
    format: "Smith, John. 'Title of Article.' Journal Name 10, no. 2 (2023): 45–60.",
    notes: "Based on Chicago style. Designed specifically for students writing theses and dissertations. Two citation systems available.",
    disciplines: ["All Academic Disciplines", "Theses & Dissertations", "Research Papers", "Academic Writing"],
    includes: ["Notes-Bibliography or Author-Date", "Designed for student papers", "Simplified Chicago for theses", "Widely accepted in UK universities"],
  },
  {
    name: "IEEE",
    code: "IEEE",
    color: "#0284c7",
    used: "Engineering, Computer Science, Technology",
    format: '[1] J. Smith and A. Jones, "Title of paper," J. IEEE Trans., vol. 10, no. 2, pp. 45–60, 2023.',
    notes: "Institute of Electrical and Electronics Engineers. Bracketed numbered citations. Essential for IEEE journal/conference submissions.",
    disciplines: ["Computer Science", "Electrical Engineering", "Software Engineering", "Telecommunications"],
    includes: ["In-text: [1] in brackets", "Reference list: numbered order", "Abbreviated author names", "Required for all IEEE publications"],
  },
];

const tips = [
  { icon: "📌", tip: "Always check your university's specific referencing guide — even within the same style (e.g., Harvard), universities often have their own variations." },
  { icon: "🔍", tip: "Use reference management software (Zotero, Mendeley, EndNote) to manage large reference libraries and auto-format citations." },
  { icon: "✅", tip: "Every in-text citation must have a corresponding full reference in your reference list/bibliography — and vice versa." },
  { icon: "📅", tip: "For online sources, always include the date of access in addition to the URL or DOI, as web pages can change or disappear." },
  { icon: "🔢", tip: "For numbered systems (Vancouver, IEEE), citations must be numbered in the order they first appear in your document." },
  { icon: "💡", tip: "When in doubt, cite it! Over-citing is far less serious in academic writing than under-citing (which risks plagiarism)." },
];

export default async function ReferencingPage() {
  const page = await getTIPageById(499);
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<span style={{ color: "#fff" }}>Referencing &amp; Citation Manual</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.6rem,3vw,2.3rem)", marginBottom: "14px" }}>Referencing &amp; Citation Manual of Styles</h1>
          <p style={{ color: "#c5d5f0", fontSize: "1.05rem", lineHeight: 1.75, maxWidth: "800px", marginBottom: "22px" }}>
            A complete guide to all major academic referencing and citation styles. Understand when to use each style, how to format in-text citations and reference lists, and which disciplines require which system.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link href="/our-services/editing-services/citation-compliance/" style={{ padding: "11px 26px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Get Citation Help</Link>
            <Link href="/contact-us/" style={{ padding: "11px 26px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px", textAlign: "center" }}>Major Citation Styles — Complete Guide</h2>
        <p style={{ color: "#666", fontSize: "0.96rem", marginBottom: "36px", textAlign: "center" }}>8 referencing systems with examples, disciplines, and key rules</p>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom: "48px" }}>
          {styles.map((s) => (
            <div key={s.name} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", overflow: "hidden" }}>
              <div style={{ background: s.color, color: "#fff", padding: "16px 22px", display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ background: "rgba(255,255,255,0.2)", borderRadius: "6px", padding: "4px 10px", fontSize: "0.85rem", fontWeight: 700, fontFamily: "monospace" }}>{s.code}</span>
                <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700 }}>{s.name}</h3>
                <span style={{ marginLeft: "auto", fontSize: "0.78rem", opacity: 0.85 }}>{s.used}</span>
              </div>
              <div style={{ padding: "20px 22px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px" }} className="ref-grid">
                <div>
                  <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#1a2a6c", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "8px" }}>Example Format</div>
                  <code style={{ fontSize: "0.78rem", color: "#555", lineHeight: 1.7, background: "#f5f6fa", padding: "10px 12px", borderRadius: "6px", display: "block", border: "1px solid #dde2ef" }}>{s.format}</code>
                  <div style={{ marginTop: "10px", fontSize: "0.79rem", color: "#666", lineHeight: 1.6 }}>{s.notes}</div>
                </div>
                <div>
                  <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#1a2a6c", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "8px" }}>Key Rules</div>
                  {s.includes.map(rule => (
                    <div key={rule} style={{ display: "flex", gap: "7px", fontSize: "0.79rem", color: "#555", padding: "4px 0", borderBottom: "1px solid #f0f2fa" }}>
                      <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>→</span> {rule}
                    </div>
                  ))}
                </div>
                <div>
                  <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#1a2a6c", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "8px" }}>Common Disciplines</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {s.disciplines.map(d => (
                      <span key={d} style={{ padding: "3px 10px", background: "#f5f6fa", border: "1px solid #dde2ef", borderRadius: "10px", fontSize: "0.75rem", color: "#1a2a6c", fontWeight: 500 }}>{d}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tips */}
        <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "32px", marginBottom: "40px", border: "1px solid #dde2ef" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px" }}>Top Referencing Tips</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }} className="two-col-grid">
            {tips.map((t, i) => (
              <div key={i} style={{ display: "flex", gap: "12px", background: "#fff", borderRadius: "8px", padding: "14px", border: "1px solid #dde2ef" }}>
                <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>{t.icon}</span>
                <p style={{ fontSize: "0.84rem", color: "#555", lineHeight: 1.65 }}>{t.tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Citation Help CTA */}
        <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "36px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", fontWeight: 700, marginBottom: "10px" }}>Need Help with Your References?</h2>
          <p style={{ color: "#c5d5f0", fontSize: "0.93rem", marginBottom: "20px" }}>Our citation compliance experts format your entire reference list to 100% accuracy in your required style — Harvard, APA, MLA, OSCOLA, Vancouver, IEEE, and more.</p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/our-services/editing-services/citation-compliance/" style={{ padding: "11px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Citation Compliance Service</Link>
            <Link href="/order-now/" style={{ padding: "11px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Order Now</Link>
          </div>
        </div>
      </section>
      <style>{`@media(max-width:900px){.ref-grid{grid-template-columns:1fr!important;}.two-col-grid{grid-template-columns:1fr!important;}}`}</style>

      {/* Live WP content */}
      {page && (
        <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
          <div className="wp-content" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
        </section>
      )}
    </>
  );
}
