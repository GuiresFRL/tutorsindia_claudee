import RelatedLinks from "@/components/ui/RelatedLinks";

const siblings = [
  { label: "Statistical Services", href: "/our-services/publication-support/statistical-services" },
  { label: "Biostatistics Services", href: "/our-services/publication-support/biostatistics-services" },
  { label: "Manuscript Development", href: "/our-services/publication-support/manuscript-development" },
  { label: "Medical Writing", href: "/our-services/publication-support/medical-writing" },
  { label: "Conference Paper", href: "/our-services/publication-support/conference-paper" },
  { label: "Conference Abstract", href: "/our-services/publication-support/conference-abstract" },
  { label: "Engineering Research", href: "/our-services/publication-support/engineering-research" },
  { label: "Computer Science & IT", href: "/our-services/publication-support/computer-science-engineering-cse-and-it" },
  { label: "Textbook Writing", href: "/our-services/publication-support/text-book-writing" },
  { label: "Manuscript Qualitative Analysis", href: "/our-services/publication-support/manuscript-qualitative-textual-analysis" },
];

const crossCategory = [
  { label: "Masters Dissertation Writing", href: "/our-services/masters-dissertation-writing-services" },
  { label: "PhD & DBA Dissertation", href: "/our-services/phd-dba-dissertation" },
  { label: "Editing & Proofreading", href: "/our-services/editing-services" },
  { label: "Scientific Editing", href: "/our-services/editing-services/scientific-editing-services" },
  { label: "Statistical Analysis", href: "/our-services/masters-dissertation-writing-services/dissertation-statistical-analysis" },
  { label: "Grant Proposal Writing", href: "/our-services/editing-services/grant-proposal-writing" },
  { label: "Peer Review Submissions", href: "/our-services/editing-services/peer-review-submissions" },
];

export default function PublicationSupportLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <RelatedLinks siblings={siblings} crossCategory={crossCategory} categoryLabel="Publication Support" />
    </>
  );
}
