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
      <HeroSection {...enterprisePageData.heroSection} />
      <div className="w-[95%] mx-auto">
        <SubSection
          title={enterprisePageData.subsection1.title}
          children={<InsightCards data={enterprisePageData.insightCards} />}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <SubSection
          title={enterprisePageData.subsection2.title}
          description={enterprisePageData.subsection2.description}
          children={
            <BrandEmailSupport {...enterprisePageData.brandEmailSupport} />
          }
          tag={enterprisePageData.subsection2.tag}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <CallAndConversation {...enterprisePageData.callAndConversation} />
      <div className="py-6 lg:py-20">
        <DottedLine fill="gray" />
      </div>
      <LiveChat {...enterprisePageData.liveChat} />
      <GlobalWhatsapp {...enterprisePageData.globalWhatsapp} />
      <div className="py-12 mt-8">
        <DottedLine fill="gray" />
      </div>
      <EngageCustomersSection {...enterprisePageData.engageCustomers} />
      <TestimonialCarousel {...enterprisePageData.testimonial} />
      <BannerCTA {...enterprisePageData.bannerCTA} />
    </div>
  );
};

export default Page;

const enterprisePageData = {
  heroSection: {
    heading: "Enterprises",
    subheading: "Scale your digital asset ecosystem globally.",
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
    title: "Centralize all your channels in one connected platform",
  },

  insightCards: [
    {
      step: "01",
      title: "Enterprise-grade oversight",
      description:
        "Manage all your enterprise channels in a single workspace for total visibility into every conversation and touchpoint across global operations.",
    },
    {
      step: "02",
      title: "Real-time enterprise analytics",
      description:
        "Monitor all enterprise transactions and blockchain activity with live data feeds and comprehensive dashboards for multi-region compliance.",
    },
    {
      step: "03",
      title: "AI-powered enterprise insights",
      description:
        "Leverage machine learning to predict market trends and optimize your enterprise crypto operations at scale automatically.",
    },
  ],

  subsection2: {
    title: "Enterprise-grade email support for global operations",
    description:
      "Forward your enterprise support emails, manage multiple domains and brands across regions, create custom signatures and handle every email in one unified platform.",
    tag: "Email",
  },

  brandEmailSupport: {
    cards: [
      {
        title: "Ensure every email is on-brand",
        description:
          "Support multiple email domains, assign logos and create custom signatures to ensure every customer email reflects your unique brand identity.",
        img: "/assets/highlight.webp",
        imageAlt: "Ensure every email is on-brand",
      },
      {
        title: "Continue the conversation",
        description:
          "Move the conversation from live chat to email, and let customers pick up when it's most convenient to them.",
        img: "/assets/highlight.webp",
        imageAlt: "Continue the conversation",
      },
      {
        title: "Track email performance",
        description:
          "Monitor performance metrics and customer satisfaction to maintain high CSAT for your email support.",
        img: "/assets/highlight.webp",
        imageAlt: "Track email performance",
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
    title: "Enterprise Communication Solutions",
    tag: "Enterprise",
    description:
      "Discover enterprise-grade features that will transform your workflow and boost productivity across global teams.",
  },

  liveChat: {
    title: "Enterprise live chat with best-in-class Messenger",
    tag: "Messenger",
    description:
      "Deliver enterprise-grade live chat support that's personalized, contextual, and on-brand across your global product, app, and website deployments.",
    cards: [
      {
        title: "Enterprise customization",
        description:
          "Customize the Messenger to match your enterprise brand, wherever your customers are within your product, app, or website across global markets.",
        img: "/assets/highlight.webp",
      },
      {
        title: "Enterprise self-serve enabled",
        description:
          "Tailor the Messenger with enterprise self-serve apps that empower your customers to find help articles, read product updates, and more—without having to start a conversation.",
        img: "/assets/highlight.webp",
      },
      {
        title: "Multi-brand & multilingual enterprise",
        description:
          "Support multiple enterprise brands, resolve queries in 45 languages and deliver exceptional experiences within the Messenger—across all timezones and regions.",
        img: "/assets/highlight.webp",
      },
    ],
    backgroundImage: "/assets/image30.webp",
  },

  globalWhatsapp: {
    cards: [
      {
        backgroundImage: "/assets/image30.webp",
        title: "Integrate all enterprise accounts",
        description:
          "Connect and manage all of your enterprise WhatsApp business accounts in a single workspace, to ensure you never miss a message across global operations.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
      {
        backgroundImage: "/assets/image30.webp",
        title: "Deliver enterprise context-rich support",
        description:
          "Send and receive images, attachments and more directly from the Enterprise Inbox, so your support agents have all the context they need to resolve issues faster.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
      {
        backgroundImage: "/assets/image30.webp",
        title: "Capture enterprise CSAT on WhatsApp",
        description:
          "Monitor how satisfied enterprise customers are with the support provided, and how it compares to your other enterprise channels globally.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
    ],
    title: "Global enterprise support is just a WhatsApp away",
    tag: "WhatsApp",
    backgroundImage: "/assets/image30.webp",
    description:
      "Modernise your enterprise support and expand your reach on the world's most popular messaging app for business communications.",
  },

  engageCustomers: {
    badgeText: "Enterprise SMS and social media",
    title: "Engage enterprise customers on the apps they use everyday",
    columns: [
      {
        title: "Instagram",
        description:
          "Respond to Instagram DMs, story replies and mentions directly from Intercom, and interact with enterprise customers using rich multi-media, from emojis to images.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_01.webp?&q=90",
        imageAlt: "Instagram",
      },
      {
        title: "Facebook",
        description:
          "Route direct messages to the Enterprise Inbox, so customers can reach out directly from Facebook for a seamless enterprise experience.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_02.webp?&q=90",
        imageAlt: "Facebook",
      },
      {
        title: "SMS",
        description:
          "Send and receive enterprise text messages from the Inbox in 45 languages, to enable real-time, conversational support with your global enterprise customers.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_03.webp?&q=90",
        imageAlt: "SMS",
      },
    ],
  },

  testimonial: {
    title: "Enterprise-grade omnichannel support",
    quote:
      "Since adopting TervanX Enterprise Solutions, we've achieved 80% faster reconciliation and reduced transaction errors to near zero across our global operations",
    role: "VP of Enterprise Digital Finance",
    name: "Maya Okoro",
  },

  bannerCTA: {
    title: "Enterprise Solutions",
    backgroundImage: "/assets/image30.webp",
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
