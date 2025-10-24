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
  console.log("Called");
  return (
    <div className="relative z-10 ">
      <HeroSection {...startupPageData.heroSection} />
      <div className="w-[95%] mx-auto">
        <SubSection
          title={startupPageData.subsection1.title}
          children={<InsightCards data={startupPageData.insightCards} />}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <SubSection
          title={startupPageData.subsection2.title}
          description={startupPageData.subsection2.description}
          children={
            <BrandEmailSupport {...startupPageData.brandEmailSupport} />
          }
          tag={startupPageData.subsection2.tag}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <CallAndConversation {...startupPageData.callAndConversation} />
      <div className="py-6 lg:py-20">
        <DottedLine fill="gray" />
      </div>
      <LiveChat {...startupPageData.liveChat} />
      <GlobalWhatsapp {...startupPageData.globalWhatsapp} />
      <div className="py-12 mt-8">
        <DottedLine fill="gray" />
      </div>
      <EngageCustomersSection {...startupPageData.engageCustomers} />
      <TestimonialCarousel {...startupPageData.testimonial} />
      <BannerCTA {...startupPageData.bannerCTA} />
    </div>
  );
};

export default Page;

const startupPageData = {
  heroSection: {
    heading: "Startups",
    subheading: "Build your product on TervanX infrastructure",
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
      title: "Get complete oversight",
      description:
        "Manage all your startup channels in a single workspace for total visibility into every conversation and customer touchpoint as you scale.",
    },
    {
      step: "02",
      title: "Real-time startup analytics",
      description:
        "Monitor all your transactions and blockchain activity with live data feeds and comprehensive dashboards designed for growing businesses.",
    },
    {
      step: "03",
      title: "AI-powered insights for growth",
      description:
        "Leverage machine learning to predict trends and optimize your crypto operations automatically, helping you scale efficiently.",
    },
  ],

  subsection2: {
    title: "On-brand email support from your inbox to theirs",
    description:
      "Forward your existing support email, manage multiple domains and brands, create custom signatures and handle every email in one place - perfect for startups scaling their operations.",
    tag: "Email",
  },

  brandEmailSupport: {
    cards: [
      {
        title: "Ensure every email is on-brand",
        description:
          "Support multiple email domains, assign logos and create custom signatures to ensure every customer email reflects your unique startup brand identity.",
        img: "/assets/highlight.webp",
        imageAlt: "Ensure every email is on-brand",
      },
      {
        title: "Continue the conversation",
        description:
          "Move the conversation from live chat to email, and let customers pick up when it's most convenient to them - essential for startups with limited resources.",
        img: "/assets/highlight.webp",
        imageAlt: "Continue the conversation",
      },
      {
        title: "Track email performance",
        description:
          "Monitor performance metrics and customer satisfaction to maintain high CSAT for your email support as you grow your customer base.",
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
    title: "Startup Communication Solutions",
    tag: "Startup",
    description:
      "Discover features designed for startups that will transform your workflow and help you scale efficiently while maintaining quality customer support.",
  },

  liveChat: {
    title: "Live chat with a best-in-class Messenger for startups",
    tag: "Messenger",
    description:
      "Deliver live chat support that's personalized, contextual, and on-brand across your product, app, and website - perfect for startups building customer relationships.",
    cards: [
      {
        title: "Fully customizable for your brand",
        description:
          "Customize the Messenger to match your startup's brand, wherever your customers are within your product, app, or website as you grow.",
        img: "/assets/highlight.webp",
      },
      {
        title: "Self-serve enabled for efficiency",
        description:
          "Tailor the Messenger with self-serve apps that empower your customers to find help articles, read product updates, and more—perfect for startups with lean teams.",
        img: "/assets/highlight.webp",
      },
      {
        title: "Multi-brand & multilingual ready",
        description:
          "Support multiple brands, resolve queries in 45 languages and deliver exceptional experiences within the Messenger—scale your startup globally from day one.",
        img: "/assets/highlight.webp",
      },
    ],
    backgroundImage: "/assets/image30.webp",
  },

  globalWhatsapp: {
    cards: [
      {
        backgroundImage: "/assets/image30.webp",
        title: "Integrate all your accounts easily",
        description:
          "Connect and manage all of your WhatsApp business accounts in a single workspace, ensuring you never miss a message as your startup grows.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
      {
        backgroundImage: "/assets/image30.webp",
        title: "Deliver context-rich support",
        description:
          "Send and receive images, attachments and more directly from the Inbox, so your lean startup team has all the context needed to resolve issues faster.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
      {
        backgroundImage: "/assets/image30.webp",
        title: "Capture CSAT on WhatsApp",
        description:
          "Monitor how satisfied customers are with your startup's support and compare it across channels to continuously improve your service.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
    ],
    title: "Global support is just a WhatsApp away for startups",
    tag: "WhatsApp",
    backgroundImage: "/assets/image30.webp",
    description:
      "Modernise your startup support and expand your reach on the world's most popular messaging app without heavy infrastructure investment.",
  },

  engageCustomers: {
    badgeText: "SMS and social media",
    title: "Engage customers on the apps they use everyday",
    columns: [
      {
        title: "Instagram",
        description:
          "Respond to Instagram DMs, story replies and mentions directly from Intercom, and interact with customers using rich multi-media, from emojis to images - perfect for startup marketing.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_01.webp?&q=90",
        imageAlt: "Instagram",
      },
      {
        title: "Facebook",
        description:
          "Route direct messages to the Inbox, so customers can reach out directly from Facebook for a seamless experience that scales with your startup.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_02.webp?&q=90",
        imageAlt: "Facebook",
      },
      {
        title: "SMS",
        description:
          "Send and receive text messages from the Inbox in 45 languages, to enable real-time, conversational support with your growing customer base.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_03.webp?&q=90",
        imageAlt: "SMS",
      },
    ],
  },

  testimonial: {
    title: "Effortless omnichannel support for startups",
    quote:
      "Since adopting TervanX, our startup achieved 80% faster reconciliation and scaled our customer support without increasing headcount - exactly what growing companies need",
    role: "CEO",
    name: "Alex Chen",
  },

  bannerCTA: {
    title: "Start Building Today",
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
