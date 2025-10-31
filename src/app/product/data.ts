export const productivityProps = {
    heading: {
        main: "AI tools that",
        highlighted: "maximize productivity",
    },
    description:
        "LayerX automates settlements, reconciliation, and compliance — all powered by on-chain intelligence.",
    images: {
        mobile: {
            src: "https://res.cloudinary.com/dx1etzf66/image/upload/v1761889068/solution1_avbfxx.jpg",
            alt: "Illustration of productive bees in a grassy meadow",
        },
        desktop: {
            src: "https://res.cloudinary.com/dx1etzf66/image/upload/v1761889068/solution1_avbfxx.jpg",
            alt: "Illustration of productive bees in a grassy meadow",
        },
        product: {
            src: "https://res.cloudinary.com/dx1etzf66/image/upload/v1761889043/productivity-1-desktop_sdzsp4.webp",
            alt: "Helpdesk product UI",
        },
    },
    features: [
        {
            title: 'Automated cross-chain settlement',
            description: ' Instantly bridge and settle payments across multiple blockchains without manual intervention. LayerX identifies the most efficient settlement path, executes transfers autonomously, and ensures every transaction reaches its final destination in real time.'
        },
        {
            title: 'Smart gas and fee routing',
            description: 'The AI engine continuously monitors network congestion and fee volatility, dynamically routing transactions through the cheapest and fastest paths — ensuring maximum cost efficiency while maintaining speed and reliability.'
        },
        {
            title: 'Instant reconciliation with treasury dashboards',
            description: ' All payments, settlements, and transfers automatically reconcile in your treasury dashboard. Finance teams can track real-time balances, generate statements, and sync records across wallets, chains, and ledgers without human input.'
        }
    ],
    testimonial: {
        quote:
            "Since adopting LayerX Crypto Payments, we’ve achieved 80% faster reconciliation and reduced transaction errors to near zero",
        author: "Maya Okoro",
        role: "VP of Digital Finance",
        companyLogo: ` <svg
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
            src: "https://res.cloudinary.com/dx1etzf66/image/upload/v1761891745/lightspeed-headshot-min_qiohvg.png",
            alt: "Angelo Livanos",
        },
    },
};

export const usabilityProps = {
    heading: {
        main: "Fast and friction-free",
        highlighted: "",
    },
    description:
        "Crypto Payments is simple to set up, powerful to scale, and intuitive to use. Unified dashboards, multi-chain visibility, and an API-first experience make it effortless for teams and developers alike.",
    images: {
        mobile: {
            src: "https://res.cloudinary.com/dx1etzf66/image/upload/v1761891812/usability-hero-desktop_uirwq4.webp",
            alt: "Illustration of people walking down a flowery path",
        },
        desktop: {
            src: "https://res.cloudinary.com/dx1etzf66/image/upload/v1761891812/usability-hero-desktop_uirwq4.webp",
            alt: "Illustration of people walking down a flowery path",
        },
        mainFeature: {
            src: "https://res.cloudinary.com/dx1etzf66/image/upload/v1761891807/usability-1-desktop_sdggi4.webp",
            alt: "Helpdesk usability instant insight product visual",
        },
    },
    usabilityFeatures: [
        {
            title: 'Instant insight with pre-built reporting',
            description: 'Monitor and optimize performance with AI-curated reports and dashboards.',
            list: {
                items: [
                    'Real-time transaction tracking',
                    'Pre-built analytics templates',
                    'Fee and settlement optimization'
                ]
            }
        }
    ],
    additionalFeatures: [
        {
            image: { src: "https://res.cloudinary.com/dx1etzf66/image/upload/v1761891808/usability-2-desktop_h3f0oo.webp" },
            title: 'Unified payment flows',
            description: 'Centralize collections and settlements across multiple chains with one dashboard.',
            list: {
                items: [
                    'Multi-wallet management',
                    'Shared audit trails',
                    'Role-based access for teams'
                ]
            }
        },
        {
            image: { src: "https://res.cloudinary.com/dx1etzf66/image/upload/v1761891810/usability-3-desktop_ofrgcb.webp" },
            title: 'Integrate with your existing tools',
            description: 'Easily connect to ERP, accounting, or compliance systems with SDKs and APIs.',
            list: {
                items: [
                    'REST, GraphQL, and Webhook support',
                    'Real-time sync with reporting systems',
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
        "Turn blockchain activity into financial intelligence. LayerX transforms millions of on-chain data points into real-time analytics, predictive insights, and AI-powered optimization, helping teams make smarter, faster financial decisions.",
    images: {
        mobile: {
            src: "https://res.cloudinary.com/dx1etzf66/image/upload/v1761891763/outbound-hero-desktop_feua3q.webp",
            alt: "Illustration of a futuristic satellite receiver in a rural setting",
        },
        desktop: {
            src: "https://res.cloudinary.com/dx1etzf66/image/upload/v1761891763/outbound-hero-desktop_feua3q.webp",
            alt: "Illustration of a futuristic satellite receiver in a rural setting",
        },
        mainFeature: {
            src: "https://res.cloudinary.com/dx1etzf66/image/upload/v1761891760/outbound-1-desktop_msubtn.webp",
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
        title: " LayerX ensures enterprise-grade reliability and multi-chain confidence",
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
            image: 'https://res.cloudinary.com/dx1etzf66/image/upload/v1761889042/photo-1552664730-d307ca884978_e37ajb.jpg'
        },
        {
            id: 'smart-gas-routing',
            name: 'Smart Gas & Fee Routing',
            href: '/suite/helpdesk/copilot',
            description: 'Optimize costs with intelligent gas routing that automatically finds the most efficient fee paths.',
            image: 'https://res.cloudinary.com/dx1etzf66/image/upload/v1761891767/photo-1677442136019-21780ecad995_kvenjq.jpg'
        },
        {
            id: 'instant-reconciliation',
            name: 'Instant Reconciliation',
            href: '/suite/helpdesk/tickets',
            description: 'Reconcile transactions instantly with real-time sync between wallets, ledgers, and treasury systems.',
            image: 'https://res.cloudinary.com/dx1etzf66/image/upload/v1761889042/photo-1552664730-d307ca884978_e37ajb.jpg'
        },
        {
            id: 'unified-treasury',
            name: 'Unified Treasury Dashboard',
            href: '/suite/helpdesk/omnichannel',
            description: 'Gain complete visibility and control of all your assets across blockchains and accounts in one interface.',
            image: 'https://res.cloudinary.com/dx1etzf66/image/upload/v1761891767/photo-1677442136019-21780ecad995_kvenjq.jpg'
        },
        {
            id: 'multi-asset-wallet',
            name: 'Multi-Asset Wallet Integration',
            href: '/suite/helpdesk/help-center',
            description: 'Manage and transact across hundreds of blockchains and tokens from a single dashboard.',
            image: 'https://res.cloudinary.com/dx1etzf66/image/upload/v1761889042/photo-1552664730-d307ca884978_e37ajb.jpg'
        },
        {
            id: 'dynamic-liquidity',
            name: 'Dynamic Liquidity Allocation',
            href: '/app-store',
            description: 'Automatically rebalance and distribute liquidity across wallets, exchanges, and chains.',
            image: 'https://res.cloudinary.com/dx1etzf66/image/upload/v1761891767/photo-1677442136019-21780ecad995_kvenjq.jpg'
        },
        {
            id: 'institutional-security',
            name: 'Institutional-Grade Security',
            href: '/suite/helpdesk/reporting',
            description: 'Protect every transaction with MPC technology, encryption, and continuous monitoring.',
            image: 'https://res.cloudinary.com/dx1etzf66/image/upload/v1761889042/photo-1552664730-d307ca884978_e37ajb.jpg'
        },
        {
            id: 'regulatory-compliance',
            name: 'Regulatory Compliance Layer',
            href: '/suite/helpdesk/knowledge-hub',
            description: 'Stay compliant with integrated KYC, KYT, and AML analytics for every asset movement.',
            image: 'https://res.cloudinary.com/dx1etzf66/image/upload/v1761891767/photo-1677442136019-21780ecad995_kvenjq.jpg'
        },
        {
            id: 'access-controls',
            name: 'Access Controls & Role Management',
            href: '/suite/helpdesk/outbound',
            description: 'Define user roles and granular permissions to manage secure team and enterprise operations.',
            image: 'https://res.cloudinary.com/dx1etzf66/image/upload/v1761889042/photo-1552664730-d307ca884978_e37ajb.jpg'
        },
        {
            id: 'ai-settlement',
            name: 'AI-Driven Settlement Optimization',
            href: '/suite/helpdesk/inbox',
            description: 'Leverage AI to predict the fastest and most cost-efficient settlement routes across chains.',
            image: 'https://res.cloudinary.com/dx1etzf66/image/upload/v1761891767/photo-1677442136019-21780ecad995_kvenjq.jpg'
        },
        {
            id: 'error-recovery',
            name: 'Automated Error Recovery',
            href: '/suite/helpdesk/copilot',
            description: 'Detect failed transactions and automatically retry or reroute them for guaranteed delivery.',
            image: 'https://res.cloudinary.com/dx1etzf66/image/upload/v1761889042/photo-1552664730-d307ca884978_e37ajb.jpg'
        },
        {
            id: 'predictive-insights',
            name: 'Predictive Treasury Insights',
            href: '/suite/helpdesk/tickets',
            description: 'Anticipate liquidity needs, network fee trends, and volume patterns using intelligent forecasting.',
            image: 'https://res.cloudinary.com/dx1etzf66/image/upload/v1761891767/photo-1677442136019-21780ecad995_kvenjq.jpg'
        },
        {
            id: 'transaction-analytics',
            name: 'Real-Time Transaction Analytics',
            href: '/suite/helpdesk/omnichannel',
            description: 'Monitor, visualize, and analyze all transactions in real time across every integrated blockchain.',
            image: 'https://res.cloudinary.com/dx1etzf66/image/upload/v1761889042/photo-1552664730-d307ca884978_e37ajb.jpg'
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


