import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca/";
const defaultSocialImage = "/mockup.png";
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Chatham Small Business Website Design | Kealey Design",
    template: "%s | Kealey Design",
  },
  description:
    "Kealey Design builds conversion-focused websites and local SEO systems for Chatham-Kent small businesses, service companies, and Southwestern Ontario brands.",
  keywords: [
    "web design Chatham",
    "web design Chatham Ontario",
    "web design agency Chatham",
    "website design Southwestern Ontario",
    "local SEO Chatham",
    "Kealey Design",
  ],
  alternates: {
    canonical: "https://www.kealeydesign.ca/",
  },
  openGraph: {
    type: "website",
    url: "https://www.kealeydesign.ca/",
    title: "Chatham Small Business Website Design | Kealey Design",
    description:
      "Conversion-focused website design, development, and local SEO services for businesses in Chatham-Kent and Southwestern Ontario.",
    siteName: "Kealey Design",
    locale: "en_CA",
    images: [
      {
        url: defaultSocialImage,
        width: 1200,
        height: 630,
        alt: "Kealey Design web design preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chatham Small Business Website Design | Kealey Design",
    description:
      "Local web design and SEO services for Chatham-Kent and Southwestern Ontario small businesses.",
    images: [defaultSocialImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#040404",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const hasGa = process.env.NODE_ENV === "production" && Boolean(gaMeasurementId);

  return (
    <html lang="en">
      <head>
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="https://js-na3.hs-scripts.com/343258132.js"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <SpeedInsights />
        <Script id="apollo-tracker" strategy="afterInteractive">
          {`
            function initApollo(){
              var n=Math.random().toString(36).substring(7),o=document.createElement("script");
              o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n;
              o.async=true;
              o.defer=true;
              o.onload=function(){window.trackingFunctions.onLoad({appId:"69b9b72bab33d10019f776e2"})};
              document.head.appendChild(o);
            }
            initApollo();
          `}
        </Script>
      {hasGa ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
            strategy="lazyOnload"
          />
          <Script id="ga4" strategy="lazyOnload">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaMeasurementId}');`}
          </Script>
        </>
      ) : null}
      <Script
        src="https://analytics.ahrefs.com/analytics.js"
        data-key="zY0lW59pLFIfWHcsJ4Z7Cg"
        strategy="afterInteractive"
      />
      </body>
    </html>
  );
}
