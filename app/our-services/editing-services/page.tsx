import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academic Paper Editing: Essays, Theses, Dissertations",
  description: "We offer a wide range of services such as language and technical editing, formatting services, grand proposal writing, etc.",
  keywords: "Academic Editing,Academic Editing by Professional Editors,Academic Editing Services",
  alternates: { canonical: "https://www.tutorsindia.com/our-services/editing-services/" },
};

const services = [
  {
    title: "Language Editing",
    href: "/our-services/editing-services/language-editing/",
    desc: "Looking for plagiarism free without changing the context and logical flow? We make difference in terms of deadline and overall grade.",
    icon: "✍️",
  },
  {
    title: "Technical Editing",
    href: "/our-services/editing-services/technical-editing/",
    desc: "We make difference in terms of deadline and overall grade. Our technical editors ensure your work meets the highest academic and publication standards.",
    icon: "🔬",
  },
  {
    title: "Plagiarism Report",
    href: "/our-services/editing-services/plagiarism-report/",
    desc: "We are aware of the consequences of plagiarism. Our work is scanned against online sources in a similar way like WriteCheck or Turnitin.",
    icon: "📋",
  },
  {
    title: "Transcription Services",
    href: "/our-services/editing-services/transcription-services/",
    desc: "Accurate and professional transcription services for interviews, focus groups, lectures and academic research recordings.",
    icon: "🎙️",
  },
  {
    title: "Language Translation",
    href: "/our-services/editing-services/translation-services/",
    desc: "Professional language translation services for academic and research documents, ensuring accuracy and context preservation.",
    icon: "🌐",
  },
  {
    title: "Citation Compliance",
    href: "/our-services/editing-services/citation-compliance/",
    desc: "All our research writing, editing, and rewriting services are fully referenced and cited academically using style guide provided by the university.",
    icon: "📖",
  },
  {
    title: "Formatting Service",
    href: "/our-services/editing-services/formatting-service/",
    desc: "We comply 100% with all university-based, specific referencing guidelines of Harvard, APA, Chicago, Vancouver, Turabian etc.",
    icon: "📄",
  },
  {
    title: "Scientific Editing",
    href: "/our-services/editing-services/scientific-editing-services/",
    desc: "Our in-house internal committee consists of UK and US based Ph.D. holders for writing and as research advisors with rich experience in research.",
    icon: "🧪",
  },
  {
    title: "Grant Proposal Writing",
    href: "/our-services/editing-services/grant-proposal-writing/",
    desc: "Expert grant proposal writing and editing to help you secure funding for your academic and research projects.",
    icon: "📝",
  },
  {
    title: "Peer Review",
    href: "/our-services/editing-services/peer-review-submissions/",
    desc: "Professional peer review services to assess your manuscript before submission to journals or academic committees.",
    icon: "👁️",
  },
];

const features = [
  { icon: "📋", title: "Plagiarism Free Work", desc: "We are aware of the consequences of plagiarism as our experts are supporting International students and scholars for more than 15 years. Hence, our work is completely plagiarism free as we ensure to scan the works against online sources in a similar way like Write Check or Turnitin so that you can be very sure about the plagiarism-free output." },
  { icon: "🔑", title: "Uniqueness", desc: "Every work is unique as we, as research assistance providers, know how to write a high-quality and unique research thesis / dissertation. We provide only custom masters dissertation writing services written by Subject Matter Experts who also provide justification on how it is unique." },
  { icon: "📚", title: "Fully Referenced", desc: "Our Masters dissertation projects are fully referenced with latest peer-reviewed research articles, textbooks, online sources, Newspaper articles, corporate documents, UN and other such international and national regulatory bodies." },
  { icon: "✅", title: "100% Requirement Match", desc: "We match your requirement 100% since our experts understand the topic and analyze the feasibility before even working on the dissertation. In our dissertation writing services, we always check with you before we proceed with next chapters." },
  { icon: "⏰", title: "On Time", desc: "Our work is delivered on specified time as per the commitment. We guarantee delivery of minor changes within 24 working hours and significant changes within 48 working hours as we understand the importance of our clients' deadline." },
  { icon: "📄", title: "Word Count Committed", desc: "We ensure that your dissertation is meeting the exact word count as per your university regulations as we completely understand that universities reduce grades if the word count is reduced or not met." },
  { icon: "🏆", title: "Quality Assurance", desc: "We have stringent quality check and quality assurance process in every stage of your masters dissertation so that the final output is devoid of errors. Our experts understand your initial requirement, compare and cross verify the final output to meet the standards." },
  { icon: "♾️", title: "Unlimited revisions", desc: "We firmly believe that every researcher has different perception and we respect your feedback and comments to improve the research quality. So we provide unlimited revisions as per the initial commitment which is completely free of cost even after the project is completed*." },
  { icon: "💰", title: "Affordable", desc: "We strive to provide the masters dissertation writing services with world-class quality at affordable rates. Our experts are globally available who would work as per your currency rates and timings." },
  { icon: "🎓", title: "Experienced Writers", desc: "Experienced Writers with a minimum degree of Master's with research experience from international and top-ranked universities from India, the US, and the UK." },
];

