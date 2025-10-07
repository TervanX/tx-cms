"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "@/components/homeComponents/HeroSection";
import CompaniesSection from "@/components/homeComponents/CompanySection";
import ApolloTestimonials from "@/components/homeComponents/Testimonial";
import FooterCTA from "@/components/homeComponents/FooterCta";

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
      <ApolloTestimonials />
      <FooterCTA />
    </div>
  );
};

export default Page;
