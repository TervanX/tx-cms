"use client";
import Hero from "@/components/subhelpdeskComponents/Hero";
import Banner from "@/components/subhelpdeskComponents/Banner";
import ProductivitySection from "@/components/subhelpdeskComponents/ProductivitySection";
import UsabilitySection from "@/components/subhelpdeskComponents/UsabilitySection";
import FeaturesSection from "@/components/subhelpdeskComponents/FeaturesSection";
import OutboundSection from "@/components/subhelpdeskComponents/DataSection";
import {
  featuresProps,
  outboundProps,
  productivityProps,
  usabilityProps,
} from "./data";
import ContentLayout, {
  SectionConfig,
} from "@/components/subhelpdeskComponents/Content";

export default function TxShield() {
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
  ];
  return (
    <main>
      <Hero
        title="TX Shield"
        span="Intelligent Security & Threat Protection"
        description="Advanced threat detection, real-time monitoring, and automated security response across 300+ blockchains."
        efficiencyTitle="How TX Shield Protects Your Digital Operations"
        efficiencyCards={[
          {
            category: "Productivity",
            title:
              "AI-driven threat detection and automated security response reduce incident response time from hours to seconds.",
          },
          {
            category: "Usability",
            title:
              "Unified security dashboard for complete threat visibility and control across all chains, wallets, and transactions.",
          },
          {
            category: "Data & Insights",
            title:
              "Real-time security analytics and predictive threat intelligence transform security from reactive defense to proactive protection.",
          },
        ]}
      />
      <ContentLayout
        sections={sections}
        defaultActiveSection="productivity"
        className="custom-content-layout"
      />
      <Banner title="Protect your digital assets with intelligent, automated security operations." />
    </main>
  );
}
