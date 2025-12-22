export const productivityProps = {
    heading: {
        main: "AI-driven infrastructure that",
        highlighted:
            "maximizes efficiency"
    },
    description:
        `LayerX automates the most complex aspects of wallet management—from key security to transaction orchestration—so your developers can focus on building your core product.
`, images: {
        mobile: {
            src: "https://res.cloudinary.com/dx1etzf66/image/upload/v1761889068/solution1_avbfxx.jpg",
            alt: "Illustration of productive bees in a grassy meadow",
        },
        desktop: {
            src: "https://res.cloudinary.com/dx1etzf66/image/upload/v1761889068/solution1_avbfxx.jpg",
            alt: "Illustration of productive bees in a grassy meadow",
        },
        product: {
            src: "https://res.cloudinary.com/dx1etzf66/image/upload/v1761889043/productivity-1-desktop_sdzsp4.webp",
            alt: "Helpdesk product UI",
        },
    },
    features: [
        {
            title:
                `Intelligent Key Management & Recovery
`, description:
                `Leverage MPC-TSS technology to decentralize private key ownership. Our AI-powered social recovery and multi-factor authentication schemes ensure user assets are secure without the single point of failure, drastically reducing support tickets and user lockouts.
`        },
        {
            title:
                `Automated Gas Abstraction`,
            description:
                `Eliminate the complexity of gas fees for your users. Our system sponsors transactions or allows fee payment in any ERC-20 token. The AI engine dynamically selects the most cost-effective method, ensuring a seamless user experience across all chains`
        },
        {
            title:
                "Smart Wallet Automation",
            description:
                `Programmable transaction batching and automated treasury sweeps. Set rules for automatic asset rebalancing, fee payments, and cross-chain transfers, reducing daily operational overhead by up to 90%.`
        }
    ],
    testimonial: {
        quote:
            `With LayerX WaaS, we reduced our wallet integration timeline from 9 months to just 3 weeks, accelerating our entire product roadmap.`, author: "Ben Carter,", role:
            `Head of Blockchain Product`, companyLogo: `<svg
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
            src: "https://res.cloudinary.com/dx1etzf66/image/upload/v1761891745/lightspeed-headshot-min_qiohvg.png",
            alt: "Angelo Livanos",
        },
    },
};

export const usabilityProps = {
    heading: {
        main: "Fast to integrate,",
        highlighted: "effortless to scale",
    },
    description:
        "A developer-first experience with comprehensive SDKs, pre-built UI kits, and a unified dashboard for managing all wallet instances across your entire user base.", images: {
            mobile: {
                src: "https://res.cloudinary.com/dx1etzf66/image/upload/v1761891812/usability-hero-desktop_uirwq4.webp",
                alt: "Illustration of people walking down a flowery path",
            },
            desktop: {
                src: "https://res.cloudinary.com/dx1etzf66/image/upload/v1761891812/usability-hero-desktop_uirwq4.webp",
                alt: "Illustration of people walking down a flowery path",
            },
            mainFeature: {
                src: "https://res.cloudinary.com/dx1etzf66/image/upload/v1761891807/usability-1-desktop_sdggi4.webp",
                alt: "Helpdesk usability instant insight product visual",
            },
        },
    usabilityFeatures: [
        {
            title:
                "Pre-Built & Customizable UI Kits", description:
                "Accelerate your go-to-market with our embeddable, brandable wallet components. Provide a native-feeling wallet experience for your users without building a single UI from scratch.", list: {
                    items: [
                    ]
                }
        }
    ],
    additionalFeatures: [
        {
            image: { src: "https://res.cloudinary.com/dx1etzf66/image/upload/v1761891808/usability-2-desktop_h3f0oo.webp" },
            title: 'Centralized Wallet Instance Management',
            description: 'Monitor the health, activity, and security of every wallet created through your service from one powerful dashboard. Implement batch operations, updates, and security policies globally.',
            list: {
                items: [
                    'Multi-wallet management',
                    'Shared audit trails',
                    'Role-based access for teams'
                ]
            }
        },
        {
            image: { src: "https://res.cloudinary.com/dx1etzf66/image/upload/v1761891810/usability-3-desktop_ofrgcb.webp" },
            title: 'Seamless Third-Party Integrations',
            description: 'Connect your wallet infrastructure to your existing stack with ease.',
            list: {
                items: [
                    'Webhooks & Event Streaming for real-time wallet activity.',
                    'REST & GraphQL APIs for total control.',
                    'Compliance & Analytics SDKs to embed reporting directly into your tools.',
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
        main: "Transform wallet activity into",
        highlighted: " actionable intelligence",
    },
    description:
        "Move beyond simple balances. LayerX provides a deep, AI-powered understanding of how wallets are used, enabling you to optimize products and drive engagement.",
    images: {
        mobile: {
            src: "https://res.cloudinary.com/dx1etzf66/image/upload/v1761891763/outbound-hero-desktop_feua3q.webp",
            alt: "Illustration of a futuristic satellite receiver in a rural setting",
        },
        desktop: {
            src: "https://res.cloudinary.com/dx1etzf66/image/upload/v1761891763/outbound-hero-desktop_feua3q.webp",
            alt: "Illustration of a futuristic satellite receiver in a rural setting",
        },
        mainFeature: {
            src: "https://res.cloudinary.com/dx1etzf66/image/upload/v1761891760/outbound-1-desktop_msubtn.webp",
            alt: "Helpdesk outbound product visual",
        },
    },
    outboundFeatures: [
        {
            title: '360-Degree Wallet Portfolio View',
            description:
                "See the complete picture of your users' cross-chain portfolios. Track assets, NFTs, staking positions, and DeFi interactions across all 300+ integrated networks from a single data layer. "
        },
        {
            title: 'Predictive User Behavior Analytics',
            description:
                "Our AI models analyze transaction patterns to forecast user intent—such as readiness to trade, stake, or churn. Proactively engage users with personalized prompts or offers"
        },
        {
            title: 'Real-Time Security & Risk Scoring',
            description: 'Every transaction is evaluated in real-time against AI-driven risk models. Detect anomalous behavior, flag potentially malicious interactions, and protect user assets before a transaction is even signed.'
        }

    ],
    g2Comparison: {
        title: " LayerX WaaS ensures enterprise-grade performance and security from day one.",
        description:
            "",
        items: [
            { name: 'supported blockchains', value: '300+', color: 'text-black' },
            { name: 'uptime SLA', value: '99.99%', color: 'text-black/40' },
            { name: 'transaction detection latency', value: '<1s', color: 'text-black/40' }
        ],
    },
    sectionStyle: {
        backgroundColor: "white",
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
            id: 'cross-chain-settlement',
            name: 'Multi-Chain Wallet Infrastructure',
            href: '/suite/helpdesk/inbox',
            description:
                "Deploy secure wallets for any supported blockchain with a single API call.", image: 'https://res.cloudinary.com/dx1etzf66/image/upload/v1761889042/photo-1552664730-d307ca884978_e37ajb.jpg'
        },
        {
            id: 'smart-gas-routing',
            name: 'MPC & Custodial Options',
            href: '/suite/helpdesk/copilot',
            description: "Choose from non-custodial MPC wallets, fully custodial vaults, or a hybrid model.",
            image: 'https://res.cloudinary.com/dx1etzf66/image/upload/v1761891767/photo-1677442136019-21780ecad995_kvenjq.jpg'
        },
        {
            id: 'instant-reconciliation',
            name: 'Customizable Wallet UI Kits',
            href: '/suite/helpdesk/tickets',
            description:
                "Speed up front-end development with pre-built, white-labelable React and Flutter components.", image: 'https://res.cloudinary.com/dx1etzf66/image/upload/v1761889042/photo-1552664730-d307ca884978_e37ajb.jpg'
        },
        {
            id: 'unified-treasury',
            name: 'Programmable Key Management',
            href: '/suite/helpdesk/omnichannel',
            description: 'Implement custom approval flows, social recovery, and multi-factor security schemes.',
            image: 'https://res.cloudinary.com/dx1etzf66/image/upload/v1761891767/photo-1677442136019-21780ecad995_kvenjq.jpg'
        },
        {
            id: 'multi-asset-wallet',
            name: 'Gas Abstraction & Meta-Transactions',
            href: '/suite/helpdesk/help-center',
            description:
                "Allow users to pay fees in your app's token or sponsor their gas fees entirely.",
            image: 'https://res.cloudinary.com/dx1etzf66/image/upload/v1761889042/photo-1552664730-d307ca884978_e37ajb.jpg'
        },
        {
            id: 'dynamic-liquidity',
            name: 'Automated Treasury Management',
            href: '/app-store',
            description:
                "Set rules for auto-sweeping funds, rebalancing assets, and managing liquidity across wallets.", image: 'https://res.cloudinary.com/dx1etzf66/image/upload/v1761891767/photo-1677442136019-21780ecad995_kvenjq.jpg'
        },
        {
            id: 'institutional-security',
            name: 'Real-Time Wallet Event Streaming',
            href: '/suite/helpdesk/reporting',
            description:
                "Subscribe to events for transactions, balance changes, and smart contract interactions.", image: 'https://res.cloudinary.com/dx1etzf66/image/upload/v1761889042/photo-1552664730-d307ca884978_e37ajb.jpg'
        },
        {
            id: 'regulatory-compliance',
            name: 'User Portfolio & Activity APIs',
            href: '/suite/helpdesk/knowledge-hub',
            description:
                "Access complete data on user holdings, NFT collections, and transaction history.", image: 'https://res.cloudinary.com/dx1etzf66/image/upload/v1761891767/photo-1677442136019-21780ecad995_kvenjq.jpg'
        },
        {
            id: 'access-controls',
            name: 'Integrated KYC/AML & Compliance',
            href: '/suite/helpdesk/outbound',
            description:
                "Add identity verification and transaction monitoring directly into your wallet flows.", image: 'https://res.cloudinary.com/dx1etzf66/image/upload/v1761889042/photo-1552664730-d307ca884978_e37ajb.jpg'
        },
        {
            id: 'ai-settlement',
            name: 'Advanced Access Controls',
            href: '/suite/helpdesk/inbox',
            description:
                "Define roles and permissions for team members managing your wallet infrastructure.", image: 'https://res.cloudinary.com/dx1etzf66/image/upload/v1761891767/photo-1677442136019-21780ecad995_kvenjq.jpg'
        },
        {
            id: 'error-recovery',
            name: 'Cross-Chain Swap Integration',
            href: '/suite/helpdesk/copilot',
            description:
                "Embed seamless token swapping capabilities directly into the wallet experience.", image: 'https://res.cloudinary.com/dx1etzf66/image/upload/v1761889042/photo-1552664730-d307ca884978_e37ajb.jpg'
        },
        {
            id: 'predictive-insights',
            name: 'Smart Contract Wallet Deployment',
            href: '/suite/helpdesk/tickets',
            description:
                "Enable account abstraction for advanced features like session keys and spend limits", image: 'https://res.cloudinary.com/dx1etzf66/image/upload/v1761891767/photo-1677442136019-21780ecad995_kvenjq.jpg'
        },
        {
            id: 'transaction-analytics',
            name: 'Real-Time Transaction Analytics',
            href: '/suite/helpdesk/omnichannel',
            description: 'Monitor, visualize, and analyze all transactions in real time across every integrated blockchain.',
            image: 'https://res.cloudinary.com/dx1etzf66/image/upload/v1761889042/photo-1552664730-d307ca884978_e37ajb.jpg'
        }
    ],

};


