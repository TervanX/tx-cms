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

export default function Vault() {
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
        title="TX Vault"
        span="Institutional-Grade Asset Security"
        description="Multi-chain digital asset custody with MPC technology, policy-driven controls, and automated treasury operations."
        primaryButton={{
          text: "Login",
          href: "https://www.intercom.com/view-demos",
        }}
        secondaryButton={{
          text: "Contact Sales",
          href: "/contact/contact-sales",
        }}
        efficiencyTitle="How TX Vault Secures and Optimizes Digital Treasury Management"
        efficiencyCards={[
          {
            category: "Productivity",
            title:
              "AI-enhanced security protocols and automated settlement workflows reduce operational overhead while eliminating manual errors.",
          },
          {
            category: "Usability",
            title:
              "Unified dashboard for managing multi-chain assets with enterprise-grade policy controls and approval workflows.",
          },
          {
            category: "Data & Insights",
            title:
              "Real-time treasury analytics and predictive risk modeling provide complete financial visibility and strategic intelligence.",
          },
        ]}
      />
      <ContentLayout
        sections={sections}
        defaultActiveSection="productivity"
        className="custom-content-layout"
      />{" "}
      <Banner />
    </main>
  );
}
