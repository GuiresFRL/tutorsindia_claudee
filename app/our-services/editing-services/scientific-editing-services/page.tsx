import type { Metadata } from 'next';
import FaqAccordion from '@/components/ui/FaqAccordion';
import TestimonialSlider from '@/components/ui/TestimonialSlider';

export const metadata: Metadata = {
  title: 'Scientific Editing Writing Services | Clinical & Medical Dissertation',
  description: 'Scientific Editing Service - Clinical & Medical Dissertation, Manuscript',
};

const faqs = [
  {
    question: 'On which areas you provide Scientific Editing services ?',
    answer: 'We provide scientific editing services across all academic and research areas including Management, Finance & Economics, Social Science, Engineering, Technology, Life Science, Medicine, Arts & Literature / Linguistics, and more. Our team of 5000+ formatters across subjects and countries (including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia & Ukraine) can handle scientific editing requirements for any discipline.',
  },
  {
    question: 'What Editing Services Does Tutors india Provide?',
    answer: 'Tutors India offers complete editing services for the complete manuscript, dissertation, assignment, publications, etc. Our professional language editors make sure that your research work and assignments are thoroughly checked for no language errors before your submission. We provide two variations or levels of paper editing, proofreading. You can have your paper edited in either American or British English, and our formatting service will help you to modify your document according to your journal\'s guidelines.',
  },
  {
    question: 'Who Are Tutors india Professional Scientific Editors?',
    answer: 'Our editors are native English speakers and trained American Association of Medical Writers (AMWA) or international Society for Medical Publication Professionals (ISMPP). Our team of professionals having masters, PhDs and post-doctorates in pharmacology and life sciences supported by graphic designers and copy-editors, are not only proficient in writing but are passionate about liaising with diverse range of local and international clients, internal and external stakeholders including authors and key opinion leaders across therapeutic areas.',
  },
  {
    question: 'How About Some Samples of Your Work?',
    answer: 'You can check the sample topic selection from our expert writers on our website. We ensure quality at every stage and the process. We deliver the document after scanning for plagiarism and provide a plagiarism report. We interact with the customer at every stage in terms of amendments, query and delivery.',
  },
  {
    question: 'what is the Time plan to complete your Scientific editing',
    answer: 'You will get the reply within 30 minutes which would enable you to place your order quickly without any delay in submissions. We guarantee delivery of minor changes within 24 working hours and significant changes within 48 working hours. We acknowledge all your emails within 30 minutes of working hours. Our work is delivered at a specified date and time. Our specific changes to the delivered work will be carried out within 45 days of delivery.',
  },
  {
    question: 'How do you meet high academic standards?',
    answer: 'We ensure quality at every stage and the process. We are totally confident on our dissertation & manuscript editing service that would be a fruitful reward for you to get a step further closer to the publishing of your paper. We would be happy to re-edit your document for free, in case your paper is rejected by your journal for English language errors which our editors have edited before. We ensure three-level quality check including Technical QC, Editor QC and final check against the requirement.',
  },
];

const testimonials = [
  { author: 'K S, US, Boston', text: 'Thank you Tutors India for giving me wonderful topic selection, it got approved and further from research proposal to citation, I need a same support.' },
  { author: 'Amelia Brooks, UK', text: "Honestly, I didn't expect this level of quality. The team understood exactly what I needed and delivered work that felt genuinely professional. My confidence went from stressed to unstoppable." },
  { author: 'Oliver Bennett, UK', text: 'I was stuck, frustrated, and running out of time. Tutors India stepped in at the perfect moment and turned everything around faster than I imagined. Worth every bit.' },
  { author: 'Layla Al Mansoori', text: "The attention to detail was incredible. It didn't feel like I was working with a service provider — it felt like I had an expert academic partner guiding me throughout." },
  { author: 'Hassan Al Falasi, UAE', text: 'My research finally started making sense after working with this team. Their guidance simplified complex ideas and gave my project the structure it was missing.' },
  { author: 'Charlotte Reed, UK', text: 'I submitted my work with complete confidence for the first time ever. The quality, formatting, and clarity were all beyond what I hoped for.' },
  { author: 'Zain Al Hashmi, UAE', text: 'The team handled everything professionally from start to finish. Timely updates, quick responses, and excellent academic quality — exactly what students need during stressful deadlines.' },
  { author: 'Ava', text: 'I have worked with Tutors India on various projects, and found that they provide quality service and expertise for my research paper scientific editing. It is rare to find a service provider with such professional consistency and they are a valued service provider as they provided high quality document after scientific editing. Thank you Tutors India!' },
  { author: 'Atharva', text: 'Under tight deadlines and with high expectations, Tutors India was a pleasure to work with, on a high profile scientific peer-review process. The experts were professional, conscientious and thoroughly competent. Ultimately, a top guide to peer review your manuscript. Great services!' },
  { author: 'Lekha', text: "When I received the work, I was blown away by Tutor India's professionalism. I got the impression that they were really paying attention to what I was saying and that they understood what I was trying to accomplish with the project. I would strongly advise you to have them revise and proofread your scientific thesis." },
  { author: 'Noah', text: 'The wonderful team effort of Tutors India helped me in proofreading and technically edited my research paper. With their professionalism, prompt response and courteous service, I was able to receive what I expected. Proofreading has never been so efficient and so pleasant! Thank you to all of you.' },
  { author: 'Zoe', text: 'After evaluating a few outsourcers I decided to work with Tutors India because of their professional approach and ability to make changes about what I really needed in my language editing. Tutor India was very responsive to these changes. I am very satisfied with our engagement and would consider working together on future projects too.' },
];

