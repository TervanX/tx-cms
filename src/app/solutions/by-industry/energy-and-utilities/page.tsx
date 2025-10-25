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
import { energyPageData } from "./data";
// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  return (
    <div className="relative z-10 ">
      <HeroSection {...energyPageData.heroSection} />
      <div className="w-[95%] mx-auto">
        <SubSection
          title={energyPageData.subsection1.title}
          children={<InsightCards data={energyPageData.insightCards} />}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <SubSection
          title={energyPageData.subsection2.title}
          description={energyPageData.subsection2.description}
          children={
            <BrandEmailSupport {...energyPageData.brandEmailSupport} />
          }
          tag={energyPageData.subsection2.tag}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <CallAndConversation {...energyPageData.callAndConversation} />
      <div className="py-6 lg:py-20">
        <DottedLine fill="gray" />
      </div>
      <LiveChat {...energyPageData.liveChat} />
      <GlobalWhatsapp {...energyPageData.globalWhatsapp} />
      <div className="py-12 mt-8">
        <DottedLine fill="gray" />
      </div>
      <LiveChat {...energyPageData.energyAssetManagement} />
      <GlobalWhatsapp {...energyPageData.technicalSpecifications} />
      <div className="py-12 mt-8">
        <DottedLine fill="gray" />
      </div>
      <LiveChat {...energyPageData.industrySolutions} />
      <GlobalWhatsapp {...energyPageData.successMetrics} />
      <div className="py-12 mt-8">
        <DottedLine fill="gray" />
      </div>
      <LiveChat {...energyPageData.regulatoryCompliance} />
      <div className="py-12 mt-8">
        <DottedLine fill="gray" />
      </div>
      <EngageCustomersSection {...energyPageData.engageCustomers} />

      <TestimonialCarousel {...energyPageData.testimonial} />
      <BannerCTA {...energyPageData.bannerCTA} />
    </div>
  );
};

export default Page;