const orderSteps = [
  { num: "01", title: "We identify Your writer", desc: "In order to get our service, you need to first fill out the form with your information in a comprehensive manner." },
  { num: "02", title: "Reference Number", desc: "Upon receiving your Enquiry form, we assign you a reference number. You can know the status of your paper anytime by sending us an email or tracking through CRM." },
  { num: "03", title: "Acknowledgment", desc: "Once you have paid for your order you will receive an acknowledgement from us. The writing process here with us begins within couple of days* after receiving your order." },
  { num: "04", title: "We check requirement", desc: "Once your dissertation is completed we check for spelling, grammar, content, focus, sources quality against the client requirement." },
  { num: "05", title: "Edit & proofreading", desc: "Once we receive an order from our writer, we ensure to proofread the document." },
  { num: "06", title: "Plagiarism Assurance", desc: "At Tutors India we are equipped with writers who have passion towards research and associated with writing all their lives. Once your dissertation is completed it is checked for plagiarism with anti-plagiarism software before the delivery." },
  { num: "07", title: "Free Appendices / Resources", desc: "We ensure not only to deliver your work but also additional reference materials will be shared via zip file through google drive or drop box." },
  { num: "08", title: "Download your Order", desc: "You can download your order through our CRM and reminder will be sent through email & SMS. Additional copy will be mailed." },
  { num: "09", title: "Researcher makes the changes", desc: "The document will be shared to our writer or programmer and once the work is completed, we will share you the complete work through email or you can download the order." },
  { num: "10", title: "Unlimited revisions", desc: "Since we deliver the research work, and there is a possibility that research can be viewed in different direction, we offer unlimited revision support for the concept being accepted." },
  { num: "11", title: "Request for amendment", desc: "If you required any changes, you can always come back to us, we are ready to unlimited revisions for the concept being committed. Comments can be shared through guidance@tutorsindia.com" },
];

