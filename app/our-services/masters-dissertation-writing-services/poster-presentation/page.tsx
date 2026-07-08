"use client";

import Link from "next/link";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

const faqs = [
  {
    q: "Why we need to choose Tutors India for poster presentation services for my master's dissertation?",
    a:       "We have a large team of experts where we has a separate professional and dedicated graphical designer department are in designing the attractive posters presentation for your masters scientific projects. In addition, we have capability to do maximum number of poster presentation or complex designs posters with ease.",
  },
  {
    q: "Can you create research poster power point template for my master dissertation?",
    a:       "At Tutors India, we ready to offer the easy to use and fully customizable Masters Poster presentation template for your dissertation so you can use and customize the template based on their choice of color, text, graphics and images. Otherwise, send it back to your information to get the premium quality, affordable, attractive colors posters presentation for your master's Dissertation project.",
  },
  {
    q: "What are the sections present in the Tutors India Academic and Scientific poster presentation?",
    a:       "These are the below section usually present in the post presentation or any customization needed, we ready to tailor-made post presentation help. Our posters typically include: Title, Collaborators & their institutional affiliations, Abstract, Background, Literature review, Research questions or objectives, Materials/process/methods or approach, Results/conclusion, Future directions, Acknowledgement, References, and Contact information.",
  },
  {
    q: "How long will it take to complete Academic poster presentation?",
    a:       "Time line depends on the post presentation length, features and any other graphic needs. We also do urgent delivery based on your research project nature.",
  },
  {
    q: "Can I see Client samples work of poster presentation?",
    a:       "No, we do not show you the client's sample presentation because it is confidential rather than that we show our sample presentation, which is available here and purely done by our experts. Feel free to look at our Sample work.",
  },
  {
    q: "Will do revision for my poster presentation?",
    a:       "Our expertise work has striven to work hard our work is never revised. At tutors India, we provide the unlimited revision until our customer gets 100% satisfaction.",
  },
];

const testimonials = [
  {
    quote:
      "I was blown away by the ease and speed with which I was able to place my order, as well as the speed with which it was sent and arrived. The fabric poster was excellent. This is a service I will definitely use again!",
    author: "Dr. Yelena P. Orlov, PhD",
  },
  {
    quote:
      "Tutors India is highly recommended from me! I was able to complete my doctoral studies because to their statistical analysis ability. Throughout the process, they were meticulous, prompt, and enthusiastic. Without their assistance, I would not have been able to complete the statistical analyses.",
    author: "Divit",
  },
  {
    quote:
      "I'm a PCC undergraduate who had to do a scientific poster presentation. Your templates were beautiful and easy to use. I had no issue creating, altering, or changing the entire thing. It was also arrived on schedule and looked fantastic! I was quite taken aback. So, we're my classmates as well as my teacher. Thank you for your quick and efficient service!",
    author: "Hamsika",
  },
  {
    quote:
      "Just when I was about to give up on my poster presentation, my friend advised me to use your Tutors India. It was timely advice because I was stuck and didn't know what to do. Now I could finally present the poster of my project and I'm so happy about it.",
    author: "Zoe, Japan",
  },
  {
    quote:
      "This has undoubtedly been a great experience. I am very pleased with what Tutors India has offered so far. My poster looks good and the support I received from the servicing professional was very helpful. I will absolutely use these services again in the future.",
    author: "Marceline Anderson, China",
  },
  {
    quote:
      "This was my first experience with PosterPresentations. I was incredibly impressed with the ease and speed of placing the order, as well as the speed with which it was delivered. The service was extremely efficient and quick, and the delivery got to me an hour before I had to present on the poster in a conference. The fabric poster was high quality. I will certainly get back to Tutors India for future needs!",
    author: "Dhanuk",
  },
  {
    quote:
      "Honestly, I didn't expect this level of quality. The team understood exactly what I needed and delivered work that felt genuinely professional. My confidence went from stressed to unstoppable.",
    author: "Amelia Brooks, UK",
    role: "Big Data Analytics",
  },
  {
    quote:
      "I was stuck, frustrated, and running out of time. Tutors India stepped in at the perfect moment and turned everything around faster than I imagined. Worth every bit.",
    author: "Oliver Bennett, UK",
    role: "Big Data Analytics",
  },
  {
    quote:
      "The attention to detail was incredible. It didn't feel like I was working with a service provider — it felt like I had an expert academic partner guiding me throughout.",
    author: "Layla Al Mansoori",
    role: "Essay Writing and Assignment Writing",
  },
  {
    quote:
      "The team handled everything professionally from start to finish. Timely updates, quick responses, and excellent academic quality — exactly what students need during stressful deadlines.",
    author: "Zain Al Hashmi, UAE",
  },
];