export default function ScientificEditingPage() {
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
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)', color: '#fff', padding: '4rem 1rem 3rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(1.5rem,4vw,2.5rem)', fontWeight: 800, marginBottom: '1.25rem', lineHeight: 1.2 }}>
            Scientific Editing Service - Clinical &amp; Medical Dissertation, Manuscript
          </h1>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem', opacity: 0.92 }}>
            Are you worried about the language quality of your paper presentation? Would you like to obtain professional help to complete your language editing? You have reached the right destination. Tutors India offers professional and complete language editing assistance to submit your papers with perfection and confidence
          </p>
          <p style={{ fontStyle: 'italic', opacity: 0.85, marginBottom: '2rem' }}>Then You&apos;ve Certainly Reached the Right place</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/contact" style={{ background: '#e87722', color: '#fff', padding: '0.85rem 2rem', borderRadius: '6px', fontWeight: 700, textDecoration: 'none', fontSize: '1rem' }}>Place an Order</a>
            <a href="/brochure" style={{ background: 'transparent', color: '#fff', padding: '0.85rem 2rem', borderRadius: '6px', fontWeight: 700, textDecoration: 'none', fontSize: '1rem', border: '2px solid #fff' }}>Brochure</a>
          </div>
        </div>
      </section>

      {/* Intro bullets */}
      <section style={{ background: '#fff', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <li style={{ padding: '1rem 1.25rem', background: '#f0f4ff', borderLeft: '4px solid #e87722', borderRadius: '4px', fontSize: '1rem', lineHeight: 1.7 }}>
              All your documents are scientifically edited and proofread by qualified and experienced researchers from the US &amp; UK
            </li>
            <li style={{ padding: '1rem 1.25rem', background: '#f0f4ff', borderLeft: '4px solid #e87722', borderRadius: '4px', fontSize: '1rem', lineHeight: 1.7 }}>
              Our editors are native English speakers and trained American Association of Medical Writers (AMWA) or international Society for Medical Publication Professionals (ISMPP).
            </li>
          </ul>
        </div>
      </section>

      {/* Scientific Medical Editing & Proofreading */}
      <section style={{ background: '#f0f4ff', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: '#1a2a6c', fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.25rem' }}>Scientific Medical Editing &amp; Proofreading from Tutors India Editors: Medical &amp; Clinical Editing Service</h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333' }}>
            A medical writer has to communicate scientific information. In addition to understanding the scientific aspects, the writer needs to present the information in a clear manner and at a level of understanding appropriate to the target audience. Use of grammatically correct language, simple and short sentences, active voice, appropriate punctuation marks, and a logical flow of ideas can go a long way in making the information understandable to the readers. Avoiding the use of highly complex technical jargon also makes the writing more lucid, especially for nonmedical audiences.
          </p>
        </div>
      </section>

      {/* Team of Researchers */}
      <section style={{ background: '#fff', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: '#1a2a6c', fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.25rem' }}>Team of Researchers at Tutors India</h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333' }}>
            Our team of professionals having masters, PhDs and post-doctorates in pharmacology and life sciences supported by graphic designers and copy-editors, are not only proficient in writing but are passionate about liaising with diverse range of local and international clients, internal and external stakeholders including authors and key opinion leaders across therapeutic areas.
          </p>
        </div>
      </section>

      {/* End-to-End Scientific Copyediting */}
      <section style={{ background: '#1a2a6c', color: '#fff', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.25rem', color: '#f9c74f' }}>End-to-End Scientific Copyediting &amp; proofreading services</h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, opacity: 0.95, marginBottom: '1rem' }}>
            Tutors India offers complete editing services for the complete manuscript, dissertation, assignment, publications, etc. Our professional language editors make sure that your research work and assignments are thoroughly checked for no language errors before your submission. Our editors are from top universities around the world are subject experts in thousands of area of study to help your journal article manuscript edited. Tutors India has a numerous medical, scientific and technical scholars and Ph.D. holders to assist you in all the stages through the process of peer review. Your paper may be a 60,000-word thesis or an abstract of 300 words, our staff will work on the proper use of words, language, checking grammar and spelling in sentences, giving your paper a professional touch. We assure that after all the above process of checking, your paper has now reached the publication quality.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, opacity: 0.95 }}>
            We provide two variations or levels of paper editing, proofreading. You can have your paper edited in either American or British English, and our formatting service will help you to modify your document according to your journal&apos;s guidelines. We allow you to submit the certificate of peer review along with the final draft of your paper to your journal to prove that your manuscript has been edited by a native English-speaking editor. Our certificate proves that your paper is already edited for English language and therefore a step closer to publication. Every document is considered at Tutors India to enable issuing certificate however not every paper earns a certificate.
          </p>
        </div>
      </section>

      {/* Our Guarantees */}
      <section style={{ background: '#fff', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: '#1a2a6c', fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.25rem' }}>Our Guarantees</h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333' }}>
            We are totally confident on our dissertation &amp; manuscript editing service that would be a fruitful reward for you to get a step further closer to the publishing of your paper. We would be happy to re-edit your document for free, in case your paper is rejected by your journal for English language errors which our editors have edited before. In that case, we do not guarantee for the work or material that has been added further to the paper after the final editing has been done by our editors. After our language polishing, if you need to add sections to your paper to address your journal reviewers&apos; comments, you can send your manuscript back to us for re-editing.
          </p>
        </div>
      </section>

      {/* Simply easy & Straightforward */}
      <section style={{ background: '#f0f4ff', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: '#1a2a6c', fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.25rem' }}>Medical &amp; Clinical Editing Service is Simply easy &amp; Straightforward</h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333' }}>
            Our editing and proofreading service help guarantees that your document is confidential, and so you do not have to worry about it. Just send us your dissertation topic along with the deadline and see the results that are far justified and mark the success of your dissertation
          </p>
        </div>
      </section>

      {/* What Services do we offer */}
      <section style={{ background: '#fff', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: '#1a2a6c', fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.25rem' }}>What Services do we offer under Medical &amp; Clinical Editing Service?</h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', marginBottom: '2rem' }}>
            We work according to your instruction with specific reference to the styles that adhere to your individual institution&apos;s guidelines and return the document to high-quality MS Word or PDF document.
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
          <h2 style={{ color: '#1a2a6c', fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.25rem' }}>Our deliverables while you order Scientific custom language editing</h2>
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
          <h2 style={{ color: '#1a2a6c', fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.5rem' }}>Clinical &amp; Medical Editing Service features</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '0.75rem' }}>
            {[
              'Primary & Secondary manuscript writing',
              'Manuscript editing',
              'Review Articles and Meta-analysis',
              'Brief communications, letters to editors',
              'Newsletters',
              'Scientific abstracts and posters',
              'Slide deck presentations',
              'Standalone QC and review documents',
            ].map((item) => (
              <li key={item} style={{ padding: '0.75rem 1rem', background: '#fff', borderLeft: '3px solid #e87722', borderRadius: '4px', fontSize: '0.95rem', color: '#333' }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Clinical & Medical Editing need to convince */}
      <section style={{ background: '#fff', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: '#1a2a6c', fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.25rem' }}>Clinical &amp; Medical Editing need to convince the Supervisory committee</h2>
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
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.25rem', color: '#f9c74f' }}>Our Dissertation &amp; manuscript Scientific editing services are exclusive</h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, opacity: 0.95, marginBottom: '1.5rem' }}>
            as we do not just provide dissertation, but the rather clear explanation and justification for the content written
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
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '1rem', color: '#f9c74f' }}>Your Clinical &amp; Medical editing is carried out by your choice of Subject Matter Expertise</h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, opacity: 0.95, marginBottom: '1rem' }}>
            We have a team of 5000+ formatters across the subjects &amp; countries (including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia &amp; Ukraine)
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
