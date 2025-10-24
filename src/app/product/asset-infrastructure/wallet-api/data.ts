export const productivityProps = {
    heading: {
        main: "AI-driven infrastructure that",
        highlighted:
            "maximizes efficiency"
    },
    description:
        `TervanX automates the most complex aspects of wallet management—from key security to transaction orchestration—so your developers can focus on building your core product.
`, images: {
        mobile: {
            src: "//assetsproductivity-hero-mobile.webp",
            alt: "Illustration of productive bees in a grassy meadow",
        },
        desktop: {
            src: "/assets/productivity-hero-desktop.webp",
            alt: "Illustration of productive bees in a grassy meadow",
        },
        product: {
            src: "/assets/productivity-1-desktop.webp",
            alt: "Helpdesk product UI",
        },
    },
    features: [
        {
            title:
                `Intelligent Key Management & Recovery
`, description:
                `Leverage MPC-TSS technology to decentralize private key ownership. Our AI-powered social recovery and multi-factor authentication schemes ensure user assets are secure without the single point of failure, drastically reducing support tickets and user lockouts.
`        },
        {
            title:
                `Automated Gas Abstraction`,
            description:
                `Eliminate the complexity of gas fees for your users. Our system sponsors transactions or allows fee payment in any ERC-20 token. The AI engine dynamically selects the most cost-effective method, ensuring a seamless user experience across all chains`
        },
        {
            title:
                "Smart Wallet Automation",
            description:
                `Programmable transaction batching and automated treasury sweeps. Set rules for automatic asset rebalancing, fee payments, and cross-chain transfers, reducing daily operational overhead by up to 90%.`
        }
    ],
    testimonial: {
        quote:
            `With TervanX WaaS, we reduced our wallet integration timeline from 9 months to just 3 weeks, accelerating our entire product roadmap.`, author: "Ben Carter,", role:
            `Head of Blockchain Product`, companyLogo: `<svg
        xmlns="http://www.w3.org/2000/svg"
        width="102"
        height="25"
        fill="none"
      >
        {/* Lightspeed logo SVG */}
        <g clipPath="url(#lightspeed_svg__a)">
          <mask
            id="lightspeed_svg__b"
            width="102"
            height="25"
            x="0"
            y="0"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "luminance" }}
          >
            <path fill="#fff" d="M102 .9H0v23.926h102z" />
          </mask>
          <g fill="#191513" mask="url(#lightspeed_svg__b)">
            {/* Logo paths would go here */}
          </g>
        </g>
      </svg>`,

        image: {
            src: "/assets/lightspeed-headshot-min.png",
            alt: "Angelo Livanos",
        },
    },
};

export const usabilityProps = {
    heading: {
        main: "Fast to integrate,",
        highlighted: "effortless to scale",
    },
    description:
        "A developer-first experience with comprehensive SDKs, pre-built UI kits, and a unified dashboard for managing all wallet instances across your entire user base.", images: {
            mobile: {
                src: "/assets/usability-hero-mobile.webp",
                alt: "Illustration of people walking down a flowery path",
            },
            desktop: {
                src: "/assets/usability-hero-desktop.webp",
                alt: "Illustration of people walking down a flowery path",
            },
            mainFeature: {
                src: "/assets/usability-1-desktop.webp",
                alt: "Helpdesk usability instant insight product visual",
            },
        },
    usabilityFeatures: [
        {
            title:
                "Pre-Built & Customizable UI Kits", description:
                "Accelerate your go-to-market with our embeddable, brandable wallet components. Provide a native-feeling wallet experience for your users without building a single UI from scratch.", list: {
                    items: [
                    ]
                }
        }
    ],
    additionalFeatures: [
        {
            image: { src: "/assets/usability-2-desktop.webp" },
            title: 'Centralized Wallet Instance Management',
            description: 'Monitor the health, activity, and security of every wallet created through your service from one powerful dashboard. Implement batch operations, updates, and security policies globally.',
            list: {
                items: [
                    'Multi-wallet management',
                    'Shared audit trails',
                    'Role-based access for teams'
                ]
            }
        },
        {
            image: { src: "/assets/usability-3-desktop.webp" },
            title: 'Seamless Third-Party Integrations',
            description: 'Connect your wallet infrastructure to your existing stack with ease.',
            list: {
                items: [
                    'Webhooks & Event Streaming for real-time wallet activity.',
                    'REST & GraphQL APIs for total control.',
                    'Compliance & Analytics SDKs to embed reporting directly into your tools.',
                ]
            }
        }
    ],
    sectionStyle: {
        backgroundColor: "var(--color-cream)",
    },
};

