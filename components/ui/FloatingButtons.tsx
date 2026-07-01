"use client";

import { useEffect, useState } from "react";

const INDIA_TZ = ["Asia/Kolkata", "Asia/Calcutta"];

interface CallConfig {
  number: string;
  display: string;
  label: string;
}

function detectCall(): CallConfig {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (INDIA_TZ.includes(tz)) {
      return { number: "tel:+918754446690", display: "+91 8754446690", label: "Call India Office" };
    }
  } catch {}
  return { number: "tel:+441143520021", display: "+44-1143520021", label: "Call UK Office" };
}

export default function FloatingButtons() {
  const [call, setCall] = useState<CallConfig | null>(null);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    setCall(detectCall());
  }, []);

  return (
    <>
      {/* Call button — sits above WhatsApp */}
      {call && (
        <div style={{ position: "fixed", bottom: "92px", left: "24px", zIndex: 9999, display: "flex", alignItems: "center", gap: "10px" }}>
          {/* Tooltip label */}
          {showTooltip && (
            <div style={{
              background: "#1a2a6c",
              color: "#fff",
              fontSize: "0.78rem",
              fontWeight: 600,
              padding: "6px 12px",
              borderRadius: "6px",
              whiteSpace: "nowrap",
              boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
              pointerEvents: "none",
            }}>
              {call.display}
            </div>
          )}

          <a
            href={call.number}
            aria-label={call.label}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              background: "#1a2a6c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
              transition: "transform 0.2s, box-shadow 0.2s",
              flexShrink: 0,
            }}
            onFocus={() => setShowTooltip(true)}
            onBlur={() => setShowTooltip(false)}
          >
            {/* Phone icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" fill="#fff">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
          </a>
        </div>
      )}

      {/* WhatsApp button */}
      <a
        href="https://wa.me/918754446690"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="wa-float"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="#fff">
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.478.666 4.797 1.824 6.795L2 30l7.385-1.797A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.45 11.45 0 01-5.824-1.594l-.418-.248-4.381 1.066 1.1-4.258-.272-.437A11.46 11.46 0 014.5 16C4.5 9.649 9.649 4.5 16 4.5S27.5 9.649 27.5 16 22.351 27.5 16 27.5zm6.29-8.61c-.344-.172-2.035-1.003-2.35-1.118-.316-.115-.546-.172-.776.172-.23.344-.891 1.118-1.093 1.348-.2.23-.402.258-.746.086-.344-.172-1.453-.536-2.767-1.708-1.022-.913-1.712-2.04-1.912-2.384-.2-.344-.021-.53.15-.701.155-.155.344-.402.516-.603.172-.2.23-.344.344-.574.115-.23.058-.43-.029-.603-.086-.172-.776-1.87-1.063-2.561-.28-.672-.563-.58-.776-.591l-.66-.011c-.23 0-.603.086-.919.43-.316.344-1.207 1.18-1.207 2.878s1.236 3.338 1.408 3.568c.172.23 2.433 3.713 5.895 5.207.824.356 1.467.569 1.969.728.827.263 1.58.226 2.175.137.663-.1 2.035-.832 2.322-1.635.287-.803.287-1.491.2-1.635-.086-.144-.316-.23-.66-.402z"/>
        </svg>
      </a>
    </>
  );
}
