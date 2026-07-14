import RelatedLinks from "@/components/ui/RelatedLinks";

const siblings = [
  { label: "Full Dissertation", href: "/our-services/masters-dissertation-writing-services/full-dissertation" },
  { label: "Dissertation Proposal", href: "/our-services/masters-dissertation-writing-services/dissertation-proposal" },
  { label: "Dissertation Part / Chapter", href: "/our-services/masters-dissertation-writing-services/dissertation-part" },
  { label: "Dissertation Topic", href: "/our-services/masters-dissertation-writing-services/dissertation-topic" },
  { label: "Statistical Analysis", href: "/our-services/masters-dissertation-writing-services/dissertation-statistical-analysis" },
  { label: "UG Dissertation", href: "/our-services/masters-dissertation-writing-services/ug-dissertation" },
  { label: "Resit Dissertation", href: "/our-services/masters-dissertation-writing-services/resit-dissertation" },
  { label: "Specific Dissertation", href: "/our-services/masters-dissertation-writing-services/specific-dissertation" },
  { label: "Poster Presentation", href: "/our-services/masters-dissertation-writing-services/poster-presentation" },
  { label: "CV Writing", href: "/our-services/masters-dissertation-writing-services/cv-writing" },
];

const crossCategory = [
  { label: "PhD & DBA Dissertation", href: "/our-services/phd-dba-dissertation" },
  { label: "Publication Support", href: "/our-services/publication-support" },
  { label: "Editing & Proofreading", href: "/our-services/editing-services" },
  { label: "Coursework Writing", href: "/our-services/coursework-writing" },
  { label: "Biostatistics Services", href: "/our-services/publication-support/biostatistics-services" },
  { label: "Scientific Editing", href: "/our-services/editing-services/scientific-editing-services" },
  { label: "Plagiarism Report", href: "/our-services/editing-services/plagiarism-report" },
];

export default function MastersDissertationLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <RelatedLinks siblings={siblings} crossCategory={crossCategory} categoryLabel="Masters Dissertation" />
    </>
  );
}
