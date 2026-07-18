import Link from "next/link";
import type { Metadata } from "next";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "Research, Medical, and Scientific Publication Support Services",
  description: "Research paper publication help. Our experts provide extensive support to write a manuscript journal selection, editing, formatting, & peer review.",
  keywords: "publication help, publication services, paper publication services, journal publication assistance, article publication services, publication support services, best phd manuscript publication support services uk, best phd manuscript publication support services uae, research paper publishing services, academic journal publication services, medical publication support services, scientific journal publication services, research paper publication services in uae, paper publishing help,",
  alternates: { canonical: "https://www.tutorsindia.com/our-services/publication-support" },
};

const testimonials = [
  { quote: "Best experience you can imagine. Contacted Tutors India for manuscript support and got my paper published successfully. The team understood the journal guidelines perfectly.", author: "Bhavin", avatar: "/images/testimonials/t22.jpg" },
  { quote: "I'm grateful to the team who guided me all the way through for completing my journal paper. It was excellent — they provided me with high quality technical content and my paper was submitted on time.", author: "Divyansh", avatar: "/images/testimonials/t20.jpg" },
  { quote: "What impressed me most was how personalised the support felt. They didn't just edit the work — they understood my research and helped me present findings that the journal accepted.", author: "Khalid Al Nuaimi", avatar: "/images/testimonials/t17.jpg" },
  { quote: "Honestly, I didn't expect this level of quality. The team understood exactly what I needed and delivered work that felt genuinely professional. My confidence went from stressed to unstoppable.", author: "Amelia Brooks", location: "UK", avatar: "/images/testimonials/t15.jpg" },
  { quote: "I was stuck, frustrated, and running out of time. Tutors India stepped in at the perfect moment and turned everything around faster than I imagined. Worth every bit.", author: "Oliver Bennett", location: "UK", avatar: "/images/testimonials/t13.jpg" },
];

const services = [
  { slug: "manuscript-development", title: "Manuscript Development", desc: "Rewrite your manuscript based on the reviewer's comments with convincing rationale for decisions." },
  { slug: "conference-paper", title: "Conference Paper", desc: "Addresses seminar presentation requirements where performance and effectiveness of presentation matters." },
  { slug: "text-book-writing", title: "Text Book Writing", desc: "Addresses the enormous demand for the ideal textbook to recommend for students." },
  { slug: "manuscript-qualitative-textual-analysis", title: "Manuscript Statistics", desc: "Requires patience and precise data for medical, engineering, or management fields." },
  { slug: "conference-abstract", title: "Conference Abstract", desc: "Provides a brief description of your concept for academic conferences establishing topic uniqueness." },
  { slug: "medical-writing", title: "Medical Writing", desc: "Assists when students find scientific medical manuscript challenging to write and submit." },
  { slug: "biostatistics-services", title: "Biostatistics Services", desc: "Concentrates on statistical techniques to address problems in health-related fields." },
  { slug: "computer-science-engineering-cse-and-it", title: "Computer Science Engineering", desc: "Draws foundation from a wide variety of disciplines including computer engineering." },
  { slug: "engineering-research", title: "Engineering Research", desc: "Helps refocus and prepare significant progress on engineering theses and research papers." },
  { slug: "statistical-services", title: "Statistical Services", desc: "Our team provides in-depth knowledge and domain expertise across a broad spectrum of industries." },
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies",
  "Marketing & Communication", "Engineering & Technology", "Natural Sciences & Mathematics",
  "Economics & Administration", "Humanities & Social Science", "Law",
  "Medicine & Health", "Education & Training", "Journalism & Media",
  "Agriculture & Forestry", "Computer Science & IT", "Hospitality, Leisure & Sports",
];

