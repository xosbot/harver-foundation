import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harver Technologies | Pioneering Wireless Energy Harvesting",
  description: "Energy Harvested. Intelligence Amplified. Humanity Elevated. The definitive architect of tomorrow with 35+ integrated technology verticals.",
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
