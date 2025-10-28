"use client";
import Hero from "@/components/subhelpdeskComponents/Hero";
import Banner from "@/components/subhelpdeskComponents/Banner";
import ProductivitySection from "@/components/subhelpdeskComponents/ProductivitySection";
import UsabilitySection from "@/components/subhelpdeskComponents/UsabilitySection";
import FeaturesSection from "@/components/subhelpdeskComponents/FeaturesSection";
import OutboundSection from "@/components/subhelpdeskComponents/DataSection";

import ContentLayout, {
  SectionConfig,
} from "@/components/subhelpdeskComponents/Content";
import {
  productivityProps,
  usabilityProps,
  outboundProps,
  featuresProps,
} from "./data";

export default function WalletsAPI() {
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
      label: "Data & Insights",
      component: OutboundSection,
      props: outboundProps,
    },
    {
      id: "features",
      label: "Features",
      component: FeaturesSection,
      props: featuresProps,
    },
  ];
  return (
    <main>
      <Hero
        title="Wallet As A Service"
        span="Embed powerful, programmable wallets"
        description="Seamlessly integrate secure, non-custodial and custodial wallets into any application. Launch in days, not months."
        efficiencyTitle="How Wallet As A Service Accelerates Your Product Launch"
        efficiencyCards={[
          {
            category: "Productivity",
            title:
              "AI-driven key management and automated gas operations free your team from infrastructure complexity.",
          },
          {
            category: "Usability",
            title:
              "A single, unified API to deploy user-friendly wallets across 300+ chains with full customization.",
          },
          {
            category: "Data & Insights",
            title:
              "Gain deep intelligence into user wallet activity, asset flows, and on-chain behaviors.",
          },
        ]}
        primaryButton={{
          text: "Login",
          href: "https://www.intercom.com/view-demos",
        }}
        secondaryButton={{
          text: "Contact Sales",
          href: "/contact/contact-sales",
        }}
      />
      <ContentLayout
        sections={sections}
        defaultActiveSection="productivity"
        className="custom-content-layout"
      />{" "}
      <Banner
        title="Launch secure, scalable wallets in days, not months."
        primaryButton={{
          text: "Get Started",
          href: "https://www.intercom.com/view-demos",
        }}
        secondaryButton={{
          text: "Contact Sales",
          href: "/contact/contact-sales",
        }}
        backgroundImage={"/assets/helpdesk-ctabanner.webp"}
        backgroundImageLQIP={"/assets/helpdesk-ctabanner-lqip.webp"}
        altText="CTA Banner"
      />
    </main>
  );
}
