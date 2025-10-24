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
      <HeroSection {...cryptoExchangesPageData.heroSection} />
      <div className="w-[95%] mx-auto">
        <SubSection
          title={cryptoExchangesPageData.subsection1.title}
          children={
            <InsightCards data={cryptoExchangesPageData.insightCards} />
          }
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <SubSection
          title={cryptoExchangesPageData.subsection2.title}
          description={cryptoExchangesPageData.subsection2.description}
          children={
            <BrandEmailSupport {...cryptoExchangesPageData.brandEmailSupport} />
          }
          tag={cryptoExchangesPageData.subsection2.tag}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <CallAndConversation {...cryptoExchangesPageData.callAndConversation} />
      <div className="py-6 lg:py-20">
        <DottedLine fill="gray" />
      </div>
      <LiveChat {...cryptoExchangesPageData.liveChat} />
      <GlobalWhatsapp {...cryptoExchangesPageData.globalWhatsapp} />
      <div className="py-12 mt-8">
        <DottedLine fill="gray" />
      </div>
      <EngageCustomersSection {...cryptoExchangesPageData.engageCustomers} />
      <TestimonialCarousel {...cryptoExchangesPageData.testimonial} />
      <BannerCTA {...cryptoExchangesPageData.bannerCTA} />
    </div>
  );
};

export default Page;

const cryptoExchangesPageData = {
  heroSection: {
    heading: "Crypto Exchanges",
    subheading: "Launch and scale your exchange instantly",
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
    title: "Centralize all your exchange channels in one connected platform",
  },

  insightCards: [
    {
      step: "01",
      title: "Complete exchange oversight",
      description:
        "Manage all your trading pairs, user communications, and exchange operations in a single platform for complete visibility across your crypto exchange.",
    },
    {
      step: "02",
      title: "Real-time trading analytics",
      description:
        "Track trading volumes, liquidity pools, and user activity with live data feeds and comprehensive exchange dashboards.",
    },
    {
      step: "03",
      title: "AI-powered market insights",
      description:
        "Leverage machine learning to predict market trends, optimize trading algorithms, and automate exchange operations for enhanced performance.",
    },
  ],

  subsection2: {
    title: "Professional email support for crypto exchanges",
    description:
      "Manage user inquiries, trading support, and security communications with professional email handling that reflects your exchange brand standards.",
    tag: "Email",
  },

  brandEmailSupport: {
    cards: [
      {
        title: "Maintain exchange brand consistency",
        description:
          "Support multiple trading platforms, assign exchange logos and create professional signatures that reinforce your crypto identity in every user communication.",
        img: "/assets/highlight.webp",
        imageAlt: "Maintain exchange brand consistency",
      },
      {
        title: "Seamless trader conversations",
        description:
          "Move user conversations from trading platforms to email, allowing traders to continue market discussions and support inquiries at their convenience.",
        img: "/assets/highlight.webp",
        imageAlt: "Seamless trader conversations",
      },
      {
        title: "Track exchange service performance",
        description:
          "Monitor response times, issue resolution rates, and user satisfaction to maintain high exchange service standards and regulatory compliance.",
        img: "/assets/highlight.webp",
        imageAlt: "Track exchange service performance",
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
    title: "Crypto Exchange Communication Platform",
    tag: "Exchange Services",
    description:
      "Discover features designed specifically for crypto exchanges to enhance user support, streamline trading operations, and enable secure exchange services.",
  },

  liveChat: {
    title: "Live chat with exchange-focused Messenger",
    tag: "Messenger",
    description:
      "Deliver instant trading support that's personalized, contextual, and on-brand across your exchange platforms, trading apps, and user portals.",
    cards: [
      {
        title: "Exchange-branded experience",
        description:
          "Customize the Messenger to match your crypto exchange's branding, creating a seamless trading experience from account setup to advanced trading.",
        img: "/assets/highlight.webp",
      },
      {
        title: "Self-serve for common inquiries",
        description:
          "Empower users with self-serve options for trading pairs, fee structures, security features, and FAQs—reducing support load during high volatility periods.",
        img: "/assets/highlight.webp",
      },
      {
        title: "Multi-platform & multilingual support",
        description:
          "Manage multiple trading interfaces, resolve user queries in 45 languages and provide consistent support experiences across global markets.",
        img: "/assets/highlight.webp",
      },
    ],
    backgroundImage: "/assets/image30.webp",
  },

  globalWhatsapp: {
    cards: [
      {
        backgroundImage: "/assets/image30.webp",
        title: "Connect with international traders",
        description:
          "Manage all your WhatsApp exchange accounts and user interactions in one workspace, ensuring you never miss important trading alerts or user inquiries.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
      {
        backgroundImage: "/assets/image30.webp",
        title: "Rich trading communications",
        description:
          "Send and receive trading confirmations, market updates, and security alerts directly from the Inbox, providing comprehensive support for crypto traders.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
      {
        backgroundImage: "/assets/image30.webp",
        title: "Measure trader satisfaction",
        description:
          "Track how satisfied traders are with your exchange services and trading experience, and compare performance across different communication channels.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
    ],
    title: "Global exchange support through WhatsApp",
    tag: "WhatsApp",
    backgroundImage: "/assets/image30.webp",
    description:
      "Expand your exchange reach and provide instant support to international traders on the world's most popular messaging app for crypto communications.",
  },

  engageCustomers: {
    badgeText: "Trading platforms and messaging",
    title: "Engage traders on their preferred platforms",
    columns: [
      {
        title: "Trading Platforms",
        description:
          "Respond to user inquiries, trading questions, and account management requests directly from your exchange dashboard, enhancing the trading experience.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_01.webp?&q=90",
        imageAlt: "Trading Platforms",
      },
      {
        title: "Crypto Social Platforms",
        description:
          "Route messages from crypto forums, trading communities, and blockchain networks to a unified Inbox, making it easy to manage user communications.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_02.webp?&q=90",
        imageAlt: "Crypto Social Platforms",
      },
      {
        title: "SMS Trading Alerts",
        description:
          "Send and receive price alerts, security notifications, and account updates in 45 languages, enabling real-time communication with crypto traders.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_03.webp?&q=90",
        imageAlt: "SMS Trading Alerts",
      },
    ],
  },

  testimonial: {
    title: "Transformative exchange integration",
    quote:
      "Since implementing TervanX exchange solutions, our platform improved user communication efficiency by 85%, reduced support ticket resolution time by 60%, and enhanced trader satisfaction with instant, secure trading support",
    role: "Exchange Operations Director",
    name: "Alexandra Wong",
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