const posterSections = [
  "Title",
  "Collaborators & their institutional affiliations",
  "Abstract",
  "Background",
  "Literature review",
  "Research questions, or objectives",
  "Materials, process, methods or approach",
  "Results / conclusion (argument, insight and significance)",
  "Future directions",
  "Acknowledgement",
  "References",
  "Contact information",
];

const posterFeatures = [
  {
    title: "Posters with Clarity",
    body: "A poster presentation is part of the initial task in research or Ph.D. project. Posters need to express a message with clarity. It should clearly depict the central message, what are the main arguments that will support your theme, how it can be significant to the audiences and how best it is presented. Tutors India offers end to end assistance to scholars with total clarity.",
  },
  {
    title: "Best Aspects of a Poster",
    body: "An impressive poster needs to depict an explicit content, diagrams, structured flow chart, efficient font size, careful selection of color in graphs, charts, and fonts. Tutors India ensures a complete poster development experience with all essential factors included.",
  },
  {
    title: "Posters as the Best Classification Tool",
    body: "Properly designed posters will be the best way to classify and dissect your presentation. It is the best mode of explaining your research to your colleagues who can offer best perceptions to enhance your research. Tutors India assists poster presentation in initiating healthy discussion on various aspects.",
  },
  {
    title: "Posters in Social Media",
    body: "To increase your poster credentials, the posters can be added to online poster directories. It can assist in the application of Facebook, Twitter or social media in linking and promoting your poster content.",
  },
  {
    title: "Master's Dissertation Chapter Delivery Process",
    body: "We write part or chapter wise master's dissertation from the introduction to recommendations. This is to ensure that clients have full control over the delivery and can look at the drafts of different sections. Unlike other companies, we do not charge any costs for such structure.",
  },
  {
    title: "Our Poster Presentation Service",
    body: "We focus on clarity of content, create visual interest and accessibility. Our academic poster presentation service is exclusive as we do not just provide presentation, but the rather clear explanation and justification for the choice.",
  },
];

const serviceTiers = [
  {
    tier: "Basic",
    color: "#2563b0",
    desc: "Developed based on the relevant sources, a reasonable attempt at finding an area that warrant research & evidence of an attempt to provide critical evaluation but mainly descriptive.",
  },
  {
    tier: "Advanced",
    color: "#1a2a6c",
    desc: "Wide range of sources, a clear identification of research gap in the literature along with aim and research questions.",
  },
  {
    tier: "Premium",
    color: "#e87722",
    desc: "Refers to a wide range of seminal research with throughout engagement using latest resources. A solid gap would be identified based on the current literature & justified thoroughly & Excellent critical analysis would be shown (upgradable).",
  },
];

const guarantees = [
  {
    title: "A Complete Secure & Confidential Service",
    body: "We offer 100% confidentiality of client's personal details, payment details, project works, and copyrights of research works. We ensure: 1) All your projects are given unique reference codes 2) Documents are accessed only writers who signed NDA with Tutors India 3) Your financial information is protected b 128-bit secure socket layer (SSL) encryption.",
  },
  {
    title: "Fully Referenced",
    body: "Our dissertation work is fully referenced with latest articles and textbooks. We refer only peer-reviewed sources such as scholarly articles and textbook to select the topic. We refer database including Web of Science, ProQuest, Google Scholar, Business Source Complete, and latest newspapers articles such as Economic Times, Forbes, The Wall Street, The Economics to identify the industrial problem.",
  },
  {
    title: "Our Guarantees",
    body: "(1) Unlimited Revision for the work being committed. (2) We ensure on-time delivery (3) We support 24/7. (4) Our word count committed does not include references and bibliography & help you to locate the sources cited (5) Ensure three-level quality check including Technical QC, Editor QC and final check against the requirement (6) Confidentiality of the information (7) Plagiarism free work – less than 5% percent. (8) Only experienced and subject specific writers will be allotted.",
  },
  {
    title: "Plagiarism Free Work",
    body: "We are aware of the consequences of plagiarism. Hence, topic selection is completely plagiarism Free. Our work is scanned against online sources in a similar way like WriteCheck or Turnitin. We wanted to ensure that our clients i.e., researchers and students are not finding any issues with regards to plagiarism and so we issue plagiarism-free certificate*. Our streamlined and high-quality research writing process ensures your dissertation is not just copy-pasted, but written only after brainstorming sessions with our team of professional researchers.",
  },
  {
    title: "On Time",
    body: "Our work is delivered at a specified date and time. Our specific changes to the delivered work will be carried out within 45 days of delivery. We guarantee delivery of minor changes within 24 working hours and significant changes within 48 working hours. We acknowledge all your emails within 30 minutes of working hours. Further any delay in the delivery can be raised at customersupport@tutorsindia.com",
  },
  {
    title: "Experienced Writers",
    body: "Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities from India, the US, and the UK. We identify the perfect SME according to your subject and area. Expert is selected through a stringent selection process including the signing of non-disclosure and confidentiality agreement. You can be very sure about the quality of the work since expert writer is identified as per International Research Experience.",
  },
];

