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

export default function RevenueRecognition() {
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
        title="Revenue Recognition"
        description="Automate revenue recognition, compliance reporting, and real-time revenue intelligence across 300+ blockchains and traditional systems"
        span="Intelligent Financial Automation"
        efficiencyTitle='How Revenue Recognition Simplifies Financial Compliance'

        efficiencyCards={[
          {
            category: 'Productivity',
            title: 'AI-driven accounting automation and compliance engines reduce manual work by 80% while ensuring regulatory accuracy'
          },
          {
            category: 'Usability',
            title: 'Unified dashboards and intuitive rule builders make complex revenue accounting accessible to finance teams of all sizes'
          },
          {
            category: 'Data & Insights',
            title: 'Real-time revenue analytics and predictive forecasting transform financial reporting from backward-looking to strategic advantage'
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
