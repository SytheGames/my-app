import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";
const defaultSocialImage = "/mockup.png";
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kealey Design | Web Design Chatham, Ontario",
    template: "%s | Kealey Design",
  },
  description:
    "Kealey Design is a local web design agency in Chatham, Ontario serving Southwestern Ontario with custom websites, local SEO, and conversion-focused development.",
  keywords: [
    "web design Chatham",
    "web design Chatham Ontario",
    "web design agency Chatham",
    "website design Southwestern Ontario",
    "local SEO Chatham",
    "Kealey Design",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Kealey Design | Web Design Chatham, Ontario",
    description:
      "Custom website design, development, and local SEO services for businesses in Chatham and Southwestern Ontario.",
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
    title: "Kealey Design | Web Design Chatham, Ontario",
    description:
      "Local web design and SEO services for Chatham and Southwestern Ontario businesses.",
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
  const hasGa = Boolean(gaMeasurementId);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      {hasGa ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaMeasurementId}', { page_path: window.location.pathname });`}
          </Script>
        </>
      ) : null}
    </html>
  );
}
