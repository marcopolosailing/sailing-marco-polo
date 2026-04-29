import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sailing Marco Polo — No fixed address. Always home.",
  description:
    "A four-year circumnavigation. One man. One dog. No plan. Follow the journey of Sailing Marco Polo as we set off on a voyage with no fixed address.",
  keywords: [
    "sailing",
    "circumnavigation",
    "adventure",
    "voyage",
    "ocean",
    "liveaboard",
    "sailing blog",
  ],
  openGraph: {
    title: "Sailing Marco Polo",
    description: "No fixed address. Always home.",
    url: "https://sailingmarcopolo.com",
    siteName: "Sailing Marco Polo",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-[#0A0F1A] text-[#F5EDD8]">
        {children}
      </body>
    </html>
  );
}
