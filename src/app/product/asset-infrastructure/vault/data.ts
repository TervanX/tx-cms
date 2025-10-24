export const productivityProps = {
    heading: {
        main: "Autonomous treasury operations ",
        highlighted: "with ironclad security"
    },
    description:
        "TX Vault automates the most critical aspects of digital asset management—from multi-signature approvals to cross-chain settlements—while maintaining institutional-grade security standards.",
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
            title: "MPC-Enhanced Multi-Party Computation",
            description: "Replace vulnerable private keys with distributed key shares using Threshold Signature Scheme technology. Our AI continuously monitors access patterns to detect anomalies, ensuring assets remain secure while enabling rapid, authorized transactions without single points of failure."
        },
        {
            title: "Policy-Driven Transaction Workflows",
            description: "Configure complex approval hierarchies that match your organizational structure. Set transaction limits, time-based restrictions, and counterparty controls that automatically enforce compliance while streamlining legitimate operations."
        },
        {
            title: "Automated Settlement & Sweeping",
            description: "Eliminate manual treasury management with smart rules for capital allocation. Automatically sweep funds from hot wallets to cold storage, execute scheduled payments, and rebalance portfolios across chains and protocols based on predefined parameters."
        }
    ],
    testimonial: {
        quote: "TX Vault reduced our treasury management overhead by 70% while providing the audit trails our regulators require. It's the foundation of our digital asset operations.",
        author: "David Kim",
        role: "CFO of Apex Digital Holdings",
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
        main: "Enterprise-grade security made ",
        highlighted: "operational",
    },
    description:
        "An intuitive interface for managing complex treasury operations across hundreds of chains, with full visibility and control over all digital assets.",
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
            title: "Unified Multi-Chain Dashboard",
            description: "Monitor and manage all assets across 300+ blockchains from a single interface. Track balances, transaction history, and wallet health without switching between explorers or platforms.",
            list: {
                items: []
            }
        }
    ],
    additionalFeatures: [
        {
            image: { src: "/assets/usability-2-desktop.webp" },
            title: 'Granular Access Controls & Role Management',
            description: 'Define precise permissions for team members with role-based access. From view-only observers to transaction approvers and policy administrators, maintain security while enabling operational efficiency.',
            list: {
                items: []
            }
        },
        {
            image: { src: "/assets/usability-3-desktop.webp" },
            title: 'Pre-Built Policy Templates',
            description: 'Accelerate deployment with customizable security templates for common use cases:',
            list: {
                items: [
                    'Daily Operations for routine transactions',
                    'Capital Preservation for long-term storage',
                    'DeFi Participation for protocol interactions',
                    'Regulatory Compliance for audit requirements'
                ]
            }
        },
        {
            image: { src: "/assets/usability-3-desktop.webp" },
            title: 'Comprehensive Integration Ecosystem',
            description: 'Connect TX Vault to your existing financial infrastructure:',
            list: {
                items: [
                    'ERP & Accounting Systems for real-time balance synchronization',
                    'Compliance Platforms for automated reporting',
                    'Monitoring Tools for security alert aggregation',
                    'API & Webhook Support for custom workflow automation',
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
        main: "Transform treasury management",
        highlighted: "into strategic advantage",
    },
    description:
        "Move beyond basic balance tracking to predictive intelligence that optimizes capital allocation and mitigates risk across your entire digital asset portfolio.",
    outboundFeatures: [
        {
            title: 'Real-Time Treasury Health Monitoring',
            description: "Gain immediate visibility into wallet balances, transaction status, and security posture across all connected chains. Monitor exposure concentrations and liquidity positions with institutional-grade precision."
        },
        {
            title: 'Predictive Risk Assessment & Alerting',
            description: "Our AI models analyze transaction patterns, counterparty risk, and market conditions to forecast potential threats. Receive proactive alerts for unusual activity, concentration risks, or compliance violations before they impact your operations."
        },
        {
            title: 'Smart Capital Optimization Analytics',
            description: 'Identify inefficient capital allocation across wallets and chains. Receive AI-driven recommendations for consolidating positions, reducing gas costs, and optimizing yield opportunities while maintaining required liquidity buffers.'
        },
        {
            title: 'Comprehensive Audit Trail Generation',
            description: 'Automatically generate detailed reports for internal audits, regulatory compliance, and stakeholder reporting. Track every transaction, policy change, and access attempt with immutable, timestamped records.'
        }

    ],
    g2Comparison: {
        title: "TX Vault delivers the security and reliability demanded by institutional users:",
        description: "",
        items: [
            { name: 'supported blockchains and assets', value: '300+', color: 'text-black' },
            { name: 'platform availability SLA', value: '99.99%', color: 'text-black/40' },
            { name: 'insured losses since launch', value: '$0', color: 'text-black/40' },
            { name: 'transaction signing latency', value: '<2s', color: 'text-black/40' }
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
            id: 'mpc-tss-technology',
            name: 'MPC-TSS Technology',
            href: '/suite/helpdesk/inbox',
            description: "Eliminate single points of failure with distributed key generation and signing.",
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'custom-approval-workflows',
            name: 'Custom Approval Workflows',
            href: '/suite/helpdesk/copilot',
            description: "Design multi-signature policies with hierarchical approvals and spending limits.",
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'automated-cold-storage-management',
            name: 'Automated Cold Storage Management',
            href: '/suite/helpdesk/tickets',
            description: "Schedule regular sweeps to cold wallets with customizable thresholds and timing.",
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'cross-chain-balance-aggregation',
            name: 'Cross-Chain Balance Aggregation',
            href: '/suite/helpdesk/omnichannel',
            description: "View consolidated balances and transactions across all connected wallets and chains.",
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'real-time-transaction-monitoring',
            name: 'Real-Time Transaction Monitoring',
            href: '/suite/helpdesk/help-center',
            description: "Track all inbound and outbound transfers with instant notifications and status updates.",
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'smart-contract-interaction-controls',
            name: "Smart Contract Interaction Controls",
            href: '/app-store',
            description: "Whitelist approved DeFi protocols and set limits for interactions with smart contracts.",
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'batch-transaction-processing',
            name: 'Batch Transaction Processing',
            href: '/suite/helpdesk/reporting',
            description: "Execute multiple payments and transfers in single, gas-optimized operations.",
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'comprehensive-audit-logging',
            name: 'Comprehensive Audit Logging',
            href: '/suite/helpdesk/knowledge-hub',
            description: "Maintain immutable records of all vault activities, access attempts, and policy changes.",
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'regulatory-reporting-templates',
            name: 'Regulatory Reporting Templates',
            href: '/suite/helpdesk/outbound',
            description: "Generate standardized reports for KYC/AML, financial auditing, and tax compliance.",
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'disaster-recovery-protocols',
            name: 'Disaster Recovery Protocols',
            href: '/suite/helpdesk/inbox',
            description: "Automated key share backup and recovery procedures ensure business continuity.",
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'integration-ready-apis',
            name: 'Integration Ready APIs',
            href: '/suite/helpdesk/copilot',
            description: "RESTful APIs and webhooks for seamless connection to existing systems and workflows.",
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: '24-7-security-monitoring',
            name: '24/7 Security Monitoring',
            href: '/suite/helpdesk/tickets',
            description: "Continuous threat detection and anomaly monitoring with immediate alert escalation.",
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
    ],
};