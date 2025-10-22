import React from "react";
import HeroSection from "@/components/StartupComponents/HeroSection";
import FeaturesSection from "@/components/StartupComponents/FeaturesSection";
import ProductSection from "@/components/StartupComponents/ProductSection";
import Banner from "@/components/StartupComponents/CtaBanner";
import Testimonial from "@/components/StartupComponents/Testimonial";
import CtaBanner from "@/components/StartupComponents/Cta";
import FAQAccordion from "@/components/StartupComponents/Faq";
import { Marquee } from "@/components/StartupComponents/Marquee";
import Resources from "@/components/StartupComponents/Resources";

export default function Startups() {
  return (
    <div>
      <HeroSection
        title="Power up your startup with Apollo"
        description="Unlock world-class go-to-market resources and exclusive perks when you join the Apollo for Startups community."
      />
      <FeaturesSection />
      <ProductSection />
      <Banner />
      <Testimonial />
      <Marquee />
      <Resources />
      <CtaBanner />
      <FAQAccordion />
    </div>
  );
}
