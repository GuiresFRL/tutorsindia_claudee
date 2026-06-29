"use client";

import { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div style={{ borderRadius: "10px", overflow: "hidden", border: "1px solid var(--border)" }}>
      {faqs.map((faq, i) => (
        <div key={i} style={{ borderBottom: i < faqs.length - 1 ? "1px solid var(--border)" : "none" }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: "100%",
              textAlign: "left",
              padding: "16px 20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: open === i ? "var(--light-blue)" : "#fff",
              border: "none",
              cursor: "pointer",
              gap: "12px",
              transition: "background 0.2s",
            }}
          >
            <span style={{ fontWeight: 600, color: "var(--navy)", fontSize: "0.93rem", lineHeight: 1.4 }}>
              {faq.q}
            </span>
            <span style={{
              flexShrink: 0,
              width: "22px",
              height: "22px",
              borderRadius: "50%",
              background: open === i ? "var(--orange)" : "var(--navy)",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "14px",
              fontWeight: 700,
              transition: "transform 0.2s, background 0.2s",
              transform: open === i ? "rotate(45deg)" : "none",
            }}>
              +
            </span>
          </button>
          {open === i && (
            <div style={{
              padding: "0 20px 16px",
              background: "var(--light-blue)",
              fontSize: "0.88rem",
              color: "var(--text-mid)",
              lineHeight: 1.7,
            }}>
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
