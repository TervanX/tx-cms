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
export default function RiskComplianceAI() {
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
        title="Risk and Compliance AI"
        description="Automate risk monitoring, compliance enforcement, and regulatory reporting across 300+ blockchains with AI-powered surveillance"
        span="Intelligent Regulatory Intelligence"
        efficiencyTitle='How Risk and Compliance AI Transforms Regulatory Operations'

        efficiencyCards={[
          {
            category: 'Productivity',
            title: 'AI-driven monitoring and automated compliance workflows reduce manual oversight by 90% while enhancing detection accuracy'
          },
          {
            category: 'Usability',
            title: 'Unified compliance dashboard and visual policy builder make complex regulatory requirements manageable for any team'
          },
          {
            category: 'Data & Insights',
            title: 'Real-time risk intelligence and predictive analytics transform compliance from cost center to strategic advantage'
          }
        ]}
      />
      <ContentLayout
        sections={sections}
        defaultActiveSection="productivity"
        className="custom-content-layout"
      />{" "}
      <Banner title="Transform compliance from operational burden to competitive advantage" />
    </main>
  );
}
