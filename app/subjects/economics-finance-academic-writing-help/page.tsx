import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "Economics & Finance Writing Help",
  description: "Expert Economics & Finance academic writing. Macroeconomics, Microeconomics, Financial Markets, Econometrics. Harvard, APA. Masters & PhD. Tutors India.",
  alternates: { canonical: "https://www.tutorsindia.com/subjects/economics-finance-academic-writing-help/" },
};

const faqs = [
  {
    q: "Why should I Choose Tutors India for Economics & Finance writing services?",
    a: "Our native academic economics and finance writers are skillful and experienced in different subject fields especially in econometric writing — ensuring to understand your project well and deliver on time. With over 400+ academic writers, we endeavour to submit your PhD document that meets the terminology of the academic area but also has the native linguistic command over technical terms. Thereby, it boosts opportunities to achieve high credits in your thesis and increasing the chances of acceptance by high impact factor journal.\n\nOur economics & finance writing services uniqueness includes:\n• An original, fresh and 100% plagiarism free content.\n• Flawless, ideal and sound research paper that meets recommended formatting rules.\n• Perfect and appropriate information to discover groundbreaking conceptualization.\n• On-Time delivery with no compromise on Quality.",
  },
  {
    q: "What kind of services do you offer?",
    a: "We offer an extensive variety of the following outstanding academic economics and finance supports for Masters and PhD including: Abstracts writing, journal articles and manuscripts, literature reviews, research proposal, research methodology, textual/data analysis, statistical analysis, findings, results, and conclusions, referencing, and more.\n\nIn addition, tailor-made assignment, essay and manuscript support, conference paper and textbook writing, coding and algorithm, programming, software and tool development, illustration, manuscript statistics and PhD research plan as well as editing services. We deliver professional academic assistance to complete any research work and writing you may require.",
  },
  {
    q: "What are the topics covered in Economics & Finance dissertation?",
    a: "We cover the wide range of economics and finance dissertation topics such as microeconomics, macroeconomics, econometrics I & II, advanced microeconomics and advanced macroeconomics, energy economics and technology, economics of the firm, international trade theory, international finance and developing economics, energy regulation & policy, theory of finance, empirical methods in energy economics, financial econometrics, business economics, economics of international oil and gas, human resource economics, topics in development economics, applied policy analysis, microeconomics of the public sector, policy evaluation: techniques and applications, health economics and much more.",
  },
  {
    q: "If I am not satisfied with your Economics & Finance writing, how do you address the issues?",
    a: "At Tutors India, our first motto is to offer 100% customer satisfaction, so it is a very rare event. However, we provide the guarantee of unlimited revisions*, so you need not worry about it.",
  },
  {
    q: "If I need some customisation in the Economics & Finance dissertation, do you help me?",
    a: "Of course, we are ready to help our clients. Our economics and finance writing service is completely flexible and tailor made to the customer. Hence, if you can provide the areas of customisation related to the research area initially proposed, we could make amendments to the document.",
  },
  {
    q: "Can you show me sample work of Economics & Finance academic writing?",
    a: "Yes, we have uploaded some of the academic writing work samples. For more details, please talk with our academic economics and finance writers.",
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
    author: "Amelia Brooks, UK",
    role: "Big Data Analytics",
    avatar: "/wp-content/uploads/2024/06/Amelia-Brooks-85x85.webp",
  },
  {
    quote: "I was stuck, frustrated, and running out of time. Tutors India stepped in at the perfect moment and turned everything around faster than I imagined. Worth every bit.",
    author: "Oliver Bennett, UK",
    role: "Big Data Analytics",
    avatar: "/wp-content/uploads/2024/06/Oliver-Bennett-85x85.webp",
  },
  {
    quote: "The attention to detail was incredible. It didn't feel like I was working with a service provider — it felt like I had an expert academic partner guiding me throughout.",
    author: "Layla Al Mansoori",
    role: "Essay Writing and Assignment Writing",
    avatar: "/wp-content/uploads/2024/06/Layla-Al-Mansoori-1-85x85.webp",
  },
  {
    quote: "My research finally started making sense after working with this team. Their guidance simplified complex ideas and gave my project the structure it was missing.",
    author: "Hassan Al Falasi, UAE",
    role: "Essay Writing and Assignment Writing",
    avatar: "/wp-content/uploads/2024/06/Hassan-Al-Falasi-85x85.webp",
  },
  {
    quote: "I submitted my work with complete confidence for the first time ever. The quality, formatting, and clarity were all beyond what I hoped for.",
    author: "Charlotte Reed, UK",
    avatar: "/wp-content/uploads/2024/06/Charlotte-Reed-85x85.webp",
  },
  {
    quote: "The team handled everything professionally from start to finish. Timely updates, quick responses, and excellent academic quality — exactly what students need during stressful deadlines.",
    author: "Zain Al Hashmi, UAE",
    avatar: "/wp-content/uploads/2024/06/Zain-Al-Hashmi-85x85.webp",
  },
  {
    quote: "I was amazed at how naturally the content matched my writing style and university standards. It felt authentic, polished, and academically strong.",
    author: "Emily Carter",
    avatar: "/wp-content/uploads/2024/06/Emily-Carter-85x85.webp",
  },
  {
    quote: "This service saved me during one of the most stressful phases of my academic journey. Reliable, professional, and genuinely supportive throughout the process.",
    author: "Noora Al Zaabi, UAE",
    avatar: "/wp-content/uploads/2024/06/Noora-Al-Zaabi-85x85.webp",
  },
  {
    quote: "The final work looked so refined and well-structured that even my mentor appreciated the improvement immediately. Highly recommended for serious academic support.",
    author: "George Whitmore, UK",
    avatar: "/wp-content/uploads/2024/06/George-Whitmore-85x85.webp",
  },
  {
    quote: "What impressed me most was how personalised the support felt. They didn't just complete the work — they understood my goals and helped me present them better.",
    author: "Khalid Al Nuaimi",
    avatar: "/wp-content/uploads/2024/06/Khalid-Al-Nuaimi-85x85.webp",
  },
];

