"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "@/components/homeComponents/HeroSection";
import CompaniesSection from "@/components/homeComponents/CompanySection";
import ApolloTestimonials from "@/components/homeComponents/Testimonial";
import FooterCTA from "@/components/homeComponents/FooterCta";
import StackedAnimation from "@/components/HomePage-1Components/StackedAnimation";
import CardShowcase from "@/components/HomePage-1Components/EveryThingYouNeed";
import ApolloScrollTabs from "@/components/HomePage-1Components/TabbedSection";
import MotionHorizontalPeekCarousel from "@/components/HomePage-1Components/MotionHorizontalPeekCarousel";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  return (
    <div className="relative z-10">
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
      <ApolloScrollTabs />
      <ApolloTestimonials />
      <FooterCTA />
    </div>
  );
};

export default Page;
