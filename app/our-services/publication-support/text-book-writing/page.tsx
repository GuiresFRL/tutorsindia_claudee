import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "Textbook Content Development & Writing Support Services | Tutors India",
  description: "Comprehensive assistance to complete textbook writing by qualified UK researchers. Complete textbook writing, new content development, refreshing existing materials. Tutors India.",
};

const faqs = [
  {
    q: "Do you provide textbook rewriting services?",
    a: "Yes, Tutors India provides complete textbook rewriting services. We can rewrite, refresh, and restructure existing textbooks to improve clarity, update content, and align with current curriculum requirements.",
  },
  {
    q: "Do you assist in publishing once the textbook is ready?",
    a: "Yes, we assist in the publishing process once the textbook is ready. Our team can help with formatting, layout, and preparing the manuscript to meet publisher submission requirements.",
  },
  {
    q: "Why choose Tutors India to Textbook writing?",
    a: "Tutors India has extensive years of experience in the process of managing textbook writing. Our subject matter expertise has an ability to explain material at a level students can understand and to provide a certain quality of illustrations. We offer qualified researchers, unlimited revision, only peer-reviewed articles, plagiarism report, 24/7 support, and 100% match with the requirement.",
  },
  {
    q: "Are your textbook writing service is 100% confidential?",
    a: "Yes, our Textbook writing service is 100% confidential. We offer complete confidentiality of client's personal details, payment details, project works, and copyrights of research works. All projects are given unique reference codes and documents are accessed only by NDA-signed writers.",
  },
  {
    q: "How Much Do Text book Services Cost?",
    a: "Our pricing depends on the scope, subject area, word count, and deadline. We offer competitive and affordable rates with world-class quality. Please fill out the enquiry form and our team will get back to you with a customised quote within 30 minutes.",
  },
  {
    q: "Will you write textbook writing for any subjects?",
    a: "Yes, we write textbooks for any subject. We have a team of 2000+ expertise across subjects and countries covering Arts & Humanities, Biological Sciences, Business & Management Studies, Engineering & Technology, Medicine & Health, Computer Science & IT, and many more.",
  },
];

const testimonials = [
  { quote: "Best experience you can imagine. Contacted Tutors India for textbook writing and got my content developed with quality. The team understood the curriculum requirements and helped me create content that attracts publishers.", author: "Bhavin", avatar: "/images/testimonials/t22.jpg" },
  { quote: "I'm grateful to the team who guided me all the way through for completing my textbook. It was excellent — they provided me with high quality academic content structured perfectly for student learning.", author: "Divyansh", avatar: "/images/testimonials/t20.jpg" },
  { quote: "What impressed me most was how personalised the support felt. They didn't just write content — they understood my subject and helped me present material at a level students can truly understand.", author: "Khalid Al Nuaimi", avatar: "/images/testimonials/t17.jpg" },
  { quote: "Honestly, I didn't expect this level of quality. The team understood exactly what I needed and delivered work that felt genuinely professional. My confidence went from stressed to unstoppable.", author: "Amelia Brooks", location: "UK", avatar: "/images/testimonials/t15.jpg" },
  { quote: "I was stuck, frustrated, and running out of time. Tutors India stepped in at the perfect moment and turned everything around faster than I imagined. Worth every bit.", author: "Oliver Bennett", location: "UK", avatar: "/images/testimonials/t13.jpg" },
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies",
  "Marketing & Communication", "Engineering & Technology", "Natural Sciences & Mathematics",
  "Biological & Life Science", "Economics & Administration", "Humanities & Social Science",
  "Law", "Medicine & Health", "Education & Training",
  "Journalism & Media", "Agriculture & Forestry", "Computer Science & IT",
  "Hospitality, Leisure & Sports",
];

const services = [
  { t: "Complete Textbook Writing", d: "End-to-end textbook writing from scratch aligned with curricula requirements." },
  { t: "Mapping New Course Content", d: "Mapping new course content according to curriculum and institutional requirements." },
  { t: "New Content to Replace a Textbook", d: "New content developed to replace an existing textbook at the lowest price." },
  { t: "New Course Content Development", d: "Fresh course content development for new programmes and modules." },
  { t: "Refreshing Existing Materials", d: "Updating and refreshing existing textbook materials with current research and examples." },
  { t: "Multimedia Materials", d: "Multimedia and e-learning content development to complement textbook chapters." },
];

