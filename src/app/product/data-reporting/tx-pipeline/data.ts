export const productivityProps = {
    heading: {
        main: "Autonomous data operations",
        highlighted: "that scale",
    },
    description:
        "TX Pipeline automates the most complex aspects of data engineering—from schema mapping to quality validation—operating reliably across all your data sources.",
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
            title: 'AI-Optimized Data Ingestion',
            description: 'Our system automatically connects to 300+ blockchains and thousands of business applications, intelligently handling API rate limits, authentication, and schema discovery without manual configuration.'
        },
        {
            title: 'Smart Data Transformation',
            description: 'Automatically clean, enrich, and standardize data using AI-powered transformation rules. The system handles complex data types, nested JSON structures, and blockchain-specific data formats with zero coding.'
        },
        {
            title: 'Automated Pipeline Orchestration',
            description: 'Manage complex data dependencies and scheduling with intelligent workflow automation. The system handles error recovery, retry logic, and data freshness guarantees without operational overhead.'
        }
    ],
    testimonial: {
        quote:
            "TX Pipeline reduced our data integration time from 3 months to 2 weeks and cut our data engineering costs by 70%. We now have real-time data across all our blockchain and business systems.",
        author: "David Park",
        role: "Head of Data Engineering at FinTech Innovations",
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
        main: "Enterprise-grade data engineering ",
        highlighted: " made simple",
    },
    description:
        "An intuitive platform for building, monitoring, and managing data pipelines across your entire organization with zero infrastructure management.",
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
            title: 'Unified Pipeline Dashboard',
            description: 'Monitor all data pipelines from a single interface. Track data freshness, pipeline health, data quality metrics, and performance indicators across all connected systems',
        }
    ],
    additionalFeatures: [
        {
            image: { src: "/assets/usability-2-desktop.webp" },
            title: 'Visual Pipeline Builder',
            description: 'Create and modify complex data workflows without coding. Use our drag-and-drop interface to define data sources, transformation logic, and destination targets through an intuitive visual workflow',
        },
        {
            image: { src: "/assets/usability-2-desktop.webp" },
            title: 'Pre-Built Connector Library',
            description: 'Accelerate deployment with 500+ pre-built connectors:',
            list: {
                items: [
                    'Blockchain Data from 300+ chains and layer 2s',
                    'Business Applications (Salesforce, Shopify, NetSuite)',
                    'Database Systems (PostgreSQL, MongoDB, Snowflake)',
                    'API Endpoints and custom data sources',
                ]
            }
        },
        {
            image: { src: "/assets/usability-2-desktop.webp" },
            title: 'Comprehensive Data Ecosystem Integration',
            description: 'Connect TX Pipeline to your entire data stack:',
            list: {
                items: [
                    'Data Warehouses and lakehouses',
                    'Analytics Platforms and BI tools',
                    'Machine Learning platforms',
                    'Real-time Streaming applications',
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
        main: "Intelligent pipeline analytics ",
        highlighted: "that ensure data trust",
    },
    description:
        "Move beyond basic pipeline monitoring to predictive insights that prevent issues and optimize data flow.",
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
            title: 'Real-Time Data Quality Monitoring',
            description: `Track data completeness, accuracy, and freshness across all pipelines. Monitor schema changes, data anomalies, and quality metrics with enterprise-grade precision.`
        },
        {
            title: 'Predictive Pipeline Health',
            description: 'Our AI models analyze pipeline performance, resource utilization, and data patterns to forecast potential issues. Receive proactive alerts for capacity constraints, performance degradation, and quality risks.'
        },
        {
            title: 'Smart Cost Optimization',
            description: 'Automatically optimize data processing and storage costs across all pipelines. The system recommends cost-effective processing strategies, storage tiers, and compression techniques without compromising performance.'
        },
        {
            title: 'Data Lineage & Impact Analysis',
            description: 'Automatically track data lineage from source to consumption. Understand data dependencies, impact of changes, and compliance requirements with full visibility across your data ecosystem.'
        }

    ],
    g2Comparison: {
        title: "TX Pipeline delivers enterprise-grade data integration",
        description:
            "",
        items: [
            { name: ' integrated blockchains and data sources', value: '300+', color: 'text-black' },
            { name: ' pipeline reliability and uptime', value: '99.9%', color: 'text-black/40' },
            { name: ' from source to analytics readiness', value: '<5m', color: 'text-black/40' },
            { name: ' reduction in data engineering overhead', value: '90%', color: 'text-black/40' }
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
            id: 'ai-powered-data-mapping',
            name: 'AI-Powered Data Mapping',
            href: '/suite/pipeline/data-mapping',
            description: 'Automated schema discovery and intelligent field mapping across sources.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'smart-data-transformation',
            name: 'Smart Data Transformation',
            href: '/suite/pipeline/data-transformation',
            description: 'Visual transformation builder with 200+ pre-built data cleansing functions.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'real-time-streaming',
            name: 'Real-Time Streaming',
            href: '/suite/pipeline/real-time-streaming',
            description: 'Continuous data ingestion with sub-second latency for time-sensitive use cases.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'change-data-capture',
            name: 'Change Data Capture',
            href: '/suite/pipeline/change-data-capture',
            description: 'Automatic detection and processing of incremental data changes.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'data-quality-framework',
            name: 'Data Quality Framework',
            href: '/suite/pipeline/data-quality',
            description: 'Built-in data validation, anomaly detection, and quality scoring.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'pipeline-version-control',
            name: 'Pipeline Version Control',
            href: '/suite/pipeline/version-control',
            description: 'Complete audit trail of pipeline changes and rollback capabilities.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'enterprise-security',
            name: 'Enterprise Security',
            href: '/suite/pipeline/security',
            description: 'End-to-end encryption, masking, and compliance controls.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'scalable-architecture',
            name: 'Scalable Architecture',
            href: '/suite/pipeline/scalable-architecture',
            description: 'Serverless design that automatically scales to handle data volume spikes.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'collaborative-development',
            name: 'Collaborative Development',
            href: '/suite/pipeline/collaborative-development',
            description: 'Team workspaces with role-based access and development environments.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'api-first-design',
            name: 'API-First Design',
            href: '/suite/pipeline/api-design',
            description: 'Comprehensive REST APIs for custom integrations and automation.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'monitoring-alerting',
            name: 'Monitoring & Alerting',
            href: '/suite/pipeline/monitoring-alerting',
            description: 'Real-time pipeline monitoring with customizable alerting rules.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'cost-management',
            name: 'Cost Management',
            href: '/suite/pipeline/cost-management',
            description: 'Detailed cost tracking and optimization recommendations.',
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