export const productivityProps = {
    heading: {
        main: "Autonomous treasury operations",
        highlighted: "that work 24/7",
    },
    description:
        "TX Treasury automates the most complex aspects of digital treasury management—from cash positioning to cross-chain settlements—executing with precision and intelligence around the clock.",
    images: {
        mobile: {
            src: "/assets/productivity-hero-mobile.webp",
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
            title: 'AI-Optimized Liquidity Management',
            description: 'Our system continuously monitors balances across all connected accounts and chains, automatically executing sweeps, rebalancing, and yield optimization to ensure optimal capital allocation without manual intervention.'
        },
        {
            title: 'Automated Cross-Chain Settlements',
            description: 'Seamlessly move assets between blockchains and traditional banking systems. The AI dynamically selects the most efficient settlement paths, bridging assets and executing transfers while minimizing costs and settlement times.'
        },
        {
            title: 'Smart Payment & Distribution Workflows',
            description: 'Automate complex payment schedules, payroll, vendor payments, and treasury operations with intelligent approval workflows. Set rules for automatic execution while maintaining appropriate controls and audit trails.'
        }
    ],
    testimonial: {
        quote:
            "TX Treasury reduced our daily treasury operations from 8 hours to 45 minutes while providing complete visibility across 50+ chains and 15 bank accounts. It's fundamentally transformed our financial operations.",
        author: "Jennifer Lee",
        role: "CFO of MultiChain Enterprises",
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
            src: "/assets/lightspeed-headshot-min.png",
            alt: "Angelo Livanos",
        },
    },
};

export const usabilityProps = {
    heading: {
        main: "Enterprise-grade treasury ",
        highlighted: " management made simple",
    },
    description:
        "A unified interface for managing all financial operations across traditional banking and digital assets, with enterprise-grade security and controls.",
    images: {
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
            title: 'Unified Financial Dashboard',
            description: 'Monitor all assets—crypto, fiat, tokens, and traditional investments—from a single interface. Track balances, cash flow, exposure, and performance across all accounts and chains in real-time',
        }
    ],
    additionalFeatures: [
        {
            image: { src: "/assets/usability-2-desktop.webp" },
            title: 'Visual Workflow Builder',
            description: 'Create and modify financial automation rules without technical expertise. Use our drag-and-drop interface to define cash management rules, payment approvals, and risk parameters',
        },
        {
            image: { src: "/assets/usability-2-desktop.webp" },
            title: 'Pre-Built Treasury Templates',
            description: 'Accelerate deployment with industry-specific templates:',
            list: {
                items: [
                    'Daily Cash Positioning & liquidity management',
                    'Multi-Chain Portfolio Rebalancing',
                    'Automated Payment Processing',
                    'Risk-Managed Treasury Operations',
                ]
            }
        },
        {
            image: { src: "/assets/usability-2-desktop.webp" },
            title: 'Comprehensive Financial Integration',
            description: 'Connect TX Treasury to your entire financial ecosystem:',
            list: {
                items: [
                    'Traditional Banking via API connections',
                    'Payment Processors and gateway APIs',
                    'Accounting Systems (QuickBooks, NetSuite, Xero)',
                    'Blockchain Networks across all supported chains',
                ]
            }
        },
    ],
    sectionStyle: {
        backgroundColor: "var(--color-cream)",
    },
};

export const outboundProps = {
    heading: {
        main: "Intelligent treasury analytics ",
        highlighted: "that drive better decisions",
    },
    description:
        "Move beyond basic balance tracking to predictive insights that optimize capital allocation and financial strategy.",
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
            title: 'Real-Time Cash Position Monitoring',
            description: `Track your organization's complete financial position across all accounts and chains. Monitor liquidity ratios, exposure concentrations, and cash flow patterns with institutional-grade precision.`
        },
        {
            title: 'Predictive Cash Flow Forecasting',
            description: 'Our AI models analyze historical patterns, market data, and business metrics to forecast future cash positions. Anticipate liquidity needs, optimize working capital, and make informed investment decisions.'
        },
        {
            title: 'Smart Risk Exposure Analytics',
            description: 'Automatically identify and quantify financial risks across currencies, chains, and counterparties. Monitor concentration risks, volatility exposure, and regulatory compliance status in real-time.'
        },
        {
            title: 'Performance Optimization Insights',
            description: 'Receive AI-driven recommendations for improving capital efficiency, reducing costs, and enhancing yield. Optimize asset allocation, minimize transaction costs, and identify revenue opportunities across your entire portfolio.'
        }

    ],
    g2Comparison: {
        title: "TX Treasury delivers enterprise-grade financial management",
        description:
            "",
        items: [
            { name: ' blockchains and traditional banking unified', value: '300+', color: 'text-black' },
            { name: ' system availability SLA', value: '99.95%', color: 'text-black/40' },
            { name: ' real-time balance synchronization', value: '<30s', color: 'text-black/40' },
            { name: ' reduction in manual treasury operations', value: '75%', color: 'text-black/40' }
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
            id: 'unified-balance-aggregation',
            name: 'Unified Balance Aggregation',
            href: '/suite/treasury/balance-aggregation',
            description: 'Real-time visibility across all bank accounts, crypto wallets, and chain positions.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'ai-cash-forecasting',
            name: 'AI Cash Forecasting',
            href: '/suite/treasury/cash-forecasting',
            description: 'Predict future cash positions and liquidity needs with intelligent modeling.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'automated-sweep-accounts',
            name: 'Automated Sweep Accounts',
            href: '/suite/treasury/sweep-accounts',
            description: 'Intelligently move funds between accounts to optimize interest and yield.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'cross-chain-settlement-engine',
            name: 'Cross-Chain Settlement Engine',
            href: '/suite/treasury/cross-chain-settlement',
            description: 'Seamlessly transfer assets between different blockchain networks.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'multi-currency-management',
            name: 'Multi-Currency Management',
            href: '/suite/treasury/multi-currency',
            description: 'Handle crypto, fiat, and token assets with automatic currency accounting.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'payment-automation',
            name: 'Payment Automation',
            href: '/suite/treasury/payment-automation',
            description: 'Schedule and execute complex payment workflows with approval controls.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'risk-monitoring-alerting',
            name: 'Risk Monitoring & Alerting',
            href: '/suite/treasury/risk-monitoring',
            description: 'Track exposure limits, concentration risks, and unusual activities.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'regulatory-reporting',
            name: 'Regulatory Reporting',
            href: '/suite/treasury/regulatory-reporting',
            description: 'Generate financial statements, audit trails, and compliance reports.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'yield-optimization',
            name: 'Yield Optimization',
            href: '/suite/treasury/yield-optimization',
            description: 'Automatically deploy idle cash to approved yield-generating strategies.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'approval-workflow-management',
            name: 'Approval Workflow Management',
            href: '/suite/treasury/approval-workflows',
            description: 'Configure multi-signature controls for financial transactions.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'real-time-reconciliation',
            name: 'Real-time Reconciliation',
            href: '/suite/treasury/reconciliation',
            description: 'Automatically match transactions across all accounts and systems.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'api-first-architecture',
            name: 'API-First Architecture',
            href: '/suite/treasury/api',
            description: 'Integrate with existing financial systems and custom applications.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
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