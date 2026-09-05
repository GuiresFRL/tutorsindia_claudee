import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { serviceCategories } from "@/lib/data/services";
import { testimonials } from "@/lib/data/site";
import FaqAccordion from "@/components/ui/FaqAccordion";

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  const params: { category: string; slug: string }[] = [];
  for (const cat of serviceCategories) {
    for (const svc of cat.services) {
      const parts = svc.href.split("/").filter(Boolean);
      const slug = parts[parts.length - 1];
      if (slug && slug !== cat.slug) {
        params.push({ category: cat.slug, slug });
      }
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const cat = serviceCategories.find((c) => c.slug === category);
  const svc = cat?.services.find((s) => s.href.includes(`/${slug}/`));
  if (!svc) return {};
  return {
    title: `${svc.title}`,
    description: svc.description,
    alternates: { canonical: `https://www.tutorsindia.com/our-services/${category}/${slug}/` },
  };
}

interface ServiceContent {
  headline: string;
  body: string[];
  features: string[];
  faqs: { q: string; a: string }[];
}

const serviceContent: Record<string, ServiceContent> = {
  "dissertation-topic": {
    headline: "Masters Dissertation Topic Selection & Title Help UK",
    body: [
      "Selecting the right dissertation topic is the most critical and foundational step in your academic journey. At Tutors India, our experts help you identify thought-provoking, original, and researchable dissertation topics and titles that come from three principal sources: your own experience, subject gaps identified through comprehensive literature search, and emerging trends in your field.",
      "We identify unique topics not previously researched or completed in the same manner elsewhere. Our topic selection service ensures that your chosen title addresses a genuine research gap, is feasible within your timeframe, and aligns with your university's requirements and supervisor's expectations.",
      "With 2000+ PhD and Masters-qualified writers across all subject areas, Tutors India has helped thousands of students confidently begin their dissertation journey with a strong, approved topic.",
    ],
    features: [
      "5–10 unique dissertation topic suggestions with rationale for each",
      "Research gap identification from latest peer-reviewed literature",
      "Topic feasibility assessment against your university's scope and deadline",
      "Background literature overview for each suggested topic",
      "Justification notes explaining why each topic is researchable and original",
      "Subject areas: Business, Management, Finance, Law, Healthcare, Engineering, Education, Psychology, IT and 40+ more",
      "Tailored to UK, US, and Australian university requirements",
      "Supervisor approval strategy and pitch notes included",
      "Topic refinement support after supervisor feedback",
      "Free tutoring session to discuss and narrow down the ideal topic",
    ],
    faqs: [
      { q: "How many topic suggestions will I receive?", a: "We provide 5–10 unique dissertation topic suggestions along with a brief rationale for each, covering different angles of your subject area. You can then choose the one that best fits your interest, supervisor preference, and research feasibility." },
      { q: "Can you help me if my supervisor has rejected my topic?", a: "Absolutely. Our topic refinement service helps you understand why a topic may have been rejected and suggests alternative angles or entirely new topics that are more likely to gain supervisor approval." },
      { q: "How long does it take to receive my topic suggestions?", a: "Topic suggestions are typically delivered within 24–48 hours of receiving your subject area, university guidelines, and any specific areas of interest you have." },
      { q: "Do you cover all subject areas?", a: "Yes. Our 2000+ expert team covers all academic disciplines including Business, Finance, HR, Marketing, Law, Healthcare, Engineering, Computer Science, Education, Psychology, Social Sciences, and many more." },
      { q: "Will the topics be original and not used elsewhere?", a: "Yes. All topic suggestions are generated fresh for each student and are checked to ensure they have not been widely researched in the same manner, giving you a unique angle for your dissertation." },
    ],
  },

  "dissertation-proposal": {
    headline: "Masters Dissertation Proposal Writing Services UK",
    body: [
      "Your dissertation proposal is the blueprint of your entire research project. A weak proposal can delay your dissertation journey significantly. Tutors India's custom Masters dissertation proposal writing services are developed based on your experience, interest areas, and subject gaps identified through a comprehensive literature search.",
      "Our experienced researchers handle every aspect of your proposal — from crafting a compelling introduction and clear research objectives to selecting appropriate methodology and developing a realistic Gantt chart. The service is completely flexible and tailor-made, allowing modifications based on your initial research parameters.",
      "All proposals are written by qualified and experienced researchers from the US & UK. You receive a reply within 30 minutes which enables you to place your order quickly without any delay to your submission timeline.",
    ],
    features: [
      "Proposal Title: precise working title conveying investigation ideas and target population",
      "Introduction: topic background, research questions, objectives and reader engagement",
      "Aim and Objectives: clear research goals and original contributions to knowledge",
      "Comprehensive Literature Review: previous studies, themes, theories, and identified research gaps",
      "Research Methodology: approach, design, qualitative/quantitative methods, and ethical considerations",
      "Potential Outcomes: significance and expected contributions to knowledge",
      "Timeline: Gantt chart with task completion dates tailored to your deadline",
      "References: latest peer-reviewed sources fully cited in your required style",
      "Bibliography and Appendices: additional sources and supporting materials",
      "Free: executive summary, free research articles, ethical form, university template formatting",
    ],
    faqs: [
      { q: "How long does a dissertation proposal need to be?", a: "A Masters dissertation proposal is typically 1,500–3,000 words depending on your university's requirements. We tailor the word count and structure to your specific university guidelines." },
      { q: "What if my supervisor requests changes to the proposal?", a: "We provide unlimited free revisions. If your supervisor requests changes, simply send us their feedback and we will revise the proposal accordingly at no additional cost." },
      { q: "Can you write a proposal on a topic I have already chosen?", a: "Yes, absolutely. If you have already selected your dissertation topic, we will build a comprehensive proposal around it, ensuring it meets your university's guidelines and supervisor's expectations." },
      { q: "Do you include a Gantt chart with the proposal?", a: "Yes. Every proposal includes a detailed Gantt chart mapping out your research tasks against a realistic timeline from proposal approval through to dissertation submission." },
      { q: "How quickly can you complete a dissertation proposal?", a: "We can deliver a proposal within 48–72 hours for standard orders. Express delivery within 24 hours is available for urgent requirements at an additional charge." },
    ],
  },

  "full-dissertation": {
    headline: "The US and the UK Master's Complete Dissertation Writing Service",
    body: [
      "Your dissertation is written by qualified and experienced researchers from the US & UK. Full dissertations are written with utmost care based on your specific university guidelines & specifications.",
      "We not only provide writing assistance but also tutoring at every dissertation stage, sharing references, questionnaires, and interview guides at no additional cost. Our Full Dissertation Writing Services are handled by experts holding PhD or Masters degrees from the UK and the US.",
      "Some of our writers are trained at Harvard School, Oxford, London School of Business, and the University of Birmingham. We have a team of 2000+ expertise across subjects and countries including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia, and Ukraine.",
    ],
    features: [
      "Abstract (250–350 words) covering background, objectives, methodology, results and conclusions",
      "Table of Contents with chapter headings, appendices and references with page numbers",
      "Introduction with background, problem statement, aims, objectives, and delimitations",
      "Comprehensive Literature Review identifying research gaps from latest peer-reviewed sources",
      "Detailed Research Methodology covering design, philosophy, sampling, data collection, ethics",
      "Results/Findings with tables, figures, hypothesis testing, SPSS/R/SAS/STATA analysis",
      "Discussion comparing findings with published literature, summary and conclusion",
      "Fully referenced using Harvard, APA, Chicago, Vancouver, Turabian as required",
      "Bibliography & Appendices including questionnaires, ethical forms, raw data files",
      "Formatting meeting university-specific requirements (word count, margins, fonts, headings)",
    ],
    faqs: [
      { q: "How do I know the dissertation will match my writing style?", a: "Before we begin, we conduct a detailed briefing session. You can share any previous writing samples, and our writers adapt their style accordingly. You can also communicate directly with your assigned writer throughout the project." },
      { q: "What happens if my dissertation fails?", a: "We offer unlimited free revisions. If your work is not accepted, share the feedback and we will comprehensively rework the dissertation until you achieve a satisfactory grade. This includes resit support at no extra charge." },
      { q: "Can I receive the dissertation chapter by chapter?", a: "Yes. We offer chapter-by-chapter delivery so you can review each section, share it with your supervisor, and incorporate feedback before the next chapter is written." },
      { q: "Are the sources used recent and peer-reviewed?", a: "All our dissertations use the latest peer-reviewed journal articles from Web of Science, ProQuest, Google Scholar, Emerald, JSTOR, Elsevier, and other credible databases. We use sources published within the last 5–7 years unless older seminal works are specifically required." },
      { q: "What is the minimum deadline you can work with?", a: "We can work with deadlines as short as 5–7 days for a Masters dissertation. The exact feasibility depends on the word count and complexity of the subject. Contact us for an immediate assessment." },
    ],
  },

  "dissertation-part": {
    headline: "Masters Part Dissertation Writing Services UK",
    body: [
      "A part-dissertation writing service from Tutors India is simply easy and straightforward. Whether you need help with just one chapter — such as the Literature Review, Methodology, or Results section — or a combination of chapters, our expert writers provide targeted, high-quality support tailored to your exact requirements.",
      "Many students excel in certain areas but struggle with specific chapters. Our part dissertation service lets you choose precisely what you need help with, keeping costs down and ensuring maximum efficiency. Each chapter is written to the same high standard as our full dissertation service.",
      "Our writers follow your university's exact guidelines, match your existing writing style, and ensure seamless integration with the chapters you have written yourself. Every chapter includes free revisions and full reference support.",
    ],
    features: [
      "Support for any single chapter: Introduction, Literature Review, Methodology, Results, Discussion, Conclusion",
      "Multi-chapter combinations available (e.g., Literature Review + Methodology)",
      "Style matching to align with chapters you have already written",
      "Full referencing in your required citation style (Harvard, APA, MLA, etc.)",
      "Latest peer-reviewed sources integrated throughout",
      "SPSS/R/STATA analysis for Results chapters",
      "Tables, graphs, and figures formatted to journal/university standard",
      "Track Changes version available for seamless integration",
      "Free revisions until the chapter meets your requirements",
      "Chapter-specific tutoring session to understand the content delivered",
    ],
    faqs: [
      { q: "Can I order just one chapter of my dissertation?", a: "Yes, absolutely. Our part dissertation service allows you to order any individual chapter — Literature Review, Methodology, Results, Discussion, or Conclusion — as a standalone piece of work." },
      { q: "How will the chapter match my existing writing?", a: "Share your existing chapters with us and our writers will carefully analyse your writing style, vocabulary, and tone before beginning. We can also work from your outline or bullet points to ensure alignment." },
      { q: "Can you help with the Results and Analysis chapter specifically?", a: "Yes. Our statisticians can handle your data analysis using SPSS, R, STATA, SAS, E-Views, NVIVO, and other tools, producing results, tables, and interpretation ready to insert into your dissertation." },
      { q: "What if I need the chapter urgently?", a: "We accommodate urgent chapter requests. Depending on the chapter and word count, we can deliver within 24–48 hours. Contact us immediately with your requirements for an accurate timeline." },
      { q: "Will the part chapter integrate seamlessly with my full dissertation?", a: "Yes. We ensure structural coherence, consistent referencing style, and tonal alignment. We also offer a review of the full document once integrated to ensure everything flows correctly." },
    ],
  },

  "specific-dissertation": {
    headline: "Masters Specific Dissertation Writing Services UK",
    body: [
      "Some dissertations require specialised approaches that go beyond standard research designs. Tutors India's Specific Dissertation Writing Service handles business plan dissertations, meta-analysis, systematic review, library-based dissertations, secondary data collection, and mixed methodology dissertations with complete expert support.",
      "Whether your research is entirely secondary data-based, follows a systematic review protocol, or requires a comprehensive meta-analysis of existing studies, our specialists are equipped to handle every requirement with rigor and precision.",
      "Our team includes subject matter experts who have published in peer-reviewed journals and have extensive experience with specialist dissertation formats required by UK, US, and Australian universities.",
    ],
    features: [
      "Business Plan Dissertation: market analysis, financial projections, SWOT, competitive landscape",
      "Meta-Analysis Dissertation: protocol development, literature search, data extraction, forest plots, statistical pooling",
      "Systematic Review: PRISMA protocol, inclusion/exclusion criteria, quality assessment, synthesis",
      "Library-Based (Theoretical) Dissertation: conceptual framework, critical analysis, no primary data required",
      "Secondary Data Dissertation: data sourcing from ONS, World Bank, Eurostat, NHS Digital and more",
      "Mixed Methodology: combining qualitative and quantitative approaches with methodological justification",
      "Grounded Theory and Phenomenological dissertations",
      "Action Research dissertations for education and healthcare students",
      "Case Study dissertations with multiple case analysis",
      "Full referencing, formatting, and free revisions included",
    ],
    faqs: [
      { q: "What is a specific dissertation and who needs it?", a: "A specific dissertation follows a non-standard research design such as systematic review, meta-analysis, or is entirely based on secondary data or theoretical analysis. Students in healthcare, business, social sciences, and education frequently require these specialist formats." },
      { q: "Can you write a systematic review dissertation from scratch?", a: "Yes. We develop the full PRISMA protocol, conduct the literature search across multiple databases, apply inclusion/exclusion criteria, assess quality, and synthesise findings into a comprehensive systematic review chapter." },
      { q: "What sources do you use for secondary data dissertations?", a: "We source secondary data from credible repositories including ONS, World Bank, IMF, Eurostat, NHS Digital, HESA, OECD, and published company reports, ensuring all data is properly cited and up to date." },
      { q: "Can you handle a mixed methods dissertation?", a: "Absolutely. Our team combines qualitative expertise (NVIVO, Atlas-ti, thematic analysis) with quantitative skills (SPSS, R, STATA) to deliver fully integrated mixed methods dissertations." },
      { q: "How do I know the methodology is appropriate for my university?", a: "We review your university's specific guidelines, the nature of your research question, and your supervisor's expectations before selecting and justifying the methodology. We also offer free consultation with a methodology expert before you place your order." },
    ],
  },

  "resit-dissertation": {
    headline: "The UK Dissertation Resitting or Resubmission Writing Help UK",
    body: [
      "Are you resubmitting your dissertation? Struggling to handle resit dissertation and looking to clear in the second attempt? Then you've certainly reached the right place! Tutors India provides comprehensive support for reworking dissertations based on supervisor feedback and university guidelines.",
      "Our expert writers assess dissertations comprehensively on a case-by-case basis. The most common causes for resitting are: no in-text references, lack of appropriate literature review, research objectives not matching literature review, unclear introduction, results not in appropriate format, lack of discussion, lack of hypothesis, and lack of research objectives.",
      "We ensure comprehensive value addition for successful resit dissertations, handling each chapter with careful attention to guarantee improved grades on resubmission. We respond to each professor's comment with appropriate formatting and deliver corrections in Track Changes format.",
    ],
    features: [
      "Thorough review of supervisor feedback, paying attention to every comment",
      "Point-by-point written response to each reviewer's comment",
      "All corrections delivered in Track Changes format (tracked and non-tracked versions)",
      "Chapter-by-chapter delivery with full client control over progress",
      "Rubric scale analysis — Introduction 10%, Literature Review 20–40%, Methodology 15–20%, Results 30%",
      "Verification of research gap identification, source currency and critical approach",
      "Statistical analysis relevance checked against objectives and research questions",
      "Conclusive coherence and new knowledge contribution verified",
      "Complete references reorganized according to university style requirements",
      "Unlimited revisions until good grades are achieved",
    ],
    faqs: [
      { q: "Why do students fail their dissertation and need to resit?", a: "The most common reasons include: no in-text citations, weak literature review, objectives not matching findings, unclear methodology, poorly formatted results, lack of critical discussion, and missing hypothesis. Our experts address every one of these issues systematically." },
      { q: "How quickly can you rework a resit dissertation?", a: "Timeline depends on the extent of changes required. Minor revisions across a few chapters can be completed in 5–7 days. Complete dissertation reworks typically take 2–4 weeks. We work to your submission deadline." },
      { q: "Do you respond to each supervisor comment individually?", a: "Yes. We prepare a comprehensive point-by-point response document addressing every comment made by your supervisor or examiner. This is delivered alongside the revised dissertation in Track Changes format." },
      { q: "Will you guarantee I pass on the resit?", a: "While we cannot guarantee specific grades, we provide unlimited revisions and work closely with you to address every feedback point comprehensively. Our resit success rate is very high because we approach each case individually and meticulously." },
      { q: "Can you help if my entire dissertation was failed?", a: "Yes. Even if your entire dissertation has been failed, we assess it holistically and provide a complete rework. Our team rebuilds the dissertation structure, strengthens the literature, improves the methodology, and ensures the results and discussion align correctly." },
    ],
  },

  "dissertation-statistical-analysis": {
    headline: "UK Master's Dissertation Textual (Qualitative) & Statistical (Quantitative) Analysis Help",
    body: [
      "Are you unfamiliar with statistical & content analysis tools? Do you have data but don't know how to recode it? Do you have problems analyzing your hypothesis? Tutors India is a hub for dissertation qualitative and quantitative analysis services.",
      "Your dissertation analysis is completed by qualified and experienced statisticians from the US & UK. We cover statistics, biostatistics, and qualitative analysis (content & thematic) across business, management, economics, finance, psychology, medicine, and life science.",
      "Our statisticians hold advanced Masters and PhD degrees with 10+ years experience. They provide complete, concise reporting delivered on well-developed analysis plans, ensuring high-quality and timely deliverables.",
    ],
    features: [
      "Quantitative: SPSS, SPSS AMOS, SAS, SYSTAT, R, STATA, Epi-Info, E-Views, Excel, Minitab",
      "Qualitative: NVIVO, Atlas-ti, MAXQDA, Wordstat, T-lab, TextPack",
      "Data compiling, recoding, Excel data entry format creation and software export",
      "Descriptive statistics: mean, SD, range, confidence intervals, socio-demographic analysis",
      "Reliability testing, hypothesis testing, regression analysis, structural equation modelling",
      "Thematic analysis, content analysis, grounded theory, case study analysis",
      "Executive summary/abstract, SPSS data sheets and output, questionnaire/interview guides",
      "Tables and figures in journal format, interpretation aligned with methodology",
      "4–6 hour express turnaround service available",
      "Free tutoring sessions to understand the statistical process",
    ],
    faqs: [
      { q: "What statistical software do you use?", a: "We use a comprehensive range including SPSS, SPSS AMOS, SAS, R, STATA, E-Views, Minitab, Epi-Info, Excel, NVIVO, Atlas-ti, and MAXQDA. We select the most appropriate tool based on your research design and university requirements." },
      { q: "Can you analyse my data even if it is incomplete or messy?", a: "Yes. Our statisticians are experienced in data cleaning, recoding, and preparation. We can work with raw survey data, secondary datasets, interview transcripts, and even partially collected data." },
      { q: "Do you provide interpretation alongside the analysis?", a: "Absolutely. All statistical output is accompanied by clear written interpretation aligned to your research objectives and hypothesis. We explain what the results mean in the context of your study." },
      { q: "How quickly can you complete a statistical analysis?", a: "We offer a 4–6 hour express service for urgent analysis. Standard analysis is delivered within 24–48 hours. More complex analysis (SEM, meta-analysis, multi-level modelling) may take 3–5 days." },
      { q: "Will you provide the SPSS data file and output?", a: "Yes. We deliver the complete SPSS (.sav) data file, syntax file, output file, and tables/figures formatted for your dissertation. Screenshots of the software output are also provided as appendix material." },
    ],
  },

  "poster-presentation": {
    headline: "Masters Dissertation Poster Presentation Services UK",
    body: [
      "A poster presentation is often a required component of your Masters or PhD programme, and creating one that stands out in an academic conference or departmental showcase requires both strong content and compelling visual design. Tutors India offers full assistance to develop your poster presentation from scratch.",
      "Our large expert team includes dedicated professional graphic designers who specialise in creating attractive, academically rigorous poster presentations. We ensure your poster communicates your research findings clearly, visually, and persuasively within the space constraints typical of academic conferences.",
      "Whether you need a standard A0 portrait poster or a custom dimension for a specific conference, our team delivers print-ready, high-resolution files along with a PowerPoint version for digital display.",
    ],
    features: [
      "A0, A1, or custom-dimension academic posters in portrait or landscape",
      "Content writing covering background, objectives, methodology, results, and conclusions",
      "Professional infographic design for data visualisation (charts, graphs, tables)",
      "High-resolution print-ready PDF and editable PowerPoint file delivery",
      "University branding compliance (logo, colour scheme, font guidelines)",
      "Concise, visually balanced text layout following academic poster conventions",
      "Statistical graphics from SPSS/R/STATA formatted for poster display",
      "Multiple design iterations and unlimited revisions",
      "Oral presentation script and Q&A preparation notes on request",
      "Express delivery available for conference submission deadlines",
    ],
    faqs: [
      { q: "What size should my academic poster be?", a: "Most academic conferences and university dissertation showcases require A0 (841mm × 1189mm) portrait format. We can also produce A1, A2, or any custom dimensions specified by your conference or department." },
      { q: "What file formats will I receive?", a: "You will receive a high-resolution print-ready PDF (300 DPI), an editable PowerPoint (.pptx) file, and a compressed JPEG for digital submission. We can also provide an editable Adobe Illustrator file on request." },
      { q: "Can you help me prepare for the oral presentation alongside the poster?", a: "Yes. We offer an optional oral presentation preparation package including a 3–5 minute presentation script, anticipated Q&A questions with model answers, and a one-to-one coaching session with our academic expert." },
      { q: "How long does it take to design the poster?", a: "Standard poster design takes 48–72 hours once we receive your content and any brand guidelines. Express 24-hour delivery is available for urgent conference deadlines." },
      { q: "Can you design the poster using my existing dissertation content?", a: "Yes. Simply share your dissertation, and our team will extract the key content, condense it into poster-appropriate language, and present it visually. You do not need to prepare any additional content." },
    ],
  },

  "ug-dissertation": {
    headline: "Undergraduate Dissertation Writing Services UK",
    body: [
      "An undergraduate dissertation is one of the most significant academic projects you will undertake during your degree. It typically accounts for a substantial portion of your final year grade and requires independent research, critical thinking, and academic writing at a high level.",
      "Tutors India provides comprehensive undergraduate dissertation writing services for students pursuing their final year research project across all disciplines. From topic selection through to submission, our qualified writers support you at every stage, meeting your university's specific guidelines and formatting requirements.",
      "Our UG dissertation service is delivered by experienced writers who understand the expectations of UK, Australian, and US undergraduate programmes. All work is plagiarism-free, fully referenced, and supported by unlimited revisions.",
    ],
    features: [
      "Full undergraduate dissertation (typically 8,000–15,000 words) from start to finish",
      "Topic selection and title development if needed",
      "Chapter-by-chapter support: Introduction, Literature Review, Methodology, Results, Discussion, Conclusion",
      "Primary research support: survey design, interview guide, data collection planning",
      "Secondary research: library-based and theoretical dissertations",
      "Full referencing in Harvard, APA, MLA, or your university's required style",
      "Plagiarism-free guarantee with Turnitin certificate",
      "Formatting to your university's exact specification (margins, fonts, headings, pagination)",
      "Appendices including questionnaires, interview transcripts, raw data",
      "Unlimited free revisions until you are completely satisfied",
    ],
    faqs: [
      { q: "How is an undergraduate dissertation different from a Masters dissertation?", a: "Undergraduate dissertations are typically shorter (8,000–15,000 words vs 15,000–20,000 for Masters) and have a less complex research design. The depth of critical analysis and theoretical engagement expected is also somewhat lower, though both require rigorous academic standards." },
      { q: "Can you help me choose a topic for my undergraduate dissertation?", a: "Absolutely. We offer a topic selection service for undergraduate students, providing 5–10 unique, researchable title suggestions with rationale in your subject area." },
      { q: "What if my supervisor wants changes after seeing the first draft?", a: "We provide unlimited free revisions. Send us your supervisor's feedback and we will revise accordingly at no additional charge, as many times as needed." },
      { q: "Can I get help with just one chapter?", a: "Yes. Our part-dissertation service applies to undergraduate projects too. You can order any individual chapter — Literature Review, Methodology, or Results — as a standalone piece of support." },
      { q: "Is the service confidential?", a: "Completely. We use NDA-signed writers, unique project codes, and 128-bit SSL encryption. Your identity is never shared with third parties and your work remains entirely confidential." },
    ],
  },

  "cv-writing": {
    headline: "Professional CV and Resume Writing Services UK",
    body: [
      "Creating a powerful curriculum vitae is the most significant first step in your professional career. Your CV is your personal marketing document — it needs to stand out to employers, recruiters, and academic institutions in a highly competitive job market.",
      "Tutors India's expert CV writers help you craft a compelling, professionally formatted curriculum vitae that accurately represents your skills, experience, and academic achievements. Whether you are a fresh graduate entering the workforce, an experienced professional seeking a career change, or an academic applying for a research position or PhD programme, our tailored CV writing service delivers results.",
      "We combine academic writing excellence with professional career advisory knowledge to produce CVs that pass Applicant Tracking Systems (ATS), impress human recruiters, and clearly communicate your unique value proposition.",
    ],
    features: [
      "Professionally written CV tailored to your target role and industry",
      "ATS-optimised formatting to pass automated screening systems",
      "Academic CV / research CV for university, research institute, or PhD applications",
      "Graduate CV for first-time job seekers and recent university graduates",
      "LinkedIn profile optimisation aligned with your new CV",
      "Cover letter writing tailored to specific job descriptions",
      "Personal statement for postgraduate and professional programme applications",
      "Keyword-rich content targeting your specific sector (Finance, Healthcare, Technology, Law, etc.)",
      "Clean, modern, and professional design templates",
      "Unlimited revisions until you are satisfied with the final document",
    ],
    faqs: [
      { q: "What is the difference between a CV and a resume?", a: "A CV (Curriculum Vitae) is a comprehensive document used primarily in the UK, Europe, and academic contexts, typically 2+ pages long, covering your full academic and professional history. A resume is a shorter (1–2 page) document common in the US, tailored to a specific role. We write both formats." },
      { q: "How long will my CV be?", a: "A graduate or early-career CV is typically 2 pages. An experienced professional CV may be 2–3 pages. An academic CV for research positions can be 4–6+ pages, covering publications, presentations, and research experience in detail." },
      { q: "Do you help with cover letters too?", a: "Yes. We offer tailored cover letter writing as an add-on or standalone service. Each cover letter is written specifically for the role you are applying to, complementing your CV and addressing the employer's key requirements." },
      { q: "Can you optimise my CV for online job boards and ATS systems?", a: "Absolutely. Our CVs are formatted and keyword-optimised to pass Applicant Tracking Systems used by large employers and recruitment agencies. This significantly increases the chances of your application reaching a human recruiter." },
      { q: "How quickly can I receive my CV?", a: "Standard CV delivery is within 48–72 hours. Express delivery within 24 hours is available for urgent applications. Complete the order form and we will begin immediately." },
    ],
  },

  "phd-full-dissertation": {
    headline: "PhD Doctorate Full Dissertation Writing Consultation Services",
    body: [
      "Are you looking for an expert writer of your specific subject for your PhD dissertation writing — completely from Abstract writing to Conclusion section with high research quality? We understand the importance of doctoral dissertation as a PhD dissertation is a scholarly document which represents the cumulative experience of one's entire educational experience.",
      "We develop the entire dissertation right from introduction to recommendations, offering holistic and comprehensive support and working with you until completion of your viva successfully. Our service is exclusive for students in UK, USA, and Australia.",
      "Our team includes PhD holders, postdoctoral fellows, MD/PhD holders, statisticians, biostatisticians, copy editors, and project coordinators. Writers have experience in research methodology, specific domain experience, and educational degrees from international and top-ranked universities.",
    ],
    features: [
      "Complete dissertation from Abstract to Bibliography and Appendices",
      "Three service tiers: Basic (descriptive), Advanced (clear gap identification), Premium (seminal research with excellent critical analysis)",
      "Editing: typographical errors, punctuation, grammar, sentence construction, terminology, logic and clarity",
      "Plagiarism check with 100% guarantee of 0% plagiarism using premium Turnitin",
      "Minor feedback addressed within 24 hours; substantial changes within one week",
      "Chapter-by-chapter dispatch with progress updates and coordinator contact",
      "Installment payment options available",
      "Free appendices: abstract, redrawn graphs, analysis screenshots, SPSS output, tutoring sessions",
      "Subject coverage: Business, Finance, HR, Engineering, Healthcare, CS, Law, Medicine, Economics, and 40+ more",
      "Three-level quality check: Technical QC, Editor QC, final requirement verification",
    ],
    faqs: [
      { q: "How is PhD dissertation support different from Masters?", a: "PhD dissertations require a much greater contribution to original knowledge, significantly deeper critical analysis, more extensive literature coverage, and a more complex methodology. Our PhD writers are exclusively PhD holders with postdoctoral experience in your subject area." },
      { q: "Do you support through the viva voce examination?", a: "Yes. Our service extends beyond dissertation delivery. We provide viva preparation support including mock viva sessions, anticipated examiner questions with model answers, and guidance on defending your research effectively." },
      { q: "What are the three service tiers for PhD dissertations?", a: "Basic tier covers descriptive research with standard analysis. Advanced tier includes clear research gap identification, critical literature synthesis, and advanced statistical analysis. Premium tier delivers seminal, publishable-quality research with excellent critical analysis, original theoretical contribution, and comprehensive methodology." },
      { q: "Can you help if I am stuck mid-way through my PhD?", a: "Absolutely. Many of our PhD clients come to us after starting their dissertation themselves and getting stuck. We conduct a thorough assessment of what has been done, identify gaps and weaknesses, and provide targeted support for specific chapters or a complete rework." },
      { q: "Is installment payment available for PhD dissertations?", a: "Yes. We understand that PhD dissertation support represents a significant investment. We offer flexible installment payment plans, typically split by chapter completion milestones, so you only pay as work is delivered and approved." },
    ],
  },

  "phd-research-proposal": {
    headline: "Ph.D. Doctorate Research Proposal Writing Help",
    body: [
      "Are you struggling with your research proposal, lacking experience, or unsure how to meet university guidelines for your PhD proposal? The research proposal is the most demanding and daunting task in dissertation writing. Our experienced researchers handle every aspect.",
      "All your PhD Research Proposals are written by qualified and experienced researchers from the US & UK. The service is completely flexible and tailor-made, allowing modifications based on your initial research parameters.",
      "Get your reply within 30 minutes which would enable you to place your order quickly without any delay in submissions. Free Gantt chart and ethical form completion included with every proposal order.",
    ],
    features: [
      "Proposal Title: precise working title conveying investigation ideas and target population",
      "Introduction: topic background, research questions, objectives and reader engagement",
      "Aim and Objectives: clear research goals and original contributions",
      "Comprehensive Literature Review: previous studies, themes, theories, identified gaps",
      "Research Methodology: approach, design, qualitative/quantitative methods, ethical considerations",
      "Potential Outcomes: significance and expected contributions to knowledge",
      "Timeline: Gantt chart with task completion dates",
      "References: latest peer-reviewed sources cited",
      "Bibliography and Appendices: additional sources and supporting materials",
      "Free: executive summary, free articles, Gantt chart, ethical form, university template formatting",
    ],
    faqs: [
      { q: "How long is a PhD research proposal?", a: "PhD research proposals are typically 2,000–5,000 words depending on your institution. Some universities require proposals of up to 10,000 words. We tailor the length and depth to your specific university's requirements." },
      { q: "What makes a strong PhD research proposal?", a: "A strong PhD proposal clearly identifies a genuine gap in existing knowledge, articulates original research questions, justifies the chosen methodology, demonstrates thorough familiarity with the literature, and shows the significance of the expected contribution to the field." },
      { q: "Can I get my proposal revised after supervisor feedback?", a: "Yes, unlimited revisions are included. Share your supervisor's comments and we will revise accordingly. Many PhD proposals require 2–3 revision cycles before final approval, and we support you through every iteration." },
      { q: "Do you include ethics application support?", a: "Yes. We complete your ethical review application alongside the proposal, covering risk assessment, participant consent, data management, and GDPR compliance in line with your university's ethics committee requirements." },
      { q: "How quickly can you deliver a PhD research proposal?", a: "Standard delivery is 5–7 days for a comprehensive PhD proposal. Express 72-hour delivery is available for shorter proposals or urgent requirements. Contact us for an immediate feasibility check." },
    ],
  },
};

const softwareTools = [
  "SPSS", "SPSS AMOS", "SAS", "R", "STATA", "E-Views", "Minitab",
  "NVIVO", "Atlas-ti", "MAXQDA", "Excel", "Epi-Info",
];

const subjectAreas = [
  "Arts & Humanities", "Biological Sciences", "Business & Management Studies",
  "Marketing & Communication", "Engineering & Technology", "Natural Sciences & Mathematics",
  "Economics & Administration", "Law", "Medicine & Health", "Education & Training",
  "Journalism & Media", "Agriculture & Forestry", "Computer Science & IT", "Hospitality, Leisure & Sports",
];

const guaranteeBadges = [
  { icon: "🛡️", title: "Plagiarism Free", desc: "Less than 5% or 0% with Turnitin certificate" },
  { icon: "🔁", title: "Unlimited Revisions", desc: "Free revisions, even after project completion" },
  { icon: "⏱", title: "On-Time Delivery", desc: "95–98% on-time, minor changes in 24 hours" },
  { icon: "🎓", title: "Expert Writers", desc: "PhD/Masters qualified, NDA-signed writers" },
  { icon: "🔒", title: "Confidential", desc: "128-bit SSL, unique project codes, NDA protection" },
  { icon: "📞", title: "24/7 Support", desc: "Email, phone, WhatsApp, direct writer contact" },
];

export default async function ServiceDetailPage({ params }: Props) {
  const { category, slug } = await params;
  const cat = serviceCategories.find((c) => c.slug === category);
  const svc = cat?.services.find((s) => s.href.includes(`/${slug}/`));
  if (!cat || !svc) notFound();

  const content = serviceContent[slug];
  const related = cat.services.filter((s) => s.href !== svc.href).slice(0, 6);
  const featuredTestimonials = testimonials.slice(0, 4);

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Services", url: "/our-services/" }, { name: cat.title, url: `/our-services/${cat.slug}/` }, { name: svc.title , url: `https://www.tutorsindia.com/our-services/${category}/${slug}/` }]} />
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,var(--navy) 0%,#2563b0 100%)", color: "#fff", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.85rem", color: "#a0b8e0", marginBottom: "12px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
              <Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}
              <Link href={`/our-services/${cat.slug}/`} style={{ color: "#a0b8e0" }}>{cat.title}</Link>{" / "}
              <span style={{ color: "#fff" }}>{svc.title}</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", margin: "8px 0 14px", lineHeight: 1.3 }}>
              {content?.headline ?? svc.title}
            </h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", maxWidth: "760px", lineHeight: 1.75 }}>{svc.description}</p>
            <div style={{ display: "flex", gap: "12px", marginTop: "24px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "11px 28px", background: "var(--orange)", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "0.95rem" }}>
                Get a Free Quote
              </Link>
              <Link href="/contact-us/" style={{ padding: "11px 28px", border: "2px solid rgba(255,255,255,0.6)", color: "#fff", borderRadius: "5px", fontWeight: 600, fontSize: "0.95rem" }}>
                Contact Us
              </Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/samples/dissertation-samples.webp" alt="Academic experts collaborating" loading="lazy" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.78rem", color: "#c5d5f0", lineHeight: 1.6 }}>Trusted Academic<br />Writing &amp; Editing<br />Since 2001</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>

      {/* Stats bar */}
      <div style={{ background: "var(--navy-dark)", color: "#fff", padding: "16px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", gap: "32px", flexWrap: "wrap", justifyContent: "center" }}>
          {[
            { n: "10,000+", l: "Scholars Served" },
            { n: "150+", l: "Expert Writers" },
            { n: "25+", l: "Years Experience" },
            { n: "20+", l: "Countries" },
            { n: "95–98%", l: "On-Time Delivery" },
          ].map((s) => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
              <div style={{ fontSize: "0.72rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main content + Sidebar */}
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }} className="sidebar-layout">
        {/* Main */}
        <div>
          {/* Description */}
          <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "12px", padding: "32px", marginBottom: "24px" }}>
            {content ? (
              <>
                {content.body.map((para, i) => (
                  <p key={i} style={{ color: "var(--text-mid)", lineHeight: 1.85, marginBottom: "14px", fontSize: "0.95rem" }}>{para}</p>
                ))}
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--navy)", margin: "24px 0 14px" }}>
                  Service Deliverables & Features
                </h3>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {content.features.map((f) => (
                    <li key={f} style={{ display: "flex", gap: "10px", padding: "9px 0", borderBottom: "1px solid var(--border)", fontSize: "0.94rem", color: "var(--text-mid)", lineHeight: 1.5 }}>
                      <span style={{ color: "var(--orange)", fontWeight: 700, flexShrink: 0 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <>
                <p style={{ color: "var(--text-mid)", lineHeight: 1.85, marginBottom: "14px" }}>{svc.description}</p>
                <p style={{ color: "var(--text-mid)", lineHeight: 1.85, marginBottom: "14px" }}>
                  At Tutors India, our team of expert writers and researchers are carefully selected based on their academic qualifications, research experience, and subject matter expertise. We ensure that every piece of work delivered meets the highest academic standards expected by UK, US, and Australian universities.
                </p>
                <p style={{ color: "var(--text-mid)", lineHeight: 1.85 }}>
                  Our services come with guaranteed on-time delivery, unlimited free revisions, less than 5% plagiarism with Turnitin certificate, and complete confidentiality. We have served over 2,00,000 students worldwide since 2001.
                </p>
              </>
            )}
          </div>

          {/* Quality guarantees */}
          <div style={{ background: "var(--gray)", borderRadius: "12px", padding: "28px", marginBottom: "24px" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--navy)", marginBottom: "16px" }}>Our Guarantees for This Service</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {guaranteeBadges.map((g) => (
                <div key={g.title} style={{ background: "#fff", borderRadius: "8px", padding: "14px", border: "1px solid var(--border)" }}>
                  <div style={{ fontSize: "1.4rem", marginBottom: "4px" }}>{g.icon}</div>
                  <div style={{ fontWeight: 700, color: "var(--navy)", fontSize: "0.94rem", marginBottom: "3px" }}>{g.title}</div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-mid)" }}>{g.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div style={{ marginBottom: "24px" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--navy)", marginBottom: "16px" }}>Voice of Our Customers</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
              {featuredTestimonials.map((t, i) => (
                <div key={i} style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "10px", padding: "18px" }}>
                  <div style={{ color: "var(--orange)", fontSize: "1.6rem", lineHeight: 1, marginBottom: "6px" }}>&ldquo;</div>
                  <p style={{ color: "var(--text-mid)", fontSize: "0.85rem", lineHeight: 1.65, fontStyle: "italic", marginBottom: "10px" }}>
                    {t.quote}
                  </p>
                  <div style={{ fontWeight: 700, color: "var(--navy)", fontSize: "0.83rem" }}>{t.author}</div>
                  {t.location && <div style={{ fontSize: "0.75rem", color: "var(--text-light)" }}>{t.location}</div>}
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          {content?.faqs && content.faqs.length > 0 && (
            <div style={{ marginBottom: "24px" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--navy)", marginBottom: "16px" }}>
                Frequently Asked Questions
              </h3>
              <FaqAccordion faqs={content.faqs} />
            </div>
          )}

          {/* Subject areas */}
          <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--navy)", marginBottom: "14px" }}>Subject Matter Expertise Areas</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {subjectAreas.map((s) => (
                <span key={s} style={{ background: "var(--light-blue)", color: "var(--blue)", padding: "4px 12px", borderRadius: "12px", fontSize: "0.78rem", fontWeight: 500 }}>{s}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div>
          {/* Order CTA */}
          <div style={{ background: "var(--navy)", color: "#fff", borderRadius: "12px", padding: "24px", marginBottom: "20px", textAlign: "center" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "8px" }}>Get a Free Quote</h3>
            <p style={{ color: "#c5d5f0", fontSize: "0.85rem", marginBottom: "16px" }}>Response within 30 minutes. Enquire now!</p>
            <Link href="/order-now/" style={{ display: "block", padding: "11px", background: "var(--orange)", color: "#fff", borderRadius: "5px", fontWeight: 600, marginBottom: "10px" }}>
              Order Now
            </Link>
            <Link href="/contact-us/" style={{ display: "block", padding: "11px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>
              Contact Us
            </Link>
            <div style={{ marginTop: "16px", paddingTop: "14px", borderTop: "1px solid rgba(255,255,255,0.15)", fontSize: "0.82rem" }}>
              <div style={{ color: "#c5d5f0", marginBottom: "4px" }}>📞 UK: <a href="tel:+441143520021" style={{ color: "#fff" }}>+44-1143520021</a></div>
              <div style={{ color: "#c5d5f0" }}>📞 India: <a href="tel:+918754446690" style={{ color: "#fff" }}>+91 8754446690</a></div>
            </div>
          </div>

          {/* Why choose us */}
          <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "12px", padding: "20px", marginBottom: "20px" }}>
            <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--navy)", marginBottom: "12px" }}>Why Choose Tutors India?</h4>
            {[
              "2000+ PhD & Masters qualified writers",
              "25+ years of academic expertise",
              "Served 20000+ scholars worldwide",
              "Less than 5% plagiarism guaranteed",
              "Unlimited free revisions",
              "95–98% on-time delivery rate",
              "100% confidential & NDA-signed",
              "24/7 email, phone & WhatsApp support",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "8px", padding: "7px 0", borderBottom: "1px solid var(--border)", fontSize: "0.82rem", color: "var(--text-mid)" }}>
                <span style={{ color: "var(--orange)", fontWeight: 700, flexShrink: 0 }}>✓</span>
                {item}
              </div>
            ))}
          </div>

          {/* Software tools */}
          <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "12px", padding: "20px", marginBottom: "20px" }}>
            <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--navy)", marginBottom: "12px" }}>Statistical Tools We Use</h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {softwareTools.map((tool) => (
                <span key={tool} style={{ background: "var(--gray)", color: "var(--text-mid)", padding: "3px 10px", borderRadius: "4px", fontSize: "0.78rem", border: "1px solid var(--border)" }}>{tool}</span>
              ))}
            </div>
          </div>

          {/* Related services */}
          <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "12px", padding: "20px" }}>
            <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--navy)", marginBottom: "12px" }}>Related Services</h4>
            {related.map((r) => (
              <Link key={r.href} href={r.href} style={{ display: "block", padding: "9px 0", borderBottom: "1px solid var(--border)", fontSize: "0.84rem", color: "var(--blue)" }}>
                → {r.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ background: "linear-gradient(135deg, var(--navy) 0%, #2563b0 100%)", color: "#fff", padding: "48px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: "10px" }}>Ready to Get Started?</h2>
        <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.85)", marginBottom: "24px", maxWidth: "600px", margin: "0 auto 24px" }}>
          Join 20000+ scholars who have trusted Tutors India with their academic success since 2001. Response within 30 minutes.
        </p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "var(--orange)", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "1rem" }}>
            Order Now
          </Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "1rem" }}>
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
