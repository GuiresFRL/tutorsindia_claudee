import Link from "next/link";
import type { Metadata } from "next";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "Best Coursework writing Services by Experts",
  description: "Our Coursework writing services to help educators create engaging and informative course materials, optimized for diverse learning environments.",
  keywords: "coursework writing service, coursework writing services uk, best coursework writing service uk, law coursework writing service uk, cheap coursework writing services uk, coursework writing help, university coursework writing services, Coursework Writing Services, Coursework Writing Help",
  alternates: { canonical: "https://www.tutorsindia.com/our-services/coursework-writing/" },
};

const testimonials = [
  {
    quote: "Honestly, I didn't expect this level of quality. The team understood exactly what I needed and delivered work that felt genuinely professional. My confidence went from stressed to unstoppable.",
    author: "Amelia Brooks",
    location: "UK",
    avatar: "/images/testimonials/t15.jpg",
  },
  {
    quote: "I was stuck, frustrated, and running out of time. Tutors India stepped in at the perfect moment and turned everything around faster than I imagined. Worth every bit.",
    author: "Oliver Bennett",
    location: "UK",
    avatar: "/images/testimonials/t13.jpg",
  },
  {
    quote: "The attention to detail was incredible. It didn't feel like I was working with a service provider — it felt like I had an expert academic partner guiding me throughout.",
    author: "Layla Al Mansoori",
    avatar: "/images/testimonials/t16.jpg",
  },
  {
    quote: "My research finally started making sense after working with this team. Their guidance simplified complex ideas and gave my project the structure it was missing.",
    author: "Hassan Al Falasi",
    location: "UAE",
    avatar: "/images/testimonials/t17.jpg",
  },
  {
    quote: "I submitted my work with complete confidence for the first time ever. The quality, formatting, and clarity were all beyond what I hoped for.",
    author: "Charlotte Reed",
    location: "UK",
    avatar: "/images/testimonials/t1.jpg",
  },
  {
    quote: "The team handled everything professionally from start to finish. Timely updates, quick responses, and excellent academic quality — exactly what students need during stressful deadlines.",
    author: "Zain Al Hashmi",
    location: "UAE",
    avatar: "/images/testimonials/t2.jpg",
  },
  {
    quote: "I was amazed at how naturally the content matched my writing style and university standards. It felt authentic, polished, and academically strong.",
    author: "Emily Carter",
    avatar: "/images/testimonials/t3.jpg",
  },
  {
    quote: "This service saved me during one of the most stressful phases of my academic journey. Reliable, professional, and genuinely supportive throughout the process.",
    author: "Noora Al Zaabi",
    location: "UAE",
    avatar: "/images/testimonials/t4.jpg",
  },
  {
    quote: "The final work looked so refined and well-structured that even my mentor appreciated the improvement immediately. Highly recommended for serious academic support.",
    author: "George Whitmore",
    location: "UK",
    avatar: "/images/testimonials/t7.jpg",
  },
  {
    quote: "What impressed me most was how personalized the support felt. They didn't just complete the work — they understood my goals and helped me present them better.",
    author: "Khalid Al Nuaimi",
    avatar: "/images/testimonials/t8.jpg",
  },
  {
    quote: "I was really struggling with my final semester master's degree, that's when I heard about Tutors India. They really guided me the whole way to produce research proposal just from the idea of a research title. The level of detail which went into creating the research proposal is astonishing. The technical concepts they advised for methodology were very advanced and algorithms used were state of the art. Would definitely recommend Tutors India to anyone who is struggling to complete their research work.",
    author: "David Morrison",
    avatar: "/images/testimonials/t9.jpg",
  },
  {
    quote: "Tutors India helped me gain clarity on the direction my research proposal needed to go and provided me with more clarity in my work. The experts understand my difficulties in writing the research proposal and guided me accordingly. Even without having an in-depth background in the topic I'm able to understand the key aspects and was given the focus to the right place. I wholeheartedly endorse Tutors India as a best and professional service, as someone you can rely on completing your research works.",
    author: "Glenn McLaughlin",
    avatar: "/images/testimonials/t10.jpg",
  },
  {
    quote: "First and foremost, I want to express my gratitude for your writer's assistance and effort in developing this research technique for my research paper. It would be difficult to accomplish this assignment on deadline without your assistance and that of your writer. In fact, I believe that this legal subject is rather challenging for me, and that starting to create this law paper without your writer's assistance would be extremely difficult.",
    author: "Hunter W. Lindström, JD, PhD",
    avatar: "/images/testimonials/t11.jpg",
  },
  {
    quote: "Even though my professor refused to extend my deadline, I needed to find an assignment assistance provider, and I'm glad I found Tutors India. They responded quickly, and I received an exceptionally well-written paper before the deadline.",
    author: "Dr. Logan C. Sinclair, PhD",
    avatar: "/images/testimonials/t12.jpg",
  },
  {
    quote: "I can say that it was a pleasant experience in which Tutors India displayed flexibility in adapting to our needs and presented an exceptional report that met all of our expectations. Personally, I appreciated the team's prompt follow-up, and we will undoubtedly contact them if additional research assistance is required.",
    author: "Connor J. Gallagher, MPhil",
    avatar: "/images/testimonials/t14.jpg",
  },
  {
    quote: "Tutors India provides me with a great deal of flexibility in terms of choosing courses and research areas. The specialists assisted me in choosing a unique and significant research topic, as well as moving on to the next stage of my research.",
    author: "N.M. (U.S)",
    avatar: "/images/testimonials/t1.jpg",
  },
  {
    quote: "Whether you believe it or not, I am completely delighted with the essay you wrote for me. I received a wonderful grade, and I am now certain that your promises are true. Tutors India, thank you.",
    author: "Dr. Declan O'Connell, MD, PhD",
    avatar: "/images/testimonials/t2.jpg",
  },
  {
    quote: "Good job by Tutors India on drafting my coursework. I had a lot of clarity about the process as it was kept very transparent throughout. There was no delay with their response and my coursework was delivered within the requested time. The review was very good. I will definitely come back with more requests.",
    author: "Jenifer Williams",
    location: "Japan",
    avatar: "/images/testimonials/t5.jpg",
  },
  {
    quote: "I am very happy with Tutors India service for PhD Coursework. I can tell that their professional skills are visible once the final results are done. I am also very satisfied with their performance, creativity and mostly their engagement to provide and good service with quality. I have been getting great comments during my entire PhD coursework processes that I went through in relation to the paper presentation of my research and I got a brilliant internship abroad with a high prestige company.",
    author: "Gatik",
    location: "Andorra",
    avatar: "/images/testimonials/t6.jpg",
  },
  {
    quote: "Great job on my paper, you guys saved my bacon I scored an A. I will need you again for a paper for my Pharmco class, I'll be in touch",
    author: "N.M. (U.S)",
    avatar: "/images/testimonials/t3.jpg",
  },
  {
    quote: "Topic selection was extraordinary, my professor approved on the first go. Good. I will sure recommend the service to all my class mates",
    author: "C S, Sheffield, UK",
    avatar: "/images/testimonials/t4.jpg",
  },
  {
    quote: "4 times my research topic is rejected so I contact tutors India, recommend by one of my friend, thank you so much tutors India such an impressive topic selection. I revert back for my further chapter writing support.",
    author: "B A, London, UK",
    avatar: "/images/testimonials/t7.jpg",
  },
  {
    quote: "The way you explained the topic was really good. In fact, I was little stunned with the team especially the 'Dr.' has full capability and skills to explain all my queries. Initially I had little hesitation to approach, but after speaking to them, I gained 100% confidence. I recommend speaking to the experts, they will certainly clarify all your queries.",
    author: "F M, Michigan, US",
    avatar: "/images/testimonials/t8.jpg",
  },
  {
    quote: "Thank you Tutors India for giving me wonderful topic selection, it got approved and further from research proposal to citation, I need a same support.",
    author: "K S, US, Boston",
    avatar: "/images/testimonials/t9.jpg",
  },
];

