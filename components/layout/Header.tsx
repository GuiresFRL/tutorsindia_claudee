"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { navigation } from "@/lib/data/navigation";
import type { NavItem } from "@/lib/types";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openNav, setOpenNav] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [mobileMegaExpanded, setMobileMegaExpanded] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (!q) return;
    setSearchOpen(false);
    router.push(`/search?q=${encodeURIComponent(q)}`);
  };

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus();
  }, [searchOpen]);

  const openMenu = (key: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenNav(key);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenNav(null), 150);
  };

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenNav(null);
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header
      ref={headerRef}
      style={{
        background: "#fff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.09)",
        position: "sticky",
        top: 0,
        zIndex: 200,
      }}
    >
      <div style={{
        maxWidth: "1260px",
        margin: "0 auto",
        padding: "0 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "68px",
      }}>
        {/* ── Logo ── */}
        <Link href="/" style={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
          <picture>
            <source srcSet="/tutorsindia-logo-hd.webp" type="image/webp" />
            <img
              src="/tutorsindia-logo-hd.jpg"
              alt="Tutors India — Trusted Academic Writing Services Since 2001"
              width={62}
              height={62}
              fetchPriority="high"
              style={{ height: "62px", width: "auto", objectFit: "contain" }}
            />
          </picture>
        </Link>

        {/* ── Desktop nav ── */}
        <nav className="hdr-desktop" aria-label="Main navigation">
          <ul style={{ display: "flex", gap: "2px", alignItems: "center", listStyle: "none", margin: 0, padding: 0 }}>
            {navigation.map((item) => (
              <NavEntry
                key={item.label}
                item={item}
                open={openNav === item.href}
                onOpen={() => openMenu(item.href)}
                onClose={scheduleClose}
                onKeepOpen={() => openMenu(item.href)}
                onSelect={() => setOpenNav(null)}
              />
            ))}
          </ul>
        </nav>

        {/* ── CTA buttons + hamburger ── */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", position: "relative" }}>
          <button
            onClick={() => setSearchOpen((v) => !v)}
            aria-label="Search"
            aria-expanded={searchOpen}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#1a2a6c",
              padding: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="19" height="19" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="9" r="6.5" />
              <path d="M18 18l-4.35-4.35" strokeLinecap="round" />
            </svg>
          </button>

          {searchOpen && (
            <form
              onSubmit={submitSearch}
              style={{
                position: "absolute",
                top: "calc(100% + 10px)",
                right: 0,
                background: "#fff",
                border: "1px solid #dde2ef",
                borderTop: "3px solid #e87722",
                borderRadius: "0 0 8px 8px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.13)",
                padding: "12px",
                display: "flex",
                gap: "8px",
                zIndex: 300,
                width: "min(320px, 90vw)",
              }}
            >
              <input
                ref={searchInputRef}
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services, blog…"
                style={{ flex: 1, padding: "9px 12px", border: "1px solid #dde2ef", borderRadius: "5px", fontSize: "13.5px" }}
              />
              <button
                type="submit"
                aria-label="Submit search"
                style={{ background: "#b85812", color: "#fff", border: "none", borderRadius: "5px", padding: "0 14px", cursor: "pointer", fontWeight: 700, fontSize: "13.5px" }}
              >
                Go
              </button>
            </form>
          )}

          <Link
            href="/pricing/"
            className="hdr-pricing-btn"
            style={{
              padding: "8px 18px",
              border: "2px solid #1a2a6c",
              color: "#1a2a6c",
              borderRadius: "4px",
              fontSize: "13.5px",
              fontWeight: 600,
              whiteSpace: "nowrap",
            }}
          >
            Pricing
          </Link>
          <Link
            href="/order-now/"
            style={{
              padding: "8px 18px",
              background: "#b85812",
              color: "#fff",
              borderRadius: "4px",
              fontSize: "13.5px",
              fontWeight: 700,
              whiteSpace: "nowrap",
            }}
          >
            Get A Free Quote
          </Link>
          <button
            className="hdr-hamburger"
            onClick={() => {
              setMobileOpen((v) => !v);
              setMobileExpanded(null);
              setMobileMegaExpanded(null);
            }}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            style={{
              background: "none",
              border: "none",
              fontSize: "22px",
              cursor: "pointer",
              color: "#1a2a6c",
              padding: "4px 8px",
              lineHeight: 1,
            }}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <div
        className={`hdr-mobile-panel${mobileOpen ? " open" : ""}`}
        style={{ background: "#fff", borderTop: "2px solid #e87722" }}
      >
        <div style={{ maxWidth: "1260px", margin: "0 auto", padding: "16px 20px", maxHeight: "80vh", overflowY: "auto" }}>
          {navigation.map((item) => (
            <div key={item.label} style={{ borderBottom: "1px solid #eef0f8" }}>
              {/* Top-level mobile item */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "11px 0",
                }}
              >
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  style={{ fontWeight: 600, color: "#1a2a6c", fontSize: "14.5px" }}
                >
                  {item.label}
                </Link>
                {(item.children || item.megaColumns) && (
                  <button
                    onClick={() => {
                      setMobileExpanded(mobileExpanded === item.href ? null : item.href);
                      setMobileMegaExpanded(null);
                    }}
                    aria-label="Expand"
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      color: "#1a2a6c",
                      fontSize: "16px",
                      padding: "0 4px",
                    }}
                  >
                    {mobileExpanded === item.href ? "−" : "+"}
                  </button>
                )}
              </div>

              {/* Mobile: simple dropdown */}
              {mobileExpanded === item.href && item.children && !item.megaColumns && (
                <div style={{ paddingBottom: "8px" }}>
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        display: "block",
                        padding: "7px 16px",
                        fontSize: "13.5px",
                        color: "#555",
                        borderBottom: "1px solid #f4f4f8",
                      }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}

              {/* Mobile: mega menu columns — each category is its own accordion */}
              {mobileExpanded === item.href && item.megaColumns && (
                <div style={{ paddingBottom: "8px" }}>
                  {item.megaColumns.map((col) => {
                    const megaKey = `${item.href}::${col.category}`;
                    const isCatOpen = mobileMegaExpanded === megaKey;
                    return (
                      <div key={col.category}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: "6px",
                            background: "#f0f4ff",
                            borderRadius: "4px",
                            margin: "4px 0 2px",
                          }}
                        >
                          <Link
                            href={col.href}
                            onClick={() => setMobileOpen(false)}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "6px",
                              flex: 1,
                              padding: "8px 12px",
                              fontWeight: 700,
                              fontSize: "13px",
                              color: "#1a2a6c",
                            }}
                          >
                            <span>{col.icon}</span> {col.category}
                          </Link>
                          <button
                            onClick={() => setMobileMegaExpanded(isCatOpen ? null : megaKey)}
                            aria-label={isCatOpen ? `Collapse ${col.category}` : `Expand ${col.category}`}
                            aria-expanded={isCatOpen}
                            style={{
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                              color: "#1a2a6c",
                              fontSize: "16px",
                              padding: "8px 12px",
                              lineHeight: 1,
                            }}
                          >
                            {isCatOpen ? "−" : "+"}
                          </button>
                        </div>
                        {isCatOpen && col.items.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setMobileOpen(false)}
                            style={{
                              display: "block",
                              padding: "5px 24px",
                              fontSize: "12.5px",
                              color: "#555",
                              borderBottom: "1px solid #f4f4f8",
                            }}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}

          <div style={{ display: "flex", gap: "10px", marginTop: "14px" }}>
            <Link href="/pricing/" onClick={() => setMobileOpen(false)} style={{ flex: 1, textAlign: "center", padding: "10px", border: "2px solid #1a2a6c", color: "#1a2a6c", borderRadius: "4px", fontWeight: 600, fontSize: "14px" }}>
              Pricing
            </Link>
            <Link href="/order-now/" onClick={() => setMobileOpen(false)} style={{ flex: 1, textAlign: "center", padding: "10px", background: "#b85812", color: "#fff", borderRadius: "4px", fontWeight: 700, fontSize: "14px" }}>
              Order Now
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        /* Desktop nav – hide on mobile */
        .hdr-desktop      { display: flex; }
        .hdr-hamburger    { display: none !important; }
        .hdr-mobile-panel { display: none; }
        .hdr-pricing-btn  { display: inline-flex; }

        @media (max-width: 1060px) {
          .hdr-desktop     { display: none !important; }
          .hdr-hamburger   { display: block !important; }
          .hdr-pricing-btn { display: none !important; }
          .hdr-mobile-panel.open { display: block; }
        }

        /* Nav link hover */
        .hdr-nav-link:hover {
          color: #e87722 !important;
          background: #fff8f4 !important;
        }
        .hdr-nav-link.active-link {
          color: #e87722 !important;
        }

        /* Mega dropdown hover items */
        .mega-sub-link:hover {
          color: #e87722 !important;
          padding-left: 18px !important;
        }
        .dropdown-link:hover {
          background: #fff8f4 !important;
          color: #e87722 !important;
        }
      `}</style>
    </header>
  );
}

/* ── Single nav entry (handles mega + simple dropdown) ── */
function NavEntry({
  item,
  open,
  onOpen,
  onClose,
  onKeepOpen,
  onSelect,
}: {
  item: NavItem;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  onKeepOpen: () => void;
  onSelect: () => void;
}) {
  const hasMega = !!item.megaColumns;
  const hasDropdown = !hasMega && !!item.children?.length;

  return (
    <li
      style={{ position: hasMega ? "static" : "relative" }}
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      {/* Top-level link */}
      <Link
        href={item.href}
        className="hdr-nav-link"
        onClick={onSelect}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "3px",
          padding: "8px 11px",
          fontSize: "13.5px",
          fontWeight: 600,
          color: "#1a2a6c",
          borderRadius: "4px",
          whiteSpace: "nowrap",
          transition: "color 0.15s, background 0.15s",
        }}
      >
        {item.label}
        {(hasMega || hasDropdown) && (
          <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" style={{ opacity: 0.55, marginTop: "1px", transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "none" }}>
            <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          </svg>
        )}
      </Link>

      {/* ── MEGA MENU ── */}
      {hasMega && open && (
        <div
          onMouseEnter={onKeepOpen}
          onMouseLeave={onClose}
          style={{
            // Anchored to the sticky <header> (its containing block), so the
            // panel always hugs the header bottom — scrolled or not.
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "#fff",
            boxShadow: "0 8px 32px rgba(0,0,0,0.13)",
            borderTop: "3px solid #e87722",
            zIndex: 300,
            padding: "0",
          }}
        >
          {/* Header strip */}
          <div style={{ background: "#1a2a6c", padding: "10px 40px" }}>
            <Link
              href={item.href}
              onClick={onSelect}
              style={{ color: "#fff", fontWeight: 700, fontSize: "14px", display: "flex", alignItems: "center", gap: "8px" }}
            >
              📋 View All Services →
            </Link>
          </div>

          {/* 6-column grid */}
          <div style={{
            maxWidth: "1260px",
            margin: "0 auto",
            padding: "24px 30px",
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "0",
          }}>
            {item.megaColumns!.map((col, colIdx) => (
              <div
                key={col.category}
                style={{
                  borderRight: colIdx < item.megaColumns!.length - 1 ? "1px solid #eef0f8" : "none",
                  padding: "0 16px",
                }}
              >
                {/* Category heading */}
                <Link
                  href={col.href}
                  onClick={onSelect}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    marginBottom: "10px",
                    color: "#1a2a6c",
                    fontWeight: 700,
                    fontSize: "13px",
                    borderBottom: "2px solid #e87722",
                    paddingBottom: "8px",
                  }}
                >
                  <span style={{ fontSize: "1rem" }}>{col.icon}</span>
                  {col.category}
                </Link>

                {/* Sub-items */}
                {col.items.map((sub) => (
                  <Link
                    key={sub.label}
                    href={sub.href}
                    onClick={onSelect}
                    className="mega-sub-link"
                    style={{
                      display: "block",
                      padding: "5px 0",
                      fontSize: "12.5px",
                      color: "#444",
                      borderBottom: "1px solid #f4f5fb",
                      transition: "color 0.15s, padding-left 0.15s",
                    }}
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── SIMPLE DROPDOWN ── */}
      {hasDropdown && open && (
        <div
          onMouseEnter={onKeepOpen}
          onMouseLeave={onClose}
          style={{
            position: "absolute",
            top: "calc(100% + 2px)",
            left: "0",
            background: "#fff",
            border: "1px solid #dde2ef",
            borderTop: "3px solid #e87722",
            borderRadius: "0 0 6px 6px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.11)",
            minWidth: "220px",
            zIndex: 300,
            padding: "6px 0",
          }}
        >
          {item.children!.map((child) => (
            <Link
              key={child.label}
              href={child.href}
              onClick={onSelect}
              className="dropdown-link"
              style={{
                display: "block",
                padding: "9px 18px",
                fontSize: "13px",
                color: "#333",
                borderBottom: "1px solid #f4f5fb",
                transition: "background 0.12s, color 0.12s",
              }}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}
