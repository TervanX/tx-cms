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
export default function AutoTradePlugin() {
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
        title="TX Auto Trade"
        description="Deploy, backtest, and scale automated trading strategies across 300+ chains and all major venues"
        span="Intelligent Algorithmic Trading"
        efficiencyTitle='How TX Auto Trade Maximizes Trading Performance'

        efficiencyCards={[
          {
            category: 'Productivity',
            title: 'AI-optimized strategy execution and autonomous portfolio management maximize returns while eliminating emotional trading'
          },
          {
            category: 'Usability',
            title: 'Visual strategy builder and unified execution dashboard make sophisticated algorithmic trading accessible to all teams'
          },
          {
            category: 'Data & Insights',
            title: 'Real-time performance analytics and predictive modeling transform trading from reactive to systematically strategic'
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
