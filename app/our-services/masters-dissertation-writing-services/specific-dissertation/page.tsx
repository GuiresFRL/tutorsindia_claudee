import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "Masters & MBA Specific Dissertation/Thesis Writing Help UK",
  description: "Custom Specific Dissertations are written based on your university guidelines-qualitative or quantitative Business Plan Meta-Analysis and Systematic Review.",
  keywords: "Dissertation Writing Services UK,Writing a dissertation,specific dissertation,Urgent Dissertation Help",
  alternates: { canonical: "https://www.tutorsindia.com/our-services/masters-dissertation-writing-services/specific-dissertation/" },
};

const specificTypes = [
  { title: "Business Plan", desc: "The most challenging dissertation for any student is undertaking the business plan as part of their dissertation work. At Tutors India, we completely aware of business plan structure and our writers has already completed more than 2500 Business plan dissertation successfully. Our team of writers consists of finance and accountant, subject matter expertise and statistical analyst. By taking our help of business plan dissertation writing." },
  { title: "Meta-Analysis", desc: "Undertaking dissertation for Meta-analysis is different from systematic review as it combines the results of many individual studies relevant to the topic and determines the findings and allows a rigorous comparison. At Tutors India, we offer complete meta-analysis writing services or part writing in terms of comprehensive search strategy, setting inclusion and exclusion criteria, publication bias, effect size calculated, appropriate using statistical methods, heterogeneity consideration, visual analysis, and any other section that you specifically request will be considered." },
  { title: "Systematic Review", desc: "Doing a dissertation in a systematic review is common today as it brings the same level of rigor to reviewing research evidence using secondary data. Our experts are a pioneer in examining both qualitative evidence and quantitative papers, or mixed, and outcomes are looked at to assess clinical effectiveness, appropriateness, feasibility, and meaningfulness. We are aware of wide range of reporting guidelines such as PRISMA (Preferred Reporting Items for Systematic Reviews and Meta-Analyses) for RCT, other intervention programs." },
  { title: "Secondary or Library data based", desc: "Although the majority of the students prefer primary data due to its advantage of customization to the particular study being completed, there is another approach called secondary sources of data. Our writers at Tutors India are a pioneer in doing secondary research based dissertation. We have completed more than 1000s of secondary based dissertation in wide disciplines in the form of competitive analysis, business plan, meta-analysis, reviews, systematic reviews and many more. If you are confused about secondary based dissertation research, then leverage the help of experts." },
];

const whyChoose = [
  { title: "A Complete Secure & Confidential Service", desc: "We offer 100% confidentiality of client's personal details, payment details, project works, and copyrights of research works. We ensure following for the conditionality, security & privacy: 1) All your projects are given unique reference codes 2) Documents are accessed only writers who signed NDA with Tutors India 3) Your financial information is protected b 128-bit secure socket layer (SSL) encryption." },
  { title: "Fully Referenced", desc: "Our dissertation work is fully referenced with latest articles and textbooks. We refer only peer-reviewed sources such as scholarly articles and textbook to select the topic. We refer database including Web of Science, ProQuest, Google Scholar, Business Source Complete, and latest newspapers articles such as Economic Times, Forbes, The Wall Street, The Economics to identify the industrial problem." },
  { title: "Our Guarantees", desc: "(1) Unlimited Revision for the work being committed. (2) We ensure on-time delivery (3) We support 24/7. (4) Our word count committed does not include references and bibliography & help you to locate the sources cited (5) Ensure three-level quality check including Technical QC, Editor QC and final check against the requirement (6) Confidentiality of the information (7) Plagiarism free work – less than 5% percent. (8) Only experienced and subject specific writers will be allotted." },
  { title: "Plagiarism Free Work", desc: "We are aware of the consequences of plagiarism. Hence, topic selection is completely plagiarism Free. Our work is scanned against online sources in a similar way like WriteCheck or Turnitin. We wanted to ensure that our clients i.e., researchers and students are not finding any issues with regards to plagiarism and so we issue plagiarism-free certificate*. Our streamlined and high-quality research writing process ensures your dissertation is not just copy-pasted, but written only after brainstorming sessions with our team of professional researchers." },
  { title: "On Time", desc: "Our work is delivered at a specified date and time. Our specific changes to the delivered work will be carried out within 45 days of delivery. We guarantee delivery of minor changes within 24 working hours and significant changes within 48 working hours. We acknowledge all your emails within 30 minutes of working hours. Further any delay in the delivery can be raised at customersupport@tutorsindia.com" },
  { title: "Experienced Writers", desc: "Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities from India, the US, and the UK. We identify the perfect SME according to your subject and area. Expert is selected through a stringent selection process including the signing of non-disclosure and confidentiality agreement. You can be very sure about the quality of the work since expert writer is identified as per International Research Experience." },
];

