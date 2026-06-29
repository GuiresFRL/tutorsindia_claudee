import Link from "next/link";
import { siteInfo } from "@/lib/data/site";

export default function TopBar() {
  return (
    <div style={{
      background: "#1a2a6c",
      color: "#c5d5f0",
      fontSize: "13px",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
    }}>
      <div style={{
        maxWidth: "1260px",
        margin: "0 auto",
        padding: "0 20px",
        height: "38px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "12px",
      }}>
        {/* Left: contact info */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
          {/* Phone UK */}
          <a
            href={`tel:${siteInfo.phone.uk.replace(/[^+\d]/g, "")}`}
            style={{ display: "flex", alignItems: "center", gap: "6px", color: "#c5d5f0", textDecoration: "none" }}
          >
            <PhoneIcon />
            <span>{siteInfo.phone.uk}</span>
          </a>

          {/* Phone India */}
          <a
            href={`tel:${siteInfo.phone.india.replace(/[^+\d]/g, "")}`}
            style={{ display: "flex", alignItems: "center", gap: "6px", color: "#c5d5f0", textDecoration: "none" }}
          >
            <PhoneIcon />
            <span>{siteInfo.phone.india}</span>
          </a>

          {/* Email */}
          <a
            href={`mailto:${siteInfo.email}`}
            style={{ display: "flex", alignItems: "center", gap: "6px", color: "#c5d5f0", textDecoration: "none" }}
            className="topbar-email"
          >
            <MailIcon />
            <span>{siteInfo.email}</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/918754446690"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", gap: "6px", color: "#c5d5f0", textDecoration: "none" }}
            className="topbar-wa"
          >
            <WhatsAppIcon />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Right: links */}
        <div style={{ display: "flex", alignItems: "center", gap: "0", flexShrink: 0 }}>
          {[
            { label: "About Us", href: "/about-us/" },
            { label: "Contact Us", href: "/contact-us/" },
          ].map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: "#c5d5f0",
                padding: "0 12px",
                borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.2)" : "none",
                textDecoration: "none",
                fontSize: "12.5px",
                fontWeight: 500,
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .topbar-email { display: none !important; }
          .topbar-wa { display: none !important; }
        }
        @media (max-width: 500px) {
          .topbar-email { display: none !important; }
          .topbar-wa { display: none !important; }
        }
      `}</style>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#e87722", flexShrink: 0 }}>
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.6 1 1 0 01-.25 1.01z"/>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "#e87722", flexShrink: 0 }}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#25d366", flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
