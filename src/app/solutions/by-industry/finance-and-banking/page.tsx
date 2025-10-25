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
import { financeBankingPageData } from "./data";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  return (
    <div className="relative z-10 ">
      <HeroSection {...financeBankingPageData.heroSection} />
      <div className="w-[95%] mx-auto">
        <SubSection
          title={financeBankingPageData.subsection1.title}
          children={<InsightCards data={financeBankingPageData.insightCards} />}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <SubSection
          title={financeBankingPageData.subsection2.title}
          description={financeBankingPageData.subsection2.description}
          children={
            <BrandEmailSupport {...financeBankingPageData.brandEmailSupport} />
          }
          tag={financeBankingPageData.subsection2.tag}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <CallAndConversation {...financeBankingPageData.callAndConversation} />
      <div className="py-6 lg:py-20">
        <DottedLine fill="gray" />
      </div>
      <LiveChat {...financeBankingPageData.liveChat} />
      <GlobalWhatsapp {...financeBankingPageData.globalWhatsapp} />
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      {financeBankingPageData.globalWhatsapp2 && (
        <GlobalWhatsapp {...financeBankingPageData.globalWhatsapp2} />
      )}

      <div className="py-12 mt-8">
        <DottedLine fill="gray" />
      </div>
      {financeBankingPageData.globalWhatsapp3 && (
        <GlobalWhatsapp {...financeBankingPageData.globalWhatsapp3} />
      )}
      <div className="py-12 mt-8">
        <DottedLine fill="gray" />
      </div>
      {financeBankingPageData.globalWhatsapp4 && (
        <GlobalWhatsapp {...financeBankingPageData.globalWhatsapp4} />
      )}
      <div className="py-12 mt-8">
        <DottedLine fill="gray" />
      </div>
      {financeBankingPageData.globalWhatsapp5 && (
        <GlobalWhatsapp {...financeBankingPageData.globalWhatsapp5} />
      )}
      <div className="py-12 mt-8">
        <DottedLine fill="gray" />
      </div>
      <EngageCustomersSection {...financeBankingPageData.engageCustomers} />
      <TestimonialCarousel {...financeBankingPageData.testimonial} />
      <BannerCTA {...financeBankingPageData.bannerCTA} />
    </div>
  );
};

export default Page;