const faqs = [
  { q: "On which areas you provide dissertation topics and outline?", a: "We accept orders from a wide range of subjects which include Business Management (HR, operation, finance, Digitalization, technology, marketing, and many more) Economics, Computer Science, English, Literature, Engineering, Epidemiology, Public Health, Life Science, and Nutrition. We take up Engineering dissertation writing and Engineering thesis writing in the following subjects/fields including Semiconductor Devices and Circuits, Vehicular AdHoc Network, Wireless Sensor networks, Analog Electronic Circuits, Analog Integrated Circuits, Analog VLSI Design, Physics and Modeling of Semiconductor Devices, Television and Video Engineering & Electrical and Electronics. If your topic or field of interest is not listed above, kindly contact us to know more about the dissertation writing services, dissertation writing tips, dissertation and thesis writing help." },
  { q: "What Information that I need to provide while ordering for specific type of dissertation writing services?", a: "To match exactly with your requirement, we required title that you had already selected, primary or secondary or business plan, university guidelines for style and referencing style, rubric scale and marketing criteria, scope, target country, industry experience, and feasibility of data collection, if any. Even if you have only research proposal is also fine. We will able to generate rest of the information. And any other information that our writer should know also can be provided from your end." },
  { q: "Do you have Ph.D. Scholar's in your firm, who can guide me in my full dissertation writing?", a: "Yes, we have in-house expertise, consists of Ph.D. Scholars and post-doctoral fellows and MD holding Ph.D. scholars with rich experience from various universities, who can guide you throughout your research." },
  { q: "What will be the cost for my dissertation writing, and the timeline for them to be dispatched?", a: "Depends on upon the word-count/time given, your price will be quoted, for that, we request you to send the finalized title, areas of interest in specific along with guidelines/instructions, so that we can check it with our expertise team and will give the specific price structure." },
  { q: "How can I believe that my proposal will be accepted, which is made by your team, what guarantee I have?", a: "In Tutors India, we have been helping all sort of research from Ph.D. scholars to master level research work for more than 10 years; we also helped to complete 3,500(+) Ph.D.'s." },
  { q: "If I am not satisfied with my full dissertation will it be replaced?", a: "If you are not satisfied with the work being done, we appreciate to specify/provide us the directional comments/feedback, so then we can check with our expertise and provide you the justification for the same. And we provide unlimited revisions on whatever we commit." },
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
  { img: "/images/qa/Topic-Selection.png", title: "Your Master's specific Type of dissertation", desc: "Check the sample dissertation research proposal from our expert writers", href: "/our-sample-works/" },
  { img: "/images/qa/Quality-Assurance.png", title: "Quality Assurance", desc: "We ensure quality at every stage and the process.", href: "/guarantees/" },
  { img: "/images/qa/Plagiarism-Report.png", title: "Plagiarism Report", desc: "We deliver the document after scanning for plagiarism", href: "/guarantees/" },
  { img: "/images/qa/Customer-Interaction.png", title: "Customer Interaction", desc: "We interact with the customer at every stage in terms of amendments, query and delivery.", href: "/contact-us/" },
];



