import type { Metadata } from "next";
import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

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
  title: "TervanX - Financial Infrastructure Platform",
  description:
    "TervanX is the AWS for Finance – a powerful financial infrastructure platform supporting fiat, crypto, and digital assets with scalable APIs, dashboards, and developer-first tools.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "TervanX - Financial Infrastructure Platform",
    description:
      "Powerful financial infrastructure platform for Africa and beyond – supporting fiat, crypto, and digital assets.",
    url: "https://tervanx.com",
    siteName: "TervanX",
    locale: "en_US",
    type: "website",
    images: ["/assets/logo.svg"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tervanx",
    creator: "@tervanx",
    title: "TervanX - Financial Infrastructure Platform",
    description:
      "Scalable financial APIs and infrastructure for businesses, startups, and developers.",
    images: ["/assets/logo.svg"],
  },
  icons: {
    icon: [
      {
        url: "/assets/logo.svg",
        type: "image/svg",
      },
    ],
    shortcut: "/assets/logo.svg",
  },
  alternates: {
    canonical: "https://tervanx.com",
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
        <div className="w-full">{children}</div>
      </body>
    </html>
  );
}
