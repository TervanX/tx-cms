import React from "react";
import Footer from "@/components/reusable/Footer";
import Header from "@/components/reusable/NavBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog - LayerX Financial Insights",
    description: "Explore the latest insights on financial infrastructure, fintech innovation, digital banking, and payment systems from LayerX experts.",
    keywords: ["fintech blog", "financial technology", "digital banking", "payment infrastructure", "crypto insights", "financial APIs", "Africa fintech"],
    robots: { index: true, follow: true },
    openGraph: {
        title: "Blog - LayerX Financial Insights",
        description: "Expert insights on financial infrastructure, digital banking, and fintech innovation",
        url: "https://buildwithlayerx.com/blog",
        siteName: "LayerX",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "/assets/layer.svg",
                width: 1200,
                height: 630,
                alt: "LayerX Blog - Financial Insights",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@layerx",
        creator: "@layerx",
        title: "Blog - LayerX Financial Insights",
        description: "Expert insights on financial infrastructure and fintech innovation",
        images: ["/assets/layer.svg"],
    },
    alternates: {
        canonical: "https://buildwithlayerx.com/blog",
        types: {
            'application/rss+xml': 'https://buildwithlayerx.com/rss.xml',
        },
    },
};

// Structured Data for Blog
const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "LayerX Blog",
    "description": "Expert insights on financial infrastructure, digital banking, and fintech innovation",
    "url": "https://buildwithlayerx.com/blog",
    "publisher": {
        "@type": "Organization",
        "name": "LayerX",
        "logo": {
            "@type": "ImageObject",
            "url": "https://buildwithlayerx.com/assets/layer.svg"
        }
    },
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://buildwithlayerx.com/blog"
    },
    "inLanguage": "en-US"
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-white lg:pts-8 lg:pt-18 pt-12">
            {/* Structured Data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogStructuredData) }}
            />

            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}