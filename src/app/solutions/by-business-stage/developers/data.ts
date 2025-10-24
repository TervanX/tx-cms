export const developerPageData = {
    heroSection: {
        heading: "",
        subheading: "Developer-first infrastructure for building the future of finance",
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
    subsection1: {
        title: "Build faster with powerful APIs and SDKs",
    },

    insightCards: [
        {
            step: "01",
            title: "Comprehensive documentation & guides",
            description:
                "Get started quickly with our developer documentation, API references, and step-by-step tutorials designed for both web2 and web3 developers.",
        },
        {
            step: "02",
            title: "Scalable infrastructure that grows with you",
            description:
                "From prototype to production, our infrastructure handles everything from small-scale testing to global enterprise traffic with consistent performance.",
        },
        {
            step: "03",
            title: "Real-time testing & debugging",
            description:
                "Test your integration with our sandbox environment, complete with testnets, fake money, and detailed logging for seamless development.",
        },
    ],

    subsection2: {
        title: "Everything you need to build powerful financial applications",
        description: "",
        tag: "Core APIs & SDKs",
    },

    brandEmailSupport: {
        cards: [
            {
                title: "Unified REST API",
                description:
                    "Single endpoint for all blockchain interactions across 300+ chains. Consistent response format and comprehensive error handling.",
                img: "/assets/highlight.webp",
                imageAlt: "Unified REST API",
                lists: []
            },
            {
                title: "Real-time WebSocket feeds",
                description:
                    "Subscribe to transaction events, balance changes, and market data with millisecond latency for reactive applications.",
                img: "/assets/highlight.webp",
                imageAlt: "Real-time WebSocket feeds",
                lists: []
            },
            {
                title: "Multi-language SDKs",
                description: "",
                img: "/assets/highlight.webp",
                imageAlt: "Multi-language SDKs",
                lists: ["JavaScript/TypeScript - Full browser and Node.js support", "Python - Data science and backend integration", "Go - High-performance applications", "Java - Enterprise system integration", "Rust - Systems programming and performance-critical applications"]

            },
        ],
        backgroundImage: "/assets/image30.webp",
        backgroundAlt: "DataSectionProps",
    },

    // The following sections remain UNCHANGED as they don't have equivalents in the enterprise data
    callAndConversation: {
        image:
            "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
        backgroundImage: "/assets/image30.webp",
        primaryButton: {
            text: "Learn More",
            href: "/learn-more",
        },
        alignLeft: true,
        title: "Integration Examples",
        tag: "",
        description:
            "",
        cards: [
            {
                title: "DeFi Protocol Integration",
                description:
                    "Build lending protocols, DEXs, and yield optimizers with our comprehensive DeFi APIs.",
                img: "/assets/highlight.webp",
                language: "java",
                code: `// Get best swap route across all DEXs
const route = await tervanx.defi.getBestRoute({
  fromToken: "ETH",
  toToken: "USDC",
  amount: "1.0"
});
`
            },
            {
                title: "NFT Marketplace",
                description:
                    "Create NFT marketplaces with built-in royalty enforcement and cross-chain support.",
                img: "/assets/highlight.webp",
                language: "python",

                code: `# List NFT for sale
listing = await tervanx.nfts.list({
  nft_id: "0x123...456/1",
  price: "0.1",
  currency: "ETH"
})
;`
            },
            {
                title: "Enterprise Applications",
                description:
                    "Integrate with existing enterprise systems and traditional finance infrastructure.",
                img: "/assets/highlight.webp",
                language: "java",
                code: `
// Sync with accounting system
TervanxClient.syncToERP(
  transactionHistory,
  AccountingSystem.NETSUITE
);
`
            },
        ]
    },

    liveChat: {
        title: "Developer Tools & Features",
        tag: "",
        description:
            "",
        cards: [
            {
                title: "🛠️ Sandbox Environment",
                description: "",
                img: "/assets/highlight.webp",
                imageAlt: "Sandbox Environment",
                lists: [
                    "Testnet access across all supported chains",
                    "Fake money for testing transactions",
                    "Mock webhooks and event streams",
                    "Performance testing tools"
                ]
            },
            {
                title: "🔧 CLI & Local Development",
                description: "",
                img: "/assets/highlight.webp",
                imageAlt: "CLI & Local Development",
                lists: [
                    "Local development server",
                    "One-command deployment",
                    "Environment management",
                    "Secret management and rotation"
                ]
            },
            {
                title: "📊 Monitoring & Analytics",
                description: "",
                img: "/assets/highlight.webp",
                imageAlt: "Monitoring & Analytics",
                lists: [
                    "Real-time request logging",
                    "Performance metrics and latency tracking",
                    "Error rate monitoring and alerting",
                    "Usage analytics and cost optimization"
                ]
            }
        ],
        backgroundImage: "/assets/image30.webp",
        backgroundAlt: "DataSectionProps",


    },

    globalWhatsapp: {
        cards: [
            {
                backgroundImage: "/assets/image30.webp",
                title: "Automated regulatory reporting",
                description:
                    "Generate compliance reports for multiple jurisdictions with one click. Stay audit-ready as you expand into new markets.",
                img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
            },
            {
                backgroundImage: "/assets/image30.webp",
                title: "Real-time threat detection",
                description:
                    "AI-powered monitoring detects suspicious activity, phishing attempts, and anomalous transactions—before they become problems.",
                img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
            },
            {
                backgroundImage: "/assets/image30.webp",
                title: "Role-based access controls",
                description:
                    "Define permissions for team members and enforce financial controls—keeping your startup secure as you grow",
                img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
            },
        ],
        title: "Pricing & Getting Started",
        tag: "",
        backgroundImage: "/assets/image30.webp",
        description:
            "",
    },
    globalWhatsapp2: {
        cards: [
            {
                backgroundImage: "/assets/image30.webp",
                title: "Free Tier",
                description: "",
                img: "/assets/highlight.webp",
                imageAlt: "Free Tier",
                lists: [
                    "10,000 API requests/month",
                    "Testnet access only",
                    "Community support",
                    "Perfect for prototyping"
                ]
            },
            {
                backgroundImage: "/assets/image30.webp",
                title: "Growth Tier",
                description: "",
                img: "/assets/highlight.webp",
                imageAlt: "Growth Tier",
                lists: [
                    "$99/month for 100K requests",
                    "Mainnet access",
                    "Priority support",
                    "Advanced features"
                ]
            },
            {
                backgroundImage: "/assets/image30.webp",
                title: "Enterprise Tier",
                description: "",
                img: "/assets/highlight.webp",
                imageAlt: "Enterprise Tier",
                lists: [
                    "Custom pricing and limits",
                    "Dedicated infrastructure",
                    "24/7 phone support",
                    "Custom feature development"
                ]
            }
        ],

        title: "Stay secure and compliant from day one",
        tag: "Compliance & Security",
        backgroundImage: "/assets/image30.webp",
        description:
            "Built-in KYC, AML, and transaction monitoring ensure your startup meets global regulations—without slowing you down.",
    },

    engageCustomers: {
        badgeText: "",
        title: "",
        columns: [


        ],
    },

    testimonial: {
        title: "What Developers Are Building",
        quote:
            "We integrated TervanX's Wallet API and had our MVP live in 2 weeks. The documentation is exceptional, and the support team actually understands developer needs.",
        role: "Lead Developer at Web3 Startup",
        name: "Sarah Chen,"
    },

    bannerCTA: {
        title: "Start Building Today",
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