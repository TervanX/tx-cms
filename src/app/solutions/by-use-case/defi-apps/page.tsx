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
      <HeroSection {...defiAppsPageData.heroSection} />
      <div className="w-[95%] mx-auto">
        <SubSection
          title={defiAppsPageData.subsection1.title}
          children={<InsightCards data={defiAppsPageData.insightCards} />}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <SubSection
          title={defiAppsPageData.subsection2.title}
          description={defiAppsPageData.subsection2.description}
          children={
            <BrandEmailSupport {...defiAppsPageData.brandEmailSupport} />
          }
          tag={defiAppsPageData.subsection2.tag}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <CallAndConversation {...defiAppsPageData.callAndConversation} />
      <div className="py-6 lg:py-20">
        <DottedLine fill="gray" />
      </div>
      <LiveChat {...defiAppsPageData.liveChat} />
      <GlobalWhatsapp {...defiAppsPageData.globalWhatsapp} />
      <div className="py-12 mt-8">
        <DottedLine fill="gray" />
      </div>
      <EngageCustomersSection {...defiAppsPageData.engageCustomers} />
      <TestimonialCarousel {...defiAppsPageData.testimonial} />
      <BannerCTA {...defiAppsPageData.bannerCTA} />
    </div>
  );
};

export default Page;

const defiAppsPageData = {
  heroSection: {
    heading: "DeFi Apps",
    subheading: "Deploy smart contracts and liquidity tools",
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
    title: "Centralize all your DeFi channels in one connected platform",
  },

  insightCards: [
    {
      step: "01",
      title: "Complete DeFi protocol oversight",
      description:
        "Manage all your smart contracts, liquidity pools, and user interactions in a single platform for complete visibility across your DeFi application.",
    },
    {
      step: "02",
      title: "Real-time protocol analytics",
      description:
        "Track TVL (Total Value Locked), transaction volumes, and user activity with live data feeds and comprehensive DeFi dashboards.",
    },
    {
      step: "03",
      title: "AI-powered DeFi insights",
      description:
        "Leverage machine learning to optimize yield strategies, predict market movements, and automate protocol operations for enhanced performance.",
    },
  ],

  subsection2: {
    title: "Professional email support for DeFi applications",
    description:
      "Manage user inquiries, protocol support, and security communications with professional email handling that reflects your DeFi brand standards.",
    tag: "Email",
  },

  brandEmailSupport: {
    cards: [
      {
        title: "Maintain DeFi brand consistency",
        description:
          "Support multiple protocol interfaces, assign dApp logos and create professional signatures that reinforce your DeFi identity in every user communication.",
        img: "/assets/highlight.webp",
        imageAlt: "Maintain DeFi brand consistency",
      },
      {
        title: "Seamless user conversations",
        description:
          "Move user conversations from dApp interfaces to email, allowing DeFi users to continue protocol discussions and support inquiries at their convenience.",
        img: "/assets/highlight.webp",
        imageAlt: "Seamless user conversations",
      },
      {
        title: "Track protocol service performance",
        description:
          "Monitor response times, issue resolution rates, and user satisfaction to maintain high DeFi service standards and community trust.",
        img: "/assets/highlight.webp",
        imageAlt: "Track protocol service performance",
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
    title: "DeFi Application Communication Platform",
    tag: "Protocol Services",
    description:
      "Discover features designed specifically for DeFi applications to enhance user support, streamline protocol operations, and enable secure decentralized services.",
  },

  liveChat: {
    title: "Live chat with DeFi-focused Messenger",
    tag: "Messenger",
    description:
      "Deliver instant protocol support that's personalized, contextual, and on-brand across your dApp interfaces, wallet integrations, and user portals.",
    cards: [
      {
        title: "DeFi-branded experience",
        description:
          "Customize the Messenger to match your DeFi application's branding, creating a seamless user experience from wallet connection to yield farming.",
        img: "/assets/highlight.webp",
      },
      {
        title: "Self-serve for common inquiries",
        description:
          "Empower users with self-serve options for gas fees, liquidity provisioning, yield strategies, and FAQs—reducing support load during high network activity.",
        img: "/assets/highlight.webp",
      },
      {
        title: "Multi-chain & multilingual support",
        description:
          "Manage multiple blockchain networks, resolve user queries in 45 languages and provide consistent support experiences across different protocols.",
        img: "/assets/highlight.webp",
      },
    ],
    backgroundImage: "/assets/image30.webp",
  },

  globalWhatsapp: {
    cards: [
      {
        backgroundImage: "/assets/image30.webp",
        title: "Connect with DeFi communities",
        description:
          "Manage all your WhatsApp DeFi accounts and user interactions in one workspace, ensuring you never miss important protocol updates or user inquiries.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
      {
        backgroundImage: "/assets/image30.webp",
        title: "Rich protocol communications",
        description:
          "Send and receive transaction confirmations, yield updates, and security alerts directly from the Inbox, providing comprehensive support for DeFi users.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
      {
        backgroundImage: "/assets/image30.webp",
        title: "Measure user satisfaction",
        description:
          "Track how satisfied users are with your DeFi services and protocol experience, and compare performance across different communication channels.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
    ],
    title: "Global DeFi support through WhatsApp",
    tag: "WhatsApp",
    backgroundImage: "/assets/image30.webp",
    description:
      "Expand your DeFi reach and provide instant support to international users on the world's most popular messaging app for crypto communications.",
  },

  engageCustomers: {
    badgeText: "DeFi platforms and messaging",
    title: "Engage users on their preferred platforms",
    columns: [
      {
        title: "dApp Interfaces",
        description:
          "Respond to user inquiries, protocol questions, and wallet management requests directly from your DeFi dashboard, enhancing the user experience.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_01.webp?&q=90",
        imageAlt: "dApp Interfaces",
      },
      {
        title: "Crypto Social Platforms",
        description:
          "Route messages from DeFi forums, DAO communities, and blockchain networks to a unified Inbox, making it easy to manage user communications.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_02.webp?&q=90",
        imageAlt: "Crypto Social Platforms",
      },
      {
        title: "SMS Protocol Alerts",
        description:
          "Send and receive liquidity alerts, yield farming updates, and security notifications in 45 languages, enabling real-time communication with DeFi users.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_03.webp?&q=90",
        imageAlt: "SMS Protocol Alerts",
      },
    ],
  },

  testimonial: {
    title: "Transformative DeFi integration",
    quote:
      "Since implementing TervanX DeFi solutions, our protocol improved user communication efficiency by 90%, reduced support response time by 75%, and enhanced user satisfaction with instant, transparent protocol support across multiple chains",
    role: "DeFi Protocol Lead",
    name: "Marcus Thompson",
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
