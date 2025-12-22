import {
  PricingPlan,
  ComparisonSection,
  PayAsYouGoPlan,
} from "@/app/types/pricing.types";
import { FaCheck } from "react-icons/fa6";

export const pricingPlans: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    description: "For developers & testing",
    price: 0,
    monthlyPrice: 0,
    priceNote: "Testnet-only",
    monthlyPriceNote: "Testnet-only",
    credits: 0,
    creditsNote: "Testnet-only APIs",
    monthlyCreditsNote: "Testnet-only APIs",
    mostPopular: false,
    features: [
      "Testnet-only APIs",
      "MPC wallets (testnet)",
      "Sub-wallets (testnet)",
      "Policy Engine (testnet)",
      "Compliance tools (testnet)",
      "Developer sandbox",
      "Community support",
      "API Calls (Testnet)",
      "Master MPC Wallets (Testnet)",
      "LayerX Dashboard (Testnet)",
      "AML / KYT / KYC Tools (Testnet)",
      "Automation Tools (Testnet)",
      "DeFi & Multi-Chain Integration (Testnet)",
      "Payment Integration (Testnet)",
      "Quantum-Secure MPC Wallets (Testnet)"
    ],
    buttonText: "Get started",
    buttonVariant: "blue",
  },
  {
    id: "starter",
    name: "Starter",
    description: "For early-stage startups & MVPs",
    price: 207.5,
    monthlyPrice: 249,
    priceNote: "Billed annually",
    monthlyPriceNote: "per month",
    credits: 2000000,
    creditsNote: "API calls per month",
    monthlyCreditsNote: "API calls per month",
    mostPopular: false,
    features: [
      "2M API calls/month",
      "Mainnet access (crypto + fiat)",
      "10 Master MPC wallets",
      "Up to 5,000 sub-wallets",
      "LayerX Dashboard (core analytics)",
      "25 KYC checks/month",
      "Policy Engine (Lite)",
      "Auto-Sweep (Basic)",
      "Internal Ledger (Read-Only)",
      "Crypto payment links (2 providers)",
      "Email support (48-hour SLA)",
      "Developer sandbox + SDK access",
      "Advanced automation (Auto-Trade, batch transactions)",
    ],
    CtaText: "Start 14-day trial",
    buttonText: "Buy now",
    buttonVariant: "blue",
    detailInfo: {
      quota: "2M API calls/month",
      coreInfrastructure: [
        "10 Master MPC Wallets (Crypto + Fiat)",
        "Secure Quantum-Grade MPC (Multi-Party Computation) protection",
        "Supports Bitcoin, Ethereum, Tron, USDT, and stablecoins",
        "Dual authorization for large transactions",
        "Up to 5,000 sub-wallets per master wallet",
        "Custom labels and metadata tracking",
        "Mainnet access for production use"
      ],
      dashboard: [
        "Unified view of balances, transaction logs, and wallet activity",
        "Core analytics (volume charts, transaction trends, API usage)",
        "CSV export & scheduled reporting",
        "Real-time wallet statistics",
      ],
      compliance: [
        "25 KYC checks/month (powered by LayerX Identity)",
        "Basic KYT (Know Your Transaction) monitoring",
        "AML flagging for suspicious transactions",
        "Basic PEP/Sanctions list screening",
      ],
      policyEngine: [
        "Pre-set rule templates",
        "Geographic transaction restrictions",
        "Auto-block for flagged KYT events",
        "Rule-based compliance triggers",
      ],
      automation: [
        "Auto-Sweep (Basic) - automated balance sweeps",
        "Auto-Trade rules (buy/sell at threshold prices)",
        "Batch transactions (multi-send feature)",
        "Scheduled transfers",
      ],
      ledger: [
        "Internal Ledger (Read-Only)",
        "Transaction history tracking",
        "Basic reconciliation tools",
      ],
      paymentTools: [
        "Crypto payment links (2 providers)",
        "Shareable URLs or QR codes",
        "Accept payments in supported crypto or stablecoins",
        "Dynamic amount or fixed-amount mode",
        "Webhook notifications for incoming payments",
      ],
      support: [
        "Email Support (48-hour SLA)",
        "Knowledge base and implementation guides",
        "Community support access",
      ],
      idealFor: [
        "Early-stage startups building MVPs",
        "Small businesses testing crypto payments",
        "Developers launching proof-of-concept projects",
      ],
    },
  },
  {
    id: "growth",
    name: "Growth",
    description: "For scaling fintechs & revenue platforms",
    price: 665.8,
    monthlyPrice: 799,
    priceNote: "Billed annually",
    monthlyPriceNote: "per month",
    credits: 10000000,
    creditsNote: "API calls per month",
    monthlyCreditsNote: "API calls per month",
    mostPopular: true,
    features: [
      "10M API calls/month",
      "30 Master MPC wallets",
      "Unlimited sub-wallets",
      "Multi-chain support (15+ chains)",
      "100 KYC checks/month",
      "Policy Engine (Standard)",
      "Auto-Sweep (Advanced)",
      "Internal Ledger (Full double-entry)",
      "Settlement & Revenue Engine (Standard)",
      "Emergency Kill Switch (Scoped)",
      "Regulatory Reporting (Standard)",
      "Webhooks & batch transactions",
      "Priority support (24-hour SLA)",
      "Full AML/KYT/KYC: Real-time KYT, sanctions screening",
      "DeFi Integration API",
      "Advanced automation (Auto-Trade, Webhooks)",
      "Sandbox + staging environments",
      "Enhanced audit and reporting tools",
      "Transaction Simulation"
    ],
    CtaText: "Start 14-day trial",
    buttonText: "Buy now",
    buttonVariant: "primary",
    detailInfo: {
      quota: "10M API calls/month",
      idealForDescription: "Scaling fintechs, crypto payment gateways, neobanks, and revenue platforms needing advanced compliance, automation, and settlement capabilities.",
      coreInfrastructure: [
        "10M API Calls/month with increased throughput",
        "30 Master MPC Wallets (Advanced MPC)",
        "Unlimited Sub-Wallets with on-demand creation",
        "Multi-Chain Integration (15+ blockchain networks)",
        "Quantum-safe MPC with threshold signatures",
        "Guaranteed 99.9% API uptime SLA",
        "Dedicated Staging & Sandbox Environments",
      ],
      walletInfrastructure: [
        "Advanced MPC with t-of-n authorization",
        "Configurable key rotation and disaster recovery",
        "Multi-tenant wallet segregation",
        "Smart Settlement Engine with automated conversion",
      ],
      compliance: [
        "100 KYC verifications/month",
        "Real-time KYT transaction monitoring",
        "Ongoing AML monitoring with alerts",
        "OFAC, EU, and FATF list integrations",
        "Regulatory Reporting (Standard)",
      ],
      policyEngine: [
        "Policy Engine (Standard Edition) with custom rules",
        "Dynamic daily/monthly limits per user",
        "Country-specific restrictions",
        "Risk Scoring API with live risk score (0–100)",
      ],
      settlementEngine: [
        "Settlement & Revenue Engine (Standard)",
        "Automated revenue splitting and distribution",
        "Multi-currency settlement support",
        "Real-time balance reconciliation",
      ],
      ledger: [
        "Internal Ledger (Full double-entry)",
        "Complete audit trail",
        "Transaction reconciliation",
        "Custom reporting and exports",
      ],
      automation: [
        "Auto-Sweep (Advanced) with smart routing",
        "Advanced Automation Engine with workflows",
        "Emergency Kill Switch (Scoped)",
        "Batch transaction scheduling (up to 5,000 per batch)",
        "Webhooks & Event Streams with real-time push",
      ],
      paymentIntegration: [
        "DeFi Integration API for liquidity and staking",
        "Cross-Border Transfer API",
        "Custom Payment Links + Checkout",
      ],
      reporting: [
        "Enhanced Audit Trail with immutable logs",
        "Regulatory Reporting Suite",
        "Compliance Reports with KYT and KYC audit packs",
      ],
      support: [
        "Priority Support (24-hour SLA)",
        "Direct line to LayerX engineers",
        "Quarterly Technical Review sessions",
        "Issue escalation via chat or email",
      ],
      idealFor: [
        "Scaling fintechs managing high transaction volumes",
        "Revenue platforms with complex settlement needs",
        "Multi-chain applications requiring advanced compliance",
        "Businesses ready to scale to millions of transactions",
      ],
    },
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For banks, exchanges & large institutions",
    price: 5000,
    monthlyPrice: 6000,
    priceNote: "starting at Billed annually (custom pricing)",
    monthlyPriceNote: "starting at per month (custom pricing)",
    credits: 0,
    creditsNote: "Unlimited API calls (post-vetting)",
    monthlyCreditsNote: "Unlimited API calls (post-vetting)",
    mostPopular: false,
    features: [
      "Unlimited API calls (post-vetting)",
      "75+ Master MPC wallets (customizable)",
      "Unlimited sub-wallets",
      "Dedicated blockchain nodes available",
      "Unlimited KYC checks",
      "Policy Engine (Advanced with risk scoring)",
      "Auto-Sweep (Enterprise with treasury routing)",
      "Internal Ledger (Enterprise with integrations)",
      "Settlement Engine (Advanced with FX)",
      "Emergency Kill Switch (Global)",
      "Regulatory Reporting (Advanced)",
      "Governance controls (Maker/Checker)",
      "White-label mobile & web wallets",
      "Dedicated compliance & account manager",
      "On-prem / cloud / hybrid deployment",
      "99.9% SLA",
      "Priority support",
      "Comprehensive AML/KYT/KYC: Global compliance",
      "Smart Contract Templates: Escrow, staking",
      "Cross-Border Settlement Engine: T+0 crypto-fiat trades",
      "Raw Signing",
      "Cold wallet",
      "DRS (CoinCover)",
      "Transaction Simulation"
    ],
    buttonText: "Buy now",
    CtaButton: "Talk to Sales",
    buttonVariant: "blue",
    detailInfo: {
      quota: "Unlimited API Calls (Post-Vetting)",
      idealForDescription: "Global exchanges, digital banks, custodians, infrastructure providers, and large-scale financial institutions requiring full-stack control, compliance assurance, and custom deployment.",
      coreInfrastructure: [
        "Unlimited API Calls with unrestricted throughput",
        "Custom burst limits (up to 500 requests/second)",
        "Priority access to global API clusters",
        "Dedicated Cluster Allocation with private compute",
        "99.9% SLA Uptime Guarantee with uptime credits",
        "Dedicated blockchain nodes (Ethereum, Tron, BSC available)",
      ],
      walletInfrastructure: [
        "75+ Master MPC Wallets (Enterprise-Grade, customizable)",
        "HSM-backed key shards",
        "Distributed multi-party computation with threshold signing",
        "Unlimited Sub-Wallets with instant provisioning",
        "Quantum-Resistant Security Layer with PQC-algorithm",
        "White-Label Wallet SDKs for mobile and web",
      ],
      compliance: [
        "Comprehensive AML/KYT/KYC Suite with unlimited verifications",
        "Global sanctions screening, PEP checks, real-time KYT",
        "Integration-ready with Chainalysis, Elliptic, TRM Labs",
        "Automated SAR (Suspicious Activity Report) generation",
        "Regulatory Reporting (Advanced)",
      ],
      policyEngine: [
        "Policy Engine (Advanced Edition) with AI-driven engine",
        "Dynamic risk scoring per sub-wallet",
        "Real-time transaction control (approve, deny, flag)",
        "ML-based pattern detection for fraud",
        "Multi-region compliance templates (EU, US, UK, Africa, Asia)",
      ],
      smartContracts: [
        "Smart Contract Templates for Escrow, Staking, Custody",
        "Pre-audited and configurable contracts",
        "Programmable Workflows with cross-chain transfers",
        "AI Transaction Assistant with automated optimization",
      ],
      settlement: [
        "Settlement Engine (Advanced with FX)",
        "Cross-Border Settlement Engine with T+0 crypto-fiat trades",
        "Real-time FX rate optimization through liquidity routing",
        "Multi-Asset Reconciliation with auto-match",
        "Treasury Management with centralized global holdings view",
      ],
      ledger: [
        "Internal Ledger (Enterprise with integrations)",
        "Full double-entry accounting system",
        "ERP and accounting software integrations",
        "Custom chart of accounts",
      ],
      automation: [
        "Auto-Sweep (Enterprise with treasury routing)",
        "Emergency Kill Switch (Global)",
        "Governance controls (Maker/Checker workflows)",
        "Advanced workflow automation",
      ],
      deployment: [
        "Multiple Deployment Models: Cloud, On-Premise, Hybrid",
        "Private Network Integration with VPN or dedicated interconnect",
        "Hardware isolation for compliance",
      ],
      reporting: [
        "Full Audit & Log Export with immutable logs",
        "Regulatory Compliance Reports for AML, KYC, cross-border",
        "Advanced Analytics & BI Integration (Power BI, Tableau, Looker)",
        "Customizable dashboards for operations and compliance",
      ],
      customization: [
        "White-Label Apps (Web + Mobile) with branded experiences",
        "Brandable APIs with customizable headers",
        "Reseller Program for sub-wallet infrastructure",
        "Revenue-sharing and whitelabel partnership options",
      ],
      support: [
        "Dedicated Compliance & Account Manager",
        "24/7 Priority Support with engineering response",
        "Periodic Security & Performance Audits",
        "Annual penetration testing and smart contract audits",
      ],
      idealFor: [
        "Global exchanges and digital banks",
        "Custodians and infrastructure providers",
        "Large-scale financial institutions",
        "Enterprises requiring full-stack control and compliance",
      ],
    },
  },
];

