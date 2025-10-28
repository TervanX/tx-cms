export const productivityProps = {
    heading: {
        main: "Autonomous capital optimization",
        highlighted: "that never sleeps",
    },
    description:
        "TX Capital automates the most complex aspects of institutional treasury management—from yield farming to liquidity provisioning—executing sophisticated strategies with precision 24/7.",
    images: {
        mobile: {
            src: "/assets/solution1.jpg",
            alt: "Illustration of productive bees in a grassy meadow",
        },
        desktop: {
            src: "/assets/solution1.jpg",
            alt: "Illustration of productive bees in a grassy meadow",
        },
        product: {
            src: "/assets/productivity-1-desktop.webp",
            alt: "Helpdesk product UI",
        },
    },
    features: [
        {
            title: 'AI-Optimized Yield Strategies',
            description: 'Our system continuously scans 300+ blockchains and DeFi protocols, automatically deploying capital to the highest-risk-adjusted opportunities. The AI dynamically rebalances positions, compounds yields, and manages impermanent loss protection.'
        },
        {
            title: 'Smart Liquidity Orchestration',
            description: 'Automatically manage liquidity across centralized exchanges, DEXs, and lending protocols. The system optimizes capital allocation based on real-time borrowing rates, trading volumes, and market conditions to maximize fee income and yield.'
        },
        {
            title: 'Cross-Chain Capital Efficiency',
            description: 'Seamlessly move liquidity between chains to capture the best opportunities. Our AI identifies yield differentials, funding rate arbitrage, and cross-protocol opportunities, executing complex multi-chain strategies autonomously.'
        }
    ],
    testimonial: {
        quote:
            "TX Capital increased our treasury yields by 340% while reducing our manual management time by 90%. It's like having a full-time quant team working around the clock.",
        author: "James Robertson",
        role: "Head of Treasury at Digital Asset Fund",
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
        main: "Institutional-grade capital ",
        highlighted: "management made accessible",
    },
    description:
        "A powerful yet intuitive platform for managing complex investment strategies and liquidity operations across all asset classes and chains.",
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
            title: 'Unified Capital Dashboard',
            description: 'Monitor all capital deployments, yield performance, and liquidity positions from a single interface. Track APY, risk metrics, capital efficiency, and protocol exposure across your entire portfolio',
        }
    ],
    additionalFeatures: [
        {
            image: { src: "/assets/usability-2-desktop.webp" },
            title: 'Visual Strategy Builder',
            description: 'Create and modify sophisticated investment strategies without coding. Use our drag-and-drop interface to define risk parameters, yield targets, and deployment rules tailored to your treasury policy',
        },
        {
            image: { src: "/assets/usability-2-desktop.webp" },
            title: 'Pre-Built Investment Templates',
            description: 'Accelerate deployment with institutionally-designed templates:',
            list: {
                items: [
                    'Risk-Adjusted Yield Farming with IL protection',
                    'Liquidity Provisioning across CEXs and DEXs',
                    'Cross-Protocol Lending strategies',
                    'Capital Preservation with enhanced yield',
                ]
            }
        },
        {
            image: { src: "/assets/usability-2-desktop.webp" },
            title: 'Comprehensive Financial Integration',
            description: 'Connect TX Capital to your entire financial ecosystem:',
            list: {
                items: [
                    'DeFi Protocols (Aave, Compound, Uniswap, etc.)',
                    'Centralized Exchanges and liquidity venues',
                    'Traditional Banking and money market accounts',
                    'Risk Management and compliance systems',
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
        main: "Intelligent capital analytics ",
        highlighted: "that drive superior returns",
    },
    description:
        "Move beyond basic performance tracking to predictive insights that optimize capital allocation and risk-adjusted returns.",
    images: {
        mobile: {
            src: "/assets/outbound-hero-desktop.webp",
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
            title: 'Real-Time Performance Analytics',
            description: `Monitor yield generation, capital efficiency, and risk exposure across all deployments. Track APY, impermanent loss, protocol concentration, and counterparty risk with institutional-grade precision.`
        },
        {
            title: 'Predictive Yield Forecasting',
            description: 'Our AI models analyze protocol fundamentals, market conditions, and historical patterns to forecast yield opportunities. Anticipate rate changes, identify emerging opportunities, and optimize strategy timing.'
        },
        {
            title: 'Smart Risk Intelligence',
            description: 'Automatically monitor and alert on protocol risks, smart contract vulnerabilities, and market conditions. The system assesses collateralization ratios, liquidity depths, and governance risks across all deployments.'
        },
        {
            title: 'Capital Optimization Insights',
            description: 'Receive AI-driven recommendations for improving capital efficiency, reducing costs, and enhancing risk-adjusted returns. Optimize position sizing, protocol allocation, and cross-chain capital movement.'
        }

    ],
    g2Comparison: {
        title: "TX Capital delivers institutional-grade performance",
        description:
            "",
        items: [
            { name: ' integrated DeFi protocols and chains', value: '300+', color: 'text-black' },
            { name: 'autonomous strategy execution', value: '24/7', color: 'text-black/40' },
            { name: 'higher risk-adjusted returns vs. manual management', value: '40%', color: 'text-black/40' },
            { name: 'strategy execution success rate', value: '99.9%', color: 'text-black/40' }
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
            id: 'ai-yield-optimization',
            name: 'AI Yield Optimization',
            href: '/suite/capital/yield-optimization',
            description: 'Automatically deploy capital to highest-performing opportunities across all chains.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'multi-protocol-strategy-engine',
            name: 'Multi-Protocol Strategy Engine',
            href: '/suite/capital/strategy-engine',
            description: 'Execute complex strategies across lending, liquidity, and staking protocols.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'cross-chain-capital-mobility',
            name: 'Cross-Chain Capital Mobility',
            href: '/suite/capital/cross-chain-mobility',
            description: 'Seamlessly move liquidity between chains to capture best opportunities.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'impermanent-loss-protection',
            name: 'Impermanent Loss Protection',
            href: '/suite/capital/il-protection',
            description: 'Automatically manage and hedge LP positions to minimize loss exposure.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'risk-based-position-sizing',
            name: 'Risk-Based Position Sizing',
            href: '/suite/capital/position-sizing',
            description: 'Dynamically adjust deployment sizes based on protocol risk scores.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'real-time-performance-monitoring',
            name: 'Real-Time Performance Monitoring',
            href: '/suite/capital/performance-monitoring',
            description: 'Track yields, fees, and capital efficiency across all deployments.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'automated-compounding',
            name: 'Automated Compounding',
            href: '/suite/capital/compounding',
            description: 'Optimally compound yields across protocols to maximize returns.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'liquidity-mining-optimization',
            name: 'Liquidity Mining Optimization',
            href: '/suite/capital/liquidity-mining',
            description: 'Capture highest-yielding liquidity mining opportunities automatically.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'portfolio-rebalancing',
            name: 'Portfolio Rebalancing',
            href: '/suite/capital/rebalancing',
            description: 'Maintain target allocations across protocols and asset classes.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'smart-contract-risk-monitoring',
            name: 'Smart Contract Risk Monitoring',
            href: '/suite/capital/risk-monitoring',
            description: 'Continuously assess protocol security and smart contract risks.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'regulatory-compliance-layer',
            name: 'Regulatory Compliance Layer',
            href: '/suite/capital/compliance',
            description: 'Ensure all deployments meet regulatory and internal policy requirements.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'institutional-grade-reporting',
            name: 'Institutional-Grade Reporting',
            href: '/suite/capital/reporting',
            description: 'Generate detailed performance, risk, and compliance reports.',
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