"use client";

import { useState, useEffect, useRef } from "react";

export interface TestimonialItem {
  quote: string;
  author: string;
  role?: string;
  avatar?: string;
}

const VISIBLE = 3;
const INTERVAL = 4500;

export default function TestimonialSlider({ testimonials }: { testimonials: TestimonialItem[] }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = testimonials.length;

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setCurrent((c) => (c + 1) % total), INTERVAL);
  };

  useEffect(() => {
    if (!paused) startTimer();
    else if (timerRef.current) clearInterval(timerRef.current);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, total]);

  const prev = () => { setCurrent((c) => (c - 1 + total) % total); startTimer(); };
  const next = () => { setCurrent((c) => (c + 1) % total); startTimer(); };
  const goTo = (i: number) => { setCurrent(i); startTimer(); };

  const visible = Array.from({ length: VISIBLE }, (_, i) => ({
    data: testimonials[(current + i) % total],
    idx: (current + i) % total,
  }));

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} style={{ position: "relative" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }} className="ti-slider-grid">
        {visible.map(({ data: t, idx }, pos) => (
          <div
            key={`${current}-${pos}`}
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "28px 24px 22px",
              border: "1px solid #dde2ef",
              boxShadow: pos === 0 ? "0 4px 20px rgba(26,42,108,0.12)" : "0 2px 8px rgba(0,0,0,0.05)",
              display: "flex",
              flexDirection: "column",
              animation: "tiSlideIn 0.38s ease",
            }}
          >
            {/* Stars */}
            <div style={{ display: "flex", gap: "2px", marginBottom: "10px" }}>
              {[...Array(5)].map((_, s) => (
                <span key={s} style={{ color: "#f59e0b", fontSize: "0.85rem" }}>★</span>
              ))}
            </div>

            {/* Open-quote */}
            <div style={{ color: "#e87722", fontSize: "2.4rem", lineHeight: 0.9, marginBottom: "8px", fontFamily: "Georgia,serif" }}>&ldquo;</div>

            {/* Quote text */}
            <p style={{ color: "#4a5568", fontSize: "0.86rem", lineHeight: 1.78, fontStyle: "italic", flexGrow: 1, marginBottom: "20px" }}>
              {t.quote}
            </p>

            {/* Author row */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", borderTop: "1px solid #f0f2f8", paddingTop: "16px" }}>
              {t.avatar ? (
                <img
                  src={t.avatar}
                  alt={t.author}
                  width={44}
                  height={44}
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    flexShrink: 0,
                    border: "2px solid #e8eaf6",
                    imageRendering: "auto",
                  }}
                  loading="lazy"
                />
              ) : (
                <div style={{
                  width: "44px", height: "44px", borderRadius: "50%", flexShrink: 0,
                  background: "linear-gradient(135deg,#1a2a6c,#2563b0)",
                  color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.1rem", fontWeight: 700,
                }}>
                  {t.author.charAt(0)}
                </div>
              )}
              <div>
                <div style={{ fontWeight: 700, color: "#1a2a6c", fontSize: "0.88rem", lineHeight: 1.3 }}>{t.author}</div>
                {t.role && <div style={{ fontSize: "0.75rem", color: "#6b7280", marginTop: "2px" }}>{t.role}</div>}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginTop: "28px" }}>
        <button onClick={prev} aria-label="Previous testimonial" style={btnStyle}>‹</button>
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
        <button onClick={next} aria-label="Next testimonial" style={btnStyle}>›</button>
      </div>

      <style>{`
        @keyframes tiSlideIn {
          from { opacity: 0; transform: translateX(16px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @media (max-width: 900px) {
          .ti-slider-grid { grid-template-columns: 1fr 1fr !important; }
          .ti-slider-grid > div:last-child { display: none !important; }
        }
        @media (max-width: 560px) {
          .ti-slider-grid { grid-template-columns: 1fr !important; }
          .ti-slider-grid > div:nth-child(2) { display: none !important; }
        }
      `}</style>
    </div>
  );
}

const btnStyle: React.CSSProperties = {
  width: "44px", height: "44px", borderRadius: "50%",
  background: "#1a2a6c", color: "#fff", border: "none",
  fontSize: "1.4rem", lineHeight: 1, cursor: "pointer",
  display: "flex", alignItems: "center", justifyContent: "center",
  flexShrink: 0, transition: "background 0.2s",
};
