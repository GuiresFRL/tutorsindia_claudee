import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "Business & Management Studies Academic Writing | MBA, Masters | Tutors India",
  description: "Expert Business & Management Studies academic writing — MBA, Masters, PhD dissertations, assignments, manuscripts. 400+ writers. HRM, Marketing, Finance, Strategy. Tutors India.",
};

const coverage = [
  "Accounting & Financial Management", "Marketing Management", "Human Resource Management",
  "International Business", "Leadership & Organisational Behaviour", "Entrepreneurship Management",
  "Strategic Management", "Operations Management", "Supply Chain Management",
  "Project Management", "Digital Marketing", "Public Management",
  "Hospitality Management", "Fashion Management", "Sports Management",
  "Retail Management", "Quality Management", "Business Law",
  "Quantitative Methods for Business", "Luxury Management",
  "Purchasing & Procurement Management", "Safety Management", "Event Management",
];

const theories = [
  "SWOT, PESTLE, Porter's Five Forces", "7-S Framework, Balance Scorecard",
  "BCG Matrix, Ansoff Matrix, GE/McKinsey Matrix", "Maslow, Herzberg, ERG Theory",
  "Path Goal, Theory X/Y/Z, Expectancy Theory", "Business Process Reengineering (BPR)",
  "Value Chain, VRIN (Barney)", "Stakeholder Theory", "TQM, CMM, EFQM",
  "Product Life Cycle, Industry Lifecycle", "7Ps Marketing Mix", "Game Theory",
];

const databases = [
  "Google Scholar", "Web of Science", "Business Source Complete",
  "JSTOR", "SSRN Electronic Library", "Emerald Management",
  "SAGE Premier", "ScienceDirect", "ABI/INFORM Complete",
  "LexisNexis Academic", "ProQuest Central", "Oxford Reference Online",
];

const qaBoxes = [
  { img: "/images/qa/Quality-Assurance.png", title: "Your Business Writing Sample", desc: "Get ideal and flawless Business writing samples from our Subject-Matter experts.", href: "/our-sample-works/" },
  { img: "/images/qa/Quality-Assurance.png", title: "Quality Assurance", desc: "We ensure to achieve high quality at every stage through QA & Enhancement activities.", href: "/guarantees/" },
  { img: "/images/qa/Plagiarism-Report.png", title: "Plagiarism Report", desc: "We deliver your document after correcting plagiarism using Turnitin or WriteCheck.", href: "/our-services/editing-services/plagiarism-report/" },
  { img: "/images/qa/Customer-Interaction.png", title: "Customer Interaction", desc: "We act in real-time and interact with customer at every stage in terms of modifications.", href: "/contact-us/" },
];

const faqs = [
  { q: "Why should I choose Tutors India for Business and Management Studies writing?", a: "Our native writers are astounding and experienced in different subject fields especially Business and Management Studies writing — ensuring they understand your project well and deliver on time. With over 400+ academic writers, we submit documents that meet the terminology of the academic area and have native linguistic command over Business and Management terms. We provide original, fresh and 100% plagiarism-free content, flawless research papers that meet recommended formatting rules, accurate information, and on-time delivery with no compromise on quality." },
  { q: "What kind of services do you offer?", a: "We offer a wide variety of Business and Management studies support including: Abstracts writing, journal articles and manuscripts, literature review writing, research proposal, research methodology, textual/data analysis, statistical analysis, findings, results and conclusions, referencing, clinical study reports. In addition, tailor-made assignment, essay and manuscript support, conference paper and textbook writing, coding and algorithm, programming, software and tool development, illustration, manuscript statistics, PhD research plan, and editing services." },
  { q: "What topics are covered in Business and Management Studies writing?", a: "We cover a wide range including: technology and innovation management, human resource management, globalisation and strategy, corporate social responsibility, leadership and innovation, global politics and business, strategic management, customer loyalty, employee retention, customer relationship management, stock market behaviour, project management, MBA international management strategy, performance and brand management, mergers and acquisitions, and many more." },
  { q: "If I am not satisfied with your Business and Management writing, how do you address the issues?", a: "At Tutors India, our first motto is 100% customer satisfaction, which means this is a very rare event. However, we provide the guarantee of unlimited revisions, so you need not worry about it. Simply share your feedback and we will revise accordingly at no additional charge until you are completely satisfied." },
  { q: "What if I need customisation in the Business and Management writing?", a: "Of course, we are ready to help our clients. Our service is completely flexible and tailor-made to the customer. If you can provide the areas of customisation related to the Business and Management research area initially proposed, we can make amendments accordingly. The service is designed to adapt to your specific university guidelines and marking rubric." },
  { q: "Can you show me sample work of Business and Management writing?", a: "Yes, we have uploaded some of the Business and Management writing samples. For more details, you can talk with our academic writers or visit our sample works page to see the quality and style of our work." },
];

