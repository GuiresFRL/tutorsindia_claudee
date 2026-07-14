import type { Metadata } from 'next';
import FaqAccordion from '@/components/ui/FaqAccordion';
import TestimonialSlider from '@/components/ui/TestimonialSlider';

export const metadata: Metadata = {
  title: 'Pre-Submission Peer Review Service by Expert',
  description: 'Peer review and Pre Submission help – qualified and experienced researchers from the US & UK',
};

const faqs = [
  {
    q: 'What Types of Peer review Do You?',
    a: 'We offer comprehensive peer review services including: commentary on the claims stated in the study, commentary on the experimental design, text clarity evaluation, effective feedback on paper organization, English language editing, evaluation of scientific logic and hypothesis support, suggestions for altering text to stay within word count limits, and a final edit after you have made the changes as prescribed by your reviewers. We also offer Selection of Journal, Peer review, Editing and Formatting, Referencing, and Structuring services.',
  },
  {
    q: 'Why should I give any details and instructions to my order?',
    a: 'Providing details and instructions helps us allocate the right expert reviewer for your paper. After the order is confirmed, we allocate a special team to scrutinize the work. A PhD expert in your field will make necessary criticism pertaining to the organization, content, work and experimental design of your paper. Our exclusive coordinators get in touch with you to clarify any queries, ensuring the review is tailored to your specific needs.',
  },
  {
    q: 'Who Are Tutors india Professionals for writing the peer review ?',
    a: 'Our team of professionals having masters, PhDs and post-doctorates in relevant subject matter expertise supported by graphic designers and copy-editors, are not only proficient in writing but are passionate about liaising with diverse range of local and international clients. Our editors are native English speakers and professors from reputed Universities. Peer review and Pre Submission help is provided by qualified and experienced researchers from the US & UK.',
  },
  {
    q: 'How About Samples of Your Work?',
    a: 'You can check the sample topic selection from our expert writers on our website. We ensure quality at every stage and the process. We deliver the document after scanning for plagiarism and provide a plagiarism report. We interact with the customer at every stage in terms of amendments, query and delivery.',
  },
  {
    q: 'How do you meet high academic standards?',
    a: 'We ensure quality at every stage and the process. We ensure three-level quality check including Technical QC, Editor QC and final check against the requirement. The chances of your paper getting published solely depend on the selection of peer reviewer for your paper. We eliminate various factors that might hinder the publication of your paper by asking an unbiased expertise to judge and give views on the same before you submit the paper to a journal. Separate editors and managing editors are assigned the task of editing your paper for any language or grammatical errors.',
  },
  {
    q: 'What is the Time plan to complete your peer reviews?',
    a: 'You will get the reply within 30 minutes which would enable you to place your order quickly without any delay in submissions. We guarantee delivery of minor changes within 24 working hours and significant changes within 48 working hours. We acknowledge all your emails within 30 minutes of working hours. Our work is delivered at a specified date and time. Our specific changes to the delivered work will be carried out within 45 days of delivery.',
  },
];

const testimonials = [
  { author: 'George', quote: 'Tutors India is stretching out their services to help those seeking peer-review for the manuscript. With a team of one, they provided copyright form and separate cover letter with excellent readability and grammar usage. They also send out for re-review and help publish the manuscript. Thank you for all your help.' },
  { author: 'Isabella', quote: 'The submission procedure was simple. Likewise, the peer review procedure was straightforward and completed on time. I really appreciate their taking the time to include a brief profile of the authors. I would recommend Tutors India for case report publication.' },
  { author: 'Atharva', quote: 'Under tight deadlines and with high expectations, Tutors India was a pleasure to work with, on a high profile scientific peer-review process. The experts were professional, conscientious and thoroughly competent. Ultimately, a top guide to peer review your manuscript. Great services!' },
  { author: 'Amelia Brooks, UK', quote: "Honestly, I didn't expect this level of quality. The team understood exactly what I needed and delivered work that felt genuinely professional. My confidence went from stressed to unstoppable." },
  { author: 'Oliver Bennett, UK', quote: 'I was stuck, frustrated, and running out of time. Tutors India stepped in at the perfect moment and turned everything around faster than I imagined. Worth every bit.' },
  { author: 'Charlotte Reed, UK', quote: 'I submitted my work with complete confidence for the first time ever. The quality, formatting, and clarity were all beyond what I hoped for.' },
];

