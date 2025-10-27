import { PricingPlan, ComparisonSection, PayAsYouGoPlan } from '@/app/types/pricing.types';
import { FaCheck } from 'react-icons/fa6';

export const pricingPlans: PricingPlan[] = [
    {
        id: "free",
        name: "Free",
        description: "Explore the Apollo platform to find leads, manage pipeline & close deals.",
        price: 0,
        monthlyPrice: 0,
        priceNote: "Perfect for getting started",
        monthlyPriceNote: "Perfect for getting started",
        credits: 1200,
        creditsNote: "per user, year granted monthly",
        monthlyCreditsNote: "per user, month",
        mostPopular: false,
        features: [
            "2 Sequences",
            "Unlimited email accounts",
            "Basic reporting",
            "Chrome extension"
        ],
        buttonText: "Get started",
        buttonVariant: "secondary"
    },
    {
        id: "basic",
        name: "Basic / Starter",
        description: "Perfect for small businesses or startups (e.g., African e-commerce, payment apps).",
        price: 199,
        monthlyPrice: 199,
        priceNote: "per month",
        monthlyPriceNote: "per month",
        credits: 1000000,
        creditsNote: "API calls per day (~30M/month)",
        monthlyCreditsNote: "API calls per day (~30M/month)",
        mostPopular: false,
        features: [
            "1M API calls/day (~30M/month)",
            "20 master MPC wallets (crypto + fiat)",
            "2000 sub-wallet creation",
            "TervanX dashboard with basic analytics",
            "Basic AML/KYT/KYC: 50 KYC checks/month",
            "Policy Engine (Lite): Pre-set rules",
            "Crypto Payment Links: Shareable QR codes/URLs",
            "Payment Integration: 2 providers",
            "Developer sandbox + SDK access",
            "Email support (48-hour response)",
            "Advanced automation (Auto-Trade, batch transactions)",
            "Unlimited Sub-Wallets for customer-facing apps"
        ],
        CtaText: "Start 14-day trial",
        buttonText: "Buy now",
        buttonVariant: "secondary",
        // Detailed information for plan detail page
        detailInfo: {
            quota: "1M API calls/day (~30M/month)",
            coreInfrastructure: [
                "20 Master MPC Wallets (Crypto + Fiat)",
                "Secure Quantum-Grade MPC (Multi-Party Computation) protection",
                "Supports Bitcoin, Ethereum, Tron, USDT, and stablecoins",
                "Dual authorization for large transactions",
                "2000 sub-wallets per master wallet (for user segmentation)",
                "Unlimited Sub-Wallet Creation for merchants, customers, or internal departments",
                "Each sub-wallet can receive/send crypto or fiat instantly",
                "Custom labels and metadata tracking"
            ],
            dashboard: [
                "Unified view of balances, transaction logs, and wallet activity",
                "Basic analytics (volume charts, transaction trends, API usage)",
                "CSV export & scheduled reporting",
                "Real-time wallet statistics"
            ],
            compliance: [
                "50 KYC checks/month (powered by TervanX Identity)",
                "Basic KYT (Know Your Transaction) monitoring for sub-wallets",
                "AML flagging for suspicious transactions",
                "Basic PEP/Sanctions list screening"
            ],
            policyEngine: [
                "Pre-set rule templates: $1,000 transaction limit per sub-wallet",
                "Geographic transaction restrictions",
                "Auto-block for flagged KYT events",
                "Rule-based compliance triggers"
            ],
            safeguards: [
                "API key scoping (read/write/transaction permissions)",
                "IP whitelisting and signed request verification",
                "Sub-wallet usage monitoring and rate limiting",
                "ToS compliance enforcement",
                "Business-level KYC verification required"
            ],
            paymentTools: [
                "Shareable URLs or QR codes for sub-wallets",
                "Accept payments in supported crypto or stablecoins",
                "Dynamic amount or fixed-amount mode",
                "Payment Integration (Up to 2 Providers: M-Pesa, MTN Mobile Money, Flutterwave)",
                "Transaction routing to crypto or fiat wallets",
                "Auto-generate invoices linked to sub-wallets",
                "Webhook notifications for incoming payments"
            ],
            developer: [
                "Full access to testing environment",
                "REST + WebSocket API documentation",
                "SDKs for Node.js, .NET, and Python",
                "Demo wallet templates and webhook samples",
                "Auto-Trade rules (buy/sell at threshold prices)",
                "Batch transactions (multi-send feature)",
                "Scheduled transfers and balance sweeps"
            ],
            analytics: [
                "Real-time wallet statistics",
                "Top wallet spenders, inflows/outflows, and daily summaries",
                "Downloadable CSV/JSON reports",
                "Daily API usage breakdown",
                "Rate limit visualization",
                "Wallet performance insights"
            ],
            support: [
                "Email Support (48-hour response)",
                "Priority handling for critical issues",
                "Access to community Slack/Discord (coming soon)",
                "Knowledge base and implementation guides"
            ],
            idealFor: [
                "Small businesses and startups",
                "Early-stage payment or crypto platforms",
                "E-commerce and gaming platforms in Africa",
                "Fintech developers building MVPs with secure payment rails"
            ]
        }
    },
    {
        id: "professional",
        name: "Pro / Growth",
        description: "Ideal for mid-sized fintechs or crypto platforms.",
        price: 499,
        monthlyPrice: 499,
        priceNote: "per month",
        monthlyPriceNote: "per month",
        credits: 5000000,
        creditsNote: "API calls per day (~150M/month)",
        monthlyCreditsNote: "API calls per day (~150M/month)",
        mostPopular: true,
        features: [
            "5M API calls/day (~150M/month)",
            "30 master MPC wallets (advanced MPC)",
            "Unlimited sub-wallets",
            "Full AML/KYT/KYC: Real-time KYT, sanctions screening",
            "200 KYC checks/month for sub-wallet users",
            "Policy Engine (Standard): Custom rules",
            "DeFi Integration API",
            "Advanced automation (Auto-Trade, Webhooks, batch transactions)",
            "Priority support (12-hour response)",
            "Multi-chain integration (20+ blockchains)",
            "Sandbox + staging environments",
            "Enhanced audit and reporting tools",
            "All Basic features included"
        ],
        CtaText: "Start 14-day trial",
        buttonText: "Buy now",
        buttonVariant: "primary",
        // Detailed information for plan detail page
        detailInfo: {
            quota: "5M API calls/day (~150M/month)",
            idealForDescription: "Mid-sized fintechs, crypto payment gateways, neobanks, and digital asset platforms needing deeper automation, advanced compliance, and scalable wallet orchestration across multiple chains and countries.",
            coreInfrastructure: [
                "5M API Calls/Day (~150M/month total) with increased throughput up to 50 requests/second",
                "Guaranteed 99.9% API uptime SLA",
                "Optimized edge routing for global low-latency access",
                "Full Access to Developer Toolkit: REST, WebSocket, and GraphQL endpoints",
                "Client SDKs: Node.js, Go, Python, Flutter, C#",
                "Live monitoring of API latency and success rate via dashboard",
                "Dedicated Staging & Sandbox Environments with pre-production testing"
            ],
            walletInfrastructure: [
                "30 Master MPC Wallets (Advanced MPC) with quantum-safe MPC",
                "Threshold signatures (t-of-n authorization) and multi-admin signing policy support",
                "Configurable key rotation and disaster recovery policies",
                "Unlimited Sub-Wallets with on-demand creation",
                "Multi-tenant wallet segregation and metadata tracking",
                "Multi-Chain Integration with 20+ blockchain networks",
                "Smart Settlement Engine with automated conversion and rebalancing"
            ],
            compliance: [
                "Full AML/KYT/KYC Coverage with 200 KYC verifications/month",
                "Real-time KYT transaction monitoring and sanctions screening",
                "Ongoing AML monitoring with suspicious activity alerts",
                "OFAC, EU, and FATF list integrations"
            ],
            policyEngine: [
                "Policy Engine (Standard Edition) with custom rule sets",
                "Dynamic daily/monthly limits per user",
                "Country-specific restrictions and blacklist/whitelist addresses",
                "Risk Scoring API with live risk score (0–100) for each wallet"
            ],
            paymentIntegration: [
                "Payment Gateway API with fiat and crypto payment acceptance",
                "DeFi Integration API for liquidity, staking, and yield",
                "Cross-Border Transfer API with multi-currency corridors",
                "Custom Payment Links + Checkout with whitelabeled experience"
            ],
            automation: [
                "Advanced Automation Engine with event-based workflows",
                "Auto-trade, auto-sweep, auto-reconcile capabilities",
                "Batch transaction scheduling (up to 5,000 per batch)",
                "Webhooks & Event Streams with real-time event push",
                "Predictive Analytics with machine learning-driven insights"
            ],
            reporting: [
                "Enhanced Audit Trail with immutable transaction logs",
                "Reporting Suite with periodic summaries and scheduled reports",
                "Compliance Reports with KYT and KYC audit packs",
                "Regulator-ready data snapshots"
            ],
            dashboard: [
                "TervanX Dashboard (Pro Edition) with advanced analytics",
                "Role-based access control (RBAC) for team members",
                "Developer Console with key rotation and performance metrics",
                "Staging Deployment Preview for testing new flows"
            ],
            support: [
                "Priority Support (12-hour response time)",
                "Direct line to TervanX engineers",
                "Quarterly Technical Review sessions",
                "Issue escalation channel via chat or email"
            ],
            idealFor: [
                "Scale fintech or crypto infrastructure across multiple regions",
                "Offer DeFi, custody, or cross-border payment products",
                "Integrate compliance and automation directly into workflows",
                "Manage millions of daily transactions with enterprise-grade reliability"
            ]
        }
    },
    {
        id: "enterprise",
        name: "Enterprise",
        description: "For large exchanges, banks, custodians with custom requirements.",
        price: 2000,
        monthlyPrice: 2000,
        priceNote: "starting at per month (custom pricing)",
        monthlyPriceNote: "starting at per month (custom pricing)",
        credits: 0,
        creditsNote: "Unlimited API calls (post-vetting)",
        monthlyCreditsNote: "Unlimited API calls (post-vetting)",
        mostPopular: false,
        features: [
            "Unlimited API calls (post-vetting)",
            "100 master MPC wallets (enterprise-grade MPC)",
            "Unlimited sub-wallets",
            "Comprehensive AML/KYT/KYC: Global compliance",
            "Unlimited KYC checks for sub-wallets",
            "Policy Engine (Advanced): Dynamic rules, risk scoring",
            "Smart Contract Templates: Escrow, staking",
            "Cross-Border Settlement Engine: T+0 crypto-fiat trades",
            "Dedicated compliance and account manager",
            "On-premise, cloud, or hybrid deployment",
            "99.9% SLA uptime guarantee",
            "White-label mobile/web apps for sub-wallet users",
            "One dedicated blockchain node",
            "All Pro features included"
        ],
        buttonText: "Buy now",
        CtaButton: "Talk to Sales",
        buttonVariant: "secondary",
        // Detailed information for plan detail page
        detailInfo: {
            quota: "Unlimited API Calls (Post-Vetting)",
            idealForDescription: "Global exchanges, digital banks, custodians, infrastructure providers, and large-scale financial institutions that require full-stack control, compliance assurance, and custom deployment of financial and crypto infrastructure.",
            coreInfrastructure: [
                "Unlimited API Calls with fully unrestricted API throughput",
                "Custom burst limits (up to 500 requests/second)",
                "Priority access to global API clusters and load-balanced nodes",
                "Dedicated Cluster Allocation with private compute",
                "99.9% SLA Uptime Guarantee with uptime credits for breach"
            ],
            walletInfrastructure: [
                "100 Master MPC Wallets (Enterprise-Grade MPC) with HSM-backed key shards",
                "Distributed multi-party computation with threshold signing",
                "Configurable key shares across cloud and on-premise environments",
                "Unlimited Sub-Wallets with instant wallet provisioning",
                "Quantum-Resistant Security Layer with PQC-algorithm integration",
                "White-Label Wallet SDKs for mobile and web applications"
            ],
            compliance: [
                "Comprehensive AML/KYT/KYC Suite with unlimited KYC verifications",
                "Global sanctions screening, PEP checks, and real-time KYT monitoring",
                "Integration-ready with Chainalysis, Elliptic, or TRM Labs APIs",
                "Automated SAR (Suspicious Activity Report) generation"
            ],
            policyEngine: [
                "Policy Engine (Advanced Edition) with AI-driven policy engine",
                "Dynamic risk scoring per sub-wallet",
                "Real-time transaction control (approve, deny, flag)",
                "Machine-learning-based pattern detection for fraud",
                "Multi-region compliance templates (EU, US, UK, Africa, Asia)"
            ],
            smartContracts: [
                "Smart Contract Templates for Escrow, Staking, and Custody",
                "Pre-audited and configurable smart contracts",
                "Programmable Workflows with cross-chain transfers",
                "AI Transaction Assistant with automated optimization"
            ],
            settlement: [
                "Cross-Border Settlement Engine with instant T+0 crypto-fiat trades",
                "Real-time FX rate optimization through liquidity routing",
                "Multi-Asset Reconciliation with auto-match capabilities",
                "Treasury Management with centralized view of global holdings"
            ],
            deployment: [
                "Multiple Deployment Models: Cloud, On-Premise, or Hybrid",
                "Dedicated Blockchain Node (Ethereum, Tron, or BSC)",
                "Private Network Integration with VPN or dedicated interconnect",
                "Hardware isolation for compliance or internal security policies"
            ],
            reporting: [
                "Full Audit & Log Export with immutable activity logs",
                "Regulatory Compliance Reports for AML, KYC, and cross-border operations",
                "Advanced Analytics & BI Integration with Power BI, Tableau, or Looker",
                "Customizable dashboards for operational and compliance metrics"
            ],
            customization: [
                "White-Label Apps (Web + Mobile) with branded experiences",
                "Brandable APIs with customizable headers and responses",
                "Reseller Program for sub-wallet and payment infrastructure",
                "Revenue-sharing and whitelabel partnership options"
            ],
            support: [
                "Dedicated Compliance & Account Manager",
                "24/7 Support Availability with priority engineering response",
                "Periodic Security & Performance Audits",
                "Annual infrastructure penetration testing and smart contract audits"
            ],
            idealFor: [
                "Global exchanges and digital banks",
                "Custodians and infrastructure providers",
                "Large-scale financial institutions",
                "Companies requiring full-stack control and compliance assurance"
            ]
        }
    }
];