export default function SpecificDissertationPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Our Services</Link>{" / "}
            <Link href="/our-services/masters-dissertation-writing-services/" style={{ color: "#a0b8e0" }}>Masters Dissertation</Link>{" / "}
            <span style={{ color: "#fff" }}>Specific Dissertation</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.6rem,3vw,2.4rem)", marginBottom: "18px", lineHeight: 1.3 }}>
            The US and the UK Master&apos;s Complete Specific Type of Dissertation Writing Help
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "1.05rem", maxWidth: "820px", lineHeight: 1.8, marginBottom: "14px" }}>
            Are you looking for an expert writer of your specific type (academic or personal justification) of Master&apos;s or postgraduate dissertation (primary or secondary / qualitative or quantitative or mixed) namely, Business Plan, Meta-Analysis, Systematic Review, Reflective Practice dissertation, Secondary data based, dissertation by translation, and Library (case study) based dissertation?
          </p>
          <p style={{ color: "#a0b8e0", fontSize: "0.95rem", maxWidth: "820px", lineHeight: 1.8, marginBottom: "14px" }}>
            Your Dissertation is written by qualified and experienced researchers from the US &amp; UK. Our dissertation writers have experience in research methodology, specific domain experience, and educational degrees from international and top-ranked universities from India, the US, and the UK.
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "24px" }}>
            <Link href="/order-now/" style={{ padding: "12px 32px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "0.95rem" }}>Place an Order</Link>
            <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, fontSize: "0.95rem" }}>Then You&apos;ve Certainly Reached the Right place</Link>
          </div>
        </div>
      </section>

      {/* Full Professional Specific Dissertation Writing */}
      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "12px" }}>
          Full Professional Specific Type of Master&apos;s Dissertation Writing
        </h2>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "20px" }}>
          Writing specific Master&apos;s or Postgraduate dissertation is not an easy task to be completed by a student who may be pursuing his/her career in higher studies. Especially different types of dissertation take different format including empiricist, interpretive, or critical or criticalist. However, the choice of dissertation depends on several factors such as the choice of sampling strategy, methodology, or data analysis technique, cost, ease, convenience, and skills you have learn in time. Academic justification includes in general are philosophical, or theoretical while personal or practical or practical justification.
        </p>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "20px" }}>
          Whatsoever the model dissertation, in the UK &amp; the US universities is an extended piece of writing. Therefore, it should be written and formatted in line with requirements given by the Universities. The Master&apos;s dissertation perhaps ranges from 7000 words to 20,000 words but usually should not exceed 15,000 words exclusive of footnotes, references, and appendices. Writing Master&apos;s dissertation in the UK and other prestigious universities are challenging due to plagiarism as universities check for similarities of sentences and even structures. If you are likely to be caught, then consequences will be unpleasant.
        </p>

        <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.15rem", color: "#1a2a6c", marginBottom: "10px" }}>
          Specific Type of Dissertations are written with utmost care based on your specific university guidelines &amp; Specifications
        </h3>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "20px" }}>
          Specific Dissertation writing help and thesis writing help at Tutors India are handled and written by the style, design, and format of an ideal dissertation required by the UK, Australia, and the US universities. We demonstrate knowledge and understanding beyond undergraduate level and ensure to limit the scope and depth that taught in your class. We assist you to complete your full dissertation namely, a topic selection, research proposal writing, reflection journals for your dissertation, the introduction, the literature review, research methodology, presenting and discussing findings, research ethics, citations, and references along with the Appendices. Our academic style follows a clearly structured approach to the validation and justification of facts, opinions, theories to form a precise argument.
        </p>

        <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.15rem", color: "#1a2a6c", marginBottom: "10px" }}>
          Dissertation Type &amp; Choice of Research Methodology based on your specific university guidelines &amp; Specifications: Library, Secondary data, Business Plan, Systematic Review &amp; Meta-analysis
        </h3>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "14px" }}>
          We offer dissertation by research and dissertation by Translation / commentary (Title page, abstract, acknowledgement, content page, introduction, commentary (literature review, translation commentary and conclusion), and references. The dissertation will also have references and appendix includes source text and translated text. Our writers are proficient in handling dissertation with qualitative (e.g. interview guide design or semi-structured, focus group, observation, case study), quantitative (e.g. survey) or triangulation choice of methodology (e.g. mixed choice).
        </p>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "28px" }}>
          We offer specific type of dissertation writing help. We can write starting from abstract or executive summary writing help, introduction chapter, literature review, theoretical framework chapter, hypotheses development, help with questionnaire development, research questions and objectives development, data analysis help, discussions, conclusions, recommendations, interview transcript analysis, ethical form filling, appendices, and any other help you may require with your dissertation. Even if you have problem in identifying the right research design, identifying base for the tools, difficulties in identifying appropriate research gap, to write a &quot;statement of the problem&quot; section, identifying right statistical tool for your data, data collection part, secondary research, and any others that you have.
        </p>

        <div style={{ background: "#f0f4ff", borderRadius: "10px", padding: "24px 28px", borderLeft: "5px solid #1a2a6c" }}>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", color: "#1a2a6c", marginBottom: "8px" }}>
            The UK &amp; the US Specific Professional Master&apos;s dissertation Writing Help
          </h3>
          <p style={{ color: "#444", lineHeight: 1.8, margin: 0 }}>
            Our specific Dissertation writing demonstrates the ability to communicate complex ideas critically, concisely, and clearly. Our professional dissertation writers have completed around 8000 Masters Dissertation successfully. If you are unsure of what to do, avail our full or complete thesis writing service now.
          </p>
        </div>
      </section>

      {/* Simply Easy */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", color: "#1a2a6c", marginBottom: "12px" }}>
            Specific Type of Dissertation Writing is Simply easy &amp; Straightforward
          </h2>
          <p style={{ color: "#444", lineHeight: 1.8 }}>
            Our thesis and dissertation writing help guarantees that your dissertation is confidential, and so you do not have to worry about it. Just send us your dissertation topic along with the deadline and see the results that are far justified and mark the success of your dissertation.
          </p>
        </div>
      </section>

      {/* Services + How it works */}
      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "24px", marginBottom: "40px" }}>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "24px 28px" }}>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", color: "#1a2a6c", marginBottom: "10px" }}>
              What Services do we offer under specific type of dissertation?
            </h2>
            <p style={{ color: "#555", lineHeight: 1.7, marginBottom: "12px" }}>
              We write complete master&apos;s dissertation from the introduction to recommendations. Although it looks simple, but in practical, it&apos;s a tedious task to complete each and every step.
            </p>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "0.95rem", color: "#1a2a6c", marginBottom: "6px" }}>Specialized Subject Matter Expertise across the globe</h3>
            <p style={{ color: "#555", fontSize: "0.94rem", lineHeight: 1.7, margin: 0 }}>
              We offer topic Selection for Management, Social Science, Engineering, Technology, Life Science, Medical, Arts &amp; Literature / Linguistics, and much more.
            </p>
          </div>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "24px 28px" }}>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", color: "#1a2a6c", marginBottom: "10px" }}>
              Our deliverables while you order custom specific type of master&apos;s dissertation
            </h2>
            <p style={{ color: "#555", lineHeight: 1.7 }}>
              Specific Dissertation writing services from Tutors India is simply easy and straightforward. You will get the reply within 30 minutes which would enable to place your order quickly without any delay in submissions. We would provide executive summary/abstract, free articles used for writing the full dissertation, SPSS data sheet and output, questionnaire or semi-structured interview questions and any other information that we have used to write the dissertation such as reflective log or diary.
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

      {/* Specific Dissertation Types */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "8px" }}>A Specific Dissertation Types</h2>
          <p style={{ color: "#555", marginBottom: "32px" }}>
            We follow according to the specific university guidelines. However, our formal structure that we designed is to meet the universities across the United States, United Kingdom, Australia, and other Asian Universities. Our specific dissertation would consist of:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "20px" }}>
            {specificTypes.map((s, i) => (
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

      {/* Convince + Chapter + Free Offers */}
      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "20px", marginBottom: "28px" }}>
          <div style={{ background: "#f5f7ff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "24px 28px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "8px" }}>
              Master&apos;s Specific Dissertation need to convince the Supervisory committee
            </h3>
            <p style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.7 }}>
              We have an expertise to handle any types of dissertation from the introduction to recommendations. Though it looks very simple, it is a tedious task to complete each and every step. The steps involved: identification of topic, reviewing the literature, problem statement, research question(s) and research hypothesis development, research design, statistical analysis, discussion, results, recommendation and conclusion.
            </p>
          </div>
          <div style={{ background: "#f5f7ff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "24px 28px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "8px" }}>
              We have Chapter by Chapter Delivery Process and Deadline
            </h3>
            <p style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.7 }}>
              This is to ensure that clients have full control over the delivery and can look at the drafts of different sections. Unlike other companies, we do not charge any costs for such structure as we ensure client satisfaction at every stage of the work.
            </p>
          </div>
          <div style={{ background: "#f5f7ff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "24px 28px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "8px" }}>
              Free Offers along with your Full Master&apos;s Specific Dissertation Writing Services
            </h3>
            <p style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.7 }}>
              We deliver more than your expectation – Abstract or Executive Summary, Graphs &amp; Tables (redrawn), statistical analysis or textual analysis of data, SPSS / other software screen shots to ensure the process that we had carried out for doing the analyses. Free Tutoring for the work being carried out – to speak confidently with your program supervisors &amp; SPSS output in Appendix.
            </p>
          </div>
        </div>

        <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "10px", padding: "24px 32px" }}>
          <p style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", fontWeight: 700, marginBottom: "6px" }}>
            Our custom master&apos;s specific type of dissertation full writing &amp; editing service is exclusive
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
          Why Choose Tutors India: Specific Master&apos;s Dissertation Service features
        </h2>
        <p style={{ color: "#555", marginBottom: "32px" }}>Qualified researchers, unlimited revision, only peer-reviewed articles, plagiarism report, 24/7 support, 100% match with the requirement and on time delivery</p>
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
      <TestimonialSlider testimonials={testimonials.map(t => ({ ...t, author: t.name }))} />

      {/* Related Services */}
      <section style={{ background: "#f0f4ff", padding: "40px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", color: "#1a2a6c", marginBottom: "16px" }}>Related Services</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {[
              { label: "Dissertation Topic", href: "/our-services/masters-dissertation-writing-services/dissertation-topic/" },
              { label: "Dissertation Proposal", href: "/our-services/masters-dissertation-writing-services/dissertation-proposal/" },
              { label: "Full Dissertation", href: "/our-services/masters-dissertation-writing-services/full-dissertation/" },
              { label: "Dissertation Part", href: "/our-services/masters-dissertation-writing-services/dissertation-part/" },
              { label: "Statistical Analysis", href: "/our-services/masters-dissertation-writing-services/dissertation-statistical-analysis/" },
              { label: "CV Writing", href: "/our-services/masters-dissertation-writing-services/cv-writing/" },
            ].map(s => (
              <Link key={s.label} href={s.href} style={{ padding: "10px 22px", background: "#fff", border: "1px solid #dde2ef", borderRadius: "5px", color: "#1a2a6c", fontWeight: 600, fontSize: "0.96rem", textDecoration: "none" }}>{s.label}</Link>
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
