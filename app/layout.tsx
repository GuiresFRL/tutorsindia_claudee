import type { Metadata } from "next";
import Script from "next/script";
import { Merriweather, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import LazyEnquiryModal from "@/components/ui/LazyEnquiryModal";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-merriweather",
  display: "swap",
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-source-sans",
  display: "swap",
});

const siteUrl = "https://tutorsindia.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Masters/MBA Dissertation Writing and Editing Services",
    template: "%s",
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
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Tutors India",
    title: "Masters/MBA Dissertation Writing and Editing Services",
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
    title: "Masters/MBA Dissertation Writing and Editing Services",
    description: "Expert academic writing services — dissertations, assignments, statistical analysis. Trusted by 10,000+ scholars since 2001.",
    images: ["/tutorsindia-logo-hd.jpg"],
    creator: "@TutorsIndia",
    site: "@TutorsIndia",
  },
  alternates: {
    canonical: "https://www.tutorsindia.com",
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
    <html lang="en-GB" className={`${merriweather.variable} ${sourceSans3.variable}`}>
      <head>
        {/* Preconnect only to the origins needed early — Tawk.to/Clarity load lazily, so preconnecting them now would be wasted */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://www.gstatic.com" crossOrigin="anonymous" />

        {/* Google Tag Manager — deferred until after hydration so it doesn't compete with the critical render path */}
        <Script id="gtm-loader" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WF2X4DP');
        ` }} />
        {/* End Google Tag Manager */}

        {/* Microsoft Clarity — session-recording analytics, safe to load once the page is idle */}
        <Script id="clarity-loader" strategy="lazyOnload" dangerouslySetInnerHTML={{ __html: `
(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "cmdaycrfv8");
        ` }} />

        {/* Google tag (gtag.js) — deferred until after hydration */}
        <Script id="gtag-src" strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=AW-11160128987" />
        <Script id="gtag-init" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

/* Google Ads */
gtag('config', 'AW-11160128987');

/* Google Analytics 4 */
gtag('config', 'G-5PEN58CJ4F');
        ` }} />

        {/* Charset & viewport */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Preload LCP element — logo is the first painted image on every page */}
        <link rel="preload" as="image" href="/tutorsindia-logo-hd.webp" type="image/webp" fetchPriority="high" />
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://tutorsindia.com/#organization",
              "name": "Tutors India",
              "url": "https://tutorsindia.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://tutorsindia.com/tutorsindia-logo-hd.jpg",
                "width": 200,
                "height": 200
              },
              "description": "Tutors India provides expert Masters, MBA and PhD dissertation writing, editing, statistics and coding services. Trusted by 200,000+ scholars since 2001.",
              "foundingDate": "2001",
              "address": [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "10, Kutty Street, Nungambakkam",
                  "addressLocality": "Chennai",
                  "postalCode": "600034",
                  "addressCountry": "IN"
                },
                {
                  "@type": "PostalAddress",
                  "addressLocality": "Manchester",
                  "addressCountry": "GB"
                }
              ],
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+44-1143520021",
                  "contactType": "customer service",
                  "areaServed": "GB"
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+91-8754446690",
                  "contactType": "customer service",
                  "areaServed": "IN"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/TutorsIndia",
                "https://twitter.com/TutorsIndia",
                "https://www.linkedin.com/company/tutors-india",
                "https://www.instagram.com/tutors_india/",
                "https://www.youtube.com/channel/UCM7QdIYgF7vWMhgMZuwyfrg/"
              ]
            },
            {
              "@type": "WebSite",
              "@id": "https://tutorsindia.com/#website",
              "url": "https://tutorsindia.com",
              "name": "Tutors India",
              "publisher": { "@id": "https://tutorsindia.com/#organization" },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://tutorsindia.com/blog/?s={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          ]
        })}} />
      </head>
      <body style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WF2X4DP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <TopBar />
        <Header />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />

        {/* Floating call button — above WhatsApp */}
        <FloatingCallButton />

        {/* Global "Enquire Now" popup — opened from any page via the OPEN_ENQUIRY_EVENT custom event */}
        <LazyEnquiryModal />

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

// WP content post-processing: hide filter, style meta box, style tags, hide Share This
(function(){
  function processWPContent(){
    // 1. Hide FILTER BY sidebar column
    document.querySelectorAll('.wp-content *').forEach(function(el){
      if(el.children.length===0 && el.textContent && el.textContent.trim().toUpperCase().includes('FILTER BY')){
        var node=el;
        while(node && node.parentElement){
          node=node.parentElement;
          if(node.classList && node.classList.contains('elementor-column')){
            node.style.setProperty('display','none','important');
            break;
          }
        }
      }
    });

    // 2. Find the meta info section (contains "Info:" heading) — walk up to its top-level inner-section
    var metaSection=null;
    document.querySelectorAll('.wp-content .elementor-heading-title').forEach(function(el){
      if(!metaSection && el.textContent && el.textContent.trim().startsWith('Info:')){
        var node=el;
        // Walk up to find the highest elementor-inner-section ancestor (the whole meta block)
        var found=null;
        while(node && node.parentElement){
          node=node.parentElement;
          if(node.classList && node.classList.contains('elementor-inner-section')) found=node;
          // Stop at the top-level elementor element
          if(node.classList && node.classList.contains('elementor') && !node.classList.contains('elementor-element')) break;
        }
        if(found) metaSection=found;
      }
    });
    if(metaSection){
      metaSection.style.cssText='background:#f5f7fb;border:1px solid #dde2ef;border-radius:8px;padding:14px 18px;margin-bottom:1.4em;display:block;';
    }

    // 3. Process all heading titles: hide "Share this:", style tag pills
    var afterTagged=false;
    document.querySelectorAll('.wp-content .elementor-heading-title').forEach(function(el){
      var t=(el.textContent||'').trim();

      // Hide "Share this:" and everything after it in same widget-wrap
      if(t.toLowerCase().startsWith('share this')){
        var node=el;
        while(node && node.parentElement){
          node=node.parentElement;
          if(node.classList && node.classList.contains('elementor-widget')){
            node.style.setProperty('display','none','important');
            var sib=node.nextElementSibling;
            while(sib){ sib.style.setProperty('display','none','important'); sib=sib.nextElementSibling; }
            break;
          }
        }
        afterTagged=false;
        return;
      }

      // Mark that we are now after "Tagged:"
      if(t.toLowerCase().startsWith('tagged')){
        afterTagged=true;
        return;
      }

      // Style spans that come after Tagged: as dark navy pills
      if(afterTagged && t && !t.startsWith('Info:') && !t.startsWith('Published:')){
        el.style.cssText='display:inline-block;padding:3px 14px;background:#1a2a6c;color:#fff;border-radius:4px;font-size:0.82rem;font-weight:600;line-height:1.8;margin:2px 3px 0 0;';
        afterTagged=false; // reset after first pill (one tag per block)
      }
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',processWPContent);
  else processWPContent();
})();
        `}} />

        {/* Tawk.to live chat widget — same account used on tutorsindia.com */}
        <Script
          id="tawkto-loader"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{ __html: `
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
  s1.async=true;
  s1.src='https://embed.tawk.to/679b32f93a842732607721d7/1iir3u863';
  s1.charset='UTF-8';
  s1.setAttribute('crossorigin','*');
  s0.parentNode.insertBefore(s1,s0);
})();
          `}}
        />

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
