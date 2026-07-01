import Link from "next/link";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Statistical Analysis Q&A | Tutors India",
  description: "Expert answers to common statistical analysis questions — test selection, hypothesis formulation, Likert scales, regression, SEM, Bayesian analysis, and more.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://tutorsindia.com/coursework/statistical-analysis/" },
};

const qas = [
  {
    slug: "statistical-test-selection-research-design",
    q: "Which statistical test should I use for my research question?",
    a: "Test choice depends on your research design and variable types. For group comparison: t-test for 2 groups, ANOVA for 3+ groups. For testing association: Pearson's correlation or chi-square. For prediction: regression analysis. For ordinal/categorical data consider non-parametric tests (Mann-Whitney, Kruskal-Wallis). Always verify that your data meets test assumptions (normality, homogeneity of variance).",
  },
  {
    slug: "hypothesis-formulation-testing-support",
    q: "Can you help me with hypothesis formulation and testing?",
    a: "Yes. We assist with creating clear, testable hypotheses. A null hypothesis (H₀) assumes no effect or relationship; the alternative hypothesis (H₁) speculates about an effect. We help determine appropriate statistical tests — t-test, ANOVA, chi-square, regression — and assist with data collection, assumption testing, and p-value interpretation.",
  },
  {
    slug: "likert-scale-data-analysis",
    q: "Can you help analyze Likert scale data?",
    a: "Likert scale data is ordinal. Analysis techniques include: Descriptive Statistics (mean, median, mode); Mann-Whitney U Test (two independent groups); Kruskal-Wallis Test (3+ groups); and Regression Models (predicting relationships between Likert responses and other variables). We maintain the methodology aligned with your study design and data characteristics.",
  },
  {
    slug: "statistical-analysis-software-options",
    q: "What software do you use for statistical analysis?",
    a: "We offer multiple platforms based on your needs: SPSS (convenient for data management and complex analyses), R (excellent for heavyweight statistical analyses and visualizations), STATA (great for data manipulation and econometrics), SAS (large-scale applications), Python (custom analysis and machine learning), and Excel (basic analyses and quick visualizations). Choice depends on your research needs, university requirements, and data complexity.",
  },
  {
    slug: "p-values-confidence-intervals-explained",
    q: "Can you explain p-values and confidence intervals in simple terms?",
    a: "A p-value indicates the probability that a given result might have occurred accidentally. A low p-value (usually < 0.05) gives stronger evidence against the null hypothesis. A Confidence Interval (CI) is a range of values expected to contain the true population parameter — a 95% CI means we are 95% confident the real value falls within that interval. Together these concepts assess the reliability and significance of your findings.",
  },
  {
    slug: "anova-vs-ttest-difference",
    q: "What's the difference between ANOVA and t-test?",
    a: "A t-test tests the significance of the difference between two group means. ANOVA (Analysis of Variance) tests the difference among three or more groups by seeing if at least one group is significantly different. Use a t-test for two groups and ANOVA when three or more groups are concerned.",
  },
  {
    slug: "linear-regression-appropriateness",
    q: "How do I know if linear regression is appropriate for my data?",
    a: "Linear regression is appropriate when four assumptions are met: (1) Linearity — the relationship between dependent and independent variables should be linear. (2) Normality — residuals must be normally distributed. (3) Homoscedasticity — variances of residuals should be constant across all levels. (4) No Multicollinearity — independent variables must not correlate closely with each other.",
  },
  {
    slug: "logistic-regression-output-interpretation",
    q: "Can you help me to interpret my logistic regression output?",
    a: "Yes. We help interpret: Odds Ratios (Exp(B)) — how one-unit predictor increases affect outcome odds; Significance (p-values) — identifying statistically significant predictors; Model Fit — evaluating Nagelkerke R² and -2 Log Likelihood; and Discrimination Ability — assessing AUC and classification accuracy.",
  },
  {
    slug: "factor-analysis-pca-survey-data",
    q: "Can you conduct factor analysis or PCA on my survey data?",
    a: "Yes. We offer: Exploratory Factor Analysis (EFA) — to unveil underlying latent variables without prior assumptions; Confirmatory Factor Analysis (CFA) — testing theoretical factor structures; and Principal Component Analysis (PCA) — reducing feature dimensions while identifying components with maximum variance. We select the technique that best suits your research objectives.",
  },
  {
    slug: "structural-equation-modeling-dissertation",
    q: "Can I use Structural Equation Modeling (SEM) in my dissertation?",
    a: "Yes, provided: (1) Sample Size is preferably above 200 for stronger results. (2) The model is grounded in proper theories with clearly established variable relationships. (3) You use appropriate software — AMOS, LISREL, or R (lavaan). We can assist with model specification, fit evaluation, and results interpretation.",
  },
  {
    slug: "time-series-analysis-services",
    q: "Can you help with time series analysis?",
    a: "Yes. We provide: ARIMA Modelling — developing AutoRegressive Integrated Moving Average models for time-dependent data; Trend Analysis — identifying underlying long-term movements and cycles; and Forecasting — developing predictions based on historical data. We analyse data structure and patterns to build the most reliable predictive model for your research.",
  },
  {
    slug: "bayesian-analysis-introduction",
    q: "What is Bayesian analysis and when should I use it?",
    a: "Bayesian analysis incorporates prior knowledge or beliefs about a parameter into modelling, then updates estimates based on new data. Use it when: you have limited observations insufficient for classical methods; data is inherently dynamic or uncertain; or you need uncertainty quantification and the ability to refine conclusions with new evidence. It excels at complicated, dynamic modelling where prior knowledge significantly improves predictions.",
  },
  {
    slug: "statistical-method-justification",
    q: "Can you help me justify my chosen statistical method in my methodology chapter?",
    a: "Yes. We assist with: Academic Rationale — validation that your chosen methods align with research questions and data types; Citations — literature support and relevant statistical references for your methodological choices; and Clarity — ensuring justifications clearly present method benefits and limitations relative to your study. Share your methods and research context for customised justification.",
  },
  {
    slug: "results-interpretation-assistance",
    q: "Do you help with writing the results and interpretation section?",
    a: "Yes. We provide: Data Analysis — analysing findings against the most significant conclusions; Reporting — formatting results in APA or Harvard styles; Chart Preparation — creating professional charts and graphs; and Interpretation — ensuring results are interpreted meaningfully and effectively in relation to your research questions.",
  },
  {
    slug: "ethical-plagiarism-free-assistance",
    q: "Is your service plagiarism-free and ethical?",
    a: "Yes. Our three key commitments: Plagiarism-Free — all products are guaranteed to be original and cited appropriately; Ethical Standards — all procedures comply with UK university ethical standards on academic integrity; Support Model — our services assist with academic research, writing, and analysis — not unethical ghostwriting. We are a mentoring and guidance service.",
  },
];

export default function StatisticalAnalysisQAPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "52px 20px 44px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>
            <span style={{ color: "#a0b8e0" }}> / </span>
            <Link href="/coursework-writing/" style={{ color: "#a0b8e0" }}>Coursework</Link>
            <span style={{ color: "#a0b8e0" }}> / </span>
            <span style={{ color: "#fff" }}>Statistical Analysis</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.3rem,2.5vw,2rem)", lineHeight: 1.35, marginBottom: "12px" }}>
            Statistical Analysis
          </h1>
          <p style={{ color: "#c5d5f0", fontSize: "0.95rem", maxWidth: "680px" }}>
            Expert answers to the most common statistical analysis questions — covering test selection, software, regression, SEM, Bayesian methods, and more.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "44px 20px" }}>
        {qas.map((item, i) => (
          <div key={item.slug} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "28px", marginBottom: "20px" }}>
            <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "14px", lineHeight: 1.45 }}>
              {i + 1}. {item.q}
            </h2>
            <p style={{ color: "#444", lineHeight: 1.8, marginBottom: "14px" }}>{item.a}</p>
            <Link href={`/qa-forum/${item.slug}/`} style={{ color: "#e87722", fontSize: "0.85rem", fontWeight: 700 }}>
              Read full answer →
            </Link>
          </div>
        ))}

        <div style={{ marginTop: "32px", background: "#f5f6fa", borderRadius: "12px", padding: "24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
          <div>
            <h3 style={{ fontFamily: "Merriweather,serif", fontSize: "1rem", color: "#1a2a6c", marginBottom: "4px" }}>Need Statistical Analysis Support?</h3>
            <p style={{ fontSize: "0.86rem", color: "#666" }}>Our statisticians provide expert guidance from test selection through to results interpretation.</p>
          </div>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Link href="/order-now/" style={{ padding: "10px 22px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
            <Link href="/qa-forum/" style={{ padding: "10px 22px", border: "1.5px solid #1a2a6c", color: "#1a2a6c", borderRadius: "5px", fontWeight: 600 }}>Q&A Forum</Link>
          </div>
        </div>
      </div>

      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "44px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "10px" }}>Need Expert Statistical Help?</h2>
        <p style={{ color: "#c5d5f0", fontSize: "0.9rem", marginBottom: "18px" }}>Our PhD statisticians provide comprehensive support from data collection to final interpretation.</p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "11px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "11px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
