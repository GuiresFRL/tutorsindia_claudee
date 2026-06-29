"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  deadline: string;
  wordCount: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

const inputStyle = {
  width: "100%",
  padding: "10px 14px",
  border: "1.5px solid var(--border)",
  borderRadius: "6px",
  fontSize: "0.93rem",
  outline: "none",
  fontFamily: "inherit",
  color: "var(--text)",
  background: "#fff",
  transition: "border-color 0.2s",
};

const inputErrorStyle = {
  ...inputStyle,
  border: "1.5px solid #e53e3e",
};

const labelStyle = {
  display: "block" as const,
  fontSize: "0.85rem",
  fontWeight: 600 as const,
  color: "var(--navy)",
  marginBottom: "6px",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "", email: "", phone: "", service: "", deadline: "", wordCount: "", message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.name.trim() || form.name.trim().length < 2) e.name = "Please enter your full name (at least 2 characters).";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Please enter a valid email address.";
    if (!form.message.trim() || form.message.trim().length < 20) e.message = "Please describe your requirements (at least 20 characters).";
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof Errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    // Simulate submission — replace with actual API call
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: "48px 24px" }}>
        <div style={{ fontSize: "3rem", marginBottom: "16px" }}>✅</div>
        <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--navy)", marginBottom: "10px" }}>Message Sent!</h3>
        <p style={{ color: "var(--text-mid)", fontSize: "0.95rem", lineHeight: 1.7 }}>
          Thank you, <strong>{form.name}</strong>! We have received your enquiry and will respond to <strong>{form.email}</strong> within <strong>30 minutes</strong> during business hours.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", service: "", deadline: "", wordCount: "", message: "" }); }}
          style={{ marginTop: "20px", padding: "10px 24px", background: "var(--orange)", color: "#fff", border: "none", borderRadius: "5px", fontWeight: 600, cursor: "pointer" }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
        <div style={{ marginBottom: "4px" }}>
          <label style={labelStyle}>Full Name *</label>
          <input
            type="text" name="name" value={form.name} onChange={handleChange}
            style={errors.name ? inputErrorStyle : inputStyle}
            placeholder="Your full name"
          />
          {errors.name && <span style={{ color: "#e53e3e", fontSize: "0.78rem", marginTop: "4px", display: "block" }}>{errors.name}</span>}
        </div>
        <div style={{ marginBottom: "4px" }}>
          <label style={labelStyle}>Email Address *</label>
          <input
            type="email" name="email" value={form.email} onChange={handleChange}
            style={errors.email ? inputErrorStyle : inputStyle}
            placeholder="your@email.com"
          />
          {errors.email && <span style={{ color: "#e53e3e", fontSize: "0.78rem", marginTop: "4px", display: "block" }}>{errors.email}</span>}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "14px" }}>
        <div>
          <label style={labelStyle}>Phone Number</label>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} style={inputStyle} placeholder="+44 / +1 / +91 ..." />
        </div>
        <div>
          <label style={labelStyle}>Service Required</label>
          <select name="service" value={form.service} onChange={handleChange} style={inputStyle}>
            <option value="">Select a service</option>
            <option>Masters Dissertation Writing</option>
            <option>PhD / DBA Dissertation</option>
            <option>Dissertation Proposal</option>
            <option>Statistical Analysis</option>
            <option>Coursework / Assignment</option>
            <option>Editing & Proofreading</option>
            <option>Publication Support</option>
            <option>CV Writing</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "14px" }}>
        <div>
          <label style={labelStyle}>Deadline</label>
          <input type="date" name="deadline" value={form.deadline} onChange={handleChange} style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Word Count</label>
          <input type="text" name="wordCount" value={form.wordCount} onChange={handleChange} style={inputStyle} placeholder="e.g. 15,000 words" />
        </div>
      </div>

      <div style={{ marginTop: "14px" }}>
        <label style={labelStyle}>Your Requirements *</label>
        <textarea
          name="message" value={form.message} onChange={handleChange} rows={5}
          style={{ ...(errors.message ? inputErrorStyle : inputStyle), resize: "vertical" as const }}
          placeholder="Describe your topic, university, level of study, and any specific requirements..."
        />
        {errors.message && <span style={{ color: "#e53e3e", fontSize: "0.78rem", marginTop: "4px", display: "block" }}>{errors.message}</span>}
      </div>

      <button
        type="submit"
        disabled={submitting}
        style={{
          marginTop: "20px",
          width: "100%",
          padding: "13px",
          background: submitting ? "#aaa" : "var(--orange)",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          fontSize: "1rem",
          fontWeight: 700,
          cursor: submitting ? "not-allowed" : "pointer",
          transition: "background 0.2s",
        }}
      >
        {submitting ? "Sending…" : "Send Enquiry — Get Free Quote"}
      </button>
      <p style={{ fontSize: "0.78rem", color: "var(--text-light)", textAlign: "center", marginTop: "10px" }}>
        🔒 Your information is secure and confidential. We respond within 30 minutes.
      </p>
    </form>
  );
}
