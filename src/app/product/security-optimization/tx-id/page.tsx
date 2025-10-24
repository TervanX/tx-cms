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

export default function TxID() {
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
        title="Tx ID"
        span="Decentralized Identity & Access Management"
        description="Secure, portable digital identities with privacy-first verification across 300+ chains and applications."
        efficiencyTitle="How TX ID Revolutionizes Digital Identity"
        efficiencyCards={[
          {
            category: "Productivity",
            title:
              "AI-optimized verification and automated KYC/AML processes reduce onboarding time from days to minutes while cutting costs by 80%.",
          },
          {
            category: "Usability",
            title:
              "Unified identity dashboard for seamless management of verifiable credentials, access rights, and compliance across all platforms.",
          },
          {
            category: "Data & Insights",
            title:
              "Real-time identity analytics and predictive risk intelligence transform identity management from compliance burden to trust advantage.",
          },
        ]}
      />
      <ContentLayout
        sections={sections}
        defaultActiveSection="productivity"
        className="custom-content-layout"
      />{" "}
      <Banner title="Transform digital identity with privacy-first, portable verification." />
    </main>
  );
}
