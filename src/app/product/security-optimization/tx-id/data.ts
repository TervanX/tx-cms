export const productivityProps = {
    heading: {
        main: "Autonomous identity verification that",
        highlighted: "scales"
    },
    description:
        "TX ID automates the most complex aspects of digital identity—from biometric verification to credential issuance—operating with precision across global jurisdictions.",
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
            title: "AI-Powered Identity Verification",
            description: "Our system uses advanced computer vision and machine learning to verify government IDs, biometric data, and liveness detection in seconds. The AI continuously learns from verification patterns to improve accuracy and prevent fraud."
        },
        {
            title: "Automated Compliance Orchestration",
            description: "Seamlessly handle KYC, KYB, and AML requirements across multiple jurisdictions. The system automatically applies regional regulations, screens against global watchlists, and generates compliant audit trails without manual intervention."
        },
        {
            title: "Smart Credential Management",
            description: "Issue, verify, and revoke verifiable credentials across 300+ chains and applications. The system manages credential lifecycles, ensures cryptographic integrity, and enables selective disclosure for privacy-preserving verification."
        }
    ],
    testimonial: {
        quote: "TX ID reduced our customer onboarding from 48 hours to 3 minutes while maintaining 99.9% verification accuracy. We've expanded to 15 new markets without adding compliance staff.",
        author: "Lisa Wang",
        role: "Head of Compliance at Global FinTech",
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
        main: "Enterprise-grade identity made ",
        highlighted: "frictionless",
    },
    description:
        "An intuitive platform for managing digital identities across web2 and web3 environments with privacy-by-design architecture.",
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
            title: "Unified Identity Dashboard",
            description: "Monitor all identity operations from a single interface. Track verification status, credential usage, compliance metrics, and access patterns across all integrated systems and applications.",
            list: {
                items: []
            }
        }
    ],
    additionalFeatures: [
        {
            image: { src: "/assets/usability-2-desktop.webp" },
            title: 'Visual Policy Builder',
            description: 'Create and modify identity verification rules without technical expertise. Use our drag-and-drop interface to define verification workflows, compliance requirements, and access policies.',
            list: {
                items: []
            }
        },
        {
            image: { src: "/assets/usability-3-desktop.webp" },
            title: 'Pre-Built Identity Templates',
            description: 'Accelerate deployment with industry-specific frameworks:',
            list: {
                items: [
                    'Financial Services with KYC/AML compliance',
                    'Healthcare with HIPAA-compliant credentialing',
                    'Gaming & Metaverse with portable reputations',
                    'Enterprise Access with unified login credentials'
                ]
            }
        },
        {
            image: { src: "/assets/usability-3-desktop.webp" },
            title: 'Comprehensive Ecosystem Integration',
            description: 'Connect TX ID to your entire technology stack:',
            list: {
                items: [
                    'Identity Providers and SSO systems',
                    'Blockchain Networks for decentralized identifiers',
                    'Compliance Databases and watchlist services',
                    'Application Ecosystems across web2 and web3',
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
        main: "Intelligent identity analytics that build trust",
        highlighted: "",
    },
    description:
        "Move beyond basic verification to predictive insights that enhance security, improve user experience, and prevent identity fraud.",
    outboundFeatures: [
        {
            title: 'Real-Time Fraud Detection',
            description: "Monitor identity verification patterns and credential usage across all platforms. Detect synthetic identities, credential stuffing attacks, and unusual verification patterns with enterprise-grade precision."
        },
        {
            title: 'Predictive Risk Scoring',
            description: "Our AI models analyze verification behavior, credential history, and threat intelligence to forecast identity risks. Receive proactive alerts for potential fraud and automatically implement additional verification measures."
        },
        {
            title: 'Privacy-Preserving Analytics',
            description: 'Gain insights into identity verification patterns and user behavior while maintaining full privacy compliance. The system provides aggregated analytics without exposing personal identifiable information.'
        },
        {
            title: 'Compliance Performance Intelligence',
            description: 'Monitor and optimize your compliance program effectiveness. Track verification success rates, false positive ratios, regulatory adherence, and audit outcomes across all jurisdictions.'
        }

    ],
    g2Comparison: {
        title: "TX ID delivers enterprise-grade identity performance:",
        description: "",
        items: [
            { name: 'integrated chains and applications', value: '300+', color: 'text-black' },
            { name: 'verification accuracy rate', value: '99.9%', color: 'text-black/40' },
            { name: 'average verification time', value: '<60', color: 'text-black/40' },
            { name: 'regulatory fines across compliant deployments', value: '$0', color: 'text-black/40' }
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
            id: 'biometric-verification',
            name: 'Biometric Verification',
            href: '/suite/helpdesk/inbox',
            description: "Advanced facial recognition, liveness detection, and behavioral biometrics.",
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'decentralized-identifiers',
            name: 'Decentralized Identifiers',
            href: '/suite/helpdesk/copilot',
            description: "Self-sovereign identity management with user-controlled data sharing.",
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'verifiable-credentials',
            name: 'Verifiable Credentials',
            href: '/suite/helpdesk/tickets',
            description: "Cryptographically secure digital credentials with selective disclosure.",
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'automated-kyc-aml',
            name: 'Automated KYC/AML',
            href: '/suite/helpdesk/omnichannel',
            description: "Global compliance orchestration with real-time watchlist screening.",
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'privacy-preserving-proofs',
            name: 'Privacy-Preserving Proofs',
            href: '/suite/helpdesk/help-center',
            description: "Zero-knowledge proofs for age verification and credential validation.",
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'cross-platform-portability',
            name: "Cross-Platform Portability",
            href: '/app-store',
            description: "Seamless identity transfer across web2 and web3 applications.",
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'smart-contract-integration',
            name: 'Smart Contract Integration',
            href: '/suite/helpdesk/reporting',
            description: "Programmable identity logic for DeFi, DAOs, and dApp access.",
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'consent-management',
            name: 'Consent Management',
            href: '/suite/helpdesk/knowledge-hub',
            description: "Granular user control over data sharing and permission revocation.",
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'risk-based-authentication',
            name: 'Risk-Based Authentication',
            href: '/suite/helpdesk/outbound',
            description: "Dynamic verification levels based on transaction risk and user behavior.",
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'compliance-reporting',
            name: 'Compliance Reporting',
            href: '/suite/helpdesk/inbox',
            description: "Automated regulatory reporting across multiple jurisdictions.",
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'api-first-integration',
            name: 'API-First Integration',
            href: '/suite/helpdesk/copilot',
            description: "Comprehensive developer tools for seamless platform integration.",
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
    ],
};