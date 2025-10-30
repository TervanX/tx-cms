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

export const metadata: Metadata = {
  title: "LayerX - Financial Infrastructure Platform",
  description:
    "LayerX is the AWS for Finance – a powerful financial infrastructure platform supporting fiat, crypto, and digital assets with scalable APIs, dashboards, and developer-first tools.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "LayerX - Financial Infrastructure Platform",
    description:
      "Powerful financial infrastructure platform for Africa and beyond – supporting fiat, crypto, and digital assets.",
    url: "https://layerx.com",
    siteName: "LayerX",
    locale: "en_US",
    type: "website",
    images: ["https://res.cloudinary.com/dx1etzf66/image/upload/v1761842277/LayerX_Logo_ffy6pb.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@layerx",
    creator: "@layerx",
    title: "LayerX - Financial Infrastructure Platform",
    description:
      "Scalable financial APIs and infrastructure for businesses, startups, and developers.",
    images: ["https://res.cloudinary.com/dx1etzf66/image/upload/v1761842277/LayerX_Logo_ffy6pb.png"],
  },
  icons: {
    icon: [
      {
        url: "https://res.cloudinary.com/dx1etzf66/image/upload/v1761842277/LayerX_Logo_ffy6pb.png",
        type: "image/svg",
      },
    ],
    shortcut: "https://res.cloudinary.com/dx1etzf66/image/upload/v1761842277/LayerX_Logo_ffy6pb.png",
  },
  alternates: {
    canonical: "https://layerx.com",
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
