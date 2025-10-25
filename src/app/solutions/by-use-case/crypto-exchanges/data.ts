import BrandEmailSupport from "@/components/helpDeskComponents/BrandEmailSupport"

export const cryptoExchangesPageData = {
    heroSection: {
        heading: "Crypto Exchanges",
        subheading: "Institutional-grade trading infrastructure for modern exchanges",
        tag: "",
        primaryButton: {
            text: "Login",
            href: "/sign-up",
        },
        secondaryButton: {
            text: "Contact Sales",
            href: "/contact/contact-sales",
        },
    },

    trustedBy: {
        title: "Trusted by leading exchanges worldwide:",
        brands: ["Binance", "Coinbase", "Kraken", "OKX", "Bitfinex", "Gemini", "Crypto.com", "KuCoin"]
    },

    subsection1: {
        title: "Power your exchange with enterprise trading infrastructure",
    },

    insightCards: [
        {
            step: "01",
            title: "Liquidity aggregation & market making",
            description: "Access deep liquidity across 300+ chains and all major venues with intelligent order routing and spread optimization.",
        },
        {
            step: "02",
            title: "Multi-chain asset support",
            description: "List and support thousands of tokens across all major blockchains with automated wallet infrastructure and security.",
        },
        {
            step: "03",
            title: "Institutional-grade security",
            description: "Protect exchange assets with MPC custody, real-time threat detection, and comprehensive insurance coverage.",
        },
    ],

    subsection2: {
        title: "Trading & Matching Engine",
        description: "High-performance exchange infrastructure",
        tag: "",
    },

    brandEmailSupport: {
        cards: [
            {
                title: "Ultra-low latency matching engine",
                description: "Process millions of orders per second with sub-millisecond latency and 99.999% uptime.",
                img: "/assets/highlight.webp",
                imageAlt: "Matching engine",
            },
            {
                title: "Advanced order types",
                description: "Support limit, market, stop-loss, OCO, iceberg, and custom algorithmic order types.",
                img: "/assets/highlight.webp",
                imageAlt: "Order types",
            },
            {
                title: "Cross-chain trading pairs",
                description: "Enable trading between assets on different blockchains with atomic swap technology.",
                img: "/assets/highlight.webp",
                imageAlt: "Cross-chain trading",
            },
        ],
        backgroundImage: "/assets/image30.webp",
        backgroundAlt: "Trading Engine",
    },

    callAndConversation: {
        image: "/assets/exchange-liquidity.webp",
        backgroundImage: "/assets/image30.webp",
        primaryButton: {
            text: "Learn More",
            href: "/learn-more",
        },
        alignLeft: true,
        title: "Liquidity Solutions",
        tag: "",
        description: "Access deep, diverse liquidity",
        cards: [
            {
                title: "Global liquidity aggregation",
                description: "Connect to 50+ liquidity venues including CEXs, DEXs, and market makers through single integration.",
                img: "/assets/highlight.webp",
                backgroundImage: "/assets/image30.webp",
            },
            {
                title: "Intelligent order routing",
                description: "Automatically split and route orders across venues for best execution and minimal market impact.",
                img: "/assets/highlight.webp",
                backgroundImage: "/assets/image30.webp",
            },
            {
                title: "Market making programs",
                description: "Launch and manage market making initiatives with advanced quoting algorithms and risk controls.",
                img: "/assets/highlight.webp",
                backgroundImage: "/assets/image30.webp",
            },
        ]
    },

    liveChat: {
        title: "Wallet & Custody Infrastructure",
        tag: "",
        description: "Secure, scalable asset management",
        cards: [
            {
                title: "Multi-chain hot wallet system",
                description: "Support thousands of tokens across 300+ blockchains with automated address generation and management.",
                img: "/assets/highlight.webp",
            },
            {
                title: "MPC cold storage solutions",
                description: "Institutional-grade custody with multi-party computation and hardware security module integration.",
                img: "/assets/highlight.webp",
            },
            {
                title: "Automated hot-cold sweeps",
                description: "Intelligent fund movement between hot and cold wallets based on risk parameters and operational needs.",
                img: "/assets/highlight.webp",
            },
        ],
        backgroundImage: "/assets/image30.webp",
    },

    globalWhatsapp: {
        cards: [
            {
                backgroundImage: "/assets/image30.webp",
                title: "Real-time threat monitoring",
                description: "24/7 AI-powered surveillance detecting hacking attempts, market manipulation, and anomalous activities.",
                img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
            },
            {
                backgroundImage: "/assets/image30.webp",
                title: "Regulatory compliance suite",
                description: "KYC/AML, travel rule, transaction monitoring, and automated reporting for global jurisdictions.",
                img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
            },
            {
                backgroundImage: "/assets/image30.webp",
                title: "Insurance & risk management",
                description: "$500M custody insurance, proof of reserves, and comprehensive risk assessment tools.",
                img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
            },
        ],
        title: "Security & Compliance",
        tag: "",
        backgroundImage: "/assets/image30.webp",
        description: "Enterprise-grade protection",
    },

    engageCustomers: {
        badgeText: "",
        title: "Exchange Features",
        columns: [
            {
                title: "Trading Interface Components",
                description: "White-label trading UI with full customization, advanced charting, and mobile-optimized experience.",
                imageSrc: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_01.webp?&q=90",
                imageAlt: "Trading Interface",
                list: {
                    items: [
                        'White-label trading UI with full customization',
                        'Advanced charting with 100+ technical indicators',
                        'Mobile-optimized trading experience',
                        'Dark/light theme support',
                    ]
                }
            },
            {
                title: "Management Dashboard",
                description: "Real-time exchange performance metrics and operational controls.",
                imageSrc: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_01.webp?&q=90",
                imageAlt: "Management Dashboard",
                list: {
                    items: [
                        'Real-time exchange performance metrics',
                        'User management and permission controls',
                        'Fee structure configuration',
                        'Listing and delisting automation',
                    ]
                }
            },
            {
                title: "API Ecosystem",
                description: "Comprehensive APIs for all exchange functionality and integrations.",
                imageSrc: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_01.webp?&q=90",
                imageAlt: "API Ecosystem",
                list: {
                    items: [
                        'REST API for account management and reporting',
                        'WebSocket API for real-time market data',
                        'FIX API for institutional connectivity',
                        'Custom webhook notifications',
                    ]
                }
            },
        ],
    },

    technicalSpecifications: {
        title: "Technical Specifications",
        description: "",
        tag: "",
        cards: [
            {
                title: "Performance Metrics",
                description: "Order matching: <0.1ms latency, Throughput: 1,000,000+ orders/second, Uptime: 99.999% SLA, Data feeds: Real-time with 10ms updates",
                img: "/assets/highlight.webp",
            },
            {
                title: "Security Features",
                description: "MPC with threshold signatures, DDoS protection and rate limiting, Regular penetration testing, Comprehensive audit trails",
                img: "/assets/highlight.webp",
            },
            {
                title: "Integration Options",
                description: "Full stack exchange solution, Modular component integration, Cloud or on-premise deployment, Custom development services",
                img: "/assets/highlight.webp",
            },
        ],
        backgroundImage: "/assets/image30.webp",
    },

    keyProducts: {
        cards: [
            {
                backgroundImage: "/assets/image30.webp",
                title: "Liquidity Hub",
                description: "Access $15B+ daily liquidity depth across all major venues and chains with intelligent routing.",
                img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
            },
            {
                backgroundImage: "/assets/image30.webp",
                title: "TX Vault",
                description: "Institutional-grade custody with multi-sig approvals, policy engines, and automated treasury management.",
                img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
            },
            {
                backgroundImage: "/assets/image30.webp",
                title: "TX Shield",
                description: "Advanced security monitoring with real-time threat detection and automated incident response.",
                img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
            },
            {
                backgroundImage: "/assets/image30.webp",
                title: "TX Automate",
                description: "Automate operational workflows including listings, risk management, and compliance reporting.",
                img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
            },
        ],
        title: "Key Products for Exchanges",
        backgroundImage: "/assets/image30.webp",
        description: "",
        tag: "",
    },

    exchangeUseCases: {
        title: "Use Cases",
        description: "",
        tag: "",
        cards: [
            {
                title: "New Exchange Launch",
                description: "Go from zero to fully operational exchange in 30 days with complete trading infrastructure.",
                img: "/assets/highlight.webp",
            },
            {
                title: "Existing Exchange Upgrade",
                description: "Modernize legacy systems with high-performance matching engine and enhanced security.",
                img: "/assets/highlight.webp",
            },
            {
                title: "Regional Expansion",
                description: "Launch in new jurisdictions with localized compliance, payment rails, and language support.",
                img: "/assets/highlight.webp",
            },
            {
                title: "Asset Diversification",
                description: "Rapidly list new tokens and blockchains with automated wallet and trading pair setup.",
                img: "/assets/highlight.webp",
            },
        ],
        backgroundImage: "/assets/image30.webp",
    },

    enterpriseFeatures: {
        cards: [
            {
                backgroundImage: "/assets/image30.webp",
                title: "Dedicated Infrastructure",
                description: "Isolated matching engine instances, Custom hardware acceleration, Geographic latency optimization, Disaster recovery solutions",
                img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
            },
            {
                backgroundImage: "/assets/image30.webp",
                title: "Custom Development",
                description: "Proprietary order types, Unique fee structures, Custom risk models, Specialized reporting",
                img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
            },
            {
                backgroundImage: "/assets/image30.webp",
                title: "Premium Support",
                description: "24/7 dedicated engineering support, Exchange operation specialists, Security incident response team, Strategic business consulting",
                img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
            },
        ],
        title: "Enterprise Features",
        backgroundImage: "/assets/image30.webp",
        description: "",
        tag: "",
    },
    testimonial: {
        title: "Exchange Leader Testimonials",
        quote: "TervanX's liquidity aggregation reduced our spreads by 60% and increased trading volume by 300% in the first month. Their matching engine handles our peak loads without breaking a sweat.",
        role: "CTO of Tier-1 Exchange",
        name: "Alex Thompson",
    },

    bannerCTA: {
        title: "Get Started",
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