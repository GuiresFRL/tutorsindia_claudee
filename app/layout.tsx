import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
      </body>
    </html>
  );
}
