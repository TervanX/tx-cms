"use client";
import Hero from "@/components/subhelpdeskComponents/Hero";

import Banner from "@/components/subhelpdeskComponents/Banner";
import ProductivitySection from "@/components/subhelpdeskComponents/ProductivitySection";
import UsabilitySection from "@/components/subhelpdeskComponents/UsabilitySection";
import FeaturesSection from "@/components/subhelpdeskComponents/FeaturesSection";
import OutboundSection from "@/components/subhelpdeskComponents/DataSection";
// import SecuritySection from "@/components/subhelpdeskComponents/SecuritySection"; // Optional section
import {
    featuresProps,
    outboundProps,
    productivityProps,
    usabilityProps,
    // securityProps, // Optional props
} from "@/app/product/payments-infrastructure/data";
import { usePathname } from "next/navigation";
import ContentLayout, {
    SectionConfig,
} from "@/components/subhelpdeskComponents/Content";

export default function CryptoPayments() {
    const pathname = usePathname();
    const sections: SectionConfig[] = [
        {
            id: "productivity",
            label: "Productivity",
            component: ProductivitySection,
            props: productivityProps,
        },
        {
            id: "usability",
            label: "Usability",
            component: UsabilitySection,
            props: usabilityProps,
        },
        {
            id: "outbound",
            label: "Data",
            component: OutboundSection,
            props: outboundProps,
        },
        {
            id: "features",
            label: "Features",
            component: FeaturesSection,
            props: featuresProps,
        },
        // Optional: Add security section conditionally
        // ...(pathname === "/product/payments-infrastructure/crypto-payments"
        //   ? [
        //       {
        //         id: "security",
        //         label: "Security",
        //         component: SecuritySection,
        //         props: securityProps,
        //       },
        //     ]
        //   : []),
    ];

    return (
        <main>
            <Hero
                title="Crypto Payments"
                description="Accept BTC, ETH, USDT, and more"
            />
            <ContentLayout
                sections={sections}
                defaultActiveSection="productivity"
                className="custom-content-layout"
            />
            <Banner />
        </main>
    );
}
