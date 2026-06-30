"use client";

import { useEffect } from "react";

export default function ContactForm() {
  useEffect(() => {
    // Inject Zoho referrer script after iframe mounts
    const zfFrame = document.getElementById("ziframe_87381") as HTMLIFrameElement | null;
    if (!zfFrame) return;
    let ifrmSrc = zfFrame.src;
    if (!(/[?&]referrername=/.test(ifrmSrc))) {
      let rfr = window.location.href;
      try {
        rfr = window.self !== window.top
          ? window.top!.location.href
          : (/^https?:\/\/[\w.-]+\.[a-zA-Z]{2,}/i.test(rfr) ? rfr : "");
      } catch (e) {}
      if (rfr) {
        const queryIndex = rfr.indexOf("?");
        if (queryIndex > -1 && rfr.length > 1800) rfr = rfr.substring(0, queryIndex);
        if (rfr.length > 1800) rfr = rfr.substring(0, 1800);
        ifrmSrc += (ifrmSrc.indexOf("?") > 0 ? "&" : "?") + "referrername=" + encodeURIComponent(rfr);
      }
    }
    if (zfFrame.src !== ifrmSrc) zfFrame.src = ifrmSrc;
  }, []);

  return (
    <iframe
      id="ziframe_87381"
      aria-label="Contact Form"
      frameBorder={0}
      style={{ height: "600px", width: "100%", border: "none", display: "block" }}
      src="https://forms.zohopublic.com/guiressolutions1/form/ContactForm3/formperma/kG-dX5svNiZ1wPMx9Yoju0Md1G3W2JiACCsCWVcDGLY"
    />
  );
}
