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
      <LiveChat {...defiFinancePageData.liveChat2} />
      <div className="py-12 mt-8">
        <DottedLine fill="gray" />
      </div>
      <EngageCustomersSection {...defiFinancePageData.engageCustomers} />
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <SubSection
          title={defiFinancePageData.subsection4.title}
          description={defiFinancePageData.subsection4.description}
          children={
            <BrandEmailSupport {...defiFinancePageData.brandEmailSupport3} />
          }
          tag={defiFinancePageData.subsection4.tag}
        />
        <SubSection
          title={defiFinancePageData.subsection5.title}
          description={defiFinancePageData.subsection5.description}
          children={
            <BrandEmailSupport {...defiFinancePageData.brandEmailSupport4} />
          }
          tag={defiFinancePageData.subsection5.tag}
        />
        <SubSection
          title={defiFinancePageData.subsection6.title}
          description={defiFinancePageData.subsection6.description}
          children={
            <BrandEmailSupport {...defiFinancePageData.brandEmailSupport5} />
          }
          tag={defiFinancePageData.subsection6.tag}
        />
        <SubSection
          title={defiFinancePageData.subsection7.title}
          description={defiFinancePageData.subsection7.description}
          children={
            <BrandEmailSupport {...defiFinancePageData.brandEmailSupport6} />
          }
          tag={defiFinancePageData.subsection7.tag}
        />
      </div>
      <TestimonialCarousel {...defiFinancePageData.testimonial} />
      <BannerCTA {...defiFinancePageData.bannerCTA} />
    </div>
  );
};

export default Page;

