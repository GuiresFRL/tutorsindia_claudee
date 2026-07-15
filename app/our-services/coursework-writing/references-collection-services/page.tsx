import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "UK Dissertation References Collection Service | Tutors India",
  description: "Professional UK Dissertation References Collection Service by qualified researchers from the US & UK. EMBASE, Emerald, ProQuest, EBSCOhost and 15+ databases. Tutors India.",
};

const faqs = [
  {
    q: "On which are the areas you provide reference collections?",
    a: "At Tutors India, we provide reference collections in wide areas of research such as employee engagement dissertations, customer buying behaviour dissertation, project management dissertation, knowledge management dissertation, International marketing, performance management, strategic management and business policy, management of technology, international business, total quality management, public relation theories dissertation and many more. The service extends to MBA specializations (HR, HRM, Finance, Economics, Operations) plus disciplines like Nursing, medical, geographic, accounting, history, sociology, English, Music, advertising, fashion, tourism, architecture, computer science, and politics.",
  },
  {
    q: "What Information that I need to provide while ordering for Reference collection?",
    a: "You need to provide the topic, key research interest areas within scope, target country, industry experience details, and data collection feasibility information. We also recommend sharing any other information that our writer should know to match exactly with your requirement.",
  },
  {
    q: "How do you prepare the Reference collection?",
    a: "With our years of experience, we exclusively assist you in completing your dissertation by collecting the best and informative reference. The team directs scholars toward valid reference sources to support to write the best dissertation writing.",
  },
  {
    q: "How quickly can I Get my reference collection?",
    a: "After getting the Topic for reference collection task, we will talk with our writers to set the timeline then start working to complete on Time limit. The organization commits to delivering within the deadline.",
  },
  {
    q: "Can I get some of samples of your reference collection?",
    a: "Yes, we share some of the sample works of the reference collection so it is easy for students to analyze of our works.",
  },
  {
    q: "Who will collect my reference?",
    a: "We have a team of brilliant expertise who will collect reference on any topic or subjects. Our writers are highly qualified and trained in the academic writing field so know how to write your research collect the reference that matches your requirement.",
  },
];

const testimonials = [
  { quote: "Best experience you can imagine. Contacted Tutors India for references collection and got my work completed on time. The references were from high-quality peer-reviewed sources exactly matching my research topic.", author: "Bhavin", avatar: "/images/testimonials/t22.jpg" },
  { quote: "I'm grateful to the team who guided me all the way through for completing my dissertation references. It was excellent — they provided me with high quality peer-reviewed articles and my dissertation was submitted on time.", author: "Divyansh", avatar: "/images/testimonials/t20.jpg" },
  { quote: "What impressed me most was how personalised the support felt. They didn't just collect references — they understood my research question and found sources that genuinely supported my argument.", author: "Khalid Al Nuaimi", avatar: "/images/testimonials/t17.jpg" },
  { quote: "Honestly, I didn't expect this level of quality. The team understood exactly what I needed and delivered references that felt genuinely professional and relevant. My confidence went from stressed to unstoppable.", author: "Amelia Brooks", location: "UK", avatar: "/images/testimonials/t15.jpg" },
  { quote: "I was stuck, frustrated, and running out of time. Tutors India stepped in at the perfect moment and turned everything around faster than I imagined. Worth every bit.", author: "Oliver Bennett", location: "UK", avatar: "/images/testimonials/t13.jpg" },
];

const subjects = [
  "Management", "Finance & Economics", "Social Science", "Engineering",
  "Technology", "Life Science", "Medicine", "Arts & Literature/Linguistics",
  "Nursing", "Psychology", "Law", "Education", "Computer Science",
  "Architecture", "Tourism", "Accounting", "History", "Sociology",
];

const databases = [
  "EMBASE", "Emerald", "PROQUEST", "EBSCOhost", "Harrison's Online",
  "Alexander Street Press", "Web of Science", "MEDLINE", "PsycINFO",
  "PubMed", "Sage Journals Online", "Science Direct (Elsevier)",
  "IEEE Xplore", "ABI/INFORM", "ACM Digital Library",
  "Compendex", "Wiley Online", "Springer Link", "Web of Knowledge",
];

const tiers = [
  { tier: "A", label: "Less than 10 references", color: "#1a2a6c", desc: "20% textbooks, 60% peer-reviewed articles, 10% industry articles, 10% other sources." },
  { tier: "B", label: "10–20 references", color: "#2563b0", desc: "20% textbooks, 60% peer-reviewed articles, 10% industry articles, 10% other sources." },
  { tier: "C", label: ">20–50 references", color: "#e87722", desc: "20% textbooks, 60% peer-reviewed articles, 10% industry articles, 10% other sources." },
  { tier: "D", label: ">50–75 references", color: "#1a2a6c", desc: "20% textbooks, 60% peer-reviewed articles, 10% industry articles, 10% other sources." },
  { tier: "E", label: ">75–100 references", color: "#2563b0", desc: "20% textbooks, 60% peer-reviewed articles, 10% industry articles, 10% other sources." },
  { tier: "F", label: "50 references – Peer-reviewed only", color: "#e87722", desc: "Peer-reviewed articles exclusively — ideal for strict academic submission requirements." },
];

