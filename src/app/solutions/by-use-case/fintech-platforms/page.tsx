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
import { fintechPlatformsPageData } from "./data";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  return (
    <div className="relative z-10 ">
      <HeroSection {...fintechPlatformsPageData.heroSection} />
      <div className="w-[95%] mx-auto">
        <SubSection
          title={fintechPlatformsPageData.subsection1.title}
          children={
            <InsightCards data={fintechPlatformsPageData.insightCards} />
          }
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <SubSection
          title={fintechPlatformsPageData.subsection2.title}
          description={fintechPlatformsPageData.subsection2.description}
          children={
            <BrandEmailSupport
              {...fintechPlatformsPageData.brandEmailSupport}
            />
          }
          tag={fintechPlatformsPageData.subsection2.tag}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <CallAndConversation {...fintechPlatformsPageData.callAndConversation} />
      <div className="py-6 lg:py-20">
        <DottedLine fill="gray" />
      </div>
      <LiveChat {...fintechPlatformsPageData.liveChat} />
      <GlobalWhatsapp {...fintechPlatformsPageData.globalWhatsapp} />
      <div className="py-12 mt-8">
        <DottedLine fill="gray" />
      </div>
      <EngageCustomersSection {...fintechPlatformsPageData.engageCustomers} />
      <EngageCustomersSection {...fintechPlatformsPageData.engageCustomers2} />
      <EngageCustomersSection {...fintechPlatformsPageData.engageCustomers3} />
      <EngageCustomersSection {...fintechPlatformsPageData.engageCustomers4} />
      <TestimonialCarousel {...fintechPlatformsPageData.testimonial} />
      <BannerCTA {...fintechPlatformsPageData.bannerCTA} />
    </div>
  );
};

export default Page;


