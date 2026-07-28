"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// EnquiryModal (plus its Recaptcha + countries-list dependencies) only ever
// shows 7s after landing, or on demand — it doesn't need to be in every
// page's initial JS bundle. Loading it as a separate chunk keeps that
// weight off the critical path.
const EnquiryModal = dynamic(() => import("@/components/ui/EnquiryModal"), { ssr: false });

export default function LazyEnquiryModal() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Don't even start fetching the modal's chunk (and its reCAPTCHA script)
    // until the browser is idle — keeps that ~450KB off the critical path.
    const w = window as Window & { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number };
    if (w.requestIdleCallback) {
      const id = w.requestIdleCallback(() => setReady(true), { timeout: 3000 });
      return () => (window as unknown as { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback?.(id);
    }
    const t = setTimeout(() => setReady(true), 2000);
    return () => clearTimeout(t);
  }, []);

  return ready ? <EnquiryModal /> : null;
}
