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
      <HeroSection {...healthcarePageData.heroSection} />
      <div className="w-[95%] mx-auto">
        <SubSection
          title={healthcarePageData.subsection1.title}
          children={<InsightCards data={healthcarePageData.insightCards} />}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <SubSection
          title={healthcarePageData.subsection2.title}
          description={healthcarePageData.subsection2.description}
          children={
            <BrandEmailSupport {...healthcarePageData.brandEmailSupport} />
          }
          tag={healthcarePageData.subsection2.tag}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <CallAndConversation {...healthcarePageData.callAndConversation} />
      <div className="py-6 lg:py-20">
        <DottedLine fill="gray" />
      </div>
      <LiveChat {...healthcarePageData.liveChat} />
      <GlobalWhatsapp {...healthcarePageData.globalWhatsapp} />
      <div className="py-12 mt-8">
        <DottedLine fill="gray" />
      </div>
      <EngageCustomersSection {...healthcarePageData.engageCustomers} />
      <TestimonialCarousel {...healthcarePageData.testimonial} />
      <BannerCTA {...healthcarePageData.bannerCTA} />
    </div>
  );
};

export default Page;

const healthcarePageData = {
  heroSection: {
    heading: "Healthcare",
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
    title: "Centralize all your healthcare channels in one connected platform",
  },

  insightCards: [
    {
      step: "01",
      title: "Complete healthcare oversight",
      description:
        "Manage all your medical channels, patient communications, and healthcare services in a single platform for complete visibility across your healthcare institution.",
    },
    {
      step: "02",
      title: "Real-time healthcare analytics",
      description:
        "Track patient interactions, appointment scheduling, and medical services with live data feeds and comprehensive healthcare dashboards.",
    },
    {
      step: "03",
      title: "AI-powered healthcare insights",
      description:
        "Leverage machine learning to predict patient needs, optimize treatment plans, and automate healthcare operations for enhanced patient care.",
    },
  ],

  subsection2: {
    title: "Professional email support for healthcare providers",
    description:
      "Manage patient inquiries, appointment scheduling, and medical consultations with professional email handling that reflects your healthcare brand standards.",
    tag: "Email",
  },

  brandEmailSupport: {
    cards: [
      {
        title: "Maintain healthcare brand consistency",
        description:
          "Support multiple medical departments, assign healthcare logos and create professional signatures that reinforce your medical identity in every patient communication.",
        img: "/assets/highlight.webp",
        imageAlt: "Maintain healthcare brand consistency",
      },
      {
        title: "Seamless patient conversations",
        description:
          "Move patient conversations from telehealth platforms to email, allowing patients to continue medical discussions and appointment scheduling at their convenience.",
        img: "/assets/highlight.webp",
        imageAlt: "Seamless patient conversations",
      },
      {
        title: "Track healthcare service performance",
        description:
          "Monitor response times, appointment management, and patient satisfaction to maintain high healthcare service standards and regulatory compliance.",
        img: "/assets/highlight.webp",
        imageAlt: "Track healthcare service performance",
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
    title: "Healthcare Communication Platform",
    tag: "Medical Services",
    description:
      "Discover features designed specifically for healthcare providers to enhance patient support, streamline medical operations, and enable secure healthcare services.",
  },

  liveChat: {
    title: "Live chat with healthcare-focused Messenger",
    tag: "Messenger",
    description:
      "Deliver instant patient support that's personalized, contextual, and on-brand across your healthcare apps, patient portals, and medical service platforms.",
    cards: [
      {
        title: "Healthcare-branded experience",
        description:
          "Customize the Messenger to match your healthcare institution's branding, creating a seamless patient experience from appointment booking to medical advice.",
        img: "/assets/highlight.webp",
      },
      {
        title: "Self-serve for common inquiries",
        description:
          "Empower patients with self-serve options for appointment scheduling, prescription refills, medical records, and FAQs—reducing administrative load during peak hours.",
        img: "/assets/highlight.webp",
      },
      {
        title: "Multi-facility & multilingual support",
        description:
          "Manage multiple healthcare facilities, resolve patient queries in 45 languages and provide consistent support experiences across diverse patient populations.",
        img: "/assets/highlight.webp",
      },
    ],
    backgroundImage: "/assets/image30.webp",
  },

  globalWhatsapp: {
    cards: [
      {
        backgroundImage: "/assets/image30.webp",
        title: "Connect with patients globally",
        description:
          "Manage all your WhatsApp healthcare accounts and patient interactions in one workspace, ensuring you never miss important appointment reminders or patient inquiries.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
      {
        backgroundImage: "/assets/image30.webp",
        title: "Rich healthcare communications",
        description:
          "Send and receive appointment confirmations, medical updates, and health reminders directly from the Inbox, providing comprehensive support for patients.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
      {
        backgroundImage: "/assets/image30.webp",
        title: "Measure patient satisfaction",
        description:
          "Track how satisfied patients are with your healthcare services and medical care, and compare performance across different communication channels.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
    ],
    title: "Global healthcare support through WhatsApp",
    tag: "WhatsApp",
    backgroundImage: "/assets/image30.webp",
    description:
      "Expand your healthcare reach and provide instant support to international patients on the world's most popular messaging app for medical communications.",
  },

  engageCustomers: {
    badgeText: "Healthcare platforms and messaging",
    title: "Engage patients on their preferred platforms",
    columns: [
      {
        title: "Telehealth Platforms",
        description:
          "Respond to patient inquiries, medical questions, and appointment requests directly from your healthcare dashboard, enhancing the patient care experience.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_01.webp?&q=90",
        imageAlt: "Telehealth Platforms",
      },
      {
        title: "Medical Social Platforms",
        description:
          "Route messages from health forums, patient communities, and medical networks to a unified Inbox, making it easy to manage patient communications.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_02.webp?&q=90",
        imageAlt: "Medical Social Platforms",
      },
      {
        title: "SMS Health Alerts",
        description:
          "Send and receive appointment reminders, medication alerts, and health updates in 45 languages, enabling real-time communication with patients.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_03.webp?&q=90",
        imageAlt: "SMS Health Alerts",
      },
    ],
  },

  testimonial: {
    title: "Transformative healthcare integration",
    quote:
      "Since implementing TervanX healthcare solutions, our medical institution improved patient communication efficiency by 75%, reduced administrative costs by 40%, and enhanced patient satisfaction with faster, more responsive healthcare services",
    role: "Chief Medical Officer",
    name: "Dr. Sarah Johnson",
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
