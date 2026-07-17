import RelatedLinks from "@/components/ui/RelatedLinks";

const siblings = [
  { label: "PhD Full Dissertation", href: "/our-services/phd-dba-dissertation/phd-full-dissertation" },
  { label: "PhD Research Proposal", href: "/our-services/phd-dba-dissertation/phd-research-proposal" },
  { label: "PhD Synopsis", href: "/our-services/phd-dba-dissertation/phd-synopsis" },
  { label: "PhD Dissertation Part", href: "/our-services/phd-dba-dissertation/phd-dissertation-part" },
  { label: "PhD Dissertation Topic", href: "/our-services/phd-dba-dissertation/phd-dissertation-topic" },
  { label: "PhD Research Plan", href: "/our-services/phd-dba-dissertation/phd-research-plan" },
  { label: "PhD Coursework", href: "/our-services/phd-dba-dissertation/phd-coursework" },
  { label: "PhD Dissertation Rework", href: "/our-services/phd-dba-dissertation/phd-dissertation-rework" },
  { label: "PhD Presentation", href: "/our-services/phd-dba-dissertation/phd-presentation" },
  { label: "PhD Viva Voce", href: "/our-services/phd-dba-dissertation/phd-viva-voice" },
];

const crossCategory = [
  { label: "Masters Dissertation Writing", href: "/our-services/masters-dissertation-writing-services" },
  { label: "Publication Support", href: "/our-services/publication-support" },
  { label: "Editing & Proofreading", href: "/our-services/editing-services" },
  { label: "Statistical Analysis", href: "/our-services/masters-dissertation-writing-services/dissertation-statistical-analysis" },
  { label: "Biostatistics Services", href: "/our-services/publication-support/biostatistics-services" },
  { label: "Scientific Editing", href: "/our-services/editing-services/scientific-editing-services" },
  { label: "Manuscript Development", href: "/our-services/publication-support/manuscript-development" },
];

export default function PhDDBALayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <RelatedLinks siblings={siblings} crossCategory={crossCategory} categoryLabel="PhD & DBA Dissertation" />
    </>
  );
}
