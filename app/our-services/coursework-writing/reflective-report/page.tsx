import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "The UK Reflective Report Writing Help | Tutors India",
  description: "UK Reflective Report Writing Help at Tutors India help students to prepare effective reflective log, or account or report. We strictly write in British English, crisp expression, spelling, punctuation, grammar with accurate comprehensive referencing according to the university requirement.",
};

const faqs = [
  {
    q: "What Tutors India will deliver along with the reflective writing services: Service description?",
    a: "You need to specify the particular service that you are looking for whether, you required summary or critical evaluation or mixed. When you order for reflective service, we provide 100-250 words.",
  },
  {
    q: "How does it Work?",
    a: "After the order has confirmed, we allocate the special team to scrutinize the work in terms of availability necessary requirements that would be essential to complete the work. Once the process is complete, if any queries, we ensure to ask during the initial stage of your work to send through email.",
  },
  {
    q: "Why should I consider taking Tutors India for my reflective report services?",
    a: "Tutors India has an exceptional professional team to deliver excellent reflective report services for the scholars around the globe. Our talented team will ensure that your report is complete with referenced bibliography. We delegate qualified and experienced writers based on your geographical locations such as UK or US. We ensure that all our works are free from plagiarism. Our price structure ensures that scholars always get best discount offer prices each time. The reflective report will compose of the content page, title page, abstract or executive summary and has written based on the theory. The draft report will be sending for your confirmation. Hence, with a well-defined structure, you can be rest assured for a complete exclusive reflective report at all times. Our sales and support team along with professional writers are waiting to serve your reflective report writing.",
  },
  {
    q: "How can you help me in writing a reflective report?",
    a: "Our experts have extensive experience in addressing your reflective report requirement. Our team will extensively discuss to understand theoretical knowledge thoroughly and how to turn it to your practical experience. We will apply different hypothesis to support your concept and develop a comprehensive and satisfying reflective report experience.",
  },
  {
    q: "How quickly can I Get my Reflective review?",
    a: "After getting the task requirement, we will talk with our writers to set the timeline but even we are ready to offer the high quality of reflective report on urgent basis. We ensure that our reflective report papers will delivered on Time.",
  },
  {
    q: "Do you provide unlimited revision or refund on your reflective report?",
    a: "At Tutors India, we believe in giving 100% customer satisfaction so it is less chance to get for the revisions but however if you have any suggestion or feedback to change we ready to offer unlimited revisions for reflective report at free of cost. We never offer refund our essay but we do offer free revisions. After receiving the review, we need one day for slight changes and maximum one week for Substantial changes.",
  },
];

const testimonials = [
  {
    quote: "Honestly, I didn't expect this level of quality. The team understood exactly what I needed and delivered work that felt genuinely professional. My confidence went from stressed to unstoppable.",
    author: "Amelia Brooks",
    location: "UK",
    avatar: "/images/testimonials/t15.jpg",
  },
  {
    quote: "I was stuck, frustrated, and running out of time. Tutors India stepped in at the perfect moment and turned everything around faster than I imagined. Worth every bit.",
    author: "Oliver Bennett",
    location: "UK",
    avatar: "/images/testimonials/t13.jpg",
  },
  {
    quote: "The attention to detail was incredible. It didn't feel like I was working with a service provider — it felt like I had an expert academic partner guiding me throughout.",
    author: "Layla Al Mansoori",
    avatar: "/images/testimonials/t16.jpg",
  },
  {
    quote: "My research finally started making sense after working with this team. Their guidance simplified complex ideas and gave my project the structure it was missing.",
    author: "Hassan Al Falasi",
    location: "UAE",
    avatar: "/images/testimonials/t17.jpg",
  },
  {
    quote: "I submitted my work with complete confidence for the first time ever. The quality, formatting, and clarity were all beyond what I hoped for.",
    author: "Charlotte Reed",
    location: "UK",
    avatar: "/images/testimonials/t18.jpg",
  },
  {
    quote: "The team handled everything professionally from start to finish. Timely updates, quick responses, and excellent academic quality — exactly what students need during stressful deadlines.",
    author: "Zain Al Hashmi",
    location: "UAE",
    avatar: "/images/testimonials/t19.jpg",
  },
];

