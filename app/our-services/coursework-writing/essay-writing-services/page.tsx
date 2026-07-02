import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "Custom Essay Writing Services UK & UAE | Masters & MBA",
  description: "Custom Essay Writing Services for Academic Success in the UK and UAE. Masters, MBA, PhD level essays by expert UK & US writers. Plagiarism-free, unlimited revisions.",
};

const essayIncludes = [
  { icon: "📝", title: "Introduction", desc: "Clearly states the topic, objectives, and scope of the essay. Engages the reader and sets the context for the argument that follows." },
  { icon: "🔬", title: "Main Body", desc: "Organised with critical thinking, substantiated by evidence from peer-reviewed sources. Logical structure with smooth paragraph transitions." },
  { icon: "📊", title: "Critical Analysis", desc: "Deep research, analytical discussion, and evidence-based arguments that demonstrate postgraduate-level knowledge of the subject area." },
  { icon: "📚", title: "References & Bibliography", desc: "Fully formatted and cited according to your university's required style — Harvard, APA, MLA, Chicago, Vancouver, or Turabian." },
];

const qaBoxes = [
  { img: "/images/qa/essay.webp", title: "Custom Written Essays", desc: "Enjoy custom-made essays written exclusively keeping in mind your university guidelines.", href: "/our-sample-works/" },
  { img: "/images/qa/Quality-Assurance-2024.webp", title: "Quality Guarantee", desc: "All essays are checked for quality so that you receive an error-free paper.", href: "/guarantees/" },
  { img: "/images/qa/Plagiarism-Report-2024.webp", title: "Originality Reports", desc: "All papers are checked for plagiarism and delivered only after passing all checks.", href: "/guarantees/" },
  { img: "/images/qa/Customer-Interaction-2024.webp", title: "Student Assistance", desc: "Maintain constant communication with our academic experts at any stage of the assignment.", href: "/contact-us/" },
];

const serviceTiers = [
  { tier: "Basic", color: "#2563b0", desc: "Essays constructed out of quality academic sources, showing knowledge on the topic and basic critical analysis.", includes: ["Quality academic sources", "Topic knowledge demonstrated", "Basic critical analysis", "Proper referencing", "Standard structure"] },
  { tier: "Advanced", color: "#1a2a6c", desc: "Extensive research and literature with identification of the core issues and good analysis according to university standards.", includes: ["Extensive research", "Core issue identification", "Good analysis", "University standard writing", "Full referencing"] },
  { tier: "Premium", color: "#e87722", desc: "Conscientious academic writing including complex critical analysis and evidence-based arguments that meet the highest postgraduate standards.", includes: ["Complex critical analysis", "Evidence-based arguments", "Highest postgraduate standard", "Original argumentation", "Journal-quality writing"] },
];

const faqs = [
  { q: "What does your MBA Essay Writing Service include?", a: "Our service covers every stage of essay development, from topic selection and research to writing, editing, and proofreading. We ensure that each essay is tailored to your university requirements and assessment criteria. Proper formatting and referencing are also included. The final document is delivered ready for submission." },
  { q: "Are the essays customised according to my requirements?", a: "Yes, every essay is written exclusively for your academic needs. Our writers follow your instructions, university guidelines, and marking rubrics to create relevant content. We also consider your preferred reference style and specific objectives. This ensures a personalised and high-quality academic solution." },
  { q: "How do you ensure originality in MBA essays?", a: "All essays are developed from scratch using credible academic sources and independent research. We follow strict plagiarism-free writing practices and avoid recycled content. Each assignment is reviewed for originality before delivery using Turnitin. This helps maintain academic integrity and university compliance." },
  { q: "Can you handle urgent MBA essay deadlines?", a: "Yes, we provide support for both standard and urgent deadlines. Our academic experts work efficiently to deliver quality essays within the required timeframe. Even for short deadlines, we maintain high standards of research and writing. Timely delivery remains one of our top priorities." },
  { q: "Is my personal and academic information secure?", a: "Absolutely. We maintain strict confidentiality and data protection measures for all clients. Your personal information, project details, and communication remain secure throughout the process. We never share your data with third parties. Your privacy is always protected with 128-bit SSL encryption and NDA-signed writers." },
  { q: "Do you offer revisions if changes are required?", a: "Yes, we provide unlimited revision support to ensure your essay meets your expectations. If any modifications are required based on the original instructions, our team will address them promptly. Minor changes are completed within 24 working hours and significant changes within 48 working hours. Student satisfaction is our priority." },
];

