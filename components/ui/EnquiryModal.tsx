"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// Any component can still open this modal on demand:
//   window.dispatchEvent(new Event(OPEN_ENQUIRY_EVENT))
// By default the modal auto-opens on an intent signal (scroll depth or exit
// intent) rather than a flat timer — see the auto-open effect below.
export const OPEN_ENQUIRY_EVENT = "tutorsindia:open-enquiry";

// Show the auto-popup once per browser session, not on every page navigation.
const SESSION_KEY = "tutorsindia_enquiry_shown";

// Trigger thresholds for the intent-based auto-popup.
const SCROLL_DEPTH_TRIGGER = 0.5; // 50% down the page
const EXIT_INTENT_ARM_DELAY_MS = 2000; // ignore stray cursor-near-top moves right after load
const FLAT_TIMER_MS = 3000; // fallback: show after 3s even with no scroll/exit signal
const TAB_HIDDEN_ARM_DELAY_MS = 2000; // mobile has no mouse exit-intent — treat backgrounding the tab as the equivalent "leaving" signal

const ZOHO_IFRAME_ID = "ziframe_921158";
const ZOHO_FORM_SRC =
  "https://forms.zohopublic.com/guiressolutions1/form/ContactFormpopup/formperma/ZzD2uuRUF3ThNcFRA5bWSqYlnWGTacg0brk43YDykU0";

export default function EnquiryModal() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Manual open trigger (kept for any future button/link that wants to open it directly)
  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(OPEN_ENQUIRY_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_ENQUIRY_EVENT, onOpen);
  }, []);

  // Auto-open on an intent signal — whichever fires first:
  //   1. Scroll depth: the visitor has scrolled past SCROLL_DEPTH_TRIGGER of
  //      the page, i.e. they're actually reading/engaging, not bouncing.
  //   2. Exit intent (desktop): the cursor leaves through the top of the
  //      viewport, the classic "about to close the tab" signal.
  //   3. Tab hidden (mobile/tablet): there's no mouse to read exit-intent
  //      from on touch devices, so backgrounding the tab — switching apps,
  //      going home, opening a new tab — is the closest equivalent signal.
  //   4. Flat timer: a 3s fallback so the popup still reaches visitors who
  //      don't scroll and don't leave (e.g. they just sit and read).
  // Once per browser session, not on every page navigation.
  useEffect(() => {
    let alreadyShown = false;
    try { alreadyShown = sessionStorage.getItem(SESSION_KEY) === "1"; } catch {}
    if (alreadyShown) return;

    const trigger = () => {
      setOpen(true);
      try { sessionStorage.setItem(SESSION_KEY, "1"); } catch {}
      cleanup();
    };

    const onScroll = () => {
      const doc = document.documentElement;
      const scrolled = window.scrollY + window.innerHeight;
      const depth = doc.scrollHeight > 0 ? scrolled / doc.scrollHeight : 0;
      if (depth >= SCROLL_DEPTH_TRIGGER) trigger();
    };

    let exitIntentArmed = false;
    const exitArmTimer = setTimeout(() => { exitIntentArmed = true; }, EXIT_INTENT_ARM_DELAY_MS);
    const onMouseOut = (e: MouseEvent) => {
      if (exitIntentArmed && e.clientY <= 0 && !e.relatedTarget) trigger();
    };

    let tabHiddenArmed = false;
    const tabHiddenArmTimer = setTimeout(() => { tabHiddenArmed = true; }, TAB_HIDDEN_ARM_DELAY_MS);
    const onVisibilityChange = () => {
      if (tabHiddenArmed && document.visibilityState === "hidden") trigger();
    };

    const flatTimer = setTimeout(trigger, FLAT_TIMER_MS);

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mouseout", onMouseOut);
    document.addEventListener("visibilitychange", onVisibilityChange);

    function cleanup() {
      clearTimeout(exitArmTimer);
      clearTimeout(tabHiddenArmTimer);
      clearTimeout(flatTimer);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseout", onMouseOut);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    }

    return cleanup;
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

  // Zoho appends the page the visitor came from as a `referrername` query
  // param on the iframe src, once, right after it mounts — mirrors the
  // embed snippet Zoho provides, translated to a React effect instead of an
  // inline <script> (which JSX won't execute).
  useEffect(() => {
    if (!open) return;
    try {
      const zfFrame = document.getElementById(ZOHO_IFRAME_ID) as HTMLIFrameElement | null;
      if (!zfFrame) return;
      let ifrmSrc = zfFrame.src;
      if (!/[?&]referrername=/.test(ifrmSrc)) {
        let rfr = window.location.href;
        try {
          rfr =
            window.self !== window.top
              ? (window.top as Window).location.href
              : /^https?:\/\/[\w.-]+\.[a-zA-Z]{2,}/i.test(rfr)
              ? rfr
              : "";
        } catch {}
        if (rfr) {
          if (rfr.length > 1800) {
            const queryIndex = rfr.indexOf("?");
            if (queryIndex > -1) rfr = rfr.substring(0, queryIndex);
            if (rfr.length > 1800) rfr = rfr.substring(0, 1800);
          }
          ifrmSrc += (ifrmSrc.indexOf("?") > 0 ? "&" : "?") + "referrername=" + encodeURIComponent(rfr);
        }
      }
      if (zfFrame.src !== ifrmSrc) zfFrame.src = ifrmSrc;
    } catch {}
  }, [open]);

  if (!open) return null;

  const close = () => setOpen(false);

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
          borderRadius: "16px",
          boxShadow: "0 24px 64px rgba(0,0,0,0.45)",
        }}
      >
        {/* Close button — sibling of the scrollable content, not clipped by its overflow */}
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
            zIndex: 1,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 2l12 12M14 2L2 14" stroke="#1a2a6c" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div
          className="eq-scroll"
          style={{
            maxHeight: "calc(100vh - 48px)",
            overflowY: "auto",
            borderRadius: "16px",
          }}
        >
          <iframe
            id={ZOHO_IFRAME_ID}
            aria-label="Contact Form popup"
            className="eq-iframe"
            frameBorder={0}
            style={{ height: "600px", width: "100%", display: "block", border: "none" }}
            src={ZOHO_FORM_SRC}
          />
        </div>
      </div>

      {/* Compact mode — triggers on narrow width OR short height, so it covers
          mobile portrait, mobile landscape, and short/small-height desktop
          browser windows with one rule, not just one axis. */}
      <style>{`
        @media (max-width: 480px), (max-height: 700px) {
          .eq-overlay { padding: 16px !important; }
          .eq-panel { max-height: calc(100vh - 32px) !important; }
          .eq-scroll { max-height: calc(100vh - 32px) !important; }
          .eq-close { top: -12px !important; right: -12px !important; width: 32px !important; height: 32px !important; }
          .eq-iframe { height: 420px !important; }
        }
      `}</style>
    </div>
  );
}
