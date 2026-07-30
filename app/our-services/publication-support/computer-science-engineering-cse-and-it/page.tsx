import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "Computer Science Dissertation Writing Service | IT Thesis Writing Help UK",
  description: "Computer Science & Information Technology Dissertation writing Help. We deliver exceptional work where your dissertation will deserve for publication.",
  keywords: "Journal of Computer Science and Technology ,Get Engineering Dissertation publication support",
  alternates: { canonical: "https://www.tutorsindia.com/our-services/publication-support/computer-science-engineering-cse-and-it/" },
};

const faqs = [
  {
    q: "Am I guaranteed of 100% Plagiarism Free Computer science/IT Papers?",
    a: "Yes, Tutors india has strict policies on checking the plagiarism errors. All the writers are a senior academician who follows professional ethics to the utmost level so your Computer science/IT Papers writing are high quality. In additional, the writing department is equipped with advanced anti plagiarism software Like Turnitin to eliminate the plagiarism.",
  },
  {
    q: "Can Customers Get Direct Contact With The Writers?",
    a: "Tutors india encourages transparent communication between writers and clients. Our customer support team help you to communicate the directly or pass their message to the writers directly and the vice versa.",
  },
  {
    q: "What Formatting Styles Does Your Tutors India Employ?",
    a: "At Tutors India, we have adopted the some of the standard formatting and structuring styles. In additional, we have the expertise that have an experience in writing the various formatting styles like Vancouver, MLA, APA, Chicago, Harvard, and Turabia and more university specific styles.",
  },
  {
    q: "Can you guarantee that my computer science/it paper is unique?",
    a: "Yes, all our customized computer science/IT paper is unique. Once the task is completed, we provide you to offer a detailed plagiarism scan report to confirm your paper's uniqueness. The plagiarism report is created by the external provider Turnitin ,accepted by many colleges and universities.",
  },
  {
    q: "Can you show me sample papers?",
    a: "We have some of the sample computer science and IT papers written by our experts so welcome to view our sample works at Tutors india.",
  },
  {
    q: "Can you promise me a particular grade in engineering and technology?",
    a: "In general, the grading of academic papers is influenced by external factors over which we do not have direct control. What we can promise that, the engineering and technology is written completely with the highest academic standards and it meets your expectations by our experts. This is guaranteed by our QCR (Quality checklist Report) assurance.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const testimonials = [
  { quote: "Till now they have completed more than 5000 Ph.D. Thesis reports. Their expertise in CS and IT dissertation writing is unmatched.", author: "PhD Student", location: "UK" },
  { quote: "My computer science dissertation was completed with the highest academic standards. Highly recommended.", author: "Research Scholar", location: "Australia" },
  { quote: "Excellent support for programming, simulation and manuscript writing. Very professional team.", author: "IT Researcher", location: "USA" },
];

export default function CSEITPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
              <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}
              <Link href="/our-services/publication-support/" style={{ color: "#a0b8e0" }}>Publication Support</Link>{" / "}
              <span style={{ color: "#fff" }}>CS &amp; IT Dissertation</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.3rem,2.8vw,1.9rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              Computer Science (CS) &amp; Information Technology (IT) Dissertation &amp; Manuscript Writing, Experimental, Designing or Programming &amp; Editing Services Help
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Let Tutors India help with your Information Technology and Computer Science Thesis Dissertation. Expert CS &amp; IT dissertation, manuscript writing, experimental, designing or programming &amp; editing services by qualified researchers from the US &amp; UK.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "20px" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/samples/publication-research.jpg" alt="CS IT Dissertation Services" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>5000+ PhD Theses<br />2000+ Experts<br />US &amp; UK Researchers</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      {/* Right Place */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Then You&apos;ve Certainly Reached the Right place</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          Computer Science has been defined in many ways but in general, it&apos;s related to computers, and the systematic study of the algorithmic process (including theory, analysis, design, efficiency, implementation, and application). Computer Science (CS), is different from Mathematics, Physics, and similar classic sciences, but draws its foundation from a wide variety of discipline including computer engineering, software engineering, and information system.
        </p>
      </section>

      {/* Qualified Researchers */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Your computer science dissertation is written by the qualified and experienced researchers from the US &amp; UK</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            Our team will answer six important questions while writing the research paper, or dissertation including what is the problem (new or known problem), what has been done by others to solve this problem, what is missing, what have been planned to do and what would be the expected outcome.
          </p>
        </div>
      </section>

      {/* Different Methodologies */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our team of expertise is aware of different methodologies adopted in computing Science</h2>
        <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "24px" }}>
          Tutors India expertise handles any kind of computer science methodology. Our team is familiar with all major research methodologies used in computing science.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
          {[
            { title: "Formal methodology", desc: "Theoretical computer science (conceptualization, modeling, analysis, data models, levels of abstractions, objects and operations – iteration, recursion & induction)" },
            { title: "Experimental methodology", desc: "Theory testing & exploration" },
            { title: "Build methodology", desc: "Building or designing the software system, programming language, testing" },
            { title: "Process methodology", desc: "Design or construction of software system and evaluation of human-computer interaction and understanding cognitive processes" },
            { title: "Model methodology", desc: "Reflecting real world scenario in a simplified model" },
            { title: "Simulation methodology", desc: "Computer simulation (investigation beyond current experimental capabilities)" },
          ].map((m) => (
            <div key={m.title} style={{ background: "#f5f6fa", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px" }}>
              <div style={{ fontWeight: 700, color: "#1a2a6c", marginBottom: "8px", fontSize: "0.92rem" }}>
                <span style={{ color: "#e87722", marginRight: "6px" }}>▶</span>{m.title}
              </div>
              <div style={{ fontSize: "0.82rem", color: "#555", lineHeight: 1.6 }}>{m.desc}</div>
            </div>
          ))}
        </div>
        <style>{`@media(max-width:768px){.three-col-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* Tutors India Difference */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Tutors India Difference in Computer Science and Information Technology Dissertation</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            Till now we have completed more than 5000 Ph.D.&apos;s Thesis report and also supported for publication. Our experience and expertise in computer science and IT dissertation writing sets us apart.
          </p>
        </div>
      </section>

      {/* Handles Any Methodology */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Tutors India Expertise handles any kind of computer science methodology</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          We deliver stunning, and university accepted quality. Our experts handle the full spectrum of CS methodologies from formal theory to simulation and experimental design.
        </p>
      </section>

      {/* Simply Easy */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Computer Science &amp; Information Technology Research Writing Services Are Simply easy &amp; Straightforward</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            Reply within 30 minutes of order placement. Just send us your topic and requirements and our expert researchers will take care of the rest.
          </p>
        </div>
      </section>

      {/* Service Tiers */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "24px" }}>What Services do we offer under computer science &amp; information technology dissertation &amp; manuscript writing services?</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "22px" }} className="three-col-grid">
          {[
            {
              tier: "Basic",
              items: [
                "3 Topics (Topic Selection based on area of interest)",
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
              tier: "Advanced",
              items: [
                "1 topic",
                "1000 words",
                "Objectives",
                "Literature Review",
                "Research Gap",
                "Expected Contribution",
                "Research Methodology",
                "Data Analysis Guidelines",
                "References Lists",
                "Bibliography",
              ],
            },
            {
              tier: "Extended",
              items: [
                "1 topic",
                "Objectives",
                "Literature Review",
                "Research Gap",
                "Expected Contribution",
                "Research Methodology",
                "Data Analysis Guidelines",
                "References Lists",
                "Bibliography",
              ],
            },
          ].map((t) => (
            <div key={t.tier} style={{ background: t.tier === "Advanced" ? "#1a2a6c" : "#fff", color: t.tier === "Advanced" ? "#fff" : "#333", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 800, color: t.tier === "Advanced" ? "#f9c74f" : "#e87722", marginBottom: "16px" }}>{t.tier}</div>
              {t.items.map((item) => (
                <div key={item} style={{ display: "flex", gap: "8px", padding: "5px 0", borderBottom: t.tier === "Advanced" ? "1px solid rgba(255,255,255,0.1)" : "1px solid #eef0f7", fontSize: "0.85rem", color: t.tier === "Advanced" ? "#c5d5f0" : "#555" }}>
                  <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Subject Matter Expertise */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px" }}>Specialized Subject Matter Expertise across the globe</h2>
          <div style={{ marginBottom: "20px" }}>
            <div style={{ fontWeight: 700, color: "#1a2a6c", marginBottom: "10px", fontSize: "0.95rem" }}>Computer Science &amp; IT Core Areas:</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {[
                "Discrete structures","Programming fundamentals","Algorithm and complexity","Programming languages",
                "Architectures and organization","Operating systems","Net-centric computing","Human computer interaction",
                "Graphical and visual computing","Intelligent systems","Information management","Software engineering",
                "Social and professional issues","Computational science and numerical methods",
              ].map((s) => (
                <span key={s} style={{ background: "#fff", border: "1px solid #c5d5f0", borderRadius: "20px", padding: "5px 14px", fontSize: "0.82rem", color: "#1a2a6c", fontWeight: 600 }}>{s}</span>
              ))}
            </div>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <div style={{ fontWeight: 700, color: "#1a2a6c", marginBottom: "10px", fontSize: "0.95rem" }}>Specialized Research Areas:</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {[
                "Advanced interfaces (ambient intelligence, markerless 3D hand tracking)",
                "Advanced processor technologies (Big Data, Dynamic FPGA, Graph theory, HPC Interconnects, Mesh network)",
                "Bio-Health informatics (Clinical text mining, DNA sequence)",
                "Formal methods (Automated reasoning, Linear/nonlinear constraints)",
                "Imaging Science","Machine learning and optimization","Nanoengineering","Software systems","Text mining",
              ].map((s) => (
                <span key={s} style={{ background: "#fff", border: "1px solid #c5d5f0", borderRadius: "20px", padding: "5px 14px", fontSize: "0.82rem", color: "#1a2a6c", fontWeight: 600 }}>{s}</span>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 700, color: "#1a2a6c", marginBottom: "10px", fontSize: "0.95rem" }}>Broader Subject Coverage:</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {[
                "Arts & Humanities","Biological Sciences","Business & Management Studies","Engineering & Technology",
                "Natural Sciences & Mathematics","Economics & Administration","Law","Medicine & Health",
                "Education & Training","Agriculture & Forestry","Hospitality, Leisure & Sports",
              ].map((s) => (
                <span key={s} style={{ background: "#fff", border: "1px solid #c5d5f0", borderRadius: "20px", padding: "5px 14px", fontSize: "0.82rem", color: "#1a2a6c", fontWeight: 600 }}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our deliverables while you order computer science &amp; information technology dissertation &amp; manuscript writing services</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          We deliver stunning, and university accepted quality. Our dissertation work is fully referenced with latest articles and textbooks. We refer only peer-reviewed sources such as scholarly articles and textbook to select the topic. We refer database including Web of Science, ProQuest, Google Scholar, Business Source Complete.
        </p>
      </section>

      {/* How Does it Work */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: "32px", textAlign: "center" }}>How Does computer science &amp; information technology dissertation &amp; manuscript writing services work?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "22px" }} className="three-col-grid">
            {[
              { step: "01", title: "Order Confirmation", desc: "Order confirmation triggers special team allocation to scrutinize work requirements." },
              { step: "02", title: "Initial Queries & Outline", desc: "Clarification queries posed during initial stage. Outline and manuscript analysis plan provided for approval." },
              { step: "03", title: "Client Approval", desc: "Outline along with analysis plan is approved by client." },
              { step: "04", title: "Draft Delivery", desc: "Draft work dispatched with progress updates provided." },
              { step: "05", title: "Coordination & Data", desc: "Exclusive coordinators contact regarding clarifications. Primary data collection available (additional fee for proof of evidence). Excel data sheets pasted in appendix. Payment installment options available; work starts upon payment." },
              { step: "06", title: "Final Delivery", desc: "Final delivery per agreed schedule or earlier. Minor changes within 24 working hours; significant changes within 48 working hours. Delays can be reported to customersupport@tutorsindia.com." },
            ].map((s) => (
              <div key={s.step} style={{ background: "rgba(255,255,255,0.07)", borderRadius: "10px", padding: "22px" }}>
                <div style={{ fontSize: "2rem", fontWeight: 800, color: "#f9c74f", marginBottom: "8px" }}>{s.step}</div>
                <div style={{ fontWeight: 700, marginBottom: "8px", fontSize: "0.95rem" }}>{s.title}</div>
                <div style={{ fontSize: "0.83rem", color: "#a0b8e0", lineHeight: 1.7 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px" }}>Computer science &amp; Information technology dissertation &amp; manuscript writing services features</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "16px" }} className="four-col-grid">
          {["Qualified researchers","Unlimited revision","Only peer-reviewed articles","Plagiarism report","24/7 support","100% match with the requirement","On time delivery","Subject specific writers"].map((f) => (
            <div key={f} style={{ background: "#f5f6fa", border: "1px solid #dde2ef", borderRadius: "8px", padding: "16px", textAlign: "center", fontSize: "0.85rem", color: "#1a2a6c", fontWeight: 600 }}>
              <span style={{ display: "block", fontSize: "1.4rem", color: "#e87722", marginBottom: "6px" }}>★</span>
              {f}
            </div>
          ))}
        </div>
        <style>{`@media(max-width:768px){.four-col-grid{grid-template-columns:1fr 1fr!important;}}`}</style>
      </section>

      {/* Computing Services */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px" }}>Computing Services – Dissertation &amp; manuscript writing</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "20px" }}>
            Our experts are proficient with a wide range of computing tools and software platforms:
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {[
              "CloudSim","Simulink","OpenStack","Winpcap","Qualnet","WMIC","JCAP","WEKA","OpenQRM","PeerSIM",
              "Cobber","Crowbar","Spacewalk","BCFG2","CFENGINE","CHEF","PUPPET","Ganglia","Zabbix","Nagios",
              "GATE","Zenoss","Knime Text Processing","Automatelt","LPU","Orange Text","Capistrano","Rundeck",
              "Appneta","Rapidminer text extension and rapid analytics","PSPP","APACHE MAHOUT","JHEPWORK",
              "NETSIM","PHP","MySQL","JAVA","Jquery","MVC",
            ].map((s) => (
              <span key={s} style={{ background: "#1a2a6c", color: "#f9c74f", borderRadius: "6px", padding: "5px 12px", fontSize: "0.82rem", fontWeight: 700 }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Structure of Dissertation */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px" }}>Structure of the dissertation – Varies according to the discipline</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px" }} className="two-col-grid">
          <div>
            <div style={{ fontWeight: 700, color: "#1a2a6c", marginBottom: "12px", fontSize: "0.95rem" }}>Type I – User-Centered Design &amp; Evaluation (HCI):</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {["Requirement analysis","Survey of previous approaches","System specification","Implementation and testing","Evaluation with users"].map((item) => (
                <div key={item} style={{ background: "#f5f6fa", border: "1px solid #dde2ef", borderRadius: "8px", padding: "10px 14px", fontSize: "0.85rem", color: "#555" }}>
                  <span style={{ color: "#e87722", marginRight: "6px", fontWeight: 700 }}>✓</span>{item}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 700, color: "#1a2a6c", marginBottom: "12px", fontSize: "0.95rem" }}>Type II – Empirical Investigation (HCI):</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {["Review of previous studies","Design systematic empirical investigation","Focus on particular aspect","Conduct empirical investigation on users","Detailed analysis and interpretation of findings"].map((item) => (
                <div key={item} style={{ background: "#f5f6fa", border: "1px solid #dde2ef", borderRadius: "8px", padding: "10px 14px", fontSize: "0.85rem", color: "#555" }}>
                  <span style={{ color: "#e87722", marginRight: "6px", fontWeight: 700 }}>✓</span>{item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ marginTop: "24px" }}>
          <div style={{ fontWeight: 700, color: "#1a2a6c", marginBottom: "12px", fontSize: "0.95rem" }}>General Structure Components:</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {["Title","Abstract","Acknowledgment","Table of contents","Introduction","Background","Design of study","System requirements","Design","User perspective","Testing","Evaluation of systems","Discussion","Conclusion","References","Appendices"].map((s) => (
              <span key={s} style={{ background: "#f0f4ff", border: "1px solid #c5d5f0", borderRadius: "20px", padding: "5px 14px", fontSize: "0.82rem", color: "#1a2a6c", fontWeight: 600 }}>{s}</span>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.two-col-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* Dissertation Writing Steps */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: "32px", textAlign: "center" }}>Dissertation Writing Steps</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: "16px" }} className="five-col-grid">
            {[
              { num: "01", title: "Identification of topic" },
              { num: "02", title: "Literature review" },
              { num: "03", title: "Problem statement" },
              { num: "04", title: "Research questions and hypothesis development" },
              { num: "05", title: "Experiment, simulation, software design" },
              { num: "06", title: "Results preparation (data analysis, entry, screening, interpretation)" },
              { num: "07", title: "Data analysis" },
              { num: "08", title: "Discussion" },
              { num: "09", title: "Recommendations" },
              { num: "10", title: "Conclusion" },
            ].map((s) => (
              <div key={s.num} style={{ background: "rgba(255,255,255,0.07)", borderRadius: "10px", padding: "18px", textAlign: "center" }}>
                <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#f9c74f", marginBottom: "8px" }}>{s.num}</div>
                <div style={{ fontSize: "0.82rem", color: "#c5d5f0", lineHeight: 1.5 }}>{s.title}</div>
              </div>
            ))}
          </div>
          <style>{`@media(max-width:768px){.five-col-grid{grid-template-columns:1fr 1fr!important;}}`}</style>
        </div>
      </section>

      {/* Convince Committee */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Computer science &amp; Information technology dissertation &amp; manuscript writing need to convince the supervisory committee</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          Our team will answer six important questions while writing the research paper, or dissertation including what is the problem (new or known problem), what has been done by others to solve this problem, what is missing, what have been planned to do and what would be the expected outcome.
        </p>
      </section>

      {/* What We Deliver */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>What we deliver while you order for computer science &amp; Information technology dissertation &amp; manuscript writing</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            We deliver stunning, and university accepted quality. Our dissertation work is fully referenced with latest articles and textbooks. We offer 100% confidentiality of client&apos;s personal details, payment details, project works, and copyrights of research works.
          </p>
        </div>
      </section>

      {/* Exclusive */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Computer science &amp; Information technology dissertation &amp; manuscript writing Service is exclusive</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          We do not just provide writing service, but rather clear explanation and justification for the choice. Our Quality Assurance Report (QCR) guarantees that the engineering and technology paper is written completely with the highest academic standards and meets your expectations.
        </p>
      </section>

      {/* Why Choose */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: "24px", textAlign: "center" }}>Why Choose Tutors India: Computer science &amp; Information technology dissertation &amp; manuscript writing Service features</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "16px" }} className="four-col-grid">
            {[
              { icon: "🎓", title: "Qualified researchers from US & UK", desc: "Expert writers with international university degrees." },
              { icon: "♾️", title: "Unlimited revisions", desc: "Revisions until you are 100% satisfied." },
              { icon: "📚", title: "Peer-reviewed sources only", desc: "All references from peer-reviewed journals." },
              { icon: "📋", title: "Plagiarism reports", desc: "Turnitin plagiarism reports provided with every order." },
              { icon: "🕐", title: "24/7 support", desc: "Round-the-clock support via email and CRM." },
              { icon: "✅", title: "100% requirement matching", desc: "Work tailored to your exact specifications." },
              { icon: "⏰", title: "On time delivery", desc: "Delivered on or before the agreed deadline." },
              { icon: "💻", title: "Subject specific writers", desc: "Only writers with relevant CS/IT domain expertise assigned." },
            ].map((g) => (
              <div key={g.title} style={{ background: "rgba(255,255,255,0.07)", borderRadius: "10px", padding: "20px" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{g.icon}</div>
                <div style={{ fontWeight: 700, fontSize: "0.94rem", marginBottom: "6px" }}>{g.title}</div>
                <div style={{ fontSize: "0.78rem", color: "#a0b8e0", lineHeight: 1.6 }}>{g.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Confidentiality + References */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px" }} className="two-col-grid">
          <div style={{ background: "#f5f6fa", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px" }}>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.15rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>A complete secure &amp; Confidential Service</h2>
            <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.96rem" }}>
              We offer 100% confidentiality of client&apos;s personal details, payment details, project works, and copyrights of research works. Documents accessed only by writers with NDA agreements. Financial information protected by 128-bit SSL encryption.
            </p>
          </div>
          <div style={{ background: "#f5f6fa", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px" }}>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.15rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Fully Referenced</h2>
            <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.96rem" }}>
              Our dissertation work is fully referenced with latest articles and textbooks. We refer only peer-reviewed sources such as scholarly articles and textbook to select the topic. We refer database including Web of Science, ProQuest, Google Scholar, Business Source Complete.
            </p>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "32px", textAlign: "center" }}>Our Guarantees</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "18px" }} className="four-col-grid">
            {[
              { icon: "♾️", title: "Unlimited Revision", desc: "Unlimited revision for the work being committed." },
              { icon: "⏰", title: "On-Time Delivery", desc: "We ensure on-time delivery." },
              { icon: "🕐", title: "Support 24/7", desc: "We support 24/7." },
              { icon: "📄", title: "Word Count Committed", desc: "Our word count committed does not include references and bibliography." },
              { icon: "✅", title: "Three-Level Quality Check", desc: "Technical QC, Editor QC and final check against the requirement." },
              { icon: "🔒", title: "Confidentiality", desc: "Confidentiality of the information." },
              { icon: "📋", title: "Plagiarism Free", desc: "Plagiarism free work – less than 5% percent." },
              { icon: "🎓", title: "Experienced Writers", desc: "Only experienced and subject specific writers will be allotted." },
            ].map((g) => (
              <div key={g.title} style={{ background: "#fff", border: "1px solid #c5d5f0", borderRadius: "10px", padding: "20px", textAlign: "center" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{g.icon}</div>
                <div style={{ fontWeight: 700, color: "#1a2a6c", marginBottom: "6px", fontSize: "0.94rem" }}>{g.title}</div>
                <div style={{ fontSize: "0.78rem", color: "#555", lineHeight: 1.6 }}>{g.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plagiarism / On Time / Experienced Writers */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "22px" }} className="three-col-grid">
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Plagiarism Free Work</h3>
            <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.7 }}>
              Yes, Tutors India has strict policies on checking the plagiarism errors. All the writers are senior academicians who follow professional ethics to the utmost level. The writing department is equipped with advanced anti plagiarism software like Turnitin to eliminate plagiarism.
            </p>
          </div>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>On Time</h3>
            <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.7 }}>
              Our work is delivered at a specified date and time. Minor changes within 24 working hours; significant changes within 48 working hours. All emails acknowledged within 30 minutes of working hours.
            </p>
          </div>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Experienced Writers</h3>
            <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.7 }}>
              Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities from India, the US, and the UK.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px" }}>Frequently Asked Questions</h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* Global Team */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Your statistics is carried out by your choice of specialized expertise</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          We have a team of 2000+ expertise across the subjects &amp; countries (including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine).
        </p>
      </section>

      {/* Testimonials */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "24px", textAlign: "center" }}>Voice of Our customer</h2>
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Order Now</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>Reply in 30 Minutes · US &amp; UK Researchers · Plagiarism Free · Unlimited Revisions</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
