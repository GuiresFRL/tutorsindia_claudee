import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "Expert Master's Chapter-wise Dissertation Writing Services",
  description: "Masters Dissertation Part or chapter-wise writing help. Looking to avail only to write part dissertation such as introduction literature review methodology etc.",
  keywords: "chapterwise Mentoring Services,Chapter-wise Assistance for Dissertation",
  alternates: { canonical: "https://tutorsindia.com/our-services/masters-dissertation-writing-services/dissertation-part/" },
};

const partFaqs = [
  {
    q: "On which are the areas you provide Masters part-dissertation writing services?",
    a:
      "We accept orders from a wide range of subjects which include Business Management, finance, operation management, supply chain and logistics management, entrepreneurial management, human resource management, psychology, history, geography, engineering, healthcare, Economics, Computer Science, English, Literature, Engineering, Epidemiology, nursing, medical, Public Health, Life Science, and Nutrition. If your topic or field of interest is not listed above, kindly contact us to know more about the dissertation writing services, dissertation writing tips, dissertation and thesis writing help. To match exactly with your requirement, we required your i) marking criteria, ii) University guidelines, iii) professor feedback, iv) dissertation structure guidelines from the University v) complete dissertation that you had submitted to the University vi) data sheet used for the analysis vii) research proposal and any other information that you wanted to share.",
  },
  {
    q:
      "Is my Masters Part Dissertation writing document met the University guidelines and high academic standard?",
    a:
      "Of Course, Tutors India writers are very specific in following all the UK, US, Australia and other Universities guidelines as well as meet the high academic standards in writing the best dissertation. We ensure that your Masters Dissertation part followed with recent university guidelines because of our expertise is always up-to-date with the universities guidelines.",
  },
  {
    q: "What Masters Dissertation part Does Tutors India Provide?",
    a:
      "If you are looking to avail our services only to write Master's dissertation part, then we offer an introduction, statistical analysis, materials or methods/methodology, literature review, findings or interpretation of your statistical analysis and conclusion or dissertation part services. Alternatively, Get the Dissertation chapter wise writing services from our Domain expertise.",
  },
  {
    q:
      "I have heard many sad stories about unqualified people being assigning to write Masters dissertation writing services. Is it true?",
    a:
      "Yes, we have also heard many stories as well. Tutor India has conduct brainstorming session so you will get opportunities to talk with our expertise directly as to understand their skill set and experience then you will decide whether you need to take the services or not. Further, this company relies on good word of mouth from many clients. You click to see the client's voice section understand our client's view about Tutors India.",
  },
  {
    q: "Why do you Provide Masters part dissertation free drafts for all orders?",
    a:
      "We provide the Masters Part dissertation free draft after completing each chapter or dissertation part to ensure that our process flow is consistent. It helps the students to identify the changes and give the feedback to improve chapter wise, so it is easy to explain to your committee quickly through oral. Get back suggestion and instantly can change it.",
  },
];

const testimonials = [
  {
    quote:
      "Honestly, I didn't expect this level of quality. The team understood exactly what I needed and delivered work that felt genuinely professional. My confidence went from stressed to unstoppable.",
    author: "Amelia Brooks, UK",
    role: "Big Data Analytics",
  },
  {
    quote:
      "I was stuck, frustrated, and running out of time. Tutors India stepped in at the perfect moment and turned everything around faster than I imagined. Worth every bit.",
    author: "Oliver Bennett, UK",
    role: "Big Data Analytics",
  },
  {
    quote:
      "The attention to detail was incredible. It didn't feel like I was working with a service provider — it felt like I had an expert academic partner guiding me throughout.",
    author: "Layla Al Mansoori",
    role: "Essay Writing and Assignment Writing",
  },
  {
    quote:
      "My research finally started making sense after working with this team. Their guidance simplified complex ideas and gave my project the structure it was missing.",
    author: "Hassan Al Falasi, UAE",
    role: "Essay Writing and Assignment Writing",
  },
  {
    quote:
      "I submitted my work with complete confidence for the first time ever. The quality, formatting, and clarity were all beyond what I hoped for.",
    author: "Charlotte Reed, UK",
  },
  {
    quote:
      "The team handled everything professionally from start to finish. Timely updates, quick responses, and excellent academic quality — exactly what students need during stressful deadlines.",
    author: "Zain Al Hashmi, UAE",
  },
  {
    quote:
      "I was amazed at how naturally the content matched my writing style and university standards. It felt authentic, polished, and academically strong.",
    author: "Emily Carter",
  },
  {
    quote:
      "This service saved me during one of the most stressful phases of my academic journey. Reliable, professional, and genuinely supportive throughout the process.",
    author: "Noora Al Zaabi, UAE",
  },
  {
    quote:
      "The final work looked so refined and well-structured that even my mentor appreciated the improvement immediately. Highly recommended for serious academic support.",
    author: "George Whitmore, UK",
  },
  {
    quote:
      "What impressed me most was how personalized the support felt. They didn't just complete the work — they understood my goals and helped me present them better.",
    author: "Khalid Al Nuaimi",
  },
];

