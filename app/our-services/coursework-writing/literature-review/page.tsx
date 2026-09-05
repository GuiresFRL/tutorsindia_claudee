import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "Literature Review Writing Services by Experts",
  description: "TutorsIndia offers an excellent literature review writing services. Our skilled writers provide optimised output that meets your academic needs. ",
  keywords: "literature review writing service, literature review writing help, literature review help uk, literature review assignment help, literature review paper help, literature review writing service uk, literature review dissertation help, thesis literature review help, literature review writing for research paper, literature review writing for research proposal",
  alternates: { canonical: "https://www.tutorsindia.com/our-services/coursework-writing/literature-review/" },
};

const faqs = [
  {
    q: "What you supposed to DO in literature review writing?",
    a: "Identify the relevant and important research in your field, recognize the research by shaping and evaluating it and determine whether gaps exist that your study will attempt to address.",
  },
  {
    q: "Can I Get Help with Literature Review Writing Topics?",
    a: "The writing team can assist by distinguishing topics aligned with your guidelines, personal interests, and needs before proceeding with the process.",
  },
  {
    q: "How Do You Write a Literature Review?",
    a: "We provide systematic instruction and guidance at every step along the way, from ideas to formation, to editing, and beyond to address the question comprehensively.",
  },
  {
    q: "Can I Learn How to Write Literature Review in Dissertation Work?",
    a: "Our professional staff will break down each step of the literature writing process into manageable sections and offer an organised, guided method for completion.",
  },
  {
    q: "Do you offer literature review PhD assistance as well?",
    a: "Writers can work with you to meet any of your dissertation writing needs, be they small or on a much larger scale for PhD-level literature reviews.",
  },
  {
    q: "How About Some Samples of Your Work?",
    a: "Yes, samples of literature review work are available for viewing on our website. Please contact us and we will share relevant samples from your subject area.",
  },
];

const testimonials = [
  { quote: "Best experience you can imagine. Contacted Tutors India for literature review writing and got my chapter completed on time. The review was critical, well-sourced and exactly aligned with my research questions.", author: "Bhavin", avatar: "/images/testimonials/t22.jpg" },
  { quote: "I'm grateful to the team who guided me all the way through for completing my literature review. It was excellent — they provided me with high quality peer-reviewed content and my dissertation was submitted on time.", author: "Divyansh", avatar: "/images/testimonials/t20.jpg" },
  { quote: "What impressed me most was how personalised the support felt. They didn't just write the chapter — they understood my research gap and built a review that genuinely supported my argument.", author: "Khalid Al Nuaimi", avatar: "/images/testimonials/t17.jpg" },
  { quote: "Honestly, I didn't expect this level of quality. The team understood exactly what I needed and delivered work that felt genuinely professional. My confidence went from stressed to unstoppable.", author: "Amelia Brooks", location: "UK", avatar: "/images/testimonials/t15.jpg" },
  { quote: "I was stuck, frustrated, and running out of time. Tutors India stepped in at the perfect moment and turned everything around faster than I imagined. Worth every bit.", author: "Oliver Bennett", location: "UK", avatar: "/images/testimonials/t13.jpg" },
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies",
  "Marketing & Communication", "Engineering & Technology", "Natural Sciences & Mathematics",
  "Economics & Administration", "Humanities & Social Science", "Law",
  "Medicine & Health", "Education & Training", "Journalism & Media",
  "Agriculture & Forestry", "Computer Science & IT", "Hospitality, Leisure & Sports",
];

const features = [
  "Theoretical and conceptual concepts",
  "Identification of independent and dependent variables",
  "Measurement and operational definitions",
  "Sampling strategy",
  "Statistical technique",
  "Findings and conclusions of similar studies",
];

