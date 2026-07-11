import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "E-Learning – Design & Content Development for Academic Support",
  description: "High impact and engaging custom and interactive eLearning content development and dissertation writing by qualified and experienced researchers from the US & UK.",
};

const faqs = [
  {
    q: "Will you able to develop e-learning content for my niche business?",
    a: "Of Course, we have a specialized team who has decades more experience in writing for diverse industries so do not worry about that we handled many client's project successfully.",
  },
  {
    q: "Do you charge extra for revisions?",
    a: "No, we would not charge any cost for revisions when you require any minor or major changes. We guarantee to provide the unlimited revisions* based on initial project commitment.",
  },
  {
    q: "Why should I Hire Tutors India for e-learning content writing?",
    a: "Tutors India is a giant brand in content developing services across the globe since 2011. We have a dedicated and hardworking teamwork who understands your contents needs and analyze the situation to build an e-learning content interactive and informative with as well as develop instructionally effective solutions and drive with the motto of learning matters",
  },
  {
    q: "How much time do you take to complete my e-learning content project?",
    a: "This purely depends upon the client's requirement so we discuss and decide the time limit send the complete information through email or ring after the order is confirmed.",
  },
  {
    q: "Whether E-learning content that you write totally novel and original?",
    a: "Yes, we are having full-fledged business writers, who offer the best e-learning content that is exclusive, novel and original",
  },
];