// Update the PricingPlan interface to include detailInfo

// Helper component for check icons
const CheckIcon = () => (
  <div className="flex items-center justify-center text-white bg-black/70 rounded-full p-1">
    <FaCheck size={10} />
  </div>
);
export const comparisonData: ComparisonSection[] = [
  {
    category: "Core Infrastructure",
    items: [
      {
        name: "Monthly Price",
        values: ["$0", "$249", "$799", "Custom ($6,000+)"],
      },
      {
        name: "Best For",
        values: [
          "Developers & Testing",
          "Early-stage Startups & MVPs",
          "Scaling Fintechs & Platforms",
          "Banks, Exchanges & Large Institutions",
        ],
      },
      {
        name: "API Calls",
        values: ["Testnet Only", "2M/month", "10M/month", "Unlimited (post-vetting)"],
      },
      {
        name: "Master MPC Wallets",
        values: [
          "Testnet Only",
          "10",
          "30",
          "75+ (Customizable)",
        ],
      },
      {
        name: "Sub-Wallets",
        values: ["Testnet Only", "Up to 5,000", "Unlimited", "Unlimited"],
      },
      {
        name: "Mainnet Access",
        values: ["❌", "✅ (Crypto + Fiat)", "✅ (Crypto + Fiat)", "✅ (Crypto + Fiat)"],
      },
      {
        name: "LayerX Dashboard",
        values: [
          "Testnet",
          "Core analytics",
          "Advanced analytics",
          "Full enterprise suite",
        ],
      },
    ],
  },
  {
    category: "Compliance & Security",
    items: [
      {
        name: "AML / KYT / KYC Tools",
        values: [
          "Testnet Only",
          "Basic KYT, 25 KYC checks/month",
          "Real-time KYT, 100 KYC checks/month",
          "Global compliance, unlimited KYC",
        ],
      },
      {
        name: "KYC Checks/Month",
        values: ["Testnet Only", "25", "100", "Unlimited"],
      },
      {
        name: "Policy Engine",
        values: [
          "Testnet",
          "Lite (Pre-set rules)",
          "Standard (Custom rules)",
          "Advanced (Dynamic risk scoring)",
        ],
      },
      {
        name: "Compliance Depth",
        values: [
          "Testnet",
          "Basic AML/KYT",
          "Real-time KYT",
          "Global Sanctions + Risk Scoring",
        ],
      },
      {
        name: "Quantum-Secure MPC Wallets",
        values: [
          "Testnet Only",
          "All wallets",
          "All wallets (Advanced)",
          "All wallets (Enterprise-grade)",
        ],
      },
      {
        name: "Compliance & Safeguards",
        values: [
          "Testnet",
          "Basic limits",
          "Signed requests, sub-wallet tracking",
          "Full audit trails, periodic audits",
        ],
      },
    ],
  },
  {
    category: "Automation & Intelligence",
    items: [
      {
        name: "Automation Tools",
        values: [
          "Testnet",
          "Auto-Trade, batch transactions",
          "Webhooks, batch transactions",
          "Full automation suite + smart triggers",
        ],
      },
      {
        name: "Automation Capability",
        values: [
          "❌",
          "Basic Rules",
          "Webhooks + Batch",
          "Full Automation Suite",
        ],
      },
      {
        name: "Auto-Sweep",
        values: [
          "Testnet",
          "Basic (Threshold)",
          "Advanced (Multi-destination)",
          "Enterprise (Treasury + Yield)",
        ],
      },
      {
        name: "Emergency Kill Switch",
        values: ["❌", "❌", "Scoped (Wallet-level)", "Global (Multi-level controls)"],
      },
      {
        name: "Governance Controls",
        values: ["❌", "❌", "❌", "Maker/Checker + Treasury"],
      },
    ],
  },
  {
    category: "Financial Operations",
    items: [
      {
        name: "Internal Ledger",
        values: [
          "Testnet",
          "Read-Only",
          "Full (Double-entry)",
          "Enterprise (Immutable + Integrations)",
        ],
      },
      {
        name: "Settlement Engine",
        values: [
          "❌",
          "❌",
          "Standard",
          "Advanced (Multi-party + FX)",
        ],
      },
      {
        name: "Treasury Management",
        values: [
          "❌",
          "Single Destination",
          "Multi-destination",
          "Yield-ready + Event-driven",
        ],
      },
      {
        name: "Cross-Border Settlement",
        values: ["❌", "❌", "❌", "T+0 crypto-fiat settlement"],
      },
      {
        name: "Smart Contract Templates",
        values: ["❌", "❌", "❌", "Escrow, staking, and settlements"],
      },
      {
        name: "Monthly Outbound Volume",
        values: ["❌", "Up to $10K", "Up to $1M", "$5M+ (Custom)"],
      },
    ],
  },
  {
    category: "Integration & Connectivity",
    items: [
      {
        name: "DeFi & Multi-Chain Integration",
        values: [
          "Testnet",
          "All Available",
          "15+ Chains",
          "All + Dedicated Nodes",
        ],
      },
      {
        name: "Blockchain Support",
        values: [
          "Testnet Only",
          "All Available",
          "15+ Chains",
          "All + Dedicated Nodes",
        ],
      },
      {
        name: "Payment Integration",
        values: [
          "Testnet",
          "2 providers (e.g., M-Pesa, MTN)",
          "Multiple global providers",
          "Custom integrations",
        ],
      },
      {
        name: "Payment Providers",
        values: ["❌", "2", "Multiple", "Custom Integrations"],
      },
      {
        name: "Dedicated Node Access",
        values: ["❌", "❌", "❌", "Available"],
      },
    ],
  },
  {
    category: "Reporting & Analytics",
    items: [
      {
        name: "Analytics Dashboard",
        values: [
          "Testnet",
          "Real-time charts, CSV export",
          "Enhanced dashboard",
          "Enterprise reporting tools",
        ],
      },
      {
        name: "Regulatory Reporting",
        values: [
          "❌",
          "❌",
          "Standard",
          "Advanced (Jurisdiction-aware)",
        ],
      },
      {
        name: "Reporting Capability",
        values: [
          "Basic logs",
          "Transaction History",
          "Audit-ready Reports",
          "Regulator-ready Exports",
        ],
      },
    ],
  },
  {
    category: "Deployment & Infrastructure",
    items: [
      {
        name: "Deployment Options",
        values: [
          "Cloud",
          "Cloud",
          "Cloud",
          "On-prem / Hybrid / Cloud",
        ],
      },
      {
        name: "Infrastructure Type",
        values: [
          "Shared Cloud",
          "Shared Cloud",
          "Advanced Cloud",
          "Dedicated + Custom Deployments",
        ],
      },
      {
        name: "Uptime SLA",
        values: ["❌", "99.5%", "99.7%", "99.9%"],
      },
    ],
  },
  {
    category: "Customization & Branding",
    items: [
      {
        name: "Customization & Branding",
        values: ["❌", "❌", "❌", "White-label web + mobile apps"],
      },
      {
        name: "White-label Wallets",
        values: ["❌", "❌", "❌", "✅"],
      },
    ],
  },
  {
    category: "Developer Experience",
    items: [
      {
        name: "Developer Sandbox",
        values: [
          "Testnet",
          "Included",
          "Sandbox + staging environments",
          "Full development suite",
        ],
      },
      {
        name: "SDK Access",
        values: ["Basic", "Standard SDK", "Advanced SDK", "Enterprise SDK + API"],
      },
      {
        name: "Organizations",
        values: ["❌", "1", "3", "Unlimited"],
      },
      {
        name: "Users",
        values: ["❌", "1", "3", "Custom"],
      },
    ],
  },
  {
    category: "Support & Success",
    items: [
      {
        name: "Support Level",
        values: [
          "Community",
          "Email (48-hour response)",
          "Priority (24-hour response)",
          "Dedicated account + compliance manager",
        ],
      },
      {
        name: "Response Time",
        values: ["Community", "48 hours", "24 hours", "Immediate (Dedicated)"],
      },
      {
        name: "Technical Support",
        values: ["Community", "Email", "Priority Channel", "24/7 Dedicated Team"],
      },
      {
        name: "Account Management",
        values: ["Self-service", "Self-service", "Assisted", "Dedicated Manager"],
      },
      {
        name: "Compliance Support",
        values: [
          "Documentation",
          "Documentation",
          "Best Practices",
          "Dedicated Compliance Manager",
        ],
      },
       {
        name: "Raw Signing",
        values: ["❌", "❌", "❌", "✅"],
      },
      {
        name: "Cold wallet",
        values: ["❌", "❌", "❌", "✅"],
      },
      {
        name: "DRS (CoinCover)",
        values: ["❌", "❌", "❌", "✅"],
      },
      {
        name: "Transaction Simulation",
        values: ["❌", "❌", "❌", "✅"],
      },
    ],
  },
];




