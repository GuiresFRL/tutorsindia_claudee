import type { Metadata } from 'next';
import Link from 'next/link';
import FaqAccordion from '@/components/ui/FaqAccordion';
import TestimonialSlider from '@/components/ui/TestimonialSlider';

export const metadata: Metadata = {
  title: "Thesis typesetting, Formatting services",
  description: "Formatting and Typesetting Service for Journal, Dissertation & Grant Proposals. Our formatter & typesetter work on your dissertation, assignment and manuscript.",
  keywords: "Phd Thesis Typesetting Services,Dissertation typesetting",
  alternates: { canonical: "https://www.tutorsindia.com/our-services/editing-services/formatting-service" },
};

const faqs = [
  {
    q: 'On which areas you will provide Formatting services.?',
    a: 'We provide formatting services across all academic and research areas including Management, Finance & Economics, Social Science, Engineering, Technology, Life Science, Medicine, Arts & Literature / Linguistics, and more. Our team of 2000+ experts across subjects and countries (including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia & Ukraine) can handle formatting requirements for any discipline.',
  },
  {
    q: 'What Formatting Services Do Tutors India Provide?',
    a: 'Tutors India provides comprehensive formatting and typesetting services including: title page, frontispiece, copyright page, dedication, acknowledgments, preface, table of contents, list of tables, list of figures, list of appendices, lists of abbreviations, list of acronyms, list of symbols, and abstract. We also handle typefaces, margins, white space, pagination, line spacing, and order of sections. We follow style manuals including APA, MLA, Turabian, and The Chicago Manual of Style.',
  },
  {
    q: 'Who Are Tutors India Professional Editors?',
    a: 'Tutors India provides the formatting team with translators, experienced editors and quality managers with extensive years of experience. Our translation experts also have the expertise in subject specific translation proficiency. Tutors India provides citation compliance team with researchers, formatters, typesetters, experienced editors and quality managers with extensive years of experience. Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities from India, the US, and the UK.',
  },
  {
    q: 'How About Some Samples of Your Work?',
    a: 'You can check the sample from our expert writers on our website. We ensure quality at every stage and the process. We deliver the document after scanning for plagiarism and provide a plagiarism report. We interact with the customer at every stage in terms of amendments, query and delivery.',
  },
  {
    q: 'What is the Time plan to complete your Formatting services',
    a: 'You will get the reply within 30 minutes which would enable you to place your order quickly without any delay in submissions. We guarantee delivery of minor changes within 24 working hours and significant changes within 48 working hours. We acknowledge all your emails within 30 minutes of working hours. Our work is delivered at a specified date and time. Our specific changes to the delivered work will be carried out within 45 days of delivery.',
  },
  {
    q: 'How do you meet high academic standards?',
    a: 'We ensure quality at every stage and the process. We follow the choice of a style manual, including American Psychological Association (APA), MLA, Turabian, The University of Chicago Press (The Chicago manual of style) and others. We guarantee for the structure of the manuscript, dissertation & grant proposals. We ensure three-level quality check including Technical QC, Editor QC and final check against the requirement. Our work is scanned against online sources in a similar way like WriteCheck or Turnitin.',
  },
];

const testimonials = [
  { author: 'K S, US, Boston', quote: 'Thank you Tutors India for giving me wonderful topic selection, it got approved and further from research proposal to citation, I need a same support.' },
  { author: 'Amelia Brooks, UK', quote: "Honestly, I didn't expect this level of quality. The team understood exactly what I needed and delivered work that felt genuinely professional. My confidence went from stressed to unstoppable." },
  { author: 'Oliver Bennett, UK', quote: 'I was stuck, frustrated, and running out of time. Tutors India stepped in at the perfect moment and turned everything around faster than I imagined. Worth every bit.' },
  { author: 'Layla Al Mansoori', quote: "The attention to detail was incredible. It didn't feel like I was working with a service provider — it felt like I had an expert academic partner guiding me throughout." },
  { author: 'Hassan Al Falasi, UAE', quote: 'My research finally started making sense after working with this team. Their guidance simplified complex ideas and gave my project the structure it was missing.' },
  { author: 'Charlotte Reed, UK', quote: 'I submitted my work with complete confidence for the first time ever. The quality, formatting, and clarity were all beyond what I hoped for.' },
  { author: 'Zain Al Hashmi, UAE', quote: 'The team handled everything professionally from start to finish. Timely updates, quick responses, and excellent academic quality — exactly what students need during stressful deadlines.' },
  { author: 'Willow', quote: 'The formatting service of Tutors India is good. The quality of work and service I got was really good. Great work with formatting and editing! They always pay attention to detail. I will definitely recommend this to my colleagues.' },
  { author: 'Alex', quote: "Tutors India has been a part of our company for over ten years. They are always kind and helpful, giving high-quality formatting with a quick and dependable technique that can be relied upon to be completed on schedule. They've helped us meet some pretty tight deadlines." },
  { author: 'Thomas', quote: 'Only a few days before a critical deadline, I contacted Tutors India for their technical editing services. It simply took them a few hours to get back to me with an estimate. When I discussed our deadlines, the experts went above and beyond to complete it in under 48 hours.' },
  { author: 'David Morrison', quote: "I was really struggling with my final semester master's degree, that's when I heard about Tutors India. They really guided me the whole way to produce research proposal just from the idea of a research title. Would definitely recommend Tutors India to anyone who is struggling to complete their research work." },
  { author: 'Glenn McLaughlin', quote: 'Tutors India helped me gain clarity on the direction my research proposal needed to go and provided me with more clarity in my work. I wholeheartedly endorse Tutors India as a best and professional service, as someone you can rely on completing your research works.' },
];