const services = [
  {
    title: "Essay Writing Services",
    desc: "At Tutors India, we follow strict plagiarism policy while writing an essay for university and post-graduate level work.",
    href: "/our-services/coursework-writing/essay-writing-services/",
  },
  {
    title: "Annotated Bibliography",
    desc: "At Tutors India, we follow strict plagiarism policy while writing an annotated bibliography for university and post-graduate level work.",
    href: "/our-services/coursework-writing/annotated-bibliography/",
  },
  {
    title: "Reflective Report",
    desc: "Reflection aid learning in addition to the promotion of emotional intelligence and broaden communication skills.",
    href: "/our-services/coursework-writing/reflective-report/",
  },
  {
    title: "Critical Review",
    desc: "Tutors India are handled and written by the style, design, and format of an ideal dissertation required by the UK, Australia, and the US universities.",
    href: "/our-services/coursework-writing/critical-review/",
  },
  {
    title: "Case Report Writing",
    desc: "A case study design provides an opportunity to collect research data from various sources while utilizing different data collection techniques.",
    href: "/our-services/coursework-writing/case-report-writing-services/",
  },
  {
    title: "Exam Notes",
    desc: "Exam notes have a major say in crunch examination period. Without this note, years of study will go astray and there is least chance of claiming the degree.",
    href: "/our-services/coursework-writing/exam-notes/",
  },
  {
    title: "Assignment Writing",
    desc: "Tutors at Tutors India work on seriously with your assignments and assist you in all the stages either online or email based.",
    href: "/our-services/coursework-writing/assignment-writing-services/",
  },
  {
    title: "References Collection",
    desc: "Referencing is given major significance in your dissertation. Because it is essential to cite from where the information has been obtained.",
    href: "/our-services/coursework-writing/references-collection-services/",
  },
  {
    title: "Research Methodology",
    desc: "Determining an appropriate research methodology is an important element in any master's dissertation.",
    href: "/our-services/coursework-writing/research-methodology/",
  },
  {
    title: "Literature Review",
    desc: "A dissertation literature review contributes 40 percent of weight. Hence, more effort should be taken to collect exhaustive up to date literature that has been published from various countries or conducted among different ethnic groups.",
    href: "/our-services/coursework-writing/literature-review/",
  },
];

