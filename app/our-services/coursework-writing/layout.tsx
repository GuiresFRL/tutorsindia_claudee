import RelatedLinks from "@/components/ui/RelatedLinks";

const siblings = [
  { label: "Assignment Writing Services", href: "/our-services/coursework-writing/assignment-writing-services" },
  { label: "Essay Writing Services", href: "/our-services/coursework-writing/essay-writing-services" },
  { label: "Literature Review", href: "/our-services/coursework-writing/literature-review" },
  { label: "Research Methodology", href: "/our-services/coursework-writing/research-methodology" },
  { label: "Critical Review", href: "/our-services/coursework-writing/critical-review" },
  { label: "Reflective Report", href: "/our-services/coursework-writing/reflective-report" },
  { label: "Case Report Writing", href: "/our-services/coursework-writing/case-report-writing-services" },
  { label: "Annotated Bibliography", href: "/our-services/coursework-writing/annotated-bibliography" },
  { label: "Exam Notes", href: "/our-services/coursework-writing/exam-notes" },
  { label: "References Collection", href: "/our-services/coursework-writing/references-collection-services" },
];

const crossCategory = [
  { label: "Masters Dissertation Writing", href: "/our-services/masters-dissertation-writing-services" },
  { label: "PhD & DBA Dissertation", href: "/our-services/phd-dba-dissertation" },
  { label: "Editing & Proofreading", href: "/our-services/editing-services" },
  { label: "Publication Support", href: "/our-services/publication-support" },
  { label: "Dissertation Statistical Analysis", href: "/our-services/masters-dissertation-writing-services/dissertation-statistical-analysis" },
  { label: "Plagiarism Report", href: "/our-services/editing-services/plagiarism-report" },
  { label: "Citation Compliance", href: "/our-services/editing-services/citation-compliance" },
];

export default function CourseWorkLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <RelatedLinks siblings={siblings} crossCategory={crossCategory} categoryLabel="Coursework Writing" />
    </>
  );
}