const orderProcess = [
  { title: "We Identify Your Writer", desc: "In order to get our service, you need to first fill out the form with your information in a comprehensive manner." },
  { title: "Reference Number", desc: "Upon receiving your Enquiry form, we assign you a reference number. You can know the status of your paper anytime by sending us an email or tracking through CRM." },
  { title: "Acknowledgment", desc: "Once you have paid for your order you will receive an acknowledgement from us. The writing process here with us begins within couple of days after receiving your order." },
  { title: "Edit & Proofreading", desc: "Once we receive an order from our writer, we ensure to proofread the document." },
  { title: "We Check Requirement", desc: "Once your textbook is completed we check for spelling, grammar, content, focus, sources quality against the client requirement." },
  { title: "Plagiarism Assurance", desc: "Once your textbook is completed it is checked for plagiarism with anti-plagiarism software before the delivery." },
  { title: "Free Appendices / Resources", desc: "We ensure not only to deliver your work but also additional reference materials will be shared via zip file through google drive or drop box." },
  { title: "Download Your Order", desc: "You can download your order through our CRM and reminder will be sent through email & SMS. Additional copy will be mailed." },
  { title: "Request for Amendment", desc: "If you required any changes, you can always come back to us, we are ready to unlimited revisions for the concept being committed." },
  { title: "Researcher Makes the Changes", desc: "The document will be shared to our writer and once the work is completed, we will share you the complete work through email or you can download the order." },
];

const guarantees = [
  {
    t: "A complete secure & Confidential Service",
    d: "We offer 100% confidentiality of client's personal details, payment details, project works, and copyrights of research works. All projects are given unique reference codes; documents accessed only by NDA-signed writers; 128-bit SSL encryption protects your financial information.",
  },
  {
    t: "Fully Referenced",
    d: "Our textbook work is fully referenced with latest articles and textbooks. We refer only peer reviewed sources such as scholarly articles and textbooks from top academic databases.",
  },
  {
    t: "Our Guarantees",
    d: "(1) Unlimited Revision for the work being committed. (2) We ensure on-time delivery (3) We support 24/7. (4) Our word count committed does not include references and bibliography (5) Ensure three-level quality check including Technical QC, Editor QC and final check against the requirement (6) Confidentiality of the information (7) Plagiarism free work – less than 5% percent. (8) Only experienced and subject specific writers will be allotted.",
  },
  {
    t: "Plagiarism Free Work",
    d: "We are aware of the consequences of plagiarism. Topic selection is completely plagiarism free. Work is scanned against online sources in a similar way like WriteCheck or Turnitin. Plagiarism-free certificates issued.",
  },
  {
    t: "On Time",
    d: "Our work is delivered at a specified date and time. Our specific changes to the delivered work will be carried out within 45 days of delivery. Minor changes within 24 working hours and significant changes within 48 working hours. We acknowledge all emails within 30 minutes of working hours.",
  },
  {
    t: "Experienced Writers",
    d: "Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities from India, the US, and the UK.",
  },
];

