"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "@/components/homeComponents/HeroSection";
import SalesPerform from "@/components/PricingComponents/SalesPerform";
import CompaniesSection from "@/components/homeComponents/CompanySection";
import LayerXTestimonials from "@/components/homeComponents/Testimonial";
import FooterCTA from "@/components/homeComponents/FooterCta";
import StackedAnimation from "@/components/HomePage-1Components/StackedAnimation";
import CardShowcase from "@/components/HomePage-1Components/EveryThingYouNeed";
import Busineses from "@/components/PricingComponents/Busineses";
import StartupBanner from "@/components/HomePage-1Components/HeaderBanner";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  return (
    <div className="relative z-10">
      <StartupBanner />
      <div className="px-8">
        <div ref={heroRef} className="sticky top-0 z-10 lg:min-h-screen">
          <HeroSection />
        </div>
        <div className="relative z-20">
          <CompaniesSection />
        </div>
      </div>
      <StackedAnimation />
      <CardShowcase />
      <LayerXTestimonials />
      <div className="lg:px-12 lg:-mt-20 -mt-32">
        <Busineses />
        <SalesPerform />
      </div>

      <FooterCTA />
    </div>
  );
};

export default Page;
