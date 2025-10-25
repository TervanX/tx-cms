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
import { cryptoExchangesPageData } from "./data";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  return (
    <div className="relative z-10 ">
      <HeroSection {...cryptoExchangesPageData.heroSection} />
      <div className="w-[95%] mx-auto">
        <SubSection
          title={cryptoExchangesPageData.subsection1.title}
          children={
            <InsightCards data={cryptoExchangesPageData.insightCards} />
          }
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <SubSection
          title={cryptoExchangesPageData.subsection2.title}
          description={cryptoExchangesPageData.subsection2.description}
          children={
            <BrandEmailSupport
              {...cryptoExchangesPageData.brandEmailSupport}
            />
          }
          tag={cryptoExchangesPageData.subsection2.tag}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <CallAndConversation {...cryptoExchangesPageData.callAndConversation} />
      <div className="py-6 lg:py-20">
        <DottedLine fill="gray" />
      </div>
      <LiveChat {...cryptoExchangesPageData.liveChat} />
      <GlobalWhatsapp {...cryptoExchangesPageData.globalWhatsapp} />
      <div className="py-12 mt-8">
        <DottedLine fill="gray" />
      </div>
      <LiveChat {...cryptoExchangesPageData.technicalSpecifications} />
      <GlobalWhatsapp {...cryptoExchangesPageData.keyProducts} />
      <div className="py-12 mt-8">
        <DottedLine fill="gray" />
      </div>
      <LiveChat {...cryptoExchangesPageData.exchangeUseCases} />
      <GlobalWhatsapp {...cryptoExchangesPageData.enterpriseFeatures} />
      <div className="py-12 mt-8">
        <DottedLine fill="gray" />
      </div>
      <EngageCustomersSection {...cryptoExchangesPageData.engageCustomers} />
      <TestimonialCarousel {...cryptoExchangesPageData.testimonial} />
      <BannerCTA {...cryptoExchangesPageData.bannerCTA} />
    </div >
  );
};

export default Page;

