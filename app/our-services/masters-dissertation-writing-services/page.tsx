"use client";
import Link from "next/link";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

const services = [
  { title: "Dissertation Topic Selection", desc: "At Tutors India, we offer thought-provoking suggestions for UK master's dissertation topics and titles that would mainly come from three principal sources.", href: "/our-services/masters-dissertation-writing-services/dissertation-topic/" },
  { title: "Dissertation Proposal", desc: "We develop the UK master's dissertation Proposal based on client's experience in the industry, interest area, and gap in the subject area.", href: "/our-services/masters-dissertation-writing-services/dissertation-proposal/" },
  { title: "UK Dissertation Full", desc: "We develop the introduction chapter based on the background and problem statement and also develop aims and objectives along with the delimitations set.", href: "/our-services/masters-dissertation-writing-services/full-dissertation/" },
  { title: "UK Dissertation Part", desc: "We not only provide support for writing full dissertation writing services, but our service also extends support for writing UK part-dissertation writing and chapter writing services.", href: "/our-services/masters-dissertation-writing-services/dissertation-part/" },
  { title: "Resit Dissertation", desc: "Tutors India is a legitimate dissertation service and supports our clients who required help in completing their resit UK dissertation by following supervisor remarks and rubric guidelines.", href: "/our-services/masters-dissertation-writing-services/resit-dissertation/" },
  { title: "Exclusive Dissertation", desc: "Our exclusive UK dissertation writing and tutoring services are also extended to our clients who are pursuing his/her career in higher studies.", href: "/our-services/masters-dissertation-writing-services/dissertation-part/" },
  { title: "Dissertation Statistical Analysis", desc: "Tutors India also provides UK dissertation statistical analysis including interpretation help. We use various software such as SPSS, MATLAB, STATA, Minitab, E-Views, SAS, etc.", href: "/our-services/masters-dissertation-writing-services/dissertation-statistical-analysis/" },
  { title: "CV Writing Services", desc: "We also provide exclusive UK dissertation proofreading services where we proofread for grammar, contextual spelling, punctuations, sentence structure, style and vocabulary enhancement.", href: "/our-services/masters-dissertation-writing-services/cv-writing/" },
];

const features = [
  { icon: "📄", title: "Plagiarism Free Work" },
  { icon: "✨", title: "Uniqueness" },
  { icon: "📚", title: "Fully Referenced" },
  { icon: "🎯", title: "100% Requirement Match" },
  { icon: "⏱", title: "On Time" },
  { icon: "📝", title: "Word Count Committed" },
  { icon: "✅", title: "Quality Assurance" },
  { icon: "🔄", title: "Unlimited Revisions" },
  { icon: "💰", title: "Affordable" },
  { icon: "👨‍🎓", title: "Experienced Writers with a minimum degree of Master's with research experience" },
];

const orderProcess = [
  { title: "We Identify Your Writer", desc: "In order to get our service, you need to first fill out the form with your information in a comprehensive manner." },
  { title: "Reference Number", desc: "Upon receiving your Enquiry form, we assign you a reference number. You can know the status of your paper anytime by sending us an email or tracking through CRM." },
  { title: "Acknowledgment", desc: "Once you have paid for your order you will receive an acknowledgement from us. The writing process here with us begins within couple of days after receiving your order." },
  { title: "Edit & Proofreading", desc: "Once we receive an order from our writer, we ensure to proofread the document." },
  { title: "We Check Requirement", desc: "Once your dissertation is completed we check for spelling, grammar, content, focus, sources quality against the client requirement." },
  { title: "Plagiarism Assurance", desc: "Once your dissertation is completed it is checked for plagiarism with anti-plagiarism software before the delivery." },
  { title: "Free Appendices / Resources", desc: "We ensure not only to deliver your work but also additional reference materials will be shared via zip file through google drive or drop box." },
  { title: "Download Your Order", desc: "You can download your order through our CRM and reminder will be sent through email & SMS. Additional copy will be mailed." },
  { title: "Request for Amendment", desc: "If you required any changes, you can always come back to us, we are ready to unlimited revisions for the concept being committed. Comments can be shared through guidance@tutorsindia.com." },
  { title: "Researcher Makes the Changes", desc: "The document will be shared to our writer or programmer and once the work is completed, we will share you the complete work through email or you can download the order." },
];

