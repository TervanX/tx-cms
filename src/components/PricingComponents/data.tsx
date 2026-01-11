import {
  PricingPlan,
  ComparisonSection,
  PayAsYouGoPlan,
} from "@/app/types/pricing.types";
import { FaCheck } from "react-icons/fa6";

export const pricingPlans: PricingPlan[] = [
  // {
  //   id: "free",
  //   name: "Free",
  //   description: "For developers & testing",
  //   price: 0,
  //   monthlyPrice: 0,
  //   priceNote: "Testnet-only",
  //   monthlyPriceNote: "Testnet-only",
  //   credits: 0,
  //   creditsNote: "Testnet-only APIs",
  //   monthlyCreditsNote: "Testnet-only APIs",
  //   mostPopular: false,
  //   features: [
  //     "Testnet-only APIs",
  //     "MPC wallets (testnet)",
  //     "Sub-wallets (testnet)",
  //     "Policy Engine (testnet)",
  //     "Compliance tools (testnet)",
  //     "Developer sandbox",
  //     "Community support",
  //     "API Calls (Testnet)",
  //     "Master MPC Wallets (Testnet)",
  //     "LayerX Dashboard (Testnet)",
  //     "AML / KYT / KYC Tools (Testnet)",
  //     "Automation Tools (Testnet)",
  //     "DeFi & Multi-Chain Integration (Testnet)",
  //     "Payment Integration (Testnet)",
  //     "Quantum-Secure MPC Wallets (Testnet)"
  //   ],
  //   buttonText: "Get started",
  //   buttonVariant: "blue",
  // },
  {
    id: "starter",
    name: "Essential",
    description: "For early-stage startups & MVPs",
    price: "$207.5",
    monthlyPrice: "$249",
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

    CtaButton: "Buy now",
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
  // {
  //   id: "growth",
  //   name: "Growth",
  //   description: "For scaling fintechs & revenue platforms",
  //   price: 665.8,
  //   monthlyPrice: 799,
  //   priceNote: "Billed annually",
  //   monthlyPriceNote: "per month",
  //   credits: 10000000,
  //   creditsNote: "API calls per month",
  //   monthlyCreditsNote: "API calls per month",
  //   mostPopular: true,
  //   features: [
  //     "10M API calls/month",
  //     "30 Master MPC wallets",
  //     "Unlimited sub-wallets",
  //     "Multi-chain support (15+ chains)",
  //     "100 KYC checks/month",
  //     "Policy Engine (Standard)",
  //     "Auto-Sweep (Advanced)",
  //     "Internal Ledger (Full double-entry)",
  //     "Settlement & Revenue Engine (Standard)",
  //     "Emergency Kill Switch (Scoped)",
  //     "Regulatory Reporting (Standard)",
  //     "Webhooks & batch transactions",
  //     "Priority support (24-hour SLA)",
  //     "Full AML/KYT/KYC: Real-time KYT, sanctions screening",
  //     "DeFi Integration API",
  //     "Advanced automation (Auto-Trade, Webhooks)",
  //     "Sandbox + staging environments",
  //     "Enhanced audit and reporting tools",
  //     "Transaction Simulation"
  //   ],
  //   CtaText: "Start 14-day trial",
  //   buttonText: "Buy now",
  //   buttonVariant: "primary",
  //   detailInfo: {
  //     quota: "10M API calls/month",
  //     idealForDescription: "Scaling fintechs, crypto payment gateways, neobanks, and revenue platforms needing advanced compliance, automation, and settlement capabilities.",
  //     coreInfrastructure: [
  //       "10M API Calls/month with increased throughput",
  //       "30 Master MPC Wallets (Advanced MPC)",
  //       "Unlimited Sub-Wallets with on-demand creation",
  //       "Multi-Chain Integration (15+ blockchain networks)",
  //       "Quantum-safe MPC with threshold signatures",
  //       "Guaranteed 99.9% API uptime SLA",
  //       "Dedicated Staging & Sandbox Environments",
  //     ],
  //     walletInfrastructure: [
  //       "Advanced MPC with t-of-n authorization",
  //       "Configurable key rotation and disaster recovery",
  //       "Multi-tenant wallet segregation",
  //       "Smart Settlement Engine with automated conversion",
  //     ],
  //     compliance: [
  //       "100 KYC verifications/month",
  //       "Real-time KYT transaction monitoring",
  //       "Ongoing AML monitoring with alerts",
  //       "OFAC, EU, and FATF list integrations",
  //       "Regulatory Reporting (Standard)",
  //     ],
  //     policyEngine: [
  //       "Policy Engine (Standard Edition) with custom rules",
  //       "Dynamic daily/monthly limits per user",
  //       "Country-specific restrictions",
  //       "Risk Scoring API with live risk score (0–100)",
  //     ],
  //     settlementEngine: [
  //       "Settlement & Revenue Engine (Standard)",
  //       "Automated revenue splitting and distribution",
  //       "Multi-currency settlement support",
  //       "Real-time balance reconciliation",
  //     ],
  //     ledger: [
  //       "Internal Ledger (Full double-entry)",
  //       "Complete audit trail",
  //       "Transaction reconciliation",
  //       "Custom reporting and exports",
  //     ],
  //     automation: [
  //       "Auto-Sweep (Advanced) with smart routing",
  //       "Advanced Automation Engine with workflows",
  //       "Emergency Kill Switch (Scoped)",
  //       "Batch transaction scheduling (up to 5,000 per batch)",
  //       "Webhooks & Event Streams with real-time push",
  //     ],
  //     paymentIntegration: [
  //       "DeFi Integration API for liquidity and staking",
  //       "Cross-Border Transfer API",
  //       "Custom Payment Links + Checkout",
  //     ],
  //     reporting: [
  //       "Enhanced Audit Trail with immutable logs",
  //       "Regulatory Reporting Suite",
  //       "Compliance Reports with KYT and KYC audit packs",
  //     ],
  //     support: [
  //       "Priority Support (24-hour SLA)",
  //       "Direct line to LayerX engineers",
  //       "Quarterly Technical Review sessions",
  //       "Issue escalation via chat or email",
  //     ],
  //     idealFor: [
  //       "Scaling fintechs managing high transaction volumes",
  //       "Revenue platforms with complex settlement needs",
  //       "Multi-chain applications requiring advanced compliance",
  //       "Businesses ready to scale to millions of transactions",
  //     ],
  //   },
  // },
  // {
  //   id: "enterprise",
  //   name: "Enterprise",
  //   description: "For banks, exchanges & large institutions",
  //   price: 5000,
  //   monthlyPrice: 6000,
  //   priceNote: "starting at Billed annually (custom pricing)",
  //   monthlyPriceNote: "starting at per month (custom pricing)",
  //   credits: 0,
  //   creditsNote: "Unlimited API calls (post-vetting)",
  //   monthlyCreditsNote: "Unlimited API calls (post-vetting)",
  //   mostPopular: false,
  //   features: [
  //     "Unlimited API calls (post-vetting)",
  //     "75+ Master MPC wallets (customizable)",
  //     "Unlimited sub-wallets",
  //     "Dedicated blockchain nodes available",
  //     "Unlimited KYC checks",
  //     "Policy Engine (Advanced with risk scoring)",
  //     "Auto-Sweep (Enterprise with treasury routing)",
  //     "Internal Ledger (Enterprise with integrations)",
  //     "Settlement Engine (Advanced with FX)",
  //     "Emergency Kill Switch (Global)",
  //     "Regulatory Reporting (Advanced)",
  //     "Governance controls (Maker/Checker)",
  //     "White-label mobile & web wallets",
  //     "Dedicated compliance & account manager",
  //     "On-prem / cloud / hybrid deployment",
  //     "99.9% SLA",
  //     "Priority support",
  //     "Comprehensive AML/KYT/KYC: Global compliance",
  //     "Smart Contract Templates: Escrow, staking",
  //     "Cross-Border Settlement Engine: T+0 crypto-fiat trades",
  //     "Raw Signing",
  //     "Cold wallet",
  //     "DRS (CoinCover)",
  //     "Transaction Simulation"
  //   ],
  //   buttonText: "Buy now",
  //   CtaButton: "Talk to Sales",
  //   buttonVariant: "blue",
  //   detailInfo: {
  //     quota: "Unlimited API Calls (Post-Vetting)",
  //     idealForDescription: "Global exchanges, digital banks, custodians, infrastructure providers, and large-scale financial institutions requiring full-stack control, compliance assurance, and custom deployment.",
  //     coreInfrastructure: [
  //       "Unlimited API Calls with unrestricted throughput",
  //       "Custom burst limits (up to 500 requests/second)",
  //       "Priority access to global API clusters",
  //       "Dedicated Cluster Allocation with private compute",
  //       "99.9% SLA Uptime Guarantee with uptime credits",
  //       "Dedicated blockchain nodes (Ethereum, Tron, BSC available)",
  //     ],
  //     walletInfrastructure: [
  //       "75+ Master MPC Wallets (Enterprise-Grade, customizable)",
  //       "HSM-backed key shards",
  //       "Distributed multi-party computation with threshold signing",
  //       "Unlimited Sub-Wallets with instant provisioning",
  //       "Quantum-Resistant Security Layer with PQC-algorithm",
  //       "White-Label Wallet SDKs for mobile and web",
  //     ],
  //     compliance: [
  //       "Comprehensive AML/KYT/KYC Suite with unlimited verifications",
  //       "Global sanctions screening, PEP checks, real-time KYT",
  //       "Integration-ready with Chainalysis, Elliptic, TRM Labs",
  //       "Automated SAR (Suspicious Activity Report) generation",
  //       "Regulatory Reporting (Advanced)",
  //     ],
  //     policyEngine: [
  //       "Policy Engine (Advanced Edition) with AI-driven engine",
  //       "Dynamic risk scoring per sub-wallet",
  //       "Real-time transaction control (approve, deny, flag)",
  //       "ML-based pattern detection for fraud",
  //       "Multi-region compliance templates (EU, US, UK, Africa, Asia)",
  //     ],
  //     smartContracts: [
  //       "Smart Contract Templates for Escrow, Staking, Custody",
  //       "Pre-audited and configurable contracts",
  //       "Programmable Workflows with cross-chain transfers",
  //       "AI Transaction Assistant with automated optimization",
  //     ],
  //     settlement: [
  //       "Settlement Engine (Advanced with FX)",
  //       "Cross-Border Settlement Engine with T+0 crypto-fiat trades",
  //       "Real-time FX rate optimization through liquidity routing",
  //       "Multi-Asset Reconciliation with auto-match",
  //       "Treasury Management with centralized global holdings view",
  //     ],
  //     ledger: [
  //       "Internal Ledger (Enterprise with integrations)",
  //       "Full double-entry accounting system",
  //       "ERP and accounting software integrations",
  //       "Custom chart of accounts",
  //     ],
  //     automation: [
  //       "Auto-Sweep (Enterprise with treasury routing)",
  //       "Emergency Kill Switch (Global)",
  //       "Governance controls (Maker/Checker workflows)",
  //       "Advanced workflow automation",
  //     ],
  //     deployment: [
  //       "Multiple Deployment Models: Cloud, On-Premise, Hybrid",
  //       "Private Network Integration with VPN or dedicated interconnect",
  //       "Hardware isolation for compliance",
  //     ],
  //     reporting: [
  //       "Full Audit & Log Export with immutable logs",
  //       "Regulatory Compliance Reports for AML, KYC, cross-border",
  //       "Advanced Analytics & BI Integration (Power BI, Tableau, Looker)",
  //       "Customizable dashboards for operations and compliance",
  //     ],
  //     customization: [
  //       "White-Label Apps (Web + Mobile) with branded experiences",
  //       "Brandable APIs with customizable headers",
  //       "Reseller Program for sub-wallet infrastructure",
  //       "Revenue-sharing and whitelabel partnership options",
  //     ],
  //     support: [
  //       "Dedicated Compliance & Account Manager",
  //       "24/7 Priority Support with engineering response",
  //       "Periodic Security & Performance Audits",
  //       "Annual penetration testing and smart contract audits",
  //     ],
  //     idealFor: [
  //       "Global exchanges and digital banks",
  //       "Custodians and infrastructure providers",
  //       "Large-scale financial institutions",
  //       "Enterprises requiring full-stack control and compliance",
  //     ],
  //   },
  // },
  {
    id: "enterprise",
    name: "Custom Pricing",
    description: "Pro, Enterprise or Enterprise+ plans",
    price: "Custom",
    monthlyPrice: "Custom",
    priceNote: "starting at Billed annually (custom pricing)",
    monthlyPriceNote: "starting at per month (custom pricing)",
    credits: 0,
    creditsNote: "Unlimited API calls (post-vetting)",
    monthlyCreditsNote: "Unlimited API calls (post-vetting)",
    mostPopular: false,
    features: [
      "API calls (post-vetting)",
      "Master MPC wallets (customizable)",
      "Sub-wallets",
      "Dedicated blockchain nodes available",
      "KYC checks",
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
    // buttonText: "Buy now",
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
        values: ["$249", "Custom "],
      },
      {
        name: "Best For",
        values: [

          "Early-stage Startups & MVPs",

          "Banks, Exchanges & Large Institutions",
        ],
      },
      {
        name: "API Calls",
        values: ["2M/month", "Customizable (post-vetting)"],
      },
      {
        name: "Master MPC Wallets",
        values: [
          "10",

          " Customizable",
        ],
      },
      {
        name: "Sub-Wallets",
        values: ["Up to 5,000", "Customizable"],
      },
      {
        name: "Mainnet Access",
        values: ["✅ (Crypto + Fiat)", "✅ (Crypto + Fiat)"],
      },
      {
        name: "LayerX Dashboard",
        values: [

          "Core analytics",

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

          "Basic KYT, 25 KYC checks/month",

          "Global compliance, unlimited KYC",
        ],
      },
      {
        name: "KYC Checks/Month",
        values: ["25", "Customizable"],
      },
      {
        name: "Policy Engine",
        values: [
          "Lite (Pre-set rules)",
          "Advanced (Dynamic risk scoring)",
        ],
      },
      {
        name: "Compliance Depth",
        values: [
          "Basic AML/KYT",
          "Global Sanctions + Risk Scoring",
        ],
      },
      {
        name: "Quantum-Secure MPC Wallets",
        values: [

          "All wallets",

          "All wallets (Enterprise-grade)",
        ],
      },
      {
        name: "Compliance & Safeguards",
        values: [

          "Basic limits",

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

          "Auto-Trade, batch transactions",

          "Full automation suite + smart triggers",
        ],
      },
      {
        name: "Automation Capability",
        values: [

          "Basic Rules",

          "Full Automation Suite",
        ],
      },
      {
        name: "Auto-Sweep",
        values: [

          "Basic (Threshold)",

          "Enterprise (Treasury + Yield)",
        ],
      },
      {
        name: "Emergency Kill Switch",
        values: ["❌", "Global (Multi-level controls)"],
      },
      {
        name: "Governance Controls",
        values: ["❌", "Maker/Checker + Treasury"],
      },
    ],
  },
  {
    category: "Financial Operations",
    items: [
      {
        name: "Internal Ledger",
        values: [

          "Read-Only",

          "Enterprise (Immutable + Integrations)",
        ],
      },
      {
        name: "Settlement Engine",
        values: [

          "❌",

          "Advanced (Multi-party + FX)",
        ],
      },
      {
        name: "Treasury Management",
        values: [
          "Single Destination",
          "Yield-ready + Event-driven",
        ],
      },
      {
        name: "Cross-Border Settlement",
        values: ["❌", "T+0 crypto-fiat settlement"],
      },
      {
        name: "Smart Contract Templates",
        values: ["❌", "Escrow, staking, and settlements"],
      },
      {
        name: "Monthly Outbound Volume",
        values: ["Up to $10K", "$5M+ (Custom)"],
      },
    ],
  },
  {
    category: "Integration & Connectivity",
    items: [
      {
        name: "DeFi & Multi-Chain Integration",
        values: [
          "All Available",
          "All + Dedicated Nodes",
        ],
      },
      {
        name: "Blockchain Support",
        values: [
          "All Available",
          "All + Dedicated Nodes",
        ],
      },
      {
        name: "Payment Integration",
        values: [
          "2 providers (e.g., M-Pesa, MTN)",
          "Custom integrations",
        ],
      },
      {
        name: "Payment Providers",
        values: ["2", "Custom Integrations"],
      },
      {
        name: "Dedicated Node Access",
        values: ["❌", "Available"],
      },
    ],
  },
  {
    category: "Reporting & Analytics",
    items: [
      {
        name: "Analytics Dashboard",
        values: [
          "Real-time charts, CSV export",
          "Enterprise reporting tools",
        ],
      },
      {
        name: "Regulatory Reporting",
        values: [
          "❌",
          "Advanced (Jurisdiction-aware)",
        ],
      },
      {
        name: "Reporting Capability",
        values: [
          "Transaction History",
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

          "On-prem / Hybrid / Cloud",
        ],
      },
      {
        name: "Infrastructure Type",
        values: [
          "Shared Cloud",
          "Dedicated + Custom Deployments",
        ],
      },
      {
        name: "Uptime SLA",
        values: ["99.5%", "99.9%"],
      },
    ],
  },
  {
    category: "Customization & Branding",
    items: [
      {
        name: "Customization & Branding",
        values: ["❌", "White-label web + mobile apps"],
      },
      {
        name: "White-label Wallets",
        values: ["❌", "✅"],
      },
    ],
  },
  {
    category: "Developer Experience",
    items: [
      {
        name: "Developer Sandbox",
        values: [

          "Included",

          "Full development suite",
        ],
      },
      {
        name: "SDK Access",
        values: ["Standard SDK", "Enterprise SDK + API"],
      },
      {
        name: "Organizations",
        values: ["1", "Unlimited"],
      },
      {
        name: "Users",
        values: ["1", "Custom"],
      },
    ],
  },
  {
    category: "Support & Success",
    items: [
      {
        name: "Support Level",
        values: [

          "Email (48-hour response)",

          "Dedicated account + compliance manager",
        ],
      },
      {
        name: "Response Time",
        values: ["48 hours", "Immediate (Dedicated)"],
      },
      {
        name: "Technical Support",
        values: ["Email", "24/7 Dedicated Team"],
      },
      {
        name: "Account Management",
        values: ["Self-service", "Dedicated Manager"],
      },
      {
        name: "Compliance Support",
        values: [
          // "Documentation",
          "Documentation",
          // "Best Practices",
          "Dedicated Compliance Manager",
        ],
      },
      {
        name: "Raw Signing",
        values: ["❌", "✅"],
      },
      {
        name: "Cold wallet",
        values: ["❌", "✅"],
      },
      {
        name: "DRS (CoinCover)",
        values: ["❌", "✅"],
      },
      {
        name: "Transaction Simulation",
        values: ["❌", "✅"],
      },
    ],
  },
];
// export const comparisonData: ComparisonSection[] = [
//   {
//     category: "Core Infrastructure",
//     items: [
//       {
//         name: "Monthly Price",
//         values: ["$0", "$249", "$799", "Custom ($6,000+)"],
//       },
//       {
//         name: "Best For",
//         values: [
//           "Developers & Testing",
//           "Early-stage Startups & MVPs",
//           "Scaling Fintechs & Platforms",
//           "Banks, Exchanges & Large Institutions",
//         ],
//       },
//       {
//         name: "API Calls",
//         values: ["Testnet Only", "2M/month", "10M/month", "Unlimited (post-vetting)"],
//       },
//       {
//         name: "Master MPC Wallets",
//         values: [
//           "Testnet Only",
//           "10",
//           "30",
//           "75+ (Customizable)",
//         ],
//       },
//       {
//         name: "Sub-Wallets",
//         values: ["Testnet Only", "Up to 5,000", "Unlimited", "Unlimited"],
//       },
//       {
//         name: "Mainnet Access",
//         values: ["❌", "✅ (Crypto + Fiat)", "✅ (Crypto + Fiat)", "✅ (Crypto + Fiat)"],
//       },
//       {
//         name: "LayerX Dashboard",
//         values: [
//           "Testnet",
//           "Core analytics",
//           "Advanced analytics",
//           "Full enterprise suite",
//         ],
//       },
//     ],
//   },
//   {
//     category: "Compliance & Security",
//     items: [
//       {
//         name: "AML / KYT / KYC Tools",
//         values: [
//           "Testnet Only",
//           "Basic KYT, 25 KYC checks/month",
//           "Real-time KYT, 100 KYC checks/month",
//           "Global compliance, unlimited KYC",
//         ],
//       },
//       {
//         name: "KYC Checks/Month",
//         values: ["Testnet Only", "25", "100", "Unlimited"],
//       },
//       {
//         name: "Policy Engine",
//         values: [
//           "Testnet",
//           "Lite (Pre-set rules)",
//           "Standard (Custom rules)",
//           "Advanced (Dynamic risk scoring)",
//         ],
//       },
//       {
//         name: "Compliance Depth",
//         values: [
//           "Testnet",
//           "Basic AML/KYT",
//           "Real-time KYT",
//           "Global Sanctions + Risk Scoring",
//         ],
//       },
//       {
//         name: "Quantum-Secure MPC Wallets",
//         values: [
//           "Testnet Only",
//           "All wallets",
//           "All wallets (Advanced)",
//           "All wallets (Enterprise-grade)",
//         ],
//       },
//       {
//         name: "Compliance & Safeguards",
//         values: [
//           "Testnet",
//           "Basic limits",
//           "Signed requests, sub-wallet tracking",
//           "Full audit trails, periodic audits",
//         ],
//       },
//     ],
//   },
//   {
//     category: "Automation & Intelligence",
//     items: [
//       {
//         name: "Automation Tools",
//         values: [
//           "Testnet",
//           "Auto-Trade, batch transactions",
//           "Webhooks, batch transactions",
//           "Full automation suite + smart triggers",
//         ],
//       },
//       {
//         name: "Automation Capability",
//         values: [
//           "❌",
//           "Basic Rules",
//           "Webhooks + Batch",
//           "Full Automation Suite",
//         ],
//       },
//       {
//         name: "Auto-Sweep",
//         values: [
//           "Testnet",
//           "Basic (Threshold)",
//           "Advanced (Multi-destination)",
//           "Enterprise (Treasury + Yield)",
//         ],
//       },
//       {
//         name: "Emergency Kill Switch",
//         values: ["❌", "❌", "Scoped (Wallet-level)", "Global (Multi-level controls)"],
//       },
//       {
//         name: "Governance Controls",
//         values: ["❌", "❌", "❌", "Maker/Checker + Treasury"],
//       },
//     ],
//   },
//   {
//     category: "Financial Operations",
//     items: [
//       {
//         name: "Internal Ledger",
//         values: [
//           "Testnet",
//           "Read-Only",
//           "Full (Double-entry)",
//           "Enterprise (Immutable + Integrations)",
//         ],
//       },
//       {
//         name: "Settlement Engine",
//         values: [
//           "❌",
//           "❌",
//           "Standard",
//           "Advanced (Multi-party + FX)",
//         ],
//       },
//       {
//         name: "Treasury Management",
//         values: [
//           "❌",
//           "Single Destination",
//           "Multi-destination",
//           "Yield-ready + Event-driven",
//         ],
//       },
//       {
//         name: "Cross-Border Settlement",
//         values: ["❌", "❌", "❌", "T+0 crypto-fiat settlement"],
//       },
//       {
//         name: "Smart Contract Templates",
//         values: ["❌", "❌", "❌", "Escrow, staking, and settlements"],
//       },
//       {
//         name: "Monthly Outbound Volume",
//         values: ["❌", "Up to $10K", "Up to $1M", "$5M+ (Custom)"],
//       },
//     ],
//   },
//   {
//     category: "Integration & Connectivity",
//     items: [
//       {
//         name: "DeFi & Multi-Chain Integration",
//         values: [
//           "Testnet",
//           "All Available",
//           "15+ Chains",
//           "All + Dedicated Nodes",
//         ],
//       },
//       {
//         name: "Blockchain Support",
//         values: [
//           "Testnet Only",
//           "All Available",
//           "15+ Chains",
//           "All + Dedicated Nodes",
//         ],
//       },
//       {
//         name: "Payment Integration",
//         values: [
//           "Testnet",
//           "2 providers (e.g., M-Pesa, MTN)",
//           "Multiple global providers",
//           "Custom integrations",
//         ],
//       },
//       {
//         name: "Payment Providers",
//         values: ["❌", "2", "Multiple", "Custom Integrations"],
//       },
//       {
//         name: "Dedicated Node Access",
//         values: ["❌", "❌", "❌", "Available"],
//       },
//     ],
//   },
//   {
//     category: "Reporting & Analytics",
//     items: [
//       {
//         name: "Analytics Dashboard",
//         values: [
//           "Testnet",
//           "Real-time charts, CSV export",
//           "Enhanced dashboard",
//           "Enterprise reporting tools",
//         ],
//       },
//       {
//         name: "Regulatory Reporting",
//         values: [
//           "❌",
//           "❌",
//           "Standard",
//           "Advanced (Jurisdiction-aware)",
//         ],
//       },
//       {
//         name: "Reporting Capability",
//         values: [
//           "Basic logs",
//           "Transaction History",
//           "Audit-ready Reports",
//           "Regulator-ready Exports",
//         ],
//       },
//     ],
//   },
//   {
//     category: "Deployment & Infrastructure",
//     items: [
//       {
//         name: "Deployment Options",
//         values: [
//           "Cloud",
//           "Cloud",
//           "Cloud",
//           "On-prem / Hybrid / Cloud",
//         ],
//       },
//       {
//         name: "Infrastructure Type",
//         values: [
//           "Shared Cloud",
//           "Shared Cloud",
//           "Advanced Cloud",
//           "Dedicated + Custom Deployments",
//         ],
//       },
//       {
//         name: "Uptime SLA",
//         values: ["❌", "99.5%", "99.7%", "99.9%"],
//       },
//     ],
//   },
//   {
//     category: "Customization & Branding",
//     items: [
//       {
//         name: "Customization & Branding",
//         values: ["❌", "❌", "❌", "White-label web + mobile apps"],
//       },
//       {
//         name: "White-label Wallets",
//         values: ["❌", "❌", "❌", "✅"],
//       },
//     ],
//   },
//   {
//     category: "Developer Experience",
//     items: [
//       {
//         name: "Developer Sandbox",
//         values: [
//           "Testnet",
//           "Included",
//           "Sandbox + staging environments",
//           "Full development suite",
//         ],
//       },
//       {
//         name: "SDK Access",
//         values: ["Basic", "Standard SDK", "Advanced SDK", "Enterprise SDK + API"],
//       },
//       {
//         name: "Organizations",
//         values: ["❌", "1", "3", "Unlimited"],
//       },
//       {
//         name: "Users",
//         values: ["❌", "1", "3", "Custom"],
//       },
//     ],
//   },
//   {
//     category: "Support & Success",
//     items: [
//       {
//         name: "Support Level",
//         values: [
//           "Community",
//           "Email (48-hour response)",
//           "Priority (24-hour response)",
//           "Dedicated account + compliance manager",
//         ],
//       },
//       {
//         name: "Response Time",
//         values: ["Community", "48 hours", "24 hours", "Immediate (Dedicated)"],
//       },
//       {
//         name: "Technical Support",
//         values: ["Community", "Email", "Priority Channel", "24/7 Dedicated Team"],
//       },
//       {
//         name: "Account Management",
//         values: ["Self-service", "Self-service", "Assisted", "Dedicated Manager"],
//       },
//       {
//         name: "Compliance Support",
//         values: [
//           "Documentation",
//           "Documentation",
//           "Best Practices",
//           "Dedicated Compliance Manager",
//         ],
//       },
//       {
//         name: "Raw Signing",
//         values: ["❌", "❌", "❌", "✅"],
//       },
//       {
//         name: "Cold wallet",
//         values: ["❌", "❌", "❌", "✅"],
//       },
//       {
//         name: "DRS (CoinCover)",
//         values: ["❌", "❌", "❌", "✅"],
//       },
//       {
//         name: "Transaction Simulation",
//         values: ["❌", "❌", "❌", "✅"],
//       },
//     ],
//   },
// ];




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
    "Unlimited API calls (post-vetting)",
    "Comprehensive AML/KYT/KYC: Global compliance",
    "Smart Contract Templates: Escrow, staking",
    "Cross-Border Settlement Engine: T+0 crypto-fiat trades",
    "Raw Signing",
    "Cold wallet",
    "DRS (CoinCover)",
    "Transaction Simulation",
    "No upfront commitment",
    "Scale as you grow",
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
      annualPrice: "$82.50/month", // $990/year, 16.7% savings
      annualTotal: "$990/year",
      savings: "Save $198/year (16.7%)",
      includes: [
        "500K API Calls/Day (~15M/month)",
        "1 Master MPC Wallet (included)",
        "Up to 100 Free Sub-Wallets (then $0.05/sub-wallet)",
        "10 KYC Checks/month (then $0.50/check)",
        "10 Policy Engine Rules/month (then $0.02/rule)",
        "Basic Auto-Sweep (Threshold-based)",
        "Internal Ledger (Read-Only)",
        "Basic Sandbox + SDK Access",
        "Developer Dashboard + API Analytics",
        "Real-time transaction monitoring",
        "Email Support (48-hour response)",
        "Community forum access",
      ],
      description:
        "Perfect for teams launching MVPs, testing payment rails, or integrating basic crypto flows. Ideal transition from free tier before moving to fixed plans.",
      usageLimits: {
        apiCalls: "500K/day (~15M/month)",
        masterWallets: "1 included",
        subWallets: "100 free, then $0.05 each",
        kycChecks: "10/month, then $0.50 each",
        policyRules: "10/month, then $0.02 each",
        transactions: "$0.25/crypto tx, 1.5%/fiat tx",
        webhooks: "$0.01/event",
      },
      comparisonToStarter: {
        apiCalls: "15M/month vs 2M/month (7.5x more)",
        price: "$99 vs $249 (60% cheaper)",
        masterWallets: "1 vs 10",
        subWallets: "100 free vs 5,000 included",
        kycChecks: "10 vs 25",
        note: "Upgrade to Starter ($249/month) when you need more infrastructure, higher limits, and mainnet production features.",
      },
    },
    freeTier: {
      price: "$0/month",
      includes: [
        "10K API Calls/Day (testnet only)",
        "1 Master MPC Wallet (Sandbox Only)",
        "100 Sub-Wallets Free (testnet)",
        "No On-Chain Transactions (Testnet Mode)",
        "No KYC or Policy Engine Features",
        "No Auto-Sweep or Ledger Features",
        "Access to SDKs + Documentation",
        "Developer sandbox environment",
        "Basic Email Support (Community Forum)",
        "Rate limited to 10 requests/second",
      ],
      description:
        "Ideal for developers exploring LayerX APIs before going live. Perfect for learning, testing integrations, and proof-of-concept development.",
      limitations: [
        "Testnet only - no mainnet access",
        "Limited to development use cases",
        "Community support only",
        "Cannot process real transactions",
        "No compliance features",
      ],
      upgradeNote: "Upgrade to Starter Bundle ($99/month) for mainnet access and production features, or jump to full plans for comprehensive infrastructure.",
    },
    safeguards: [
      "API Key Scoping: Restrict keys to specific domains, services, or IPs.",
      "Signed Requests: Every API call validated with cryptographic signatures.",
      "Sub-Wallet Usage Tracking: Monitor wallet creation, funding, and usage patterns in real time.",
      "Rate Limiting: Automatic throttling to prevent abuse and manage costs.",
      "Business KYC & Vetting: Required for production-level access and mainnet deployment.",
      "Spending Limits: Set daily/monthly caps to control costs.",
      "Usage Alerts: Get notified when approaching usage thresholds.",
    ],
    developerFeatures: [
      "SDKs & Sandbox Access: Build and test with live API responses in a non-production environment.",
      "Flexible Billing Dashboard: Real-time tracking of usage, cost, and credits with detailed breakdowns.",
      "Event-Driven Architecture: Automate reactions to payments, wallet creation, or compliance checks using webhook events.",
      "Cost Calculator: Estimate monthly costs based on your expected usage patterns.",
      "Usage Analytics: Detailed insights into API calls, transactions, and resource consumption.",
      "Upgrade Anytime: Transition seamlessly to the Flat (Starter/Growth/Enterprise) plans when your usage stabilizes.",
      "No Lock-in: Cancel or pause anytime with no penalties.",
    ],
    targetAudience: [
      "Developers testing or integrating LayerX APIs for crypto, payments, or compliance workflows.",
      "Startups launching MVPs that need real transaction data before scaling.",
      "Businesses exploring hybrid fiat-crypto infrastructure without fixed costs.",
      "Agencies & Builders offering fintech-as-a-service or wallet infrastructure to clients.",
      "Projects with unpredictable or sporadic usage patterns.",
      "Teams wanting to validate product-market fit before committing to fixed plans.",
    ],
    advancedFeatures: [
      {
        feature: "Unlimited API calls (post-vetting)",
        description: "After business verification, enjoy unlimited API calls for scalable operations.",
        available: "Post-business verification",
      },
      {
        feature: "Comprehensive AML/KYT/KYC",
        description: "Global compliance coverage with automated screening and risk scoring.",
        cost: "Available as add-on",
      },
      {
        feature: "Smart Contract Templates",
        description: "Pre-built templates for escrow, staking, and other DeFi applications.",
        available: "Available in PAYG",
      },
      {
        feature: "Cross-Border Settlement Engine",
        description: "T+0 crypto-fiat trades with real-time settlement capabilities.",
        cost: "Available as add-on",
      },
      {
        feature: "Raw Signing",
        description: "Direct cryptographic signing capabilities for advanced use cases.",
        available: "Available in PAYG",
      },
      {
        feature: "Cold Wallet",
        description: "Offline storage solutions for maximum security of digital assets.",
        available: "Available as add-on",
      },
      {
        feature: "DRS (CoinCover)",
        description: "Digital Recovery Service for wallet recovery and inheritance solutions.",
        cost: "Available as add-on",
      },
      {
        feature: "Transaction Simulation",
        description: "Test and simulate transactions before execution to prevent errors.",
        available: "Available in PAYG",
      },
    ],
    pricingComparison: {
      title: "When to Choose Pay-As-You-Go vs Fixed Plans",
      payg: {
        bestFor: [
          "Unpredictable or sporadic usage",
          "Early-stage testing and MVP development",
          "Projects under $500/month in usage",
          "Learning and experimenting with APIs",
        ],
        advantages: [
          "No upfront commitment",
          "Pay only for what you use",
          "Start free, scale gradually",
          "Perfect for variable workloads",
        ],
        breakEvenPoint: "~$99-249/month usage makes Starter plan more cost-effective",
      },
      fixedPlans: {
        bestFor: [
          "Predictable monthly usage",
          "Production applications",
          "Teams needing dedicated support",
          "Businesses requiring SLAs and compliance",
        ],
        advantages: [
          "Better per-unit economics at scale",
          "Included infrastructure (multiple wallets, higher limits)",
          "Priority support and SLAs",
          "Advanced features (ledger, compliance, automation)",
        ],
        starter: "Best at 2M+ API calls/month or $249+ in PAYG costs",
        growth: "Best at 10M+ API calls/month or $799+ in PAYG costs",
      },
    },
    addOns: [
      {
        name: "Extra Master MPC Wallets",
        price: "$15/wallet/month",
        description:
          "Add more enterprise-grade multi-party computation wallets for advanced custody and asset segregation. Each wallet is quantum-secure.",
      },
      {
        name: "Extra Seats",
        price: "$20/user/month",
        description:
          "Add more users with granular roles, permissions, and audit logs. Perfect for growing teams.",
      },
      {
        name: "Priority Support Upgrade",
        price: "$99/month",
        description:
          "Upgrade to 24-hour response time with priority escalation channels and direct engineer access.",
      },
      {
        name: "Dedicated Node Access",
        price: "$150/month per node",
        description:
          "Access private blockchain nodes for ultra-low latency, higher reliability, and on-chain performance.",
      },
      {
        name: "Custom Integration / API Gateway",
        price: "$500 one-time setup",
        description:
          "Professional setup for bespoke system integrations, custom webhooks, and white-label gateway configurations.",
      },
      {
        name: "Advanced Analytics Dashboard",
        price: "$149/month",
        description:
          "Real-time analytics, fraud monitoring, sub-wallet intelligence, and custom reporting dashboards.",
      },
      {
        name: "Global Compliance Integration",
        price: "$199/month",
        description:
          "Includes AML & risk APIs (Chainalysis, Elliptic, TRM Labs) for full regulatory coverage and automated screening.",
      },
      {
        name: "Branded Payment Links",
        price: "$49/month",
        description:
          "Create branded checkout/payment links with custom themes, logos, and domain mapping for professional customer experience.",
      },
      {
        name: "Additional Mobile Money Providers",
        price: "$75/month per provider",
        description:
          "Extend your reach with more mobile money integrations per market (M-Pesa, MTN, Airtel, etc.).",
      },
      {
        name: "Custom DeFi Integration",
        price: "$199/month",
        description:
          "Integrate DeFi protocols for yield farming, token swaps, liquidity provision, or staking services.",
      },
      {
        name: "White-Label SDK",
        price: "$299/month",
        description:
          "Fully branded SDKs for mobile and web with your company branding and custom domain.",
      },
      {
        name: "Reseller Program",
        price: "20% revenue share",
        description:
          "Earn 20% commission on referred sub-accounts with managed tracking, revenue reporting, and partner dashboard.",
      },
      {
        name: "SLA Guarantee",
        price: "$249/month",
        description:
          "99.9% uptime guarantee with service credits for any downtime. Includes priority infrastructure access.",
      },
      {
        name: "Staging Environment",
        price: "$99/month",
        description:
          "Dedicated staging environment mirroring production for safe testing and deployment workflows.",
      },
      {
        name: "Cold Wallet Storage",
        price: "$199/month",
        description:
          "Offline storage solutions with multi-signature protection and institutional-grade security.",
      },
      {
        name: "DRS (CoinCover) Integration",
        price: "$149/month",
        description:
          "Digital Recovery Service for wallet recovery, inheritance planning, and disaster recovery.",
      },
      {
        name: "Transaction Simulation Engine",
        price: "$79/month",
        description:
          "Advanced simulation capabilities for testing complex transaction scenarios before execution.",
      },
      {
        name: "Cross-Border Settlement Engine",
        price: "$299/month",
        description:
          "Real-time T+0 settlement engine for international crypto-fiat transactions with FX optimization.",
      },
      {
        name: "Smart Contract Templates Library",
        price: "$129/month",
        description:
          "Access to comprehensive library of pre-audited smart contracts for various DeFi use cases.",
      },
    ],
    costExamples: {
      title: "Monthly Cost Examples",
      scenarios: [
        {
          name: "Small Startup (Early MVP)",
          usage: {
            apiCalls: "500K/month",
            masterWallets: "1",
            subWallets: "50",
            cryptoTx: "200",
            fiatTx: "100 ($5,000 volume)",
            kycChecks: "20",
            webhooks: "500",
          },
          calculation: {
            masterWallets: "$0.15 × 1 = $0.15",
            subWallets: "$0.05 × 50 = $2.50",
            cryptoTx: "$0.25 × 200 = $50",
            fiatTx: "1.5% × $5,000 = $75",
            kycChecks: "$0.50 × 20 = $10",
            webhooks: "$0.01 × 500 = $5",
            total: "$142.65/month",
          },
          recommendation: "Starter Bundle ($99/month) is more cost-effective with included features",
        },
        {
          name: "Growing Platform",
          usage: {
            apiCalls: "2M/month",
            masterWallets: "3",
            subWallets: "500",
            cryptoTx: "1,000",
            fiatTx: "500 ($25,000 volume)",
            kycChecks: "100",
            webhooks: "2,000",
          },
          calculation: {
            masterWallets: "$0.15 × 3 = $0.45",
            subWallets: "$0.05 × 500 = $25",
            cryptoTx: "$0.25 × 1,000 = $250",
            fiatTx: "1.5% × $25,000 = $375",
            kycChecks: "$0.50 × 100 = $50",
            webhooks: "$0.01 × 2,000 = $20",
            total: "$720.45/month",
          },
          recommendation: "Upgrade to Growth Plan ($799/month) for better economics and features",
        },
        {
          name: "Established Business",
          usage: {
            apiCalls: "10M/month",
            masterWallets: "10",
            subWallets: "5,000",
            cryptoTx: "10,000",
            fiatTx: "3,000 ($150,000 volume)",
            kycChecks: "500",
            webhooks: "10,000",
          },
          calculation: {
            masterWallets: "$0.15 × 10 = $1.50",
            subWallets: "$0.05 × 5,000 = $250",
            cryptoTx: "$0.25 × 10,000 = $2,500",
            fiatTx: "1.5% × $150,000 = $2,250",
            kycChecks: "$0.50 × 500 = $250",
            webhooks: "$0.01 × 10,000 = $100",
            total: "$5,351.50/month",
          },
          recommendation: "Enterprise Plan is strongly recommended for better rates, SLA, and support",
        },
      ],
    },
  },
};