// Update the PricingPlan interface to include detailInfo


// Helper component for check icons
const CheckIcon = () => (
    <div className="flex items-center justify-center text-white bg-black/70 rounded-full p-1" >
        <FaCheck size={10} />
    </div>
);
export const comparisonData: ComparisonSection[] = [
    {
        items: [
            {
                name: "API Calls",
                values: ["-", "1M/day (~30M/month)", "5M/day (~150M/month)", "Unlimited (post-vetting)"]
            },
            {
                name: "Master MPC Wallets",
                values: ["-", "20 (basic MPC)", "30 (advanced MPC)", "100 (enterprise-grade MPC)"]
            },
            {
                name: "Sub-Wallets",
                values: ["-", "2,000", "Unlimited", "Unlimited"]
            },
            {
                name: "TervanX Dashboard",
                values: ["-", "Basic analytics", "Advanced analytics", "Full enterprise suite"]
            },
            {
                name: "AML / KYT / KYC Tools",
                values: ["-", "Basic KYT, 50 KYC checks/month", "Real-time KYT, 200 KYC checks/month", "Global compliance, unlimited KYC"]
            },
            {
                name: "Policy Engine",
                values: ["-", "Lite (pre-set rules)", "Standard (custom rules)", "Advanced (dynamic rules + risk scoring)"]
            },
            {
                name: "Automation Tools",
                values: ["-", "Auto-Trade, batch transactions", "Auto-Trade, Webhooks, batch transactions", "Full automation + smart triggers"]
            },
            {
                name: "DeFi & Multi-Chain Integration",
                values: ["-", "-", "DeFi API + 20+ blockchains", "Full multi-chain + private nodes"]
            },
            {
                name: "Payment Integration",
                values: ["-", "2 providers (e.g., M-Pesa, MTN)", "Multiple global providers", "Custom integrations"]
            },
            {
                name: "Quantum-Secure MPC Wallets",
                values: ["-", "2 master wallets", "5 master wallets", "All wallets quantum-secure"]
            },
            {
                name: "Smart Contract Templates",
                values: ["-", "-", "-", "Escrow, staking, and settlements"]
            },
            {
                name: "Cross-Border Settlement",
                values: ["-", "-", "-", "T+0 crypto-fiat settlement"]
            },
            {
                name: "Analytics Dashboard",
                values: ["-", "Real-time charts, CSV export", "Enhanced dashboard", "Enterprise reporting tools"]
            },
            {
                name: "Compliance & Safeguards",
                values: ["-", "Basic limits ($1,000/tx)", "Signed requests, sub-wallet tracking", "Full audit trails, periodic audits"]
            },
            {
                name: "Deployment Options",
                values: ["-", "Cloud (shared)", "Cloud + staging", "On-premise / cloud / hybrid"]
            },
            {
                name: "Support Level",
                values: ["-", "Email (48-hour response)", "Priority (12-hour response)", "Dedicated account + compliance manager"]
            },
            {
                name: "Uptime SLA",
                values: ["-", "99%", "99.5%", "99.9%"]
            },
            {
                name: "Customization & Branding",
                values: ["-", "-", "-", "White-label web + mobile apps"]
            },
            {
                name: "Dedicated Node Access",
                values: ["-", "-", "-", "1 dedicated blockchain node"]
            },
            {
                name: "Developer Sandbox",
                values: ["-", "Included", "Sandbox + staging environments", "Full development suite"]
            },
            {
                name: "SDK Access",
                values: ["-", "Basic SDK", "Advanced SDK", "Enterprise SDK + API"]
            }
        ]
    }
];