export default function EditingServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Services", url: "/our-services/" }, { name: "Editing Services" }]} />
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
              <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}
              <span style={{ color: "#fff" }}>Editing Services</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.4rem,3vw,2rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              Are you looking for academic &amp; Research editing, transcription, translation, peer review and pre-submission help?
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Looking for plagiarism free without changing the context and logical flow? We make difference in terms of deadline and overall grade.
            </p>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Academic &amp; Research Editing, Transcription, Translation, Peer Review &amp; Pre-Submission
            </p>
            <p style={{ color: "#c5d5f0", fontSize: "0.95rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Assistance for Tutoring and Writing Services exclusively for the US, UK and Australian Universities –
            </p>
            <p style={{ color: "#c5d5f0", fontSize: "0.95rem", lineHeight: 1.75, marginBottom: "20px" }}>
              You will be Amazed with the quality of the output
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/samples/publication-research.jpg" alt="Editing Services" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>2000+ Experts<br />US &amp; UK Editors<br />10 Service Areas</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      {/* editing services intro */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>editing services</h2>
        <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px" }}>
          UK Master&rsquo;s or your postgraduate dissertation should not be taken lightly as this decides your career further. The dissertation is your final chance to impress at the University. UK Master&rsquo;s dissertation can be sometimes tedious for students as it needs a complete understanding of various research methodologies. Further, students might find it confused and complicated to finish it on time without plagiarism.
        </p>
        <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px" }}>
          Therefore, given that dissertation plays a significant role in completing the UK university degree, at Tutors India, we offer both tutoring and writing services. We just do not provide you writing assistance but also tutor you at every stage on how we proceeded with the dissertation along with the keywords strategy used.
        </p>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          Tutors India has skilled and talented professional UK writers who work with your UK Master&rsquo;s and MBA projects and assist you at all the stages of your UK MBA dissertation writing either online or email based. They assist you 24/7 and provide evidence that we deliver what exactly you expect. This is one of the highlights of our services which remains unmatched by our competitors across the world. Our team of UK dissertation writing experts consists of experienced professionals who are holding at least a Master&rsquo;s degree and also Ph.D. holders from the prestigious universities from the UK, US, and Australia, who can help you in writing any dissertation whether it is science or management or computer science or Engineering or environmental science. Our experts write your UK Master&rsquo;s and MBA dissertation/ projects (exclusively for the UK universities MBA dissertation writing service (UK MBA, ME, M.Sc., M.S., MPH, MPhil) without plagiarism and set in innovative ideas. Our unique approach has helped hundreds of scholars to complete and submit their UK MBA and Master&rsquo;s dissertation across the global successfully.
        </p>
      </section>

      {/* Editing Services Grid */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "32px", textAlign: "center" }}>Academic &amp; Research Editing, Transcription, Translation, Peer Review &amp; Pre-Submission</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: "18px" }} className="five-col-grid">
            {services.map((s) => (
              <Link key={s.title} href={s.href} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "22px 18px", textDecoration: "none", display: "block" }}>
                <div style={{ fontSize: "2rem", marginBottom: "10px" }}>{s.icon}</div>
                <div style={{ fontWeight: 700, color: "#1a2a6c", fontSize: "0.92rem", marginBottom: "8px" }}>{s.title}</div>
                <div style={{ fontSize: "0.78rem", color: "#666", lineHeight: 1.6 }}>{s.desc}</div>
                <div style={{ marginTop: "12px", color: "#e87722", fontWeight: 700, fontSize: "0.82rem" }}>Learn More →</div>
              </Link>
            ))}
          </div>
          <style>{`@media(max-width:1024px){.five-col-grid{grid-template-columns:repeat(3,1fr)!important;}}@media(max-width:640px){.five-col-grid{grid-template-columns:1fr 1fr!important;}}`}</style>
        </div>
      </section>

      {/* A Trusted Dissertation Writing Service */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>A Trusted Dissertation Writing Service at Tutors India</h2>
        <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px" }}>
          Tutors India has in-house internal committee consists of UK and US based Ph.D. holders for writing and as research advisors, postdoctoral fellows and M.D holding Ph.D. with rich experience in research. Some of our writers are trained at Harvard School, Oxford, London School of Business, and the University of Birmingham. Thereby, you can feel relaxed that you are going to get help from a genuine and trustable research company in Asia but with the presence across the world.
        </p>
        <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px" }}>
          We help you in a broad range of services from the selection of a dissertation topic to complete your master&rsquo;s dissertation successfully with the expected grade. UK MBA thesis topics are selected based on your area of interest, research gap, and feasibility of data collection. We make you strong in your dissertation by dealing with all the questions that you have in your mind. The process also entails data collection, statistical analysis and presentation in the format of your Institute. As a final process, the master&rsquo;s thesis is further put to review and proofreading to ensure that you get quality work.
        </p>
      </section>

      {/* Your Choice of Primary or Secondary Research */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Your Choice of Primary or Secondary Research</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px" }}>
            Choice of data collection depends on the research design (quantitative or qualitative design). Tutors India helps in survey tool validation and also online and face to face data collection process. We help you to conduct surveys [in person Interviews: Formal to informal; structured to unstructured; focus group discussion, observations, self-administered questionnaire, diaries, citizen report cards, Delphi techniques, expert judgment, online surveys, secondary sources such as journals, newspaper articles, annual reports, government sources such as census, budgets, policies, procedures, etc.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px" }}>
            We are completely aware that there are a way and difference in the methodology section being written for management and health care or economics. As every discipline has its structure of methodologies and therefore, &lsquo;Tutors India&rsquo; provide consultation and writing services for your research methodology using our subject matter expertise. We offer a wide range of dissertation research methodology writing services, either being qualitative methods or quantitative research methods or a combination of both or critical and action oriented, our writers are well experienced in handling any methodology across the discipline.
          </p>
        </div>
      </section>

      {/* Get your Primary research */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Get your Primary research Completed at an additional cost</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          Tutors India has exclusive custom data collection services to gather useful information in various domains. We make sure the research work needs to be ethical with primary data, needs to be original with novelty. The choice of research method to use depends on many factors, such as the number of respondents that the Surveyor wants, data collection time frame, the characteristics of the population under investigation, and of course your budget. We do collect primary data at an additional costs and our services includes data collection using telephone interviews, market surveys, focus group discussion sessions and questionnaire.
        </p>
      </section>

      {/* Development of Questionnaire */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Development of Questionnaire or Interview questions</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px" }}>
            In PhD, questionnaire development is an important step as it decides the study outcome. At Tutors India, we help you in the questionnaire development, reliability and validation process. Our expertise has rich experience in developing questionnaire using scales, questions for interview guide, focus group discussion, structured and unstructured questionnaire, open and closed format, matrix and contingency questions. We have trained expertise exclusively for questionnaire development and research framework. We help you in development of an interview guide or questionnaire at free costs while ordering for full PhD dissertation*.
          </p>
          <div style={{ background: "#fff", border: "1px solid #c5d5f0", borderRadius: "10px", padding: "20px" }}>
            <p style={{ color: "#1a2a6c", fontWeight: 700, margin: 0 }}>
              We Share references sourced for your dissertation in the form of PDFs, questionnaire or interview guide and primary research output without data at free of costs
            </p>
          </div>
        </div>
      </section>

      {/* Why Tutors India for Editing Services */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: "24px", textAlign: "center" }}>Why Tutors India for Editing Services?</h2>
          <p style={{ color: "#c5d5f0", lineHeight: 1.8, textAlign: "center", marginBottom: "32px", maxWidth: "800px", margin: "0 auto 32px" }}>
            Have a look at what makes us the best in the business
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "18px" }} className="four-col-grid">
            {[
              { icon: "🏛️", title: "UK Master's Dissertation", desc: "UK Master's Dissertation at Tutors India helps to complete your degree successfully." },
              { icon: "📖", title: "Tutoring & Writing", desc: "We just not provide writing assistance but also Tutoring at every stage on how we proceeded with the dissertation." },
              { icon: "✅", title: "A Trusted Service", desc: "A Trusted Dissertation Writing Service at Tutors India. Skilled and talented professional UK writers who work with your UK Master's and MBA projects." },
              { icon: "🎓", title: "A Dissertation Writing Service features", desc: "A Dissertation Writing Service features that helps to get the grade – plagiarism free, on time, 100% requirement match." },
            ].map((f) => (
              <div key={f.title} style={{ background: "rgba(255,255,255,0.07)", borderRadius: "10px", padding: "22px", textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: "10px" }}>{f.icon}</div>
                <div style={{ fontWeight: 700, fontSize: "0.92rem", marginBottom: "8px", color: "#f9c74f" }}>{f.title}</div>
                <div style={{ fontSize: "0.82rem", color: "#a0b8e0", lineHeight: 1.6 }}>{f.desc}</div>
              </div>
            ))}
          </div>
          <style>{`@media(max-width:768px){.four-col-grid{grid-template-columns:1fr 1fr!important;}}`}</style>
        </div>
      </section>

      {/* Our Master's Dissertation Writing Service Features */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "24px" }}>Our Master&rsquo;s Dissertation Writing Service Features</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: "16px" }} className="five-col-grid">
          {features.map((f) => (
            <div key={f.title} style={{ background: "#f5f6fa", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px", textAlign: "center" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{f.icon}</div>
              <div style={{ fontWeight: 700, color: "#1a2a6c", marginBottom: "6px", fontSize: "0.85rem" }}>{f.title}</div>
              <div style={{ fontSize: "0.76rem", color: "#555", lineHeight: 1.5 }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Subject Matter Expertise */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Your Dissertation is written by your choice of Subject Matter Expertise</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "8px" }}>
            We have a team of 2000+ expertise across the subjects &amp; countries (including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine)
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "20px" }}>
            Tutors India has capability and skills to handle subjects across the field.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {["Arts & Humanities","Biological Sciences","Business & Management Studies","Marketing & Communication","Engineering & Technology","Natural Sciences & Mathematics","Biological & Life science","Economics & Administration","Humanities & Social Science","Law","Medicine & Health","Education & Training","Journalism & Media","Agriculture & Forestry","Computer Science & IT","Hospitality, Leisure & Sports"].map((s) => (
              <span key={s} style={{ background: "#fff", border: "1px solid #c5d5f0", borderRadius: "20px", padding: "6px 16px", fontSize: "0.83rem", color: "#1a2a6c", fontWeight: 600 }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Our Additional Features */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "24px" }}>Our Additional Features</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
          {[
            { title: "Authenticated References", desc: "All our research writing, editing, and rewriting services are fully referenced and cited academically using style (Harvard, Chicago, MLA, APA) guide provided by the university." },
            { title: "Plagiarism Free", desc: "We ensure that the document is less than 5 or 0 percent of plagiarism." },
            { title: "Unlimited Revision Support with Quality Check & Assurance", desc: "We consult researchers on how they have to handle the research work in every step, i.e., when choosing a topic, framing the right methodology, collecting the data and every such step, which no other service provider does." },
            { title: "Appendices or additional work at Free of Costs", desc: "We Share references sourced for your dissertation in the form of PDFs, questionnaire or interview guide and primary research output without data at free of costs." },
            { title: "Development of Questionnaire or Interview at Free of Costs", desc: "We help you in development of an interview guide or questionnaire at free costs while ordering for full PhD dissertation*." },
            { title: "What You Expect when you order Master's Dissertation Writing Service", desc: "Get some of our Service features at Free of Costs." },
          ].map((item) => (
            <div key={item.title} style={{ background: "#f5f6fa", border: "1px solid #c5d5f0", borderRadius: "10px", padding: "20px" }}>
              <div style={{ fontWeight: 700, color: "#1a2a6c", marginBottom: "6px", fontSize: "0.92rem" }}>✦ {item.title}</div>
              <div style={{ fontSize: "0.82rem", color: "#555", lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          ))}
        </div>
        <style>{`@media(max-width:768px){.three-col-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* Order Process */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: "32px", textAlign: "center" }}>Order Process</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "16px" }} className="four-col-grid">
            {orderSteps.map((s) => (
              <div key={s.num} style={{ background: "rgba(255,255,255,0.07)", borderRadius: "10px", padding: "18px", textAlign: "center" }}>
                <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#f9c74f", marginBottom: "8px" }}>{s.num}</div>
                <div style={{ fontWeight: 700, fontSize: "0.85rem", marginBottom: "6px" }}>{s.title}</div>
                <div style={{ fontSize: "0.76rem", color: "#a0b8e0", lineHeight: 1.5 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Place Your Order Today</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>Invest in your Career &middot; US &amp; UK Editors &middot; Unlimited Revisions &middot; Reply in 30 Minutes</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
