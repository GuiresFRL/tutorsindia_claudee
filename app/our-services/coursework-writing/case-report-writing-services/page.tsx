'use client';

import Link from 'next/link';
import { useState } from 'react';

const faqs = [
  {
    q: 'What Tutors India will deliver along with the Case report writing services: Service description?',
    a: 'You need to specify the particular service that you are looking for whether, you required summary or critical evaluation or mixed. When you order for case report writing service, we provide 100-250 words.',
  },
  {
    q: 'What Tutors India will deliver along with the Case report writing services: Service description?',
    a: 'After the order confirmed, we allocate the special team to scrutinize the work in terms of availability necessary requirements that would be essential to complete 5o ask during the initial stage of your work to send the requirement.',
  },
  {
    q: 'Why Tutors India is better in case report writing compare to others.',
    a: 'We are included more competitive advantage that we implement like highly experience and skillful writers, 100% plagiarism free work, on-time delivery, affordable prices, brainstorming sessions*, and many more that why we are stand as the outstanding case service provider in the US, UK and Australian countries compare to other academic service providers.',
  },
  {
    q: 'Who will write my case report writing?',
    a: 'We have a team of brilliant expertise who will write case report writing on any topic or subjects. Our writers are passionate and talented in working any essays by submit their case report writing work with more professional way. Our writers are highly qualified and trained in the academic writing field so know how to write your case report-writing, critical review, reflective report, dissertation, and research essays and terms paper on any topic.',
  },
  {
    q: 'How quickly can I Get my case report?',
    a: 'After getting the Topic of your case report, we will talk with our writers to set the timeline. Even, we are ready to offer the high quality of Case report on urgent basis. We ensure that our essay papers will delivered on Time.',
  },
  {
    q: 'Can I get some of samples of case report writing?',
    a: 'Yes, we share some of the sample case report writing works so it is easy for students to analyze of our quality of our works.',
  },
];

const testimonials = [
  { author: 'Amelia Brooks, UK', text: "Honestly, I didn't expect this level of quality. The team understood exactly what I needed and delivered work that felt genuinely professional. My confidence went from stressed to unstoppable." },
  { author: 'Oliver Bennett, UK', text: "I was stuck, frustrated, and running out of time. Tutors India stepped in at the perfect moment and turned everything around faster than I imagined. Worth every bit." },
  { author: 'Layla Al Mansoori', text: "The attention to detail was incredible. It didn't feel like I was working with a service provider — it felt like I had an expert academic partner guiding me throughout." },
  { author: 'Hassan Al Falasi, UAE', text: "My research finally started making sense after working with this team. Their guidance simplified complex ideas and gave my project the structure it was missing." },
  { author: 'Charlotte Reed, UK', text: "I submitted my work with complete confidence for the first time ever. The quality, formatting, and clarity were all beyond what I hoped for." },
  { author: 'Zain Al Hashmi, UAE', text: "The team handled everything professionally from start to finish. Timely updates, quick responses, and excellent academic quality — exactly what students need during stressful deadlines." },
  { author: 'David Morrison', text: "I was really struggling with my final semester master's degree, that's when I heard about Tutors India. They really guided me the whole way to produce research proposal just from the idea of a research title. The level of detail which went into creating the research proposal is astonishing. The technical concepts they advised for methodology were very advanced and algorithms used were state of the art. Would definitely recommend Tutors India to anyone who is struggling to complete their research work." },
  { author: 'Isabella', text: "The submission procedure was simple. Likewise, the peer review procedure was straightforward and completed on time. I really appreciate their taking the time to include a brief profile of the authors. I would recommend Tutors India for case report publication." },
  { author: 'Audrey', text: "I express my sincere gratitude to the team of Tutors India for guiding me to complete my case report. They prepared the case report for my research proposal and also guided me with thorough instructions. The support is fantastic!" },
];

function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div>
      {faqs.map((faq, i) => (
        <div key={i} style={{ borderBottom: '1px solid #e2e8f0', marginBottom: 8 }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '14px 0', cursor: 'pointer', fontWeight: 600, fontSize: 16, color: '#1a2a6c', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          >
            {faq.q}
            <span style={{ fontSize: 22, color: '#e87722', marginLeft: 12 }}>{open === i ? '−' : '+'}</span>
          </button>
          {open === i && (
            <div style={{ padding: '0 0 14px 0', color: '#334155', lineHeight: 1.7 }}>{faq.a}</div>
          )}
        </div>
      ))}
    </div>
  );
}

