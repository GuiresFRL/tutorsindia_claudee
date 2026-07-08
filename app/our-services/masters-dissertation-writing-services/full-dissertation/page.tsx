"use client";
import Link from "next/link";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

const dissertationStructure = [
  { title: "Abstract", desc: "We write abstract for your master's dissertation which would approximately contain 250 to 350 words. We complete the abstract after the full dissertation has been written that includes a brief summary of introduction or background, objectives, boundaries, methodology, the results of the dissertation research, main conclusion that you arrive, and recommendations." },
  { title: "Acknowledgement", desc: "A brief statement that ensures the following – we ensure to comment about family and friends at a minimum level while more concentration will be given on those who have given direct assistance. Further, the section will also provide assurance that the dissertation is own, evidence at your findings, a declaration to show the work complies with University regulation on plagiarism and a statement of the word count. Apart, a copy of the report appended in Loss-leaf format showing that the dissertation is passed through plagiarism software." },
  { title: "Table of Content", desc: "The section will list the chapter headings, appendices, references along with the page numbers. Apart, there would be a separate list for lists of figures, tables, and abbreviations. We use Microsoft Word to create lists using the indexing and style functions." },
  { title: "Full Dissertation Title", desc: "A precise Title as approved by the University. The title would convey the ideas of your investigation, orient your readers to the topic, indicate the type of study you will conduct, population you target and geographical location." },
  { title: "An Introduction to the Topic", desc: "A Brief description of the topic, research questions, and research objectives. The section would provide necessary background information and provides readers with some sense of overall research including general territory, broad foundation (existing literature), the general scope, overview of the sections and finally should engage the readers." },
  { title: "Aim and Overall Objective / Hypotheses", desc: "A description what research want to achieve from carrying out this research. The section includes a clear statement of the research objectives, questions that researcher seeks to answer or the hypothesis. The section also includes original contributions of your study, with a detailed account of the points summarized in the introduction, and rationale." },
  { title: "Literature, Context, background", desc: "This should provide some insights on (a) studies that have been conducted previously in your research field (b) familiarity with major themes, (c) the range of theories scholars use to analyse their primary sources (d) gaps identified in the literature (e) further investigations you intend to pursue as part of this dissertation and (f) best methodologies." },
  { title: "The detailed research methodology", desc: "The section is essential to the good dissertation. This section includes the overall methodological approach, Research design, strategy, qualitative or quantitative, research philosophy, target area, population, sample size, primary or secondary data collection, ethical consideration, pilot study, validity, reliability, & statistical analysis." },
  { title: "Results / Findings / Data Analysis", desc: "The chapter presents the findings of the study in the form of tables & figures along with the interpretation. Depending on the choice of research methodology, the page will have a detailed quantitative models, hypothesis testing, showing some basic descriptive statistics including mean, SD, regression. Or a qualitative analysis dealing with content or textual or case study description. We use SPSS / R / SAS / STATA / Minitab for analysis." },
  { title: "Discussion, Summary & Conclusion", desc: "In this chapter, we introduce three section viz., discussion, summary, and conclusion. The discussion chapter compares and contrasts the findings of previously published authors in line with the research questions. Since this is the heart of the dissertation, we ensure to develop analytics and critical thinking with reference to theoretical arguments grounded in the literature review. The other section would be just summary followed by the conclusion of main findings and recommendations." },
  { title: "References", desc: "Work Cited, or sources cited (in-text) or list of sources cited while writing dissertation. This will include peer-reviewed scholarly articles, textbooks, newspaper articles, annual reports, obtained from various database including ProQuest, Emerald, IEEE, Web of Science, Academic Complete, SciDirect, JSTOR, Elsevier." },
  { title: "Bibliography & Appendices", desc: "Lists that have read but not actually cited will also be included. The section will inform the readers about various sources that also form the basis for the proposed study and methodology. Appendices for the dissertation may include experiment diagrams, questionnaire, permission for human subject testing, ethical forms, and reflection." },
  { title: "Dissertation Formatting", desc: "We check for word count (e.g. 12,000 to 15,000 excludes abstract, references, and source of text translation should be 6,000 words while commentary 6,000 to 7,000 words), paper size, margin settings, line spacing, page numbering, text, font, alignment, front cover, acknowledgement, abstract, table of contents, lists of figures, lists of tables, abbreviations, main text, chapter & section headings, citation format (e.g. the Harvard System of referencing), academic style of writing (e.g. the third person singular passive), approval of questionnaire and surveys, the lists of references, a minimum text notes, attribution and plagiarism, confidentiality, ethics, and assessment report." },
];