const chapterCards = [
  {
    title: "Only Abstract Writing",
    body: "We write abstract for your master's dissertation which would approximately contain 250 to 350 words. We complete the abstract after the full dissertation has been written that includes a brief summary of introduction or background, objectives, boundaries, methodology, the results of the dissertation research, main conclusion that you arrive, and recommendations.",
  },
  {
    title: "Only Acknowledgement Writing",
    body: "A brief statement that ensures the following – we ensure to comment about family and friends at a minimum level while more concentration will be given on those who have given direct assistance. Further, the section will also provide assurance that the dissertation is own, evidence at your findings, a declaration to show the work complies with University regulation on plagiarism and a statement of the word count.",
  },
  {
    title: "Only Table of Content",
    body: "The section will list the chapter headings, appendices, references along with the page numbers. Apart, there would be a separate list for lists of figures, tables, and abbreviations. We use Microsoft Word to create lists using the indexing and style functions.",
  },
  {
    title: "Full Dissertation Title",
    body: "A precise Title as approved by the University. The title would convey the ideas of your investigation, orient your readers to the topic, indicate the type of study you will conduct, population you target and geographical location.",
  },
  {
    title: "Only Dissertation Introduction Chapter Writing – I",
    body: "A Brief description of the topic, research questions, and research objectives. The section would provide necessary background information and provides readers with some sense of overall research including general territory, broad foundation (existing literature), the general scope, overview of the sections and finally should engage the readers.",
  },
  {
    title: "Aim and Overall Objective / Hypotheses Section Chapter Writing – II",
    body: "A description what research want to achieve from carrying out this research. The section includes a clear statement of the research objectives, questions that researcher seeks to answer or the hypothesis. The section also includes original contributions of your study, with a detailed account of the points summarized in the introduction, and rationale.",
  },
  {
    title: "Literature, Context, Background Section Writing – III",
    body: "This should provide some insights on (a) studies that have been conducted previously in your research field (b) familiarity with major themes, (c) the range of theories scholars use to analyse their primary sources (d) gaps identified in the literature (e) further investigations you intend to pursue as part of this dissertation and (f) best methodologies.",
  },
  {
    title: "The Detailed Research Methodology Chapter Writing – IV",
    body: "The section is essential to the good dissertation. This section includes the overall methodological approach, Research design, strategy, qualitative or quantitative, research philosophy, target area, population, sample size, primary or secondary data collection, ethical consideration, pilot study, validity, reliability, & statistical analysis.",
  },
  {
    title: "Results / Findings / Data Analysis Chapter Writing – V",
    body: "The chapter presents the findings of the study in the form of tables & figures along with the interpretation. Depending on the choice of research methodology, the page will have a detailed quantitative models, hypothesis testing, showing some basic descriptive statistics including mean, SD, regression. Or a qualitative analysis dealing with content or textual or case study description. We use SPSS / R / SAS / STATA / Minitab for analysis.",
  },
  {
    title: "Discussion, Summary & Conclusion Chapter Writing – VI",
    body: "In this chapter, we introduce three section viz., discussion, summary, and conclusion. The discussion chapter compares and contrasts the findings of previously published authors in line with the research questions. Since this is the heart of the dissertation, we ensure to develop analytics and critical thinking concerning theoretical arguments grounded in the literature review. The other section would be just summary followed by the conclusion of main findings and recommendations.",
  },
  {
    title: "Dissertation References / Citation Compliance",
    body: "Work Cited, or sources cited (in-text) or list of sources cited while writing a dissertation. This will include peer-reviewed scholarly articles, textbooks, newspaper articles, annual reports, obtained from various database including ProQuest, Emerald, IEEE, Web of Science, Academic Complete, SciDirect, JSTOR, Elsevier.",
  },
  {
    title: "Bibliography & Appendices for Your Dissertation",
    body: "Lists that have read but not cited will also be included. The section will inform the readers about various sources that also form the basis for the proposed study and methodology. Appendices for the dissertation may include experiment diagrams, questionnaire, permission for human subject testing, ethical forms, and reflection.",
  },
  {
    title: "Dissertation Formatting or Structuring Your Dissertation",
    body: "We check for word count (e.g. 12,000 to 15,000 excludes abstract, references, and source of text translation should be 6,000 words while commentary 6,000 to 7,000 words), paper size, margin settings, line spacing, page numbering, text, font, alignment, front cover, acknowledgment, abstract, table of contents, lists of figures, lists of tables, abbreviations, main text, chapter & section headings, citation format (e.g. the Harvard System of referencing), academic style of writing (e.g. the third person singular passive), approval of questionnaire and surveys, the lists of references, a minimum text notes, attribution and plagiarism, confidentiality, ethics, and assessment report.",
  },
];

