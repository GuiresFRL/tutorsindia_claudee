import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "Medicine & Health Science Academic Writing | Masters, PhD | Tutors India",
  description: "Expert Medicine & Health Science academic writing for Masters and PhD students. Clinical Medicine, Nursing, Public Health, Pharmacology. Vancouver, AMA referencing. Tutors India.",
};

const faqs = [
  {
    q: "Why should I Choose Tutors India for Medicine & Health Science writing services?",
    a: "Our native academic medical and health science writers are skillful and experienced in different subject fields especially in medical writing — ensuring to understand your project well and deliver on time. With over 400+ academic writers, we endeavour to submit your PhD document that meets the terminology of the academic area but also has the native linguistic command over medical and scientific terms. Thereby, it boosts opportunities to achieve high credits in your thesis and increasing the chances of acceptance by high impact factor journal.\n\nOur medicine & health science writing services uniqueness includes:\n• An original, fresh and 100% plagiarism free content.\n• Flawless, ideal and sound medical research paper that meets recommended formatting rules.\n• Perfect and appropriate information to discover groundbreaking conceptualization.\n• On-Time delivery with no compromise on Quality.",
  },
  {
    q: "What kind of services do you offer?",
    a: "We offer an extensive variety of the following outstanding academic medicine and health science supports for Masters and PhD including: Abstracts writing, journal articles and manuscripts, literature reviews, research proposal, research methodology, textual/data analysis, statistical analysis, findings, results, and conclusions, referencing, and more.\n\nIn addition, tailor-made assignment, essay and manuscript support, conference paper and textbook writing, coding and algorithm, programming, software and tool development, illustration, manuscript statistics and PhD research plan as well as editing services. We deliver professional academic assistance to complete any research work and writing you may require.",
  },
  {
    q: "What are the topics covered in Medicine & Health Science dissertation?",
    a: "We cover the wide range of medicine and health science dissertation topics including cancer, cardiovascular, metabolic, nutritional sciences, cellular and developmental systems, evolution, systems and genomics, infection, immunity, inflammation & repair, neuroscience and mental health, platform sciences and technologies, population health and ecosystems. We also cover cardiac, peripheral vascular, immunology, allergy, connective tissue, critical care, emergency medicine, geriatrics, gerontology, industrial medicine, haematology, infectious diseases, nutrition & dietetics, orthopaedics, urology, nephrology, oncology, respiratory system, sport medicine, tropical medicine and much more.",
  },
  {
    q: "If I am not satisfied with your Medicine & Health Science writing, how do you address the issues?",
    a: "At Tutors India, our first motto is to offer 100% customer satisfaction, so it is a very rare event. However, we provide the guarantee of unlimited revisions*, so you need not worry about it.",
  },
  {
    q: "If I need some customisation in the Medicine & Health Science dissertation, do you help me?",
    a: "Of course, we are ready to help our clients. Our medicine and health science writing service is completely flexible and tailor made to the customer. Hence, if you can provide the areas of customisation related to the research area initially proposed, we could make amendments to the document.",
  },
  {
    q: "Can you show me sample work of Medicine & Health Science academic writing?",
    a: "Yes, we have uploaded some of the academic writing work samples. For more details, please talk with our academic medicine and health science writers.",
  },
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

const testimonials = [
  {
    quote: "Honestly, I didn't expect this level of quality. The team understood exactly what I needed and delivered work that felt genuinely professional. My confidence went from stressed to unstoppable.",
    author: "Amelia Brooks, UK",
    role: "Big Data Analytics",
    avatar: "/wp-content/uploads/2024/06/Amelia-Brooks-85x85.webp",
  },
  {
    quote: "I was stuck, frustrated, and running out of time. Tutors India stepped in at the perfect moment and turned everything around faster than I imagined. Worth every bit.",
    author: "Oliver Bennett, UK",
    role: "Big Data Analytics",
    avatar: "/wp-content/uploads/2024/06/Oliver-Bennett-85x85.webp",
  },
  {
    quote: "The attention to detail was incredible. It didn't feel like I was working with a service provider — it felt like I had an expert academic partner guiding me throughout.",
    author: "Layla Al Mansoori",
    role: "Essay Writing and Assignment Writing",
    avatar: "/wp-content/uploads/2024/06/Layla-Al-Mansoori-1-85x85.webp",
  },
  {
    quote: "My research finally started making sense after working with this team. Their guidance simplified complex ideas and gave my project the structure it was missing.",
    author: "Hassan Al Falasi, UAE",
    role: "Essay Writing and Assignment Writing",
    avatar: "/wp-content/uploads/2024/06/Hassan-Al-Falasi-85x85.webp",
  },
  {
    quote: "I submitted my work with complete confidence for the first time ever. The quality, formatting, and clarity were all beyond what I hoped for.",
    author: "Charlotte Reed, UK",
    avatar: "/wp-content/uploads/2024/06/Charlotte-Reed-85x85.webp",
  },
  {
    quote: "The team handled everything professionally from start to finish. Timely updates, quick responses, and excellent academic quality — exactly what students need during stressful deadlines.",
    author: "Zain Al Hashmi, UAE",
    avatar: "/wp-content/uploads/2024/06/Zain-Al-Hashmi-85x85.webp",
  },
  {
    quote: "I was amazed at how naturally the content matched my writing style and university standards. It felt authentic, polished, and academically strong.",
    author: "Emily Carter",
    avatar: "/wp-content/uploads/2024/06/Emily-Carter-85x85.webp",
  },
  {
    quote: "This service saved me during one of the most stressful phases of my academic journey. Reliable, professional, and genuinely supportive throughout the process.",
    author: "Noora Al Zaabi, UAE",
    avatar: "/wp-content/uploads/2024/06/Noora-Al-Zaabi-85x85.webp",
  },
  {
    quote: "The final work looked so refined and well-structured that even my mentor appreciated the improvement immediately. Highly recommended for serious academic support.",
    author: "George Whitmore, UK",
    avatar: "/wp-content/uploads/2024/06/George-Whitmore-85x85.webp",
  },
  {
    quote: "What impressed me most was how personalised the support felt. They didn't just complete the work — they understood my goals and helped me present them better.",
    author: "Khalid Al Nuaimi",
    avatar: "/wp-content/uploads/2024/06/Khalid-Al-Nuaimi-85x85.webp",
  },
];

const qualityCards = [
  {
    img: "/wp-content/uploads/2021/09/Topic-Selection.png",
    title: "Your Medicine and Health Science Academic Writing",
    desc: "Get the ideal and flawless Medicine & Health Science writing samples from our Subject-Matter expertise as such it delivered.",
    href: "/our-sample-works/",
  },
  {
    img: "/wp-content/uploads/2021/09/Quality-Assurance.png",
    title: "Quality Assurance",
    desc: "We ensure to achieve High Quality at every stage — Check of Quality Assurance & Enhancement activities report.",
    href: "/guarantees/",
  },
  {
    img: "/wp-content/uploads/2021/09/Plagiarism-Report.png",
    title: "Plagiarism Report",
    desc: "We have dedicated to deliver your document after correcting plagiarism using WriteCheck or Turnitin, and/or any other advanced plagiarism tools.",
    href: "/our-services/editing-services/plagiarism-report/",
  },
  {
    img: "/wp-content/uploads/2021/09/Customer-Interaction.png",
    title: "Customer Interaction",
    desc: "We act in real-time and interact with customers at every stage in terms of modifications, any query related to your project and order delivery.",
    href: "/contact-us/",
  },
];

export default function MedicinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* ── Hero ── */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="med-hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
              <Link href="/subjects/" style={{ color: "#a0b8e0" }}>Subjects</Link>{" / "}
              <span style={{ color: "#fff" }}>Medicine &amp; Health Science</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "10px" }}>
              Medicine &amp; Health Science – Academic Writing
            </h1>
            <p style={{ color: "#f9c74f", fontSize: "0.95rem", fontWeight: 600, marginBottom: "12px" }}>
              PhD, Master&apos;s &amp; Authors / Publishers
            </p>
            <p style={{ color: "#c5d5f0", fontSize: "0.97rem", lineHeight: 1.75, marginBottom: "10px" }}>
              The US &amp; UK medical writers at Tutors India aim at inculcating knowledge within students and build a great confidence to submit their medicine academic writing successfully.
            </p>
            <p style={{ color: "#c5d5f0", fontSize: "0.92rem", lineHeight: 1.7, marginBottom: "22px" }}>
              Our experts are professional medical &amp; scientific writers having the highest qualification from the UK. Decades of experience in writing and editing has been instrumental in shaping the career of medical students and allied health professionals.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "16px", textAlign: "center" }} className="med-hero-badge">
            <img src="/wp-content/uploads/2021/09/Topic-Selection.png" alt="Medicine & Health Science Academic Writing" style={{ width: "220px", height: "160px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>PhD Medical Writers<br />Vancouver · AMA<br />All Health Disciplines</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.med-hero-inner{grid-template-columns:1fr!important;}.med-hero-badge{display:none!important;}}`}</style>
      </section>

      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>

        {/* ── About Medicine ── */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.45rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>
          Medicine &amp; Allied Health Professionals at Tutors India assures you the quality
        </h2>
        <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "14px" }}>
          It is the art or science of preventing, diagnosing, alleviating and treating diseases with curative drugs to preserve health. Medicine is applicable both in health science and biomedical research. This discipline as a specialty focuses on diagnosis and non-surgical treatment either to a particular organ or whole body. Internal medicine as a part of medical specialty is categorized with sub disciplines like cardiology, critical care medicine, endocrinology, gastroenterology, geriatrics, haematology, hepatology, infectious diseases, nephrology, oncology, paediatrics, pulmonology and rheumatology.
        </p>
        <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "14px" }}>
          In medical education, this course is provided across the globe as Bachelor of Medicine and Surgery. Being a lucrative career option, pupils opt for Medicine discipline which is a challenging job with great satisfaction. Wherever you pursue, ultimately saving the needy patient is something which is inexpressible.
        </p>
        <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "14px" }}>
          Since the medicine and allied health is a vast subject having so many rules, amendments, codes; it might prove as cumbersome to students. This writing needs wide extensive study involving medical books, magazines, references which should be translated into a well laid out dissertation writing with heading, subheading, introduction, body, conclusion enumerating valid points of research. So as to make the writing work a professional one, it is better to hire professional medical writers. Dissertation writing service provided by us covers all the contents of the study.
        </p>
        <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "14px" }}>
          We use subject-specific language, exemplary presentation that demonstrates clear, logical, imaginative, creative &amp; original — we demonstrate integration and application to professional practice of knowledge. Our writing standards are at an exemplary standard showing creativity &amp; innovation &amp; ensures link between theory &amp; practice.
        </p>
        <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "36px" }}>
          <strong>Coverage areas:</strong> School of Health &amp; Rehabilitation, medical education and medical science, school of nursing and midwifery, school of pharmacy, humanities and social sciences, child care, dentistry, speech and hearing, optometry and ophthalmology, biomedical sciences, neurology, pathology, surgery, physical therapy, public health, engineering, veterinary medicine, obstetrics &amp; gynaecology, integrative &amp; complementary medicine, dermatology and internal medicine.
        </p>

        {/* ── 4 Quality Cards ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px", marginBottom: "48px" }} className="four-col-grid">
          {qualityCards.map(c => (
            <div key={c.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column" }}>
              <img src={c.img} alt={c.title} style={{ width: "100%", height: "130px", objectFit: "cover" }} />
              <div style={{ padding: "14px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "0.88rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "8px", lineHeight: 1.4 }}>{c.title}</h3>
                <p style={{ fontSize: "0.79rem", color: "#666", lineHeight: 1.6, marginBottom: "10px", flexGrow: 1 }}>{c.desc}</p>
                <Link href={c.href} style={{ fontSize: "0.8rem", color: "#e87722", fontWeight: 600 }}>View More →</Link>
              </div>
            </div>
          ))}
        </div>

        {/* ── Why Tutors India ── */}
        <div style={{ background: "#f5f6fa", border: "1px solid #dde2ef", borderRadius: "12px", padding: "32px", marginBottom: "48px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>
            Why Tutors India for Medicine &amp; Health Science writing and editing services?
          </h2>
          <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: 1.8 }}>
            The US &amp; UK writers at Tutors India aim at inculcating knowledge within students and build a great confidence to submit their dissertation successfully including Public Health Policy Analysis, case study of an organisation, study of a specific intervention or event, secondary data analysis, meta-analysis, systematic review, and reflection based dissertation.
          </p>
        </div>

        {/* ── Dissertation Features ── */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>
          A Dissertation Writing Service features that helps to get the grade
        </h2>
        <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "28px" }}>
          We help you in the broad range of systematic literature reviews, a piece of qualitative or quantitative research, clinical audit, service evaluation, business case for a change in practice. Our research areas include cancer, cardiovascular, metabolic, nutritional sciences, cellular and developmental systems, evolution, systems and genomics, infection, immunity, inflammation &amp; repair, neuroscience and mental health, platform sciences and technologies, population health and ecosystems. Medicine and Health Science dissertations are selected based on your area of interest, research gap, and feasibility of data collection.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "48px" }} className="two-col-grid">
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "24px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Your Choice of Primary or Secondary Research</h3>
            <p style={{ fontSize: "0.88rem", color: "#555", lineHeight: 1.75 }}>
              We help you to collect primary and secondary data through library research, internet searches (for secondary), while for quantitative research through interviews with key informants, focus group discussion guide, questionnaire and observation. We justify the chosen methodology through theoretical justification rather than the argument of lack of time or financial resources as a reason for limiting research. The chosen methodology will be tailored to achieve the research question and substantiated with reference or argument to support how methodology is the most suitable for finding the solution to your research question.
            </p>
          </div>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "24px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Your Choice of quantitative or qualitative or Triangulation methodologies</h3>
            <p style={{ fontSize: "0.88rem", color: "#555", lineHeight: 1.75 }}>
              We help you to identify the right choice of research methodology for your medicine and health science dissertation, while the choice purely depends on the theoretical framework or a conceptual framework and the research question. We undertake a wide range of subjects, including cardiac, peripheral vascular, immunology, allergy, connective tissue, critical care, emergency medicine, geriatrics, gerontology, industrial medicine, haematology, infectious diseases, nutrition &amp; dietetics, orthopaedics, urology, nephrology, oncology, respiratory system, sport medicine, tropical medicine and many more.
            </p>
          </div>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "24px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Development of Questionnaire or Interview questions</h3>
            <p style={{ fontSize: "0.88rem", color: "#555", lineHeight: 1.75 }}>
              We help you in a broad range of services from the selection of a dissertation topic to complete your master&apos;s dissertation successfully with the expected grade. UK thesis topics are selected based on your area of interest, research gap, and feasibility of data collection. We make you strong in your dissertation by dealing with all the questions that you have in your mind. The process also entails data collection, statistical analysis and presentation in the format of your Institute.
            </p>
          </div>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "24px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Free while you order dissertation</h3>
            <p style={{ fontSize: "0.88rem", color: "#555", lineHeight: 1.75, marginBottom: "10px" }}>
              We help to develop questionnaire or interview guide at free of cost while you order for dissertation. We also provide:
            </p>
            <ul style={{ paddingLeft: "18px", fontSize: "0.85rem", color: "#555", lineHeight: 1.9 }}>
              <li>Appendices &amp; Abstract</li>
              <li>Title Page &amp; Copyright Page</li>
              <li>Table of Contents</li>
              <li>Lists of Charts, Graphs, Illustrations</li>
              <li>Formatting</li>
              <li>Personal statement for your research proposal</li>
              <li>Bibliography (a brief annotation on key primary text)</li>
            </ul>
          </div>
        </div>

        {/* ── Dark Features Panel ── */}
        <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "36px", marginBottom: "48px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "12px" }}>Medicine &amp; Health Sciences – Writing &amp; Editing Features</h2>
          <p style={{ color: "#c5d5f0", fontSize: "0.92rem", lineHeight: 1.75, marginBottom: "28px" }}>
            We help you to submit a plan of the dissertation (proposed structure / main argument), progress, and a sample of writing to their supervisor according to the style of reference — Draft would demonstrate evidence of imagination, creativity, critical insights and analytical rigour.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }} className="three-col-grid">
            <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: "8px", padding: "20px" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "0.95rem", fontWeight: 700, marginBottom: "10px", color: "#f9c74f" }}>Sources, Citation and Presentation</h3>
              <p style={{ fontSize: "0.82rem", color: "#c5d5f0", lineHeight: 1.7 }}>
                We help you identify an impressive range of primary and secondary resources in compliance with the scientific Style Guide (e.g. American Medical Association Manual of Style) including the Harvard Scheme, Vancouver Referencing Style Guide, Patrias K, Citing Medicine: the NLM Style guide, and EndNote. Key databases: PubMed, Medline (Ovid Medline), Scopus, TRIP, SPORTDiscus, NLM gateway, Embase, Biosis, Cochrane Library, Web of Science, Informit Health, JSTOR, Academic Search Complete, SciFinder, Dentistry and Oral Science, PsycINFO, CINAHL (midwifery, nursing, occupational therapy).
              </p>
            </div>
            <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: "8px", padding: "20px" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "0.95rem", fontWeight: 700, marginBottom: "10px", color: "#f9c74f" }}>Scientific Style &amp; Argument</h3>
              <p style={{ fontSize: "0.82rem", color: "#c5d5f0", lineHeight: 1.7 }}>
                We follow style rules including quotations (short and long quotes, edited quotes, errors or discriminatory terms in quoted passages), ellipsis, interpolations, abbreviations, dates, times, numbers, fractions and decimals, and footnotes. We write your dissertation in the manner which is argumentative — the logical and coherent construction substantiated by relevant primary and secondary sources. Our medical writers have capability to write your dissertation in complete, concise and clear manner. We follow EASE guidelines and screen through Viper, iThenticate, CrossCheck, eTBLAST, SafeAssign, WCopyFind, Grammarly and others.
              </p>
            </div>
            <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: "8px", padding: "20px" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "0.95rem", fontWeight: 700, marginBottom: "10px", color: "#f9c74f" }}>Why Choose Our Medical Writers</h3>
              <p style={{ fontSize: "0.82rem", color: "#c5d5f0", lineHeight: 1.7 }}>
                With over 400+ academic medical writers, we endeavour to submit your PhD document with native linguistic command over medical and scientific terms. We specialise in Public Health Policy Analysis, case study of an organisation, study of a specific intervention or event, secondary data analysis, meta-analysis, systematic review, and reflection based dissertation. Unlimited revisions guaranteed, less than 5% plagiarism with Turnitin certificate, and 24/7 support via email, phone, and WhatsApp.
              </p>
            </div>
          </div>
        </div>

        {/* ── Testimonials ── */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px" }}>What Our Clients Say</h2>
        <div style={{ marginBottom: "48px" }}>
          <TestimonialSlider testimonials={testimonials} />

        {/* ── FAQ ── */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Frequently Asked Questions</h2>
        <div style={{ marginBottom: "48px" }}>
          <FaqAccordion faqs={faqs} />
        </div>

      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "8px" }}>Order Now</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>
          Invest in your career by availing language editing help from the UK &amp; the US Qualified researchers
        </p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>

      <style>{`
        @media(max-width:768px){
          .two-col-grid{grid-template-columns:1fr!important;}
          .three-col-grid{grid-template-columns:1fr!important;}
        }
        @media(max-width:900px){
          .four-col-grid{grid-template-columns:1fr 1fr!important;}
          .three-col-grid{grid-template-columns:1fr 1fr!important;}
        }
      `}</style>
    </>
  );
}
