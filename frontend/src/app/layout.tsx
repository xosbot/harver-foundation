import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harver Technologies | Pioneering Wireless Energy Harvesting",
  description: "Energy Harvested. Intelligence Amplified. Humanity Elevated. The definitive architect of tomorrow with 35+ integrated technology verticals.",
  keywords: "Wireless Energy Harvesting, IoT, AI, Deep Tech, Smart Cities, Quantum Computing",
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
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col bg-[#050505] text-white">
        {children}
      </body>
    </html>
  );
}
