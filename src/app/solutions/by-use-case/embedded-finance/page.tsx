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
      <HeroSection {...embeddedFinancePageData.heroSection} />
      <div className="w-[95%] mx-auto">
        <SubSection
          title={embeddedFinancePageData.subsection1.title}
          children={
            <InsightCards data={embeddedFinancePageData.insightCards} />
          }
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <SubSection
          title={embeddedFinancePageData.subsection2.title}
          description={embeddedFinancePageData.subsection2.description}
          children={
            <BrandEmailSupport {...embeddedFinancePageData.brandEmailSupport} />
          }
          tag={embeddedFinancePageData.subsection2.tag}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <CallAndConversation {...embeddedFinancePageData.callAndConversation} />
      <div className="py-6 lg:py-20">
        <DottedLine fill="gray" />
      </div>
      <LiveChat {...embeddedFinancePageData.liveChat} />
      <GlobalWhatsapp {...embeddedFinancePageData.globalWhatsapp} />
      <div className="py-12 mt-8">
        <DottedLine fill="gray" />
      </div>
      <EngageCustomersSection {...embeddedFinancePageData.engageCustomers} />
      <TestimonialCarousel {...embeddedFinancePageData.testimonial} />
      <BannerCTA {...embeddedFinancePageData.bannerCTA} />
    </div>
  );
};

export default Page;

const embeddedFinancePageData = {
  heroSection: {
    heading: "Embedded Finance",
    subheading: "Integrate financial services into any app",
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
      "Centralize all your embedded finance channels in one connected platform",
  },

  insightCards: [
    {
      step: "01",
      title: "Complete embedded finance oversight",
      description:
        "Manage all your financial integrations, API connections, and partner communications in a single platform for complete visibility across your embedded finance ecosystem.",
    },
    {
      step: "02",
      title: "Real-time integration analytics",
      description:
        "Track API usage, transaction volumes, and partner performance with live data feeds and comprehensive embedded finance dashboards.",
    },
    {
      step: "03",
      title: "AI-powered financial insights",
      description:
        "Leverage machine learning to optimize API performance, predict integration trends, and automate financial operations for enhanced service delivery.",
    },
  ],

  subsection2: {
    title: "Professional email support for embedded finance providers",
    description:
      "Manage partner inquiries, integration support, and financial communications with professional email handling that reflects your embedded finance brand standards.",
    tag: "Email",
  },

  brandEmailSupport: {
    cards: [
      {
        title: "Maintain embedded finance brand consistency",
        description:
          "Support multiple integration partners, assign financial service logos and create professional signatures that reinforce your embedded finance identity in every communication.",
        img: "/assets/highlight.webp",
        imageAlt: "Maintain embedded finance brand consistency",
      },
      {
        title: "Seamless partner conversations",
        description:
          "Move partner conversations from integration platforms to email, allowing developers to continue API discussions and technical inquiries at their convenience.",
        img: "/assets/highlight.webp",
        imageAlt: "Seamless partner conversations",
      },
      {
        title: "Track integration service performance",
        description:
          "Monitor response times, API resolution rates, and partner satisfaction to maintain high embedded finance service standards and compliance requirements.",
        img: "/assets/highlight.webp",
        imageAlt: "Track integration service performance",
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
    title: "Embedded Finance Communication Platform",
    tag: "Integration Services",
    description:
      "Discover features designed specifically for embedded finance providers to enhance partner support, streamline API operations, and enable secure financial integrations.",
  },

  liveChat: {
    title: "Live chat with embedded finance-focused Messenger",
    tag: "Messenger",
    description:
      "Deliver instant integration support that's personalized, contextual, and on-brand across your API documentation, developer portals, and partner platforms.",
    cards: [
      {
        title: "Embedded finance-branded experience",
        description:
          "Customize the Messenger to match your embedded finance platform's branding, creating a seamless developer experience from API integration to production deployment.",
        img: "/assets/highlight.webp",
      },
      {
        title: "Self-serve for common inquiries",
        description:
          "Empower partners with self-serve options for API documentation, integration guides, SDK references, and FAQs—reducing support load during peak integration periods.",
        img: "/assets/highlight.webp",
      },
      {
        title: "Multi-platform & multilingual support",
        description:
          "Manage multiple integration frameworks, resolve partner queries in 45 languages and provide consistent support experiences across different technology stacks.",
        img: "/assets/highlight.webp",
      },
    ],
    backgroundImage: "/assets/image30.webp",
  },

  globalWhatsapp: {
    cards: [
      {
        backgroundImage: "/assets/image30.webp",
        title: "Connect with international partners",
        description:
          "Manage all your WhatsApp embedded finance accounts and partner interactions in one workspace, ensuring you never miss important integration updates or technical inquiries.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
      {
        backgroundImage: "/assets/image30.webp",
        title: "Rich integration communications",
        description:
          "Send and receive API updates, integration confirmations, and technical alerts directly from the Inbox, providing comprehensive support for embedded finance partners.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
      {
        backgroundImage: "/assets/image30.webp",
        title: "Measure partner satisfaction",
        description:
          "Track how satisfied partners are with your embedded finance services and integration experience, and compare performance across different communication channels.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
    ],
    title: "Global embedded finance support through WhatsApp",
    tag: "WhatsApp",
    backgroundImage: "/assets/image30.webp",
    description:
      "Expand your embedded finance reach and provide instant support to international partners on the world's most popular messaging app for technical communications.",
  },

  engageCustomers: {
    badgeText: "Integration platforms and messaging",
    title: "Engage partners on their preferred platforms",
    columns: [
      {
        title: "Developer Portals",
        description:
          "Respond to partner inquiries, API questions, and integration management requests directly from your embedded finance dashboard, enhancing the developer experience.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_01.webp?&q=90",
        imageAlt: "Developer Portals",
      },
      {
        title: "Tech Community Platforms",
        description:
          "Route messages from developer forums, tech communities, and partner networks to a unified Inbox, making it easy to manage integration communications.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_02.webp?&q=90",
        imageAlt: "Tech Community Platforms",
      },
      {
        title: "SMS Integration Alerts",
        description:
          "Send and receive API updates, service notifications, and maintenance alerts in 45 languages, enabling real-time communication with embedded finance partners.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_03.webp?&q=90",
        imageAlt: "SMS Integration Alerts",
      },
    ],
  },

  testimonial: {
    title: "Transformative embedded finance integration",
    quote:
      "Since implementing TervanX embedded finance solutions, our platform improved partner communication efficiency by 80%, reduced integration support time by 65%, and enhanced partner satisfaction with instant, reliable API support across multiple regions",
    role: "Head of Embedded Finance",
    name: "Rachel Kim",
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
