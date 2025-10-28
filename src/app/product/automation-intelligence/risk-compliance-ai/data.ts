export const productivityProps = {
    heading: {
        main: "Autonomous compliance",
        highlighted: "that never sleeps",
    },
    description:
        "Risk and Compliance AI automates the most complex aspects of regulatory oversight—from transaction monitoring to suspicious pattern detection—operating with precision across all time zones and jurisdictions.",
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
            title: 'AI-Powered Transaction Monitoring',
            description: 'Our system continuously analyzes transaction patterns across 300+ blockchains, detecting anomalies, money laundering patterns, and sanctioned entity interactions in real-time. The AI learns from emerging threats to stay ahead of evolving risks.'
        },
        {
            title: 'Automated Regulatory Reporting',
            description: 'Generate compliant reports for FATF, FinCEN, OFAC, and other global regulators with a single click. The system automatically compiles required data, applies jurisdictional rules, and formats reports according to specific regulatory requirements.'
        },
        {
            title: 'Smart Risk Scoring & Triage',
            description: 'Automatically assign risk scores to transactions, wallets, and counterparties based on multi-factor analysis. The system prioritizes alerts based on severity, reducing false positives and focusing human attention where it\'s needed most.'
        }
    ],
    testimonial: {
        quote:
            "Risk and Compliance AI reduced our false positive alerts by 85% while improving our true positive detection rate by 40%. We're now more secure and efficient than ever before.",
        author: "Michael Reinhart",
        role: "Chief Compliance Officer at Global Digital Bank",
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
        highlighted: " made operational",
    },
    description:
        "An intuitive platform for managing complex regulatory requirements across multiple jurisdictions, with full visibility and control over all compliance operations.",
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
            title: 'Unified Compliance Dashboard',
            description: 'Monitor all risk and compliance metrics from a single interface. Track transaction monitoring, suspicious activity reports, regulatory updates, and compliance status across all integrated systems and blockchains',
        }
    ],
    additionalFeatures: [
        {
            image: { src: "/assets/usability-2-desktop.webp" },
            title: 'Visual Policy Builder',
            description: 'Create and modify compliance rules without technical expertise. Use our drag-and-drop interface to define risk parameters, monitoring thresholds, and reporting requirements tailored to your specific regulatory obligations',
        },
        {
            image: { src: "/assets/usability-2-desktop.webp" },
            title: 'Pre-Built Compliance Frameworks',
            description: 'Accelerate deployment with regulatory-specific templates:',
            list: {
                items: [
                    'AML/CFT for anti-money laundering compliance',
                    'KYC/KYB for identity verification workflows',
                    'Sanctions Screening for OFAC and global watchlists',
                    'Travel Rule for VASP compliance requirements',
                ]
            }
        },
        {
            image: { src: "/assets/usability-2-desktop.webp" },
            title: 'Seamless Regulatory Integration',
            description: 'Connect Risk and Compliance AI to your entire operational stack:',
            list: {
                items: [
                    'Transaction Monitoring Systems for unified alert management',
                    'Identity Verification Providers for KYC/AML integration',
                    'Blockchain Analytics for on-chain intelligence',
                    'Reporting Systems for automated regulatory submissions',
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
        main: "Predictive risk intelligence ",
        highlighted: "that prevents issues",
    },
    description:
        "Move beyond reactive monitoring to proactive risk prevention with AI-driven insights and predictive analytics.",
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
            title: 'Real-Time Risk Exposure Monitoring',
            description: `Track your organization's risk exposure across all transactions, counterparties, and jurisdictions. Monitor concentration risks, geographic exposures, and emerging threat patterns with institutional-grade precision.`
        },
        {
            title: 'Predictive Threat Intelligence',
            description: 'Our AI models analyze historical patterns, network behaviors, and global intelligence feeds to forecast emerging risks. Receive proactive alerts for potential compliance violations, regulatory changes, and new threat vectors before they impact your operations.'
        },
        {
            title: 'Smart Pattern Recognition',
            description: 'Automatically identify complex money laundering patterns, layering schemes, and behavioral anomalies that traditional systems miss. The AI continuously learns from new detection patterns to enhance coverage over time.'
        },
        {
            title: 'Compliance Performance Analytics',
            description: 'Measure and optimize your compliance program effectiveness. Track detection rates, false positive ratios, investigation timelines, and regulatory audit outcomes to demonstrate program maturity to regulators and stakeholders.'
        }

    ],
    g2Comparison: {
        title: "Risk and Compliance AI delivers institutional-grade performance",
        description:
            "",
        items: [
            { name: ' blockchains continuously monitored', value: '300+', color: 'text-black' },
            { name: 'detection accuracy for sanctioned entities', value: '99.9%', color: 'text-black/40' },
            { name: 'reduction in false positive alerts', value: '85%', color: 'text-black/40' },
            { name: 'multi-currency conversion and reporting', value: 'Real-time', color: '' }
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
            id: 'ai-transaction-monitoring',
            name: 'AI Transaction Monitoring',
            href: '/suite/compliance/monitoring',
            description: 'Continuous surveillance across all blockchains for suspicious patterns.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'automated-sanctions-screening',
            name: 'Automated Sanctions Screening',
            href: '/suite/compliance/sanctions',
            description: 'Real-time checking against 500+ global watchlists and sanctions databases.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'behavioral-analytics',
            name: 'Behavioral Analytics Engine',
            href: '/suite/compliance/analytics',
            description: 'Detect anomalous wallet behaviors and transaction patterns.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'risk-scoring-system',
            name: 'Risk-Based Scoring System',
            href: '/suite/compliance/risk-scoring',
            description: 'Automatically score transactions, wallets, and counterparties.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'regulatory-reporting-automation',
            name: 'Regulatory Reporting Automation',
            href: '/suite/compliance/reporting',
            description: 'Generate compliant reports for global regulators with one click.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'real-time-alert-management',
            name: 'Real-Time Alert Management',
            href: '/suite/compliance/alerts',
            description: 'Prioritize and triage alerts with AI-powered severity assessment.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'kyc-kyb-integration',
            name: 'KYC/KYB Integration Framework',
            href: '/suite/compliance/kyc-kyb',
            description: 'Seamlessly connect identity verification providers.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'travel-rule-compliance',
            name: 'Travel Rule Compliance',
            href: '/suite/compliance/travel-rule',
            description: 'Automate VASP-to-VASP information sharing requirements.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'policy-exception-management',
            name: 'Policy Exception Management',
            href: '/suite/compliance/exceptions',
            description: 'Track and approve compliance policy exceptions with full audit trails.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'audit-documentation',
            name: 'Audit Ready Documentation',
            href: '/suite/compliance/audit',
            description: 'Maintain comprehensive compliance records for regulatory examinations.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'regulatory-change-management',
            name: 'Regulatory Change Management',
            href: '/suite/compliance/regulatory-changes',
            description: 'Automatically track and implement global regulatory updates.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'cross-jurisdiction-compliance',
            name: 'Cross-Jurisdiction Compliance',
            href: '/suite/compliance/cross-jurisdiction',
            description: 'Manage multiple regulatory requirements across different geographies.',
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


