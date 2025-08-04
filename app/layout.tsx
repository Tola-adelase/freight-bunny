import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "../components/ui/toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FreightBunny - Fast UK ↔ Nigeria Shipping",
  description: "Fast, reliable, and affordable shipping between the UK and Nigeria. Transparent pricing from £9/kg, real-time tracking, and personal service.",
  keywords: "UK Nigeria shipping, international courier, freight services, package delivery, air freight",
  openGraph: {
    title: "FreightBunny - Fast UK ↔ Nigeria Shipping",
    description: "Fast, reliable, and affordable shipping between the UK and Nigeria. Transparent pricing from £9/kg.",
    type: "website",
  },
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
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
