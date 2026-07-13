import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata = {
  title: "Dissertation & manuscript Citation Compliance Service India UK | Tutors India",
  description: "Any research work without proper citations of referenced materials is prone to being rejected by evaluating committee. Tutors India offers dedicated experts for citation and references work.",
};

const faqs = [
  {
    q: "Are the tutors India offer quality citation compliance?",
    a: "Yes. Tutors India provides citation compliance team with researchers, formatters, typesetters, experienced editors and quality managers with extensive years of experience. We adhere to your university standards for inline citations as well as for the references and bibliography section.",
  },
  {
    q: "How do I know I will receive my citation work within the deadline?",
    a: "Our work is delivered at a specified date and time. We guarantee delivery of minor changes within 24 working hours and significant changes within 48 working hours. We acknowledge all your emails within 30 minutes of working hours. Further any delay in the delivery can be raised at customersupport@tutorsindia.com",
  },
  {
    q: "Why should I consider Tutors India for writing my citation compliance services?",
    a: "At Tutors India, we have dedicated experts for citation and references work. We adhere to your university standards for inline citations as well as for the references and bibliography section. We provide proper referencing format as per your request as our expertise has a rich experience in handling different referencing styles.",
  },
  {
    q: "How quickly can I Get my citation?",
    a: "You will get the reply within 30 minutes which would enable to place your order quickly without any delay in submissions. We deliver your work as per the schedule fixed and agreed or even before the schedule.",
  },
  {
    q: "What are types of formatting and citation styles used for my journal?",
    a: "The majority of the universities follow Harvard, APA, MLA, Vancouver, and Chicago. However, certain universities have their formats. The following are different format of referencing style: Harvard, APA, BMJ, Chicago, MHRA, MLA, OSCOLA, Oxford, Software, Turabian, Vancouver, IEEE, CSE (CBE), AGS, AGPS, AGLC.",
  },
  {
    q: "Where are your citation styles samples: Harvard, Vancouver, APA, MLA, CHICAGO, and Turabian?",
    a: "APA Style: Asha, M. H., Dravidan, D. P., & Harlow, T. (1993). Actions need to be completed. Journal of Social Psychology, 65, 1195-1207. BMJ style: Nantulya V, Reich M. The neglected epidemic: road traffic injuries in developing countries. BMJ 2002;324: 1139. Vancouver style: Vickers A. Guidelines for authors of books and papers on complementary medicine. Complement Ther Med 1999;7:245-9.",
  },
];

const testimonials = [
  { quote: "Honestly, I didn't expect this level of quality. The team understood exactly what I needed and delivered work that felt genuinely professional. My confidence went from stressed to unstoppable.", author: "Amelia Brooks", location: "UK — Big Data Analytics" },
  { quote: "I was stuck, frustrated, and running out of time. Tutors India stepped in at the perfect moment and turned everything around faster than I imagined. Worth every bit.", author: "Oliver Bennett", location: "UK — Big Data Analytics" },
  { quote: "The attention to detail was incredible. It didn't feel like I was working with a service provider — it felt like I had an expert academic partner guiding me throughout.", author: "Layla Al Mansoori", location: "Essay Writing and Assignment Writing" },
  { quote: "My research finally started making sense after working with this team. Their guidance simplified complex ideas and gave my project the structure it was missing.", author: "Hassan Al Falasi", location: "UAE — Essay Writing and Assignment Writing" },
  { quote: "I submitted my work with complete confidence for the first time ever. The quality, formatting, and clarity were all beyond what I hoped for.", author: "Charlotte Reed", location: "UK" },
  { quote: "The team handled everything professionally from start to finish. Timely updates, quick responses, and excellent academic quality — exactly what students need during stressful deadlines.", author: "Zain Al Hashmi", location: "UAE" },
  { quote: "The formatting service of Tutors India is good. The quality of work and service I got was really good. Great work with formatting and editing! They always pay attention to detail. I will definitely recommend this to my colleagues.", author: "Willow", location: "" },
  { quote: "Thank you Tutors India for giving me wonderful topic selection, it got approved and further from research proposal to citation, I need a same support.", author: "K S", location: "US, Boston" },
  { quote: "I was really struggling with my final semester master's degree, that's when I heard about Tutors India. They really guided me the whole way to produce research proposal just from the idea of a research title. The level of detail which went into creating the research proposal is astonishing. The technical concepts they advised for methodology were very advanced and algorithms used were state of the art. Would definitely recommend Tutors India to anyone who is struggling to complete their research work.", author: "David Morrison", location: "" },
  { quote: "What impressed me most was how personalized the support felt. They didn't just complete the work — they understood my goals and helped me present them better.", author: "Khalid Al Nuaimi", location: "" },
];

