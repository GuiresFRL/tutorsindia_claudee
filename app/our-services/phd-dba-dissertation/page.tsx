import Link from "next/link";
import type { Metadata } from "next";
import { serviceCategories } from "@/lib/data/services";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "MBA / DBA Dissertation Writing & Editing Services | Tutors India",
  description: "Looking for MBA / DBA Writing & Editing Services? Plagiarism free research with novelty and innovation. Expert PhD writers from UK, US and Australia. Unlimited revisions.",
};

const cat = serviceCategories.find((c) => c.slug === "phd-dba-dissertation")!;

const features = [
  {
    title: "Plagiarism Free Work",
    desc: "We are aware of the consequences of plagiarism as our experts are supporting International students and scholars for more than 15 years. Hence, our work is completely plagiarism free as we ensure to scan the works against online sources in a similar way like Write Check or Turnitin so that you can be very sure about the plagiarism-free output.",
  },
  {
    title: "Uniqueness",
    desc: "Every work is unique as we, as research assistance providers, know how to write a high-quality and unique research thesis / dissertation. We provide only custom master's dissertation writing services written by Subject Matter Experts who also provide justification on how it is unique. Our experts are trained from various International We provide coaching for defending your viva-voce as well.",
  },
  {
    title: "Fully Referenced",
    desc: "Our Masters dissertation projects are fully referenced with latest peer-reviewed research articles, textbooks, online sources, Newspaper articles, corporate documents, UN and other such international and national regulatory bodies. Our team of copyeditors exclusively work for university-specific referencing system since we understand its importance on your credits. We comply 100% with all university-based, specific referencing guidelines of Harvard, APA, Chicago, Vancouver, Turabian etc.,",
  },
  {
    title: "100% Requirement Match",
    desc: "We match your requirement 100% since our experts understand the topic and analyze the feasibility before even working on the dissertation. In our dissertation writing services, we always check with you before we proceed with next chapters. Our services exactly follow your university guidelines and refer your rubric in order to ensure your dissertation meets the expected standards.",
  },
  {
    title: "On Time Delivery",
    desc: "Our work is delivered on specified time as per the commitment. We guarantee delivery of minor changes within 24 working hours and significant changes within 48 working hours as we understand the importance of our clients' deadline. We acknowledge all your emails within 30 minutes of working hours. We plan for your entire dissertation and set milestones which helps you save time",
  },
  {
    title: "Word Count Committed",
    desc: "We ensure that your dissertation is meeting the exact word count as per your university regulations as we completely understand that universities reduce grades if the word count is reduced or not met. We calculate the word count excluding Table of contents, References, bibliography, Appendix and Interview responses. Our experts have handled Masters dissertations that ranged from 8,000 – 30,000 words.",
  },
  {
    title: "Quality Assurance",
    desc: "We have stringent quality check and quality assurance process in every stage of your masters dissertation so that the final output is devoid of errors. Our experts understand your initial requirement, compare and cross verify the final output to meet the standards. We ensure your document is checked for subject matter, language, formatting, referencing, plagiarism and overall requirement.",
  },
  {
    title: "Unlimited revisions",
    desc: "We firmly believe that every researcher has different perception and we respect your feedback and comments to improve the research quality. So we provide unlimited revisions as per the initial commitment which is completely free of cost even after the project is completed. Our free revisions are bundled with your Masters dissertation writing as per the initial commitment.",
  },
  {
    title: "Affordable",
    desc: "We strive to provide the masters dissertation writing services with world-class quality at affordable rates. Our experts are globally available who would work as per your currency rates and timings. So you can save costs in writing your Masters dissertation since our rates are nominal, student-friendly and exclusively in your currency. Our rates are constant irrespective of country, subject and quality as we provide only high-quality works.",
  },
  {
    title: "Experienced Writers with a minimum degree of Master's with research experience",
    desc: "Get affordable Master's Dissertation Writing Services at unimaginable quality from us. We strive to provide our researchers work-class quality solutions at affordable rates irrespective of country, subject and expertise involved",
  },
];

