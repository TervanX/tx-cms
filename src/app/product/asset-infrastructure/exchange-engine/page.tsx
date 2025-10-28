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

export default function ExchangeEngine() {
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
        title="TX Exchange Engine"
        span="Swap & Liquidity Infrastructure"
        description="Embed institutional-grade trading and liquidity. Power seamless swaps, deep liquidity, and intelligent routing across 300+ chains."
        primaryButton={{
          text: "Login",
          href: "https://www.intercom.com/view-demos",
        }}
        secondaryButton={{
          text: "Contact Sales",
          href: "/contact/contact-sales",
        }}
        efficiencyTitle="How TX Exchange Engine Transforms Digital Asset Trading"
        efficiencyCards={[
          {
            category: "Productivity",
            title:
              "AI-optimized routing and automated market making slash operational overhead while maximizing fill rates and yield.",
          },
          {
            category: "Usability",
            title:
              "A unified API for all exchange functions—from simple swaps to complex liquidity strategies—with enterprise-grade reliability.",
          },
          {
            category: "Data & Insights",
            title:
              "Real-time analytics and predictive modeling transform liquidity management from reactive to strategic.",
          },
        ]}
      />
      <ContentLayout
        sections={sections}
        defaultActiveSection="productivity"
        className="custom-content-layout"
      />
      <Banner title="Power your trading platform with institutional-grade liquidity." />
    </main>
  );
}
