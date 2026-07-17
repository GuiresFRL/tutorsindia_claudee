import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "Medical Writing & Manuscript Services",
  description: "Expert medical dissertation, research paper and manuscript writing, rewriting & editing services by qualified researchers from US & UK. Academic & Education.",
  alternates: { canonical: "https://www.tutorsindia.com/our-services/publication-support/medical-writing/" },
};

const faqs = [
  {
    q: "How does the \"Medical Writing services\" at Tutors India work?",
    a: "Once the order is confirmed, our expertise starts working on your medical manuscript. The writer may ask you for more information, if required. We regularly interact with the clients during the course of medical writing either E-mail or CRM software.",
  },
  {
    q: "If I am not satisfied with your medical writing, how do you address the issues?",
    a: "At tutors India, 100% customer satisfaction is our motto so it is a very rare event but however we provide the guarantee of the unlimited revisions so you need to worry about it.",
  },
  {
    q: "Do I need to provide any outline?",
    a: "Yes, we appreciate if you provide a rough outline through email. Since you have a spent a more time doing research works so you have some insights about the topic will help to reflect your complete medical writing manuscript designed based on your ideas.",
  },
  {
    q: "Will you format the manuscript after medical writing?",
    a: "Of course, we format the medical writing journal manuscript based on the author guidelines requirement. At time of order confirmation, you need to get the additional formatting services for medical writing.",
  },
  {
    q: "How long will it take to complete my medical writing assignment?",
    a: "Turnaround is determined after discussing project specifics directly with writers; standard structures are available through pricing plans.",
  },
  {
    q: "What if I require some customization in the medical writing we deliver?",
    a: "Our service is completely flexible and tailor made to the customer. Hence, if you can provide the areas of customization related to research area initially proposed, we can make amendments in the medical writing manuscript.",
  },
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

const testimonials = [
  { quote: "Tutors India is a skilled and experienced medical writing service that can deliver high-quality work quickly and consistently.", author: "Brinda" },
  { quote: "I have defended my research few days ago and scored a very good.", author: "Bryan", location: "Australia" },
  { quote: "Topic selection was extraordinary, my professor approved on the first go.", author: "C S", location: "Sheffield, UK" },
];

export default function MedicalWritingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
              <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}
              <Link href="/our-services/publication-support/" style={{ color: "#a0b8e0" }}>Publication Support</Link>{" / "}
              <span style={{ color: "#fff" }}>Medical Writing</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.4rem,3vw,2rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              Medical Dissertation, Research Paper &amp; Manuscript Writing, Rewriting &amp; Editing Services – Academic &amp; Education
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Exclusive Service for Students, Authors &amp; Publishers. Expert medical writing by qualified researchers from the US &amp; UK.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "20px" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/samples/publication-research.jpg" alt="Medical Writing Services" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>2000+ Experts<br />US &amp; UK Researchers<br />All Medical Specialties</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      {/* Qualified Researchers */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Your Medical Research is written by qualified and experienced researchers from the US &amp; UK</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          Most medical students, fellows, and residents find writing a scientific medical manuscript challenging than working gruelling hours on the clinical service. The service addresses challenges in manuscript writing, statistical analysis, and publication success rates for medical professionals pursuing MD/DM degrees.
        </p>
      </section>

      {/* Tutors India Difference */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Tutors India Difference in Medical Dissertation, Research Paper, Manuscript Writing, Rewriting &amp; Editing Services</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            Most medical students, fellows, and residents find writing a scientific medical manuscript challenging than working gruelling hours on the clinical service. The service addresses challenges in manuscript writing, statistical analysis, and publication success rates for medical professionals pursuing MD/DM degrees.
          </p>
        </div>
      </section>

      {/* Unique Topic Selection */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Unique &amp; Innovative Topic Selection based on the recent trends</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          Every medical dissertation or thesis is written with the expertise views and sometimes assisted with our Ph.D. researcher&apos;s own research and findings. Nothing comes as a readymade work. The team provides fresh research on each topic with comprehensive support across multiple medical specialties including cardiology, oncology, public health, and pharmacology.
        </p>
      </section>

      {/* Writing & Rewriting */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Medical Dissertation &amp; Manuscript Writing &amp; Rewriting</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            We write complete medical writing from the introduction to recommendations. Although it looks simple, but in practical, it&apos;s a tedious task to complete each and every step.
          </p>
        </div>
      </section>

      {/* Simply Easy */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Medical Dissertation &amp; Manuscript Writing &amp; Rewriting - Simply easy &amp; Straightforward</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          Just send us your medical topic along with the deadline and see the results that are far justified and mark the success of your dissertation. Reply within 30 minutes of order placement.
        </p>
      </section>

      {/* Service Tiers */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "24px" }}>What Services do we offer under Medical Dissertation &amp; Manuscript Writing &amp; Rewriting?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "22px" }} className="three-col-grid">
            {[
              {
                tier: "Basic",
                items: [
                  "3 Topics (Topic Selection based on area of interest)",
                  "1000 words",
                  "Objectives",
                  "Literature Review",
                  "Research Gap",
                  "Expected Contribution",
                  "Research Methodology",
                  "Data Analysis Guidelines",
                  "References Lists",
                  "Bibliography (Additional reading)",
                ],
              },
              {
                tier: "Advanced",
                items: [
                  "1 topic",
                  "1000 words",
                  "Objectives",
                  "Literature Review",
                  "Research Gap",
                  "Expected Contribution",
                  "Research Methodology",
                  "Data Analysis Guidelines",
                  "References Lists",
                  "Bibliography",
                ],
              },
              {
                tier: "Premium",
                items: [
                  "1 topic",
                  "Wide range of seminal research with thorough engagement using latest resources",
                  "Solid gap identification based on current literature",
                  "Excellent critical analysis (upgradable)",
                ],
              },
            ].map((t) => (
              <div key={t.tier} style={{ background: t.tier === "Advanced" ? "#1a2a6c" : "#fff", color: t.tier === "Advanced" ? "#fff" : "#333", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px" }}>
                <div style={{ fontSize: "1.1rem", fontWeight: 800, color: t.tier === "Advanced" ? "#f9c74f" : "#e87722", marginBottom: "16px" }}>{t.tier}</div>
                {t.items.map((item) => (
                  <div key={item} style={{ display: "flex", gap: "8px", padding: "5px 0", borderBottom: t.tier === "Advanced" ? "1px solid rgba(255,255,255,0.1)" : "1px solid #eef0f7", fontSize: "0.85rem", color: t.tier === "Advanced" ? "#c5d5f0" : "#555" }}>
                    <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <style>{`@media(max-width:768px){.three-col-grid{grid-template-columns:1fr!important;}}`}</style>
        </div>
      </section>

      {/* Subject Matter Expertise */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px" }}>Specialized Subject Matter Expertise across the globe</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {[
            "AIDS","Cardiology","ENT","Infertility","Obstetrics & Gynaecology","Pharmacology","Stem Cell Research",
            "Anaemia","Clinical Trials","Fever","Interventional Cardiology","Ophthalmology","Psychiatry","Surgery",
            "Antibiotics","Diabetes","Gastroenterology","Musculoskeletal Disorders","Orthopaedics","Reproductive medicine",
            "Vaccination","Cancer","Elder Care Options","Herbal Medicines","Nutrition","Paediatrics","Skin Disorders",
            "Medicine & Healthcare","Biological & Life Sciences","Public Health","Biochemistry","Microbiology",
            "Nutrition/Food-based Clinical Trials","Genetics","Ayurveda, Homeopathy, Siddha, Unani",
            "Biomedical, Biotechnology, Bioinformatics","Physiology","Oncology","Non-communicable diseases",
          ].map((s) => (
            <span key={s} style={{ background: "#f0f4ff", border: "1px solid #c5d5f0", borderRadius: "20px", padding: "6px 16px", fontSize: "0.83rem", color: "#1a2a6c", fontWeight: 600 }}>{s}</span>
          ))}
        </div>
      </section>

      {/* Deliverables */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our deliverables while you order medical manuscript &amp; dissertation writing &amp; editing services</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            We deliver more than your expectation – ensure to provide the proper context, delimit the boundary condition, cite landmark studies, accurately present the theoretical framework &amp; empirical contribution. Comprehensive delivery includes clear citations, coherent arguments, and specific formatting (APA or alternatives).
          </p>
        </div>
      </section>

      {/* How Does it Work */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: "32px", textAlign: "center" }}>How Does it work?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "22px" }} className="three-col-grid">
            {[
              { step: "01", title: "Order Confirmation & Team Allocation", desc: "After order confirmed, special team scrutinizes work regarding necessary availability requirements." },
              { step: "02", title: "Initial Queries & Outline", desc: "If queries exist, they are asked during initial stage. Outline proposed for writing secondary data collection based dissertation." },
              { step: "03", title: "Client Approval", desc: "Outline along with chapterization plan is approved by client." },
              { step: "04", title: "Chapter-by-Chapter Delivery", desc: "Work dispatched in chapters with progress updates provided." },
              { step: "05", title: "Coordination & Clarification", desc: "Exclusive coordinators contact client to clarify queries; installment payment option available (work begins upon receipt)." },
              { step: "06", title: "Final Delivery & Revisions", desc: "Work delivered per agreed schedule (often ahead of schedule). Specific changes within 45 days post-delivery. Minor changes within 24 working hours; significant changes within 48 working hours. All emails acknowledged within 30 minutes of working hours." },
            ].map((s) => (
              <div key={s.step} style={{ background: "rgba(255,255,255,0.07)", borderRadius: "10px", padding: "22px" }}>
                <div style={{ fontSize: "2rem", fontWeight: 800, color: "#f9c74f", marginBottom: "8px" }}>{s.step}</div>
                <div style={{ fontWeight: 700, marginBottom: "8px", fontSize: "0.95rem" }}>{s.title}</div>
                <div style={{ fontSize: "0.83rem", color: "#a0b8e0", lineHeight: 1.7 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px" }}>Medical Dissertation &amp; Manuscript Writing, Rewriting &amp; Editing Service features</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "16px" }} className="four-col-grid">
          {["Qualified researchers","Unlimited revision","Only peer-reviewed articles","Plagiarism report","24/7 support","100% match with the requirement","On time delivery","Subject specific writers"].map((f) => (
            <div key={f} style={{ background: "#f5f6fa", border: "1px solid #dde2ef", borderRadius: "8px", padding: "16px", textAlign: "center", fontSize: "0.85rem", color: "#1a2a6c", fontWeight: 600 }}>
              <span style={{ display: "block", fontSize: "1.4rem", color: "#e87722", marginBottom: "6px" }}>★</span>
              {f}
            </div>
          ))}
        </div>
        <style>{`@media(max-width:768px){.four-col-grid{grid-template-columns:1fr 1fr!important;}}`}</style>
      </section>

      {/* Manuscript Requirements */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px" }}>Manuscript Medical Thesis requirements</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "12px" }} className="four-col-grid">
            {[
              "Title page","Abstract","Introduction/Background","Materials and Methods",
              "Setting, Sample","Inclusion and Exclusion criteria","Measurement/Tools",
              "Predictors/Independent variables","Outcome/Dependent variables",
              "Analysis of Data","Results","Discussion","Limitations","References","Tables & Graphs",
            ].map((item) => (
              <div key={item} style={{ background: "#fff", border: "1px solid #c5d5f0", borderRadius: "8px", padding: "12px 16px", fontSize: "0.85rem", color: "#1a2a6c", fontWeight: 600 }}>
                <span style={{ color: "#e87722", marginRight: "6px" }}>✓</span>{item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editing Features */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Editing features</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          We also help you in the preparation of writing proposal, dissertation, manuscript editing &amp; Writing, data collection, research methodology. Services encompass prospective studies, clinical trials, statistical analysis (regression, logistic regression), results discussion, and peer review support.
        </p>
      </section>

      {/* Extended Services */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px" }}>We also extend our services to:</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "12px" }} className="three-col-grid">
            {[
              "Medical information letters","Patient education material","Physician education material",
              "Salesforce training material","Newsletters","Scientific presentations",
              "Document repurposing","Research support for product launches","Literature searches",
              "Editorial support","Fact-checking","Formatting to style requirements",
              "Graphic support","Consultation on data collection and experimental trials",
              "Clinical trials guidance","Epidemiology support","Poster presentation preparation","Peer review support",
            ].map((item) => (
              <div key={item} style={{ background: "#fff", border: "1px solid #c5d5f0", borderRadius: "8px", padding: "12px 16px", fontSize: "0.85rem", color: "#555" }}>
                <span style={{ color: "#e87722", marginRight: "6px", fontWeight: 700 }}>→</span>{item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Convince Committee */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Medical Dissertation, Manuscript and Research paper need to convince the Supervisory &amp; editorial committee</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          We write complete medical dissertation from the introduction to recommendations including time planning. Expertise in meta-analysis, systematic reviews, secondary data analysis, and reflection-based dissertations.
        </p>
      </section>

      {/* What We Deliver */}
      <section style={{ background: "#f0f4ff", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>What We deliver while your order for Medical Manuscript &amp; Dissertation Writing</h2>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            We deliver more than your expectation – ensure to provide the proper context, delimit the boundary condition, cite landmark studies, accurately present the theoretical framework &amp; empirical contribution. Comprehensive delivery includes clear citations, coherent arguments, and specific formatting (APA or alternatives).
          </p>
        </div>
      </section>

      {/* Exclusive */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Our custom master&apos;s dissertation part or chapter-wise writing &amp; editing service is exclusive</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          We do not just provide medical writing service, but the rather clear explanation and justification for the choice. Chapter-wise or part-wise writing with detailed reasoning.
        </p>
      </section>

      {/* Why Choose */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: "24px", textAlign: "center" }}>Why Choose Tutors India: medical dissertation &amp; manuscript writing service features</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "16px" }} className="four-col-grid">
            {[
              { icon: "🎓", title: "Qualified researchers from US & UK", desc: "Expert writers with international university degrees." },
              { icon: "♾️", title: "Unlimited revisions", desc: "Revisions until you are 100% satisfied." },
              { icon: "📚", title: "Peer-reviewed sources only", desc: "All references from peer-reviewed journals." },
              { icon: "📋", title: "Plagiarism reports provided", desc: "Turnitin/WriteCheck reports provided with every order." },
              { icon: "🕐", title: "24/7 support", desc: "Round-the-clock support via email and CRM." },
              { icon: "✅", title: "100% requirement matching", desc: "Work tailored to your exact specifications." },
              { icon: "⏰", title: "On time delivery", desc: "Delivered on or before the agreed deadline." },
              { icon: "👨‍🔬", title: "Subject specific writers", desc: "Only writers with relevant medical domain expertise assigned." },
            ].map((g) => (
              <div key={g.title} style={{ background: "rgba(255,255,255,0.07)", borderRadius: "10px", padding: "20px" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{g.icon}</div>
                <div style={{ fontWeight: 700, fontSize: "0.94rem", marginBottom: "6px" }}>{g.title}</div>
                <div style={{ fontSize: "0.78rem", color: "#a0b8e0", lineHeight: 1.6 }}>{g.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Confidentiality + References */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px" }} className="two-col-grid">
          <div style={{ background: "#f5f6fa", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px" }}>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.15rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>A complete secure &amp; Confidential Service</h2>
            <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.96rem" }}>
              100% confidentiality of client&apos;s personal details, payment details, project works, and copyrights of research works. Documents accessed only by NDA-signed writers; 128-bit SSL encryption protects financial information.
            </p>
          </div>
          <div style={{ background: "#f5f6fa", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px" }}>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.15rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Fully Referenced</h2>
            <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.96rem" }}>
              Our dissertation work is fully referenced with latest articles and textbooks. Only peer-reviewed sources used; databases include Web of Science and ProQuest.
            </p>
          </div>
        </div>
        <style>{`@media(max-width:768px){.two-col-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* Guarantees */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "32px", textAlign: "center" }}>Our Guarantees</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "18px" }} className="four-col-grid">
            {[
              { icon: "♾️", title: "Unlimited Revision", desc: "Unlimited revision for the work being committed." },
              { icon: "⏰", title: "On-Time Delivery", desc: "Our work is delivered at a specified date and time." },
              { icon: "🕐", title: "Support 24/7", desc: "Round-the-clock support for all client queries." },
              { icon: "📄", title: "Word Count Committed", desc: "Word count does not include references and bibliography & help you to locate the sources cited." },
              { icon: "✅", title: "Three-Level Quality Check", desc: "Technical QC, Editor QC, and requirement check." },
              { icon: "🔒", title: "Confidentiality", desc: "Confidentiality of all personal and project information." },
              { icon: "📋", title: "Plagiarism Free", desc: "Plagiarism free work – less than 5% percent." },
              { icon: "🎓", title: "Experienced Writers", desc: "Only experienced and subject specific writers assigned." },
            ].map((g) => (
              <div key={g.title} style={{ background: "#fff", border: "1px solid #c5d5f0", borderRadius: "10px", padding: "20px", textAlign: "center" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{g.icon}</div>
                <div style={{ fontWeight: 700, color: "#1a2a6c", marginBottom: "6px", fontSize: "0.94rem" }}>{g.title}</div>
                <div style={{ fontSize: "0.78rem", color: "#555", lineHeight: 1.6 }}>{g.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plagiarism / On Time / Experienced Writers */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "22px" }} className="three-col-grid">
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Plagiarism Free Work</h3>
            <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.7 }}>
              We are aware of the consequences of plagiarism. Hence, topic selection is completely plagiarism free. Work scanned via WriteCheck or Turnitin; plagiarism-free certificate issued.
            </p>
          </div>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>On Time</h3>
            <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.7 }}>
              Our work is delivered at a specified date and time. Minor changes within 24 hours; significant changes within 48 hours; emails acknowledged within 30 minutes.
            </p>
          </div>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Experienced Writers</h3>
            <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.7 }}>
              Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities from India, the US, and the UK.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "20px" }}>Frequently Asked Questions</h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* Global Team */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Your medical manuscript &amp; dissertation is written by your choice of Subject Matter Expertise</h2>
        <p style={{ color: "#555", lineHeight: 1.8 }}>
          We have a team of 2000+ expertise across the subjects &amp; countries (including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine).
        </p>
      </section>

      {/* Testimonials */}
      <section style={{ background: "#f0f4ff", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "24px", textAlign: "center" }}>Voice of Our customer</h2>
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Order Now</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>Reply in 30 Minutes · US &amp; UK Researchers · Plagiarism Free · Unlimited Revisions</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
