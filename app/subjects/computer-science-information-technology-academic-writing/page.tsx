import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "Computer Science & IT Writing Help",
  description: "Computer Science and IT academic writing help for UG, Master's and PhD students. Dissertations, coding projects and manuscripts by experts in AI, data science and software engineering.",
  alternates: { canonical: "https://www.tutorsindia.com/subjects/computer-science-information-technology-academic-writing/" },
};

const faqs = [
  {
    q: "Why should I Choose Tutors India for Computer Science and Information technology services?",
    a: `Our native academic computer science and Information technology writers are skillful and experience in different subject's fields especially in this subject it ensured to understand your project well and delivered on time. With over 400+ academic writers endeavor to submit your PhD document that meets the terminology of the academic area but also it has the native linguistic command over technical terms. Thereby, it boosts opportunities to achieve high credits in your thesis and increasing the chances of acceptance by high impact factor journal.

Our computer science and information technology writing services uniqueness includes:
• An original, fresh and 100% plagiarism free content.
• Flawless, ideal and sound information technology and computer science research paper that meets recommended formatting rules.
• Perfect and an appropriate information discovers the groundbreaking conceptualization.
• On-Time delivery with no compromise on Quality.`,
  },
  {
    q: "What kind of services do you offer?",
    a: `We offer an extensive variety of the following outstanding academic computer science and information technology supports for masters and PhD including

For Masters and PhD: Abstracts writing, journal articles and manuscripts, literature reviews, research proposal, research methodology, textual/data analysis, statistical analysis, findings, results, and conclusions, referencing, and more.

In addition, tailor-made assignment, essay and manuscript support, conference paper and textbook writing, coding and algorithm, programming, software and tool development, illustration, manuscript statistics and PhD research plan as well as editing services. We deliver a professional academic assistance to complete any research work and writing you may require.

If you need any other research writing support, please select "other" on our pricing order form and clearly outline what is required. We will call back you immediately, or you can contact UK toll-free 08081891062. Visit our contact page to see other countries contact information, so we will do our best to help you.`,
  },
  {
    q: "What are the topics covered in Computer Science and Information Technology dissertation?",
    a: `We cover the wide range of Computer Science and Information Technology dissertation topics such as software programming and algorithm, hard work and network, information system, Data security, cyber-security, Data management system, data-driven robotic sampling, social networking, Virtual-reality system, wireless multimedia networks, cross-layer architecture for wireless networks, WiMAX (Next generation wireless system) wireless sensor networks, computer-based software engineering, software metrics, measurement and testing, software process and management and much more.`,
  },
  {
    q: "If I am not satisfied with your Computer Science and Information technology writing, how do you address the issues?",
    a: `At Tutors India, our first motto offers 100% customer satisfaction, so it is a very rare event. However, we provide the guarantee of the unlimited revisions*, so you need not worry about it.`,
  },
  {
    q: "What If I need some customization in the computer science and Information technology dissertation?",
    a: `Of course, we ready to help our clients. Our information technology and computer science service are completely flexible, and tailor made to the customer. Hence, if you can provide the areas of customization related to research area initially proposed, we could make amendments to the document.`,
  },
  {
    q: "Can you show me sample work of academic Computer Science and Information technology?",
    a: `Yes, we have an uploaded some of the academic writing works samples. For more details, let talks with our academic writers.`,
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

const tools = [
  "CloudSIM", "WINPCAP", "QUALNET", "JCAP", "OpenSTACK", "PeerSIM", "SimuLink", "WEKA",
  "OpenQRM", "COBBER", "Crowbar", "SpaceWalk", "BCFG2", "CFENGINE", "CHEF", "PUPPET",
  "Ganglia", "Nagios", "GATE", "Zenoss", "Automatelt", "Knime Text Processing", "LPU",
  "Capistrano", "Orange Text", "Rundeck", "Appneta", "Rapidminer Text Extension",
  "Rapid Analytics", "PSPP", "Apache Mahout", "JHEP Work", "Rattle", "Appdynamics",
  "Aternity", "BMC Truesight Pulse", "CA Unified Infrastructure Management",
  "Compuware Gomez", "Uptime Cloud Monitor", "Zenoss Cloud Monitoring", "Logic Monitor",
  "Manageengine", "Zyrion Tranverse", "Monitis", "G-Eclipse", "Rackspace Cloud Monitoring",
  "Globus Toolkit", "Splunkstrom", "Gridport", "GridSIM",
  "NAG High Performance Computing Libraries", "NETsolve / Gridsolve", "Oracle Grid Engine", "NETSIM",
];

export default function ComputerScienceITWritingPage() {
  return (
    <main style={{ color: "#222" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #1a2a6c 0%, #2d3a5e 100%)", color: "#fff", padding: "60px 20px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", gap: 40, flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 280 }}>
            <p style={{ color: "#f90", fontWeight: 700, marginBottom: 8, fontSize: 14, textTransform: "uppercase", letterSpacing: 1 }}>PhD, Master&apos;s &amp; Authors / Publishers</p>
            <h1 style={{ fontFamily: "Merriweather, serif", fontSize: "clamp(1.6rem,4vw,2.6rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: 20 }}>
              Computer Science &amp; Information Technology– Academic Writing
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 28, opacity: 0.9 }}>
              The US &amp; UK writers at Tutors India aim at inculcating knowledge within students and build a great confidence to submit their Computer Science &amp; IT related research paper writing successfully.
            </p>
            <Link href="/order" style={{ background: "#f90", color: "#fff", padding: "13px 30px", borderRadius: 6, fontWeight: 700, textDecoration: "none", display: "inline-block" }}>
              Order Now
            </Link>
          </div>
          <div style={{ flex: "0 0 auto" }}>
            <Image src="/wp-content/uploads/2024/08/Report-Writing-service.webp" alt="Computer Science IT Writing" width={340} height={260} style={{ borderRadius: 10, maxWidth: "100%" }} />
          </div>
        </div>
      </section>

      {/* Main intro */}
      <section style={{ background: "#f8f9fb", padding: "50px 20px 30px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Merriweather, serif", fontSize: "clamp(1.2rem,3vw,1.8rem)", fontWeight: 800, marginBottom: 20, color: "#1a2a6c" }}>
            Computer Science &amp; Information Technology Writing from qualified Expert
          </h2>
          <p style={{ maxWidth: 900, margin: "0 auto", fontSize: 15, lineHeight: 1.9, color: "#444" }}>
            The Computer science engineering program aims to broaden their knowledge in cutting edge computing areas through learning from the well-articulated advanced compulsory and optional modules. Further, the master degree of computer engineering covers both hardware and software elements of the computing systems and other relative topics. Students are vital to finishing manuscript preparation, dissertation/thesis, and assignment writing to obtain higher credit score to complete computer science successfully. It firmly states that dissertation &amp; assignment writing as important to get score 80% in PhD and 60% in master degree. Presently, PhD and Master&apos;s degree students from the UK, USA, Australia, New Zealand, etc. are struggling completely while undertaking an assessment and dissertation preparation. It is an essential to hire the professional who are having fruitful years of experience supporting all computer science engineering writing works to finish degrees and score high credits. We are providing an exclusive undergraduate study, post-graduate study, and PhD program complete assistance for manuscript preparation, editing and proofreading, computer science dissertation and thesis analysis.
          </p>
        </div>
      </section>

      {/* Quality Cards */}
      <section style={{ padding: "40px 20px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather, serif", textAlign: "center", fontSize: "clamp(1.1rem,2.5vw,1.5rem)", fontWeight: 700, marginBottom: 30, color: "#1a2a6c" }}>
            Industry Expert &amp; Technical Writers at Tutors India assures you the quality
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 24 }}>
            {[
              { img: "/wp-content/uploads/2024/08/Report-Writing-service.webp", title: "Your Computer Science & IT Writing", text: "Get the ideal and flawless Computer Science & IT writing samples from our Subject-Matter expertise." },
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

      {/* About */}
      <section style={{ padding: "50px 20px", background: "#f8f9fb" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#555", marginBottom: 20 }}>
            Computer science and information technology dissertations sit at the intersection of theoretical rigour and applied problem-solving. Whether you are developing a novel algorithm, evaluating a machine-learning model, conducting a systematic literature review of cybersecurity frameworks, or building a distributed system, your work must meet the standards of peer-reviewed venues indexed in IEEE Xplore and the ACM Digital Library. Our writers are proficient in both LaTeX and MS Word thesis templates, and cover the full stack — from formal methods and software architecture to data engineering, cloud computing, and AI/ML research — with IEEE citation format applied throughout.
          </p>
          <h3 style={{ fontFamily: "Merriweather, serif", fontWeight: 700, color: "#1a2a6c", marginBottom: 10 }}>We use subject-specific language, exemplary presentation that demonstrates clear, logical, imaginative, creative &amp; Original</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#555", marginBottom: 24 }}>
            We demonstrate advances the state of the art, literature survey, uses new or advanced techniques, has elements of theory, &amp; experiment.
          </p>
          <h3 style={{ fontFamily: "Merriweather, serif", fontWeight: 700, color: "#1a2a6c", marginBottom: 10 }}>Our writing standard are at an exemplary standard showing creativity &amp; innovation &amp; ensures link between theory &amp; practice</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#555" }}>
            We deliver the document in MS Word or LaTeX Thesis Template. The US &amp; UK writers at Tutors India aim at inculcating knowledge within students and build a great confidence to submit their dissertation successfully.
          </p>
        </div>
      </section>

      {/* Why Tutors India */}
      <section style={{ background: "#e8eaf0", padding: "40px 20px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather, serif", fontWeight: 800, color: "#1a2a6c", marginBottom: 16, fontSize: "clamp(1.1rem,2.5vw,1.4rem)" }}>
            Why Tutors India for Computer Science &amp; Information Technology writing and editing services?
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#444" }}>
            The US &amp; UK writers at Tutors India aim at inculcating knowledge within students and build a great confidence to submit their dissertation successfully – We deliver the document in MS Word or LaTeX Thesis Template.
          </p>
        </div>
      </section>

      {/* Feature Cards */}
      <section style={{ padding: "50px 20px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather, serif", textAlign: "center", fontWeight: 800, color: "#1a2a6c", fontSize: "clamp(1.1rem,2.5vw,1.5rem)", marginBottom: 30 }}>
            Computer Science &amp; IT Dissertation Writing Service features that helps to get the grade
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 24 }}>
            <div style={{ border: "1px solid #e0e4ee", borderRadius: 10, padding: 28 }}>
              <h3 style={{ fontFamily: "Merriweather, serif", fontWeight: 700, color: "#1a2a6c", marginBottom: 12 }}>Requirement &amp; Analysis</h3>
              <p style={{ fontSize: 14, color: "#555", lineHeight: 1.7 }}>
                In general methodology chapter included analytical works, computer simulation and experimental works. We help you to describe the method used to carry out your dissertation including application advanced mathematics and formulation or computer simulation using software including computational fluid dynamics, finite element analysis.
              </p>
            </div>
            <div style={{ border: "1px solid #e0e4ee", borderRadius: 10, padding: 28 }}>
              <h3 style={{ fontFamily: "Merriweather, serif", fontWeight: 700, color: "#1a2a6c", marginBottom: 12 }}>Your Choice of Design &amp; Implementation Testing</h3>
              <p style={{ fontSize: 14, color: "#555", lineHeight: 1.7 }}>
                We help to write the experimental work to describe how results were obtained including the approach, facilities, validations, range of measurements, the computer simulation, and the sufficient detail on the proposed theory or a descriptive model to clearly understand the physical assumption related with a theory or model (analytical). We justify the chosen approach and apply suitable diagram-techniques (e.g. UML other drawings), where appropriate will be added. We also illustrate the novel aspects to algorithm, and while testing follow the scheme presented in the analysis chapter with suitable model (machine based, category partition), and apply both user acceptance and functional test.
              </p>
            </div>
            <div style={{ border: "1px solid #e0e4ee", borderRadius: 10, padding: 28 }}>
              <h3 style={{ fontFamily: "Merriweather, serif", fontWeight: 700, color: "#1a2a6c", marginBottom: 12 }}>Sources, Citation and Presentation</h3>
              <p style={{ fontSize: 14, color: "#555", lineHeight: 1.7 }}>
                We help you identify an impressive range of primary and secondary resources, in compliance with the Computer Science Style Guide (e.g. IEEE Referencing Style Guide) including the Harvard Scheme, Vancouver Referencing Style Guide, Patrias K, Citing Medicine: the NLM Style guide, and EndNote Guide etc. Our formatting and referencing team are aware of citations that includes books, reported cases (Australia / UK), published &amp; unpublished papers, government &amp; private publications, discussion papers/reports, citing newspaper/magazines, press releases, world wide web sites.
              </p>
            </div>
            <div style={{ border: "1px solid #e0e4ee", borderRadius: 10, padding: 28 }}>
              <h3 style={{ fontFamily: "Merriweather, serif", fontWeight: 700, color: "#1a2a6c", marginBottom: 12 }}>Free while you order dissertation</h3>
              <ul style={{ fontSize: 14, color: "#555", lineHeight: 2, paddingLeft: 18 }}>
                {["Appendices", "Abstract", "Title Page", "Copyright Page", "Table of Content", "Lists of Charts, graphs, Illustrations", "Formatting", "Frequently asked questions", "Personal statement for your research proposal", "Bibliography"].map(item => (
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
              <h3 style={{ fontFamily: "Merriweather, serif", fontWeight: 700, color: "#f90", marginBottom: 14 }}>Computer Science &amp; IT – Writing &amp; Editing Features</h3>
              <p style={{ fontSize: 14, lineHeight: 1.8, opacity: 0.9 }}>
                We help you to submit a plan of the dissertation (proposed structure / main argument), progress, and a sample of writing to their supervisor according to the style of reference – Draft would demonstrate evidence of imagination, creativity, critical insights and analytical rigor. Chapter structure: Ch.1 Introduction, Ch.2 Literature Review, Ch.3 Requirement &amp; Analysis, Ch.4 Design, Ch.5 Implementation &amp; Testing, Ch.6 Results and Discussion, Ch.7 Conclusion.
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: "Merriweather, serif", fontWeight: 700, color: "#f90", marginBottom: 14 }}>Writing Style &amp; Argument</h3>
              <p style={{ fontSize: 14, lineHeight: 1.8, opacity: 0.9 }}>
                We follow styles rules including quotations (short and long quotes, edited quotes, errors or discriminatory terms in quoted passages), ellipsis, interpolations, abbreviations, dates, times, numbers, fractions and decimals, and footnotes. We write your dissertation in the manner which is argumentative, ie., the logical and coherent construction substantiated by relevant primary and secondary sources. Further our Computer Science &amp; IT writers has capability to write your dissertation in complete, concise and clear (e.g. distinguish original data and ideas from other people). We follow EASE guidelines and screen the article in different software including Viper, iThenticate, cross check, eTBLAST, SafeAssign, WCopyFind, checkforplagiarism and grammarly.
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: "Merriweather, serif", fontWeight: 700, color: "#f90", marginBottom: 14 }}>Tools &amp; Technology Capabilities</h3>
              <p style={{ fontSize: 14, lineHeight: 1.8, opacity: 0.9 }}>
                We use wide range of tools and technologies in CloudSIM, WINPCAP, QUALNET, JCAP, OpenSTACK, PeerSIM, SimuLink, WEKA, OpenQRM, COBBER, Crowbar, SpaceWalk, BCFG2, CFENGINE, CHEF, PUPPET, Ganglia, Nagios, GATE, Zenoss, Automatelt, Knime Text Processing, LPU, Capistrano, Orange Text, Rundeck, Appneta, Rapidminer Text Extension, Rapid Analytics, PSPP, Apache Mahout, Rattle, Appdynamics, Aternity, BMC Truesight Pulse, CA Unified Infrastructure Management, Logic Monitor, Manageengine, Zyrion Tranverse, Monitis, G-Eclipse, Rackspace Cloud Monitoring, Globus Toolkit, GridSIM, Oracle Grid Engine, NETSIM and many more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools tags */}
      <section style={{ padding: "50px 20px", background: "#f8f9fb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather, serif", fontWeight: 800, color: "#1a2a6c", marginBottom: 10, fontSize: "clamp(1.1rem,2.5vw,1.4rem)" }}>Tools &amp; Technologies We Use</h2>
          <p style={{ color: "#555", marginBottom: 24, fontSize: 14 }}>
            Our CS &amp; IT writers are proficient in a wide range of simulators, platforms and frameworks used across software engineering, networking, data science and systems research.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {tools.map(t => (
              <span key={t} style={{ background: "#1a2a6c", color: "#fff", padding: "6px 14px", borderRadius: 20, fontSize: 13, fontWeight: 500 }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: "60px 20px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather, serif", textAlign: "center", fontWeight: 800, color: "#1a2a6c", marginBottom: 40, fontSize: "clamp(1.2rem,3vw,1.8rem)" }}>
            What Our Computer Science &amp; IT Students Say
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
        <Link href="/order" style={{ background: "#1a2a6c", color: "#fff", padding: "14px 36px", borderRadius: 6, fontWeight: 700, textDecoration: "none", display: "inline-block" }}>
          Order Now
        </Link>
      </section>
    </main>
  );
}