const subjectAreas = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies",
  "Marketing & Communication", "Engineering & Technology", "Natural Sciences & Mathematics",
  "Biological & Life science", "Economics & Administration", "Humanities & Social Science",
  "Law", "Medicine & Health", "Education & Training", "Journalism & Media",
  "Agriculture & Forestry", "Computer Science & IT", "Hospitality, Leisure & Sports",
];

const citationStyles = [
  "Harvard", "APA", "BMJ", "Chicago", "MHRA", "MLA", "OSCOLA",
  "Oxford", "Software", "Turabian", "Vancouver", "IEEE", "CSE (CBE)", "AGS", "AGPS", "AGLC",
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function CitationCompliancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap');
        .three-col-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.5rem; }
        .four-col-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 1.5rem; }
        .two-col-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 1.5rem; }
        @media(max-width:768px){
          .three-col-grid,.four-col-grid,.two-col-grid{ grid-template-columns:1fr; }
        }
      `}</style>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "4rem 1rem 3rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "0.85rem", opacity: 0.7, marginBottom: "0.5rem" }}>Editing Services / Citation Compliance</p>
          <h1 style={{ fontFamily: "'Merriweather',serif", fontSize: "clamp(1.5rem,3vw,2.4rem)", fontWeight: 700, lineHeight: 1.3, marginBottom: "1.5rem" }}>
            Dissertation &amp; manuscript Citation Compliance Service
          </h1>
          <p style={{ fontSize: "1.1rem", opacity: 0.9, maxWidth: 750, margin: "0 auto 0.75rem" }}>
            Any research work without proper citations of referenced materials is prone to being rejected by evaluating committee. Researchers are worried about citation compliance of their research work according to their university guidelines/journals they intend to publish their work. The penalty of plagiarism is huge and the effort for the complete year is wasted.
          </p>
          <p style={{ fontSize: "1rem", opacity: 0.8, maxWidth: 700, margin: "0 auto 2rem" }}>
            Dissertation &amp; manuscript Citation Compliance Service are carried out by qualified and experienced researchers from the US &amp; UK
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/order" style={{ background: "#e87722", color: "#fff", padding: "0.75rem 2rem", borderRadius: 4, fontWeight: 700, textDecoration: "none" }}>Place an Order</a>
            <a href="/brochure" style={{ background: "transparent", color: "#fff", padding: "0.75rem 2rem", borderRadius: 4, fontWeight: 700, textDecoration: "none", border: "2px solid #fff" }}>Brochure</a>
          </div>
        </div>
      </section>

      {/* Author Byline */}
      <div style={{ background: '#1a2a6c', padding: '0.65rem 1rem', borderTop: '2px solid #e87722' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          <span style={{ color: '#f9c74f', fontSize: '1.1rem' }}>✍</span>
          <p style={{ color: '#e2e8f8', fontSize: '0.8rem', margin: 0 }}>
            <strong style={{ color: '#fff' }}>Reviewed by Prof. Anita Patel</strong> — Citation Standards &amp; Reference Compliance Lead &middot; APA, Vancouver, IEEE &amp; Harvard specialist &middot; 16+ years in academic reference management
          </p>
        </div>
      </div>

      {/* Service intro */}
      <section style={{ padding: "3rem 1rem", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            Dissertation &amp; manuscript Citation Compliance Service
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333", marginBottom: "1.25rem" }}>
            The majority of the universities follow Harvard, APA, MLA, Vancouver, and Chicago. However, certain universities have their formats. At Tutors India, we have dedicated experts for citation and references work. We adhere to your university standards for inline citations as well as for the references and bibliography section. Consult us today and avail our services at competitive prices. In Ph.D. thesis or Master's dissertation referencing is an important part. At Tutors India, we provide proper referencing format as per your request as our expertise has a rich experience in handling different referencing styles. References should always be selective, comprehensive, pertinent and accurate. For referencing style, you need to check with the university format, however, if not try to adhere to any one style of referencing.
          </p>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#555", marginBottom: "1.5rem" }}>
            The following are different format of referencing style:
          </p>
          <div className="four-col-grid">
            {citationStyles.map((s) => (
              <div key={s} style={{ background: "#f0f4ff", borderRadius: 6, padding: "0.6rem 1rem", color: "#1a2a6c", fontWeight: 600, fontSize: "0.9rem", textAlign: "center" }}>{s}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Format Examples */}
      <section style={{ padding: "3rem 1rem", background: "#f0f4ff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.5rem" }}>
            Examples of different Formats
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "#fff", borderRadius: 8, overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.07)" }}>
              <thead>
                <tr style={{ background: "#1a2a6c", color: "#fff" }}>
                  <th style={{ padding: "0.85rem 1rem", textAlign: "left", width: "20%" }}>Style</th>
                  <th style={{ padding: "0.85rem 1rem", textAlign: "left" }}>Example</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["APA Style", "Asha, M. H., Dravidan, D. P., & Harlow, T. (1993). Actions need to be completed. Journal of Social Psychology, 65, 1195-1207."],
                  ["BMJ style of format", "Nantulya V, Reich M. The neglected epidemic: road traffic injuries in developing countries. BMJ 2002;324: 1139."],
                  ["Vancouver style of format", "Vickers A. Guidelines for authors of books and papers on complementary medicine. Complement Ther Med 1999;7:245-9."],
                ].map(([style, example], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f8f9ff" }}>
                    <td style={{ padding: "0.85rem 1rem", color: "#1a2a6c", fontWeight: 600, verticalAlign: "top" }}>{style}</td>
                    <td style={{ padding: "0.85rem 1rem", color: "#333", lineHeight: 1.7 }}>{example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* References from database */}
      <section style={{ padding: "3rem 1rem", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            References from our database
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333" }}>
            Most of the student / research scholar suffer to get appropriate references from websites and moreover some student even difficult to identify appropriate / authenticated references. The sites like blogs, wikis are not usually recommended as an authenticated source for referencing. At Tutors India, in addition to referencing format, we also help you to get appropriate articles from our database.
          </p>
        </div>
      </section>

      {/* Team of Researchers */}
      <section style={{ padding: "3rem 1rem", background: "#f0f4ff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            Team of Researchers at Tutors India
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333", marginBottom: "1.25rem" }}>
            Tutors India provides citation compliance team with researchers, formatters, typesetters, experienced editors and quality managers with extensive years of experience. Our translation experts also have the expertise, in subject specific translation proficiency. We also offer faster turn-around period and perfect delivery with complete assistance to scholars around the world.
          </p>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#555" }}>
            Transcribers are qualified an experienced researcher from the US &amp; UK. Our translators are native English speakers and trained for the specific Translation service, Subject-Matter Expertise, experienced Professionals and Language Experts for Multilingual Translation
          </p>
          <div style={{ marginTop: "1.25rem" }}>
            <a href="/our-process" style={{ color: "#e87722", fontWeight: 700, textDecoration: "none" }}>Our Process →</a>
          </div>
        </div>
      </section>

      {/* Authentic reliable */}
      <section style={{ padding: "3rem 1rem", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            Academic &amp; Research Translation Services at Tutors India is authentic, genuine, prompt and reliable.
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333" }}>
            We Accept AIF, DVD, MP2, MSV, WMV, VOB, QTFF, MP3, AIFF, AMR, FLV, MP4, RM, AVI, M4A, MPEG, WAV, DSV, MOV, MPG, WMA, VOB
          </p>
        </div>
      </section>

      {/* Deliverables */}
      <section style={{ padding: "3rem 1rem", background: "#f0f4ff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            Our deliverables while you order Dissertation &amp; manuscript Citation Compliance Service
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333" }}>
            Our dissertation &amp; manuscript Citation Compliance Service from Tutors India research writing services is simply easy and straightforward. You will get the reply within 30 minutes which would enable to place your order quickly without any delay in submissions.
          </p>
        </div>
      </section>

      {/* What Services / Tiers */}
      <section style={{ padding: "3rem 1rem", background: "#1a2a6c", color: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "0.75rem", color: "#f9c74f" }}>
            What Services do we offer under Dissertation &amp; manuscript Citation Compliance Service?
          </h2>
          <p style={{ opacity: 0.9, lineHeight: 1.8, marginBottom: "2rem" }}>
            We work according to your instruction with specific reference to the styles that adhere to your individual institution's guidelines and return the document to high-quality MS Word or PDF document.
          </p>
          <div className="three-col-grid">
            {[
              { tier: "Basic", desc: "Developed based on the relevant sources, a reasonable attempt at finding an area that warrant research & evidence of an attempt to provide critical evaluation but mainly descriptive." },
              { tier: "Advanced", desc: "Wide range of sources, a clear identification of research gap in the literature along with aim and research questions" },
              { tier: "Premium", desc: "Refers to a wide range of seminal research with throughout engagement using latest resources. A solid gap would be identified based on the current literature & justified thoroughly & Excellent critical analysis would be shown (upgradable)" },
            ].map((t) => (
              <div key={t.tier} style={{ border: "1px solid rgba(255,255,255,0.2)", borderRadius: 8, padding: "1.75rem", background: "rgba(255,255,255,0.07)" }}>
                <h3 style={{ color: "#e87722", fontFamily: "'Merriweather',serif", fontSize: "1.15rem", marginBottom: "0.75rem" }}>{t.tier}</h3>
                <p style={{ opacity: 0.9, lineHeight: 1.7 }}>{t.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <a href="/order" style={{ background: "#e87722", color: "#fff", padding: "0.75rem 2.5rem", borderRadius: 4, fontWeight: 700, textDecoration: "none", display: "inline-block" }}>ORDER NOW</a>
          </div>
        </div>
      </section>

      {/* Specialized Subject Matter Expertise */}
      <section style={{ padding: "3rem 1rem", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            Specialized Subject Matter Expertise across the globe
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333", marginBottom: "2rem" }}>
            We offer complete specific master's dissertation writing service for Management, Finance &amp; Economics, Social Science, Engineering, Technology, Life Science, Medicine, Arts &amp; Literature / Linguistics, and more
          </p>
          <div className="four-col-grid">
            {subjectAreas.map((s) => (
              <div key={s} style={{ background: "#f0f4ff", borderRadius: 6, padding: "0.75rem 1rem", color: "#1a2a6c", fontWeight: 500, fontSize: "0.9rem" }}>{s}</div>
            ))}
          </div>
          <div style={{ marginTop: "1.5rem" }}>
            <a href="/our-writers" style={{ color: "#e87722", fontWeight: 700, textDecoration: "none" }}>Our Writers →</a>
          </div>
        </div>
      </section>

      {/* Deliverables 2 */}
      <section style={{ padding: "3rem 1rem", background: "#f0f4ff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            Our deliverables while you order Dissertation &amp; manuscript Citation Compliance Service
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333" }}>
            Our Academic &amp; Research Translation Services from Tutors India research writing services is simply easy and straightforward. You will get the reply within 30 minutes which would enable to place your order quickly without any delay in submissions.
          </p>
        </div>
      </section>

      {/* How Does It Work */}
      <section style={{ padding: "3rem 1rem", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            How Does it work?
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333" }}>
            After the order is confirmed, we allocate the special team to scrutinize the work regarding necessary availability requirements that would be essential to complete the work. Once the process is done, in case there are any queries, we ensure to ask during the initial stage of your work and send you the outline proposed for writing secondary data collection based dissertation. Once the outline along with the chapterization plan is approved, we will dispatch the work in chapters, and update you on the progress of your work. Our exclusive coordinators would get in touch with you to clarify any queries. You can also pay in installments and work will be started as soon as receive the payments. We deliver your work as per the schedule fixed and agreed or even before the schedule.
          </p>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: "3rem 1rem", background: "#f0f4ff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "2rem" }}>
            Dissertation &amp; manuscript Citation Compliance Service features
          </h2>
          <h3 style={{ color: "#e87722", fontFamily: "'Merriweather',serif", fontSize: "1.1rem", marginBottom: "1rem" }}>Formatting &amp; Typesetting Service</h3>
          <h3 style={{ color: "#1a2a6c", fontFamily: "'Merriweather',serif", fontSize: "1rem", marginBottom: "1rem" }}>Examples of different Formats</h3>
          <div style={{ background: "#fff", borderRadius: 8, padding: "1.5rem", marginBottom: "1.5rem", border: "1px solid #dde4f0" }}>
            <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "0.75rem" }}><strong>APA Style</strong> Asha, M. H., Dravidan, D. P., &amp; Harlow, T. (1993). Actions need to be completed. Journal of Social Psychology, 65, 1195-1207.</p>
            <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "0.75rem" }}><strong>BMJ style of format</strong> Nantulya V, Reich M. The neglected epidemic: road traffic injuries in developing countries. BMJ 2002;324: 1139.</p>
            <p style={{ color: "#333", lineHeight: 1.8 }}><strong>Vancouver style of format</strong> Vickers A. Guidelines for authors of books and papers on complementary medicine. Complement Ther Med 1999;7:245-9.</p>
          </div>
          <h3 style={{ color: "#e87722", fontFamily: "'Merriweather',serif", fontSize: "1.1rem", marginBottom: "0.75rem" }}>References from our database</h3>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333" }}>
            Most of the student / research scholar suffer to get appropriate references from websites and moreover some student even difficult to identify appropriate / authenticated references. The sites like blogs, wikis are not usually recommended as an authenticated source for referencing. At Tutors India, in addition to referencing format, we also help you to get appropriate articles from our database.
          </p>
        </div>
      </section>

      {/* Master's Dissertation */}
      <section style={{ padding: "3rem 1rem", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            Master's Dissertation Part or chapter need to convince the Supervisory Committee
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333", marginBottom: "1.25rem" }}>
            We write part or chapter wise master's dissertation from the introduction to recommendations. Though it looks very simple, it is a tedious task to complete each and every step. The steps involved in such tedious task. Namely identification of topic, reviewing the literature or literature review, problem statement, research question(s)and research hypothesis development, research design (sampling, measures, procedures and data collection), statistical analysis, (data analysis preparation, data entry and screening, interpretation), discussion, results, recommendation and conclusion.
          </p>
          <ul style={{ paddingLeft: "1.5rem", color: "#333", lineHeight: 2.1, marginBottom: "1.5rem" }}>
            <li>Thorough spell checks and general formatting</li>
            <li>Checking for sentence fragments and run-on sentences.</li>
            <li>Checking for non-parallel structure, coordination, and subordination.</li>
          </ul>
          <h3 style={{ color: "#1a2a6c", fontFamily: "'Merriweather',serif", fontSize: "1.1rem", marginBottom: "0.75rem" }}>What We deliver while your order for questionnaire development service</h3>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333" }}>
            We deliver more than your expectation – ensure to provider the proper context, delimit the boundary condition, cite landmark studies, stay focused on the research question, a clear sense of direction, clear citation, APA or any other specific style.
          </p>
        </div>
      </section>

      {/* Exclusive */}
      <section style={{ padding: "3rem 1rem", background: "#f0f4ff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            Our Dissertation &amp; manuscript Citation Compliance Service are exclusive
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333", marginBottom: "2rem" }}>
            as we do not just provide dissertation, but the rather clear explanation and justification for the content written
          </p>
          <div className="three-col-grid">
            {[
              { title: "Quality Assurance", body: "We ensure quality at every stage and the process." },
              { title: "Plagiarism Report", body: "We deliver the document after scanning for plagiarism" },
              { title: "Customer Interaction", body: "We interact with the customer at every stage in terms of amendments, query and delivery." },
            ].map((c) => (
              <div key={c.title} style={{ border: "1px solid #dde4f0", borderRadius: 8, padding: "1.5rem", textAlign: "center", background: "#fff" }}>
                <h3 style={{ color: "#1a2a6c", fontFamily: "'Merriweather',serif", marginBottom: "0.5rem" }}>{c.title}</h3>
                <p style={{ color: "#555", lineHeight: 1.7 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section style={{ padding: "3rem 1rem", background: "#1a2a6c", color: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem", color: "#f9c74f" }}>
            Why Choose Tutors India: Dissertation &amp; manuscript Citation Compliance Service features
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, opacity: 0.9 }}>
            Qualified researchers, unlimited revision, only peer-reviewed articles, plagiarism report, 24/7 support, 100% match with the requirement and on time delivery
          </p>
          <div style={{ marginTop: "1.5rem" }}>
            <a href="/our-guarantees" style={{ color: "#e87722", fontWeight: 700, textDecoration: "none" }}>Our Guarantees →</a>
          </div>
        </div>
      </section>

      {/* Secure & Confidential */}
      <section style={{ padding: "3rem 1rem", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            A complete secure &amp; Confidential Service
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333" }}>
            We offer 100% confidentiality of client's personal details, payment details, project works, and copyrights of research works. We ensure following for the conditionality, security &amp; privacy: 1) All your projects are given unique reference codes 2) Documents are accessed only writers who signed NDA with Tutors India 3) Your financial information is protected b 128-bit secure socket layer (SSL) encryption.
          </p>
        </div>
      </section>

      {/* Fully Referenced */}
      <section style={{ padding: "3rem 1rem", background: "#f0f4ff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            Fully Referenced
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333" }}>
            Our dissertation work is fully referenced with latest articles and textbooks. We refer only peer-reviewed sources such as scholarly articles and textbook to select the topic. We refer database including Web of Science, ProQuest, Google Scholar, Business Source Complete, and latest newspapers articles such as Economic Times, Forbes, The Wall Street, The Economics to identify the industrial problem.
          </p>
        </div>
      </section>

      {/* Our Guarantees */}
      <section style={{ padding: "3rem 1rem", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            Our Guarantees
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333" }}>
            (1) Unlimited Revision for the work being committed. (2) We ensure on-time delivery (3) We support 24/7. (4) Our word count committed does not include references and bibliography &amp; help you to locate the sources cited (5) Ensure three-level quality check including Technical QC, Editor QC and final check against the requirement (6) Confidentiality of the information (7) Plagiarism free work – less than 5% percent. (8) Only experienced and subject specific writers will be allotted.
          </p>
        </div>
      </section>

      {/* Plagiarism Free */}
      <section style={{ padding: "3rem 1rem", background: "#f0f4ff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            Plagiarism Free Work
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333" }}>
            We are aware of the consequences of plagiarism. Hence, topic selection is completely plagiarism Free. Our work is scanned against online sources in a similar way like WriteCheck or Turnitin. We wanted to ensure that our clients i.e., researchers and students are not finding any issues with regards to plagiarism and so we issue plagiarism-free certificate*. Our streamlined and high-quality research writing process ensures your dissertation is not just copy-pasted, but written only after brainstorming sessions with our team of professional researchers.
          </p>
        </div>
      </section>

      {/* On Time */}
      <section style={{ padding: "3rem 1rem", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            On Time
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333" }}>
            Our work is delivered at a specified date and time. Our specific changes to the delivered work will be carried out within 45 days of delivery. We guarantee delivery of minor changes within 24 working hours and significant changes within 48 working hours. We acknowledge all your emails within 30 minutes of working hours. Further any delay in the delivery can be raised at customersupport@tutorsindia.com
          </p>
        </div>
      </section>

      {/* Experienced Writers */}
      <section style={{ padding: "3rem 1rem", background: "#f0f4ff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            Experienced Writers
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333" }}>
            Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities from India, the US, and the UK. We identify the perfect SME according to your subject and area. Expert is selected through a stringent selection process including the signing of non-disclosure and confidentiality agreement. You can be very sure about the quality of the work since expert writer is identified as per International Research Experience
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ padding: "3rem 1rem", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.5rem" }}>
            Frequently Asked Questions
          </h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* Reference Styles Unique Section */}
      <section style={{ background: '#f0f4ff', padding: '2.5rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: '#1a2a6c', fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem' }}>Citation Styles &amp; Reference Systems We Handle</h2>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#444', marginBottom: '1.25rem' }}>
            Incorrect citations are one of the most common reasons journals reject manuscripts at the desk review stage. Our citation compliance team handles every major reference system with zero-error accuracy — from APA 7th for psychology and social science, to OSCOLA for legal research, to ACS for chemistry. We also correct in-text citations, reference list formatting, and DOI linking to match your target journal&apos;s exact author guidelines.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {['APA 7th', 'MLA 9th', 'Vancouver', 'IEEE', 'Harvard', 'Chicago', 'AMA', 'ACS', 'OSCOLA', 'MHRA', 'Turabian'].map((s) => (
              <span key={s} style={{ background: '#1a2a6c', color: '#fff', padding: '0.35rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', fontWeight: 600 }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SME / Writers */}
      <section style={{ padding: "3rem 1rem", background: "#f0f4ff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            Your Dissertation &amp; manuscript Citation Compliance Service is carried out by your choice of Subject Matter Expertise
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333", marginBottom: "1.25rem" }}>
            We have a team of 2000+ expertise across the subjects &amp; countries (including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine)
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333" }}>
            Tutors India has capability and skills to handle subjects across the field. We chose qualified and experienced subject specific expertise while you order your Ph.D. or Master's dissertation. We have more than 2000+ expertise working across the world who can handle arts, literature, sciences, engineering or medicine.
          </p>
          <div style={{ marginTop: "1.5rem" }}>
            <a href="/our-writers" style={{ color: "#e87722", fontWeight: 700, textDecoration: "none" }}>Our writers →</a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: "3rem 1rem", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.5rem" }}>
            Voice of Our customer
          </h2>
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* Order CTA */}
      <section style={{ padding: "3rem 1rem", background: "#1a2a6c", color: "#fff", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", fontSize: "clamp(1.2rem,2.5vw,1.8rem)", marginBottom: "1rem", color: "#f9c74f" }}>
            Order Now
          </h2>
          <p style={{ fontSize: "1.1rem", opacity: 0.9, marginBottom: "2rem" }}>
            Invest in your career by availing citation compliance help from the UK &amp; the US Qualified researchers
          </p>
          <a href="/order" style={{ background: "#e87722", color: "#fff", padding: "0.85rem 2.5rem", borderRadius: 4, fontWeight: 700, textDecoration: "none", fontSize: "1rem" }}>Order Now</a>
        </div>
      </section>
    </>
  );
}
