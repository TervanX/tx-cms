import {
    Scale,
    Shield,
    Globe,
    Bot,
    Wrench,
    Brain,
    CreditCard,
    Crosshair,
    Palette,
    Building
} from 'lucide-react';

export const layerxData = {
    herodata: {
        title: "2025 Fintech Builders",
        subtitle: "LayerX LaunchStack",
        description: "The Complete Infrastructure Kit to Build, Launch & Scale Your Fintech, Crypto, or DeFi Product — Faster, Smarter, and Safer.",
        subheading: "For Founders, Developers & Builders",
        additionalText: "Whether you're starting from an idea or scaling a mature fintech product, the LayerX LaunchStack equips you with the insights, infrastructure, and engineering support to build real products that scale across Africa. LayerX isn't just APIs — we engineer your product with you, side-by-side with your dev team, from prototype to production.",
    },

    featuredata: {
        features: [
            {
                icon: Scale,
                title: "Compliance & Regulation",
                description: "Navigate African fintech regulations with confidence across multiple markets"
            },
            {
                icon: Shield,
                title: "Security & Infrastructure",
                description: "Enterprise-grade security architecture for banks and exchanges"
            },
            {
                icon: Globe,
                title: "Cross-Border Payments",
                description: "Seamless payment systems powered by LayerX rails"
            },
            {
                icon: Bot,
                title: "AI & Automation",
                description: "Intelligent workflows for KYC, fraud detection & customer operations"
            }
        ],
        title: "Why Build with LayerX LaunchStack?",
        className: ""
    },

    productdata: {
        products: [
            {
                number: "1",
                icon: Scale,
                title: "Compliance & Regulation 101 for Fintech Builders",
                subtitle: "Compliance isn't a barrier — it's your foundation for trust.",
                description: "We help you navigate the complex maze of African fintech regulations and go live confidently in multiple markets.",
                features: [
                    "Directory of key regulators in Nigeria, Kenya, Ghana, Egypt, and South Africa",
                    "KYC, AML, data protection & licensing frameworks explained",
                    "Regulatory FastTrack Framework — launch faster, stay compliant",
                    "Risk policy & AML templates ready for implementation",
                    "Avoid the traps: Common legal mistakes fintechs make"
                ],
                ctaText: "Get the Compliance Guide",
                ctaLink: "/contact/startup",
                image: "/assets/1.jpeg",
                imagePosition: "left" as const
            },
            {
                number: "2",
                icon: Wrench,
                title: "How to Build & Launch a Fintech or Crypto Product in Africa",
                subtitle: "Your end-to-end blueprint for transforming an idea into a working product",
                description: "From the backend to market launch — everything you need to go from zero to one.",
                features: [
                    "Building a payment or wallet app from scratch",
                    "Designing a crypto exchange or P2P platform",
                    "Multi-currency wallet architecture for fiat + stablecoins",
                    "Building on/off ramps between crypto and bank systems",
                    "Picking the right tech stack for speed & regulation",
                    "Exploring DeFi, CBDCs, stablecoins, and tokenized assets"
                ],
                ctaText: "Download the Fintech Launch Blueprint",
                ctaLink: "/contact/startup",
                image: "/assets/5.jpg",
                imagePosition: "right" as const
            },
            {
                number: "3",
                icon: Brain,
                title: "Product Engineering Partnership",
                subtitle: "You don't have to build alone",
                description: "LayerX works directly with your engineering team to design, develop, and deploy. We co-engineer your product using our infrastructure, frameworks, and best practices, ensuring scalability and compliance from day one.",
                features: [
                    "Co-build programs — we collaborate with your developers",
                    "Product design & architecture support from our engineering team",
                    "Access to certified infrastructure partners",
                    "DevOps & CI/CD pipelines built for fintech-grade uptime",
                    "Continuous integration with wallets, payments, and compliance APIs"
                ],
                ctaText: "Work With Our Engineers",
                ctaLink: "/contact/startup",
                image: "/assets/6.jpg",
                imagePosition: "left" as const
            },
            {
                number: "4",
                icon: Shield,
                title: "Security & Infrastructure Deep Dive",
                subtitle: "Your product deserves the same protection as banks and exchanges.",
                description: "This guide helps you implement enterprise-grade security architecture using LayerX infrastructure.",
                features: [
                    "End-to-end data encryption & tokenization models",
                    "Zero-trust network design and secure API practices",
                    "Incident response & audit frameworks for fintechs",
                    "Integrating ISO 27001, SOC 2 & PCI DSS standards",
                    "Security blueprints for exchanges, wallets & card platforms"
                ],
                ctaText: "Get the Security Blueprint",
                ctaLink: "/contact/startup",
                image: "/assets/4.jpeg",
                imagePosition: "right" as const
            },
            {
                number: "5",
                icon: Globe,
                title: "Cross-Border Payments & FX Architecture",
                subtitle: "Africa runs on movement — money, data, and people.",
                description: "Learn how to build seamless cross-border payment systems powered by LayerX rails.",
                features: [
                    "Building FX and multi-currency transaction systems",
                    "Designing APIs for Africa-to-Africa remittance flows",
                    "Integrating crypto + fiat bridges using stablecoins",
                    "Managing liquidity and rate engines in real-time",
                    "Regulatory and banking frameworks for global money movement"
                ],
                ctaText: "Access the Cross-Border Playbook",
                ctaLink: "/contact/startup",
                image: "/assets/7.jpeg",
                imagePosition: "left" as const
            },
            {
                number: "6",
                icon: Bot,
                title: "AI, Automation & Smart Workflows",
                subtitle: "Fintech isn't just about money — it's about intelligence.",
                description: "Use AI to automate KYC, detect fraud, and deliver predictive experiences for users.",
                features: [
                    "Integrating AI-driven fraud detection & credit scoring",
                    "Building intelligent agent systems for customer operations",
                    "Automating onboarding, transactions, and support",
                    "Predictive analytics for growth and compliance monitoring",
                    "Using LayerX's AI APIs & workflow automation tools"
                ],
                ctaText: "Explore AI & Automation Tools",
                ctaLink: "/contact/startup",
                image: "/assets/4.jpg",
                imagePosition: "right" as const
            },
            {
                number: "7",
                icon: Building,
                title: "LayerX Business Stack",
                subtitle: "The all-in-one suite for B2B fintech builders and enterprises.",
                description: "Access core modules and prebuilt infrastructure to launch full-scale financial products.",
                features: [
                    "Wallet & Transaction APIs (crypto + fiat)",
                    "Exchange Engine & liquidity integration",
                    "Virtual Card Infrastructure (issue, fund, and manage)",
                    "AML & KYC Compliance-as-a-Service",
                    "Analytics, monitoring, and BI dashboards",
                    "Sandbox & staging environments for testing"
                ],
                ctaText: "Build with LayerX Business Stack",
                ctaLink: "/contact/startup",
                image: "/assets/3.jpeg",
                imagePosition: "left" as const
            },
            {
                number: "8",
                icon: Palette,
                title: "Fintech Design & UI Kit",
                subtitle: "Launch beautifully, faster.",
                description: "Use LayerX's fintech-grade UI components and design system to create stunning, consistent experiences.",
                features: [
                    "UI templates for wallets, dashboards, transfers, cards & KYC",
                    "UX flow diagrams for onboarding, deposits, and trading",
                    "Figma + Tailwind components",
                    "White-label options for fintech startups"
                ],
                ctaText: "Download the UI Kit",
                ctaLink: "/contact/startup",
                image: "/assets/2.jpeg",
                imagePosition: "right" as const
            }
        ],
        title: "Everything you need to build, launch and scale"
    },

    ctaBanner: {
        tagline: "LayerX LaunchStack",
        title: "Ready to build your fintech product?",
        description: "Whether you're starting from an idea or scaling a mature fintech product, the LayerX LaunchStack equips you with the insights, infrastructure, and engineering support to build real products that scale across Africa.",
        buttonText: "Get Started Today",
        buttonHref: "/apply",
        backgroundImage: "/assets/image14.webp",
    },
};