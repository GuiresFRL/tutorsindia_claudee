"use client";

import Link from "next/link";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

const resitFaqs = [
  {
    q:       "What Information that I need to provide while ordering for resit dissertation writing services?",
    a:       "To match exactly with your requirement, we required your i) marking criteria, ii) University guidelines, iii) professor feedback, iv) dissertation structure guidelines from the University v) complete dissertation that you had submitted to the University vi) data sheet used for the analysis vii) research proposal and any other information that you wanted to share. We accept orders from a wide range of subjects which include Business Management, finance, operation management, supply chain and logistics management, entrepreneurial management, human resource management, psychology, history, geography, engineering, healthcare, Economics, Computer Science, English, Literature, Engineering, Epidemiology, nursing, medical, Public Health, Life Science, and Nutrition.",
  },
  {
    q: "What if my resit dissertation gets rejected?",
    a:       "This is unlikely to happen at Tutors India, for the following reasons: (a) we offer our services to our clients with complete justification – if you wanted to reject the work, there is a need for proof to show the reasons based on the client's perceptions. Since the communication was made between client and Tutors India. (b) Secondly, we provide unlimited revisions to support our client for the commitment we had made initially.",
  },
  {
    q: "How quickly you can complete my resit dissertation?",
    a:       "Even though, it is a tedious task, our writers can complete resit dissertation with careful way from the introduction to references within short period. We understand the importance of your future so our writer gives the full attention, who is help to write a rewrite dissertation with 100% successful manner. For Urgent delivery, you can contact us for more details.",
  },
  {
    q: "How can I trust Tutors India get approved my resit dissertation?",
    a:       "Yes, we have also heard many stories as well. Tutor India has conduct brainstorming session so you will get opportunities to talk with our expertise directly as to understand their skill set and experience then you will decide whether you need to take the services or not. Further, this company relies on good word of mouth from many clients. You click to see the client's voice section understand our client's view about Tutors India.",
  },
  {
    q: "How do you tackle the plagiarism issues in resit dissertation?",
    a:       "Tutors India has provided the Top quality dissertation document with no plagiarism. We never allow its dissertation to look average quality. We maintain the high quality and unique in your resit dissertation writing by facilitating comprehensive quality-checking department. All our writers are mixed of seniors and fresher academicians who follow the stringent guidelines to give plagiarism free resit content. All the writers are senior academicians who exhibit professional ethics to the utmost level. Topping it, the writing department is equipped with advanced anti plagiarism software to eliminate any possibility for plagiarism.",
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

const resitSteps = [
  {
    title: "Reviewing the Feedback",
    body: "We review the feedback thoroughly given by the supervisor or the review committee. Our writers at Tutors India ensure to pay attention to each and every comment and ensure that we work on the specific comment as raised by your supervisor. Before starting your work, our subject matter expertise will review the feedback and prepare the report that shows which can be addressed quickly without your help and other comments that may require your support to complete a resit dissertation.",
  },
  {
    title: "Decision Factor",
    body: "Based on the analysis, we decide whether to carry out a complete rewiring or editing services. By analyzing, would help to predict the timeline of various expertise involved in a resit dissertation. The following are the factors considered while we undertake resit dissertation writing that includes, resubmission deadline, number of remarks, especially remarks in the research methodology and data collection chapters, style of writing, and supervisor tone.",
  },
  {
    title: "Rubric Scale, Line by Line & Chapter wise Scrutinization",
    body: "In general university has the assessment criteria, where chapter I, an introduction part carries 10% weight, a literature review (Chapter II) has 20-40% weight, research methodology (Chapter III) or design carries 15-20%, while 30% of results and interpretation (Chapter IV) and 10% for conclusion and discussion (Chapter V). Overall, 10% for presentation and referencing. We check out whether introduction clearly sets the background and statement of the problem both from industry specific and theoretical problem. Further aims and objectives will be scrutinized.",
  },
  {
    title: "The Relevance of Sources and Critical Approach",
    body: "We check whether the reviews of relevant sources are organized in chronological order and logical sequence and ensure whether appropriates gaps are identified using latest references from peer reviewed articles? We check whether there is a sufficient literature to support your research objectives and research questions. Further, we also scrutinize for the justification of research methodology and whether you have rejected other methodologies by substantiating with relevant literature sources and choice of data collection, using critical approach.",
  },
  {
    title: "Analysis and Critical Interpretation",
    body: "Whether statistical analyses are relevant to the objectives and research questions identified? We check each and every step, including analysis tools such as tools and techniques, whether applied correct tool for the identified objectives. For an instance, if the objective has a comparison between and within groups, whether an appropriate tool has been used to compare two groups? whether interpretation has any meaning with relevance to the research objective or is it only a statistical interpretation explaining significance or just ended up in explaining the tables? Finally, check how the entire chapter has been drafted with relevance to the research objectives.",
  },
  {
    title: "Conclusive Coherence and New Knowledge",
    body: "Whether conclusion is made with relevance to the research objective and research questions? Does researcher could able to shed new knowledge to the research? Whether a critical analysis has been taken by comparing the objectives, literature review and results obtained in the present study. Will also check whether the results are in line with the previous studies or different? If different, is there any methodological difference between the studies or is there any relevancy to compare?",
  },
  {
    title: "Organized References and Completely Referenced",
    body: "Whether references are well organized and according to the style posed by the Universities? The document is whether well referenced both using textbooks and journal articles. If not, we check and correct the citation style throughout the dissertation. Ensure to check whether the citation, referencing and formatting style is in line with the university requirement. If references are old, will update the reference with new ones carefully considering the context, meaning and author.",
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
    body: "Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities from India, the US, and the UK. We identify the perfect SME according to your subject and area. Expert is selected through a stringent selection process including the signing of non-disclosure and confidentiality agreement. You can be very sure about the quality of the work since expert writer is identified as per International Research Experience.",
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

export default function ResitDissertationPage() {
  return (
    <div style={{ fontFamily: "Georgia, serif", color: "#222" }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)",
          color: "#fff",
          padding: "72px 24px 60px",
          textAlign: "center",
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
            The UK Dissertation Resitting or Resubmission Writing Help UK
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.8,
              maxWidth: 760,
              margin: "0 auto 28px",
              opacity: 0.95,
            }}
          >
            Are you resubmitting your dissertation? Struggling to handle resit dissertation and looking to clear in the second attempt. Then You&apos;ve Certainly Reached the Right Place! Tutors India offers exclusive support to rework completely your dissertation based on the supervisor comments and as per the university guidelines. We provide full, or part dissertation is reworking assistance to complete your master&apos;s dissertation submission successfully.
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
            Your Resit Dissertation is written by qualified and experienced researchers from the UK
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#444", maxWidth: 780, margin: "0 auto" }}>
            Our dissertation writers have experience in handling students who faced rejection for their dissertation. Our dissertation team consists of a subject-specific writer with industry experience, statisticians, research methodology expertise, editors and proofreaders with educational degrees from international and top-ranked universities from India, the US, and the UK.
          </p>
        </div>
      </section>

      {/* Resitting & Resubmission */}
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
            Resitting or Resubmitting the UK Master&apos;s Dissertation
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#444", marginBottom: 28 }}>
            Resitting a master&apos;s dissertation with perfection is not an easy task. Even excellent students need to resit their dissertations for various inevitable reasons. It puts a lot of pressure on the scholars as the dissertation is the prime factor in deciding their future. The most common cause for resitting dissertation is that the research is not sufficiently comprehensive or valid. Dissertation with plagiarism, not up to the mark of University standards are some of the important reasons that professors ask scholars to resit their dissertations. Tutors India provides complete assistance to complete your master&apos;s dissertation rework on time with satisfaction. We offer full service in rewriting your master&apos;s dissertation with institutional parameters such as design, format, and style.
          </p>

          <h2
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: "1.4rem",
              color: "#1a2a6c",
              marginBottom: 14,
            }}
          >
            Tutors India for Your Dissertation Resubmission Help
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#444", marginBottom: 18 }}>
            Tutors India expert writers assess your dissertation in all aspects on a single case basis that demands attention and enhancement. This is to ensure to avoid mistakes for the second time. Tutors India have a long list of happy and satisfactory clients who have earned outstanding grades with their resubmission. Tutors India have undertaken Resit dissertations that have undertaken due to following reasons.
          </p>
          <div
            style={{
              background: "#f0f4ff",
              borderLeft: "4px solid #2563b0",
              padding: "18px 22px",
              borderRadius: 4,
              fontSize: "0.97rem",
              lineHeight: 1.8,
              color: "#333",
              fontStyle: "italic",
              marginBottom: 28,
            }}
          >
            &ldquo;No in-text references, lack of an appropriate literature review, research objectives doesn&apos;t match with literature review, introduction was not clear, results are not in appropriate format, lack of discussion, lack of hypothesis, lack of research objectives, research objectives are too broad to answer your findings, not in APA style format, SPSS output has been pasted as such, need in journal formatting, lack of critical review, could not find research gaps, lack of an appropriate research methodology, confusing methodology, results don&apos;t support your argument and many more&rdquo;
          </div>

          <h2
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: "1.4rem",
              color: "#1a2a6c",
              marginBottom: 14,
            }}
          >
            Complete Resit Master&apos;s Dissertation Rewriting Help UK
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#444" }}>
            Tutors India ensures to add enough additional values as much as possible for the resit dissertation to be successful. It ensures that the scholar gets best high grades on their second attempt. We confirm that the value addition is comprehensive and chapter wise, and each stage is handled with utmost care.
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
            UK Resit Dissertation Writing is Simply Easy &amp; Straightforward
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#444" }}>
            Our thesis and dissertation writing help guarantees that your dissertation is confidential, and so you do not have to worry about it. Just send us your original dissertation along with any support materials, the list of references, the feedback for the changes or supervisor comments, your comments if any, and finally the deadline for submission. You are assured to see the results that are far justified and mark the success of your resubmitted dissertation.
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
            What Services do we offer under UK Resit Dissertation?
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
            <h3 style={{ fontFamily: "Merriweather, serif", fontSize: "1.2rem", marginBottom: 10 }}>
              UK Resit Dissertation Writing Service
            </h3>
            <p style={{ lineHeight: 1.8, opacity: 0.92 }}>
              We write complete master&apos;s resit dissertation from the introduction to recommendations. Although it looks simple, but in practical, it&apos;s a tedious task to complete each and every step.
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
            Our Deliverables While You Order Resit Master&apos;s Dissertation Writing Service UK
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#444" }}>
            UK Resit Dissertation writing services from Tutors India research writing services is simply easy and straightforward. You will get the reply within 30 minutes which would enable to place your order quickly without any delay in submissions. We would provide executive summary /abstract, free articles used for writing the full dissertation, SPSS data sheet and output, questionnaire or semi-structured interview questions and any other information that we have used to write the dissertation such as reflective log or diary.
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
            We are completely aware that the resit dissertation comes with a very tight deadline, and our team ensures to deliver the work on time along with the detailed report. The process is simple. After the order is confirmed, we allocate the special team to scrutinize the work regarding necessary availability requirements that would be essential to complete the work. Once the process is done, in case there are any queries, we ensure to ask during the initial stage of your work and send you the outline proposed for writing Resit dissertation. Once the outline along with the chapterization plan is approved, we will dispatch the work in chapters, and update you on the progress of your work. Our exclusive coordinators would get in touch with you to clarify any queries. For primary data collection, you need to pay an additional chart to offer this service. This would enable to show the proof of evidence of data collection to your university. We will paste the excel data sheet in Appendix, and this would be shared. You can also pay in installments and work will be started as soon as we receive the payments we deliver your work as per the schedule fixed and agreed or even before the schedule.
          </p>
        </div>
      </section>

      {/* Resit Features – Process Steps */}
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
            A Resit Dissertation UK Features
          </h2>
          <p style={{ textAlign: "center", color: "#555", marginBottom: 36 }}>
            Our UK resit dissertation structure followed at Tutors India
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
              gap: 20,
            }}
          >
            {resitSteps.map((step) => (
              <div
                key={step.title}
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
                    fontSize: "1rem",
                    color: "#1a2a6c",
                    marginBottom: 10,
                  }}
                >
                  {step.title}
                </h4>
                <p style={{ fontSize: "0.93rem", lineHeight: 1.75, color: "#555" }}>{step.body}</p>
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
            Resit Dissertation Need to Convince the Supervisory Committee
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#444", marginBottom: 28 }}>
            We write complete master&apos;s dissertation from the introduction to recommendations. Though it looks very simple, it is a tedious task to complete each and every step. The steps involved in such tedious task. Namely identification of topic, reviewing the literature or literature review, problem statement, research question(s) and research hypothesis development, research design (sampling, measures, procedures and data collection), statistical analysis, (data analysis preparation, data entry and screening, interpretation), discussion, results, recommendation and conclusion.
          </p>

          <h2
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: "1.4rem",
              color: "#1a2a6c",
              marginBottom: 14,
            }}
          >
            We Have Chapter by Chapter Delivery Process and Deadline for Your Resit Dissertation
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
            Our Custom Master&apos;s Resit Dissertation Part or Chapter-wise or Full Writing &amp; Editing Service is Exclusive
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
                title: "Your Master's Resit Dissertation",
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
                <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "#555" }}>{card.body}</p>
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
            Why Choose Tutors India: Master&apos;s Resit Dissertation Service Features
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
          <FaqAccordion faqs={resitFaqs} />
        </div>
      </section>

      {/* Subject Matter Expertise */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "52px 24px" }}>
        <div style={{ maxWidth: 980, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Merriweather, serif", fontSize: "1.55rem", marginBottom: 12 }}>
            Your Resit Dissertation is Written by Your Choice of Subject Matter Expertise
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
                  fontSize: "0.88rem",
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
          Ready to Succeed with Your Resit Dissertation?
        </h2>
        <p style={{ fontSize: "1.05rem", marginBottom: 28, opacity: 0.92 }}>
          Invest in your career by availing resit dissertation help from qualified UK researchers.
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
