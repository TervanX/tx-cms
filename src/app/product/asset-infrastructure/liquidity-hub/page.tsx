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

export default function LiquidityHub() {
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
        title="Liquidity Hub"
        span="Intelligent Liquidity Aggregation"
        description="Access deep, optimized liquidity across 300+ chains and all major venues through a single intelligent endpoint."
        primaryButton={{
          text: "Login",
          href: "https://www.intercom.com/view-demos",
        }}
        secondaryButton={{
          text: "Contact Sales",
          href: "/contact/contact-sales",
        }}
        efficiencyTitle="How Liquidity Hub Maximizes Trading Efficiency"
        efficiencyCards={[
          {
            category: "Productivity",
            title:
              "AI-powered routing and automated execution slash operational costs while maximizing fill rates and minimizing slippage.",
          },
          {
            category: "Usability",
            title:
              "One unified API provides access to the world's deepest liquidity pools with enterprise-grade reliability and simplicity.",
          },
          {
            category: "Data & Insights",
            title:
              "Real-time market intelligence and predictive analytics transform liquidity sourcing from cost center to competitive advantage.",
          },
        ]}
      />
      <ContentLayout
        sections={sections}
        defaultActiveSection="productivity"
        className="custom-content-layout"
      />{" "}
      <Banner
        title="Power your trading with the world's most intelligent liquidity infrastructure.
"
      />
    </main>
  );
}