const subjects = [
  "Arts & Humanities",
  "Biological Sciences",
  "Business & Management Studies",
  "Marketing & Communication",
  "Engineering & Technology",
  "Natural Sciences & Mathematics",
  "Biological & Life Science",
  "Economics & Administration",
  "Humanities & Social Science",
  "Law",
  "Medicine & Health",
  "Education & Training",
  "Journalism & Media",
  "Agriculture & Forestry",
  "Computer Science & IT",
  "Hospitality, Leisure & Sports",
];

export default function PosterPresentationPage() {
  return (
    <div style={{ fontFamily: "Georgia, serif", color: "#222" }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)",
          color: "#fff",
          padding: "72px 24px 60px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <h1
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: "clamp(1.6rem,3.5vw,2.6rem)",
              fontWeight: 700,
              lineHeight: 1.3,
              marginBottom: 20,
            }}
          >
            Academic Poster Presentation Service
          </h1>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, maxWidth: 760, margin: "0 auto 10px", opacity: 0.95 }}>
            Are you stuck with the lack of details in your poster presentation? Would you like to get professional help to complete your poster with perfection?
          </p>
          <p style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 28, opacity: 0.98 }}>
            Then You&apos;ve Certainly Reached the Right Place for designing academic poster presentation!
          </p>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, maxWidth: 740, margin: "0 auto 28px", opacity: 0.9 }}>
            We offer full end-to-end assistance to developing your academic poster presentation that stands apart.
          </p>
          <Link
            href="/contact-us"
            style={{
              display: "inline-block",
              background: "#e87722",
              color: "#fff",
              padding: "14px 36px",
              borderRadius: 4,
              fontWeight: 700,
              fontSize: "1rem",
              textDecoration: "none",
            }}
          >
            Get Expert Help Now
          </Link>
        </div>
      </section>

      {/* Academic experts intro */}
      <section style={{ background: "#f8f9fc", padding: "52px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: "1.7rem",
              color: "#1a2a6c",
              marginBottom: 16,
            }}
          >
            Academic &amp; Scientific Posters are done by the UK Poster Academic Experts
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#444", maxWidth: 780, margin: "0 auto 16px" }}>
            Scientific &amp; Academic Poster presentation is academically sound, highlight the context of your work through maps, photographs, your methods and results in the forms of charts, tables, graphs and photographs. We offer poster presentation service to the students to support dissertation, assignment or any other research.
          </p>
        </div>
      </section>

      {/* Intro + impact sections */}
      <section style={{ padding: "52px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 20, marginBottom: 0 }}>
            {[
              {
                title: "At Tutors India, we assist for Poster Preparation",
                body: "Presenting an effective poster presentation is a significant phase in your major research paper as it is an advertisement of your hard work. Poster presentations need to be self-explanatory or theme based to relate to the research subject or it's just an illustrated abstract. The presentation needs to create a critical discussion among colleagues and your professors.",
              },
              {
                title: "We Make an Impact Through Our Exclusive Poster Presentation Service",
                body: "We offer academic and scientific poster presentation service including designing and poster writing services to reflect your current academic requirement. We employ only the expert writers in the industry, with relevant experience and qualification from the prestigious universities from the UK. Our team ensures that the content is readable from about 10 feet away, title is short and draws interest, restricted word count, clear text and to the point, with more of bullets, numbering, and headlines, and effective use of graphs, fonts, colours and clear layout. The poster also includes your name, institutional affiliation and acknowledgement.",
              },
              {
                title: "Best Spoke Posters – Poster Presentation for Academic Conferences",
                body: "Our Poster Presentation services encourage clarity, creativity, and ability to stand on its own as a clear, logical presentation of your work, without any explanation from you.",
              },
              {
                title: "Academic Poster Presentation Help UK",
                body: "Tutors India ensures to add enough additional values as much as possible for the poster presentation to be successful. It ensures that the scholar gets best high grades.",
              },
            ].map((c) => (
              <div
                key={c.title}
                style={{
                  background: "#f8f9fc",
                  borderRadius: 8,
                  padding: "22px 20px",
                  borderTop: "4px solid #2563b0",
                }}
              >
                <h3 style={{ fontFamily: "Merriweather, serif", fontSize: "0.97rem", color: "#1a2a6c", marginBottom: 10 }}>
                  {c.title}
                </h3>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.75, color: "#555" }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Easy & Straightforward */}
      <section style={{ background: "#f8f9fc", padding: "52px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: "1.55rem",
              color: "#1a2a6c",
              marginBottom: 16,
            }}
          >
            Our Academic &amp; Scientific Poster Presentation Service is Simply Easy &amp; Straightforward
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#444" }}>
            Our poster presentation help guarantees that the poster designed (Poster designing service, Presentation writing service) would capable of exchanging ideas between the audience and the presenter. All our posters are rechecked for plagiarism and linguistic mistakes, thus ensure that our work is unique and matchless.
          </p>
        </div>
      </section>

      {/* What services + tiers */}
      <section style={{ padding: "52px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: "1.55rem",
              color: "#1a2a6c",
              marginBottom: 16,
            }}
          >
            What Services do we offer under Academic Poster Presentation?
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#444", marginBottom: 32 }}>
            We use Powerpoint to design poster according to the final poster size that you required. We use programs such as Photoshop, illustrator, Adobe InDesign, and other options to design the poster. We offer different sized, A1, A2, A3, A4, comments or speech, report, reflective log, and diary along with your ordering on a special request.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 20 }}>
            {serviceTiers.map((t) => (
              <div
                key={t.tier}
                style={{
                  background: "#fff",
                  border: `2px solid ${t.color}`,
                  borderRadius: 10,
                  overflow: "hidden",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                }}
              >
                <div style={{ background: t.color, color: "#fff", padding: "14px 18px" }}>
                  <div style={{ fontSize: "1.2rem", fontWeight: 700 }}>{t.tier}</div>
                </div>
                <div style={{ padding: "16px" }}>
                  <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.65 }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subject matter expertise + how it works */}
      <section style={{ background: "#f8f9fc", padding: "52px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: "1.4rem",
              color: "#1a2a6c",
              marginBottom: 12,
            }}
          >
            Specialized Subject Matter Expertise Across the Globe
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#444", marginBottom: 28 }}>
            We offer topic Selection for Management, Social Science, Engineering, Technology, Life Science, Medical, Arts &amp; Literature / Linguistics, and much more.
          </p>

          <h2
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: "1.4rem",
              color: "#1a2a6c",
              marginBottom: 12,
            }}
          >
            Academic Poster Presentation Service – How Does It Work
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#444" }}>
            We will share you the work in drafts of speech or writing, along with your poster services. By this way, you will get an opportunity to review the poster and share your feedback, where our UK writers will do the amendment as per your request.
          </p>
        </div>
      </section>

      {/* Poster Features */}
      <section style={{ padding: "52px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: "1.55rem",
              color: "#1a2a6c",
              marginBottom: 8,
              textAlign: "center",
            }}
          >
            Academic Poster Presentation Features
          </h2>
          <p style={{ textAlign: "center", color: "#555", marginBottom: 32 }}>
            We follow according to the specific university guidelines across the United States, United Kingdom, Australia, and other Asian Universities.
          </p>

          {/* Poster content sections list */}
          <div
            style={{
              background: "#1a2a6c",
              color: "#fff",
              borderRadius: 10,
              padding: "28px 32px",
              marginBottom: 28,
            }}
          >
            <h3 style={{ fontFamily: "Merriweather, serif", fontSize: "1.1rem", marginBottom: 16 }}>
              Our poster has the following content in general, including:
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 10 }}>
              {posterSections.map((s) => (
                <div key={s} style={{ display: "flex", gap: 8, alignItems: "flex-start", fontSize: "0.88rem", opacity: 0.92 }}>
                  <span style={{ color: "#e87722", fontWeight: 700, flexShrink: 0 }}>✓</span> {s}
                </div>
              ))}
            </div>
          </div>

          {/* Feature cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 20 }}>
            {posterFeatures.map((f) => (
              <div
                key={f.title}
                style={{
                  background: "#f8f9fc",
                  borderRadius: 8,
                  padding: "22px 20px",
                  borderTop: "4px solid #2563b0",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                }}
              >
                <h4
                  style={{
                    fontFamily: "Merriweather, serif",
                    fontSize: "0.97rem",
                    color: "#1a2a6c",
                    marginBottom: 10,
                  }}
                >
                  {f.title}
                </h4>
                <p style={{ fontSize: "0.92rem", lineHeight: 1.75, color: "#555" }}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose callout */}
      <section style={{ background: "#f8f9fc", padding: "52px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: "1.55rem",
              color: "#1a2a6c",
              marginBottom: 16,
            }}
          >
            Why Choose Tutors India: Scientific &amp; Academic Poster Presentation Service Features
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#555", maxWidth: 780, margin: "0 auto" }}>
            Extensive quality control, appendices, plan &amp; outline, draft, reflective log, presentation, calculations, help to locate the sources, fully referenced, free amendments, customized to your requirements, 100% plagiarism free, competitive prices, written by UK academic experts.
          </p>
        </div>
      </section>

      {/* Guarantees */}
      <section style={{ padding: "52px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 20 }}>
            {guarantees.map((g) => (
              <div
                key={g.title}
                style={{
                  background: "#f8f9fc",
                  borderRadius: 8,
                  padding: "22px 20px",
                  borderTop: "4px solid #e87722",
                }}
              >
                <h4 style={{ fontFamily: "Merriweather, serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: 10 }}>
                  {g.title}
                </h4>
                <p style={{ fontSize: "0.93rem", lineHeight: 1.75, color: "#555" }}>{g.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#f8f9fc", padding: "52px 24px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: "1.55rem",
              color: "#1a2a6c",
              marginBottom: 28,
              textAlign: "center",
            }}
          >
            Frequently Asked Questions
          </h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* Subject Matter Expertise */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "52px 24px" }}>
        <div style={{ maxWidth: 980, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Merriweather, serif", fontSize: "1.55rem", marginBottom: 12 }}>
            Your Dissertation is Written by Your Choice of Subject Matter Expertise
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, opacity: 0.92, maxWidth: 760, margin: "0 auto 28px" }}>
            We have a team of 2000+ expertise across the subjects &amp; countries (including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine). Tutors India has capability and skills to handle subjects across the field. We have more than 2000+ expertise working across the world who can handle arts, literature, sciences, engineering or medicine.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {subjects.map((s) => (
              <span
                key={s}
                style={{
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  borderRadius: 20,
                  padding: "6px 16px",
                  fontSize: "0.88rem",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: "52px 24px", background: "#f8f9fc" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: "1.55rem",
              color: "#1a2a6c",
              textAlign: "center",
              marginBottom: 32,
            }}
          >
            Voice of Our Customer
          </h2>
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)",
          color: "#fff",
          padding: "56px 24px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontFamily: "Merriweather, serif", fontSize: "1.8rem", marginBottom: 16 }}>
          Ready to Get Your Academic Poster Presentation Designed?
        </h2>
        <p style={{ fontSize: "1.05rem", marginBottom: 28, opacity: 0.92 }}>
          Invest in your career by availing language editing help from the UK &amp; US Qualified researchers.
        </p>
        <Link
          href="/contact-us"
          style={{
            display: "inline-block",
            background: "#e87722",
            color: "#fff",
            padding: "14px 40px",
            borderRadius: 4,
            fontWeight: 700,
            fontSize: "1rem",
            textDecoration: "none",
          }}
        >
          Order Now
        </Link>
      </section>
    </div>
  );
}
