import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arova | Verified Purchase Reviews on Stellar",
  description: "Arova is a reusable Stellar eligibility layer that lets marketplaces accept one verified review per valid purchase without putting the buyer's wallet in the public review record.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#000000] text-[#8a8a8a] font-sans selection:bg-[#1f1f1f] selection:text-[#ffffff]">
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
