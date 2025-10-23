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
      <HeroSection {...educationPageData.heroSection} />
      <div className="w-[95%] mx-auto">
        <SubSection
          title={educationPageData.subsection1.title}
          children={<InsightCards data={educationPageData.insightCards} />}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <SubSection
          title={educationPageData.subsection2.title}
          description={educationPageData.subsection2.description}
          children={
            <BrandEmailSupport {...educationPageData.brandEmailSupport} />
          }
          tag={educationPageData.subsection2.tag}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <CallAndConversation {...educationPageData.callAndConversation} />
      <div className="py-6 lg:py-20">
        <DottedLine fill="gray" />
      </div>
      <LiveChat {...educationPageData.liveChat} />
      <GlobalWhatsapp {...educationPageData.globalWhatsapp} />
      <div className="py-12 mt-8">
        <DottedLine fill="gray" />
      </div>
      <EngageCustomersSection {...educationPageData.engageCustomers} />
      <TestimonialCarousel {...educationPageData.testimonial} />
      <BannerCTA {...educationPageData.bannerCTA} />
    </div>
  );
};

export default Page;

const educationPageData = {
  heroSection: {
    heading: "Education",
    subheading:
      "Transform learning experiences with secure crypto payments for courses, certifications, and educational resources",
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
    title: "Centralize all your educational channels in one connected platform",
  },

  insightCards: [
    {
      step: "01",
      title: "Complete educational oversight",
      description:
        "Manage all your learning platforms, student communications, and course administration in a single platform for complete visibility across your educational institution.",
    },
    {
      step: "02",
      title: "Real-time enrollment analytics",
      description:
        "Track course enrollments, payment processing, and student engagement with live data feeds and comprehensive educational dashboards.",
    },
    {
      step: "03",
      title: "AI-powered learning insights",
      description:
        "Leverage machine learning to identify learning patterns, predict student success, and optimize educational content delivery for better outcomes.",
    },
  ],

  subsection2: {
    title: "Professional email support for educational institutions",
    description:
      "Manage student inquiries, faculty communications, and administrative emails with professional handling that reflects your educational brand and standards.",
    tag: "Email",
  },

  brandEmailSupport: {
    cards: [
      {
        title: "Maintain educational brand identity",
        description:
          "Support multiple department domains, assign institutional logos and create academic signatures that reinforce your educational identity in every communication.",
        img: "/assets/highlight.webp",
        imageAlt: "Maintain educational brand identity",
      },
      {
        title: "Seamless student conversations",
        description:
          "Move student conversations from learning platforms to email, allowing learners to continue academic discussions and support requests at their convenience.",
        img: "/assets/highlight.webp",
        imageAlt: "Seamless student conversations",
      },
      {
        title: "Track educational support performance",
        description:
          "Monitor response times, resolution rates, and student satisfaction to maintain high educational service standards and support student success.",
        img: "/assets/highlight.webp",
        imageAlt: "Track educational support performance",
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
    title: "Educational Communication Platform",
    tag: "Learning Solutions",
    description:
      "Discover features designed specifically for educational institutions to enhance student support, streamline administration, and enable secure crypto payments for educational services.",
  },

  liveChat: {
    title: "Live chat with education-focused Messenger",
    tag: "Messenger",
    description:
      "Deliver instant student support that's personalized, contextual, and on-brand across your learning management system, course platforms, and institutional websites.",
    cards: [
      {
        title: "Educational branded experience",
        description:
          "Customize the Messenger to match your institution's branding, creating a seamless learning experience from course enrollment to academic support.",
        img: "/assets/highlight.webp",
      },
      {
        title: "Self-serve for common inquiries",
        description:
          "Empower students with self-serve options for course information, enrollment procedures, FAQs, and academic resources—reducing administrative load during peak periods.",
        img: "/assets/highlight.webp",
      },
      {
        title: "Multi-campus & multilingual support",
        description:
          "Manage multiple campuses, resolve student queries in 45 languages and provide consistent support experiences across global educational programs.",
        img: "/assets/highlight.webp",
      },
    ],
    backgroundImage: "/assets/image30.webp",
  },

  globalWhatsapp: {
    cards: [
      {
        backgroundImage: "/assets/image30.webp",
        title: "Connect with international students",
        description:
          "Manage all your WhatsApp educational accounts and student interactions in one workspace, ensuring you never miss important enrollment deadlines or student inquiries.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
      {
        backgroundImage: "/assets/image30.webp",
        title: "Rich educational content sharing",
        description:
          "Send and receive course materials, assignment details, and educational resources directly from the Inbox, providing comprehensive support for student learning.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
      {
        backgroundImage: "/assets/image30.webp",
        title: "Measure student satisfaction",
        description:
          "Track how satisfied students are with your educational support and learning experience, and compare performance across different communication channels.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
    ],
    title: "Global educational support through WhatsApp",
    tag: "WhatsApp",
    backgroundImage: "/assets/image30.webp",
    description:
      "Expand your educational reach and provide instant support to international students on the world's most popular messaging app for academic communications.",
  },

  engageCustomers: {
    badgeText: "Educational platforms and messaging",
    title: "Engage learners on their preferred platforms",
    columns: [
      {
        title: "Learning Management Systems",
        description:
          "Respond to student inquiries, course questions, and academic support requests directly from your educational dashboard, enhancing the learning experience.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_01.webp?&q=90",
        imageAlt: "Learning Management Systems",
      },
      {
        title: "Educational Social Platforms",
        description:
          "Route messages from educational forums, student groups, and academic communities to a unified Inbox, making it easy to manage student communications.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_02.webp?&q=90",
        imageAlt: "Educational Social Platforms",
      },
      {
        title: "SMS Academic Updates",
        description:
          "Send and receive course announcements, deadline reminders, and academic alerts in 45 languages, enabling real-time communication with students and faculty.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_03.webp?&q=90",
        imageAlt: "SMS Academic Updates",
      },
    ],
  },

  testimonial: {
    title: "Transformative educational payments",
    quote:
      "Since implementing TervanX crypto payments, our university streamlined international student tuition processing, reduced payment processing fees by 60%, and enabled seamless cross-border educational transactions for our global student body",
    role: "University Administrator",
    name: "Dr. Emily Rodriguez",
  },

  bannerCTA: {
    title: "Enhance Your Educational Institution",
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
