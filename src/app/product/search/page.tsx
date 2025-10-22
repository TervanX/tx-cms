import React from "react";
import { HeroSection } from "@/components/productComponents/HeroSection";
import LogoGrid from "@/components/productComponents/LogoGrid";
import FeatureSections from "@/components/productComponents/FeatureSection";
import { featuresData } from "@/components/productComponents/FeatureSection";
import Testimonial from "@/components/productComponents/Testimonial";
import CtaSection from "@/components/productComponents/CtaSection";
import FAQAccordion from "@/components/reusable/Faq";
import FeaturesShowcase from "@/components/productComponents/FeatureShowcase";
const ProductPage: React.FC = () => {
  return (
    <div>
      <HeroSection
        backgroundImage="/assets/bg.5.svg"
        backgroundAlt="Abstract wave pattern background with navy-blue gradient"
        tag="CONTACT & ACCOUNT SEARCH"
        heading="Better B2B lead generation & prospecting"
        subheading="With the world's largest living data network and AI recommendations, your best leads are just a search away."
        primaryButton={{
          text: "Sign up for free",
          href: "/sign-up",
        }}
        secondaryButton={{
          text: "Get a demo",
          href: "/contact-sales",
        }}
        rating={{
          score: "4.7",
          reviewCount: "9,015",
          badge: "GDPR Compliant",
        }}
      />
      <LogoGrid />
      <FeatureSections features={featuresData} />
      <Testimonial />
      <FeaturesShowcase />
      <FAQAccordion />
      <CtaSection />
    </div>
  );
};

export default ProductPage;
