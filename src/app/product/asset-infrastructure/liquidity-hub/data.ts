export const productivityProps = {
    heading: {
        main: "Autonomous liquidity ",
        highlighted: "optimization that never sleeps"
    },
    description:
        "Liquidity Hub automates the most complex aspects of liquidity sourcing—venue selection, route optimization, and execution management—delivering superior trading outcomes with zero manual intervention.",
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
            title: "Intelligent Multi-Venue Routing",
            description: "Our AI doesn't just find the best price—it finds the optimal execution path. The system dynamically evaluates centralized exchanges, DEXs, AMMs, and market makers across 300+ blockchains, factoring in price impact, gas costs, settlement certainty, and counterparty risk to guarantee optimal execution for every trade."
        },
        {
            title: "Dynamic Slippage Optimization",
            description: "Automatically adjust slippage tolerance based on real-time market conditions, token volatility, and trade size. Our system predicts price impact across venues to set intelligent limits that maximize fill rates while protecting against front-running and MEV."
        },
        {
            title: "Cross-Chain Liquidity Mirroring",
            description: "Access liquidity from one blockchain on another through our intelligent bridge aggregation. The system automatically sources the most efficient cross-chain routes, wrapping and unwrapping assets as needed to provide seamless multi-chain trading experiences."
        }
    ],
    testimonial: {
        quote: "Liquidity Hub increased our effective exchange rates by 58 basis points and reduced our failed transactions by 92%. It's like having a full-time execution desk working 24/7.",
        author: "Marcus Thorne",
        role: "Head of Trading at Vertex Digital",
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
            src: "https://res.cloudinary.com/dx1etzf66/image/upload/v1761891745/lightspeed-headshot-min_qiohvg.png",
            alt: "Angelo Livanos",
        },
    },
};

