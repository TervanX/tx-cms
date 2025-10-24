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
import EngageCustomersSection from "@/components/homeComponents/EngageCustomer";
import BannerCTA from "@/components/homeComponents/Banner";
import DottedLine from "@/components/helpDeskComponents/DottedBg";
import TestimonialCarousel from "@/components/homeComponents/TestimonialCarousel";
gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  return (
    <div className="relative z-10 ">
      <HeroSection {...developerPageData.heroSection} />
      <div className="w-[95%] mx-auto">
        <SubSection
          title={developerPageData.subsection1.title}
          children={<InsightCards data={developerPageData.insightCards} />}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <SubSection
          title={developerPageData.subsection2.title}
          description={developerPageData.subsection2.description}
          children={
            <BrandEmailSupport {...developerPageData.brandEmailSupport} />
          }
          tag={developerPageData.subsection2.tag}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <CallAndConversation {...developerPageData.callAndConversation} />
      <div className="py-6 lg:py-20">
        <DottedLine fill="gray" />
      </div>
      <LiveChat {...developerPageData.liveChat} />
      <GlobalWhatsapp {...developerPageData.globalWhatsapp} />
      <div className="py-12 mt-8">
        <DottedLine fill="gray" />
      </div>
      <EngageCustomersSection {...developerPageData.engageCustomers} />
      <TestimonialCarousel {...developerPageData.testimonial} />
      <BannerCTA {...developerPageData.bannerCTA} />
    </div>
  );
};

export default Page;

const developerPageData = {
  heroSection: {
    heading: "Developers ",
    subheading: "Integrate payments, wallets, or exchange logic via API",
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
        "Manage all your channels in a single workspace for total visibility into every conversation and touchpoint.",
    },
    {
      step: "02",
      title: "Real-time analytics",
      description:
        "Monitor all transactions and blockchain activity with live data feeds and comprehensive dashboards.",
    },
    {
      step: "03",
      title: "AI-powered insights",
      description:
        "Leverage machine learning to predict trends and optimize your crypto operations automatically.",
    },
  ],

  subsection2: {
    title: "On-brand email support from your inbox to theirs",
    description:
      "Forward your existing support email, manage multiple domains and brands, create custom signatures and handle every email in one place.",
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
    title: "Welcome to Our Service",
    tag: "Featured",
    description:
      "Discover amazing features that will transform your workflow and boost productivity.",
  },

  liveChat: {
    title: "Live chat with a best-in-class Messenger",
    tag: "Messenger",
    description:
      "Deliver live chat support that's personalized, contextual, and on-brand across your product, app, and website.",
    cards: [
      {
        title: "Fully customizable",
        description:
          "Customize the Messenger to match your brand, wherever your customers are within your product, app, or website.",
        img: "/assets/highlight.webp",
      },
      {
        title: "Self-serve enabled",
        description:
          "Tailor the Messenger with self-serve apps that empower your customers to find help articles, read product updates, and more—without having to start a conversation.",
        img: "/assets/highlight.webp",
      },
      {
        title: "Multi-brand & multilingual",
        description:
          "Support multiple brands, resolve queries in 45 languages and deliver exceptional experiences within the Messenger—anytime, anywhere.",
        img: "/assets/highlight.webp",
      },
    ],
    backgroundImage: "/assets/image30.webp",
  },

  globalWhatsapp: {
    cards: [
      {
        backgroundImage: "/assets/image30.webp",
        title: "Integrate all your accounts",
        description:
          "Connect and manage all of your WhatsApp business accounts in a single workspace, to ensure you never miss a message.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
      {
        backgroundImage: "/assets/image30.webp",
        title: "Deliver context-rich support",
        description:
          "Send and receive images, attachments and more directly from the Inbox, so your support agents have all the context they need to resolve issues faster.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
      {
        backgroundImage: "/assets/image30.webp",
        title: "Capture CSAT on WhatsApp",
        description:
          "Monitor how satisfied customers are with the support provided, and how it compares to your other channels.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
    ],
    title: "Global support is just a WhatsApp away",
    tag: "WhatsApp",
    backgroundImage: "/assets/image30.webp",
    description:
      "Modernise your support and expand your reach on the world's most popular messaging app.",
  },

  engageCustomers: {
    badgeText: "SMS and social media",
    title: "Engage customers on the apps they use everyday",
    columns: [
      {
        title: "Instagram",
        description:
          "Respond to Instagram DMs, story replies and mentions directly from Intercom, and interact with customers using rich multi-media, from emojis to images.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_01.webp?&q=90",
        imageAlt: "Instagram",
      },
      {
        title: "Facebook",
        description:
          "Route direct messages to the Inbox, so customers can reach out directly from Facebook for a seamless experience.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_02.webp?&q=90",
        imageAlt: "Facebook",
      },
      {
        title: "SMS",
        description:
          "Send and receive text messages from the Inbox in 45 languages, to enable real-time, conversational support with your customers.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_03.webp?&q=90",
        imageAlt: "SMS",
      },
    ],
  },

  testimonial: {
    title: "Effortless omnichannel support",
    quote:
      "Since adopting TervanX Crypto Payments, we've achieved 80% faster reconciliation and reduced transaction errors to near zero",
    role: "VP of Digital Finance",
    name: "Maya Okoro",
  },

  bannerCTA: {
    title: "Custom Title",
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
