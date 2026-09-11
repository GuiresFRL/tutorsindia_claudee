import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "Dissertation Writing Services for Masters & MBA | Tutors India",
  description: "Struggling with your dissertation? Get expert Dissertation Writing Services for Masters & MBA, with plagiarism-free work and unlimited revisions.",
  keywords: "Dissertation Writing Services, Dissertation Writing Support in UK, Dissertation Writing Help in UAE, UK Dissertation Writing Services, Best Dissertation Writing Services in UK, Master's Dissertation Services in UK, MBA Dissertation Help in UK, MBA Dissertation Support in UK, Dissertation Writing Services in UAE, Master's Dissertation Services in UAE, Masters Dissertation Help in UAE, MBA Dissertation Services in UAE, MBA Dissertation Help in UAE, MBA Dissertation Help in UK",
  alternates: { canonical: "https://www.tutorsindia.com/our-services/masters-dissertation-writing-services/" },
};

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

const programTypes = [
  { type: "MSc Programs", support: "Research method, data analysis, interpretation" },
  { type: "MA Programs", support: "Literature analysis, argumentation, academic writing" },
  { type: "MRes Programs", support: "Rigorous methodology, research tools, credibility of data" },
  { type: "MTech Programs", support: "Technical methodology, implementation, innovation" },
];

const emirateSystems = [
  { emirate: "Dubai (Combination Systems)", system: "Blend international standards with local business considerations; heavy on innovation" },
  { emirate: "Abu Dhabi (Research Oriented)", system: "Highly oriented towards research methodologies; publication internationally accepted; policy-oriented" },
  { emirate: "Sharjah & Northern Emirates", system: "Professionally applied; community relevance; research utility" },
];

const uaeIncludes = [
  "The peculiarities of the referencing style demanded by most local universities (we know them all)",
  "Presenting the research from both international and local perspectives",
  "Composing the paper in accordance with international standards of academic writing",
  "Understanding the unique requirements of your university",
  "Studying while being employed as a full-time worker in the UAE is a common occurrence",
];

const processPhases = [
  { phase: "Planning", desc: "Think of an issue to research that actually matters. Try to make your proposal and methodology strong and appealing." },
  { phase: "Research", desc: "During the process of data gathering and analysis, we assist you in making conclusions about findings. What do your findings suggest? Do you need any changes in your methodology?" },
  { phase: "Analysis", desc: "Move things together. The analysis has to be clear. The discussion has to reflect findings and their implications." },
  { phase: "Final", desc: "We ensure that grammar, style, citations and format will not distract from the ideas of your work." },
];

const beforeAfter = [
  { before: "Not sure whether you're on the right track", after: "Certainty regarding what needs to be done and why" },
  { before: "Insecurity concerning your approach to writing", after: "Confidence gained by a deep knowledge of your own research" },
  { before: "Fuzzy writing which hides your thoughts", after: "Academic writing that is concise with well-supported arguments" },
];

const studentInsights = [
  { quote: "I never knew if my research was groundbreaking or not. Thank you for explaining precisely why the methodology was effective, which allowed me to gain confidence and proceed to the next level.", attribution: "MSc Psychology, Sheffield, UK" },
  { quote: "I thought the purpose of proofreading was to correct grammatical errors. However, my data analysis needed a complete overhaul. Thank you for pointing that out.", attribution: "MBA Student, Netherlands" },
  { quote: "Completing my master's degree alongside my profession seemed impossible before outlining the process. Dividing the project into stages made it possible to approach the objective with more enthusiasm rather than fear of the unknown.", attribution: "MTech Student, UAE" },
];

