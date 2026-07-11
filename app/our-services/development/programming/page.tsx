import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "Computer or Software Programming for Computer Science Dissertation Services",
  description: "Expert computer programming, algorithm development and CS dissertation support. Java, .NET, MATLAB, PHP, Android, NS2/NS3, MySQL, Angular JS & more. US & UK qualified researchers.",
};

const faqs = [
  {
    q: "When do you initiate my computer programming project?",
    a: "After the order is confirmed and received your clear requirements, we will start working on your application development projects with help of experienced and well-trained research analyst assist you.",
  },
  {
    q: "Why do companies hire Tutors India for computer programming?",
    a: "Our IT team strives hard to deliver the quality software products faster and, we gives independency to the clients to monitor the project status so identify the point to apply the necessary changes since no loss of quality, flexible processes and ability to continuously enhance products standard during the development lifecycle.",
  },
  {
    q: "Who will work for Tutors India computer programming?",
    a: "Computer science programming is written by qualified and experienced researchers from the US and UK who are best in handling the theory of computation artificial intelligence, computer networking, computer human interaction, graphics, computer application and symbolic computer application, software engineering, database systems, parallel and distributed computation, algorithms and data structure and many more.",
  },
  {
    q: "What is the quality standards maintained in computer programming and development?",
    a: "At Tutors India, at every stages of computer programming process from conceptual design to final product, the highest quality standards maintained.",
  },
  {
    q: "What are the areas you are specialized in computer programming assignment?",
    a: "We are specialized in many areas like Information System, UML assignment, UML activity diagram, Data structure, operating system, computer network assignment, MySQL database, data base design, DBMS homework help, distributed database assignment, and advance DBMS, JAVA & JAVA script (e.g. data encapsulation)",
  },
  {
    q: "How do you start to work in computer process?",
    a: "We start from a pilot study to understand the project well in term of the technical and commercial aspects. Our expertise has many years of experience in computer programming to meet your needs. Meticulously, we pay attention to the each stage as project quality and on-time delivery.",
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
  { quote: "I thank Tutors India for the wonderful job in helping me develop my algorithm in computer programming. Everyone was professional, excellent and hard working. Thanks to them, I was able to achieve my goal on time, and I look forward to continue working with them in the future.", author: "Harrison" },
  { quote: "The final work looked so refined and well-structured that even my mentor appreciated the improvement immediately. Highly recommended for serious academic support.", author: "George Whitmore", location: "UK" },
  { quote: "I was really struggling with my final semester master's degree, that's when I heard about Tutors India. They really guided me the whole way to produce research proposal just from the idea of a research title. The level of detail which went into creating the research proposal is astonishing. The technical concepts they advised for methodology were very advanced and algorithms used were state of the art. Would definitely recommend Tutors India to anyone who is struggling to complete their research work.", author: "David Morrison" },
  { quote: "Tutors India helped me gain clarity on the direction my research proposal needed to go and provided me with more clarity in my work. The experts understand my difficulties in writing the research proposal and guided me accordingly. Even without having an in-depth background in the topic I'm able to understand the key aspects and was given the focus to the right place. I wholeheartedly endorse Tutors India as a best and professional service, as someone you can rely on completing your research works.", author: "Glenn McLaughlin" },
  { quote: "Yesterday I completed review meeting and showed my code execution to my guide she got satisfied", author: "Sal Monella", location: "UK" },
  { quote: "What impressed me most was how personalized the support felt. They didn't just complete the work — they understood my goals and helped me present them better.", author: "Khalid Al Nuaimi" },
  { quote: "I'd want to express my gratitude to Tutors India for their invaluable assistance in developing our programme. Everyone was courteous, competent, and diligent. I was able to meet our deadline thanks to them, and I want to continue working with them in the future.", author: "Evak" },
  { quote: "The way you explained the topic was really good. In fact, I was little stunned with the team especially the 'Dr.' has full capability and skills to explain all my queries. Initially I had little hesitation to approach, but after speaking to them, I gained 100% confidence. I recommend speaking to the experts, they will certainly clarify all your queries.", author: "F M", location: "Michigan, US" },
];

export default function ProgrammingPage() {
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
              <span style={{ color: "#fff" }}>Programming</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.4rem,3vw,2rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              Computer or Software Programming for Computer Science Dissertation Services
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Are your stuck with your CSE research projects? Are you seeking professional technical assistance in your domain technology? Look no further. Tutors India programmers and developers provides full assistance in completing your computer science engineering research with complete confidence and satisfaction.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "20px" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.8 }}>Java · .NET · MATLAB<br />PHP · Android · NS2/NS3<br />Reply in 30 Minutes</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      {/* Right Place */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Then You&apos;ve Certainly Reached the Right place</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          Expert computer science programming support is just a message away. Our qualified and experienced researchers from the US &amp; UK are ready to assist with your dissertation, manuscript, and research programming needs.
        </p>
      </section>

      {/* Qualified Researchers */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Your Computer science programming for CS dissertation is written by qualified and experienced researchers from the US &amp; UK</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            Our writers have experience in handling theory of computation, artificial intelligence, computer networking, computer human interaction, graphics, computer application and symbolic computer application, software engineering, database systems, parallel and distributed computation, algorithms and data structure and many more.
          </p>
        </div>
      </section>

      {/* Tutors India Difference */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Tutors India Difference in computer programming development Service</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          Programming is difficult as we need to tell computer an unambiguous instruction thereby there is no room for subjective interpretation. A program is written in some particular language while an algorithm is more like the idea behind the program. Technically, an algorithm is a step-by-step procedure (sequence, selection, iteration and a case type statement) for solving a problem that always terminates after a finite number of steps and the order in which those actions are to be expected. Algorithms are used as a means of automating a broad range of business processes especially when there is a large volume of unstructured data, to identify pattern and similarities. Pseudocode, a "test-based", an artificial and informal language that helps the programmer to develop the algorithm. For the majority of students, the UK / the US dissertation coding and algorithm development is by far the most challenging piece of academic work that they have attempted or are ever likely to try in the future. The majority of the students do agree and would have experienced the scenario.
        </p>
      </section>

      {/* Unique & Innovative */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Unique &amp; innovative coding, programming and algorithm development service</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            Since the whole process of designing, analyzing, implementing, tuning, debugging and experimentally evaluating algorithm required a high level of expertise, Tutors India with their team of skilled expertise offer algorithm development service to scholars across the world. We provide services for Ph.D. scholars pursuing Computer Science Engineering, who mainly deal with data communication, computer application, network formation, and components of the computer. Further, we also help in web design and web development coding for client side includes HTML5, CSS3, Flash, JavaScript, Jquery, Microsoft Silverlight, Ajax, while for server side PHP (open source), ASP (Microsoft Proprietary), Active VFP (Open Source), CSP, Server Side (ANSI C), Cold Fusion (Adobe Proprietary, formerly Macromedia, formerly Allaire), CGI, Lotus domino, Node. Js, Perl, Erland, with Linux, Perl, Python,NET, Ruby, Smalltalk, SSJS server side javascript, WebDNA, &amp; Websphere. Database technology includes MySQL, Microsoft SQL service, and many others. New algorithm development depends on the previously developed ones. Therefore, at Tutors India we refer various libraries such as LEDA (the library of efficient data types and algorithms), stony brook algorithm repository (data structures, numerical problems, polynomial time problems, computational geometry, string problems), and Libraries for the specialized domain (B-trees, R-trees, K-D-B trees). We also help scholars to get relevant data from repositories such as UCI Knowledge Discovery in database Archive, UCI Machine Learning Repository, Delve datasets, Stream Query Repository, Kent Ridge Bio-Medical data set repository, XML data repository, Medical Dataset Repository in ARFF (WEKA).
          </p>
        </div>
      </section>

      {/* Computer Programming Services */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Computer Programming Services</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          Information System, UML assignment, UML activity diagram, Data structure, operating system, computer network assignment, MySQL database, data base design, DBMS homework help, distributed database assignment, and advance DBMS, JAVA &amp; JAVA script (e.g. data encapsulation)
        </p>
      </section>

      {/* Simply Easy */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Computer Programming service is Simply easy &amp; Straightforward</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            Our computer programming service guarantees that your works confidential, and so you do not have to worry about it. Just send us your topic along with the deadline and see the results that are far justified and mark the success of your career.
          </p>
        </div>
      </section>

      {/* Service Tiers */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "24px" }}>What Services do we offer under coding, algorithm &amp; programming help?</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "22px" }} className="three-col-grid">
          {[
            { tier: "Basic", desc: "Only coding based on the concept shared" },
            { tier: "Advanced", desc: "In addition to the basic features, we will write interpretation and evaluation process." },
            { tier: "Premium", desc: "New conceptual development, coding, or programming, algorithm development and interpretation, evaluation of the new algorithm code and compare results with other established algorithms." },
          ].map((t) => (
            <div key={t.tier} style={{ background: t.tier === "Advanced" ? "#1a2a6c" : "#fff", color: t.tier === "Advanced" ? "#fff" : "#333", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 800, color: t.tier === "Advanced" ? "#f9c74f" : "#e87722", marginBottom: "16px" }}>{t.tier}</div>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.7, color: t.tier === "Advanced" ? "#c5d5f0" : "#555" }}>{t.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "28px" }}>
          <Link href="/order-now/" style={{ padding: "13px 36px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "1rem" }}>ORDER NOW</Link>
        </div>
        <style>{`@media(max-width:768px){.three-col-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* Subject Matter Expertise */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px" }}>Specialized Subject Matter Expertise across the globe</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "20px" }}>
            {["JAVA","DOTNET","MVC","MATLAB","NS2","NS3","PHP","Android","OPNET","Image","My SQL","MVC application","C","C++","Jquery","ASP.NET","Mongo","ADO.Net","Entity Framework","Angular JS","Javascript"].map((s) => (
              <span key={s} style={{ background: "#1a2a6c", color: "#f9c74f", borderRadius: "6px", padding: "5px 12px", fontSize: "0.82rem", fontWeight: 700 }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our deliverables while you order Coding, Algorithm &amp; Programming Help</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          Coding, Programming and algorithm development from Tutors India is simply easy and straightforward. You will get the reply within 30 minutes which would enable to place your order quickly without any delay in submissions. We would provide executive summary /abstract, and output, and any other information that have used to develop the output.
        </p>
      </section>

      {/* How Does it Work */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: "32px", textAlign: "center" }}>How Does Coding, Algorithm &amp; Programming consultation work?</h2>
          <p style={{ color: "#a0b8e0", lineHeight: 1.8, marginBottom: "28px", fontSize: "0.9rem" }}>
            We are completely aware that the dissertation or manuscript comes with a very tight deadline, and our team ensures to deliver the work on time along with the detailed report. The process is simple. After the order is confirmed, we allocate the special team to scrutinize the work regarding necessary availability requirements that would be essential to complete the work. Once the process is done, in case there are any queries, we ensure to ask during the initial stage of your work and send you the outline proposed manuscript analysis plan. Once the research analysis plan is approved, we will dispatch the work in the draft, and update you on the progress of your work. Our exclusive coordinators would get in touch with you to clarify any queries. For primary data collection, you need to pay an additional chart to offer this service. This would enable to show the proof of evidence of data collection to your university. We will paste the excel data sheet in Appendix, and this would be shared. You can also pay in installments and work will be started as soon as we receive the payments we deliver your work as per the schedule fixed and agreed or even before the schedule.
          </p>
        </div>
      </section>

      {/* Features */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px" }}>Coding, Programming &amp; Algorithm development Features</h2>
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

      {/* Embedded Systems */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Embedded System, PLC, VLSI, RFID, Robotic, Microcontroller, Zigbee, Lab View, GSM / GPS, ARM, PIR, MATLAB, ZWAVE – Power Electronics:</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>Switching of electronic circuits (power supplies, converter, inverter, and motor drives)</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "16px" }}>
            {["Embedded System","PLC","VLSI","RFID","Robotic","Microcontroller","Zigbee","Lab View","GSM/GPS","ARM","PIR","MATLAB","ZWAVE","Power Electronics"].map((s) => (
              <span key={s} style={{ background: "#fff", border: "1px solid #c5d5f0", borderRadius: "20px", padding: "5px 14px", fontSize: "0.82rem", color: "#1a2a6c", fontWeight: 600 }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Free Offers */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Free Offers along with your Computer / software programming Help UK</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          We deliver more than your expectation – Abstract or Executive Summary, Graphs &amp; Tables (redrawn), analysis or evaluation of newly developed algorithm, software screen shots to ensure the process that we had carried out for doing the analyses Free Tutoring for the work being carried out – to speak confidently with your program supervisors.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px", marginTop: "20px" }} className="three-col-grid">
          {[
            { title: "Abstract or Executive Summary", desc: "Professionally written summary included free with your order." },
            { title: "Graphs & Tables (redrawn)", desc: "All graphs and tables redrawn to publication standard." },
            { title: "Analysis or evaluation of newly developed algorithm", desc: "Complete analysis and evaluation of your newly developed algorithm included." },
            { title: "Software screenshots", desc: "Screenshots documenting the process that was carried out for the analyses." },
            { title: "Free Tutoring", desc: "Free Tutoring for the work being carried out – to speak confidently with your program supervisors." },
          ].map((item) => (
            <div key={item.title} style={{ background: "#f5f6fa", border: "1px solid #c5d5f0", borderRadius: "10px", padding: "20px" }}>
              <div style={{ fontWeight: 700, color: "#1a2a6c", marginBottom: "6px", fontSize: "0.92rem" }}>✦ {item.title}</div>
              <div style={{ fontSize: "0.82rem", color: "#555", lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Exclusive */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our Coding, Coding and Algorithm &amp; Algorithm development Service is exclusive</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            as we do not just provide analysis, but the rather clear explanation and justification for the choice.
          </p>
        </div>
      </section>

      {/* Topic Selection / Quality / Plagiarism / Customer Interaction */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "22px" }} className="two-col-grid">
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Your Topic Selection</h3>
            <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.7 }}>Check the sample dissertation research proposal from our expert writers.</p>
            <Link href="/sample-works/" style={{ display: "inline-block", marginTop: "12px", color: "#e87722", fontWeight: 700, fontSize: "0.85rem" }}>Our Sample Works →</Link>
          </div>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Quality Assurance</h3>
            <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.7 }}>We ensure quality at every stage and the process.</p>
            <Link href="/guarantees/" style={{ display: "inline-block", marginTop: "12px", color: "#e87722", fontWeight: 700, fontSize: "0.85rem" }}>Guarantees →</Link>
          </div>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Plagiarism Report</h3>
            <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.7 }}>We deliver the document after scanning for plagiarism.</p>
            <Link href="/plagiarism-report/" style={{ display: "inline-block", marginTop: "12px", color: "#e87722", fontWeight: 700, fontSize: "0.85rem" }}>View Report →</Link>
          </div>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Customer Interaction</h3>
            <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.7 }}>We interact with the customer at every stage in terms of amendments, query and delivery.</p>
            <Link href="/contact-us/" style={{ display: "inline-block", marginTop: "12px", color: "#e87722", fontWeight: 700, fontSize: "0.85rem" }}>Contact Us →</Link>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: "20px", textAlign: "center" }}>Why Choose Tutors India: Coding, Programming &amp; Algorithm development Service features</h2>
          <p style={{ color: "#a0b8e0", lineHeight: 1.8, textAlign: "center", marginBottom: "28px", fontSize: "0.9rem" }}>
            Qualified researchers, research methodology expertise, well experienced coders, developers, programmers capable of handling various software and many more, only peer-reviewed articles, Tutoring and clarification, Tables and Interpretation with proper formatting for print-ready analysis, plagiarism report, 24/7 support, timely Support, 100% match with the requirement and on time delivery.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "16px" }} className="four-col-grid">
            {[
              { icon: "🎓", title: "Qualified researchers", desc: "Expert coders with international university degrees." },
              { icon: "💻", title: "Experienced coders & developers", desc: "Well experienced in all major programming platforms." },
              { icon: "🔬", title: "Research methodology expertise", desc: "Comprehensive knowledge of CS research methods." },
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
            <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.9rem" }}>
              We offer 100% confidentiality of client&apos;s personal details, payment details, project works, and copyrights of research works. We ensure following for the conditionality, security &amp; privacy: 1) All your projects are given unique reference codes 2) Documents are accessed only writers who signed NDA with Tutors India 3) Your financial information is protected b 128-bit secure socket layer (SSL) encryption.
            </p>
          </div>
          <div style={{ background: "#f5f6fa", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px" }}>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.15rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Fully Referenced</h2>
            <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.9rem" }}>
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
                <div style={{ fontWeight: 700, color: "#1a2a6c", marginBottom: "6px", fontSize: "0.88rem" }}>{g.title}</div>
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
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Your Computer / software programming service is carried out by your choice of specialized expertise</h2>
        <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "16px" }}>
          We have a team of 2000+ expertise across the subjects &amp; countries (including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine).
        </p>
        <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "20px" }}>
          Tutors India has capability and skills to handle subjects across the field. We chose qualified and experienced subject specific expertise while you order your Ph.D. or Master&apos;s dissertation. We have more than 2000+ expertise working across the world who can handle arts, literature, sciences, engineering or medicine.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {["Arts & Humanities","Biological Sciences","Business & Management Studies","Marketing & Communication","Engineering & Technology","Natural Sciences & Mathematics","Biological & Life science","Economics & Administration","Humanities & Social Science","Law","Medicine & Health","Education & Training","Journalism & Media","Agriculture & Forestry","Computer Science & IT","Hospitality, Leisure & Sports"].map((s) => (
            <span key={s} style={{ background: "#f0f4ff", border: "1px solid #c5d5f0", borderRadius: "20px", padding: "6px 16px", fontSize: "0.83rem", color: "#1a2a6c", fontWeight: 600 }}>{s}</span>
          ))}
        </div>
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
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>Reply in 30 Minutes · US &amp; UK Researchers · Novel Algorithms · Unlimited Revisions</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
