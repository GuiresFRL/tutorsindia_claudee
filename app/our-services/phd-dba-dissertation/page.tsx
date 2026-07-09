import Link from "next/link";
import type { Metadata } from "next";
import { serviceCategories } from "@/lib/data/services";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "PhD / DBA Dissertation Writing & Editing Services | Tutors India",
  description: "Are you looking for MBA / DBA Writing & Editing Services? Plagiarism free research with novelty and innovation. Expert PhD writers from UK, US and Australia.",
};

const cat = serviceCategories.find((c) => c.slug === "phd-dba-dissertation")!;

const features = [
  {
    title: "Plagiarism Free Work",
    desc: "We are aware of the consequences of plagiarism. Hence, topic selection is completely plagiarism Free. Our work is scanned against online sources in a similar way like WriteCheck or Turnitin. We wanted to ensure that our clients i.e., researchers and students are not finding any issues with regards to plagiarism and so we issue plagiarism-free certificate*. Our streamlined and high-quality research writing process ensures your dissertation is not just copy-pasted, but written only after brainstorming sessions with our team of professional researchers.",
  },
  {
    title: "Uniqueness",
    desc: "Every work is unique as we, as research assistance providers, know how to write a high-quality and unique research thesis / dissertation. We provide only custom PhD / DBA dissertation writing services written by Subject Matter Experts who also provide justification on how it is unique. We provide coaching for defending your viva-voce as well.",
  },
  {
    title: "Fully Referenced",
    desc: "MBA or DBA thesis / dissertation writing requires extensive referencing search, including text books, journal articles, monographs, newspaper articles, etc. We provide you the full articles that were used for referencing which help to check the authentication. We comply 100% with all university-based, specific referencing guidelines of Harvard, APA, Chicago, Vancouver, Turabian etc.",
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
    desc: "We ensure that your dissertation is meeting the exact word count as per your university regulations as we completely understand that universities reduce grades if the word count is reduced or not met. Our experts have handled PhD / DBA dissertations that ranged from 8,000 – 80,000 words.",
  },
  {
    title: "Quality Assurance",
    desc: "We have stringent quality check and quality assurance process in every stage of your PhD / DBA dissertation so that the final output is devoid of errors. Our experts understand your initial requirement, compare and cross verify the final output to meet the standards. We ensure your document is checked for subject matter, language, formatting, referencing, plagiarism and overall requirement.",
  },
  {
    title: "Unlimited revisions",
    desc: "We firmly believe that every researcher has different perception and we respect your feedback and comments to improve the research quality. So we provide unlimited revisions as per the initial commitment which is completely free of cost even after the project is completed*. Our free revisions are bundled with your PhD / DBA dissertation writing as per the initial commitment.",
  },
  {
    title: "Affordable",
    desc: "We strive to provide the PhD / DBA dissertation writing services with world-class quality at affordable rates. Our experts are globally available who would work as per your currency rates and timings. So you can save costs in writing your PhD / DBA dissertation since our rates are nominal, student-friendly and exclusively in your currency.",
  },
  {
    title: "Experienced Writers with a minimum degree of Master's with research experience",
    desc: "Our team of UK dissertation writing experts consists of experienced professionals who are holding Ph.D. degree from the prestigious universities from the UK, US, and Australia. Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities.",
  },
];

const additionalFeatures = [
  {
    title: "Authenticated References",
    desc: "MBA or DBA thesis / dissertation writing requires extensive referencing search, including text books, journal articles, monographs, newspaper articles, etc. We provide you the full articles that were used for referencing which help to check the authentication.",
  },
  {
    title: "Plagiarism Free",
    desc: "Our work is scanned against online sources in a similar way like WriteCheck or Turnitin. We issue a plagiarism-free certificate on request. Less than 5% plagiarism guaranteed.",
  },
  {
    title: "Unlimited Revision Support with Quality Check & Assurance",
    desc: "Delivery of minor changes within 24 working hours and significant changes within 48 working hours. We acknowledge all emails within 30 minutes of working hours.",
  },
  {
    title: "Appendices at No Additional Cost",
    desc: "We provide appendices for your dissertation at no additional cost, including experiment diagrams, questionnaires, permission forms, ethical forms, and reflection documents.",
  },
  {
    title: "Development of Questionnaire or Interview at a Free of costs",
    desc: "We develop research questionnaires or interview schedules at no additional cost as part of your dissertation project.",
  },
];

