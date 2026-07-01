import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const siteUrl = "https://tutorsindia.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Masters/MBA Dissertation Writing and Editing Services | Tutors India",
    template: "%s | Tutors India",
  },
  description: "Tutors India provides expert Masters, MBA and PhD dissertation writing, editing, statistics and coding services. Trusted by 200,000+ scholars since 2001.",
  keywords: [
    "dissertation writing services",
    "Masters dissertation",
    "PhD dissertation",
    "academic writing",
    "UK dissertation help",
    "MBA dissertation writing",
    "statistical analysis",
    "editing services",
    "Tutors India",
  ],
  authors: [{ name: "Tutors India", url: siteUrl }],
  creator: "Tutors India",
  publisher: "Tutors India",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Tutors India",
    title: "Masters/MBA Dissertation Writing and Editing Services | Tutors India",
    description: "Tutors India provides expert Masters, MBA and PhD dissertation writing, editing, statistics and coding services. Trusted by 200,000+ scholars since 2001.",
    url: siteUrl,
    images: [
      {
        url: "/tutorsindia-logo-hd.jpg",
        width: 800,
        height: 600,
        alt: "Tutors India — Academic Writing Services Since 2001",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Masters/MBA Dissertation Writing and Editing Services | Tutors India",
    description: "Expert academic writing services — dissertations, assignments, statistical analysis. Trusted by 2,00,000+ scholars since 2001.",
    images: ["/tutorsindia-logo-hd.jpg"],
    creator: "@TutorsIndia",
    site: "@TutorsIndia",
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/tutorsindia-logo-hd.jpg",
    apple: "/tutorsindia-logo-hd.jpg",
  },
  category: "education",
  classification: "Academic Writing Services",
  other: {
    "geo.region": "GB",
    "geo.placename": "Manchester",
    "geo.position": "53.483959;-2.244644",
    "ICBM": "53.483959, -2.244644",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        {/* Global noindex, nofollow — explicit meta tag for maximum compatibility */}
        <meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="googlebot" content="noindex, nofollow" />
        <meta name="bingbot" content="noindex, nofollow" />
        {/* Charset & viewport */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Site verification placeholders — add actual codes when available */}
        {/* <meta name="google-site-verification" content="YOUR_CODE" /> */}
      </head>
      <body style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <TopBar />
        <Header />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />

        {/* Floating call button — above WhatsApp */}
        <FloatingCallButton />

        {/* Elementor tabs initializer */}
        <script dangerouslySetInnerHTML={{ __html: `
(function(){
  function initTabs(){
    document.querySelectorAll('.wp-content .elementor-tabs').forEach(function(el){
      var titles = el.querySelectorAll('.elementor-tab-title.elementor-tab-desktop-title');
      var contents = el.querySelectorAll('.elementor-tab-content');
      if(!titles.length || !contents.length) return;
      // activate first tab, hide rest
      titles[0].setAttribute('aria-selected','true');
      contents.forEach(function(c,i){ c.style.setProperty('display', i===0?'block':'none','important'); });
      titles.forEach(function(title){
        title.addEventListener('click',function(){
          var tab = this.getAttribute('data-tab');
          titles.forEach(function(t){ t.setAttribute('aria-selected', t.getAttribute('data-tab')===tab?'true':'false'); });
          contents.forEach(function(c){ c.style.setProperty('display', c.getAttribute('data-tab')===tab?'block':'none','important'); });
        });
      });
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',initTabs);
  else initTabs();
})();
        `}} />

        {/* WhatsApp floating button — bottom left */}
        <a
          href="https://wa.me/918754446690"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="wa-float"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="#fff">
            <path d="M16 2C8.268 2 2 8.268 2 16c0 2.478.666 4.797 1.824 6.795L2 30l7.385-1.797A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.45 11.45 0 01-5.824-1.594l-.418-.248-4.381 1.066 1.1-4.258-.272-.437A11.46 11.46 0 014.5 16C4.5 9.649 9.649 4.5 16 4.5S27.5 9.649 27.5 16 22.351 27.5 16 27.5zm6.29-8.61c-.344-.172-2.035-1.003-2.35-1.118-.316-.115-.546-.172-.776.172-.23.344-.891 1.118-1.093 1.348-.2.23-.402.258-.746.086-.344-.172-1.453-.536-2.767-1.708-1.022-.913-1.712-2.04-1.912-2.384-.2-.344-.021-.53.15-.701.155-.155.344-.402.516-.603.172-.2.23-.344.344-.574.115-.23.058-.43-.029-.603-.086-.172-.776-1.87-1.063-2.561-.28-.672-.563-.58-.776-.591l-.66-.011c-.23 0-.603.086-.919.43-.316.344-1.207 1.18-1.207 2.878s1.236 3.338 1.408 3.568c.172.23 2.433 3.713 5.895 5.207.824.356 1.467.569 1.969.728.827.263 1.58.226 2.175.137.663-.1 2.035-.832 2.322-1.635.287-.803.287-1.491.2-1.635-.086-.144-.316-.23-.66-.402z"/>
          </svg>
        </a>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
