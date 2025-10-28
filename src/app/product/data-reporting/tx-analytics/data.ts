export const productivityProps = {
    heading: {
        main: "Autonomous analytics",
        highlighted: "that work 24/7",
    },
    description:
        "TX Analytics automates the most complex aspects of data analysis—from cross-chain data aggregation to predictive insights—delivering intelligence with unprecedented speed and precision.",
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
            title: 'AI-Optimized Data Correlation',
            description: 'Our system automatically ingests and correlates data across 300+ blockchains and traditional business systems, identifying hidden patterns and relationships without manual configuration. The AI continuously learns from new data to enhance insight quality.'
        },
        {
            title: 'Automated Insight Generation',
            description: 'Continuously analyze data streams to surface actionable intelligence. The system automatically detects trends, anomalies, and opportunities, delivering proactive recommendations to relevant stakeholders.'
        },
        {
            title: 'Smart Report Distribution',
            description: 'Automate the entire analytics lifecycle from data collection to stakeholder delivery. The system generates customized reports, schedules distributions, and ensures teams receive timely, relevant intelligence.'
        }
    ],
    testimonial: {
        quote:
            "TX Analytics reduced our monthly reporting cycle from 10 days to 2 hours while uncovering $4.5M in operational efficiencies. The AI-driven insights have fundamentally transformed our decision-making process.",
        author: "Sarah Mitchell",
        role: "Chief Analytics Officer at Digital Finance Group",
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
        main: "Enterprise-grade analytics ",
        highlighted: " made accessible",
    },
    description:
        "An intuitive platform that empowers every team—from executives to analysts—to explore data, build dashboards, and derive insights without technical expertise.",
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
            title: 'Unified Analytics Dashboard',
            description: 'Monitor all key metrics and performance indicators from a single, customizable interface. Track cross-chain transactions, treasury performance, user behavior, and operational efficiency with real-time updates',
        }
    ],
    additionalFeatures: [
        {
            image: { src: "/assets/usability-2-desktop.webp" },
            title: 'Visual Query Builder',
            description: 'Create complex data analyses without writing code. Use our drag-and-drop interface to join datasets, apply filters, and build sophisticated analytical models with intuitive visual tools',
        },
        {
            image: { src: "/assets/usability-2-desktop.webp" },
            title: 'Pre-Built Analytics Templates',
            description: 'Accelerate deployment with industry-specific templates:',
            list: {
                items: [
                    'Multi-Chain Treasury Analytics with real-time asset tracking',
                    'DeFi Protocol Performance with TVL and yield analysis',
                    'Customer Behavior Intelligence with segmentation insights',
                    'Operational Efficiency with cost and performance optimization',
                ]
            }
        },
        {
            image: { src: "/assets/usability-2-desktop.webp" },
            title: 'Comprehensive Data Integration',
            description: 'Connect TX Analytics to your entire data ecosystem:',
            list: {
                items: [
                    '300+ Blockchain Networks with real-time on-chain data',
                    'Business Applications (ERP, CRM, accounting systems)',
                    'API Endpoints and external data feeds',
                    'Database Systems and data warehouses',
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
        main: "Predictive intelligence ",
        highlighted: "that anticipates market movements",
    },
    description:
        "Move beyond descriptive analytics to prescriptive insights that drive proactive decision-making and strategic advantage.",
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
            title: 'Real-Time Performance Intelligence',
            description: `Monitor business metrics across all operations with sub-second latency. Track KPIs, treasury health, market position, and operational efficiency with enterprise-grade precision.`
        },
        {
            title: 'Predictive Trend Forecasting',
            description: 'Our AI models analyze historical patterns, market signals, and on-chain metrics to forecast future trends. Anticipate market movements, user behavior, and operational demands with confidence.'
        },
        {
            title: 'Anomaly Detection & Alerting',
            description: 'Automatically identify unusual patterns and potential issues across all data streams. Receive instant alerts for security threats, operational anomalies, and emerging opportunities.'
        },
        {
            title: 'Optimization Intelligence',
            description: 'Receive AI-driven recommendations for improving performance, reducing costs, and capitalizing on opportunities. The system continuously analyzes operations to identify optimization potential across all business functions.'
        }

    ],
    g2Comparison: {
        title: "TX Analytics delivers enterprise-grade performance",
        description:
            "",
        items: [
            { name: ' integrated blockchains and data sources', value: '300+', color: 'text-black' },
            { name: ' query response time for billion-row datasets', value: '<3s', color: 'text-black/40' },
            { name: ' data accuracy and completeness', value: '99.9%', color: 'text-black/40' },
            { name: ' streaming analytics across all connected systems', value: 'Real-time', color: 'text-black/40' }
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
            id: 'ai-powered-data-processing',
            name: 'AI-Powered Data Processing',
            href: '/suite/analytics/data-processing',
            description: 'Automated ingestion, cleaning, and correlation of diverse data sources.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'predictive-modeling-engine',
            name: 'Predictive Modeling Engine',
            href: '/suite/analytics/predictive-modeling',
            description: 'Advanced machine learning for forecasting and trend analysis.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'real-time-streaming-analytics',
            name: 'Real-Time Streaming Analytics',
            href: '/suite/analytics/streaming-analytics',
            description: 'Continuous processing of live data streams with instant insights.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'custom-dashboard-builder',
            name: 'Custom Dashboard Builder',
            href: '/suite/analytics/dashboard-builder',
            description: 'Drag-and-drop interface for creating personalized analytics views.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'automated-report-generation',
            name: 'Automated Report Generation',
            href: '/suite/analytics/report-generation',
            description: 'Scheduled and triggered reporting with intelligent distribution.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'cross-chain-intelligence',
            name: 'Cross-Chain Intelligence',
            href: '/suite/analytics/cross-chain-intelligence',
            description: 'Unified analysis across 300+ blockchain networks and protocols.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'natural-language-querying',
            name: 'Natural Language Querying',
            href: '/suite/analytics/natural-language',
            description: 'Ask questions in plain English and receive instant, visualized answers.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'collaborative-workspaces',
            name: 'Collaborative Workspaces',
            href: '/suite/analytics/collaborative-workspaces',
            description: 'Shared analytics environments with version control and commenting.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'advanced-data-visualization',
            name: 'Advanced Data Visualization',
            href: '/suite/analytics/data-visualization',
            description: 'Rich library of charts, graphs, and interactive visualizations.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'api-first-architecture',
            name: 'API-First Architecture',
            href: '/suite/analytics/api-architecture',
            description: 'Comprehensive APIs for custom integrations and applications.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'enterprise-security-governance',
            name: 'Enterprise Security & Governance',
            href: '/suite/analytics/security-governance',
            description: 'Role-based access, encryption, and compliance controls.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'mobile-analytics-suite',
            name: 'Mobile Analytics Suite',
            href: '/suite/analytics/mobile-suite',
            description: 'Full-featured mobile access to dashboards and reports.',
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