const guarantees = [
  {
    title: "A Complete Secure & Confidential Service",
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
    body: "Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities from US, and the UK. We identify the perfect SME according to your subject and area. Expert is selected through a stringent selection process including the signing of non-disclosure and confidentiality agreement. You can be very sure about the quality of the work since expert writer is identified as per International Research Experience.",
  },
];

const subjects = [
  "Arts & Humanities",
  "Biological Sciences",
  "Business & Management Studies",
  "Marketing & Communication",
  "Engineering & Technology",
  "Natural Sciences & Mathematics",
  "Biological & Life Science",
  "Economics & Administration",
  "Humanities & Social Science",
  "Law",
  "Medicine & Health",
  "Education & Training",
  "Journalism & Media",
  "Agriculture & Forestry",
  "Computer Science & IT",
  "Hospitality, Leisure & Sports",
];

export default function DissertationPartPage() {
  return (
    <div style={{ fontFamily: "Georgia, serif", color: "#222" }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)",
          color: "#fff",
          padding: "72px 24px 60px",
        }}
      >
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <h1
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: "clamp(1.6rem,3.5vw,2.6rem)",
              fontWeight: 700,
              lineHeight: 1.3,
              marginBottom: 20,
            }}
          >
            The US and the UK Master&apos;s Part / Chapter-wise Dissertation Writing Service
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.8,
              maxWidth: 760,
              margin: "0 auto 10px",
              opacity: 0.95,
            }}
          >
            If you are looking to avail our services only to write part of your master&apos;s dissertation such as only introduction chapter, literature review, methodology or materials and methods, findings or only interpretation of your statistical analysis or conclusion or only discussion chapter?
          </p>
          <p
            style={{
              fontSize: "1.15rem",
              fontWeight: 700,
              marginBottom: 28,
              opacity: 0.98,
            }}
          >
            Then You&apos;ve Certainly Reached the Right Place
          </p>
          <Link
            href="/contact-us"
            style={{
              display: "inline-block",
              background: "#e87722",
              color: "#fff",
              padding: "14px 36px",
              borderRadius: 4,
              fontWeight: 700,
              fontSize: "1rem",
              textDecoration: "none",
            }}
          >
            Get Expert Help Now
          </Link>
        </div>
      </section>

      {/* Writers section */}
      <section style={{ background: "#f8f9fc", padding: "52px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: "1.7rem",
              color: "#1a2a6c",
              marginBottom: 16,
            }}
          >
            Your Part Dissertation (Chapter) is written by qualified and experienced researchers from the US &amp; UK
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#444", maxWidth: 780, margin: "0 auto" }}>
            Our dissertation writers have experience in research methodology, specific industry experience, and educational degrees from international and top-ranked universities from US, and the UK.
          </p>
        </div>
      </section>

      {/* Chapter Writing intro */}
      <section style={{ padding: "52px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: "1.55rem",
              color: "#1a2a6c",
              marginBottom: 14,
            }}
          >
            Custom Master&apos;s Dissertation Chapter Writing
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#444", marginBottom: 28 }}>
            Writing a dissertation is a daunting task as student need to produce an original piece of research work on a topic of special interest. However, writing a dissertation requires a range of planning and research skills as it demand specific writing style as per the university requirement. Understanding, Tutors India, only provide support for writing your full dissertation, but our service also extends support for writing part-dissertation chapter writing services. We can write starting from abstract or executive summary writing services, introduction chapter, literature review, theoretical framework chapter, hypotheses development, help with questionnaire development, research questions and objectives development, data analysis help, discussions, conclusions, recommendations, interview transcript analysis, ethical form filling, appendices, and any other help you may require with your dissertation. Even if you have a problem in identifying the right research design, identifying base for the tools, difficulties in identifying appropriate research gap, to write a &ldquo;statement of the problem&rdquo; section, identifying a right statistical tool for your data, data collection part, secondary research, and any others that you have.
          </p>

          <h2
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: "1.4rem",
              color: "#1a2a6c",
              marginBottom: 14,
            }}
          >
            Dissertation chapter is written with utmost care based on your specific university guidelines &amp; Specifications
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#444", marginBottom: 28 }}>
            Part custom Dissertation writing services and thesis writing services at Tutors India are handled and written by the style, design, and format of an ideal dissertation required by the UK, Australia, and the US universities. We assist you to complete your part dissertation namely, a topic selection, research proposal writing, reflection journals for your dissertation, the introduction, the literature review, research methodology, presenting and discussing findings, research ethics, citations and referencing, and references along with the Appendices.
          </p>

          <h2
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: "1.4rem",
              color: "#1a2a6c",
              marginBottom: 14,
            }}
          >
            The UK &amp; the US Professional Master&apos;s Dissertation Chapter Writing
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#444" }}>
            Our part dissertation writing demonstrates the ability to communicate complex ideas critically, concisely, and clearly. Our professional dissertation writers have completed around 8000 Masters Dissertation successfully. If you are unsure of what to do, avail our full or complete thesis writing services now.
          </p>
        </div>
      </section>

      {/* Easy & Straightforward */}
      <section style={{ background: "#f8f9fc", padding: "52px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: "1.55rem",
              color: "#1a2a6c",
              marginBottom: 16,
            }}
          >
            Dissertation Chapter Writing is Simply Easy &amp; Straightforward
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#444" }}>
            Our thesis and dissertation writing help guarantees that your dissertation is confidential, and so you do not have to worry about it. Just send us your dissertation topic along with the deadline and see the results that are far justified and mark the success of your dissertation.
          </p>
        </div>
      </section>

      {/* Services offered */}
      <section style={{ padding: "52px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: "1.55rem",
              color: "#1a2a6c",
              marginBottom: 16,
            }}
          >
            What Services do we offer under Specific Type of Dissertation?
          </h2>
          <div
            style={{
              background: "#1a2a6c",
              color: "#fff",
              padding: "28px 32px",
              borderRadius: 8,
              marginBottom: 24,
            }}
          >
            <p style={{ lineHeight: 1.8, opacity: 0.92 }}>
              We write complete master&apos;s dissertation from the introduction to recommendations. Although it looks simple, but in practical, it&apos;s a tedious task to complete each and every step.
            </p>
          </div>

          <h3
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: "1.2rem",
              color: "#1a2a6c",
              marginBottom: 10,
            }}
          >
            Specialized Subject Matter Expertise Across the Globe
          </h3>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#444" }}>
            We offer topic Selection for Management, Social Science, Engineering, Technology, Life Science, Medical, Arts &amp; Literature / Linguistics, and much more.
          </p>
        </div>
      </section>

      {/* Deliverables */}
      <section style={{ background: "#f8f9fc", padding: "52px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: "1.55rem",
              color: "#1a2a6c",
              marginBottom: 16,
            }}
          >
            Our Deliverables While You Order Custom Written Master&apos;s Dissertation Writing Service
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#444" }}>
            Full Dissertation writing services from Tutors India research writing services is simply easy and straightforward. You will get the reply within 30 minutes which would enable to place your order quickly without any delay in submissions. We would provide executive summary /abstract, free articles used for writing the full dissertation, SPSS data sheet and output, questionnaire or semi-structured interview questions and any other information that we have used to write the dissertation such as reflective log or diary.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: "52px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: "1.55rem",
              color: "#1a2a6c",
              marginBottom: 16,
            }}
          >
            How Does It Work?
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#444" }}>
            After the order is confirmed, we allocate the special team to scrutinize the work regarding necessary availability requirements that would be essential to complete the work. Once the process is done, in case there are any queries, we ensure to ask during the initial stage of your work and send you the outline proposed for writing secondary data collection based dissertation. Once the outline along with the chapterization plan is approved, we will dispatch the work in chapters, and update you on the progress of your work. Our exclusive coordinators would get in touch with you to clarify any queries. You can also pay in installments and work will be started as soon as receive the payments. We deliver your work as per the schedule fixed and agreed or even before the schedule.
          </p>
        </div>
      </section>

      {/* Part Dissertation Features – Chapter Cards */}
      <section style={{ background: "#f8f9fc", padding: "52px 24px" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: "1.55rem",
              color: "#1a2a6c",
              marginBottom: 8,
              textAlign: "center",
            }}
          >
            A Part Dissertation Features
          </h2>
          <p style={{ textAlign: "center", color: "#555", marginBottom: 36 }}>
            We follow according to the specific university guidelines across the United States, United Kingdom, Australia, and other Asian Universities. Our part dissertation structure would consist of:
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
              gap: 20,
            }}
          >
            {chapterCards.map((card) => (
              <div
                key={card.title}
                style={{
                  background: "#fff",
                  borderRadius: 8,
                  padding: "22px 20px",
                  borderTop: "4px solid #2563b0",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                }}
              >
                <h4
                  style={{
                    fontFamily: "Merriweather, serif",
                    fontSize: "0.97rem",
                    color: "#1a2a6c",
                    marginBottom: 10,
                  }}
                >
                  {card.title}
                </h4>
                <p style={{ fontSize: "0.92rem", lineHeight: 1.75, color: "#555" }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Convince supervisory committee */}
      <section style={{ padding: "52px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: "1.4rem",
              color: "#1a2a6c",
              marginBottom: 14,
            }}
          >
            Master&apos;s Dissertation Part or Chapter Need to Convince the Supervisory Committee
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#444", marginBottom: 28 }}>
            We write part or chapter wise master&apos;s dissertation from the introduction to recommendations. Though it looks very simple, it is a tedious task to complete each and every step. The steps involved in such tedious task. Namely identification of topic, reviewing the literature or literature review, problem statement, research question(s) and research hypothesis development, research design (sampling, measures, procedures and data collection), statistical analysis, (data analysis preparation, data entry and screening, interpretation), discussion, results, recommendation and conclusion.
          </p>

          <h2
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: "1.4rem",
              color: "#1a2a6c",
              marginBottom: 14,
            }}
          >
            We Have Chapter by Chapter Delivery Process and Deadline
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#444" }}>
            This is to ensure that clients have full control over the delivery and can look at the drafts of different sections. Unlike other companies, we do not charge any costs for such structure as we ensure client satisfaction at every stage of the work.
          </p>
        </div>
      </section>

      {/* Free Offers */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "44px 24px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Merriweather, serif", fontSize: "1.45rem", marginBottom: 16 }}>
            Free Offers Along with Your Master&apos;s Part or Chapter-wise Dissertation Writing Services
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.85, opacity: 0.93 }}>
            We deliver more than your expectation – Abstract or Executive Summary, Graphs &amp; Tables (redrawn), statistical analysis or textual analysis of data, SPSS / other software screen shots to ensure the process that we had carried out for doing the analyses Free Tutoring for the work being carried out – to speak confidently with your program supervisors &amp; SPSS output in Appendix.
          </p>
        </div>
      </section>

      {/* Custom exclusive + QA */}
      <section style={{ padding: "52px 24px", background: "#f8f9fc" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: "1.4rem",
              color: "#1a2a6c",
              marginBottom: 10,
            }}
          >
            Our Custom Master&apos;s Dissertation Part or Chapter-wise Writing &amp; Editing Service is Exclusive
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#444", marginBottom: 28 }}>
            as we do not just provide chapter-wise dissertation writing service, but the rather clear explanation and justification for the choice.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))",
              gap: 18,
            }}
          >
            {[
              {
                title: "Your Master's Chapter-wise Dissertation",
                body: "Check the sample dissertation research proposal from our expert writers.",
              },
              {
                title: "Quality Assurance",
                body: "We ensure quality at every stage and the process.",
              },
              {
                title: "Plagiarism Report",
                body: "We deliver the document after scanning for plagiarism.",
              },
              {
                title: "Customer Interaction",
                body: "We interact with the customer at every stage in terms of amendments, query and delivery.",
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  background: "#fff",
                  borderRadius: 8,
                  padding: "20px",
                  borderLeft: "4px solid #e87722",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                }}
              >
                <h4
                  style={{
                    fontFamily: "Merriweather, serif",
                    fontSize: "0.95rem",
                    color: "#1a2a6c",
                    marginBottom: 8,
                  }}
                >
                  {card.title}
                </h4>
                <p style={{ fontSize: "0.96rem", lineHeight: 1.7, color: "#555" }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose – Guarantees */}
      <section style={{ padding: "52px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: "1.55rem",
              color: "#1a2a6c",
              marginBottom: 8,
              textAlign: "center",
            }}
          >
            Why Choose Tutors India: Master&apos;s Part or Chapter-wise Dissertation Service Features
          </h2>
          <p style={{ textAlign: "center", color: "#555", marginBottom: 36 }}>
            Qualified researchers, unlimited revision, only peer-reviewed articles, plagiarism report, 24/7 support, 100% match with the requirement and on time delivery
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
              gap: 20,
            }}
          >
            {guarantees.map((g) => (
              <div
                key={g.title}
                style={{
                  background: "#f8f9fc",
                  borderRadius: 8,
                  padding: "22px 20px",
                  borderTop: "4px solid #e87722",
                }}
              >
                <h4
                  style={{
                    fontFamily: "Merriweather, serif",
                    fontSize: "1rem",
                    color: "#1a2a6c",
                    marginBottom: 10,
                  }}
                >
                  {g.title}
                </h4>
                <p style={{ fontSize: "0.93rem", lineHeight: 1.75, color: "#555" }}>{g.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#f8f9fc", padding: "52px 24px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: "1.55rem",
              color: "#1a2a6c",
              marginBottom: 28,
              textAlign: "center",
            }}
          >
            Frequently Asked Questions
          </h2>
          <FaqAccordion faqs={partFaqs} />
        </div>
      </section>

      {/* Subject Matter Expertise */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "52px 24px" }}>
        <div style={{ maxWidth: 980, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Merriweather, serif", fontSize: "1.55rem", marginBottom: 12 }}>
            Your Dissertation is Written by Your Choice of Subject Matter Expertise
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, opacity: 0.92, maxWidth: 760, margin: "0 auto 28px" }}>
            We have a team of 2000+ expertise across the subjects &amp; countries (including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine). Tutors India has capability and skills to handle subjects across the field. We chose qualified and experienced subject specific expertise while you order your Ph.D. or Master&apos;s dissertation.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              justifyContent: "center",
            }}
          >
            {subjects.map((s) => (
              <span
                key={s}
                style={{
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  borderRadius: 20,
                  padding: "6px 16px",
                  fontSize: "0.94rem",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: "52px 24px", background: "#f8f9fc" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: "1.55rem",
              color: "#1a2a6c",
              textAlign: "center",
              marginBottom: 32,
            }}
          >
            Voice of Our Customer
          </h2>
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)",
          color: "#fff",
          padding: "56px 24px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontFamily: "Merriweather, serif", fontSize: "1.8rem", marginBottom: 16 }}>
          Ready to Get Your Dissertation Chapter Written?
        </h2>
        <p style={{ fontSize: "1.05rem", marginBottom: 28, opacity: 0.92 }}>
          Invest in your career by availing language editing help from the UK &amp; the US Qualified researchers.
        </p>
        <Link
          href="/contact-us"
          style={{
            display: "inline-block",
            background: "#e87722",
            color: "#fff",
            padding: "14px 40px",
            borderRadius: 4,
            fontWeight: 700,
            fontSize: "1rem",
            textDecoration: "none",
          }}
        >
          Order Now
        </Link>
      </section>
    </div>
  );
}