const testimonials = [
  { quote: "Whether you believe it or not, I am completely delighted with the essay you wrote for me. I received a wonderful grade, and I am now certain that your promises are true. Tutors India, thank you.", author: "Dr. Declan O'Connell, MD, PhD", avatar: "/images/testimonials/user-profile.png" },
  { quote: "I have tried a few essay writing services but the others do not operate on the same level as Tutors India. This company provides not only great writing but great service. I love how easy it is to order essays and manage my files on their website. Thank you Tutors India for your excellent services.", author: "Eeshan", avatar: "/images/testimonials/t17.jpg" },
  { quote: "Excellent writing service with translation and editing. I want to thank the writers as without their hard work, it would have been really difficult to quickly get my essay completed. It was a pleasure to work with them. I appreciate their professionalism and thank them for the perfect services offered to me.", author: "Anay", location: "US", avatar: "/images/testimonials/t17.jpg" },
  { quote: "I am very happy with the essay content. I would like to give my upcoming assignment to your team. The quality was beyond what I expected.", author: "Avinash", location: "India", avatar: "/images/testimonials/t22.jpg" },
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies", "Marketing & Communication",
  "Engineering & Technology", "Natural Sciences & Mathematics", "Biological & Life Science", "Economics & Administration",
  "Humanities & Social Science", "Law", "Medicine & Health", "Education & Training",
  "Journalism & Media", "Agriculture & Forestry", "Computer Science & IT", "Hospitality, Leisure & Sports",
];

