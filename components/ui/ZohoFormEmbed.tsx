"use client";

import { useEffect } from "react";

interface Props {
  id: string;
  src: string;
  ariaLabel: string;
  height?: number;
}

// Renders a Zoho Forms iframe and tags its src with a `referrername` query
// param pointing at the page it's embedded on — mirrors the embed snippet
// Zoho provides, translated to a React effect instead of an inline <script>
// (which JSX won't execute).
export default function ZohoFormEmbed({ id, src, ariaLabel, height = 500 }: Props) {
  useEffect(() => {
    try {
      const zfFrame = document.getElementById(id) as HTMLIFrameElement | null;
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
  }, [id]);

  return (
    <iframe
      id={id}
      aria-label={ariaLabel}
      frameBorder={0}
      style={{ height: `${height}px`, width: "99%", border: "none", display: "block" }}
      src={src}
    />
  );
}
