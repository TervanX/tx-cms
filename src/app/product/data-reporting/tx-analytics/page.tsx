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

export default function TxAnalytics() {
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
        title="TX Analytics"
        description="Transform multi-chain data into actionable insights with AI-powered analytics and real-time dashboards"
        span="Intelligent Business Intelligence Platform"
        efficiencyTitle='How TX Analytics Drives Data-Driven Decisions'

        efficiencyCards={[
          {
            category: 'Productivity',
            title: 'AI-enhanced analysis and automated reporting reduce insight generation time from days to minutes while improving accuracy'
          },
          {
            category: 'Usability',
            title: 'Unified analytics dashboard with drag-and-drop customization and intuitive data exploration for all skill levels'
          },
          {
            category: 'Data & Insights',
            title: 'Predictive modeling and real-time intelligence transform raw data into strategic foresight and competitive advantage'
          }
        ]}
      />
      <ContentLayout
        sections={sections}
        defaultActiveSection="productivity"
        className="custom-content-layout"
      />{" "}
      <Banner title="Transform raw data into competitive advantage with intelligent, AI-powered analytics" />
    </main>
  );
}
