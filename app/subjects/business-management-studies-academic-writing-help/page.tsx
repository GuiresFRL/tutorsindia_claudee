import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import Image from "next/image";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "Business & Management Writing Help",
  description: "Business and Management Studies academic writing help for UG, Master's and MBA students. Dissertations, case studies and assignments written by experts in strategy, HR and marketing.",
  alternates: { canonical: "https://www.tutorsindia.com/subjects/business-management-studies-academic-writing-help/" },
};

const faqs = [
  {
    q: "Why should I Choose Tutors India for Business and Management Studies writing services?",
    a: `Our native writers are astounding and experience in different subjects fields especially in the Business and Management Studies writing ensure to understand your project well and delivered on time. With over 400+ academic writers endeavor to submit your document that meets the terminology of the academic area but also it has the native linguistic command over Business and Management terms. Thereby, it boosts opportunities to achieve high credits in your dissertation and increasing the chances of acceptance by high impact factor journal.

Our Business and Management studies writing services uniqueness includes:
• An original, fresh and 100% plagiarism free content.
• Flawless, ideal and sound research paper that meets recommended formatting rules.
• Accurate and an appropriate information discover the groundbreaking conceptualization.
• On-Time delivery with no compromise on Quality.`,
  },
  {
    q: "What kind of services do you offer?",
    a: `We offer a wide variety of the following outstanding Business and Management studies supports including

For Masters and PhD: Abstracts writing, journal articles and manuscripts, literature review writing, research proposal, research methodology, textual/data analysis, statistical analysis, findings, results, and conclusions, referencing, clinical study reports, protocols, Common technical documents, Data safety monitoring board (DSMB) manuals and more.

In addition, tailor-made assignment, essay and manuscript support, conference paper and textbook writing, coding and algorithm, programming, software and tool development, illustration, manuscript statistics and PhD research plan as well as editing services. We deliver a professional academic assistance to complete any research work and writing you may require.

If you need any other research writing support, please select 'other' on our pricing order form and clearly outline what is required. We will call back you immediately, or you can contact UK toll-free 08081891062.`,
  },
  {
    q: "What are the topics covered in Business and Management Studies writing?",
    a: `We covers the wide range of Business and Management writing topics such as technology and innovation management, human resource management, globalisation and strategy business, corporate social responsibility business, leadership and innovation business, global politics and global business, global strategy for business, management of international change, customer loyalty, employee retention, customer relationship management, stock market behaviour, project management, management strategy and global business strategy, MBA international management Strategy, Performance and brand management, Mergers and Acquisitions and more.`,
  },
  {
    q: "If I am not satisfied with your Business and Management writing, how do you address the issues?",
    a: `At Tutors India, our first motto offers 100% customer satisfaction, so it is a very rare event. However, we provide the guarantee of the unlimited revisions*, so you need not worry about it.`,
  },
  {
    q: "What If I need some customization in the Business and Management writing?",
    a: `Of course, we ready to help our clients. Our service is completely flexible, and tailor made to the customer. Hence, if you can provide the areas of customization related to Business and Management research area initially proposed, we could make amendments in the medical writing manuscript.`,
  },
  {
    q: "Can you show me sample work of Business and Management writing?",
    a: `Yes, we have an uploaded some of the Business and Management writing works samples. For more details, let talks with our academic writers.`,
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  }))
};

