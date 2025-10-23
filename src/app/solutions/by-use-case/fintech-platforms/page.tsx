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
      <HeroSection {...fintechPlatformsPageData.heroSection} />
      <div className="w-[95%] mx-auto">
        <SubSection
          title={fintechPlatformsPageData.subsection1.title}
          children={
            <InsightCards data={fintechPlatformsPageData.insightCards} />
          }
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <SubSection
          title={fintechPlatformsPageData.subsection2.title}
          description={fintechPlatformsPageData.subsection2.description}
          children={
            <BrandEmailSupport
              {...fintechPlatformsPageData.brandEmailSupport}
            />
          }
          tag={fintechPlatformsPageData.subsection2.tag}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <CallAndConversation {...fintechPlatformsPageData.callAndConversation} />
      <div className="py-6 lg:py-20">
        <DottedLine fill="gray" />
      </div>
      <LiveChat {...fintechPlatformsPageData.liveChat} />
      <GlobalWhatsapp {...fintechPlatformsPageData.globalWhatsapp} />
      <div className="py-12 mt-8">
        <DottedLine fill="gray" />
      </div>
      <EngageCustomersSection {...fintechPlatformsPageData.engageCustomers} />
      <TestimonialCarousel {...fintechPlatformsPageData.testimonial} />
      <BannerCTA {...fintechPlatformsPageData.bannerCTA} />
    </div>
  );
};

export default Page;

const fintechPlatformsPageData = {
  heroSection: {
    heading: "Fintech Platforms",
    subheading: "Build banks, wallets, or payment apps",
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
    title: "Centralize all your fintech channels in one connected platform",
  },

  insightCards: [
    {
      step: "01",
      title: "Complete fintech platform oversight",
      description:
        "Manage all your banking services, wallet integrations, and payment channels in a single platform for complete visibility across your fintech ecosystem.",
    },
    {
      step: "02",
      title: "Real-time financial analytics",
      description:
        "Track transaction volumes, user activity, and platform performance with live data feeds and comprehensive fintech dashboards.",
    },
    {
      step: "03",
      title: "AI-powered financial insights",
      description:
        "Leverage machine learning to optimize payment flows, predict user behavior, and automate financial operations for enhanced platform performance.",
    },
  ],

  subsection2: {
    title: "Professional email support for fintech platforms",
    description:
      "Manage user inquiries, payment support, and security communications with professional email handling that reflects your fintech brand standards.",
    tag: "Email",
  },

  brandEmailSupport: {
    cards: [
      {
        title: "Maintain fintech brand consistency",
        description:
          "Support multiple financial products, assign platform logos and create professional signatures that reinforce your fintech identity in every user communication.",
        img: "/assets/highlight.webp",
        imageAlt: "Maintain fintech brand consistency",
      },
      {
        title: "Seamless user conversations",
        description:
          "Move user conversations from banking apps to email, allowing customers to continue financial discussions and support inquiries at their convenience.",
        img: "/assets/highlight.webp",
        imageAlt: "Seamless user conversations",
      },
      {
        title: "Track platform service performance",
        description:
          "Monitor response times, transaction resolution rates, and user satisfaction to maintain high fintech service standards and regulatory compliance.",
        img: "/assets/highlight.webp",
        imageAlt: "Track platform service performance",
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
    title: "Fintech Platform Communication Platform",
    tag: "Platform Services",
    description:
      "Discover features designed specifically for fintech platforms to enhance user support, streamline financial operations, and enable secure banking and payment services.",
  },

  liveChat: {
    title: "Live chat with fintech-focused Messenger",
    tag: "Messenger",
    description:
      "Deliver instant financial support that's personalized, contextual, and on-brand across your banking apps, wallet interfaces, and payment platforms.",
    cards: [
      {
        title: "Fintech-branded experience",
        description:
          "Customize the Messenger to match your fintech platform's branding, creating a seamless user experience from account opening to advanced financial services.",
        img: "/assets/highlight.webp",
      },
      {
        title: "Self-serve for common inquiries",
        description:
          "Empower users with self-serve options for transaction history, account management, payment features, and FAQs—reducing support load during peak transaction periods.",
        img: "/assets/highlight.webp",
      },
      {
        title: "Multi-service & multilingual support",
        description:
          "Manage multiple financial products, resolve user queries in 45 languages and provide consistent support experiences across different banking services.",
        img: "/assets/highlight.webp",
      },
    ],
    backgroundImage: "/assets/image30.webp",
  },

  globalWhatsapp: {
    cards: [
      {
        backgroundImage: "/assets/image30.webp",
        title: "Connect with international users",
        description:
          "Manage all your WhatsApp fintech accounts and user interactions in one workspace, ensuring you never miss important transaction alerts or user inquiries.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
      {
        backgroundImage: "/assets/image30.webp",
        title: "Rich financial communications",
        description:
          "Send and receive transaction confirmations, account updates, and security alerts directly from the Inbox, providing comprehensive support for fintech users.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
      {
        backgroundImage: "/assets/image30.webp",
        title: "Measure user satisfaction",
        description:
          "Track how satisfied users are with your fintech services and platform experience, and compare performance across different communication channels.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
    ],
    title: "Global fintech support through WhatsApp",
    tag: "WhatsApp",
    backgroundImage: "/assets/image30.webp",
    description:
      "Expand your fintech reach and provide instant support to international users on the world's most popular messaging app for financial communications.",
  },

  engageCustomers: {
    badgeText: "Fintech platforms and messaging",
    title: "Engage users on their preferred platforms",
    columns: [
      {
        title: "Banking Apps",
        description:
          "Respond to user inquiries, transaction questions, and account management requests directly from your fintech dashboard, enhancing the banking experience.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_01.webp?&q=90",
        imageAlt: "Banking Apps",
      },
      {
        title: "Financial Social Platforms",
        description:
          "Route messages from financial forums, investment communities, and banking networks to a unified Inbox, making it easy to manage user communications.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_02.webp?&q=90",
        imageAlt: "Financial Social Platforms",
      },
      {
        title: "SMS Transaction Alerts",
        description:
          "Send and receive payment notifications, security alerts, and account updates in 45 languages, enabling real-time communication with fintech users.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_03.webp?&q=90",
        imageAlt: "SMS Transaction Alerts",
      },
    ],
  },

  testimonial: {
    title: "Transformative fintech integration",
    quote:
      "Since implementing TervanX fintech solutions, our platform improved user communication efficiency by 85%, reduced payment support time by 70%, and enhanced user satisfaction with instant, secure financial support across multiple services",
    role: "Fintech Platform Director",
    name: "Daniel Park",
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