export default function TextBookWritingPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Our Services</Link>{" / "}
            <Link href="/our-services/publication-support/" style={{ color: "#a0b8e0" }}>Publication Support</Link>{" / "}
            <span style={{ color: "#fff" }}>Text Book Writing</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.6rem,3vw,2.4rem)", marginBottom: "18px", lineHeight: 1.3 }}>
            Textbook Content Development &amp; Writing Support Services
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "1.05rem", maxWidth: "820px", lineHeight: 1.8, marginBottom: "16px" }}>
            Comprehensive assistance to complete textbook writing with satisfaction. Tutors India offers support aligned with curricula requirements.
          </p>
          <p style={{ color: "#f9c74f", fontSize: "1.1rem", fontFamily: "Merriweather,serif", fontWeight: 700, marginBottom: "28px" }}>
            Then You&apos;ve Certainly Reached the Right place
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
            Your Textbook is developed by qualified and experienced researchers from the UK
          </h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "10px" }}>
            Our STM writers have experience in handling Textbook writing. Our team consists of a subject-specific writer with industry experience, statisticians, and research methodology expertise from top-ranked universities.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, margin: 0 }}>
            Tutors India has extensive years of experience in the process of managing textbook writing and hence we can assist you in producing quality textbooks with exceptional writing that stands apart. Our subject matter expertise has an ability to explain material at a level students can understand and to provide a certain quality of illustrations.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "20px", marginBottom: "32px" }}>
          <div style={{ background: "#fff", borderRadius: "10px", padding: "24px 28px", boxShadow: "0 2px 12px rgba(26,42,108,0.08)", borderTop: "4px solid #1a2a6c" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>
              Tutors India Difference in Textbook writing service
            </h3>
            <p style={{ color: "#555", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
              Writing a textbook is not an easy task. Tutors India assists in developing textbooks with perfection and implementing ideas in creating quality content. We Write textbook with innovative ideas that would attract publishers and ensures that the textbooks have a significant international audience.
            </p>
          </div>
          <div style={{ background: "#fff", borderRadius: "10px", padding: "24px 28px", boxShadow: "0 2px 12px rgba(26,42,108,0.08)", borderTop: "4px solid #e87722" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>
              We Write text book with innovative ideas that would attract publishers
            </h3>
            <p style={{ color: "#555", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
              Our expertise has capability to develop content, structure and organization, learning and teaching, language, textbook layout, pedagogical use of e-features. We ensure textbooks have a significant international audience.
            </p>
          </div>
        </div>

        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "28px 32px" }}>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", color: "#1a2a6c", marginBottom: "14px" }}>
            Textbook Writing is Simply easy &amp; Straightforward
          </h3>
          <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "14px" }}>
            Our Textbook writing help guarantees that your document is confidential. Simply send us your original topic, support materials, references, feedback, and deadline — and we take care of the rest.
          </p>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>
            Our deliverables while you order Textbook development &amp; writing service
          </h3>
          <p style={{ color: "#444", lineHeight: 1.8, margin: 0 }}>
            Textbook writing services from Tutors India research writing services is straightforward. You will get the reply within 30 minutes which would enable you to place your order quickly.
          </p>
        </div>
      </section>

      {/* Services offered */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "8px", textAlign: "center" }}>
            What Services do we offer under Textbook Development?
          </h2>
          <p style={{ color: "#555", textAlign: "center", marginBottom: "32px", lineHeight: 1.7 }}>
            Complete textbook writing, mapping new course content, new content development, refreshing existing materials, and multimedia e-learning content.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: "20px", marginBottom: "40px" }}>
            {services.map((s, i) => (
              <div key={s.t} style={{ background: "#fff", borderRadius: "10px", padding: "22px", boxShadow: "0 2px 8px rgba(26,42,108,0.07)", borderTop: `4px solid ${i % 3 === 0 ? "#1a2a6c" : i % 3 === 1 ? "#e87722" : "#2563b0"}` }}>
                <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "0.95rem", color: "#1a2a6c", marginBottom: "8px" }}>{s.t}</h3>
                <p style={{ color: "#555", fontSize: "0.88rem", lineHeight: 1.7, margin: 0 }}>{s.d}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.35rem", color: "#1a2a6c", marginBottom: "24px" }}>
            We offer three level of services
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: "20px" }}>
            {[
              { tier: "Basic", color: "#1a2a6c", desc: "Developed based on the relevant sources, a reasonable attempt at finding an area that warrant research & evidence of an attempt to provide critical evaluation but mainly descriptive.", includes: "3 Topics, 1000 words — Objectives, Literature Review, Research Gap, Expected Contribution, Research Methodology, Data Analysis Guidelines, References Lists, Bibliography." },
              { tier: "Advanced", color: "#e87722", desc: "Wide range of sources, a clear identification of research gap in the literature along with aim and research questions.", includes: "1 topic, 1000 words — comprehensive methodology and data analysis guidelines included." },
              { tier: "Premium", color: "#2563b0", desc: "Refers to a wide range of seminal research with throughout engagement using latest resources. A solid gap would be identified based on the current literature & justified thoroughly & Excellent critical analysis would be shown (upgradable).", includes: "1 topic — extensive research with excellent critical analysis depth." },
            ].map(t => (
              <div key={t.tier} style={{ background: "#fff", borderRadius: "10px", padding: "24px", boxShadow: "0 2px 8px rgba(26,42,108,0.07)", borderTop: `4px solid ${t.color}` }}>
                <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "8px" }}>{t.tier}</h3>
                <p style={{ color: "#555", fontSize: "0.88rem", lineHeight: 1.7, marginBottom: "10px" }}>{t.desc}</p>
                <p style={{ color: "#888", fontSize: "0.82rem", lineHeight: 1.6, margin: 0, borderTop: "1px solid #eee", paddingTop: "10px" }}>{t.includes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features + Draft Delivery */}
      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "8px" }}>
          Textbook Development Services Features
        </h2>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "28px" }}>
          Textbook need to convince the editorial &amp; peer review committee. We rework on your complete Textbook from the introduction to recommendations.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "20px", marginBottom: "40px" }}>
          {[
            { n: "1", t: "Write the book", d: "The dissertation Topics are selected based on the research gap and future recommendations proposed by previous researchers. Complete textbook writing from introduction through recommendations." },
            { n: "2", t: "Page layout with pictures, graphs and tables", d: "Professional page layout with pictures, graphs and tables designed to meet publisher and curriculum requirements. Aim and research objectives proposed based on detailed literature review." },
            { n: "3", t: "Textbook need to convince the editorial & peer review committee", d: "We rework on your complete Textbook from the introduction to recommendations through topic identification, literature review, problem statements, and data analysis." },
          ].map(f => (
            <div key={f.n} style={{ background: "#f5f7ff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px 24px", display: "flex", gap: "14px" }}>
              <div style={{ width: "36px", height: "36px", background: "#e87722", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "0.95rem", flexShrink: 0 }}>{f.n}</div>
              <div>
                <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "0.95rem", color: "#1a2a6c", marginBottom: "6px" }}>{f.t}</h3>
                <p style={{ color: "#555", fontSize: "0.86rem", lineHeight: 1.7, margin: 0 }}>{f.d}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: "28px" }}>
          <div style={{ background: "#f0f4ff", borderRadius: "10px", padding: "28px", borderLeft: "4px solid #1a2a6c" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", color: "#1a2a6c", marginBottom: "12px" }}>
              We have draft Delivery Process and Deadline for your textbook
            </h3>
            <p style={{ color: "#555", lineHeight: 1.8 }}>
              This is to ensure that clients have full control over the delivery and can look at the drafts of different sections. Unlike other companies, we do not charge any costs for such structure as we ensure client satisfaction at every stage of the work.
            </p>
          </div>
          <div style={{ background: "#f0f4ff", borderRadius: "10px", padding: "28px", borderLeft: "4px solid #e87722" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", color: "#1a2a6c", marginBottom: "12px" }}>
              Our custom Textbook is exclusive
            </h3>
            <p style={{ color: "#555", lineHeight: 1.8 }}>
              We do not just provide manuscript writing service, but rather clear explanation and justification for the choice of content and structure. Quality assurance, plagiarism checking, and customer interaction occur throughout the process.
            </p>
          </div>
        </div>
      </section>

      {/* Subject Expertise */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", marginBottom: "8px" }}>
            Specialized Subject Matter Expertise across the globe
          </h2>
          <p style={{ color: "#c5d5f0", lineHeight: 1.8, marginBottom: "10px" }}>
            We have a team of 2000+ expertise across the subjects &amp; countries (including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine)
          </p>
          <p style={{ color: "#c5d5f0", lineHeight: 1.8, marginBottom: "28px" }}>
            Your Textbook is written by your choice of Subject Matter Expertise. We offer complete textbook writing service for Management, Finance &amp; Economics, Social Science, Engineering, Technology, Life Science, Medicine, Arts &amp; Literature/Linguistics.
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
          Why Choose Tutors India: Textbook Writing Service features
        </h2>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "32px" }}>
          Qualified researchers, unlimited revision, only peer-reviewed articles, plagiarism report, 24/7 support, 100% match with the requirement and on time delivery.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "24px" }}>
          {guarantees.map(f => (
            <div key={f.t} style={{ background: "#f5f7ff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "24px" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>{f.t}</h3>
              <p style={{ color: "#555", fontSize: "0.88rem", lineHeight: 1.7, margin: 0 }}>{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Order Process */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "8px" }}>
            How Does it work?
          </h2>
          <p style={{ color: "#555", marginBottom: "8px" }}>Have a look at what makes us the best in the business</p>
          <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "32px" }}>
            After the order is confirmed, we allocate the special team to scrutinize the work regarding necessary availability requirements. Once the outline along with the chapterization plan is approved, we will dispatch the work in chapters and update you on the progress. Our exclusive coordinators would get in touch with you to clarify any queries. Payment can be made in installments; work begins upon payment receipt.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "20px" }}>
            {orderProcess.map((p, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: "10px", padding: "20px 24px" }}>
                <div style={{ width: "36px", height: "36px", background: "#e87722", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.95rem", marginBottom: "12px" }}>{i + 1}</div>
                <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "0.95rem", color: "#1a2a6c", marginBottom: "6px" }}>{p.title}</h3>
                <p style={{ color: "#555", fontSize: "0.86rem", lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ color: "#555", fontSize: "0.88rem", marginTop: "24px", lineHeight: 1.7 }}>
            Track Your Report through our customized CRM — You need not check your email frequently rather your report is safe on our customizable CRM and you can download at any point of time by using your unique username and password.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "28px" }}>
          Frequently Asked Questions
        </h2>
        <FaqAccordion faqs={faqs} />
      </section>

      {/* Testimonials */}
      <TestimonialSlider testimonials={testimonials} />

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "56px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.6rem", marginBottom: "12px" }}>
          Order Now
        </h2>
        <p style={{ color: "#c5d5f0", marginBottom: "28px", fontSize: "1rem" }}>
          Get expert Textbook Writing support from qualified UK researchers. Confidential, plagiarism-free, and delivered on time.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 36px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, textDecoration: "none" }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 36px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, textDecoration: "none" }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
