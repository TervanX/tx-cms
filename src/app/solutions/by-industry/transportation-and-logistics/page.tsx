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
      <HeroSection {...transportationLogisticsPageData.heroSection} />
      <div className="w-[95%] mx-auto">
        <SubSection
          title={transportationLogisticsPageData.subsection1.title}
          children={
            <InsightCards data={transportationLogisticsPageData.insightCards} />
          }
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <SubSection
          title={transportationLogisticsPageData.subsection2.title}
          description={transportationLogisticsPageData.subsection2.description}
          children={
            <BrandEmailSupport
              {...transportationLogisticsPageData.brandEmailSupport}
            />
          }
          tag={transportationLogisticsPageData.subsection2.tag}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <CallAndConversation
        {...transportationLogisticsPageData.callAndConversation}
      />
      <div className="py-6 lg:py-20">
        <DottedLine fill="gray" />
      </div>
      <LiveChat {...transportationLogisticsPageData.liveChat} />
      <GlobalWhatsapp {...transportationLogisticsPageData.globalWhatsapp} />
      <div className="py-12 mt-8">
        <DottedLine fill="gray" />
      </div>
      <EngageCustomersSection
        {...transportationLogisticsPageData.engageCustomers}
      />
      <TestimonialCarousel {...transportationLogisticsPageData.testimonial} />
      <BannerCTA {...transportationLogisticsPageData.bannerCTA} />
    </div>
  );
};

export default Page;

const transportationLogisticsPageData = {
  heroSection: {
    heading: "Transportation & Logistics",
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
    title:
      "Centralize all your transportation and logistics channels in one connected platform",
  },

  insightCards: [
    {
      step: "01",
      title: "Complete logistics oversight",
      description:
        "Manage all your transportation routes, shipping operations, and logistics communications in a single platform for complete visibility across your supply chain.",
    },
    {
      step: "02",
      title: "Real-time shipment analytics",
      description:
        "Track deliveries, fleet movements, and cargo status with live data feeds and comprehensive logistics dashboards.",
    },
    {
      step: "03",
      title: "AI-powered logistics insights",
      description:
        "Leverage machine learning to optimize routing, predict delivery times, and automate logistics operations for enhanced efficiency and reliability.",
    },
  ],

  subsection2: {
    title: "Professional email support for transportation providers",
    description:
      "Manage shipping inquiries, delivery updates, and logistics communications with professional email handling that reflects your transportation brand standards.",
    tag: "Email",
  },

  brandEmailSupport: {
    cards: [
      {
        title: "Maintain logistics brand consistency",
        description:
          "Support multiple transportation services, assign company logos and create professional signatures that reinforce your logistics identity in every customer communication.",
        img: "/assets/highlight.webp",
        imageAlt: "Maintain logistics brand consistency",
      },
      {
        title: "Seamless shipping conversations",
        description:
          "Move customer conversations from tracking platforms to email, allowing clients to continue delivery discussions and logistics inquiries at their convenience.",
        img: "/assets/highlight.webp",
        imageAlt: "Seamless shipping conversations",
      },
      {
        title: "Track logistics service performance",
        description:
          "Monitor response times, delivery accuracy, and customer satisfaction to maintain high logistics service standards and operational excellence.",
        img: "/assets/highlight.webp",
        imageAlt: "Track logistics service performance",
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
    title: "Transportation & Logistics Communication Platform",
    tag: "Logistics Services",
    description:
      "Discover features designed specifically for transportation and logistics providers to enhance customer support, streamline operations, and enable efficient shipping services.",
  },

  liveChat: {
    title: "Live chat with logistics-focused Messenger",
    tag: "Messenger",
    description:
      "Deliver instant shipping support that's personalized, contextual, and on-brand across your tracking platforms, customer portals, and logistics service applications.",
    cards: [
      {
        title: "Logistics-branded experience",
        description:
          "Customize the Messenger to match your transportation company's branding, creating a seamless customer experience from booking to delivery tracking.",
        img: "/assets/highlight.webp",
      },
      {
        title: "Self-serve for common inquiries",
        description:
          "Empower customers with self-serve options for tracking numbers, delivery estimates, shipping rates, and FAQs—reducing customer service load during peak shipping seasons.",
        img: "/assets/highlight.webp",
      },
      {
        title: "Multi-region & multilingual support",
        description:
          "Manage multiple shipping routes and destinations, resolve customer queries in 45 languages and provide consistent support experiences across global operations.",
        img: "/assets/highlight.webp",
      },
    ],
    backgroundImage: "/assets/image30.webp",
  },

  globalWhatsapp: {
    cards: [
      {
        backgroundImage: "/assets/image30.webp",
        title: "Connect with international clients",
        description:
          "Manage all your WhatsApp logistics accounts and customer interactions in one workspace, ensuring you never miss important delivery updates or shipping inquiries.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
      {
        backgroundImage: "/assets/image30.webp",
        title: "Rich logistics communications",
        description:
          "Send and receive delivery confirmations, tracking updates, and shipping documentation directly from the Inbox, providing comprehensive support for logistics clients.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
      {
        backgroundImage: "/assets/image30.webp",
        title: "Measure client satisfaction",
        description:
          "Track how satisfied clients are with your logistics services and delivery performance, and compare service quality across different communication channels.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
    ],
    title: "Global logistics support through WhatsApp",
    tag: "WhatsApp",
    backgroundImage: "/assets/image30.webp",
    description:
      "Expand your logistics reach and provide instant support to international clients on the world's most popular messaging app for shipping communications.",
  },

  engageCustomers: {
    badgeText: "Logistics platforms and messaging",
    title: "Engage clients on their preferred platforms",
    columns: [
      {
        title: "Tracking Platforms",
        description:
          "Respond to customer inquiries, delivery questions, and shipping information requests directly from your logistics dashboard, enhancing the cargo tracking experience.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_01.webp?&q=90",
        imageAlt: "Tracking Platforms",
      },
      {
        title: "Shipping Social Platforms",
        description:
          "Route messages from logistics forums, freight communities, and supply chain networks to a unified Inbox, making it easy to manage client communications.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_02.webp?&q=90",
        imageAlt: "Shipping Social Platforms",
      },
      {
        title: "SMS Delivery Alerts",
        description:
          "Send and receive shipment notifications, delivery updates, and pickup reminders in 45 languages, enabling real-time communication with logistics clients.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_03.webp?&q=90",
        imageAlt: "SMS Delivery Alerts",
      },
    ],
  },

  testimonial: {
    title: "Transformative logistics integration",
    quote:
      "Since implementing TervanX logistics solutions, our shipping company improved delivery communication efficiency by 70%, reduced customer service inquiries by 45%, and enhanced client satisfaction with real-time tracking and proactive updates",
    role: "Logistics Operations Manager",
    name: "David Chen",
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
