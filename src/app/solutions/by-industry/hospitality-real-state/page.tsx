"use client";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroSection } from "@/components/helpDeskComponents/HeroSection";
import SubSection from "@/components/helpDeskComponents/Subsection";
import InsightCards from "@/components/helpDeskComponents/InsightCard";
import BrandEmailSupport from "@/components/helpDeskComponents/BrandEmailSupport";
import CallAndConversation from "@/components/helpDeskComponents/CallAndConversation";
import LiveChat from "@/components/helpDeskComponents/LiveChat";
import GlobalWhatsapp from "@/components/helpDeskComponents/GlobalWhatsapp";
import TestimonialCarousel from "@/components/homeComponents/TestimonialCarousel";
import EngageCustomersSection from "@/components/homeComponents/EngageCustomer";
import BannerCTA from "@/components/homeComponents/Banner";
import DottedLine from "@/components/helpDeskComponents/DottedBg";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  return (
    <div className="relative z-10 bg-[#f4f3ec]">
      <HeroSection
        heading="Hospitality & Real Estate"
        subheading="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quidem alias porro voluptates harum ipsam optio?"
        tag="TX channel"
        primaryButton={{
          text: "Login",
          href: "/sign-up",
        }}
        secondaryButton={{
          text: "Contact Sales",
          href: "/contact-sales",
        }}
      />
      <div className="w-[95%] mx-auto">
        <SubSection
          title="Centralize all your channels in one connected platform"
          children={<InsightCards />}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <SubSection
          title="On-brand email support from your inbox to theirs"
          description="Forward your existing support email, manage multiple domains and brands, create custom signatures and handle every email in one place."
          children={<BrandEmailSupport />}
          tag="Email"
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <CallAndConversation />
      <div className="py-6 lg:py-20">
        <DottedLine fill="gray" />
      </div>
      <LiveChat />
      <GlobalWhatsapp />
      <div className="py-12 mt-8">
        <DottedLine fill="gray" />
      </div>
      <EngageCustomersSection />
      <TestimonialCarousel />
      <BannerCTA />
    </div>
  );
};

export default Page;
