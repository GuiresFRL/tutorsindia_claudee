"use client";

import { useEffect, useRef, useId } from "react";

declare global {
  interface Window {
    grecaptcha?: {
      render: (
        container: string | HTMLElement,
        params: { sitekey: string; callback: (token: string) => void; "expired-callback"?: () => void }
      ) => number;
      reset: (id?: number) => void;
    };
    __onRecaptchaLoad?: () => void;
  }
}

const SCRIPT_ID = "recaptcha-script";

interface RecaptchaProps {
  onChange: (token: string | null) => void;
}

export default function Recaptcha({ onChange }: RecaptchaProps) {
  const containerId = useId().replace(/:/g, "");
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<number | null>(null);

  useEffect(() => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (!siteKey || !containerRef.current) return;

    const renderWidget = () => {
      if (!window.grecaptcha || !containerRef.current || widgetId.current !== null) return;
      widgetId.current = window.grecaptcha.render(containerRef.current, {
        sitekey: siteKey,
        callback: (token: string) => onChange(token),
        "expired-callback": () => onChange(null),
      });
    };

    if (window.grecaptcha) {
      renderWidget();
    } else if (!document.getElementById(SCRIPT_ID)) {
      window.__onRecaptchaLoad = renderWidget;
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = "https://www.google.com/recaptcha/api.js?onload=__onRecaptchaLoad&render=explicit";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    } else {
      // Script tag exists but grecaptcha not ready yet — wait for the shared onload.
      const prev = window.__onRecaptchaLoad;
      window.__onRecaptchaLoad = () => { prev?.(); renderWidget(); };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Reserve the standard reCAPTCHA v2 checkbox widget's rendered size (78px
  // tall) before grecaptcha.render() fills it in — otherwise the surrounding
  // layout (e.g. the auto-popup enquiry modal) jumps when the async script
  // finishes loading, which shows up as a real-user CLS shift.
  return <div ref={containerRef} id={`recaptcha-${containerId}`} style={{ minHeight: 78 }} />;
}
