export const productivityProps = {
    heading: {
        main: "Autonomous trading ",
        highlighted: "infrastructure that works 24/7"
    },
    description:
        "TX Exchange Engine automates the most complex aspects of digital asset trading—liquidity provisioning, route optimization, and risk management—delivering superior execution with minimal intervention.",
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
            title: "Intelligent Cross-Chain Routing",
            description: "Our AI doesn't just find the best price—it finds the optimal path. The system dynamically evaluates 300+ blockchains and hundreds of liquidity sources, factoring in price impact, gas costs, settlement time, and network congestion to guarantee the most efficient execution for every swap."
        },
        {
            title: "Automated Market Making (AMM)",
            description: "Deploy capital efficiently with our smart AMM infrastructure. Set custom concentration ranges, fee tiers, and rebalancing strategies. Our system automatically manages position health, mitigates impermanent loss, and compounds fees autonomously."
        },
        {
            title: "Dynamic Liquidity Optimization",
            description: "Transform treasury assets into revenue-generating liquidity. The engine continuously analyzes yield opportunities across DEXs, bridges, and lending protocols, automatically allocating funds to the highest-performing strategies while maintaining required liquidity buffers."
        }
    ],
    testimonial: {
        quote: "TX Exchange Engine cut our swap failure rate by 99% and improved our effective exchange rates by 42 basis points—directly impacting our bottom line.",
        author: "Sarah Chen",
        role: "CTO of CrossChain Capital",
        companyLogo: `<svg
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
        main: "One API, ",
        highlighted: "infinite trading possibilities",
    },
    description:
        "From simple embedded swaps to sophisticated algorithmic strategies, our developer-first platform provides the tools and reliability needed to build competitive trading products at scale.",
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
            title: "Unified Trading API",
            description: "Access deep liquidity across centralized exchanges, DEXs, and private market makers through a single, standardized REST and WebSocket API. Eliminate the complexity of managing multiple integrations and liquidity sources.",
            list: {
                items: []
            }
        }
    ],
    additionalFeatures: [
        {
            image: { src: "/assets/usability-2-desktop.webp" },
            title: 'Pre-Built Trading Modules',
            description: 'Accelerate development with our plug-and-play trading components.',
            list: {
                items: [
                    'Embedded Swap Widget for frictionless user trading',
                    'Liquidity Management Dashboard for real-time position monitoring',
                    'Advanced Trading Interface with charting and order books'
                ]
            }
        },
        {
            image: { src: "/assets/usability-3-desktop.webp" },
            title: 'Cross-Chain Settlement Hub',
            description: 'Execute trades that originate on one chain and settle on another seamlessly. Our atomic swap technology and bridge aggregation ensure capital efficiency without manual intervention or wrapping assets.',
            list: {
                items: [
                    'Real-time Price & Liquidity Feeds',
                    'Webhook-based Trade Settlement Alerts',
                    'Accounting & Reporting SDKs',
                    'Compliance & Risk Monitoring Tools',
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
        main: "Intelligence-driven ",
        highlighted: "trading execution",
    },
    description:
        "Move beyond basic price feeds. TX Exchange Engine delivers predictive analytics that transform liquidity management from a cost center into a strategic advantage.",
    outboundFeatures: [
        {
            title: '360-Degree Liquidity Intelligence',
            description: "Monitor your liquidity footprint across all integrated venues and chains. Track pool performance, fee generation, capital efficiency, and impermanent loss in real-time through unified dashboards."
        },
        {
            title: 'Predictive Price Impact Modeling',
            description: "Our AI engine forecasts how large orders will affect market prices across different venues and time horizons. Execute large trades with minimal slippage by splitting orders optimally across liquidity sources."
        },
        {
            title: 'Real-Time Arbitrage & Opportunity Identification',
            description: 'Automatically detect mispricings, cross-chain arbitrage opportunities, and yield variance across integrated protocols. Turn market inefficiencies into profitable trading strategies.'
        },
        {
            title: 'Smart Risk Management & Monitoring',
            description: 'Set custom risk parameters for maximum drawdown, counterparty exposure, and volatility thresholds. Receive real-time alerts when market conditions approach your limits.'
        }

    ],
    g2Comparison: {
        title: "TX Exchange Engine delivers the infrastructure demanded by institutional traders.",
        description: "",
        items: [
            { name: 'integrated blockchains & layer 2s', value: '300+', color: 'text-black' },
            { name: 'aggregated liquidity depth', value: '$10B+', color: 'text-black/40' },
            { name: 'platform uptime SLA', value: '99.99%', color: 'text-black/40' },
            { name: 'average execution latency', value: '<100s', color: 'text-black/40' }
        ],
    },
    sectionStyle: {
        backgroundColor: "white",
    },
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

};

export const featuresProps = {
    title: "Multi-Chain Wallet Infrastructure",
    defaultActiveFeature: "omnichannel",
    sectionStyle: {
        backgroundColor: "var(--color-cream)",
    },
    linkStyle: {
        text: "Find out more",
    },
    features: [
        {
            id: 'intelligent-order-routing',
            name: 'Intelligent Order Routing',
            href: '/suite/helpdesk/inbox',
            description: "Automatically split and route orders across multiple liquidity sources for optimal execution.",
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'cross-chain-atomic-swaps',
            name: 'Cross-Chain Atomic Swaps',
            href: '/suite/helpdesk/copilot',
            description: "Execute trustless trades between different blockchain assets without intermediary wrapping.",
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'custom-amm-deployment',
            name: 'Custom AMM Deployment',
            href: '/suite/helpdesk/tickets',
            description: "Launch your own automated market maker with customizable fee structures and bonding curves.",
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'concentrated-liquidity-management',
            name: 'Concentrated Liquidity Management',
            href: '/suite/helpdesk/omnichannel',
            description: "Deploy capital within specific price ranges for enhanced capital efficiency.",
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'smart-order-types',
            name: 'Smart Order Types',
            href: '/suite/helpdesk/help-center',
            description: "Implement TWAP, VWAP, and limit orders that work across both CEX and DEX liquidity.",
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'liquidity-mining-incentives',
            name: "Liquidity Mining & Incentives",
            href: '/app-store',
            description: "Design and manage token distribution programs to bootstrap liquidity efficiently.",
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'real-time-price-feeds',
            name: 'Real-Time Price Feeds',
            href: '/suite/helpdesk/reporting',
            description: "Access resilient, manipulation-resistant price oracles with multi-source aggregation.",
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'advanced-charting-analytics',
            name: 'Advanced Charting & Analytics',
            href: '/suite/helpdesk/knowledge-hub',
            description: "Embed professional trading charts with technical indicators and volume analysis.",
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'portfolio-rebalancing-automation',
            name: 'Portfolio Rebalancing Automation',
            href: '/suite/helpdesk/outbound',
            description: "Set rules for automatic portfolio management and position sizing across assets.",
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'yield-optimization-strategies',
            name: 'Yield Optimization Strategies',
            href: '/suite/helpdesk/inbox',
            description: "Automatically deploy idle assets to earning opportunities across DeFi protocols.",
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'institutional-grade-security',
            name: 'Institutional-Grade Security',
            href: '/suite/helpdesk/copilot',
            description: "MPC-based settlement, smart contract audits, and real-time monitoring protect all assets.",
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        }
    ],
};