const subjects = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies",
  "Marketing & Communication", "Engineering & Technology", "Natural Sciences & Mathematics",
  "Biological & Life science", "Economics & Administration", "Humanities & Social Science",
  "Law", "Medicine & Health", "Education & Training",
  "Journalism & Media", "Agriculture & Forestry", "Computer Science & IT",
  "Hospitality, Leisure & Sports",
];

export default function ReflectiveReportPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}
            <Link href="/our-services/coursework-writing/" style={{ color: "#a0b8e0" }}>Coursework Writing</Link>{" / "}
            <span style={{ color: "#fff" }}>Reflective Report</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.4rem,3vw,2rem)", lineHeight: 1.3, marginBottom: "14px" }}>
            The UK Reflective Report Writing Help
          </h1>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(0.9rem,2vw,1.1rem)", lineHeight: 1.5, color: "#c5d5f0", fontWeight: 600, marginBottom: "10px" }}>
            Are you looking for a high-quality critical Reflective Report that shed light on professional goals, attributes, professional future, your existing knowledge and skills, personal learning goals, course reflection, &amp; personal reflection on projects?
          </h2>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1rem,2.5vw,1.4rem)", color: "#f9c74f", fontWeight: 700, marginBottom: "12px" }}>
            Then You&apos;ve Certainly Reached the Right place
          </h2>
          <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "20px" }}>
            UK Reflective Report Writing Help at Tutors India help students to prepare effective reflective log, or account or report. We strictly write in British English, crisp expression, spelling, punctuation, grammar with accurate comprehensive referencing according to the university requirement.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, textDecoration: "none" }}>Place an Order</Link>
            <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, textDecoration: "none" }}>Contact Us</Link>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>

        {/* Qualified Researchers */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Your Reflective Report is written by qualified and experienced researchers from the US &amp; UK</h2>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", fontWeight: 700, color: "#e87722", marginBottom: "10px" }}>Your Reflective Report is written by qualified and experienced researchers from the US &amp; UK</h3>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
            Our Reflective Report writers have experience in specific domain experience, aware of theories of learning and educational degrees from international and top-ranked universities from India, the US, and the UK.
          </p>
        </div>

        {/* Central to the Research Process */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>UK Reflective Report Writing Service – Central to the Research Process</h2>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", fontWeight: 700, color: "#e87722", marginBottom: "12px" }}>UK Reflective Report Writing Service – Central to the Research Process</h3>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
            Reflection aid learning in addition to the promotion of emotional intelligence and broaden communication skills. &ldquo;A reflection in a mirror is an exact replica of what is in front of it. Reflection in professional practice, however, gives us back, not what is, but what might be, an improvement on the original&rdquo;. &ldquo;Put simply; reflection is about maximizing deep and minimizing surface approaches to learning.&rdquo; Thus, the value of reflection in developing an in-depth understanding of complex issues based on rational thought analyzing experience, and available evidence, proof, voucher, warrant, thereby attempting to find the meaning in it.
          </p>
        </div>

        {/* University Guidelines */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Reflective Reports are written with utmost care based on your specific university guidelines &amp; Specifications</h2>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", fontWeight: 700, color: "#e87722", marginBottom: "12px" }}>Reflective Reports are written with utmost care based on your specific university guidelines &amp; Specifications</h3>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
            Understanding this view, at Tutors India our experts write critical and deeper reflections using various learning theories models such as Gibbs (1988), Kolb&apos;s (1984) experiential learning cycle, etc. However, the choice of models of reflection upon practice will be based on the one suggested by your tutor. Further our experts would integrate both practice and theory through a process of reflection-in-action (occurring) or through a process of reflection-on-action (after the fact).
          </p>
        </div>

        {/* Strictly follows guidelines */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Our UK Reflective Report Writing Service strictly follows guidelines – theory of reflection</h2>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", fontWeight: 700, color: "#e87722", marginBottom: "12px" }}>Our UK Reflective Report Writing Service strictly follows guidelines – theory of reflection</h3>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
            Our specific UK Reflective Report writing demonstrates the succinct writing, critical analysis, and information literacy. Our general guidelines include a description, feelings, evaluation, analysis, conclusion (general and specific) and personal action plans.
          </p>
        </div>

        {/* Rubric Scale */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>UK Reflective Report Writing follows specific rubric scale</h2>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", fontWeight: 700, color: "#e87722", marginBottom: "12px" }}>UK Reflective Report Writing follows specific rubric scale</h3>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
            Our Reflective Report writing demonstrates the ability to communicate complex ideas critically, concisely, and clearly. Our professional UK Reflective Report writers have completed around 10000 Reflective Report successfully. We reflect three areas of reflections viz., technical /academic component, social group components, and individual or self-components. Further, personal reflection may shed light on self, university (work based learning and higher education) and placement (organizational review).
          </p>
        </div>

        {/* Simply Easy & Straightforward */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Reflective Report Writing Service is Simply easy &amp; Straightforward</h2>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", fontWeight: 700, color: "#e87722", marginBottom: "12px" }}>Reflective Report Writing Service is Simply easy &amp; Straightforward</h3>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
            Our Reflective Report writing help guarantees that your Reflective Report is confidential, and so you do not have to worry about it. Just send us your topic along with the deadline and see the results that are far justified and mark the success of your Reflective Report.
          </p>
        </div>

        {/* What Services do we offer – 3 tiers */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>What Services do we offer under UK Reflective Report Writing Service?</h2>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", fontWeight: 700, color: "#e87722", marginBottom: "16px" }}>We write complete master&apos;s dissertation from the introduction to recommendations. Although it looks simple, but in practical, it&apos;s a tedious task to complete each and every step.</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }} className="three-col-grid">
            {[
              { tier: "Basic", color: "#e0e7ff", border: "#b0bfff", desc: "Developed based on the relevant sources, a reasonable attempt at finding an area that warrant research & evidence of an attempt to provide critical evaluation but mainly descriptive." },
              { tier: "Advanced", color: "#fff3e0", border: "#ffd0a0", desc: "Wide range of sources, a clear identification of research gap in the literature along with aim and research questions." },
              { tier: "Premium", color: "#e8f5e9", border: "#a5d6a7", desc: "Refers to a wide range of seminal research with throughout engagement using latest resources. A solid gap would be identified based on the current literature & justified thoroughly & Excellent critical analysis would be shown (upgradable)." },
            ].map(t => (
              <div key={t.tier} style={{ background: t.color, border: `1px solid ${t.border}`, borderRadius: "10px", padding: "20px" }}>
                <div style={{ fontFamily: "Merriweather,serif", fontWeight: 700, fontSize: "1.05rem", color: "#1a2a6c", marginBottom: "10px" }}>{t.tier}</div>
                <p style={{ fontSize: "0.85rem", color: "#444", lineHeight: 1.7, margin: 0 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Specialized Subject Matter Expertise */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Specialized Subject Matter Expertise across the globe</h2>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", fontWeight: 700, color: "#e87722", marginBottom: "10px" }}>We offer complete specific master&apos;s dissertation writing service for Management, Finance &amp; Economics, Social Science, Engineering, Technology, Life Science, Medicine, Arts &amp; Literature / Linguistics, and more</h3>
          <p style={{ color: "#666", fontSize: "0.96rem", marginBottom: "14px" }}>We have a team of 2000+ expertise across the subjects &amp; countries (including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine)</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {subjects.map(s => (
              <span key={s} style={{ background: "#fff", border: "1px solid #c5d0ea", borderRadius: "20px", padding: "6px 14px", fontSize: "0.82rem", color: "#1a2a6c", fontWeight: 500 }}>{s}</span>
            ))}
          </div>
        </div>

        {/* Our deliverables */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Our deliverables while you order custom Reflective Report Writing Service</h2>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", fontWeight: 700, color: "#e87722", marginBottom: "14px" }}>Reflective Report writing services from Tutors India research writing services is simply easy and straightforward. You will get the reply within 30 minutes which would enable to place your order quickly without any delay in submissions.</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "14px" }} className="two-col-grid">
            {[
              { t: "Your Reflective Report", d: "Check the sample topic selection from our expert writers." },
              { t: "Quality Assurance", d: "We ensure quality at every stage and the process." },
              { t: "Plagiarism Report", d: "We deliver the document after scanning for plagiarism." },
              { t: "Reflective report customer interaction report", d: "We interact with the customer at every stage in terms of amendments, query and delivery." },
            ].map(f => (
              <div key={f.t} style={{ background: "#f8f9ff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px" }}>
                <h3 style={{ fontSize: "0.94rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{f.t}</h3>
                <p style={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.65, margin: 0 }}>{f.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How Does It Work */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>How Does it work?</h2>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", fontWeight: 700, color: "#e87722", marginBottom: "12px" }}>How Does it work?</h3>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
            After the order is confirmed, we allocate the special team to scrutinize the work regarding necessary availability requirements that would be essential to complete the work. Once the process is done, in case there are any queries, we ensure to ask during the initial stage of your work and send you the outline proposed for writing secondary data collection based dissertation. Once the outline along with the chapterization plan is approved, we will dispatch the work in chapters, and update you on the progress of your work. Our exclusive coordinators would get in touch with you to clarify any queries. You can also pay in installments and work will be started as soon as receive the payments. We deliver your work as per the schedule fixed and agreed or even before the schedule.
          </p>
        </div>

        {/* UK Reflective Report Writing Service Features */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>UK Reflective Report Writing Service Features</h2>

          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.15rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Different Types Of Reflective Writing Services Available At Tutors India</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "14px", marginBottom: "24px" }} className="two-col-grid">
            {[
              { t: "Double Entry / Journal", d: "Based on reflection of your course content, you will be asked to write weekly entries throughout a semester." },
              { t: "Learning Diary", d: "A diary to communicate in writing with other members of a group, therefore it requires group participation." },
              { t: "Reflective Note", d: "A personal reaction to legal issues." },
              { t: "Log Book", d: "What you have done in the present will be recorded so that it can be used to reflect on past actions." },
              { t: "Essay Diary", d: "You are required to do a critique of various sources of evidence that might be included in the essay (in the form of annotated bibliography)." },
            ].map(f => (
              <div key={f.t} style={{ background: "#f8f9ff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px" }}>
                <h3 style={{ fontSize: "0.96rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{f.t}</h3>
                <p style={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.65, margin: 0 }}>{f.d}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.15rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Further, we also ensure the following</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              "Length (quality not quantity)",
              "Legibility and presentation",
              "Number of entries",
              "Clarity in presentation and good observation",
              "Evidence of speculation",
              "Willingness to revise ideas",
              "Self-assessment and honesty",
              "Self-awareness and thoroughness of reflection",
              "Detail and depth of reflective accounts",
              "Creative and critical thinking evidence",
              "Evidence of a deep approach to the subject",
              "Relationship of the entries to any coursework or theories",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "12px", background: "#f8f9ff", border: "1px solid #dde2ef", borderRadius: "8px", padding: "10px 16px", alignItems: "center" }}>
                <div style={{ width: "22px", height: "22px", background: "#e87722", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "0.75rem", flexShrink: 0 }}>✓</div>
                <span style={{ fontSize: "0.86rem", color: "#555" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Needs to convince supervisor */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>UK Reflective Report Writing needs to convince the supervisor</h2>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", fontWeight: 700, color: "#e87722", marginBottom: "10px" }}>UK Reflective Report Writing needs to convince the supervisor</h3>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "20px", fontSize: "1rem" }}>
            We write a complete Reflective Report that would convince your faculty. It will have three important but basic elements including &lsquo;retell, relate &amp; reflect.&rsquo;
          </p>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.15rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>UK Annotated Bibliography Writing needs to convince the supervisor</h2>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
            We write a complete Annotated Bibliography including time planning. Though it looks very simple, it is a tedious task to complete each and every step.
          </p>
        </div>

        {/* Our custom service is exclusive */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Our custom UK Reflective Report writing service is exclusive</h2>
          <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", fontWeight: 700, color: "#e87722", marginBottom: "10px" }}>Our custom UK Reflective Report writing service is exclusive</h3>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
            as we do not just provide chapter-wise dissertation writing service, but the rather clear explanation and justification for the choice.
          </p>
        </div>

        {/* Why Choose Tutors India + Guarantees */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "10px" }}>Why Choose Tutors India: Reflective Report Writing features</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "18px", fontSize: "1rem" }}>
            Qualified researchers, unlimited revision, only peer-reviewed articles, plagiarism report, 24/7 support, 100% match with the requirement and on time delivery.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "16px" }} className="two-col-grid">
            {[
              { t: "A complete secure & Confidential Service", d: "We offer 100% confidentiality of client's personal details, payment details, project works, and copyrights of research works. We ensure following for the conditionality, security & privacy: 1) All your projects are given unique reference codes 2) Documents are accessed only writers who signed NDA with Tutors India 3) Your financial information is protected b 128-bit secure socket layer (SSL) encryption." },
              { t: "Fully Referenced", d: "Our dissertation work is fully referenced with latest articles and textbooks. We refer only peer-reviewed sources such as scholarly articles and textbook to select the topic. We refer database including Web of Science, ProQuest, Google Scholar, Business Source Complete, and latest newspapers articles such as Economic Times, Forbes, The Wall Street, The Economics to identify the industrial problem." },
              { t: "Our Guarantees", d: "(1) Unlimited Revision for the work being committed. (2) We ensure on-time delivery (3) We support 24/7. (4) Our word count committed does not include references and bibliography & help you to locate the sources cited (5) Ensure three-level quality check including Technical QC, Editor QC and final check against the requirement (6) Confidentiality of the information (7) Plagiarism free work – less than 5% percent. (8) Only experienced and subject specific writers will be allotted." },
              { t: "Plagiarism Free Work", d: "We are aware of the consequences of plagiarism. Hence, topic selection is completely plagiarism Free. Our work is scanned against online sources in a similar way like WriteCheck or Turnitin. We wanted to ensure that our clients i.e., researchers and students are not finding any issues with regards to plagiarism and so we issue plagiarism-free certificate*. Our streamlined and high-quality research writing process ensures your dissertation is not just copy-pasted, but written only after brainstorming sessions with our team of professional researchers." },
              { t: "On Time", d: "Our work is delivered at a specified date and time. Our specific changes to the delivered work will be carried out within 45 days of delivery. We guarantee delivery of minor changes within 24 working hours and significant changes within 48 working hours. We acknowledge all your emails within 30 minutes of working hours. Further any delay in the delivery can be raised at customersupport@tutorsindia.com" },
              { t: "Experienced Writers", d: "Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities from India, the US, and the UK. We identify the perfect SME according to your subject and area. Expert is selected through a stringent selection process including the signing of non-disclosure and confidentiality agreement. You can be very sure about the quality of the work since expert writer is identified as per International Research Experience." },
            ].map(f => (
              <div key={f.t} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "18px" }}>
                <h3 style={{ fontSize: "0.96rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>{f.t}</h3>
                <p style={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.65, margin: 0 }}>{f.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>Frequently Asked Questions</h2>
          <FaqAccordion faqs={faqs} />
        </div>

        {/* Subject Matter Expertise by choice */}
        <div style={{ background: "#f0f4ff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px" }}>Your Annotated Bibliography is written by your choice of Subject Matter Expertise</h2>
          <p style={{ color: "#666", fontSize: "0.96rem", marginBottom: "8px" }}>We have a team of 2000+ expertise across the subjects &amp; countries (including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine)</p>
          <p style={{ color: "#666", fontSize: "0.96rem", marginBottom: "14px" }}>Tutors India has capability and skills to handle subjects across the field. We chose qualified and experienced subject specific expertise while you order your Ph.D. or Master&apos;s dissertation. We have more than 2000+ expertise working across the world who can handle arts, literature, sciences, engineering or medicine.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {subjects.map(s => (
              <span key={s} style={{ background: "#fff", border: "1px solid #c5d0ea", borderRadius: "20px", padding: "6px 14px", fontSize: "0.82rem", color: "#1a2a6c", fontWeight: 500 }}>{s}</span>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "18px" }}>Voice of Our customer</h2>
          <TestimonialSlider testimonials={testimonials} />
        </div>

        {/* Track Your Report */}
        <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "28px", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "12px" }}>Track Your Report through our customized CRM</h2>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
            You need not check email frequently rather your report is safe on our customizable CRM and you can download later at any point of time by using your unique username and password.
          </p>
        </div>

        {/* CTA */}
        <div style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", borderRadius: "12px", padding: "36px 28px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", color: "#fff", marginBottom: "10px" }}>Order Now</h2>
          <p style={{ color: "#c5d5f0", marginBottom: "20px", fontSize: "0.95rem" }}>Invest in your career by availing language editing help from the UK &amp; the US Qualified researchers</p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/order-now/" style={{ padding: "13px 32px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, textDecoration: "none" }}>Order Now</Link>
            <Link href="/contact-us/" style={{ padding: "13px 32px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, textDecoration: "none" }}>Contact Us</Link>
          </div>
        </div>

      </section>

      <style>{`
        @media(max-width:900px){.three-col-grid{grid-template-columns:1fr 1fr!important;}}
        @media(max-width:600px){.three-col-grid,.two-col-grid{grid-template-columns:1fr!important;}}
      `}</style>
    </>
  );
}
