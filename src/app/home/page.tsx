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

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative z-10">
      <div>
      <div ref={heroRef} className="sticky top-0 z-10 min-h-screen">
        <HeroSection />
      </div>
      <div className="relative z-20">
        <CompaniesSection />
      </div>
      </div>
      <StackedAnimation />
      <CardShowcase />
      <ApolloTestimonials />
      <FooterCTA />
    </div>
  );
};

export default Page;