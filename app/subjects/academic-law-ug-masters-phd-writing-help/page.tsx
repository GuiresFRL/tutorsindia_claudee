import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "Academic Law Writing Help | UG, Masters, PhD",
  description: "Expert Academic Law Writing for UG, Masters and PhD students. Commercial law, criminal law, international law, constitutional law. Harvard & OSCOLA. Tutors India.",
  alternates: { canonical: "https://tutorsindia.com/subjects/academic-law-ug-masters-phd-writing-help/" },
};

const faqs = [
  {
    q: "Why should I Choose Tutors India for academic law writing services?",
    a: "Our native academic law writers are skillful and experienced in different subject fields especially in law writing — ensuring to understand your project well and deliver on time. With over 400+ academic writers, we endeavour to submit your PhD document that meets the terminology of the academic area but also has the native linguistic command over Academic law terms. Thereby, it boosts opportunities to achieve high credits in your law thesis and increasing the chances of acceptance by high impact factor journal.\n\nOur academic law writing services uniqueness includes:\n• An original, fresh and 100% plagiarism free content.\n• Flawless, ideal and sound law research paper that meets recommended formatting rules.\n• Scientifically accurate and appropriate information to discover groundbreaking conceptualization.\n• On-Time delivery with no compromise on Quality.",
  },
  {
    q: "What kind of services do you offer?",
    a: "We offer an extensive variety of the following outstanding academic law supports for Masters and PhD including: Abstracts writing, journal articles and manuscripts, law literature reviews, research proposal, research methodology, textual/data analysis, statistical analysis, findings, results, and conclusions, referencing, and more.\n\nIn addition, tailor-made assignment, essay and manuscript support, conference paper and textbook writing, coding and algorithm, programming, software and tool development, illustration, manuscript statistics and PhD research plan as well as editing services. We deliver a professional academic assistance to complete any research work and writing you may require.",
  },
  {
    q: "What are the topics covered in academic law writing?",
    a: "We cover the wide range of law writing topics such as public law, medical law, business law, commercial law, intellectual property, competition law, international criminal law, family law, civil mitigation and environmental law, company and partnership law, employment and equality, European law, human rights and immigration law, housing and land law and more.",
  },
  {
    q: "If I am not satisfied with your law writing, how do you address the issues?",
    a: "At Tutors India, our first motto is to offer 100% customer satisfaction, so it is a very rare event. However, we provide the guarantee of unlimited revisions*, so you need not worry about it.",
  },
  {
    q: "If I need some customisation in the academic law writing, do you help me?",
    a: "Of course, we are ready to help our clients. Our law writing service is completely flexible and tailor made to the customer. Hence, if you can provide the areas of customisation related to the research area initially proposed, we could make amendments to the law writing.",
  },
  {
    q: "Can you show me sample work of academic law writing?",
    a: "Yes, we have uploaded some of the academic writing work samples. For more details, please talk with our academic law writers.",
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
    quote: "First and foremost, I want to express my gratitude for your writer's assistance and effort in developing this research technique for my research paper. It would be difficult to accomplish this assignment on deadline without your assistance. I believe that this legal subject is rather challenging, and starting to create this law paper without your writer's assistance would be extremely difficult.",
    author: "Hunter W. Lindström, JD, PhD",
    avatar: "/wp-content/uploads/2018/12/user-profile-146x146-1-85x85.png",
  },
  {
    quote: "Even though my professor refused to extend my deadline, I needed to find an assignment assistance provider, and I'm glad I found Tutors India. They responded quickly, and I received an exceptionally well-written paper before the deadline.",
    author: "Dr. Logan C. Sinclair, PhD",
    avatar: "/wp-content/uploads/2021/09/user8-85x85.jpg",
  },
  {
    quote: "I can say that it was a pleasant experience in which Tutors India displayed flexibility in adapting to our needs and presented an exceptional report that met all of our expectations. Personally, I appreciated the team's prompt follow-up, and we will undoubtedly contact them if additional research assistance is required.",
    author: "Connor J. Gallagher, MPhil",
    avatar: "/wp-content/uploads/2021/09/user2-85x85.jpg",
  },
  {
    quote: "Whether you believe it or not, I am completely delighted with the essay you wrote for me. I received a wonderful grade, and I am now certain that your promises are true. Tutors India, thank you.",
    author: "Dr. Declan O'Connell, MD, PhD",
    avatar: "/wp-content/uploads/2021/09/user1-85x85.jpg",
  },
  {
    quote: "Honestly, I didn't expect this level of quality. The team understood exactly what I needed and delivered work that felt genuinely professional. My confidence went from stressed to unstoppable.",
    author: "Amelia Brooks, UK",
    avatar: "/wp-content/uploads/2024/06/Amelia-Brooks-85x85.webp",
  },
  {
    quote: "My research finally started making sense after working with this team. Their guidance simplified complex ideas and gave my project the structure it was missing.",
    author: "Hassan Al Falasi, UAE",
    avatar: "/wp-content/uploads/2024/06/Hassan-Al-Falasi-85x85.webp",
  },
];

