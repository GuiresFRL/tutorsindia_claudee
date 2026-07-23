import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "Survey Tools for Dissertation: Instrument Development Guide",
  description: "Professional questionnaire development for your dissertation. We offer full help and assistance in completing your tool development by experienced hands.",
  keywords: "Survey Tool development,Questionnaire development,Master’s & Ph.D. Dissertation Service",
  alternates: { canonical: "https://www.tutorsindia.com/our-services/development/tool-development" },
};

const faqs = [
  {
    q: "What are the tool development support get from you?",
    a: "We offer the tool development support on the areas like Questionnaire (for Survey) development and Interview & Focus Group Discussion Guide Development for Master's & PhD Dissertation Service.",
  },
  {
    q: "Is my Tool development from Tutors india Reliable & valid one?",
    a: "Our experts ensure that your questionnaire/Interview guide service is an exclusive, reliable and valid one. For more details, contact us.",
  },
  {
    q: "Whether my surveys avoiding the common errors?",
    a: "One of the important challenges in designing the survey that fulfill the purpose and avoid the common errors such as sample, frame, selection, measurement and non-response errors. Yes, our experts are meticulously conduct the survey and carefully collect the samples eliminating the errors.",
  },
  {
    q: "What are the major stages of questionnaire development process in Tutors India?",
    a: "We develop the questionnaires based on three stages in Tutors India including 1. Identify the goal of your questionnaire 2. Select the question type like open-ended or close-ended questions 3. Develop the questions based on factual, attitude and explanatory survey",
  },
  {
    q: "What are the types of the surveys conducted by Tutors India?",
    a: "At Tutors India, we have primarily conducted Interview guide survey: face-to-face, mail surveys, household drop-off surveys and online as well as group-administered surveys and then the Focus Group survey.",
  },
  {
    q: "What are the steps –by-step procedures at Tutors India for developing a Questionnaire?",
    a: "At Tutors India, we followed steps-by step procedure for developing an effective questionnaire including 1. Determine the purpose 2. Decide the measuring 3. Determine the target population/audience based on age, education level, cultural bias, language barrier and familiarity with tests and questionnaires 4. Select a suitable data collection method like telephone, mail, face-face interview and web-based interview and choose a collection procedure (anonymous/confidential) 5. Choose the measurement scale and rating In addition, when we writing the questionnaire, we follow some procedures including defining the background of the questionnaire, Questionnaire conceptualization, format and data analysis, as well as check the reliability and establishing a validly.",
  },
];

