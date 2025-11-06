import type { Metadata } from "next";
import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import ClarityInit from "@/utils/ClarityInit";
import ContactModal from "@/components/landingComponents/ContactModal";
import AdvancedCookieConsent from "@/utils/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const grotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LayerX - Financial Infrastructure Platform",
  description: "LayerX is the AWS for Finance – a powerful financial infrastructure platform supporting fiat, crypto, and digital assets with scalable APIs, dashboards, and developer-first tools.",
  keywords: ["financial infrastructure", "fintech", "APIs", "crypto", "digital assets", "fiat", "Africa fintech", "payment infrastructure", "LayerX", "build with layerX", "build with layer"],
  robots: { index: true, follow: true },
  openGraph: {
    title: "LayerX - Financial Infrastructure Platform",
    description: "Powerful financial infrastructure platform for Africa and beyond – supporting fiat, crypto, and digital assets.",
    url: "https://buildwithlayerx.com",
    siteName: "LayerX",
    locale: "en_US",
    type: "website",
    images: ["/assets/layer.svg"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@layerx",
    creator: "@layerx",
    title: "LayerX - Financial Infrastructure Platform",
    description: "Scalable financial APIs and infrastructure for businesses, startups, and developers.",
    images: ["/assets/layer.svg"],
  },
  icons: {
    icon: [
      { url: '/assets/layer.svg', sizes: 'any' },
      {
        url: '/assets/layer.svg',
        type: "image/svg+xml",
        sizes: "32x32",
      },
      {
        url: '/assets/layer.svg',
        type: "image/svg+xml",
        sizes: "64x64",
      },
      {
        url: '/assets/layer.svg',
        type: "image/svg+xml",
        sizes: "180x180",
      },
    ],
    shortcut: "/assets/layer.svg",
    apple: "/assets/layer.svg",
  },
  alternates: {
    canonical: "https://buildwithlayerx.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/layer.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/assets/layer.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/assets/layer.svg" type="image/svg+xml" />
        <link
          rel="preload"
          href="/assets/layer.svg"
          as="image"
          type="image/svg+xml"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${grotesque.variable}`}
      >
        <div className="w-full">
          {children}
          <ClarityInit />
          <AdvancedCookieConsent />
          <ContactModal />
        </div>
      </body>
    </html>
  );
}