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
import EngageCustomersSection from "@/components/homeComponents/EngageCustomer";
import BannerCTA from "@/components/homeComponents/Banner";
import DottedLine from "@/components/helpDeskComponents/DottedBg";
import TestimonialCarousel from "@/components/homeComponents/TestimonialCarousel";
import { developerPageData } from "./data";
gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  return (
    <div className="relative z-10 ">
      <HeroSection {...developerPageData.heroSection} />
      <div className="w-[95%] mx-auto">
        <SubSection
          title={developerPageData.subsection1.title}
          children={<InsightCards data={developerPageData.insightCards} />}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <SubSection
          title={developerPageData.subsection2.title}
          description={developerPageData.subsection2.description}
          children={
            <BrandEmailSupport {...developerPageData.brandEmailSupport} />
          }
          tag={developerPageData.subsection2.tag}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <CallAndConversation {...developerPageData.callAndConversation} />
      <div className="py-6 lg:py-20">
        <DottedLine fill="gray" />
      </div>
      <LiveChat {...developerPageData.liveChat} />
      <GlobalWhatsapp {...developerPageData.globalWhatsapp} />
      <div className="py-12 mt-8">
        <DottedLine fill="gray" />
      </div>
      <EngageCustomersSection {...developerPageData.engageCustomers} />
      <TestimonialCarousel {...developerPageData.testimonial} />
      <BannerCTA {...developerPageData.bannerCTA} />
    </div>
  );
};

export default Page;


