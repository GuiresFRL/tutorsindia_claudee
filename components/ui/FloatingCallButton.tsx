"use client";

import { useState, useEffect, useRef } from "react";

const NUMBERS = [
  { label: "India", flag: "🇮🇳", number: "+91 8754446690", tel: "tel:+918754446690", tz: ["Asia/Kolkata","Asia/Calcutta"] },
  { label: "UK",    flag: "🇬🇧", number: "+44 1143520021", tel: "tel:+441143520021", tz: [] },
];

function detectPrimary() {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const match = NUMBERS.find((n) => n.tz.includes(tz));
    if (match) return match;
  } catch {}
  return NUMBERS[1]; // default UK
}

export default function FloatingCallButton() {
  const [open, setOpen]       = useState(false);
  const [primary, setPrimary] = useState(NUMBERS[1]); // SSR-safe default
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPrimary(detectPrimary());
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Other numbers to show in popup (exclude primary)
  const others = NUMBERS.filter((n) => n.label !== primary.label);

  return (
    <div ref={ref} style={{ position: "fixed", bottom: "92px", left: "24px", zIndex: 9999 }}>

      {/* Popup — shows other numbers */}
      {open && (
        <div style={{
          position: "absolute",
          bottom: "68px",
          left: "0",
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
          overflow: "hidden",
          minWidth: "210px",
          border: "1px solid #e5e7eb",
        }}>
          <div style={{ padding: "10px 14px 6px", fontSize: "0.72rem", fontWeight: 700, color: "#888", textTransform: "uppercase", letterSpacing: "0.06em", borderBottom: "1px solid #f0f0f0" }}>
            Other Numbers
          </div>
          {others.map((n) => (
            <a
              key={n.label}
              href={n.tel}
              onClick={() => setOpen(false)}
              style={{ display: "flex", alignItems: "center", gap: "10px", padding: "11px 14px", textDecoration: "none", color: "#1a2a6c", borderBottom: "1px solid #f5f5f5", transition: "background 0.15s" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#f5f6fa")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              <span style={{ fontSize: "1.2rem", flexShrink: 0 }}>{n.flag}</span>
              <div>
                <div style={{ fontSize: "0.72rem", color: "#888", fontWeight: 600 }}>{n.label}</div>
                <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#1a2a6c" }}>{n.number}</div>
              </div>
            </a>
          ))}
        </div>
      )}

      {/* Button row: direct-dial + expand toggle */}
      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>

        {/* Country label tooltip on hover */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          {/* Direct-dial button */}
          <a
            href={primary.tel}
            aria-label={`Call ${primary.label} office: ${primary.number}`}
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              background: "#e87722",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
              transition: "transform 0.2s, box-shadow 0.2s",
              textDecoration: "none",
              position: "relative",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.1)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 6px 24px rgba(0,0,0,0.3)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 16px rgba(0,0,0,0.25)"; }}
          >
            {/* Country flag badge */}
            <span style={{ position: "absolute", top: "2px", right: "2px", fontSize: "0.85rem", lineHeight: 1 }}>{primary.flag}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.1 1.17 2 2 0 012.11 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
            </svg>
          </a>

          {/* "More" toggle — small button below */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Show more numbers"
            style={{
              width: "56px",
              marginTop: "4px",
              padding: "3px 0",
              background: open ? "#1a2a6c" : "rgba(26,42,108,0.08)",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "0.62rem",
              color: open ? "#fff" : "#1a2a6c",
              fontWeight: 700,
              letterSpacing: "0.02em",
              transition: "background 0.15s",
            }}
          >
            {open ? "✕ Close" : "▼ More"}
          </button>
        </div>
      </div>
    </div>
  );
}
