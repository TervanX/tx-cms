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
      <HeroSection {...creatorMediaPageData.heroSection} />
      <div className="w-[95%] mx-auto">
        <SubSection
          title={creatorMediaPageData.subsection1.title}
          children={<InsightCards data={creatorMediaPageData.insightCards} />}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <SubSection
          title={creatorMediaPageData.subsection2.title}
          description={creatorMediaPageData.subsection2.description}
          children={
            <BrandEmailSupport {...creatorMediaPageData.brandEmailSupport} />
          }
          tag={creatorMediaPageData.subsection2.tag}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <CallAndConversation {...creatorMediaPageData.callAndConversation} />
      <div className="py-6 lg:py-20">
        <DottedLine fill="gray" />
      </div>
      <LiveChat {...creatorMediaPageData.liveChat} />
      <GlobalWhatsapp {...creatorMediaPageData.globalWhatsapp} />
      <div className="py-12 mt-8">
        <DottedLine fill="gray" />
      </div>
      <EngageCustomersSection {...creatorMediaPageData.engageCustomers} />
      <TestimonialCarousel {...creatorMediaPageData.testimonial} />
      <BannerCTA {...creatorMediaPageData.bannerCTA} />
    </div>
  );
};

export default Page;

const creatorMediaPageData = {
  heroSection: {
    heading: "Creator Economy & Media",
    subheading:
      "Monetize your content and engage your audience with seamless crypto payments and Web3 solutions",
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
    title: "Centralize all your creator channels in one connected platform",
  },

  insightCards: [
    {
      step: "01",
      title: "Unified audience management",
      description:
        "Manage all your creator channels, fan interactions, and content monetization in a single platform for complete visibility across your digital presence.",
    },
    {
      step: "02",
      title: "Real-time revenue analytics",
      description:
        "Track your earnings, NFT sales, and crypto payments with live data feeds and comprehensive dashboards designed for content creators.",
    },
    {
      step: "03",
      title: "AI-powered audience insights",
      description:
        "Leverage machine learning to understand your audience behavior, predict content trends, and optimize your monetization strategy automatically.",
    },
  ],

  subsection2: {
    title: "On-brand email support for creator-fan relationships",
    description:
      "Manage fan emails, brand collaborations, and business inquiries with custom signatures and professional email handling that reflects your unique creator brand.",
    tag: "Email",
  },

  brandEmailSupport: {
    cards: [
      {
        title: "Maintain your creator brand",
        description:
          "Support multiple email domains, assign custom logos and create personalized signatures that reflect your unique creator identity in every fan interaction.",
        img: "/assets/highlight.webp",
        imageAlt: "Maintain your creator brand",
      },
      {
        title: "Seamless fan conversations",
        description:
          "Move conversations from social media to email, allowing your audience to continue discussions when it's most convenient for their schedule.",
        img: "/assets/highlight.webp",
        imageAlt: "Seamless fan conversations",
      },
      {
        title: "Track engagement performance",
        description:
          "Monitor email response rates, fan satisfaction, and collaboration opportunities to grow your creator business and audience relationships.",
        img: "/assets/highlight.webp",
        imageAlt: "Track engagement performance",
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
    title: "Creator Communication Platform",
    tag: "Creator Tools",
    description:
      "Discover features designed specifically for creators and media professionals to engage audiences, monetize content, and build sustainable digital businesses.",
  },

  liveChat: {
    title: "Live chat with creator-focused Messenger",
    tag: "Messenger",
    description:
      "Deliver live engagement that's personalized, contextual, and on-brand across your content platforms, websites, and digital storefronts.",
    cards: [
      {
        title: "Creator-branded experience",
        description:
          "Customize the Messenger to match your unique creator brand across all your digital touchpoints and content platforms.",
        img: "/assets/highlight.webp",
      },
      {
        title: "Self-serve for fan support",
        description:
          "Empower your audience with self-serve options to find content updates, merchandise info, and FAQs—reducing repetitive questions so you can focus on creating.",
        img: "/assets/highlight.webp",
      },
      {
        title: "Multi-platform & multilingual",
        description:
          "Support fans across multiple platforms, resolve queries in 45 languages and deliver exceptional experiences that transcend geographical boundaries.",
        img: "/assets/highlight.webp",
      },
    ],
    backgroundImage: "/assets/image30.webp",
  },

  globalWhatsapp: {
    cards: [
      {
        backgroundImage: "/assets/image30.webp",
        title: "Connect with your global audience",
        description:
          "Manage all your WhatsApp business accounts and fan interactions in one workspace, ensuring you never miss important messages from collaborators or superfans.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
      {
        backgroundImage: "/assets/image30.webp",
        title: "Rich media fan interactions",
        description:
          "Send and receive images, video previews, and digital content directly from the Inbox, providing rich context for your creative collaborations.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
      {
        backgroundImage: "/assets/image30.webp",
        title: "Measure fan satisfaction",
        description:
          "Track how satisfied your audience is with your content and interactions, and compare engagement across different communication channels.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
    ],
    title: "Global creator support through WhatsApp",
    tag: "WhatsApp",
    backgroundImage: "/assets/image30.webp",
    description:
      "Expand your reach and engage with your international audience on the world's most popular messaging app for direct creator-fan relationships.",
  },

  engageCustomers: {
    badgeText: "Social media and messaging",
    title: "Engage your audience on the platforms they love",
    columns: [
      {
        title: "Instagram",
        description:
          "Respond to Instagram DMs, story replies and mentions directly from your dashboard, and interact with fans using rich media that showcases your creative work.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_01.webp?&q=90",
        imageAlt: "Instagram",
      },
      {
        title: "Facebook",
        description:
          "Route messages from your Facebook page and creator groups to a unified Inbox, making it easy to manage fan interactions across your social presence.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_02.webp?&q=90",
        imageAlt: "Facebook",
      },
      {
        title: "SMS",
        description:
          "Send and receive text messages in 45 languages, enabling real-time, personal connections with your most engaged fans and collaborators.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_03.webp?&q=90",
        imageAlt: "SMS",
      },
    ],
  },

  testimonial: {
    title: "Transformative creator monetization",
    quote:
      "Since integrating TervanX, I've diversified my revenue streams with crypto payments and NFTs, increasing my monthly earnings by 150% while building stronger connections with my global audience",
    role: "Digital Content Creator",
    name: "Sarah Martinez",
  },

  bannerCTA: {
    title: "Start Your Creator Journey",
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