const testimonials = [
  {
    quote: "The US & UK writers at Tutors India aim at inculcating knowledge within students and build a great confidence to submit their dissertation successfully. I am very satisfied with the quality of work delivered.",
    author: "Jenifer Williams",
    location: "Japan",
    avatar: "/images/testimonials/t16.jpg",
  },
  {
    quote: "Tutors India has skilled and talented professional UK writers who work with your UK MBA dissertations and assist you at all the stages of your UK / the USA MBA dissertation writing either online or email based.",
    author: "Gatik",
    location: "Andorra",
    avatar: "/images/testimonials/t14.jpg",
  },
  {
    quote: "Our team of UK dissertation writing experts consists of experienced professionals holding Ph.D. degrees from prestigious universities. I got distinction in my DBA dissertation thanks to Tutors India.",
    author: "Max",
    avatar: "/images/testimonials/t13.jpg",
  },
  {
    quote: "I am grateful for the expert guidance on my PhD dissertation. The quality of research and writing was exceptional. They matched all my university guidelines perfectly.",
    author: "Divyansh",
    avatar: "/images/testimonials/t15.jpg",
  },
];

export default function PhDDBADissertationPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
              <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}
              <span style={{ color: "#fff" }}>PhD / DBA Dissertation</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              Are you looking for MBA / DBA Writing &amp; Editing Services? Looking for plagiarism free but at the same some novelty/innovation in research or wanted to conduct their research using latest technologies / trends?
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              The US &amp; UK writers at Tutors India aim at inculcating knowledge within students and build a great confidence to submit their dissertation successfully. Tutors India has skilled and talented professional UK writers who work with your UK MBA dissertations and assist you at all the stages of your UK / the USA MBA dissertation writing either online or email based.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/samples/assignment-writing.jpg" alt="PhD DBA Dissertation Writing Services" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>PhD Qualified Writers<br />10+ Years Experience<br />All Subjects</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      {/* ── STATS BAR ── */}
      <div style={{ background: "#12214a", padding: "16px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: "2000+", l: "Expertise Across Subjects" }, { n: "PhD & Masters", l: "Qualified Writers" }, { n: "< 5%", l: "Plagiarism" }, { n: "Unlimited", l: "Revisions" }, { n: "30 min", l: "Response Time" }, { n: "24/7", l: "Support" }].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
              <div style={{ fontSize: "0.68rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>

        {/* Intro */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>MBA / DBA Dissertation Writing &amp; Editing Services</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            Tutors India has skilled and talented professional UK writers who work with your UK MBA dissertations and assist you at all the stages of your UK / the USA MBA dissertation writing either online or email based. Our team of UK dissertation writing experts consists of experienced professionals who are holding Ph.D. degree from the prestigious universities from the UK, US, and Australia.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            MBA or DBA thesis / dissertation writing requires extensive referencing search, including text books, journal articles, monographs, newspaper articles, etc. We provide you the full articles that were used for referencing which help to check the authentication.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.94rem" }}>
            We make difference in terms of deadline and overall grade. Our PhD / DBA dissertation writing service helps you complete your degree successfully with distinction-level quality, innovative research, and the latest methodologies and technologies.
          </p>
        </div>

        {/* Why Tutors India */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Why Tutors India for MBA dissertation writing services?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
            {[
              { title: "Personalized Support", desc: "We offer personalized support with your choice of Subject Matter Expertise. Your dissertation is written by the expert you select from our pool of PhD-qualified writers." },
              { title: "Time Management Assistance", desc: "We plan for your entire dissertation and set milestones which helps you save time. Our coordinators track progress and ensure on-time delivery at every chapter." },
              { title: "Expert Feedback and Revisions", desc: "We just not provide MBA writing assistance but also Tutoring. Our experts provide detailed feedback, unlimited revisions and guidance for viva-voce preparation." },
            ].map(f => (
              <div key={f.title} style={{ background: "#fff", borderRadius: "10px", padding: "20px", border: "1px solid #dde2ef" }}>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "8px" }}>{f.title}</h3>
                <p style={{ fontSize: "0.84rem", color: "#555", lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What to Expect */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>What You Expect when you order MBA / DBA Dissertation Writing Service</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "14px" }} className="two-col-grid">
            {[
              "A Trusted MBA Dissertation Writing Service",
              "2000+ expertise across subjects & countries",
              "PhD qualified subject matter experts",
              "Plagiarism free work (less than 5%)",
              "Unlimited revisions free of cost",
              "On-time delivery guaranteed",
              "24/7 support and 30 min email response",
              "Fully referenced with authenticated sources",
              "100% confidential and secure service",
              "Three-level quality check process",
            ].map(item => (
              <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start", padding: "10px 14px", background: "#f8f9ff", borderRadius: "8px", border: "1px solid #e8eaf6" }}>
                <span style={{ color: "#e87722", fontWeight: 700, marginTop: "1px", flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: "0.87rem", color: "#444" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Free of Cost Features */}
        <div style={{ background: "#fff8f0", border: "1px solid #f5d9bb", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Get some of our Service features at Free of Costs</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "18px" }}>These features are included at no additional charge with your PhD / DBA dissertation order</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
            {additionalFeatures.map(f => (
              <div key={f.title} style={{ background: "#fff", borderRadius: "10px", padding: "20px", border: "1px solid #f5d9bb" }}>
                <div style={{ width: "36px", height: "36px", background: "#e87722", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "1rem", marginBottom: "10px" }}>✓</div>
                <h3 style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{f.title}</h3>
                <p style={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PhD Services */}
        {cat && (
          <div style={{ marginBottom: "28px" }}>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Our PhD Dissertation Services</h2>
            <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "18px" }}>Complete PhD / DBA dissertation support from topic selection to viva preparation</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
              {cat.services.map(s => (
                <Link key={s.href} href={s.href} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px", textDecoration: "none", display: "block", transition: "box-shadow 0.2s" }}>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{s.title}</h3>
                  <p style={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.6 }}>{s.description}</p>
                  <span style={{ display: "inline-block", marginTop: "10px", fontSize: "0.8rem", color: "#e87722", fontWeight: 600 }}>Learn More →</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Features */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Our Ph.D. / DBA Dissertation Writing &amp; Editing Service Features</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "18px" }}>A Dissertation Writing Service features that helps to get the grade</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "18px" }} className="two-col-grid">
            {features.map((f, i) => (
              <div key={f.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px", display: "flex", gap: "14px" }}>
                <div style={{ width: "34px", height: "34px", background: "#1a2a6c", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "0.85rem", flexShrink: 0, marginTop: "2px" }}>{i + 1}</div>
                <div>
                  <h3 style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{f.title}</h3>
                  <p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.65 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subject Expertise */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Your Dissertation is written by your choice of Subject Matter Expertise</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "18px" }}>Specialized Subject Matter Expertise across the globe</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {["Arts & Humanities", "Biological Sciences", "Business & Management Studies", "Marketing & Communication", "Engineering & Technology", "Natural Sciences & Mathematics", "Economics & Administration", "Humanities & Social Science", "Law", "Medicine & Health", "Education & Training", "Journalism & Media", "Agriculture & Forestry", "Computer Science & IT", "Hospitality, Leisure & Sports"].map(s => (
              <span key={s} style={{ background: "#fff", border: "1px solid #c5d0ea", borderRadius: "20px", padding: "6px 14px", fontSize: "0.82rem", color: "#1a2a6c", fontWeight: 500 }}>{s}</span>
            ))}
          </div>
        </div>

        {/* Order Process */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Order Process</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "14px" }} className="four-col-grid">
            {[
              { n: "1", t: "We identify Your writer" },
              { n: "2", t: "Reference Number" },
              { n: "3", t: "Acknowledgment" },
              { n: "4", t: "We check requirement" },
              { n: "5", t: "Edit & proofreading" },
              { n: "6", t: "Plagiarism Assurance" },
              { n: "7", t: "Free Appendices / Resources" },
              { n: "8", t: "Download your Order" },
              { n: "9", t: "Request for amendment" },
              { n: "10", t: "Researcher makes the changes" },
              { n: "11", t: "Unlimited revisions" },
              { n: "12", t: "Final Delivery" },
            ].map(s => (
              <div key={s.n} style={{ background: "#f8f9ff", borderRadius: "8px", padding: "14px", border: "1px solid #e0e4f0", textAlign: "center" }}>
                <div style={{ width: "32px", height: "32px", background: "#1a2a6c", borderRadius: "50%", color: "#fff", fontWeight: 700, fontSize: "0.85rem", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 8px" }}>{s.n}</div>
                <div style={{ fontSize: "0.8rem", color: "#444", fontWeight: 500 }}>{s.t}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", borderRadius: "12px", padding: "36px 28px", textAlign: "center", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", color: "#fff", marginBottom: "10px" }}>Ready to Start Your PhD / DBA Dissertation?</h2>
          <p style={{ color: "#c5d5f0", marginBottom: "20px", fontSize: "0.95rem" }}>A Trusted MBA Dissertation Writing Service at Tutors India — get expert help today</p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/order-now/" style={{ padding: "13px 32px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, textDecoration: "none" }}>Order Now</Link>
            <Link href="/contact-us/" style={{ padding: "13px 32px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, textDecoration: "none" }}>Contact Us</Link>
          </div>
        </div>

        {/* Testimonials */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>What Our Clients Say</h2>
          <TestimonialSlider testimonials={testimonials} />
        </div>

      </section>
      <style>{`
        @media(max-width:900px){.three-col-grid{grid-template-columns:1fr 1fr!important;}.four-col-grid{grid-template-columns:1fr 1fr!important;}}
        @media(max-width:600px){.three-col-grid,.two-col-grid,.four-col-grid{grid-template-columns:1fr!important;}}
      `}</style>
    </>
  );
}