const additionalFeatures = [
  {
    title: "Authenticated References",
    desc: "All our research writing, editing, and rewriting services are fully referenced and cited academically using style (Harvard, Chicago, MLA, APA) guide provided by the university. We support our arguments and offer a factual basis, to ensure protect against charges of plagiarism. Further, Tutors India demonstrates to assessors that you have carried out the necessary research and allow the reader to locate the material. We reference, even the materials are paraphrased or quote from another source to acknowledge and retrospect the intellectual property rights. We ensure to provide both in-text and list of references (books, chapters in an edited book, journal articles, electronic journal articles, web document, letter, emails, online discussion forums, personal interviews, pamphlets or brochures, reprint diagrams, illustrations, charts or pictures, lecturer or tutors).",
  },
  {
    title: "Plagiarism Free",
    desc: "We ensure that the document is less than 5 or 0 percent of plagiarism. We correct all errors and infelicities in grammar, syntax, and usage. Rewrite any wordy or convoluted patch. Ask for or supply definitions of terms likely to be new to readers. Verify and revise any facts that are incorrect. Query or fix faulty organization and gaps in logic. We edit or rewrite your complete Master's / Postgraduate dissertation and manuscript to ensure that your writing does represent your own assertions and abilities. Paraphrase the content using our own words. We re-read the original article, summarize, digest and explain through our own words.",
  },
  {
    title: "Unlimited Revision Support with Quality Check & Assurance",
    desc: "We consult researchers on how they have to handle the research work in every step, i.e., when choosing a topic, framing the right methodology, collecting the data and every such step, which no other service provider does. We provide unlimited revisions absolutely free of cost as per the commitment made by us since we, as researchers, understand that every researcher has their own perception. We welcome participatory research in which your feedback/comments are discussed, justified and incorporated. This process goes unlimited due to which we support every time our researchers/clients with the same smile and enthusiasm. Our commitment towards research excellence and quality for your work is proved by our unlimited revisions support even after your project is completed.",
  },
];

const freeFeatures = [
  {
    title: "Appendices at No Additional Cost",
    desc: "We are always ready to provide certain supplements to make your work appear sophisticated at no additional cost. At Tutors India, we incorporate appendices and any additional work. This requires providing extra information, references, and bibliography. We ensure that all technical information is properly documented and delivered in order to improve the overall quality and scientific validity of the job. In this way, we retain the best practice of transparent service, which not only saves customers money but also provides them with the entire range of services required to support research decisions and outcomes.",
  },
  {
    title: "Development of Questionnaire or Interview at a Free of costs*",
    desc: "In MBA, questionnaire development is an important step as it decides the study outcome. At Tutors India, we help you in the questionnaire development, reliability and validation process. Our expertise has rich experience in developing questionnaire using scales, questions for interview guide, focus group discussion, structured and unstructured questionnaire, open and closed format, matrix and contingency questions. We have trained expertise exclusively for questionnaire development and research framework. We help you in development of an interview guide or questionnaire at free costs while ordering for full MBA dissertation*.",
  },
  {
    title: "Get your Primary research Completed at an additional cost",
    desc: "Tutors India has exclusive custom data collection services to gather useful information in various domains. We make sure the research work needs to be ethical with primary data, needs to be original with novelty. The choice of research method to use depends on many factors, such as the number of respondents that the Surveyor wants, data collection time frame, the characteristics of the population under investigation, and of course your budget. We do collect primary data at an additional costs and our services includes data collection using telephone interviews, market surveys, focus group discussion sessions and questionnaire.",
  },
];

const orderProcess = [
  { n: "1", title: "We identify Your writer", desc: "In order to get our service, you need to first fill out the form with your information in a comprehensive manner." },
  { n: "2", title: "Reference Number", desc: "Upon receiving your Enquiry form, we assign you a reference number. You can know the status of your paper anytime by sending us an email or tracking through CRM" },
  { n: "3", title: "Acknowledgment", desc: "Once you have paid for your order you will receive an acknowledgement from us. The writing process here with us begins within couple of days* after receiving your order" },
  { n: "4", title: "We check requirement", desc: "Once your dissertation is completed we check for spelling, grammar, content, focus, sources quality against the client requirement." },
  { n: "5", title: "Edit & proofreading", desc: "Once we receive an order from our writer, we ensure to proofread the document." },
  { n: "6", title: "We identify Your writer", desc: "At Tutors India we are equipped with writers who have passion towards research and associated with writing all their lives." },
  { n: "7", title: "Plagiarism Assurance", desc: "Once your dissertation is completed it is checked for plagiarism with anti-plagiarism software before the delivery." },
  { n: "8", title: "Free Appendices / Resources", desc: "We ensure not only to deliver your work but also additional reference materials will be shared via zip file through google drive or drop box." },
  { n: "9", title: "Download your Order", desc: "You can download your order through our CRM and reminder will be sent through email & SMS. Additional copy will be mailed." },
  { n: "10", title: "Researcher makes the changes", desc: "The document will be shared to our writer or programmer and once the work is completed, we will share you the complete work through email or you can download the order" },
  { n: "11", title: "Unlimited revisions", desc: "Since we deliver the research work, and there is a possibility that research can be viewed in different direction, we offer unlimited revision support for the concept being accepted." },
  { n: "12", title: "Request for amendment", desc: "If you required any changes, you can always come back to us, we are ready to unlimited revisions for the concept being committed. Comments can be shared through guidance@tutorsindia.com" },
];

