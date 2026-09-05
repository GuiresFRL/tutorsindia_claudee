import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import Image from "next/image";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "Biological & Life Science Writing Help",
  description: "Biological and Life Science academic writing help for UG, Master's and PhD students. Dissertations, lab reports and manuscripts written by experts in biology, genetics and biotechnology.",
  alternates: { canonical: "https://www.tutorsindia.com/subjects/biological-life-science-academic-writing-help/" },
};

const faqs = [
  {
    q: "Why should I Choose Tutors India for Biological and Life science writing services?",
    a: `Our native writers are knowledgeable and experience in different subjects fields especially in the Biological and Life science writing ensure to understand your project well and delivered on time. With over 400+ academic writers endeavor to submit your document that meets the terminology of the academic area but also it has the native linguistic command over Biological and Life science terms.

Our Biological and Life science writing services uniqueness includes:
• An original, fresh and 100% plagiarism free content.
• Flawless, ideal and sound Biological and Life Science research paper that meets recommended formatting rules.
• Scientifically accurate and an appropriate information discovers the groundbreaking conceptualization.
• On-Time delivery with no compromise on Quality.`,
  },
  {
    q: "What kind of services do you offer?",
    a: `We offer a wide variety of the following outstanding Biological and Life science writing supports including

For Masters and PhD: Abstracts writing, journal articles and manuscripts, scientific and medical literature review writing, research proposal, research methodology, textual/data analysis, statistical analysis, findings, results and conclusions, referencing and more.

In addition, tailor-made assignment, essay and manuscript support, conference paper and textbook writing, coding and algorithm, programming, software and tool development, illustration, manuscript statistics and PhD research plan as well as editing services. We deliver a professional academic assistance to complete any research work and writing you may require.

If you need any other research writing support, please select 'other' on our pricing order form and clearly outline what is required. We will call back you immediately, or you can contact UK toll-free 08081891062.`,
  },
  {
    q: "What are the topics covered in Biological and Life science writing?",
    a: `We covers the wide range of Biological and Life science writing topics such as Antibiotic resistance, anthropoids of medical importance, genetics, obesity, Homosexuality and genetics, cloning, neurobiology, stem cell research, human physiology and anatomy, Meningitis, hypnosis, nanotechnology, ethics and human nature, evolution studies, gastroenterology, global threats to health and life science, public health, immunology, ebola, alternative medicine, cancer, phobias and more.`,
  },
  {
    q: "If I am not satisfied with your Biological and Life science writing, how do you address the issues?",
    a: `At Tutors India, our first motto offers 100% customer satisfaction, so it is a very rare event. However, we provide the guarantee of the unlimited revisions*, so you need not worry about it.`,
  },
  {
    q: "What If I need some customization in the Biological and Life science writing?",
    a: `Of course, we ready to help our clients. Our service is completely flexible, and tailor made to the customer. Hence, if you can provide the areas of customization related to research area initially proposed, we could make amendments to the document.`,
  },
  {
    q: "Can you show me sample work of Biological and Life science writing?",
    a: `Yes, we have an uploaded some of the Biological and Life science writing works samples. For more details, let talks with our academic writers.`,
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
    author: "Amelia Brooks",
    role: "UK – Big Data Analytics",
    avatar: "/wp-content/uploads/2024/06/Amelia-Brooks.webp",
  },
  {
    quote: "I was stuck, frustrated, and running out of time. Tutors India stepped in at the perfect moment and turned everything around faster than I imagined. Worth every bit.",
    author: "Oliver Bennett",
    role: "UK – Big Data Analytics",
    avatar: "/wp-content/uploads/2024/06/Oliver-Bennett.webp",
  },
  {
    quote: "The attention to detail was incredible. It didn't feel like I was working with a service provider — it felt like I had an expert academic partner guiding me throughout.",
    author: "Layla Al Mansoori",
    role: "UAE – Essay & Assignment Writing",
    avatar: "/wp-content/uploads/2024/06/Layla-Al-Mansoori.webp",
  },
  {
    quote: "My research finally started making sense after working with this team. Their guidance simplified complex ideas and gave my project the structure it was missing.",
    author: "Hassan Al Falasi",
    role: "UAE – Essay & Assignment Writing",
    avatar: "/wp-content/uploads/2024/06/Hassan-Al-Falasi.webp",
  },
  {
    quote: "I submitted my work with complete confidence for the first time ever. The quality, formatting, and clarity were all beyond what I hoped for.",
    author: "Charlotte Reed",
    role: "UK",
    avatar: "/wp-content/uploads/2024/06/Charlotte-Reed.webp",
  },
  {
    quote: "The team handled everything professionally from start to finish. Timely updates, quick responses, and excellent academic quality — exactly what students need during stressful deadlines.",
    author: "Zain Al Hashmi",
    role: "UAE",
    avatar: "/wp-content/uploads/2024/06/Zain-Al-Hashmi.webp",
  },
  {
    quote: "I was amazed at how naturally the content matched my writing style and university standards. It felt authentic, polished, and academically strong.",
    author: "Emily Carter",
    role: "UK",
    avatar: "/wp-content/uploads/2024/06/Emily-Carter.webp",
  },
  {
    quote: "This service saved me during one of the most stressful phases of my academic journey. Reliable, professional, and genuinely supportive throughout the process.",
    author: "Noora Al Zaabi",
    role: "UAE",
    avatar: "/wp-content/uploads/2024/06/Noora-Al-Zaabi.webp",
  },
  {
    quote: "The final work looked so refined and well-structured that even my mentor appreciated the improvement immediately. Highly recommended for serious academic support.",
    author: "George Whitmore",
    role: "UK",
    avatar: "/wp-content/uploads/2024/06/George-Whitmore.webp",
  },
  {
    quote: "What impressed me most was how personalized the support felt. They didn't just complete the work — they understood my goals and helped me present them better.",
    author: "Khalid Al Nuaimi",
    role: "UAE",
    avatar: "/wp-content/uploads/2024/06/Khalid-Al-Nuaimi.webp",
  },
];

