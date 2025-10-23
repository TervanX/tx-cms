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
      <HeroSection {...hospitalityRealEstatePageData.heroSection} />
      <div className="w-[95%] mx-auto">
        <SubSection
          title={hospitalityRealEstatePageData.subsection1.title}
          children={
            <InsightCards data={hospitalityRealEstatePageData.insightCards} />
          }
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <SubSection
          title={hospitalityRealEstatePageData.subsection2.title}
          description={hospitalityRealEstatePageData.subsection2.description}
          children={
            <BrandEmailSupport
              {...hospitalityRealEstatePageData.brandEmailSupport}
            />
          }
          tag={hospitalityRealEstatePageData.subsection2.tag}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <CallAndConversation
        {...hospitalityRealEstatePageData.callAndConversation}
      />
      <div className="py-6 lg:py-20">
        <DottedLine fill="gray" />
      </div>
      <LiveChat {...hospitalityRealEstatePageData.liveChat} />
      <GlobalWhatsapp {...hospitalityRealEstatePageData.globalWhatsapp} />
      <div className="py-12 mt-8">
        <DottedLine fill="gray" />
      </div>
      <EngageCustomersSection
        {...hospitalityRealEstatePageData.engageCustomers}
      />
      <TestimonialCarousel {...hospitalityRealEstatePageData.testimonial} />
      <BannerCTA {...hospitalityRealEstatePageData.bannerCTA} />
    </div>
  );
};

export default Page;

const hospitalityRealEstatePageData = {
  heroSection: {
    heading: "Hospitality & Real Estate",
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
      "Centralize all your hospitality and real estate channels in one connected platform",
  },

  insightCards: [
    {
      step: "01",
      title: "Complete property oversight",
      description:
        "Manage all your hospitality properties, real estate listings, and guest communications in a single platform for complete visibility across your portfolio.",
    },
    {
      step: "02",
      title: "Real-time booking analytics",
      description:
        "Track reservations, property inquiries, and guest interactions with live data feeds and comprehensive hospitality dashboards.",
    },
    {
      step: "03",
      title: "AI-powered property insights",
      description:
        "Leverage machine learning to predict booking trends, optimize pricing strategies, and automate property management for enhanced guest experiences.",
    },
  ],

  subsection2: {
    title: "Professional email support for hospitality providers",
    description:
      "Manage guest inquiries, booking confirmations, and property management communications with professional email handling that reflects your hospitality brand standards.",
    tag: "Email",
  },

  brandEmailSupport: {
    cards: [
      {
        title: "Maintain hospitality brand consistency",
        description:
          "Support multiple property portfolios, assign brand logos and create professional signatures that reinforce your hospitality identity in every guest communication.",
        img: "/assets/highlight.webp",
        imageAlt: "Maintain hospitality brand consistency",
      },
      {
        title: "Seamless guest conversations",
        description:
          "Move guest conversations from booking platforms to email, allowing travelers to continue property discussions and reservation inquiries at their convenience.",
        img: "/assets/highlight.webp",
        imageAlt: "Seamless guest conversations",
      },
      {
        title: "Track hospitality service performance",
        description:
          "Monitor response times, booking conversion rates, and guest satisfaction to maintain high hospitality service standards and reputation management.",
        img: "/assets/highlight.webp",
        imageAlt: "Track hospitality service performance",
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
    title: "Hospitality & Real Estate Communication Platform",
    tag: "Property Services",
    description:
      "Discover features designed specifically for hospitality and real estate providers to enhance guest support, streamline property management, and enable secure booking services.",
  },

  liveChat: {
    title: "Live chat with hospitality-focused Messenger",
    tag: "Messenger",
    description:
      "Deliver instant guest support that's personalized, contextual, and on-brand across your booking platforms, property websites, and hospitality service portals.",
    cards: [
      {
        title: "Hospitality-branded experience",
        description:
          "Customize the Messenger to match your hospitality brand's identity, creating a seamless guest experience from booking inquiries to check-in support.",
        img: "/assets/highlight.webp",
      },
      {
        title: "Self-serve for common inquiries",
        description:
          "Empower guests with self-serve options for booking details, property amenities, local recommendations, and FAQs—reducing front desk load during peak seasons.",
        img: "/assets/highlight.webp",
      },
      {
        title: "Multi-property & multilingual support",
        description:
          "Manage multiple hotel locations and real estate properties, resolve guest queries in 45 languages and provide consistent support experiences across global destinations.",
        img: "/assets/highlight.webp",
      },
    ],
    backgroundImage: "/assets/image30.webp",
  },

  globalWhatsapp: {
    cards: [
      {
        backgroundImage: "/assets/image30.webp",
        title: "Connect with international guests",
        description:
          "Manage all your WhatsApp hospitality accounts and guest interactions in one workspace, ensuring you never miss important booking requests or guest inquiries.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
      {
        backgroundImage: "/assets/image30.webp",
        title: "Rich hospitality communications",
        description:
          "Send and receive booking confirmations, property photos, and local guide information directly from the Inbox, providing comprehensive support for travelers.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
      {
        backgroundImage: "/assets/image30.webp",
        title: "Measure guest satisfaction",
        description:
          "Track how satisfied guests are with your hospitality services and property experiences, and compare performance across different communication channels.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
    ],
    title: "Global hospitality support through WhatsApp",
    tag: "WhatsApp",
    backgroundImage: "/assets/image30.webp",
    description:
      "Expand your hospitality reach and provide instant support to international travelers on the world's most popular messaging app for travel communications.",
  },

  engageCustomers: {
    badgeText: "Hospitality platforms and messaging",
    title: "Engage guests on their preferred platforms",
    columns: [
      {
        title: "Booking Platforms",
        description:
          "Respond to guest inquiries, reservation questions, and property information requests directly from your hospitality dashboard, enhancing the booking experience.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_01.webp?&q=90",
        imageAlt: "Booking Platforms",
      },
      {
        title: "Travel Social Platforms",
        description:
          "Route messages from travel forums, guest review sites, and tourism communities to a unified Inbox, making it easy to manage guest communications.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_02.webp?&q=90",
        imageAlt: "Travel Social Platforms",
      },
      {
        title: "SMS Booking Alerts",
        description:
          "Send and receive reservation confirmations, check-in reminders, and local activity updates in 45 languages, enabling real-time communication with guests.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_03.webp?&q=90",
        imageAlt: "SMS Booking Alerts",
      },
    ],
  },

  testimonial: {
    title: "Transformative hospitality integration",
    quote:
      "Since implementing TervanX hospitality solutions, our hotel chain improved guest communication efficiency by 80%, increased direct bookings by 35%, and enhanced guest satisfaction scores with faster, more personalized service responses",
    role: "Hospitality Director",
    name: "Michael Rodriguez",
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
