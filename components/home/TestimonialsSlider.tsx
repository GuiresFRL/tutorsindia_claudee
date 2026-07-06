"use client";

import { useState, useEffect, useRef } from "react";
import { testimonials } from "@/lib/data/site";

const VISIBLE = 3;
const INTERVAL = 4500;

export default function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = testimonials.length;

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, INTERVAL);
  };

  useEffect(() => {
    if (!paused) startTimer();
    else if (timerRef.current) clearInterval(timerRef.current);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused]);

  const prev = () => { setCurrent((c) => (c - 1 + total) % total); startTimer(); };
  const next = () => { setCurrent((c) => (c + 1) % total); startTimer(); };
  const goTo = (i: number) => { setCurrent(i); startTimer(); };

  const visible = Array.from({ length: VISIBLE }, (_, i) => testimonials[(current + i) % total]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{ position: "relative" }}
    >
      {/* Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }} className="testimonial-slider-grid">
        {visible.map((t, i) => (
          <div
            key={`${current}-${i}`}
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "28px 24px",
              border: "1px solid #dde2ef",
              position: "relative",
              boxShadow: i === 0 ? "0 4px 20px rgba(26,42,108,0.12)" : "0 2px 8px rgba(0,0,0,0.05)",
              animation: "slideIn 0.4s ease",
            }}
          >
            <div style={{ color: "#e87722", fontSize: "2.8rem", lineHeight: 1, marginBottom: "10px", fontFamily: "serif" }}>&ldquo;</div>
            <p style={{ color: "#4a5568", fontSize: "0.88rem", lineHeight: 1.75, fontStyle: "italic", marginBottom: "20px" }}>{t.quote}</p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{
                width: "40px", height: "40px", borderRadius: "50%",
                background: "linear-gradient(135deg,#1a2a6c,#2563b0)",
                color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1rem", fontWeight: 700, flexShrink: 0,
              }}>
                {t.author.charAt(0)}
              </div>
              <div>
                <div style={{ fontWeight: 700, color: "#1a2a6c", fontSize: "0.88rem" }}>{t.author}</div>
                {t.location && <div style={{ fontSize: "0.76rem", color: "#9aa5b4" }}>{t.location}</div>}
                <div style={{ display: "flex", gap: "2px", marginTop: "2px" }}>
                  {[...Array(5)].map((_, s) => (
                    <span key={s} style={{ color: "#f59e0b", fontSize: "0.75rem" }}>★</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Nav row */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginTop: "28px" }}>
        <button onClick={prev} aria-label="Previous" style={btnStyle}>‹</button>

        {/* Dots — 44×44px touch target wrapping small visual dot */}
        <div style={{ display: "flex", gap: "2px", alignItems: "center" }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              style={{
                minWidth: "44px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              <span style={{
                display: "block",
                width: i === current ? "22px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background: i === current ? "var(--orange, #b85510)" : "#cbd5e0",
                transition: "all 0.3s",
              }} />
            </button>
          ))}
        </div>

        <button onClick={next} aria-label="Next" style={btnStyle}>›</button>
      </div>

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(18px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @media (max-width: 900px) {
          .testimonial-slider-grid { grid-template-columns: 1fr 1fr !important; }
          .testimonial-slider-grid > div:last-child { display: none; }
        }
        @media (max-width: 560px) {
          .testimonial-slider-grid { grid-template-columns: 1fr !important; }
          .testimonial-slider-grid > div:nth-child(2) { display: none; }
        }
      `}</style>
    </div>
  );
}

const btnStyle: React.CSSProperties = {
  width: "44px", height: "44px", borderRadius: "50%",
  background: "#1a2a6c", color: "#fff", border: "none",
  fontSize: "1.3rem", lineHeight: 1, cursor: "pointer",
  display: "flex", alignItems: "center", justifyContent: "center",
  flexShrink: 0, transition: "background 0.2s",
};
