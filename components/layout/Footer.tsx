import Link from "next/link";
import { footerLinks } from "@/lib/data/navigation";
import { siteInfo } from "@/lib/data/site";
import SocialIcons from "@/components/ui/SocialIcons";

export default function Footer() {
  return (
    <footer style={{ background: "#12214a", color: "#b0c0d8", padding: "50px 20px 20px" }}>
      <div className="footer-grid" style={{ maxWidth: "1200px", margin: "0 auto", paddingBottom: "30px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>

        {/* Brand */}
        <div>
          <img
            src="/tutorsindia-logo-hd.jpg"
            alt="Tutors India"
            style={{ height: "64px", marginBottom: "14px" }}
          />
          <p style={{ fontSize: "0.85rem", color: "#8fa5c8", lineHeight: 1.7, marginBottom: "16px" }}>
            Tutors India is a pioneer in providing complete academic guidance and direction since 2001. Trusted by {siteInfo.stats.scholars} scholars, students & entrepreneurs worldwide.
          </p>
          <div style={{ fontSize: "0.83rem", color: "#8fa5c8", lineHeight: 1.9 }}>
            <strong style={{ color: "#c5d5f0", display: "block" }}>Sheffield / Manchester, UK</strong>
            <a href={`tel:${siteInfo.phone.uk.replace(/[^+\d]/g, "")}`} style={{ color: "#8fa5c8" }}>{siteInfo.phone.uk}</a>
            <br />
            <a href={`mailto:${siteInfo.email}`} style={{ color: "#8fa5c8" }}>{siteInfo.email}</a>
            <strong style={{ color: "#c5d5f0", display: "block", marginTop: "8px" }}>Chennai, India</strong>
            <span>10, Kutty Street, Nungambakkam, Chennai – 600034</span>
            <br />
            <a href={`tel:${siteInfo.phone.india.replace(/[^+\d]/g, "")}`} style={{ color: "#8fa5c8" }}>{siteInfo.phone.india}</a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 style={{ color: "#fff", fontSize: "0.95rem", fontWeight: 700, marginBottom: "14px" }}>Our Services</h4>
          <ul style={{ listStyle: "none" }}>
            {footerLinks.services.map((link) => (
              <li key={link.href} style={{ marginBottom: "8px" }}>
                <Link href={link.href} style={{ fontSize: "0.85rem", color: "#8fa5c8" }}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 style={{ color: "#fff", fontSize: "0.95rem", fontWeight: 700, marginBottom: "14px" }}>Company</h4>
          <ul style={{ listStyle: "none" }}>
            {footerLinks.company.map((link) => (
              <li key={link.href} style={{ marginBottom: "8px" }}>
                <Link href={link.href} style={{ fontSize: "0.85rem", color: "#8fa5c8" }}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support + Social */}
        <div>
          <h4 style={{ color: "#fff", fontSize: "0.95rem", fontWeight: 700, marginBottom: "14px" }}>Support</h4>
          <ul style={{ listStyle: "none", marginBottom: "20px" }}>
            {footerLinks.support.map((link) => (
              <li key={link.href} style={{ marginBottom: "8px" }}>
                <Link href={link.href} style={{ fontSize: "0.85rem", color: "#8fa5c8" }}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <h4 style={{ color: "#fff", fontSize: "0.95rem", fontWeight: 700, marginBottom: "10px" }}>Follow Us</h4>
          <SocialIcons size={18} gap={8} variant="circle" />
        </div>
      </div>

      <div style={{ maxWidth: "1200px", margin: "20px auto 0", textAlign: "center", fontSize: "0.82rem", color: "#607090" }}>
        <p>© {new Date().getFullYear()} Tutors India. All rights reserved. |{" "}
          <Link href="/privacy-policy/" style={{ color: "#8fa5c8" }}>Privacy Policy</Link> |{" "}
          <Link href="/terms-and-conditions/" style={{ color: "#8fa5c8" }}>Terms & Conditions</Link> |{" "}
          <Link href="/compliant-policy/" style={{ color: "#8fa5c8" }}>Complaint Policy</Link>
        </p>
      </div>
    </footer>
  );
}
