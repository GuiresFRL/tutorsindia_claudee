import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  // Reduce unused JS — target modern browsers only (drops polyfills like Array.at, Object.fromEntries etc.)
  experimental: {
    optimizePackageImports: ["pdf-lib", "nodemailer"],
  },
  compiler: {
    // Remove dead code in production
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },
  async redirects() {
    return [
      // /title/title-[slug] → /title/[slug] (duplicate URL pattern on live site).
      // No trailing slash — the site's canonical URL format dropped trailing
      // slashes, and Next normalises the incoming request before matching, so
      // a source pattern requiring a trailing slash would never match.
      {
        source: "/title/title-:slug",
        destination: "/title/:slug",
        permanent: true,
      },

      // Freelance / Freelance Academic Writer — send to the external
      // recruitment site instead of serving these on tutorsindia.com.
      { source: "/freelance", destination: "https://workfoster.com", permanent: true },
      { source: "/freelance/academic-writer", destination: "https://workfoster.com", permanent: true },

      // Stale WordPress-era sitemap URLs with no equivalent page on this site —
      // redirected to the closest live replacement instead of 404ing.
      { source: "/academy/assignment-writing", destination: "/academy", permanent: true },
      { source: "/academy/business-management-info", destination: "/academy", permanent: true },
      { source: "/academy/coding-algorithms-development", destination: "/academy", permanent: true },
      { source: "/academy/defenitions", destination: "/academy", permanent: true },
      { source: "/academy/engineering-and-technology", destination: "/academy", permanent: true },
      { source: "/academy/engineering-technology-ebooks", destination: "/academy", permanent: true },
      { source: "/academy/future-topics", destination: "/academy", permanent: true },
      { source: "/academy/future-topics-titles", destination: "/academy", permanent: true },
      { source: "/academy/how-to-article", destination: "/academy", permanent: true },
      { source: "/academy/infographics", destination: "/academy", permanent: true },
      { source: "/academy/manuscript-writing", destination: "/academy", permanent: true },
      { source: "/academy/phd-dissertation", destination: "/academy", permanent: true },
      { source: "/academy/recent-trends-2", destination: "/academy", permanent: true },
      { source: "/academy/research-methodology", destination: "/academy", permanent: true },
      { source: "/academy/research-papers", destination: "/academy", permanent: true },
      { source: "/academy/theories", destination: "/academy", permanent: true },

      { source: "/ask-an-expert/political-science", destination: "/ask-an-expert/management/political-science", permanent: true },

      { source: "/our-services/development-2/illustration-and-redrawing", destination: "/our-services/development", permanent: true },
      { source: "/our-services/development-2/pilot-study-analysis", destination: "/our-services/development", permanent: true },
      { source: "/our-services/development-2/text-or-data-analysis", destination: "/our-services/development", permanent: true },

      { source: "/our-services/masters-dissertation-writing-services/qualitative-data-analysis", destination: "/our-services/masters-dissertation-writing-services/dissertation-statistical-analysis", permanent: true },

      { source: "/our-services/phd-dba-dissertation/full-dissertation-2", destination: "/our-services/phd-dba-dissertation/phd-full-dissertation", permanent: true },
      { source: "/our-services/phd-dba-dissertation/power-point-presentation", destination: "/our-services/phd-dba-dissertation/phd-presentation", permanent: true },
      { source: "/our-services/phd-dba-dissertation/quantitative-data-analysis", destination: "/our-services/phd-dba-dissertation", permanent: true },

      // Broken-redirect audit findings (2026-07-18): trailing-slash URLs whose
      // stripped-slash target has no matching page — redirected straight to the
      // closest live page instead of 308-ing into a 404.
      { source: "/academy/research-concepts", destination: "/academy", permanent: true },
      { source: "/academy/resources", destination: "/academy", permanent: true },
      { source: "/academy/University", destination: "/academy", permanent: true },
      { source: "/library/essay-index/management-essays/application-of-theory-of-iinternational-business-a-case-study-of-mcdonald", destination: "/library/essay-index/management-essays", permanent: true },
      { source: "/help-guide/study-guides-how-to-write-a-dissertation-methodology", destination: "/help-guide/study-guides", permanent: true },
      { source: "/help-guide/study-guides/guide-for-writing-medical-assignments", destination: "/help-guide/study-guides", permanent: true },
      { source: "/our-services/data-collection", destination: "/our-services", permanent: true },
      { source: "/subjects/humanities-assignment-writing-services", destination: "/subjects/arts-humanities-academic-writing-help", permanent: true },
      { source: "/our-services/coursework-writing/case-study", destination: "/our-services/coursework-writing", permanent: true },
      { source: "/our-services/coursework-writing/business-plan", destination: "/our-services/coursework-writing", permanent: true },
      { source: "/our-services/masters-dissertation-writing-services-/dissertation-proposal-", destination: "/our-services/masters-dissertation-writing-services/dissertation-proposal", permanent: true },

      // Legacy WordPress permalinks preserve a category prefix (e.g.
      // /academy/how-to-article/some-post), but the linked, canonical form
      // on this site is the flat /academy/:slug -- these nested URLs were
      // orphaned (found via full-site audit, 2026-07-18) and duplicated the
      // real article under a second URL. Verified each target resolves
      // before redirecting (6 other nested URLs had no flat equivalent and
      // were left untouched, since their content only exists at that path).
      { source: "/academy/engineering-and-techology/recent-trends-of-nlp-based-text-analytics-with-specific-to-the-semantic-information-medical-application", destination: "/academy/recent-trends-of-nlp-based-text-analytics-with-specific-to-the-semantic-information-medical-application", permanent: true },
      { source: "/academy/how-to-article/mba-assignment-help-in-malaysia", destination: "/academy/mba-assignment-help-in-malaysia", permanent: true },
      { source: "/academy/business-management/impacts-of-artificial-intelligence-in-enhancing-customer-engagement-how-ai-can-improve-customer-experience-strategy", destination: "/academy/impacts-of-artificial-intelligence-in-enhancing-customer-engagement-how-ai-can-improve-customer-experience-strategy", permanent: true },
      { source: "/academy/engineering-and-techology/layout-of-engineering-report", destination: "/academy/layout-of-engineering-report", permanent: true },
      { source: "/academy/how-to-article/sample-size-cross-sectional-business-uk-masters", destination: "/academy/sample-size-cross-sectional-business-uk-masters", permanent: true },
      { source: "/academy/how-to-article/manuscript-development-services-in-germany", destination: "/academy/manuscript-development-services-in-germany", permanent: true },
      { source: "/academy/how-to-article/monetary-fiscal-policies-economic-crises-usa", destination: "/academy/monetary-fiscal-policies-economic-crises-usa", permanent: true },
      { source: "/academy/how-to-article/python-environment-setup-ai-ml", destination: "/academy/python-environment-setup-ai-ml", permanent: true },
      { source: "/academy/how-to-article/researchable-dissertation-topic", destination: "/academy/researchable-dissertation-topic", permanent: true },
      { source: "/academy/how-to-article/literature-review-writing-help-in-uae", destination: "/academy/literature-review-writing-help-in-uae", permanent: true },
      { source: "/academy/how-to-article/descriptive-to-critical-writing-masters-assignments", destination: "/academy/descriptive-to-critical-writing-masters-assignments", permanent: true },
      { source: "/academy/engineering-and-techology/five-challenges-and-their-strategies-for-effective-writing-of-all-types-of-university-assignments-masters-students-journey-during-beginning-of-your-assignment-work-a-case-of-over", destination: "/academy/five-challenges-and-their-strategies-for-effective-writing-of-all-types-of-university-assignments-masters-students-journey-during-beginning-of-your-assignment-work-a-case-of-over", permanent: true },
      { source: "/academy/how-to-article/masters-assignment-writing-help-in-uae", destination: "/academy/masters-assignment-writing-help-in-uae", permanent: true },
      { source: "/academy/engineering-and-techology/project-management-tools-and-techniques", destination: "/academy/project-management-tools-and-techniques", permanent: true },
      { source: "/academy/how-to-article/masters-research-proposal-writing-help-in-australia", destination: "/academy/masters-research-proposal-writing-help-in-australia", permanent: true },
      { source: "/academy/how-to-article/write-masters-assignment-time-management-requirements", destination: "/academy/write-masters-assignment-time-management-requirements", permanent: true },
      { source: "/academy/how-to-article/essay-writing-help-in-uae", destination: "/academy/essay-writing-help-in-uae", permanent: true },
      { source: "/academy/how-to-article/statistical-data-analysis-masters-thesis-netherlands", destination: "/academy/statistical-data-analysis-masters-thesis-netherlands", permanent: true },
      { source: "/academy/how-to-article/uk-masters-dissertation-child-online-safety-laws-impact", destination: "/academy/uk-masters-dissertation-child-online-safety-laws-impact", permanent: true },
      { source: "/academy/how-to-article/dissertation-formatting-appendices-challenges", destination: "/academy/dissertation-formatting-appendices-challenges", permanent: true },
      { source: "/academy/how-to-article/assignment-writing-services-in-germany", destination: "/academy/assignment-writing-services-in-germany", permanent: true },
      { source: "/academy/how-to-article/ethical-issues-delay-research-proposals-uk", destination: "/academy/ethical-issues-delay-research-proposals-uk", permanent: true },
      { source: "/academy/how-to-article/uk-phd-ethics-application-step-by-step-guide", destination: "/academy/uk-phd-ethics-application-step-by-step-guide", permanent: true },
      { source: "/academy/how-to-article/digital-transformation-business-process-efficiency-uk-masters", destination: "/academy/digital-transformation-business-process-efficiency-uk-masters", permanent: true },
      { source: "/academy/engineering-and-techology/tips-for-developing-intrusion-detection-system-and-significance-of-machine-learning-technique-in-a-cloud-platform", destination: "/academy/tips-for-developing-intrusion-detection-system-and-significance-of-machine-learning-technique-in-a-cloud-platform", permanent: true },
      { source: "/academy/how-to-article/types-of-data-analysis-techniques-uk-masters-dissertation", destination: "/academy/types-of-data-analysis-techniques-uk-masters-dissertation", permanent: true },
      { source: "/academy/how-to-article/literature-review-writing-service-in-uk", destination: "/academy/literature-review-writing-service-in-uk", permanent: true },
      { source: "/academy/how-to-article/harvard-vs-apa-referencing-undergraduate-masters", destination: "/academy/harvard-vs-apa-referencing-undergraduate-masters", permanent: true },
      { source: "/academy/how-to-article/literature-review-types-masters-thesis-kuwait", destination: "/academy/literature-review-types-masters-thesis-kuwait", permanent: true },
      { source: "/academy/how-to-article/research-methodology-writing-help-in-uae", destination: "/academy/research-methodology-writing-help-in-uae", permanent: true },
      { source: "/academy/engineering-and-techology/dissertation-on-appraise-organizational-structural-contexts-to-lead-work-and-communicate-within-and-between-organizations-in-a-physical-and-virtual-environment-future-directions", destination: "/academy/dissertation-on-appraise-organizational-structural-contexts-to-lead-work-and-communicate-within-and-between-organizations-in-a-physical-and-virtual-environment-future-directions", permanent: true },
      { source: "/academy/how-to-article/masters-dissertation-statistical-analysis-help-in-uae", destination: "/academy/masters-dissertation-statistical-analysis-help-in-uae", permanent: true },
      { source: "/academy/engineering-and-techology/secure-access-control-framework-for-fully-fledged-network-security-control", destination: "/academy/secure-access-control-framework-for-fully-fledged-network-security-control", permanent: true },
      { source: "/academy/how-to-article/uae-phd-research-methodology-writing-guide", destination: "/academy/uae-phd-research-methodology-writing-guide", permanent: true },
      { source: "/academy/how-to-article/dissertation-editing-services-in-uae", destination: "/academy/dissertation-editing-services-in-uae", permanent: true },
      { source: "/academy/business-management/finding-and-reviewing-hr-literature-and-information-sources-for-phd-hr-dissertation", destination: "/academy/finding-and-reviewing-hr-literature-and-information-sources-for-phd-hr-dissertation", permanent: true },
      { source: "/academy/engineering-and-techology/recent-phd-research-topic-ideas-for-electrical-engineering-2020", destination: "/academy/recent-phd-research-topic-ideas-for-electrical-engineering-2020", permanent: true },
      { source: "/academy/how-to-article/how-to-write-masters-manuscript-step-by-step", destination: "/academy/how-to-write-masters-manuscript-step-by-step", permanent: true },
      { source: "/academy/how-to-article/research-design-methods-french-phd-dissertation", destination: "/academy/research-design-methods-french-phd-dissertation", permanent: true },
      { source: "/academy/how-to-article/healthcare-research-methodology-uae-masters-dissertation", destination: "/academy/healthcare-research-methodology-uae-masters-dissertation", permanent: true },
      { source: "/academy/how-to-article/masters-research-proposal-writing-help-in-uae", destination: "/academy/masters-research-proposal-writing-help-in-uae", permanent: true },
      { source: "/academy/how-to-article/masters-statistical-analysis-service-in-uk", destination: "/academy/masters-statistical-analysis-service-in-uk", permanent: true },
      { source: "/academy/engineering-and-techology/security-and-privacy-issues-over-the-cloud-environment-tips-for-developing-secure-cloud-model", destination: "/academy/security-and-privacy-issues-over-the-cloud-environment-tips-for-developing-secure-cloud-model", permanent: true },
      { source: "/academy/engineering-and-techology/tips-concepts-of-the-knowledge-discovery-process-in-cloud-computing", destination: "/academy/tips-concepts-of-the-knowledge-discovery-process-in-cloud-computing", permanent: true },
      { source: "/academy/business-management/dissertation-data-analysis-in-management-science", destination: "/academy/dissertation-data-analysis-in-management-science", permanent: true },
      { source: "/academy/how-to-article/quantitative-models-ai-compliance-financial-impact-uk", destination: "/academy/quantitative-models-ai-compliance-financial-impact-uk", permanent: true },
      { source: "/academy/how-to-article/masters-dissertation-proposal-writing-help-in-uae", destination: "/academy/masters-dissertation-proposal-writing-help-in-uae", permanent: true },
      { source: "/academy/how-to-article/sampling-strategy-usa-management-dissertation", destination: "/academy/sampling-strategy-usa-management-dissertation", permanent: true },
      { source: "/academy/how-to-article/ai-adoption-barriers-uk-businesses", destination: "/academy/ai-adoption-barriers-uk-businesses", permanent: true },
      { source: "/academy/how-to-article/convert-masters-dissertation-into-journal-publication", destination: "/academy/convert-masters-dissertation-into-journal-publication", permanent: true },
      { source: "/academy/how-to-article/uk-masters-research-proposal-guide", destination: "/academy/uk-masters-research-proposal-guide", permanent: true },
      { source: "/academy/engineering-and-techology/some-dimensions-of-the-different-components-of-the-generic-dissertation", destination: "/academy/some-dimensions-of-the-different-components-of-the-generic-dissertation", permanent: true },
      { source: "/academy/how-to-article/masters-assignment-writing-services-in-uk", destination: "/academy/masters-assignment-writing-services-in-uk", permanent: true },
      { source: "/academy/how-to-article/how-to-write-a-dissertation-title-a-masters-guide", destination: "/academy/how-to-write-a-dissertation-title-a-masters-guide", permanent: true },
      { source: "/academy/how-to-article/netherlands-climate-adaptation-policy-effectiveness", destination: "/academy/netherlands-climate-adaptation-policy-effectiveness", permanent: true },
      { source: "/academy/how-to-article/masters-part-dissertation-writing-service-in-uk", destination: "/academy/masters-part-dissertation-writing-service-in-uk", permanent: true },
      { source: "/academy/how-to-article/masters-part-dissertation-writing-help-in-uae", destination: "/academy/masters-part-dissertation-writing-help-in-uae", permanent: true },
      { source: "/academy/how-to-article/uk-masters-research-proposal-supervisor-expectations", destination: "/academy/uk-masters-research-proposal-supervisor-expectations", permanent: true },
      { source: "/academy/how-to-article/masters-full-dissertation-writing-help-in-uae", destination: "/academy/masters-full-dissertation-writing-help-in-uae", permanent: true },
      { source: "/academy/how-to-article/masters-thesis-ethics-approval-guide", destination: "/academy/masters-thesis-ethics-approval-guide", permanent: true },
      { source: "/academy/how-to-article/examiner-ready-uk-masters-dissertation-structure", destination: "/academy/examiner-ready-uk-masters-dissertation-structure", permanent: true },
      { source: "/academy/how-to-article/research-design-techniques-uk-masters-dissertation", destination: "/academy/research-design-techniques-uk-masters-dissertation", permanent: true },
      { source: "/academy/how-to-article/uk-masters-dissertation-research-gap-challenges", destination: "/academy/uk-masters-dissertation-research-gap-challenges", permanent: true },
      { source: "/academy/how-to-article/mba-dissertation-writing-services-in-saudi-arabia", destination: "/academy/mba-dissertation-writing-services-in-saudi-arabia", permanent: true },
      { source: "/academy/how-to-article/common-challenges-writing-masters-dissertation", destination: "/academy/common-challenges-writing-masters-dissertation", permanent: true },
      { source: "/academy/how-to-article/sampling-techniques-uk-dissertation-research-guide", destination: "/academy/sampling-techniques-uk-dissertation-research-guide", permanent: true },
      { source: "/academy/how-to-article/why-students-fail-uk-dissertation-marking-criteria", destination: "/academy/why-students-fail-uk-dissertation-marking-criteria", permanent: true },
      { source: "/academy/engineering-and-techology/tips-for-developing-secure-and-flexible-management-policy-for-multiple-users-over-the-cloud", destination: "/academy/tips-for-developing-secure-and-flexible-management-policy-for-multiple-users-over-the-cloud", permanent: true },
      { source: "/academy/how-to-article/programming-and-algorithm-dissertation-help-in-kuwait", destination: "/academy/programming-and-algorithm-dissertation-help-in-kuwait", permanent: true },
      { source: "/academy/q-and-a/dissertation-writing-services", destination: "/academy/dissertation-writing-services", permanent: true },
      { source: "/academy/how-to-article/original-research-topic-challenges-masters", destination: "/academy/original-research-topic-challenges-masters", permanent: true },
      { source: "/academy/how-to-article/masters-full-dissertation-writing-service-in-saudi-arabia", destination: "/academy/masters-full-dissertation-writing-service-in-saudi-arabia", permanent: true },
      { source: "/academy/how-to-article/statistical-techniques-predictive-analytics-masters-dissertation", destination: "/academy/statistical-techniques-predictive-analytics-masters-dissertation", permanent: true },
      { source: "/academy/how-to-article/masters-essay-writing-help-in-uae", destination: "/academy/masters-essay-writing-help-in-uae", permanent: true },
      { source: "/academy/how-to-article/masters-economics-dissertation-help-in-uk", destination: "/academy/masters-economics-dissertation-help-in-uk", permanent: true },
      { source: "/academy/business-management/management-and-regulation-risk", destination: "/academy/management-and-regulation-risk", permanent: true },
      { source: "/academy/how-to-article/overcoming-research-methodology-confusion-masters-proposal", destination: "/academy/overcoming-research-methodology-confusion-masters-proposal", permanent: true },
      { source: "/academy/how-to-article/masters-chapter-wise-dissertation-service-in-germany", destination: "/academy/masters-chapter-wise-dissertation-service-in-germany", permanent: true },
      { source: "/academy/how-to-article/masters-assignment-writing-service-in-australia", destination: "/academy/masters-assignment-writing-service-in-australia", permanent: true },
      { source: "/academy/how-to-article/overcome-data-analysis-interpretation-challenges-masters-dissertation", destination: "/academy/overcome-data-analysis-interpretation-challenges-masters-dissertation", permanent: true },
      { source: "/academy/how-to-article/editing-and-proofreading-help-in-saudi-arabia", destination: "/academy/editing-and-proofreading-help-in-saudi-arabia", permanent: true },
      { source: "/academy/how-to-article/select-research-methodology-masters-research-proposal", destination: "/academy/select-research-methodology-masters-research-proposal", permanent: true },
      { source: "/academy/how-to-article/research-proposal-writing-service-in-uk", destination: "/academy/research-proposal-writing-service-in-uk", permanent: true },
      { source: "/academy/how-to-article/quiet-quitting-silent-resistance-gen-z-uk", destination: "/academy/quiet-quitting-silent-resistance-gen-z-uk", permanent: true },
      { source: "/academy/how-to-article/masters-research-proposal-help-in-qatar", destination: "/academy/masters-research-proposal-help-in-qatar", permanent: true },
      { source: "/academy/how-to-article/data-analysis-methods-masters-thesis-ireland", destination: "/academy/data-analysis-methods-masters-thesis-ireland", permanent: true },
      { source: "/academy/how-to-article/masters-assignment-writing-service-in-malaysia", destination: "/academy/masters-assignment-writing-service-in-malaysia", permanent: true },
      { source: "/academy/how-to-article/overcome-research-methodology-challenges-masters-dissertation", destination: "/academy/overcome-research-methodology-challenges-masters-dissertation", permanent: true },
      { source: "/academy/engineering-and-techology/big-data-in-cloud-computing-review-and-opportunities-introduction", destination: "/academy/big-data-in-cloud-computing-review-and-opportunities-introduction", permanent: true },
      { source: "/academy/how-to-article/academic-essay-types", destination: "/academy/academic-essay-types", permanent: true },
      { source: "/academy/business-management/macro-economic-challenge-in-the-global-economy-possible-research-areas-for-your-postgraduate-economic-dissertation", destination: "/academy/macro-economic-challenge-in-the-global-economy-possible-research-areas-for-your-postgraduate-economic-dissertation", permanent: true },
      { source: "/academy/research-papers/literature-review-on-future-power-networks", destination: "/academy/literature-review-on-future-power-networks", permanent: true },
      { source: "/academy/how-to-article/common-mistakes-writing-research-objectives-uk", destination: "/academy/common-mistakes-writing-research-objectives-uk", permanent: true },
      { source: "/academy/how-to-article/masters-complete-dissertation-help-in-uae", destination: "/academy/masters-complete-dissertation-help-in-uae", permanent: true },
      { source: "/academy/how-to-article/uk-dissertation-topic-selection-help", destination: "/academy/uk-dissertation-topic-selection-help", permanent: true },
      { source: "/academy/how-to-article/statistical-analysis-help-in-qatar", destination: "/academy/statistical-analysis-help-in-qatar", permanent: true },
      { source: "/academy/futuretopics-titles/recent-phd-research-topic-ideas-for-electronic-engineering-2020", destination: "/academy/recent-phd-research-topic-ideas-for-electronic-engineering-2020", permanent: true },
      { source: "/academy/how-to-article/coding-and-algorithm-development-services-in-uk", destination: "/academy/coding-and-algorithm-development-services-in-uk", permanent: true },
      { source: "/academy/how-to-article/how-to-write-masters-dissertation-academic-standards", destination: "/academy/how-to-write-masters-dissertation-academic-standards", permanent: true },
      { source: "/academy/how-to-article/dissertation-topic-selection-help-in-uae", destination: "/academy/dissertation-topic-selection-help-in-uae", permanent: true },
      { source: "/academy/how-to-article/uae-masters-research-methodology-structure-guide", destination: "/academy/uae-masters-research-methodology-structure-guide", permanent: true },
      { source: "/academy/business-management/writing-dissertation-literature-review-on-the-role-of-women-entrepreneurs-in-the-internationalization-process-of-firms", destination: "/academy/writing-dissertation-literature-review-on-the-role-of-women-entrepreneurs-in-the-internationalization-process-of-firms", permanent: true },
      { source: "/academy/how-to-article/critical-literature-review-uk-research-proposal", destination: "/academy/critical-literature-review-uk-research-proposal", permanent: true },
      { source: "/academy/how-to-article/masters-statistical-analysis-help-in-australia", destination: "/academy/masters-statistical-analysis-help-in-australia", permanent: true },
      { source: "/academy/engineering-and-techology/how-to-write-a-masters-dissertation", destination: "/academy/how-to-write-a-masters-dissertation", permanent: true },
      { source: "/academy/how-to-article/uk-research-proposal-methodology-mistakes", destination: "/academy/uk-research-proposal-methodology-mistakes", permanent: true },
      { source: "/academy/how-to-article/ai-ml-foundational-overview", destination: "/academy/ai-ml-foundational-overview", permanent: true },
      { source: "/academy/engineering-and-techology/list-of-topics-and-the-structure-to-write-an-assignment-for-electrical-and-electronics", destination: "/academy/list-of-topics-and-the-structure-to-write-an-assignment-for-electrical-and-electronics", permanent: true },
      { source: "/academy/how-to-article/sampling-techniques-masters-thesis-germany", destination: "/academy/sampling-techniques-masters-thesis-germany", permanent: true },
      { source: "/academy/how-to-article/literature-review-writing-help-in-australia", destination: "/academy/literature-review-writing-help-in-australia", permanent: true },
      { source: "/academy/engineering-and-techology/demonstrate-understanding-and-knowledge-of-key-theories-of-critical-reflection-and-development-towards-becoming-a-reflective-practitioner", destination: "/academy/demonstrate-understanding-and-knowledge-of-key-theories-of-critical-reflection-and-development-towards-becoming-a-reflective-practitioner", permanent: true },
      { source: "/academy/engineering-and-techology/recent-phd-research-topic-ideas-for-computer-science-engineering-2020", destination: "/academy/recent-phd-research-topic-ideas-for-computer-science-engineering-2020", permanent: true },
      { source: "/academy/how-to-article/analytical-models-lean-management-cost-efficiency-dissertation", destination: "/academy/analytical-models-lean-management-cost-efficiency-dissertation", permanent: true },
      { source: "/academy/how-to-article/ethics-review-uk-healthcare-phd-dissertations", destination: "/academy/ethics-review-uk-healthcare-phd-dissertations", permanent: true },
      { source: "/academy/how-to-article/write-assignment-without-plagiarism", destination: "/academy/write-assignment-without-plagiarism", permanent: true },
      { source: "/academy/how-to-article/french-masters-research-methodology-guide", destination: "/academy/french-masters-research-methodology-guide", permanent: true },
      { source: "/academy/how-to-article/french-masters-dissertation-theory-methodology", destination: "/academy/french-masters-dissertation-theory-methodology", permanent: true },
      { source: "/academy/engineering-and-techology/writing-a-master-dissertation-proposal-for-top-five-uk-university", destination: "/academy/writing-a-master-dissertation-proposal-for-top-five-uk-university", permanent: true },
      { source: "/academy/business-management/business-analytics-dissertation-help-defining-and-identifying-a-research-agenda-for-an-evidence-based-management-framework", destination: "/academy/business-analytics-dissertation-help-defining-and-identifying-a-research-agenda-for-an-evidence-based-management-framework", permanent: true },
      { source: "/academy/how-to-article/thatcher-npm-reforms-uk-corporate-governance", destination: "/academy/thatcher-npm-reforms-uk-corporate-governance", permanent: true },
      { source: "/academy/business-management/impact-of-big-data-on-customer-retention-in-the-retail-industry", destination: "/academy/impact-of-big-data-on-customer-retention-in-the-retail-industry", permanent: true },
      { source: "/academy/engineering-and-techology/writing-your-humanities-postgraduate-latest-research-topics-possible-methodologies-that-can-be-adopted-in-human-rights-and-law", destination: "/academy/writing-your-humanities-postgraduate-latest-research-topics-possible-methodologies-that-can-be-adopted-in-human-rights-and-law", permanent: true },
      { source: "/academy/business-management/privacy-concerns-among-the-millennials", destination: "/academy/privacy-concerns-among-the-millennials", permanent: true },
      { source: "/academy/futuretopics-titles/recent-trends-of-knowledge-extraction-and-decision-making-process-using-web-mining", destination: "/academy/recent-trends-of-knowledge-extraction-and-decision-making-process-using-web-mining", permanent: true },
      { source: "/academy/how-to-article/how-students-explain-significance-masters-research-proposal", destination: "/academy/how-students-explain-significance-masters-research-proposal", permanent: true },
      { source: "/academy/business-management/influence-of-mergers-and-acquisitions-on-business-why-do-companies-merger-with-or-acquire-other-companies", destination: "/academy/influence-of-mergers-and-acquisitions-on-business-why-do-companies-merger-with-or-acquire-other-companies", permanent: true },
      { source: "/academy/engineering-and-techology/doing-your-management-dissertation-in-the-international-university-guidelines-and-examples", destination: "/academy/doing-your-management-dissertation-in-the-international-university-guidelines-and-examples", permanent: true },
      { source: "/academy/how-to-article/masters-research-proposal-netherlands", destination: "/academy/masters-research-proposal-netherlands", permanent: true },
      { source: "/academy/q-and-a/academic-essay-writing-guide", destination: "/academy/academic-essay-writing-guide", permanent: true },
      { source: "/academy/how-to-article/research-methodology-uae-masters-management-dissertation", destination: "/academy/research-methodology-uae-masters-management-dissertation", permanent: true },
      { source: "/academy/technology-news/scope-of-agricultural-entrepreneurship-in-india", destination: "/academy/scope-of-agricultural-entrepreneurship-in-india", permanent: true },
      { source: "/academy/how-to-article/journal-manuscript-writing-help-in-uae", destination: "/academy/journal-manuscript-writing-help-in-uae", permanent: true },
      { source: "/academy/engineering-and-techology/ten-typical-problems-in-writing-postgraduate-assignments-masters-students-journey-during-beginning-of-your-assignment-work-a-case-of-overenthusiastic-student", destination: "/academy/ten-typical-problems-in-writing-postgraduate-assignments-masters-students-journey-during-beginning-of-your-assignment-work-a-case-of-overenthusiastic-student", permanent: true },
      { source: "/academy/how-to-article/overcome-masters-dissertation-anxiety-fear-feedback", destination: "/academy/overcome-masters-dissertation-anxiety-fear-feedback", permanent: true },
      { source: "/academy/how-to-article/research-proposal-realistic-dissertation-timeline", destination: "/academy/research-proposal-realistic-dissertation-timeline", permanent: true },
      { source: "/academy/how-to-article/ethical-considerations-uk-dissertations", destination: "/academy/ethical-considerations-uk-dissertations", permanent: true },
      { source: "/academy/business-management/understanding-behavioral-and-trends-of-millennial-best-research-areas-for-future-researchers-2019", destination: "/academy/understanding-behavioral-and-trends-of-millennial-best-research-areas-for-future-researchers-2019", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  async rewrites() {
    return [
      // WP media (PDFs, images) referenced by proxied content — stream from tutorsindia.net.
      // Was pointed at www.tutorsindia.com, which used to be the separate old WordPress
      // site; now that www.tutorsindia.com IS this deployment, that rewrite looped back
      // on itself (508 Loop Detected / 400 on Next Image optimization).
      {
        source: "/wp-content/:path*",
        destination: "https://www.tutorsindia.net/wp-content/:path*",
      },
      // Blog images from tutorsindia.net
      {
        source: "/blog/wp-content/:path*",
        destination: "https://tutorsindia.net/blog/wp-content/:path*",
      },
      // Academy images from tutorsindia.net — same domain-cutover issue as the
      // top-level /wp-content/* rule: without this, /academy/wp-content/*
      // asset paths fell through to the generic catch-all route, which served
      // an HTML fallback page (200, text/html) instead of the real image.
      {
        source: "/academy/wp-content/:path*",
        destination: "https://tutorsindia.net/academy/wp-content/:path*",
      },
    ];
  },
};

export default nextConfig;
