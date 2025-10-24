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

export default function LogisticsPlugin() {
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
        title="TX Logistics"
        description="Automate logistics, provenance tracking, and supply chain operations across 300+ blockchains with AI-powered intelligence"
        span="Intelligent Supply Chain & Asset Tracking"
        efficiencyTitle='How TX Logistics Transforms Supply Chain Management
'

        efficiencyCards={[
          {
            category: 'Productivity',
            title: 'AI-optimized routing and automated inventory management reduce operational costs by 60% while ensuring perfect execution'
          },
          {
            category: 'Usability',
            title: 'Unified dashboard for complete supply chain visibility from manufacturer to end-consumer across all transport modalities'
          },
          {
            category: 'Data & Insights',
            title: 'Real-time logistics analytics and predictive intelligence transform supply chain operations from cost center to competitive advantage'
          }
        ]}
      />
      <ContentLayout
        sections={sections}
        defaultActiveSection="productivity"
        className="custom-content-layout"
      />{" "}
      <Banner title="Transform your supply chain with intelligent, automated logistics operations" />
    </main>
  );
}