const databases = [
  "Google Scholar", "Biosis Citation Index", "Zoological Record", "MEDLINE", "PubMed",
  "SciFinder", "Illustrata Natural Sciences", "ChemBank", "Clark Fungal Database", "Cogprints",
  "NIST Online Databases", "National Reference Centre for Bioethics Literature", "Science.gov",
  "ToxNet", "Tree of Life Web Project", "Scirus", "WorldwideScience.org",
];

const subjects = [
  "Agricultural Science", "Biomedical Engineering", "Biotechnology", "Food Sciences",
  "Molecular Sciences", "Neurosciences", "Environmental Science", "Medical Biochemistry",
  "Biological Sciences", "Nutrition", "Physics", "Chemistry", "Biology", "Plant Genetics",
  "Sports & Exercise Physiology", "Next Generation Drug Discovery", "Synthetic Biology & Biotechnology",
  "Systems & Synthetic Biology", "Microbiology", "Animal Biology", "Human Biology",
  "Computational Biology", "Plant Development", "Human Genetics", "Neurophysiology",
  "Virology", "Radiation Biology", "Biophysical Chemistry", "Molecular Parasitology",
  "Membrane Biology", "Eukaryotic Gene Expression", "Neural & Behavioural Biology",
  "Redox Biology", "Fungal Biology and Biotechnology",
];