const qualityCards = [
  {
    img: "/wp-content/uploads/2021/11/Academic-Law-Writing.png",
    title: "Academic Law Writing Sample Document",
    desc: "Your Academic Law Writing — Get the flawless and ideal Academic Law Writing samples from our Subject-Matter expertise as such it delivered.",
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

export default function AcademicLawPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* ── Hero ── */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="law-hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
              <Link href="/subjects/" style={{ color: "#a0b8e0" }}>Subjects</Link>{" / "}
              <span style={{ color: "#fff" }}>Academic Law Writing</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "10px" }}>
              Law – Academic Writing
            </h1>
            <p style={{ color: "#f9c74f", fontSize: "0.95rem", fontWeight: 600, marginBottom: "12px" }}>
              PhD, Master&apos;s &amp; Authors / Publishers
            </p>
            <p style={{ color: "#c5d5f0", fontSize: "0.97rem", lineHeight: 1.75, marginBottom: "10px" }}>
              The US &amp; UK writers at Tutors India aim at inculcating knowledge within students and build a great confidence to submit their dissertation successfully by appropriate use of legal rules, principles, legislations and/or policies relevant to the question.
            </p>
            <p style={{ color: "#c5d5f0", fontSize: "0.92rem", lineHeight: 1.7, marginBottom: "22px" }}>
              Our experts are professional legal writers having the highest qualification from the UK. Decades of experience in writing and editing has been instrumental in shaping the career of legal students.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "16px", textAlign: "center" }} className="law-hero-badge">
            <img src="/wp-content/uploads/2021/11/Academic-Law-Writing.png" alt="Academic Law Writing" style={{ width: "220px", height: "160px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>LLB · LLM · PhD<br />Qualified Writers</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.law-hero-inner{grid-template-columns:1fr!important;}.law-hero-badge{display:none!important;}}`}</style>
      </section>

      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>

        {/* ── About Law ── */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.45rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>
          Law Professionals at Tutors India assures you the quality
        </h2>
        <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "14px" }}>
          The discipline of Law is a set of rules and regulations enforced by the courts involving Government and its organs and its relationship with the subjects of the state. Adjudication of the law subject involves civil and criminal law. Civil law is to solve disputes between individuals and organizations, whereas criminal law is applicable to the offender of social order. There are certain lawsuits as a remedial measure to prevail the justice system.
        </p>
        <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "14px" }}>
          Legal subjects covered include: Public law, private law, constitutional and administrative law, contract law, tort law, property law, labor law, commercial law, company law, employment law, human rights law, medical law, family law, intellectual property law, international law, and environmental law.
        </p>
        <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "14px" }}>
          In every walk of life, the jurisdiction of law prevails in the society. Throughout the world, UK law course is widely accepted and forms the foundation of legal course. As an international law student from the UK, he or she stands to get career benefit in politics, business, finance and much more. Catering to the need of international students, an institute in the UK also offers specialized courses such as law &amp; IT, covering the aspects of privacy, digital rights, management, cybercrime, and e-commerce.
        </p>
        <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "36px" }}>
          Since the law is a vast subject having so many rules, amendments, codes; it might prove as cumbersome to students. This writing needs wide extensive study involving law books, magazines, references which should be translated into a well laid out dissertation writing with heading, subheading, introduction, body, conclusion enumerating valid points of research. So as to make the writing work a professional one, it is better to hire professional legal writers. Dissertation writing service provided by us covers all the contents of the study.
        </p>

        {/* ── 4 Quality Cards ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px", marginBottom: "48px" }} className="four-col-grid">
          {qualityCards.map(c => (
            <div key={c.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column" }}>
              <img src={c.img} alt={c.title} style={{ width: "100%", height: "130px", objectFit: "cover" }} />
              <div style={{ padding: "14px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "0.94rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "8px", lineHeight: 1.4 }}>{c.title}</h3>
                <p style={{ fontSize: "0.79rem", color: "#666", lineHeight: 1.6, marginBottom: "10px", flexGrow: 1 }}>{c.desc}</p>
                <Link href={c.href} style={{ fontSize: "0.8rem", color: "#e87722", fontWeight: 600 }}>View More →</Link>
              </div>
            </div>
          ))}
        </div>

        {/* ── Why Choose Tutors India ── */}
        <div style={{ background: "#f5f6fa", border: "1px solid #dde2ef", borderRadius: "12px", padding: "32px", marginBottom: "48px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>
            Why Tutors India for Law writing and editing services? Exemplary standard of written English
          </h2>
          <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "14px" }}>
            The US &amp; UK writers at Tutors India aim at inculcating knowledge within students and build a great confidence to submit their dissertation successfully by appropriate use of legal rules, principles, legislations and/or policies relevant to the question.
          </p>
          <p style={{ color: "#555", fontSize: "0.92rem", lineHeight: 1.8, marginBottom: "14px" }}>
            We use subject-specific language, exemplary presentation that demonstrates clear, logical, imaginative, creative &amp; original — use of ideas, concepts &amp; theory at a required level. Our writing standard is at an exemplary standard showing creativity &amp; innovation &amp; ensures link between theory &amp; practice.
          </p>
          <p style={{ color: "#555", fontSize: "0.92rem", lineHeight: 1.8 }}>
            <strong>Legal practice areas:</strong> Commercial, Company, Construction, Contract, Criminal, Employment, English legacy system, Foreign, Human rights, Tort Law, Sports Law, Property Law, Medical Law &amp; International Law.
          </p>
        </div>

        {/* ── Service Features ── */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>
          A Law Dissertation Writing Service features that helps to get the grade
        </h2>
        <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "28px" }}>
          We help you in the broad range of law based specialization including civil, criminal, public, private, constitutional, administrative, property, human rights, company law, commerce law, intellectual property, tax, banking with the expected grade. Law dissertations are selected based on your area of interest, research gap, and feasibility of data collection. We make you strong in your dissertation by dealing with all the questions that you have in your mind. The process also entails data collection, statistical analysis and presentation in the format of your Institute. As a final process, the master&apos;s thesis is further put to review and proofreading to ensure that you get quality work.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "48px" }} className="two-col-grid">
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "24px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Your Choice of Primary or Secondary Research</h3>
            <p style={{ fontSize: "0.94rem", color: "#555", lineHeight: 1.75 }}>
              We help you to collect primary and secondary data through library research, internet searches (for secondary), while for quantitative research through interviews with key informants, focus group discussion guide, questionnaire and observation. We justify the chosen methodology through theoretical justification rather than the argument of lack of time or financial resources as a reason for limiting research. The chosen methodology will be tailored to achieve the research question and substantiated with references or argument to support how methodology is the most suitable for finding the solution to your research question.
            </p>
          </div>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "24px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Your Choice of quantitative or qualitative or Triangulation methodologies</h3>
            <p style={{ fontSize: "0.94rem", color: "#555", lineHeight: 1.75 }}>
              We help you to identify the right choice of research methodology for your law dissertation, while the choice purely depends on the theoretical framework or a conceptual framework and the research question. We assist you to identify the jurisprudential basis of your research, the theorist to support your research and answer your research question — e.g. Whether you prefer Thomas Hobbes to Jeremy Bentham? Or positivist school of thought to the historical school?
            </p>
          </div>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "24px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Development of Questionnaire or Interview questions</h3>
            <p style={{ fontSize: "0.94rem", color: "#555", lineHeight: 1.75 }}>
              We help you in a broad range of services from the selection of a dissertation topic to complete your master&apos;s dissertation successfully with the expected grade. UK law thesis topics are selected based on your area of interest, research gap, and feasibility of data collection. We make you strong in your dissertation by dealing with all the questions that you have in your mind. The process also entails data collection, statistical analysis and presentation in the format of your Institute.
            </p>
          </div>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "24px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Free while you order dissertation</h3>
            <p style={{ fontSize: "0.94rem", color: "#555", lineHeight: 1.75, marginBottom: "10px" }}>
              We help to develop questionnaire or interview guide at free of cost while you order for dissertation. We also provide free:
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

        {/* ── Academic Law Writing Features (dark panel) ── */}
        <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "36px", marginBottom: "48px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "12px" }}>Academic Law Writing &amp; Editing Features</h2>
          <p style={{ color: "#c5d5f0", fontSize: "0.92rem", lineHeight: 1.75, marginBottom: "28px" }}>
            We help you to submit a plan of the dissertation (proposed structure / main argument), progress, and a sample of writing to their supervisor according to the style of reference — Draft would demonstrate evidence of imagination, creativity, critical insights and analytical rigour.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }} className="three-col-grid">
            <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: "8px", padding: "20px" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "0.95rem", fontWeight: 700, marginBottom: "10px", color: "#f9c74f" }}>Sources, Citation and Presentation</h3>
              <p style={{ fontSize: "0.82rem", color: "#c5d5f0", lineHeight: 1.7 }}>
                We help you identify an impressive range of primary and secondary resources, in compliance with the Law Style Guide including the Oxford Standard of Legal Citation (OSCOLA), the Harvard Scheme, the Australian Guide to Legal Citations, the Canadian Guide to Uniform Legal Citations, the Bluebook, and the New Zealand Guide to Legal Citation. Our team are aware of citations for books, reported cases, citing judges, published and unpublished papers, government publications, acts/legislations, international treaties, statutes, parliamentary debates and more.
              </p>
            </div>
            <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: "8px", padding: "20px" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "0.95rem", fontWeight: 700, marginBottom: "10px", color: "#f9c74f" }}>Legal Style &amp; Argument</h3>
              <p style={{ fontSize: "0.82rem", color: "#c5d5f0", lineHeight: 1.7 }}>
                We follow style rules including quotations (short and long quotes, edited quotes, errors or discriminatory terms in quoted passages), ellipsis, interpolations, abbreviations, dates, times, numbers, fractions and decimals, and footnotes. We write your dissertation in the manner which is argumentative — the logical and coherent construction substantiated by relevant primary and secondary sources. Our law writers have capability to write in own voice and clearly indicate the voice through, using expressions (e.g. it is argued), reserving verbatim quotes for exceptional circumstances.
              </p>
            </div>
            <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: "8px", padding: "20px" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "0.95rem", fontWeight: 700, marginBottom: "10px", color: "#f9c74f" }}>Why Choose Our Writers</h3>
              <p style={{ fontSize: "0.82rem", color: "#c5d5f0", lineHeight: 1.7 }}>
                With over 400+ academic writers, we endeavour to submit your PhD document that meets the terminology of the academic area and has native linguistic command over academic law terms. Our writers hold LLB, LLM, or PhD qualifications from top UK law schools. We guarantee less than 5% plagiarism with a Turnitin certificate, unlimited revisions, and on-time delivery. Support is available 24/7 via email, phone, and WhatsApp.
              </p>
            </div>
          </div>
        </div>

        {/* ── Testimonials ── */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px" }}>What Our Clients Say</h2>
        <div style={{ marginBottom: "48px" }}>
          <TestimonialSlider testimonials={testimonials} />
        </div>

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
