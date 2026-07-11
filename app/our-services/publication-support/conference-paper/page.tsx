import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "Conference & Seminar Paper Development Support Services | Tutors India",
  description: "Complete assistance for publishing conference and seminar papers by qualified UK researchers. Assured journal acceptance, plagiarism-free, on-time delivery. Tutors India.",
};

const faqs = [
  {
    q: "Who will help me for conference paper writing?",
    a: "Writing a conference paper needs a unique skills compare to other general writing. Even though the conference present through verbally but it is important to present the written document at the time of conference. Tutors India employs dedicated, experienced writers with requisite knowledge for exceptional conference and seminar papers.",
  },
  {
    q: "What is the time plan to complete my conference paper?",
    a: "Work initiates within two business days following order receipt. Completion occurs within timeframes specified by pricing plan requirements.",
  },
  {
    q: "How can I assure that my work protected?",
    a: "Tutors India is a trusted mentor since 2011 across the globe. In addition, we are reputed so we never use and share any materials without your permission. Materials remain confidential and protected throughout the engagement.",
  },
  {
    q: "Is My conference paper meets professionalism and high standard?",
    a: "Papers maintain extremely high academic standards with complete professionalism. Development ensures papers reflect study ideas within broader research contexts.",
  },
  {
    q: "How quickly can I Get my conference paper?",
    a: "After concept/topic receipt, collaboration establishes fixed deadlines. Urgent requests receive expedited service through support team coordination.",
  },
  {
    q: "Can I get some of samples of case report writing?",
    a: "Yes, sample case report works demonstrate service quality standards. Samples enable analysis of work caliber before ordering.",
  },
];

const testimonials = [
  { quote: "Best experience you can imagine. Contacted Tutors India for conference paper writing and got my paper accepted. The team understood the journal guidelines and helped me present my research effectively.", author: "Bhavin", avatar: "/images/testimonials/t22.jpg" },
  { quote: "I'm grateful to the team who guided me all the way through for completing my seminar paper. It was excellent — they provided me with high quality academic content and my paper was submitted on time.", author: "Divyansh", avatar: "/images/testimonials/t20.jpg" },
  { quote: "What impressed me most was how personalised the support felt. They didn't just write the paper — they understood my research and helped me present findings that the conference committee accepted.", author: "Khalid Al Nuaimi", avatar: "/images/testimonials/t17.jpg" },
  { quote: "Honestly, I didn't expect this level of quality. The team understood exactly what I needed and delivered work that felt genuinely professional. My confidence went from stressed to unstoppable.", author: "Amelia Brooks", location: "UK", avatar: "/images/testimonials/t15.jpg" },
  { quote: "I was stuck, frustrated, and running out of time. Tutors India stepped in at the perfect moment and turned everything around faster than I imagined. Worth every bit.", author: "Oliver Bennett", location: "UK", avatar: "/images/testimonials/t13.jpg" },
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies",
  "Marketing & Communication", "Engineering & Technology", "Natural Sciences & Mathematics",
  "Biological & Life science", "Economics & Administration", "Law",
  "Medicine & Health", "Education & Training", "Journalism & Media",
  "Agriculture & Forestry", "Computer Science & IT", "Hospitality, Leisure & Sports",
];

const orderProcess = [
  { title: "We Identify Your Writer", desc: "In order to get our service, you need to first fill out the form with your information in a comprehensive manner." },
  { title: "Reference Number", desc: "Upon receiving your Enquiry form, we assign you a reference number. You can know the status of your paper anytime by sending us an email or tracking through CRM." },
  { title: "Acknowledgment", desc: "Once you have paid for your order you will receive an acknowledgement from us. The writing process here with us begins within couple of days after receiving your order." },
  { title: "Edit & Proofreading", desc: "Once we receive an order from our writer, we ensure to proofread the document." },
  { title: "We Check Requirement", desc: "Once your conference paper is completed we check for spelling, grammar, content, focus, sources quality against the client requirement." },
  { title: "Plagiarism Assurance", desc: "Once your conference paper is completed it is checked for plagiarism with anti-plagiarism software before the delivery." },
  { title: "Free Appendices / Resources", desc: "We ensure not only to deliver your work but also additional reference materials will be shared via zip file through google drive or drop box." },
  { title: "Download Your Order", desc: "You can download your order through our CRM and reminder will be sent through email & SMS. Additional copy will be mailed." },
  { title: "Request for Amendment", desc: "If you required any changes, you can always come back to us, we are ready to unlimited revisions for the concept being committed." },
  { title: "Researcher Makes the Changes", desc: "The document will be shared to our writer and once the work is completed, we will share you the complete work through email or you can download the order." },
];