const testimonials = [
  {
    quote: "The US & UK writers at Tutors India aim at inculcating knowledge within students and build a great confidence to submit their dissertation successfully. I am very satisfied with the quality of work delivered.",
    author: "Jenifer Williams",
    location: "Japan",
    avatar: "/images/testimonials/t16.jpg",
  },
  {
    quote: "Tutors India has skilled and talented professional UK writers who assisted me at all the stages of my MBA dissertation writing. Their unique approach helped me complete and submit my dissertation successfully.",
    author: "Gatik",
    location: "Andorra",
    avatar: "/images/testimonials/t14.jpg",
  },
  {
    quote: "Our team of UK dissertation writing experts consists of experienced professionals holding Ph.D. degrees from prestigious universities. I got distinction in my DBA dissertation thanks to Tutors India.",
    author: "Max",
    avatar: "/images/testimonials/t13.jpg",
  },
  {
    quote: "I am grateful for the expert guidance on my PhD dissertation. The quality of research and writing was exceptional. They matched all my university guidelines perfectly.",
    author: "Divyansh",
    avatar: "/images/testimonials/t15.jpg",
  },
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies",
  "Marketing & Communication", "Engineering & Technology", "Natural Sciences & Mathematics",
  "Economics & Administration", "Humanities & Social Science", "Law",
  "Medicine & Health", "Education & Training", "Journalism & Media",
  "Agriculture & Forestry", "Computer Science & IT", "Hospitality, Leisure & Sports",
];

