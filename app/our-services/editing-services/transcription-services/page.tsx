import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata = {
  title: "Academic & Research Transcription Services India UK | Tutors India",
  description: "We Transcribe your qualitative textual data obtained through interview guide and focus group discussions. Transcribers are qualified and experienced researchers from the US & UK.",
};

const faqs = [
  {
    q: "Who are Tutors india's transcriptionists?",
    a: "Tutors India consists of 400+ team exclusive from Native-English speakers from the US, Australia, and the UK. Our team of domain specific expertise trained to understand different dialects, slangs, cultural nuances.",
  },
  {
    q: "Whether my audio is transcribed by real people/human being?",
    a: "Yes, all audio and video files are transcribed by real human transcriptionists — qualified and experienced researchers from the US & UK who are native English speakers with subject-matter expertise.",
  },
  {
    q: "What kind of transcription work do you transcribe?",
    a: "We undertake a wide range of Academic / Educational Transcription including: Classroom Lecture transcription, Essays transcription, Group Discussion transcription, Academic symposia transcription, Student interview transcription, University research transcription, Seminars, Course description, Grants, Dissertation, Academic Interviews, Research, Oral History, Thesis.",
  },
  {
    q: "Can you handle large size of transcription project?",
    a: "Yes. We have a team of 2000+ expertise across the subjects & countries (including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia & Ukraine) who can handle projects of any size.",
  },
  {
    q: "How can I trust Tutors india get approved my resit dissertation?",
    a: "Our streamlined and high-quality research writing process ensures your dissertation is not just copy-pasted, but written only after brainstorming sessions with our team of professional researchers. We ensure three-level quality check including Technical QC, Editor QC and final check against the requirement.",
  },
  {
    q: "Can you show me samples which you transcript?",
    a: "Sure, you can check sample transcription work from our expert transcriptionists by contacting us.",
  },
];

const testimonials = [
  { quote: "Honestly, I didn't expect this level of quality. The team understood exactly what I needed and delivered work that felt genuinely professional. My confidence went from stressed to unstoppable.", author: "Amelia Brooks", location: "UK — Big Data Analytics" },
  { quote: "I was stuck, frustrated, and running out of time. Tutors India stepped in at the perfect moment and turned everything around faster than I imagined. Worth every bit.", author: "Oliver Bennett", location: "UK — Big Data Analytics" },
  { quote: "The attention to detail was incredible. It didn't feel like I was working with a service provider — it felt like I had an expert academic partner guiding me throughout.", author: "Layla Al Mansoori", location: "Essay Writing and Assignment Writing" },
  { quote: "My research finally started making sense after working with this team. Their guidance simplified complex ideas and gave my project the structure it was missing.", author: "Hassan Al Falasi", location: "UAE — Essay Writing and Assignment Writing" },
  { quote: "I submitted my work with complete confidence for the first time ever. The quality, formatting, and clarity were all beyond what I hoped for.", author: "Charlotte Reed", location: "UK" },
  { quote: "The team handled everything professionally from start to finish. Timely updates, quick responses, and excellent academic quality — exactly what students need during stressful deadlines.", author: "Zain Al Hashmi", location: "UAE" },
  { quote: "I was amazed at how naturally the content matched my writing style and university standards. It felt authentic, polished, and academically strong.", author: "Emily Carter", location: "" },
  { quote: "This service saved me during one of the most stressful phases of my academic journey. Reliable, professional, and genuinely supportive throughout the process.", author: "Noora Al Zaabi", location: "UAE" },
  { quote: "The final work looked so refined and well-structured that even my mentor appreciated the improvement immediately. Highly recommended for serious academic support.", author: "George Whitmore", location: "UK" },
  { quote: "What impressed me most was how personalized the support felt. They didn't just complete the work — they understood my goals and helped me present them better.", author: "Khalid Al Nuaimi", location: "" },
  { quote: "I was really struggling with my final semester master's degree, that's when I heard about Tutors India. They really guided me the whole way to produce research proposal just from the idea of a research title. The level of detail which went into creating the research proposal is astonishing. The technical concepts they advised for methodology were very advanced and algorithms used were state of the art. Would definitely recommend Tutors India to anyone who is struggling to complete their research work.", author: "David Morrison", location: "" },
  { quote: "Thank you Tutors India for giving me wonderful topic selection, it got approved and further from research proposal to citation, I need a same support.", author: "K S", location: "US, Boston" },
];

