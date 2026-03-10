import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Kealey Design | Web Design Chatham, Ontario",
    description:
      "Local web design and SEO services for Chatham and Southwestern Ontario businesses.",
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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
