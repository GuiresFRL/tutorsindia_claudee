import Link from "next/link";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface ContentPageProps {
  title: string;
  subtitle?: string;
  breadcrumbs: Breadcrumb[];
  children: React.ReactNode;
  sidebar?: React.ReactNode;
}

export default function ContentPage({ title, subtitle, breadcrumbs, children, sidebar }: ContentPageProps) {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,var(--navy) 0%,#2563b0 100%)", color: "#fff", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.9rem", color: "#a0b8e0", marginBottom: "12px" }}>
            {breadcrumbs.map((crumb, i) => (
              <span key={i}>
                {crumb.href ? <Link href={crumb.href} style={{ color: "#a0b8e0" }}>{crumb.label}</Link> : crumb.label}
                {i < breadcrumbs.length - 1 && " / "}
              </span>
            ))}
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "2.2rem", marginBottom: subtitle ? "12px" : "0" }}>{title}</h1>
          {subtitle && <p style={{ color: "#c5d5f0", fontSize: "1.05rem" }}>{subtitle}</p>}
        </div>
      </section>

      <section style={{ maxWidth: "1200px", margin: "60px auto", padding: "0 20px", display: "grid", gridTemplateColumns: sidebar ? "2fr 1fr" : "1fr", gap: "40px", alignItems: "start" }} className="content-layout">
        <div>{children}</div>
        {sidebar && <div style={{ position: "sticky", top: "80px" }}>{sidebar}</div>}
      </section>

      <style>{`@media(max-width:768px){.content-layout{grid-template-columns:1fr!important;}}`}</style>
    </>
  );
}
