import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "Online Dissertation Tutoring Services",
  description: "Tutoring Service – Online Virtual Classes for All Your Academic Support. Qualified and experienced experts including retired professionals, adjuncts, real time faculties and professors across the world.",
  alternates: { canonical: "https://www.tutorsindia.com/our-services/development/online-tutoring-services" },
};

const faqs = [
  {
    q: "What makes Tutors India the best choice for online training?",
    a: "Tutors India is a premier service provider offers the ultimate online course training at affordable pricing incorporates with High-quality course content materials, simple and flexible platform and, Integration with other devices with ease",
  },
  {
    q: "Why should I consider online course training at Tutors india?",
    a: "At tutors India, we help to realize the real-time experience online virtual classes for all your academic courses. Further, our experienced and qualified experts do Online Tutoring so you can observe improvement in both academic and intellectual proficiency.",
  },
  {
    q: "What makes your online training courses effective?",
    a: "We have the subject –matter and technical-mater expertise as well as we offers the best tutoring features such as one-on-one and group sessions. Further, we tailor our specific services to student's specific needs.",
  },
  {
    q: "What are the advantages of online course/tutoring?",
    a: "One of the major benefits of the online course at Tutors India is an experience and astounding Tutors and flexible interactive platform encourages student to complete the courses.",
  },
  {
    q: "Are the Tutors India courses available in languages other than English?",
    a: "No, however we ready to offer you online courses in other languages based on customized solution. Contact us for more details",
  },
  {
    q: "Can I customize Tutorsindia courses?",
    a: "No, however, we can work for you to customize the courses to meet your special needs",
  },
];