const testimonials = [
  {
    quote: "Honestly, I didn't expect this level of quality. The team understood exactly what I needed and delivered work that felt genuinely professional. My confidence went from stressed to unstoppable.",
    author: "Amelia Brooks",
    role: "UK – Big Data Analytics",
    avatar: "/wp-content/uploads/2024/06/Amelia-Brooks.webp",
  },
  {
    quote: "I was stuck, frustrated, and running out of time. Tutors India stepped in at the perfect moment and turned everything around faster than I imagined. Worth every bit.",
    author: "Oliver Bennett",
    role: "UK – Big Data Analytics",
    avatar: "/wp-content/uploads/2024/06/Oliver-Bennett.webp",
  },
  {
    quote: "The attention to detail was incredible. It didn't feel like I was working with a service provider — it felt like I had an expert academic partner guiding me throughout.",
    author: "Layla Al Mansoori",
    role: "UAE – Essay & Assignment Writing",
    avatar: "/wp-content/uploads/2024/06/Layla-Al-Mansoori.webp",
  },
  {
    quote: "My research finally started making sense after working with this team. Their guidance simplified complex ideas and gave my project the structure it was missing.",
    author: "Hassan Al Falasi",
    role: "UAE – Essay & Assignment Writing",
    avatar: "/wp-content/uploads/2024/06/Hassan-Al-Falasi.webp",
  },
  {
    quote: "I submitted my work with complete confidence for the first time ever. The quality, formatting, and clarity were all beyond what I hoped for.",
    author: "Charlotte Reed",
    role: "UK",
    avatar: "/wp-content/uploads/2024/06/Charlotte-Reed.webp",
  },
  {
    quote: "The team handled everything professionally from start to finish. Timely updates, quick responses, and excellent academic quality — exactly what students need during stressful deadlines.",
    author: "Zain Al Hashmi",
    role: "UAE",
    avatar: "/wp-content/uploads/2024/06/Zain-Al-Hashmi.webp",
  },
  {
    quote: "I was amazed at how naturally the content matched my writing style and university standards. It felt authentic, polished, and academically strong.",
    author: "Emily Carter",
    role: "UK",
    avatar: "/wp-content/uploads/2024/06/Emily-Carter.webp",
  },
  {
    quote: "This service saved me during one of the most stressful phases of my academic journey. Reliable, professional, and genuinely supportive throughout the process.",
    author: "Noora Al Zaabi",
    role: "UAE",
    avatar: "/wp-content/uploads/2024/06/Noora-Al-Zaabi.webp",
  },
  {
    quote: "The final work looked so refined and well-structured that even my mentor appreciated the improvement immediately. Highly recommended for serious academic support.",
    author: "George Whitmore",
    role: "UK",
    avatar: "/wp-content/uploads/2024/06/George-Whitmore.webp",
  },
  {
    quote: "What impressed me most was how personalized the support felt. They didn't just complete the work — they understood my goals and helped me present them better.",
    author: "Khalid Al Nuaimi",
    role: "UAE",
    avatar: "/wp-content/uploads/2024/06/Khalid-Al-Nuaimi.webp",
  },
];

const databases = [
  "Google Scholar", "Web of Science", "Business Source Complete", "JSTOR", "SSRN Electronic Library",
  "NBER Working Papers", "IDEAS", "Annual Reviews", "ABI/INFORM Complete", "Emerald Management",
  "SAGE Premier", "ScienceDirect", "SAGE Stats", "Accounting & Tax", "Hospitality & Tourism Complete",
  "World Bank Open Knowledge Repository", "Hoover's Company Records", "LexisNexis Academic",
  "Gale Virtual Reference Library", "Regional Business News", "Proquest Central",
  "Academic Search Complete", "Oxford Reference Online: Economics",
];

