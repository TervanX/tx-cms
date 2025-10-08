"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "@/components/homeComponents/HeroSection";
import CompaniesSection from "@/components/homeComponents/CompanySection";
import ApolloTestimonials from "@/components/homeComponents/Testimonial";
import FooterCTA from "@/components/homeComponents/FooterCta";
import StackedAnimation from "@/components/HomePage-1Components/StackedAnimation";
import CardShowcase from "@/components/HomePage-1Components/EveryThingYouNeed";
import MotionHorizontalPeekCarousel from "@/components/HomePage-1Components/MotionHorizontalPeekCarousel";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const companiesRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: () => `+=${companiesRef.current?.offsetHeight || 0}`,
        pin: true,
        pinSpacing: false,
      });

      ScrollTrigger.create({
        trigger: companiesRef.current,
        start: "top bottom",
        end: "top top",
        scrub: true,
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div className="relative z-10">
      <div ref={heroRef} className="relative z-10 min-h-screen">
        <HeroSection />
      </div>
      <div ref={companiesRef} className="relative z-20">
        <CompaniesSection />
      </div>
      <div className="mx-8 bg-white rounded-xl">
        <div className="px-8 ">
          <StackedAnimation />
          <CardShowcase />
          {/* <img
            src={
              "https://www.apollo.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flines-desktop.58476511.png&w=3840&q=75"
            }
            className="w-full h-100vh absolute z-20 top-0 left-0"
          /> */}
          <MotionHorizontalPeekCarousel />
          <ApolloTestimonials />
          <FooterCTA />
        </div>
      </div>
      <ApolloTestimonials />
      <FooterCTA />
    </div>
  );
};

export default Page;
