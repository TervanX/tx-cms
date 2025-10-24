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
import { embeddedFinancePageData } from "./data";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  return (
    <div className="relative z-10 ">
      <HeroSection {...embeddedFinancePageData.heroSection} />
      <div className="w-[95%] mx-auto">
        <SubSection
          title={embeddedFinancePageData.subsection1.title}
          children={
            <InsightCards data={embeddedFinancePageData.insightCards} />
          }
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <SubSection
          title={embeddedFinancePageData.subsection2.title}
          description={embeddedFinancePageData.subsection2.description}
          children={
            <BrandEmailSupport {...embeddedFinancePageData.brandEmailSupport} />
          }
          tag={embeddedFinancePageData.subsection2.tag}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <CallAndConversation {...embeddedFinancePageData.callAndConversation} />
      <div className="py-6 lg:py-20">
        <DottedLine fill="gray" />
      </div>
      <LiveChat {...embeddedFinancePageData.liveChat} />
      <GlobalWhatsapp {...embeddedFinancePageData.globalWhatsapp} />
      <LiveChat {...embeddedFinancePageData.liveChat2} />
      <div className="py-12 mt-8">
        <DottedLine fill="gray" />
      </div>
      <EngageCustomersSection {...embeddedFinancePageData.engageCustomers} />
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <SubSection
          title={embeddedFinancePageData.subsection4.title}
          description={embeddedFinancePageData.subsection4.description}
          children={
            <BrandEmailSupport {...embeddedFinancePageData.brandEmailSupport3} />
          }
          tag={embeddedFinancePageData.subsection4.tag}
        />
        <SubSection
          title={embeddedFinancePageData.subsection5.title}
          description={embeddedFinancePageData.subsection5.description}
          children={
            <BrandEmailSupport {...embeddedFinancePageData.brandEmailSupport4} />
          }
          tag={embeddedFinancePageData.subsection5.tag}
        />
      </div>
      <TestimonialCarousel {...embeddedFinancePageData.testimonial} />
      <BannerCTA {...embeddedFinancePageData.bannerCTA} />
    </div>
  );
};

export default Page;