export default function BiologicalLifeScienceWritingPage() {
  return (
    <main style={{ color: "#222" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Subjects", url: "/subjects/" }, { name: "Biological & Life Science" , url: "https://www.tutorsindia.com/subjects/biological-life-science-academic-writing-help/" }]} />
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #1a2a6c 0%, #2d3a5e 100%)", color: "#fff", padding: "60px 20px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", gap: 40, flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 280 }}>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
              <Link href="/subjects/" style={{ color: "#a0b8e0" }}>Subjects</Link>{" / "}
              <span style={{ color: "#fff" }}>Biological &amp; Life Science</span>
            </div>
            <p style={{ color: "#f90", fontWeight: 700, marginBottom: 8, fontSize: 14, textTransform: "uppercase", letterSpacing: 1 }}>PhD, Master's &amp; Authors / Publishers</p>
            <h1 style={{ fontFamily: "Merriweather, serif", fontSize: "clamp(1.6rem,4vw,2.6rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: 20 }}>
              Biological &amp; Life Science– Academic Writing
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 28, opacity: 0.9 }}>
              The US &amp; UK writers at Tutors India aim at inculcating knowledge within students and build a great confidence to submit their Biology &amp; Life science related research paper writing successfully.
            </p>
            <Link href="/order/" style={{ background: "#f90", color: "#fff", padding: "13px 30px", borderRadius: 6, fontWeight: 700, textDecoration: "none", display: "inline-block" }}>
              Order Now
            </Link>
          </div>
          <div style={{ flex: "0 0 auto" }}>
            <Image src="/wp-content/uploads/2024/08/Report-Writing-service.webp" alt="Biological and Life Science Writing" width={340} height={260} style={{ borderRadius: 10, maxWidth: "100%" }} />
          </div>
        </div>
      </section>

      {/* Section heading */}
      <section style={{ background: "#f8f9fb", padding: "50px 20px 30px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Merriweather, serif", fontSize: "clamp(1.2rem,3vw,1.8rem)", fontWeight: 800, marginBottom: 16, color: "#1a2a6c" }}>
            Biological &amp; Life Science (Thesis), Assignments, Manuscript Writing &amp; Editing Services
          </h2>
          <p style={{ maxWidth: 820, margin: "0 auto", fontSize: 16, lineHeight: 1.8, color: "#444" }}>
            Our experts are professional scientific experts having the highest qualification from the UK. Decades of experience in writing and editing has been instrumental in shaping the career of students (postdoctoral fellowships or jobs).
          </p>
        </div>
      </section>

      {/* Quality Cards */}
      <section style={{ padding: "40px 20px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather, serif", textAlign: "center", fontSize: "clamp(1.1rem,2.5vw,1.5rem)", fontWeight: 700, marginBottom: 30, color: "#1a2a6c" }}>
            Biological &amp; Life Science Professionals at Tutors India assures you the quality
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 24 }}>
            {[
              { img: "/wp-content/uploads/2024/08/Report-Writing-service.webp", title: "Your Biological and Life Science-Academic Writing", text: "Get the ideal and flawless Biological and life science writing samples from our Subject-Matter expertise." },
              { img: "/wp-content/uploads/2024/08/Quality-Assurance.webp", title: "Quality Assurance", text: "We ensure to achieve High Quality at every stage-Check of Quality Assurance & Enhancement activities report." },
              { img: "/wp-content/uploads/2024/08/Plagiarism-Report.webp", title: "Plagiarism Report", text: "We have dedicated in deliver your document after correcting plagiarism using–Write Check or Turnitin, and or any other advanced plagiarism tools." },
              { img: "/wp-content/uploads/2024/08/Customer-Interaction.webp", title: "Customer Interaction", text: "We act in real-time and interact with customer at every stage in terms of modifications, any query related to your project and order delivery." },
            ].map((c) => (
              <div key={c.title} style={{ background: "#f8f9fb", borderRadius: 10, padding: 24, textAlign: "center", boxShadow: "0 2px 10px rgba(0,0,0,0.06)" }}>
                <Image src={c.img} alt={c.title} width={80} height={80} style={{ marginBottom: 14 }} />
                <h3 style={{ fontFamily: "Merriweather, serif", fontSize: 15, fontWeight: 700, marginBottom: 10, color: "#1a2a6c" }}>{c.title}</h3>
                <p style={{ fontSize: 13, color: "#555", lineHeight: 1.6 }}>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / body */}
      <section style={{ padding: "50px 20px", background: "#f8f9fb" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather, serif", fontWeight: 800, color: "#1a2a6c", marginBottom: 16, fontSize: "clamp(1.1rem,2.5vw,1.5rem)" }}>Biological &amp; Life Science Writing from qualified Expert</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#444", marginBottom: 20 }}>
            Biological and life science research combines experimental rigour with structured scientific writing. Whether your study follows a systematic review protocol (PRISMA), a randomised controlled trial (CONSORT), or a laboratory-based empirical design, your dissertation must meet the methodological standards of high-impact journals indexed on PubMed, Web of Science, and Scopus. Our specialist writers apply Vancouver, APA, or Harvard referencing — whichever your institution requires — and are proficient in data analysis tools including SPSS, R, and GraphPad Prism.
          </p>
          <h3 style={{ fontFamily: "Merriweather, serif", fontWeight: 700, color: "#1a2a6c", marginBottom: 10 }}>We use subject-specific language, exemplary presentation that demonstrates clear, logical, imaginative, creative &amp; Original</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#555", marginBottom: 20 }}>
            We demonstrate exceptional ability in the appropriate use of the relevant literature, theory, methodologies, practices, tools, etc.
          </p>
          <h3 style={{ fontFamily: "Merriweather, serif", fontWeight: 700, color: "#1a2a6c", marginBottom: 14 }}>Our writing standard are at an exemplary standard showing creativity &amp; innovation &amp; ensures link between theory &amp; practice</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {subjects.map(s => (
              <span key={s} style={{ background: "#e8eaf0", color: "#1a2a6c", padding: "5px 12px", borderRadius: 16, fontSize: 13, fontWeight: 500 }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Tutors India */}
      <section style={{ background: "#e8eaf0", padding: "40px 20px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather, serif", fontWeight: 800, color: "#1a2a6c", marginBottom: 16, fontSize: "clamp(1.1rem,2.5vw,1.4rem)" }}>Why Tutors India for Biological &amp; Life Science writing and editing services?</h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#444" }}>
            The US &amp; UK writers at Tutors India aim at inculcating knowledge within students and build a great confidence to submit their dissertation successfully.
          </p>
        </div>
      </section>

      {/* 4 Feature Cards */}
      <section style={{ padding: "50px 20px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather, serif", textAlign: "center", fontWeight: 800, color: "#1a2a6c", fontSize: "clamp(1.1rem,2.5vw,1.5rem)", marginBottom: 30 }}>
            A Dissertation Writing Service features that helps to get the grade
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 24 }}>
            <div style={{ border: "1px solid #e0e4ee", borderRadius: 10, padding: 28 }}>
              <h3 style={{ fontFamily: "Merriweather, serif", fontWeight: 700, color: "#1a2a6c", marginBottom: 12 }}>Empirical &amp; Theoretical Papers</h3>
              <p style={{ fontSize: 14, color: "#555", lineHeight: 1.7 }}>
                We help you to write empirical papers (Introduction, data, model, estimation technique or methodology, findings, and conclusion), that usually consists of coefficient estimates derived from regression analyses. Further, we also support in developing theoretical papers, that are proved, with a sufficient degree of internal logical consistency.
              </p>
            </div>
            <div style={{ border: "1px solid #e0e4ee", borderRadius: 10, padding: 28 }}>
              <h3 style={{ fontFamily: "Merriweather, serif", fontWeight: 700, color: "#1a2a6c", marginBottom: 12 }}>Your Choice of Data Collection – Evidence to Support Argument</h3>
              <p style={{ fontSize: 14, color: "#555", lineHeight: 1.7 }}>
                We help you to collect primary and secondary data collection through library research, internet searches (for secondary), while for quantitative data, including questionnaire method. We justify the chosen methodology through theoretical justification rather than the argument of lack of time / financial resources as a reason for limiting research.
              </p>
            </div>
            <div style={{ border: "1px solid #e0e4ee", borderRadius: 10, padding: 28 }}>
              <h3 style={{ fontFamily: "Merriweather, serif", fontWeight: 700, color: "#1a2a6c", marginBottom: 12 }}>Experimental Method – Laboratory Reports</h3>
              <p style={{ fontSize: 14, color: "#555", lineHeight: 1.7 }}>
                We help you demonstrate command of the context and the background including methods, presents and analysis with clarity. Your Choice of Methodology — we help you to identify the right choice of theoretical modeling strategy that helps you to address the problem, including a clear hypotheses, the statistical and technique including the identification and justification.
              </p>
            </div>
            <div style={{ border: "1px solid #e0e4ee", borderRadius: 10, padding: 28 }}>
              <h3 style={{ fontFamily: "Merriweather, serif", fontWeight: 700, color: "#1a2a6c", marginBottom: 12 }}>Free while you order dissertation</h3>
              <ul style={{ fontSize: 14, color: "#555", lineHeight: 2, paddingLeft: 18 }}>
                {["Appendices", "Abstract", "Title Page", "Copyright Page", "Table of Content", "Lists of Charts, graphs, Illustrations", "Formatting", "Personal statement for your research proposal", "Bibliography"].map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dark panel */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "50px 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 36 }}>
            <div>
              <h3 style={{ fontFamily: "Merriweather, serif", fontWeight: 700, color: "#f90", marginBottom: 14 }}>Biological &amp; Life Science Style - Writing &amp; Editing Features</h3>
              <p style={{ fontSize: 14, lineHeight: 1.8, opacity: 0.9 }}>
                We help you to submit a plan of the dissertation (proposed structure / main argument), progress, and a sample of writing to their supervisor according to the style of reference – Draft would demonstrate evidence of imagination, creativity, critical insights and analytical rigor.
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: "Merriweather, serif", fontWeight: 700, color: "#f90", marginBottom: 14 }}>Sources, Citation and Presentation</h3>
              <p style={{ fontSize: 14, lineHeight: 1.8, opacity: 0.9 }}>
                We help you identify an impressive range of primary and secondary resources, in compliance with the Style Guide found in the Science including the American Chemical Society (ACS Style Guide), Vancouver Style (Citing Medicine: the NLM Style Guide for Authors, editors, and Publishers), the APA style, Chicago, MLA. Our team are aware of citations that includes books, reported cases, published &amp; unpublished papers, government &amp; private publications, discussion papers/reports, citing newspaper/magazines, press releases, and world wide web sites.
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: "Merriweather, serif", fontWeight: 700, color: "#f90", marginBottom: 14 }}>Biological &amp; Life Science Style &amp; Argument</h3>
              <p style={{ fontSize: 14, lineHeight: 1.8, opacity: 0.9 }}>
                We follow styles rules including quotations (short and long quotes, edited quotes, errors or discriminatory terms in quoted passages), ellipsis, interpolations, abbreviations, dates, times, numbers, fractions and decimals, and footnotes. We write your dissertation in the manner which is argumentative — the logical and coherent construction substantiated by relevant primary and secondary sources. We screen the article in different software including Viper, iThenticate, cross check, eTBLAST, SafeAssign, WCopyFind, checkforplagiarism, grammarly and sometimes in Google.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Databases */}
      <section style={{ padding: "50px 20px", background: "#f8f9fb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather, serif", fontWeight: 800, color: "#1a2a6c", marginBottom: 10, fontSize: "clamp(1.1rem,2.5vw,1.4rem)" }}>Biological &amp; Life Science Databases We Use</h2>
          <p style={{ color: "#555", marginBottom: 24, fontSize: 14 }}>
            We use wide range of specialist databases including PubMed, MEDLINE, SciFinder, Biosis Citation Index, Zoological Record, ToxNet, Science.gov and many more.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {databases.map(db => (
              <span key={db} style={{ background: "#1a2a6c", color: "#fff", padding: "6px 14px", borderRadius: 20, fontSize: 13, fontWeight: 500 }}>{db}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: "60px 20px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather, serif", textAlign: "center", fontWeight: 800, color: "#1a2a6c", marginBottom: 40, fontSize: "clamp(1.2rem,3vw,1.8rem)" }}>
            What Our Biological &amp; Life Science Students Say
          </h2>
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* FAQs */}
      <section style={{ padding: "60px 20px", background: "#f8f9fb" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather, serif", textAlign: "center", fontWeight: 800, color: "#1a2a6c", marginBottom: 36, fontSize: "clamp(1.2rem,3vw,1.8rem)" }}>
            Frequently Asked Questions
          </h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#f90", padding: "50px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Merriweather, serif", color: "#fff", fontWeight: 800, fontSize: "clamp(1.3rem,3vw,2rem)", marginBottom: 12 }}>Order Now</h2>
        <p style={{ color: "#fff", fontSize: 16, marginBottom: 28 }}>
          Invest in your career by availing language editing help from the UK &amp; the US Qualified researchers
        </p>
        <Link href="/order/" style={{ background: "#1a2a6c", color: "#fff", padding: "14px 36px", borderRadius: 6, fontWeight: 700, textDecoration: "none", display: "inline-block" }}>
          Order Now
        </Link>
      </section>
    </main>
  );
}
