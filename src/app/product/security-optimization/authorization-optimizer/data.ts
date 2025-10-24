export const productivityProps = {
    heading: {
        main: "Autonomous permission ",
        highlighted: "management that scales"
    },
    description:
        "TX Authorization Optimizer automates the most complex aspects of access governance—from role engineering to permission cleanup—operating with precision across your entire digital ecosystem.",
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
            title: "AI-Optimized Role Engineering",
            description: "Our system continuously analyzes user activities, permission usage, and access patterns to recommend optimal role structures. The AI identifies permission redundancies, suggests role consolidations, and automates permission cleanup without disrupting legitimate access."
        },
        {
            title: "Automated Access Certification",
            description: "Eliminate manual access reviews with AI-driven certification campaigns. The system automatically identifies segregation of duties conflicts, excessive permissions, and dormant accounts, then routes for approval or automated remediation."
        },
        {
            title: "Smart Permission Lifecycle Management",
            description: "Automate the complete permission lifecycle from provisioning to deprovisioning. The system enforces least-privilege principles, automatically adjusts permissions based on role changes, and ensures instant access revocation upon role termination."
        }
    ],
    testimonial: {
        quote: "TX Authorization Optimizer reduced our access review time from 3 weeks to 2 days while identifying 40% redundant permissions. We've achieved perfect audit compliance for the first time.",
        author: "Daniel Kim",
        role: "CISO at Financial Services Group",
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
        main: "Enterprise-grade  ",
        highlighted: "authorization made simple",
    },
    description:
        "An intuitive platform for managing complex permission structures across multiple systems, chains, and business units with full visibility and control.",
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
            title: "Unified Access Governance Dashboard",
            description: "Monitor all authorization metrics from a single interface. Track permission usage, role effectiveness, compliance status, and access risk across all integrated systems and chains in real-time.",
            list: {
                items: []
            }
        }
    ],
    additionalFeatures: [
        {
            image: { src: "/assets/usability-2-desktop.webp" },
            title: 'Visual Policy Builder',
            description: 'Create and modify authorization policies without technical expertise. Use our drag-and-drop interface to define access rules, role hierarchies, and compliance requirements through an intuitive visual workflow.',
            list: {
                items: []
            }
        },
        {
            image: { src: "/assets/usability-3-desktop.webp" },
            title: 'Pre-Built Authorization Templates',
            description: 'Accelerate deployment with industry-specific frameworks:',
            list: {
                items: [
                    'Financial Services with SOX and regulatory compliance',
                    'Healthcare with HIPAA and patient data protection',
                    'Blockchain Operations with multi-sig and smart contract access',
                    'Enterprise IT with cloud and on-premise system governance'
                ]
            }
        },
        {
            image: { src: "/assets/usability-3-desktop.webp" },
            title: 'Comprehensive System Integration',
            description: 'Connect TX Authorization Optimizer to your entire technology stack:',
            list: {
                items: [
                    'Identity Providers (Okta, Azure AD, Ping)',
                    'Blockchain Networks and wallet systems',
                    'Cloud Platforms (AWS, GCP, Azure)',
                    'ERP and Business applications',
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
        main: "Intelligent authorization",
        highlighted: "analytics that prevent breaches",
    },
    description:
        "Move beyond basic access reporting to predictive insights that identify and mitigate access risks before they lead to security incidents.",
    outboundFeatures: [
        {
            title: 'Real-Time Permission Analytics',
            description: "Monitor permission usage patterns, role effectiveness, and access anomalies across all systems. Track permission sprawl, dormant access, and segregation of duties conflicts with enterprise-grade precision."
        },
        {
            title: 'Predictive Risk Intelligence',
            description: "Our AI models analyze access patterns, user behavior, and threat intelligence to forecast potential access risks. Receive proactive alerts for unusual permission usage and automatically implement protective measures."
        },
        {
            title: 'Smart Compliance Monitoring',
            description: 'Automatically track and enforce regulatory requirements across all jurisdictions. The system continuously monitors for compliance violations, generates required reports, and maintains audit-ready documentation.'
        },
        {
            title: 'Access Optimization Insights',
            description: 'Receive AI-driven recommendations for improving permission structures, reducing administrative overhead, and enhancing security posture. Optimize role designs, permission assignments, and certification workflows based on empirical usage data.'
        }

    ],
    g2Comparison: {
        title: "TX Authorization Optimizer delivers enterprise-grade performance:",
        description: "",
        items: [
            { name: 'integrated systems and blockchain networks', value: '300+', color: 'text-black' },
            { name: 'reduction in excessive permissions', value: '90%', color: 'text-black/40' },
            { name: 'access certification accuracy', value: '99.9%', color: 'text-black/40' },
            { name: 'real-time compliance monitoring across all regulations', value: '100%', color: 'text-black/40' }
        ],
    },
    sectionStyle: {
        backgroundColor: "white",
    },
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
            id: 'ai-role-engineering',
            name: 'AI Role Engineering',
            href: '/suite/helpdesk/inbox',
            description: "Automated analysis and optimization of permission structures and role designs.",
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'automated-access-certification',
            name: 'Automated Access Certification',
            href: '/suite/helpdesk/copilot',
            description: "AI-driven review campaigns with intelligent exception identification.",
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'smart-permission-analytics',
            name: 'Smart Permission Analytics',
            href: '/suite/helpdesk/tickets',
            description: "Real-time monitoring of permission usage and effectiveness across all systems.",
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'dynamic-access-control',
            name: 'Dynamic Access Control',
            href: '/suite/helpdesk/omnichannel',
            description: "Context-aware authorization based on user behavior, location, and risk factors.",
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'blockchain-multi-sig-optimization',
            name: 'Blockchain Multi-Sig Optimization',
            href: '/suite/helpdesk/help-center',
            description: "Intelligent management of blockchain authorization and signing authorities.",
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'segregation-duties-monitoring',
            name: "Segregation of Duties Monitoring",
            href: '/app-store',
            description: "Automatic detection and prevention of conflicting permission assignments."

            , image: '/assets/photo-1677442136019-21780ecad995.jpg'

        },
        {
            id: 'just-in-time-access-provisioning',
            name: 'Just-in-Time Access Provisioning',
            href: '/suite/helpdesk/reporting',
            description: "Temporary, context-based permission grants with automatic expiration."
            ,
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'user-behavior-analytics',
            name: 'User Behavior Analytics',
            href: '/suite/helpdesk/knowledge-hub',
            description: "AI-powered analysis of normal access patterns and anomaly detection.",
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'compliance-automation',
            name: 'Compliance Automation',
            href: '/suite/helpdesk/outbound',
            description: "Continuous monitoring and enforcement of regulatory requirements.",
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'api-access-governance',
            name: 'API Access Governance',
            href: '/suite/helpdesk/inbox',
            description: "Comprehensive management and monitoring of API permissions and usage."
            , image: '/assets/photo-1677442136019-21780ecad995.jpg'

        },
        {
            id: 'emergency-access-management',
            name: 'Emergency Access Management',
            href: '/suite/helpdesk/copilot',
            description: "Controlled break-glass procedures with full audit and automatic cleanup."
            , image: '/assets/photo-1552664730-d307ca884978.jpg'
            ,
        },
        {
            id: 'unified-audit-reporting',
            name: 'Unified Audit Reporting',
            href: '/suite/helpdesk/tickets',
            description: "Comprehensive, real-time reporting across all authorization activities.",
            image: '/assets/photo-1677442136019-21780ecad995.jpg'

        },
    ],
};