import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "Big Data Analytics Services for Academic & Research Projects | Tutors India",
  description: "Expert big data analytics support for academic dissertations and research projects. Hadoop, Spark, MongoDB, MapReduce, Apache Hive, Deep Learning & more. US & UK experts.",
};

const faqs = [
  {
    q: "What do I need to provide For the Initial statistical programming consultation? Why?",
    a: "Tutors India experts will ask you to provide information of your research study during initial consultation or you send the information through our customized CRM (Login Credential given) or email Id. Without your research study, it is very difficult for the statisticians to make decisions on the statistical analyses.",
  },
  {
    q: "What are the statistical software tools used by Tutors India Statisticians?",
    a: "Our well-experienced statisticians are capable of using SPSS, STATA, SAS, R, E-views and many more.",
  },
  {
    q: "Are you familiar with statistical programming?",
    a: "Since 2011, Tutors India is the trusted mentors for the master's student in offering various Dissertations writing support. At Tutors India, we assist both statistics and biostatistics. Statistical data analysis is the most important step in any Dissertation or thesis. We are excellent in offering the data compiling and recoding, statistical data analysis help and interpretation of statistical output. In additional, we offer the Presentation of tables master's statistical data analysis as well as figures, Quality analysis help and many more.",
  },
  {
    q: "What are the qualifications of statistician and what are they do?",
    a: "We have 15+years of experience senior's statistician oversee all projects from UK, the US and other abroad countries. They already worked for the various Dissertation statistics projects for the masters and doctoral students as well as worked for real corporate projects. Their minimal qualification is masters and PhD with their number of years' experience made them to handle the complex project that involves cluster analysis and structural equation modeling.",
  },
  {
    q: "I am a master's student. Can you help me to give a Tutor for the statistical programming service?",
    a: "Yes. You are welcome to get Dissertation Statistics Tutoring apart from writing. We offer some brainstorming sessions to understand what are the systematic process so you will get the chance to talk with the expertise to complete dissertation with best and accurate finding or data analysis outcome.",
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
  { quote: "Tutors India comes highly recommended from me. Only a few quants have it all: solid qualifications, strong statistical and data mining skills, the initiative to anticipate client needs, compelling and succinct communications, strong client management skills, and a results-oriented mindset. Overall, the quality has been excellent, and their customer service attitudes have been outstanding.", author: "Sophia" },
  { quote: "I would like to express my satisfaction on the co-operation regarding the data collection of big data analysis of my project. The experts and the technical team did a very professional job. I am satisfied with the solution given and with the communication flow throughout the project. Well done and I hope we can continue to grow together.", author: "Faiyaz" },
  { quote: "Tutors India was not only easy to work with, but her communication was also excellent. I was badly struggling to complete my project in big data analytics since I am new to the statistics field. They met every deadline, and also presented sound suggestions that added quality to our projects. Because of this, I was able to complete a project in four weeks that generally takes six weeks.", author: "Isabella" },
  { quote: "Thank you very much for the document. It is wonderful. Please thank Respected Ma'am. I think she has produced something great. I am deeply grateful to her for this.", author: "Derrick", location: "UK" },
  { quote: "I have defended my research few days ago and scored a very good.", author: "Bryan", location: "Australia" },
  { quote: "I must say your company is so professional, available and legitimate with your services and money I send you. I just want to say thank you and I will refer all my students to you.", author: "Cory Ander", location: "New Zealand" },
  { quote: "I cannot express my gratitude by my words to your quality work and I really appreciate your commitment. I am happy to be associated with such a dedicated team. I wish to be associated in future too.", author: "Naoh", location: "Australia" },
  { quote: "The way you explained the topic was really good. In fact, I was little stunned with the team especially the 'Dr.' has full capability and skills to explain all my queries. Initially I had little hesitation to approach, but after speaking to them, I gained 100% confidence. I recommend speaking to the experts, they will certainly clarify all your queries.", author: "F M", location: "Michigan, US" },
];

export default function BigDataAnalyticsPage() {
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
              <Link href="/our-services/development/" style={{ color: "#a0b8e0" }}>Development</Link>{" / "}
              <span style={{ color: "#fff" }}>Big Data Analytics</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.4rem,3vw,2rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              Big Data Analytics Services for Academic &amp; Research Projects
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Expert big data analytics support for academic dissertations and research projects. Hadoop, Spark, MongoDB, MapReduce, Apache Hive, Deep Learning and more — US &amp; UK qualified experts.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "20px" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.8 }}>Hadoop · Spark · Hive<br />MongoDB · Deep Learning<br />Reply in 30 Minutes</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      {/* Tutors India Difference */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Tutors India Difference in Big Data Analytics</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          &quot;Big data is high-volume, high velocity, and high-variety information assets that demand cost-effective, innovative forms of information processing for enhanced insight, and decision making&quot; (Gartner&apos;s IT Glossary). For the majority of students, analysing big data is by far the most challenging piece of academic work that they have attempted or are ever likely to try in the future. The majority of the students do agree and would have experienced the scenario. At Tutors India, we have subject matter expertise who has capability to understand the different layers of data being integrated and the level of granularity of integration to create the holistic picture. Further the team also well equipped with advanced mathematical degrees, statistics and with multiple specialist degree.
        </p>
      </section>

      {/* Unique & Innovative */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Unique &amp; innovative Big Data Analytics</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            At Tutors India, we apply various models including Predictive Analytics (Time series methods (e.g. moving average, exponetial smoothing, autoregressive models), Linear, non-linear and Logistic regression; Data-mining techniques (e.g., cluster analysis, market basket analysis), Prescriptive analytics (descriptive and predictive analytical models and mathematical optimization models), analytic hierarchy process, Game theory (e.g., auction design, contract design) – Mixed integer linear Programming (MILP), Non-linear programming (Network flow algorithms, MILP and Stochastic dynamic programming), conjoint analysis, K-means algorithm and artifical neural networks (ANN) [for sales forcasting, bankruptcy prediction), Unsupervised neural networks, the self-organizing maps (SOMs), Fuzzy Delphi method, self-organizing maps (SOM) and a visualization technique to cluster customers according to their various characterississtics, link Analysis, Rule Induction Using Decision Trees, Affinity Grouping, market Basket Analysis, Product Placement, Physical shelf arrangement, Up-sell, cross-sell and bundling opportuntities, neural network, customer retention and memory based reasoning, Neural Networks (ANN model, backpropagation ANNs (forecasting of advertising and promotion impact), Marketing Decision Support System (MDSS) etc
          </p>
        </div>
      </section>

      {/* Team */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Team of Big Data Analytics assures you the quality for your academic work</h2>
        <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "20px" }}>
          Tutors India has a team of expertise who have the capability to handle a wide range of technologies including Hadoop, MongoDB, MapReduce, Apache Spark, Spark SQL, Apache Hive, ArangoDB, Deep Learning, and techniques used are association rule learning, classification tree analysis, genetic algorithms, machine learning, regression analysis, sentiment analysis, social network analysis
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {["Hadoop","MongoDB","MapReduce","Apache Spark","Spark SQL","Apache Hive","ArangoDB","Deep Learning","Association Rule Learning","Classification Tree Analysis","Genetic Algorithms","Machine Learning","Regression Analysis","Sentiment Analysis","Social Network Analysis"].map((s) => (
            <span key={s} style={{ background: "#1a2a6c", color: "#f9c74f", borderRadius: "6px", padding: "5px 12px", fontSize: "0.82rem", fontWeight: 700 }}>{s}</span>
          ))}
        </div>
      </section>

      {/* Simply Easy */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Big Data Analytics Service is simply easy &amp; Straightforward</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            Our big data analytics service guarantees that your works confidential, and so you do not have to worry about it. Just send us your topic along with the deadline and see the results that are far justified and mark the success of your career.
          </p>
        </div>
      </section>

      {/* Service Tiers */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "24px" }}>What Big Data Analytics Services do we offer under big data analytics service?</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "22px" }} className="three-col-grid">
          {[
            { tier: "Basic", desc: "Only analytics based on the concept shared" },
            { tier: "Advanced", desc: "In addition to the basic features, we will write interpretation and evaluation process." },
            { tier: "Premium", desc: "New conceptual development, coding, or programming, algorithm development and interpretation, evaluation of the new algorithm code and compare results with other established algorithms." },
          ].map((t) => (
            <div key={t.tier} style={{ background: t.tier === "Advanced" ? "#1a2a6c" : "#fff", color: t.tier === "Advanced" ? "#fff" : "#333", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 800, color: t.tier === "Advanced" ? "#f9c74f" : "#e87722", marginBottom: "16px" }}>{t.tier}</div>
              <p style={{ fontSize: "0.94rem", lineHeight: 1.7, color: t.tier === "Advanced" ? "#c5d5f0" : "#555" }}>{t.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "28px" }}>
          <Link href="/order-now/" style={{ padding: "13px 36px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "1rem" }}>ORDER NOW</Link>
        </div>
        <style>{`@media(max-width:768px){.three-col-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* Specialized Expertise */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Specialized Expertise across the globe</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            Classification (for example, example artificial neural network (ANN), decision tree analysis, rune induction, K-nearest neighbouring techniques, (b) estimation, (c) prediction (such as multivariate statistics, ANN), (d) clustering (e.g. k-means, hierarchical, Kohonen Networks), and (e) association rules (particularly for market basket analyses)
          </p>
        </div>
      </section>

      {/* Deliverables */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our deliverables while you order Big Data Analytics Help</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          Big Data analytics from Tutors India is simply easy and straightforward. You will get the reply within 30 minutes which would enable to place your order quickly without any delay in submissions. We would provide executive summary /abstract, and output, and any other information that have used to develop the output.
        </p>
      </section>

      {/* How Does it Work */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: "24px", textAlign: "center" }}>How Does Big Data Analytics consultation work?</h2>
          <p style={{ color: "#a0b8e0", lineHeight: 1.8, fontSize: "0.96rem" }}>
            We are completely aware that the dissertation or manuscript comes with a very tight deadline, and our team ensures to deliver the work on time along with the detailed report. The process is simple. After the order is confirmed, we allocate the special team to scrutinize the work regarding necessary availability requirements that would be essential to complete the work. Once the process is done, in case there are any queries, we ensure to ask during the initial stage of your work and send you the outline proposed manuscript analysis plan. Once the research analysis plan is approved, we will dispatch the work in the draft, and update you on the progress of your work. Our exclusive coordinators would get in touch with you to clarify any queries. For primary data collection, you need to pay an additional chart to offer this service. This would enable to show the proof of evidence of data collection to your university. We will paste the excel data sheet in Appendix, and this would be shared. You can also pay in installments and work will be started as soon as we receive the payments we deliver your work as per the schedule fixed and agreed or even before the schedule.
          </p>
        </div>
      </section>

      {/* Features */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Big Data Analytics Service features</h2>
        <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "20px" }}>
          We have team and expertise to work on the following analysis: Chameleon Based on Clustering Feature Tree (CBCFT), BIRCH with algorithm Chameleon, Support Vector Clustering (SVC), EM Algorithm Support Vector Machine (SVM) and Logistic Regression, hierarchical method and partitioning method, theory of fuzzy, Fuzzy c-means, fuzzy C mean with SOM, Recency Frequency Monetary (RFM) data mining technique, Customer-Relationship- Model (CRM), hierarchical self-organizing segmentation model (HSOS)
        </p>
        <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Our features:</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "12px" }} className="two-col-grid">
          {[
            "We will provide complete executable code",
            "Package will include screen shots",
            "Project database will also be included",
            "Package will include the supporting tools",
            "Package will include documentation",
            "Package will include the Base paper and Reference paper",
            "Package will include Read Me File which is the project execution instructions",
            "Package will include Video File which explains the project implementation procedure",
          ].map((item) => (
            <div key={item} style={{ display: "flex", gap: "10px", background: "#f5f6fa", border: "1px solid #dde2ef", borderRadius: "8px", padding: "14px" }}>
              <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>✓</span>
              <span style={{ fontSize: "0.87rem", color: "#444", lineHeight: 1.6 }}>{item}</span>
            </div>
          ))}
        </div>
        <style>{`@media(max-width:768px){.two-col-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* Documentation */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px" }}>Documentation</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {["Abstract","Introduction","Aim Of Project","Literature Review","Current System","Disadvantages Of Current System","Definition Of The Problem","Benefits Of Proposed System","System Requirements","Modules Description","System Architecture","Data Flow Diagram","Usecase Diagram","Class Diagram","System Testing","System Design","Feasibility Study","Conclusion","Future Enhancement"].map((s) => (
              <span key={s} style={{ background: "#fff", border: "1px solid #c5d5f0", borderRadius: "20px", padding: "5px 14px", fontSize: "0.82rem", color: "#1a2a6c", fontWeight: 600 }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Systems */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Embedded System, PLC, VLSI, RFID, Robotic, Microcontroller, Zigbee, Lab View, GSM / GPS, ARM, PIR, MATLAB, ZWAVE – Power Electronics:</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>Switching of electronic circuits (power supplies, converter, inverter, and motor drives)</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "16px" }}>
          {["Embedded System","PLC","VLSI","RFID","Robotic","Microcontroller","Zigbee","Lab View","GSM/GPS","ARM","PIR","MATLAB","ZWAVE","Power Electronics"].map((s) => (
            <span key={s} style={{ background: "#f0f4ff", border: "1px solid #c5d5f0", borderRadius: "20px", padding: "5px 14px", fontSize: "0.82rem", color: "#1a2a6c", fontWeight: 600 }}>{s}</span>
          ))}
        </div>
      </section>

      {/* Free Offers */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Free Offers along with your big data analytics Help UK</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "20px" }}>
            We deliver more than your expectation – Abstract or Executive Summary, Graphs &amp; Tables (redrawn), analysis or evaluation of newly developed algorithm, software screen shots to ensure the process that we had carried out for doing the analyses Free Tutoring for the work being carried out – to speak confidently with your program supervisors.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
            {[
              { title: "Abstract or Executive Summary", desc: "Professionally written summary included free with your order." },
              { title: "Graphs & Tables (redrawn)", desc: "All graphs and tables redrawn to publication standard." },
              { title: "Analysis or evaluation of newly developed algorithm", desc: "Complete analysis and evaluation included." },
              { title: "Software screenshots", desc: "Screenshots documenting the process carried out for the analyses." },
              { title: "Free Tutoring", desc: "Free Tutoring for the work being carried out – to speak confidently with your program supervisors." },
            ].map((item) => (
              <div key={item.title} style={{ background: "#fff", border: "1px solid #c5d5f0", borderRadius: "10px", padding: "20px" }}>
                <div style={{ fontWeight: 700, color: "#1a2a6c", marginBottom: "6px", fontSize: "0.92rem" }}>✦ {item.title}</div>
                <div style={{ fontSize: "0.82rem", color: "#555", lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            ))}
          </div>
          <style>{`@media(max-width:768px){.three-col-grid{grid-template-columns:1fr!important;}}`}</style>
        </div>
      </section>

      {/* Exclusive */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our big data analytics Service is exclusive</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          As we do not just provide analysis, but the rather clear explanation and justification for the choice.
        </p>
      </section>

      {/* Why Choose */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: "20px", textAlign: "center" }}>Why Choose Tutors India: Big data analytics Service features</h2>
          <p style={{ color: "#a0b8e0", lineHeight: 1.8, textAlign: "center", marginBottom: "28px", fontSize: "0.96rem" }}>
            Qualified researchers, research methodology expertise, well experienced coders, developers, programmers capable of handling various software and many more, only peer-reviewed articles, Tutoring and clarification, Tables and Interpretation with proper formatting for print-ready analysis, plagiarism report, 24/7 support, timely Support, 100% match with the requirement and on time delivery.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "16px" }} className="four-col-grid">
            {[
              { icon: "🎓", title: "Qualified researchers", desc: "Expert analysts with advanced mathematics and statistics degrees." },
              { icon: "💻", title: "Experienced developers", desc: "Well experienced in all major big data platforms." },
              { icon: "🔬", title: "Research methodology expertise", desc: "Comprehensive knowledge of data analytics research methods." },
              { icon: "📚", title: "Only peer-reviewed articles", desc: "All references from peer-reviewed journals." },
              { icon: "🧑‍🏫", title: "Tutoring and clarification", desc: "Free tutoring for the work being carried out." },
              { icon: "📊", title: "Tables and Interpretation", desc: "Proper formatting for print-ready analysis." },
              { icon: "📋", title: "Plagiarism report", desc: "Turnitin/WriteCheck reports provided with every order." },
              { icon: "🕐", title: "24/7 support", desc: "Round-the-clock support via email and CRM." },
            ].map((g) => (
              <div key={g.title} style={{ background: "rgba(255,255,255,0.07)", borderRadius: "10px", padding: "18px" }}>
                <div style={{ fontSize: "1.6rem", marginBottom: "8px" }}>{g.icon}</div>
                <div style={{ fontWeight: 700, fontSize: "0.85rem", marginBottom: "6px" }}>{g.title}</div>
                <div style={{ fontSize: "0.76rem", color: "#a0b8e0", lineHeight: 1.6 }}>{g.desc}</div>
              </div>
            ))}
          </div>
          <style>{`@media(max-width:768px){.four-col-grid{grid-template-columns:1fr 1fr!important;}}`}</style>
        </div>
      </section>

      {/* Confidentiality + References */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px" }} className="two-col-grid">
          <div style={{ background: "#f5f6fa", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px" }}>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.15rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>A complete secure &amp; Confidential Service</h2>
            <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.96rem" }}>
              We offer 100% confidentiality of client&apos;s personal details, payment details, project works, and copyrights of research works. We ensure following for the conditionality, security &amp; privacy: 1) All your projects are given unique reference codes 2) Documents are accessed only writers who signed NDA with Tutors India 3) Your financial information is protected b 128-bit secure socket layer (SSL) encryption.
            </p>
          </div>
          <div style={{ background: "#f5f6fa", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px" }}>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.15rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Fully Referenced</h2>
            <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.96rem" }}>
              Our dissertation work is fully referenced with latest articles and textbooks. We refer only peer-reviewed sources such as scholarly articles and textbook to select the topic. We refer database including Web of Science, ProQuest, Google Scholar, Business Source Complete, and latest newspapers articles such as Economic Times, Forbes, The Wall Street, The Economics to identify the industrial problem.
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
              { icon: "♾️", title: "Unlimited Revision", desc: "Unlimited Revision for the work being committed." },
              { icon: "⏰", title: "On-Time Delivery", desc: "We ensure on-time delivery." },
              { icon: "🕐", title: "Support 24/7", desc: "We support 24/7." },
              { icon: "📄", title: "Word Count Committed", desc: "Word count committed does not include references and bibliography & help you to locate the sources cited." },
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

      {/* Plagiarism / On Time / Experienced */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "22px" }} className="three-col-grid">
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Plagiarism Free Work</h3>
            <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.7 }}>
              We are aware of the consequences of plagiarism. Hence, topic selection is completely plagiarism Free. Our work is scanned against online sources in a similar way like WriteCheck or Turnitin. We wanted to ensure that our clients i.e., researchers and students are not finding any issues with regards to plagiarism and so we issue plagiarism-free certificate*. Our streamlined and high-quality research writing process ensures your dissertation is not just copy-pasted, but written only after brainstorming sessions with our team of professional researchers.
            </p>
          </div>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>On Time</h3>
            <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.7 }}>
              Our work is delivered at a specified date and time. Our specific changes to the delivered work will be carried out within 45 days of delivery. We guarantee delivery of minor changes within 24 working hours and significant changes within 48 working hours. We acknowledge all your emails within 30 minutes of working hours. Further any delay in the delivery can be raised at customersupport@tutorsindia.com
            </p>
          </div>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Experienced Writers</h3>
            <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.7 }}>
              Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities from India, the US, and the UK. We identify the perfect SME according to your subject and area. Expert is selected through a stringent selection process including the signing of non-disclosure and confidentiality agreement. You can be very sure about the quality of the work since expert writer is identified as per International Research Experience.
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
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Your Big Data Analytics service is carried out by your choice of specialized expertise</h2>
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
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>Reply in 30 Minutes · US &amp; UK Experts · Hadoop · Spark · Deep Learning · Unlimited Revisions</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
