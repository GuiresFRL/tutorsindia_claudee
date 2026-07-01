import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "Academic Poster Presentation Service UK",
  description: "Expert Academic & Scientific Poster Presentation Service for Masters & PhD dissertations. Professional graphic designers, A1/A2/A3 sizes, PowerPoint & print-ready formats.",
};

const posterContent = [
  "Title — short, interest-drawing, readable from 10 feet",
  "Collaborators & institutional affiliations",
  "Abstract — concise overview of your research",
  "Background & context of the study",
  "Literature review — key themes and research gap",
  "Research questions / objectives",
  "Materials, process, methods or approach",
  "Results / conclusion — argument, insight and significance",
  "Future directions for research",
  "Acknowledgements",
  "References — fully cited to your required style",
  "Contact information",
];

const posterFeatures = [
  { icon: "🎨", title: "Professional Graphic Design", desc: "Dedicated professional graphic designers specialising in attractive academic poster presentations. Work produced using Photoshop, Illustrator, and Adobe InDesign to the highest visual standards." },
  { icon: "📐", title: "Multiple Size Options", desc: "Available in A1, A2, A3, and A4 portrait or landscape formats. Custom conference dimensions also accommodated. Print-ready PDF and editable PowerPoint files delivered." },
  { icon: "🔬", title: "Scientifically Sound", desc: "Scientific & Academic Poster presentations are academically rigorous, highlighting context through maps, photographs, methods and results via charts, tables, graphs and photographs." },
  { icon: "📊", title: "Clear Data Visualisation", desc: "Effective graphs, charts, and infographics with careful colour selection, efficient font sizing, and structured flowcharts that communicate your research clearly." },
  { icon: "✅", title: "Plagiarism Checked", desc: "All posters undergo plagiarism checking and linguistic review for uniqueness before delivery. Plagiarism-free certificate provided on request." },
  { icon: "🔄", title: "Unlimited Revisions", desc: "Our expertise strives to work hard so that our work rarely needs revision. At Tutors India, we provide unlimited revisions until you get 100% satisfaction." },
  { icon: "🖥️", title: "PowerPoint Template", desc: "Easy to use and fully customisable Masters Poster presentation template so you can customise the colour, text, graphics and images according to your preferences." },
  { icon: "⚡", title: "Express Delivery", desc: "Urgent delivery available based on project nature and conference deadline. Contact us immediately with your requirements for an accurate timeline assessment." },
];

const whyChoose = [
  "Extensive quality control at every stage",
  "Free appendices and supporting materials",
  "Draft review before final delivery",
  "Reflective log and diary available on request",
  "Calculations and statistical graphics included",
  "Full referencing to your required style",
  "Free amendments after delivery",
  "Customised to your specific requirements",
  "100% plagiarism-free content",
  "Competitive pricing — student-friendly",
  "Written and designed by UK academic experts",
  "Confidential — NDA-signed designers and writers",
];

const faqs = [
  { q: "Why should I choose Tutors India for poster presentation services?", a: "We have a large team of experts with a separate, dedicated professional graphic designer department specialising in designing attractive poster presentations for Masters and scientific projects. Our team has completed the maximum number of poster presentations across all disciplines, handling even the most complex designs with ease." },
  { q: "Can you create a research poster PowerPoint template for my master's dissertation?", a: "Yes. At Tutors India, we are ready to offer an easy to use and fully customisable Masters Poster Presentation template for your dissertation so you can customise the template based on your choice of colour, text, graphics and images. Custom modifications are available upon request at no additional charge." },
  { q: "What sections are typically present in a Tutors India Academic and Scientific poster?", a: "A standard academic poster includes: Title, Collaborators & Affiliations, Abstract, Background, Literature Review, Research Questions/Objectives, Materials/Methods/Approach, Results/Conclusion, Future Directions, Acknowledgements, References, and Contact Information. However, all sections can be customised based on your conference or supervisor requirements." },
  { q: "How long will it take to complete an Academic poster presentation?", a: "The timeline depends on the poster presentation length, features, and graphic needs. Standard poster design takes 48–72 hours once we receive your content and any brand guidelines. Express 24-hour delivery is available for urgent conference submission deadlines. Contact us with your deadline for an immediate feasibility assessment." },
  { q: "Can I see client sample work of poster presentation?", a: "We do not show client sample presentations because they are confidential. However, we do show our own sample presentations, which are available on our Sample Work page and are purely done by our expert designers. These give you a clear indication of the quality and style of work we produce." },
  { q: "Will you do revisions for my poster presentation?", a: "Our expertise strives to produce work that meets your requirements from the first draft. At Tutors India, we provide unlimited revisions until you get 100% satisfaction. Simply share your feedback and our designers will implement changes promptly. Work is shared in draft form allowing for reviewer feedback before final delivery." },
];