export const payAsYouGoPlan: PayAsYouGoPlan = {
    id: "payg",
    name: "Pay-As-You-Go",
    description: "Flexible pricing for developers and startups building customer-facing apps.",
    price: 0,
    monthlyPrice: 0,
    priceNote: "Pay only for what you use",
    monthlyPriceNote: "Pay only for what you use",
    credits: 0,
    creditsNote: "Usage-based pricing",
    monthlyCreditsNote: "Usage-based pricing",
    mostPopular: false,
    features: [
        "Master MPC Wallet Creation: $0.15/wallet",
        "Sub-Wallet Creation: $0.05/sub-wallet",
        "On-Chain Transaction: $0.25/tx",
        "Fiat Transaction: 1.5% fee/tx",
        "Webhook Event: $0.01/event",
        "Starter Bundle: $99/month available"
    ],
    buttonText: "Get Started",
    buttonVariant: "secondary",
    CtaText: "Start with Free Tier",
    detailedPricing: {
        description: "Pay-As-You-Go (Usage-Based) Plan - Flexible pricing for developers and startups building customer-facing apps without upfront commitment.",
        corePricing: [
            { feature: "Master MPC Wallet Creation", cost: "$0.15 / wallet", description: "Create secure, quantum-grade multi-party wallets for managing fiat or crypto." },
            { feature: "Sub-Wallet Creation", cost: "$0.05 / sub-wallet", description: "Provision new user, merchant, or client wallets dynamically. Perfect for scaling customer bases." },
            { feature: "On-Chain Transaction (Crypto)", cost: "$0.25 / transaction", description: "Process crypto transfers across master and sub-wallets. Includes blockchain broadcasting and fee abstraction." },
            { feature: "Fiat Transaction", cost: "1.5% / transaction", description: "Supports domestic and cross-border fiat operations (e.g., NGN, USD, KES). Includes conversion and settlement." },
            { feature: "Webhook Event", cost: "$0.01 / event", description: "Receive live transaction, compliance, and automation updates through secure signed webhooks." },
            { feature: "Auto-Trade Execution", cost: "$0.25 / trade", description: "Automate buy/sell actions across supported tokens and stablecoins. Trigger via API or rule-based workflows." },
            { feature: "Data Storage", cost: "$0.10 / GB / month", description: "Pay for persistent transaction logs, compliance records, and analytics data." },
            { feature: "Compliance / KYC Check", cost: "$0.50 / user", description: "Perform basic or advanced user verification for sub-wallet holders." },
            { feature: "Policy Engine Rule Execution", cost: "$0.02 / rule", description: "Execute predefined or custom compliance and automation rules for wallet activity." }
        ],
        starterBundle: {
            price: "$99/month",
            includes: [
                "500K API Calls/Day (~15M/month)",
                "1 Master MPC Wallet",
                "Unlimited Sub-Wallet Creation ($0.05/sub-wallet after free limit)",
                "10 KYC Checks (additional $0.50/check)",
                "10 Policy Engine Rules",
                "Basic Sandbox + SDK Access",
                "Developer Dashboard + API Analytics",
                "Email Support (48-hour response)"
            ],
            description: "Perfect for teams launching MVPs, testing payment rails, or integrating basic crypto flows."
        },
        freeTier: {
            includes: [
                "10K API Calls/Day",
                "1 Master MPC Wallet (Sandbox Only)",
                "100 Sub-Wallets Free",
                "No On-Chain Transactions (Testnet Mode)",
                "No KYC or Policy Engine Features",
                "Access to SDKs + Documentation",
                "Basic Email Support (Community Forum)"
            ],
            description: "Ideal for developers exploring TervanX APIs before going live."
        },
        safeguards: [
            "API Key Scoping: Restrict keys to specific domains, services, or IPs.",
            "Signed Requests: Every API call validated with cryptographic signatures.",
            "Sub-Wallet Usage Tracking: Monitor wallet creation, funding, and usage patterns in real time.",
            "Business KYC & Vetting: Required for production-level access and mainnet deployment."
        ],
        developerFeatures: [
            "SDKs & Sandbox Access: Build and test with live API responses in a non-production environment.",
            "Flexible Billing Dashboard: Real-time tracking of usage, cost, and credits.",
            "Event-Driven Architecture: Automate reactions to payments, wallet creation, or compliance checks using webhook events.",
            "Upgrade Anytime: Transition seamlessly to the Flat (Basic/Pro/Enterprise) plans when your usage stabilizes."
        ],
        targetAudience: [
            "Developers testing or integrating TervanX APIs for crypto, payments, or compliance workflows.",
            "Startups launching MVPs that need real transaction data before scaling.",
            "Businesses exploring hybrid fiat-crypto infrastructure without fixed costs.",
            "Agencies & Builders offering fintech-as-a-service or wallet infrastructure to clients."
        ],
        addOns: [
            {
                name: "Extra Master MPC Wallets",
                price: "$25/wallet/month (Basic & Pro)\n$50/wallet/month (Enterprise)",
                description: "Add more enterprise-grade multi-party computation wallets for advanced custody and asset segregation."
            },
            {
                name: "Extra Seats",
                price: "$20/user/month",
                description: "Add more users with granular roles, permissions, and audit logs."
            },
            {
                name: "Priority Support",
                price: "$20/month",
                description: "Get 24/7 response time with dedicated escalation channels."
            },
            {
                name: "Dedicated Node Access",
                price: "$50/month",
                description: "Access private blockchain nodes for ultra-low latency and on-chain reliability."
            },
            {
                name: "Custom Integration / API Gateway",
                price: "$250 one-time setup fee",
                description: "Setup for bespoke system integrations and white-label gateway configurations."
            },
            {
                name: "Advanced Analytics",
                price: "$99/month",
                description: "Real-time analytics, fraud monitoring, and sub-wallet intelligence dashboards."
            },
            {
                name: "Global Compliance Integration",
                price: "$100/month",
                description: "Includes AML & risk APIs (Chainalysis, Elliptic) for full regulatory coverage."
            },
            {
                name: "Branded Payment Links",
                price: "$10/month",
                description: "Create branded checkout/payment links with custom themes and domain mapping."
            },
            {
                name: "Additional Mobile Money Providers",
                price: "$50/month/provider",
                description: "Extend your reach with more mobile money integrations per market."
            },
            {
                name: "Custom DeFi Integration",
                price: "$99/month",
                description: "Integrate DeFi protocols for yield, swaps, or liquidity services."
            },
            {
                name: "Reseller Program",
                price: "20% commission",
                description: "Earn commission on referred sub-accounts with managed tracking and revenue reporting."
            }
        ]
    }
};
