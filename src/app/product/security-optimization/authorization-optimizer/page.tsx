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

export default function AuthorizationOptimizer() {
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
        title="TX Authorization Optimizer"
        span="Intelligent Access & Permission Management"
        description="Automate authorization, optimize permission structures, and enforce least-privilege access across 300+ systems and chains."
        efficiencyTitle="How TX Authorization Optimizer Secures Your Digital Operations"

        efficiencyCards={[
          {
            category: "Productivity",
            title:
              "AI-driven permission optimization and automated access reviews reduce security overhead by 75% while enhancing compliance.",
          },
          {
            category: "Usability",
            title:
              "Unified dashboard for complete access governance across all systems, chains, and user roles with intuitive policy management.",
          },
          {
            category: "Data & Insights",
            title:
              "Real-time authorization analytics and predictive risk intelligence transform access control from administrative task to strategic security advantage.",
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
