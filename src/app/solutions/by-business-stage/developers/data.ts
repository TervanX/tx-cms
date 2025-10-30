export const developerPageData = {
    heroSection: {
        heading: "Developers",
        subheading: "Developer-first infrastructure for building the future of finance",
        tag: "",
        primaryButton: {
            text: "Login",
            href: "/auth/login",
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

    keyDeveloperProducts: {
        title: "Key Developer Products",
        image:
            "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
        backgroundImage: "/assets/image30.webp",
        primaryButton: {
            text: "Contact Sales",
            href: "/contact/contact-sales",
        },
        alignLeft: true,
        tag: "",
        description: "",
        cards: [
            {
                title: "Payments API",
                description: "Accept and send payments in any cryptocurrency with a few lines of code.",
                language: "javascript",
                code: `// Accept payment in any token
const payment = await tervanx.payments.create({
  amount: "100.00",
  currency: "USDC",
  chain: "ethereum"
});`,
                img: "/assets/highlight.webp",
            },
            {
                title: "Wallet Infrastructure",
                description: "Embed secure, non-custodial wallets into your application in days, not months.",
                language: "python",
                code: `# Create user wallet
wallet = tervanx.wallets.create(
  user_id="user_123",
  chains=["ethereum", "polygon", "solana"]
)`, img: "/assets/highlight.webp",
            },
            {
                title: "Smart Contract Interactions",
                description: "Execute smart contract calls across multiple chains with unified interfaces.",
                language: "solidity",
                code: `// Cross-chain contract call
await tervanx.contracts.execute({
  contract: "0x...",
  method: "transfer",
  args: [to, amount],
  chain: "arbitrum"
});`, img: "/assets/highlight.webp",
            }
        ]
    },
    callAndConversation: {
        image:
            "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
        backgroundImage: "/assets/image30.webp",
        primaryButton: {
            text: "Contact Sales",
            href: "/contact/contact-sales",
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
                title: "Sandbox Environment",
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
                title: " CLI & Local Development",
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
                title: " Monitoring & Analytics",
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
        title: "Community & Support",
        tag: "",
        description: "",
        cards: [
            {
                title: " Developer Community",
                description: "",
                img: "/assets/highlight.webp",
                imageAlt: "Developer Community",
                backgroundImage: "/assets/image30.webp",

                lists: [
                    "Discord: 50,000+ developers sharing knowledge",
                    "GitHub: Open-source examples and contributions",
                    "Stack Overflow: Active community support",
                    "Developer Forums: Technical discussions and best practices"
                ]
            },
            {
                title: "Learning Resources",
                description: "",
                img: "/assets/highlight.webp",
                backgroundImage: "/assets/image30.webp",

                imageAlt: "Learning Resources",
                lists: [
                    "Interactive tutorials with real code examples",
                    "Video workshops and webinars",
                    "Case studies from successful implementations",
                    "API cookbook with common use cases and solutions"
                ]
            },
            {
                title: "Technical Support",
                description: "",
                img: "/assets/highlight.webp",
                imageAlt: "Technical Support",
                backgroundImage: "/assets/image30.webp",

                lists: [
                    "24/7 developer chat support",
                    "Dedicated technical account managers for enterprise",
                    "SLA-backed response times for production issues",
                    "Regular office hours with core engineering team"
                ]
            }
        ],
        backgroundImage: "/assets/image30.webp",
        backgroundAlt: "DataSectionProps",

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
            "We integrated LayerX's Wallet API and had our MVP live in 2 weeks. The documentation is exceptional, and the support team actually understands developer needs.",
        role: "Lead Developer at Web3 Startup",
        name: "Sarah Chen,"
    },

    bannerCTA: {
        title: "Start Building Today",
        backgroundImage: "/assets/image30.webp",
        primaryButton: {
            text: "Contact Sales",
            href: "/contact/contact-sales",
        },
        secondaryButton: {
            text: "Login",
            href: "/auth/login",
        },
    },
};