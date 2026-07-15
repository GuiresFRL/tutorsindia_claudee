import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "The UK Exam Notes Writing Help | Tutors India",
  description: "UK Exam Notes Writing Service by subject matter experts. Concise, well-structured revision notes for Masters, MBA and PhD examinations. Tutors India.",
};

const faqs = [
  {
    q: "How can Tutors India help with Exam Notes?",
    a: "We are equipped with a professional team with extensive experience on diverse subjects who can deliver your document with high academic standards.",
  },
  {
    q: "How a Tutors India exam note assignment does distinct?",
    a: "Our exam notes assignments have helped most of the scholars in UK and other countries. We ensure that the assignments are plagiarism free with rich informative content.",
  },
  {
    q: "Who will write my exam notes?",
    a: "We have a team of excellence expertise who will write exam notes on any topic or subjects so it is very helpful to prepare for examination without a doubt.",
  },
  {
    q: "Can you write my Exam notes based on the urgent delivery?",
    a: "Of Course, we can deliver your exam notes on the urgent basis because we value your time so you do not stress about getting the notes of the assignment.",
  },
  {
    q: "How can I trust Tutors india get approved my resit dissertation?",
    a: "Yes, Of course, you will afraid to submit resit dissertation again...This Time think Positive to achieve the 100% success rate With Tutors India experts.",
  },
  {
    q: "Why Tutors India is better in preparing exam notes compare to others?",
    a: "We are included more competitive advantage that we implement like Highly experience and skillful academic writers, on-time delivery, affordable prices, brainstorming sessions.",
  },
];

const testimonials = [
  { quote: "Best experience you can imagine. When my exam was nearing, I ran out of notes and was helpless. Contacted Tutors India for assistance and got my notes completed on time and simultaneously learnt many things. For an international student, getting work done without travelling makes the whole experience incredible.", author: "Bhavin", avatar: "/images/testimonials/t22.jpg" },
  { quote: "I'm grateful to the team who guided me all the way through for completing my assignment work. It was excellent — they provided me with high quality technical content and my assignment was submitted on time. The academic writing service was more than I expected.", author: "Divyansh", avatar: "/images/testimonials/t20.jpg" },
  { quote: "What impressed me most was how personalised the support felt. They didn't just complete the work — they understood my goals and helped me present them better.", author: "Khalid Al Nuaimi", avatar: "/images/testimonials/t17.jpg" },
  { quote: "Honestly, I didn't expect this level of quality. The team understood exactly what I needed and delivered work that felt genuinely professional. My confidence went from stressed to unstoppable.", author: "Amelia Brooks", location: "UK", avatar: "/images/testimonials/t15.jpg" },
  { quote: "I was stuck, frustrated, and running out of time. Tutors India stepped in at the perfect moment and turned everything around faster than I imagined. Worth every bit.", author: "Oliver Bennett", location: "UK", avatar: "/images/testimonials/t13.jpg" },
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies",
  "Marketing & Communication", "Engineering & Technology", "Natural Sciences & Mathematics",
  "Biological & Life science", "Economics & Administration", "Humanities & Social Science",
  "Law", "Medicine & Health", "Education & Training",
  "Journalism & Media", "Agriculture & Forestry", "Computer Science & IT",
  "Hospitality, Leisure & Sports",
];

const features = [
  { icon: "📄", title: "Plagiarism Free Work" },
  { icon: "✨", title: "Uniqueness" },
  { icon: "📚", title: "Fully Referenced" },
  { icon: "🎯", title: "100% Requirement Match" },
  { icon: "⏱", title: "On Time" },
  { icon: "📝", title: "Word Count Committed" },
  { icon: "✅", title: "Quality Assurance" },
  { icon: "🔄", title: "Unlimited Revisions" },
  { icon: "💰", title: "Affordable" },
  { icon: "👨‍🎓", title: "Experienced Writers with a minimum degree of Master's with research experience" },
];