const guarantees = [
  { t: "Plagiarism Free Work", d: "Our work is completely plagiarism free by scanning against online sources in a similar way like WriteCheck or Turnitin. We issue a plagiarism-free certificate with every delivery." },
  { t: "Uniqueness", d: "We provide only custom master's dissertation writing services written by Subject Matter Experts. Every paper is original and tailored to your specific research requirements." },
  { t: "Fully Referenced", d: "We use latest peer-reviewed research articles complying 100% with all university-based referencing guidelines including Harvard, APA, Vancouver, Chicago and more." },
  { t: "100% Requirement Match", d: "Experts analyze the feasibility before working on the dissertation with checks on each chapter to ensure 100% match with your specific requirements." },
  { t: "On Time", d: "We guarantee delivery of minor changes within 24 working hours and significant changes within 48 working hours. We acknowledge all your emails within 30 minutes of working hours." },
  { t: "Word Count Committed", d: "We ensure exact word count as per your university regulations excluding appendices and references. Your committed word count is always delivered in full." },
  { t: "Quality Assurance", d: "We implement stringent quality check at every stage, verifying subject matter, language, formatting, referencing, and plagiarism before delivery." },
  { t: "Unlimited revisions", d: "We provide unlimited revisions as per the initial commitment that are completely free of cost. Your satisfaction is our commitment." },
  { t: "Affordable", d: "We offer world-class quality at affordable rates with constant pricing regardless of country or subject. Invest in your career with confidence." },
];

const orderProcess = [
  { title: "We Identify Your Writer", desc: "In order to get our service, you need to first fill out the form with your information in a comprehensive manner." },
  { title: "Reference Number", desc: "Upon receiving your Enquiry form, we assign you a reference number. You can know the status of your paper anytime by sending us an email or tracking through CRM." },
  { title: "Acknowledgment", desc: "Once you have paid for your order you will receive an acknowledgement from us. The writing process here with us begins within couple of days after receiving your order." },
  { title: "We Check Requirement", desc: "Once your manuscript is completed we check for spelling, grammar, content, focus, sources quality against the client requirement." },
  { title: "Edit & Proofreading", desc: "Once we receive an order from our writer, we ensure to comprehensively review and proofread the document." },
  { title: "We Identify Your Writer", desc: "We match qualified and passionate research-focused experts to your manuscript subject and journal requirements." },
  { title: "Plagiarism Assurance", desc: "Once your manuscript is completed it is checked for plagiarism with anti-plagiarism software before the delivery." },
  { title: "Free Appendices / Resources", desc: "We ensure not only to deliver your work but also additional reference materials will be shared via zip file through google drive or drop box." },
  { title: "Download Your Order", desc: "You can download your order through our CRM and reminder will be sent through email & SMS. Additional copy will be mailed." },
  { title: "Researcher Makes the Changes", desc: "The document will be shared to our writer and once the work is completed, we will share you the complete work through email or you can download the order." },
  { title: "Unlimited Revisions", desc: "We offer unlimited revision support for accepted concepts. Come back to us anytime within the revision period." },
  { title: "Request for Amendment", desc: "If you required any changes, you can always come back to us through email contact for ongoing revisions." },
];

