import Link from "next/link";

export interface RelatedLink {
  label: string;
  href: string;
}

interface Props {
  siblings: RelatedLink[];
  crossCategory?: RelatedLink[];
  subjects?: RelatedLink[];
  categoryLabel?: string;
}

const subjects: RelatedLink[] = [
  { label: "Business & Management", href: "/subjects/business-management-studies-academic-writing-help" },
  { label: "Engineering & Technology", href: "/subjects/engineering-technology-academic-writing" },
  { label: "Medicine & Health Science", href: "/subjects/medicine-health-science-academic-writing" },
  { label: "Arts & Humanities", href: "/subjects/arts-humanities-academic-writing-help" },
  { label: "Biological & Life Science", href: "/subjects/biological-life-science-academic-writing-help" },
  { label: "Computer Science & IT", href: "/subjects/computer-science-information-technology-academic-writing" },
  { label: "Economics & Finance", href: "/subjects/economics-finance-academic-writing-help" },
  { label: "Academic Law", href: "/subjects/academic-law-ug-masters-phd-writing-help" },
];

export default function RelatedLinks({ siblings, crossCategory, subjects: subjectOverride, categoryLabel }: Props) {
  const subjectLinks = subjectOverride ?? subjects;
  return (
    <section
      style={{
        background: "#f0f4ff",
        padding: "40px 20px",
        borderTop: "3px solid #dde2ef",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Related Services in this category */}
        {siblings.length > 0 && (
          <div style={{ marginBottom: crossCategory || subjectLinks ? "32px" : 0 }}>
            <h2
              style={{
                fontFamily: "Merriweather, serif",
                fontSize: "1.1rem",
                color: "#1a2a6c",
                marginBottom: "14px",
                fontWeight: 700,
              }}
            >
              {categoryLabel ? `More ${categoryLabel} Services` : "Related Services"}
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {siblings.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    display: "inline-block",
                    background: "#fff",
                    border: "1px solid #c5d0ea",
                    color: "#1a2a6c",
                    padding: "6px 16px",
                    borderRadius: "20px",
                    fontSize: "0.85rem",
                    textDecoration: "none",
                    fontWeight: 500,
                    transition: "background 0.15s",
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Cross-category links */}
        {crossCategory && crossCategory.length > 0 && (
          <div style={{ marginBottom: "32px" }}>
            <h2
              style={{
                fontFamily: "Merriweather, serif",
                fontSize: "1.1rem",
                color: "#1a2a6c",
                marginBottom: "14px",
                fontWeight: 700,
              }}
            >
              Also Explore
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {crossCategory.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    display: "inline-block",
                    background: "#fff",
                    border: "1px solid #e8a87c",
                    color: "#c05a10",
                    padding: "6px 16px",
                    borderRadius: "20px",
                    fontSize: "0.85rem",
                    textDecoration: "none",
                    fontWeight: 500,
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Subject pages */}
        {subjectLinks.length > 0 && (
          <div>
            <h2
              style={{
                fontFamily: "Merriweather, serif",
                fontSize: "1.1rem",
                color: "#1a2a6c",
                marginBottom: "14px",
                fontWeight: 700,
              }}
            >
              Writing Help by Subject
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {subjectLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    display: "inline-block",
                    background: "#1a2a6c",
                    color: "#fff",
                    padding: "6px 16px",
                    borderRadius: "20px",
                    fontSize: "0.85rem",
                    textDecoration: "none",
                    fontWeight: 500,
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
