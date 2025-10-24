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

export default function TxCapital() {
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
        title="TX Capital"
        description="Optimize yield, automate deployments, and manage institutional-grade liquidity across 300+ chains and traditional markets"
        span="Intelligent Capital & Liquidity Management"
        efficiencyTitle='How TX Capital Maximizes Your Financial Efficiency'

        efficiencyCards={[
          {
            category: 'Productivity',
            title: 'AI-driven yield optimization and automated capital deployment maximize returns while minimizing operational overhead'
          },
          {
            category: 'Usability',
            title: 'Unified dashboard for sophisticated treasury operations, liquidity management, and investment strategies across all asset classes'
          },
          {
            category: 'Data & Insights',
            title: 'Real-time performance analytics and predictive modeling transform treasury management from cost center to profit center'
          }
        ]}
      />
      <ContentLayout
        sections={sections}
        defaultActiveSection="productivity"
        className="custom-content-layout"
      />{" "}
      <Banner title="Transform your treasury from static balance sheet to dynamic profit center" />
    </main>
  );
}
