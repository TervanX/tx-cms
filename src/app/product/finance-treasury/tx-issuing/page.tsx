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
export default function TxIssuing() {
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
        title="TX Issuing"
        description="Launch, manage, and scale tokenized assets across 300+ blockchains with institutional-grade compliance and security"
        span="Tokenization & Digital Asset Issuance"
        efficiencyTitle='How TX Issuing Revolutionizes Digital Asset Creation'

        efficiencyCards={[
          {
            category: 'Productivity',
            title: 'AI-optimized deployment and automated compliance workflows reduce token issuance time from months to minutes'
          },
          {
            category: 'Usability',
            title: 'Unified dashboard for complete asset lifecycle management across multiple chains and regulatory frameworks'
          },
          {
            category: 'Data & Insights',
            title: 'Real-time issuance analytics and regulatory intelligence transform token management from operational task to strategic advantagec'
          }
        ]}
      />
      <ContentLayout
        sections={sections}
        defaultActiveSection="productivity"
        className="custom-content-layout"
      />{" "}
      <Banner title="Launch institutional-grade digital assets in minutes, not months" />
    </main>
  );
}
