"use client";

import { useState, useEffect, useRef } from "react";
import { OPEN_ENQUIRY_EVENT } from "@/components/ui/enquiryEvent";

const NUMBERS = [
  { label: "India", code: "IN", codeBg: "#e8f5e9", codeColor: "#1b7a2f", number: "+91 8754446690", tel: "tel:+918754446690" },
  { label: "United Kingdom", code: "UK", codeBg: "#e8eefc", codeColor: "#1a2a6c", number: "+44 1143520021", tel: "tel:+441143520021" },
];

const WHATSAPP_URL = "https://wa.me/918754446690";

const iconProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#fff",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

// Tawk.to is loaded lazily by the snippet in app/layout.tsx, which also hides
// Tawk's own bubble so the Chat tab below is the only entry point.
interface TawkWindow extends Window {
  Tawk_API?: { maximize?: () => void; showWidget?: () => void };
  __loadThirdParty?: () => void;
  __openTawkOnLoad?: boolean;
}

function openChat() {
  const w = window as TawkWindow;
  if (w.Tawk_API?.maximize) {
    w.Tawk_API.showWidget?.();
    w.Tawk_API.maximize();
    return;
  }
  // Not loaded yet — load it now and have its onLoad handler open the chat.
  w.__openTawkOnLoad = true;
  w.__loadThirdParty?.();
}

// Docked to the right edge of the viewport: each tab shows just its icon and
// slides out to reveal its label on hover/focus.
export default function FloatingActions() {
  const [callOpen, setCallOpen] = useState(false);
  const callRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!callOpen) return;
    const onDown = (e: MouseEvent) => {
      if (callRef.current && !callRef.current.contains(e.target as Node)) setCallOpen(false);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setCallOpen(false); };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [callOpen]);

  return (
    <>
      <div className="side-tabs">
        {/* Call — number list opens to the left of the tab */}
        <div ref={callRef} className="side-tab-wrap">
          {callOpen && (
            <div className="side-call-list">
              <div style={{ padding: "10px 16px 8px", fontSize: "0.7rem", fontWeight: 700, color: "#888", textTransform: "uppercase", letterSpacing: "0.07em", borderBottom: "1px solid #f0f0f0" }}>
                Call Us
              </div>
              {NUMBERS.map((n) => (
                <a
                  key={n.label}
                  href={n.tel}
                  onClick={() => setCallOpen(false)}
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
          <button
            type="button"
            className={`side-tab${callOpen ? " is-active" : ""}`}
            style={{ background: "#2b1236" }}
            aria-label="Call us"
            aria-expanded={callOpen}
            onClick={() => setCallOpen((v) => !v)}
          >
            <svg {...iconProps}>
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.1 1.17 2 2 0 012.11 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
            </svg>
            <span>Call Us</span>
          </button>
        </div>

        {/* WhatsApp */}
        <div className="side-tab-wrap">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="side-tab"
            style={{ background: "#1fa855" }}
            aria-label="Chat with us on WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="#fff">
              <path d="M16 2C8.268 2 2 8.268 2 16c0 2.478.666 4.797 1.824 6.795L2 30l7.385-1.797A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.45 11.45 0 01-5.824-1.594l-.418-.248-4.381 1.066 1.1-4.258-.272-.437A11.46 11.46 0 014.5 16C4.5 9.649 9.649 4.5 16 4.5S27.5 9.649 27.5 16 22.351 27.5 16 27.5zm6.29-8.61c-.344-.172-2.035-1.003-2.35-1.118-.316-.115-.546-.172-.776.172-.23.344-.891 1.118-1.093 1.348-.2.23-.402.258-.746.086-.344-.172-1.453-.536-2.767-1.708-1.022-.913-1.712-2.04-1.912-2.384-.2-.344-.021-.53.15-.701.155-.155.344-.402.516-.603.172-.2.23-.344.344-.574.115-.23.058-.43-.029-.603-.086-.172-.776-1.87-1.063-2.561-.28-.672-.563-.58-.776-.591l-.66-.011c-.23 0-.603.086-.919.43-.316.344-1.207 1.18-1.207 2.878s1.236 3.338 1.408 3.568c.172.23 2.433 3.713 5.895 5.207.824.356 1.467.569 1.969.728.827.263 1.58.226 2.175.137.663-.1 2.035-.832 2.322-1.635.287-.803.287-1.491.2-1.635-.086-.144-.316-.23-.66-.402z" />
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Enquire — opens the Zoho enquiry popup */}
        <div className="side-tab-wrap">
          <button
            type="button"
            className="side-tab"
            style={{ background: "#9b2d8e" }}
            aria-label="Enquire now"
            onClick={() => window.dispatchEvent(new Event(OPEN_ENQUIRY_EVENT))}
          >
            <svg {...iconProps}>
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
            <span>Enquire Now</span>
          </button>
        </div>

        {/* Live chat (Tawk.to) */}
        <div className="side-tab-wrap">
          <button
            type="button"
            className="side-tab"
            style={{ background: "#e0a526" }}
            aria-label="Start a live chat"
            onClick={openChat}
          >
            <svg {...iconProps}>
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
            </svg>
            <span>Live Chat</span>
          </button>
        </div>
      </div>

      <style>{`
        .side-tabs {
          position: fixed;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 6px;
        }
        .side-tab-wrap { position: relative; }
        .side-tab {
          display: flex;
          align-items: center;
          gap: 12px;
          width: max-content;
          height: 46px;
          padding: 0 18px 0 13px;
          border: none;
          border-radius: 12px 0 0 12px;
          color: #fff;
          font-family: inherit;
          font-size: 0.88rem;
          font-weight: 700;
          white-space: nowrap;
          text-decoration: none;
          cursor: pointer;
          box-shadow: -2px 3px 10px rgba(0,0,0,0.22);
          /* Rest state: slid right so only the icon shows */
          transform: translateX(calc(100% - 44px));
          transition: transform 0.25s ease;
        }
        .side-tab svg { width: 20px; height: 20px; flex-shrink: 0; }
        .side-tab:focus-visible, .side-tab.is-active { transform: translateX(0); }
        @media (hover: hover) {
          .side-tab:hover { transform: translateX(0); }
        }
        .side-call-list {
          position: absolute;
          top: 0;
          right: calc(100% + 8px);
          background: #fff;
          border-radius: 14px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.18);
          overflow: hidden;
          min-width: 220px;
          border: 1px solid #e5e7eb;
        }
        @media (max-width: 480px) {
          .side-tab { height: 42px; padding: 0 14px 0 11px; transform: translateX(calc(100% - 40px)); }
          .side-call-list { min-width: 200px; }
        }
        @media print { .side-tabs { display: none !important; } }
      `}</style>
    </>
  );
}
