import type { Metadata } from 'next';
import FaqAccordion from '@/components/ui/FaqAccordion';
import TestimonialSlider from '@/components/ui/TestimonialSlider';

export const metadata: Metadata = {
  title: 'Scientific Grant Proposal Editing and Writing services',
  description: 'Grant Proposal Editing Service – professional and complete language & scientific editing assistance to submit your grant proposal with perfection and confidence',
  alternates: { canonical: "https://www.tutorsindia.com/our-services/editing-services/grant-proposal-writing" },
};

const faqs = [
  {
    q: 'On which areas you provide resit dissertation writing services?',
    a: 'We provide grant proposal editing and writing services across all academic and research areas including Management, Finance & Economics, Social Science, Engineering, Technology, Life Science, Medicine, Arts & Literature / Linguistics, and more. Our team of 2000+ experts across subjects and countries (including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia & Ukraine) can handle grant proposal requirements for any discipline.',
  },
  {
    q: 'What grand proposal Editing Services Does Tutors india Provide?',
    a: 'Tutors India offers complete grant proposal editing and rewriting services. We rewrite a complete document and ensure: text plagiarism correction, citation and reference inclusion, copy and paste correction, word change, metaphor, idea, and reasoning style corrections. We correct all errors and infelicities in grammar, syntax, and usage. We rewrite any wordy or convoluted patch, verify and revise any facts that are incorrect, and query or fix faulty organization and gaps in logic.',
  },
  {
    q: 'Who Are Tutors india Professional grand proposal Editors?',
    a: 'All your grant proposals are copyedited and proofread by qualified and experienced researchers from the US & UK. Our grant proposal editors are native English speakers, with industry experience, and educational degrees from international and top-ranked universities from the US, and the UK. Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities from India, the US, and the UK.',
  },
  {
    q: 'How About Some Samples of Your Work?',
    a: 'You can check the sample topic selection from our expert writers on our website. We ensure quality at every stage and the process. We deliver the document after scanning for plagiarism and provide a plagiarism report. We interact with the customer at every stage in terms of amendments, query and delivery.',
  },
  {
    q: 'what is the Time plan to complete your grand proposal editing?',
    a: 'You will get the reply within 30 minutes which would enable you to place your order quickly without any delay in submissions. We guarantee delivery of minor changes within 24 working hours and significant changes within 48 working hours. We acknowledge all your emails within 30 minutes of working hours. Our work is delivered at a specified date and time. Our specific changes to the delivered work will be carried out within 45 days of delivery.',
  },
  {
    q: 'How do you meet high academic standards?',
    a: 'We ensure quality at every stage and the process. We ensure three-level quality check including Technical QC, Editor QC and final check against the requirement. We avoid over-reliance of single source [Not more than 1%]. Our rewriting correction services does not allow Wikipedia, Blog and other unauthenticated sources for academic writing. We ensure that the source identified is scholarly (peer-reviewed) journal articles or textbook.',
  },
];

const testimonials = [
  { author: 'William', quote: "I can't enough thanks to Tutors India for their help in grant proposal writing. They gave me a breadth and depth of knowledge that has enriched my PhD research. They also directed me refining my skills and to manage competing deadlines in my own research of grant proposal writing." },
  { author: 'Joe', quote: 'Your efforts considerably improved my position, allowing me to achieve my aim. I appreciate the way you walked me through the Master Proposal writing process. Thank you so much for making this possible. Without you, I would not have been able to accomplish this!' },
  { author: 'Amelia Brooks, UK', quote: "Honestly, I didn't expect this level of quality. The team understood exactly what I needed and delivered work that felt genuinely professional. My confidence went from stressed to unstoppable." },
  { author: 'Oliver Bennett, UK', quote: 'I was stuck, frustrated, and running out of time. Tutors India stepped in at the perfect moment and turned everything around faster than I imagined. Worth every bit.' },
  { author: 'Hassan Al Falasi, UAE', quote: 'My research finally started making sense after working with this team. Their guidance simplified complex ideas and gave my project the structure it was missing.' },
  { author: 'Charlotte Reed, UK', quote: 'I submitted my work with complete confidence for the first time ever. The quality, formatting, and clarity were all beyond what I hoped for.' },
];