const orderProcess = [
  { title: "We Identify Your Writer", desc: "In order to get our service, you need to first fill out the form with your information in a comprehensive manner." },
  { title: "Reference Number", desc: "Upon receiving your Enquiry form, we assign you a reference number. You can know the status of your paper anytime by sending us an email or tracking through CRM." },
  { title: "Acknowledgment", desc: "Once you have paid for your order you will receive an acknowledgement from us. The writing process here with us begins within couple of days after receiving your order." },
  { title: "Edit & Proofreading", desc: "Once we receive an order from our writer, we ensure to proofread the document." },
  { title: "We Check Requirement", desc: "Once your exam notes are completed we check for spelling, grammar, content, focus, sources quality against the client requirement." },
  { title: "Plagiarism Assurance", desc: "Once your exam notes are completed it is checked for plagiarism with anti-plagiarism software before the delivery." },
  { title: "Free Appendices / Resources", desc: "We ensure not only to deliver your work but also additional reference materials will be shared via zip file through google drive or drop box." },
  { title: "Download Your Order", desc: "You can download your order through our CRM and reminder will be sent through email & SMS. Additional copy will be mailed." },
  { title: "Request for Amendment", desc: "If you required any changes, you can always come back to us, we are ready to unlimited revisions for the concept being committed." },
  { title: "Researcher Makes the Changes", desc: "The document will be shared to our writer and once the work is completed, we will share you the complete work through email or you can download the order." },
];

const guarantees = [
  {
    t: "A complete secure & Confidential Service",
    d: "We offer 100% confidentiality of client's personal details, payment details, project works, and copyrights of research works.",
  },
  {
    t: "Fully Referenced",
    d: "Our dissertation work is fully referenced with latest articles and textbooks. We refer only peer reviewed sources such as scholarly articles and textbooks to write the research proposal.",
  },
  {
    t: "Our Guarantees",
    d: "(1) Unlimited Revision for the work being committed. (2) We ensure on-time delivery (3) We support 24/7. (4) Our word count committed does not include references and bibliography (5) Ensure three-level quality check (6) Confidentiality of the information (7) Plagiarism free work – less than 5% percent. (8) Only experienced and subject specific writers will be allotted.",
  },
  {
    t: "Plagiarism Free Work",
    d: "We are aware of the consequences of plagiarism. Hence, exam notes writing is completely plagiarism free, where we ensure to acknowledge the authors of all publication, and re-write in our own words.",
  },
  {
    t: "On Time",
    d: "Our work is delivered at a specified date and time. Our specific changes to the delivered work will be carried out within 45 days of delivery. We guarantee delivery of minor changes within 24 working hours and significant changes within 48 working hours. We acknowledge all your emails within 30 minutes of working hours.",
  },
  {
    t: "Experienced Writers",
    d: "Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities from India, the US, and the UK.",
  },
];

