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

export default function TxSmartFlow() {
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
        title="Tx SmartFlow"
        description="Build, deploy, and scale automated financial workflows across 300+ blockchains with AI-powered execution."
        span="Financial Automation Engine"
        efficiencyTitle='How TX SmartFlow Automates Complex Financial Operations'
        efficiencyCards={[
          {
            category: 'Productivity',
            title: 'AI-orchestrated workflows and autonomous task execution eliminate manual processes while maximizing operational efficiency'
          },
          {
            category: 'Usability',
            title: 'Visual workflow builder and unified API make creating and managing cross-chain automations accessible to every team'
          },
          {
            category: 'Data & Insights',
            title: 'Real-time monitoring and predictive analytics transform automation from reactive scripts to intelligent financial operations'
          }
        ]}
      />
      <ContentLayout
        sections={sections}
        defaultActiveSection="productivity"
        className="custom-content-layout"
      />{" "}
      <Banner title="Transform manual financial operations into autonomous intelligent workflows" />
    </main>
  );
}