const whyChoose = [
  { title: "A Complete Secure & Confidential Service", desc: "We offer 100% confidentiality of client's personal details, payment details, project works, and copyrights of research works. We ensure following for the conditionality, security & privacy: 1) All your projects are given unique reference codes 2) Documents are accessed only writers who signed NDA with Tutors India 3) Your financial information is protected b 128-bit secure socket layer (SSL) encryption." },
  { title: "Fully Referenced", desc: "Our dissertation work is fully referenced with latest articles and textbooks. We refer only peer-reviewed sources such as scholarly articles and textbook to select the topic. We refer database including Web of Science, ProQuest, Google Scholar, Business Source Complete, and latest newspapers articles such as Economic Times, Forbes, The Wall Street, The Economics to identify the industrial problem." },
  { title: "Our Guarantees", desc: "(1) Unlimited Revision for the work being committed. (2) We ensure on-time delivery (3) We support 24/7. (4) Our word count committed does not include references and bibliography & help you to locate the sources cited (5) Ensure three-level quality check including Technical QC, Editor QC and final check against the requirement (6) Confidentiality of the information (7) Plagiarism free work – less than 5% percent. (8) Only experienced and subject specific writers will be allotted." },
  { title: "Plagiarism Free Work", desc: "We are aware of the consequences of plagiarism. Hence, topic selection is completely plagiarism Free. Our work is scanned against online sources in a similar way like WriteCheck or Turnitin. We wanted to ensure that our clients i.e., researchers and students are not finding any issues with regards to plagiarism and so we issue plagiarism-free certificate*. Our streamlined and high-quality research writing process ensures your dissertation is not just copy-pasted, but written only after brainstorming sessions with our team of professional researchers." },
  { title: "On Time", desc: "Our work is delivered at a specified date and time. Our specific changes to the delivered work will be carried out within 45 days of delivery. We guarantee delivery of minor changes within 24 working hours and significant changes within 48 working hours. We acknowledge all your emails within 30 minutes of working hours. Further any delay in the delivery can be raised at customersupport@tutorsindia.com" },
  { title: "Experienced Writers", desc: "Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities from US, and the UK. We identify the perfect SME according to your subject and area. Expert is selected through a stringent selection process including the signing of non-disclosure and confidentiality agreement. You can be very sure about the quality of the work since expert writer is identified as per International Research Experience." },
];

