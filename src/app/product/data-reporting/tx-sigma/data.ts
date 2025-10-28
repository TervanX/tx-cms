export const productivityProps = {
    heading: {
        main: "Autonomous analytics ",
        highlighted: "that work 24/7",
    },
    description:
        "TX Sigma automates the most complex aspects of data analysis—from ETL processes to predictive modeling—delivering insights with unprecedented speed and accuracy.",
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
            title: 'AI-Optimized Data Processing',
            description: 'Our system automatically ingests, cleans, and structures data from 300+ blockchains and traditional business systems. The AI handles schema mapping, data normalization, and quality assurance without manual intervention.'
        },
        {
            title: 'Automated Insight Generation',
            description: 'Continuously analyze data patterns to surface actionable insights. The system automatically identifies trends, anomalies, and opportunities, delivering proactive recommendations to relevant teams.'
        },
        {
            title: 'Smart Report Distribution',
            description: 'Automate the entire reporting lifecycle from data collection to distribution. The system generates customized reports, schedules deliveries, and ensures stakeholders receive timely, relevant intelligence.'
        }
    ],
    testimonial: {
        quote:
            "TX Sigma reduced our monthly reporting cycle from 2 weeks to 4 hours while uncovering $3.2M in operational efficiencies we had completely missed.",
        author: "Rachel Chen",
        role: "Chief Data Officer at Digital Asset Group",
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
        "An intuitive platform that empowers every team to explore data, build dashboards, and derive insights without technical expertise.",
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
            description: 'Monitor all key metrics and performance indicators from a single interface. Customize views, build cross-functional dashboards, and drill down into details with intuitive navigation',
        }
    ],
    additionalFeatures: [
        {
            image: { src: "/assets/usability-2-desktop.webp" },
            title: 'Visual Query Builder',
            description: 'Create complex data queries and analysis without writing code. Use our drag-and-drop interface to join datasets, apply filters, and build sophisticated analytics models',
        },
        {
            image: { src: "/assets/usability-2-desktop.webp" },
            title: 'Pre-Built Analytics Templates',
            description: 'Accelerate deployment with industry-specific templates:',
            list: {
                items: [
                    'DeFi Protocol Analytics with TVL and usage metrics',
                    'Treasury Management with cash flow and risk analysis',
                    'Customer Behavior with segmentation and journey mapping',
                    'Operational Efficiency with cost and performance tracking',
                ]
            }
        },
        {
            image: { src: "/assets/usability-2-desktop.webp" },
            title: 'Comprehensive Data Integration',
            description: 'Connect TX Sigma to your entire data ecosystem:',
            list: {
                items: [
                    'Blockchain Networks and on-chain data sources',
                    'Business Applications and ERP systems',
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
        highlighted: "that anticipates opportunities",
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
            description: `Monitor business metrics across all operations with sub-second latency. Track KPIs, operational efficiency, and market position with enterprise-grade precision.`
        },
        {
            title: 'Predictive Trend Forecasting',
            description: 'Our AI models analyze historical patterns, market signals, and external factors to forecast future trends. Anticipate market movements, customer behavior, and operational demands with confidence.'
        },
        {
            title: 'Anomaly Detection & Alerting',
            description: 'Automatically identify unusual patterns and potential issues across all data streams. Receive instant alerts for operational anomalies, security threats, and emerging opportunities.'
        },
        {
            title: 'Optimization Intelligence',
            description: 'Receive AI-driven recommendations for improving performance, reducing costs, and capitalizing on opportunities. The system continuously analyzes operations to identify optimization potential.'
        }

    ],
    g2Comparison: {
        title: "TX Sigma delivers enterprise-grade analytics performance",
        description:
            "",
        items: [
            { name: ' integrated data sources and blockchains', value: '300+', color: 'text-black' },
            { name: ' query response time for billion-row datasets', value: '<5s', color: 'text-black/40' },
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
            href: '/suite/sigma/data-processing',
            description: 'Automated ingestion, cleaning, and structuring of diverse data sources.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'predictive-modeling-engine',
            name: 'Predictive Modeling Engine',
            href: '/suite/sigma/predictive-modeling',
            description: 'Advanced machine learning for forecasting and trend analysis.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'real-time-streaming-analytics',
            name: 'Real-Time Streaming Analytics',
            href: '/suite/sigma/streaming-analytics',
            description: 'Continuous processing of live data streams with instant insights.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'custom-dashboard-builder',
            name: 'Custom Dashboard Builder',
            href: '/suite/sigma/dashboard-builder',
            description: 'Drag-and-drop interface for creating personalized analytics views.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'automated-report-generation',
            name: 'Automated Report Generation',
            href: '/suite/sigma/report-generation',
            description: 'Scheduled and triggered reporting with intelligent distribution.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'cross-chain-analytics',
            name: 'Cross-Chain Analytics',
            href: '/suite/sigma/cross-chain-analytics',
            description: 'Unified analysis across 300+ blockchain networks.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'natural-language-querying',
            name: 'Natural Language Querying',
            href: '/suite/sigma/natural-language',
            description: 'Ask questions in plain English and receive instant answers.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'collaborative-workspaces',
            name: 'Collaborative Workspaces',
            href: '/suite/sigma/collaborative-workspaces',
            description: 'Shared analytics environments with version control and commenting.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'data-visualization-library',
            name: 'Data Visualization Library',
            href: '/suite/sigma/visualization-library',
            description: 'Rich library of charts, graphs, and interactive visualizations.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'api-first-architecture',
            name: 'API-First Architecture',
            href: '/suite/sigma/api-architecture',
            description: 'Comprehensive APIs for custom integrations and applications.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'enterprise-security',
            name: 'Enterprise Security',
            href: '/suite/sigma/security',
            description: 'Role-based access, encryption, and compliance controls.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'mobile-analytics',
            name: 'Mobile Analytics',
            href: '/suite/sigma/mobile-analytics',
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