export default function EssayWritingPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}<Link href="/our-services/coursework-writing/" style={{ color: "#a0b8e0" }}>Coursework Writing</Link>{" / "}<span style={{ color: "#fff" }}>Essay Writing</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              Custom Essay Writing Services for Academic Success in the UK and UAE
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Are you finding it difficult to cope with your essay deadlines, research assignments, and academic pressures at your university? Tutors India provides expert academic writing assistance for Master's and MBA degree students in the UK and UAE.
            </p>
            <p style={{ color: "#f9c74f", fontSize: "0.92rem", fontWeight: 600, marginBottom: "24px" }}>Your Trusted Partner in Academic Excellence</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/samples/assignment-writing.jpg" alt="Student working on academic assignment" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>Masters · MBA<br />PhD Level Essays<br />UK &amp; UAE</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      <div style={{ background: "#12214a", padding: "16px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: "2,000+", l: "Expert Writers" }, { n: "All Subjects", l: "Covered" }, { n: "< 5%", l: "Plagiarism" }, { n: "Unlimited", l: "Revisions" }, { n: "24/7", l: "Support" }, { n: "30 min", l: "Response" }].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
              <div style={{ fontSize: "0.68rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>

        {/* Intro */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>
            UK Essay Writing Service Tailored to Every Academic Level
          </h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            In our academic writing process, we apply a structured method which includes extensive research, sources analysis, note-making, outline creation, composition and editing. Within the scope of our Master's Essay Writing Help in UK, we provide students with essays that reflect subject proficiency, critical analysis skills, logical structure and sound argumentation according to postgraduate level criteria.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            We provide academic writing assistance in many subject areas like psychology, marketing, accounting, public health, human resource management, science, social work, and business management. Students from undergraduate to postgraduate, MBA and PhD level can benefit from our services. Our Master's Essay Writing Services in UAE help you get professional academic assistance, research-oriented content, and critical analysis for university-level essays.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "14px", marginTop: "18px" }} className="three-col-grid">
            {[
              { icon: "🎓", title: "Master's Level Support", desc: "Postgraduate academic assistance ensuring essays align with required university standards and assessment criteria." },
              { icon: "💼", title: "MBA Strategic Writing", desc: "MBA essays incorporating strategic thinking, management theories, and industry-based insights tailored to MBA course requirements." },
              { icon: "🌍", title: "UK & UAE Expertise", desc: "Specialists in both UK and UAE university requirements, guidelines, and academic referencing standards." },
            ].map(item => (
              <div key={item.title} style={{ background: "#f5f6fa", borderRadius: "8px", padding: "16px", border: "1px solid #dde2ef" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "6px" }}>{item.icon}</div>
                <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "5px" }}>{item.title}</div>
                <div style={{ fontSize: "0.79rem", color: "#666", lineHeight: 1.55 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* What's Included */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>What Is Included in Your Essay?</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "18px" }}>Academically oriented material that is well-researched through credible scholarly sources, correct citations, structured argumentation, analysis, and quality control</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "16px" }} className="four-col-grid">
            {essayIncludes.map(item => (
              <div key={item.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{item.icon}</div>
                <h3 style={{ fontSize: "0.9rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{item.title}</h3>
                <p style={{ fontSize: "0.8rem", color: "#666", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Tiers */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>What Services Do We Offer Under Essay Writing?</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "18px" }}>Top-notch assistance for various needs to ensure high-quality, unique, and academically excellent essays</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
            {serviceTiers.map(t => (
              <div key={t.tier} style={{ background: "#fff", border: `2px solid ${t.color}`, borderRadius: "10px", overflow: "hidden" }}>
                <div style={{ background: t.color, color: "#fff", padding: "14px 18px" }}><div style={{ fontSize: "1.2rem", fontWeight: 700 }}>{t.tier}</div></div>
                <div style={{ padding: "16px" }}>
                  <p style={{ fontSize: "0.84rem", color: "#555", lineHeight: 1.65, marginBottom: "12px" }}>{t.desc}</p>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {t.includes.map(i => (<li key={i} style={{ display: "flex", gap: "6px", fontSize: "0.78rem", color: "#555", padding: "4px 0", borderBottom: "1px solid #f0f2fa" }}><span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>✓</span> {i}</li>))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* QA Boxes */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Essay Writing Services that Guarantee Academic Success</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "14px" }} className="four-col-grid">
            {qaBoxes.map(box => (
              <Link key={box.title} href={box.href} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", overflow: "hidden", textAlign: "center", display: "block" }}>
                <img src={box.img} alt={box.title} style={{ width: "100%", height: "100px", objectFit: "contain", padding: "10px", background: "#f5f6fa" }} loading="lazy" />
                <div style={{ padding: "10px" }}>
                  <div style={{ fontSize: "0.83rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "3px" }}>{box.title}</div>
                  <div style={{ fontSize: "0.74rem", color: "#666", lineHeight: 1.4 }}>{box.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Guarantees */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px", marginBottom: "28px" }} className="three-col-grid">
          {[
            { icon: "🔒", title: "Complete Confidentiality", points: ["All academic/personal information is kept completely confidential", "Your work and documents are managed in total confidentiality", "Total confidentiality ensured from initial stages until final submission"] },
            { icon: "📚", title: "Proper Referencing", points: ["Citation styles followed as per university guidelines", "Depend on scholarly journals, online databases, and books", "Correct citation style in all orders"] },
            { icon: "⏱", title: "Timely Delivery", points: ["Orders delivered well within time", "Constant updates about the progress of the order", "Quick responses to questions/queries raised"] },
          ].map(g => (
            <div key={g.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{g.icon}</div>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>{g.title}</h3>
              {g.points.map(p => (<div key={p} style={{ display: "flex", gap: "7px", fontSize: "0.81rem", color: "#555", padding: "5px 0", borderBottom: "1px solid #f0f2fa" }}><span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>✓</span> {p}</div>))}
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>What Our Clients Say</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "16px" }} className="two-col-grid">
            {testimonials.map((t, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px" }}>
                <div style={{ color: "#e87722", fontSize: "2rem", lineHeight: 1, marginBottom: "6px", fontFamily: "serif" }}>&ldquo;</div>
                <p style={{ color: "#555", fontSize: "0.85rem", lineHeight: 1.7, fontStyle: "italic", marginBottom: "12px" }}>{t.quote}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <img src={t.avatar} alt={t.author} style={{ width: "36px", height: "36px", borderRadius: "50%", objectFit: "cover" }} loading="lazy" />
                  <div>
                    <div style={{ fontWeight: 700, color: "#1a2a6c", fontSize: "0.84rem" }}>{t.author}</div>
                    {t.location && <div style={{ fontSize: "0.72rem", color: "#888" }}>{t.location}</div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Frequently Asked Questions</h2>
          <FaqAccordion faqs={faqs} />
        </div>

        {/* Subject Areas */}
        <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Academic Excellence with Global Expertise</h2>
          <p style={{ color: "#666", fontSize: "0.86rem", marginBottom: "14px" }}>2,000+ academic writers across Arts, Literature, Science, Engineering, Medicine and more</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {subjects.map(s => (<span key={s} style={{ padding: "5px 13px", background: "#fff", border: "1.5px solid #dde2ef", borderRadius: "16px", fontSize: "0.79rem", color: "#1a2a6c", fontWeight: 500 }}>{s}</span>))}
          </div>
        </div>
      </section>

      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Your Essay Written by Academic Experts</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>UK &amp; UAE Specialists · Plagiarism-Free · Unlimited Revisions · Response in 30 min</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
