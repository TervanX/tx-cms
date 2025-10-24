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
      <HeroSection {...fintechPlatformsPageData.heroSection} />
      <div className="w-[95%] mx-auto">
        <SubSection
          title={fintechPlatformsPageData.subsection1.title}
          children={
            <InsightCards data={fintechPlatformsPageData.insightCards} />
          }
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <SubSection
          title={fintechPlatformsPageData.subsection2.title}
          description={fintechPlatformsPageData.subsection2.description}
          children={
            <BrandEmailSupport
              {...fintechPlatformsPageData.brandEmailSupport}
            />
          }
          tag={fintechPlatformsPageData.subsection2.tag}
        />
      </div>
      <div className="py-12">
        <DottedLine fill="gray" />
      </div>
      <CallAndConversation {...fintechPlatformsPageData.callAndConversation} />
      <div className="py-6 lg:py-20">
        <DottedLine fill="gray" />
      </div>
      <LiveChat {...fintechPlatformsPageData.liveChat} />
      <GlobalWhatsapp {...fintechPlatformsPageData.globalWhatsapp} />
      <div className="py-12 mt-8">
        <DottedLine fill="gray" />
      </div>
      <EngageCustomersSection {...fintechPlatformsPageData.engageCustomers} />
      <EngageCustomersSection {...fintechPlatformsPageData.engageCustomers2} />
      <EngageCustomersSection {...fintechPlatformsPageData.engageCustomers3} />
      <EngageCustomersSection {...fintechPlatformsPageData.engageCustomers4} />
      <TestimonialCarousel {...fintechPlatformsPageData.testimonial} />
      <BannerCTA {...fintechPlatformsPageData.bannerCTA} />
    </div>
  );
};

export default Page;

