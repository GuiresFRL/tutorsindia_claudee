import RelatedLinks from "@/components/ui/RelatedLinks";

const siblings = [
  { label: "Big Data Analytics", href: "/our-services/development/big-data-analytics" },
  { label: "Programming", href: "/our-services/development/programming" },
  { label: "Software Development", href: "/our-services/development/software-development" },
  { label: "Web Solutions", href: "/our-services/development/web-solutions" },
  { label: "Coding & Algorithm", href: "/our-services/development/coding-and-algorithm" },
  { label: "Tool Development", href: "/our-services/development/tool-development" },
  { label: "E-Learning Content Development", href: "/our-services/development/e-learning-content-development" },
  { label: "Online Tutoring Services", href: "/our-services/development/online-tutoring-services" },
  { label: "Animation Services", href: "/our-services/development/animation-services" },
  { label: "Graphic Design Services", href: "/our-services/development/graphic-design-services" },
];

const crossCategory = [
  { label: "Publication Support", href: "/our-services/publication-support" },
  { label: "Computer Science & IT Writing", href: "/our-services/publication-support/computer-science-engineering-cse-and-it" },
  { label: "Engineering Research", href: "/our-services/publication-support/engineering-research" },
  { label: "Masters Dissertation Writing", href: "/our-services/masters-dissertation-writing-services" },
  { label: "Statistical Analysis", href: "/our-services/masters-dissertation-writing-services/dissertation-statistical-analysis" },
  { label: "Editing & Proofreading", href: "/our-services/editing-services" },
];

export default function DevelopmentLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <RelatedLinks siblings={siblings} crossCategory={crossCategory} categoryLabel="Development" />
    </>
  );
}
