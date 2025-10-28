"use client";
import React from "react";
import { FAQItem } from "@/app/types/pricing.types";
import PricingComparisonTable from "./PricinComparisonTable";


interface ComparePlanProps {
  isAnnualBilling?: boolean;
}

const ComparePlan: React.FC<ComparePlanProps> = ({
  isAnnualBilling = true,
}) => {
  return (
    <div id="compare-plans" className="bg-white mt-8 rounded mb-8">
      <PricingComparisonTable isAnnualBilling={isAnnualBilling} />
    </div>
  );
};

export default ComparePlan;


export const pricingFAQData: FAQItem[] = [
  {
    question:
      "What's the main difference between the Flat Plan and the Pay-As-You-Go plan?",
    answer:
      "The Flat Plan (Basic, Pro, Enterprise) is a subscription model ideal for businesses with predictable, high-volume usage. It offers tiered features, higher limits, and better support for a fixed monthly price. The Pay-As-You-Go Plan is usage-based, perfect for developers and startups who need flexibility and are testing or scaling their applications, as you only pay for the resources you consume.",
  },
  {
    question: "Which plan is right for my small e-commerce startup in Africa?",
    answer:
      "The Basic/Starter Flat Plan ($199/month) is an excellent starting point. It includes 1M API calls/day, 20 master wallets, integration with providers like M-Pesa and MTN, and basic compliance tools, which are specifically tailored for small businesses and startups in regions like Africa.",
  },
  {
    question:
      "We are a growing fintech. When should we upgrade from Pro to Enterprise?",
    answer:
      "Consider the Enterprise Plan when you need: unlimited API throughput, custom deployment (on-premise/hybrid), white-label solutions for your customers, advanced smart contract templates (escrow, staking), a dedicated compliance manager, and private blockchain nodes for maximum performance and control.",
  },
  {
    question: "Is there a free tier to test the platform before committing?",
    answer:
      "Yes! The Pay-As-You-Go plan includes a Free Tier with 10K API calls/day, 1 master MPC wallet (sandbox only), and 100 free sub-wallets. This allows you to build and test in a non-production environment with no credit card required.",
  },
  {
    question: "How does billing work for the Pay-As-You-Go plan?",
    answer:
      "You are billed based on your actual usage of each service. For example, you pay $0.05 for each sub-wallet created, $0.25 for each on-chain transaction, and $0.50 for each KYC check. The Starter Bundle ($99/month) provides a predictable base cost with included allowances.",
  },
  {
    question: "What is the 'Starter Bundle' in the Pay-As-You-Go plan?",
    answer:
      "The Starter Bundle is a $99/month package that includes a set of common resources (500K API calls, 1 master wallet, 10 KYC checks) to give you predictable costs while maintaining the flexibility of the usage-based model for additional services.",
  },
  {
    question: "Are there any hidden setup or integration fees?",
    answer:
      "For the standard plans, there are no setup fees. However, a one-time $250 Custom Integration / API Gateway setup fee applies as an add-on if you require bespoke system integrations.",
  },
  {
    question:
      "What is a 'master MPC wallet' and how is it different from a 'sub-wallet'?",
    answer:
      "A Master MPC Wallet is your primary, secure vault for holding assets, managed with Multi-Party Computation (MPC). A Sub-Wallet is a child wallet derived from a master wallet, used to segment funds for specific users, departments, or purposes. Sub-wallets allow for instant, secure transactions without touching the master vault.",
  },
  {
    question: "How many sub-wallets can I create?",
    answer:
      "The Basic Plan includes 2,000 sub-wallets per master wallet. The Pro and Enterprise Plans, as well as the Pay-As-You-Go plan (at a cost), offer unlimited sub-wallet creation.",
  },
  {
    question: "What blockchains and payment methods do you support?",
    answer:
      "The Pro Plan and above support 20+ blockchains (e.g., Ethereum, Bitcoin, Tron, Polygon, Solana). For fiat payments, all plans support integrations with major providers; the Basic Plan includes 2 (e.g., M-Pesa, MTN), while higher-tier plans offer more global providers and a cross-border settlement engine.",
  },
  {
    question: "What does the Policy Engine do?",
    answer:
      "The Policy Engine allows you to set automated rules for transactions and compliance. For example, you can set a $1,000 transaction limit per sub-wallet (Basic), create custom geographic restrictions (Pro), or implement dynamic, AI-driven risk scoring to approve or flag transactions automatically (Enterprise).",
  },
  {
    question: "What security measures are in place to protect our funds?",
    answer:
      "LayerX employs Quantum-Secure MPC (Multi-Party Computation), which means private keys are never stored in one place. Additional safeguards include API key scoping, IP whitelisting, signed requests for all API calls, and dual authorization for large transactions.",
  },
  {
    question: "How does the KYC/KYT/AML compliance work?",
    answer:
      "KYC (Know Your Customer): You can verify your end-users' identities. The Basic Plan includes 50 checks/month, the Pro Plan includes 200, and the Enterprise Plan offers unlimited checks.<br>KYT (Know Your Transaction): This monitors transaction patterns on sub-wallets in real-time to flag suspicious activity.<br>AML (Anti-Money Laundering): The system screens against sanctions and PEP lists and can generate suspicious activity reports.",
  },

  {
    question: "What support can I expect on each plan?",
    answer:
      "Basic: Email support with a 48-hour response time.<br>Pro: Priority support with a 12-hour response time.<br>Enterprise: 24/7 priority support with a dedicated account and compliance manager.<br>Add-On: Priority support can be added to any plan for $20/month.",
  },
  {
    question: "Can I add features to my plan later?",
    answer:
      "Yes, LayerX offers various Add-Ons such as Extra Master Wallets ($25-$50/month), Dedicated Node Access ($50/month), Advanced Analytics ($99/month), and Branded Payment Links ($10/month). You can enable these as your needs evolve.",
  },
  {
    question: "What is 'Quantum-Secure MPC' and why is it important?",
    answer:
      "Quantum-Secure MPC (Multi-Party Computation) uses advanced cryptographic algorithms that are resistant to attacks from both classical and future quantum computers. This ensures your wallets and transactions are protected against emerging threats, making it a foundational layer of security for the long term. All master wallets in the Pro and Enterprise plans feature this level of protection.",
  },
  {
    question: "Do you provide SDKs and a sandbox for development?",
    answer:
      "Yes. All paid plans, including the Pay-As-You-Go Starter Bundle, provide full access to our Developer Sandbox and SDKs for popular languages and frameworks like Node.js, Python, .NET, Go, and Flutter. This allows you to build, test, and simulate your integration in a safe environment before going live.",
  },
  {
    question:
      "What is the 'Cross-Border Settlement Engine' in the Enterprise Plan?",
    answer:
      "This feature enables instant (T+0) conversion between crypto (like USDT) and fiat currencies (like USD, EUR, NGN). It automatically finds the best available FX rates through integrated liquidity providers, allowing for real-time, cross-border payments and settlements without the traditional delays.",
  },
  {
    question:
      "On the Pay-As-You-Go plan, what counts as an 'on-chain transaction'?",
    answer:
      "An on-chain transaction is any operation that is broadcast to and confirmed on a blockchain network. This includes sending crypto from a master or sub-wallet to an external address, or between your own sub-wallets on-chain. Each of these actions incurs the $0.25/tx fee, in addition to the standard network gas fees.",
  },
  {
    question: "Are there any fees for receiving funds into my LayerX wallets?",
    answer:
      "No. There are no fees for receiving cryptocurrencies or fiat payments into your master or sub-wallets. Fees only apply for outgoing transactions (on-chain crypto transfers, fiat payouts), service usage (KYC checks, rule execution), and infrastructure (wallet creation, data storage).",
  },
  {
    question:
      "What happens if I exceed my monthly API call or KYC check limit on a Flat Plan?",
    answer:
      "If you exceed your plan's included limits (e.g., the 50 KYC checks in the Basic plan), the system will typically block further operations until the next billing cycle reset, or in some cases, automatically charge for overages at the Pay-As-You-Go rate. It's best to contact support to configure the behavior that suits your business.",
  },
  {
    question: "What are 'Smart Contract Templates' and how can I use them?",
    answer:
      "Available in the Enterprise Plan, these are pre-audited, customizable smart contracts for common business logic. You can use them to deploy features like Escrow for marketplace payments, Staking pools for reward distributions, or Multi-signature custody solutions directly from the dashboard or via API, saving significant development time and audit costs.",
  },
  {
    question:
      "Can I use LayerX to create a branded crypto wallet for my users?",
    answer:
      "Yes, this is a core feature of the Enterprise Plan. The White-Label Wallet SDKs and White-Label Apps allow you to provide a fully branded web and mobile wallet experience to your end-users, powered by LayerX's secure infrastructure in the background.",
  },
  {
    question: "What is the 'Reseller Program' and how does it work?",
    answer:
      "The Reseller Program allows you to rebrand and resell LayerX's wallet and payment infrastructure to your own clients. You can become a fintech provider yourself. LayerX offers a 20% commission on the revenue generated from your referred sub-accounts, with tracking and reporting managed for you.",
  },
];
