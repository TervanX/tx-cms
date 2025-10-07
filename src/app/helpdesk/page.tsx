"use client";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import FooterCTA from "@/components/homeComponents/FooterCta";
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
import DottedLine from "@/components/homeComponents/DottedLine";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  return (
    <div className="relative z-10">
      <HeroSection
        heading="Meet your customers wherever they are"
        subheading="Manage all your support channels and customer conversations—from email and live chat, to phone, SMS, and social—in one omnichannel platform."
        tag="TX channel"
        primaryButton={{
          text: "View demo",
          href: "/sign-up",
        }}
        secondaryButton={{
          text: "Start free trial",
          href: "/demo",
        }}
      />

      <div className="w-[80%] mx-auto">
        <SubSection
          title="Centralize all your channels in one connected platform"
          children={<InsightCards />}
        />
      </div>
      <DottedLine />
      <div className="w-[80%] mx-auto">
        <SubSection
          title="On-brand email support from your inbox to theirs"
          description="Forward your existing support email, manage multiple domains and brands, create custom signatures and handle every email in one place."
          children={<BrandEmailSupport />}
        />
      </div>
      <CallAndConversation />
      <LiveChat />
      <GlobalWhatsapp />
      <EngageCustomersSection />
      <TestimonialCarousel />
      <BannerCTA />
    </div>
  );
};

export default Page;