export const payAsYouGoPlan: PayAsYouGoPlan = {
  id: "payg",
  name: "Pay-As-You-Go",
  description:
    "Flexible pricing for developers and startups building customer-facing apps.",
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
    "Starter Bundle: $99/month available",
  ],
  buttonText: "Get Started",
  buttonVariant: "blue",
  CtaText: "Start with Free Tier",
  detailedPricing: {
    description:
      "Pay-As-You-Go (Usage-Based) Plan - Flexible pricing for developers and startups building customer-facing apps without upfront commitment.",
    corePricing: [
      {
        feature: "Master MPC Wallet Creation",
        cost: "$0.15 / wallet",
        description:
          "Create secure, quantum-grade multi-party wallets for managing fiat or crypto.",
      },
      {
        feature: "Sub-Wallet Creation",
        cost: "$0.05 / sub-wallet",
        description:
          "Provision new user, merchant, or client wallets dynamically. Perfect for scaling customer bases.",
      },
      {
        feature: "On-Chain Transaction (Crypto)",
        cost: "$0.25 / transaction",
        description:
          "Process crypto transfers across master and sub-wallets. Includes blockchain broadcasting and fee abstraction.",
      },
      {
        feature: "Fiat Transaction",
        cost: "1.5% / transaction",
        description:
          "Supports domestic and cross-border fiat operations (e.g., NGN, USD, KES). Includes conversion and settlement.",
      },
      {
        feature: "Webhook Event",
        cost: "$0.01 / event",
        description:
          "Receive live transaction, compliance, and automation updates through secure signed webhooks.",
      },
      {
        feature: "Auto-Trade Execution",
        cost: "$0.25 / trade",
        description:
          "Automate buy/sell actions across supported tokens and stablecoins. Trigger via API or rule-based workflows.",
      },
      {
        feature: "Data Storage",
        cost: "$0.10 / GB / month",
        description:
          "Pay for persistent transaction logs, compliance records, and analytics data.",
      },
      {
        feature: "Compliance / KYC Check",
        cost: "$0.50 / user",
        description:
          "Perform basic or advanced user verification for sub-wallet holders.",
      },
      {
        feature: "Policy Engine Rule Execution",
        cost: "$0.02 / rule",
        description:
          "Execute predefined or custom compliance and automation rules for wallet activity.",
      },
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
        "Email Support (48-hour response)",
      ],
      description:
        "Perfect for teams launching MVPs, testing payment rails, or integrating basic crypto flows.",
    },
    freeTier: {
      includes: [
        "10K API Calls/Day",
        "1 Master MPC Wallet (Sandbox Only)",
        "100 Sub-Wallets Free",
        "No On-Chain Transactions (Testnet Mode)",
        "No KYC or Policy Engine Features",
        "Access to SDKs + Documentation",
        "Basic Email Support (Community Forum)",
      ],
      description:
        "Ideal for developers exploring LayerX APIs before going live.",
    },
    safeguards: [
      "API Key Scoping: Restrict keys to specific domains, services, or IPs.",
      "Signed Requests: Every API call validated with cryptographic signatures.",
      "Sub-Wallet Usage Tracking: Monitor wallet creation, funding, and usage patterns in real time.",
      "Business KYC & Vetting: Required for production-level access and mainnet deployment.",
    ],
    developerFeatures: [
      "SDKs & Sandbox Access: Build and test with live API responses in a non-production environment.",
      "Flexible Billing Dashboard: Real-time tracking of usage, cost, and credits.",
      "Event-Driven Architecture: Automate reactions to payments, wallet creation, or compliance checks using webhook events.",
      "Upgrade Anytime: Transition seamlessly to the Flat (Basic/Pro/Enterprise) plans when your usage stabilizes.",
    ],
    targetAudience: [
      "Developers testing or integrating LayerX APIs for crypto, payments, or compliance workflows.",
      "Startups launching MVPs that need real transaction data before scaling.",
      "Businesses exploring hybrid fiat-crypto infrastructure without fixed costs.",
      "Agencies & Builders offering fintech-as-a-service or wallet infrastructure to clients.",
    ],
    addOns: [
      {
        name: "Extra Master MPC Wallets",
        price: "$25/wallet/month (Basic & Pro)\n$50/wallet/month (Enterprise)",
        description:
          "Add more enterprise-grade multi-party computation wallets for advanced custody and asset segregation.",
      },
      {
        name: "Extra Seats",
        price: "$20/user/month",
        description:
          "Add more users with granular roles, permissions, and audit logs.",
      },
      {
        name: "Priority Support",
        price: "$20/month",
        description:
          "Get 24/7 response time with dedicated escalation channels.",
      },
      {
        name: "Dedicated Node Access",
        price: "$50/month",
        description:
          "Access private blockchain nodes for ultra-low latency and on-chain reliability.",
      },
      {
        name: "Custom Integration / API Gateway",
        price: "$250 one-time setup fee",
        description:
          "Setup for bespoke system integrations and white-label gateway configurations.",
      },
      {
        name: "Advanced Analytics",
        price: "$99/month",
        description:
          "Real-time analytics, fraud monitoring, and sub-wallet intelligence dashboards.",
      },
      {
        name: "Global Compliance Integration",
        price: "$100/month",
        description:
          "Includes AML & risk APIs (Chainalysis, Elliptic) for full regulatory coverage.",
      },
      {
        name: "Branded Payment Links",
        price: "$10/month",
        description:
          "Create branded checkout/payment links with custom themes and domain mapping.",
      },
      {
        name: "Additional Mobile Money Providers",
        price: "$50/month/provider",
        description:
          "Extend your reach with more mobile money integrations per market.",
      },
      {
        name: "Custom DeFi Integration",
        price: "$99/month",
        description:
          "Integrate DeFi protocols for yield, swaps, or liquidity services.",
      },
      {
        name: "Reseller Program",
        price: "20% commission",
        description:
          "Earn commission on referred sub-accounts with managed tracking and revenue reporting.",
      },
    ],
  },
};
