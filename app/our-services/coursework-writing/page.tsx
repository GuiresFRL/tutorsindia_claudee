import Link from "next/link";
import type { Metadata } from "next";
import { serviceCategories } from "@/lib/data/services";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "Coursework Writing Services UK | Essays, Reports, Reviews",
  description: "Expert Coursework Writing Services for Master's, MBA and PhD students. Essay Writing, Annotated Bibliography, Reflective Reports, Critical Reviews and more. Tutors India.",
};

const cat = serviceCategories.find((c) => c.slug === "coursework-writing")!;

const features = [
  {
    title: "Plagiarism Free Work",
    desc: "We are aware of the consequences of plagiarism as our experts are supporting International students and scholars for more than 15 years. Hence, our work is completely plagiarism free as we ensure to scan the works against online sources in a similar way like Write Check or Turnitin so that you can be very sure about the plagiarism-free output.",
  },
  {
    title: "Uniqueness",
    desc: "Every work is unique as we, as research assistance providers, know how to write a high-quality and unique research thesis / dissertation. We provide only custom master's dissertation writing services written by Subject Matter Experts who also provide justification on how it is unique. We provide coaching for defending your viva-voce as well.",
  },
  {
    title: "Fully Referenced",
    desc: "Our Masters dissertation projects are fully referenced with latest peer-reviewed research articles, textbooks, online sources, Newspaper articles, corporate documents, UN and other such international and national regulatory bodies. We comply 100% with all university-based, specific referencing guidelines of Harvard, APA, Chicago, Vancouver, Turabian etc.",
  },
  {
    title: "100% Requirement Match",
    desc: "We match your requirement 100% since our experts understand the topic and analyze the feasibility before even working on the dissertation. In our dissertation writing services, we always check with you before we proceed with next chapters. Our services exactly follow your university guidelines and refer your rubric in order to ensure your dissertation meets the expected standards.",
  },
  {
    title: "On Time Delivery",
    desc: "Our work is delivered on specified time as per the commitment. We guarantee delivery of minor changes within 24 working hours and significant changes within 48 working hours as we understand the importance of our clients' deadline. We acknowledge all your emails within 30 minutes of working hours. We plan for your entire dissertation and set milestones which helps you save time.",
  },
  {
    title: "Word Count Committed",
    desc: "We ensure that your dissertation is meeting the exact word count as per your university regulations as we completely understand that universities reduce grades if the word count is reduced or not met. We calculate the word count excluding Table of contents, References, bibliography, Appendix and Interview responses. Our experts have handled Masters dissertations that ranged from 8,000 – 30,000 words.",
  },
  {
    title: "Quality Assurance",
    desc: "We have stringent quality check and quality assurance process in every stage of your masters dissertation so that the final output is devoid of errors. Our experts understand your initial requirement, compare and cross verify the final output to meet the standards. We ensure your document is checked for subject matter, language, formatting, referencing, plagiarism and overall requirement.",
  },
  {
    title: "Unlimited Revisions",
    desc: "We firmly believe that every researcher has different perception and we respect your feedback and comments to improve the research quality. So we provide unlimited revisions as per the initial commitment which is completely free of cost even after the project is completed*. Our free revisions are bundled with your Masters dissertation writing as per the initial commitment.",
  },
  {
    title: "Affordable",
    desc: "We strive to provide the masters dissertation writing services with world-class quality at affordable rates. Our experts are globally available who would work as per your currency rates and timings. So you can save costs in writing your Masters dissertation since our rates are nominal, student-friendly and exclusively in your currency. Our rates are constant irrespective of country, subject and quality as we provide only high-quality works.",
  },
  {
    title: "Experienced Writers with a minimum degree of Master's with research experience",
    desc: "Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities from India, the US, and the UK.",
  },
];

const testimonials = [
  {
    quote: "Good job by Tutors India on drafting my coursework. I had a lot of clarity about the process as it was kept very transparent throughout. There was no delay with their response and my coursework was delivered within the requested time. The review was very good. I will definitely come back with more requests.",
    author: "Jenifer Williams",
    location: "Japan",
    avatar: "/images/testimonials/t16.jpg",
  },
  {
    quote: "Excellent writing service with translation and editing. I want to thank the writers as without their hard work, it would have been really difficult to quickly get my essay completed. I appreciate their professionalism and thank them for the perfect services offered to me.",
    author: "Anay",
    location: "US",
    avatar: "/images/testimonials/t17.jpg",
  },
  {
    quote: "I am grateful to the Tutors India for quality work on completing my scientific assignment. Came in on time as scheduled and highlighted the scientific merit of the study. Thank you tutors India for your fast and accurate work.",
    author: "Max",
    avatar: "/images/testimonials/t3.jpg",
  },
  {
    quote: "I'm grateful to the team who guided me all the way through for completing my assignment work in financial regulation. It was excellent as they provided me with high quality technical content and my assignment was submitted on time. The academic writing service was more than I expected. Thanks Tutors India!",
    author: "Divyansh",
    avatar: "/images/testimonials/t4.jpg",
  },
  {
    quote: "It was my first experience with the Tutors India and to be honest I was unsure. I was worrying whether I will get my research paper I needed on time. But all my doubts faded away when I met my excellent writer for my assignment. Now I know for sure if I ever need a paper again I can definitely rely on Tutors India. Thanks team.",
    author: "Suveer",
    location: "Singapore",
    avatar: "/images/testimonials/t2.jpg",
  },
  {
    quote: "Very happy PhD Coursework. Professional skills visible in results. Great comments during.",
    author: "Gatik",
    location: "Andorra",
    avatar: "/images/testimonials/t5.jpg",
  },
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies",
  "Marketing & Communication", "Engineering & Technology", "Natural Sciences & Mathematics",
  "Biological & Life science", "Economics & Administration", "Humanities & Social Science",
  "Law", "Medicine & Health", "Education & Training", "Journalism & Media",
  "Agriculture & Forestry", "Computer Science & IT", "Hospitality, Leisure & Sports",
];

