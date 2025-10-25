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
import { ecommercePageData } from "./data";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  return (
    <div className="relative z-10 ">
      <HeroSection {...ecommercePageData.heroSection} />
      <div className="w-[95%] mx-auto">
        <SubSection
          title={ecommercePageData.subsection1.title}
          children={<InsightCards data={ecommercePageData.insightCards} />}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <SubSection
          title={ecommercePageData.subsection2.title}
          description={ecommercePageData.subsection2.description}
          children={
            <BrandEmailSupport {...ecommercePageData.brandEmailSupport} />
          }
          tag={ecommercePageData.subsection2.tag}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <CallAndConversation {...ecommercePageData.callAndConversation} />
     
      <LiveChat {...ecommercePageData.liveChat} />
      <GlobalWhatsapp {...ecommercePageData.globalWhatsapp} />

      {ecommercePageData.globalWhatsapp2 && (
        <LiveChat {...ecommercePageData.globalWhatsapp2} />
      )}

      {ecommercePageData.globalWhatsapp3 && (
        <GlobalWhatsapp {...ecommercePageData.globalWhatsapp3} />
      )}

      {ecommercePageData.globalWhatsapp4 && (
        <LiveChat {...ecommercePageData.globalWhatsapp4} />
      )}

      {ecommercePageData.globalWhatsapp5 && (
        <GlobalWhatsapp {...ecommercePageData.globalWhatsapp5} />
      )}

      {ecommercePageData.globalWhatsapp6 && (
        <LiveChat {...ecommercePageData.globalWhatsapp6} />
      )}
      {ecommercePageData.globalWhatsapp7 && (
        <GlobalWhatsapp {...ecommercePageData.globalWhatsapp7} />
      )}

      {ecommercePageData.globalWhatsapp8 && (
        <LiveChat {...ecommercePageData.globalWhatsapp8} />
      )}

      {ecommercePageData.globalWhatsapp9 && (
        <GlobalWhatsapp {...ecommercePageData.globalWhatsapp9} />
      )}

      {/* <EngageCustomersSection {...ecommercePageData.engageCustomers} /> */}
      <TestimonialCarousel {...ecommercePageData.testimonial} />
      <BannerCTA {...ecommercePageData.bannerCTA} />
    </div>
  );
};

export default Page;
