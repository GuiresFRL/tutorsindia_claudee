"use client";

import { useEffect, useState, useRef, FormEvent } from "react";
import { usePathname } from "next/navigation";
import { COUNTRIES, flagEmoji } from "@/lib/data/countries";

// Any component can still open this modal on demand:
//   window.dispatchEvent(new Event(OPEN_ENQUIRY_EVENT))
// By default the modal auto-opens 7s after landing on a page (see EXCLUDED_PATHS below).
export const OPEN_ENQUIRY_EVENT = "tutorsindia:open-enquiry";

// Pages where the auto-popup must never appear (user is already mid-order / mid-contact).
const EXCLUDED_PATHS = ["/contact-us", "/order-now"];

// Show the auto-popup once per browser session, not on every page navigation.
const SESSION_KEY = "tutorsindia_enquiry_shown";

const ORDER_TYPES = [
  "Masters Dissertation Writing",
  "PhD Dissertation Writing",
  "MBA / DBA Dissertation Writing",
  "Coursework / Assignment Writing",
  "Statistical Analysis",
  "Editing & Proofreading",
  "Publication Support",
  "Other",
];

const selectChevron =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 8" fill="none"><path d="M1 1.5l5 5 5-5" stroke="%23667" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  );

export default function EnquiryModal() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  const [name, setName] = useState("");
  const [phoneCode, setPhoneCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [orderType, setOrderType] = useState("");

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Manual open trigger (kept for any future button/link that wants to open it directly)
  useEffect(() => {
    const onOpen = () => { setOpen(true); setStatus("idle"); };
    window.addEventListener(OPEN_ENQUIRY_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_ENQUIRY_EVENT, onOpen);
  }, []);

  // Auto-open 7s after landing on an eligible page, once per browser session
  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);

    const cleanPath = (pathname || "/").replace(/\/$/, "") || "/";
    if (EXCLUDED_PATHS.includes(cleanPath)) return;

    let alreadyShown = false;
    try { alreadyShown = sessionStorage.getItem(SESSION_KEY) === "1"; } catch {}
    if (alreadyShown) return;

    timerRef.current = setTimeout(() => {
      setOpen(true);
      setStatus("idle");
      try { sessionStorage.setItem(SESSION_KEY, "1"); } catch {}
    }, 7000);

    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  if (!open) return null;

  const close = () => setOpen(false);

  const handleCountryChange = (value: string) => {
    setCountry(value);
    const match = COUNTRIES.find((c) => c.name === value);
    if (match) setPhoneCode(match.dial);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone: `${phoneCode} ${phone}`,
          email,
          country,
          service: orderType,
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "Failed");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "13px 16px",
    border: "none",
    borderRadius: "8px",
    fontSize: "0.95rem",
    color: "#1a2a6c",
    background: "#fff",
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "inherit",
  };

  const selectStyle: React.CSSProperties = {
    ...inputStyle,
    appearance: "none",
    WebkitAppearance: "none",
    backgroundImage: `url("${selectChevron}")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 14px center",
    paddingRight: "36px",
    cursor: "pointer",
    color: "#1a2a6c",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    marginBottom: "8px",
    fontSize: "0.88rem",
    fontWeight: 700,
    color: "#fff",
  };

  return (
    <div
      onClick={close}
      className="eq-overlay"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        background: "rgba(10,14,32,0.72)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="eq-panel"
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "440px",
          maxHeight: "calc(100vh - 48px)",
          overflowY: "auto",
          background: "linear-gradient(150deg,#1c2c74 0%,#141f52 100%)",
          borderRadius: "16px",
          padding: "34px 32px 28px",
          boxShadow: "0 24px 64px rgba(0,0,0,0.45)",
        }}
      >
        {/* Close button */}
        <button
          onClick={close}
          aria-label="Close"
          className="eq-close"
          style={{
            position: "absolute",
            top: "-16px",
            right: "-16px",
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: "#fff",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 4px 14px rgba(0,0,0,0.3)",
            flexShrink: 0,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 2l12 12M14 2L2 14" stroke="#1a2a6c" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {status === "done" ? (
          <div style={{ textAlign: "center", padding: "24px 0" }}>
            <div style={{ fontSize: "2.6rem", marginBottom: "12px" }}>✅</div>
            <h2 style={{ color: "#fff", fontSize: "1.3rem", fontWeight: 700, marginBottom: "10px" }}>
              Thank You!
            </h2>
            <p style={{ color: "#c5d5f0", fontSize: "0.92rem", lineHeight: 1.6 }}>
              Your enquiry has been received. Our team will get back to you within 30 minutes.
            </p>
            <button
              onClick={close}
              style={{
                marginTop: "22px",
                padding: "12px 30px",
                background: "#e87722",
                color: "#fff",
                border: "none",
                borderRadius: "999px",
                fontWeight: 700,
                fontSize: "0.95rem",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 className="eq-heading" style={{ color: "#fff", fontSize: "1.55rem", fontWeight: 700, marginBottom: "16px" }}>
              Enquire Now
            </h2>
            <div className="eq-divider" style={{ height: "1px", background: "rgba(255,255,255,0.18)", marginBottom: "24px" }} />

            <form onSubmit={handleSubmit} className="eq-form" style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              {/* Name */}
              <div>
                <label style={labelStyle} className="eq-label" htmlFor="eq-name">Name</label>
                <input
                  id="eq-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={inputStyle}
                  className="eq-input"
                />
              </div>

              {/* Mobile Number */}
              <div>
                <label style={labelStyle} className="eq-label" htmlFor="eq-phone">
                  Mobile Number <span style={{ color: "#ff5c5c" }}>*</span>
                </label>
                <div style={{
                  display: "flex",
                  alignItems: "stretch",
                  background: "#fff",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}>
                  <select
                    aria-label="Country code"
                    autoComplete="off"
                    value={phoneCode}
                    onChange={(e) => setPhoneCode(e.target.value)}
                    className="eq-input eq-phone-code"
                    style={{
                      ...selectStyle,
                      width: "118px",
                      flexShrink: 0,
                      borderRadius: 0,
                      paddingRight: "28px",
                      backgroundPosition: "right 10px center",
                      borderRight: "1px solid #e5e8f0",
                    }}
                  >
                    {COUNTRIES.map((c) => (
                      <option key={c.iso2} value={c.dial}>{flagEmoji(c.iso2)} {c.dial}</option>
                    ))}
                  </select>
                  <input
                    id="eq-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="eq-input"
                    style={{ ...inputStyle, borderRadius: 0, flex: 1 }}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label style={labelStyle} className="eq-label" htmlFor="eq-email">
                  Email Id <span style={{ color: "#ff5c5c" }}>*</span>
                </label>
                <input
                  id="eq-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={inputStyle}
                  className="eq-input"
                />
              </div>

              {/* Country */}
              <div>
                <label style={labelStyle} className="eq-label" htmlFor="eq-country">Country</label>
                <select
                  id="eq-country"
                  autoComplete="off"
                  value={country}
                  onChange={(e) => handleCountryChange(e.target.value)}
                  className="eq-input"
                  style={{ ...selectStyle, color: country ? "#1a2a6c" : "#8a93a8" }}
                >
                  <option value="">Select country</option>
                  {COUNTRIES.map((c) => (
                    <option key={c.iso2} value={c.name}>{flagEmoji(c.iso2)} {c.name}</option>
                  ))}
                </select>
              </div>

              {/* Type of Order */}
              <div>
                <label style={labelStyle} className="eq-label" htmlFor="eq-order-type">Type of Order</label>
                <select
                  id="eq-order-type"
                  value={orderType}
                  onChange={(e) => setOrderType(e.target.value)}
                  className="eq-input"
                  style={{ ...selectStyle, color: orderType ? "#1a2a6c" : "#8a93a8" }}
                >
                  <option value="">Select type of order</option>
                  {ORDER_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              {status === "error" && (
                <div style={{ background: "rgba(255,92,92,0.15)", border: "1px solid rgba(255,92,92,0.4)", borderRadius: "6px", padding: "10px 14px", color: "#ffb3b3", fontSize: "0.85rem" }}>
                  Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="eq-submit"
                style={{
                  width: "100%",
                  padding: "15px",
                  background: status === "loading" ? "#a98330" : "#c9971e",
                  color: "#fff",
                  border: "none",
                  borderRadius: "999px",
                  fontWeight: 700,
                  fontSize: "1rem",
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                  marginTop: "6px",
                  transition: "background 0.18s",
                }}
              >
                {status === "loading" ? "Submitting…" : "Submit"}
              </button>
            </form>
          </>
        )}
      </div>

      {/* Compact mode — triggers on narrow width OR short height, so it covers
          mobile portrait, mobile landscape, and short/small-height desktop
          browser windows with one rule, not just one axis. */}
      <style>{`
        @media (max-width: 480px), (max-height: 700px) {
          .eq-overlay { padding: 16px !important; }
          .eq-panel { padding: 20px 20px 18px !important; max-height: calc(100vh - 32px) !important; }
          .eq-close { top: -12px !important; right: -12px !important; width: 32px !important; height: 32px !important; }
          .eq-heading { font-size: 1.25rem !important; margin-bottom: 8px !important; }
          .eq-divider { margin-bottom: 14px !important; }
          .eq-form { gap: 12px !important; }
          .eq-label { margin-bottom: 4px !important; font-size: 0.82rem !important; }
          .eq-input { padding: 10px 12px !important; font-size: 0.9rem !important; }
          .eq-phone-code { width: 100px !important; padding-right: 22px !important; }
          .eq-submit { padding: 12px !important; }
        }
      `}</style>
    </div>
  );
}
