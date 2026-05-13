import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const soriaFont = localFont({
  src: "../public/soria-font.ttf",
  variable: "--font-soria",
});

const vercettiFont = localFont({
  src: "../public/Vercetti-Regular.woff",
  variable: "--font-vercetti",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com/'),
  title: "Namrata Singhh ✌️",
  description: "Motion Graphic Designer by Profession , driven by creativity and detail.",
  keywords: "Namrata Singh, Motion Design , Aniamtion, Video Editing, Visual Identity, Creative Strategy, Portfolio",
  authors: [{ name: "Namrata Singh" }],
  creator: "Namrata Singh",
  publisher: "Namrata Singh",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Namrata Singh - Motion Graphic Designer",
    description: "Motion Graphic Designer by profession, creative at heart.",
    siteName: "Namrata Singh Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Namrata Singh - Motion Graphic Designer",
    description: "Motion Graphic Designer by profession, creative at heart.",
  },
  verification: {
    google: "",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overscroll-y-none">
      <body
        className={`${soriaFont.variable} ${vercettiFont.variable} font-sans antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''}/>
      <Analytics />
    </html>
  );
}
