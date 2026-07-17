import Link from "next/link";
import type { Metadata } from "next";
import { fetchProxiedPage } from "@/lib/api/proxyPage";

export const revalidate = 3600;

interface Props {
  params: Promise<{ slug: string }>;
}

function slugToTitle(slug: string): string {
  return slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const proxied = await fetchProxiedPage(`/qa-forum/${slug}/`);
  const title = proxied?.title || slugToTitle(slug);
  return {
    title: `${title} — Q&A Forum`,
    description: `Expert answer to: ${title}. Get academic guidance from Tutors India's team of PhD-qualified specialists.`,
    alternates: { canonical: `https://www.tutorsindia.com/qa-forum/${slug}/` },
  };
}

// Static answers for known QA pages
const staticAnswers: Record<string, { q: string; a: string[] }> = {
  "statistical-test-selection-research-design": {
    q: "Which statistical test should I use for my research question?",
    a: [
      "It determines whether you're going to compare groups, test associations, or predict an outcome. For group comparison, use a t-test for 2 groups or ANOVA for 3+ groups. For testing association, use Pearson's correlation or chi-square tests. For predicting an outcome, regression analysis is appropriate.",
      "For categorical variables, chi-square tests work best. For continuous variables, t-tests or ANOVA are suitable. For ordinal data, consider non-parametric tests like Mann-Whitney or Kruskal-Wallis. Always verify that your data meets the assumptions (normality, homogeneity of variance) before selecting a test.",
    ],
  },
  "hypothesis-formulation-testing-support": {
    q: "Can you help me with hypothesis formulation and testing?",
    a: [
      "Yes, we assist with creating clear, testable, and relevant hypotheses. A null hypothesis (H₀) assumes no effect or relationship, while the alternative hypothesis (H₁) speculates about an effect or relationship.",
      "We help determine appropriate statistical tests: t-test for comparing two groups, ANOVA for three or more groups, chi-square for categorical data associations, and regression analyses for outcome prediction. We also assist with data collection, assumption testing, and p-value interpretation.",
    ],
  },
  "likert-scale-data-analysis": {
    q: "Can you help analyze Likert scale data?",
    a: [
      "Yes, we examine Likert scale data, which is considered ordinal, and deploy different analysis techniques depending on your research objectives and data aggregation.",
      "Techniques include: Descriptive Statistics (mean, median, mode) to examine central tendencies and distributions; Mann-Whitney U Test to compare two independent groups; Kruskal-Wallis Test for comparing more than 2 independent groups; and Regression Models to predict relationships between Likert scale responses and other variables. We maintain the methodology for your study design and the characteristics of the data.",
    ],
  },
  "statistical-analysis-software-options": {
    q: "What software do you use for statistical analysis?",
    a: [
      "We offer multiple statistical packages selected based on your preferences and research requirements: SPSS (convenient for data management and complex analyses), R (excellent for heavyweight statistical analyses and visualizations), STATA (great for data manipulation and econometrics), SAS (for large-scale applications), Python (for custom statistical analysis and machine learning), and Excel (for basic analyses and quick data visualization).",
      "The choice among these tools depends on your research needs, university requirements, and data complexity.",
    ],
  },
  "p-values-confidence-intervals-explained": {
    q: "Can you explain p-values and confidence intervals in simple terms?",
    a: [
      "A p-value indicates the probability that a given result might have occurred accidentally. A low p-value (usually < 0.05) gives stronger evidence against the null hypothesis (the case of 'no effect' or 'no difference').",
      "A Confidence Interval (CI) is a range of values expected to contain the true value of the population parameter. A 95% confidence interval means that we are 95% confident the real value is somewhere within that interval. Together, these concepts enable assessment of your findings' reliability and significance.",
    ],
  },
  "anova-vs-ttest-difference": {
    q: "What's the difference between ANOVA and t-test?",
    a: [
      "A t-test tests the significance of the difference between two group means. For example, comparing test scores between 2 classes.",
      "ANOVA (Analysis of Variance) tests the difference among three or more groups by seeing if at least one group is significantly different. For example, comparing test scores across multiple classes. In summary: use a t-test for two groups and ANOVA when three or more groups are concerned.",
    ],
  },
  "linear-regression-appropriateness": {
    q: "How do I know if linear regression is appropriate for my data?",
    a: [
      "Linear regression is appropriate when four key assumptions are met: (1) Linearity — the relationship between the dependent and independent variables should be linear. (2) Normality — the residuals (the difference between the observed and predicted values) must be normally distributed.",
      "(3) Homoscedasticity — variances of residuals should remain constant across all levels of the independent variable. (4) No Multicollinearity — independent variables must not correlate closely with each other. Check these assumptions using scatter plots, residual plots, and tests like the Shapiro-Wilk test before proceeding.",
    ],
  },
  "logistic-regression-output-interpretation": {
    q: "Can you help me to interpret my logistic regression output?",
    a: [
      "Yes, we can help you interpret your logistic regression output across four key areas: Odds Ratios (Exp(B)) — examining how one-unit predictor increases affect outcome odds; Significance (p-values) — identifying statistically significant predictors; Model Fit — evaluating Nagelkerke R² and -2 Log Likelihood metrics; and Discrimination Ability — assessing AUC and classification accuracy.",
    ],
  },
  "factor-analysis-pca-survey-data": {
    q: "Can you conduct factor analysis or PCA on my survey data?",
    a: [
      "Yes, we offer dimensionality reduction techniques that best suit your research objectives. Three primary methods are available: Exploratory Factor Analysis (EFA) to unveil underlying latent variables without any prior assumptions; Confirmatory Factor Analysis (CFA) for testing theoretical factor structures; and Principal Component Analysis (PCA) for reducing feature dimensions while identifying those components related to respective maximum variances.",
    ],
  },
  "structural-equation-modeling-dissertation": {
    q: "Can I use Structural Equation Modeling (SEM) in my dissertation?",
    a: [
      "Yes, Structural Equation Modeling can be incorporated into dissertation work, provided certain conditions are met: (1) Sample Size — get a sample size that is large, preferably above 200 for stronger results. (2) Theoretical Foundation — the model must be grounded in proper theories with clearly established variable relationships. (3) Software Tools — recommended platforms include AMOS, LISREL, and R (lavaan) for conducting analyses.",
    ],
  },
  "time-series-analysis-services": {
    q: "Can you help with time series analysis?",
    a: [
      "Yes, we provide time series analysis support across three key areas: ARIMA Modeling — we help you develop ARIMA (AutoRegressive Integrated Moving Average) approaches for handling time-dependent data; Trend Analysis — we help in the identification of underlying trends in your time series data with the understanding of long-term movements and cycles; and Forecasting — we assist in developing forecasts based on historical data to predict future patterns and trends.",
      "Through the entire analysis of the data structure and the patterns present in it, we build the best possible working model capable of making reliable predictions.",
    ],
  },
  "bayesian-analysis-introduction": {
    q: "What is Bayesian analysis and when should I use it?",
    a: [
      "Bayesian analysis is a statistical method that incorporates prior knowledge or beliefs about a parameter into modelling, with subsequent updates based on new data to refine estimates.",
      "You should use Bayesian analysis in these situations: when you have limited observations insufficient for classical statistical methods; when you need to model inherently dynamic or uncertain data; and when you require uncertainty quantification and the ability to refine conclusions as new evidence arrives. It is particularly powerful for complicated and dynamic modelling where prior knowledge can significantly improve predictions and inferences.",
    ],
  },
  "statistical-method-justification": {
    q: "Can you help me justify my chosen statistical method in my methodology chapter?",
    a: [
      "Yes, we assist with statistical method justification across three main areas: Academic Rationale — validation that your chosen methods align with your research questions and data types; Citations — literature support and relevant statistical references for your methodological choices; and Clarity — ensuring justifications clearly present method benefits and limitations relative to your study.",
      "Share your statistical methods and research context with us, and we will provide customised justification tailored to your specific needs.",
    ],
  },
  "results-interpretation-assistance": {
    q: "Do you help with writing the results and interpretation section?",
    a: [
      "Yes, we provide assistance with results and interpretation sections through four main features: Data Analysis — analysing the findings against the most significant conclusions; Reporting — formatting results in APA or Harvard citation styles; Chart Preparation — creating professional charts and graphs; and Interpretation — ensuring results are interpreted meaningfully and effectively.",
    ],
  },
  "ethical-plagiarism-free-assistance": {
    q: "Is your service plagiarism-free and ethical?",
    a: [
      "Yes, our service maintains ethical standards with three key commitments: Plagiarism-Free — all products are guaranteed to be original and cited appropriately; Ethical Standards — all procedures are compliant with UK university ethical standards concerning academic integrity; and Support Model — our services are offered to assist the client through academic research, writing, and analysis — not providing any unethical form of ghostwriting.",
    ],
  },
  "how-do-i-start-my-nursing-assignment-introduction": {
    q: "How do I start my nursing assignment introduction?",
    a: [
      "The tone of a nursing assignment introduction should be academic and will outline the purpose, importance, and shape of the assignment. It should establish context and demonstrate relevance to nursing or healthcare practice.",
      "Key components include: clear overall subject context, specific objectives addressing areas like patient safety, leadership, or wound care, references to current guidelines (NMC Code, NICE), and a summary sentence outlining the content flow. For example: 'This paper critically explores the role of patient-centred communication in managing post-operative complications in elderly patients.'",
    ],
  },
  "what-kind-of-evidence-should-i-use-in-a-nursing-assignment": {
    q: "What kind of evidence should I use in a nursing assignment?",
    a: [
      "UK nursing assignments require quality academic sources. Recommended evidence types include: peer-reviewed journal articles from databases like CINAHL, PubMed, and Medline; NMC Codes, NICE Guidelines, and WHO publications; systematic reviews, clinical trials, and practice frameworks; and Government or NHS reports.",
      "Do not use non-scholarly sources like blogs, Wikipedia, or old materials. Current evidence is prioritised — use publications from the last five years where possible. We can assist with locating credible, current sources and ensuring proper integration using correct referencing styles.",
    ],
  },
  "what-does-critical-analysis-mean-in-a-nursing-essay": {
    q: "What does critical analysis mean in a nursing essay?",
    a: [
      "Critical analysis in nursing essays refers to the evaluative process in which you engage with evidence, theories, and practices. It goes beyond description to examine strengths and limitations of evidence, compare various perspectives or treatment outcomes, and apply findings to patient care using models or guidelines.",
      "For example, rather than simply stating that antisepsis reduces infection, genuine critical analysis examines how compliance varies across different settings and evaluates evidence regarding long-term outcomes. Tutors India helps students develop advanced critical analysis skills essential for attaining higher academic grades and demonstrating depth in clinical reasoning.",
    ],
  },
  "what-citation-style-should-i-follow-in-uk-nursing-assignments": {
    q: "What citation style should I follow in UK nursing assignments?",
    a: [
      "UK nursing assignments typically require either APA 7th edition or the Harvard style referencing. Always check your module handbook for specific requirements, as this varies by institution.",
      "Key recommendations: use citation management software such as Zotero, EndNote, or Mendeley; maintain uniform formatting between in-text citations and reference lists; select credible, verifiable sources with proper formatting; and construct comprehensive reference sections. Note that failure to reference correctly could be a possible cause for plagiarism.",
    ],
  },
  "can-i-include-case-studies-or-patient-examples-in-my-assignment": {
    q: "Can I include case studies or patient examples in my assignment?",
    a: [
      "Yes, case studies and clinical examples are an excellent way to show how theory can be applied in practice in UK nursing assignments — with important conditions: patient identifying details must be anonymised (removed or altered); NMC Code (2018) guidelines on confidentiality must be followed; examples should support clinical reasoning, reflection, or evidence-based practice; and scenarios must be clearly linked to theoretical models and learning outcomes.",
      "For example, for a pressure ulcer management case, include NICE references alongside reflections on how theory influenced clinical decisions. We offer support in developing ethical case narratives that integrate well with the real world while engaging critically with nursing frameworks.",
    ],
  },
  "what-common-mistakes-do-i-have-to-avoid-in-nursing-assignments": {
    q: "What common mistakes do I have to avoid in nursing assignments?",
    a: [
      "Six primary areas where nursing students commonly lose marks: (1) Lack of Critical Engagement — providing descriptive writing without analytical depth. (2) Poor Source Quality — over-reliance on low-quality or outdated references. (3) Citation Issues — incorrectly formatted or inconsistently applied references. (4) Theory-Practice Disconnect — failing to connect theoretical concepts to real-world clinical scenarios.",
      "(5) Ignoring Assignment Parameters — overlooking the brief or specified learning outcomes. (6) Structural and Language Problems — deficient organisation and grammatical errors. We recommend utilising proofreading tools before submission, reviewing the marking rubric carefully, and considering professional editing and critical review services.",
    ],
  },
  "how-do-i-integrate-nursing-models-like-gibbs-reflective-cycle": {
    q: "How do I integrate nursing models like Gibbs Reflective Cycle?",
    a: [
      "The Gibbs Reflective Cycle should be organised into six distinct stages in your assignment: (1) Description — present the clinical event; (2) Feelings — express personal emotional responses; (3) Evaluation — assess what succeeded and what failed; (4) Analysis — connect evidence to the clinical experience; (5) Conclusion — summarise learning outcomes; (6) Action Plan — outline future improvements.",
      "This structure applies specifically to assignments assessing professional development, patient communication, or ethical decision-making. Tutors India offers writing assistance for reflections that meet assessment criteria while maintaining academic integrity and demonstrating self-awareness and clinical competence.",
    ],
  },
  "where-can-i-get-help-if-im-struggling-with-my-nursing-assignment": {
    q: "Where can I get help if I'm struggling with my nursing assignment?",
    a: [
      "Multiple support resources are available: speak to your tutor or academic advisor for uncertainties regarding the assignment; use your university writing services or academic skills workshops; access library databases and tools for referencing; and engage with peer study groups for collaborative work.",
      "Tutors India offers specialised assistance including topic selection, research, critical writing, referencing, and proofreading — providing tailored academic mentoring to build the confidence and academic rigour needed to meet university standards for UK nursing students.",
    ],
  },
  "how-do-i-manage-word-count-effectively": {
    q: "How do I manage word count effectively?",
    a: [
      "Six core strategies for word-count management: (1) Assign word count for each section (e.g. 10% introduction, 20% conclusion). (2) Avoid redundancy and irrelevant content. (3) Use headings, subheadings, or bullet points for clarity. (4) Summarise instead of quoting directly.",
      "(5) Stay focused on your topic throughout. (6) Delete all unnecessary words during editing. Most institutions allow approximately ±10% deviation from the stated word count. Tutors India provides assignment structuring and editing assistance to maintain word count compliance while preserving academic quality.",
    ],
  },
  "what-is-the-ideal-structure-for-a-nursing-assignment-in-the-uk": {
    q: "What is the ideal structure for a nursing assignment in the UK?",
    a: [
      "A UK nursing assignment should follow this structure: Introduction — a brief overview introducing the topic, clinical definitions, and assignment objectives; Main Body — organised into thematic sections supported by evidence-based literature and clinical guidelines (such as NICE recommendations) plus nursing frameworks; Critical Analysis — applying theoretical models including Gibbs Reflective Cycle, Orem's Model, or Roper-Logan-Tierney framework; Conclusion — summarising key findings and their implications for clinical practice; and References — formatted in either APA 7th edition or Harvard style, depending on your institution's requirements.",
      "We provide step-by-step guidance from topic formulation through to referencing.",
    ],
  },
};

