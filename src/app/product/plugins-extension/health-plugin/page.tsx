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

export default function HealthPlugin() {
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
        title="TX Health"
        description="Automate healthcare payments, claims processing, and financial operations across traditional and blockchain systems"
        span="Intelligent Healthcare Operations & Finance"
        efficiencyTitle='How TX Health Transforms Healthcare Administration
'

        efficiencyCards={[
          {
            category: 'Productivity',
            title: 'AI-driven claims processing and automated revenue cycle management reduce administrative overhead by 70% while improving accuracye'
          },
          {
            category: 'Usability',
            title: 'Unified dashboard for complete healthcare financial operations, from patient billing to insurance settlements across multiple payment systems'
          },
          {
            category: 'Data & Insights',
            title: 'Real-time healthcare analytics and predictive intelligence transform medical finance from bureaucratic burden to strategic advantage'
          }
        ]}
      />
      <ContentLayout
        sections={sections}
        defaultActiveSection="productivity"
        className="custom-content-layout"
      />{" "}
      <Banner title="Transform healthcare administration with intelligent, automated financial operations" />
    </main>
  );
}
