"use client";

import { useState } from "react";
import Link from "next/link";
import { serviceCategories } from "@/lib/data/services";

export default function ServiceTabs() {
  const [active, setActive] = useState(serviceCategories[0].slug);
  const current = serviceCategories.find((c) => c.slug === active)!;
  const half = Math.ceil(current.services.length / 2);
  const left = current.services.slice(0, half);
  const right = current.services.slice(half);

  return (
    <section style={{ background: "var(--gray)", padding: "60px 20px" }}>
      <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 36px" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: "var(--navy)", marginBottom: "8px" }}>Our Services assures your success</h2>
        <p style={{ color: "var(--text-mid)" }}>Our Writing, Editing, Statistics, Designing, Coding &amp; Programming Services</p>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Tab nav */}
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", justifyContent: "center", marginBottom: "28px" }}>
          {serviceCategories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActive(cat.slug)}
              style={{
                display: "flex", flexDirection: "column", alignItems: "center", gap: "6px",
                padding: "12px 18px", border: "1.5px solid var(--border)", borderRadius: "8px",
                cursor: "pointer", fontSize: "12px", fontWeight: 600, minWidth: "110px",
                background: active === cat.slug ? "var(--navy)" : "#fff",
                color: active === cat.slug ? "#fff" : "var(--text-mid)",
                borderColor: active === cat.slug ? "var(--navy)" : "var(--border)",
              }}
            >
              <span style={{ fontSize: "24px" }}>{cat.icon}</span>
              {cat.title}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div style={{ background: "#fff", borderRadius: "10px", padding: "28px", border: "1px solid var(--border)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0" }} className="service-grid">
            <div style={{ paddingRight: "20px" }}>
              {left.map((item) => (
                <div key={item.href} style={{ padding: "12px 0", borderBottom: "1px solid var(--border)" }}>
                  <Link href={item.href}>
                    <h4 style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--blue)", marginBottom: "3px" }}>{item.title}</h4>
                  </Link>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-mid)" }}>{item.description}</p>
                </div>
              ))}
            </div>
            <div style={{ paddingLeft: "20px", borderLeft: "1px solid var(--border)" }} className="service-right">
              {right.map((item) => (
                <div key={item.href} style={{ padding: "12px 0", borderBottom: "1px solid var(--border)" }}>
                  <Link href={item.href}>
                    <h4 style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--blue)", marginBottom: "3px" }}>{item.title}</h4>
                  </Link>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-mid)" }}>{item.description}</p>
                </div>
              ))}
            </div>
            <div style={{ gridColumn: "1/-1", background: "#fffbe6", borderLeft: "4px solid var(--orange)", padding: "14px 18px", borderRadius: "0 6px 6px 0", marginTop: "20px", fontSize: "0.84rem", color: "#555" }}>
              <strong style={{ color: "var(--orange-dark)" }}>Note:</strong> {current.note}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .service-grid { grid-template-columns: 1fr !important; }
          .service-right { padding-left: 0 !important; border-left: none !important; padding-top: 20px; border-top: 1px solid var(--border); }
        }
      `}</style>
    </section>
  );
}
