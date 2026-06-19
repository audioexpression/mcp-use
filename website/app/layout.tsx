import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Barlow_Condensed } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Bali Bulldogs FC | We Never Walk Alone",
  description:
    "Bali's leading football community. 450+ players across Junior, Adult, Masters and Women's teams. Founded 2020. Based at The Bulldogs Arena.",
  keywords: ["Bali Bulldogs", "football club", "Bali FC", "soccer Bali", "Bali football"],
  openGraph: {
    title: "Bali Bulldogs FC",
    description: "We Never Walk Alone — Bali's #1 football community.",
    url: "https://www.balibulldogsfc.com",
    siteName: "Bali Bulldogs FC",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${barlow.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