export const usabilityProps = {
    heading: {
        main: "Single endpoint, ",
        highlighted: "infinite liquidity",
    },
    description:
        "From simple swaps to complex institutional orders, our unified API provides consistent, reliable access to the world's deepest liquidity pools without the complexity of multiple integrations.",
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
            title: "Unified Liquidity API",
            description: "Access every major liquidity source—CEXs, DEXs, AMMs, and OTC desks—through one standardized REST and WebSocket endpoint. Eliminate the overhead of managing multiple API connections, rate limits, and authentication systems.",
            list: {
                items: []
            }
        }
    ],
    additionalFeatures: [
        {
            image: { src: "https://res.cloudinary.com/dx1etzf66/image/upload/v1761891808/usability-2-desktop_h3f0oo.webp" },
            title: 'Pre-Built Trading Components',
            description: 'Accelerate integration with our production-ready modules:',
            list: {
                items: [
                    'Embedded Swap SDK for frictionless user trading',
                    'Price Feed Aggregator for resilient, real-time market data',
                    'Liquidity Dashboard for venue performance monitoring'
                ]
            }
        },
        {
            image: { src: "https://res.cloudinary.com/dx1etzf66/image/upload/v1761891810/usability-3-desktop_ofrgcb.webp" },
            title: 'Smart Order Management',
            description: 'Implement sophisticated execution strategies without complex infrastructure:',
            list: {
                items: [
                    'TWAP/VWAP Execution across multiple venues',
                    'Iceberg & Dark Pool Orders for large institutional trades',
                    'Conditional & Stop-Loss Triggers with cross-venue execution'
                ]
            }
        },
        {
            image: { src: "https://res.cloudinary.com/dx1etzf66/image/upload/v1761891810/usability-3-desktop_ofrgcb.webp" },
            title: 'Seamless Ecosystem Integration',
            description: 'Connect Liquidity Hub to your entire trading stack:',
            list: {
                items: [
                    'Real-Time Market Data Webhooks',
                    'Settlement & Accounting Feeds',
                    'Risk Management & Compliance APIs',
                    'Portfolio Management SDKs',
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
        highlighted: "liquidity execution",
    },
    description:
        "Move beyond basic price feeds to predictive analytics that transform liquidity management into a strategic advantage.",
    outboundFeatures: [
        {
            title: '360-Degree Venue Performance Analytics',
            description: "Monitor fill rates, slippage, latency, and costs across all integrated liquidity sources. Identify underperforming venues and optimize routing strategies based on real historical performance data."
        },
        {
            title: 'Predictive Liquidity Forecasting',
            description: "Our AI models analyze order book depth, market volatility, and historical patterns to forecast liquidity conditions. Anticipate market impact and optimize trade timing for large orders."
        },
        {
            title: 'Real-Time Arbitrage Intelligence',
            description: 'Automatically detect price discrepancies across venues and chains. Identify triangular arbitrage opportunities, funding rate differentials, and cross-venue mispricings to capture additional revenue streams.'
        },
        {
            title: 'Smart Cost Optimization Analytics',
            description: 'Track and analyze all trading costs—including spreads, fees, gas, and slippage—across every execution. Receive AI-driven recommendations to reduce total cost of trading while maintaining execution quality.'
        }

    ],
    g2Comparison: {
        title: "Liquidity Hub delivers institutional-grade performance metrics:",
        description: "",
        items: [
            { name: 'aggregated daily liquidity depth', value: '$15B+', color: 'text-black' },
            { name: 'integrated blockchains & layer 2s', value: '300+', color: 'text-black/40' },
            { name: 'platform uptime SLA', value: '99.99%', color: 'text-black/40' },
            { name: 'average execution latency', value: '<50s', color: 'text-black/40' },
            { name: 'fill rate for standard market orders', value: '95%+', color: 'text-black/40' }
        ],
    },
    sectionStyle: {
        backgroundColor: "white",
    },
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
            id: 'intelligent-order-splitting',
            name: 'Intelligent Order Splitting',
            href: '/suite/helpdesk/inbox',
            description: "Automatically fragment large orders across multiple venues to minimize market impact.",
            image: 'https://res.cloudinary.com/dx1etzf66/image/upload/v1761889042/photo-1552664730-d307ca884978_e37ajb.jpg'
        },
        {
            id: 'cross-chain-liquidity-access',
            name: 'Cross-Chain Liquidity Access',
            href: '/suite/helpdesk/copilot',
            description: "Trade any asset on any chain through our intelligent bridge and wrapping aggregation.",
            image: 'https://res.cloudinary.com/dx1etzf66/image/upload/v1761891767/photo-1677442136019-21780ecad995_kvenjq.jpg'
        },
        {
            id: 'mev-protection-optimization',
            name: 'MEV Protection & Optimization',
            href: '/suite/helpdesk/tickets',
            description: "Detect and avoid malicious MEV while capturing beneficial arbitrage opportunities.",
            image: 'https://res.cloudinary.com/dx1etzf66/image/upload/v1761889042/photo-1552664730-d307ca884978_e37ajb.jpg'
        },
        {
            id: 'dynamic-slippage-management',
            name: 'Dynamic Slippage Management',
            href: '/suite/helpdesk/omnichannel',
            description: "Auto-adjust slippage tolerance based on token volatility and market conditions.",
            image: 'https://res.cloudinary.com/dx1etzf66/image/upload/v1761891767/photo-1677442136019-21780ecad995_kvenjq.jpg'
        },
        {
            id: 'venue-performance-scoring',
            name: 'Venue Performance Scoring',
            href: '/suite/helpdesk/help-center',
            description: "Real-time ranking of liquidity sources based on fill rates, costs, and reliability.",
            image: 'https://res.cloudinary.com/dx1etzf66/image/upload/v1761889042/photo-1552664730-d307ca884978_e37ajb.jpg'
        },
        {
            id: 'custom-routing-logic',
            name: "Custom Routing Logic",
            href: '/app-store',
            description: "Define proprietary routing rules and venue preferences while leveraging our infrastructure."
            , image: 'https://res.cloudinary.com/dx1etzf66/image/upload/v1761891767/photo-1677442136019-21780ecad995_kvenjq.jpg'

        },
        {
            id: 'real-time-price-feeds',
            name: 'Real-Time Price Feeds',
            href: '/suite/helpdesk/reporting',
            description: "Access aggregated, manipulation-resistant price data from 50+ independent sources."
            , image: 'https://res.cloudinary.com/dx1etzf66/image/upload/v1761889042/photo-1552664730-d307ca884978_e37ajb.jpg'
        },
        {
            id: 'advanced-charting-integration',
            name: 'Advanced Charting Integration',
            href: '/suite/helpdesk/knowledge-hub',
            description: "Embed professional trading charts with depth visualization and technical analysis.",
            image: 'https://res.cloudinary.com/dx1etzf66/image/upload/v1761891767/photo-1677442136019-21780ecad995_kvenjq.jpg'
        },
        {
            id: 'portfolio-rebalancing-automation',
            name: 'Portfolio Rebalancing Automation',
            href: '/suite/helpdesk/outbound',
            description: "Execute complex multi-asset rebalancing across all connected venues in single operations.",
            image: 'https://res.cloudinary.com/dx1etzf66/image/upload/v1761889042/photo-1552664730-d307ca884978_e37ajb.jpg'
        },
        {
            id: 'yield-aware-execution',
            name: 'Yield-Aware Execution',
            href: '/suite/helpdesk/inbox',
            description: "Route trades through venues that offer additional yield or reward incentives."
            , image: 'https://res.cloudinary.com/dx1etzf66/image/upload/v1761891767/photo-1677442136019-21780ecad995_kvenjq.jpg'
        },
        {
            id: 'institutional-grade-security',
            name: 'Institutional-Grade Security',
            href: '/suite/helpdesk/copilot',
            description: "MPC-signed transactions, smart contract audits, and continuous threat monitoring."
            , image: 'https://res.cloudinary.com/dx1etzf66/image/upload/v1761889042/photo-1552664730-d307ca884978_e37ajb.jpg'
        },
        {
            id: 'comprehensive-reporting-suite',
            name: 'Comprehensive Reporting Suite',
            href: '/suite/helpdesk/tickets',
            description: "Generate detailed execution analytics, cost breakdowns, and performance reports."
            ,
            image: 'https://res.cloudinary.com/dx1etzf66/image/upload/v1761891767/photo-1677442136019-21780ecad995_kvenjq.jpg'
        },
    ],
};