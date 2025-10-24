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
      <HeroSection {...gamingMetaversePageData.heroSection} />
      <div className="w-[95%] mx-auto">
        <SubSection
          title={gamingMetaversePageData.subsection1.title}
          children={
            <InsightCards data={gamingMetaversePageData.insightCards} />
          }
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <SubSection
          title={gamingMetaversePageData.subsection2.title}
          description={gamingMetaversePageData.subsection2.description}
          children={
            <BrandEmailSupport {...gamingMetaversePageData.brandEmailSupport} />
          }
          tag={gamingMetaversePageData.subsection2.tag}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <CallAndConversation {...gamingMetaversePageData.callAndConversation} />
      <div className="py-6 lg:py-20">
        <DottedLine fill="gray" />
      </div>
      <LiveChat {...gamingMetaversePageData.liveChat} />
      <GlobalWhatsapp {...gamingMetaversePageData.globalWhatsapp} />
      <div className="py-12 mt-8">
        <DottedLine fill="gray" />
      </div>
      <EngageCustomersSection {...gamingMetaversePageData.engageCustomers} />
      <TestimonialCarousel {...gamingMetaversePageData.testimonial} />
      <BannerCTA {...gamingMetaversePageData.bannerCTA} />
    </div>
  );
};

export default Page;

const gamingMetaversePageData = {
  heroSection: {
    heading: "Gaming & Metaverse",
    subheading: "In-game payments and token rewards",
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
    title:
      "Centralize all your gaming and metaverse channels in one connected platform",
  },

  insightCards: [
    {
      step: "01",
      title: "Complete gaming ecosystem oversight",
      description:
        "Manage all your game servers, virtual worlds, and player communications in a single platform for complete visibility across your gaming and metaverse ecosystem.",
    },
    {
      step: "02",
      title: "Real-time gaming analytics",
      description:
        "Track in-game transactions, player activity, and virtual economy performance with live data feeds and comprehensive gaming dashboards.",
    },
    {
      step: "03",
      title: "AI-powered gaming insights",
      description:
        "Leverage machine learning to optimize player experiences, predict gaming trends, and automate virtual economy operations for enhanced engagement.",
    },
  ],

  subsection2: {
    title: "Professional email support for gaming platforms",
    description:
      "Manage player inquiries, in-game support, and virtual asset communications with professional email handling that reflects your gaming brand standards.",
    tag: "Email",
  },

  brandEmailSupport: {
    cards: [
      {
        title: "Maintain gaming brand consistency",
        description:
          "Support multiple game titles, assign gaming logos and create professional signatures that reinforce your gaming identity in every player communication.",
        img: "/assets/highlight.webp",
        imageAlt: "Maintain gaming brand consistency",
      },
      {
        title: "Seamless player conversations",
        description:
          "Move player conversations from in-game chat to email, allowing gamers to continue support discussions and virtual asset inquiries at their convenience.",
        img: "/assets/highlight.webp",
        imageAlt: "Seamless player conversations",
      },
      {
        title: "Track gaming service performance",
        description:
          "Monitor response times, in-game issue resolution rates, and player satisfaction to maintain high gaming service standards and community trust.",
        img: "/assets/highlight.webp",
        imageAlt: "Track gaming service performance",
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
    title: "Gaming & Metaverse Communication Platform",
    tag: "Gaming Services",
    description:
      "Discover features designed specifically for gaming and metaverse platforms to enhance player support, streamline virtual operations, and enable secure in-game payments.",
  },

  liveChat: {
    title: "Live chat with gaming-focused Messenger",
    tag: "Messenger",
    description:
      "Deliver instant gaming support that's personalized, contextual, and on-brand across your game clients, virtual worlds, and player portals.",
    cards: [
      {
        title: "Gaming-branded experience",
        description:
          "Customize the Messenger to match your gaming platform's branding, creating a seamless player experience from character creation to endgame content.",
        img: "/assets/highlight.webp",
      },
      {
        title: "Self-serve for common inquiries",
        description:
          "Empower players with self-serve options for game guides, virtual item purchases, token rewards, and FAQs—reducing support load during major game updates.",
        img: "/assets/highlight.webp",
      },
      {
        title: "Multi-game & multilingual support",
        description:
          "Manage multiple game titles and virtual worlds, resolve player queries in 45 languages and provide consistent support experiences across different gaming platforms.",
        img: "/assets/highlight.webp",
      },
    ],
    backgroundImage: "/assets/image30.webp",
  },

  globalWhatsapp: {
    cards: [
      {
        backgroundImage: "/assets/image30.webp",
        title: "Connect with global gaming communities",
        description:
          "Manage all your WhatsApp gaming accounts and player interactions in one workspace, ensuring you never miss important game updates or player inquiries.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
      {
        backgroundImage: "/assets/image30.webp",
        title: "Rich gaming communications",
        description:
          "Send and receive game updates, virtual item confirmations, and event notifications directly from the Inbox, providing comprehensive support for gamers.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
      {
        backgroundImage: "/assets/image30.webp",
        title: "Measure player satisfaction",
        description:
          "Track how satisfied players are with your gaming services and virtual experiences, and compare performance across different communication channels.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
    ],
    title: "Global gaming support through WhatsApp",
    tag: "WhatsApp",
    backgroundImage: "/assets/image30.webp",
    description:
      "Expand your gaming reach and provide instant support to international players on the world's most popular messaging app for gaming communications.",
  },

  engageCustomers: {
    badgeText: "Gaming platforms and messaging",
    title: "Engage players on their preferred platforms",
    columns: [
      {
        title: "Game Clients",
        description:
          "Respond to player inquiries, in-game questions, and virtual asset management requests directly from your gaming dashboard, enhancing the player experience.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_01.webp?&q=90",
        imageAlt: "Game Clients",
      },
      {
        title: "Gaming Social Platforms",
        description:
          "Route messages from gaming forums, streaming communities, and esports networks to a unified Inbox, making it easy to manage player communications.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_02.webp?&q=90",
        imageAlt: "Gaming Social Platforms",
      },
      {
        title: "SMS Gaming Alerts",
        description:
          "Send and receive game event notifications, virtual item updates, and tournament alerts in 45 languages, enabling real-time communication with players.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_03.webp?&q=90",
        imageAlt: "SMS Gaming Alerts",
      },
    ],
  },

  testimonial: {
    title: "Transformative gaming integration",
    quote:
      "Since implementing TervanX gaming solutions, our platform improved player communication efficiency by 85%, reduced in-game support response time by 70%, and enhanced player satisfaction with instant, secure token rewards and payment support",
    role: "Gaming Platform Director",
    name: "Jessica Lee",
  },

  bannerCTA: {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
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
