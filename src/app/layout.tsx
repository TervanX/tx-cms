import type { Metadata } from "next";
import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import ClarityInit from "@/utils/ClarityInit";

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

const iconBaseUrl = "https://res.cloudinary.com/dx1etzf66/image/upload";
const iconVersion = "v1761842277";
const iconId = "LayerX_Logo_ffy6pb.png";

export const metadata: Metadata = {
  title: "LayerX - Financial Infrastructure Platform",
  description: "LayerX is the AWS for Finance – a powerful financial infrastructure platform supporting fiat, crypto, and digital assets with scalable APIs, dashboards, and developer-first tools.",
  keywords: ["financial infrastructure", "fintech", "APIs", "crypto", "digital assets", "fiat", "Africa fintech", "payment infrastructure", "LayerX", "build with layerX"],
  robots: { index: true, follow: true },
  openGraph: {
    title: "LayerX - Financial Infrastructure Platform",
    description: "Powerful financial infrastructure platform for Africa and beyond – supporting fiat, crypto, and digital assets.",
    url: "https://buildwithlayerx.com",
    siteName: "LayerX",
    locale: "en_US",
    type: "website",
    images: [`${iconBaseUrl}/c_limit,w_1200,h_630,f_auto,q_80/${iconVersion}/${iconId}`],
  },
  twitter: {
    card: "summary_large_image",
    site: "@layerx",
    creator: "@layerx",
    title: "LayerX - Financial Infrastructure Platform",
    description:
      "Scalable financial APIs and infrastructure for businesses, startups, and developers.",
    images: [`${iconBaseUrl}/c_limit,w_1200,h_600,f_auto,q_80/${iconVersion}/${iconId}`],
  },
  icons: {
    icon: [
      {
        url: `${iconBaseUrl}/w_32,h_32,f_auto,q_80/${iconVersion}/${iconId}`,
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: `${iconBaseUrl}/w_64,h_64,f_auto,q_80/${iconVersion}/${iconId}`,
        type: "image/png",
        sizes: "64x64",
      },
      {
        url: `${iconBaseUrl}/w_180,h_180,f_auto,q_80/${iconVersion}/${iconId}`,
        type: "image/png",
        sizes: "180x180",
      },
    ],
    shortcut: `${iconBaseUrl}/w_32,h_32,f_auto,q_80/${iconVersion}/${iconId}`,
    apple: `${iconBaseUrl}/w_180,h_180,f_auto,q_80/${iconVersion}/${iconId}`,
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
        <link
          rel="preload"
          href={`${iconBaseUrl}/w_32,h_32,f_auto,q_80/${iconVersion}/${iconId}`}
          as="image"
          type="image/png"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${grotesque.variable}`}
      >
        <div className="w-full">
          {children}
          <ClarityInit />
        </div>
      </body>
    </html>
  );
}