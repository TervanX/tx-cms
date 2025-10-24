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

export default function TreasuryPlugin() {
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
        title="TX Treasury"
        description="Unify, automate, and optimize your financial operations across 300+ blockchains and traditional systems"
        span="Intelligent Treasury Management"
        efficiencyTitle='How TX Treasury Transforms Financial Operations'

        efficiencyCards={[
          {
            category: 'Productivity',
            title: 'AI-driven cash management and automated financial operations reduce manual workload by 85% while maximizing capital efficiency'
          },
          {
            category: 'Usability',
            title: 'Unified dashboard for complete financial visibility and control across all assets, chains, and banking relationships'
          },
          {
            category: 'Data & Insights',
            title: 'Real-time treasury intelligence and predictive analytics transform financial management from reactive to strategic advantage'
          }
        ]}
      />
      <ContentLayout
        sections={sections}
        defaultActiveSection="productivity"
        className="custom-content-layout"
      />{" "}
      <Banner title="Transform your treasury operations with intelligent, automated financial management" />
    </main>
  );
}