const guarantees = [
  {
    t: "A complete secure & Confidential Service",
    d: "All your projects are given unique reference codes protecting privacy. Documents access is restricted to NDA-signed writers. 128-bit SSL encryption secures your financial information.",
  },
  {
    t: "Fully Referenced",
    d: "Our conference paper work is fully referenced with latest articles and textbooks. We refer only peer reviewed sources such as scholarly articles and textbooks from top academic databases.",
  },
  {
    t: "Our Guarantees",
    d: "(1) Unlimited Revision for the work being committed. (2) We ensure on-time delivery (3) We support 24/7. (4) Our word count committed does not include references and bibliography & help you to locate the sources cited (5) Ensure three-level quality check including Technical QC, Editor QC and final check against the requirement (6) Confidentiality of the information (7) Plagiarism free work – less than 5% percent. (8) Only experienced and subject specific writers will be allotted.",
  },
  {
    t: "Plagiarism Free Work",
    d: "We are aware of the consequences of plagiarism. Topic selection is completely plagiarism free. Work is scanned against online sources in a similar way like WriteCheck or Turnitin. Plagiarism-free certificates issued.",
  },
  {
    t: "On Time",
    d: "Our work is delivered at a specified date and time. Specific changes to the delivered work will be carried out within 45 days of delivery. Minor changes within 24 working hours and significant changes within 48 working hours. We acknowledge all emails within 30 minutes of working hours.",
  },
  {
    t: "Experienced Writers",
    d: "Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities from India, the US, and the UK. Perfect SME identified through stringent selection including non-disclosure agreements.",
  },
];

