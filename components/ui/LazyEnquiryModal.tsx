"use client";

import dynamic from "next/dynamic";

// EnquiryModal (plus its Recaptcha + countries-list dependencies) only ever
// shows 7s after landing, or on demand — it doesn't need to be in every
// page's initial JS bundle. Loading it as a separate chunk keeps that
// weight off the critical path.
const EnquiryModal = dynamic(() => import("@/components/ui/EnquiryModal"), { ssr: false });

export default function LazyEnquiryModal() {
  return <EnquiryModal />;
}