const testimonials = [
  {
    quote: "I had felt stimulated and nurtured academically.",
    author: "Amelia",
  },
  {
    quote: "I was attracted to Tutors India for many reasons.",
    author: "Lucas",
  },
  {
    quote: "I found Tutors India for writing research methodology.",
    author: "Leo",
  },
  {
    quote: "Writing a literature review is challenging rigorous.",
    author: "Grace",
  },
  {
    quote: "I developed a great partnership with Tutors India.",
    author: "Isla",
  },
  {
    quote: "Tutors India has been very helpful in writing.",
    author: "Arhaan",
  },
  {
    quote: "I am pursuing masters in mechatronics therefore.",
    author: "Arnav",
  },
  {
    quote: "I am a postgraduate student looked for source.",
    author: "Sara",
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

export default function ELearningContentDevelopmentPage() {
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
        @media(max-width:768px){
          .three-col-grid,.four-col-grid { grid-template-columns: 1fr; }
          .two-col-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", padding: "4rem 1rem 3rem", color: "#fff", textAlign: "center" }}>
        <div className="hero-inner">
          <span className="hero-badge">E-Learning Content Development</span>
          <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.6rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "1rem" }}>
            E-Learning – Design &amp; Content Development for Academic Support
          </h1>
          <p style={{ fontSize: "1.05rem", opacity: 0.9, marginBottom: "0.75rem" }}>
            Are you looking for high impact and engaging custom and interactive content? Apart a team of professional expert who can handle eLearning content development or dissertation?
          </p>
          <p style={{ fontSize: "1.1rem", fontWeight: 700, opacity: 1, marginBottom: "0.75rem" }}>
            Then You&rsquo;ve Certainly Reached the Right place
          </p>
          <p style={{ fontSize: "1rem", opacity: 0.85, marginBottom: "2rem" }}>
            Your eLearning dissertation is written by qualified and experienced researchers from the US &amp; UK
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/order" style={{ background: "#e87722", color: "#fff", padding: ".75rem 2rem", borderRadius: "6px", fontWeight: 700, textDecoration: "none" }}>
              Order Now
            </Link>
            <Link href="/contact-us" style={{ background: "transparent", color: "#fff", padding: ".75rem 2rem", borderRadius: "6px", fontWeight: 700, textDecoration: "none", border: "2px solid #fff" }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* PhD Writers intro */}
      <section style={{ background: "#fff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.4rem", fontWeight: 700, marginBottom: "1rem" }}>
            e learning content development
          </h2>
          <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "1.5rem" }}>
            Our PhD dissertation writers have experience in research methodology, specific domain experience, and educational degrees from international and top-ranked universities from India, the US, and the UK. You can have one-on-one coaching with a writer, statistician, research methodologist and editor
          </p>
        </div>
      </section>

      {/* Tutors India Difference */}
      <section style={{ background: "#f0f4ff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.5rem", textAlign: "center" }}>
            Tutors India Difference in E Learning platform &amp; dissertation
          </h2>
          <div className="two-col-grid">
            <div style={{ background: "#fff", borderRadius: "10px", padding: "2rem", boxShadow: "0 2px 8px rgba(0,0,0,.07)" }}>
              <h3 style={{ color: "#e87722", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.75rem" }}>By Leveraging Tutors India Capability and Research Skills, ensure your career success</h3>
              <p style={{ color: "#333", lineHeight: 1.8 }}>
                The Professional eLearning Dissertation service
              </p>
            </div>
            <div style={{ background: "#fff", borderRadius: "10px", padding: "2rem", boxShadow: "0 2px 8px rgba(0,0,0,.07)" }}>
              <h3 style={{ color: "#e87722", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.75rem" }}>The Professional eLearning Dissertation service</h3>
              <p style={{ color: "#333", lineHeight: 1.8 }}>
                Our eLearning Dissertation writing demonstrates the ability to communicate complex ideas critically, concisely, and clearly. Our professional dissertation writers have completed around 5000 PhD Dissertation successfully. We match your research interest along with the current state of knowledge and any recent debates. We format a research plan for your particular subject. Since it forms part of the assessment of your PhD application, we take utmost care to complete the proposal. If you are unsure of what to do, avail our full or complete thesis writing services now.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Simply easy & Straightforward */}
      <section style={{ background: "#fff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            E-Learning dissertation writing service is Simply easy &amp; Straightforward
          </h2>
          <p style={{ color: "#333", lineHeight: 1.8 }}>
            Our thesis and dissertation writing help guarantees that your dissertation is confidential, and so you do not have to worry about it. Just send us your dissertation topic along with the deadline and see the results that are far justified and mark the success of your dissertation.
          </p>
        </div>
      </section>

      {/* What Services do we offer */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem", textAlign: "center" }}>
            What Services do we offer under eLearning dissertation?
          </h2>
          <p style={{ opacity: 0.85, textAlign: "center", marginBottom: "2rem", lineHeight: 1.7 }}>
            We write complete eLearning dissertation from the introduction to recommendations. Although it looks simple, but in practical, it&rsquo;s a tedious task to complete each and every step.
          </p>
          <div className="three-col-grid">
            {[
              {
                tier: "Basic",
                desc: "Developed based on the relevant sources, a reasonable attempt at finding an area that warrant research & evidence of an attempt to provide critical evaluation but mainly descriptive.",
                features: [
                  "3 Topics (Topic Selection based on area of interest)",
                  "1000 words",
                  "Objectives",
                  "Literature Review",
                  "Research Gap",
                  "Expected Contribution",
                  "Research Methodology",
                  "Data Analysis Guidelines",
                  "References Lists",
                ],
              },
              {
                tier: "Advanced",
                desc: "Wide range of sources, a clear identification of research gap in the literature along with aim and research questions",
                features: [
                  "1 topic",
                  "1000 words",
                  "Objectives",
                  "Literature Review",
                  "Research Gap",
                  "Expected Contribution",
                  "Research Methodology",
                  "Data Analysis Guidelines",
                  "References Lists",
                  "Bibliography (Additional reading)",
                ],
              },
              {
                tier: "Premium",
                desc: "Refers to a wide range of seminal research with throughout engagement using latest resources. A solid gap would be identified based on the current literature & justified thoroughly & Excellent critical analysis would be shown (upgradable)",
                features: [
                  "1 topic",
                  "Objectives",
                  "Literature Review",
                  "Research Gap",
                  "Expected Contribution",
                  "Research Methodology",
                  "Data Analysis Guidelines",
                  "References Lists",
                  "Bibliography (Additional reading)",
                ],
              },
            ].map((item, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,.08)", borderRadius: "10px", padding: "1.75rem", borderTop: "3px solid #e87722" }}>
                <h3 style={{ color: "#f9c74f", fontWeight: 800, fontSize: "1.15rem", marginBottom: "0.5rem" }}>{item.tier}</h3>
                <p style={{ color: "rgba(255,255,255,.85)", lineHeight: 1.7, fontSize: ".9rem", marginBottom: "1rem" }}>{item.desc}</p>
                <ul style={{ paddingLeft: "1.2rem", margin: 0 }}>
                  {item.features.map((f, j) => (
                    <li key={j} style={{ color: "rgba(255,255,255,.8)", fontSize: ".88rem", lineHeight: 1.7 }}>{f}</li>
                  ))}
                </ul>
              </div>
            ))}
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
            We offer complete e Learning dissertation writing service for Management, Education, Engineering, Technology, Computer science, and more
          </p>
        </div>
      </section>

      {/* Subject categories */}
      <section style={{ background: "#fff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="four-col-grid">
            {[
              "Arts & Humanities",
              "Biological Sciences",
              "Business & Management Studies",
              "Marketing & Communication",
              "Engineering & Technology",
              "Natural Sciences & Mathematics",
              "Biological & Life science",
              "Economics & Administration",
              "Humanities & Social Science",
              "Law",
              "Medicine & Health",
              "Education & Training",
              "Journalism & Media",
              "Agriculture & Forestry",
              "Computer Science & IT",
              "Hospitality, Leisure & Sports",
            ].map((subject, i) => (
              <div key={i} style={{ background: "#f0f4ff", borderRadius: "8px", padding: "1rem 1.25rem", color: "#1a2a6c", fontWeight: 600, fontSize: ".9rem", borderLeft: "3px solid #e87722" }}>
                {subject}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our deliverables */}
      <section style={{ background: "#f0f4ff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            Our deliverables while you order custom eLearning Dissertation Service
          </h2>
          <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "1.5rem" }}>
            Full Dissertation writing services from Tutors India research writing services is simply easy and straightforward. You will get the reply within 30 minutes which would enable to place your order quickly without any delay in submissions. We would provide executive summary /abstract, free articles used for writing the full dissertation, SPSS data sheet and output, questionnaire or semi-structured interview questions and any other information that we have used to write the dissertation such as reflective log or diary.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {[
              "Executive summary / abstract",
              "Free articles used for writing the full dissertation",
              "SPSS data sheet and output",
              "Questionnaire or semi-structured interview questions",
              "Reflective log or diary",
              "Outline proposed for writing",
              "Chapterization plan",
              "Chapter-wise work dispatch",
            ].map((item, i) => (
              <span key={i} style={{ background: "#fff", border: "1px solid #2563b0", color: "#1a2a6c", borderRadius: "6px", padding: ".4rem 1rem", fontSize: ".9rem", fontWeight: 500 }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How Does it work */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.5rem" }}>How Does it work?</h2>
          <p style={{ lineHeight: 1.8, opacity: 0.9 }}>
            After the order is confirmed, we allocate the special team to scrutinize the work regarding necessary availability requirements that would be essential to complete the work. Once the process is done, in case there are any queries, we ensure to ask during the initial stage of your work and send you the outline proposed for writing secondary data collection based dissertation. Once the outline along with the chapterization plan is approved, we will dispatch the work in chapters, and update you on the progress of your work. Our exclusive coordinators would get in touch with you to clarify any queries. You can also pay in installments and work will be started as soon as receive the payments. We deliver your work as per the schedule fixed and agreed or even before the schedule.
          </p>
        </div>
      </section>

      {/* eLearning dissertation writing Service features */}
      <section style={{ background: "#f0f4ff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.5rem", fontWeight: 700, marginBottom: "2rem", textAlign: "center" }}>
            eLearning dissertation writing Service features
          </h2>
          <div className="four-col-grid">
            {[
              "eLearning Platform development",
              "e-Learning Dissertation Writing service",
              "eLearning Dissertation Proposal development",
              "eLearning Resit Dissertation",
            ].map((item, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: "10px", padding: "1.5rem", boxShadow: "0 2px 8px rgba(0,0,0,.07)", borderTop: "3px solid #e87722", textAlign: "center" }}>
                <p style={{ color: "#1a2a6c", fontWeight: 700, fontSize: "1rem", margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supervisory committee */}
      <section style={{ background: "#fff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            e Learning dissertation writing need to convince the Supervisory committee
          </h2>
          <p style={{ color: "#333", lineHeight: 1.8 }}>
            We write complete e Learning dissertation research from the introduction to recommendations including time planning. Though it looks very simple, it is a tedious task to complete each and every step. The steps involved in such tedious task. Namely identification of topic, reviewing the literature or literature review, problem statement, research question(s)and research hypothesis development, research design (sampling, measures, procedures and data collection), statistical analysis, (data analysis preparation, data entry and screening, interpretation), discussion, results, recommendation and conclusion.
          </p>
        </div>
      </section>

      {/* What We deliver */}
      <section style={{ background: "#f0f4ff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            What We deliver while your order for eLearning dissertation writing
          </h2>
          <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "1.5rem" }}>
            We deliver more than your expectation – ensure to provider the proper context, delimit the boundary condition, cite landmark studies, accurately present the theoretical framework &amp; empirical contribution, stay focused on the research question, develop a coherent &amp; persuasive argument, a clear sense of direction, clear citation, APA or any other specific style.
          </p>
          <div style={{ background: "#fff", borderRadius: "8px", padding: "1.5rem", borderLeft: "4px solid #e87722" }}>
            <h3 style={{ color: "#1a2a6c", fontWeight: 700, marginBottom: "0.5rem" }}>Our custom eLearning dissertation writing service is exclusive</h3>
            <p style={{ color: "#333", lineHeight: 1.7 }}>
              as we do not just provide chapter-wise dissertation writing service, but the rather clear explanation and justification for the choice
            </p>
          </div>
        </div>
      </section>

      {/* Our deliverables while you order for eLearning dissertation writing */}
      <section style={{ background: "#fff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.5rem", fontWeight: 700, marginBottom: "2rem", textAlign: "center" }}>
            Our deliverables while you order for eLearning dissertation writing
          </h2>
          <div className="three-col-grid">
            {[
              { title: "Quality Assurance", body: "We ensure quality at every stage and the process." },
              { title: "Plagiarism Report", body: "We deliver the document after scanning for plagiarism" },
              { title: "Customer Interaction", body: "We interact with the customer at every stage in terms of amendments, query and delivery." },
            ].map((item, i) => (
              <div key={i} style={{ background: "#f0f4ff", borderRadius: "10px", padding: "1.75rem", borderTop: "3px solid #e87722" }}>
                <h3 style={{ color: "#1a2a6c", fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ color: "#333", lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Tutors India */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            Why Choose Tutors India: Our Service features
          </h2>
          <p style={{ opacity: 0.9, lineHeight: 1.8 }}>
            Qualified researchers, research methodology expertise, well experienced coders, developers, programmers capable of handling various software and many more, only peer-reviewed articles, Tutoring and clarification, Tables and Interpretation with proper formatting for print-ready analysis, plagiarism report, 24/7 support, timely Support, 100% match with the requirement and on time delivery.
          </p>
        </div>
      </section>

      {/* Guarantees */}
      <section style={{ background: "#f0f4ff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.5rem", fontWeight: 700, marginBottom: "2rem", textAlign: "center" }}>Our Guarantees</h2>
          <div className="two-col-grid">
            {[
              {
                title: "A complete secure & Confidential Service",
                body: "We offer 100% confidentiality of client's personal details, payment details, project works, and copyrights of research works. We ensure following for the conditionality, security & privacy: 1) All your projects are given unique reference codes 2) Documents are accessed only writers who signed NDA with Tutors India 3) Your financial information is protected b 128-bit secure socket layer (SSL) encryption.",
              },
              {
                title: "Fully Referenced",
                body: "Our dissertation work is fully referenced with latest articles and textbooks. We refer only peer-reviewed sources such as scholarly articles and textbook to select the topic. We refer database including Web of Science, ProQuest, Google Scholar, Business Source Complete, and latest newspapers articles such as Economic Times, Forbes, The Wall Street, The Economics to identify the industrial problem.",
              },
              {
                title: "Our Guarantees",
                body: "(1) Unlimited Revision for the work being committed. (2) We ensure on-time delivery (3) We support 24/7. (4) Our word count committed does not include references and bibliography & help you to locate the sources cited (5) Ensure three-level quality check including Technical QC, Editor QC and final check against the requirement (6) Confidentiality of the information (7) Plagiarism free work – less than 5% percent. (8) Only experienced and subject specific writers will be allotted.",
              },
              {
                title: "Plagiarism Free Work",
                body: "We are aware of the consequences of plagiarism. Hence, topic selection is completely plagiarism Free. Our work is scanned against online sources in a similar way like WriteCheck or Turnitin. We wanted to ensure that our clients i.e., researchers and students are not finding any issues with regards to plagiarism and so we issue plagiarism-free certificate*. Our streamlined and high-quality research writing process ensures your dissertation is not just copy-pasted, but written only after brainstorming sessions with our team of professional researchers.",
              },
              {
                title: "On Time",
                body: "Our work is delivered at a specified date and time. Our specific changes to the delivered work will be carried out within 45 days of delivery. We guarantee delivery of minor changes within 24 working hours and significant changes within 48 working hours. We acknowledge all your emails within 30 minutes of working hours. Further any delay in the delivery can be raised at customersupport@tutorsindia.com",
              },
              {
                title: "Experienced Writers",
                body: "Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities from India, the US, and the UK. We identify the perfect SME according to your subject and area. Expert is selected through a stringent selection process including the signing of non-disclosure and confidentiality agreement. You can be very sure about the quality of the work since expert writer is identified as per International Research Experience",
              },
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
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            Your eLearning dissertation writing service is carried out by your choice of specialized expertise
          </h2>
          <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "1rem" }}>
            We have a team of 2000+ expertise across the subjects &amp; countries (including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine)
          </p>
          <p style={{ color: "#333", lineHeight: 1.8 }}>
            Tutors India has capability and skills to handle subjects across the field. We chose qualified and experienced subject specific expertise while you order your Ph.D. or Master&rsquo;s dissertation. We have more than 2000+ expertise working across the world who can handle arts, literature, sciences, engineering or medicine.
          </p>
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

      {/* Order Now CTA */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "3rem 1rem", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Order Now</h2>
          <p style={{ opacity: 0.9, marginBottom: "2rem", lineHeight: 1.7 }}>
            Invest in your career by availing eLearning dissertation writing help from the UK &amp; the US Qualified researchers
          </p>
          <Link href="/order" style={{ background: "#e87722", color: "#fff", padding: ".875rem 2.5rem", borderRadius: "6px", fontWeight: 700, textDecoration: "none", fontSize: "1.05rem" }}>
            Get Started Now
          </Link>
        </div>
      </section>
    </>
  );
}
