import Link from "next/link";

export default function CTASidebar() {
  return (
    <>
      <div style={{ background: "var(--navy)", color: "#fff", borderRadius: "12px", padding: "24px", marginBottom: "20px", textAlign: "center" }}>
        <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "10px" }}>Need Academic Help?</h3>
        <p style={{ fontSize: "0.85rem", color: "#c5d5f0", marginBottom: "16px" }}>Expert support from PhD-qualified writers. Response within 30 minutes.</p>
        <Link href="/order-now/" style={{ display: "block", padding: "10px", background: "var(--orange)", color: "#fff", borderRadius: "5px", fontWeight: 600, marginBottom: "10px", textAlign: "center" }}>Order Now</Link>
        <Link href="/contact-us/" style={{ display: "block", padding: "10px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600, textAlign: "center" }}>Contact Us</Link>
      </div>

      <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "12px", padding: "20px" }}>
        <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--navy)", marginBottom: "12px" }}>Popular Services</h4>
        {[
          { label: "Masters Dissertation", href: "/our-services/masters-dissertation-writing-services/" },
          { label: "PhD Dissertation", href: "/our-services/phd-dba-dissertation/" },
          { label: "Coursework Writing", href: "/our-services/coursework-writing/" },
          { label: "Editing Services", href: "/our-services/editing-services/" },
          { label: "Statistical Analysis", href: "/our-services/masters-dissertation-writing-services/dissertation-statistical-analysis/" },
          { label: "Publication Support", href: "/our-services/publication-support/" },
        ].map((s) => (
          <Link key={s.href} href={s.href} style={{ display: "block", padding: "8px 0", borderBottom: "1px solid var(--border)", fontSize: "0.87rem", color: "var(--blue)" }}>
            {s.label}
          </Link>
        ))}
      </div>
    </>
  );
}