export default function CourseworkWritingPage() {
  const half = Math.ceil(cat.services.length / 2);
  return (
    <>
      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "72px 24px 60px", textAlign: "center" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontSize: "0.85rem", color: "#a0b8e0", marginBottom: "14px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}
            <span style={{ color: "#fff" }}>Coursework Writing</span>
          </p>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.2rem)", lineHeight: 1.3, marginBottom: "14px" }}>
            Are you struggling with your UK Master&apos;s M.Sc., M.Phil, MA, M.Ed. and MBA, DBA PhD Coursework Writing?
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "8px" }}>
            Tutors India offers you the excellent custom writing services by professional expert writers of UK.
          </p>
          <p style={{ color: "#f9c74f", fontSize: "1rem", fontWeight: 600, marginBottom: "24px" }}>
            We make difference in terms of deadline and overall grade
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
            <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div style={{ background: "#12214a", padding: "16px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: "2,000+", l: "Expert Writers" }, { n: "2,00,000+", l: "Scholars Served" }, { n: "22+", l: "Years Experience" }, { n: "< 5%", l: "Plagiarism" }, { n: "Unlimited", l: "Revisions" }, { n: "30 min", l: "Response" }].map((s) => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
              <div style={{ fontSize: "0.68rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <section style={{ maxWidth: "1200px", margin: "52px auto", padding: "0 24px" }}>

        {/* Intro */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "32px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>
            UK Master&apos;s &amp; PhD Coursework at Tutors India — Exclusive Coursework Writing Services for the UK &amp; Australian Universities
          </h2>
          <p style={{ color: "#555", lineHeight: 1.85, marginBottom: "12px", fontSize: "0.93rem" }}>
            UK Master&apos;s Degrees should not be taken lightly as this determines your career progression. A survey of 85 universities in the UK revealed that where more than half of the universities reported that 60 percent of the assessment is coursework while one in five reported 80 percent. Coursework includes various writing activities (assignments, book reports, annotated bibliography, dissertations) designed to enhance student knowledge and skills.
          </p>
          <p style={{ color: "#555", lineHeight: 1.85, marginBottom: "12px", fontSize: "0.93rem" }}>
            The US &amp; UK writers at Tutors India aim at inculcating knowledge within students and build a great confidence to submit their coursework successfully. Due to the busy schedule life of UK, it would be challenging to submit the coursework on time. We just not provide writing assistance but also Tutoring including experiments, research, reports, essays, and dissertations.
          </p>
          <p style={{ color: "#555", lineHeight: 1.85, fontSize: "0.93rem" }}>
            Tutors India has skilled and talented professional UK writers who work with your UK Master&apos;s and MBA coursework and assist you at all the stages of your UK MBA coursework writing either online or email based. We assist you 24/7 and provide evidence that we deliver what exactly you expect. Our experts write your UK Master&apos;s and MBA coursework without plagiarism and set in innovative ideas. Our unique approach has helped hundreds of scholars to complete and submit their UK MBA and Master&apos;s coursework across the global successfully.
          </p>
        </div>

        {/* SERVICES LISTING */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>
          What Services Do We Offer Under Coursework Writing?
        </h2>
        <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "22px" }}>Comprehensive academic coursework support for every level of study</p>
        <div style={{ background: "#fff", borderRadius: "12px", border: "1px solid #dde2ef", padding: "28px", marginBottom: "36px" }}>
          <div className="service-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0" }}>
            <div style={{ paddingRight: "20px" }}>
              {cat.services.slice(0, half).map((svc) => (
                <div key={svc.href} style={{ padding: "16px 0", borderBottom: "1px solid #f0f2fa" }}>
                  <Link href={svc.href}><h3 style={{ fontSize: "0.95rem", fontWeight: 600, color: "#2563b0", marginBottom: "5px" }}>{svc.title}</h3></Link>
                  <p style={{ fontSize: "0.84rem", color: "#666", lineHeight: 1.6, marginBottom: "6px" }}>{svc.description}</p>
                  <Link href={svc.href} style={{ fontSize: "0.82rem", color: "#e87722", fontWeight: 600 }}>Learn More →</Link>
                </div>
              ))}
            </div>
            <div style={{ paddingLeft: "20px", borderLeft: "1px solid #dde2ef" }} className="service-right">
              {cat.services.slice(half).map((svc) => (
                <div key={svc.href} style={{ padding: "16px 0", borderBottom: "1px solid #f0f2fa" }}>
                  <Link href={svc.href}><h3 style={{ fontSize: "0.95rem", fontWeight: 600, color: "#2563b0", marginBottom: "5px" }}>{svc.title}</h3></Link>
                  <p style={{ fontSize: "0.84rem", color: "#666", lineHeight: 1.6, marginBottom: "6px" }}>{svc.description}</p>
                  <Link href={svc.href} style={{ fontSize: "0.82rem", color: "#e87722", fontWeight: 600 }}>Learn More →</Link>
                </div>
              ))}
            </div>
          </div>
          {cat.note && (
            <div style={{ background: "#fff8f0", borderLeft: "4px solid #e87722", padding: "12px 16px", borderRadius: "0 6px 6px 0", marginTop: "18px", fontSize: "0.86rem", color: "#555" }}>
              <strong style={{ color: "#e87722" }}>Note:</strong> {cat.note}
            </div>
          )}
        </div>

        {/* FEATURES — 10 original */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>
          Why Tutors India for Coursework Writing Services?
        </h2>
        <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "22px" }}>A Coursework Writing Service features that helps to get the grade</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "18px", marginBottom: "36px" }} className="two-col-grid">
          {features.map((f) => (
            <div key={f.title} style={{ background: "#fff", borderLeft: "4px solid #2563b0", borderRadius: "8px", padding: "20px 22px", border: "1px solid #dde2ef" }}>
              <h3 style={{ fontSize: "0.96rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "8px" }}>{f.title}</h3>
              <p style={{ fontSize: "0.84rem", color: "#666", lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* FREE DELIVERABLES + EXPERT TEAM */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px", marginBottom: "36px", alignItems: "start" }} className="two-col-grid">
          <div>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.25rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>What You Expect when you order Coursework Writing Service</h2>
            <p style={{ color: "#666", fontSize: "0.88rem", marginBottom: "12px", lineHeight: 1.7 }}>Get some of our Service features at Free of Costs:</p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {["References sourced for your dissertation in the form of PDFs", "Questionnaire or interview guide", "Primary research output without data at free of costs", "Abstract or Executive Summary", "Graphs & Tables (redrawn)", "Statistical / textual data analysis", "SPSS / software screenshots", "Free tutoring sessions", "Appendices at no additional cost"].map((item) => (
                <li key={item} style={{ display: "flex", gap: "8px", padding: "8px 0", borderBottom: "1px solid #f0f2fa", fontSize: "0.88rem", color: "#555" }}>
                  <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "28px" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "14px" }}>A Trusted UK Coursework Writing Service at Tutors India</h3>
            <ul style={{ listStyle: "none", padding: 0, marginBottom: "20px" }}>
              {["2000+ experts across subjects & countries", "USA, UK, Australia, Canada, New Zealand, Germany, France, Russia, Ukraine", "PhD and Masters degree holders", "Minimum 5 years research experience", "NDA-signed and background-checked", "24/7 availability across all time zones", "Online or email based support", "Coursework across all writing activities — assignments, book reports, annotated bibliography, dissertations"].map((item) => (
                <li key={item} style={{ display: "flex", gap: "8px", padding: "7px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", fontSize: "0.85rem", color: "#c5d5f0" }}>
                  <span style={{ color: "#f9c74f" }}>→</span> {item}
                </li>
              ))}
            </ul>
            <div style={{ display: "flex", gap: "10px" }}>
              <Link href="/order-now/" style={{ flex: 1, textAlign: "center", padding: "10px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Order Now</Link>
              <Link href="/contact-us/" style={{ flex: 1, textAlign: "center", padding: "10px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
        </div>

        {/* Voice of Our customer */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>Voice of Our customer</h2>
        <TestimonialSlider testimonials={testimonials} />

        {/* SUBJECTS */}
        <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px", marginTop: "32px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Subject Matter Expertise Areas</h2>
          <p style={{ color: "#666", fontSize: "0.86rem", marginBottom: "14px" }}>USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {subjects.map((s) => (<span key={s} style={{ padding: "5px 13px", background: "#fff", border: "1.5px solid #dde2ef", borderRadius: "16px", fontSize: "0.79rem", color: "#1a2a6c", fontWeight: 500 }}>{s}</span>))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Ready to Get Started with Your Coursework?</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>Join 2,00,000+ scholars. Response within 30 minutes · Unlimited Revisions · Plagiarism-Free</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>

      <style>{`
        @media(max-width:768px){
          .service-two-col{grid-template-columns:1fr!important;}
          .service-right{padding-left:0!important;border-left:none!important;margin-top:16px;}
          .two-col-grid{grid-template-columns:1fr!important;}
        }
      `}</style>
    </>
  );
}