export const outboundProps = {
    heading: {
        main: "Actionable intelligence",
        highlighted: "that drives better decisions",
    },
    description:
        "Turn blockchain activity into financial intelligence. TervanX transforms millions of on-chain data points into real-time analytics, predictive insights, and AI-powered optimization, helping teams make smarter, faster financial decisions.",
    images: {
        mobile: {
            src: "/assets/outbound-hero-mobile.webp",
            alt: "Illustration of a futuristic satellite receiver in a rural setting",
        },
        desktop: {
            src: "/assets/outbound-hero-desktop.webp",
            alt: "Illustration of a futuristic satellite receiver in a rural setting",
        },
        mainFeature: {
            src: "/assets/outbound-1-desktop.webp",
            alt: "Helpdesk outbound product visual",
        },
    },
    outboundFeatures: [
        {
            title: 'Gain full visibility across 300+ blockchains',
            description: `Monitor every transaction, network, and wallet in one unified dashboard.Get a complete picture of your financial ecosystem — from payment inflow to settlement — with precise, traceable data across all blockchains and assets.`
        },
        {
            title: 'Predict performance with AI-driven insights',
            description: 'Leverage autonomous data models that learn from transaction behavior and market trends. The system forecasts settlement times, fee changes, and liquidity needs, so you can plan and execute with confidence.'
        },
        {
            title: 'Optimize operations in real time',
            description: 'AI continuously analyzes gas costs, transaction velocity, and user behavior, providing actionable recommendations to improve cost efficiency and network performance. Reduce overhead and unlock new opportunities with intelligent automation built into your analytics engine.'
        }

    ],
    g2Comparison: {
        title: " TervanX ensures enterprise-grade reliability and multi-chain confidence",
        description:
            "",
        items: [
            { name: 'supported blockchains', value: '300+', color: 'text-black' },
            { name: 'uptime SLA', value: '99.99%', color: 'text-black/40' },
            { name: 'transaction detection latency', value: '<1s', color: 'text-black/40' }
        ],
    },
    sectionStyle: {
        backgroundColor: "white",
    },
};

export const featuresProps = {
    title: "Features",
    features: [
        {
            id: 'cross-chain-settlement',
            name: 'Automated Cross-Chain Settlement',
            href: '/suite/helpdesk/inbox',
            description: 'Seamlessly settle transactions across multiple blockchains without manual processes.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'smart-gas-routing',
            name: 'Smart Gas & Fee Routing',
            href: '/suite/helpdesk/copilot',
            description: 'Optimize costs with intelligent gas routing that automatically finds the most efficient fee paths.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'instant-reconciliation',
            name: 'Instant Reconciliation',
            href: '/suite/helpdesk/tickets',
            description: 'Reconcile transactions instantly with real-time sync between wallets, ledgers, and treasury systems.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'unified-treasury',
            name: 'Unified Treasury Dashboard',
            href: '/suite/helpdesk/omnichannel',
            description: 'Gain complete visibility and control of all your assets across blockchains and accounts in one interface.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'multi-asset-wallet',
            name: 'Multi-Asset Wallet Integration',
            href: '/suite/helpdesk/help-center',
            description: 'Manage and transact across hundreds of blockchains and tokens from a single dashboard.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'dynamic-liquidity',
            name: 'Dynamic Liquidity Allocation',
            href: '/app-store',
            description: 'Automatically rebalance and distribute liquidity across wallets, exchanges, and chains.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'institutional-security',
            name: 'Institutional-Grade Security',
            href: '/suite/helpdesk/reporting',
            description: 'Protect every transaction with MPC technology, encryption, and continuous monitoring.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'regulatory-compliance',
            name: 'Regulatory Compliance Layer',
            href: '/suite/helpdesk/knowledge-hub',
            description: 'Stay compliant with integrated KYC, KYT, and AML analytics for every asset movement.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'access-controls',
            name: 'Access Controls & Role Management',
            href: '/suite/helpdesk/outbound',
            description: 'Define user roles and granular permissions to manage secure team and enterprise operations.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'ai-settlement',
            name: 'AI-Driven Settlement Optimization',
            href: '/suite/helpdesk/inbox',
            description: 'Leverage AI to predict the fastest and most cost-efficient settlement routes across chains.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'error-recovery',
            name: 'Automated Error Recovery',
            href: '/suite/helpdesk/copilot',
            description: 'Detect failed transactions and automatically retry or reroute them for guaranteed delivery.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'predictive-insights',
            name: 'Predictive Treasury Insights',
            href: '/suite/helpdesk/tickets',
            description: 'Anticipate liquidity needs, network fee trends, and volume patterns using intelligent forecasting.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'transaction-analytics',
            name: 'Real-Time Transaction Analytics',
            href: '/suite/helpdesk/omnichannel',
            description: 'Monitor, visualize, and analyze all transactions in real time across every integrated blockchain.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        }
    ],
    defaultActiveFeature: "omnichannel",
    sectionStyle: {
        backgroundColor: "var(--color-cream)",
    },
    linkStyle: {
        text: "Find out more",
    },
};