const faqs = [
  { q: "On which are the areas you provide master's full dissertation writing services?", a: "We accept orders from a wide range of subjects, which include Business Management (HR, operation, finance, Digitalization, technology, marketing, and much more) Economics, Computer Science, English, Literature, Engineering, Epidemiology, Public Health, Life Science, and Nutrition. We take up Engineering dissertation/ thesis writing in the following subjects/fields: Semiconductor Devices and Circuits, Vehicular AdHoc Networks, Wireless Sensor Networks, Analog Electronic Circuits, Analog Integrated Circuits, Analog VLSI Design, Physics and Modeling of Semiconductor Devices, Television and Video Engineering, Electrical and Electronics. If your topic or field of interest is not listed above, kindly contact us to know more about the dissertation writing services, dissertation writing tips, dissertation and thesis writing help." },
  { q: "What Information that I need to provide while ordering for full dissertation writing services?", a: "To match exactly with your requirement, we required a title that you had already selected, primary or secondary or business plan, university guidelines for style and referencing style, rubric scale and marketing criteria, scope, target country, industry experience, and feasibility of data collection, if any. Even if you have only research proposal is also fine. We will able to generate rest of the information. In addition, any other information that our writer should know can provide from your end." },
  { q: "Are all my assigned writers qualified to provide ultimate dissertation writing services?", a: "Yes, we are an ideal dissertation writing service provider in the UK, the US and Australia. We ensure that all our professional writers have the capability to write the research paper in the impeccable manner that completely stands out from the rest of the pile. Because of all of our writers, we appointed are having the high academic qualifications like PhD or Masters holder and passed out from the Top UK and the US universities and include we chosen writers or researchers who are passionate in research writing and best in the analysis. In addition, they are having the quality of experience in working in top corporate and research industries. This assures that we deliver the ultimate dissertation writing services for our clients along with flawless quality." },
  { q: "Is there any chance of my dissertation hear bad feedback from my committee members after getting a dissertation from Tutors India?", a: "Yes, in some cases, you may chance to hear bad feedbacks because different committee members have the different perspective, so it is possible to look your dissertation in the different direction and of course, put some feedback and suggestion to change it. However, do not worry about it, our writers or researchers have the ability to understand the professor's needs so change the minor feedback and suggestion within 24 hours, and large substantial changes will modify within a week. Ultimately, we are having experienced researchers who worked in various Top UK universities so understand the mindset of their structure how they will frame and what they are required so do not worry about bad feedback. We are here to help you with unlimited revisions." },
  { q: "Is there any possibility of plagiarism in my complete dissertation paper?", a: "No, we give 100% guarantee of 0% plagiarism report on your dissertation document. All our excellent writers are experienced in writing the plagiarism free content. Further, we have our internationally accepted premium Turnitin tool (plagiarism detection tool) and check using the own plagiarism tool, so your checking is safe. At Tutors India, we provide a plagiarism free dissertation paper report to ensures that your dissertation document uniqueness." },
  { q: "How much do you charge for master's dissertation revisions?", a: "We are committed to giving unlimited revisions to your dissertation full masters papers at free of cost, so we do not charge even a penny from you for any number of revisions since we are committed for 100% customer satisfaction guarantee." },
];

const testimonials = [
  { quote: "I was really struggling with my final semester master's degree, that's when I heard about Tutors India. They really guided me the whole way to produce research proposal just from the idea of a research title. The level of detail which went into creating the research proposal is astonishing. The technical concepts they advised for methodology were very advanced and algorithms used were state of the art. Would definitely recommend Tutors India to anyone who is struggling to complete their research work.", name: "David Morrison" },
  { quote: "Tutors India helped me gain clarity on the direction my research proposal needed to go and provided me with more clarity in my work. The experts understand my difficulties in writing the research proposal and guided me accordingly. Even without having an in-depth background in the topic I'm able to understand the key aspects and was given the focus to the right place. I wholeheartedly endorse Tutors India as a best and professional service, as someone you can rely on completing your research works.", name: "Glenn McLaughlin" },
  { quote: "First and foremost, I want to express my gratitude for your writer's assistance and effort in developing this research technique for my research paper. It would be difficult to accomplish this assignment on deadline without your assistance and that of your writer. In fact, I believe that this legal subject is rather challenging for me, and that starting to create this law paper without your writer's assistance would be extremely difficult.", name: "Hunter W. Lindström, JD, PhD" },
  { quote: "Even though my professor refused to extend my deadline, I needed to find an assignment assistance provider, and I'm glad I found Tutors India. They responded quickly, and I received an exceptionally well-written paper before the deadline.", name: "Dr. Logan C. Sinclair, PhD" },
  { quote: "I can say that it was a pleasant experience in which Tutors India displayed flexibility in adapting to our needs and presented an exceptional report that met all of our expectations. Personally, I appreciated the team's prompt follow-up, and we will undoubtedly contact them if additional research assistance is required.", name: "Connor J. Gallagher, MPhil" },
];

