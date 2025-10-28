export const productivityProps = {
    heading: {
        main: "Autonomous healthcare ",
        highlighted: "financial operations",
    },
    description:
        "TX Health automates the most complex aspects of healthcare administration—from claims adjudication to cross-border medical payments—operating with precision and compliance 24/7.",
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
            title: 'AI-Optimized Claims Processing',
            description: 'Our system automatically verifies insurance eligibility, validates medical codes, and processes claims across multiple payers. The AI detects coding errors, identifies potential denials, and ensures maximum reimbursement with minimal manual intervention.'
        },
        {
            title: 'Smart Revenue Cycle Management',
            description: 'Automate patient billing, payment posting, and denial management across fiat and digital payment systems. The system dynamically prioritizes collection activities, predicts payment probabilities, and optimizes cash flow without administrative burden.'
        },
        {
            title: 'Cross-Border Medical Payment Automation',
            description: 'Seamlessly handle international patient payments, medical tourism transactions, and global provider settlements. The AI selects optimal payment rails, manages currency conversion, and ensures compliance across healthcare jurisdictions.'
        }
    ],
    testimonial: {
        quote:
            "TX Health reduced our claims processing time from 45 days to 72 hours while increasing our first-pass acceptance rate to 98%. We've transformed our entire revenue cycle.",
        author: "Dr. Sarah Mitchell",
        role: "Chief Medical Officer at Metropolitan Health System",
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
        main: "Enterprise-grade healthcare ",
        highlighted: "finance made accessible",
    },
    description:
        "An intuitive platform for managing complex healthcare financial operations across insurance, patient payments, and provider settlements.",
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
            title: 'Unified Healthcare Finance Dashboard',
            description: 'Monitor all financial operations from a single interface. Track claims status, reimbursement rates, patient balances, and revenue performance across all payers and payment methods in real-time',
        }
    ],
    additionalFeatures: [
        {
            image: { src: "/assets/usability-2-desktop.webp" },
            title: 'Visual Workflow Builder',
            description: 'Create and modify healthcare financial processes without technical expertise. Use our drag-and-drop interface to define claims rules, payment parameters, and compliance workflows',
        },
        {
            image: { src: "/assets/usability-2-desktop.webp" },
            title: 'Pre-Built Healthcare Templates',
            description: 'Accelerate deployment with healthcare-specific templates:',
            list: {
                items: [
                    'Hospital Revenue Cycle with multi-payer management',
                    'Clinical Practice Management with patient billing',
                    'Medical Tourism with cross-border payments',
                    'Clinical Trial Payments with smart contract execution',
                ]
            }
        },
        {
            image: { src: "/assets/usability-2-desktop.webp" },
            title: 'Comprehensive Healthcare Integration',
            description: 'Connect TX Health to your entire medical ecosystem:',
            list: {
                items: [
                    'Electronic Health Records (EHR) systems',
                    'Practice Management software',
                    'Insurance Payer portals and APIs',
                    'Banking and Payment processors',
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
        main: "Intelligent healthcare analytics ",
        highlighted: "that drive better outcomes",
    },
    description:
        "Move beyond basic financial metrics to predictive insights that optimize revenue cycle performance and patient financial experience.",
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
            title: 'Real-Time Revenue Analytics',
            description: `Monitor key performance indicators across your entire revenue cycle. Track clean claim rates, denial patterns, days in A/R, and collection effectiveness with healthcare-specific precision.`
        },
        {
            title: 'Predictive Denial Prevention',
            description: 'Our AI models analyze historical claims data, payer behavior, and coding patterns to forecast potential denials. Receive proactive alerts and automatically correct issues before claim submission.'
        },
        {
            title: 'Smart Contract Management for Clinical Trials',
            description: 'Automate patient reimbursement, site payments, and milestone settlements using smart contracts. Ensure transparent, timely payments while reducing administrative overhead for research operations.'
        },
        {
            title: 'Patient Financial Experience Optimization',
            description: 'Monitor and improve the patient payment journey. Track payment plan performance, patient satisfaction, and collection effectiveness across different demographic segments and payment methods.'
        }

    ],
    g2Comparison: {
        title: "TX Health delivers enterprise-grade healthcare financial management",
        description:
            "",
        items: [
            { name: ' first-pass claims acceptance rate', value: '98%', color: 'text-black' },
            { name: ' reduction in administrative costs', value: '70%', color: 'text-black/40' },
            { name: ' integrated insurance payers globally', value: '300+', color: 'text-black/40' },
            { name: ' eligibility verification across providers', value: 'Real-time', color: 'text-black/40' }
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
            id: 'ai-claims-adjudication',
            name: 'AI Claims Adjudication',
            href: '/suite/health/claims-adjudication',
            description: 'Automatically process and validate medical claims across multiple payers.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'smart-eligibility-verification',
            name: 'Smart Eligibility Verification',
            href: '/suite/health/eligibility-verification',
            description: 'Real-time insurance coverage validation across all major providers.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'multi-payer-payment-posting',
            name: 'Multi-Payer Payment Posting',
            href: '/suite/health/payment-posting',
            description: 'Automate payment reconciliation across insurance and patient payments.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'patient-billing-automation',
            name: 'Patient Billing Automation',
            href: '/suite/health/patient-billing',
            description: 'Streamline patient statements, payment plans, and collection activities.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'denial-management-intelligence',
            name: 'Denial Management Intelligence',
            href: '/suite/health/denial-management',
            description: 'Automatically identify, appeal, and prevent claim denials.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'clinical-trial-payment-automation',
            name: 'Clinical Trial Payment Automation',
            href: '/suite/health/clinical-trial-payments',
            description: 'Smart contract execution for patient reimbursements and site payments.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'cross-border-medical-payments',
            name: 'Cross-Border Medical Payments',
            href: '/suite/health/cross-border-payments',
            description: 'Seamlessly handle international patient and provider settlements.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'revenue-cycle-analytics',
            name: 'Revenue Cycle Analytics',
            href: '/suite/health/revenue-analytics',
            description: 'Comprehensive reporting on A/R performance and collection effectiveness.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'compliance-management',
            name: 'Compliance Management',
            href: '/suite/health/compliance',
            description: 'Automated HIPAA and healthcare regulatory compliance monitoring.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'provider-network-management',
            name: 'Provider Network Management',
            href: '/suite/health/provider-management',
            description: 'Streamline credentialing and provider payment operations.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'patient-payment-portal',
            name: 'Patient Payment Portal',
            href: '/suite/health/patient-portal',
            description: 'Self-service payment management for patients across all payment types.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'api-first-integration',
            name: 'API-First Integration',
            href: '/suite/health/api-integration',
            description: 'Connect with existing EHR, PM, and healthcare financial systems.',
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