const testimonials = [
  { quote: "My supervisor commented that my methodology was more rigorous than many PhD proposals. I wouldn't have developed that confidence without Tutors India's guidance through the research design phase.", name: "Daniel Thompson", role: "MSc Psychology Student", location: "University of Sheffield, UK" },
  { quote: "The support I received throughout my dissertation journey was exceptional. Tutors India's Master's Dissertation Services helped me strengthen my research methodology and improve the quality of my writing.", name: "Hannah Becker", role: "MPhil Student", location: "Germany" },
  { quote: "Every chapter was reviewed with great attention to detail. Tutors India's Master's Dissertation Services made the entire research process more manageable and less stressful.", name: "Thomas de Vries", role: "MBA Student", location: "Netherlands" },
  { quote: "From literature review to final formatting, the guidance was excellent. Tutors India's Master's Dissertation Services exceeded my expectations and helped me submit with confidence.", name: "Niamh O'Sullivan", role: "MSc Student", location: "Ireland" },
  { quote: "The Master's Dissertation Help Services made my graduation journey much easier. The academic experts supported me at every stage and helped me submit a high-quality dissertation on time.", name: "Khalid Al Nuaimi", role: "MEng Student", location: "UAE" },
  { quote: "I needed professional guidance to complete my master's dissertation before graduation. Tutors India's Master's Dissertation Help Services delivered outstanding academic support throughout the project.", name: "Abdullah Al Qahtani", role: "MTech Student", location: "Saudi Arabia" },
  { quote: "The Master's Dissertation Help Services helped me develop a strong research framework and complete my master's graduation requirements without unnecessary stress.", name: "Mohammed Al Marri", role: "MBA Student", location: "Qatar" },
  { quote: "Balancing work and studies was challenging, but Tutors India's Master's Dissertation Help Services provided reliable academic support that helped me complete my master's and achieve my graduation goals.", name: "Fatma Al Balushi", role: "MSc Student", location: "Oman" },
];

const contactOptions = [
  { title: "Get an Instant Quote", desc: "Share your brief details and receive a transparent, no-obligation quote", href: "/order-now/" },
  { title: "Chat via WhatsApp", desc: "Quick questions answered within hours", href: "https://wa.me/918754446690" },
  { title: "Email Your Requirements", desc: "Send your detailed brief for a personalized support plan", href: "mailto:info@tutorsindia.com" },
];

const contactChecklist = [
  { title: "Free Consultation", desc: "Discuss your dissertation needs at no cost" },
  { title: "Quick Quote", desc: "Get transparent pricing with no obligation" },
  { title: "Contact Form", desc: "Reach out through our website" },
  { title: "WhatsApp", desc: "Message for quick assistance" },
  { title: "Email", desc: "Send requirements for a personalized plan" },
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies",
  "Marketing & Communication", "Engineering & Technology", "Natural Sciences & Mathematics",
  "Biological & Life Science", "Economics & Administration", "Humanities & Social Science",
  "Law", "Medicine & Health", "Education & Training", "Journalism & Media",
  "Agriculture & Forestry", "Computer Science & IT", "Hospitality, Leisure & Sports",
];

