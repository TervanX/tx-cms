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
} from "./data"
import ContentLayout, {
  SectionConfig,
} from "@/components/subhelpdeskComponents/Content";

export default function TxSigma() {
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
        title="TX Sigma"
        description="Transform raw data into actionable intelligence across 300+ blockchains and business systems"
        span="Advanced Analytics & Business Intelligence"
        efficiencyTitle='How TX Sigma Drives Smarter Business Decisions'

        efficiencyCards={[
          {
            category: 'Productivity',
            title: 'AI-powered analytics and automated reporting reduce data processing time by 85% while uncovering hidden opportunities'
          },
          {
            category: 'Usability',
            title: 'Unified business intelligence dashboard with drag-and-drop customization and pre-built analytics templates'
          },
          {
            category: 'Data & Insights',
            title: 'Predictive modeling and real-time intelligence transform data from historical record to strategic foresight'
          }
        ]}
      />
      <ContentLayout
        sections={sections}
        defaultActiveSection="productivity"
        className="custom-content-layout"
      />{" "}
      <Banner title="Transform your data into competitive advantage with intelligent analytics" />
    </main>
  );
}