const testimonials = [
  {
    quote: "I had felt stimulated and nurtured academically.",
    author: "Amelia",
  },
  {
    quote: "I was attracted to Tutors India for many reasons.",
    author: "Lucas",
  },
  {
    quote: "I found Tutors India for writing research methodology.",
    author: "Leo",
  },
  {
    quote: "Writing a literature review is challenging rigorous.",
    author: "Grace",
  },
  {
    quote: "I developed a great partnership with Tutors India.",
    author: "Isla",
  },
  {
    quote: "It was hard to write the research methodology.",
    author: "Chitaksh",
  },
  {
    quote: "The best experience you can imagine.",
    author: "Bhavin",
  },
  {
    quote: "Tutors India has been very helpful in writing.",
    author: "Arhaan",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function OnlineTutoringServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <style>{`
        .hero-inner { max-width: 900px; margin: 0 auto; padding: 0 1rem; }
        .hero-badge { display: inline-block; background: #e87722; color: #fff; font-size: .75rem; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; padding: .25rem .75rem; border-radius: 999px; margin-bottom: 1rem; }
        .three-col-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.5rem; }
        .two-col-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 1.5rem; }
        .four-col-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 1.25rem; }
        @media(max-width:768px){
          .three-col-grid,.four-col-grid { grid-template-columns: 1fr; }
          .two-col-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", padding: "4rem 1rem 3rem", color: "#fff" }}>
        <div className="hero-inner">
          <span className="hero-badge">Online Tutoring Services</span>
          <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.6rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "1rem" }}>
            Master-Online Dissertation Writing Tutors for all subjects and levels
          </h1>
          <p style={{ fontSize: "1.1rem", opacity: 0.9, marginBottom: "0.5rem" }}>
            Tutoring Service – Online Virtual Classes for All Your Academic Support
          </p>
          <p style={{ fontSize: "1rem", opacity: 0.85, marginBottom: "2rem" }}>
            Online Tutoring is done by the qualified and experienced experts including retired professionals, adjuncts, real time faculties and professors across the world
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "flex-start", flexWrap: "wrap" }}>
            <Link href="/order" style={{ background: "#e87722", color: "#fff", padding: ".75rem 2rem", borderRadius: "6px", fontWeight: 700, textDecoration: "none" }}>
              Order Now
            </Link>
            <Link href="/contact-us" style={{ background: "transparent", color: "#fff", padding: ".75rem 2rem", borderRadius: "6px", fontWeight: 700, textDecoration: "none", border: "2px solid #fff" }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Are you looking */}
      <section style={{ background: "#fff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            Are you looking for tutoring services for your academic courses?
          </h2>
          <p style={{ color: "#333", lineHeight: 1.8, fontSize: "1rem" }}>
            Then You&rsquo;ve Certainly Reached the Right place
          </p>
        </div>
      </section>

      {/* Tutors India Difference */}
      <section style={{ background: "#f0f4ff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.5rem", textAlign: "center" }}>
            Tutors India Difference in Online Tutoring
          </h2>
          <p style={{ color: "#333", lineHeight: 1.8, fontSize: "1rem", marginBottom: "1.5rem", maxWidth: 800, margin: "0 auto 1.5rem" }}>
            Tutoring services is to serve as centre of learning assistance to students in order to support for their academic courses. Tutoring service help students / scholars develop self-confidence, skills and strategies to assists in becoming independent, active learners in their academic work.
          </p>

          <div className="two-col-grid" style={{ marginTop: "2rem" }}>
            <div style={{ background: "#fff", borderRadius: "10px", padding: "2rem", boxShadow: "0 2px 8px rgba(0,0,0,.07)" }}>
              <h3 style={{ color: "#e87722", fontWeight: 700, fontSize: "1.15rem", marginBottom: "0.75rem" }}>Unique &amp; innovative e-tutoring</h3>
              <p style={{ color: "#333", lineHeight: 1.8 }}>
                Tutors India offers online tutoring support for students across the world. Our experts are consisting of retired professionals, adjuncts, real time faculties / professors. Through our online tutoring service, you will notice substantial improvement in their academic grade and also general intellectual capability. Our tutoring is convenient and private with focused approach, where we offer one-on-one tutoring and group session in student&rsquo;s environment.
              </p>
            </div>
            <div style={{ background: "#fff", borderRadius: "10px", padding: "2rem", boxShadow: "0 2px 8px rgba(0,0,0,.07)" }}>
              <h3 style={{ color: "#e87722", fontWeight: 700, fontSize: "1.15rem", marginBottom: "0.75rem" }}>Through our virtual tutoring service, you can observe improvement in both academic and intellectual proficiency.</h3>
              <p style={{ color: "#333", lineHeight: 1.8 }}>
                Our Service is convenient and private focused approach, where tutoring is done in student&rsquo;s environment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple & Straightforward */}
      <section style={{ background: "#fff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            Online Tutoring Service is simply easy &amp; Straightforward
          </h2>
          <p style={{ color: "#333", lineHeight: 1.8 }}>
            Our online tutoring service guarantees that your works confidential, and so you do not have to worry about it. Just send us your requirement along with the deadline and see the results that are far justified and mark the success of your career
          </p>
        </div>
      </section>

      {/* Online Tutoring Service features */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "2rem", textAlign: "center" }}>Online Tutoring Service features</h2>
          <div className="three-col-grid">
            {[
              { title: "One-on-one Tutoring", body: "We offer one-on-tutoring where only student and subject matter expert interact with each other, thereby assures you the personalized coaching." },
              { title: "Group Sessions", body: "We required a minimum of 5+ students for group sessions." },
              { title: "We Help Elementary, Middle, High School or University Level", body: "We not only teach UG, PG and scholars pursuing PhD but also elementary, middle and high school students as well." },
              { title: "Tailor our Specific Service to student specific needs", body: "All our tutoring services are tailored to specific requirement of the students. Before fixing an appointment, student need to share their course materials, which would in turn enable tutor to prepare notes and other additional materials for teaching." },
              { title: "We help", body: "Problem solving, homework skills, time management, self-confidence, exam preparation and much more" },
              { title: "Guaranteed Noticeable Progress", body: "We guarantee for full satisfaction with our tutoring service" },
            ].map((item, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,.08)", borderRadius: "10px", padding: "1.5rem", borderTop: "3px solid #e87722" }}>
                <h3 style={{ color: "#f9c74f", fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ color: "rgba(255,255,255,.85)", lineHeight: 1.7, fontSize: ".95rem" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Tutoring Service do we offer */}
      <section style={{ background: "#f0f4ff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.5rem", fontWeight: 700, marginBottom: "2rem", textAlign: "center" }}>
            What Tutoring Service do we offer under big data analytics service?
          </h2>
          <div className="three-col-grid">
            {[
              { tier: "Basic", desc: "Only analytics based on the concept shared" },
              { tier: "Advanced", desc: "In addition to the basic features, we will write interpretation and evaluation process." },
              { tier: "Premium", desc: "New conceptual development, coding, or programming, algorithm development and interpretation, evaluation of the new algorithm code and compare results with other established algorithms." },
            ].map((item, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: "10px", padding: "2rem", boxShadow: "0 2px 8px rgba(0,0,0,.07)", borderTop: "4px solid #e87722" }}>
                <h3 style={{ color: "#1a2a6c", fontWeight: 800, fontSize: "1.15rem", marginBottom: "0.75rem" }}>{item.tier}</h3>
                <p style={{ color: "#333", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Subject Matter */}
      <section style={{ background: "#fff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            Specialized Subject Matter Expertise across the globe
          </h2>
          <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "1.5rem" }}>
            Mathematics – All branches from the elementary maths to calculus, statistics and probability, science – physicist, chemistry, biology, earth science, computer programming, languages – English, French, Spanish, ESL, Economics, Political Science, History, Government, Social Studies and Health, Geography, &amp; Cultural geography
          </p>
          <h3 style={{ color: "#1a2a6c", fontWeight: 700, fontSize: "1.1rem", marginBottom: "1rem" }}>
            Your online Tutoring service is carried out by your choice of specialized expertise
          </h3>
          <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "1.5rem" }}>
            We have a team of 2000+ expertise across the subjects &amp; countries (including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine)
          </p>
          <h3 style={{ color: "#1a2a6c", fontWeight: 700, fontSize: "1.1rem", marginBottom: "1rem" }}>
            Tutors India has capability and skills to handle subjects across the field...
          </h3>
          <p style={{ color: "#333", lineHeight: 1.8 }}>
            Tutors India has capability and skills to handle subjects across the field. We chose qualified and experienced subject specific expertise while you order your Ph.D. or Master&rsquo;s dissertation. We have more than 2000+ expertise working across the world who can handle arts, literature, sciences, engineering or medicine.
          </p>
        </div>
      </section>

      {/* Subject categories */}
      <section style={{ background: "#f0f4ff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.5rem", fontWeight: 700, marginBottom: "2rem", textAlign: "center" }}>Subject Areas We Cover</h2>
          <div className="four-col-grid">
            {[
              "Arts & Humanities",
              "Biological Sciences",
              "Business & Management Studies",
              "Marketing & Communication",
              "Engineering & Technology",
              "Natural Sciences & Mathematics",
              "Biological & Life science",
              "Economics & Administration",
              "Humanities & Social Science",
              "Law",
              "Medicine & Health",
              "Education & Training",
              "Journalism & Media",
              "Agriculture & Forestry",
              "Computer Science & IT",
              "Hospitality, Leisure & Sports",
            ].map((subject, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: "8px", padding: "1rem 1.25rem", color: "#1a2a6c", fontWeight: 600, fontSize: ".9rem", boxShadow: "0 1px 4px rgba(0,0,0,.06)", borderLeft: "3px solid #e87722" }}>
                {subject}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our deliverables */}
      <section style={{ background: "#fff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            Our deliverables while you order Online Tutoring Help
          </h2>
          <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "1.5rem" }}>
            Online Tutoring from Tutors India is simply easy and straightforward. You will get the reply within 30 minutes which would enable to place your order quickly without any delay in submissions.
          </p>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            Our deliverables while you order for Tutoring Service
          </h2>
          <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "1.5rem" }}>
            Tutoring services from Tutors India is simply easy and straightforward. You just need to buy the required service and that&rsquo;s it, your Tutor is connected as per the scheduled time.
          </p>
          <div style={{ background: "#f0f4ff", borderRadius: "8px", padding: "1.5rem", borderLeft: "4px solid #e87722" }}>
            <h3 style={{ color: "#1a2a6c", fontWeight: 700, marginBottom: "0.5rem" }}>Tutoring Service is Exclusive</h3>
            <p style={{ color: "#333", lineHeight: 1.7 }}>
              as we do not just provide chapter-wise dissertation writing service, but the rather clear explanation and justification for the choice
            </p>
          </div>
        </div>
      </section>

      {/* How Does Online Tutoring Works */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.5rem" }}>How Does Online Tutoring Works?</h2>
          <p style={{ lineHeight: 1.8, opacity: 0.9, marginBottom: "1.5rem" }}>
            We use the computer for tutoring, where the student works on one-on-one with a professional tutor in a secure web environment. We just required, computer, web browser and broadband internet connection and other than that it does not required any special software or equipment. We share you the virtual white board workspace where both student and tutor draw and write share the problems, explanations, solutions and work with simulations and animations to maximize learning. There is also an additional facility where your child can also chat using the instant message box which resides right along the virtual white board. Further, this is an independent chat room can only be used by Tutors India Tutors and students, and you can always connect this tutor as your child required any help for any subjects that you required. Our interface is built in such a way that the student can work face to face with a tutor.
          </p>
        </div>
      </section>

      {/* Fix an appointment / Quality Assurance */}
      <section style={{ background: "#f0f4ff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.5rem", fontWeight: 700, marginBottom: "2rem", textAlign: "center" }}>
            Our Process
          </h2>
          <div className="three-col-grid">
            {[
              { title: "Fix an appointment with our tutor", body: "Online appointment service" },
              { title: "Quality Assurance", body: "We ensure quality at every stage and the process." },
              { title: "Plagiarism Report", body: "We deliver the document after scanning for plagiarism" },
              { title: "Customer Interaction", body: "We interact with the customer at every stage in terms of amendments, query and delivery." },
              { title: "Track Your Report through our customized CRM", body: "You need not check email frequently rather your report is safe on our customizable CRM and you can download later at any point of time by using your unique username and password." },
            ].map((item, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: "10px", padding: "1.5rem", boxShadow: "0 2px 8px rgba(0,0,0,.07)", borderTop: "3px solid #e87722" }}>
                <h3 style={{ color: "#1a2a6c", fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ color: "#333", lineHeight: 1.7, fontSize: ".95rem" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Tutors India */}
      <section style={{ background: "#fff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            Why Choose Tutors India: Our Service features
          </h2>
          <p style={{ color: "#333", lineHeight: 1.8 }}>
            Qualified researchers, research methodology expertise, well experienced coders, developers, programmers capable of handling various software and many more, only peer-reviewed articles, Tutoring and clarification, Tables and Interpretation with proper formatting for print-ready analysis, plagiarism report, 24/7 support, timely Support, 100% match with the requirement and on time delivery.
          </p>
        </div>
      </section>

      {/* Guarantees */}
      <section style={{ background: "#f0f4ff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.5rem", fontWeight: 700, marginBottom: "2rem", textAlign: "center" }}>Our Guarantees</h2>
          <div className="two-col-grid">
            <div style={{ background: "#fff", borderRadius: "10px", padding: "2rem", boxShadow: "0 2px 8px rgba(0,0,0,.07)" }}>
              <h3 style={{ color: "#e87722", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.75rem" }}>A complete secure &amp; Confidential Service</h3>
              <p style={{ color: "#333", lineHeight: 1.8 }}>
                We offer 100% confidentiality of client&rsquo;s personal details, payment details, project works, and copyrights of research works. We ensure following for the conditionality, security &amp; privacy: 1) All your projects are given unique reference codes 2) Documents are accessed only writers who signed NDA with Tutors India 3) Your financial information is protected b 128-bit secure socket layer (SSL) encryption.
              </p>
            </div>
            <div style={{ background: "#fff", borderRadius: "10px", padding: "2rem", boxShadow: "0 2px 8px rgba(0,0,0,.07)" }}>
              <h3 style={{ color: "#e87722", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.75rem" }}>Plagiarism Free Work</h3>
              <p style={{ color: "#333", lineHeight: 1.8 }}>
                We are aware of the consequences of plagiarism. Hence, topic selection is completely plagiarism Free. Our work is scanned against online sources in a similar way like WriteCheck or Turnitin. We wanted to ensure that our clients i.e., researchers and students are not finding any issues with regards to plagiarism and so we issue plagiarism-free certificate. Our streamlined and high-quality research writing process ensures your dissertation is not just copy-pasted, but written only after brainstorming sessions with our team of professional researchers.
              </p>
            </div>
            <div style={{ background: "#fff", borderRadius: "10px", padding: "2rem", boxShadow: "0 2px 8px rgba(0,0,0,.07)" }}>
              <h3 style={{ color: "#e87722", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.75rem" }}>Fully Referenced</h3>
              <p style={{ color: "#333", lineHeight: 1.8 }}>
                Our dissertation work is fully referenced with latest articles and textbooks. We refer only peer-reviewed sources such as scholarly articles and textbook to select the topic. We refer database including Web of Science, ProQuest, Google Scholar, Business Source Complete, and latest newspapers articles such as Economic Times, Forbes, The Wall Street, The Economics to identify the industrial problem.
              </p>
            </div>
            <div style={{ background: "#fff", borderRadius: "10px", padding: "2rem", boxShadow: "0 2px 8px rgba(0,0,0,.07)" }}>
              <h3 style={{ color: "#e87722", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.75rem" }}>On Time</h3>
              <p style={{ color: "#333", lineHeight: 1.8 }}>
                Our work is delivered at a specified date and time. Our specific changes to the delivered work will be carried out within 45 days of delivery. We guarantee delivery of minor changes within 24 working hours and significant changes within 48 working hours. We acknowledge all your emails within 30 minutes of working hours. Further any delay in the delivery can be raised at customersupport@tutorsindia.com
              </p>
            </div>
            <div style={{ background: "#fff", borderRadius: "10px", padding: "2rem", boxShadow: "0 2px 8px rgba(0,0,0,.07)" }}>
              <h3 style={{ color: "#e87722", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.75rem" }}>Experienced Writers</h3>
              <p style={{ color: "#333", lineHeight: 1.8 }}>
                Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities from India, the US, and the UK. We identify the perfect SME according to your subject and area. Expert is selected through a stringent selection process including the signing of non-disclosure and confidentiality agreement. You can be very sure about the quality of the work since expert writer is identified as per International Research Experience
              </p>
            </div>
            <div style={{ background: "#fff", borderRadius: "10px", padding: "2rem", boxShadow: "0 2px 8px rgba(0,0,0,.07)" }}>
              <h3 style={{ color: "#e87722", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.75rem" }}>Our Guarantees</h3>
              <p style={{ color: "#333", lineHeight: 1.8 }}>
                (1) Unlimited Revision for the work being committed. (2) We ensure on-time delivery (3) We support 24/7. (4) Our word count committed does not include references and bibliography &amp; help you to locate the sources cited (5) Ensure three-level quality check including Technical QC, Editor QC and final check against the requirement (6) Confidentiality of the information (7) Plagiarism free work – less than 5% percent. (8) Only experienced and subject specific writers will be allotted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#fff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.5rem", fontWeight: 700, marginBottom: "2rem", textAlign: "center" }}>
            Frequently Asked Questions
          </h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ background: "#f0f4ff", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2a6c", fontSize: "1.5rem", fontWeight: 700, marginBottom: "2rem", textAlign: "center" }}>
            Voice of Our customer
          </h2>
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* Order Now CTA */}
      <section style={{ background: "#1a2a6c", color: "#fff", padding: "3rem 1rem", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Order Now</h2>
          <p style={{ opacity: 0.9, marginBottom: "2rem", lineHeight: 1.7 }}>
            Invest in your career by availing language editing help from the UK &amp; the US Qualified researchers
          </p>
          <Link href="/order" style={{ background: "#e87722", color: "#fff", padding: ".875rem 2.5rem", borderRadius: "6px", fontWeight: 700, textDecoration: "none", fontSize: "1.05rem" }}>
            Get Started Now
          </Link>
        </div>
      </section>
    </>
  );
}