const orderProcess = [
  { title: "We Identify Your Writer", desc: "In order to get our service, you need to first fill out the form with your information in a comprehensive manner." },
  { title: "Reference Number", desc: "Upon receiving your Enquiry form, we assign you a reference number. You can know the status of your paper anytime by sending us an email or tracking through CRM." },
  { title: "Acknowledgment", desc: "Once you have paid for your order you will receive an acknowledgement from us. The writing process here with us begins within couple of days after receiving your order." },
  { title: "Edit & Proofreading", desc: "Once we receive an order from our writer, we ensure to proofread the document." },
  { title: "We Check Requirement", desc: "Once your literature review is completed we check for spelling, grammar, content, focus, sources quality against the client requirement." },
  { title: "Plagiarism Assurance", desc: "Once your literature review is completed it is checked for plagiarism with anti-plagiarism software before the delivery." },
  { title: "Free Appendices / Resources", desc: "We ensure not only to deliver your work but also additional reference materials will be shared via zip file through google drive or drop box." },
  { title: "Download Your Order", desc: "You can download your order through our CRM and reminder will be sent through email & SMS. Additional copy will be mailed." },
  { title: "Request for Amendment", desc: "If you required any changes, you can always come back to us, we are ready to unlimited revisions for the concept being committed." },
  { title: "Researcher Makes the Changes", desc: "The document will be shared to our writer and once the work is completed, we will share you the complete work through email or you can download the order." },
];

const guarantees = [
  {
    t: "A complete secure & Confidential Service",
    d: "All your projects are given unique reference codes; documents access restricted to NDA-signed writers. Your financial information is protected by 128-bit secure socket layer (SSL) encryption.",
  },
  {
    t: "Fully Referenced",
    d: "Our dissertation work is fully referenced with latest articles and textbooks. We refer only peer reviewed sources such as scholarly articles and textbooks. Database sources include Web of Science and ProQuest.",
  },
  {
    t: "Our Guarantees",
    d: "(1) Unlimited Revision for the work being committed. (2) We ensure on-time delivery (3) We support 24/7. (4) Our word count committed does not include references and bibliography (5) Ensure three-level quality check (6) Confidentiality of the information (7) Plagiarism free work – less than 5% percent. (8) Only experienced and subject specific writers will be allotted.",
  },
  {
    t: "Plagiarism Free Work",
    d: "Topics avoid plagiarism entirely; our work is scanned against online sources in a similar way like WriteCheck or Turnitin. We issue plagiarism-free certificates with every delivery.",
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

const productSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "Master's Literature Review Writing Services",
      image: "https://www.tutorsindia.com/wp-content/uploads/2025/02/New-Project.jpg",
      description: "Professional literature review writing services providing comprehensive literature search, critical analysis, research gap identification, theoretical and conceptual framework development, systematic review writing, academic referencing, and university-compliant literature review support for master's and postgraduate students.",
      url: "https://www.tutorsindia.com/our-services/coursework-writing/literature-review/",
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
        ratingValue: "4.7",
        ratingCount: "845",
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
    { "@type": "ListItem", position: 4, name: "Literature Review", item: "https://www.tutorsindia.com/our-services/coursework-writing/literature-review/" },
  ],
};