const qualityCards = [
  {
    img: "/wp-content/uploads/2021/09/Topic-Selection.png",
    title: "Your Economic and Finance Academic Writing",
    desc: "Get the flawless and ideal Economics & Finance Academic Writing samples from our Subject-Matter expertise as such it delivered.",
    href: "/our-sample-works/",
  },
  {
    img: "/wp-content/uploads/2021/09/Quality-Assurance.png",
    title: "Quality Assurance",
    desc: "We ensure to achieve High Quality at every stage — Check of Quality Assurance & Enhancement activities report.",
    href: "/guarantees/",
  },
  {
    img: "/wp-content/uploads/2021/09/Plagiarism-Report.png",
    title: "Plagiarism Report",
    desc: "We have dedicated to deliver your document after correcting plagiarism using WriteCheck or Turnitin, and/or any other advanced plagiarism tools.",
    href: "/our-services/editing-services/plagiarism-report/",
  },
  {
    img: "/wp-content/uploads/2021/09/Customer-Interaction.png",
    title: "Customer Interaction",
    desc: "We act in real-time and interact with customers at every stage in terms of modifications, any query related to your project and order delivery.",
    href: "/contact-us/",
  },
];

const dataSources = [
  "Eco5.com", "Economy.com", "OECD", "EconData.Net", "World Bank",
  "World Governance Research Indicators Dataset", "BEEPS", "Governance databank",
  "Cross-National Equivalent File", "FedStats", "Data-Planet", "American FactFinder",
  "Statista", "FRED", "Global Financial Database", "Global Insight", "IMF eLibrary",
  "The MacroData Guide", "UN data", "Wharton Research Data Services (WRDS)",
  "World Development Indicators", "Zanran", "Databib",
];

