import type { ReactElement } from "react";
import { siteInfo } from "@/lib/data/site";

type Social = { label: string; href: string; color: string; Icon: () => ReactElement };

const SOCIALS: Social[] = [
  {
    label: "Facebook",
    href: siteInfo.social.facebook,
    color: "#1877f2",
    Icon: () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: siteInfo.social.instagram,
    color: "#e1306c",
    Icon: () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: siteInfo.social.linkedin,
    color: "#0077b5",
    Icon: () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: siteInfo.social.youtube,
    color: "#ff0000",
    Icon: () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: siteInfo.social.twitter,
    color: "#1da1f2",
    Icon: () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
];

interface Props {
  size?: number;
  gap?: number;
  variant?: "circle" | "plain";
}

export default function SocialIcons({ size = 18, gap = 10, variant = "circle" }: Props) {
  return (
    <>
      <style>{`
        .ti-social-link { transition: transform 0.18s, opacity 0.18s; }
        .ti-social-link:hover { transform: scale(1.15); opacity: 0.85; }
      `}</style>
      <div style={{ display: "flex", alignItems: "center", gap, flexWrap: "wrap" }}>
        {SOCIALS.map(({ label, href, color, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="ti-social-link"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: variant === "circle" ? size + 12 : "auto",
              height: variant === "circle" ? size + 12 : "auto",
              borderRadius: variant === "circle" ? "50%" : "0",
              background: variant === "circle" ? color : "transparent",
              color: variant === "circle" ? "#fff" : color,
              flexShrink: 0,
            }}
          >
            <Icon />
          </a>
        ))}
      </div>
    </>
  );
}
