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

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  return (
    <div className="relative z-10 ">
      <HeroSection {...energyUtilitiesPageData.heroSection} />
      <div className="w-[95%] mx-auto">
        <SubSection
          title={energyUtilitiesPageData.subsection1.title}
          children={
            <InsightCards data={energyUtilitiesPageData.insightCards} />
          }
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <SubSection
          title={energyUtilitiesPageData.subsection2.title}
          description={energyUtilitiesPageData.subsection2.description}
          children={
            <BrandEmailSupport {...energyUtilitiesPageData.brandEmailSupport} />
          }
          tag={energyUtilitiesPageData.subsection2.tag}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <CallAndConversation {...energyUtilitiesPageData.callAndConversation} />
      <div className="py-6 lg:py-20">
        <DottedLine fill="gray" />
      </div>
      <LiveChat {...energyUtilitiesPageData.liveChat} />
      <GlobalWhatsapp {...energyUtilitiesPageData.globalWhatsapp} />
      <div className="py-12 mt-8">
        <DottedLine fill="gray" />
      </div>
      <EngageCustomersSection {...energyUtilitiesPageData.engageCustomers} />
      <TestimonialCarousel {...energyUtilitiesPageData.testimonial} />
      <BannerCTA {...energyUtilitiesPageData.bannerCTA} />
    </div>
  );
};

export default Page;

const energyUtilitiesPageData = {
  heroSection: {
    heading: "Energy & Utilities",
    subheading:
      "Streamline energy transactions and utility payments with secure crypto solutions for modern infrastructure",
    tag: "TX channel",
    primaryButton: {
      text: "Login",
      href: "/sign-up",
    },
    secondaryButton: {
      text: "Contact Sales",
      href: "/contact/contact-sales",
    },
  },
  subsection1: {
    title: "Centralize all your energy channels in one connected platform",
  },

  insightCards: [
    {
      step: "01",
      title: "Complete utility oversight",
      description:
        "Manage all your energy distribution channels, customer service operations, and utility management in a single platform for complete visibility across your energy infrastructure.",
    },
    {
      step: "02",
      title: "Real-time energy analytics",
      description:
        "Track energy consumption, payment processing, and grid performance with live data feeds and comprehensive utility management dashboards.",
    },
    {
      step: "03",
      title: "AI-powered utility insights",
      description:
        "Leverage machine learning to predict energy demand, optimize grid performance, and automate utility operations for enhanced efficiency and reliability.",
    },
  ],

  subsection2: {
    title: "Professional email support for utility providers",
    description:
      "Manage customer billing inquiries, service requests, and emergency communications with professional email handling that reflects your utility brand standards.",
    tag: "Email",
  },

  brandEmailSupport: {
    cards: [
      {
        title: "Maintain utility brand consistency",
        description:
          "Support multiple service regions, assign utility logos and create professional signatures that reinforce your energy brand in every customer communication.",
        img: "/assets/highlight.webp",
        imageAlt: "Maintain utility brand consistency",
      },
      {
        title: "Seamless customer service conversations",
        description:
          "Move customer conversations from emergency hotlines to email, allowing ratepayers to continue service discussions and billing inquiries at their convenience.",
        img: "/assets/highlight.webp",
        imageAlt: "Seamless customer service conversations",
      },
      {
        title: "Track utility service performance",
        description:
          "Monitor response times, service resolution rates, and customer satisfaction to maintain high reliability standards and regulatory compliance.",
        img: "/assets/highlight.webp",
        imageAlt: "Track utility service performance",
      },
    ],
    backgroundImage: "/assets/image30.webp",
    backgroundAlt: "DataSectionProps",
  },

  callAndConversation: {
    image:
      "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
    backgroundImage: "/assets/image30.webp",
    primaryButton: {
      text: "Learn More",
      href: "/learn-more",
    },
    alignLeft: true,
    title: "Energy & Utilities Communication Platform",
    tag: "Utility Services",
    description:
      "Discover features designed specifically for energy providers to enhance customer support, streamline operations, and enable secure crypto payments for utility services.",
  },

  liveChat: {
    title: "Live chat with utility-focused Messenger",
    tag: "Messenger",
    description:
      "Deliver instant customer support that's personalized, contextual, and on-brand across your utility websites, customer portals, and emergency service platforms.",
    cards: [
      {
        title: "Utility-branded experience",
        description:
          "Customize the Messenger to match your energy company's branding, creating a seamless customer experience from billing inquiries to outage reporting.",
        img: "/assets/highlight.webp",
      },
      {
        title: "Self-serve for common inquiries",
        description:
          "Empower customers with self-serve options for billing questions, outage maps, energy saving tips, and FAQs—reducing call center load during peak demand periods.",
        img: "/assets/highlight.webp",
      },
      {
        title: "Multi-region & multilingual support",
        description:
          "Manage multiple service territories, resolve customer queries in 45 languages and provide consistent support experiences across diverse communities.",
        img: "/assets/highlight.webp",
      },
    ],
    backgroundImage: "/assets/image30.webp",
  },

  globalWhatsapp: {
    cards: [
      {
        backgroundImage: "/assets/image30.webp",
        title: "Connect with service communities",
        description:
          "Manage all your WhatsApp utility accounts and customer interactions in one workspace, ensuring you never miss critical outage reports or service requests.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
      {
        backgroundImage: "/assets/image30.webp",
        title: "Rich utility service communications",
        description:
          "Send and receive outage maps, billing statements, and service updates directly from the Inbox, providing comprehensive support for utility customers.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
      {
        backgroundImage: "/assets/image30.webp",
        title: "Measure customer satisfaction",
        description:
          "Track how satisfied customers are with your utility services and emergency response, and compare performance across different communication channels.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
    ],
    title: "Global utility support through WhatsApp",
    tag: "WhatsApp",
    backgroundImage: "/assets/image30.webp",
    description:
      "Expand your service reach and provide instant support to communities on the world's most popular messaging app for utility communications and emergency alerts.",
  },

  engageCustomers: {
    badgeText: "Utility platforms and messaging",
    title: "Engage ratepayers on their preferred platforms",
    columns: [
      {
        title: "Utility Customer Portals",
        description:
          "Respond to customer inquiries, billing questions, and service requests directly from your utility dashboard, enhancing the customer service experience.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_01.webp?&q=90",
        imageAlt: "Utility Customer Portals",
      },
      {
        title: "Community Social Platforms",
        description:
          "Route messages from community forums, neighborhood groups, and local social media to a unified Inbox, making it easy to manage public utility communications.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_02.webp?&q=90",
        imageAlt: "Community Social Platforms",
      },
      {
        title: "SMS Emergency Alerts",
        description:
          "Send and receive outage notifications, emergency updates, and service restoration alerts in 45 languages, enabling real-time communication with communities.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_03.webp?&q=90",
        imageAlt: "SMS Emergency Alerts",
      },
    ],
  },

  testimonial: {
    title: "Transformative energy payments",
    quote:
      "Since implementing TervanX crypto payments, our utility company reduced payment processing costs by 55%, enabled seamless micro-payments for energy usage, and improved customer satisfaction with faster, more transparent billing processes",
    role: "Chief Operations Officer",
    name: "Robert Chen",
  },

  bannerCTA: {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    backgroundImage: "/assets/custom-bg.webp",
    primaryButton: {
      text: "Get Started",
      href: "/get-started",
    },
    secondaryButton: {
      text: "Learn More",
      href: "/learn-more",
    },
  },
};