const orderSteps = [
  { n: "1", title: "We identify Your writer", desc: "In order to get our service, you need to first fill out the form with your information in a comprehensive manner." },
  { n: "2", title: "Reference Number", desc: "Upon receiving your Enquiry form, we assign you a reference number. You can know the status of your paper anytime by sending us an email or tracking through CRM" },
  { n: "3", title: "Acknowledgment", desc: "Once you have paid for your order you will receive an acknowledgement from us. The writing process here with us begins within couple of days* after receiving your order" },
  { n: "4", title: "We check requirement", desc: "Once your dissertation is completed we check for spelling, grammar, content, focus, sources quality against the client requirement." },
  { n: "5", title: "Edit & proofreading", desc: "Once we receive an order from our writer, we ensure to proofread the document." },
  { n: "6", title: "We identify Your writer", desc: "At Tutors India we are equipped with writers who have passion towards research and associated with writing all their lives." },
  { n: "7", title: "Plagiarism Assurance", desc: "Once your dissertation is completed it is checked for plagiarism with anti-plagiarism software before the delivery." },
  { n: "8", title: "Free Appendices / Resources", desc: "We ensure not only to deliver your work but also additional reference materials will be shared via zip file through google drive or drop box." },
  { n: "9", title: "Download your Order", desc: "You can download your order through our CRM and reminder will be sent through email & SMS. Additional copy will be mailed." },
  { n: "10", title: "Researcher makes the changes", desc: "The document will be shared to our writer or programmer and once the work is completed, we will share you the complete work through email or you can download the order" },
  { n: "11", title: "Unlimited revisions", desc: "Since we deliver the research work, and there is a possibility that research can be viewed in different direction, we offer unlimited revision support for the concept being accepted." },
  { n: "12", title: "Request for amendment", desc: "If you required any changes, you can always come back to us, we are ready to unlimited revisions for the concept being committed. Comments can be shared through guidance@tutorsindia.com" },
];

