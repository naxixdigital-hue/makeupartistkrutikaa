import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Professional Makeup Artist | Bridal & Party Makeup',
  description: 'Book professional makeup services for weddings & events.',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'Professional Makeup Artist',
    description: 'Bridal & party makeup services',
    url: 'https://makeupartistkrutikaa.com',
    siteName: 'Professional Makeup Artist',
    images: [
      {
        url: '/shalaka.JPG',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
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
        {children}
      </body>
    </html>
  );
}