const subjects = [
  "Arts & Humanities","Biological Sciences","Business & Management Studies","Marketing & Communication",
  "Engineering & Technology","Natural Sciences & Mathematics","Biological & Life science",
  "Economics & Administration","Humanities & Social Science","Law","Medicine & Health",
  "Education & Training","Journalism & Media","Agriculture & Forestry","Computer Science & IT","Hospitality, Leisure & Sports",
];

const qaBoxes = [
  { img: "/images/qa/Topic-Selection.png", title: "Your Master's full dissertation", desc: "Check the sample dissertation research proposal from our expert writers", href: "/our-sample-works/" },
  { img: "/images/qa/Quality-Assurance.png", title: "Quality Assurance", desc: "We ensure quality at every stage and the process.", href: "/guarantees/" },
  { img: "/images/qa/Plagiarism-Report.png", title: "Plagiarism Report", desc: "We deliver the document after scanning for plagiarism", href: "/guarantees/" },
  { img: "/images/qa/Customer-Interaction.png", title: "Customer Interaction", desc: "We interact with the customer at every stage in terms of amendments, query and delivery.", href: "/contact-us/" },
];



export default function FullDissertationPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Our Services</Link>{" / "}
            <Link href="/our-services/masters-dissertation-writing-services/" style={{ color: "#a0b8e0" }}>Masters Dissertation</Link>{" / "}
            <span style={{ color: "#fff" }}>Full Dissertation</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.6rem,3vw,2.4rem)", marginBottom: "18px", lineHeight: 1.3 }}>
            The US and the UK Master&apos;s Complete Dissertation Writing Service
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "1.05rem", maxWidth: "820px", lineHeight: 1.8, marginBottom: "14px" }}>
            Are you looking an expert writer of your specific subject for your Master&apos;s or postgraduate dissertation writing completely from Abstract writing to Conclusion and Recommendation section with the quality expected?
          </p>
          <p style={{ color: "#a0b8e0", fontSize: "0.95rem", maxWidth: "820px", lineHeight: 1.8, marginBottom: "14px" }}>
            Your Dissertation is written by qualified and experienced researchers from the US &amp; UK. Our dissertation writers have experience in research methodology, specific domain experience, and educational degrees from international and top-ranked universities from US, and the UK.
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "24px" }}>
            <Link href="/order-now/" style={{ padding: "12px 32px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "0.95rem" }}>Place an Order</Link>
            <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, fontSize: "0.95rem" }}>Then You&apos;ve Certainly Reached the Right place</Link>
          </div>
        </div>
      </section>

      {/* Full Professional Master's Dissertation Writing */}
      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "12px" }}>Full Professional Master&apos;s Dissertation Writing</h2>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "20px" }}>
          Writing a full Master&apos;s or postgraduate dissertation is a challenging task for students pursuing higher studies. A dissertation in UK and US universities is an extended piece of academic writing and must be written and formatted according to university guidelines. To understand expectations, students often refer to dissertation examples and a dissertation sample before starting. A Master&apos;s dissertation typically ranges from 7,000 to 20,000 words and usually should not exceed 15,000 words, excluding footnotes, references, and appendices. Learning how to write a dissertation is particularly demanding in the UK and other prestigious universities due to strict plagiarism checks, as institutions closely examine similarities in wording and structure. Failure to meet these standards can lead to serious consequences.
        </p>

        <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.15rem", color: "#1a2a6c", marginBottom: "10px" }}>
          Full Dissertations are written with utmost care based on your specific university guidelines &amp; Specifications
        </h3>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "20px" }}>
          At Tutors India, our full dissertation writing services and thesis writing services are delivered in line with the style, structure, and formatting standards required by universities in the UK, Australia, and the US. We demonstrate advanced academic knowledge beyond undergraduate level while maintaining the appropriate scope and depth taught in your programme, clearly addressing the definition of a dissertation as an independent and rigorous research project. We support students at every stage, from choosing suitable dissertation topics and understanding how long is a dissertation, to completing each section including topic selection, research proposal writing, reflection journals, introduction, literature review, research methodology, presentation and discussion of findings, research ethics, citations, references, and appendices. Our academic writing follows a clearly structured approach, ensuring proper validation and justification of facts, opinions, and theories to build a precise and coherent argument.
        </p>

        <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.15rem", color: "#1a2a6c", marginBottom: "10px" }}>
          Dissertation Type &amp; Choice of Research Methodology
        </h3>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "20px" }}>
          We provide support for both dissertation by research and dissertation by translation/commentary, structured according to university guidelines. In line with the definition of a dissertation as an independent and in-depth academic research project, our work includes all essential components such as the title page, abstract, acknowledgement, contents page, introduction, commentary (literature review, translation commentary, and conclusion), references, and appendices. The appendix may include both the source text and the translated text where applicable. Students often ask how many words is a dissertation; while the length varies by university and programme, we ensure that the completed work meets the required word count and academic standards. Our writers are proficient in handling qualitative methodologies (e.g., interview guide design, semi-structured interviews, focus groups, observation, case studies), quantitative approaches (e.g., surveys), as well as triangulation or mixed-method research designs.
        </p>

        <div style={{ background: "#f0f4ff", borderRadius: "10px", padding: "24px 28px", marginBottom: "20px", borderLeft: "5px solid #1a2a6c" }}>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", color: "#1a2a6c", marginBottom: "8px" }}>
            The UK &amp; the US Complete (Full) Professional Master&apos;s dissertation Writing
          </h3>
          <p style={{ color: "#444", lineHeight: 1.8, margin: 0 }}>
            Our Dissertation writing demonstrates the ability to communicate complex ideas critically, concisely, and clearly. Our professional dissertation writers have completed around 8000 Masters Dissertation successfully. If you are unsure of what to do, avail our full or complete thesis writing services now.
          </p>
        </div>
      </section>

      {/* Simply Easy */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", color: "#1a2a6c", marginBottom: "12px" }}>
            Dissertation Writing Full is Simply easy &amp; Straightforward
          </h2>
          <p style={{ color: "#444", lineHeight: 1.8 }}>
            Our thesis and dissertation writing help guarantees that your dissertation is confidential, and so you do not have to worry about it. Just send us your dissertation topic along with the deadline and see the results that are far justified and mark the success of your dissertation.
          </p>
        </div>
      </section>

      {/* What Services + How Does it Work */}
      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "24px", marginBottom: "40px" }}>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "24px 28px" }}>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", color: "#1a2a6c", marginBottom: "10px" }}>
              What Services do we offer under Full dissertation?
            </h2>
            <p style={{ color: "#555", lineHeight: 1.7, marginBottom: "12px" }}>
              We write complete master&apos;s dissertation from the introduction to recommendations. Although it looks simple, but in practical, it&apos;s a tedious task to complete each and every step.
            </p>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "0.95rem", color: "#1a2a6c", marginBottom: "6px" }}>Specialized Subject Matter Expertise across the globe</h3>
            <p style={{ color: "#555", fontSize: "0.88rem", lineHeight: 1.7, margin: 0 }}>
              We offer topic Selection for Management, Social Science, Engineering, Technology, Life Science, Medical, Arts &amp; Literature / Linguistics, and much more.
            </p>
          </div>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "24px 28px" }}>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", color: "#1a2a6c", marginBottom: "10px" }}>
              Our deliverables while you order custom written master&apos;s dissertation
            </h2>
            <p style={{ color: "#555", lineHeight: 1.7 }}>
              Full Dissertation writing services from Tutors India is simply easy and straightforward. You will get the reply within 30 minutes which would enable to place your order quickly without any delay in submissions. We would provide executive summary/abstract, free articles used for writing the full dissertation, SPSS data sheet and output, questionnaire or semi-structured interview questions and any other information that we have used to write the dissertation such as reflective log or diary.
            </p>
          </div>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "24px 28px" }}>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", color: "#1a2a6c", marginBottom: "10px" }}>How Does it work?</h2>
            <p style={{ color: "#555", lineHeight: 1.7 }}>
              After the order is confirmed, we allocate the special team to scrutinize the work regarding necessary availability requirements that would be essential to complete the work. Once the process is done, in case there are any queries, we ensure to ask during the initial stage of your work and send you the outline proposed for writing secondary data collection based dissertation. Once the outline along with the chapterization plan is approved, we will dispatch the work in chapters, and update you on the progress of your work. Our exclusive coordinators would get in touch with you to clarify any queries. You can also pay in installments and work will be started as soon as receive the payments. We deliver your work as per the schedule fixed and agreed or even before the schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Full Dissertation Structure */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "8px" }}>A Full Dissertation Features</h2>
          <p style={{ color: "#555", marginBottom: "32px" }}>
            We follow according to the specific university guidelines across the United States, United Kingdom, Australia, and other Asian Universities. Our full dissertation structure would consist of:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "20px" }}>
            {dissertationStructure.map((s, i) => (
              <div key={s.title} style={{ background: "#fff", borderRadius: "10px", padding: "20px 24px", borderLeft: "4px solid #1a2a6c" }}>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginBottom: "8px" }}>
                  <span style={{ width: "26px", height: "26px", background: "#e87722", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 700, flexShrink: 0 }}>{i + 1}</span>
                  <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "0.95rem", color: "#1a2a6c" }}>{s.title}</h3>
                </div>
                <p style={{ color: "#555", fontSize: "0.87rem", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Convince + Chapter Delivery + Free Offers */}
      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "20px", marginBottom: "28px" }}>
          <div style={{ background: "#f5f7ff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "24px 28px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "8px" }}>
              Master&apos;s Dissertation Full need to convince the Supervisory committee
            </h3>
            <p style={{ color: "#555", fontSize: "0.9rem", lineHeight: 1.7 }}>
              We write complete master&apos;s dissertation from the introduction to recommendations. Though it looks very simple, it is a tedious task to complete each and every step. The steps involved: identification of topic, reviewing the literature, problem statement, research question(s) and research hypothesis development, research design, statistical analysis, discussion, results, recommendation and conclusion.
            </p>
          </div>
          <div style={{ background: "#f5f7ff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "24px 28px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "8px" }}>
              We have Chapter by Chapter Delivery Process and Deadline
            </h3>
            <p style={{ color: "#555", fontSize: "0.9rem", lineHeight: 1.7 }}>
              This is to ensure that clients have full control over the delivery and can look at the drafts of different sections. Unlike other companies, we do not charge any costs for such structure as we ensure client satisfaction at every stage of the work.
            </p>
          </div>
          <div style={{ background: "#f5f7ff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "24px 28px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "8px" }}>
              Free Offers along with your Full Master&apos;s Dissertation Writing Services
            </h3>
            <p style={{ color: "#555", fontSize: "0.9rem", lineHeight: 1.7 }}>
              We deliver more than your expectation – Abstract or Executive Summary, Graphs &amp; Tables (redrawn), statistical analysis or textual analysis of data, SPSS / other software screen shots to ensure the process that we had carried out for doing the analyses. Free Tutoring for the work being carried out – to speak confidently with your program supervisors &amp; SPSS output in Appendix.
            </p>
          </div>
        </div>

        <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "10px", padding: "24px 32px" }}>
          <p style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", fontWeight: 700, marginBottom: "6px" }}>
            Our custom master&apos;s dissertation full writing &amp; editing service is exclusive
          </p>
          <p style={{ color: "#c5d5f0" }}>as we do not just provide dissertation writing service, but the rather clear explanation and justification for the choice</p>
        </div>
      </section>

      {/* QA Boxes */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "20px" }}>
            {qaBoxes.map(q => (
              <Link key={q.title} href={q.href} style={{ background: "#fff", borderRadius: "10px", padding: "24px", textAlign: "center", textDecoration: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", display: "block" }}>
                <img src={q.img} alt={q.title} style={{ height: "64px", objectFit: "contain", marginBottom: "12px" }} />
                <div style={{ fontWeight: 700, color: "#1a2a6c", fontSize: "0.95rem", marginBottom: "6px" }}>{q.title}</div>
                <div style={{ color: "#666", fontSize: "0.85rem" }}>{q.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "8px" }}>
          Why Choose Tutors India: Full Master&apos;s Dissertation Service features
        </h2>
        <p style={{ color: "#555", marginBottom: "32px" }}>Qualified researchers, unlimited revision, only peer reviewed articles, plagiarism report, 24/7 support, 100% match with the requirement and on time delivery</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "20px" }}>
          {whyChoose.map(w => (
            <div key={w.title} style={{ background: "#f5f7ff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px 24px" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "0.95rem", color: "#1a2a6c", marginBottom: "8px" }}>{w.title}</h3>
              <p style={{ color: "#555", fontSize: "0.87rem", lineHeight: 1.7 }}>{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "28px" }}>Frequently Asked Questions</h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* Subject Expertise */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", marginBottom: "10px" }}>
            Your language editing is carried out by your choice of Subject Matter Expertise
          </h2>
          <p style={{ color: "#c5d5f0", marginBottom: "10px" }}>We have a team of 2000+ expertise across the subjects &amp; countries (including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine)</p>
          <p style={{ color: "#c5d5f0", lineHeight: 1.8, marginBottom: "28px" }}>
            Tutors India has capability and skills to handle subjects across the field. We chose qualified and experienced subject specific expertise while you order your Ph.D. or Master&apos;s dissertation. We have more than 2000+ expertise working across the world who can handle arts, literature, sciences, engineering or medicine.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {subjects.map(s => (
              <span key={s} style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "6px 16px", borderRadius: "20px", fontSize: "0.85rem" }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider testimonials={testimonials.map(t => ({ ...t, author: t.name || t.author || "" }))} />

      {/* Related Services */}
      <section style={{ background: "#f0f4ff", padding: "40px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", color: "#1a2a6c", marginBottom: "16px" }}>Related Services</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {[
              { label: "Dissertation Topic", href: "/our-services/masters-dissertation-writing-services/dissertation-topic/" },
              { label: "Dissertation Proposal", href: "/our-services/masters-dissertation-writing-services/dissertation-proposal/" },
              { label: "Dissertation Part", href: "/our-services/masters-dissertation-writing-services/dissertation-part/" },
              { label: "Specific Dissertation", href: "/our-services/masters-dissertation-writing-services/specific-dissertation/" },
              { label: "Statistical Analysis", href: "/our-services/masters-dissertation-writing-services/dissertation-statistical-analysis/" },
              { label: "CV Writing", href: "/our-services/masters-dissertation-writing-services/cv-writing/" },
            ].map(s => (
              <Link key={s.label} href={s.href} style={{ padding: "10px 22px", background: "#fff", border: "1px solid #dde2ef", borderRadius: "5px", color: "#1a2a6c", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none" }}>{s.label}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "56px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.6rem", marginBottom: "12px" }}>Place Your Order Today</h2>
        <p style={{ color: "#c5d5f0", marginBottom: "28px" }}>Invest in your career by availing language editing help from the UK &amp; the US Qualified researchers</p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 36px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 36px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