export default function FormattingServicePage() {
  return (
    <>
      <style>{`
        .three-col-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.5rem; }
        .two-col-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 1.5rem; }
        .four-col-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 1rem; }
        @media(max-width:768px){
          .three-col-grid,.four-col-grid { grid-template-columns: 1fr; }
          .two-col-grid { grid-template-columns: 1fr; }
        }
        .format-table { width:100%; border-collapse:collapse; }
        .format-table th,.format-table td { border:1px solid #ddd; padding:0.75rem 1rem; text-align:left; }
        .format-table th { background:#1a2a6c; color:#fff; }
        .format-table tr:nth-child(even) td { background:#f0f4ff; }
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
      <section style={{ background: 'linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)', color: '#fff', padding: '64px 20px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ fontSize: '0.82rem', color: '#a0b8e0', marginBottom: '14px' }}>
            <Link href="/" style={{ color: '#a0b8e0' }}>Home</Link>{' / '}
            <Link href="/our-services" style={{ color: '#a0b8e0' }}>Our Services</Link>{' / '}
            <Link href="/our-services/editing-services" style={{ color: '#a0b8e0' }}>Editing Services</Link>{' / '}
            <span style={{ color: '#fff' }}>Formatting Service</span>
          </div>
          <h1 style={{ fontFamily: 'Merriweather,serif', fontSize: 'clamp(1.6rem,3vw,2.4rem)', marginBottom: '18px', lineHeight: 1.3 }}>
            Formatting &amp; Typesetting Service for Journal, Dissertation &amp; Grant Proposals
          </h1>
          <p style={{ color: '#c5d5f0', fontSize: '1.05rem', maxWidth: 820, lineHeight: 1.8, marginBottom: '14px' }}>
            Let our formatter &amp; typesetter work on your dissertation, assignment, manuscript for ready submission. We offer academic Formatting Service to the researchers allowing them to be free from the hectic tension of changing layout of manuscripts or dissertation, spacing or matching it with the journals or university style sheet. You don&apos;t have to worry as we well take care of all these.
          </p>
          <p style={{ color: '#c5d5f0', fontStyle: 'italic', marginBottom: '14px' }}>Then You&apos;ve Certainly Reached the Right place</p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '24px' }}>
            <Link href="/contact-us" style={{ padding: '12px 32px', background: '#e87722', color: '#fff', borderRadius: '5px', fontWeight: 700, fontSize: '0.95rem' }}>Place an Order</Link>
            <Link href="/brochure" style={{ padding: '12px 32px', border: '2px solid rgba(255,255,255,0.5)', color: '#fff', borderRadius: '5px', fontWeight: 600, fontSize: '0.95rem' }}>Brochure</Link>
          </div>
        </div>
      </section>

      {/* Author Byline */}
      <div style={{ background: '#1a2a6c', padding: '0.65rem 1rem', borderTop: '2px solid #e87722' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          <span style={{ color: '#f9c74f', fontSize: '1.1rem' }}>✍</span>
          <p style={{ color: '#e2e8f8', fontSize: '0.8rem', margin: 0 }}>
            <strong style={{ color: '#fff' }}>Reviewed by the Tutors India Senior Editorial Team</strong> — Formatting &amp; Typesetting Specialists &middot; APA, MLA, Chicago &amp; Vancouver certified &middot; 20+ years in academic publishing
          </p>
        </div>
      </div>

      {/* Intro bullets */}
      <section style={{ background: '#fff', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <li style={{ padding: '1rem 1.25rem', background: '#f0f4ff', borderLeft: '4px solid #e87722', borderRadius: '4px', fontSize: '1rem', lineHeight: 1.7 }}>
              Dissertation &amp; manuscript Citation Compliance Service are carried out by qualified and experienced researchers from the US &amp; UK
            </li>
            <li style={{ padding: '1rem 1.25rem', background: '#f0f4ff', borderLeft: '4px solid #e87722', borderRadius: '4px', fontSize: '1rem', lineHeight: 1.7 }}>
              Our dissertation formatters ensure to fix title page, frontispiece, copyright page, dedication, acknowledgments, preface, table of contents, list of tables, list of figures, list of appendices, lists of abbreviations, list of acronyms, list of symbols, and abstract
            </li>
          </ul>
        </div>
      </section>

      {/* Manuscript & Dissertation Formatting Service */}
      <section style={{ background: '#f0f4ff', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: '#1a2a6c', fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.25rem' }}>Manuscript &amp; Dissertation Formatting Service</h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333' }}>
            Our Journal &amp; dissertation formatting support team keeps an eye on the necessary elements that you require in your paper which meets your journal&apos;s requirement. So, in case our experts from journal formatting support team find some missing elements in your work, they would send you the summary of missing elements along with the procedure to add them in your paper. Whether you choose our document editing, translation, or content review service, you can easily add formatting to your order. Need to check if you need help and would like to avail our Journal formatting service for your paper, make sure you send us a copy of your journal author guidelines when you submit your document to Tutors India. If you have questions about our journal formatting and journal editing service, please contact us and we will assist you.
          </p>
        </div>
      </section>

      {/* Team of Formatters */}
      <section style={{ background: '#fff', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: '#1a2a6c', fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.25rem' }}>Team of formatters &amp; Typesetters at Tutors India</h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333' }}>
            Tutors India provides the formatting team with translators, experienced editors and quality managers with extensive years of experience. Our translation experts also have the expertise, in subject specific translation proficiency. We also offer faster turn-around period and perfect delivery with complete assistance to scholars around the world. Tutors India provides citation compliance team with researchers, formatters, typesetters, experienced editors and quality managers with extensive years of experience.
          </p>
        </div>
      </section>

      {/* Dissertation & Manuscript formatting Service */}
      <section style={{ background: '#1a2a6c', color: '#fff', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.25rem', color: '#f9c74f' }}>Dissertation &amp; Manuscript formatting Service at Tutors India</h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: '1rem', opacity: 0.95 }}>
            Authenticate, Genuine, Prompt and Reliable. We follow the choice of a style manual, including American Psychological Association (APA), MLA, Turabian, The University of Chicago Press (The Chicago manual of style) and others. We guarantee for the structure of the manuscript, dissertation &amp; grant proposals
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: '1rem', opacity: 0.95 }}>
            Academic &amp; Research Translation Services at Tutors India is authentic, genuine, prompt and reliable.
            We Accept AIF, DVD, MP2, MSV, WMV, VOB, QTFF, MP3, AIFF, AMR, FLV, MP4, RM, AVI, M4A, MPEG, WAV, DSV, MOV, MPG, WMA, VOB
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, opacity: 0.95 }}>
            Dissertation &amp; Manuscript formatting Service at Tutors India from Tutors India research writing services is simply easy and straightforward.
            You will get the reply within 30 minutes which would enable to place your order quickly without any delay in submissions.
          </p>
        </div>
      </section>

      {/* What Services do we offer */}
      <section style={{ background: '#fff', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: '#1a2a6c', fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.25rem' }}>What Services do we offer under dissertation &amp; manuscript formatting service?</h2>
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
            <a href="/contact-us" style={{ background: '#e87722', color: '#fff', padding: '0.85rem 2rem', borderRadius: '6px', fontWeight: 700, textDecoration: 'none', fontSize: '1rem', display: 'inline-block' }}>ORDER NOW</a>
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
          <h2 style={{ color: '#1a2a6c', fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.25rem' }}>Our deliverables while you order custom written master&apos;s dissertation writing service</h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333' }}>
            Full Dissertation writing services from Tutors India research writing services is simply easy and straightforward. You will get the reply within 30 minutes which would enable to place your order quickly without any delay in submissions. We would provide executive summary /abstract, free articles used for writing the full dissertation, SPSS data sheet and output, questionnaire or semi-structured interview questions and any other information that we have used to write the dissertation such as reflective log or diary.
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

      {/* Formatting Features */}
      <section style={{ background: '#f0f4ff', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: '#1a2a6c', fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.5rem' }}>Dissertation &amp; manuscript formatting &amp; typesetting service features</h2>

          <h3 style={{ color: '#2563b0', fontSize: '1.15rem', fontWeight: 700, marginBottom: '1rem' }}>Examples of different Formats</h3>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table className="format-table">
              <thead>
                <tr>
                  <th>Style</th>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>APA Style</strong></td>
                  <td>Asha, M. H., Dravidan, D. P., &amp; Harlow, T. (1993). Actions need to be completed. Journal of Social Psychology, 65, 1195-1207.</td>
                </tr>
                <tr>
                  <td><strong>BMJ style of format</strong></td>
                  <td>Nantulya V, Reich M. The neglected epidemic: road traffic injuries in developing countries. BMJ 2002;324: 1139.</td>
                </tr>
                <tr>
                  <td><strong>Vancouver style of format</strong></td>
                  <td>Vickers A. Guidelines for authors of books and papers on complementary medicine. Complement Ther Med 1999;7:245-9.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 style={{ color: '#2563b0', fontSize: '1.15rem', fontWeight: 700, marginBottom: '1rem' }}>Typefaces, Margins, White Space, Pagination, Line spacing</h3>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', marginBottom: '2rem' }}>
            We ensure typefaces and generally follow university guidelines if not, we use typefaces between 10 and 12 points. Further we ensure margins including left margin, right margin, top margin, bottom margin, page numbers for all pages preceding page of chapter I. Line spacing is ensured for chapter titles, appendix titles, headings, subheadings, block quotations, column headings, footnotes, figure captions, explanatory materials for tables, illustrations and figures, appendices
          </p>

          <h3 style={{ color: '#2563b0', fontSize: '1.15rem', fontWeight: 700, marginBottom: '1rem' }}>Order of sections</h3>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333' }}>
            We ensure to align the material in the following order 1. Title page 2. Copyright page 3. Acknowledgment, 4. Table of contents 5. List(s) of tables, figures, charts, graphs, musical examples, illustration 6. Preface or forward, if used, 7. The text, 8. Bibliography 9. And appendices (if any). Page numbering would be ensured in terms of placement of page numbers, pagination for preliminary sections, pagination for body of text, headings, titles &amp; subtitles, quotation, &amp; references, footnote &amp; endnotes, parenthetical references, numerical references, etc
          </p>
        </div>
      </section>

      {/* References from our database */}
      <section style={{ background: '#fff', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: '#1a2a6c', fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.25rem' }}>References from our database</h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333' }}>
            Most of the student / research scholar suffer to get appropriate references from websites and moreover some student even difficult to identify appropriate / authenticated references. The sites like blogs, wikis are not usually recommended as an authenticated source for referencing. At Tutors India, in addition to referencing format, we also help you to get appropriate articles from our database.
          </p>
        </div>
      </section>

      {/* Chapter by Chapter Delivery */}
      <section style={{ background: '#f0f4ff', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: '#1a2a6c', fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.25rem' }}>We have Chapter by Chapter Delivery Process and Deadline</h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333' }}>
            This is to ensure that clients have full control over the delivery and can look at the drafts of different sections. Unlike other companies, we do not charge any costs for such structure as we ensure client satisfaction at every stage of the work.
          </p>
        </div>
      </section>

      {/* Free Offers */}
      <section style={{ background: '#fff', padding: '3rem 1rem' }}>
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
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.25rem', color: '#f9c74f' }}>Our Dissertation &amp; manuscript formatting Service are exclusive</h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, opacity: 0.95, marginBottom: '1.5rem' }}>
            as we do not just provide dissertation, but the rather clear explanation and justification for the content written
          </p>
          <div className="three-col-grid">
            <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '8px', padding: '1.25rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📋</div>
              <h3 style={{ color: '#f9c74f', fontWeight: 700, marginBottom: '0.5rem' }}>Sample Work</h3>
              <p style={{ opacity: 0.85, fontSize: '0.9rem' }}>Check the sample from our expert writers</p>
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
          <h2 style={{ color: '#1a2a6c', fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.25rem' }}>Why Choose Tutors India: Dissertation &amp; manuscript Citation Compliance Service features</h2>
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

      {/* Style Guides Unique Section */}
      <section style={{ background: '#f0f4ff', padding: '2.5rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: '#1a2a6c', fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem' }}>Style Guides &amp; Standards We Specialise In</h2>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#444', marginBottom: '1.25rem' }}>
            Our formatting team has deep expertise across every major academic and scientific style guide. Whether your submission requires APA 7th Edition for social science journals, the numbered Vancouver system for biomedical manuscripts, Chicago 17th for humanities, or IEEE for engineering — we handle it all with precision and zero submission errors.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {['APA 7th Edition', 'MLA 9th Edition', 'Chicago 17th', 'Turabian 9th', 'Vancouver', 'IEEE', 'Harvard', 'AMA', 'ACS', 'OSCOLA'].map((s) => (
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

      {/* Our Expertise */}
      <section style={{ background: '#1a2a6c', color: '#fff', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '1rem', color: '#f9c74f' }}>Your Dissertation &amp; manuscript formatting service is carried out by your choice of Expertise</h2>
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
