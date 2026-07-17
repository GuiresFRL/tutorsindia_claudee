import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "Technical Editing & Rewriting Service",
  description: "Are you worried about the language quality of your paper presentation? Tutors India offers professional and complete technical editing assistance to submit your papers with perfection and confidence.",
  alternates: { canonical: "https://www.tutorsindia.com/our-services/editing-services/technical-editing/" },
};

const faqs = [
  {
    q: "What Types of language Documents Do You Edit and Proofread?",
    a: "At Tutors India, we generally edit and Proofread documents such as Microsoft word, PDF, text file document, PowerPoint, WordPerfect and Open Office documents. Especially PDF document , we use an annotation tool so that We regularly review Microsoft Word, PDF, PowerPoint, and text file documents. We can also review Wordperfect and Open Office documents. With PDF documents, we use a nifty annotation tool so that our recommended changes and comments appear as \"sticky notes\" on top of your document. If you have a question about whether we can review a type of document not listed here simply contact us!",
  },
  {
    q: "What Editing Services Does Tutors india Provide?",
    a: "We offer Language editing, thesis editing, copyediting, manuscript editing and other edit services to customers around the world. Certainly, we also provide dissertation editing and proofreading and other types of online editing to students, authors and businesses. It allows customers to receive help with the style and readability of a document or to simply focus on correct grammar, punctuation help and the removal of distracting errors. Read more about our services for Academic Editing, Technical Editing , Business Editing, ESL Editing, and Personal Editing Service (which also includes letter help).",
  },
  {
    q: "Who Are Tutors india Professional Language Editors?",
    a: "Tutors india professional editors are all highly qualified writers, professors, graduate students, lawyers or business professionals with extensive experience editing writing. They are also all native English speakers and we require that they have graduated from a top university and have the highest academic qualifications. Our editors who assist with ESL editing also have specific experience providing English grammar help. They are experts at resolving ESL grammar issues, ensuring correct spelling and delivering world-class editing and proofreading. Our editors are all completely committed to helping you improve each document you submit.",
  },
  {
    q: "How About Some Samples of Your Work?",
    a: "Sure, you can look some of the sample of the language-editing work here.",
  },
  {
    q: "what is the Time plan to complete your Language editing ?",
    a: "Based on the discussion with your tutors about your language-editing requirement, we set the time line",
  },
  {
    q: "How do you meet high academic standards?",
    a: "Tutors india offers highest quality language editing works. We aim to attain absolute customer satisfaction with every order. We will assign a Ph.D. educated writer with experience in your specific area of academic study. The writer will thoroughly research and complete your paper to your exact specifications. Once your order is completed, our Language editing department will review the completed version to ensure it is error-free and meets our standards. Before the paper arrives at your email or CRM software we check it with the latest anti-plagiarism software to guarantee, your order is 100 % authentic work.",
  },
];