const orderProcess = [
  { title: "We Identify Your Writer", desc: "In order to get our service, you need to first fill out the form with your information in a comprehensive manner." },
  { title: "Reference Number", desc: "Upon receiving your Enquiry form, we assign you a reference number. You can know the status of your paper anytime by sending us an email or tracking through CRM." },
  { title: "Acknowledgment", desc: "Once you have paid for your order you will receive an acknowledgement from us. The writing process here with us begins within couple of days after receiving your order." },
  { title: "Edit & Proofreading", desc: "Once we receive the collected references from our writer, we ensure to proofread the document." },
  { title: "We Check Requirement", desc: "Once your reference collection is completed we check for accuracy, completeness, source quality against the client requirement." },
  { title: "Plagiarism Assurance", desc: "Once your reference collection is completed it is checked before the delivery to ensure all sources are properly cited and acknowledged." },
  { title: "Free Appendices / Resources", desc: "We ensure not only to deliver your work but also additional reference materials will be shared via zip file through google drive or drop box." },
  { title: "Download Your Order", desc: "You can download your order through our CRM and reminder will be sent through email & SMS. Additional copy will be mailed." },
  { title: "Request for Amendment", desc: "If you required any changes, you can always come back to us, we are ready to unlimited revisions for the concept being committed." },
  { title: "Researcher Makes the Changes", desc: "The document will be shared to our writer and once the work is completed, we will share you the complete work through email or you can download the order." },
];