function TestimonialSlider() {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ background: '#f8fafc', borderRadius: 12, padding: '32px 40px', maxWidth: 700, margin: '0 auto', boxShadow: '0 2px 12px rgba(30,58,138,0.08)' }}>
        <p style={{ fontSize: 17, color: '#334155', lineHeight: 1.8, fontStyle: 'italic', marginBottom: 20 }}>"{t.text}"</p>
        <div style={{ fontWeight: 700, color: '#1a2a6c' }}>— {t.author}</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 24 }}>
        <button onClick={() => setIdx((idx - 1 + testimonials.length) % testimonials.length)} style={{ background: '#1a2a6c', color: '#fff', border: 'none', borderRadius: '50%', width: 40, height: 40, cursor: 'pointer', fontSize: 18 }}>‹</button>
        <button onClick={() => setIdx((idx + 1) % testimonials.length)} style={{ background: '#e87722', color: '#fff', border: 'none', borderRadius: '50%', width: 40, height: 40, cursor: 'pointer', fontSize: 18 }}>›</button>
      </div>
    </div>
  );
}

export default function CaseReportWritingServicesPage() {
  return (
    <main style={{ fontFamily: 'Georgia, serif', color: '#1e293b' }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)', color: '#fff', padding: '72px 24px 60px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h1 style={{ fontFamily: 'Merriweather, serif', fontSize: 'clamp(26px,4vw,42px)', fontWeight: 800, marginBottom: 20, lineHeight: 1.25 }}>
            The US / UK Report Writing Service
          </h1>
          <h2 style={{ fontSize: 'clamp(16px,2.2vw,22px)', fontWeight: 400, color: '#f9c74f', marginBottom: 12, lineHeight: 1.5 }}>
            UK Report Writing at Tutors India will be strictly in British English, strictly follow university requirement including Citation and formatting. Our team of US &amp; British Writers guarantees your grade
          </h2>
        </div>
      </section>

      {/* Qualified researchers */}
      <section style={{ padding: '56px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Merriweather, serif', fontSize: 28, color: '#1a2a6c', marginBottom: 12 }}>
            Your Report is written by qualified and experienced researchers from the US &amp; UK
          </h2>
          <h3 style={{ fontSize: 18, color: '#e87722', marginBottom: 16 }}>Your Report is written by qualified and experienced researchers from the US &amp; UK</h3>
          <p style={{ lineHeight: 1.8, fontSize: 16 }}>
            Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities from the US, UK &amp; India.
          </p>
        </div>
      </section>

      {/* Report Writing Service */}
      <section style={{ padding: '56px 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Merriweather, serif', fontSize: 28, color: '#1a2a6c', marginBottom: 12 }}>
            Report Writing Service
          </h2>
          <h3 style={{ fontSize: 18, color: '#e87722', marginBottom: 16 }}>Report Writing Service</h3>
          <p style={{ lineHeight: 1.8, fontSize: 16 }}>
            A case study design provides an opportunity to collect research data from various sources while utilizing different data collection techniques to take advantage of multiple sources of evidence. According to Yin, a rigorous research design is essential to guide a researcher throughout a study. Case study researchers explore, describe, and depict a setting, an individual, or a situation. Our team of expertise has a capability to handle any type of case study such as medical /nursing (case report), business case study (specific company) or scenario based.
          </p>
        </div>
      </section>

      {/* University guidelines */}
      <section style={{ padding: '56px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Merriweather, serif', fontSize: 28, color: '#1a2a6c', marginBottom: 12 }}>
            Reports are written with utmost care based on your specific university guidelines &amp; Specifications
          </h2>
          <h3 style={{ fontSize: 18, color: '#e87722', marginBottom: 16 }}>Reports are written with utmost care based on your specific university guidelines &amp; Specifications</h3>
          <p style={{ lineHeight: 1.8, fontSize: 16 }}>
            We write case report from a GCSE level essay to a PhD level model, at an affordable rates including planning, statistical analysis, proofreading and critiquing.
          </p>
        </div>
      </section>

      {/* UK/US Reflective Report Writing Writing Service */}
      <section style={{ padding: '56px 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Merriweather, serif', fontSize: 28, color: '#1a2a6c', marginBottom: 12 }}>
            UK/ the US Reflective Report Writing Writing Service
          </h2>
          <h3 style={{ fontSize: 18, color: '#e87722', marginBottom: 16 }}>UK/ the US Reflective Report Writing Writing Service</h3>
          <p style={{ lineHeight: 1.8, fontSize: 16 }}>
            Our specific UK essay writing demonstrates the ability to communicate complex ideas critically, concisely, and clearly..
          </p>
        </div>
      </section>

      {/* Simply easy & Straightforward */}
      <section style={{ padding: '56px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Merriweather, serif', fontSize: 28, color: '#1a2a6c', marginBottom: 12 }}>
            UK Report Writing specific is Simply easy &amp; Straightforward
          </h2>
          <h3 style={{ fontSize: 18, color: '#e87722', marginBottom: 16 }}>UK Report Writing specific is Simply easy &amp; Straightforward</h3>
          <p style={{ lineHeight: 1.8, fontSize: 16 }}>
            Our UK Case Report writing help guarantees that your essay is confidential, and so you do not have to worry about it. Just send us your essay topic along with the deadline and see the results that are far justified and mark the success of your case report
          </p>
        </div>
      </section>

      {/* What Services do we offer */}
      <section style={{ padding: '56px 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Merriweather, serif', fontSize: 28, color: '#1a2a6c', marginBottom: 12 }}>
            What Services do we offer under Report Writing?
          </h2>
          <h3 style={{ fontSize: 18, color: '#e87722', marginBottom: 16 }}>What Services do we offer under Report Writing?</h3>
          <p style={{ lineHeight: 1.8, fontSize: 16, marginBottom: 32 }}>
            We write complete essay from the introduction to recommendations. Although it looks simple, but in practical, it's a tedious task to complete each and every step.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 24 }}>
            {[
              { title: 'Basic', desc: 'Developed based on the relevant sources, a reasonable attempt at finding an area that warrant research & evidence of an attempt to provide critical evaluation but mainly descriptive.' },
              { title: 'Advanced', desc: 'Wide range of sources, a clear identification of research gap in the literature along with aim and research questions' },
              { title: 'Premium', desc: 'Refers to a wide range of seminal research with throughout engagement using latest resources. A solid gap would be identified based on the current literature & justified thoroughly & Excellent critical analysis would be shown (upgradable)' },
            ].map((tier) => (
              <div key={tier.title} style={{ background: '#fff', borderRadius: 10, padding: 28, boxShadow: '0 2px 10px rgba(30,58,138,0.08)', borderTop: '4px solid #e87722' }}>
                <h3 style={{ fontFamily: 'Merriweather, serif', fontSize: 20, color: '#1a2a6c', marginBottom: 10 }}>{tier.title}</h3>
                <p style={{ lineHeight: 1.7, color: '#475569' }}>{tier.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Subject Matter */}
      <section style={{ padding: '56px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Merriweather, serif', fontSize: 28, color: '#1a2a6c', marginBottom: 12 }}>
            Specialized Subject Matter Expertise across the globe
          </h2>
          <h3 style={{ fontSize: 18, color: '#e87722', marginBottom: 16 }}>Specialized Subject Matter Expertise across the globe</h3>
          <p style={{ lineHeight: 1.8, fontSize: 16 }}>
            We offer topic Selection for Management, Social Science, Engineering, Technology, Life Science, Medical, Arts &amp; Literature / Linguistics, and many more
          </p>
        </div>
      </section>

      {/* Our deliverables */}
      <section style={{ padding: '56px 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Merriweather, serif', fontSize: 28, color: '#1a2a6c', marginBottom: 12 }}>
            Our deliverables while you order custom UK Report writing service
          </h2>
          <h3 style={{ fontSize: 18, color: '#e87722', marginBottom: 16 }}>Our deliverables while you order custom UK Report writing service</h3>
          <p style={{ lineHeight: 1.8, fontSize: 16 }}>
            Essay writing services from Tutors India research writing services is simply easy and straightforward. You will get the reply within 30 minutes which would enable to place your order quickly without any delay in submissions. We would provide executive summary /abstract, free articles used for writing the part dissertation, SPSS data sheet and output, questionnaire or semi-structured interview questions and any other information that we have used to write the dissertation such as reflective log or diary.
          </p>
        </div>
      </section>

      {/* How Does it work */}
      <section style={{ padding: '56px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Merriweather, serif', fontSize: 28, color: '#1a2a6c', marginBottom: 12 }}>
            How Does it work?
          </h2>
          <h3 style={{ fontSize: 18, color: '#e87722', marginBottom: 16 }}>How Does it work?</h3>
          <p style={{ lineHeight: 1.8, fontSize: 16 }}>
            After the order is confirmed, we allocate the special team to scrutinize the work regarding necessary availability requirements that would be essential to complete the work. Once the process is done, in case there are any queries, we ensure to ask during the initial stage of your work and send you the outline proposed for writing secondary data collection based dissertation. Once the outline along with the chapterization plan is approved, we will dispatch the work in chapters, and update you on the progress of your work. Our exclusive coordinators would get in touch with you to clarify any queries. You can also pay in instalments and work will be started as soon as receive the payments. We deliver your work as per the schedule fixed and agreed or even before the schedule.
          </p>
        </div>
      </section>

      {/* Well Structured */}
      <section style={{ padding: '56px 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Merriweather, serif', fontSize: 28, color: '#1a2a6c', marginBottom: 12 }}>
            Our Report Writing Services Is Well Structured
          </h2>
          <h3 style={{ fontSize: 18, color: '#e87722', marginBottom: 16 }}>Our Report Writing Services Is Well Structured</h3>
          <ul style={{ lineHeight: 2, fontSize: 16, paddingLeft: 24 }}>
            <li>Cover Page (Include student names and student Ids)</li>
            <li>Executive Summary (If appropriate – should be written last to focus on key points/findings)</li>
            <li>Introduction (Current Situation Analysis and pertinent Background including a synopsis of the relevant information from the case analysis tool short form.)</li>
            <li>Body May include:
              <ul style={{ paddingLeft: 24, lineHeight: 2 }}>
                <li>Target Market Identification</li>
                <li>Market Needs</li>
                <li>Forms of IMC in use</li>
                <li>Analysis of Case</li>
                <li>Key Issues/Goals</li>
                <li>Recommendations</li>
              </ul>
            </li>
          </ul>
          <p style={{ lineHeight: 1.8, fontSize: 16, marginTop: 16 }}>Should include:</p>
          <ul style={{ lineHeight: 2, fontSize: 16, paddingLeft: 24 }}>
            <li>Decision Criteria</li>
            <li>Assumptions</li>
            <li>Data Analysis (analysis in appendix and summary info in body)</li>
            <li>Preferred Alternative with rationale.</li>
          </ul>
          <p style={{ lineHeight: 1.8, fontSize: 16, marginTop: 16 }}>
            <strong>Justification/Predicted Outcome:</strong> It is important that all guesstimates or creative ideas be founded upon some marketing rationale and a solid understanding of the metrics related to the target market and anticipated financial changes/impact. Using target market analysis and education estimation of population, $, and units is appropriate. If you are not confident in your ability to do so…PLEASE FEEL FREE TO DISCUSS "HOW TO" as a team with the professor well in advance of your
          </p>
        </div>
      </section>

      {/* Convince supervisory committee */}
      <section style={{ padding: '56px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Merriweather, serif', fontSize: 28, color: '#1a2a6c', marginBottom: 12 }}>
            Reflective Report Writing need to convince the Supervisory committee
          </h2>
          <h3 style={{ fontSize: 18, color: '#e87722', marginBottom: 16 }}>Reflective Report Writing need to convince the Supervisory committee</h3>
          <p style={{ lineHeight: 1.8, fontSize: 16 }}>
            We also offer specific essay from the introduction to recommendations. Further, we offer an expository essay, persuasive essay, descriptive essay and narrative essays. Though it looks very simple, it is a tedious task to complete each and every step.
          </p>
        </div>
      </section>

      {/* Free Offers */}
      <section style={{ padding: '56px 24px', background: '#1a2a6c', color: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Merriweather, serif', fontSize: 28, color: '#f9c74f', marginBottom: 12 }}>
            Free Offers along with your Reflective Report Writing Services
          </h2>
          <h3 style={{ fontSize: 18, color: '#e87722', marginBottom: 16 }}>Free Offers along with your Reflective Report Writing Services</h3>
          <p style={{ lineHeight: 1.8, fontSize: 16 }}>
            We deliver more than your expectation – Free Tutoring for the work being carried out – to speak confidently with your program supervisors
          </p>
        </div>
      </section>

      {/* Exclusive */}
      <section style={{ padding: '56px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Merriweather, serif', fontSize: 28, color: '#1a2a6c', marginBottom: 12 }}>
            Our Report Writing service is exclusive
          </h2>
          <h3 style={{ fontSize: 18, color: '#e87722', marginBottom: 16 }}>Our Report Writing service is exclusive</h3>
        </div>
      </section>

      {/* Why Choose Tutors India */}
      <section style={{ padding: '56px 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Merriweather, serif', fontSize: 28, color: '#1a2a6c', textAlign: 'center', marginBottom: 8 }}>
            Why Choose Tutors India: Report Writing Service features
          </h2>
          <h3 style={{ fontSize: 18, color: '#e87722', textAlign: 'center', marginBottom: 16 }}>Why Choose Tutors India: Report Writing Service features</h3>
          <p style={{ textAlign: 'center', color: '#475569', marginBottom: 36 }}>Qualified researchers, unlimited revision, only peer reviewed articles, plagiarism report, 24/7 support, 100% match with the requirement and on time delivery</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }}>
            {[
              {
                title: 'A complete secure & Confidential Service',
                desc: 'We offer 100% confidentiality of client\'s personal details, payment details, project works, copyrights of research works',
              },
              {
                title: 'Fully Referenced',
                desc: 'Our dissertation proposal work is fully referenced with latest articles and textbooks. We refer only peer reviewed sources such as scholarly articles and textbook to write the reserch proposal. Further, we also read latest news papers articles such as Economic Times, Forbes, The Economics etc to identify the industrial problem.',
              },
              {
                title: 'Our Guarantees',
                desc: 'Word Count Committed: Word count does not include references and bibliography and we help you to locate the sources cited. Quality Check: We have stringent quality checking process. Unlimited revisions: We provide unlimited revisions as per the initial commitment.',
              },
              {
                title: 'Plagiarism Free Work',
                desc: 'We are aware of the consequences of plagiarism. Hence, research proposal is completely plagiarism free, where we ensure to acknowledge the authors of all publication, and re-write in our own words, if there is a necessity to quote an author ad verbatim, then we use quotation marks and italics to indicate the same.',
              },
              {
                title: 'On Time',
                desc: 'Our work is delivered on specified time. Our specific changes to the delivered work within 45 days of delivery. We guarantee delivery of minor changes within 24 working hours and significant changes within 48 working hours. We acknowledge all your emails within 30 minutes of working hours',
              },
              {
                title: 'Experienced Writers',
                desc: 'Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities from India, the US, and the UK.',
              },
            ].map((card) => (
              <div key={card.title} style={{ background: '#fff', borderRadius: 10, padding: 28, boxShadow: '0 2px 10px rgba(30,58,138,0.08)', borderTop: '4px solid #1a2a6c' }}>
                <h3 style={{ fontFamily: 'Merriweather, serif', fontSize: 18, color: '#1a2a6c', marginBottom: 10 }}>{card.title}</h3>
                <p style={{ lineHeight: 1.7, color: '#475569', fontSize: 15 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ padding: '56px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Merriweather, serif', fontSize: 28, color: '#1a2a6c', textAlign: 'center', marginBottom: 32 }}>
            Frequently Asked Questions
          </h2>
          <FaqAccordion />
        </div>
      </section>

      {/* Track Your Report */}
      <section style={{ padding: '56px 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Merriweather, serif', fontSize: 28, color: '#1a2a6c', marginBottom: 12 }}>
            Track Your Report through our customized CRM
          </h2>
          <h3 style={{ fontSize: 18, color: '#e87722', marginBottom: 16 }}>Track Your Report through our customized CRM</h3>
          <p style={{ lineHeight: 1.8, fontSize: 16 }}>
            You need not check your email frequently rather your report is safe on our customizable CRM and you can download at any point of time by using your unique username and password.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '56px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Merriweather, serif', fontSize: 28, color: '#1a2a6c', textAlign: 'center', marginBottom: 36 }}>
            Voice of Our customer
          </h2>
          <TestimonialSlider />
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '56px 24px', background: 'linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)', textAlign: 'center', color: '#fff' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Merriweather, serif', fontSize: 30, marginBottom: 16 }}>Order Now</h2>
          <p style={{ fontSize: 17, marginBottom: 32, opacity: 0.9 }}>Get expert case report writing assistance from qualified US &amp; UK researchers. Confidential, plagiarism-free, and delivered on time.</p>
          <Link href="/contact" style={{ background: '#e87722', color: '#fff', padding: '14px 40px', borderRadius: 8, fontWeight: 700, fontSize: 18, textDecoration: 'none', display: 'inline-block' }}>
            Order Now
          </Link>
        </div>
      </section>
    </main>
  );
}
