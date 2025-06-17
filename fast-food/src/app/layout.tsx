// app/layout.tsx

import { Geist, Geist_Mono } from "next/font/google";
import { Lobster } from 'next/font/google'
import "./globals.css";
import type { Metadata } from 'next'
import MainLayout from "@/components/MainLayout";

export const metadata: Metadata = {
  title: "Foodgo - Order your favourite food",
  description: "Order your favourite food with Foodgo",
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Foodgo',
  },
};

const lobster = Lobster({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lobster',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={`${geistSans.variable} ${geistMono.variable} ${lobster.variable} antialiased`}>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