export default function BusinessManagementWritingPage() {
  return (
    <main style={{ color: "#222" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Subjects", url: "/subjects/" }, { name: "Business & Management Studies" }]} />
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #1a2a6c 0%, #2d3a5e 100%)", color: "#fff", padding: "60px 20px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", gap: 40, flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 280 }}>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
              <Link href="/subjects/" style={{ color: "#a0b8e0" }}>Subjects</Link>{" / "}
              <span style={{ color: "#fff" }}>Business &amp; Management Studies</span>
            </div>
            <p style={{ color: "#f90", fontWeight: 700, marginBottom: 8, fontSize: 14, textTransform: "uppercase", letterSpacing: 1 }}>PhD, Master's &amp; Authors / Publishers</p>
            <h1 style={{ fontFamily: "Merriweather, serif", fontSize: "clamp(1.6rem,4vw,2.6rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: 20 }}>
              Business &amp; Management Studies– Academic Writing
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 28, opacity: 0.9 }}>
              The US &amp; UK business writers at Tutors India aim at inculcating knowledge within students and build a great confidence to submit their business &amp; management including international business, leadership &amp; SCM writing successfully.
            </p>
            <Link href="/order/" style={{ background: "#f90", color: "#fff", padding: "13px 30px", borderRadius: 6, fontWeight: 700, textDecoration: "none", display: "inline-block" }}>
              Order Now
            </Link>
          </div>
          <div style={{ flex: "0 0 auto" }}>
            <Image src="/wp-content/uploads/2021/09/Topic-Selection.png" alt="Business Management Writing" width={340} height={260} style={{ borderRadius: 10, maxWidth: "100%" }} />
          </div>
        </div>
      </section>

      {/* Section heading */}
      <section style={{ background: "#f8f9fb", padding: "50px 20px 30px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Merriweather, serif", fontSize: "clamp(1.2rem,3vw,1.8rem)", fontWeight: 800, marginBottom: 16, color: "#1a2a6c" }}>
            Business &amp; Management Dissertation (Thesis), Assignments, Manuscript Writing &amp; Editing Services
          </h2>
          <p style={{ maxWidth: 820, margin: "0 auto", fontSize: 16, lineHeight: 1.8, color: "#444" }}>
            Our experts are professional business and management writers having the highest qualification from the UK. Decades of experience in writing and editing has been instrumental in shaping the career of students (postdoctoral fellowships or jobs).
          </p>
        </div>
      </section>

      {/* Quality Cards */}
      <section style={{ padding: "40px 20px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather, serif", textAlign: "center", fontSize: "clamp(1.1rem,2.5vw,1.5rem)", fontWeight: 700, marginBottom: 30, color: "#1a2a6c" }}>
            Business &amp; Management Professionals at Tutors India assures you the quality
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 24 }}>
            {[
              { img: "/wp-content/uploads/2021/09/Topic-Selection.png", title: "Your Business and Management Writing", text: "Get the ideal and flawless Business and Management writing samples from our Subject-Matter expertise." },
              { img: "/wp-content/uploads/2021/09/Quality-Assurance.png", title: "Quality Assurance", text: "We ensure to achieve High Quality at every stage-Check of Quality Assurance & Enhancement activities report." },
              { img: "/wp-content/uploads/2021/09/Plagiarism-Report.png", title: "Plagiarism Report", text: "We have dedicated in deliver your document after correcting plagiarism using–Write Check or Turnitin, and or any other advanced plagiarism tools." },
              { img: "/wp-content/uploads/2021/09/Customer-Interaction.png", title: "Customer Interaction", text: "We act in real-time and interact with customer at every stage in terms of modifications, any query related to your project and order delivery." },
            ].map((c) => (
              <div key={c.title} style={{ background: "#f8f9fb", borderRadius: 10, padding: 24, textAlign: "center", boxShadow: "0 2px 10px rgba(0,0,0,0.06)" }}>
                <Image src={c.img} alt={c.title} width={80} height={80} style={{ marginBottom: 14, filter: "blur(0px)" }} />
                <h3 style={{ fontFamily: "Merriweather, serif", fontSize: 15, fontWeight: 700, marginBottom: 10, color: "#1a2a6c" }}>{c.title}</h3>
                <p style={{ fontSize: 13, color: "#555", lineHeight: 1.6 }}>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / body */}
      <section style={{ padding: "50px 20px", background: "#f8f9fb" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#444", marginBottom: 20 }}>
            Writing business and management paper can be stressful, specifically when your objective is to obtain a good grade. Yet, for many students obtaining an A is less a matter while 'figuring out' what the professor 'wants' is more matters. In the field of business and management, it is even more stressful as it comprises wide range of comprehensive programs including accounting, finance, marketing and management, economics and business administration. The program comprised of core and elective modules while students' needs to complete all the modules successfully in order to move on to the Capstone Research project or internship.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#444", marginBottom: 20 }}>
            Since the business and management dissertation must demonstrate a scholarly work based on sound academic principles it might prove as cumbersome to students. This writing needs wide extensive study involving business and management books, magazines, references which should be translated into a well laid out dissertation writing with heading, subheading, introduction, body, conclusion enumerating valid points of research. So as to make the writing work a professional one, it is better to hire professional legal writers. Dissertation writing service provided by us covers all the contents of the study. Our team of expertise have worked with students across the universities.
          </p>
          <h3 style={{ fontFamily: "Merriweather, serif", fontWeight: 700, color: "#1a2a6c", marginBottom: 10 }}>We use subject-specific language, exemplary presentation that demonstrates clear, logical, imaginative, creative &amp; Original</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#555", marginBottom: 20 }}>
            We demonstrate exceptional ability in the appropriate use of the relevant (meticulous) literature, practically or theoretically significant topic, careful execution of research design, analysis and discussion &amp; conclusion.
          </p>
          <h3 style={{ fontFamily: "Merriweather, serif", fontWeight: 700, color: "#1a2a6c", marginBottom: 10 }}>Our writing standard are at an exemplary standard showing creativity &amp; innovation &amp; ensures link between theory &amp; practice</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#555" }}>
            Accounting, and financial management, marketing, HR, oil &amp; Gas, International Business, Leadership, entrepreneurship management, organizational behavior, strategic management, marketing management, managerial economics, quantitative methods for business, digital marketing, hospitality management, sports management, human resource management, business law, managing people and performance, fashion management, project management, public management, purchasing management, safety management, supply chain management, transportation management, retail management, quality management, luxury management, management control, key account management, event management.
          </p>
        </div>
      </section>

      {/* Why Tutors India */}
      <section style={{ background: "#e8eaf0", padding: "40px 20px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather, serif", fontWeight: 800, color: "#1a2a6c", marginBottom: 16, fontSize: "clamp(1.1rem,2.5vw,1.4rem)" }}>Why Tutors India for Business &amp; Management writing and editing services?</h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#444" }}>
            The US &amp; UK writers at Tutors India aim at inculcating knowledge within students and build a great confidence to submit their dissertation successfully including applied computational finance, applied corporate finance, risk management in financial markets, financial engineering, fixed income markets, forecasting financial time series, portfolio management, international finance, global finance system, mergers, buyouts and corporate restructuring, quantitative methods for finance and risk analysis.
          </p>
        </div>
      </section>

      {/* 4 Feature Cards */}
      <section style={{ padding: "50px 20px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather, serif", textAlign: "center", fontWeight: 800, color: "#1a2a6c", fontSize: "clamp(1.1rem,2.5vw,1.5rem)", marginBottom: 30 }}>
            A Dissertation Writing Service (Empirical &amp; Theoretical paper) features that helps to get the grade
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 24 }}>
            {/* Card 1 */}
            <div style={{ border: "1px solid #e0e4ee", borderRadius: 10, padding: 28 }}>
              <h3 style={{ fontFamily: "Merriweather, serif", fontWeight: 700, color: "#1a2a6c", marginBottom: 12 }}>Your Choice of Primary or Secondary Research</h3>
              <p style={{ fontSize: 14, color: "#555", lineHeight: 1.7 }}>
                We help you to collect primary and secondary data collection through library research, internet searches (for secondary), while for quantitative data, data collected from the survey using questionnaire method (closed ended questionnaire with Likert Scale). We justify the chosen methodology through theoretical justification rather than the argument of lack of time or financial resources.
              </p>
            </div>
            {/* Card 2 */}
            <div style={{ border: "1px solid #e0e4ee", borderRadius: 10, padding: 28 }}>
              <h3 style={{ fontFamily: "Merriweather, serif", fontWeight: 700, color: "#1a2a6c", marginBottom: 12 }}>Your Choice of quantitative or qualitative or Triangulation methodologies</h3>
              <p style={{ fontSize: 14, color: "#555", lineHeight: 1.7 }}>
                We help you to identify the right choice of research (e.g. exploratory, descriptive, analytical, &amp; predictive), research approaches (qualitative – case study, grounded theory, ethnography, content analysis or phenomenological or quantitative, applied basic, deductive / inductive), research philosophy (positivism, interpretivism, realism).
              </p>
            </div>
            {/* Card 3 */}
            <div style={{ border: "1px solid #e0e4ee", borderRadius: 10, padding: 28 }}>
              <h3 style={{ fontFamily: "Merriweather, serif", fontWeight: 700, color: "#1a2a6c", marginBottom: 12 }}>Development of Questionnaire or Interview questions</h3>
              <p style={{ fontSize: 14, color: "#555", lineHeight: 1.7 }}>
                We help you in a broad range of services from the selection of a dissertation topic to complete your master's dissertation successfully with the expected grade. UK MBA thesis topics are selected based on your area of interest, research gap, and feasibility of data collection.
              </p>
            </div>
            {/* Card 4 */}
            <div style={{ border: "1px solid #e0e4ee", borderRadius: 10, padding: 28 }}>
              <h3 style={{ fontFamily: "Merriweather, serif", fontWeight: 700, color: "#1a2a6c", marginBottom: 12 }}>Free while you order dissertation</h3>
              <ul style={{ fontSize: 14, color: "#555", lineHeight: 2, paddingLeft: 18 }}>
                {["Appendices", "Abstract", "Title Page", "Copyright Page", "Table of Content", "Lists of Charts, graphs, Illustrations", "Formatting", "Personal statement for your research proposal", "Bibliography"].map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dark panel with management models */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "50px 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 36 }}>
            <div>
              <h3 style={{ fontFamily: "Merriweather, serif", fontWeight: 700, color: "#f90", marginBottom: 14 }}>Management Theories &amp; Models</h3>
              <p style={{ fontSize: 14, lineHeight: 1.8, opacity: 0.9 }}>
                We also use wide range of management theories and models including leadership (e.g. Path goal, PSDA, PAEI, SWOT, TDC Matrix, Theory X, Y, Z, TQM, Value chain, Root cause, Leadership Style, Hofstede, Expectancy, ERG Theory), change management – culture (e.g. 7-S Framework, Balance Score card, BPR, CMM, Ice Berg, EVM, EFQM, Force Field, Maslow, Kruger etc), valuation decision making, strategic value creation (PEST, PSDA Deming, Outsourcing, OODA, Stakeholder theory, TDC Matrix, Value Chain, VRIN Barney, GE /McKinsey Matrix, Force Field, Five Force, Game Theory, 3Cs Model) and communication marketing (7Ps, ARIMA, Ansoff, ADL, BCG Matrix, Gestalt, Industry lifecycle, Product life cycle, PBT, PEST, OL, TRA, TPB).
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: "Merriweather, serif", fontWeight: 700, color: "#f90", marginBottom: 14 }}>Writing Style &amp; Argument</h3>
              <p style={{ fontSize: 14, lineHeight: 1.8, opacity: 0.9 }}>
                We follow styles rules including quotations (short and long quotes, edited quotes, errors or discriminatory terms in quoted passages), ellipsis, interpolations, abbreviations, dates, times, numbers, fractions and decimals, and footnotes. We write your dissertation in the manner which is argumentative, ie., the logical and coherent construction substantiated by relevant primary and secondary sources. We follow EASE guidelines. We ensure that our dissertation writing is free of plagiarism and we screen the article in different software including Viper, iThenticate, cross check, eTBLAST, SafeAssign, WCopyFind, checkforplagiarism, grammarly and sometimes in Google.
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: "Merriweather, serif", fontWeight: 700, color: "#f90", marginBottom: 14 }}>Sources &amp; Citation</h3>
              <p style={{ fontSize: 14, lineHeight: 1.8, opacity: 0.9 }}>
                We help you identify an impressive range of primary and secondary resources, in compliance with the Style Guide found in the Business and management literature including the American Management Association (The AMA style guide for business writing), the Harvard Scheme, the APA style, and EndNote Guide etc. Our formatting and referencing team are aware of citations that includes books, reported cases (Australia / UK), published &amp; unpublished papers, government &amp; private publications, discussion papers/reports, citing newspaper/magazines, press releases, world wide web sites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Databases */}
      <section style={{ padding: "50px 20px", background: "#f8f9fb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather, serif", fontWeight: 800, color: "#1a2a6c", marginBottom: 10, fontSize: "clamp(1.1rem,2.5vw,1.4rem)" }}>Business &amp; Management Databases We Use</h2>
          <p style={{ color: "#555", marginBottom: 24, fontSize: 14 }}>
            We use wide range of databases including Google Scholar, Web of Science, Business Source Complete, JSTOR, SSRN, NBER, IDEAS, Emerald Management, SAGE, ScienceDirect, ABI/INFORM, LexisNexis, Proquest Central and many more.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {databases.map(db => (
              <span key={db} style={{ background: "#1a2a6c", color: "#fff", padding: "6px 14px", borderRadius: 20, fontSize: 13, fontWeight: 500 }}>{db}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: "60px 20px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather, serif", textAlign: "center", fontWeight: 800, color: "#1a2a6c", marginBottom: 40, fontSize: "clamp(1.2rem,3vw,1.8rem)" }}>
            What Our Business &amp; Management Students Say
          </h2>
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* FAQs */}
      <section style={{ padding: "60px 20px", background: "#f8f9fb" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather, serif", textAlign: "center", fontWeight: 800, color: "#1a2a6c", marginBottom: 36, fontSize: "clamp(1.2rem,3vw,1.8rem)" }}>
            Frequently Asked Questions
          </h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#f90", padding: "50px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Merriweather, serif", color: "#fff", fontWeight: 800, fontSize: "clamp(1.3rem,3vw,2rem)", marginBottom: 12 }}>Order Now</h2>
        <p style={{ color: "#fff", fontSize: 16, marginBottom: 28 }}>
          Invest in your career by availing language editing help from the UK &amp; the US Qualified researchers
        </p>
        <Link href="/order/" style={{ background: "#1a2a6c", color: "#fff", padding: "14px 36px", borderRadius: 6, fontWeight: 700, textDecoration: "none", display: "inline-block" }}>
          Order Now
        </Link>
      </section>
    </main>
  );
}