const features = [
  {
    t: "Plagiarism Free Work",
    d: "We are aware of the consequences of plagiarism as our experts are supporting International students and scholars for more than 15 years. Hence, our work is completely plagiarism free as we ensure to scan the works against online sources in a similar way like Write Check or Turnitin so that you can be very sure about the plagiarism-free output.",
  },
  {
    t: "Uniqueness",
    d: "Every work is unique as we, as research assistance providers, know how to write a high-quality and unique research thesis / dissertation. We provide only custom master's dissertation writing services written by Subject Matter Experts who also provide justification on how it is unique. Our experts are trained from various International We provide coaching for defending your viva-voce as well.",
  },
  {
    t: "Fully Referenced",
    d: "Our Masters dissertation projects are fully referenced with latest peer-reviewed research articles, textbooks, online sources, Newspaper articles, corporate documents, UN and other such international and national regulatory bodies. Our team of copyeditors exclusively work for university-specific referencing system since we understand its importance on your credits. We comply 100% with all university-based, specific referencing guidelines of Harvard, APA, Chicago, Vancouver, Turabian etc.,",
  },
  {
    t: "100% Requirement Match",
    d: "We match your requirement 100% since our experts understand the topic and analyze the feasibility before even working on the dissertation. In our dissertation writing services, we always check with you before we proceed with next chapters. Our services exactly follow your university guidelines and refer your rubric in order to ensure your dissertation meets the expected standards.",
  },
  {
    t: "On Time Delivery",
    d: "Our work is delivered on specified time as per the commitment. We guarantee delivery of minor changes within 24 working hours and significant changes within 48 working hours as we understand the importance of our clients' deadline. We acknowledge all your emails within 30 minutes of working hours. We plan for your entire dissertation and set milestones which helps you save time",
  },
  {
    t: "Word Count Committed",
    d: "We ensure that your dissertation is meeting the exact word count as per your university regulations as we completely understand that universities reduce grades if the word count is reduced or not met. We calculate the word count excluding Table of contents, References, bibliography, Appendix and Interview responses. Our experts have handled Masters dissertations that ranged from 8,000 – 30,000 words.",
  },
  {
    t: "Quality Assurance",
    d: "We have stringent quality check and quality assurance process in every stage of your masters dissertation so that the final output is devoid of errors. Our experts understand your initial requirement, compare and cross verify the final output to meet the standards. We ensure your document is checked for subject matter, language, formatting, referencing, plagiarism and overall requirement.",
  },
  {
    t: "Unlimited revisions",
    d: "We firmly believe that every researcher has different perception and we respect your feedback and comments to improve the research quality. So we provide unlimited revisions as per the initial commitment which is completely free of cost even after the project is completed*. Our free revisions are bundled with your Masters dissertation writing as per the initial commitment.",
  },
  {
    t: "Affordable",
    d: "We strive to provide the masters dissertation writing services with world-class quality at affordable rates. Our experts are globally available who would work as per your currency rates and timings. So you can save costs in writing your Masters dissertation since our rates are nominal, student-friendly and exclusively in your currency. Our rates are constant irrespective of country, subject and quality as we provide only high-quality works.",
  },
  {
    t: "Experienced Writers with a minimum degree of Master's with research experience",
    d: "Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities from India, the US, and the UK.",
  },
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies",
  "Marketing & Communication", "Engineering & Technology", "Natural Sciences & Mathematics",
  "Biological & Life science", "Economics & Administration", "Humanities & Social Science",
  "Law", "Medicine & Health", "Education & Training",
  "Journalism & Media", "Agriculture & Forestry", "Computer Science & IT",
  "Hospitality, Leisure & Sports",
];

const freeServices = [
  { t: "References Collection", d: "We help you in a broad range of services from the selection of a dissertation topic to complete your master's dissertation successfully with the expected grade. UK MBA thesis topics are selected based on your area of interest, research gap, and feasibility of data collection." },
  { t: "Assignment Writing", d: "We help you in a broad range of services from the selection of a dissertation topic to complete your master's dissertation successfully with the expected grade. UK MBA thesis topics are selected based on your area of interest, research gap, and feasibility of data collection." },
  { t: "Model Answers", d: "We help you in a broad range of services from the selection of a dissertation topic to complete your master's dissertation successfully with the expected grade. UK MBA thesis topics are selected based on your area of interest, research gap, and feasibility of data collection." },
  { t: "Literature Review", d: "We help you in a broad range of services from the selection of a dissertation topic to complete your master's dissertation successfully with the expected grade. UK MBA thesis topics are selected based on your area of interest, research gap, and feasibility of data collection." },
  { t: "Exam Notes", d: "We help you in a broad range of services from the selection of a dissertation topic to complete your master's dissertation successfully with the expected grade. UK MBA thesis topics are selected based on your area of interest, research gap, and feasibility of data collection." },
  { t: "Essay Writing", d: "We help you in a broad range of services from the selection of a dissertation topic to complete your master's dissertation successfully with the expected grade. UK MBA thesis topics are selected based on your area of interest, research gap, and feasibility of data collection. We make you strong in your dissertation by dealing with all the questions" },
  { t: "Annotated Bibilography", d: "An essay is a piece of logical flowing, continuous, paragraphed text usually uninterrupted by headings and subheadings. Thus, writing an essay is always challenging." },
  { t: "Reflective Report", d: "We help you in a broad range of services from the selection of a dissertation topic to complete your master's dissertation successfully with the expected grade. UK MBA thesis topics are selected based on your area of interest, research gap, and feasibility of data collection. We make you strong in your dissertation by dealing with all the questions that you have in your mind." },
  { t: "Case Report Writing", d: "We help you in a broad range of services from the selection of a dissertation topic to complete your master's dissertation successfully with the expected grade. UK MBA thesis topics are selected based on your area of interest, research gap, and feasibility of data collection." },
];

const productSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "Master's Coursework Writing Services",
      image: "https://www.tutorsindia.com/wp-content/uploads/2025/02/New-Project.jpg",
      description: "Professional coursework writing services providing assignment writing, essay writing, case study analysis, critical reviews, literature reviews, research methodology support, referencing, editing, proofreading, and academic guidance for master's and MBA students.",
      url: "https://www.tutorsindia.com/our-services/coursework-writing/",
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
        ratingCount: "675",
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
    { "@type": "ListItem", position: 3, name: "Coursework Writing", item: "https://www.tutorsindia.com/our-services/coursework-writing/" },
  ],
};

export default function CourseworkWritingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* ── HERO ── */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}
            <span style={{ color: "#fff" }}>Coursework Writing</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.4rem,3vw,2rem)", lineHeight: 1.3, marginBottom: "16px" }}>
            Are you struggling with your UK Master&apos;s M.Sc., M.Phil, MA, M.Ed. and MBA, DBA PhD coursework writing ?
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "8px" }}>
            Tutors India offers you the excellent custom writing services by professional expert writers of UK.
          </p>
          <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "16px" }}>
            We make difference in terms of deadline and overall grade
          </p>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.1rem,2.5vw,1.5rem)", lineHeight: 1.3, color: "#f9c74f", marginBottom: "12px" }}>
            Coursework Writing &amp; Editing Service
          </h2>
          <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "8px" }}>
            Assistance for Coursework Writing and Editing Services exclusively for the the US, UK and Australian Universities.
          </p>
          <p style={{ color: "#f9c74f", fontSize: "1.05rem", fontWeight: 700, marginBottom: "20px" }}>
            You will be Amazed with the coursework written by our experts
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, textDecoration: "none" }}>Place an Order</Link>
            <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, textDecoration: "none" }}>Contact Us</Link>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>

        {/* Why Tutors India */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Why Tutors India for Coursework writing services?</h2>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
            The US &amp; UK writers at Tutors India aim at inculcating knowledge within students and build a great confidence to submit their coursework successfully.
          </p>
        </div>

        {/* UK Master's & PhD Coursework */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>UK Master&apos;s &amp; PhD Coursework at Tutors India Exclusive Coursework Writing Services for the UK &amp; Australian Universities</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "1rem" }}>
            UK Master&apos;s or your postgraduate degree should not be taken lightly as this decides your career further. A survey of 85 universities in the UK revealed that where more than half of the universities reported that 60 percent of the assessment is coursework while one in five reported 80 percent. A coursework includes different writing activities that includes, assignment writing, book report writing, annotated bibliography, and dissertation writing. The purpose of the coursework in different universities across the US, the US and Australian universities is to enhance the student&apos;s knowledge and their skills However, due to busy schedule life of UK, it would be challenging to submit the coursework on time.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
            At Tutors India, we write your coursework that would gurantee your grade.
          </p>
        </div>

        {/* Tutoring + Trusted Service */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>We just not provide writing assistance but also Tutoring</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "18px", fontSize: "1rem" }}>
            At Tutors India, we offer both tutoring and <Link href="/blog/what-are-the-general-instructions-to-come-up-with-outstanding-academic-coursework-writing-for-research-studies/" style={{ color: "#1a2a6c", fontWeight: 600 }}>coursework writing</Link> services. We offer experiments, research, reports, essays, and dissertations.
          </p>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>A Trusted the UK Coursework Writing Service at Tutors India</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "1rem" }}>
            Tutors India has skilled and talented professional UK writers who work with your UK Master&apos;s and MBA coursework and assist you at all the stages of your UK <Link href="/blog/what-are-the-guidelines-to-present-an-excellent-coursework-writing-for-business-studies/" style={{ color: "#1a2a6c", fontWeight: 600 }}>MBA coursework writing</Link> either online or email based. We assist you 24/7 and provide evidence that we deliver what exactly you expect. This is one of the highlights of our services which remains unmatched by our competitors across the world.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "1rem" }}>
            Our team of UK coursework writing experts consists of experienced professionals who are holding at least a Master&apos;s degree and also Ph.D. holders from the prestigious universities from the UK, US, and Australia, who can help you in writing any coursework whether it is science or management or computer science or Engineering or environmental science.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "1rem" }}>
            Our experts write your UK Master&apos;s and MBA coursework writing (exclusively for the UK universities MBA dissertation writing service (UK MBA, ME, M.Sc., M.S., MPH, MPhil) without plagiarism and set in innovative ideas.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "1rem" }}>
            Our unique approach has helped hundreds of scholars to complete and submit their UK MBA and Master&apos;s coursework across the global successfully.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "1rem" }}>
            Tutors India do not sell any paper but we consider every piece of work is unique and therefore we write from scratch based on the precise instructions you provide during the ordering process. Thereby, you can feel relaxed that you are going to get help
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
            Whether it&apos;s determining the right <Link href="/our-services/coursework-writing/research-methodology/" style={{ color: "#1a2a6c", fontWeight: 600 }}>Research Methodology</Link>, <Link href="/our-services/coursework-writing/essay-writing-services/" style={{ color: "#1a2a6c", fontWeight: 600 }}>writing an essay</Link>, or referencing only <Link href="/our-services/editing-services/language-editing/" style={{ color: "#1a2a6c", fontWeight: 600 }}>peer-reviewed research</Link>, our subject matter experts support every stage of your coursework.
          </p>
        </div>

        {/* Service Cards */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "8px" }}>Our PhD Coursework Services</h2>
          <p style={{ color: "#666", fontSize: "0.96rem", marginBottom: "18px" }}>Note: Tutors India has skilled and talented professional UK writers who work with your UK Master&apos;s and MBA coursework and assist you at all the stages of your UK MBA coursework writing either online or email based.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "16px" }} className="two-col-grid">
            {services.map((s, i) => (
              <Link key={s.title} href={s.href} style={{ textDecoration: "none" }}>
                <div style={{ background: "#f8f9ff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px", height: "100%", transition: "border-color 0.2s" }}>
                  <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <div style={{ width: "34px", height: "34px", background: "#1a2a6c", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "0.82rem", flexShrink: 0 }}>{i + 1}</div>
                    <div>
                      <h3 style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{s.title}</h3>
                      <p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* UK Coursework Writing Service feature */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>UK Coursework Writing Service feature</h2>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
            The US &amp; UK writers at Tutors India aim at inculcating knowledge within students and build a great confidence to submit their coursework sucessfully..
          </p>
        </div>

        {/* Wide Range of Services */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Wide Range of Services &amp; Types of Coursework</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "1rem" }}>
            We help you in a broad range of services and subjects. We ensure that the students approaching Tutors India UK for coursework writing, we identify writers who are well versed in particular subject including chemistry, criminology, mathematics, statistics, management, physics, sociology, biology, law, geography, social science, nursing, medicine, arts and literature, computer science, software programming, information technology, graphics, animation 3D drawing, CAD, construction etc.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
            We offer you business plan writing, which provides an opportunity to build professional and practical understanding on a business case. Marketing plan (part of business plan), Case (e.g. Harvard Business Review Case studies) study, financial analysis (ratio analysis), etc.
          </p>
        </div>

        {/* Primary Principles */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Coursework writing - Primary Principles</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "14px", fontSize: "1rem" }}>
            Although defining a coursework writing structure is challenging, as it depends on the multiple factors, but it has got some standard writing on a topic such as general introduction, main body and conclusion. However, developing a financial analysis on a company would be more challenging than writing a coursework on a generic topic. Our coursework writing services UK follow certain principles that includes:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              "The coursework writing is critical",
              "Researched in extensive depth",
              "Follow logical structure therefore easy to read and follow",
              "Structued by separate title, sub-title and bullet points",
              "Keep the reader interested in the style and topic",
            ].map((p, i) => (
              <div key={i} style={{ display: "flex", gap: "12px", alignItems: "center", background: "#f8f9ff", border: "1px solid #dde2ef", borderRadius: "8px", padding: "12px 16px" }}>
                <div style={{ width: "26px", height: "26px", background: "#e87722", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "0.8rem", flexShrink: 0 }}>✓</div>
                <span style={{ fontSize: "0.94rem", color: "#555" }}>{p}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Coursework Writing According to University Style */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Coursework writing according to Your University Style</h2>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
            Our coursework writing services are for students pursuing their higher education degree in the Australia, Canada, UK, USA and UAE. Students across the world, prefer Tutors India UK as the most trustable coursework writing as we offer coursework writing according to the University style.
          </p>
        </div>

        {/* What You Expect */}
        <div style={{ background: "#fff8f0", border: "1px solid #f5d9bb", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "8px" }}>What You Expect when you order Coursework Writing Service</h2>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700, color: "#e87722", marginBottom: "16px" }}>Get some of our Service features at Free of Costs</h3>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "16px", fontSize: "1rem" }}>
            We Share references sourced for your dissertation in the form of PDFs, questionnaire or interview guide and primary research output without data at free of costs
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "14px" }} className="two-col-grid">
            {freeServices.map(f => (
              <div key={f.t} style={{ background: "#fff", border: "1px solid #f5d9bb", borderRadius: "8px", padding: "16px" }}>
                <h3 style={{ fontSize: "0.96rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{f.t}</h3>
                <p style={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.65, margin: 0 }}>{f.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Features */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>A Coursework Writing Service features that helps to get the grade</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "1rem" }}>
            Many students find difficult to complete their coursework in between their hectic schedules. Since coursework completion is mandatory as scores are counted deciding an overall grade for a student. Therefore, it is important for any student to complete their coursework on time in a perfect and expected manner.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "1rem" }}>
            Our coursework writing UK helps the students to complete their assignment successfully. As we use qualified and experienced writers to complete the coursework assignment.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "1rem" }}>
            The writers are bounded to provided drafts on customer request, as they have an opportunity to review the document before receiving the final draft.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
            The final draft will be sent after scrutinizing by our quality assurance department for proofreading and plagiarism check.
          </p>
        </div>

        {/* Key Features */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>Our Coursework Writing &amp; Editing Service Features</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "16px" }} className="two-col-grid">
            {features.map(f => (
              <div key={f.t} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px" }}>
                <h3 style={{ fontSize: "0.96rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{f.t}</h3>
                <p style={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.65, margin: 0 }}>{f.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* As well as your order */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>As well as your order , you will also get the following</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              "Your Dissertation is written by your choice of Subject Matter Expertise",
              "We have a team of 2000+ expertise across the subjects & countries (including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia & Ukraine)",
            ].map((p, i) => (
              <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start", background: "#f8f9ff", border: "1px solid #dde2ef", borderRadius: "8px", padding: "12px 16px" }}>
                <div style={{ width: "26px", height: "26px", background: "#1a2a6c", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "0.8rem", flexShrink: 0 }}>✓</div>
                <span style={{ fontSize: "0.94rem", color: "#555", lineHeight: 1.65 }}>{p}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Features */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>Our Additional Features</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <div>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "8px" }}>Authenticated References</h3>
              <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "8px", fontSize: "0.96rem" }}>All our research writing, editing, and rewriting services are fully referenced and cited academically using style (Harvard, Chicago, MLA, APA) guide provided by the university. We support our arguments and offer a factual basis, to ensure protect against charges of plagiarism.</p>
              <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "8px", fontSize: "0.96rem" }}>Further, Tutors India demonstrates to assessors that you have carried out the necessary research and allow the reader to locate the material. We reference, even the materials are paraphrased or quote from another source to acknowledge and retrospect the intellectual property rights.</p>
              <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.96rem" }}>We ensure to provide both in-text and list of references (books, chapters in an edited book, journal articles, electronic journal articles, web document, letter, emails, online discussion forums, personal interviews, pamphlets or brochures, reprint diagrams, illustrations, charts or pictures, lecturer or tutors).</p>
            </div>
            <div>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "8px" }}>Plagiarism Free</h3>
              <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "8px", fontSize: "0.96rem" }}>We ensure that the document is less than 5 or 0 percent of plagiarism. We correct all errors and infelicities in grammar, syntax, and usage. Rewrite any wordy or convoluted patch. Ask for or supply definitions of terms likely to be new to readers. Verify and revise any facts that are incorrect. Query or fix faulty organization and gaps in logic.</p>
              <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "8px", fontSize: "0.96rem" }}>We edit or rewrite your complete Master&apos;s / Postgraduate dissertation and manuscript to ensure that your writing does represent your own assertions and abilities. Paraphrase the content using our own words. We re-read the original article, summarize, digest and explain through our own words.</p>
              <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.96rem" }}>We do this with much effort where the focus on content researched by different authors on the same topic and evaluate its limitations and strengths of their argument and rewrite the complete passage.</p>
            </div>
            <div>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "8px" }}>Unlimited Revision Support with Quality Check &amp; Assurance</h3>
              <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "8px", fontSize: "0.96rem" }}>We consult researchers on how they have to handle the research work in every step, i.e., when choosing a topic, framing the right methodology, collecting the data and every such step, which no other service provider does. We provide unlimited revisions absolutely free of cost as per the commitment made by us since we, as researchers, understand that every researcher has their own perception.</p>
              <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.96rem" }}>We welcome participatory research in which your feedback/comments are discussed, justified and incorporated. This process goes unlimited due to which we support every time our researchers/clients with the same smile and enthusiasm. Our commitment towards research excellence and quality for your work is proved by our unlimited revisions support even after your project is completed.</p>
            </div>
          </div>
        </div>

        {/* Order Process */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "8px" }}>Order Process</h2>
          <p style={{ color: "#666", fontSize: "0.96rem", marginBottom: "18px" }}>Have a look at what makes us the best in the business</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "14px" }} className="three-col-grid">
            {orderSteps.map(s => (
              <div key={s.n} style={{ background: "#f8f9ff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "16px", display: "flex", gap: "12px" }}>
                <div style={{ width: "32px", height: "32px", background: "#1a2a6c", borderRadius: "50%", color: "#fff", fontWeight: 700, fontSize: "0.82rem", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{s.n}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.85rem", color: "#1a2a6c", marginBottom: "4px" }}>{s.title}</div>
                  <p style={{ fontSize: "0.8rem", color: "#666", lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subject Expertise */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Subject Matter Expertise Available</h2>
          <p style={{ color: "#666", fontSize: "0.96rem", marginBottom: "14px" }}>Tutors India has capability and skills to handle subjects across the field. We have more than 2000+ expertise working across the world who can handle arts, literature, sciences, engineering or medicine.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {subjects.map(s => (
              <span key={s} style={{ background: "#f0f4ff", border: "1px solid #c5d0ea", borderRadius: "20px", padding: "6px 14px", fontSize: "0.82rem", color: "#1a2a6c", fontWeight: 500 }}>{s}</span>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>Voice of Our customer</h2>
          <TestimonialSlider testimonials={testimonials} />
        </div>

        {/* Related resources */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>Related Resources</h2>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link href="/coursework-assignment/" style={{ padding: "9px 18px", border: "1.5px solid #dde2ef", borderRadius: "20px", color: "#1a2a6c", fontSize: "0.85rem", fontWeight: 600 }}>Coursework &amp; Assignment Help</Link>
            <Link href="/coursework/nursing-assignment-q-and-a/" style={{ padding: "9px 18px", border: "1.5px solid #dde2ef", borderRadius: "20px", color: "#1a2a6c", fontSize: "0.85rem", fontWeight: 600 }}>Nursing Assignment Q&amp;A</Link>
            <Link href="/coursework/statistical-analysis/" style={{ padding: "9px 18px", border: "1.5px solid #dde2ef", borderRadius: "20px", color: "#1a2a6c", fontSize: "0.85rem", fontWeight: 600 }}>Statistical Analysis Q&amp;A</Link>
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", borderRadius: "12px", padding: "36px 28px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", color: "#fff", marginBottom: "10px" }}>Invest in your Career</h2>
          <p style={{ color: "#c5d5f0", marginBottom: "20px", fontSize: "0.95rem" }}>Place Your Order Today</p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/order-now/" style={{ padding: "13px 32px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, textDecoration: "none" }}>Order Now</Link>
            <Link href="/contact-us/" style={{ padding: "13px 32px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, textDecoration: "none" }}>Contact Us</Link>
          </div>
        </div>

      </section>

      <style>{`
        @media(max-width:900px){.three-col-grid{grid-template-columns:1fr 1fr!important;}}
        @media(max-width:600px){.three-col-grid,.two-col-grid{grid-template-columns:1fr!important;}}
      `}</style>
    </>
  );
}
