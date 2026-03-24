import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "U S Floors | Engineered Flooring. Built for Performance.",
  description: "Reseller and installer of FLEXI raised access flooring systems. Complete solutions for commercial spaces, offices, and data centers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col selection:bg-[var(--color-accent)] selection:text-white`}>
        <SmoothScroll>
          <Navbar />
          <div className="flex-1 w-full flex flex-col">{children}</div>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
