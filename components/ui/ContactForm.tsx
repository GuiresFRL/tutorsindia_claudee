"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { COUNTRIES, flagEmoji } from "@/lib/data/countries";

const SERVICES = [
  "Masters Dissertation Writing",
  "PhD Dissertation Writing",
  "MBA Dissertation Writing",
  "DBA Dissertation Writing",
  "Dissertation Topic Selection",
  "Dissertation Proposal Writing",
  "Literature Review Writing",
  "Research Methodology",
  "Data Analysis (SPSS/R/STATA)",
  "Statistical Analysis",
  "Coursework / Assignment Writing",
  "Essay Writing",
  "Proofreading & Editing",
  "Plagiarism Checking",
  "Publication Support",
  "Coding & Programming",
  "Other",
];

const DEADLINES = [
  "Less than 24 hours", "1–3 days", "3–7 days", "1–2 weeks",
  "2–4 weeks", "1–2 months", "2–3 months", "3+ months",
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  country: string;
  service: string;
  subject: string;
  wordCount: string;
  deadline: string;
  message: string;
}

const EMPTY: FormData = {
  name: "", email: "", phone: "", country: "", service: "",
  subject: "", wordCount: "", deadline: "", message: "",
};

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "11px 14px", border: "1px solid #dde2ef",
  borderRadius: "6px", fontSize: "0.95rem", color: "#222",
  background: "#fff", outline: "none", boxSizing: "border-box",
  fontFamily: "inherit",
};

const labelStyle: React.CSSProperties = {
  display: "block", marginBottom: "6px", fontSize: "0.88rem",
  fontWeight: 600, color: "#1a2a6c",
};

const rowStyle: React.CSSProperties = {
  display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px",
};

const selectChevron =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 8" fill="none"><path d="M1 1.5l5 5 5-5" stroke="%23667" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  );

const selectStyle: React.CSSProperties = {
  ...inputStyle,
  appearance: "none",
  WebkitAppearance: "none",
  backgroundImage: `url("${selectChevron}")`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 14px center",
  paddingRight: "36px",
  cursor: "pointer",
};

export default function ContactForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormData>(EMPTY);
  const [phoneCode, setPhoneCode] = useState("+91");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const set = (k: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setForm((f) => ({ ...f, country: value }));
    const match = COUNTRIES.find((c) => c.name === value);
    if (match) setPhoneCode(match.dial);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, phone: `${phoneCode} ${form.phone}` }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "Failed");
      router.push("/thank-you/");
    } catch {
      setError("Something went wrong. Please try again or contact us directly.");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>

      {/* Row 1: Name + Email */}
      <div style={rowStyle} className="form-row">
        <div>
          <label style={labelStyle} htmlFor="cf-name">Full Name <span style={{ color: "#e87722" }}>*</span></label>
          <input id="cf-name" type="text" required placeholder="John Smith" value={form.name} onChange={set("name")} style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle} htmlFor="cf-email">Email Address <span style={{ color: "#e87722" }}>*</span></label>
          <input id="cf-email" type="email" required placeholder="john@university.ac.uk" value={form.email} onChange={set("email")} style={inputStyle} />
        </div>
      </div>

      {/* Row 2: Phone + Country */}
      <div style={rowStyle} className="form-row">
        <div>
          <label style={labelStyle} htmlFor="cf-phone">Phone / WhatsApp <span style={{ color: "#e87722" }}>*</span></label>
          <div style={{ display: "flex", alignItems: "stretch", border: "1px solid #dde2ef", borderRadius: "6px", overflow: "hidden", background: "#fff" }}>
            <select
              aria-label="Country code"
              value={phoneCode}
              onChange={(e) => setPhoneCode(e.target.value)}
              style={{
                ...selectStyle,
                width: "112px",
                flexShrink: 0,
                border: "none",
                borderRadius: 0,
                paddingRight: "26px",
                backgroundPosition: "right 8px center",
                borderRight: "1px solid #dde2ef",
              }}
            >
              {COUNTRIES.map((c) => (
                <option key={c.iso2} value={c.dial}>{flagEmoji(c.iso2)} {c.dial}</option>
              ))}
            </select>
            <input
              id="cf-phone"
              type="tel"
              required
              placeholder="7700 000000"
              value={form.phone}
              onChange={set("phone")}
              style={{ ...inputStyle, border: "none", borderRadius: 0, flex: 1 }}
            />
          </div>
        </div>
        <div>
          <label style={labelStyle} htmlFor="cf-country">Country <span style={{ color: "#e87722" }}>*</span></label>
          <select id="cf-country" required value={form.country} onChange={handleCountryChange} style={selectStyle}>
            <option value="">Select country…</option>
            {COUNTRIES.map((c) => (
              <option key={c.iso2} value={c.name}>{flagEmoji(c.iso2)} {c.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 3: Service */}
      <div>
        <label style={labelStyle} htmlFor="cf-service">Service Required <span style={{ color: "#e87722" }}>*</span></label>
        <select id="cf-service" required value={form.service} onChange={set("service")} style={selectStyle}>
          <option value="">Select a service…</option>
          {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      {/* Row 4: Subject + Word Count */}
      <div style={rowStyle} className="form-row">
        <div>
          <label style={labelStyle} htmlFor="cf-subject">Subject / Topic</label>
          <input id="cf-subject" type="text" placeholder="e.g. Marketing, Machine Learning" value={form.subject} onChange={set("subject")} style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle} htmlFor="cf-wordcount">Approximate Word Count</label>
          <input id="cf-wordcount" type="text" placeholder="e.g. 10,000 words" value={form.wordCount} onChange={set("wordCount")} style={inputStyle} />
        </div>
      </div>

      {/* Row 5: Deadline */}
      <div>
        <label style={labelStyle} htmlFor="cf-deadline">Deadline <span style={{ color: "#e87722" }}>*</span></label>
        <select id="cf-deadline" required value={form.deadline} onChange={set("deadline")} style={selectStyle}>
          <option value="">Select deadline…</option>
          {DEADLINES.map((d) => <option key={d} value={d}>{d}</option>)}
        </select>
      </div>

      {/* Row 6: Message */}
      <div>
        <label style={labelStyle} htmlFor="cf-message">Requirements / Message <span style={{ color: "#e87722" }}>*</span></label>
        <textarea
          id="cf-message"
          required
          rows={5}
          placeholder="Please describe your requirements, university guidelines, or any specific instructions…"
          value={form.message}
          onChange={set("message")}
          style={{ ...inputStyle, resize: "vertical", lineHeight: 1.6 }}
        />
      </div>

      {/* Error */}
      {error && (
        <div style={{ background: "#fff0f0", border: "1px solid #fca5a5", borderRadius: "6px", padding: "12px 16px", color: "#b91c1c", fontSize: "0.9rem" }}>
          {error}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        style={{
          background: loading ? "#94a3b8" : "linear-gradient(135deg,#1a2a6c,#2563b0)",
          color: "#fff", border: "none", borderRadius: "6px",
          padding: "14px 32px", fontSize: "1rem", fontWeight: 700,
          cursor: loading ? "not-allowed" : "pointer",
          letterSpacing: "0.02em", transition: "opacity 0.2s",
        }}
      >
        {loading ? "Sending…" : "Submit Enquiry"}
      </button>

      <p style={{ fontSize: "0.78rem", color: "#888", textAlign: "center", margin: 0 }}>
        Your information is kept strictly confidential. We respond within 30 minutes.
      </p>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 600px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </form>
  );
}