const testimonials = [
  {
    quote: "I was really struggling with my final semester master's degree, that's when I heard about Tutors India. They really guided me the whole way to produce research proposal just from the idea of a research title. The level of detail which went into creating the research proposal is astonishing. The technical concepts they advised for methodology were very advanced and algorithms used were state of the art. Would definitely recommend Tutors India to anyone who is struggling to complete their research work.",
    author: "David Morrison",
  },
  {
    quote: "Tutors India helped me gain clarity on the direction my research proposal needed to go and provided me with more clarity in my work. The experts understand my difficulties in writing the research proposal and guided me accordingly. Even without having an in-depth background in the topic I'm able to understand the key aspects and was given the focus to the right place. I wholeheartedly endorse Tutors India as a best and professional service, as someone you can rely on completing your research works.",
    author: "Glenn McLaughlin",
  },
  {
    quote: "First and foremost, I want to express my gratitude for your writer's assistance and effort in developing this research technique for my research paper. It would be difficult to accomplish this assignment on deadline without your assistance and that of your writer. In fact, I believe that this legal subject is rather challenging for me, and that starting to create this law paper without your writer's assistance would be extremely difficult.",
    author: "Hunter W. Lindström, JD, PhD",
  },
  {
    quote: "Even though my professor refused to extend my deadline, I needed to find an assignment assistance provider, and I'm glad I found Tutors India. They responded quickly, and I received an exceptionally well-written paper before the deadline.",
    author: "Dr. Logan C. Sinclair, PhD",
  },
  {
    quote: "I can say that it was a pleasant experience in which Tutors India displayed flexibility in adapting to our needs and presented an exceptional report that met all of our expectations. Personally, I appreciated the team's prompt follow-up, and we will undoubtedly contact them if additional research assistance is required.",
    author: "Connor J. Gallagher, MPhil",
  },
  {
    quote: "I would like to express my satisfaction on the co-operation regarding the data collection of big data analysis of my project. The experts and the technical team did a very professional job. I am satisfied with the solution given and with the communication flow throughout the project. Well done and I hope we can continue to grow together.",
    author: "Faiyaz",
  },
  {
    quote: "I thank Tutors India for the wonderful job in helping me develop my algorithm in computer programming. Everyone was professional, excellent and hard working. Thanks to them, I was able to achieve my goal on time, and I look forward to continue working with them in the future.",
    author: "Harrison",
  },
  {
    quote: "I am happy to seek help from Tutors India for assisting me in software development. Their team of experts worked closely with me throughout the process, staying on task and on budget. I also appreciate their quick and courteous responses. I highly recommend their service.",
    author: "Mason",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const tools = [
  "NS2", "Java", "CloudSim", "Matlab", "Omnet++", "Qualnet", "Opnet", "Android",
  "ImageJ", "NS3", "Dotnet", "Gridsim", "Peersim", "Hadoop", "RTool", "APACHE",
  "MLOSS", "JMLR", "Vowpal wabbit", "EEE Matlab Simulink", "microcontroller", "ZigBee",
];

export default function ToolDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <style>{`
        .hero-inner { max-width: 900px; margin: 0 auto; padding: 0 1rem; }
        .hero-badge { display: inline-block; background: #e87722; color: #fff; font-size: .75rem; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; padding: .25rem .75rem; border-radius: 999px; margin-bottom: 1rem; }
        .three-col-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.5rem; }
        .two-col-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 1.5rem; }
        .four-col-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 1.25rem; }
        @media(max-width:768px){
          .three-col-grid,.four-col-grid { grid-template-columns: 1fr; }
          .two-col-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <Link href="/our-services" style={{ color: "#a0b8e0" }}>Our Services</Link>{" / "}
            <Link href="/our-services/development" style={{ color: "#a0b8e0" }}>Development</Link>{" / "}
            <span style={{ color: "#fff" }}>Tool Development</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.6rem,3vw,2.4rem)", marginBottom: "18px", lineHeight: 1.3 }}>
            Survey Tool / Instrument development Questionnaire (for Survey), Interview &amp; Focus Group Discussion Guide Development for Master&rsquo;s &amp; Ph.D. Dissertation Service
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "1.05rem", maxWidth: 820, lineHeight: 1.8, marginBottom: "14px" }}>
            Are your finding it difficult in completing your tool development? Are you planning to outsource your tool development assignment to a trustworthy professional service provider? You have reached the right destination. Tutors India offers full help and assistance in completing your tool development by experienced hands.
          </p>
          <p style={{ color: "#a0b8e0", fontSize: "0.95rem", maxWidth: 820, lineHeight: 1.8, marginBottom: "14px" }}>
            Tutors at Tutors India has capability and skills to design questionnaire, interview or focus group guide
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "24px" }}>
            <Link href="/order-now" style={{ padding: "12px 32px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "0.95rem" }}>
              Place an Order
            </Link>
            <Link href="/contact-us" style={{ padding: "12px 32px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, fontSize: "0.95rem" }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Qualified researchers intro */}
      <section style={{ background: "#fff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.4rem", fontWeight: 700, marginBottom: "1rem" }}>
            Your primary data collection tools for the Dissertation is developed by qualified and experienced researchers from the US &amp; UK
          </h2>
          <p style={{ color: "#333", lineHeight: 1.8 }}>
            Our dissertation survey tools experts have experience in research methodology, specific domain experience, and educational degrees from international and top-ranked universities from India, the US, and the UK. You can have one-on-one coaching with a writer, statistician, research methodologist and editor
          </p>
        </div>
      </section>

      {/* Tutors India Difference */}
      <section style={{ background: "#f0f4ff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.5rem", textAlign: "center" }}>
            Tutors India Difference in primary data collection tools for your dissertation
          </h2>
          <p style={{ color: "#333", lineHeight: 1.8, maxWidth: 860, margin: "0 auto 2rem" }}>
            Developing primary and secondary data tools form an important step in progressing your dissertation research topic. However, the choice of an instrument for data collection is an important aspect to consider during the research design. The determination of an appropriate measure of data collection is dependent on a number of topics including the complexity of the topic, the desired rate or response and most importantly the time and the money available. Another aspect which plays a role in the determination of the instrument is dependent on the size of the population. The value of research is related to its data collection methods and importantly, whether or not it includes both secondary and primary data. Primary data contains original data collected by the researcher, to obtain a clear idea on the topic. Primary data collection provides direct access to the participants so that there can be a lesser error as well as the bias of the researcher. Primary data also helps in providing immediate data for analysis.
          </p>
        </div>
      </section>

      {/* Pioneer in survey */}
      <section style={{ background: "#fff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            Tutors India, pioneer in survey questionnaire &amp; Interview / focus group designing
          </h2>
          <p style={{ color: "#333", lineHeight: 1.8 }}>
            Tutors India has years of experience in data collection to assist scholars in creating an efficient primary data set. The primary data collection is in the form of two types of tools namely Quantitative and Qualitative. Quantitative tools are close-ended structured questionnaires where the survey will be conducted in the form of structured questionnaires, face to face interview, telephonic interview or direct observations. Qualitative tools are a semi-structured questionnaire or open-ended questions. The interviewee is free to express his ideas without any limits. Tutors India provides full assistance in both qualitative and quantitative tools. At Tutors India, we help you in the questionnaire or interview guide development process. Our expertise has rich experience in developing questionnaire using scales, questions for interview guide, and focus group guides.
          </p>
        </div>
      </section>

      {/* Coding and Algorithm Development */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            Tutors India Offers Coding and Algorithm Development for IEEE Projects.
          </h2>
          <p style={{ opacity: 0.9, lineHeight: 1.8, marginBottom: "1.5rem" }}>
            We utilize various tools such as NS2, Java, CloudSim, Matlab, Omnet++, Qualnet, Opnet, Android, ImageJ, NS3, Dotnet, Gridsim, Peersim, Hadoop and RTool, APACHE, MLOSS, JMLR, Vowpal wabbit, EEE Matlab Simulink, microcontroller, ZigBee and many more software programming tools.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
            {tools.map((tool, i) => (
              <span key={i} style={{ background: "rgba(255,255,255,.15)", color: "#f9c74f", border: "1px solid rgba(249,199,79,.4)", borderRadius: "6px", padding: ".3rem .85rem", fontSize: ".85rem", fontWeight: 600 }}>
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Professional questionnaire development */}
      <section style={{ background: "#f0f4ff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            The Professional questionnaire development for your Dissertation
          </h2>
          <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "1.5rem" }}>
            Our survey tool demonstrates the ability to communicate complex ideas critically, concisely, and clearly. Our professional dissertation writers have completed around 5000 Ph.D. Dissertation successfully. We match your research interest along with the current state of knowledge and any recent debates. If you are unsure of what to do, avail our full or complete thesis writing services now.
          </p>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            Questionnaire development for dissertation service is Simply easy &amp; Straightforward
          </h2>
          <p style={{ color: "#333", lineHeight: 1.8 }}>
            Our questionnaire development service guarantees that your tool is confidential, and so you do not have to worry about it. Just send us your dissertation topic, hypothesis, research questions, along with the deadline and see the results that are far justified and mark the success of your dissertation.
          </p>
        </div>
      </section>

      {/* What Services do we offer */}
      <section style={{ background: "#fff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem", textAlign: "center" }}>
            What Services do we offer under questionnaire development service?
          </h2>
          <p style={{ color: "#555", textAlign: "center", marginBottom: "2rem" }}>
            We write complete eLearning dissertation from the introduction to recommendations. Although it looks simple, but in practical, it&rsquo;s a tedious task to complete each and every step.
          </p>
          <div className="three-col-grid">
            {[
              {
                tier: "Basic",
                desc: "Developed based on the relevant sources, a reasonable attempt at finding an area that warrant research & evidence of an attempt to provide critical evaluation but mainly descriptive.",
                features: ["3 Topics (Topic Selection based on area of interest)", "1000 words", "Objectives", "Literature Review", "Research Gap", "Expected Contribution", "Research Methodology", "Data Analysis Guidelines", "References Lists", "Bibliography (Additional reading)"],
              },
              {
                tier: "Advanced",
                desc: "Wide range of sources, a clear identification of research gap in the literature along with aim and research questions",
                features: ["1 topic", "1000 words", "Objectives", "Literature Review", "Research Gap", "Expected Contribution", "Research Methodology", "Data Analysis Guidelines", "References Lists", "Bibliography (Additional reading)"],
              },
              {
                tier: "Premium",
                desc: "Refers to a wide range of seminal research with throughout engagement using latest resources. A solid gap would be identified based on the current literature & justified thoroughly & Excellent critical analysis would be shown (upgradable)",
                features: ["1 topic", "Objectives", "Literature Review", "Research Gap", "Expected Contribution", "Research Methodology", "Data Analysis Guidelines", "References Lists", "Bibliography (Additional reading)"],
              },
            ].map((item, i) => (
              <div key={i} style={{ background: "#f0f4ff", borderRadius: "10px", padding: "2rem", borderTop: "4px solid #e87722" }}>
                <h3 style={{ color: "#1a2a6c", fontWeight: 800, fontSize: "1.15rem", marginBottom: "0.5rem" }}>{item.tier}</h3>
                <p style={{ color: "#555", lineHeight: 1.7, fontSize: ".9rem", marginBottom: "1rem" }}>{item.desc}</p>
                <ul style={{ paddingLeft: "1.2rem", margin: 0 }}>
                  {item.features.map((f, j) => (
                    <li key={j} style={{ color: "#333", fontSize: ".88rem", lineHeight: 1.7 }}>{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Subject Matter Expertise */}
      <section style={{ background: "#f0f4ff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem", textAlign: "center" }}>
            Specialized Subject Matter Expertise across the globe
          </h2>
          <p style={{ color: "#333", lineHeight: 1.8, textAlign: "center", marginBottom: "2rem" }}>
            We offer complete survey tool and interview guide for dissertation writing service for Management, Education, Engineering, Technology, Computer science, and more
          </p>
          <div className="four-col-grid">
            {[
              "Arts & Humanities",
              "Biological Sciences",
              "Business & Management Studies",
              "Marketing & Communication",
              "Engineering & Technology",
              "Natural Sciences & Mathematics",
              "Biological & Life science",
              "Economics & Administration",
              "Humanities & Social Science",
              "Law",
              "Medicine & Health",
              "Education & Training",
              "Journalism & Media",
              "Agriculture & Forestry",
              "Computer Science & IT",
              "Hospitality, Leisure & Sports",
            ].map((subject, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: "8px", padding: "1rem 1.25rem", color: "#1a2a6c", fontWeight: 600, fontSize: ".9rem", borderLeft: "3px solid #e87722" }}>
                {subject}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our deliverables */}
      <section style={{ background: "#fff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            Our deliverables while you order custom questionnaire development service
          </h2>
          <p style={{ color: "#333", lineHeight: 1.8 }}>
            Questionnaire development for Dissertation writing services from Tutors India research writing services is simply easy and straightforward. You will get the reply within 30 minutes which would enable to place your order quickly without any delay in submissions.
          </p>
        </div>
      </section>

      {/* How Does it work */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.5rem" }}>How Does it work?</h2>
          <p style={{ opacity: 0.9, lineHeight: 1.8 }}>
            After the order is confirmed, we allocate the special team to scrutinize the work regarding necessary availability requirements that would be essential to complete the work. Once the process is done, in case there are any queries, we ensure to ask during the initial stage of your work and send you the outline proposed for writing secondary data collection based dissertation. Once the outline along with the chapterization plan is approved, we will dispatch the work in chapters, and update you on the progress of your work. Our exclusive coordinators would get in touch with you to clarify any queries. You can also pay in installments and work will be started as soon as receive the payments. We deliver your work as per the schedule fixed and agreed or even before the schedule.
          </p>
        </div>
      </section>

      {/* Survey tool development Service features */}
      <section style={{ background: "#f0f4ff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem", textAlign: "center" }}>
            Survey tool development Service features
          </h2>
          <p style={{ color: "#555", textAlign: "center", marginBottom: "2rem" }}>
            Tool development based on the objectives &amp; Hypothesis
          </p>
          <div className="two-col-grid">
            <div style={{ background: "#fff", borderRadius: "10px", padding: "2rem", boxShadow: "0 2px 8px rgba(0,0,0,.07)", borderTop: "3px solid #e87722" }}>
              <h3 style={{ color: "#1a2a6c", fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.75rem" }}>Tools for Survey Research</h3>
              <p style={{ color: "#333", lineHeight: 1.8 }}>
                Survey has been defined as &ldquo;a system of collecting information to describe, compare or explain knowledge, attitudes, and behavior&rdquo;. It is a way of collecting information about the characteristics, attitudes, actions, or opinions of a large sample of people, cluster, organization, or other units referred to as a population. At Tutors India, we develop survey tools such as questionnaires and interviews. The most practical ways for survey researchers to collect data for analysis are self-administrated questionnaires and in-person or telephone interviews.
              </p>
            </div>
            <div style={{ background: "#fff", borderRadius: "10px", padding: "2rem", boxShadow: "0 2px 8px rgba(0,0,0,.07)", borderTop: "3px solid #e87722" }}>
              <h3 style={{ color: "#1a2a6c", fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.75rem" }}>Interviews</h3>
              <p style={{ color: "#333", lineHeight: 1.8 }}>
                Interviews are considered to be the main tool of the qualitative researcher for data collection as it allows the best access to the interpretations that the participants have regarding the actions and events, which have or are taking place and the views and aspirations of themselves and other participants. Three major types of interviews are developed by Tutors India experts that include structured interviews, semi-structured interviews, and unstructured interviews. Personal interviews, face to face group interviewing and telephone surveys are the different forms of interviews usually undertaken.
              </p>
            </div>
            <div style={{ background: "#fff", borderRadius: "10px", padding: "2rem", boxShadow: "0 2px 8px rgba(0,0,0,.07)", borderTop: "3px solid #e87722" }}>
              <h3 style={{ color: "#1a2a6c", fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.75rem" }}>Pilot Study</h3>
              <p style={{ color: "#333", lineHeight: 1.8 }}>
                A pilot study will be conducted at the end of the exploratory phase by the team of Tutors India. Any questionnaire is subjected to a population to collect data the questionnaire should be piloted. We ensure to conduct a pilot study that the respondents do not have issues with the questionnaire. The feedback that is often received at the end of the pilot study is used to improve the questionnaire before the main data collection is carried out. We focus on clarity of the questions, relevance of the questions, overall layout of the entire questionnaire and length of time taken to complete the questionnaire.
              </p>
            </div>
            <div style={{ background: "#fff", borderRadius: "10px", padding: "2rem", boxShadow: "0 2px 8px rgba(0,0,0,.07)", borderTop: "3px solid #e87722" }}>
              <h3 style={{ color: "#1a2a6c", fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.75rem" }}>Assessing the reliability and validity of the Tool</h3>
              <p style={{ color: "#333", lineHeight: 1.8 }}>
                We also conduct reliability and validity of the tool being developed. We ensure internal validity which can address the true causal nature of the outcome of the study. A strong internal validity indicates that apart from the reliable measurement of the instrument it is important to have a strong justification which helps to link the related variables. Internal validity also ensures that there is causal control. Internal validity is maintained in this research by ensuring that certain causal threats are avoided like Perceptual inaccuracies: Inaccuracy in recollection of past event, Halo effect: Preconditioning of the subject to answer; Memory recall bias: bias and forgetfulness of the participant and; Reflexivity: The subject provides the answer that seems the most correct and not what he or she actually feels. Further, reliability to ensure whether the results obtained are comparable to the findings obtained by a different researcher who performs a similar procedure to study a similar phenomenon.
              </p>
            </div>
          </div>
          <div style={{ background: "#fff", borderRadius: "10px", padding: "2rem", boxShadow: "0 2px 8px rgba(0,0,0,.07)", borderTop: "3px solid #e87722", marginTop: "1.5rem" }}>
            <h3 style={{ color: "#1a2a6c", fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.75rem" }}>Revision and finalizing the Questionnaire</h3>
            <p style={{ color: "#333", lineHeight: 1.8 }}>
              The feedback that the researcher received at the end of the research methodology provided the opportunity to make changes to the questionnaire.
            </p>
          </div>
          <div style={{ background: "#fff", borderRadius: "10px", padding: "2rem", boxShadow: "0 2px 8px rgba(0,0,0,.07)", borderTop: "3px solid #e87722", marginTop: "1.5rem" }}>
            <h3 style={{ color: "#1a2a6c", fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.75rem" }}>eLearning Dissertation Proposal development</h3>
            <p style={{ color: "#333", lineHeight: 1.8 }}>
              A pilot study will be conducted at the end of the exploratory phase by the team of Tutors India.
            </p>
          </div>
        </div>
      </section>

      {/* Supervisory committee */}
      <section style={{ background: "#fff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            Questionnaire or interview guide need to convince the Supervisory committee
          </h2>
          <p style={{ color: "#333", lineHeight: 1.8 }}>
            We develop, validate and conduct a pilot study for the tool developed. Though it looks very simple, it is a tedious task to complete each and every step. The steps involved in such tedious task.
          </p>
        </div>
      </section>

      {/* What We deliver */}
      <section style={{ background: "#f0f4ff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            What We deliver while your order for questionnaire development service
          </h2>
          <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "1.5rem" }}>
            We deliver more than your expectation – ensure to provider the proper context, delimit the boundary condition, cite landmark studies, stay focused on the research question, a clear sense of direction, clear citation, APA or any other specific style.
          </p>
          <div style={{ background: "#fff", borderRadius: "8px", padding: "1.5rem", borderLeft: "4px solid #e87722", marginBottom: "1.5rem" }}>
            <h3 style={{ color: "#1a2a6c", fontWeight: 700, marginBottom: "0.5rem" }}>Our questionnaire development service is exclusive</h3>
            <p style={{ color: "#333", lineHeight: 1.7 }}>
              as we do not just provide development service, but the rather clear explanation and justification for the choice
            </p>
          </div>
          <div className="three-col-grid">
            {[
              { title: "Quality Assurance", body: "We ensure quality at every stage and the process." },
              { title: "Plagiarism Report", body: "We deliver the document after scanning for plagiarism" },
              { title: "Customer Interaction", body: "We interact with the customer at every stage in terms of amendments, query and delivery." },
            ].map((item, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: "10px", padding: "1.5rem", boxShadow: "0 2px 8px rgba(0,0,0,.07)", borderTop: "3px solid #e87722" }}>
                <h3 style={{ color: "#1a2a6c", fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ color: "#333", lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Tutors India */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            Why Choose Tutors India: questionnaire development Service features
          </h2>
          <p style={{ opacity: 0.9, lineHeight: 1.8 }}>
            Qualified researchers, research methodology expertise, well experienced coders, developers, programmers capable of handling various software and many more, only peer-reviewed articles, Tutoring and clarification, Tables and Interpretation with proper formatting for print-ready analysis, plagiarism report, 24/7 support, timely Support, 100% match with the requirement and on time delivery.
          </p>
        </div>
      </section>

      {/* Guarantees */}
      <section style={{ background: "#f0f4ff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.5rem", fontWeight: 700, marginBottom: "2rem", textAlign: "center" }}>Our Guarantees</h2>
          <div className="two-col-grid">
            {[
              {
                title: "A complete secure & Confidential Service",
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
                body: "Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities from India, the US, and the UK. We identify the perfect SME according to your subject and area. Expert is selected through a stringent selection process including the signing of non-disclosure and confidentiality agreement. You can be very sure about the quality of the work since expert writer is identified as per International Research Experience",
              },
            ].map((item, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: "10px", padding: "2rem", boxShadow: "0 2px 8px rgba(0,0,0,.07)" }}>
                <h3 style={{ color: "#e87722", fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.75rem" }}>{item.title}</h3>
                <p style={{ color: "#333", lineHeight: 1.8 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#fff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.5rem", fontWeight: 700, marginBottom: "2rem", textAlign: "center" }}>
            Frequently Asked Questions
          </h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* Expertise across the globe */}
      <section style={{ background: "#f0f4ff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            Why Choose Tutors India: questionnaire development Service features
          </h2>
          <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "1rem" }}>
            We have a team of 2000+ expertise across the subjects &amp; countries (including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine)
          </p>
          <p style={{ color: "#333", lineHeight: 1.8 }}>
            Tutors India has capability and skills to handle subjects across the field. We chose qualified and experienced subject specific expertise while you order your Ph.D. or Master&rsquo;s dissertation. We have more than 2000+ expertise working across the world who can handle arts, literature, sciences, engineering or medicine.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ background: "#fff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.5rem", fontWeight: 700, marginBottom: "2rem", textAlign: "center" }}>
            Voice of Our customer
          </h2>
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* Order Now CTA */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "3rem 1rem", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Order Now</h2>
          <p style={{ opacity: 0.9, marginBottom: "2rem", lineHeight: 1.7 }}>
            Invest in your career by availing survey tool and questionnaire development help from qualified researchers
          </p>
          <Link href="/order" style={{ background: "#e87722", color: "#fff", padding: ".875rem 2.5rem", borderRadius: "6px", fontWeight: 700, textDecoration: "none", fontSize: "1.05rem" }}>
            Get Started Now
          </Link>
        </div>
      </section>
    </>
  );
}
