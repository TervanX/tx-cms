export const productivityProps = {
    heading: {
        main: "Autonomous trading ",
        highlighted: "that executes 24/7",
    },
    description:
        "TX Auto Trade automates the most complex aspects of digital asset trading—from strategy execution to risk management—operating with precision across all market conditions.",
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
            title: 'AI-Enhanced Strategy Optimization',
            description: 'Our system continuously analyzes market data, execution patterns, and strategy performance to dynamically optimize parameters. The AI adjusts position sizing, entry/exit timing, and risk exposure in real-time to maximize risk-adjusted returns.'
        },
        {
            title: 'Multi-Venue Execution Intelligence',
            description: 'Automatically route orders across centralized exchanges, DEXs, and liquidity pools for optimal execution. The system analyzes venue reliability, liquidity depth, and fee structures to minimize slippage and maximize fill rates.'
        },
        {
            title: 'Cross-Chain Arbitrage Automation',
            description: 'Seamlessly execute arbitrage strategies across 300+ blockchains. Our AI identifies price discrepancies, funding rate differentials, and cross-venue opportunities, executing complex multi-chain trades autonomously.'
        }
    ],
    testimonial: {
        quote:
            "TX Auto Trade achieved 28% annualized returns with 40% less volatility than our manual trading desk. We've scaled to managing $50M in assets with just two team members.",
        author: "David Park",
        role: "Chief Investment Officer at Quant Digital Fund",
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
        main: "Institutional-grade algorithmic ",
        highlighted: "trading made simple",
    },
    description:
        "A powerful yet intuitive platform for creating, testing, and deploying sophisticated trading strategies without building complex infrastructure.",
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
            title: 'Unified Trading Dashboard',
            description: 'Monitor all active strategies, performance metrics, and risk exposure from a single interface. Track P&L, Sharpe ratios, drawdowns, and execution quality across your entire portfolio',
        }
    ],
    additionalFeatures: [
        {
            image: { src: "/assets/usability-2-desktop.webp" },
            title: 'Visual Strategy Builder',
            description: 'Create and modify complex trading algorithms without coding. Use our drag-and-drop interface to define technical indicators, risk parameters, and execution logic through an intuitive visual workflow',
        },
        {
            image: { src: "/assets/usability-2-desktop.webp" },
            title: 'Pre-Built Strategy Templates',
            description: 'Accelerate deployment with professionally-designed templates:',
            list: {
                items: [
                    'Market Making with dynamic spread adjustment',
                    'Mean Reversion with volatility-based positioning',
                    'Trend Following with multi-timeframe confirmation',
                    'Arbitrage Strategies across venues and chains',
                ]
            }
        },
        {
            image: { src: "/assets/usability-2-desktop.webp" },
            title: 'Comprehensive Exchange Integration',
            description: 'Connect TX Auto Trade to your entire trading ecosystem:',
            list: {
                items: [
                    '50+ Centralized Exchanges with unified API',
                    'Major DEXs and AMMs across all chains',
                    'Data Providers for real-time market feeds',
                    'Risk Management systems for exposure monitoring',
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
        main: "Intelligent trading analytics ",
        highlighted: "that drive alpha generation",
    },
    description:
        "Move beyond basic performance metrics to predictive insights that optimize strategy performance and risk management.",
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
            title: 'Real-Time Strategy Analytics',
            description: `Monitor strategy performance, execution quality, and risk metrics across all deployments. Track alpha generation, beta exposure, and capacity utilization with institutional-grade precision.`
        },
        {
            title: 'Predictive Market Regime Detection',
            description: 'Our AI models analyze market structure, volatility patterns, and macroeconomic indicators to forecast regime changes. Automatically adjust strategy parameters or allocation based on predicted market conditions.'
        },
        {
            title: 'Smart Risk Intelligence',
            description: 'Automatically monitor and manage strategy risks including drawdown limits, concentration risks, and counterparty exposure. The system provides real-time alerts and can automatically reduce position sizes or pause strategies when risk thresholds are breached.'
        },
        {
            title: 'Performance Attribution Analytics',
            description: 'Decompose returns by strategy component, market factor, and execution quality. Identify what\'s driving performance and optimize strategy allocation based on empirical evidence rather than intuition.'
        }

    ],
    g2Comparison: {
        title: "TX Auto Trade delivers institutional-grade performance",
        description:
            "",
        items: [
            { name: ' integrated chains and trading venues', value: '300+', color: 'text-black' },
            { name: ' average execution latency', value: '<10ms', color: 'text-black/40' },
            { name: ' strategy uptime SLA', value: '99.95%', color: 'text-black/40' },
            { name: ' average reduction in slippage vs. manual trading', value: '45%', color: 'text-black/40' }
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
            id: 'ai-strategy-optimization',
            name: 'AI Strategy Optimization',
            href: '/suite/auto-trade/strategy-optimization',
            description: 'Continuously optimize trading parameters based on real-time market conditions.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'multi-venue-order-routing',
            name: 'Multi-Venue Order Routing',
            href: '/suite/auto-trade/order-routing',
            description: 'Intelligently split and route orders across all connected exchanges and DEXs.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'cross-chain-arbitrage-engine',
            name: 'Cross-Chain Arbitrage Engine',
            href: '/suite/auto-trade/arbitrage-engine',
            description: 'Automatically identify and execute arbitrage opportunities across blockchains.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'advanced-backtesting-suite',
            name: 'Advanced Backtesting Suite',
            href: '/suite/auto-trade/backtesting',
            description: 'Test strategies against years of historical data across all integrated venues.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'real-time-risk-management',
            name: 'Real-Time Risk Management',
            href: '/suite/auto-trade/risk-management',
            description: 'Monitor and enforce risk limits across all active strategies and positions.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'portfolio-strategy-management',
            name: 'Portfolio Strategy Management',
            href: '/suite/auto-trade/portfolio-management',
            description: 'Allocate capital across multiple strategies based on performance and correlation.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'market-making-automation',
            name: 'Market Making Automation',
            href: '/suite/auto-trade/market-making',
            description: 'Deploy and manage market making strategies with dynamic spread adjustment.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'mean-reversion-strategies',
            name: 'Mean Reversion Strategies',
            href: '/suite/auto-trade/mean-reversion',
            description: 'Automate statistical arbitrage and mean reversion trading across correlated assets.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'trend-following-systems',
            name: 'Trend Following Systems',
            href: '/suite/auto-trade/trend-following',
            description: 'Implement multi-timeframe trend strategies with dynamic position sizing.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'liquidity-provisioning',
            name: 'Liquidity Provisioning',
            href: '/suite/auto-trade/liquidity-provisioning',
            description: 'Automatically provide liquidity across DEXs and capture fee income.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'smart-order-types',
            name: 'Smart Order Types',
            href: '/suite/auto-trade/smart-orders',
            description: 'Implement iceberg, TWAP, VWAP, and implementation shortfall algorithms.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'comprehensive-reporting',
            name: 'Comprehensive Reporting',
            href: '/suite/auto-trade/reporting',
            description: 'Generate detailed performance, risk, and compliance reports automatically.',
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