export default function PhDDBADissertationPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
              <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}
              <span style={{ color: "#fff" }}>PhD / DBA Dissertation</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.4rem,3vw,2rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              Are you looking for MBA / DBA Writing &amp; Editing Services? Looking for plagiarism free but at the same some novelty/innovation in research or wanted to conduct their research using latest technologies / trends?
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "12px" }}>
              MBA or DBA thesis / dissertation writing requires extensive referencing search, including text books, journal articles, monographs, newspaper articles, etc. we provide you the full articles that were used for referencing which help to check the authentication. Thus, our MBA thesis writing service is comprehensive and ensures quality, reliability and validity which all helps you to defend your research in front of your external committee.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/samples/assignment-writing.jpg" alt="PhD DBA Dissertation Writing Services" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>PhD Qualified Writers<br />10+ Years Experience<br />All Subjects</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      {/* ── STATS BAR ── */}
      <div style={{ background: "#12214a", padding: "16px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: "2000+", l: "Expertise Across Subjects" }, { n: "PhD & Masters", l: "Qualified Writers" }, { n: "< 5%", l: "Plagiarism" }, { n: "Unlimited", l: "Revisions" }, { n: "30 min", l: "Response Time" }, { n: "24/7", l: "Support" }].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
              <div style={{ fontSize: "0.68rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>

        {/* Why Tutors India */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Why Tutors India for MBA dissertation writing services?</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            The US &amp; UK writers at Tutors India aim at inculcating knowledge within students and build a great confidence to submit their dissertation successfully.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            Therefore, given that dissertation plays a significant role in completing the UK university degree, at Tutors India, we offer both tutoring and writing services. We just do not provide you writing assistance but also tutoring you at every stage on how we proceeded with the dissertation.
          </p>

          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.15rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px", marginTop: "20px" }}>A Trusted MBA Dissertation Writing Service at Tutors India</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            Tutors India has skilled and talented professional UK writers who work with your UK MBA dissertations and assist you at all the stages of your UK / the USA MBA dissertation writing either online or email based. They assist you 24/7 and provide evidence that we deliver what exactly you expect. This is one of the highlights of our services which remains unmatched by our competitors across the world.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            Our team of UK dissertation writing experts consists of experienced professionals who are holding Ph.D. degree from the prestigious universities from the UK, US, and Australia, who can help you in writing any dissertation whether it is science or management or computer science or Engineering or environmental science. Our experts write your UK MBA &amp; DBA dissertation/ projects (exclusively for the UK / the USA/ Australian universities MBA dissertation writing service (UK MBA, USA MBA, Australian MBA, and others) without plagiarism and set in innovative ideas. Our unique approach has helped hundreds of scholars to complete and submit their MBA Dissertation across the global successfully.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.94rem" }}>
            Tutors India has in-house internal committee consists of UK and US based Ph.D. holders for writing and as research advisors, postdoctoral fellows and M.D holding Ph.D. with rich experience in research. Some of our writers are trained at Harvard School, Oxford, London School of Business, and the University of Birmingham.
          </p>
        </div>

        {/* Support Features */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>MBA / DBA Dissertation at Tutors India helps to complete your degree successfully</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
            {[
              { title: "Personalized Support", desc: "Our dissertation writing services provide you with professional assistance when producing the dissertation document. We ensure that our dissertation is aligned with your interests and academic goals. Our approach goes beyond the writer-to-client model and includes client specific requirements and follow-ups. Technically, we assure that we can offer the substance of a dissertation by identifying your areas of interest, advising the best methodology for your research, and directing to other potential sources. This results in the creation of a dissertation that provides the required level of research material while also being academically sound and logically organized." },
              { title: "Time Management Assistance", desc: "Time management is one of the most critical aspects of a dissertation's success. Our UK dissertation writing services create a precise plan of operation that organizes the procedure in a way that any candidate can understand and follow, while also ensuring that each phase is done in the shortest feasible period. In technical words, this service is completed in a systematic and precise manner. Each portion of the dissertation is assigned a time deadline so that the student has enough time while not sacrificing quality work. By integrating the time periods with the amount of material to be covered, we avoid getting overwhelmed and advance slowly toward high-quality outcome." },
              { title: "Expert Feedback and Revisions", desc: "Reviewing is crucial for disseminating the dissertation and achieving proper academic standards at the same time. This is technically accomplished by our dissertation writing services that provide thorough and substantive input at various phases of the process. We focus on argumentations, transitions, and academic writing style while also providing detailed feedback at every phase of the process. Every stage of revision addresses a specific issue, be it the type of problem-for instance, gaps in the literature review, or the problem's nature. In this way, we verify that the components included contain all necessary material, the intended quality level, and the amount of content required for the dissertation." },
            ].map(f => (
              <div key={f.title} style={{ background: "#fff", borderRadius: "10px", padding: "20px", border: "1px solid #dde2ef" }}>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "8px" }}>{f.title}</h3>
                <p style={{ fontSize: "0.84rem", color: "#555", lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What You Expect */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>What You Expect when you order MBA / DBA Dissertation Writing Service</h2>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.94rem" }}>
            Get some of our Service features at Free of Costs - We Share references sourced for your MBA dissertation in the form of PDFs, questionnaire or interview guide*, formatting, referencing, and appendices at free of costs
          </p>
        </div>

        {/* Free Features */}
        <div style={{ background: "#fff8f0", border: "1px solid #f5d9bb", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Get some of our Service features at Free of Costs</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px", marginTop: "18px" }} className="three-col-grid">
            {freeFeatures.map(f => (
              <div key={f.title} style={{ background: "#fff", borderRadius: "10px", padding: "20px", border: "1px solid #f5d9bb" }}>
                <div style={{ width: "36px", height: "36px", background: "#e87722", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "1rem", marginBottom: "10px" }}>✓</div>
                <h3 style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{f.title}</h3>
                <p style={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PhD Services */}
        {cat && (
          <div style={{ marginBottom: "28px" }}>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Our PhD Dissertation Services</h2>
            <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "18px" }}>Complete PhD / DBA dissertation support from topic selection to viva preparation</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
              {cat.services.map(s => (
                <Link key={s.href} href={s.href} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px", textDecoration: "none", display: "block" }}>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{s.title}</h3>
                  <p style={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.6 }}>{s.description}</p>
                  <span style={{ display: "inline-block", marginTop: "10px", fontSize: "0.8rem", color: "#e87722", fontWeight: 600 }}>Learn More →</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Dissertation Writing Service Features */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>UK MBA Dissertation Service feature</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "6px", fontSize: "0.94rem" }}>The US &amp; UK writers at Tutors India aim at inculcating knowledge within MBA Scholars/ students and build a great confidence to submit their dissertation successfully.</p>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.15rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px", marginTop: "16px" }}>A Dissertation Writing Service features that helps to get the grade</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "18px", fontSize: "0.94rem" }}>
            We help you in a broad range of services from the selection of a dissertation topic to complete your master's dissertation successfully with the expected grade. UK MBA / or Ph.D. thesis topics are selected based on your area of interest, research gap, and feasibility of data collection. We make you strong in your dissertation by dealing with all the questions that you have in your mind. The process also entails data collection, statistical analysis and presentation in the format of your Institute. As a final process, the master's thesis is further put to review and proofreading to ensure that you get quality work.
          </p>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.15rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Our Ph.D. / DBA Dissertation Writing &amp; Editing Service Features</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "18px" }} className="two-col-grid">
            {features.map((f, i) => (
              <div key={f.title} style={{ background: "#f8f9ff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px", display: "flex", gap: "14px" }}>
                <div style={{ width: "34px", height: "34px", background: "#1a2a6c", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "0.85rem", flexShrink: 0, marginTop: "2px" }}>{i + 1}</div>
                <div>
                  <h3 style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{f.title}</h3>
                  <p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.65 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Features */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>Our Additional Features</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
            {additionalFeatures.map(f => (
              <div key={f.title} style={{ background: "#fff", borderRadius: "10px", padding: "20px", border: "1px solid #dde2ef" }}>
                <h3 style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{f.title}</h3>
                <p style={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Subject Expertise */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Your Dissertation is written by your choice of Subject Matter Expertise</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "14px" }}>Specialized Subject Matter Expertise across the globe</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {subjects.map(s => (
              <span key={s} style={{ background: "#f0f4ff", border: "1px solid #c5d0ea", borderRadius: "20px", padding: "6px 14px", fontSize: "0.82rem", color: "#1a2a6c", fontWeight: 500 }}>{s}</span>
            ))}
          </div>
        </div>

        {/* Order Process */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Order Process</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "14px" }} className="four-col-grid">
            {orderProcess.map(s => (
              <div key={s.n} style={{ background: "#f8f9ff", borderRadius: "8px", padding: "14px", border: "1px solid #e0e4f0" }}>
                <div style={{ width: "32px", height: "32px", background: "#1a2a6c", borderRadius: "50%", color: "#fff", fontWeight: 700, fontSize: "0.85rem", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 8px" }}>{s.n}</div>
                <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "4px", textAlign: "center" }}>{s.title}</div>
                <div style={{ fontSize: "0.75rem", color: "#666", lineHeight: 1.5 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", borderRadius: "12px", padding: "36px 28px", textAlign: "center", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", color: "#fff", marginBottom: "10px" }}>Ready to Start Your PhD / DBA Dissertation?</h2>
          <p style={{ color: "#c5d5f0", marginBottom: "20px", fontSize: "0.95rem" }}>A Trusted MBA Dissertation Writing Service at Tutors India — get expert help today</p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/order-now/" style={{ padding: "13px 32px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, textDecoration: "none" }}>Order Now</Link>
            <Link href="/contact-us/" style={{ padding: "13px 32px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, textDecoration: "none" }}>Contact Us</Link>
          </div>
        </div>

        {/* Testimonials */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>Voice of Our customer</h2>
          <TestimonialSlider testimonials={testimonials} />
        </div>

      </section>

      <style>{`
        @media(max-width:900px){.three-col-grid{grid-template-columns:1fr 1fr!important;}.four-col-grid{grid-template-columns:1fr 1fr!important;}}
        @media(max-width:600px){.three-col-grid,.two-col-grid,.four-col-grid{grid-template-columns:1fr!important;}}
      `}</style>
    </>
  );
}