export default function GrantProposalWritingPage() {
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
            Grant Proposal Editing Service
          </h1>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem', opacity: 0.92 }}>
            Are you worried about the language quality of your grant proposal? Would you like to obtain professional help to complete your language editing? Then&apos; You&apos;ve reached the right destination. Tutors India offers professional and complete language &amp; scientific editing assistance to submit your grant proposal with perfection and confidence
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
            <strong style={{ color: '#fff' }}>Reviewed by the Tutors India Grant Writing Team</strong> — Research Grant Proposal Specialists &middot; NIH, Wellcome Trust &amp; NIHR application experts &middot; 20+ years in grant development
          </p>
        </div>
      </div>

      {/* Intro bullets */}
      <section style={{ background: '#fff', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <li style={{ padding: '1rem 1.25rem', background: '#f0f4ff', borderLeft: '4px solid #e87722', borderRadius: '4px', fontSize: '1rem', lineHeight: 1.7 }}>
              All your grant proposals are copyedited and proofread by qualified and experienced researchers from the US &amp; UK
            </li>
            <li style={{ padding: '1rem 1.25rem', background: '#f0f4ff', borderLeft: '4px solid #e87722', borderRadius: '4px', fontSize: '1rem', lineHeight: 1.7 }}>
              Our grant proposal editors are native English speakers, with industry experience, and educational degrees from international and top-ranked universities from the US, and the UK.
            </li>
          </ul>
        </div>
      </section>

      {/* Grant Proposal Editing & Heavy Copyediting */}
      <section style={{ background: '#f0f4ff', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: '#1a2a6c', fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.25rem' }}>Grant Proposal Editing &amp; Heavy Copyediting Service</h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333' }}>
            It is important to represent the study and research work in technical and scientific terms. Apart from that, bad language writing, grammar, punctuation, spelling can develop an inappropriate response from the examiner evaluating the technical document. Tutors India with its core technical &amp; scientific editing professionals ensures to correct the document and translate your ideas where it will &quot;sound&quot; like you. We exactly follow your writing style and vocabulary, the only difference is that we fix grammatical and structural issues. Grant Proposal editing deals with the editing of technical science content for its consistency and accuracy. Scientific &amp; Technical editing is applied in various academic departments such as engineering, computer science, medicine, law, banking, sciences, etc. It is the procedure of explaining a complex process in simple and understandable terms without disturbing the meaning and the context.
          </p>
        </div>
      </section>

      {/* End-to-End Copyediting */}
      <section style={{ background: '#fff', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: '#1a2a6c', fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.25rem' }}>Grant Proposal End-to-End Copyediting &amp; proofreading services</h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333' }}>
            Tutors India follows the following objectives in rewriting: We convey the storyline in a simple and efficient manner. We ensure that the editing is done comprehensively with proper language, perfection, and completeness. Ensure that grant proposal content is free of grammar, punctuation, and spelling errors. Confirm that technical editing includes traditional copyediting and production editing. Further, ensure that the edited technical content is appropriate for accuracy and completeness and is perfect for the proposed audience. Assures that the document is complete and accurate with no language mistakes with the complexity as required by the user. Tutors India with its years of experience in academic, technical writing and editing can produce world class documents that are free from language and scientific/technical errors ready for your academic submission. Tutors India rewrite your grant proposal, manuscripts, assignment, and statistical analysis.
          </p>
        </div>
      </section>

      {/* Logical Flow and Coherence */}
      <section style={{ background: '#1a2a6c', color: '#fff', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.25rem', color: '#f9c74f' }}>We guarantee for Logical Flow and Coherence of your grant proposal</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              'We correct all errors and infelicities in grammar, syntax, and usage.',
              'Rewrite any wordy or convoluted patch.',
              'Ask for or supply definitions of terms likely to be new to readers.',
              'Verify and revise any facts that are incorrect.',
              'Query or fix faulty organization and gaps in logic.',
            ].map((item) => (
              <li key={item} style={{ padding: '0.75rem 1rem', background: 'rgba(255,255,255,0.1)', borderLeft: '3px solid #e87722', borderRadius: '4px', fontSize: '0.95rem', opacity: 0.95 }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Simply easy & Straightforward */}
      <section style={{ background: '#f0f4ff', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: '#1a2a6c', fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.25rem' }}>Heavy Copyediting &amp; grant proposal rewriting is Simply easy &amp; Straightforward</h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333' }}>
            Our editing and proofreading service help guarantees that your document is confidential, and so you do not have to worry about it. Just send us your grant proposal topic along with the deadline and see the results that are far justified and mark the success of your grant proposal.
          </p>
        </div>
      </section>

      {/* What Services do we offer */}
      <section style={{ background: '#fff', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: '#1a2a6c', fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.25rem' }}>What Services do we offer under grant proposal editing?</h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', marginBottom: '2rem' }}>
            We rewrite a complete document. Although it looks simple, but in practical, it&apos;s a tedious task to complete each and every step.
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
            We offer complete specific master&apos;s dissertation writing service for Management, Finance &amp; Economics, Social Science, Engineering, Technology, Life Science, Medicine, Arts &amp; Literature / Linguistics, and more
          </p>
        </div>
      </section>

      {/* Our Deliverables */}
      <section style={{ background: '#fff', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: '#1a2a6c', fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.25rem' }}>Our deliverables while you order custom Rewriting &amp; Heavy Copyediting service for your grant proposal</h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333' }}>
            Our services from Tutors India research writing services is simply easy and straightforward. You will get the reply within 30 minutes which would enable to place your order quickly without any delay in submissions.
          </p>
        </div>
      </section>

      {/* How Does it work */}
      <section style={{ background: '#1a2a6c', color: '#fff', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.25rem', color: '#f9c74f' }}>How Does it work?</h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, opacity: 0.95 }}>
            After the order is confirmed, we allocate the special team to scrutinize the work regarding necessary availability requirements that would be essential to complete the work. Once the process is done, in case there are any queries, we ensure to ask during the initial stage of your work and send you the outline proposed for writing secondary data collection based dissertation. Once the outline along with the chapterization plan is approved, we will dispatch the work in chapters, and update you on the progress of your work. Our exclusive coordinators would get in touch with you to clarify any queries. You can also pay in installments and work will be started as soon as receive the payments. We deliver your work as per the schedule fixed and agreed or even before the schedule.
          </p>
        </div>
      </section>

      {/* Clinical & Medical Editing Service features */}
      <section style={{ background: '#f0f4ff', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: '#1a2a6c', fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.25rem' }}>Clinical &amp; Medical Editing Service features</h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', marginBottom: '1.25rem' }}>
            We edit or rewrite your complete grant proposal to ensure that your writing does represent your own assertions and abilities. At Tutors India, our writers are subject matter expertise who edit your complete grant proposal to ensure the following:
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', marginBottom: '1.25rem' }}>
            <strong>Text Plagiarism:</strong> Paraphrase the content using our own words. We re-read the original article, summarize, digest and explain through our own words. We do this with much effort where the focus on content researched by different authors on the same topic and evaluate its limitations and strengths of their argument and rewrite the complete passage. b) We avoid over-reliance of single source [Not more than 1%]
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', marginBottom: '1.25rem' }}>
            If there is a missing of Citation or source or reference, with your approval, we will include appropriate sources within the text, to acknowledge the contributions of others or their source of ideas. However, we will ensure that the source identified is scholarly (peer-reviewed) journal articles or textbook whichever may be appropriate (e.g. Logan, Walker, Cole, &amp; Leukefeld, 2000) Our rewriting correction services does not allow Wikipedia, Blog and other unauthenticated sources for academic writing. We do much more than this for our client to ensure better grade and prevent from misconduct. We handle all subjects
          </p>
          <h3 style={{ color: '#2563b0', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem' }}>We take necessary corrective measures on the following</h3>
          <ul style={{ paddingLeft: '1.5rem', margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {['Copy and paste', 'Word change', 'Metaphor', 'Idea', 'Reasoning style'].map((item) => (
              <li key={item} style={{ fontSize: '1rem', lineHeight: 1.7, color: '#333' }}>{item}</li>
            ))}
          </ul>

          <h3 style={{ color: '#2563b0', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem' }}>Clinical &amp; Medical Editing need to convince the Supervisory committee</h3>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', marginBottom: '1rem' }}>
            Proofreading is a basic and essential part of writing. After giving the outlines, revising and editing, proofreading is what gives a piece lustre. A paper that is proofread is taken more seriously by your readers. At Tutors India, editing and proofreading go hand in hand. Our editors look for every possible change and give your work a professional touch.
          </p>
          <ul style={{ paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li style={{ fontSize: '1rem', lineHeight: 1.7, color: '#333' }}>Thorough spell checks and general formatting</li>
            <li style={{ fontSize: '1rem', lineHeight: 1.7, color: '#333' }}>Checking for sentence fragments and run-on sentences.</li>
            <li style={{ fontSize: '1rem', lineHeight: 1.7, color: '#333' }}>Checking for non-parallel structure, coordination, and subordination.</li>
          </ul>
        </div>
      </section>

      {/* Exclusive Service */}
      <section style={{ background: '#1a2a6c', color: '#fff', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.25rem', color: '#f9c74f' }}>Our grant proposal Rewriting &amp; Heavy Copyediting service is exclusive</h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, opacity: 0.95, marginBottom: '1.5rem' }}>
            as we do not just provide grant proposal, but the rather clear explanation and justification for the content written
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
          <h2 style={{ color: '#1a2a6c', fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.25rem' }}>Why Choose Tutors India: Clinical and medical editing service features</h2>
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

      {/* Funding Bodies Unique Section */}
      <section style={{ background: '#f0f4ff', padding: '2.5rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: '#1a2a6c', fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem' }}>Funding Bodies &amp; Grant Schemes We Support</h2>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#444', marginBottom: '1.25rem' }}>
            Our grant proposal editors have hands-on experience preparing winning applications for the world&apos;s leading research funding bodies. We help you craft compelling Specific Aims, Research Strategy, Significance &amp; Innovation sections, and budget justifications tailored to each funder&apos;s priorities. From NIH R01 applications to UKRI project grants — we know what reviewers look for.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {['NIH (USA)', 'Wellcome Trust', 'NIHR (UK)', 'EPSRC', 'MRC', 'Horizon Europe', 'Gates Foundation', 'UKRI', 'NSF', 'ERC'].map((s) => (
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
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '1rem', color: '#f9c74f' }}>Your grant proposal rewriting is carried out by your choice of Subject Matter Expertise</h2>
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
