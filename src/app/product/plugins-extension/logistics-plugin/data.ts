export const productivityProps = {
    heading: {
        main: "Autonomous supply",
        highlighted: " chain operations",
    },
    description:
        "TX Logistics automates the most complex aspects of global supply chain management—from inventory optimization to cross-border compliance—operating with precision 24/7.",
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
            title: 'AI-Optimized Shipping & Routing',
            description: 'Our system continuously analyzes shipping costs, transit times, and capacity availability across all logistics providers. The AI dynamically selects optimal routes, carriers, and shipping methods to minimize costs and delays while maximizing reliability.'
        },
        {
            title: 'Automated Inventory Intelligence',
            description: 'Smart sensors and blockchain tracking automatically monitor inventory levels across all locations. The system predicts demand patterns, triggers replenishment orders, and optimizes stock levels to prevent both shortages and overstock situations.'
        },
        {
            title: 'Smart Customs & Compliance Automation',
            description: 'Seamlessly handle cross-border documentation, tariffs, and regulatory requirements. The AI automatically generates customs declarations, calculates duties, and ensures compliance across all jurisdictions without manual intervention.'
        }
    ],
    testimonial: {
        quote:
            "TX Logistics reduced our shipping costs by 35% and improved our delivery reliability to 99.8%. We now have complete visibility across our entire global supply chain.",
        author: "Robert Hayes",
        role: "Supply Chain Director at Global Manufacturing",
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
        main: "Enterprise-grade logistics ",
        highlighted: " made simple",
    },
    description:
        "An intuitive platform for managing complex supply chain operations across multiple geographies, transport modes, and compliance requirements.",
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
            title: 'Unified Supply Chain Dashboard',
            description: 'Monitor all logistics operations from a single interface. Track shipments, inventory levels, supplier performance, and compliance status across your entire global network in real-time',
        }
    ],
    additionalFeatures: [
        {
            image: { src: "/assets/usability-2-desktop.webp" },
            title: 'Visual Workflow Builder',
            description: 'Create and modify supply chain processes without technical expertise. Use our drag-and-drop interface to define routing rules, inventory parameters, and compliance workflows',
        },
        {
            image: { src: "/assets/usability-2-desktop.webp" },
            title: 'Pre-Built Logistics Templates',
            description: 'Accelerate deployment with industry-specific templates:',
            list: {
                items: [
                    'Perishable Goods with temperature monitoring',
                    'High-Value Assets with enhanced security tracking',
                    'Cross-Border E-commerce with customs automation',
                    'Manufacturing Supply with just-in-time inventory',
                ]
            }
        },
        {
            image: { src: "/assets/usability-2-desktop.webp" },
            title: 'Comprehensive Logistics Integration',
            description: 'Connect TX Logistics to your entire operational ecosystem:',
            list: {
                items: [
                    'Shipping Carriers and logistics providers',
                    'Warehouse Management systems',
                    'ERP and Inventory platforms',
                    'Customs and Regulatory authorities',
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
        main: "Intelligent supply chain analytics ",
        highlighted: "that drive efficiency",
    },
    description:
        "Move beyond basic tracking to predictive insights that optimize entire supply chain performance and reduce operational risks.",
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
            title: 'Real-Time Performance Monitoring',
            description: `Track key logistics metrics across all operations. Monitor on-time delivery rates, cost per shipment, inventory turnover, and supplier performance with enterprise-grade precision.`
        },
        {
            title: 'Predictive Demand Forecasting',
            description: 'Our AI models analyze historical patterns, market trends, and external factors to forecast demand fluctuations. Anticipate inventory needs, optimize stock levels, and prevent supply chain disruptions.'
        },
        {
            title: 'Smart Risk Intelligence',
            description: 'Automatically identify and monitor supply chain risks including geopolitical events, weather disruptions, carrier reliability issues, and compliance changes. Receive proactive alerts before issues impact operations.'
        },
        {
            title: 'Sustainability Analytics',
            description: 'Track and optimize your supply chain\'s environmental impact. Monitor carbon emissions, fuel consumption, and resource utilization to meet sustainability goals while maintaining operational efficiency.'
        }

    ],
    g2Comparison: {
        title: "TX Logistics delivers enterprise-grade supply chain management",
        description:
            "",
        items: [
            { name: ' integrated carriers and logistics providers', value: '300+', color: 'text-black' },
            { name: ' delivery reliability rate', value: '99.8%', color: 'text-black/40' },
            { name: ' average reduction in shipping costs', value: '35%', color: 'text-black/40' },
            { name: ' tracking across all transport modalities', value: 'Real-time', color: 'text-black/40' }
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
            id: 'ai-optimized-routing',
            name: 'AI-Optimized Routing',
            href: '/suite/logistics/routing',
            description: 'Dynamically select optimal shipping routes and carriers based on cost and reliability.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'blockchain-provenance-tracking',
            name: 'Blockchain Provenance Tracking',
            href: '/suite/logistics/provenance-tracking',
            description: 'Immutable record of product journey from origin to end-consumer.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'automated-inventory-management',
            name: 'Automated Inventory Management',
            href: '/suite/logistics/inventory-management',
            description: 'Smart sensors and AI predict demand and trigger replenishment automatically.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'cross-border-compliance-automation',
            name: 'Cross-Border Compliance Automation',
            href: '/suite/logistics/compliance-automation',
            description: 'Handle customs documentation, tariffs, and regulatory requirements seamlessly.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'real-time-shipment-monitoring',
            name: 'Real-Time Shipment Monitoring',
            href: '/suite/logistics/shipment-monitoring',
            description: 'Track location, condition, and ETA for all shipments across all carriers.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'supplier-performance-analytics',
            name: 'Supplier Performance Analytics',
            href: '/suite/logistics/supplier-analytics',
            description: 'Monitor and score supplier reliability, quality, and compliance.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'smart-contract-payments',
            name: 'Smart Contract Payments',
            href: '/suite/logistics/smart-payments',
            description: 'Automate payments upon delivery confirmation and compliance verification.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'temperature-condition-monitoring',
            name: 'Temperature & Condition Monitoring',
            href: '/suite/logistics/condition-monitoring',
            description: 'Track environmental conditions for sensitive goods throughout transit.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'returns-management-automation',
            name: 'Returns Management Automation',
            href: '/suite/logistics/returns-management',
            description: 'Streamline reverse logistics with automated authorization and tracking.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'warehouse-optimization',
            name: 'Warehouse Optimization',
            href: '/suite/logistics/warehouse-optimization',
            description: 'AI-driven slotting, picking, and storage optimization across facilities.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'carbon-footprint-tracking',
            name: 'Carbon Footprint Tracking',
            href: '/suite/logistics/carbon-tracking',
            description: 'Monitor and report environmental impact across supply chain operations.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'api-first-integration',
            name: 'API-First Integration',
            href: '/suite/logistics/api-integration',
            description: 'Connect with existing ERP, WMS, and logistics provider systems.',
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