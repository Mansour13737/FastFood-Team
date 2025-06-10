import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Lobster } from 'next/font/google'
import GlobalLoading from "@/components/GlobalLoading";
import { Metadata } from "next";
interface Meta {
    title: string;
    description: string;
    viewport: {
        width: string;
        initialScale: number;
        maximumScale: number;
        userScalable: boolean;
      }
      themeColor : string;
      manifest: string;
       appleWebApp: {
    capable: boolean,
    statusBarStyle: string,
    title: string,
  },
  
  };

export const metadata : Meta = {
  title: "Foodgo - Order your favourite food",
  description: "Order your favourite food with Foodgo",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  themeColor: '#ffffff',
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
        <GlobalLoading />
        {children}
      </body>
    </html>
  );
}
