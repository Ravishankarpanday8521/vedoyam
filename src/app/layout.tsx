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
  title: {
    default: "Vedoyam - Preserving Vedic Knowledge and Sanskrit Heritage",
    template: "%s | Vedoyam"
  },
  description: "Vedoyam is dedicated to promoting Sanskrit language, Vedic knowledge, and Indian cultural heritage through educational resources, daily shlokas, and research materials.",
  keywords: [
    "Vedoyam", "Sanskrit", "Vedic knowledge", "Indian culture", "Sanatani heritage",
    "Sanskrit learning", "Vedic studies", "Upanishads", "Ramayana", "Mahabharata",
    "Panini", "Ashtadhyayi", "Takshashila", "Nalanda", "Sanskrit literature",
    "Vedic Sanskrit", "Classical Sanskrit", "Sanskrit grammar", "Sanskrit education",
    "Indian philosophy", "Vedic philosophy", "Sanskrit texts", "Ancient India"
  ],
  authors: [{ name: "Vedoyam Team" }],
  creator: "Vedoyam",
  publisher: "Vedoyam",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/vedoyam logo.png',
    shortcut: '/images/vedoyam logo.png',
    apple: '/images/vedoyam logo.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vedoyam.com',
    siteName: 'Vedoyam',
    title: 'Vedoyam - Preserving Vedic Knowledge and Sanskrit Heritage',
    description: 'Explore the beauty of Sanskrit language and Vedic wisdom with Vedoyam\'s educational resources and cultural preservation initiatives.',
    images: [
      {
        url: 'https://vedoyam.com/images/vedoyam logo.png',
        width: 1200,
        height: 630,
        alt: 'Vedoyam Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vedoyam - Preserving Vedic Knowledge and Sanskrit Heritage',
    description: 'Explore the beauty of Sanskrit language and Vedic wisdom with Vedoyam\'s educational resources and cultural preservation initiatives.',
    images: ['https://vedoyam.com/images/vedoyam logo.png'],
    creator: '@Vedoyam_',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://vedoyam.com',
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
