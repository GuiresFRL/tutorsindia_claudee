"use client";

import { useRouter } from "next/navigation";

interface Props {
  categories: { name: string; count: number }[];
  activeCategory: string;
}

export default function AcademyCategoryFilter({ categories, activeCategory }: Props) {
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    router.push(value ? `/academy/?category=${encodeURIComponent(value)}` : "/academy/");
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
      <label
        htmlFor="academy-category-filter"
        style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1a2a6c", whiteSpace: "nowrap", flexShrink: 0 }}
      >
        Filter by Category:
      </label>

      <div style={{ position: "relative", flex: 1, minWidth: "220px", maxWidth: "320px" }}>
        <select
          id="academy-category-filter"
          value={activeCategory}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px 40px 10px 14px",
            fontSize: "0.88rem",
            fontWeight: 500,
            color: activeCategory ? "#1a2a6c" : "#555",
            background: "#fff",
            border: `2px solid ${activeCategory ? "#1a2a6c" : "#dde2ef"}`,
            borderRadius: "8px",
            appearance: "none",
            WebkitAppearance: "none",
            cursor: "pointer",
            outline: "none",
            fontFamily: "inherit",
            boxShadow: activeCategory ? "0 0 0 3px rgba(26,42,108,0.1)" : "none",
            transition: "border-color 0.2s",
          }}
        >
          <option value="">All Academy Posts ({categories.reduce((s, c) => s + c.count, 0)})</option>
          <optgroup label="── Categories ──" style={{ fontWeight: 700, color: "#888", fontSize: "0.8rem" }}>
            {categories.map((cat) => (
              <option key={cat.name} value={cat.name}>
                {cat.name} ({cat.count})
              </option>
            ))}
          </optgroup>
        </select>
        <span style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: activeCategory ? "#1a2a6c" : "#888", fontSize: "0.8rem", fontWeight: 700 }}>▾</span>
      </div>

      {activeCategory && (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "5px 12px", background: "#1a2a6c", color: "#fff", borderRadius: "20px", fontSize: "0.78rem", fontWeight: 600 }}>
            {activeCategory}
          </span>
          <button
            onClick={() => router.push("/academy/")}
            style={{ fontSize: "0.78rem", color: "#e87722", fontWeight: 700, background: "none", border: "none", cursor: "pointer", textDecoration: "underline", padding: 0 }}
          >
            ✕ Clear
          </button>
        </div>
      )}
    </div>
  );
}
