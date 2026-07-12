import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata = {
  title: "Plagiarism Correction Service – Rephrasing & Rewriting your Dissertation, Research Papers & Manuscripts",
  description: "Plagiarism removal carried out by qualified and experienced researchers from the US & UK. Rephrasing and rewriting service for dissertations, research papers and manuscripts.",
};

const faqs = [
  {
    q: "Am I assured that my paper will be plagiarism free?",
    a: "Yes. We use Turnitin Plagiarism Checker to check for plagiarism before delivering an order. Therefore you are assured of 100% plagiarism free paper. Due to our ability of writing unique papers, Tutors india has gained credit as the most genuine company that delivers 0% plagiarism free papers.",
  },
  {
    q: "On which areas you provide plagiarism correction services?",
    a: "At tutors India, we provide plagiarism correction services to any subject or wide areas of research such as employee engagement dissertations, customer buying behaviour dissertation, project management dissertation, knowledge management dissertation, International marketing, performance management, strategic management and business policy, management of technology, international business, total quality management, public relation theories dissertation and many more. We also offer topics for various subjects such as MBA in HR, HRM, Finance, Economics, Operations, Nursing, medical, geographic, accounting, history, sociology, English, Music, advertising, fashion, tourism, architecture, computer science, politics, art, statistics",
  },
  {
    q: "What Information that I need to provide while ordering for plagiarism correction document?",
    a: "Send me the document that you want to do plagiarism correction services and other relevant details",
  },
  {
    q: "What if I require some customization in the topics we deliver?",
    a: "Our service is completely flexible and tailor made to the customer. Hence, if you can provide the areas of customization, we can make amendments in the documents.",
  },
  {
    q: "How About Some Samples of Your Work?",
    a: "Sure, you can look some of the sample of the plagiarism correction work here.",
  },
];

const testimonials = [
  { quote: "Honestly, I didn't expect this level of quality. The team understood exactly what I needed and delivered work that felt genuinely professional. My confidence went from stressed to unstoppable.", author: "Amelia Brooks", location: "UK (Big Data Analytics)" },
  { quote: "I was stuck, frustrated, and running out of time. Tutors India stepped in at the perfect moment and turned everything around faster than I imagined. Worth every bit.", author: "Oliver Bennett", location: "UK (Big Data Analytics)" },
  { quote: "The attention to detail was incredible. It didn't feel like I was working with a service provider — it felt like I had an expert academic partner guiding me throughout.", author: "Layla Al Mansoori", location: "Essay Writing and Assignment Writing" },
  { quote: "My research finally started making sense after working with this team. Their guidance simplified complex ideas and gave my project the structure it was missing.", author: "Hassan Al Falasi", location: "UAE (Essay Writing and Assignment Writing)" },
  { quote: "I submitted my work with complete confidence for the first time ever. The quality, formatting, and clarity were all beyond what I hoped for.", author: "Charlotte Reed", location: "UK" },
  { quote: "The team handled everything professionally from start to finish. Timely updates, quick responses, and excellent academic quality — exactly what students need during stressful deadlines.", author: "Zain Al Hashmi", location: "UAE" },
  { quote: "I was amazed at how naturally the content matched my writing style and university standards. It felt authentic, polished, and academically strong.", author: "Emily Carter", location: "" },
  { quote: "This service saved me during one of the most stressful phases of my academic journey. Reliable, professional, and genuinely supportive throughout the process.", author: "Noora Al Zaabi", location: "UAE" },
  { quote: "The final work looked so refined and well-structured that even my mentor appreciated the improvement immediately. Highly recommended for serious academic support.", author: "George Whitmore", location: "UK" },
  { quote: "What impressed me most was how personalized the support felt. They didn't just complete the work — they understood my goals and helped me present them better.", author: "Khalid Al Nuaimi", location: "" },
  { quote: "I was really struggling with my final semester master's degree, that's when I heard about Tutors India. They really guided me the whole way to produce research proposal just from the idea of a research title. The level of detail which went into creating the research proposal is astonishing. The technical concepts they advised for methodology were very advanced and algorithms used were state of the art. Would definitely recommend Tutors India to anyone who is struggling to complete their research work.", author: "David Morrison", location: "" },
  { quote: "Tutors India helped me gain clarity on the direction my research proposal needed to go and provided me with more clarity in my work. The experts understand my difficulties in writing the research proposal and guided me accordingly. Even without having an in-depth background in the topic I'm able to understand the key aspects and was given the focus to the right place. I wholeheartedly endorse Tutors India as a best and professional service, as someone you can rely on completing your research works.", author: "Glenn McLaughlin", location: "" },
  { quote: "First and foremost, I want to express my gratitude for your writer's assistance and effort in developing this research technique for my research paper. It would be difficult to accomplish this assignment on deadline without your assistance and that of your writer. In fact, I believe that this legal subject is rather challenging for me, and that starting to create this law paper without your writer's assistance would be extremely difficult.", author: "Hunter W. Lindström, JD, PhD", location: "" },
  { quote: "Even though my professor refused to extend my deadline, I needed to find an assignment assistance provider, and I'm glad I found Tutors India. They responded quickly, and I received an exceptionally well-written paper before the deadline.", author: "Dr. Logan C. Sinclair, PhD", location: "" },
  { quote: "I can say that it was a pleasant experience in which Tutors India displayed flexibility in adapting to our needs and presented an exceptional report that met all of our expectations. Personally, I appreciated the team's prompt follow-up, and we will undoubtedly contact them if additional research assistance is required.", author: "Connor J. Gallagher, MPhil", location: "" },
];