const testimonials = [
  {
    quote: "Only a few days before a critical deadline, I contacted Tutors India for their technical editing services. It simply took them a few hours to get back to me with an estimate. When I discussed our deadlines, the experts went above and beyond to complete it in under 48 hours. Their ability to organise the content amazed me, and I was pleased with the ultimate outcome. I will undoubtedly employ their services in the future.",
    author: "Thomas",
  },
  {
    quote: "The wonderful team effort of Tutors India helped me in proofreading and technically edited my research paper. With their professionalism, prompt response and courteous service, I was able to receive what I expected. I am looking forward to continue my next project with the wonderful team at Tutors India. I truly am grateful for their presence in my professional life... Proofreading has never been so efficient and so pleasant! Thank you to all of you.",
    author: "Noah",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const editingLevels = [
  { feature: "Typographical errors", premium: true, advanced: true, standard: true },
  { feature: "Punctuation", premium: true, advanced: true, standard: true },
  { feature: "Grammar", premium: true, advanced: true, standard: true },
  { feature: "Sentence construction", premium: true, advanced: true, standard: true },
  { feature: "Terminology/reference check", premium: true, advanced: true, standard: false },
  { feature: "Logic, relevance and clarity", premium: true, advanced: true, standard: false },
  { feature: "Word choice", premium: true, advanced: true, standard: false },
  { feature: "Journal formatting", premium: true, advanced: false, standard: false },
  { feature: "Cover letter", premium: true, advanced: false, standard: false },
  { feature: "Tutors India certificate", premiumLabel: "On request", advanced: false, standard: false },
];

export default function TechnicalEditingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <style>{`
        .hero-inner { max-width: 900px; margin: 0 auto; padding: 0 1rem; }
        .hero-badge { display: inline-block; background: #e87722; color: #fff; font-size: .75rem; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; padding: .25rem .75rem; border-radius: 999px; margin-bottom: 1rem; }
        .three-col-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.5rem; }
        .two-col-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 1.5rem; }
        .four-col-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 1.25rem; }
        .editing-table { width: 100%; border-collapse: collapse; font-size: .9rem; }
        .editing-table th, .editing-table td { border: 1px solid #dde2ef; padding: .6rem 1rem; text-align: center; }
        .editing-table th { background: #1a2a6c; color: #fff; font-weight: 700; }
        .editing-table td:first-child { text-align: left; font-weight: 600; color: #1a2a6c; }
        .editing-table tr:nth-child(even) td { background: #f0f4ff; }
        @media(max-width:768px){
          .three-col-grid,.four-col-grid { grid-template-columns: 1fr; }
          .two-col-grid { grid-template-columns: 1fr; }
          .editing-table { font-size: .78rem; }
          .editing-table th, .editing-table td { padding: .4rem .6rem; }
        }
      `}</style>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", padding: "4rem 1rem 3rem", color: "#fff" }}>
        <div className="hero-inner">
          <span className="hero-badge">Technical Editing</span>
          <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.6rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "1rem" }}>
            Heavy Copyediting and Rewriting Service for your Manuscript &amp; Dissertation
          </h1>
          <p style={{ fontSize: "1.05rem", opacity: 0.9, marginBottom: "0.75rem" }}>
            Are you worried about the language quality of your paper presentation? Would you like to obtain professional help to complete your language editing? You have reached the right destination. Tutors India offers professional and complete language editing assistance to submit your papers with perfection and confidence
          </p>
          <p style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "2rem" }}>
            Then You&rsquo;ve Certainly Reached the Right place
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "flex-start", flexWrap: "wrap" }}>
            <Link href="/order" style={{ background: "#e87722", color: "#fff", padding: ".75rem 2rem", borderRadius: "6px", fontWeight: 700, textDecoration: "none" }}>Order Now</Link>
            <Link href="/contact-us" style={{ background: "transparent", color: "#fff", padding: ".75rem 2rem", borderRadius: "6px", fontWeight: 700, textDecoration: "none", border: "2px solid #fff" }}>Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Qualified editors */}
      <section style={{ background: "#fff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.4rem", fontWeight: 700, marginBottom: "1rem" }}>
            All your documents are edited and proofread by qualified and experienced researchers from the US &amp; UK
          </h2>
          <p style={{ color: "#333", lineHeight: 1.8 }}>
            Our editors are native English speakers, with industry experience, and educational degrees from international and top-ranked universities from the US, and the UK.
          </p>
        </div>
      </section>

      {/* Editing & Proofreading from Tutors India */}
      <section style={{ background: "#f0f4ff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            Editing &amp; Proofreading from Tutors India Editors
          </h2>
          <p style={{ color: "#333", lineHeight: 1.8 }}>
            The Editing service has always been a requirement in any sort of academics, copywriting and especially, in the Research field. The simple mistakes in spelling or grammar are not noticed by the students when they are in full flow, but that will stand out to a third party. Therefore, editing is an essential part of the writing process. English language editing and journal formatting are the key frames of Tutors India. Under this service of Journal editing and journal formatting Support where our reviewers work on your English standard and editing part before it is available to your reviewers to make them look into your research rather than language errors or style.
          </p>
        </div>
      </section>

      {/* End-to-End Copyediting */}
      <section style={{ background: "#fff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            End-to-End Copyediting &amp; proofreading services
          </h2>
          <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Tutors India offers complete editing services for the complete manuscript, dissertation, assignment, publications, etc. Our professional language editors make sure that your research work and assignments are thoroughly checked for no language errors before your submission. Our editors are from top universities around the world are subject experts in thousands of area of study to help your journal article manuscript edited. Tutors India has a numerous medical, scientific and technical scholars and Ph.D. holders to assist you in all the stages through the process of peer review. Your paper may be a 60,000-word thesis or an abstract of 300 words, our staff will work on the proper use of words, language, checking grammar and spelling in sentences, giving your paper a professional touch. We assure that after all the above process of checking, your paper has now reached the publication quality.
          </p>
          <p style={{ color: "#333", lineHeight: 1.8 }}>
            We provide two variations or levels of paper editing, proofreading. You can have your paper edited in either American or British English, and our formatting service will help you to modify your document according to your journal&rsquo;s guidelines. We allow you to submit the certificate of peer review along with the final draft of your paper to your journal to prove that your manuscript has been edited by a native English-speaking editor. Our certificate proves that your paper is already edited for English language and therefore a step closer to publication. Every document is considered at Tutors India to enable issuing certificate however not every paper earns a certificate.
          </p>
        </div>
      </section>

      {/* Our Guarantees banner */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Our Guarantees</h2>
          <p style={{ opacity: 0.9, lineHeight: 1.8 }}>
            We are totally confident on our dissertation &amp; manuscript editing service that would be a fruitful reward for you to get a step further closer to the publishing of your paper. We would be happy to re-edit your document for free, in case your paper is rejected by your journal for English language errors which our editors have edited before. In that case, we do not guarantee for the work or material that has been added further to the paper after the final editing has been done by our editors. After our language polishing, if you need to add sections to your paper to address your journal reviewers&rsquo; comments, you can send your manuscript back to us for re-editing.
          </p>
        </div>
      </section>

      {/* Simply easy */}
      <section style={{ background: "#f0f4ff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            Editing &amp; Proofreading is Simply easy &amp; Straightforward
          </h2>
          <p style={{ color: "#333", lineHeight: 1.8 }}>
            Our editing and proofreading service help guarantees that your document is confidential, and so you do not have to worry about it. Just send us your dissertation topic along with the deadline and see the results that are far justified and mark the success of your dissertation
          </p>
        </div>
      </section>

      {/* What Services do we offer */}
      <section style={{ background: "#fff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem", textAlign: "center" }}>
            What Services do we offer under language editing?
          </h2>
          <p style={{ color: "#555", textAlign: "center", marginBottom: "2rem" }}>
            We write complete eLearning dissertation from the introduction to recommendations. Although it looks simple, but in practical, it&rsquo;s a tedious task to complete each and every step.
          </p>
          <div className="three-col-grid" style={{ marginBottom: "2.5rem" }}>
            {[
              { tier: "Basic", desc: "Developed based on the relevant sources, a reasonable attempt at finding an area that warrant research & evidence of an attempt to provide critical evaluation but mainly descriptive." },
              { tier: "Advanced", desc: "Wide range of sources, a clear identification of research gap in the literature along with aim and research questions" },
              { tier: "Premium", desc: "Refers to a wide range of seminal research with throughout engagement using latest resources. A solid gap would be identified based on the current literature & justified thoroughly & Excellent critical analysis would be shown (upgradable)" },
            ].map((item, i) => (
              <div key={i} style={{ background: "#f0f4ff", borderRadius: "10px", padding: "2rem", borderTop: "4px solid #e87722" }}>
                <h3 style={{ color: "#1a2a6c", fontWeight: 800, fontSize: "1.15rem", marginBottom: "0.75rem" }}>{item.tier}</h3>
                <p style={{ color: "#333", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          {/* Editing levels table */}
          <div style={{ overflowX: "auto" }}>
            <table className="editing-table">
              <thead>
                <tr>
                  <th style={{ textAlign: "left" }}>Type of editing</th>
                  <th>Premium Editing</th>
                  <th>Advanced Editing</th>
                  <th>Standard Proofread</th>
                </tr>
              </thead>
              <tbody>
                {editingLevels.map((row, i) => (
                  <tr key={i}>
                    <td>{row.feature}</td>
                    <td>{row.premiumLabel ? row.premiumLabel : row.premium ? "✓" : ""}</td>
                    <td>{row.advanced ? "✓" : ""}</td>
                    <td>{row.standard ? "✓" : ""}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Specialized Subject Matter */}
      <section style={{ background: "#f0f4ff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            Specialized Subject Matter Expertise across the globe
          </h2>
          <p style={{ color: "#333", lineHeight: 1.8 }}>
            We offer topic Selection for Management, Social Science, Engineering, Technology, Life Science, Medical, Arts &amp; Literature / Linguistics, and much more
          </p>
        </div>
      </section>

      {/* Our deliverables */}
      <section style={{ background: "#fff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            Our deliverables while you order custom language editing
          </h2>
          <p style={{ color: "#333", lineHeight: 1.8 }}>
            Our services from Tutors India research writing services is simply easy and straightforward. You will get the reply within 30 minutes which would enable to place your order quickly without any delay in submissions.
          </p>
        </div>
      </section>

      {/* How Does it work */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.5rem" }}>How Does it work?</h2>
          <p style={{ opacity: 0.9, lineHeight: 1.8 }}>
            After the order is confirmed, we allocate the special team to scrutinize the work regarding necessary availability requirements that would be essential to complete the work. Once the process is done, in case there are any queries, we ensure to ask during the initial stage of your work and send you the outline proposed for writing secondary data collection based dissertation. Once the outline along with the chapterization plan is approved, we will dispatch the work in chapters, and update you on the progress of your work. Our exclusive coordinators would get in touch with you to clarify any queries. You can also pay in installments and work will be started as soon as receive the payments. We deliver your work as per the schedule fixed and agreed or even before the schedule.
          </p>
        </div>
      </section>

      {/* An Editing & Proofreading Features */}
      <section style={{ background: "#f0f4ff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem", textAlign: "center" }}>
            An Editing &amp; Proofreading Features
          </h2>
          <p style={{ color: "#555", textAlign: "center", marginBottom: "0.5rem" }}>
            It covers editing and formatting services in 3 broad areas of expertise (social, biological, and management and physical/engineering sciences).
          </p>
          <p style={{ color: "#555", textAlign: "center", marginBottom: "2rem", maxWidth: 800, margin: "0 auto 2rem" }}>
            Under this service, we accept a broad range of documents—journal articles, dissertations, book manuscripts, speeches, etc.—and customize our edit to suit a variety of writing styles. Within the editing bouquet, grant applications also included. As part of this service, we offer you our professional expertise in helping you communicate a well-structured and polished research plan to reviewers.
          </p>
          <div className="three-col-grid">
            <div style={{ background: "#fff", borderRadius: "10px", padding: "1.75rem", boxShadow: "0 2px 8px rgba(0,0,0,.07)", borderTop: "3px solid #e87722" }}>
              <h3 style={{ color: "#1a2a6c", fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem" }}>Usage</h3>
              <ul style={{ paddingLeft: "1.2rem", margin: 0 }}>
                <li style={{ color: "#333", lineHeight: 1.8, marginBottom: ".4rem" }}>Errors correction in verb/subject and antecedent agreement</li>
                <li style={{ color: "#333", lineHeight: 1.8, marginBottom: ".4rem" }}>Errors correction in phrasing and word choice.</li>
                <li style={{ color: "#333", lineHeight: 1.8 }}>Checking for non-parallel structure, coordination, and subordination.</li>
              </ul>
            </div>
            <div style={{ background: "#fff", borderRadius: "10px", padding: "1.75rem", boxShadow: "0 2px 8px rgba(0,0,0,.07)", borderTop: "3px solid #e87722" }}>
              <h3 style={{ color: "#1a2a6c", fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem" }}>Mechanics</h3>
              <ul style={{ paddingLeft: "1.2rem", margin: 0 }}>
                <li style={{ color: "#333", lineHeight: 1.8, marginBottom: ".4rem" }}>Errors in spelling correction.</li>
                <li style={{ color: "#333", lineHeight: 1.8, marginBottom: ".4rem" }}>Errors in punctuation correction.</li>
                <li style={{ color: "#333", lineHeight: 1.8 }}>And at last scanning your document for plagiarism check.</li>
              </ul>
            </div>
            <div style={{ background: "#fff", borderRadius: "10px", padding: "1.75rem", boxShadow: "0 2px 8px rgba(0,0,0,.07)", borderTop: "3px solid #e87722" }}>
              <h3 style={{ color: "#1a2a6c", fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem" }}>Our services include</h3>
              <ul style={{ paddingLeft: "1.2rem", margin: 0 }}>
                {[
                  "Correcting Typographical errors.",
                  "Punctuation.",
                  "Grammar.",
                  "Consistency in style and terminology.",
                  "Consistency in font and page layout.",
                  "Construction of sentence.",
                  "Word choice.",
                  "Language tips.",
                  "Structure and Flow.",
                  "Checking logic, relevance, clarity.",
                  "Free word reduction.",
                  "Journal formatting",
                ].map((item, i) => (
                  <li key={i} style={{ color: "#333", lineHeight: 1.7, marginBottom: ".3rem", fontSize: ".9rem" }}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Editing need to convince Supervisory committee */}
      <section style={{ background: "#fff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            Editing &amp; Proofreading need to convince the Supervisory committee
          </h2>
          <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Proofreading is a basic and essential part of writing. After giving the outlines, revising and editing, proofreading is what gives a piece luster. A paper that is proofread is taken more seriously by your readers. At Tutors India, editing and proofreading go hand in hand. Our editors look for every possible change and give your work a professional touch.
          </p>
          <ul style={{ color: "#333", lineHeight: 1.8, paddingLeft: "1.5rem" }}>
            <li style={{ marginBottom: ".5rem" }}>Through spell checks and general formatting</li>
            <li style={{ marginBottom: ".5rem" }}>Checking for sentence fragments and run-on sentences.</li>
            <li>Checking for non-parallel structure, coordination, and subordination.</li>
          </ul>
        </div>
      </section>

      {/* What We deliver */}
      <section style={{ background: "#f0f4ff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            What We deliver while your order for questionnaire development service
          </h2>
          <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "1.5rem" }}>
            We deliver more than your expectation – ensure to provider the proper context, delimit the boundary condition, cite landmark studies, stay focused on the research question, a clear sense of direction, clear citation, APA or any other specific style.
          </p>
          <div style={{ background: "#fff", borderRadius: "8px", padding: "1.5rem", borderLeft: "4px solid #e87722", marginBottom: "1.5rem" }}>
            <h3 style={{ color: "#1a2a6c", fontWeight: 700, marginBottom: "0.5rem" }}>Our Editing &amp; Proofreading service is exclusive</h3>
            <p style={{ color: "#333", lineHeight: 1.7 }}>
              as we do not just provide dissertation, but the rather clear explanation and justification for the content written
            </p>
          </div>
          <div className="three-col-grid">
            {[
              { title: "Quality Assurance", body: "We ensure quality at every stage and the process." },
              { title: "Plagiarism Report", body: "We deliver the document after scanning for plagiarism" },
              { title: "Customer Interaction", body: "We interact with the customer at every stage in terms of amendments, query and delivery." },
            ].map((item, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: "10px", padding: "1.5rem", boxShadow: "0 2px 8px rgba(0,0,0,.07)", borderTop: "3px solid #e87722" }}>
                <h3 style={{ color: "#1a2a6c", fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ color: "#333", lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            Why Choose Tutors India: Editing &amp; Proofreading Service features
          </h2>
          <p style={{ opacity: 0.9, lineHeight: 1.8 }}>
            Qualified researchers, unlimited revision, only peer-reviewed articles, plagiarism report, 24/7 support, 100% match with the requirement and on time delivery
          </p>
        </div>
      </section>

      {/* Guarantees grid */}
      <section style={{ background: "#f0f4ff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.5rem", fontWeight: 700, marginBottom: "2rem", textAlign: "center" }}>Our Guarantees</h2>
          <div className="two-col-grid">
            {[
              { title: "A complete secure & Confidential Service", body: "We offer 100% confidentiality of client's personal details, payment details, project works, and copyrights of research works. We ensure following for the conditionality, security & privacy: 1) All your projects are given unique reference codes 2) Documents are accessed only writers who signed NDA with Tutors India 3) Your financial information is protected b 128-bit secure socket layer (SSL) encryption." },
              { title: "Fully Referenced", body: "Our dissertation work is fully referenced with latest articles and textbooks. We refer only peer-reviewed sources such as scholarly articles and textbook to select the topic. We refer database including Web of Science, ProQuest, Google Scholar, Business Source Complete, and latest newspapers articles such as Economic Times, Forbes, The Wall Street, The Economics to identify the industrial problem." },
              { title: "Our Guarantees", body: "(1) Unlimited Revision for the work being committed. (2) We ensure on-time delivery (3) We support 24/7. (4) Our word count committed does not include references and bibliography & help you to locate the sources cited (5) Ensure three-level quality check including Technical QC, Editor QC and final check against the requirement (6) Confidentiality of the information (7) Plagiarism free work – less than 5% percent. (8) Only experienced and subject specific writers will be allotted." },
              { title: "Plagiarism Free Work", body: "We are aware of the consequences of plagiarism. Hence, topic selection is completely plagiarism Free. Our work is scanned against online sources in a similar way like WriteCheck or Turnitin. We wanted to ensure that our clients i.e., researchers and students are not finding any issues with regards to plagiarism and so we issue plagiarism-free certificate*. Our streamlined and high-quality research writing process ensures your dissertation is not just copy-pasted, but written only after brainstorming sessions with our team of professional researchers." },
              { title: "On Time", body: "Our work is delivered at a specified date and time. Our specific changes to the delivered work will be carried out within 45 days of delivery. We guarantee delivery of minor changes within 24 working hours and significant changes within 48 working hours. We acknowledge all your emails within 30 minutes of working hours. Further any delay in the delivery can be raised at customersupport@tutorsindia.com" },
              { title: "Experienced Writers", body: "Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities from India, the US, and the UK. We identify the perfect SME according to your subject and area. Expert is selected through a stringent selection process including the signing of non-disclosure and confidentiality agreement. You can be very sure about the quality of the work since expert writer is identified as per International Research Experience" },
            ].map((item, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: "10px", padding: "2rem", boxShadow: "0 2px 8px rgba(0,0,0,.07)" }}>
                <h3 style={{ color: "#e87722", fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.75rem" }}>{item.title}</h3>
                <p style={{ color: "#333", lineHeight: 1.8 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#fff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.5rem", fontWeight: 700, marginBottom: "2rem", textAlign: "center" }}>
            Frequently Asked Questions
          </h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* Expertise across the globe */}
      <section style={{ background: "#f0f4ff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            Your language editing is carried out by your choice of Subject Matter Expertise
          </h2>
          <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "1rem" }}>
            We have a team of 2000+ expertise across the subjects &amp; countries (including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine)
          </p>
          <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "1.5rem" }}>
            Tutors India has capability and skills to handle subjects across the field. We chose qualified and experienced subject specific expertise while you order your Ph.D. or Master&rsquo;s dissertation. We have more than 2000+ expertise working across the world who can handle arts, literature, sciences, engineering or medicine.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
            {[
              "Arts & Humanities","Biological Sciences","Business & Management Studies","Marketing & Communication",
              "Engineering & Technology","Natural Sciences & Mathematics","Biological & Life science","Economics & Administration",
              "Humanities & Social Science","Law","Medicine & Health","Education & Training",
              "Journalism & Media","Agriculture & Forestry","Computer Science & IT","Hospitality, Leisure & Sports",
            ].map((s, i) => (
              <span key={i} style={{ background: "#fff", border: "1px solid #c5d5f0", borderRadius: "20px", padding: "5px 14px", fontSize: ".83rem", color: "#1a2a6c", fontWeight: 600 }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ background: "#fff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.5rem", fontWeight: 700, marginBottom: "2rem", textAlign: "center" }}>
            Voice of Our customer
          </h2>
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* CRM note */}
      <section style={{ background: "#f0f4ff", padding: "2rem 1rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.75rem" }}>
            Track Your Report through our customized CRM
          </h2>
          <p style={{ color: "#333", lineHeight: 1.8 }}>
            You need not check email frequently rather your report is safe on our customizable CRM and you can download later at any point of time by using your unique username and password.
          </p>
        </div>
      </section>

      {/* Order Now CTA */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "3rem 1rem", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Order Now</h2>
          <p style={{ opacity: 0.9, marginBottom: "2rem", lineHeight: 1.7 }}>
            Invest in your career by availing language editing help from the UK &amp; the US Qualified researchers
          </p>
          <Link href="/order" style={{ background: "#e87722", color: "#fff", padding: ".875rem 2.5rem", borderRadius: "6px", fontWeight: 700, textDecoration: "none", fontSize: "1.05rem" }}>
            Get Started Now
          </Link>
        </div>
      </section>
    </>
  );
}
