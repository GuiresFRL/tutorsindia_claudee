import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions",
  description: "Get answers to frequently asked questions about Tutors India's academic writing, dissertation, statistical analysis and editing services.",
};

const faqSections = [
  {
    category: "General Queries & Trust",
    icon: "🏆",
    faqs: [
      { q: "Why should I trust Tutors India?", a: "Tutors India is a registered academic services company based in Sheffield (UK) and Dallas (US), operating since 2001. We have guided more than 4,500 PhD scholars and 10,500 Masters students across the globe. Our team consists of PhD-qualified writers, NDA-signed researchers, and subject matter experts from top international universities. We provide unlimited free revisions, plagiarism-free guarantees with Turnitin certificates, and 100% confidentiality." },
      { q: "How do I know my work will be kept confidential?", a: "Once you have placed an order with us, it's safe with us. We maintain the confidentiality you expect. Your identity is never disclosed to third parties without your approval. All writers sign Non-Disclosure Agreements. Your projects are given unique reference codes. Documents are accessed only by writers who signed NDAs. Financial information is protected by 128-bit SSL encryption. Your data is retained for 6 months only and research works are never reused or resold." },
      { q: "Do you guarantee plagiarism-free work?", a: "Yes. We guarantee less than 5% or 0% plagiarism on all work. All documents are scanned using Turnitin (or WriteCheck) before delivery and a plagiarism-free certificate is provided with every order. Our streamlined, high-quality research writing process ensures your dissertation is not copy-pasted, but written only after brainstorming sessions with our team of professional researchers." },
      { q: "Are there unlimited revisions?", a: "Yes. We provide unlimited revisions as per the initial commitment which is completely free of cost even after the project is completed. We firmly believe that every researcher has a different perception and we respect your feedback and comments to improve the research quality. Minor changes are completed within 24 working hours and significant changes within 48 working hours." },
    ],
  },
  {
    category: "Ordering & Payment",
    icon: "💳",
    faqs: [
      { q: "How do I place an order?", a: "To place an order: (1) Fill out our enquiry form with your requirements including topic, word count, deadline, and university guidelines. (2) Receive a reference number and quote within 30 minutes. (3) Confirm payment — we accept credit/debit cards, bank transfers, Western Union, and other payment methods. (4) Work begins within a couple of days after receiving your order. (5) Receive chapter-by-chapter delivery through our CRM portal." },
      { q: "What payment methods do you accept?", a: "We accept multiple payment methods including credit/debit cards (Visa, Mastercard, American Express), bank transfers, Western Union, PayPal, and other payment gateways. Payment can be made in GBP, USD, INR, AED, and other major currencies. Instalment payment options are also available for larger projects." },
      { q: "Can I get a refund if I am not satisfied?", a: "We do not offer refunds because we provide unlimited free revisions until you are 100% satisfied. If you are not satisfied with the work, share specific feedback about what needs to change and our writers will revise accordingly at no additional charge. This unlimited revision policy means you always get the quality you need without requiring a refund." },
      { q: "How quickly will I receive a quote?", a: "You will receive a reply within 30 minutes during business hours, which enables you to place your order quickly without any delay. For urgent requirements, please call us directly at +44-1143520021 (UK) or +91 8754446690 (India) for an immediate response. We are available 24/7 for urgent enquiries." },
    ],
  },
  {
    category: "Services & Quality",
    icon: "✅",
    faqs: [
      { q: "What services does Tutors India provide?", a: "Tutors India provides: Masters Dissertation Writing (topic, proposal, full dissertation, part dissertation, resit, statistical analysis, poster presentation, UG dissertation, CV writing); PhD/DBA Dissertation Writing; Coursework Writing (essays, assignments, annotated bibliography, reflective reports, literature review, research methodology); Publication Support (manuscript development, conference papers, medical writing, biostatistics, statistical services); Development (coding, software, big data, animation, web solutions, e-learning); Editing Services (language editing, technical editing, plagiarism reports, transcription, translation, citation compliance, formatting, scientific editing, grant proposals, peer review)." },
      { q: "How do I know if the assigned writer is qualified?", a: "All our writers hold PhD or Masters degrees from top UK and US universities including Harvard School, Oxford, London School of Business, and the University of Birmingham. Expert is selected through a stringent selection process including the signing of non-disclosure and confidentiality agreements. We identify the perfect Subject Matter Expert (SME) according to your subject and area. You can be very sure about the quality since expert writers are identified as per international research experience." },
      { q: "What is the quality assurance process?", a: "We have a three-level quality check process: (1) Technical QC — subject matter expert reviews the technical accuracy, methodology, and academic content; (2) Editor QC — language and grammar editor reviews for writing quality, clarity, and style; (3) Final check against requirements — the completed work is verified against your original brief, university guidelines, and marking rubric before delivery. Additionally, all work is scanned for plagiarism using Turnitin." },
      { q: "Can I communicate directly with my writer?", a: "Yes. You can communicate directly with your writer via phone and WhatsApp. You can also come directly to our office with a prior appointment so that we can discuss and clarify your doubts. We assign dedicated coordinators for each project who serve as your primary point of contact and facilitate direct communication with writers when needed." },
    ],
  },
  {
    category: "Dissertation & Research",
    icon: "📚",
    faqs: [
      { q: "Which subject areas does Tutors India cover?", a: "We cover all major academic disciplines including: Arts & Humanities, Biological Sciences, Business & Management Studies, Marketing & Communication, Engineering & Technology, Natural Sciences & Mathematics, Economics & Administration, Humanities & Social Science, Law, Medicine & Health, Education & Training, Journalism & Media, Agriculture & Forestry, Computer Science & IT, Hospitality, Leisure & Sports, and many more specialised areas." },
      { q: "What universities do you work with?", a: "We work with students from universities across the UK, US, Australia, Canada, New Zealand, Germany, France, and many more countries. Our writers are familiar with the specific academic standards, formatting requirements, and assessment criteria of universities including Oxford, Cambridge, Imperial College, London Business School, Edinburgh, Manchester, Birmingham, Sydney, Melbourne, Harvard, MIT, and thousands of other universities worldwide." },
      { q: "Do you provide primary data collection?", a: "Yes. Tutors India has exclusive custom data collection services to gather useful information in various domains. We make sure the research work is ethical with primary data, needs to be original with novelty. We collect primary data at an additional cost — services include data collection using telephone interviews, market surveys, focus group discussion sessions, and questionnaires." },
      { q: "What statistical software do you use?", a: "We use a comprehensive range of statistical software including SPSS, SPSS AMOS, SAS, R, STATA, E-Views, Minitab, SYSTAT, Epi-Info, Excel for quantitative analysis, and NVIVO, Atlas-ti, MAXQDA, Wordstat, T-lab, and TextPack for qualitative analysis. We select the most appropriate tool based on your research design and university requirements. Express statistical analysis (4–6 hour turnaround) is also available." },
    ],
  },
  {
    category: "Deadlines & Delivery",
    icon: "⏱",
    faqs: [
      { q: "Can you work to tight deadlines?", a: "Yes. We can work to very short deadlines depending on the scope of the project. For a Masters dissertation, the minimum feasible deadline is typically 5–7 days. Individual chapters can be completed within 24–48 hours. Statistical analysis can be completed within 4–6 hours for express service. Contact us immediately with your deadline for an accurate feasibility assessment — we will always be honest about what is achievable." },
      { q: "How does the delivery process work?", a: "Once your order is confirmed: (1) We allocate a specialist team within 24 hours. (2) We send initial queries and proposed outline for your approval. (3) We dispatch the work chapter-by-chapter with progress updates. (4) You can review each chapter and provide feedback before we proceed. (5) Quality checks are completed (Technical QC, Editor QC, plagiarism scan). (6) Final work is delivered through our CRM portal with email and SMS notifications. (7) Unlimited free revisions available after delivery." },
      { q: "What if my deadline changes?", a: "Please contact us as soon as possible if your deadline changes. If you need earlier delivery, we will assess feasibility and advise accordingly — additional charges may apply for very urgent changes. If you need a later deadline, simply let us know and we can adjust accordingly. Our coordinators are available 24/7 to handle scheduling changes." },
      { q: "Do you deliver internationally?", a: "Yes. We serve students worldwide and deliver all work digitally through our CRM portal, email, or Google Drive/Dropbox. There are no geographical limitations — we serve students in the UK, US, Australia, UAE, India, Singapore, Malaysia, and virtually every country. Physical delivery is also available on request for UK clients." },
    ],
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqSections.flatMap(s => s.faqs).map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  }))
};

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<span style={{ color: "#fff" }}>FAQ</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.6rem,3vw,2.2rem)", marginBottom: "14px" }}>Frequently Asked Questions</h1>
            <p style={{ color: "#c5d5f0", fontSize: "1.05rem", marginBottom: "8px" }}>Everything you need to know about Tutors India&apos;s services</p>
            <p style={{ color: "#a0b8e0", fontSize: "0.92rem", lineHeight: 1.7, maxWidth: "650px" }}>Find answers to the most common questions about our academic writing, dissertation support, statistical analysis, and editing services. Can&apos;t find your answer? Contact us and we&apos;ll respond within 30 minutes.</p>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/samples/dissertation-samples.webp" alt="Academic experts collaborating" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>30 min<br />Response Time<br />24/7 Support</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>
        {faqSections.map(section => (
          <div key={section.category} style={{ marginBottom: "48px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <span style={{ fontSize: "1.8rem" }}>{section.icon}</span>
              <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c" }}>{section.category}</h2>
            </div>
            <FaqAccordion faqs={section.faqs} />
          </div>
        ))}

        {/* Contact CTA */}
        <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "36px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "10px" }}>Still Have Questions?</h2>
          <p style={{ color: "#c5d5f0", fontSize: "0.95rem", marginBottom: "22px" }}>Our team is available 24/7. Contact us and we&apos;ll respond within 30 minutes.</p>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap", marginBottom: "16px" }}>
            <a href="tel:+441143520021" style={{ color: "#f9c74f", fontWeight: 600, fontSize: "0.95rem" }}>📞 +44-1143520021 (UK)</a>
            <a href="tel:+918754446690" style={{ color: "#f9c74f", fontWeight: 600, fontSize: "0.95rem" }}>📞 +91 8754446690 (India)</a>
            <a href="mailto:info@tutorsindia.com" style={{ color: "#f9c74f", fontWeight: 600, fontSize: "0.95rem" }}>✉ info@tutorsindia.com</a>
          </div>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact-us/" style={{ padding: "10px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
            <Link href="/order-now/" style={{ padding: "10px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Place an Order</Link>
          </div>
        </div>
      </section>
    </>
  );
}
