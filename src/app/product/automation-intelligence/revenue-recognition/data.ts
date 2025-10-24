export const productivityProps = {
    heading: {
        main: "Autonomous revenue accounting",
        highlighted: "that ensures compliance",
    },
    description:
        "Revenue Recognition automates the most complex aspects of financial compliance—from multi-jurisdiction reporting to real-time revenue categorization—saving thousands of hours in manual accounting work.",
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
            title: 'AI-Powered Revenue Categorization',
            description: 'Our system automatically classifies revenue streams according to ASC 606, IFRS 15, and other global standards. The AI learns your business model and applies appropriate recognition rules across subscription, usage-based, and token-based revenue models.'
        },
        {
            title: 'Automated Deferred Revenue Management',
            description: 'Intelligently track and recognize deferred revenue across multiple periods and currencies. The system automatically calculates recognition schedules, handles contract modifications, and ensures compliance with evolving accounting standards.'
        },
        {
            title: 'Multi-Jurisdiction Tax Compliance',
            description: 'Automatically apply tax rules across different jurisdictions and revenue types. The system handles VAT, GST, sales tax, and crypto-specific tax treatments while generating compliant reports for each regulatory body.'
        }
    ],
    testimonial: {
        quote:
            "Revenue Recognition cut our monthly close process from 5 days to 6 hours while providing the audit trails our international regulators require. It's transformed how we manage global compliance",
        author: "Jennifer Martinez",
        role: "Global Controller at Web3 Innovations",
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
        main: "Enterprise-grade compliance ",
        highlighted: " made simple",
    },
    description:
        "An intuitive interface for managing complex revenue accounting across multiple currencies, business models, and regulatory requirements.",
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
            title: 'Unified Revenue Dashboard',
            description: 'Monitor all revenue streams—crypto, fiat, subscription, and transaction-based—from a single interface. Track recognized revenue, deferred balances, and compliance status in real-time across all business units.',
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