export default function ConferencePaperPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Our Services</Link>{" / "}
            <Link href="/our-services/publication-support/" style={{ color: "#a0b8e0" }}>Publication Support</Link>{" / "}
            <span style={{ color: "#fff" }}>Conference Paper</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.6rem,3vw,2.4rem)", marginBottom: "18px", lineHeight: 1.3 }}>
            Conference &amp; Seminar Paper Development Support Services
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "1.05rem", maxWidth: "820px", lineHeight: 1.8, marginBottom: "16px" }}>
            We offer complete assistance for publishing conference papers. Tutors India&apos;s team provides exceptional professional support for this specialised publication type.
          </p>
          <p style={{ color: "#f9c74f", fontSize: "1.1rem", fontFamily: "Merriweather,serif", fontWeight: 700, marginBottom: "28px" }}>
            Your Conference &amp; Seminar Paper is developed by qualified and experienced researchers from the UK
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
            Tutors India Difference in conference &amp; seminar paper
          </h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "10px" }}>
            Like manuscript for medical journal publication, conference &amp; seminar paper requires another kind of approach to orient the audience through its imperative write-up.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, margin: 0 }}>
            Conference papers combine written documents with oral presentations. They represent an efficient process for creating new ideas and obtaining feedback from scholar communities, while enhancing your professional status.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "20px", marginBottom: "32px" }}>
          <div style={{ background: "#fff", borderRadius: "10px", padding: "24px 28px", boxShadow: "0 2px 12px rgba(26,42,108,0.08)", borderTop: "4px solid #1a2a6c" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>
              Tutors India ensures to prepare effective seminar &amp; conference Paper
            </h3>
            <p style={{ color: "#555", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
              As academic student, seminar presentation is one of the requirements where the performance in it and the effectiveness of the presentation matters. Key focus areas include manuscript importance, ethical research issues, adequately supported statements, appropriate conclusions with data evidence, reader-friendly content, avoiding excessive jargon, journal-style formatting, and content consistency.
            </p>
          </div>
          <div style={{ background: "#fff", borderRadius: "10px", padding: "24px 28px", boxShadow: "0 2px 12px rgba(26,42,108,0.08)", borderTop: "4px solid #e87722" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>
              Our service assures your paper acceptance
            </h3>
            <p style={{ color: "#555", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
              Our conference and seminar paper writing services assures that the paper is accepted in a specific journal. The STM writers possess extensive conference and seminar paper experience, including subject-specific writers, statisticians, research methodology specialists, and editors from top-ranked universities.
            </p>
          </div>
        </div>

        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "28px 32px" }}>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", color: "#1a2a6c", marginBottom: "14px" }}>
            Conference &amp; Seminar Paper Writing is Simply easy &amp; Straightforward
          </h3>
          <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "14px" }}>
            The service ensures complete confidentiality of client information. Simply send us your topic, supporting materials, references, feedback comments, and submission deadlines for streamlined delivery.
          </p>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>
            What Services do we offer under Conference &amp; Seminar Paper Development?
          </h3>
          <p style={{ color: "#444", lineHeight: 1.8, margin: 0 }}>
            We write complete conference and seminar papers from introduction through recommendations, addressing each tedious step thoroughly including topic identification, literature review, problem statements, and data analysis.
          </p>
        </div>
      </section>

      {/* Service Tiers */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "8px", textAlign: "center" }}>
            Conference &amp; Seminar Paper Development Services Features
          </h2>
          <p style={{ color: "#555", textAlign: "center", marginBottom: "32px", lineHeight: 1.7 }}>
            Three service tiers to match your conference paper development needs — from descriptive foundations to excellent critical analysis.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: "20px", marginBottom: "32px" }}>
            {[
              { tier: "Basic", color: "#1a2a6c", desc: "Developed based on the relevant sources, a reasonable attempt at finding an area that warrant research & evidence of an attempt to provide critical evaluation but mainly descriptive.", includes: "3 topics, 1000 words — Objectives, Literature Review, Research Gap, References." },
              { tier: "Advanced", color: "#e87722", desc: "Wide range of sources, a clear identification of research gap in the literature along with aim and research questions.", includes: "1 topic, 1000 words — comprehensive methodology and data analysis guidelines." },
              { tier: "Premium", color: "#2563b0", desc: "Refers to a wide range of seminal research with throughout engagement using latest resources. A solid gap would be identified based on the current literature & justified thoroughly & Excellent critical analysis would be shown (upgradable).", includes: "1 topic — extensive research with excellent critical analysis depth." },
            ].map(t => (
              <div key={t.tier} style={{ background: "#fff", borderRadius: "10px", padding: "24px", boxShadow: "0 2px 8px rgba(26,42,108,0.07)", borderTop: `4px solid ${t.color}` }}>
                <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "8px" }}>{t.tier}</h3>
                <p style={{ color: "#555", fontSize: "0.88rem", lineHeight: 1.7, marginBottom: "10px" }}>{t.desc}</p>
                <p style={{ color: "#888", fontSize: "0.82rem", lineHeight: 1.6, margin: 0, borderTop: "1px solid #eee", paddingTop: "10px" }}>{t.includes}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "#fff", borderRadius: "10px", padding: "24px 28px", borderLeft: "4px solid #1a2a6c" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "12px" }}>
              Paper types and structure elements we handle
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "12px" }}>
              {[
                { t: "Original Scientific Articles", d: "Translational Research — full papers with complete methodology, results, and discussion." },
                { t: "Review Articles", d: "Extensive literature review with general statements and conclusions drawn from the field." },
                { t: "Editorial / Invited Articles", d: "Thought-leadership pieces and invited contributions to academic conferences." },
                { t: "Case Reports", d: "Unique patient or business scenarios presented in structured academic format." },
              ].map(m => (
                <div key={m.t} style={{ background: "#f5f7ff", borderRadius: "8px", padding: "14px 16px" }}>
                  <div style={{ fontWeight: 700, color: "#1a2a6c", fontSize: "0.88rem", marginBottom: "4px" }}>{m.t}</div>
                  <div style={{ color: "#666", fontSize: "0.82rem", lineHeight: 1.5 }}>{m.d}</div>
                </div>
              ))}
            </div>
            <p style={{ color: "#555", fontSize: "0.88rem", lineHeight: 1.7, marginTop: "14px", margin: "14px 0 0 0" }}>
              Standard structure includes: Abstract, Word limit, Cover letter, Title page, Clinical significance, Conflict of interest, Focus, Photos/illustration, Line Art/Figures, Tables/Figures.
            </p>
          </div>
        </div>
      </section>

      {/* Draft Delivery + Free Offers */}
      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: "28px", marginBottom: "40px" }}>
          <div style={{ background: "#f0f4ff", borderRadius: "10px", padding: "28px", borderLeft: "4px solid #1a2a6c" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", color: "#1a2a6c", marginBottom: "12px" }}>
              We have draft Delivery Process and Deadline for your Conference &amp; Seminar Paper
            </h3>
            <p style={{ color: "#555", lineHeight: 1.8 }}>
              This is to ensure that clients have full control over the delivery and can look at the drafts of different sections. Unlike other companies, we do not charge any costs for such structure as we ensure client satisfaction at every stage of the work.
            </p>
          </div>
          <div style={{ background: "#f0f4ff", borderRadius: "10px", padding: "28px", borderLeft: "4px solid #e87722" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", color: "#1a2a6c", marginBottom: "12px" }}>
              Our custom Conference &amp; Seminar Paper is exclusive
            </h3>
            <p style={{ color: "#555", lineHeight: 1.8 }}>
              We provide clear explanation and justification for every choice made throughout the project. Quality assurance, plagiarism checking, and customer interaction occur throughout the entire development process.
            </p>
          </div>
        </div>

        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.35rem", color: "#1a2a6c", marginBottom: "20px" }}>
          Free Offers along with your Conference &amp; Seminar Paper Writing Help UK
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "16px", marginBottom: "40px" }}>
          {[
            { n: "1", t: "Abstract or Executive Summary", d: "A concise abstract or executive summary included free with every conference paper delivery." },
            { n: "2", t: "Graphs & Tables (redrawn)", d: "All graphs and tables redrawn to meet conference or journal-specific formatting requirements." },
            { n: "3", t: "Statistical or Textual Data Analysis", d: "Statistical or textual data analysis included with your conference paper at no additional cost." },
            { n: "4", t: "SPSS / Software Screenshots", d: "SPSS output and software screenshots documenting analyses, provided free of cost." },
            { n: "5", t: "Free Tutoring", d: "Free tutoring sessions for discussing your work with program supervisors confidently." },
            { n: "6", t: "SPSS Output in Appendix", d: "SPSS output pasted in Appendix as part of the free deliverables with every order." },
          ].map(f => (
            <div key={f.n} style={{ background: "#f5f7ff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px", display: "flex", gap: "14px" }}>
              <div style={{ width: "34px", height: "34px", background: "#e87722", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "0.9rem", flexShrink: 0 }}>{f.n}</div>
              <div>
                <h3 style={{ fontSize: "0.9rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "4px" }}>{f.t}</h3>
                <p style={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.6, margin: 0 }}>{f.d}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.35rem", color: "#1a2a6c", marginBottom: "10px" }}>
          Conference &amp; Seminar Paper need to convince the editorial &amp; peer review committee
        </h2>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "14px" }}>
          Our complete revision spans introduction through recommendations. Steps include topic identification, literature review, problem statements, and data analysis. Every paper is written to meet the highest academic and professional standards.
        </p>
        <p style={{ color: "#444", lineHeight: 1.8 }}>
          Our deliverables include executive summary/abstract, free reference articles, SPSS data sheets and outputs, questionnaires or interview questions, and all supporting documentation for client transparency.
        </p>
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
            Your Conference &amp; Seminar Paper is developed by your choice of Subject Matter Expertise. We cover Arts, Literature, Sciences, Engineering, and Medicine comprehensively.
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
          Why Choose Tutors India: Ph.D. Conference &amp; Seminar Paper Service features
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
            After the order is confirmed, we allocate the special team to scrutinize the work regarding necessary availability requirements. In case there are any queries, we ensure to ask during the initial stage of your work and send you the outline proposed with chapterization plan. Once the outline is approved, we will dispatch the work and update you on the progress. Our exclusive coordinators would get in touch with you to clarify any queries. Payment can be made in installments; work begins upon payment receipt.
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
          Get expert Conference &amp; Seminar Paper support from qualified UK researchers. Confidential, plagiarism-free, and delivered on time.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 36px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, textDecoration: "none" }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 36px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, textDecoration: "none" }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