export default function EconomicsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Subjects", url: "/subjects/" }, { name: "Economics &amp; Finance" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* ── Hero ── */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="eco-hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
              <Link href="/subjects/" style={{ color: "#a0b8e0" }}>Subjects</Link>{" / "}
              <span style={{ color: "#fff" }}>Economics &amp; Finance</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "10px" }}>
              Economics &amp; Finance – Academic Writing
            </h1>
            <p style={{ color: "#f9c74f", fontSize: "0.95rem", fontWeight: 600, marginBottom: "12px" }}>
              PhD, Master&apos;s &amp; Authors / Publishers
            </p>
            <p style={{ color: "#c5d5f0", fontSize: "0.97rem", lineHeight: 1.75, marginBottom: "10px" }}>
              The US &amp; UK technical writers at Tutors India aim at inculcating knowledge within students and build a great confidence to submit their Economics &amp; Finance Academic Writing successfully.
            </p>
            <p style={{ color: "#c5d5f0", fontSize: "0.92rem", lineHeight: 1.7, marginBottom: "22px" }}>
              Our experts are professional econometricians having the highest qualification from the UK. Decades of experience in writing and editing has been instrumental in shaping the career of students pursuing economics and finance.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "16px", textAlign: "center" }} className="eco-hero-badge">
            <img src="/wp-content/uploads/2021/09/Topic-Selection.png" alt="Economics & Finance Academic Writing" style={{ width: "220px", height: "160px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>PhD Economists<br />STATA · E-Views<br />All Finance Areas</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.eco-hero-inner{grid-template-columns:1fr!important;}.eco-hero-badge{display:none!important;}}`}</style>
      </section>

      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>

        {/* ── About Section ── */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.45rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>
          Economics &amp; Finance Professionals at Tutors India assures you the quality
        </h2>
        <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "14px" }}>
          Writing an economic paper can be stressful, specifically when your objective is to obtain a good grade. Yet, for many students obtaining an A is less a matter while &lsquo;figuring out&rsquo; what the professor &lsquo;wants&rsquo; is more matters. Economics addresses quantitative questions about employment, prices, demand/supply, growth rates, and trade as well as qualitative ones. Students need familiarity with theories and microeconomic/macroeconomic models, which presents challenges especially for working students.
        </p>
        <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "14px" }}>
          Economics and finance dissertations require familiarity with empirical modelling tools (STATA, E-Views, R), large datasets from sources such as OECD, World Bank, and IMF eLibrary, and citation conventions ranging from the Harvard scheme to the style used in the American Economic Review. Whether your study is micro or macro, theoretical or applied, our econometricians structure your dissertation around a clear research question, defensible methodology, and rigorous interpretation of results.
        </p>
        <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "14px" }}>
          We use subject-specific language, exemplary presentation that demonstrates clear, logical, imaginative, creative &amp; original work — we demonstrate exceptional ability in the appropriate use of the relevant literature, theory, methodologies, practices, tools, etc.
        </p>
        <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "36px" }}>
          <strong>Topics covered:</strong> Microeconomics, macroeconomics, econometrics I &amp; II, advanced microeconomics and advanced macroeconomics, energy economics and technology, economics of the firm, international trade theory, international finance and developing economics, energy regulation &amp; policy, theory of finance, empirical methods in energy economics, financial econometrics, business economics, economics of international oil and gas, human resource economics, topics in development economics, applied policy analysis, microeconomics of the public sector, policy evaluation: techniques and applications, health economics.
        </p>

        {/* ── 4 Quality Cards ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px", marginBottom: "48px" }} className="four-col-grid">
          {qualityCards.map(c => (
            <div key={c.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column" }}>
              <img src={c.img} alt={c.title} style={{ width: "100%", height: "130px", objectFit: "cover" }} />
              <div style={{ padding: "14px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "0.94rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "8px", lineHeight: 1.4 }}>{c.title}</h3>
                <p style={{ fontSize: "0.79rem", color: "#666", lineHeight: 1.6, marginBottom: "10px", flexGrow: 1 }}>{c.desc}</p>
                <Link href={c.href} style={{ fontSize: "0.8rem", color: "#e87722", fontWeight: 600 }}>View More →</Link>
              </div>
            </div>
          ))}
        </div>

        {/* ── Why Tutors India ── */}
        <div style={{ background: "#f5f6fa", border: "1px solid #dde2ef", borderRadius: "12px", padding: "32px", marginBottom: "48px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>
            Why Tutors India for Economics &amp; Finance writing and editing services?
          </h2>
          <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "14px" }}>
            The US &amp; UK writers at Tutors India aim at inculcating knowledge within students and build a great confidence to submit their dissertation successfully including applied computational finance, applied corporate finance, risk management in financial markets, financial engineering, fixed income markets, forecasting financial time series, portfolio management, international finance, global finance system, mergers, buyouts and corporate restructuring, quantitative methods for finance and risk analysis.
          </p>
        </div>

        {/* ── Dissertation Features ── */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>
          A Dissertation Writing Service Features that helps to get the grade
        </h2>
        <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "28px" }}>
          We help you to write empirical papers (Introduction, data, model, estimation technique or methodology, findings, and conclusion), that usually consists of coefficient estimates derived from regression analyses. Further, we also support in developing theoretical papers, that are proved (proofs, propositions, theorems, lemmas), with a sufficient degree of internal logical consistency. The process also entails data collection, statistical analysis and presentation in the format of your Institute.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "48px" }} className="two-col-grid">
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "24px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Your Choice of Primary or Secondary Research</h3>
            <p style={{ fontSize: "0.94rem", color: "#555", lineHeight: 1.75, marginBottom: "12px" }}>
              We help you to collect primary and secondary data through library research, internet searches (for secondary), while for quantitative data — including data that can be measured such as hours spent working, income, years of schooling, or number of papers published.
            </p>
            <p style={{ fontSize: "0.83rem", color: "#777", fontWeight: 600, marginBottom: "8px" }}>Key Data Sources We Use:</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
              {dataSources.map(s => (
                <span key={s} style={{ padding: "2px 8px", background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "10px", fontSize: "0.73rem", color: "#1a2a6c" }}>{s}</span>
              ))}
            </div>
          </div>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "24px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Your Choice of quantitative or qualitative or Triangulation methodologies</h3>
            <p style={{ fontSize: "0.94rem", color: "#555", lineHeight: 1.75 }}>
              We help you to identify the right choice of theoretical modelling strategy that helps you to address the problem. Including a clear hypotheses, the statistical and econometric technique including the identification and justification (e.g. Linear or Probit regression analysis).
            </p>
          </div>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "24px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Development of Questionnaire or Interview questions</h3>
            <p style={{ fontSize: "0.94rem", color: "#555", lineHeight: 1.75 }}>
              We help you in a broad range of services from the selection of a dissertation topic to complete your master&apos;s dissertation successfully with the expected grade. UK MBA thesis topics are selected based on your area of interest, research gap, and feasibility of data collection. We make you strong in your dissertation by dealing with all the questions that you have in your mind.
            </p>
          </div>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "24px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Free while you order dissertation</h3>
            <p style={{ fontSize: "0.94rem", color: "#555", lineHeight: 1.75, marginBottom: "10px" }}>
              We help to develop questionnaire or interview guide at free of cost while you order for dissertation. We also provide free:
            </p>
            <ul style={{ paddingLeft: "18px", fontSize: "0.85rem", color: "#555", lineHeight: 1.9 }}>
              <li>Appendices &amp; Abstract</li>
              <li>Title Page &amp; Copyright Page</li>
              <li>Table of Contents</li>
              <li>Lists of Charts, Graphs, Illustrations</li>
              <li>Formatting</li>
              <li>Personal statement for your research proposal</li>
              <li>Bibliography (a brief annotation on key primary text)</li>
            </ul>
          </div>
        </div>

        {/* ── Dark Features Panel ── */}
        <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "36px", marginBottom: "48px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "12px" }}>Economics &amp; Finance – Writing &amp; Editing Features</h2>
          <p style={{ color: "#c5d5f0", fontSize: "0.92rem", lineHeight: 1.75, marginBottom: "28px" }}>
            We help you to submit a plan of the dissertation (proposed structure / main argument), progress, and a sample of writing to their supervisor according to the style of reference — Draft would demonstrate evidence of imagination, creativity, critical insights and analytical rigour.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }} className="three-col-grid">
            <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: "8px", padding: "20px" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "0.95rem", fontWeight: 700, marginBottom: "10px", color: "#f9c74f" }}>Sources, Citation and Presentation</h3>
              <p style={{ fontSize: "0.82rem", color: "#c5d5f0", lineHeight: 1.7 }}>
                We help you identify an impressive range of primary and secondary resources in compliance with the style guide found in economics/finance literature including the Harvard Scheme, the APA style, or the style used in the American Economic Review. Key databases: EconLit, Google Scholar, Web of Science, Business Source Complete, JSTOR, SSRN, NBER working papers, IDEAS, Annual Reviews, The Economist, Financial Times, Wall Street Journal, American Economic Review, Journal of Political Economy, Econometrica, Economic Journal, and Handbook of Corporate Finance.
              </p>
            </div>
            <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: "8px", padding: "20px" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "0.95rem", fontWeight: 700, marginBottom: "10px", color: "#f9c74f" }}>Economical Style &amp; Argument</h3>
              <p style={{ fontSize: "0.82rem", color: "#c5d5f0", lineHeight: 1.7 }}>
                We follow style rules including quotations (short and long quotes, edited quotes, errors or discriminatory terms in quoted passages), ellipsis, interpolations, abbreviations, dates, times, numbers, fractions and decimals, and footnotes. We write your dissertation in the manner which is argumentative — the logical and coherent construction substantiated by relevant primary and secondary sources. We follow EASE guidelines and screen through Viper, iThenticate, CrossCheck, eTBLAST, SafeAssign, WCopyFind, Grammarly and others.
              </p>
            </div>
            <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: "8px", padding: "20px" }}>
              <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "0.95rem", fontWeight: 700, marginBottom: "10px", color: "#f9c74f" }}>Why Choose Our Writers</h3>
              <p style={{ fontSize: "0.82rem", color: "#c5d5f0", lineHeight: 1.7 }}>
                With over 400+ academic economics and finance writers, we endeavour to submit your PhD document with native linguistic command over econometric terms. Our writers specialise in applied computational finance, applied corporate finance, risk management in financial markets, financial engineering, fixed income markets, forecasting financial time series, portfolio management, international finance, global finance system, mergers &amp; buyouts, corporate restructuring, and quantitative methods for finance and risk analysis.
              </p>
            </div>
          </div>
        </div>

        {/* ── Testimonials ── */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px" }}>What Our Clients Say</h2>
        <div style={{ marginBottom: "48px" }}>
          <TestimonialSlider testimonials={testimonials} />
        </div>

        {/* ── FAQ ── */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Frequently Asked Questions</h2>
        <div style={{ marginBottom: "48px" }}>
          <FaqAccordion faqs={faqs} />
        </div>

      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "8px" }}>Order Now</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>
          Invest in your career by availing language editing help from the UK &amp; the US Qualified researchers
        </p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>

      <style>{`
        @media(max-width:768px){
          .two-col-grid{grid-template-columns:1fr!important;}
          .three-col-grid{grid-template-columns:1fr!important;}
        }
        @media(max-width:900px){
          .four-col-grid{grid-template-columns:1fr 1fr!important;}
          .three-col-grid{grid-template-columns:1fr 1fr!important;}
        }
      `}</style>
    </>
  );
}
