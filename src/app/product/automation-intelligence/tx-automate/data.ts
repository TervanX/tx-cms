export const productivityProps = {
    heading: {
        main: "Autonomous financial operations",
        highlighted: "that work 24/7",
    },
    description:
        "TX Automate handles the most complex multi-chain financial workflows—from treasury management to cross-chain settlements—executing with precision and intelligence around the clock.",
    images: {
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
            title: 'AI-Optimized Execution Engine',
            description: 'Our system doesn\'t just run tasks—it continuously optimizes them. The AI dynamically adjusts timing, gas strategies, and execution paths based on real-time network conditions, market data, and cost efficiency metrics.'
        },
        {
            title: 'Smart Cross-Chain Orchestration',
            description: 'Coordinate seamless operations across multiple blockchains within single workflows. Execute complex tasks like automated rebalancing, multi-protocol yield strategies, and interconnected financial operations without manual intervention.'
        },
        {
            title: 'Predictive Trigger System',
            description: 'Move beyond basic time-based automation. Deploy intelligent triggers based on market conditions, portfolio metrics, protocol APY changes, or custom AI-generated signals to execute when conditions are optimal.'
        }
    ],
    testimonial: {
        quote:
            "TX Automate reduced our daily operational workload by 85% while eliminating human error. We now manage 5x the transaction volume with the same team size",
        author: "Alex Chen",
        role: "CFO of Quantum Digital Assets",
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
        main: "Visual automation for ",
        highlighted: "sophisticated financial operations",
    },
    description:
        "Build complex cross-chain workflows through an intuitive interface or powerful API—making enterprise-grade automation accessible to teams of all technical levels.",
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
            title: 'Drag-and-Drop Workflow Builder',
            description: 'Create sophisticated automations visually with our no-code interface. Connect pre-built modules for swaps, transfers, staking, and monitoring to build financial operations in minutes, not months.',
        }
    ],
    additionalFeatures: [
        {
            image: { src: "/assets/usability-2-desktop.webp" },
            title: 'Pre-Built Automation Templates',
            description: 'Accelerate deployment with customizable templates for common use scenarios:',
            list: {
                items: [
                    'Automated Treasury Management & risk controls',
                    'Multi-Chain Portfolio Rebalancing',
                    'DeFi Yield Strategy Automation',
                    'Cross-Chain Payment Processing'
                ]
            }
        },
        {
            image: { src: "/assets/usability-3-desktop.webp" },
            title: 'Unified Automation API',
            description: 'Programmatically create, manage, and monitor workflows through comprehensive REST and WebSocket APIs. Integrate TX Automate directly into your existing applications and systems.',
        },
        {
            image: { src: "/assets/usability-2-desktop.webp" },
            title: 'Real-Time Workflow Monitoring',
            description: 'Monitor all active automations through a unified dashboard featuring:',
            list: {
                items: [
                    'Live Execution Status across all chains',
                    'Performance Analytics & cost tracking',
                    'Smart Alerting & automatic recovery status',
                    'Complete Audit Trail for every execution',
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
        main: "Intelligent automation ",
        highlighted: "that learns and adapts",
    },
    description:
        "Transform automation from simple task execution to strategic financial optimization with AI-driven insights and predictive capabilities.",
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
            title: 'Real-Time Performance Analytics',
            description: `Monitor execution success rates, gas efficiency, and cost performance across all active automations. Identify bottlenecks, optimize timing, and reduce operational costs with detailed performance metrics.`
        },
        {
            title: 'Predictive Failure Prevention',
            description: 'Our AI models analyze historical execution patterns and network conditions to forecast potential workflow failures. Receive proactive alerts and automatically implement contingency plans before issues impact operations.'
        },
        {
            title: 'Smart Gas Optimization Intelligence',
            description: 'Automatically schedule and batch operations during low-congestion periods. The system learns optimal execution windows for each chain and workflow type, reducing gas costs by up to 70% without sacrificing speed.'
        },
        {
            title: 'Automation ROI Tracking',
            description: 'Measure the financial impact of every workflow with detailed cost-benefit analysis. Track time savings, error reduction, and direct financial gains to demonstrate automation value across your organization.'
        }

    ],
    g2Comparison: {
        title: " TX SmartFlow delivers enterprise-grade reliability for financial automation",
        description:
            "",
        items: [
            { name: 'supported blockchains for workflow execution', value: '300+', color: 'text-black' },
            { name: 'workflow success rate SLA', value: '99.95%', color: 'text-black/40' },
            { name: 'average trigger-to-execution latency', value: '<25s', color: 'text-black/40' },
            { name: 'average gas cost reduction through AI optimization', value: '65%', color: 'text-black/40' }
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
            id: 'visual-workflow-builder',
            name: 'Visual Workflow Builder',
            href: '/suite/automation/workflows',
            description: 'Drag-and-drop interface for creating complex multi-chain automations without coding.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'ai-trigger-system',
            name: 'AI-Powered Trigger System',
            href: '/suite/automation/triggers',
            description: 'Set conditions based on market data, portfolio metrics, or custom AI signals.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'cross-chain-workflows',
            name: 'Cross-Chain Atomic Workflows',
            href: '/suite/automation/workflows',
            description: 'Execute coordinated actions across multiple blockchains with guaranteed consistency.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'smart-gas-optimization',
            name: 'Smart Gas Optimization',
            href: '/suite/automation/optimization',
            description: 'Automatically schedule and batch operations for maximum cost efficiency.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'connector-library',
            name: 'Pre-Built Connector Library',
            href: '/app-store',
            description: 'Access 200+ pre-integrated DeFi protocols, CEXs, and financial platforms.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'custom-modules',
            name: 'Custom JavaScript Modules',
            href: '/suite/automation/developers',
            description: 'Extend functionality with custom code for unique business logic and integrations.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'workflow-monitoring',
            name: 'Real-Time Monitoring Dashboard',
            href: '/suite/automation/monitoring',
            description: 'Track all active workflows with live execution status and performance analytics.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'error-recovery-workflows',
            name: 'Error Recovery & Fallback Logic',
            href: '/suite/automation/recovery',
            description: 'Automatically retry failed operations or execute contingency plans.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'multi-sig-workflows',
            name: 'Multi-Signature Approval Workflows',
            href: '/suite/automation/approvals',
            description: 'Integrate human approval gates for critical financial operations.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'audit-logging',
            name: 'Comprehensive Audit Logging',
            href: '/suite/automation/audit',
            description: 'Maintain immutable records of every workflow execution and decision.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'role-based-automation',
            name: 'Role-Based Access Controls',
            href: '/suite/automation/access',
            description: 'Manage team permissions for creating, modifying, and monitoring automations.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'api-architecture',
            name: 'API-First Architecture',
            href: '/suite/automation/api',
            description: 'Programmatically manage everything through REST and WebSocket APIs.',
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