const fintechPlatformsPageData = {
  heroSection: {
    heading: "Fintech Platforms",
    subheading: "Next-generation financial infrastructure for modern fintech platforms",
    tag: "TX Channel",
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
    title: "Power your fintech platform with unified financial infrastructure",
  },

  insightCards: [
    {
      step: "01",
      title: "Unified financial data & operations",
      description:
        "Aggregate traditional banking, digital assets, and alternative financial data through a single API. Provide seamless user experiences across all financial touchpoints.",
    },
    {
      step: "02",
      title: "Real-time payment orchestration",
      description:
        "Process instant settlements across fiat, crypto, and cross-border payments with intelligent routing and guaranteed delivery.",
    },
    {
      step: "03",
      title: "Regulatory compliance automation",
      description:
        "Maintain global compliance with built-in KYC/AML, transaction monitoring, and reporting across 100+ jurisdictions.",
    },
  ],

  subsection2: {
    title: "Core Banking & Payments",
    description:
      "Modernize your payment infrastructure.",
    tag: "",
  },

  brandEmailSupport: {
    cards: [
      {
        title: "Unified payments API",
        description:
          "Process ACH, wire transfers, card payments, and crypto transactions through a single integration.",
        img: "/assets/highlight.webp",
        imageAlt: "Unified payments API",

      },
      {
        title: "Real-time settlement engine",
        description:
          "Enable instant fund movements between accounts, institutions, and blockchain networks with sub-second finality.",
        img: "/assets/highlight.webp",
        imageAlt: "Real-time settlement engine",
      },
      {
        title: "Cross-border optimization",
        description:
          "Leverage crypto rails and traditional networks to reduce international transfer costs by up to 80% while improving speed.",
        img: "/assets/highlight.webp",
        imageAlt: "Cross-border optimization",
      },
    ],
    backgroundImage: "/assets/image30.webp",
    backgroundAlt: "Core Banking & Payments",
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
    title: "Digital Asset Integration",
    tag: "",
    description:
      "Seamlessly embed crypto capabilities",
    cards: [
      {
        title: "Multi-chain wallet infrastructure",
        description:
          "Provide secure, non-custodial and custodial wallet solutions supporting 300+ blockchains and thousands of assets.",
        img: "/assets/highlight.webp",
      },
      {
        title: "Institutional-grade trading",
        description:
          "Embed swap functionality, liquidity access, and advanced trading features with best-execution guarantees.",
        img: "/assets/highlight.webp",
      },
      {
        title: " Yield & earning products",
        description:
          "Launch savings accounts, staking services, and yield-generating products with automated risk management.",
        img: "/assets/highlight.webp",
      },
    ]
  },

  liveChat: {
    title: "Data & Analytics",
    tag: "",
    description:
      "Transform financial data into insights",
    cards: [
      {
        title: "Unified financial dashboard",
        description:
          "Give users complete visibility into their net worth across bank accounts, investment portfolios, and digital assets.",
        img: "/assets/highlight.webp",
      },
      {
        title: "AI-powered financial insights",
        description:
          "Provide personalized recommendations, spending analysis, and wealth management insights using machine learning.",
        img: "/assets/highlight.webp",
      },
      {
        title: "Real-time risk monitoring",
        description:
          "Monitor transaction patterns, market exposure, and compliance status with proactive alerting and reporting.",
        img: "/assets/highlight.webp",
      },
    ],
    backgroundImage: "/assets/image30.webp",
  },

  globalWhatsapp: {
    cards: [
      {
        backgroundImage: "/assets/image30.webp",
        title: "Automated regulatory compliance",
        description:
          "Built-in KYC, KYB, AML, and travel rule compliance with automated reporting for global operations.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
      {
        backgroundImage: "/assets/image30.webp",
        title: "Advanced fraud detection",
        description:
          "AI-powered anomaly detection identifies suspicious patterns across fiat and crypto transactions in real-time.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
      {
        backgroundImage: "/assets/image30.webp",
        title: "Institutional security protocols",
        description:
          "MPC technology, SOC 2 compliance, and insurance coverage for digital assets up to $500M.",
        img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
      },
    ],
    title: "Compliance & Security",
    tag: "",
    backgroundImage: "/assets/image30.webp",
    description:
      "Enterprise-grade security for financial services with automated compliance, fraud detection, and institutional protocols.",
  },

  engageCustomers: {
    badgeText: "",
    title: "Key Integration Features",
    columns: [
      {
        title: "Real-time webhooks",
        description:
          "Instant notifications for transaction events, balance changes, and compliance alerts.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_01.webp?&q=90",
        imageAlt: "Real-time webhooks",
      },
      {
        title: "Comprehensive reporting",
        description:
          "Automated regulatory reporting, tax documentation, and custom business intelligence.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_02.webp?&q=90",
        imageAlt: "Comprehensive reporting",
      },
      {
        title: "White-label solutions",
        description:
          "Fully customizable UI components, branding, and user experiences.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_03.webp?&q=90",
        imageAlt: "White-label solutions",
      },
      {
        title: "Global currency support",
        description:
          "150+ fiat currencies and 5,000+ digital assets with real-time conversion rates.",
        imageSrc:
          "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_03.webp?&q=90",
        imageAlt: "global-currrency-support",
      },
    ],
  },
  engageCustomers2: {
    badgeText: "",
    title: "Use Cases",
    columns: [
      {
        title: "Neo-banks & Digital Banks",
        description: "",
        imageSrc: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_01.webp?&q=90",
        imageAlt: "Neo-banks & Digital Banks",
        list: {
          items: [
            'Multi-currency accounts with crypto integration',
            'Real-time global payments',
            'AI-powered financial management',
            'Embedded investment products',
          ]
        }
      },
      {
        title: "Investment Platforms",
        description: "",
        imageSrc: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_02.webp?&q=90",
        imageAlt: "Investment Platforms",
        list: {
          items: [
            'Unified traditional and digital asset trading',
            'Portfolio management across all asset classes',
            'Automated tax optimization and reporting',
            'Institutional-grade security and compliance',
          ]
        }
      },
      {
        title: "Payment Processors",
        description: "",
        imageSrc: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_03.webp?&q=90",
        imageAlt: "Payment Processors",
        list: {
          items: [
            'Cross-border payment optimization',
            'Crypto payment acceptance and settlement',
            'Fraud prevention and risk management',
            'Multi-currency treasury management',
          ]
        }
      },
      {
        title: "Wealth Management",
        description: "",
        imageSrc: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_03.webp?&q=90",
        imageAlt: "Wealth Management",
        list: {
          items: [
            'Digital asset portfolio management',
            'Automated rebalancing and tax harvesting',
            'Family office and institutional reporting',
            'Compliance and audit trail generation',
          ]
        }
      },
    ],
  },
  engageCustomers3: {
    badgeText: "Technical Excellence",
    title: "Enterprise-Grade Infrastructure",
    columns: [
      {
        title: "⚡Performance & Reliability",
        description: "",
        imageSrc: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_01.webp?&q=90",
        imageAlt: "Performance & Reliability",
        list: {
          items: [
            '99.99% uptime SLA',
            '<100ms API response times',
            '10,000+ transactions per second',
            'Global edge network with 50+ locations',
          ]
        }
      },
      {
        title: "Security & Compliance",
        description: "",
        imageSrc: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_02.webp?&q=90",
        imageAlt: "Security & Compliance",
        list: {
          items: [
            'SOC 2 Type II certified',
            'ISO 27001 compliant',
            'GDPR and CCPA ready',
            'Regular third-party security audits',
          ]
        }
      },
      {
        title: "Developer Experience",
        description: "",
        imageSrc: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_03.webp?&q=90",
        imageAlt: "Developer Experience",
        list: {
          items: [
            'Comprehensive REST and GraphQL APIs',
            'SDKs in 8 programming languages',
            'Detailed documentation and tutorials',
            'Dedicated technical support',
          ]
        }
      },
    ],
  },
  engageCustomers4: {
    badgeText: "",
    title: "Enterprise-Grade Features",
    columns: [
      {
        title: "Dedicated Infrastructure",
        description: "",
        imageSrc: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_01.webp?&q=90",
        imageAlt: "Dedicated Infrastructure",
        list: {
          items: [
            'Isolated processing environments',
            'Custom deployment options',
            'Dedicated node clusters',
            'Private blockchain connectivity',
          ]
        }
      },
      {
        title: "Custom Workflows",
        description: "",
        imageSrc: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_02.webp?&q=90",
        imageAlt: "Custom Workflows",
        list: {
          items: [
            'Tailored compliance rules',
            'Custom settlement logic',
            'Branded user experiences',
            'Proprietary integration patterns',
          ]
        }
      },
      {
        title: "Premium Support",
        description: "",
        imageSrc: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_03.webp?&q=90",
        imageAlt: "Premium Support",
        list: {
          items: [
            '24/7 dedicated engineering support',
            'Account management and strategic guidance',
            'Custom feature development',
            'Training and certification programs',
          ]
        }
      },
    ],
  },


  testimonial: {
    title: "What Fintech Leaders Say",
    quote:
      "TervanX enabled us to launch crypto trading features in 30 days instead of 12 months. Their unified API eliminated the complexity of managing multiple blockchain integrations.",
    role: "CTO of Neo-bank Platform",
    name: "Maria Rodriguez",
  },

  bannerCTA: {
    title: "Ready to transform your fintech platform?",
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