const guarantees = [
  {
    t: "A complete secure & Confidential Service",
    d: "We ensure following for the conditionality, security & privacy: 1) All your projects are given unique reference codes 2) Documents are accessed only writers who signed NDA with Tutors India 3) Your financial information is protected by 128-bit secure socket layer (SSL) encryption.",
  },
  {
    t: "Fully Referenced",
    d: "Our dissertation work is fully referenced with latest articles and textbooks. We refer only peer reviewed sources such as scholarly articles and textbooks. We draw from Web of Science, ProQuest, and publications like Forbes.",
  },
  {
    t: "Our Guarantees",
    d: "(1) Unlimited Revision for the work being committed. (2) We ensure on-time delivery (3) We support 24/7. (4) Our word count committed does not include references and bibliography (5) Ensure three-level quality check (6) Confidentiality of the information (7) Plagiarism free work – less than 5% percent. (8) Only experienced and subject specific writers will be allotted.",
  },
  {
    t: "Plagiarism Free Work",
    d: "Our work is scanned against online sources in a similar way like WriteCheck or Turnitin. We are aware of the consequences of plagiarism. Hence, reference collection is completely plagiarism free, where we ensure to acknowledge the authors of all publication. We issue a plagiarism-free certificate.",
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

export default function ReferencesCollectionServicesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Our Services</Link>{" / "}
            <Link href="/our-services/coursework-writing/" style={{ color: "#a0b8e0" }}>Coursework Writing</Link>{" / "}
            <span style={{ color: "#fff" }}>References Collection Services</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.6rem,3vw,2.4rem)", marginBottom: "18px", lineHeight: 1.3 }}>
            UK Dissertation References Collection Service
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "1.05rem", maxWidth: "820px", lineHeight: 1.8, marginBottom: "16px" }}>
            Are you finding it difficult to obtain your reference collection for your dissertation? Are you looking to get assistance in getting your references collected from a professional outsourcing organization?
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
            Your Dissertation reference collection is undertaken by qualified and experienced researchers from the US &amp; UK
          </h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "10px" }}>
            Our writers possess research methodology experience, domain expertise, and degrees from international and top-ranked universities from India, the US, and the UK.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, margin: 0 }}>
            Tutors India has extensive experience in reference collection services. Our team can complete references for any topic within deadlines while following international standards.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "20px", marginBottom: "32px" }}>
          <div style={{ background: "#fff", borderRadius: "10px", padding: "24px 28px", boxShadow: "0 2px 12px rgba(26,42,108,0.08)", borderTop: "4px solid #1a2a6c" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>
              UK Dissertation reference collection Service – Central to the Research Process
            </h3>
            <p style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.7, margin: 0 }}>
              Research that builds on past research benefits from an already existing baseline for exploration. Literature review supports multiple research stages, from topic selection through methodology to results interpretation.
            </p>
          </div>
          <div style={{ background: "#fff", borderRadius: "10px", padding: "24px 28px", boxShadow: "0 2px 12px rgba(26,42,108,0.08)", borderTop: "4px solid #e87722" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>
              Tutors India Offers Complete UK dissertation Reference Collection Service
            </h3>
            <p style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.7, margin: 0 }}>
              Referencing is given major significance in your dissertation. We utilize books, journals, electronic databases, government/industry reports, and internet resources with proper citation practices.
            </p>
          </div>
        </div>

        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "28px 32px" }}>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", color: "#1a2a6c", marginBottom: "14px" }}>
            Our UK Dissertation reference collection Service - Materials that are highly relevant to the topic
          </h3>
          <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "14px" }}>
            Our specific UK Dissertation reference collection identifies relevant material that would suit directly to the research question, hypothesis and problem statement.
          </p>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>
            UK Dissertation reference collection Writing follows specific rubric scale
          </h3>
          <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "14px" }}>
            Our professional writers have completed approximately 8,000 reference collections successfully with clear communication and proper organization.
          </p>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>
            UK Dissertation reference collection Service is Simply easy &amp; Straightforward
          </h3>
          <p style={{ color: "#444", lineHeight: 1.8, margin: 0 }}>
            The process guarantees confidentiality and requires only submission of topic and deadline information. Just send us your topic along with the deadline and see the results.
          </p>
        </div>
      </section>

      {/* Service Tiers A-F */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "8px", textAlign: "center" }}>
            What Services do we offer under UK Dissertation reference collection Service?
          </h2>
          <p style={{ color: "#555", textAlign: "center", marginBottom: "32px", lineHeight: 1.7 }}>
            We offer tiered reference collection packages (A–F) varying in quantity and source types, from less than 10 to 100+ peer-reviewed articles.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: "20px", marginBottom: "32px" }}>
            {tiers.map(t => (
              <div key={t.tier} style={{ background: "#fff", borderRadius: "10px", padding: "24px", boxShadow: "0 2px 8px rgba(26,42,108,0.07)", borderTop: `4px solid ${t.color}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <span style={{ width: "32px", height: "32px", background: t.color, color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.96rem", flexShrink: 0 }}>{t.tier}</span>
                  <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "0.95rem", color: "#1a2a6c", margin: 0 }}>{t.label}</h3>
                </div>
                <p style={{ color: "#555", fontSize: "0.94rem", lineHeight: 1.7, margin: 0 }}>{t.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "#fff", borderRadius: "10px", padding: "24px 28px", borderLeft: "4px solid #1a2a6c" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "8px" }}>
              Also includes: Basic, Advanced &amp; Extended packages
            </h3>
            <p style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.7, margin: 0 }}>
              <strong>Basic:</strong> 3 Topics with 1000 words — includes Literature Review, Research Gap, Expected Contribution, Research Methodology, Data Analysis Guidelines, and References Lists.<br />
              <strong>Advanced:</strong> 1 Topic with 1000 words — includes Literature Review, Research Gap, Expected Contribution, Research Methodology, Data Analysis Guidelines, and Bibliography.<br />
              <strong>Extended:</strong> 1 Topic with 1000 words — full package with all components included.
            </p>
          </div>
        </div>
      </section>

      {/* Databases + Deliverables */}
      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "8px" }}>
          Reference Collection Services Features – Resource by Subject and Type
        </h2>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "24px" }}>
          We access multiple databases to ensure the most relevant and high-quality references for your dissertation:
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "40px" }}>
          {databases.map(d => (
            <span key={d} style={{ background: "#f0f4ff", border: "1px solid #c5d0e8", color: "#1a2a6c", padding: "6px 16px", borderRadius: "20px", fontSize: "0.85rem", fontWeight: 600 }}>{d}</span>
          ))}
        </div>

        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.35rem", color: "#1a2a6c", marginBottom: "10px" }}>
          What We deliver while your order for UK Dissertation reference collection writing
        </h2>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "14px" }}>
          Our custom UK Dissertation reference collection is exclusive. We do not just provide a list of references, but rather clear explanations and justification for each selection.
        </p>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "28px" }}>
          We deliver work that exceeds expectations by providing proper context, delimit the boundary condition, cite landmark studies, and stay focused on the research question. UK Dissertation reference collection Writing needs to convince the supervisor — completing reference collection involves multiple tedious steps despite appearing simple.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "16px" }}>
          {[
            { n: "1", t: "Our Years of Experience", d: "Tutors India has extensive experience in reference collection services and has completed approximately 8,000 reference collections successfully." },
            { n: "2", t: "Our deliverables", d: "Quick responses and streamlined ordering process with option for installment payments. We share PDFs of references sourced at free of costs." },
            { n: "3", t: "Quality Assurance", d: "Three-level quality checks on every reference list. We check accuracy, completeness, and source quality against client requirement." },
            { n: "4", t: "Plagiarism Report", d: "All reference collections are checked before delivery. A plagiarism-free certificate is included with every submission." },
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
            Your Dissertation reference collection is written by your choice of Subject Matter Expertise. Tutors India has capability and skills to handle subjects across management, finance, engineering, medicine, and other areas.
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
          Why Choose Tutors India: Dissertation reference collection features
        </h2>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "32px" }}>
          Qualified researchers, unlimited revision, only peer-reviewed articles, plagiarism report, 24/7 support, 100% match with the requirement and on time delivery.
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
          Invest in your career by availing our References Collection service from UK &amp; US qualified researchers. Confidential, plagiarism-free, and delivered on time.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 36px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, textDecoration: "none" }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 36px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, textDecoration: "none" }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
