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
      <HeroSection {...ecommercePageData.heroSection} />
      <div className="w-[95%] mx-auto">
        <SubSection
          title={ecommercePageData.subsection1.title}
          children={<InsightCards data={ecommercePageData.insightCards} />}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <SubSection
          title={ecommercePageData.subsection2.title}
          description={ecommercePageData.subsection2.description}
          children={
            <BrandEmailSupport {...ecommercePageData.brandEmailSupport} />
          }
          tag={ecommercePageData.subsection2.tag}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <CallAndConversation {...ecommercePageData.callAndConversation} />
      <div className="py-6 lg:py-20">
        <DottedLine fill="gray" />
      </div>
      <LiveChat {...ecommercePageData.liveChat} />
      <GlobalWhatsapp {...ecommercePageData.globalWhatsapp} />
      <div className="py-12 mt-8">
        <DottedLine fill="gray" />
      </div>
      <EngageCustomersSection {...ecommercePageData.engageCustomers} />
      <TestimonialCarousel {...ecommercePageData.testimonial} />
      <BannerCTA {...ecommercePageData.bannerCTA} />
    </div>
  );
};

export default Page;

const ecommercePageData = {
  heroSection: {
    heading: "E-Commerce",
    subheading:
      "Accept crypto payments and streamline your online store operations with secure, borderless transactions",
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
    title: "Centralize all your e-commerce channels in one connected platform",
  },

  insightCards: [
    {
      step: "01",
      title: "Complete order oversight",
      description:
        "Manage all your e-commerce channels, customer inquiries, and order support in a single platform for complete visibility across your online store operations.",
    },
    {
      step: "02",
      title: "Real-time sales analytics",
      description:
        "Track your crypto payments, transaction volumes, and customer behavior with live data feeds and comprehensive e-commerce dashboards.",
    },
    {
      step: "03",
      title: "AI-powered customer insights",
      description:
        "Leverage machine learning to predict shopping trends, optimize inventory, and personalize customer experiences to boost conversions.",
    },
  ],

  subsection2: {
    title: "On-brand email support for customer service excellence",
    description:
      "Manage customer inquiries, order confirmations, and support tickets with professional email handling that reflects your e-commerce brand identity.",
    tag: "Email",
  },

  brandEmailSupport: {
    cards: [
      {
        title: "Maintain e-commerce brand consistency",
        description:
          "Support multiple store domains, assign brand logos and create custom signatures that reinforce your e-commerce identity in every customer interaction.",
        img: "/assets/highlight.webp",
        imageAlt: "Maintain e-commerce brand consistency",
      },
      {
        title: "Seamless customer conversations",
        description:
          "Move customer conversations from live chat to email, allowing shoppers to continue order discussions and support requests at their convenience.",
        img: "/assets/highlight.webp",
        imageAlt: "Seamless customer conversations",
      },
      {
        title: "Track customer service performance",
        description:
          "Monitor response times, resolution rates, and customer satisfaction to maintain high service standards and build customer loyalty.",
        img: "/assets/highlight.webp",
        imageAlt: "Track customer service performance",
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
    title: "E-Commerce Customer Engagement",
    tag: "Retail Solutions",
    description:
      "Discover features designed specifically for online retailers to enhance customer support, streamline operations, and drive sales growth with crypto payment options.",
  },

  liveChat: {
    title: "Live chat with e-commerce optimized Messenger",
    tag: "Messenger",
    description:
      "Deliver instant customer support that's personalized, contextual, and on-brand across your online store, shopping cart, and product pages.",
    cards: [
      {
        title: "E-commerce branded experience",
        description:
          "Customize the Messenger to match your online store's branding, creating a seamless shopping experience from browsing to checkout support.",
        img: "/assets/highlight.webp",
      },
      {
        title: "Self-serve for common inquiries",
        description:
          "Empower customers with self-serve options for order tracking, returns, FAQs, and product information—reducing support load during peak shopping periods.",
        img: "/assets/highlight.webp",
      },
      {
        title: "Multi-store & multilingual support",
        description:
          "Manage multiple storefronts, resolve customer queries in 45 languages and provide consistent support experiences across global markets.",
        img: "/assets/highlight.webp",
      },
    ],
    backgroundImage: "/assets/image30.webp",
  },

  globalWhatsapp: {
    cards: [
      {
        backgroundImage: "/assets/image30.webp",
        title: "Connect with global customers",
        description:
          "Manage all your WhatsApp business accounts and customer interactions in one workspace, ensuring you never miss order confirmations or support requests.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
      {
        backgroundImage: "/assets/image30.webp",
        title: "Rich media order support",
        description:
          "Send and receive product images, order confirmations, and shipping updates directly from the Inbox, providing visual context for customer inquiries.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
      {
        backgroundImage: "/assets/image30.webp",
        title: "Measure customer satisfaction",
        description:
          "Track how satisfied customers are with your support and shopping experience, and compare performance across different communication channels.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
    ],
    title: "Global e-commerce support through WhatsApp",
    tag: "WhatsApp",
    backgroundImage: "/assets/image30.webp",
    description:
      "Expand your customer reach and provide instant support on the world's most popular messaging app for order updates and customer service.",
  },

  engageCustomers: {
    badgeText: "Social commerce and messaging",
    title: "Engage shoppers on their preferred platforms",
    columns: [
      {
        title: "Instagram Shopping",
        description:
          "Respond to Instagram DMs, shopping inquiries and product questions directly from your dashboard, turning social engagement into sales opportunities.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_01.webp?&q=90",
        imageAlt: "Instagram Shopping",
      },
      {
        title: "Facebook Marketplace",
        description:
          "Route messages from your Facebook shop and marketplace listings to a unified Inbox, making it easy to manage customer inquiries across social commerce channels.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_02.webp?&q=90",
        imageAlt: "Facebook Marketplace",
      },
      {
        title: "SMS Order Updates",
        description:
          "Send and receive order confirmations, shipping updates, and support messages in 45 languages, enabling real-time communication with your customers.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_03.webp?&q=90",
        imageAlt: "SMS Order Updates",
      },
    ],
  },

  testimonial: {
    title: "Transformative e-commerce payments",
    quote:
      "Since integrating TervanX crypto payments, our online store reduced transaction fees by 70% and expanded to international markets without currency conversion headaches, resulting in 200% growth in cross-border sales",
    role: "E-commerce Director",
    name: "James Wilson",
  },

  bannerCTA: {
    title: "Boost Your Online Sales",
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
