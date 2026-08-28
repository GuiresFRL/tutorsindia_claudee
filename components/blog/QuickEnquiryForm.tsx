"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Recaptcha from "@/components/ui/Recaptcha";

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "10px 12px", border: "1px solid #dde2ef",
  borderRadius: "6px", fontSize: "0.88rem", color: "#222",
  background: "#fff", outline: "none", boxSizing: "border-box",
  fontFamily: "inherit",
};

export default function QuickEnquiryForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!recaptchaToken) {
      setError("Please complete the reCAPTCHA verification.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name, email, phone, message,
          country: "", service: "General Enquiry", subject: "", wordCount: "", deadline: "",
          recaptchaToken,
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "Failed");
      router.push("/thank-you/");
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <input type="text" required placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
      <input type="email" required placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
      <input type="tel" required placeholder="Phone / WhatsApp" value={phone} onChange={(e) => setPhone(e.target.value)} style={inputStyle} />
      <textarea required rows={4} placeholder="Tell us your requirement…" value={message} onChange={(e) => setMessage(e.target.value)} style={{ ...inputStyle, resize: "vertical", lineHeight: 1.5 }} />

      <div style={{ transform: "scale(0.85)", transformOrigin: "left top", marginBottom: "-8px" }}>
        <Recaptcha onChange={setRecaptchaToken} />
      </div>

      {error && (
        <div style={{ background: "#fff0f0", border: "1px solid #fca5a5", borderRadius: "6px", padding: "8px 10px", color: "#b91c1c", fontSize: "0.8rem" }}>
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading || !recaptchaToken}
        style={{
          background: loading || !recaptchaToken ? "#94a3b8" : "linear-gradient(135deg,#1a2a6c,#2563b0)",
          color: "#fff", border: "none", borderRadius: "6px",
          padding: "11px 20px", fontSize: "0.9rem", fontWeight: 700,
          cursor: loading || !recaptchaToken ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Sending…" : "Get Free Quote"}
      </button>
    </form>
  );
}