export default function PublicationSupportPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Our Services</Link>{" / "}
            <span style={{ color: "#fff" }}>Publication Support</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.6rem,3vw,2.6rem)", marginBottom: "18px", lineHeight: 1.3 }}>
            Publication Support
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "1.05rem", maxWidth: "820px", lineHeight: 1.8, marginBottom: "16px" }}>
            Are you looking to edit, redraw, rewrite, format your manuscript according to the journal specific guidelines?
          </p>
          <p style={{ color: "#f9c74f", fontSize: "1.1rem", fontFamily: "Merriweather,serif", fontWeight: 700, marginBottom: "16px" }}>
            Then You have reached the right place
          </p>
          <p style={{ color: "#c5d5f0", fontSize: "1rem", maxWidth: "820px", lineHeight: 1.8, marginBottom: "28px" }}>
            We make difference in terms of deadline and quality. We assist with Technical Editing, proofreading, rewriting, addressing review comments, and formatting.
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <Link href="/order-now/" style={{ padding: "12px 32px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none" }}>Place an Order</Link>
            <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, fontSize: "0.95rem", textDecoration: "none" }}>Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Intro cards */}
      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        <div style={{ background: "#f0f4ff", borderRadius: "12px", padding: "32px 36px", marginBottom: "32px", borderLeft: "5px solid #1a2a6c" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.35rem", color: "#1a2a6c", marginBottom: "10px" }}>
            Why Tutors India for Publication support?
          </h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "10px" }}>
            The US &amp; UK writers at Tutors India aim at inculcating knowledge within students and build a great confidence to submit their publication successfully.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, margin: 0 }}>
            You will be Amazed with the in-depth research carried to complete your manuscript. A subject matter expertise from Tutors India would provide extensive support to write a manuscript. We just not provide Journal assistance but also end-to-end support.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "20px", marginBottom: "32px" }}>
          <div style={{ background: "#fff", borderRadius: "10px", padding: "24px 28px", boxShadow: "0 2px 12px rgba(26,42,108,0.08)", borderTop: "4px solid #1a2a6c" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>
              Journal Support at Tutors India helps to publish Your manuscript successfully
            </h3>
            <p style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.7, margin: 0 }}>
              A good manuscript writing and Journal article writing not only requires a high quality research but also should be able to present your findings and conclusion precisely with adherence to extensive journal guidelines.
            </p>
          </div>
          <div style={{ background: "#fff", borderRadius: "10px", padding: "24px 28px", boxShadow: "0 2px 12px rgba(26,42,108,0.08)", borderTop: "4px solid #e87722" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>
              A Trusted Journal Support Service
            </h3>
            <p style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.7, margin: 0 }}>
              We are available 24/7 with evidence that we deliver what exactly you expect. A subject matter expertise from Tutors India would provide extensive support to prevent lapses in logic and ensure perfect, error-free and standard language.
            </p>
          </div>
        </div>

        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "28px 32px" }}>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", color: "#1a2a6c", marginBottom: "14px" }}>
            A Journal Support Service features that helps to get the grade
          </h3>
          <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "14px" }}>
            We provide comprehensive support from selection of PhD level dissertation topic through literature review, statistical analysis using specialized software (SPSS, R, SAS, STATA), and final proofreading.
          </p>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>
            Our Journal Support Service feature
          </h3>
          <p style={{ color: "#444", lineHeight: 1.8, margin: 0 }}>
            We aim at building great confidence to submit their journal successfully. Our US &amp; UK writers carry in-depth research and subject matter expertise to deliver your manuscript to the highest standard.
          </p>
        </div>
      </section>

      {/* Journal Support Services grid */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "8px", textAlign: "center" }}>
            Our Journal Support Service features
          </h2>
          <p style={{ color: "#555", textAlign: "center", marginBottom: "32px", lineHeight: 1.7 }}>
            Ten specialised services from manuscript development through statistical analysis — end-to-end publication support.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: "20px" }}>
            {services.map((s, i) => (
              <Link key={s.slug} href={`/our-services/publication-support/${s.slug}/`} style={{ textDecoration: "none" }}>
                <div style={{ background: "#fff", borderRadius: "10px", padding: "24px", boxShadow: "0 2px 8px rgba(26,42,108,0.07)", borderTop: `4px solid ${i % 3 === 0 ? "#1a2a6c" : i % 3 === 1 ? "#e87722" : "#2563b0"}`, height: "100%", cursor: "pointer", transition: "box-shadow 0.2s" }}>
                  <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "8px" }}>{s.title}</h3>
                  <p style={{ color: "#555", fontSize: "0.94rem", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Methodologies + Questionnaire + Free Features */}
      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "8px" }}>
          What You Expect when you order Journal Writing Service
        </h2>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "32px" }}>
          We Share references sourced for your Journal Paper in the form of PDFs, questionnaire or interview guide*, formatting, referencing, and appendices at free of costs.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "24px", marginBottom: "40px" }}>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "24px", borderLeft: "4px solid #1a2a6c" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>
              Your Choice of quantitative or qualitative or Triangulation methodologies
            </h3>
            <p style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.7 }}>
              Choice of data collection depends on the research design (quantitative or qualitative design). We support Interviews, questionnaires, and secondary sources across all research designs.
            </p>
          </div>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "24px", borderLeft: "4px solid #e87722" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>
              Development of Questionnaire or Interview questions
            </h3>
            <p style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.7 }}>
              At Tutors India, we assist you in developing questionnaire – Open ended, closed ended, Objective questionnaire, structured and unstructured questionnaire, focus group guide, interview guide for all your research work.
            </p>
          </div>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "24px", borderLeft: "4px solid #2563b0" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>
              Get your Primary research Completed at an additional cost
            </h3>
            <p style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.7 }}>
              Tutors India has exclusive custom data collection services to gather useful information in various domains, including telephone interviews, market surveys, and focus group discussion sessions.
            </p>
          </div>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "24px", borderLeft: "4px solid #1a2a6c" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>
              Get some of our Service features at Free of Costs
            </h3>
            <p style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.7 }}>
              References sourced for your Journal Paper in the form of PDFs, questionnaires, interview guides, formatting, referencing, and appendices are provided at free of costs.
            </p>
          </div>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "24px", borderLeft: "4px solid #e87722" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>
              Appendices or additional work at Free of Costs
            </h3>
            <p style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.7 }}>
              We help you in a broad range of services from the selection of a dissertation topic to complete your PhD dissertation successfully. Free review and proofreading throughout the process.
            </p>
          </div>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "24px", borderLeft: "4px solid #2563b0" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>
              Development of Questionnaire or Interview at a Free of costs
            </h3>
            <p style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.7 }}>
              We develop questionnaire using scales, questions for interview guide, and focus group discussion at no additional cost with every journal paper order.
            </p>
          </div>
        </div>
      </section>

      {/* Subject Expertise */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", marginBottom: "8px" }}>
            Your Journal is written by your choice of Subject Matter Expertise
          </h2>
          <p style={{ color: "#c5d5f0", lineHeight: 1.8, marginBottom: "10px" }}>
            We have a team of 2000+ expertise across the subjects &amp; countries (including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine)
          </p>
          <p style={{ color: "#c5d5f0", lineHeight: 1.8, marginBottom: "28px" }}>
            Experienced Writers with a minimum degree of Master&apos;s with research experience. Our US &amp; UK writers aim at inculcating knowledge within students and build great confidence to submit their journal successfully.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "28px" }}>
            {subjects.map(s => (
              <span key={s} style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "6px 16px", borderRadius: "20px", fontSize: "0.85rem" }}>{s}</span>
            ))}
          </div>
          <Link href="/our-writers/" style={{ color: "#f9c74f", fontWeight: 600, fontSize: "0.95rem", textDecoration: "none" }}>Meet Our Writers →</Link>
        </div>
      </section>

      {/* Guarantee Cards */}
      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "8px" }}>
          Our Master&apos;s Dissertation Writing Service Features
        </h2>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "32px" }}>
          As well as your order, you will also get the following additional features as part of our publication support service.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "24px" }}>
          {guarantees.map(f => (
            <div key={f.t} style={{ background: "#f5f7ff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "24px" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>{f.t}</h3>
              <p style={{ color: "#555", fontSize: "0.94rem", lineHeight: 1.7, margin: 0 }}>{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Features */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "28px" }}>
            Our Additional Features
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "24px" }}>
            <div style={{ background: "#fff", borderRadius: "10px", padding: "24px", borderLeft: "4px solid #1a2a6c" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "8px" }}>Authenticated References</h3>
              <p style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.7, margin: 0 }}>
                Fully referenced and cited academically using style guides like Harvard and Chicago. All sources are peer-reviewed and authenticated.
              </p>
            </div>
            <div style={{ background: "#fff", borderRadius: "10px", padding: "24px", borderLeft: "4px solid #e87722" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "8px" }}>Plagiarism Free</h3>
              <p style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.7, margin: 0 }}>
                We guarantee less than 5 or 0 percent of plagiarism with comprehensive editing. Every manuscript is scanned before delivery.
              </p>
            </div>
            <div style={{ background: "#fff", borderRadius: "10px", padding: "24px", borderLeft: "4px solid #2563b0" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "8px" }}>Unlimited Revision Support with Quality Check &amp; Assurance</h3>
              <p style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.7, margin: 0 }}>
                We offer unlimited revisions absolutely free of cost with participatory research approach. Quality checks at every stage of the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Order Process */}
      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "8px" }}>
          Order Process
        </h2>
        <p style={{ color: "#555", marginBottom: "32px" }}>Have a look at what makes us the best in the business</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "20px" }}>
          {orderProcess.map((p, i) => (
            <div key={i} style={{ background: "#f5f7ff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px 24px" }}>
              <div style={{ width: "36px", height: "36px", background: "#e87722", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.95rem", marginBottom: "12px" }}>{i + 1}</div>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "0.95rem", color: "#1a2a6c", marginBottom: "6px" }}>{p.title}</h3>
              <p style={{ color: "#555", fontSize: "0.86rem", lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider testimonials={testimonials} />

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "56px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.6rem", marginBottom: "12px" }}>
          Invest in your Career
        </h2>
        <p style={{ color: "#c5d5f0", marginBottom: "28px", fontSize: "1rem" }}>
          Get expert Publication Support from qualified US &amp; UK researchers. Technical editing, proofreading, rewriting, addressing review comments, and formatting — all under one roof.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 36px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, textDecoration: "none" }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 36px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, textDecoration: "none" }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
