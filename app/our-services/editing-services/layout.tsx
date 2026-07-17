import RelatedLinks from "@/components/ui/RelatedLinks";

const siblings = [
  { label: "Formatting Service", href: "/our-services/editing-services/formatting-service" },
  { label: "Scientific Editing", href: "/our-services/editing-services/scientific-editing-services" },
  { label: "Language Editing", href: "/our-services/editing-services/language-editing" },
  { label: "Technical Editing", href: "/our-services/editing-services/technical-editing" },
  { label: "Grant Proposal Writing", href: "/our-services/editing-services/grant-proposal-writing" },
  { label: "Peer Review Submissions", href: "/our-services/editing-services/peer-review-submissions" },
  { label: "Citation Compliance", href: "/our-services/editing-services/citation-compliance" },
  { label: "Plagiarism Report", href: "/our-services/editing-services/plagiarism-report" },
  { label: "Transcription Services", href: "/our-services/editing-services/transcription-services" },
  { label: "Translation Services", href: "/our-services/editing-services/translation-services" },
];

const crossCategory = [
  { label: "Masters Dissertation Writing", href: "/our-services/masters-dissertation-writing-services" },
  { label: "PhD & DBA Dissertation", href: "/our-services/phd-dba-dissertation" },
  { label: "Publication Support", href: "/our-services/publication-support" },
  { label: "Coursework Writing", href: "/our-services/coursework-writing" },
  { label: "Statistical Analysis", href: "/our-services/masters-dissertation-writing-services/dissertation-statistical-analysis" },
  { label: "Biostatistics Services", href: "/our-services/publication-support/biostatistics-services" },
  { label: "Manuscript Development", href: "/our-services/publication-support/manuscript-development" },
];

export default function EditingServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <RelatedLinks siblings={siblings} crossCategory={crossCategory} categoryLabel="Editing & Proofreading" />
    </>
  );
}
