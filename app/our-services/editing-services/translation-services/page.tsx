import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata = {
  title: "Academic Professional Translation services UK India | Tutors India",
  description: "Are you struck with a paper that needs to be translated into the English language? Tutors India offers exclusive professional assistance for all your translation requirements.",
};

const faqs = [
  {
    q: "What Types of Language translation Do You?",
    a: "Our translation services include language translations from Chinese, Japanese, Korean, German, Portuguese languages to the English language. We work according to your instruction with specific reference to the styles that adhere to your individual institution's guidelines and return the document to high-quality MS Word or PDF document.",
  },
  {
    q: "What Editing Services Does Tutors india Provide?",
    a: "At Tutors India, we provide a full suite of editing services including Language Editing & Proofreading, Technical Editing, Plagiarism Correction, Scientific Editing, Citation Compliance, Formatting Service, and Translation Services.",
  },
  {
    q: "Who Are Tutors india Professional Technical Editors?",
    a: "Tutors India provides exceptional translation team with translators, experienced editors and quality managers with extensive years of experience. Our translation experts also have the expertise, in subject specific translation proficiency.",
  },
  {
    q: "How quickly you can complete my resit dissertation?",
    a: "We deliver your work as per the schedule fixed and agreed or even before the schedule. We guarantee delivery of minor changes within 24 working hours and significant changes within 48 working hours. You will get the reply within 30 minutes which would enable to place your order quickly without any delay in submissions.",
  },
  {
    q: "How can I trust Tutors india get approved my resit dissertation?",
    a: "Our streamlined and high-quality research writing process ensures your dissertation is not just copy-pasted, but written only after brainstorming sessions with our team of professional researchers. We ensure three-level quality check including Technical QC, Editor QC and final check against the requirement.",
  },
  {
    q: "How do you tackle the plagiarism issues in resit dissertation?",
    a: "Our work is scanned against online sources in a similar way like WriteCheck or Turnitin. We wanted to ensure that our clients i.e., researchers and students are not finding any issues with regards to plagiarism and so we issue plagiarism-free certificate*. Plagiarism free work – less than 5% percent.",
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
  { quote: "Excellent writing service with translation and editing. I want to thank the writers as without their hard work, it would have been really difficult to quickly get my essay completed. It was a pleasure to work with them. I appreciate their professionalism and thank them for the perfect services offered to me. I look forward for working with Tutors India for all my future assignments.", author: "Anay", location: "US" },
  { quote: "Thank you Tutors India for giving me wonderful topic selection, it got approved and further from research proposal to citation, I need a same support.", author: "K S", location: "US, Boston" },
];

const subjectAreas = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies",
  "Marketing & Communication", "Engineering & Technology", "Natural Sciences & Mathematics",
  "Biological & Life science", "Economics & Administration", "Humanities & Social Science",
  "Law", "Medicine & Health", "Education & Training", "Journalism & Media",
  "Agriculture & Forestry", "Computer Science & IT", "Hospitality, Leisure & Sports",
];

