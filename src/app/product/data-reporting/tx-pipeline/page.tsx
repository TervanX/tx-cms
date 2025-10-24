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

export default function TxPipeline() {
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
        title="TX Pipeline"
        description="Automate data ingestion, transformation, and loading across 300+ blockchains and business systems"
        span="Intelligent Data Integration & ETL"
        efficiencyTitle='How TX Pipeline Streamlines Data Operations'

        efficiencyCards={[
          {
            category: 'Productivity',
            title: 'AI-optimized data workflows and automated pipeline management reduce ETL development time by 90% while ensuring data quality'
          },
          {
            category: 'Usability',
            title: 'Visual pipeline builder and unified monitoring dashboard make complex data engineering accessible to all teams'
          },
          {
            category: 'Data & Insights',
            title: 'Real-time data quality analytics and pipeline intelligence transform raw data into trusted business assets'
          }
        ]}
      />
      <ContentLayout
        sections={sections}
        defaultActiveSection="productivity"
        className="custom-content-layout"
      />{" "}
      <Banner title="Transform your data operations with intelligent, automated pipeline management" />
    </main>
  );
}
