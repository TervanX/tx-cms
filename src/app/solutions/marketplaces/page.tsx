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
      <HeroSection {...marketplacesPageData.heroSection} />
      <div className="w-[95%] mx-auto">
        <SubSection
          title={marketplacesPageData.subsection1.title}
          children={<InsightCards data={marketplacesPageData.insightCards} />}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <SubSection
          title={marketplacesPageData.subsection2.title}
          description={marketplacesPageData.subsection2.description}
          children={
            <BrandEmailSupport {...marketplacesPageData.brandEmailSupport} />
          }
          tag={marketplacesPageData.subsection2.tag}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <CallAndConversation {...marketplacesPageData.callAndConversation} />
      <div className="py-6 lg:py-20">
        <DottedLine fill="gray" />
      </div>
      <LiveChat {...marketplacesPageData.liveChat} />
      <GlobalWhatsapp {...marketplacesPageData.globalWhatsapp} />
      <div className="py-12 mt-8">
        <DottedLine fill="gray" />
      </div>
      <EngageCustomersSection {...marketplacesPageData.engageCustomers} />
      <TestimonialCarousel {...marketplacesPageData.testimonial} />
      <BannerCTA {...marketplacesPageData.bannerCTA} />
    </div>
  );
};

export default Page;

const marketplacesPageData = {
  heroSection: {
    heading: "Marketplaces",
    subheading: "Enable crypto and fiat payments for buyers and sellers",
    tag: "TX channel",
    primaryButton: {
      text: "Login",
      href: "/auth/login",
    },
    secondaryButton: {
      text: "Contact Sales",
      href: "/contact/contact-sales",
    },
  },
  subsection1: {
    title: "Centralize all your marketplace channels in one connected platform",
  },

  insightCards: [
    {
      step: "01",
      title: "Complete marketplace oversight",
      description:
        "Manage all your buyer-seller interactions, payment processing, and marketplace operations in a single platform for complete visibility across your e-commerce ecosystem.",
    },
    {
      step: "02",
      title: "Real-time marketplace analytics",
      description:
        "Track sales volumes, transaction success rates, and user activity with live data feeds and comprehensive marketplace dashboards.",
    },
    {
      step: "03",
      title: "AI-powered marketplace insights",
      description:
        "Leverage machine learning to optimize payment flows, predict sales trends, and automate marketplace operations for enhanced buyer and seller experiences.",
    },
  ],

  subsection2: {
    title: "Professional email support for marketplace platforms",
    description:
      "Manage buyer and seller inquiries, transaction support, and payment communications with professional email handling that reflects your marketplace brand standards.",
    tag: "Email",
  },

  brandEmailSupport: {
    cards: [
      {
        title: "Maintain marketplace brand consistency",
        description:
          "Support multiple marketplace categories, assign platform logos and create professional signatures that reinforce your marketplace identity in every user communication.",
        img: "/assets/highlight.webp",
        imageAlt: "Maintain marketplace brand consistency",
      },
      {
        title: "Seamless buyer-seller conversations",
        description:
          "Move user conversations from marketplace platforms to email, allowing buyers and sellers to continue transaction discussions and support inquiries at their convenience.",
        img: "/assets/highlight.webp",
        imageAlt: "Seamless buyer-seller conversations",
      },
      {
        title: "Track marketplace service performance",
        description:
          "Monitor response times, transaction resolution rates, and user satisfaction to maintain high marketplace service standards and trust.",
        img: "/assets/highlight.webp",
        imageAlt: "Track marketplace service performance",
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
      text: "Contact Sales",
      href: "/contact/contact-sales",
    },
    alignLeft: true,
    title: "Marketplace Communication Platform",
    tag: "E-commerce Services",
    description:
      "Discover features designed specifically for marketplace platforms to enhance user support, streamline payment operations, and enable secure crypto and fiat transactions.",
  },

  liveChat: {
    title: "Live chat with marketplace-focused Messenger",
    tag: "Messenger",
    description:
      "Deliver instant marketplace support that's personalized, contextual, and on-brand across your e-commerce platforms, seller dashboards, and buyer apps.",
    cards: [
      {
        title: "Marketplace-branded experience",
        description:
          "Customize the Messenger to match your marketplace platform's branding, creating a seamless user experience from product browsing to secure checkout.",
        img: "/assets/highlight.webp",
      },
      {
        title: "Self-serve for common inquiries",
        description:
          "Empower users with self-serve options for order tracking, payment methods, seller ratings, and FAQs—reducing support load during peak shopping seasons.",
        img: "/assets/highlight.webp",
      },
      {
        title: "Multi-category & multilingual support",
        description:
          "Manage multiple product categories, resolve user queries in 45 languages and provide consistent support experiences across different marketplace segments.",
        img: "/assets/highlight.webp",
      },
    ],
    backgroundImage: "/assets/image30.webp",
  },

  globalWhatsapp: {
    cards: [
      {
        backgroundImage: "/assets/image30.webp",
        title: "Connect with international buyers and sellers",
        description:
          "Manage all your WhatsApp marketplace accounts and user interactions in one workspace, ensuring you never miss important order updates or user inquiries.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
      {
        backgroundImage: "/assets/image30.webp",
        title: "Rich marketplace communications",
        description:
          "Send and receive order confirmations, shipping updates, and payment notifications directly from the Inbox, providing comprehensive support for marketplace users.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
      {
        backgroundImage: "/assets/image30.webp",
        title: "Measure user satisfaction",
        description:
          "Track how satisfied buyers and sellers are with your marketplace services and transaction experience, and compare performance across different communication channels.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
    ],
    title: "Global marketplace support through WhatsApp",
    tag: "WhatsApp",
    backgroundImage: "/assets/image30.webp",
    description:
      "Expand your marketplace reach and provide instant support to international users on the world's most popular messaging app for e-commerce communications.",
  },

  engageCustomers: {
    badgeText: "Marketplace platforms and messaging",
    title: "Engage users on their preferred platforms",
    columns: [
      {
        title: "E-commerce Platforms",
        description:
          "Respond to user inquiries, order questions, and payment management requests directly from your marketplace dashboard, enhancing the shopping experience.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_01.webp?&q=90",
        imageAlt: "E-commerce Platforms",
      },
      {
        title: "Shopping Social Platforms",
        description:
          "Route messages from shopping forums, review communities, and seller networks to a unified Inbox, making it easy to manage user communications.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_02.webp?&q=90",
        imageAlt: "Shopping Social Platforms",
      },
      {
        title: "SMS Order Alerts",
        description:
          "Send and receive purchase confirmations, delivery updates, and seller messages in 45 languages, enabling real-time communication with marketplace users.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_03.webp?&q=90",
        imageAlt: "SMS Order Alerts",
      },
    ],
  },

  testimonial: {
    title: "Transformative marketplace integration",
    quote:
      "Since implementing LayerX marketplace solutions, our platform improved user communication efficiency by 75%, reduced payment support time by 60%, and enhanced user satisfaction with instant, secure crypto and fiat payment options for global buyers and sellers",
    role: "Marketplace Operations Director",
    name: "Sophia Rodriguez",
  },

  bannerCTA: {
    title: "",
    backgroundImage: "/assets/image30.webp",
    primaryButton: {
      text: "Get Started",
      href: "/contact/request-access",
    },
    secondaryButton: {
      text: "Contact Sales",
      href: "/contact/contact-sales",
    },
  },
};
