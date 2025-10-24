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

export default function TxAutomate() {
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
        title="Tx Automate"
        description="Automate complex workflows, cross-chain operations, and AI-driven financial strategies with zero manual intervention."
        span="Intelligent Financial Automation"
        efficiencyTitle='How TX Automates Transform Financial Operations'
        efficiencyCards={[
          {
            category: 'Productivity',
            title: 'AI-powered execution and autonomous workflow management eliminate manual tasks while maximizing efficiency and reducing costs'
          },
          {
            category: 'Usability',
            title: 'Intuitive visual builder and unified API make creating and managing sophisticated automations accessible for every team'
          },
          {
            category: 'Data & Insights',
            title: 'Real-time analytics and predictive intelligence transform automation from simple scripts to strategic financial advantage'
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