export default function ExamNotesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Our Services</Link>{" / "}
            <Link href="/our-services/coursework-writing/" style={{ color: "#a0b8e0" }}>Coursework Writing</Link>{" / "}
            <span style={{ color: "#fff" }}>Exam Notes</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.6rem,3vw,2.4rem)", marginBottom: "18px", lineHeight: 1.3 }}>
            The UK Exam Notes Writing Help
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "1.05rem", maxWidth: "820px", lineHeight: 1.8, marginBottom: "16px" }}>
            If you are looking to avail our services only to write part of your master&apos;s dissertation such as only introduction chapter, literature review, methodology or materials and methods, findings or only interpretation of your statistical analysis or conclusion or only discussion chapter?
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

      {/* Intro cards + trust paragraph */}
      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        <div style={{ background: "#f0f4ff", borderRadius: "12px", padding: "32px 36px", marginBottom: "32px", borderLeft: "5px solid #1a2a6c" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", color: "#1a2a6c", marginBottom: "8px" }}>
            UK Exam Notes Preparation Service – Central to the University degree
          </h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "4px" }}>
            Exam notes have a major say in crunch examination period.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, margin: 0 }}>
            Without them, years of study will go astray. Subject matter expert prepared exam notes ensure you can assure your grades.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "20px", marginBottom: "32px" }}>
          <div style={{ background: "#fff", borderRadius: "10px", padding: "24px 28px", boxShadow: "0 2px 12px rgba(26,42,108,0.08)", borderTop: "4px solid #1a2a6c" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>
              Your Exam Notes is written by qualified and experienced researchers from the US &amp; UK
            </h3>
            <p style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.7, margin: 0 }}>
              Our Exam Notes writers have experience in specific domain experience, aware of theories of learning and educational degrees from international and top-ranked universities from India, the US, and the UK.
            </p>
          </div>
          <div style={{ background: "#fff", borderRadius: "10px", padding: "24px 28px", boxShadow: "0 2px 12px rgba(26,42,108,0.08)", borderTop: "4px solid #e87722" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>
              Our UK Exam Notes Writing Service
            </h3>
            <p style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.7, margin: 0 }}>
              Our specific UK Exam Notes writing demonstrates the succinct writing, critical analysis, and information literacy.
            </p>
          </div>
        </div>

        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "28px 32px" }}>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", color: "#1a2a6c", marginBottom: "14px" }}>
            UK Exam Notes Writing follows specific Style
          </h3>
          <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "14px" }}>
            Our Exam Notes writing enable candidates to perform the best of their ability.
          </p>
          <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "14px" }}>
            Dissertation Chapter Writing is Simply easy &amp; Straightforward — Our UK Exam Notes writing help guarantees that your notes are confidential, and so you do not have to worry about it. Just send us your topic along with the deadline and see the results that are far justified and mark the success of your exam preparation.
          </p>
          <p style={{ color: "#444", lineHeight: 1.8, margin: 0 }}>
            Our Exam Notes Services are built around three important but basic elements including &apos;retell, relate &amp; reflect&apos; — ensuring that the content is well understood and can be clearly articulated in any examination scenario.
          </p>
        </div>
      </section>

      {/* Service Tiers */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "8px", textAlign: "center" }}>
            What Services do we offer under UK Exam Notes Writing Service?
          </h2>
          <p style={{ color: "#555", textAlign: "center", marginBottom: "32px", lineHeight: 1.7 }}>
            We write a complete Exam Notes from the introduction to recommendations. Although it looks simple, but in practical, it&apos;s a tedious task to complete each and every step.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: "20px" }}>
            {[
              { tier: "Basic", color: "#1a2a6c", desc: "3 topics, 1000 words — Developed based on the relevant sources, a reasonable attempt at finding an area that warrant research & evidence of an attempt to provide critical evaluation but mainly descriptive." },
              { tier: "Advanced", color: "#e87722", desc: "1 topic, 1000 words — Wide range of sources, a clear identification of research gap in the literature along with aim and research questions." },
              { tier: "Premium", color: "#2563b0", desc: "Refers to a wide range of seminal research with throughout engagement using latest resources. A solid gap would be identified based on the current literature & justified thoroughly & Excellent critical analysis would be shown (upgradable)." },
            ].map(t => (
              <div key={t.tier} style={{ background: "#fff", borderRadius: "10px", padding: "24px", boxShadow: "0 2px 8px rgba(26,42,108,0.07)", borderTop: `4px solid ${t.color}` }}>
                <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "8px" }}>{t.tier}</h3>
                <p style={{ color: "#555", fontSize: "0.94rem", lineHeight: 1.7, margin: 0 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "8px" }}>
          Why Choose Tutors India: Exam Notes Writing features
        </h2>
        <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", color: "#1a2a6c", marginBottom: "8px", fontWeight: 400 }}>
          An Exam Notes Writing Service features that helps to get the grade
        </h3>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "32px" }}>
          Qualified researchers, unlimited revision, only peer-reviewed articles, plagiarism report, 24/7 support, 100% match with the requirement and on time delivery.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "16px", marginBottom: "48px" }}>
          {features.map(f => (
            <div key={f.title} style={{ background: "#f5f7ff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px 20px", display: "flex", gap: "10px", alignItems: "flex-start" }}>
              <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>{f.icon}</span>
              <span style={{ color: "#1a2a6c", fontWeight: 600, fontSize: "0.94rem", lineHeight: 1.5 }}>{f.title}</span>
            </div>
          ))}
        </div>

        <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", color: "#1a2a6c", marginBottom: "10px" }}>
          Our Exam Notes Services
        </h3>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "20px" }}>
          UK Exam Notes Writing needs to convince the supervisor. We write a complete Exam Notes that would convince your faculty. Our exam notes writing service includes:
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "16px", marginBottom: "32px" }}>
          {[
            { n: "1", t: "Quality Assurance", d: "We have stringent quality checking process to ensure every exam note meets the highest academic standard." },
            { n: "2", t: "Plagiarism Report", d: "All exam notes are scanned using anti-plagiarism software before delivery. Less than 5% plagiarism is guaranteed." },
            { n: "3", t: "Customer Interaction", d: "Our exclusive coordinators would get in touch with you to clarify any queries throughout the process." },
          ].map(f => (
            <div key={f.n} style={{ background: "#f5f7ff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px", display: "flex", gap: "14px" }}>
              <div style={{ width: "34px", height: "34px", background: "#e87722", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "0.96rem", flexShrink: 0 }}>{f.n}</div>
              <div>
                <h3 style={{ fontSize: "0.96rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{f.t}</h3>
                <p style={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.65, margin: 0 }}>{f.d}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", color: "#1a2a6c", marginBottom: "10px" }}>
          What We deliver while your order for UK Exam Notes writing
        </h3>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "14px" }}>
          Our custom UK Exam Notes writing service is exclusive. We do not just provide notes, but rather clear explanation and justification for the content written.
        </p>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "28px" }}>
          Check the sample UK Exam Notes writing from our expert writers. Our deliverables include executive summary/abstract, free articles used for writing, SPSS data sheet and output, questionnaire or semi-structured interview questions and any other information that we have used such as reflective log or diary.
        </p>
      </section>

      {/* Free Offers + Deliverables */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", color: "#1a2a6c", marginBottom: "28px" }}>
            Our deliverables while you order custom Exam Notes Writing Service
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "24px" }}>
            <div style={{ background: "#fff", borderRadius: "10px", padding: "24px", borderLeft: "4px solid #e87722" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "8px" }}>
                Get Some of Our Service Features at Free of Costs
              </h3>
              <p style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.7 }}>
                We Share references sourced for your exam notes in the form of PDFs, questionnaire or interview guide and primary research output without data at free of costs.
              </p>
            </div>
            <div style={{ background: "#fff", borderRadius: "10px", padding: "24px", borderLeft: "4px solid #1a2a6c" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "8px" }}>
                Summarizing into Distilled Keywords &amp; Phrases
              </h3>
              <p style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.7 }}>
                Our team summarize notes into distilled keywords and phrases, create visual aids like charts and mind maps for key concepts, prepare revision notes and past exam paper summaries, targeting specific models, theories, and frameworks.
              </p>
            </div>
            <div style={{ background: "#fff", borderRadius: "10px", padding: "24px", borderLeft: "4px solid #2563b0" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "8px" }}>
                Our Exam Notes Writing Service is Exclusive
              </h3>
              <p style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.7 }}>
                We do not just provide notes, but rather clear explanation and justification for the content written. Our exam notes writing service is simply easy and straightforward. You will get the reply within 30 minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subject Expertise */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", marginBottom: "8px" }}>
            Your Exam Notes is written by your choice of Subject Matter Expertise
          </h2>
          <p style={{ color: "#c5d5f0", lineHeight: 1.8, marginBottom: "10px" }}>
            We have a team of 2000+ expertise across the subjects &amp; countries (including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine)
          </p>
          <p style={{ color: "#c5d5f0", lineHeight: 1.8, marginBottom: "28px" }}>
            Tutors India has capability and skills to handle subjects across the field. We chose qualified and experienced subject specific expertise while you order your Exam Notes. We have more than 2000+ expertise working across the world who can handle arts, literature, sciences, engineering or medicine.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "28px" }}>
            {subjects.map(s => (
              <span key={s} style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "6px 16px", borderRadius: "20px", fontSize: "0.85rem" }}>{s}</span>
            ))}
          </div>
          <Link href="/our-writers/" style={{ color: "#f9c74f", fontWeight: 600, fontSize: "0.95rem", textDecoration: "none" }}>Meet Our Writers →</Link>
        </div>
      </section>

      {/* Why Choose — Guarantee Cards */}
      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "8px" }}>
          Why Choose Tutors India: Exam Notes Writing Service features
        </h2>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "32px" }}>
          Qualified researchers, unlimited revision, only peer reviewed articles, plagiarism report, 24/7 support, 100% match with the requirement and on time delivery.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "24px" }}>
          {guarantees.map(f => (
            <div key={f.t} style={{ background: "#f5f7ff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "24px" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>{f.t}</h3>
              <p style={{ color: "#555", fontSize: "0.94rem", lineHeight: 1.7, margin: 0 }}>{f.d}</p>
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
            After the order is confirmed, we allocate the special team to scrutinize the work regarding necessary availability requirements that would be essential to complete the work. Once the process is done, in case there are any queries, we ensure to ask during the initial stage of your work and send you the outline proposed. Once the outline is approved, we will dispatch the work and update you on the progress. Our exclusive coordinators would get in touch with you to clarify any queries.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "20px" }}>
            {orderProcess.map((p, i) => (
              <div key={p.title} style={{ background: "#fff", borderRadius: "10px", padding: "20px 24px" }}>
                <div style={{ width: "36px", height: "36px", background: "#e87722", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.95rem", marginBottom: "12px" }}>{i + 1}</div>
                <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "0.95rem", color: "#1a2a6c", marginBottom: "6px" }}>{p.title}</h3>
                <p style={{ color: "#555", fontSize: "0.86rem", lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ color: "#555", fontSize: "0.94rem", marginTop: "24px", lineHeight: 1.7 }}>
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
          Get expert Exam Notes writing assistance from qualified US &amp; UK researchers. Confidential, plagiarism-free, and delivered on time.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 36px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, textDecoration: "none" }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 36px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, textDecoration: "none" }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
