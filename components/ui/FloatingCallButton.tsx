"use client";

import { useState, useEffect, useRef } from "react";

const NUMBERS = [
  { label: "India", code: "IN", codeBg: "#e8f5e9", codeColor: "#1b7a2f", number: "+91 8754446690", tel: "tel:+918754446690" },
  { label: "United Kingdom", code: "UK", codeBg: "#e8eefc", codeColor: "#1a2a6c", number: "+44 1143520021", tel: "tel:+441143520021" },
];

export default function FloatingCallButton() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} style={{ position: "fixed", bottom: "96px", right: "24px", zIndex: 9999 }}>

      {/* Popup — call numbers + WhatsApp */}
      {open && (
        <div style={{
          position: "absolute",
          bottom: "68px",
          right: "0",
          background: "#fff",
          borderRadius: "14px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
          overflow: "hidden",
          minWidth: "220px",
          border: "1px solid #e5e7eb",
        }}>
          <div style={{ padding: "10px 16px 8px", fontSize: "0.7rem", fontWeight: 700, color: "#888", textTransform: "uppercase", letterSpacing: "0.07em", borderBottom: "1px solid #f0f0f0" }}>
            Call Us
          </div>
          {NUMBERS.map((n) => (
            <a
              key={n.label}
              href={n.tel}
              onClick={() => setOpen(false)}
              style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px", textDecoration: "none", color: "#1a2a6c", borderBottom: "1px solid #f5f5f5" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#f0f4ff")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: n.codeBg, color: n.codeColor, fontSize: "0.72rem", fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, letterSpacing: "0.03em" }}>{n.code}</span>
              <div>
                <div style={{ fontSize: "0.7rem", color: "#888", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>{n.label}</div>
                <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a2a6c" }}>{n.number}</div>
              </div>
            </a>
          ))}
        </div>
      )}

      {/* Single toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Contact us"
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: open ? "#1a2a6c" : "#e87722",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
          cursor: "pointer",
          transition: "background 0.2s, transform 0.2s, box-shadow 0.2s",
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.1)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 6px 24px rgba(0,0,0,0.3)"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 16px rgba(0,0,0,0.25)"; }}
      >
        {open ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.1 1.17 2 2 0 012.11 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
          </svg>
        )}
      </button>
    </div>
  );
}