export default async function QASlugPage({ params }: Props) {
  const { slug } = await params;
  const staticData = staticAnswers[slug];
  // Only fetch proxy for slugs without a static answer
  const proxied = staticData ? null : await fetchProxiedPage(`/qa-forum/${slug}/`);
  const title = staticData?.q || proxied?.title || slugToTitle(slug);
  const hasProxiedContent = !staticData && proxied?.content && proxied.content.trim().length > 100;

  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.96rem", color: "#a0b8e0", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}
            <Link href="/qa-forum/" style={{ color: "#a0b8e0" }}>Q&A Forum</Link>{" / "}
            <span style={{ color: "#fff" }}>{title}</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.2rem,2.5vw,1.9rem)", marginBottom: "8px", lineHeight: 1.35 }}>{title}</h1>
        </div>
      </section>

      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 20px", display: "grid", gridTemplateColumns: "2fr 1fr", gap: "40px", alignItems: "start" }} className="qa-detail-layout">
        <article>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "32px" }}>
            {hasProxiedContent ? (
              <div className="library-content" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: proxied!.content }} />
            ) : staticData ? (
              <>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start", marginBottom: "24px" }}>
                  <div style={{ background: "#e8f0fb", color: "#1a2a6c", borderRadius: "50%", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, flexShrink: 0, fontSize: "0.95rem" }}>Q</div>
                  <h2 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", lineHeight: 1.45 }}>{staticData.q}</h2>
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <div style={{ background: "#e87722", color: "#fff", borderRadius: "50%", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, flexShrink: 0, fontSize: "0.95rem" }}>A</div>
                  <div style={{ color: "#444", lineHeight: 1.8 }}>
                    {staticData.a.map((para, i) => (
                      <p key={i} style={{ marginBottom: i < staticData.a.length - 1 ? "14px" : 0 }}>{para}</p>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start", marginBottom: "24px" }}>
                  <div style={{ background: "#e8f0fb", color: "#1a2a6c", borderRadius: "50%", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, flexShrink: 0 }}>Q</div>
                  <h2 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c" }}>{title}</h2>
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <div style={{ background: "#e87722", color: "#fff", borderRadius: "50%", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, flexShrink: 0 }}>A</div>
                  <div style={{ color: "#444", lineHeight: 1.8 }}>
                    <p style={{ marginBottom: "14px" }}>At Tutors India, our team of PhD-qualified specialists regularly assist students with this type of query as part of our comprehensive academic support services.</p>
                    <p>If you need personalised support for your specific requirements, our expert team is available to provide tailored guidance. Contact us for a free consultation.</p>
                  </div>
                </div>
              </>
            )}
          </div>
          <div style={{ marginTop: "16px", background: "#f5f6fa", borderRadius: "10px", padding: "16px 20px" }}>
            <p style={{ fontSize: "0.85rem", color: "#555", margin: 0 }}>
              <strong>Answered by:</strong> Tutors India Academic Expert Team — PhD-qualified specialists with experience in UK/US higher education systems.
            </p>
          </div>
        </article>

        <div style={{ position: "sticky", top: "80px" }}>
          <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "24px", marginBottom: "20px", textAlign: "center" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontWeight: 700, marginBottom: "10px" }}>Have a Question?</h3>
            <p style={{ fontSize: "0.85rem", color: "#c5d5f0", marginBottom: "16px" }}>Our experts answer academic questions on statistics, methodology, writing, and more.</p>
            <Link href="/ask-an-expert/" style={{ display: "block", padding: "10px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Ask an Expert</Link>
          </div>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "20px", marginBottom: "16px" }}>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "0.95rem", color: "#1a2a6c", marginBottom: "12px" }}>Related Services</h3>
            {[
              { href: "/data-analysis/", label: "Data Analysis Services" },
              { href: "/research-methodology/", label: "Research Methodology" },
              { href: "/masters-dissertation/", label: "Masters Dissertation" },
              { href: "/coursework-writing/", label: "Coursework Writing" },
              { href: "/our-services/publication-support/statistical-analysis/", label: "Statistical Analysis" },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{ display: "block", color: "#2563b0", fontSize: "0.85rem", marginBottom: "8px", fontWeight: 600 }}>→ {l.label}</Link>
            ))}
          </div>
          <div style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "20px" }}>
            <Link href="/order-now/" style={{ display: "block", padding: "11px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700, textAlign: "center", marginBottom: "10px" }}>Order Now</Link>
            <Link href="/contact-us/" style={{ display: "block", padding: "11px", border: "1.5px solid #1a2a6c", color: "#1a2a6c", borderRadius: "5px", fontWeight: 700, textAlign: "center" }}>Contact Us</Link>
          </div>
        </div>
      </section>

      <Link href="/qa-forum/" style={{ display: "block", maxWidth: "1200px", margin: "0 auto", padding: "0 20px 40px", color: "#2563b0", fontWeight: 600 }}>← Back to Q&A Forum</Link>

      <style>{`@media(max-width:768px){.qa-detail-layout{grid-template-columns:1fr!important;}}`}</style>
    </>
  );
}
