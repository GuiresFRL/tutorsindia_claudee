"use client";

import { useState, useEffect } from "react";
import { OPEN_ENQUIRY_EVENT } from "@/components/ui/enquiryEvent";

const NUMBERS = [
  { label: "India", code: "IN", codeBg: "#e8f5e9", codeColor: "#1b7a2f", number: "+91 8754446690", tel: "tel:+918754446690" },
  { label: "United Kingdom", code: "UK", codeBg: "#e8eefc", codeColor: "#1a2a6c", number: "+44 1143520021", tel: "tel:+441143520021" },
];

const WHATSAPP_URL = "https://wa.me/918754446690";

export default function FloatingActions() {
  const [open, setOpen] = useState(false);
  const [callOpen, setCallOpen] = useState(false);

  const close = () => { setOpen(false); setCallOpen(false); };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(false); setCallOpen(false); } };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // Items fan out upward from the main button, nearest first.
  const itemProps = (i: number) => ({
    className: "float-item",
    tabIndex: open ? 0 : -1,
    style: { transitionDelay: open ? `${i * 40}ms` : "0ms" } as React.CSSProperties,
  });

  return (
    <>
      {open && <div className="float-backdrop" onClick={close} aria-hidden="true" />}

      <div className={`float-actions${open ? " is-open" : ""}`}>
        <div className="float-items" aria-hidden={!open}>
          {/* Call — number list opens to the left of the item */}
          <div style={{ position: "relative" }}>
            {open && callOpen && (
              <div className="float-call-list">
                <div style={{ padding: "10px 16px 8px", fontSize: "0.7rem", fontWeight: 700, color: "#888", textTransform: "uppercase", letterSpacing: "0.07em", borderBottom: "1px solid #f0f0f0" }}>
                  Call Us
                </div>
                {NUMBERS.map((n) => (
                  <a
                    key={n.label}
                    href={n.tel}
                    onClick={close}
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
              {...itemProps(2)}
              aria-label="Call us"
              aria-expanded={callOpen}
              title="Call us"
              onClick={() => setCallOpen((v) => !v)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#e87722" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.1 1.17 2 2 0 012.11 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
              </svg>
            </button>
          </div>

          {/* WhatsApp */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            {...itemProps(1)}
            aria-label="Chat with us on WhatsApp"
            title="Chat on WhatsApp"
            onClick={close}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="#25D366">
              <path d="M16 2C8.268 2 2 8.268 2 16c0 2.478.666 4.797 1.824 6.795L2 30l7.385-1.797A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.45 11.45 0 01-5.824-1.594l-.418-.248-4.381 1.066 1.1-4.258-.272-.437A11.46 11.46 0 014.5 16C4.5 9.649 9.649 4.5 16 4.5S27.5 9.649 27.5 16 22.351 27.5 16 27.5zm6.29-8.61c-.344-.172-2.035-1.003-2.35-1.118-.316-.115-.546-.172-.776.172-.23.344-.891 1.118-1.093 1.348-.2.23-.402.258-.746.086-.344-.172-1.453-.536-2.767-1.708-1.022-.913-1.712-2.04-1.912-2.384-.2-.344-.021-.53.15-.701.155-.155.344-.402.516-.603.172-.2.23-.344.344-.574.115-.23.058-.43-.029-.603-.086-.172-.776-1.87-1.063-2.561-.28-.672-.563-.58-.776-.591l-.66-.011c-.23 0-.603.086-.919.43-.316.344-1.207 1.18-1.207 2.878s1.236 3.338 1.408 3.568c.172.23 2.433 3.713 5.895 5.207.824.356 1.467.569 1.969.728.827.263 1.58.226 2.175.137.663-.1 2.035-.832 2.322-1.635.287-.803.287-1.491.2-1.635-.086-.144-.316-.23-.66-.402z" />
            </svg>
          </a>

          {/* Enquire — opens the Zoho enquiry popup */}
          <button
            type="button"
            {...itemProps(0)}
            aria-label="Enquire now"
            title="Enquire now"
            onClick={() => { close(); window.dispatchEvent(new Event(OPEN_ENQUIRY_EVENT)); }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#1a2a6c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
          </button>
        </div>

        {/* Main toggle */}
        <button
          type="button"
          className="float-main"
          onClick={() => (open ? close() : setOpen(true))}
          aria-label={open ? "Close contact options" : "Open contact options"}
          aria-expanded={open}
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              <circle cx="8.5" cy="11.5" r="0.6" fill="#fff" /><circle cx="12" cy="11.5" r="0.6" fill="#fff" /><circle cx="15.5" cy="11.5" r="0.6" fill="#fff" />
            </svg>
          )}
        </button>
      </div>

      <style>{`
        .float-backdrop {
          position: fixed;
          inset: 0;
          z-index: 9998;
          background: rgba(10,14,32,0.5);
          animation: floatFade 0.2s ease;
        }
        @keyframes floatFade { from { opacity: 0; } to { opacity: 1; } }
        .float-actions {
          position: fixed;
          /* Centred on Tawk's bubble (64px wide, 20px from the edge → centre 52px in), and clear of its greeting sticker above it */
          right: 31px;
          bottom: 140px;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
        .float-items {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .float-item, .float-main {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: none;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 3px 12px rgba(0,0,0,0.25);
          cursor: pointer;
          text-decoration: none;
        }
        .float-item {
          background: #fff;
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px) scale(0.8);
          transition: opacity 0.18s ease, transform 0.18s ease, visibility 0s linear 0.18s;
        }
        .float-actions.is-open .float-item {
          opacity: 1;
          visibility: visible;
          transform: none;
          transition: opacity 0.18s ease, transform 0.18s ease, visibility 0s;
        }
        .float-main {
          background: #25D366;
          transition: transform 0.2s, background 0.2s;
        }
        .float-actions.is-open .float-main { background: #128C7E; }
        .float-item svg, .float-main svg { width: 21px; height: 21px; }
        .float-item:hover, .float-main:hover { transform: scale(1.08); }
        .float-actions.is-open .float-item:hover { transform: scale(1.08); }
        .float-call-list {
          position: absolute;
          bottom: 0;
          right: 52px;
          background: #fff;
          border-radius: 14px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.18);
          overflow: hidden;
          min-width: 220px;
          border: 1px solid #e5e7eb;
        }
        @media (max-width: 480px) {
          .float-actions { right: 34px; bottom: 130px; gap: 8px; }
          .float-items { gap: 8px; }
          .float-item, .float-main { width: 38px; height: 38px; }
          .float-item svg, .float-main svg { width: 19px; height: 19px; }
          .float-call-list { right: 46px; min-width: 200px; }
        }
        @media print { .float-actions, .float-backdrop { display: none !important; } }
      `}</style>
    </>
  );
}