export default function LiteratureReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Our Services</Link>{" / "}
            <Link href="/our-services/coursework-writing/" style={{ color: "#a0b8e0" }}>Coursework Writing</Link>{" / "}
            <span style={{ color: "#fff" }}>Literature Review</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.6rem,3vw,2.4rem)", marginBottom: "18px", lineHeight: 1.3 }}>
            The UK Post-graduate &amp; Doctorate Literature Review Writing Help
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "1.05rem", maxWidth: "820px", lineHeight: 1.8, marginBottom: "16px" }}>
            Are you looking for an expert writer who can guide in writing the Literature Review in a systematic way? Our literature review searches identify critical issues and how arguments develop within research areas.
          </p>
          <p style={{ color: "#f9c74f", fontSize: "1.1rem", fontFamily: "Merriweather,serif", fontWeight: 700, marginBottom: "28px" }}>
            Then You&apos;ve Certainly Reached the Right place
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <Link href="/order-now/" style={{ padding: "12px 32px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none" }}>Get A Free Quote</Link>
            <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, fontSize: "0.95rem", textDecoration: "none" }}>Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Intro cards */}
      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        <div style={{ background: "#f0f4ff", borderRadius: "12px", padding: "32px 36px", marginBottom: "32px", borderLeft: "5px solid #1a2a6c" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.35rem", color: "#1a2a6c", marginBottom: "10px" }}>
            UK Dissertation Literature Review Writing Service – A Detailed Blueprint to carry out your Research
          </h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "10px" }}>
            Dissertation literature reviews contribute approximately 40% of dissertation weight. Researchers must collect exhaustive, up-to-date literature from various countries and ethnic groups, including empirical, historical, and philosophical sources.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "10px" }}>
            The review should be critical — comparing and contrasting authors&apos; views while highlighting limitations and identifying gaps that provide rationale for the study.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, margin: 0 }}>
            Your UK Dissertation Literature Review is written by qualified and experienced researchers from the US &amp; UK. Our writers possess domain expertise and degrees from internationally ranked universities.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "20px", marginBottom: "32px" }}>
          <div style={{ background: "#fff", borderRadius: "10px", padding: "24px 28px", boxShadow: "0 2px 12px rgba(26,42,108,0.08)", borderTop: "4px solid #1a2a6c" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>
              Tutors India UK ensures your Literature Review is accepted by Supervisor committee – Check how we assist?
            </h3>
            <p style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.7, margin: 0 }}>
              Before writing, Tutors India helps find suitable models and organise sources chronologically. We develop exhaustive literature reviews from academic sources including journals and textbooks, creating research frameworks with a minimum of 80 references. All referencing is kept current and sources are shared with scholars.
            </p>
          </div>
          <div style={{ background: "#fff", borderRadius: "10px", padding: "24px 28px", boxShadow: "0 2px 12px rgba(26,42,108,0.08)", borderTop: "4px solid #e87722" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>
              Our UK Dissertation Literature Review Writing demonstrates critical analysis
            </h3>
            <p style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.7, margin: 0 }}>
              Our specific UK Literature Review writing demonstrates the succinct writing, critical analysis, and information literacy. Services include theoretical/conceptual foundations, variable identification, and methodology examination.
            </p>
          </div>
        </div>

        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "28px 32px" }}>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", color: "#1a2a6c", marginBottom: "14px" }}>
            UK Dissertation Literature Review Writing follows specific university guidelines and rubric scale
          </h3>
          <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "14px" }}>
            With 10+ years of experience generating thousands of literature reviews globally, we adhere to institutional requirements and university-specific rubric scales.
          </p>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "10px" }}>
            UK Literature Review Writing Service is Simply easy &amp; Straightforward
          </h3>
          <p style={{ color: "#444", lineHeight: 1.8, margin: 0 }}>
            Just send us your topic along with the deadline and see the results that are far justified and mark the success of your literature review. The process guarantees confidentiality throughout.
          </p>
        </div>
      </section>

      {/* Service Tiers */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "8px", textAlign: "center" }}>
            What Services do we offer under UK Literature Review Writing Service?
          </h2>
          <p style={{ color: "#555", textAlign: "center", marginBottom: "32px", lineHeight: 1.7 }}>
            Three tiers exist to accommodate different needs — from descriptive foundations to excellent critical analysis with seminal research.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: "20px" }}>
            {[
              {
                tier: "Basic", color: "#1a2a6c",
                desc: "Developed based on the relevant sources, a reasonable attempt at finding an area that warrant research & evidence of an attempt to provide critical evaluation but mainly descriptive.",
                includes: "3 topics, 1,000 words — Literature Review, Research Gap, Expected Contribution, Research Methodology, Data Analysis Guidelines, Reference Lists.",
              },
              {
                tier: "Advanced", color: "#e87722",
                desc: "Wide range of sources, a clear identification of research gap in the literature along with aim and research questions.",
                includes: "1 topic, 1,000 words — Literature Review, Research Gap, Expected Contribution, Research Methodology, Data Analysis Guidelines, Bibliography, Reference Lists.",
              },
              {
                tier: "Premium", color: "#2563b0",
                desc: "Refers to a wide range of seminal research with throughout engagement using latest resources. A solid gap would be identified based on the current literature & justified thoroughly & Excellent critical analysis would be shown (upgradable).",
                includes: "1 topic — Objectives, Literature Review, Research Gap, Expected Contribution, Research Methodology, Data Analysis Guidelines, Bibliography.",
              },
            ].map(t => (
              <div key={t.tier} style={{ background: "#fff", borderRadius: "10px", padding: "24px", boxShadow: "0 2px 8px rgba(26,42,108,0.07)", borderTop: `4px solid ${t.color}` }}>
                <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "8px" }}>{t.tier}</h3>
                <p style={{ color: "#555", fontSize: "0.94rem", lineHeight: 1.7, marginBottom: "10px" }}>{t.desc}</p>
                <p style={{ color: "#888", fontSize: "0.82rem", lineHeight: 1.6, margin: 0, borderTop: "1px solid #eee", paddingTop: "10px" }}>{t.includes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features + Deliverables */}
      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", color: "#1a2a6c", marginBottom: "8px" }}>
          UK Dissertation Literature Review Writing Service Features
        </h2>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "24px" }}>
          UK Literature Review Writing needs to convince the supervisor. Literature reviews should incorporate retell, relate, and reflect elements convincing faculty members. Our service includes:
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "16px", marginBottom: "48px" }}>
          {features.map((f, i) => (
            <div key={f} style={{ background: "#f5f7ff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px", display: "flex", gap: "14px", alignItems: "flex-start" }}>
              <div style={{ width: "32px", height: "32px", background: "#e87722", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "0.85rem", flexShrink: 0 }}>{i + 1}</div>
              <span style={{ color: "#1a2a6c", fontWeight: 600, fontSize: "0.96rem", lineHeight: 1.5, paddingTop: "4px" }}>{f}</span>
            </div>
          ))}
        </div>

        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.35rem", color: "#1a2a6c", marginBottom: "10px" }}>
          What We deliver while your order for UK Literature Review writing
        </h2>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "14px" }}>
          Our custom UK Literature Review writing service is exclusive. We do not just provide a literature review, but rather clear explanations and justifications for choices made during development.
        </p>
        <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "28px" }}>
          Deliverables include proper context, delimit the boundary condition, appropriate usage of theories, and identified gaps in previous literature to establish research boundaries and theoretical foundations.
        </p>

        <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", color: "#1a2a6c", marginBottom: "16px" }}>
          Our deliverables while you order custom written master&apos;s dissertation writing service
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "20px" }}>
          {[
            { n: "1", t: "Your Literature Review", d: "Your completed literature review chapter with proper context, boundary conditions, appropriate theory usage, and clearly identified research gaps." },
            { n: "2", t: "Free Articles", d: "We share references sourced for your literature review in the form of PDFs at free of costs." },
            { n: "3", t: "Quality Assurance", d: "Three-level quality checks: Technical QC, Editor QC, and final requirement verification against client specifications." },
            { n: "4", t: "Plagiarism Report", d: "All literature reviews are scanned using anti-plagiarism software before delivery. Less than 5% plagiarism guaranteed with a plagiarism-free certificate." },
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
            Your UK Dissertation Literature Review is written by your choice of Subject Matter Expertise. We offer dissertation services across Management, Finance, Economics, Social Science, Engineering, Technology, Life Science, and Medicine.
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
          Why Choose Tutors India: Literature Review Writing features
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
          Get expert Literature Review writing assistance from qualified US &amp; UK researchers. Confidential, plagiarism-free, and delivered on time.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 36px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, textDecoration: "none" }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 36px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, textDecoration: "none" }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