export default function PeerReviewSubmissionsPage() {
  return (
    <>
      <style>{`
        .three-col-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.5rem; }
        .four-col-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 1rem; }
        @media(max-width:768px){
          .three-col-grid,.four-col-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)', color: '#fff', padding: '4rem 1rem 3rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(1.5rem,4vw,2.5rem)', fontWeight: 800, marginBottom: '1.25rem', lineHeight: 1.2 }}>
            Peer review and Pre Submission help
          </h1>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem', opacity: 0.92 }}>
            Are you seeking journal support to publish your paper in a high-impact journal? Then&apos; You&apos;ve reached the right place
          </p>
          <p style={{ fontStyle: 'italic', opacity: 0.85, marginBottom: '2rem' }}>Then You&apos;ve Certainly Reached the Right place</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
            <a href="/contact" style={{ background: '#e87722', color: '#fff', padding: '0.85rem 2rem', borderRadius: '6px', fontWeight: 700, textDecoration: 'none', fontSize: '1rem' }}>Place an Order</a>
            <a href="/brochure" style={{ background: 'transparent', color: '#fff', padding: '0.85rem 2rem', borderRadius: '6px', fontWeight: 700, textDecoration: 'none', fontSize: '1rem', border: '2px solid #fff' }}>Brochure</a>
          </div>
        </div>
      </section>

      {/* Author Byline */}
      <div style={{ background: '#1a2a6c', padding: '0.65rem 1rem', borderTop: '2px solid #e87722' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          <span style={{ color: '#f9c74f', fontSize: '1.1rem' }}>✍</span>
          <p style={{ color: '#e2e8f8', fontSize: '0.8rem', margin: 0 }}>
            <strong style={{ color: '#fff' }}>Reviewed by the Tutors India Peer Review Team</strong> — Journal Submission &amp; Rebuttal Specialists &middot; 500+ peer review submissions supported &middot; 20+ years in academic publishing
          </p>
        </div>
      </div>

      {/* Intro bullets */}
      <section style={{ background: '#fff', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <li style={{ padding: '1rem 1.25rem', background: '#f0f4ff', borderLeft: '4px solid #e87722', borderRadius: '4px', fontSize: '1rem', lineHeight: 1.7 }}>
              Peer review and Pre Submission help from qualified and experienced researchers from the US &amp; UK
            </li>
            <li style={{ padding: '1rem 1.25rem', background: '#f0f4ff', borderLeft: '4px solid #e87722', borderRadius: '4px', fontSize: '1rem', lineHeight: 1.7 }}>
              Our editors are native English speakers and professors from reputed Universities
            </li>
          </ul>
        </div>
      </section>

      {/* Peer review and Pre Submission help */}
      <section style={{ background: '#f0f4ff', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: '#1a2a6c', fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.25rem' }}>Peer review and Pre Submission help</h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', marginBottom: '1rem' }}>
            Are you seeking journal support to publish your paper in a high-impact journal? Before you submit your paper for publication you must make sure that your paper is in accordance with the expectations of your audience. With our peer review team of experts, you can find the detailed comments about your paper that you would expect to hear from experts in your field. A peer review is essential to make a final rework on your paper before handing it over to publication. A quality feedback on your paper by our qualified reviewers at Tutors India would benefit you to proceed further towards publishing. They give you feedback on your paper&apos;s organization, the substance and the experimental design after examining thoroughly from top to bottom. This way, you increase the chances of publication with necessary changes done according to our reviewer&apos;s ideas and suggestions.
          </p>
        </div>
      </section>

      {/* Team of Researchers */}
      <section style={{ background: '#fff', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: '#1a2a6c', fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.25rem' }}>Team of Researchers at Tutors India</h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', marginBottom: '1rem' }}>
            Our team of professionals having masters, PhDs and post-doctorates in relevant subject matter expertise supported by graphic designers and copy-editors, are not only proficient in writing but are passionate about liaising with diverse range of local and international clients, internal and external stakeholders including authors and key opinion leaders across therapeutic areas.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333' }}>
            A PhD expert in your field will make necessary criticism pertaining to the organization, content, work and experimental design of your paper. These are solely for proper editing of your paper at the end.
          </p>
        </div>
      </section>

      {/* Simply easy & Straightforward */}
      <section style={{ background: '#1a2a6c', color: '#fff', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.25rem', color: '#f9c74f' }}>Peer review and Pre Submission is Simply easy &amp; Straightforward</h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, opacity: 0.95 }}>
            Our peer review service help guarantees that your document is confidential, and so you do not have to worry about it. Just send us your dissertation topic along with the deadline and see the results that are far justified and mark the success of your paper
          </p>
        </div>
      </section>

      {/* What Services do we offer */}
      <section style={{ background: '#fff', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: '#1a2a6c', fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.25rem' }}>What Services do we offer under Peer review and Pre Submission Service?</h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', marginBottom: '2rem' }}>
            We edit and proofread the document from the introduction to recommendations. Although it looks simple, but in practical, it&apos;s a tedious task to complete each and every step.
          </p>
          <div className="three-col-grid">
            <div style={{ background: '#f0f4ff', borderTop: '4px solid #1a2a6c', borderRadius: '8px', padding: '1.5rem' }}>
              <h3 style={{ color: '#1a2a6c', fontWeight: 700, marginBottom: '0.75rem', fontSize: '1.1rem' }}>Basic</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: '#333' }}>Developed based on the relevant sources, a reasonable attempt at finding an area that warrant research &amp; evidence of an attempt to provide critical evaluation but mainly descriptive.</p>
            </div>
            <div style={{ background: '#f0f4ff', borderTop: '4px solid #e87722', borderRadius: '8px', padding: '1.5rem' }}>
              <h3 style={{ color: '#1a2a6c', fontWeight: 700, marginBottom: '0.75rem', fontSize: '1.1rem' }}>Advanced</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: '#333' }}>Wide range of sources, a clear identification of research gap in the literature along with aim and research questions</p>
            </div>
            <div style={{ background: '#f0f4ff', borderTop: '4px solid #2563b0', borderRadius: '8px', padding: '1.5rem' }}>
              <h3 style={{ color: '#1a2a6c', fontWeight: 700, marginBottom: '0.75rem', fontSize: '1.1rem' }}>Premium</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: '#333' }}>Refers to a wide range of seminal research with throughout engagement using latest resources. A solid gap would be identified based on the current literature &amp; justified thoroughly &amp; Excellent critical analysis would be shown (upgradable)</p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a href="/contact" style={{ background: '#e87722', color: '#fff', padding: '0.85rem 2rem', borderRadius: '6px', fontWeight: 700, textDecoration: 'none', fontSize: '1rem', display: 'inline-block' }}>ORDER NOW</a>
          </div>
        </div>
      </section>

      {/* Specialized Subject Matter */}
      <section style={{ background: '#f0f4ff', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: '#1a2a6c', fontSize: '1.6rem', fontWeight: 700, marginBottom: '1rem' }}>Specialized Subject Matter Expertise across the globe</h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333' }}>
            We offer topic Selection for Management, Social Science, Engineering, Technology, Life Science, Medical, Arts &amp; Literature / Linguistics, and much more
          </p>
        </div>
      </section>

      {/* Our Deliverables */}
      <section style={{ background: '#fff', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: '#1a2a6c', fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.25rem' }}>Our deliverables while you order Peer review and Pre Submission Service</h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333' }}>
            OUr services from Tutors India research writing services is simply easy and straightforward. You will get the reply within 30 minutes which would enable to place your order quickly without any delay in submissions.
          </p>
        </div>
      </section>

      {/* How Does it work */}
      <section style={{ background: '#1a2a6c', color: '#fff', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.25rem', color: '#f9c74f' }}>How Does it work?</h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, opacity: 0.95 }}>
            After the order is confirmed, we allocate the special team to scrutinize the work regarding necessary availability requirements that would be essential to complete the work. Once the process is done, in case there are any queries, we ensure to ask during the initial stage of your work and send you the outline proposed for writing secondary data collection based dissertation. Once the outline along with the chapterization plan is approved, we will dispatch the work in chapters, and update you on the progress of your work. Our exclusive coordinators would get in touch with you to clarify any queries. You can also pay in instalments and work will be started as soon as receive the payments. We deliver your work as per the schedule fixed and agreed or even before the schedule.
          </p>
        </div>
      </section>

      {/* Peer review help offered */}
      <section style={{ background: '#f0f4ff', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: '#1a2a6c', fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.25rem' }}>The following peer review help is offered at Tutors India</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px,1fr))', gap: '0.75rem' }}>
            {[
              'commentary on the claims stated in the study',
              'commentary on the experimental design',
              'text clarity is evaluated',
              'effective feedback on the paper organization',
              'English language editing',
              'evaluation of the scientific logic and hypothesis support',
              'suggestions for altering text to stay within word count limits',
              'a final edit after you have made the changes as prescribed by your reviewers',
            ].map((item) => (
              <li key={item} style={{ padding: '0.75rem 1rem', background: '#fff', borderLeft: '3px solid #e87722', borderRadius: '4px', fontSize: '0.95rem', color: '#333' }}>
                {item}
              </li>
            ))}
          </ul>

          <h3 style={{ color: '#2563b0', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem' }}>Our Other Services</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {['Selection of Journal', 'Peer review', 'Editing and Formatting', 'Referencing', 'Structuring'].map((item) => (
              <li key={item} style={{ padding: '0.5rem 1rem', background: '#1a2a6c', color: '#fff', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 600 }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Peer review process */}
      <section style={{ background: '#fff', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: '#1a2a6c', fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.25rem' }}>Peer review process at Tutors India</h2>
          <ol style={{ paddingLeft: '1.5rem', margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li style={{ fontSize: '1rem', lineHeight: 1.7, color: '#333' }}>We collect your final draft or manuscript along with other required information.</li>
            <li style={{ fontSize: '1rem', lineHeight: 1.7, color: '#333' }}>An expert reviewer analyzes the manuscript.</li>
            <li style={{ fontSize: '1rem', lineHeight: 1.7, color: '#333' }}>The reviewer lists out important changes and suggestions for your manuscript and helps to improve your manuscript.</li>
          </ol>
          <h3 style={{ color: '#2563b0', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem' }}>Some aspects reviewed by our reviewer:</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {[
              'How far the research is contributing to the field of study?',
              'Has comprehensive background information been provided?',
              'Are the results presented clearly and accurately?',
            ].map((item) => (
              <li key={item} style={{ padding: '0.75rem 1rem', background: '#f0f4ff', borderLeft: '3px solid #1a2a6c', borderRadius: '4px', fontSize: '0.95rem', color: '#333' }}>
                {item}
              </li>
            ))}
          </ul>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333' }}>
            The chances of your paper getting published solely depend on the selection of peer reviewer for your paper. It&apos;s important to eliminate various factors that might hinder the publication of your paper. These factors should be eliminated by asking an unbiased expertise to judge and give his views on the same before you submit the paper to a journal. Separate editors and managing editors are assigned the task of editing your paper for any language or grammatical errors, with the assurance of proper text flow.
          </p>
        </div>
      </section>

      {/* Free Offers */}
      <section style={{ background: '#f0f4ff', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: '#1a2a6c', fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.25rem' }}>Free Offers along with your Master&apos;s part or chapter-wise Dissertation Writing Services</h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333' }}>
            We deliver more than your expectation –Abstract or Executive Summary, Graphs &amp; Tables (redrawn), statistical analysis or textual analysis of data, SPSS / other software screen shots to ensure the process that we had carried out for doing the analyses Free Tutoring for the work being carried out – to speak confidently with your program supervisors &amp; SPSS output in Appendix.
          </p>
        </div>
      </section>

      {/* Exclusive Service */}
      <section style={{ background: '#1a2a6c', color: '#fff', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.25rem', color: '#f9c74f' }}>Our custom master&apos;s dissertation part or chapter-wise writing &amp; editing service is exclusive</h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, opacity: 0.95, marginBottom: '1.5rem' }}>
            as we do not just provide chapter-wise dissertation writing service, but the rather clear explanation and justification for the choice
          </p>
          <div className="three-col-grid">
            <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '8px', padding: '1.25rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📋</div>
              <h3 style={{ color: '#f9c74f', fontWeight: 700, marginBottom: '0.5rem' }}>Sample Work</h3>
              <p style={{ opacity: 0.85, fontSize: '0.9rem' }}>Check the sample topic selection from our expert writers</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '8px', padding: '1.25rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>✅</div>
              <h3 style={{ color: '#f9c74f', fontWeight: 700, marginBottom: '0.5rem' }}>Quality Assurance</h3>
              <p style={{ opacity: 0.85, fontSize: '0.9rem' }}>We ensure quality at every stage and the process.</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '8px', padding: '1.25rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🔍</div>
              <h3 style={{ color: '#f9c74f', fontWeight: 700, marginBottom: '0.5rem' }}>Plagiarism Report</h3>
              <p style={{ opacity: 0.85, fontSize: '0.9rem' }}>We deliver the document after scanning for plagiarism</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Tutors India */}
      <section style={{ background: '#f0f4ff', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: '#1a2a6c', fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.25rem' }}>Why Choose Tutors India: Peer review and Pre Submission Service features</h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', marginBottom: '1.5rem' }}>
            Qualified researchers, unlimited revision, only peer-reviewed articles, plagiarism report, 24/7 support, 100% match with the requirement and on time delivery
          </p>

          <h3 style={{ color: '#2563b0', fontSize: '1.15rem', fontWeight: 700, marginBottom: '1rem' }}>A complete secure &amp; Confidential Service</h3>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', marginBottom: '1.5rem' }}>
            We offer 100% confidentiality of client&apos;s personal details, payment details, project works, and copyrights of research works. We ensure following for the conditionality, security &amp; privacy: 1) All your projects are given unique reference codes 2) Documents are accessed only writers who signed NDA with Tutors India 3) Your financial information is protected b 128-bit secure socket layer (SSL) encryption.
          </p>

          <h3 style={{ color: '#2563b0', fontSize: '1.15rem', fontWeight: 700, marginBottom: '1rem' }}>Fully Referenced</h3>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', marginBottom: '1.5rem' }}>
            Our dissertation work is fully referenced with latest articles and textbooks. We refer only peer-reviewed sources such as scholarly articles and textbook to select the topic. We refer database including Web of Science, ProQuest, Google Scholar, Business Source Complete, and latest newspapers articles such as Economic Times, Forbes, The Wall Street, The Economics to identify the industrial problem.
          </p>

          <h3 style={{ color: '#2563b0', fontSize: '1.15rem', fontWeight: 700, marginBottom: '1rem' }}>Our Guarantees</h3>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', marginBottom: '1.5rem' }}>
            (1) Unlimited Revision for the work being committed. (2) We ensure on-time delivery (3) We support 24/7. (4) Our word count committed does not include references and bibliography &amp; help you to locate the sources cited (5) Ensure three-level quality check including Technical QC, Editor QC and final check against the requirement (6) Confidentiality of the information (7) Plagiarism free work – less than 5% percent. (8) Only experienced and subject specific writers will be allotted.
          </p>

          <h3 style={{ color: '#2563b0', fontSize: '1.15rem', fontWeight: 700, marginBottom: '1rem' }}>Plagiarism Free Work</h3>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', marginBottom: '1.5rem' }}>
            We are aware of the consequences of plagiarism. Hence, topic selection is completely plagiarism Free. Our work is scanned against online sources in a similar way like WriteCheck or Turnitin. We wanted to ensure that our clients i.e., researchers and students are not finding any issues with regards to plagiarism and so we issue plagiarism-free certificate*. Our streamlined and high-quality research writing process ensures your dissertation is not just copy-pasted, but written only after brainstorming sessions with our team of professional researchers.
          </p>

          <h3 style={{ color: '#2563b0', fontSize: '1.15rem', fontWeight: 700, marginBottom: '1rem' }}>On Time</h3>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', marginBottom: '1.5rem' }}>
            Our work is delivered at a specified date and time. Our specific changes to the delivered work will be carried out within 45 days of delivery. We guarantee delivery of minor changes within 24 working hours and significant changes within 48 working hours. We acknowledge all your emails within 30 minutes of working hours. Further any delay in the delivery can be raised at customersupport@tutorsindia.com
          </p>

          <h3 style={{ color: '#2563b0', fontSize: '1.15rem', fontWeight: 700, marginBottom: '1rem' }}>Experienced Writers</h3>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333' }}>
            Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities from India, the US, and the UK. We identify the perfect SME according to your subject and area. Expert is selected through a stringent selection process including the signing of non-disclosure and confidentiality agreement. You can be very sure about the quality of the work since expert writer is identified as per International Research Experience
          </p>
        </div>
      </section>

      {/* Documents We Prepare Unique Section */}
      <section style={{ background: '#f0f4ff', padding: '2.5rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: '#1a2a6c', fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem' }}>Submission Documents We Prepare for You</h2>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#444', marginBottom: '1.25rem' }}>
            Peer review is not just about the manuscript — it involves a range of supporting documents that influence an editor&apos;s decision. Our specialists prepare professional cover letters that highlight your study&apos;s novelty, point-by-point rebuttal letters that address every reviewer comment with clarity, revision summaries, and appeal letters when decisions need to be contested.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {['Journal Cover Letters', 'Reviewer Rebuttal Letters', 'Point-by-Point Responses', 'Revision Summaries', 'Editor Appeal Letters', 'Highlights Documents', 'Graphical Abstracts'].map((s) => (
              <span key={s} style={{ background: '#1a2a6c', color: '#fff', padding: '0.35rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', fontWeight: 600 }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ background: '#fff', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: '#1a2a6c', fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* Subject Matter Expertise */}
      <section style={{ background: '#1a2a6c', color: '#fff', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '1rem', color: '#f9c74f' }}>Your Dissertation is written by your choice of Subject Matter Expertise</h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, opacity: 0.95, marginBottom: '1rem' }}>
            We have a team of 2000+ expertise across the subjects &amp; countries (including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine)
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, opacity: 0.95, marginBottom: '1.5rem' }}>
            Tutors India has capability and skills to handle subjects across the field. We chose qualified and experienced subject specific expertise while you order your Ph.D. or Master&apos;s dissertation. We have more than 2000+ expertise working across the world who can handle arts, literature, sciences, engineering or medicine.
          </p>
          <div className="four-col-grid">
            {[
              'Arts & Humanities',
              'Biological Sciences',
              'Business & Management Studies',
              'Marketing & Communication',
              'Engineering & Technology',
              'Natural Sciences & Mathematics',
              'Biological & Life science',
              'Economics & Administration',
              'Humanities & Social Science',
              'Law',
              'Medicine & Health',
              'Education & Training',
              'Journalism & Media',
              'Agriculture & Forestry',
              'Computer Science & IT',
              'Hospitality, Leisure & Sports',
            ].map((subject) => (
              <div key={subject} style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '6px', padding: '0.75rem 1rem', fontSize: '0.9rem', borderLeft: '3px solid #e87722' }}>
                {subject}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ background: '#f0f4ff', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: '#1a2a6c', fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.5rem', textAlign: 'center' }}>Voice of Our customer</h2>
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>
    </>
  );
}