const testimonials = [
  { quote: "Honestly, I didn't expect this level of quality. The team understood exactly what I needed and delivered work that felt genuinely professional. My confidence went from stressed to unstoppable.", author: "Amelia Brooks", location: "UK", avatar: "/images/testimonials/amelia-brooks.webp" },
  { quote: "I was stuck, frustrated, and running out of time. Tutors India stepped in at the perfect moment and turned everything around faster than I imagined. Worth every bit.", author: "Oliver Bennett", location: "UK", avatar: "/images/testimonials/oliver-bennett.webp" },
  { quote: "The attention to detail was incredible. It didn't feel like I was working with a service provider — it felt like I had an expert academic partner guiding me throughout.", author: "Layla Al Mansoori", location: "", avatar: "/images/testimonials/layla-al-mansoori.webp" },
];

export default function BusinessManagementPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/subjects/" style={{ color: "#a0b8e0" }}>Subjects</Link>{" / "}<span style={{ color: "#fff" }}>Business & Management</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              Business &amp; Management Studies — Academic Writing
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              PhD, Master&apos;s &amp; Authors / Publishers. The US &amp; UK business writers at Tutors India aim at inculcating knowledge within students and build great confidence to submit their business &amp; management including international business, leadership &amp; SCM writing successfully.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/tutorsindia-logo-hd.jpg" alt="Tutors India" style={{ width: "90px", height: "90px", objectFit: "contain", marginBottom: "10px" }} />
            <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#f9c74f" }}>400+</div>
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0" }}>Business &<br />Management Writers</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      <div style={{ background: "#12214a", padding: "16px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: "400+", l: "Business Writers" }, { n: "MBA & PhD", l: "Level Support" }, { n: "23+ Areas", l: "Business Topics" }, { n: "< 5%", l: "Plagiarism" }, { n: "Unlimited", l: "Revisions" }, { n: "30 min", l: "Response" }].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
              <div style={{ fontSize: "0.68rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>

        {/* Main Description */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>
            Business &amp; Management Dissertation, Assignments, Manuscript Writing &amp; Editing
          </h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            Writing business and management papers can be stressful, specifically when your objective is to obtain a good grade. In the field of business and management, it is even more stressful as it comprises a wide range of comprehensive programs including accounting, finance, marketing, management, economics and business administration.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            Since the business and management dissertation must demonstrate scholarly work based on sound academic principles, it might prove cumbersome to students. This writing needs wide extensive study involving business and management books, magazines, and references which should be translated into a well-laid-out dissertation with heading, subheading, introduction, body, conclusion enumerating valid points of research.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.94rem" }}>
            Our writing standard is at an exemplary standard showing creativity &amp; innovation and ensures link between theory &amp; practice. We use subject-specific language, exemplary presentation demonstrating clear, logical, imaginative, creative &amp; original work — ensuring exceptional ability in the appropriate use of the relevant literature, practically or theoretically significant topics, careful execution of research design, analysis and discussion.
          </p>
        </div>

        {/* Coverage Areas */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Business &amp; Management Areas We Cover</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "16px" }}>Accounting, Finance, Marketing, HR, Oil &amp; Gas, International Business, Leadership, Entrepreneurship and more</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {coverage.map(c => (<span key={c} style={{ padding: "5px 13px", background: "#fff", border: "1.5px solid #dde2ef", borderRadius: "16px", fontSize: "0.79rem", color: "#1a2a6c", fontWeight: 500 }}>{c}</span>))}
          </div>
        </div>

        {/* Theories & Models */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "22px", marginBottom: "28px" }} className="two-col-grid">
          <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "14px" }}>Management Theories &amp; Models We Use</h3>
            {theories.map(t => (<div key={t} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", fontSize: "0.82rem", color: "#c5d5f0" }}><span style={{ color: "#f9c74f", fontWeight: 700, flexShrink: 0 }}>→</span> {t}</div>))}
          </div>
          <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px", border: "1px solid #dde2ef" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Academic Databases We Use</h3>
            {databases.map(d => (<div key={d} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid #dde2ef", fontSize: "0.82rem", color: "#555" }}><span style={{ color: "#e87722", fontWeight: 700 }}>→</span> {d}</div>))}
          </div>
        </div>

        {/* Research Methodology */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.25rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Research Methodology Support</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px" }} className="three-col-grid">
            {[
              { icon: "🔬", title: "Primary & Secondary Research", desc: "Data collection through library research, internet searches, and quantitative surveys using questionnaire method with Likert Scale — methodologically justified." },
              { icon: "📐", title: "Research Approaches", desc: "Exploratory, descriptive, analytical & predictive approaches; qualitative (case study, grounded theory, ethnography, phenomenological) or quantitative; positivism, interpretivism, realism." },
              { icon: "📝", title: "Questionnaire Development", desc: "From topic selection to complete dissertation — questionnaire or interview guide developed at free of cost while you order for dissertation." },
            ].map(item => (<div key={item.title} style={{ background: "#f5f6fa", borderRadius: "8px", padding: "16px", border: "1px solid #dde2ef" }}><div style={{ fontSize: "1.5rem", marginBottom: "8px" }}>{item.icon}</div><div style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{item.title}</div><div style={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.6 }}>{item.desc}</div></div>))}
          </div>
        </div>

        {/* Free Deliverables */}
        <div style={{ background: "#e87722", color: "#fff", borderRadius: "12px", padding: "22px", marginBottom: "28px" }}>
          <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "12px" }}>Free Services with Your Dissertation Order</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "8px" }} className="four-col-grid">
            {["Questionnaire or Interview Guide", "Appendices", "Abstract", "Title Page", "Table of Contents", "Lists of Charts & Graphs", "Formatting", "Bibliography with annotations"].map(item => (<div key={item} style={{ display: "flex", gap: "7px", fontSize: "0.81rem", color: "rgba(255,255,255,0.9)", padding: "5px 0" }}><span style={{ fontWeight: 700 }}>✓</span> {item}</div>))}
          </div>
        </div>

        {/* QA Boxes */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "14px", marginBottom: "28px" }} className="four-col-grid">
          {qaBoxes.map(box => (<Link key={box.title} href={box.href} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", overflow: "hidden", textAlign: "center", display: "block" }}><img src={box.img} alt={box.title} style={{ width: "100%", height: "90px", objectFit: "contain", padding: "10px", background: "#f5f6fa" }} loading="lazy" /><div style={{ padding: "10px" }}><div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "3px" }}>{box.title}</div><div style={{ fontSize: "0.73rem", color: "#666", lineHeight: 1.4 }}>{box.desc}</div></div></Link>))}
        </div>

        {/* Testimonials */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>What Our Clients Say</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px" }} className="three-col-grid">
            {testimonials.map((t, i) => (<div key={i} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px" }}><div style={{ color: "#e87722", fontSize: "2rem", lineHeight: 1, marginBottom: "6px", fontFamily: "serif" }}>&ldquo;</div><p style={{ color: "#555", fontSize: "0.84rem", lineHeight: 1.7, fontStyle: "italic", marginBottom: "12px" }}>{t.quote}</p><div style={{ display: "flex", alignItems: "center", gap: "10px" }}><img src={t.avatar} alt={t.author} style={{ width: "36px", height: "36px", borderRadius: "50%", objectFit: "cover" }} loading="lazy" /><div><div style={{ fontWeight: 700, color: "#1a2a6c", fontSize: "0.84rem" }}>{t.author}</div>{t.location && <div style={{ fontSize: "0.72rem", color: "#888" }}>{t.location}</div>}</div></div></div>))}
          </div>
        </div>

        {/* FAQ */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Frequently Asked Questions</h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Expert Business &amp; Management Writing Support</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>400+ Writers · MBA & PhD Level · All Business Disciplines · Response in 30 min</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
      <style>{`@media(max-width:768px){.two-col-grid{grid-template-columns:1fr!important;}.three-col-grid{grid-template-columns:1fr!important;}} @media(max-width:900px){.four-col-grid{grid-template-columns:1fr 1fr!important;}}`}</style>
    </>
  );
}