const testimonials = [
  { quote: "I was blown away by the ease and speed with which I was able to place my order, as well as the speed with which it was sent and arrived. The fabric poster was excellent. This is a service I will definitely use again!", author: "Dr. Yelena P. Orlov, PhD", avatar: "/images/testimonials/user-profile.png" },
  { quote: "Tutors India is highly recommended! I was able to complete my doctoral studies because of their statistical analysis ability. Throughout the process, they were meticulous, prompt, and enthusiastic.", author: "Divit", avatar: "/images/testimonials/Divit.jpg" },
  { quote: "I'm a PCC undergraduate who had to do a scientific poster presentation. Your templates were beautiful and easy to use. I had no issue creating, altering, or changing the entire thing. It arrived on schedule and looked fantastic! I was quite taken aback — so were my classmates and teacher. Thank you for your quick and efficient service!", author: "Hamsika", avatar: "/images/testimonials/Pavati.jpg" },
  { quote: "Just when I was about to give up on my poster presentation, my friend advised me to use Tutors India. It was timely advice because I was stuck and didn't know what to do. Now I could finally present the poster of my project and I'm so happy about it.", author: "Zoe", location: "Japan", avatar: "/images/testimonials/t04.jpg" },
  { quote: "This has undoubtedly been a great experience. I am very pleased with what Tutors India has offered so far. My poster looks good and the support I received from the servicing professional was very helpful. I will absolutely use these services again in the future.", author: "Marceline Anderson", location: "China", avatar: "/images/testimonials/t18.jpg" },
  { quote: "This was my first experience with PosterPresentations. I was incredibly impressed with the ease and speed of placing the order. The service was extremely efficient and quick, and the delivery got to me an hour before I had to present at the conference. The fabric poster was high quality. I will certainly get back to Tutors India for future needs!", author: "Dhanuk", avatar: "/images/testimonials/t20.jpg" },
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies",
  "Marketing & Communication", "Engineering & Technology", "Natural Sciences & Mathematics",
  "Biological & Life Science", "Economics & Administration", "Humanities & Social Science",
  "Law", "Medicine & Health", "Education & Training", "Journalism & Media",
  "Agriculture & Forestry", "Computer Science & IT", "Hospitality, Leisure & Sports",
];