const faqs = [
  { q: "What is a master's dissertation?", a: "A master's dissertation is an independent research project completed as part of a postgraduate degree. It involves investigating a specific topic, analysing evidence, and presenting well-supported findings using accepted academic research methods and university guidelines." },
  { q: "How difficult is a master's dissertation?", a: "A master's dissertation can be challenging because it requires research, critical thinking, academic writing, and time management. With proper planning, guidance, and consistent effort, students can complete their dissertation and meet university expectations." },
  { q: "Is a dissertation compulsory in a Master's degree?", a: "It depends on your university and programme. Many Master's courses require a dissertation, while others may offer alternatives such as a capstone project, internship, or additional coursework. Always check your university's academic requirements." },
  { q: "What if I fail my Master's dissertation?", a: "Many universities allow students to revise and resubmit their dissertation or complete additional assessments. The available options depend on your university's academic regulations and the examiner's feedback." },
  { q: "Which is harder, a thesis or a dissertation?", a: "The answer depends on your university's terminology. Generally, a doctoral dissertation is more demanding because it requires original research, while a Master's dissertation focuses on applying established research methods to a specific topic." },
  { q: "How does your service differ from simply completing the work for me?", a: "Our Master's dissertation services provide expert academic collaboration and guidance. We support your research, methodology, analysis, and writing—empowering you to understand and own your work. This approach ensures your dissertation genuinely represents your research and intellectual development, which is essential for academic integrity and your professional growth." },
  { q: "Can you help with MBA dissertation specifically?", a: "Yes, our specialized MBA Dissertation Help addresses the unique requirements of business dissertations. We combine academic rigor with commercial viability, supporting strategy, management, finance, marketing, and leadership research. Our MBA experts understand both academic standards and business application requirements." },
  { q: "Do you provide UK and UAE dissertation writing services?", a: "Yes, we specialize in UK Dissertation Writing Services for Russell Group, Red Brick, and Post-1992 universities. We also provide comprehensive Dissertation Writing Services, UAE for Dubai, Abu Dhabi, and Northern Emirates institutions. Choose the contact option that works best for you." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const productSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "Master's Dissertation Writing Services",
      image: "https://www.tutorsindia.com/wp-content/uploads/2025/02/New-Project.jpg",
      description: "Struggling with your dissertation? Get expert Dissertation Writing Services for Masters & MBA, with plagiarism-free work and unlimited revisions.",
      url: "https://www.tutorsindia.com/our-services/masters-dissertation-writing-services/",
      brand: {
        "@type": "Organization",
        name: "Tutors India",
        areaServed: [
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Country", name: "United Arab Emirates" },
          { "@type": "Place", name: "Europe" },
          { "@type": "Place", name: "Gulf Region" },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "696",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tutorsindia.com/" },
    { "@type": "ListItem", position: 2, name: "Our Services", item: "https://www.tutorsindia.com/our-services/" },
    { "@type": "ListItem", position: 3, name: "Masters Dissertation Writing Services", item: "https://www.tutorsindia.com/our-services/masters-dissertation-writing-services/" },
  ],
};

export default function MastersDissertationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Our Services</Link>{" / "}
            <span style={{ color: "#fff" }}>Masters Dissertation Writing Services</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.6rem,3vw,2.4rem)", marginBottom: "18px", lineHeight: 1.3 }}>
            Master&apos;s Dissertation Guidance from Academic Experts
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "1.05rem", maxWidth: "820px", lineHeight: 1.8, marginBottom: "28px" }}>
            An academic expert in your field can guide you throughout your research process, from finding the best topic to completing the final editing. You can strengthen your research, understand your methodology, and prepare confidently for examiners&apos; questions.
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <Link href="/order-now/" style={{ padding: "12px 32px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "0.95rem" }}>Get A Free Quote</Link>
            <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, fontSize: "0.95rem" }}>Reach Our Experts</Link>
          </div>
        </div>
      </section>

      {/* Let's Talk About Your Dissertation */}
      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "24px" }}>
          Let&apos;s Talk About Your Dissertation
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "24px" }}>
          <div style={{ background: "#f0f4ff", borderRadius: "12px", padding: "28px 32px", borderLeft: "5px solid #1a2a6c" }}>
            <p style={{ color: "#444", lineHeight: 1.8 }}>
              You have been studying and writing papers for all the years of your education; When you start writing your dissertation, it feels frustrating and difficult. You do not understand what your supervisor means by this or that; you are beginning to wonder if your chosen methodology is correct.
            </p>
            <p style={{ color: "#444", lineHeight: 1.8, marginTop: "14px", marginBottom: 0 }}>
              You are trying to make your revisions and analyse your results. You are trying to make time to work on your dissertation while doing all the other things that must be done. This is why you might want to consider getting <Link href="/our-services/masters-dissertation-writing-services/dissertation-topic/" style={{ color: "#1a2a6c", fontWeight: 600 }}>professional dissertation writing assistance</Link>.
            </p>
          </div>
          <div style={{ background: "#f0f4ff", borderRadius: "12px", padding: "28px 32px", borderLeft: "5px solid #e87722" }}>
            <p style={{ color: "#444", lineHeight: 1.8 }}>
              A dissertation is serious business, and you must write it carefully and think about it thoroughly. That is why it will help you to have someone to whom you can turn in your back and who will support you and believe in you at every stage.
            </p>
            <p style={{ color: "#444", lineHeight: 1.8, marginTop: "14px", marginBottom: 0 }}>
              Master&apos;s Dissertation Services in UK universities and dissertation writing help in UAE education systems are here to give you their professional knowledge and experience.
            </p>
          </div>
        </div>
      </section>

      {/* UK Support */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "16px" }}>
            Advanced Master&apos;s Dissertation &amp; Academic Writing Support in the UK
          </h2>
          <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "14px" }}>
            UK universities are challenging to crack. Whether you study at Oxford, Leeds, or Manchester, your examiners will expect you to produce work with a higher standard than you were used to during your undergraduate studies. Our <Link href="/our-services/masters-dissertation-writing-services/full-dissertation/" style={{ color: "#1a2a6c", fontWeight: 600 }}>dissertation writing service</Link> is designed to meet these standards, providing you with original content filled with critical analysis, methodological rigour, and arguments that do not rest on a superficial level.
          </p>
          <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "28px" }}>
            When your professor tells you that your paper needs more critical analysis or that your methodology is not justified enough, it means you need to approach the task differently. The best dissertation writing services in UK will help you achieve that.
          </p>

          <div style={{ overflowX: "auto", marginBottom: "36px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.94rem", background: "#fff" }}>
              <thead>
                <tr style={{ background: "#1a2a6c", color: "#fff" }}>
                  <th style={{ padding: "12px 16px", textAlign: "left", fontFamily: "Merriweather,serif" }}>Program Type</th>
                  <th style={{ padding: "12px 16px", textAlign: "left", fontFamily: "Merriweather,serif" }}>Support We Provide</th>
                </tr>
              </thead>
              <tbody>
                {programTypes.map((p, i) => (
                  <tr key={p.type} style={{ background: i % 2 === 0 ? "#f5f7ff" : "#fff" }}>
                    <td style={{ padding: "10px 16px", color: "#1a2a6c", fontWeight: 600, borderBottom: "1px solid #e8ecf4" }}>{p.type}</td>
                    <td style={{ padding: "10px 16px", color: "#444", borderBottom: "1px solid #e8ecf4" }}>{p.support}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.15rem", color: "#1a2a6c", marginBottom: "10px" }}>
            Academic Support for Master&apos;s Dissertation Research in the UK
          </h3>
          <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "14px" }}>
            You may not be looking for someone to write your dissertation for you. Instead, you may need <strong>Master&apos;s Dissertation Support in UK</strong> from someone who asks the right questions, helps you identify what may be wrong with your paper, and encourages you to consider a different perspective that you may have overlooked.
          </p>
          <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "28px" }}>
            Our Dissertation Writing Support in UK is designed to help you strengthen your research skills and work more confidently through each stage of your dissertation. This may include support with research design, methodology, data analysis, supervisor feedback, academic structure, referencing, and final revisions. The goal is to help you understand your research and present your own work clearly and effectively.
          </p>

          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.15rem", color: "#1a2a6c", marginBottom: "10px" }}>
            Professional MBA Dissertation Support in the UK
          </h3>
          <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "14px" }}>
            A dissertation on an MBA involves a specific kind of research that simultaneously focuses on theoretical and economic topics. This is why MBA dissertation help in UK is highly demanded by students who want to achieve high grades without compromising the practical application of their research.
          </p>
          <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "20px" }}>
            MBA dissertation help in UK is available in terms of strategy, finance, marketing, operations, human resources, and organisational skills. Regardless of the topic and area of research you are interested in, be it something like &apos;Startup Disruption&apos; or &apos;Change Management&apos; – our professionals will provide you with the best quality of research following the standards of the British education system.
          </p>

          <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "10px", padding: "28px 32px", textAlign: "center" }}>
            <p style={{ fontSize: "1.05rem", fontWeight: 600, marginBottom: "18px" }}>
              Are you ready to get professional MBA dissertation help?
            </p>
            <Link href="/contact-us/" style={{ display: "inline-block", padding: "12px 32px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "0.95rem" }}>
              Start your UK dissertation today — Email your university details
            </Link>
          </div>
        </div>
      </section>

      {/* Cross-link services grid */}
      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "32px", textAlign: "center" }}>
          Our UK Dissertation Services
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: "20px" }}>
          {services.map(s => (
            <Link key={s.title} href={s.href} style={{ background: "#fff", borderRadius: "10px", padding: "24px", textDecoration: "none", boxShadow: "0 2px 8px rgba(26,42,108,0.07)", borderTop: "4px solid #1a2a6c", display: "block" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "8px" }}>{s.title}</h3>
              <p style={{ color: "#555", fontSize: "0.94rem", lineHeight: 1.7 }}>{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* UAE Support */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "16px" }}>
            Academic Dissertation Writing and Research Support in the UAE
          </h2>
          <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "14px" }}>
            UAE universities are highly diverse, which means that you can be studying in a local framework, the British system, a mix of the two, or you can be studying with international peers in your class. You could be <Link href="/blog/dissertation-writing-help-in-uae/" style={{ color: "#1a2a6c", fontWeight: 600 }}>researching regional issues</Link> or something global in nature. Whatever your case may be, you will need <strong>dissertation writing service in UAE</strong>{" "}since standard guidelines may not be enough to satisfy your institution&apos;s faculty.
          </p>
          <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "28px" }}>
            Dissertation writing help UAE is a must if you are studying in the region. We offer professional dissertation writing in UAE for students who are based in Dubai, Abu Dhabi, Sharjah and the Northern Emirates. Our experts provide writing assistance in accordance with different university guidelines and requirements, depending on the region and specific institution.
          </p>

          <div style={{ overflowX: "auto", marginBottom: "36px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.94rem", background: "#fff" }}>
              <thead>
                <tr style={{ background: "#1a2a6c", color: "#fff" }}>
                  <th style={{ padding: "12px 16px", textAlign: "left", fontFamily: "Merriweather,serif" }}>Emirate / Type</th>
                  <th style={{ padding: "12px 16px", textAlign: "left", fontFamily: "Merriweather,serif" }}>System</th>
                </tr>
              </thead>
              <tbody>
                {emirateSystems.map((e, i) => (
                  <tr key={e.emirate} style={{ background: i % 2 === 0 ? "#f5f7ff" : "#fff" }}>
                    <td style={{ padding: "10px 16px", color: "#1a2a6c", fontWeight: 600, borderBottom: "1px solid #e8ecf4" }}>{e.emirate}</td>
                    <td style={{ padding: "10px 16px", color: "#444", borderBottom: "1px solid #e8ecf4" }}>{e.system}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.15rem", color: "#1a2a6c", marginBottom: "10px" }}>
            Comprehensive Master&apos;s Dissertation Assistance for UAE Students
          </h3>
          <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "14px" }}>
            We offer our postgraduate students in the UAE assistance with their Msc, MA, MTech, and specialised master&apos;s thesis. Master&apos;s dissertation services in UAE are developed to meet the unique demands of both the practical and theoretical approaches of local institutions.
          </p>

          <div style={{ background: "#fff", borderRadius: "10px", padding: "24px 28px", marginBottom: "20px" }}>
            <p style={{ color: "#1a2a6c", fontWeight: 700, marginBottom: "14px" }}>Our Masters dissertation help in UAE includes:</p>
            <ul style={{ margin: 0, paddingLeft: "22px", color: "#444", lineHeight: 1.9 }}>
              {uaeIncludes.map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>

          <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "28px" }}>
            Therefore, instead of following a universal pattern, we will help you meet the specific expectations of your college.
          </p>

          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.15rem", color: "#1a2a6c", marginBottom: "10px" }}>
            MBA Dissertation Research in the UAE Business Environment
          </h3>
          <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "14px" }}>
            The business scenario in the UAE is highly volatile. You could be researching sustainable business models, digital strategies, regional growth opportunities, or even family business management, among others, while considering the need for global outlook along with the local dynamics. This is where an MBA <Link href="/blog/statistical-analysis-help-in-uae/" style={{ color: "#1a2a6c", fontWeight: 600 }}>dissertation services</Link> in UAE can provide support to you.
          </p>
          <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "20px" }}>
            An MBA dissertation help in UAE can enable your research to not only include the theoretical aspects but also practical ones that are relevant to the Gulf region. By availing of our services, you can be assured of showcasing a thorough understanding of both the academic and regional perspectives of your research.
          </p>

          <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "10px", padding: "28px 32px", textAlign: "center" }}>
            <p style={{ fontSize: "1.05rem", fontWeight: 600, marginBottom: "18px" }}>
              Do you wish to begin your dissertation process now with the support of experts familiar with the local business scenario in UAE?
            </p>
            <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 32px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "0.95rem" }}>Start Your UAE Dissertation</Link>
              <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, fontSize: "0.95rem" }}>Share Details of Your Research</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborative Process */}
      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "8px" }}>
          The Dissertation Development Process: A Collaborative Approach
        </h2>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "28px" }}>
          This isn&apos;t a one-time feedback session. It&apos;s a research partnership moving through distinct phases:
        </p>
        <div style={{ overflowX: "auto", marginBottom: "24px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.94rem" }}>
            <thead>
              <tr style={{ background: "#1a2a6c", color: "#fff" }}>
                <th style={{ padding: "12px 16px", textAlign: "left", fontFamily: "Merriweather,serif" }}>Phase</th>
                <th style={{ padding: "12px 16px", textAlign: "left", fontFamily: "Merriweather,serif" }}>What occurs here</th>
              </tr>
            </thead>
            <tbody>
              {processPhases.map((p, i) => (
                <tr key={p.phase} style={{ background: i % 2 === 0 ? "#f5f7ff" : "#fff" }}>
                  <td style={{ padding: "10px 16px", color: "#1a2a6c", fontWeight: 600, borderBottom: "1px solid #e8ecf4" }}>{p.phase}</td>
                  <td style={{ padding: "10px 16px", color: "#444", borderBottom: "1px solid #e8ecf4" }}>{p.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ color: "#444", lineHeight: 1.8 }}>
          Throughout this process, you&apos;re doing the thinking and writing. We&apos;re the experienced voice asking questions, catching inconsistencies, and pushing you to do better work.
        </p>
      </section>

      {/* Before / After */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "28px" }}>
            From Uncertainty to Clarity in Dissertation Research
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.94rem", background: "#fff" }}>
              <thead>
                <tr style={{ background: "#1a2a6c", color: "#fff" }}>
                  <th style={{ padding: "12px 16px", textAlign: "left", fontFamily: "Merriweather,serif" }}>Before the Support</th>
                  <th style={{ padding: "12px 16px", textAlign: "left", fontFamily: "Merriweather,serif" }}>With the Expert Advice</th>
                </tr>
              </thead>
              <tbody>
                {beforeAfter.map((b, i) => (
                  <tr key={b.before} style={{ background: i % 2 === 0 ? "#f5f7ff" : "#fff" }}>
                    <td style={{ padding: "10px 16px", color: "#444", borderBottom: "1px solid #e8ecf4" }}>{b.before}</td>
                    <td style={{ padding: "10px 16px", color: "#444", borderBottom: "1px solid #e8ecf4" }}>{b.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Student Insights */}
      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "28px" }}>
          Insights from Students on Their Research Experience
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "20px" }}>
          {studentInsights.map(s => (
            <div key={s.attribution} style={{ background: "#f5f7ff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "24px" }}>
              <p style={{ color: "#444", fontSize: "0.94rem", lineHeight: 1.75, fontStyle: "italic", marginBottom: "14px" }}>
                &ldquo;{s.quote}&rdquo;
              </p>
              <p style={{ color: "#1a2a6c", fontWeight: 600, fontSize: "0.85rem", margin: 0 }}>— {s.attribution}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Client Testimonials */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "28px", textAlign: "center" }}>
            Client Testimonials
          </h2>
          <TestimonialSlider testimonials={testimonials.map(t => ({ quote: t.quote, author: t.name, role: `${t.role} — ${t.location}` }))} />
        </div>
      </section>

      {/* FAQ */}
      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "28px" }}>
          Frequently Asked Questions
        </h2>
        <FaqAccordion faqs={faqs} />
      </section>

      {/* Contact Options */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ color: "#444", lineHeight: 1.8, maxWidth: "820px", marginBottom: "32px" }}>
            What you&apos;ll get: A real conversation about your dissertation situation, honest feedback on where you stand, and a practical plan for what comes next. No sales pitch. No pressure. Just expert guidance from someone who understands your field and your university&apos;s expectations.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "20px", marginBottom: "40px" }}>
            {contactOptions.map(c => (
              <Link key={c.title} href={c.href} style={{ background: "#fff", borderRadius: "10px", padding: "24px", textDecoration: "none", boxShadow: "0 2px 8px rgba(26,42,108,0.07)", borderTop: "4px solid #e87722", display: "block" }}>
                <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "8px" }}>{c.title}</h3>
                <p style={{ color: "#555", fontSize: "0.94rem", lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
              </Link>
            ))}
          </div>

          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", color: "#1a2a6c", marginBottom: "18px" }}>
            Contact Options
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "14px" }}>
            {contactChecklist.map(c => (
              <div key={c.title} style={{ display: "flex", gap: "10px", alignItems: "flex-start", background: "#fff", borderRadius: "8px", padding: "14px 18px" }}>
                <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>✓</span>
                <span style={{ color: "#444", fontSize: "0.92rem", lineHeight: 1.6 }}>
                  <strong style={{ color: "#1a2a6c" }}>{c.title}</strong> – {c.desc}
                </span>
              </div>
            ))}
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
          <Link href="/our-writers/" style={{ color: "#f9c74f", fontWeight: 600, fontSize: "0.95rem" }}>Meet Our Writers →</Link>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "56px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.6rem", marginBottom: "12px" }}>
          Get A Free Quote Today
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
