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
import { transportationLogisticsPageData } from "./data";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  return (
    <div className="relative z-10 ">
      <HeroSection {...transportationLogisticsPageData.heroSection} />
      <div className="w-[95%] mx-auto">
        <SubSection
          title={transportationLogisticsPageData.subsection1.title}
          children={
            <InsightCards data={transportationLogisticsPageData.insightCards} />
          }
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <SubSection
          title={transportationLogisticsPageData.subsection2.title}
          description={transportationLogisticsPageData.subsection2.description}
          children={
            <BrandEmailSupport
              {...transportationLogisticsPageData.brandEmailSupport}
            />
          }
          tag={transportationLogisticsPageData.subsection2.tag}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <CallAndConversation
        {...transportationLogisticsPageData.callAndConversation}
      />
      <div className="py-6 lg:py-20">
        <DottedLine fill="gray" />
      </div>
      <LiveChat {...transportationLogisticsPageData.liveChat} />
      <GlobalWhatsapp {...transportationLogisticsPageData.globalWhatsapp} />

      {transportationLogisticsPageData.globalWhatsapp2 && (
        <GlobalWhatsapp {...transportationLogisticsPageData.globalWhatsapp2} />
      )}

      {transportationLogisticsPageData.globalWhatsapp3 && (
        <GlobalWhatsapp {...transportationLogisticsPageData.globalWhatsapp3} />
      )}
      {transportationLogisticsPageData.globalWhatsapp4 && (
        <GlobalWhatsapp {...transportationLogisticsPageData.globalWhatsapp4} />
      )}
      {transportationLogisticsPageData.globalWhatsapp5 && (
        <GlobalWhatsapp {...transportationLogisticsPageData.globalWhatsapp5} />
      )}
      {transportationLogisticsPageData.globalWhatsapp6 && (
        <GlobalWhatsapp {...transportationLogisticsPageData.globalWhatsapp6} />
      )}
      {transportationLogisticsPageData.globalWhatsapp7 && (
        <GlobalWhatsapp {...transportationLogisticsPageData.globalWhatsapp7} />
      )}

      <div className="py-12 mt-8">
        <DottedLine fill="gray" />
      </div>
      {transportationLogisticsPageData.engageCustomers?.badgeText && (
        <EngageCustomersSection
          {...transportationLogisticsPageData.engageCustomers}
        />
      )}

      <TestimonialCarousel {...transportationLogisticsPageData.testimonial} />
      <BannerCTA {...transportationLogisticsPageData.bannerCTA} />
    </div>
  );
};

export default Page;
