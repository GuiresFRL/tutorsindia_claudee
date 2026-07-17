import RelatedLinks from "@/components/ui/RelatedLinks";

const subjectSiblings = [
  { label: "Business & Management", href: "/subjects/business-management-studies-academic-writing-help" },
  { label: "Engineering & Technology", href: "/subjects/engineering-technology-academic-writing" },
  { label: "Medicine & Health Science", href: "/subjects/medicine-health-science-academic-writing" },
  { label: "Arts & Humanities", href: "/subjects/arts-humanities-academic-writing-help" },
  { label: "Biological & Life Science", href: "/subjects/biological-life-science-academic-writing-help" },
  { label: "Computer Science & IT", href: "/subjects/computer-science-information-technology-academic-writing" },
  { label: "Economics & Finance", href: "/subjects/economics-finance-academic-writing-help" },
  { label: "Academic Law", href: "/subjects/academic-law-ug-masters-phd-writing-help" },
];

const serviceLinks = [
  { label: "Masters Dissertation Writing", href: "/our-services/masters-dissertation-writing-services" },
  { label: "PhD & DBA Dissertation", href: "/our-services/phd-dba-dissertation" },
  { label: "Coursework & Assignment Writing", href: "/our-services/coursework-writing" },
  { label: "Editing & Proofreading", href: "/our-services/editing-services" },
  { label: "Publication Support", href: "/our-services/publication-support" },
  { label: "Statistical Analysis", href: "/our-services/masters-dissertation-writing-services/dissertation-statistical-analysis" },
  { label: "Essay Writing Services", href: "/our-services/coursework-writing/essay-writing-services" },
  { label: "Literature Review", href: "/our-services/coursework-writing/literature-review" },
];

export default function SubjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <RelatedLinks
        siblings={subjectSiblings}
        crossCategory={serviceLinks}
        subjects={[]}
        categoryLabel="Subject"
      />
    </>
  );
}
