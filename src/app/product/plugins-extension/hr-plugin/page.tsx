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

export default function HRPlugin() {
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
        title="TX HR"
        description="Automate global payroll, token-based compensation, and HR operations across 300+ chains and traditional systems"
        span="Intelligent Workforce & Payroll Management"
        efficiencyTitle='How TX HR Revolutionizes Workforce Management'

        efficiencyCards={[
          {
            category: 'Productivity',
            title: 'AI-driven payroll automation and smart compensation workflows reduce HR overhead by 80% while ensuring global compliance'
          },
          {
            category: 'Usability',
            title: 'Unified dashboard for complete workforce management across fiat and digital asset payroll, benefits, and compliance'
          },
          {
            category: 'Data & Insights',
            title: 'Real-time HR analytics and predictive workforce intelligence transform people operations from administrative to strategic'
          }
        ]}
      />
      <ContentLayout
        sections={sections}
        defaultActiveSection="productivity"
        className="custom-content-layout"
      />{" "}
      <Banner title="Transform your trading operations with institutional-grade algorithmic execution" />
    </main>
  );
}
