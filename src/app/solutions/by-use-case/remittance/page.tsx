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
import { remittancePageData } from "./data";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  return (
    <div className="relative z-10 ">
      <HeroSection {...remittancePageData.heroSection} />
      <div className="w-[95%] mx-auto">
        <SubSection
          title={remittancePageData.subsection1.title}
          children={
            <InsightCards data={remittancePageData.insightCards} />
          }
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <SubSection
          title={remittancePageData.subsection2.title}
          description={remittancePageData.subsection2.description}
          children={
            <BrandEmailSupport {...remittancePageData.brandEmailSupport} />
          }
          tag={remittancePageData.subsection2.tag}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <CallAndConversation {...remittancePageData.callAndConversation} />
      <div className="py-6 lg:py-20">
        <DottedLine fill="gray" />
      </div>
      <LiveChat {...remittancePageData.liveChat} />
      <GlobalWhatsapp {...remittancePageData.globalWhatsapp} />
      <div className="py-12 mt-8">
        <DottedLine fill="gray" />
      </div>
      <EngageCustomersSection {...remittancePageData.engageCustomers} />
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <SubSection
          title={remittancePageData.subsection4.title}
          description={remittancePageData.subsection4.description}
          children={
            <BrandEmailSupport {...remittancePageData.brandEmailSupport3} />
          }
          tag={remittancePageData.subsection4.tag}
        />
        <SubSection
          title={remittancePageData.subsection5.title}
          description={remittancePageData.subsection5.description}
          children={
            <BrandEmailSupport {...remittancePageData.brandEmailSupport4} />
          }
          tag={remittancePageData.subsection5.tag}
        />
        <SubSection
          title={remittancePageData.subsection6.title}
          description={remittancePageData.subsection6.description}
          children={
            <BrandEmailSupport {...remittancePageData.brandEmailSupport5} />
          }
          tag={remittancePageData.subsection6.tag}
        />

      </div>
      <TestimonialCarousel {...remittancePageData.testimonial} />
      <BannerCTA {...remittancePageData.bannerCTA} />
    </div>
  );
};

export default Page;

