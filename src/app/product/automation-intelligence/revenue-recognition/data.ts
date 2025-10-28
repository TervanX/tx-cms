export const productivityProps = {
    heading: {
        main: "Autonomous revenue accounting",
        highlighted: "that ensures compliance",
    },
    description:
        "Revenue Recognition automates the most complex aspects of financial compliance—from multi-jurisdiction reporting to real-time revenue categorization—saving thousands of hours in manual accounting work.",
    images: {
        mobile: {
            src: "/assets/productivity-hero-mobile.webp",
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
            title: 'Visual Rule Builder',
            description: 'Create and modify revenue recognition rules without accounting expertise. Use our drag-and-drop interface to define recognition schedules, revenue allocation methods, and compliance thresholds',
        },
        {
            image: { src: "/assets/usability-2-desktop.webp" },
            title: 'Pre-Built Compliance Templates',
            description: 'Accelerate implementation with industry-specific templates:',
            list: {
                items: [
                    'SaaS & Subscription revenue models',
                    'Marketplace & Transaction fee structures',
                    'Token & Crypto revenue compliance',
                    'Multi-Element Arrangement allocations',
                ]
            }
        },
        {
            image: { src: "/assets/usability-2-desktop.webp" },
            title: 'Seamless System Integration',
            description: 'Connect Revenue Recognition to your existing financial stack:',
            list: {
                items: [
                    'ERP & Accounting Systems (QuickBooks, NetSuite, Xero)',
                    'Payment Processors (Stripe, PayPal, crypto payment rails)',
                    'Blockchain Analytics for on-chain revenue tracking',
                    'CRM & Billing Systems for contract data synchronization',
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
        main: "Intelligent revenue forecasting",
        highlighted: "and compliance monitoring",
    },
    description:
        "Move beyond basic accounting to predictive insights that drive revenue optimization and compliance confidence.",
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
            title: 'Real-Time Revenue Intelligence',
            description: `Monitor revenue performance across all streams with AI-curated insights. Track recognized vs. deferred revenue, identify recognition anomalies, and monitor compliance status across multiple accounting standards.`
        },
        {
            title: 'Predictive Revenue Forecasting',
            description: 'Our AI models analyze contract pipelines, usage patterns, and market conditions to forecast future revenue recognition. Anticipate revenue timing, identify potential compliance issues, and optimize revenue planning.'
        },
        {
            title: 'Automated Audit Trail Generation',
            description: 'Generate comprehensive audit trails for every revenue transaction. Track recognition decisions, contract modifications, and compliance determinations with full immutability and timestamp verification.'
        },
        {
            title: 'Smart Anomaly Detection',
            description: 'Automatically identify revenue recognition errors, compliance gaps, and unusual patterns. Receive proactive alerts for potential issues before they impact financial statements or regulatory filings.'
        }

    ],
    g2Comparison: {
        title: "Revenue Recognition delivers enterprise-grade accuracy and reliability",
        description:
            "",
        items: [
            { name: 'compliance with ASC 606/IFRS 15 standards', value: '100%', color: 'text-black' },
            { name: 'global tax jurisdictions supported', value: '50+', color: 'text-black/40' },
            { name: 'automated classification accuracy', value: '99.9%', color: 'text-black/40' },
            { name: 'multi-currency conversion and reporting', value: 'Real-time', color: 'text-black/40' }
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
            id: 'ai-revenue-classification',
            name: 'AI-Powered Revenue Classification',
            href: '/suite/revenue/classification',
            description: 'Automatically categorize revenue streams according to global accounting standards.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'automated-recognition-scheduling',
            name: 'Automated Recognition Scheduling',
            href: '/suite/revenue/scheduling',
            description: 'Intelligently apply recognition rules across contract terms and revenue types.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'multi-currency-revenue',
            name: 'Multi-Currency Revenue Management',
            href: '/suite/revenue/multi-currency',
            description: 'Handle crypto, fiat, and token-based revenue with automatic currency conversion.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'deferred-revenue-tracking',
            name: 'Deferred Revenue Tracking',
            href: '/suite/revenue/deferred',
            description: 'Automatically manage and recognize deferred revenue across multiple periods.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'tax-compliance-automation',
            name: 'Tax Compliance Automation',
            href: '/suite/revenue/tax',
            description: 'Apply correct tax treatments across jurisdictions and revenue types.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'real-time-reporting',
            name: 'Real-Time Reporting Dashboards',
            href: '/suite/revenue/reporting',
            description: 'Monitor revenue performance and compliance status with live updates.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'audit-trail-generation',
            name: 'Audit Trail Generation',
            href: '/suite/revenue/audit',
            description: 'Maintain comprehensive, immutable records of all recognition decisions.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'contract-modification-handling',
            name: 'Contract Modification Handling',
            href: '/suite/revenue/contracts',
            description: 'Automatically adjust recognition for contract changes and amendments.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'multi-element-arrangement',
            name: 'Multi-Element Arrangement Support',
            href: '/suite/revenue/multi-element',
            description: 'Allocate revenue across multiple performance obligations intelligently.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'regulatory-reporting',
            name: 'Regulatory Reporting Templates',
            href: '/suite/revenue/regulatory',
            description: 'Generate compliant reports for SEC, IFRS, and other regulatory bodies.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'revenue-forecasting',
            name: 'Revenue Forecasting Models',
            href: '/suite/revenue/forecasting',
            description: 'Predict future revenue recognition based on contracts and usage patterns.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'anomaly-detection',
            name: 'Anomaly Detection & Alerting',
            href: '/suite/revenue/anomaly-detection',
            description: 'Identify potential compliance issues and recognition errors proactively.',
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