const additionalFeatures = [
  {
    title: "Authenticated References",
    desc: "All our research writing, editing, and rewriting services are fully referenced and cited academically using style (Harvard, Chicago, MLA, APA) guide provided by the university. We support our arguments and offer a factual basis, to ensure protect against charges of plagiarism. Further, Tutors India demonstrates to assessors that you have carried out the necessary research and allow the reader to locate the material. We reference, even the materials are paraphrased or quote from another source to acknowledge and retrospect the intellectual property rights. We ensure to provide both in-text and list of references (books, chapters in an edited book, journal articles, electronic journal articles, web document, letter, emails, online discussion forums, personal interviews, pamphlets or brochures, reprint diagrams, illustrations, charts or pictures, lecturer or tutors).",
  },
  {
    title: "Plagiarism Free",
    desc: "We ensure that the document is less than 5 or 0 percent of plagiarism. We correct all errors and infelicities in grammar, syntax, and usage. Rewrite any wordy or convoluted patch. We edit or rewrite your complete Master's / Postgraduate dissertation and manuscript to ensure that your writing does represent your own assertions and abilities. Paraphrase the content using our own words. We re-read the original article, summarize, digest and explain through our own words.",
  },
  {
    title: "Unlimited Revision Support with Quality Check & Assurance",
    desc: "We consult researchers on how they have to handle the research work in every step, i.e., when choosing a topic, framing the right methodology, collecting the data and every such step, which no other service provider does. We provide unlimited revisions absolutely free of cost as per the commitment made by us since we, as researchers, understand that every researcher has their own perception. We welcome participatory research in which your feedback/comments are discussed, justified and incorporated. This process goes unlimited due to which we support every time our researchers/clients with the same smile and enthusiasm.",
  },
];

const testimonials = [
  { quote: "I used to use another service, but I usually received poorly written papers and overpaid for it. I made my decision after discovering your service and receiving a superb dissertation from you. Thank you very much.", name: "C S", location: "Sheffield, UK" },
  { quote: "My friend recommended that I use your service just when I was about to give up on my dissertation. Because I was trapped and didn't know what to do, the suggestion came at a good moment. I'm now a PhD holder, and I'm overjoyed about it. Thank you for your help.", name: "Ishani", location: "" },
  { quote: "I knew dissertation writing was way more difficult in the higher studies. But when it came to my research paper that was to be handed in in 72 hours, I had no variants. I made the right choice when I ordered my paper from Tutors India and I'll definitely use your services in the future.", name: "Olivia", location: "UK" },
  { quote: "Great service for non-native English writing authors! Tutors India's dissertation writing service helps me to formulate my ideas in more clear and straight forward way and to eliminate common grammatical errors. Moreover, the results are delivered in time and for very reasonable price.", name: "Ryan", location: "" },
  { quote: "The dissertation presented by you for the project is truly commendable. I really appreciate your efforts and professionalism by which you have completed the project well on time. I'll definitely refer to my friends who struggle in writing the dissertation.", name: "Aryaman", location: "" },
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies",
  "Marketing & Communication", "Engineering & Technology", "Natural Sciences & Mathematics",
  "Biological & Life Science", "Economics & Administration", "Humanities & Social Science",
  "Law", "Medicine & Health", "Education & Training", "Journalism & Media",
  "Agriculture & Forestry", "Computer Science & IT", "Hospitality, Leisure & Sports",
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [],
};



