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
        padding: "0 16px",
        minHeight: "38px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "8px",
        flexWrap: "nowrap",
        overflow: "hidden",
      }}>
        {/* Left: contact info */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px", overflow: "hidden", minWidth: 0 }}>
          {/* Phone UK */}
          <a
            href={`tel:${siteInfo.phone.uk.replace(/[^+\d]/g, "")}`}
            style={{ display: "flex", alignItems: "center", gap: "5px", color: "#c5d5f0", textDecoration: "none", whiteSpace: "nowrap" }}
          >
            <PhoneIcon />
            <span className="topbar-uk">{siteInfo.phone.uk}</span>
          </a>

          {/* Phone India */}
          <a
            href={`tel:${siteInfo.phone.india.replace(/[^+\d]/g, "")}`}
            style={{ display: "flex", alignItems: "center", gap: "5px", color: "#c5d5f0", textDecoration: "none", whiteSpace: "nowrap" }}
            className="topbar-india"
          >
            <PhoneIcon />
            <span>{siteInfo.phone.india}</span>
          </a>

          {/* Email */}
          <a
            href={`mailto:${siteInfo.email}`}
            style={{ display: "flex", alignItems: "center", gap: "5px", color: "#c5d5f0", textDecoration: "none", whiteSpace: "nowrap" }}
            className="topbar-email"
          >
            <MailIcon />
            <span>{siteInfo.email}</span>
          </a>

        </div>

        {/* Right: social icons */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
          <a href={siteInfo.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ color: "#c5d5f0", display: "flex", lineHeight: 1 }}>
            <FacebookIcon />
          </a>
          <a href={siteInfo.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: "#c5d5f0", display: "flex", lineHeight: 1 }}>
            <InstagramIcon />
          </a>
          <a href={siteInfo.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: "#c5d5f0", display: "flex", lineHeight: 1 }}>
            <LinkedInIcon />
          </a>
          <a href={siteInfo.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" style={{ color: "#c5d5f0", display: "flex", lineHeight: 1 }}>
            <YouTubeIcon />
          </a>
        </div>
      </div>

      <style>{`
        /* Mobile: hide India number and email — show only UK */
        @media (max-width: 768px) {
          .topbar-india { display: none !important; }
          .topbar-email { display: none !important; }
        }
        /* Very small: hide UK text too, show icon only */
        @media (max-width: 400px) {
          .topbar-uk { display: none !important; }
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

function FacebookIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
    </svg>
  );
}
