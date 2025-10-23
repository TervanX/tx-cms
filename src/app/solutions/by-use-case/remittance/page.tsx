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
      <HeroSection {...remittancePageData.heroSection} />
      <div className="w-[95%] mx-auto">
        <SubSection
          title={remittancePageData.subsection1.title}
          children={<InsightCards data={remittancePageData.insightCards} />}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <SubSection
          title={remittancePageData.subsection2.title}
          description={remittancePageData.subsection2.description}
          children={
            <BrandEmailSupport {...remittancePageData.brandEmailSupport} />
          }
          tag={remittancePageData.subsection2.tag}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <CallAndConversation {...remittancePageData.callAndConversation} />
      <div className="py-6 lg:py-20">
        <DottedLine fill="gray" />
      </div>
      <LiveChat {...remittancePageData.liveChat} />
      <GlobalWhatsapp {...remittancePageData.globalWhatsapp} />
      <div className="py-12 mt-8">
        <DottedLine fill="gray" />
      </div>
      <EngageCustomersSection {...remittancePageData.engageCustomers} />
      <TestimonialCarousel {...remittancePageData.testimonial} />
      <BannerCTA {...remittancePageData.bannerCTA} />
    </div>
  );
};

export default Page;

const remittancePageData = {
  heroSection: {
    heading: "Remittance",
    subheading: "Enable seamless global money transfers",
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
    title: "Centralize all your remittance channels in one connected platform",
  },

  insightCards: [
    {
      step: "01",
      title: "Complete remittance oversight",
      description:
        "Manage all your money transfer corridors, international payments, and customer communications in a single platform for complete visibility across your remittance operations.",
    },
    {
      step: "02",
      title: "Real-time transfer analytics",
      description:
        "Track transaction volumes, exchange rates, and transfer success rates with live data feeds and comprehensive remittance dashboards.",
    },
    {
      step: "03",
      title: "AI-powered remittance insights",
      description:
        "Leverage machine learning to optimize transfer routes, predict currency fluctuations, and automate compliance checks for enhanced service delivery.",
    },
  ],

  subsection2: {
    title: "Professional email support for remittance providers",
    description:
      "Manage customer inquiries, transfer support, and compliance communications with professional email handling that reflects your remittance brand standards.",
    tag: "Email",
  },

  brandEmailSupport: {
    cards: [
      {
        title: "Maintain remittance brand consistency",
        description:
          "Support multiple transfer corridors, assign service logos and create professional signatures that reinforce your remittance identity in every customer communication.",
        img: "/assets/highlight.webp",
        imageAlt: "Maintain remittance brand consistency",
      },
      {
        title: "Seamless transfer conversations",
        description:
          "Move customer conversations from transfer platforms to email, allowing users to continue payment discussions and support inquiries at their convenience.",
        img: "/assets/highlight.webp",
        imageAlt: "Seamless transfer conversations",
      },
      {
        title: "Track remittance service performance",
        description:
          "Monitor response times, transfer resolution rates, and customer satisfaction to maintain high remittance service standards and regulatory compliance.",
        img: "/assets/highlight.webp",
        imageAlt: "Track remittance service performance",
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
    title: "Remittance Communication Platform",
    tag: "Transfer Services",
    description:
      "Discover features designed specifically for remittance providers to enhance customer support, streamline international operations, and enable secure money transfer services.",
  },

  liveChat: {
    title: "Live chat with remittance-focused Messenger",
    tag: "Messenger",
    description:
      "Deliver instant transfer support that's personalized, contextual, and on-brand across your remittance apps, transfer portals, and customer service platforms.",
    cards: [
      {
        title: "Remittance-branded experience",
        description:
          "Customize the Messenger to match your remittance service's branding, creating a seamless customer experience from transfer initiation to recipient confirmation.",
        img: "/assets/highlight.webp",
      },
      {
        title: "Self-serve for common inquiries",
        description:
          "Empower customers with self-serve options for exchange rates, transfer fees, delivery times, and FAQs—reducing support load during peak transfer periods.",
        img: "/assets/highlight.webp",
      },
      {
        title: "Multi-currency & multilingual support",
        description:
          "Manage multiple currency pairs, resolve customer queries in 45 languages and provide consistent support experiences across different transfer corridors.",
        img: "/assets/highlight.webp",
      },
    ],
    backgroundImage: "/assets/image30.webp",
  },

  globalWhatsapp: {
    cards: [
      {
        backgroundImage: "/assets/image30.webp",
        title: "Connect with international customers",
        description:
          "Manage all your WhatsApp remittance accounts and customer interactions in one workspace, ensuring you never miss important transfer updates or customer inquiries.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
      {
        backgroundImage: "/assets/image30.webp",
        title: "Rich transfer communications",
        description:
          "Send and receive transfer confirmations, exchange rate updates, and delivery notifications directly from the Inbox, providing comprehensive support for remittance customers.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
      {
        backgroundImage: "/assets/image30.webp",
        title: "Measure customer satisfaction",
        description:
          "Track how satisfied customers are with your remittance services and transfer experience, and compare performance across different communication channels.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
    ],
    title: "Global remittance support through WhatsApp",
    tag: "WhatsApp",
    backgroundImage: "/assets/image30.webp",
    description:
      "Expand your remittance reach and provide instant support to international customers on the world's most popular messaging app for money transfer communications.",
  },

  engageCustomers: {
    badgeText: "Remittance platforms and messaging",
    title: "Engage customers on their preferred platforms",
    columns: [
      {
        title: "Transfer Apps",
        description:
          "Respond to customer inquiries, transfer questions, and payment management requests directly from your remittance dashboard, enhancing the money transfer experience.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_01.webp?&q=90",
        imageAlt: "Transfer Apps",
      },
      {
        title: "Financial Social Platforms",
        description:
          "Route messages from financial forums, expat communities, and diaspora networks to a unified Inbox, making it easy to manage customer communications.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_02.webp?&q=90",
        imageAlt: "Financial Social Platforms",
      },
      {
        title: "SMS Transfer Alerts",
        description:
          "Send and receive payment notifications, exchange rate alerts, and delivery confirmations in 45 languages, enabling real-time communication with remittance customers.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_03.webp?&q=90",
        imageAlt: "SMS Transfer Alerts",
      },
    ],
  },

  testimonial: {
    title: "Transformative remittance integration",
    quote:
      "Since implementing TervanX remittance solutions, our service improved customer communication efficiency by 80%, reduced transfer support time by 65%, and enhanced customer satisfaction with instant, transparent cross-border payment support",
    role: "Remittance Operations Director",
    name: "Carlos Mendez",
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
