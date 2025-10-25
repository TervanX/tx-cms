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
import { creatorsPageData } from "./data";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  return (
    <div className="relative z-10 ">
      <HeroSection {...creatorsPageData.heroSection} />
      <div className="w-[95%] mx-auto">
        <SubSection
          title={creatorsPageData.subsection1.title}
          children={<InsightCards data={creatorsPageData.insightCards} />}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <SubSection
          title={creatorsPageData.subsection2.title}
          description={creatorsPageData.subsection2.description}
          children={
            <BrandEmailSupport {...creatorsPageData.brandEmailSupport} />
          }
          tag={creatorsPageData.subsection2.tag}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <CallAndConversation {...creatorsPageData.callAndConversation} />
      <div className="py-6 lg:py-20">
        <DottedLine fill="gray" />
      </div>
      <LiveChat {...creatorsPageData.liveChat} />
      <GlobalWhatsapp {...creatorsPageData.globalWhatsapp} />
      <div className="py-6 lg:py-20">
        <DottedLine fill="gray" />
      </div>
      <LiveChat {...creatorsPageData.creatorFinancialTools} />
      <GlobalWhatsapp {...creatorsPageData.collaborationNetworking} />
      <div className="py-12 mt-8">
        <DottedLine fill="gray" />
      </div>
      <LiveChat {...creatorsPageData.technicalSpecifications} />
      <GlobalWhatsapp {...creatorsPageData.creatorSolutions} />
      <div className="py-12 mt-8">
        <DottedLine fill="gray" />
      </div>
      <LiveChat {...creatorsPageData.gettingStartedTimeline} />
      <GlobalWhatsapp {...creatorsPageData.successMetrics} />
      <div className="py-12 mt-8">
        <DottedLine fill="gray" />
      </div>
      <EngageCustomersSection {...creatorsPageData.engageCustomers} />
      <TestimonialCarousel {...creatorsPageData.testimonial} />
      <BannerCTA {...creatorsPageData.bannerCTA} />
    </div>
  );
};

export default Page;

