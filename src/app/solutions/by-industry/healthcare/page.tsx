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
import { healthcarePageData } from "./data";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  return (
    <div className="relative z-10 ">
      <HeroSection {...healthcarePageData.heroSection} />
      <div className="w-[95%] mx-auto">
        <SubSection
          title={healthcarePageData.subsection1.title}
          children={<InsightCards data={healthcarePageData.insightCards} />}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <SubSection
          title={healthcarePageData.subsection2.title}
          description={healthcarePageData.subsection2.description}
          children={
            <BrandEmailSupport {...healthcarePageData.brandEmailSupport} />
          }
          tag={healthcarePageData.subsection2.tag}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <CallAndConversation {...healthcarePageData.callAndConversation} />

      <LiveChat {...healthcarePageData.liveChat} />
      <GlobalWhatsapp {...healthcarePageData.globalWhatsapp} />
      {healthcarePageData.globalWhatsapp2 && (
        <GlobalWhatsapp {...healthcarePageData.globalWhatsapp2} />
      )}
      {healthcarePageData.globalWhatsapp3 && (
        <LiveChat {...healthcarePageData.globalWhatsapp3} />
      )}
      {healthcarePageData.globalWhatsapp4 && (
        <GlobalWhatsapp {...healthcarePageData.globalWhatsapp4} />
      )}

      {healthcarePageData.globalWhatsapp5 && (
        <LiveChat {...healthcarePageData.globalWhatsapp5} />
      )}

      {healthcarePageData.globalWhatsapp6 && (
        <GlobalWhatsapp {...healthcarePageData.globalWhatsapp6} />
      )}
      {healthcarePageData.globalWhatsapp7 && (
        <LiveChat {...healthcarePageData.globalWhatsapp7} />
      )}
      {healthcarePageData.globalWhatsapp8 && (
        <GlobalWhatsapp {...healthcarePageData.globalWhatsapp8} />
      )}
      {healthcarePageData.globalWhatsapp9 && (
        <LiveChat {...healthcarePageData.globalWhatsapp} />
      )}
      {healthcarePageData.globalWhatsapp10 && (
        <GlobalWhatsapp {...healthcarePageData.globalWhatsapp} />
      )}

      <div className="py-12 mt-8">
        <DottedLine fill="gray" />
      </div>
      {/* <EngageCustomersSection {...healthcarePageData.engageCustomers} /> */}
      <TestimonialCarousel {...healthcarePageData.testimonial} />
      <BannerCTA {...healthcarePageData.bannerCTA} />
    </div>
  );
};

export default Page;