const subjectAreas = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies",
  "Marketing & Communication", "Engineering & Technology", "Natural Sciences & Mathematics",
  "Biological & Life science", "Economics & Administration", "Humanities & Social Science",
  "Law", "Medicine & Health", "Education & Training", "Journalism & Media",
  "Agriculture & Forestry", "Computer Science & IT", "Hospitality, Leisure & Sports",
];

const educationalTranscription = [
  "Classroom Lecture transcription", "Essays transcription", "Group Discussion transcription",
  "Academic symposia transcription", "Student interview transcription", "University research transcription",
  "Seminars", "Course description", "Grants", "Dissertation", "Academic Interviews",
  "Research", "Oral History", "Thesis",
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

export default function TranscriptionServicesPage() {
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
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontSize: "0.85rem", opacity: 0.7, marginBottom: "0.5rem" }}>Editing Services / Transcription Services</p>
          <h1 style={{ fontFamily: "'Merriweather',serif", fontSize: "clamp(1.5rem,3vw,2.4rem)", fontWeight: 700, lineHeight: 1.3, marginBottom: "1.5rem" }}>
            Academic &amp; Research Transcription Services
          </h1>
          <p style={{ fontSize: "1.15rem", opacity: 0.9, maxWidth: 700, margin: "0 auto 0.75rem" }}>
            We Transcribe your qualitative textual data obtained through interview guide and focus group discussions
          </p>
          <p style={{ fontSize: "1rem", opacity: 0.8, maxWidth: 700, margin: "0 auto 2rem" }}>
            Academic &amp; Research Transcription Services are carried out by qualified and experienced researchers from the US &amp; UK
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "flex-start", flexWrap: "wrap" }}>
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
            <strong style={{ color: '#fff' }}>Reviewed by the Tutors India Transcription Team</strong> — Academic Audio &amp; Transcription Specialists &middot; Verbatim, timestamped &amp; multi-speaker experts &middot; 20+ years in research transcription
          </p>
        </div>
      </div>

      {/* Transcription Service intro */}
      <section style={{ padding: "3rem 1rem", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            Transcription Service
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333" }}>
            Transcription in qualitative research is a critical element as it's a process that are theoretical, interpretive and representation of human experience. However, transcribing such textual data is challenging as it demands conceptual equivalence without concern for lexical comparability. Further, the process is time consuming and resource intensive process, as it transcribes qualitative research data that influenced by the knowledge and understanding of the experienced researcher..
          </p>
        </div>
      </section>

      {/* Team of Transcribers */}
      <section style={{ padding: "3rem 1rem", background: "#f0f4ff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            Team of transcribers at Tutors India
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333", marginBottom: "1.5rem" }}>
            Tutors India consists of 400+ team exclusive from Native-English speakers from the US, Australia, and the UK. Our team of domain specific expertise trained to understand different dialects, slangs, cultural nuances
          </p>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#555", marginBottom: "1.25rem" }}>
            Transcribers are qualified an experienced researcher from the US &amp; UK. Our transcribers are native English speakers and trained for the specific transcription service, Subject-Matter Expertise, experienced Professionals and Language Experts for Multilingual Transcription
          </p>
          <a href="/our-process" style={{ color: "#e87722", fontWeight: 700, textDecoration: "none" }}>Our Process →</a>
        </div>
      </section>

      {/* Authentic, genuine, prompt */}
      <section style={{ padding: "3rem 1rem", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            Academic &amp; Research Transcription Services at Tutors India is authentic, genuine, prompt and reliable.
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333" }}>
            We Accept AIF, DVD, MP2, MSV, WMV, VOB, QTFF, MP3, AIFF, AMR, FLV, MP4, RM, AVI, M4A, MPEG, WAV, DSV, MOV, MPG, WMA, VOB .
          </p>
        </div>
      </section>

      {/* Service Tiers */}
      <section style={{ padding: "3rem 1rem", background: "#1a2a6c", color: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "0.75rem", color: "#f9c74f" }}>
            What Services do we offer under coding, algorithm &amp; programming help?
          </h2>
          <div className="three-col-grid" style={{ marginTop: "1.5rem" }}>
            {[
              { tier: "Basic", desc: "Only coding based on the concept shared" },
              { tier: "Advanced", desc: "In addition to the basic features, we will write interpretation and evaluation process." },
              { tier: "Premium", desc: "New conceptual development, coding, or programming, algorithm development and interpretation, evaluation of the new algorithm code and compare results with other established algorithms." },
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
            We offer topic Selection for Management, Social Science, Engineering, Technology, Life Science, Medical, Arts &amp; Literature / Linguistics, and much more
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

      {/* Deliverables */}
      <section style={{ padding: "3rem 1rem", background: "#f0f4ff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            Our deliverables while you order Academic &amp; Research Transcription Services
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333" }}>
            Our Academic &amp; Research Transcription Services from Tutors India research writing services is simply easy and straightforward. You will get the reply within 30 minutes which would enable to place your order quickly without any delay in submissions.
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
            After the order is confirmed, we allocate the special team to scrutinize the work regarding necessary availability requirements that would be essential to complete the work. Once the process is done, in case there are any queries, we ensure to ask during the initial stage of your work and send you the outline proposed. Once the outline along with the chapterization plan is approved, we will dispatch the work in chapters, and update you on the progress of your work. Our exclusive coordinators would get in touch with you to clarify any queries. You can also pay in installments and work will be started as soon as receive the payments. We deliver your work as per the schedule fixed and agreed or even before the schedule.
          </p>
        </div>
      </section>

      {/* Transcription Features */}
      <section style={{ padding: "3rem 1rem", background: "#f0f4ff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "2rem" }}>
            Academic &amp; Research Transcription Services features
          </h2>
          <div className="two-col-grid">
            <div>
              <h3 style={{ color: "#e87722", fontFamily: "'Merriweather',serif", fontSize: "1.1rem", marginBottom: "1rem" }}>We undertake wide range of Academic / Educational Transcription</h3>
              <ul style={{ paddingLeft: "1.5rem", color: "#333", lineHeight: 2.1 }}>
                {educationalTranscription.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 style={{ color: "#e87722", fontFamily: "'Merriweather',serif", fontSize: "1.1rem", marginBottom: "1rem" }}>Audio &amp; Video Formats</h3>
              <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                We support a wide range of audio and video formats including wav, mov, AIFF/AIF, m4a, AMR, WMA, AVI, wmb, dvd, caf, Mp3, Mp4, flv, dds, cd, mp2 and much more.
              </p>
              <h3 style={{ color: "#e87722", fontFamily: "'Merriweather',serif", fontSize: "1.1rem", marginBottom: "0.75rem" }}>Confidentiality</h3>
              <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                We strictly follow HIPAA guidelines to ensure high levels of confidentiality.
              </p>
              <h3 style={{ color: "#e87722", fontFamily: "'Merriweather',serif", fontSize: "1.1rem", marginBottom: "0.75rem" }}>Transcription Types</h3>
              <ul style={{ paddingLeft: "1.5rem", color: "#333", lineHeight: 2.1 }}>
                <li>Interview</li>
                <li>Focus Group</li>
              </ul>
              <h3 style={{ color: "#e87722", fontFamily: "'Merriweather',serif", fontSize: "1.1rem", margin: "1rem 0 0.75rem" }}>We use various methods of transcription</h3>
              <ul style={{ paddingLeft: "1.5rem", color: "#333", lineHeight: 2.1 }}>
                <li>A naturalised approach</li>
                <li>A denaturalised approach</li>
                <li>A pyscho-social method</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Master's Dissertation */}
      <section style={{ padding: "3rem 1rem", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            Master's Dissertation Part or chapter need to convince the Supervisory Committee
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333" }}>
            We write part or chapter wise master's dissertation from the introduction to recommendations. Though it looks very simple, it is a tedious task to complete each and every step. The steps involved in such tedious task. Namely identification of topic, reviewing the literature or literature review, problem statement, research question(s)and research hypothesis development, research design (sampling, measures, procedures and data collection), statistical analysis, (data analysis preparation, data entry and screening, interpretation), discussion, results, recommendation and conclusion.
          </p>
        </div>
      </section>

      {/* Free Offers */}
      <section style={{ padding: "3rem 1rem", background: "#f0f4ff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            Free Offers along with your Master's part or chapter-wise Dissertation Writing Services
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333" }}>
            We deliver more than your expectation –Abstract or Executive Summary, Graphs &amp; Tables (redrawn), statistical analysis or textual analysis of data, SPSS / other software screen shots to ensure the process that we had carried out for doing the analyses Free Tutoring for the work being carried out – to speak confidently with your program supervisors &amp; SPSS output in Appendix.
          </p>
        </div>
      </section>

      {/* Exclusive Services */}
      <section style={{ padding: "3rem 1rem", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            Our Academic &amp; Research Transcription Services are exclusive
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
              <div key={c.title} style={{ border: "1px solid #dde4f0", borderRadius: 8, padding: "1.5rem", textAlign: "center" }}>
                <h3 style={{ color: "#1a2a6c", fontFamily: "'Merriweather',serif", marginBottom: "0.5rem" }}>{c.title}</h3>
                <p style={{ color: "#555", lineHeight: 1.7 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section style={{ padding: "3rem 1rem", background: "#f0f4ff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            Why Choose Tutors India: Academic &amp; Research Transcription Services features
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333", marginBottom: "1.5rem" }}>
            Qualified researchers, unlimited revision, only peer-reviewed articles, plagiarism report, 24/7 support, 100% match with the requirement and on time delivery
          </p>
          <a href="/our-guarantees" style={{ color: "#e87722", fontWeight: 700, textDecoration: "none" }}>Our Guarantees →</a>
        </div>
      </section>

      {/* Secure & Confidential */}
      <section style={{ padding: "3rem 1rem", background: "#1a2a6c", color: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem", color: "#f9c74f" }}>
            A complete secure &amp; Confidential Service
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, opacity: 0.9 }}>
            We offer 100% confidentiality of client's personal details, payment details, project works, and copyrights of research works. We ensure following for the conditionality, security &amp; privacy: 1) All your projects are given unique reference codes 2) Documents are accessed only writers who signed NDA with Tutors India 3) Your financial information is protected b 128-bit secure socket layer (SSL) encryption.
          </p>
        </div>
      </section>

      {/* Fully Referenced */}
      <section style={{ padding: "3rem 1rem", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            Fully Referenced
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333" }}>
            Our dissertation work is fully referenced with latest articles and textbooks. We refer only peer-reviewed sources such as scholarly articles and textbook to select the topic. We refer database including Web of Science, ProQuest, Google Scholar, Business Source Complete, and latest newspapers articles such as Economic Times, Forbes, The Wall Street, The Economics to identify the industrial problem.
          </p>
        </div>
      </section>

      {/* Guarantees */}
      <section style={{ padding: "3rem 1rem", background: "#f0f4ff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            Our Guarantees
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333" }}>
            (1) Unlimited Revision for the work being committed. (2) We ensure on-time delivery (3) We support 24/7. (4) Our word count committed does not include references and bibliography &amp; help you to locate the sources cited (5) Ensure three-level quality check including Technical QC, Editor QC and final check against the requirement (6) Confidentiality of the information (7) Plagiarism free work – less than 5% percent. (8) Only experienced and subject specific writers will be allotted.
          </p>
        </div>
      </section>

      {/* Plagiarism Free Work */}
      <section style={{ padding: "3rem 1rem", background: "#fff" }}>
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
      <section style={{ padding: "3rem 1rem", background: "#f0f4ff" }}>
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
      <section style={{ padding: "3rem 1rem", background: "#fff" }}>
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
      {/* Transcription Types Unique Section */}
      <section style={{ background: '#f0f4ff', padding: '2.5rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: '#1a2a6c', fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem' }}>Transcription Formats &amp; Types We Deliver</h2>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#444', marginBottom: '1.25rem' }}>
            Not all transcription is the same. Our team offers several specialist formats to match your research methodology and output requirements. Verbatim transcription captures every word, filler, and pause — essential for discourse analysis. Intelligent verbatim removes fillers for clarity while preserving meaning. Timestamped transcription links every segment back to your audio file for easy verification. Multi-speaker transcription identifies and labels individual voices — critical for focus groups and interview research.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {['Verbatim', 'Intelligent Verbatim', 'Clean Read', 'Timestamped', 'Multi-Speaker', 'Focus Groups', 'Interview Research', 'Legal Transcription'].map((s) => (
              <span key={s} style={{ background: '#1a2a6c', color: '#fff', padding: '0.35rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', fontWeight: 600 }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "3rem 1rem", background: "#f0f4ff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.5rem" }}>
            Frequently Asked Questions
          </h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* Writers section */}
      <section style={{ padding: "3rem 1rem", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            Your Coding, Programming &amp; Algorithm development service is carried out by your choice of specialized expertise
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
      <section style={{ padding: "3rem 1rem", background: "#f0f4ff" }}>
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
            Invest in your career by availing transcription help from the UK &amp; the US Qualified researchers
          </p>
          <a href="/order" style={{ background: "#e87722", color: "#fff", padding: "0.85rem 2.5rem", borderRadius: 4, fontWeight: 700, textDecoration: "none", fontSize: "1rem" }}>Order Now</a>
        </div>
      </section>
    </>
  );
}
