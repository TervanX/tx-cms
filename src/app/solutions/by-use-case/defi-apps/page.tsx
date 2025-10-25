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
import { defiFinancePageData } from "./data";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  return (
    <div className="relative z-10 ">
      <HeroSection {...defiFinancePageData.heroSection} />
      <div className="w-[95%] mx-auto">
        <SubSection
          title={defiFinancePageData.subsection1.title}
          children={
            <InsightCards data={defiFinancePageData.insightCards} />
          }
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <SubSection
          title={defiFinancePageData.subsection2.title}
          description={defiFinancePageData.subsection2.description}
          children={
            <BrandEmailSupport {...defiFinancePageData.brandEmailSupport} />
          }
          tag={defiFinancePageData.subsection2.tag}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <CallAndConversation {...defiFinancePageData.callAndConversation} />
      <div className="py-6 lg:py-20">
        <DottedLine fill="gray" />
      </div>
      <LiveChat {...defiFinancePageData.liveChat} />
      <GlobalWhatsapp {...defiFinancePageData.globalWhatsapp} />
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <LiveChat {...defiFinancePageData.liveChat2} />
      <GlobalWhatsapp {...defiFinancePageData.technicalSpecifications} />
      <div className="py-12 mt-8">
        <DottedLine fill="gray" />
      </div>
      <LiveChat {...defiFinancePageData.protocolServices} />
      <GlobalWhatsapp {...defiFinancePageData.defiUseCases} />
      <div className="py-12 mt-8">
        <DottedLine fill="gray" />
      </div>
      <LiveChat {...defiFinancePageData.enterpriseFeatures} />
      <div className="py-12 mt-8">
        <DottedLine fill="gray" />
      </div>
      <EngageCustomersSection {...defiFinancePageData.engageCustomers} />
      <TestimonialCarousel {...defiFinancePageData.testimonial} />
      <BannerCTA {...defiFinancePageData.bannerCTA} />
    </div>
  );
};

export default Page;