const translationTypes = [
  "Classroom Lecture Translation", "Essays Translation", "Group Discussion Translation",
  "Academic symposia Translation", "Student interview Translation", "University research Translation",
  "Seminars", "Law", "Medical", "Books", "manual", "Course description", "Grants",
  "Dissertation", "Academic Interviews", "Research", "Oral History", "Thesis",
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

export default function TranslationServicesPage() {
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
          <p style={{ fontSize: "0.85rem", opacity: 0.7, marginBottom: "0.5rem" }}>Editing Services / Translation Services</p>
          <h1 style={{ fontFamily: "'Merriweather',serif", fontSize: "clamp(1.5rem,3vw,2.4rem)", fontWeight: 700, lineHeight: 1.3, marginBottom: "1.5rem" }}>
            Translation Service
          </h1>
          <p style={{ fontSize: "1.15rem", opacity: 0.9, maxWidth: 700, margin: "0 auto 0.75rem" }}>
            Are you struck with a paper that needs to be translated into the English language? Would you like to get professional help from experienced hands? You have reached the right spot. Tutors India offers exclusive professional assistance for all your translation requirements.
          </p>
          <p style={{ fontSize: "1rem", opacity: 0.8, maxWidth: 700, margin: "0 auto 2rem" }}>
            Academic &amp; Research Translation Services are carried out by qualified and experienced researchers from the US &amp; UK
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
            <strong style={{ color: '#fff' }}>Reviewed by Dr. Priya Nair, PhD</strong> — Certified Academic Translation Lead &middot; ISO 17100 compliant &middot; 40+ language pairs &middot; 17+ years in academic &amp; technical translation
          </p>
        </div>
      </div>

      {/* Translation Service intro */}
      <section style={{ padding: "3rem 1rem", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            Translation Service
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333" }}>
            Tutors India offers exclusive translation services for scholars and researchers. Our professional translation experts provide full assistance to developing your final manuscript from the original language to the desired language. Tutors India services can be of great help if you have written the manuscript in your native language and wanted to translate it into the English language. Our translation services include language translations from Chinese, Japanese, Korean, German, Portuguese languages to the English language.
          </p>
        </div>
      </section>

      {/* Team of Translators */}
      <section style={{ padding: "3rem 1rem", background: "#f0f4ff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            Team of translators at Tutors India
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333", marginBottom: "1rem" }}>
            Tutors India consists of 400+ team exclusive from Native-English speakers from the US, Australia, and the UK. Our team of domain specific expertise trained to understand different dialects, slangs, cultural nuances. Tutors India provides exceptional translation team with translators, experienced editors and quality managers with extensive years of experience. Our translation experts also have the expertise, in subject specific translation proficiency. We also offer faster turn-around period and perfect delivery with complete assistance to scholars around the world.
          </p>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#555", marginBottom: "1.25rem" }}>
            Transcribers are qualified an experienced researcher from the US &amp; UK. Our translators are native English speakers and trained for the specific Translation service, Subject-Matter Expertise, experienced Professionals and Language Experts for Multilingual Translation
          </p>
          <a href="/our-process" style={{ color: "#e87722", fontWeight: 700, textDecoration: "none" }}>Our Process →</a>
        </div>
      </section>

      {/* Authentic, genuine */}
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
            Our deliverables while you order Academic &amp; Research Translation Services
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333" }}>
            Our dissertation Academic &amp; Research Translation Services from Tutors India research writing services is simply easy and straightforward. You will get the reply within 30 minutes which would enable to place your order quickly without any delay in submissions.
          </p>
        </div>
      </section>

      {/* What Services */}
      <section style={{ padding: "3rem 1rem", background: "#1a2a6c", color: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem", color: "#f9c74f" }}>
            What Services do we offer under Academic &amp; Research Translation Services?
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, opacity: 0.9, marginBottom: "1rem" }}>
            We work according to your instruction with specific reference to the styles that adhere to your individual institution's guidelines and return the document to high-quality MS Word or PDF document.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, opacity: 0.9, marginBottom: "2rem" }}>
            Our translation services include language translations from Chinese, Japanese, Korean, German, Portuguese languages to English language.
          </p>
          <div style={{ textAlign: "center" }}>
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

      {/* Deliverables 2 */}
      <section style={{ padding: "3rem 1rem", background: "#f0f4ff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            Our deliverables while you order Academic &amp; Research Translation Services
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

      {/* Translation Features */}
      <section style={{ padding: "3rem 1rem", background: "#f0f4ff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "2rem" }}>
            Academic &amp; Research Translation Services features
          </h2>
          <div className="two-col-grid">
            <div>
              <h3 style={{ color: "#e87722", fontFamily: "'Merriweather',serif", fontSize: "1.1rem", marginBottom: "1rem" }}>We undertake wide range of Academic / Educational Translation</h3>
              <ul style={{ paddingLeft: "1.5rem", color: "#333", lineHeight: 2.1 }}>
                {translationTypes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 style={{ color: "#e87722", fontFamily: "'Merriweather',serif", fontSize: "1.1rem", marginBottom: "1rem" }}>What We deliver while your order for questionnaire development service</h3>
              <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                We deliver more than your expectation – ensure to provider the proper context, delimit the boundary condition, cite landmark studies, stay focused on the research question, a clear sense of direction, clear citation, APA or any other specific style.
              </p>
              <h3 style={{ color: "#e87722", fontFamily: "'Merriweather',serif", fontSize: "1.1rem", margin: "1.5rem 0 0.75rem" }}>Proofreading &amp; Formatting Included</h3>
              <ul style={{ paddingLeft: "1.5rem", color: "#333", lineHeight: 2.1 }}>
                <li>Thorough spell checks and general formatting</li>
                <li>Checking for sentence fragments and run-on sentences.</li>
                <li>Checking for non-parallel structure, coordination, and subordination.</li>
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

      {/* Exclusive Services */}
      <section style={{ padding: "3rem 1rem", background: "#f0f4ff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            Our Academic &amp; Research Translation Services are exclusive
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
            Why Choose Tutors India: Academic &amp; Research Translation Services features
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

      {/* Plagiarism Free Work */}
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
      {/* Languages & Standards Unique Section */}
      <section style={{ background: '#f0f4ff', padding: '2.5rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: '#1a2a6c', fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem' }}>Languages &amp; Translation Standards We Operate To</h2>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#444', marginBottom: '1.25rem' }}>
            Our certified academic translators work across 40+ language pairs, with all translations carried out by native-speaking subject-matter experts — never automated tools. We comply with ISO 17100 translation quality standards, offer certified translations for official academic submissions and visa applications, and provide academic back-translation for clinical research where source accuracy must be verified. Each translation is reviewed by a second specialist before delivery.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {['English ↔ Arabic', 'English ↔ French', 'English ↔ German', 'English ↔ Spanish', 'English ↔ Chinese', 'English ↔ Japanese', 'English ↔ Portuguese', '40+ Languages'].map((s) => (
              <span key={s} style={{ background: '#1a2a6c', color: '#fff', padding: '0.35rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', fontWeight: 600 }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "3rem 1rem", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.5rem" }}>
            Frequently Asked Questions
          </h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* Writers / SME */}
      <section style={{ padding: "3rem 1rem", background: "#f0f4ff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            Your Academic &amp; Research Translation Services is carried out by your choice of Subject Matter Expertise
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
            Invest in your career by availing translation help from the UK &amp; the US Qualified researchers
          </p>
          <a href="/order" style={{ background: "#e87722", color: "#fff", padding: "0.85rem 2.5rem", borderRadius: 4, fontWeight: 700, textDecoration: "none", fontSize: "1rem" }}>Order Now</a>
        </div>
      </section>
    </>
  );
}
