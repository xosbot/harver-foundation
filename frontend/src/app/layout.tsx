import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://harver-foundation.vercel.app"),
  title: {
    default: "Harver Foundation | Pioneering Wireless Energy Harvesting",
    template: "%s | Harver Foundation",
  },
  description:
    "Energy Harvested. Intelligence Amplified. Humanity Elevated. Harver Foundation pioneers wireless energy harvesting across 35+ integrated technology verticals in 14 countries.",
  keywords: [
    "wireless energy harvesting",
    "WEH",
    "energy technology",
    "sustainable energy",
    "Harver",
    "deep tech",
    "RF energy harvesting",
    "IoT",
  ],
  authors: [{ name: "Harver Foundation" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://harver-foundation.vercel.app",
    siteName: "Harver Foundation",
    title: "Harver Foundation | Pioneering Wireless Energy Harvesting",
    description:
      "Energy Harvested. Intelligence Amplified. Humanity Elevated. The definitive architect of tomorrow with 35+ integrated technology verticals.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Harver Foundation — Wireless Energy Harvesting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harver Foundation | Pioneering Wireless Energy Harvesting",
    description:
      "Energy Harvested. Intelligence Amplified. Humanity Elevated.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,700,800&f[]=satoshi@400,500,700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col bg-[#030303] text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