export default function MastersDissertationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Our Services</Link>{" / "}
            <span style={{ color: "#fff" }}>Masters Dissertation Writing Services</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.6rem,3vw,2.4rem)", marginBottom: "18px", lineHeight: 1.3 }}>
            Achieving Academic Excellence with Master&apos;s Dissertation Writing Services
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "1.05rem", maxWidth: "820px", lineHeight: 1.8, marginBottom: "28px" }}>
            Our Master&apos;s Dissertation Writing Services can help you write an original and researched dissertation that meets all the academic requirements of the universities and institutes. Our team of experts offers complete assistance in writing your dissertation right from selecting a topic, developing a proposal, writing the literature review, doing research and conducting analysis of data, and academic writing to the final editing and formatting process.
          </p>
          <p style={{ color: "#c5d5f0", fontSize: "0.98rem", maxWidth: "820px", lineHeight: 1.8, marginBottom: "28px" }}>
            All our dissertations are customized according to the requirements of the respective universities and are free from plagiarism. Those students who want Dissertation Writing Services in UK can get expert assistance in several fields of academic disciplines. We also offer Dissertation Writing Help in UAE to those students who require professional help to meet their academic deadline and standards of their university.
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <Link href="/order-now/" style={{ padding: "12px 32px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "0.95rem" }}>Place an Order</Link>
            <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, fontSize: "0.95rem" }}>Reach Our Experts</Link>
          </div>
        </div>
      </section>

      {/* Post Graduate / Why Tutors India */}
      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        <div style={{ background: "#f0f4ff", borderRadius: "12px", padding: "32px 36px", marginBottom: "32px", borderLeft: "5px solid #1a2a6c" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", color: "#1a2a6c", marginBottom: "8px" }}>
            Post Graduate / Master&apos;s Dissertation Writing Service
          </h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "4px" }}>
            Assistance for Tutoring and Writing Services exclusively for the UK and Australian Universities –
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, margin: 0 }}>
            You will be Amazed with the quality of your dissertation
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "20px", marginBottom: "32px" }}>
          <div style={{ background: "#fff", borderRadius: "10px", padding: "24px 28px", boxShadow: "0 2px 12px rgba(26,42,108,0.08)", borderTop: "4px solid #1a2a6c" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>
              Why Tutors India for Master&apos;s Dissertation Writing Services?
            </h3>
            <p style={{ color: "#555", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
              The US &amp; UK writers at Tutors India aim at inculcating knowledge within students and build a great confidence to submit their dissertation successfully.
            </p>
          </div>
          <div style={{ background: "#fff", borderRadius: "10px", padding: "24px 28px", boxShadow: "0 2px 12px rgba(26,42,108,0.08)", borderTop: "4px solid #e87722" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>
              UK Master&apos;s Dissertation at Tutors India helps to complete your degree successfully
            </h3>
            <p style={{ color: "#555", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
              We just not provide writing assistance but also Tutoring — we tutor you at every stage on how we proceeded with the dissertation along with the keywords strategy used.
            </p>
          </div>
        </div>

        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "28px 32px" }}>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", color: "#1a2a6c", marginBottom: "14px" }}>
            A Trusted Dissertation Writing Service at Tutors India
          </h3>
          <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "14px" }}>
            Tutors India has skilled and talented professional UK writers who work with your UK Master&apos;s and MBA projects and assist you at all the stages of your UK MBA dissertation writing either online or email based. They assist you 24/7 and provide evidence that we deliver what exactly you expect. This is one of the highlights of our services which remains unmatched by our competitors across the world.
          </p>
          <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "14px" }}>
            Our team of UK dissertation writing experts consists of experienced professionals who are holding at least a Master&apos;s degree and also Ph.D. holders from the prestigious universities from the UK, US, and Australia, who can help you in writing any dissertation whether it is science or management or computer science or Engineering or environmental science. Our experts write your UK Master&apos;s and MBA dissertation/ projects (exclusively for the UK universities MBA dissertation writing service (UK MBA, ME, M.Sc., M.S., MPH, MPhil) without plagiarism and set in innovative ideas. Our unique approach has helped hundreds of scholars to complete and submit their UK MBA and Master&apos;s dissertation across the global successfully.
          </p>
          <p style={{ color: "#444", lineHeight: 1.8, margin: 0 }}>
            Tutors India has in-house internal committee consists of UK and US based Ph.D. holders for writing and as research advisors, postdoctoral fellows and M.D holding Ph.D. with rich experience in research. Some of our writers are trained at Harvard School, Oxford, London School of Business, and the University of Birmingham.
          </p>
        </div>
      </section>

      {/* Our UK Dissertation Services */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "32px", textAlign: "center" }}>
            Our UK Dissertation Services
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: "20px" }}>
            {services.map(s => (
              <Link key={s.title} href={s.href} style={{ background: "#fff", borderRadius: "10px", padding: "24px", textDecoration: "none", boxShadow: "0 2px 8px rgba(26,42,108,0.07)", borderTop: "4px solid #1a2a6c", display: "block" }}>
                <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "8px" }}>{s.title}</h3>
                <p style={{ color: "#555", fontSize: "0.88rem", lineHeight: 1.7 }}>{s.desc}</p>
              </Link>
            ))}
          </div>
          <p style={{ color: "#666", fontSize: "0.85rem", marginTop: "24px", lineHeight: 1.7 }}>
            <strong>Note:</strong> All our writing, editing, coding, algorithm, software programming &amp; statistics services are provided by our qualified expertise who are scrutinized in terms of their qualification in the specific subject, research experience, capability to write for the higher education system in the US, UK and Australia, and native language speakers of respective countries. However, in the case of software programming, coding &amp; algorithm service, we hire only registered vendors based on their exclusive sample work and portfolio.
          </p>
        </div>
      </section>

      {/* Service Features */}
      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "8px" }}>
          UK Master&apos;s Dissertation Service Feature
        </h2>
        <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", color: "#1a2a6c", marginBottom: "8px", fontWeight: 400 }}>
          A Dissertation Writing Service features that helps to get the grade
        </h3>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "32px" }}>
          We help you in a broad range of services from the selection of a dissertation topic to complete your master&apos;s dissertation successfully with the expected grade. UK MBA / or Ph.D. thesis topics are selected based on your area of interest, research gap, and feasibility of data collection. We make you strong in your dissertation by dealing with all the questions that you have in your mind. The process also entails data collection, statistical analysis and presentation in the format of your Institute. As a final process, the master&apos;s thesis is further put to review and proofreading to ensure that you get quality work.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "16px", marginBottom: "48px" }}>
          {features.map(f => (
            <div key={f.title} style={{ background: "#f5f7ff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px 20px", display: "flex", gap: "10px", alignItems: "flex-start" }}>
              <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>{f.icon}</span>
              <span style={{ color: "#1a2a6c", fontWeight: 600, fontSize: "0.88rem", lineHeight: 1.5 }}>{f.title}</span>
            </div>
          ))}
        </div>

        <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", color: "#1a2a6c", marginBottom: "10px" }}>
          Your Choice of Primary or Secondary Research
        </h3>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "28px" }}>
          Choice of data collection depends on the research design (quantitative or qualitative design). Tutors India helps in survey tool validation and also online and face to face data collection process. We help you to conduct surveys [in person Interviews: Formal to informal; structured to unstructured; focus group discussion, observations, self-administered questionnaire, diaries, citizen report cards, Delphi techniques, expert judgment, online surveys, secondary sources such as journals, newspaper articles, annual reports, government sources such as census, budgets, policies, procedures, etc.
        </p>

        <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", color: "#1a2a6c", marginBottom: "10px" }}>
          Your Choice of Quantitative or Qualitative or Triangulation Methodologies
        </h3>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "28px" }}>
          We are completely aware that there are a way and difference in the methodology section being written for management and health care or economics. As every discipline has its structure of methodologies and therefore, &apos;Tutors India&apos; provide consultation and writing services for your research methodology using our subject matter expertise. We offer a wide range of dissertation research methodology writing services, either being qualitative methods or quantitative research methods or a combination of both or critical and action oriented, our writers are well experienced in handling any methodology across the discipline.
        </p>
      </section>

      {/* What You Expect + Free Features */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", color: "#1a2a6c", marginBottom: "28px" }}>
            What You Expect when you order Master&apos;s Dissertation Writing Service
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "24px" }}>
            <div style={{ background: "#fff", borderRadius: "10px", padding: "24px", borderLeft: "4px solid #e87722" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "8px" }}>
                Get Some of Our Service Features at Free of Costs
              </h3>
              <p style={{ color: "#555", fontSize: "0.9rem", lineHeight: 1.7 }}>
                We Share references sourced for your dissertation in the form of PDFs, questionnaire or interview guide and primary research output without data at free of costs.
              </p>
            </div>
            <div style={{ background: "#fff", borderRadius: "10px", padding: "24px", borderLeft: "4px solid #1a2a6c" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "8px" }}>
                Get your Primary Research Completed at an Additional Cost
              </h3>
              <p style={{ color: "#555", fontSize: "0.9rem", lineHeight: 1.7 }}>
                Tutors India has exclusive custom data collection services to gather useful information in various domains. We make sure the research work needs to be ethical with primary data, needs to be original with novelty. The choice of research method to use depends on many factors, such as the number of respondents, data collection time frame, and the characteristics of the population under investigation.
              </p>
            </div>
            <div style={{ background: "#fff", borderRadius: "10px", padding: "24px", borderLeft: "4px solid #2563b0" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "8px" }}>
                Appendices or Additional Work at Free of Costs
              </h3>
              <p style={{ color: "#555", fontSize: "0.9rem", lineHeight: 1.7 }}>
                The dissertation writing not only involves the collection of data required for the analysis but also involves additional material to support the findings. Appendix involves supportive materials that includes data, audio, video, hi-resolution images. We will help you to provide those supplementary materials as free and present in the order in which they are introduced in the text (Appendix A, Appendix B, etc.).
              </p>
            </div>
            <div style={{ background: "#fff", borderRadius: "10px", padding: "24px", borderLeft: "4px solid #e87722" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "8px" }}>
                Development of Questionnaire or Interview Questions
              </h3>
              <p style={{ color: "#555", fontSize: "0.9rem", lineHeight: 1.7 }}>
                At Tutors India, we assist you in developing questionnaire — Open ended, closed ended, Objective questionnaire, structured and unstructured questionnaire, focus group guide, interview guide for all your research work. Response categories of questionnaire include Use of Likert Scale, Category proliferation, Ranking, etc.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subject Expertise */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", marginBottom: "8px" }}>
            Your Dissertation is Written by Your Choice of Subject Matter Expertise
          </h2>
          <p style={{ color: "#c5d5f0", lineHeight: 1.8, marginBottom: "10px" }}>
            We have a team of 2000+ expertise across the subjects &amp; countries (including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine)
          </p>
          <p style={{ color: "#c5d5f0", lineHeight: 1.8, marginBottom: "28px" }}>
            Tutors India has capability and skills to handle subjects across the field. We chose qualified and experienced subject specific expertise while you order your Ph.D. or Master&apos;s dissertation. We have more than 2000+ expertise working across the world who can handle arts, literature, sciences, engineering or medicine.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "28px" }}>
            {subjects.map(s => (
              <span key={s} style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "6px 16px", borderRadius: "20px", fontSize: "0.85rem" }}>{s}</span>
            ))}
          </div>
          <p style={{ color: "#c5d5f0", fontSize: "0.9rem", marginBottom: "20px" }}>
            As well as your order, you will also get the following
          </p>
          <Link href="/our-writers/" style={{ color: "#f9c74f", fontWeight: 600, fontSize: "0.95rem" }}>Meet Our Writers →</Link>
        </div>
      </section>

      {/* Additional Features */}
      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "32px" }}>
          Our Additional Features
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "24px" }}>
          {additionalFeatures.map(f => (
            <div key={f.title} style={{ background: "#f5f7ff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "24px" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>{f.title}</h3>
              <p style={{ color: "#555", fontSize: "0.88rem", lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Order Process */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "8px" }}>
            Order Process
          </h2>
          <p style={{ color: "#555", marginBottom: "8px" }}>Have a look at what makes us the best in the business</p>
          <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "32px" }}>
            At Tutors India we are equipped with writers who have passion towards research and associated with writing all their lives.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "20px" }}>
            {orderProcess.map((p, i) => (
              <div key={p.title} style={{ background: "#fff", borderRadius: "10px", padding: "20px 24px" }}>
                <div style={{ width: "36px", height: "36px", background: "#e87722", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.95rem", marginBottom: "12px" }}>{i + 1}</div>
                <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "0.95rem", color: "#1a2a6c", marginBottom: "6px" }}>{p.title}</h3>
                <p style={{ color: "#555", fontSize: "0.86rem", lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ color: "#555", fontSize: "0.88rem", marginTop: "24px", lineHeight: 1.7 }}>
            Since we deliver the research work, and there is a possibility that research can be viewed in different direction, we offer unlimited revision support for the concept being accepted.
          </p>
        </div>
      </section>

      {/* Testimonials Slider */}
      <TestimonialSlider testimonials={testimonials.map(t => ({ ...t, author: t.name || t.author || "" }))} />

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "56px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.6rem", marginBottom: "12px" }}>
          Place Your Order Today
        </h2>
        <p style={{ color: "#c5d5f0", marginBottom: "28px", fontSize: "1rem" }}>
          Invest in your Career — get expert Master&apos;s dissertation writing support from our qualified academics today.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 36px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 36px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
