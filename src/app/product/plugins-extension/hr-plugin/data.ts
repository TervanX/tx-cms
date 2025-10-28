export const productivityProps = {
    heading: {
        main: "Autonomous HR operations ",
        highlighted: "that scale globally",
    },
    description:
        "TX HR automates the most complex aspects of workforce management—from multi-currency payroll to token vesting—executing with precision across jurisdictions and payment methods.",
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
            title: 'AI-Optimized Global Payroll',
            description: 'Our system automatically calculates taxes, deductions, and compliance requirements across 100+ countries. The AI handles currency conversion, payment method optimization, and regulatory reporting without manual intervention.'
        },
        {
            title: 'Smart Token Compensation Management',
            description: 'Automate token grants, vesting schedules, and equity management across multiple chains. The system handles cliff periods, release schedules, and tax implications while maintaining full compliance with securities regulations.'
        },
        {
            title: 'Cross-Border Payment Automation',
            description: 'Seamlessly process payroll across traditional banking and blockchain networks. The AI dynamically selects the most efficient payment rails based on recipient location, cost, and speed requirements.'
        }
    ],
    testimonial: {
        quote:
            "TX HR reduced our global payroll processing from 3 days to 2 hours while eliminating compliance errors. We now manage 200 employees across 15 countries with flawless precision.",
        author: "Michael Chen",
        role: "Head of People Operations at Global Tech",
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
        main: "Enterprise-grade HR ",
        highlighted: " made intuitive",
    },
    description:
        "A unified platform for managing all workforce operations—from onboarding to offboarding—across both traditional and web3 compensation structures.",
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
            title: 'Unified HR Dashboard',
            description: 'Monitor all workforce metrics, payroll status, and compliance requirements from a single interface. Track headcount, compensation ratios, turnover rates, and budget utilization in real-time',
        }
    ],
    additionalFeatures: [
        {
            image: { src: "/assets/usability-2-desktop.webp" },
            title: 'Visual Workflow Builder',
            description: 'Create and modify HR processes without technical expertise. Use our drag-and-drop interface to define approval workflows, compensation rules, and compliance parameters',
        },
        {
            image: { src: "/assets/usability-2-desktop.webp" },
            title: 'Pre-Built HR Templates',
            description: 'Accelerate deployment with industry-specific templates:',
            list: {
                items: [
                    'Global Payroll with multi-currency support',
                    'Token Compensation with vesting management',
                    'Contractor Payments across 300+ chains',
                    'Benefits Administration with crypto integration',
                ]
            }
        },
        {
            image: { src: "/assets/usability-2-desktop.webp" },
            title: 'Comprehensive System Integration',
            description: 'Connect TX HR to your entire operational stack:',
            list: {
                items: [
                    'Accounting Systems for seamless bookkeeping',
                    'Compliance Platforms for regulatory reporting',
                    'Identity Verification for KYC/AML requirements',
                    'Banking & Crypto Wallets for payment execution',
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
        main: "Intelligent workforce analytics ",
        highlighted: "that drive better decisions",
    },
    description:
        "Move beyond basic HR metrics to predictive insights that optimize workforce planning and compensation strategy.",
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
            title: 'Real-Time Compensation Analytics',
            description: `Monitor payroll costs, compensation ratios, and budget utilization across departments and locations. Track fiat vs. crypto payment trends and optimize your compensation mix.`
        },
        {
            title: 'Predictive Workforce Planning',
            description: 'Our AI models analyze hiring trends, market rates, and performance data to forecast staffing needs and compensation requirements. Anticipate talent gaps and optimize hiring strategies.'
        },
        {
            title: 'Smart Compliance Monitoring',
            description: 'Automatically track regulatory changes across all operating jurisdictions. Receive proactive alerts for compliance deadlines, reporting requirements, and regulatory updates affecting your workforce.'
        },
        {
            title: 'Compensation Benchmarking Intelligence',
            description: 'Compare your compensation packages against market data across both traditional and web3 roles. Identify competitive gaps and optimize your total rewards strategy to attract and retain top talent.'
        }

    ],
    g2Comparison: {
        title: "TX HR delivers enterprise-grade workforce management",
        description:
            "",
        items: [
            { name: ' countries with automated tax compliance', value: '100+', color: 'text-black' },
            { name: ' supported blockchains for token payments', value: '300+', color: 'text-black/40' },
            { name: ' payroll accuracy rate', value: '99.9%', color: 'text-black/40' },
            { name: ' global payroll processing time', value: '<4h', color: 'text-black/40' }
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
            id: 'global-payroll-automation',
            name: 'Global Payroll Automation',
            href: '/suite/hr/payroll-automation',
            description: 'Process payroll across multiple countries with automated tax compliance.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'token-compensation-management',
            name: 'Token Compensation Management',
            href: '/suite/hr/token-compensation',
            description: 'Handle grants, vesting, and releases across multiple blockchain networks.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'multi-currency-payment-processing',
            name: 'Multi-Currency Payment Processing',
            href: '/suite/hr/multi-currency-payments',
            description: 'Support fiat, crypto, and token payments in single payroll runs.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'smart-contract-vesting',
            name: 'Smart Contract Vesting',
            href: '/suite/hr/smart-vesting',
            description: 'Automatically execute token releases according to vesting schedules.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'employee-self-service-portal',
            name: 'Employee Self-Service Portal',
            href: '/suite/hr/employee-portal',
            description: 'Provide access to pay stubs, tax documents, and compensation details.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'benefits-administration',
            name: 'Benefits Administration',
            href: '/suite/hr/benefits',
            description: 'Manage health insurance, retirement plans, and crypto-native benefits.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'time-attendance-tracking',
            name: 'Time & Attendance Tracking',
            href: '/suite/hr/time-tracking',
            description: 'Integrate with time tracking systems for accurate payroll calculation.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'expense-management',
            name: 'Expense Management',
            href: '/suite/hr/expense-management',
            description: 'Process and reimburse expenses in both fiat and digital assets.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'compliance-reporting',
            name: 'Compliance Reporting',
            href: '/suite/hr/compliance-reporting',
            description: 'Generate required reports for tax authorities and regulatory bodies.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'workflow-automation',
            name: 'Workflow Automation',
            href: '/suite/hr/workflow-automation',
            description: 'Streamline approvals for hires, promotions, and compensation changes.',
            image: '/assets/photo-1677442136019-21780ecad995.jpg'
        },
        {
            id: 'role-based-access-controls',
            name: 'Role-Based Access Controls',
            href: '/suite/hr/access-controls',
            description: 'Manage HR data access with granular permission settings.',
            image: '/assets/photo-1552664730-d307ca884978.jpg'
        },
        {
            id: 'api-first-integration',
            name: 'API-First Integration',
            href: '/suite/hr/api-integration',
            description: 'Connect with existing HRIS, accounting, and compliance systems.',
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