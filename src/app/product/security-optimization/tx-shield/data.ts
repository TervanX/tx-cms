export const productivityProps = {
    heading: {
        main: "Autonomous security operations that",
        highlighted: "never sleep"
    },
    description:
        "TX Shield automates the most critical aspects of digital asset protection—from threat detection to incident response—operating with precision 24/7 across all your blockchain operations.",
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
            title: "AI-Powered Threat Detection",
            description: "Our system continuously analyzes transaction patterns, smart contract interactions, and wallet behaviors across 300+ blockchains. The AI identifies malicious activity, phishing attempts, and sophisticated attacks in real-time, preventing losses before they occur."
        },
        {
            title: "Automated Incident Response",
            description: "When threats are detected, TX Shield automatically executes pre-defined security protocols. From freezing suspicious transactions to initiating fund recovery procedures, the system responds in milliseconds—far faster than human intervention."
        },
        {
            title: "Smart Contract Security Monitoring",
            description: "Continuously audit and monitor smart contracts for vulnerabilities and suspicious activity. The system detects reentrancy attacks, flash loan vulnerabilities, and contract manipulation attempts, providing instant alerts and automatic mitigation."
        }
    ],
    testimonial: {
        quote: "TX Shield prevented a $2.3M phishing attack by detecting anomalous transaction patterns and automatically freezing the transfer. Their AI response was 200x faster than our human team could have reacted.",
        author: "Alex Thompson",
        role: "CISO at Digital Asset Fund",
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
        "An intuitive platform for managing complex security operations across multiple chains, with full visibility and control over all protective measures.",
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
            title: "Unified Security Dashboard",
            description: "Monitor all security metrics from a single interface. Track threat levels, incident responses, vulnerability status, and compliance posture across all your blockchain operations in real-time.",
            list: {
                items: []
            }
        }
    ],
    additionalFeatures: [
        {
            image: { src: "/assets/usability-2-desktop.webp" },
            title: 'Visual Security Policy Builder',
            description: 'Create and modify security rules without technical expertise. Use our drag-and-drop interface to define threat parameters, response protocols, and risk thresholds tailored to your specific security requirements.',
            list: {
                items: []
            }
        },
        {
            image: { src: "/assets/usability-3-desktop.webp" },
            title: 'Pre-Built Security Templates',
            description: 'Accelerate deployment with industry-specific protection frameworks:',
            list: {
                items: [
                    'DeFi Protocol Protection with MEV attack prevention',
                    'Exchange Security with withdrawal monitoring',
                    'Wallet Protection with behavioral analytics',
                    'Enterprise Treasury with multi-sig safeguards'
                ]
            }
        },
        {
            image: { src: "/assets/usability-3-desktop.webp" },
            title: 'Comprehensive Security Integration',
            description: 'Connect TX Shield to your entire security ecosystem:',
            list: {
                items: [
                    'SIEM Systems for centralized security monitoring',
                    'Incident Response platforms',
                    'Compliance & Reporting tools',
                    'Blockchain Analytics providers',
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
        main: "Predictive security intelligence that prevents attacks",
        highlighted: "",
    },
    description:
        "Move beyond basic threat detection to predictive analytics that anticipate and neutralize threats before they materialize.",
    outboundFeatures: [
        {
            title: 'Real-Time Threat Intelligence',
            description: "Monitor emerging threats across the blockchain ecosystem. Track malicious addresses, phishing campaigns, and vulnerability exploits with institutional-grade precision and speed."
        },
        {
            title: 'Predictive Risk Scoring',
            description: "Our AI models analyze transaction patterns, wallet behaviors, and market conditions to forecast potential security incidents. Receive proactive alerts for suspicious activities and automatically implement protective measures."
        },
        {
            title: 'Smart Behavioral Analytics',
            description: 'Automatically establish normal behavior patterns for your wallets and protocols, then detect anomalies that indicate potential compromises. The system learns and adapts to your specific operational patterns over time.'
        },
        {
            title: 'Security Performance Analytics',
            description: 'Measure and optimize your security posture. Track detection rates, false positives, response times, and incident outcomes to continuously improve your protection strategies.'
        }

    ],
    g2Comparison: {
        title: "TX Shield delivers enterprise-grade security performance:",
        description: "",
        items: [
            { name: 'blockchains continuously monitored', value: '300+', color: 'text-black' },
            { name: 'threat detection accuracy', value: '99.9%', color: 'text-black/40' },
            { name: 'average incident response time', value: '<500s', color: 'text-black/40' },
            { name: 'successful attacks across protected clients', value: '$0', color: 'text-black/40' }
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
            id: 'ai-threat-detection',
            name: 'AI Threat Detection',
            href: '/suite/helpdesk/inbox',
            description: "Real-time analysis of transaction patterns and wallet behaviors across all chains.",
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'automated-incident-response',
            name: 'Automated Incident Response',
            href: '/suite/helpdesk/copilot',
            description: "Millisecond response with pre-defined security protocols and mitigation measures.",
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'smart-contract-monitoring',
            name: 'Smart Contract Monitoring',
            href: '/suite/helpdesk/tickets',
            description: "Continuous audit and protection for deployed smart contracts.",
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'behavioral-anomaly-detection',
            name: 'Behavioral Anomaly Detection',
            href: '/suite/helpdesk/omnichannel',
            description: "AI-powered analysis of normal patterns and instant anomaly identification.",
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'multi-signature-safeguards',
            name: 'Multi-Signature Safeguards',
            href: '/suite/helpdesk/help-center',
            description: "Advanced approval workflows with threat-aware transaction blocking.",
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'phishing-scam-protection',
            name: "Phishing & Scam Protection",
            href: '/app-store',
            description: "Real-time detection of malicious domains and social engineering attempts.",
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'mev-attack-prevention',
            name: 'MEV Attack Prevention',
            href: '/suite/helpdesk/reporting',
            description: "Protection against front-running, sandwich attacks, and other MEV exploits.",
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'vulnerability-scanning',
            name: 'Vulnerability Scanning',
            href: '/suite/helpdesk/knowledge-hub',
            description: "Continuous assessment of smart contracts and protocol integrations.",
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'compliance-monitoring',
            name: 'Compliance Monitoring',
            href: '/suite/helpdesk/outbound',
            description: "Automated tracking of regulatory requirements and security standards.",
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'insurance-integration',
            name: 'Insurance Integration',
            href: '/suite/helpdesk/inbox',
            description: "Seamless connection to digital asset insurance providers for covered protection.",
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'audit-trail-generation',
            name: 'Audit Trail Generation',
            href: '/suite/helpdesk/copilot',
            description: "Comprehensive, immutable records of all security events and responses.",
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'api-first-security-integration',
            name: 'API-First Security Integration',
            href: '/suite/helpdesk/tickets',
            description: "Connect with existing security tools and monitoring systems.",
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
    ],
};