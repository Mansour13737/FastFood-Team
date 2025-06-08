import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Lobster } from 'next/font/google'
import GlobalLoading from "@/components/GlobalLoading";
import { metadata } from './metadata';

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
        <GlobalLoading />
        {children}
      </body>
    </html>
  );
}