const subjectAreas = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies",
  "Marketing & Communication", "Engineering & Technology", "Natural Sciences & Mathematics",
  "Biological & Life science", "Economics & Administration", "Humanities & Social Science",
  "Law", "Medicine & Health", "Education & Training", "Journalism & Media",
  "Agriculture & Forestry", "Computer Science & IT", "Hospitality, Leisure & Sports",
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function PlagiarismReportPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap');
        .three-col-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.5rem; }
        .four-col-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 1.5rem; }
        .two-col-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 1.5rem; }
        @media(max-width:768px){
          .three-col-grid,.four-col-grid,.two-col-grid{ grid-template-columns:1fr; }
        }
      `}</style>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "4rem 1rem 3rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "0.85rem", opacity: 0.7, marginBottom: "0.5rem" }}>Editing Services / Plagiarism Report</p>
          <h1 style={{ fontFamily: "'Merriweather',serif", fontSize: "clamp(1.5rem,3vw,2.4rem)", fontWeight: 700, lineHeight: 1.3, marginBottom: "1.5rem" }}>
            Plagiarism Correction Service – Rephrasing &amp; Rewriting your Dissertation, Research Papers &amp; Manuscripts
          </h1>
          <p style={{ fontSize: "1.1rem", opacity: 0.9, maxWidth: 700, margin: "0 auto 2rem" }}>
            Plagiarism removal is carried out by qualified and experienced researchers from the US &amp; UK
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/order" style={{ background: "#e87722", color: "#fff", padding: "0.75rem 2rem", borderRadius: 4, fontWeight: 700, textDecoration: "none" }}>Place an Order</a>
            <a href="/brochure" style={{ background: "transparent", color: "#fff", padding: "0.75rem 2rem", borderRadius: 4, fontWeight: 700, textDecoration: "none", border: "2px solid #fff" }}>Brochure</a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: "3rem 1rem", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            Have you completed writing your academic document...
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333" }}>
            Have you completed writing your academic document and looking for rephrasing your document? Is your Ph.D. Thesis just copy-pasting, do you want us to correct the document to ensure plagiarism free? Have you prepared your Master's dissertation but worried about copy pasting of the document? Is your document lack academic references? Looking for correcting the document just not for plagiarism but along with technical editing.
          </p>
        </div>
      </section>

      {/* Our Team */}
      <section style={{ padding: "3rem 1rem", background: "#f0f4ff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            Our team at Tutors India is well informed...
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333", marginBottom: "1.5rem" }}>
            Our team at Tutors India is well informed on the technique of removing plagiarism from your dissertation to give it a professional feel. We take your dissertation to the next level by working on the key areas where you are most likely to get stuck. There are various anti-plagiarism packages available with us for your needs. The process involves reviewing your dissertation or content and finding plagiarized areas using the anti-plagiarism software to detect the areas of plagiarism, and the removal is done as per your requirements.
          </p>
          <a href="/our-process" style={{ color: "#e87722", fontWeight: 700, textDecoration: "none" }}>Our Process →</a>
        </div>
      </section>

      {/* From Tutors India Editors */}
      <section style={{ padding: "3rem 1rem", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            Dissertation &amp; Manuscript Plagiarism correction from Tutors India Editors
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333" }}>
            Plagiarism refers to the act of 'appropriation of another person's language, ideas or other original (not common-knowledge), process, results, words without acknowledging its sources'. Plagiarism is considered as a serious of breach of ethics and therefore, no excuse will lessen the breach. In Universities, plagiarism is considered as a greater violation of academic integrity. The students or scholars will incur a penalty; that ranges from a lack of earning credit for the course or a failing grade with a high penalty, warning, suspension, loss of privileges, or expulsion.
          </p>
        </div>
      </section>

      {/* Tutors India Difference */}
      <section style={{ padding: "3rem 1rem", background: "#1a2a6c", color: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem", color: "#f9c74f" }}>
            Tutors India difference in dissertation &amp; manuscript plagiarism correction Service
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, opacity: 0.9 }}>
            At Tutors India we completely acknowledge the seriousness of plagiarism. Our plagiarism correction services do provide exclusive support for the students and scholars who pursue their Masters and Ph.D. in the prestigious universities. Our plagiarism correction service support is also extended to other international students with a non-native command of English as changes in discourse style in their dissertation and assignments is obvious.
          </p>
        </div>
      </section>

      {/* Authentic Genuine Prompt */}
      <section style={{ padding: "3rem 1rem", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            Dissertation plagiarism service at Tutors India is authentic, genuine, prompt and reliable.
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333" }}>
            We correct all errors and infelicities in grammar, syntax, and usage. Rewrite any wordy or convoluted patch. Ask for or supply definitions of terms likely to be new to readers. Verify and revise any facts that are incorrect. Query or fix faulty organization and gaps in logic.
          </p>
        </div>
      </section>

      {/* Deliverables custom written */}
      <section style={{ padding: "3rem 1rem", background: "#f0f4ff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            Our deliverables while you order custom written master's plagiarism removal service
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333" }}>
            Our dissertation plagiarism correction services from Tutors India research writing services is simply easy and straightforward. You will get the reply within 30 minutes which would enable to place your order quickly without any delay in submissions.
          </p>
        </div>
      </section>

      {/* What Services */}
      <section style={{ padding: "3rem 1rem", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "0.75rem" }}>
            What Services do we offer under plagiarism correction services?
          </h2>
          <p style={{ color: "#333", marginBottom: "2rem", lineHeight: 1.7 }}>
            We rewrite a complete document. Although it looks simple, but in practical, it's a tedious task to complete each and every step.
          </p>
          <div className="three-col-grid">
            {[
              {
                tier: "Basic",
                desc: "Developed based on the relevant sources, a reasonable attempt at finding an area that warrant research & evidence of an attempt to provide critical evaluation but mainly descriptive.",
              },
              {
                tier: "Advanced",
                desc: "Wide range of sources, a clear identification of research gap in the literature along with aim and research questions",
              },
              {
                tier: "Premium",
                desc: "Refers to a wide range of seminal research with throughout engagement using latest resources. A solid gap would be identified based on the current literature & justified thoroughly & Excellent critical analysis would be shown (upgradable)",
              },
            ].map((t) => (
              <div key={t.tier} style={{ border: "1px solid #dde4f0", borderRadius: 8, padding: "1.75rem", background: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                <h3 style={{ color: "#e87722", fontFamily: "'Merriweather',serif", fontSize: "1.15rem", marginBottom: "0.75rem" }}>{t.tier}</h3>
                <p style={{ color: "#333", lineHeight: 1.7 }}>{t.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <a href="/order" style={{ background: "#e87722", color: "#fff", padding: "0.75rem 2.5rem", borderRadius: 4, fontWeight: 700, textDecoration: "none", display: "inline-block" }}>ORDER NOW</a>
          </div>
        </div>
      </section>

      {/* Package Comparison */}
      <section style={{ padding: "3rem 1rem", background: "#f0f4ff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "2rem" }}>
            Service Package Comparison
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "#fff", borderRadius: 8, overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
              <thead>
                <tr style={{ background: "#1a2a6c", color: "#fff" }}>
                  <th style={{ padding: "0.85rem 1rem", textAlign: "left" }}>Feature</th>
                  <th style={{ padding: "0.85rem 1rem", textAlign: "center" }}>Basic</th>
                  <th style={{ padding: "0.85rem 1rem", textAlign: "center" }}>Advanced</th>
                  <th style={{ padding: "0.85rem 1rem", textAlign: "center" }}>Extended</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Number of Topics", "3 Topics", "1 topic", "1 topic"],
                  ["Word Count", "1000 words", "1000 words", "Included"],
                  ["Objectives", "✓", "✓", "✓"],
                  ["Literature Review", "✓", "✓", "✓"],
                  ["Research Gap", "✓", "✓", "✓"],
                  ["Expected Contribution", "✓", "✓", "✓"],
                  ["Research Methodology", "✓", "✓", "✓"],
                  ["Data Analysis Guidelines", "✓", "✓", "✓"],
                  ["References Lists", "✓", "✓", "✓"],
                  ["Bibliography (Additional reading)", "✓", "✓", "✓"],
                ].map(([feat, b, a, e], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f8f9ff" }}>
                    <td style={{ padding: "0.75rem 1rem", color: "#333", fontWeight: 500 }}>{feat}</td>
                    <td style={{ padding: "0.75rem 1rem", textAlign: "center", color: "#2563b0" }}>{b}</td>
                    <td style={{ padding: "0.75rem 1rem", textAlign: "center", color: "#2563b0" }}>{a}</td>
                    <td style={{ padding: "0.75rem 1rem", textAlign: "center", color: "#2563b0" }}>{e}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Specialized Subject Matter Expertise */}
      <section style={{ padding: "3rem 1rem", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            Specialized Subject Matter Expertise across the globe
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333", marginBottom: "2rem" }}>
            We offer topic Selection for Management, Social Science, Engineering, Technology, Life Science, Medical, Arts &amp; Literature / Linguistics, and much more
          </p>
          <div className="four-col-grid">
            {subjectAreas.map((s) => (
              <div key={s} style={{ background: "#f0f4ff", borderRadius: 6, padding: "0.75rem 1rem", color: "#1a2a6c", fontWeight: 500, fontSize: "0.9rem" }}>{s}</div>
            ))}
          </div>
          <div style={{ marginTop: "1.5rem" }}>
            <a href="/our-writers" style={{ color: "#e87722", fontWeight: 700, textDecoration: "none" }}>Our Writers →</a>
          </div>
        </div>
      </section>

      {/* Deliverables while order dissertation */}
      <section style={{ padding: "3rem 1rem", background: "#f0f4ff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            Our deliverables while you order dissertation plagiarism correction services
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333" }}>
            Our services from Tutors India research writing services is simply easy and straightforward. You will get the reply within 30 minutes which would enable to place your order quickly without any delay in submissions.
          </p>
        </div>
      </section>

      {/* How Does it work */}
      <section style={{ padding: "3rem 1rem", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            How Does it work?
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333" }}>
            After the order is confirmed, we allocate the special team to scrutinize the work regarding necessary availability requirements that would be essential to complete the work. Once the process is done, in case there are any queries, we ensure to ask during the initial stage of your work and send you the outline proposed for writing secondary data collection based dissertation. Once the outline along with the chapterization plan is approved, we will dispatch the work in chapters, and update you on the progress of your work. Our exclusive coordinators would get in touch with you to clarify any queries. You can also pay in installments and work will be started as soon as receive the payments. We deliver your work as per the schedule fixed and agreed or even before the schedule.
          </p>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: "3rem 1rem", background: "#1a2a6c", color: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem", color: "#f9c74f" }}>
            Dissertation &amp; Manuscript Plagiarism correction services features
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, opacity: 0.9, marginBottom: "2rem" }}>
            We edit or rewrite your complete Master's / Postgraduate dissertation and manuscript to ensure that your writing does represent your own assertions and abilities. At Tutors India, our writers are subject matter expertise who edit your complete dissertation to ensure the following:
          </p>
          <h3 style={{ color: "#e87722", fontFamily: "'Merriweather',serif", fontSize: "1.15rem", marginBottom: "0.75rem" }}>Text Plagiarism</h3>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, opacity: 0.9 }}>
            Paraphrase the content using our own words. We re-read the original article, summarize, digest and explain through our own words. We do this with much effort where the focus on content researched by different authors on the same topic and evaluate its limitations and strengths of their argument and rewrite the complete passage.
          </p>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, opacity: 0.9, marginTop: "1rem" }}>
            We avoid over-reliance of single source [Not more than 1%]
          </p>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, opacity: 0.9, marginTop: "1rem" }}>
            If there is a missing of Citation or source or reference, with your approval, we will include appropriate sources within the text, to acknowledge the contributions of others or their source of ideas. However, we will ensure that the source identified is scholarly (peer-reviewed) journal articles or textbook whichever may be appropriate (e.g. Logan, Walker, Cole, &amp; Leukefeld, 2000) Our plagiarism correction services does not allow Wikipedia, Blog and other unauthenticated sources for academic writing. We do much more than this for our client to ensure better grade and prevent from misconduct.
          </p>
        </div>
      </section>

      {/* Editing & Proofreading */}
      <section style={{ padding: "3rem 1rem", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            Editing &amp; Proofreading need to convince the Supervisory committee
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333", marginBottom: "1rem" }}>
            Proofreading is a basic and essential part of writing. After giving the outlines, revising and editing, proofreading is what gives a piece luster. A paper that is proofread is taken more seriously by your readers. At Tutors India, editing and proofreading go hand in hand. Our editors look for every possible change and give your work a professional touch.
          </p>
          <ul style={{ paddingLeft: "1.5rem", color: "#333", lineHeight: 2 }}>
            <li>Thorough spell checks and general formatting</li>
            <li>Checking for sentence fragments and run-on sentences.</li>
            <li>Checking for non-parallel structure, coordination, and subordination.</li>
          </ul>
        </div>
      </section>

      {/* Free Offers */}
      <section style={{ padding: "3rem 1rem", background: "#f0f4ff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            Free Offers along with your Master's part or chapter-wise Dissertation Writing Services
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333" }}>
            We deliver more than your expectation –Abstract or Executive Summary, Graphs &amp; Tables (redrawn), statistical analysis or textual analysis of data, SPSS / other software screen shots to ensure the process that we had carried out for doing the analyses Free Tutoring for the work being carried out – to speak confidently with your program supervisors &amp; SPSS output in Appendix.
          </p>
        </div>
      </section>

      {/* Exclusive Services */}
      <section style={{ padding: "3rem 1rem", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            Our Dissertation &amp; Manuscript Plagiarism correction services are exclusive
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333", marginBottom: "2rem" }}>
            as we do not just provide dissertation, but the rather clear explanation and justification for the content written
          </p>
          <div className="three-col-grid">
            {[
              { title: "Quality Assurance", body: "We ensure quality at every stage and the process." },
              { title: "Plagiarism Report", body: "We deliver the document after scanning for plagiarism" },
              { title: "Customer Interaction", body: "We interact with the customer at every stage in terms of amendments, query and delivery." },
            ].map((c) => (
              <div key={c.title} style={{ border: "1px solid #dde4f0", borderRadius: 8, padding: "1.5rem", textAlign: "center" }}>
                <h3 style={{ color: "#1a2a6c", fontFamily: "'Merriweather',serif", marginBottom: "0.5rem" }}>{c.title}</h3>
                <p style={{ color: "#555", lineHeight: 1.7 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section style={{ padding: "3rem 1rem", background: "#f0f4ff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            Why Choose Tutors India: Dissertation &amp; Manuscript Plagiarism correction services features
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333", marginBottom: "1.5rem" }}>
            Qualified researchers, unlimited revision, only peer-reviewed articles, plagiarism report, 24/7 support, 100% match with the requirement and on time delivery
          </p>
          <a href="/our-guarantees" style={{ color: "#e87722", fontWeight: 700, textDecoration: "none" }}>Our Guarantees →</a>
        </div>
      </section>

      {/* Secure & Confidential */}
      <section style={{ padding: "3rem 1rem", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            A complete secure &amp; Confidential Service
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333" }}>
            We offer 100% confidentiality of client's personal details, payment details, project works, and copyrights of research works. We ensure following for the conditionality, security &amp; privacy: 1) All your projects are given unique reference codes 2) Documents are accessed only writers who signed NDA with Tutors India 3) Your financial information is protected b 128-bit secure socket layer (SSL) encryption.
          </p>
        </div>
      </section>

      {/* Fully Referenced */}
      <section style={{ padding: "3rem 1rem", background: "#f0f4ff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            Fully Referenced
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333" }}>
            Our dissertation work is fully referenced with latest articles and textbooks. We refer only peer-reviewed sources such as scholarly articles and textbook to select the topic. We refer database including Web of Science, ProQuest, Google Scholar, Business Source Complete, and latest newspapers articles such as Economic Times, Forbes, The Wall Street, The Economics to identify the industrial problem.
          </p>
        </div>
      </section>

      {/* Our Guarantees */}
      <section style={{ padding: "3rem 1rem", background: "#1a2a6c", color: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.5rem", color: "#f9c74f" }}>
            Our Guarantees
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, opacity: 0.9 }}>
            (1) Unlimited Revision for the work being committed. (2) We ensure on-time delivery (3) We support 24/7. (4) Our word count committed does not include references and bibliography &amp; help you to locate the sources cited (5) Ensure three-level quality check including Technical QC, Editor QC and final check against the requirement (6) Confidentiality of the information (7) Plagiarism free work – less than 5% percent. (8) Only experienced and subject specific writers will be allotted.
          </p>
        </div>
      </section>

      {/* Plagiarism Free Work */}
      <section style={{ padding: "3rem 1rem", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            Plagiarism Free Work
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333" }}>
            We are aware of the consequences of plagiarism. Hence, topic selection is completely plagiarism Free. Our work is scanned against online sources in a similar way like WriteCheck or Turnitin. We wanted to ensure that our clients i.e., researchers and students are not finding any issues with regards to plagiarism and so we issue plagiarism-free certificate*. Our streamlined and high-quality research writing process ensures your dissertation is not just copy-pasted, but written only after brainstorming sessions with our team of professional researchers.
          </p>
        </div>
      </section>

      {/* On Time */}
      <section style={{ padding: "3rem 1rem", background: "#f0f4ff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            On Time
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333" }}>
            Our work is delivered at a specified date and time. Our specific changes to the delivered work will be carried out within 45 days of delivery. We guarantee delivery of minor changes within 24 working hours and significant changes within 48 working hours. We acknowledge all your emails within 30 minutes of working hours. Further any delay in the delivery can be raised at customersupport@tutorsindia.com
          </p>
        </div>
      </section>

      {/* Experienced Writers */}
      <section style={{ padding: "3rem 1rem", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            Experienced Writers
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333" }}>
            Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities from India, the US, and the UK. We identify the perfect SME according to your subject and area. Expert is selected through a stringent selection process including the signing of non-disclosure and confidentiality agreement. You can be very sure about the quality of the work since expert writer is identified as per International Research Experience
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ padding: "3rem 1rem", background: "#f0f4ff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.5rem" }}>
            Frequently Asked Questions
          </h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* Subject Matter Expertise / Writers */}
      <section style={{ padding: "3rem 1rem", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.25rem" }}>
            Your Dissertation &amp; Manuscript Plagiarism correction is carried out by your choice of Subject Matter Expertise
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333", marginBottom: "1.25rem" }}>
            We have a team of 2000+ expertise across the subjects &amp; countries (including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine)
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#333" }}>
            Tutors India has capability and skills to handle subjects across the field. We chose qualified and experienced subject specific expertise while you order your Ph.D. or Master's dissertation. We have more than 2000+ expertise working across the world who can handle arts, literature, sciences, engineering or medicine.
          </p>
          <div style={{ marginTop: "1.5rem" }}>
            <a href="/our-writers" style={{ color: "#e87722", fontWeight: 700, textDecoration: "none" }}>Our writers →</a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: "3rem 1rem", background: "#f0f4ff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", color: "#1a2a6c", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", marginBottom: "1.5rem" }}>
            Voice of Our customer
          </h2>
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* Order Now CTA */}
      <section style={{ padding: "3rem 1rem", background: "#1a2a6c", color: "#fff", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Merriweather',serif", fontSize: "clamp(1.2rem,2.5vw,1.8rem)", marginBottom: "1rem", color: "#f9c74f" }}>
            Order Now
          </h2>
          <p style={{ fontSize: "1.1rem", opacity: 0.9, marginBottom: "2rem" }}>
            Invest in your career by availing language editing help from the UK &amp; the US Qualified researchers
          </p>
          <a href="/order" style={{ background: "#e87722", color: "#fff", padding: "0.85rem 2.5rem", borderRadius: 4, fontWeight: 700, textDecoration: "none", fontSize: "1rem" }}>Order Now</a>
        </div>
      </section>
    </>
  );
}
