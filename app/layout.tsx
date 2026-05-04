import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Bodoni_Moda, Manrope } from "next/font/google";

import "./globals.css";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans"
});

const serif = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"]
});

export const metadata: Metadata = {
  title: {
    default: "Aureon",
    template: "%s | Aureon"
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-64x64.png", sizes: "64x64", type: "image/png" }
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.png"
  },
  manifest: "/site.webmanifest",
  description:
    "Aureon builds minimal websites, business systems, dashboards, and growth-ready digital experiences."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${serif.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
