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
      <HeroSection {...financeBankingPageData.heroSection} />
      <div className="w-[95%] mx-auto">
        <SubSection
          title={financeBankingPageData.subsection1.title}
          children={<InsightCards data={financeBankingPageData.insightCards} />}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <SubSection
          title={financeBankingPageData.subsection2.title}
          description={financeBankingPageData.subsection2.description}
          children={
            <BrandEmailSupport {...financeBankingPageData.brandEmailSupport} />
          }
          tag={financeBankingPageData.subsection2.tag}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <CallAndConversation {...financeBankingPageData.callAndConversation} />
      <div className="py-6 lg:py-20">
        <DottedLine fill="gray" />
      </div>
      <LiveChat {...financeBankingPageData.liveChat} />
      <GlobalWhatsapp {...financeBankingPageData.globalWhatsapp} />
      <div className="py-12 mt-8">
        <DottedLine fill="gray" />
      </div>
      <EngageCustomersSection {...financeBankingPageData.engageCustomers} />
      <TestimonialCarousel {...financeBankingPageData.testimonial} />
      <BannerCTA {...financeBankingPageData.bannerCTA} />
    </div>
  );
};

export default Page;

const financeBankingPageData = {
  heroSection: {
    heading: "Finance & Banking",
    subheading:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quidem alias porro voluptates harum ipsam optio?",
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
    title: "Centralize all your financial channels in one connected platform",
  },

  insightCards: [
    {
      step: "01",
      title: "Complete financial oversight",
      description:
        "Manage all your banking channels, customer service operations, and financial transactions in a single platform for complete visibility across your financial institution.",
    },
    {
      step: "02",
      title: "Real-time banking analytics",
      description:
        "Track financial transactions, payment processing, and customer behavior with live data feeds and comprehensive banking dashboards.",
    },
    {
      step: "03",
      title: "AI-powered financial insights",
      description:
        "Leverage machine learning to detect fraud patterns, optimize investment strategies, and automate financial operations for enhanced security and efficiency.",
    },
  ],

  subsection2: {
    title: "Professional email support for financial institutions",
    description:
      "Manage customer banking inquiries, transaction support, and financial consultations with professional email handling that reflects your banking brand standards.",
    tag: "Email",
  },

  brandEmailSupport: {
    cards: [
      {
        title: "Maintain banking brand consistency",
        description:
          "Support multiple financial products, assign bank logos and create professional signatures that reinforce your financial identity in every customer communication.",
        img: "/assets/highlight.webp",
        imageAlt: "Maintain banking brand consistency",
      },
      {
        title: "Seamless financial conversations",
        description:
          "Move customer conversations from banking apps to email, allowing clients to continue financial discussions and transaction inquiries at their convenience.",
        img: "/assets/highlight.webp",
        imageAlt: "Seamless financial conversations",
      },
      {
        title: "Track banking service performance",
        description:
          "Monitor response times, transaction resolution rates, and customer satisfaction to maintain high financial service standards and regulatory compliance.",
        img: "/assets/highlight.webp",
        imageAlt: "Track banking service performance",
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
    title: "Finance & Banking Communication Platform",
    tag: "Financial Services",
    description:
      "Discover features designed specifically for financial institutions to enhance customer support, streamline operations, and enable secure crypto integration for banking services.",
  },

  liveChat: {
    title: "Live chat with banking-focused Messenger",
    tag: "Messenger",
    description:
      "Deliver instant financial support that's personalized, contextual, and on-brand across your banking apps, customer portals, and financial service platforms.",
    cards: [
      {
        title: "Banking-branded experience",
        description:
          "Customize the Messenger to match your financial institution's branding, creating a seamless customer experience from account inquiries to investment advice.",
        img: "/assets/highlight.webp",
      },
      {
        title: "Self-serve for common inquiries",
        description:
          "Empower customers with self-serve options for account balances, transaction history, loan applications, and FAQs—reducing branch traffic during peak hours.",
        img: "/assets/highlight.webp",
      },
      {
        title: "Multi-branch & multilingual support",
        description:
          "Manage multiple banking locations, resolve customer queries in 45 languages and provide consistent support experiences across diverse client bases.",
        img: "/assets/highlight.webp",
      },
    ],
    backgroundImage: "/assets/image30.webp",
  },

  globalWhatsapp: {
    cards: [
      {
        backgroundImage: "/assets/image30.webp",
        title: "Connect with global clients",
        description:
          "Manage all your WhatsApp banking accounts and customer interactions in one workspace, ensuring you never miss important transaction alerts or client inquiries.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
      {
        backgroundImage: "/assets/image30.webp",
        title: "Rich financial communications",
        description:
          "Send and receive transaction confirmations, investment updates, and financial statements directly from the Inbox, providing comprehensive support for banking clients.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
      {
        backgroundImage: "/assets/image30.webp",
        title: "Measure client satisfaction",
        description:
          "Track how satisfied clients are with your banking services and financial advice, and compare performance across different communication channels.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
    ],
    title: "Global banking support through WhatsApp",
    tag: "WhatsApp",
    backgroundImage: "/assets/image30.webp",
    description:
      "Expand your financial services reach and provide instant support to international clients on the world's most popular messaging app for banking communications.",
  },

  engageCustomers: {
    badgeText: "Financial platforms and messaging",
    title: "Engage clients on their preferred platforms",
    columns: [
      {
        title: "Banking Apps",
        description:
          "Respond to customer inquiries, transaction questions, and investment advice requests directly from your financial dashboard, enhancing the digital banking experience.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_01.webp?&q=90",
        imageAlt: "Banking Apps",
      },
      {
        title: "Financial Social Platforms",
        description:
          "Route messages from investment forums, financial communities, and professional networks to a unified Inbox, making it easy to manage client communications.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_02.webp?&q=90",
        imageAlt: "Financial Social Platforms",
      },
      {
        title: "SMS Transaction Alerts",
        description:
          "Send and receive transaction notifications, security alerts, and market updates in 45 languages, enabling real-time communication with financial clients.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_03.webp?&q=90",
        imageAlt: "SMS Transaction Alerts",
      },
    ],
  },

  testimonial: {
    title: "Transformative financial integration",
    quote:
      "Since implementing TervanX crypto solutions, our bank reduced cross-border transaction costs by 65%, enabled seamless digital asset management for clients, and improved customer satisfaction with faster, more transparent financial services",
    role: "Chief Financial Officer",
    name: "Jennifer Martinez",
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