export default function PosterPresentationPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
              <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}
              <Link href="/our-services/masters-dissertation-writing-services/" style={{ color: "#a0b8e0" }}>Masters Dissertation</Link>{" / "}
              <span style={{ color: "#fff" }}>Poster Presentation</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>
              Academic Poster Presentation Service
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>
              Are you stuck with the lack of details in your poster presentation? Would you like to get professional help to complete your poster with perfection? We offer full end-to-end assistance to developing your academic poster presentation that stands apart.
            </p>
            <p style={{ color: "#f9c74f", fontSize: "0.92rem", fontWeight: 600, marginBottom: "24px" }}>Then You've Certainly Reached the Right Place!</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "20px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/services/poster-presentation.png" alt="Academic Poster Presentation" style={{ width: "90px", height: "90px", objectFit: "contain", marginBottom: "10px" }} loading="lazy" />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>A1 · A2 · A3 · A4<br />Print-Ready PDF<br />Editable PowerPoint</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      {/* ── STATS BAR ── */}
      <div style={{ background: "#12214a", padding: "16px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: "2000+", l: "Expert Writers" }, { n: "A1 to A4", l: "Poster Sizes" }, { n: "Photoshop", l: "& Illustrator" }, { n: "48–72h", l: "Standard Delivery" }, { n: "Unlimited", l: "Revisions" }, { n: "100%", l: "Plagiarism Free" }].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
              <div style={{ fontSize: "0.68rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>

        {/* Intro */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>
            Academic &amp; Scientific Posters Done by UK Poster Academic Experts
          </h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            Scientific &amp; Academic Poster presentations are academically sound, highlighting context through maps, photographs, methods and results via charts, tables, graphs and photographs. Our service supports dissertations, assignments and other research projects across all academic disciplines.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "12px", fontSize: "0.94rem" }}>
            Poster presentations are significant phases in major research papers, functioning as advertisements of scholarly work. They must be self-explanatory or theme-based, creating critical discussion among colleagues and professors. At Tutors India, we make an impact through our exclusive poster presentation service — designing and writing academic/scientific posters that ensure: readable content from 10 feet distance, short interest-drawing titles, restricted word counts, clear bullet-pointed text, effective graphs/fonts/colours, clear layouts, plus name, institutional affiliation and acknowledgements.
          </p>
          <div style={{ background: "#fff8f0", borderLeft: "4px solid #e87722", borderRadius: "0 8px 8px 0", padding: "14px 18px" }}>
            <p style={{ color: "#555", fontSize: "0.88rem", lineHeight: 1.7 }}>
              <strong style={{ color: "#1a2a6c" }}>Our Academic &amp; Scientific Poster Presentation Service is Simply Easy &amp; Straightforward.</strong> The poster designed is capable of exchanging ideas between audience and presenter. All posters undergo plagiarism checking and linguistic review for uniqueness.
            </p>
          </div>
        </div>

        {/* Poster Features */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>What Services Do We Offer Under Academic Poster Presentation?</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "18px" }}>PowerPoint design to final specifications using Photoshop, Illustrator, Adobe InDesign and similar tools</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "16px" }} className="four-col-grid">
            {posterFeatures.map(f => (
              <div key={f.title} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{f.icon}</div>
                <h3 style={{ fontSize: "0.88rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{f.title}</h3>
                <p style={{ fontSize: "0.78rem", color: "#666", lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Poster Content + Why Choose */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "22px", marginBottom: "28px" }} className="two-col-grid">
          <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "14px" }}>General Poster Content — What We Include</h3>
            {posterContent.map(item => (
              <div key={item} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", fontSize: "0.83rem", color: "#c5d5f0" }}>
                <span style={{ color: "#f9c74f", fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
              </div>
            ))}
          </div>
          <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px", border: "1px solid #dde2ef" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Why Choose Tutors India: Poster Presentation Features</h3>
            {whyChoose.map(item => (
              <div key={item} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid #dde2ef", fontSize: "0.83rem", color: "#555" }}>
                <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
              </div>
            ))}
          </div>
        </div>

        {/* QA Images */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.2rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Our Quality Assurance Process</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "14px" }}>
            {[
              { img: "/images/qa/Quality-Assurance.png", title: "Quality Assurance", desc: "We ensure quality at every stage and the process.", href: "/guarantees/" },
              { img: "/images/qa/Plagiarism-Report.png", title: "Plagiarism Report", desc: "We deliver the document after scanning for plagiarism.", href: "/guarantees/" },
              { img: "/images/qa/Customer-Interaction.png", title: "Customer Interaction", desc: "We interact with you at every stage for amendments, queries and delivery.", href: "/contact-us/" },
            ].map(box => (
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

        {/* Testimonials */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>What Our Clients Say</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px" }} className="three-col-grid">
            {testimonials.map((t, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px" }}>
                <div style={{ color: "#e87722", fontSize: "2rem", lineHeight: 1, marginBottom: "6px", fontFamily: "serif" }}>&ldquo;</div>
                <p style={{ color: "#555", fontSize: "0.83rem", lineHeight: 1.7, fontStyle: "italic", marginBottom: "12px" }}>{t.quote}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <img src={t.avatar} alt={t.author} style={{ width: "36px", height: "36px", borderRadius: "50%", objectFit: "cover" }} loading="lazy" />
                  <div>
                    <div style={{ fontWeight: 700, color: "#1a2a6c", fontSize: "0.83rem" }}>{t.author}</div>
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
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.1rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>2000+ Experts Across Subjects &amp; Countries</h2>
          <p style={{ color: "#666", fontSize: "0.86rem", marginBottom: "14px" }}>USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {subjects.map(s => (
              <span key={s} style={{ padding: "5px 13px", background: "#fff", border: "1.5px solid #dde2ef", borderRadius: "16px", fontSize: "0.79rem", color: "#1a2a6c", fontWeight: 500 }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Your Academic Poster Designed by Experts</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>A1 · A2 · A3 · A4 · Print-Ready PDF · Editable PowerPoint · Unlimited Revisions</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
