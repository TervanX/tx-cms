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
import { educationPageData } from "./data";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  return (
    <div className="relative z-10 ">
      <HeroSection {...educationPageData.heroSection} />
      <div className="w-[95%] mx-auto">
        <SubSection
          title={educationPageData.subsection1.title}
          children={<InsightCards data={educationPageData.insightCards} />}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <SubSection
          title={educationPageData.subsection2.title}
          description={educationPageData.subsection2.description}
          children={
            <BrandEmailSupport {...educationPageData.brandEmailSupport} />
          }
          tag={educationPageData.subsection2.tag}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <CallAndConversation {...educationPageData.callAndConversation} />
      <div className="py-6 lg:py-20">
        <DottedLine fill="gray" />
      </div>
      <LiveChat {...educationPageData.liveChat} />
      <GlobalWhatsapp {...educationPageData.globalWhatsapp} />
      <div className="py-12 mt-8">
        <DottedLine fill="gray" />
      </div>
      <LiveChat {...educationPageData.campusEcosystem} />
      <GlobalWhatsapp {...educationPageData.corporateLearning} />
      <div className="py-12 mt-8">
        <DottedLine fill="gray" />
      </div>
      <LiveChat {...educationPageData.technicalSpecifications} />
      <GlobalWhatsapp {...educationPageData.educationSolutions} />
      <div className="py-12 mt-8">
        <DottedLine fill="gray" />
      </div>
      <LiveChat {...educationPageData.successMetrics} />
      <GlobalWhatsapp {...educationPageData.complianceFramework} />
      <div className="py-12 mt-8">
        <DottedLine fill="gray" />
      </div>
      <EngageCustomersSection {...educationPageData.engageCustomers} />
      <TestimonialCarousel {...educationPageData.testimonial} />
      <BannerCTA {...educationPageData.bannerCTA} />
    </div>
  );
};

export default Page;

