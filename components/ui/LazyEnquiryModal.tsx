"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { OPEN_ENQUIRY_EVENT } from "@/components/ui/enquiryEvent";

// EnquiryModal only ever shows on demand (the floating Enquire button), so it
// doesn't need to be in every page's initial JS bundle. Loading it as a
// separate chunk keeps that weight off the critical path.
const EnquiryModal = dynamic(() => import("@/components/ui/EnquiryModal"), { ssr: false });

export default function LazyEnquiryModal() {
  const [ready, setReady] = useState(false);
  const [openOnMount, setOpenOnMount] = useState(false);

  useEffect(() => {
    // Preload the chunk once the browser is idle so the first click is instant.
    const w = window as Window & { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number };
    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    if (w.requestIdleCallback) idleId = w.requestIdleCallback(() => setReady(true), { timeout: 3000 });
    else timeoutId = setTimeout(() => setReady(true), 2000);

    // If the visitor clicks before the chunk has loaded, mount it now and have
    // it open itself — the event has already fired, so its own listener missed it.
    const onOpen = () => { setOpenOnMount(true); setReady(true); };
    window.addEventListener(OPEN_ENQUIRY_EVENT, onOpen);

    return () => {
      window.removeEventListener(OPEN_ENQUIRY_EVENT, onOpen);
      if (idleId !== undefined) (window as unknown as { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback?.(idleId);
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, []);

  return ready ? <EnquiryModal openOnMount={openOnMount} /> : null;
}
