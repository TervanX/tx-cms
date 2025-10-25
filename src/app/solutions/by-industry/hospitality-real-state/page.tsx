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
import { realEstatePageData } from "./data";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  return (
    <div className="relative z-10 ">
      <HeroSection {...realEstatePageData.heroSection} />
      <div className="w-[95%] mx-auto">
        <SubSection
          title={realEstatePageData.subsection1.title}
          children={
            <InsightCards data={realEstatePageData.insightCards} />
          }
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <SubSection
          title={realEstatePageData.subsection2.title}
          description={realEstatePageData.subsection2.description}
          children={
            <BrandEmailSupport
              {...realEstatePageData.brandEmailSupport}
            />
          }
          tag={realEstatePageData.subsection2.tag}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <CallAndConversation
        {...realEstatePageData.callAndConversation}
      />
      <div className="py-6 lg:py-20">
        <DottedLine fill="gray" />
      </div>
      <LiveChat {...realEstatePageData.liveChat} />
      <GlobalWhatsapp {...realEstatePageData.globalWhatsapp} />
      <LiveChat {...realEstatePageData.commercialRealEstate} />
      <GlobalWhatsapp {...realEstatePageData.realEstateFinance} />
      <div className="py-12 mt-8">
        <DottedLine fill="gray" />
      </div>
      <EngageCustomersSection
        {...realEstatePageData.engageCustomers}
      />
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <SubSection
          title="Technical Specifications"
          description=""
          children={
            <BrandEmailSupport {...realEstatePageData.technicalSpecifications} />
          }
          tag=""
        />
        <SubSection
          title="Industry Solutions"
          description=""
          children={
            <BrandEmailSupport {...realEstatePageData.industrySolutions} />
          }
          tag=""
        />
        <SubSection
          title={realEstatePageData.subsection3.title}
          description={realEstatePageData.subsection3.description}
          children={
            <BrandEmailSupport {...realEstatePageData.brandEmailSupport2} />
          }
          tag={realEstatePageData.subsection3.tag}
        />
        <SubSection
          title="Implementation Timeline"
          description=""
          children={
            <BrandEmailSupport {...realEstatePageData.implementationTimeline} />
          }
          tag=""
        />
        <SubSection
          title="Compliance Framework"
          description=""
          children={
            <BrandEmailSupport {...realEstatePageData.complianceFramework} />
          }
          tag=""
        />
      </div>
      <TestimonialCarousel {...realEstatePageData.testimonial} />
      <BannerCTA {...realEstatePageData.bannerCTA} />
    </div>
  );
};

export default Page;

