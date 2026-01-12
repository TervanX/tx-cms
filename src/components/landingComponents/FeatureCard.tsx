"use client";

import React from 'react';

interface Feature {
    title: string;
    description: string;
}

const LayerXFeatures: React.FC = () => {
    const features: Feature[] = [
        {
            title: "Wallets as a Service (WaaS)",
            description: "Create, manage, and scale millions of custodial and non-custodial wallets through secure APIs. Built for high availability, programmability, and enterprise controls."
        },
        {
            title: "Digital Asset Custody",
            description: "Institutional-grade custody with advanced security, access controls, and operational safeguards to protect digital assets at scale."
        },
        {
            title: "Crypto & Stablecoin Payments",
            description: "Enable seamless digital asset payments for consumers, merchants, and platforms — including on-chain and off-chain settlement."
        },
        {
            title: "Stablecoin Infrastructure",
            description: "Move, hold, and issue stablecoins with built-in compliance, monitoring, and circulation controls across supported networks."
        },
        {
            title: "Transaction Orchestration & Automation",
            description: "Automate transfers, payouts, collections, and settlements with programmable workflows, limits, and approvals."
        },
        {
            title: "Multi-Chain Infrastructure",
            description: "Native support for multiple blockchains, allowing businesses to build once and operate across chains."
        },
        {
            title: "Compliance & Risk Controls",
            description: "Integrated transaction screening, policy enforcement, role-based access, and audit logs designed for regulatory alignment."
        },
        {
            title: "Developer APIs & SDKs",
            description: "Robust APIs and SDKs that allow developers to integrate digital asset functionality quickly and securely."
        },
        {
            title: "Treasury & Asset Management",
            description: "Real-time balances, reporting, reconciliation, and asset flow management for businesses and institutions."
        },
        {
            title: "Exchange & Liquidity Access",
            description: "Integrated conversion, swaps, and liquidity rails to support real-time asset management and payments."
        }
    ];

    return (
        <section className="relative overflow-hidden py-16 md:py-24 lg:py-32 px-3 md:px-4 lg:px-6 max-w-[1600px] mx-auto">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-blue/10 to-transparent pointer-events-none" />

            {/* Section header */}
            <div className="text-center mb-12 md:mb-16 lg:mb-20">
                <h2 className="font-serif text-white text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.1] tracking-[-0.02em] mb-4">
                    Get to Know Layer X
                </h2>
                <p className="font-sans text-white/80 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
                    Built for scale. Trusted for security.
                </p>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
                {features.map((feature, index) => (
                    <FeatureCard key={index} feature={feature} index={index} />
                ))}
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />
        </section>
    );
};

interface FeatureCardProps {
    feature: Feature;
    index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
    return (
        <div
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 md:p-7 lg:p-8 backdrop-blur-sm hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10"
            data-aos="fade-up"
            data-aos-delay={(index % 4) * 100}
        >
            {/* Card background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Index number */}
            <div className="absolute top-4 right-4 font-mono text-xs text-white/30 font-bold">
                {(index + 1).toString().padStart(2, '0')}
            </div>

            {/* Title */}
            <h3 className="font-serif text-white text-xl md:text-2xl lg:text-2xl font-semibold mb-3 md:mb-4 lg:mb-5 relative z-10">
                {feature.title}
            </h3>

            {/* Description */}
            <p className="font-sans text-white/70 text-sm md:text-base lg:text-base leading-relaxed relative z-10">
                {feature.description}
            </p>

            {/* Hover line indicator */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/10 group-hover:border-blue-500/50 transition-colors duration-500" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/10 group-hover:border-blue-500/50 transition-colors duration-500" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/10 group-hover:border-blue-500/50 transition-colors duration-500" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/10 group-hover:border-blue-500/50 transition-colors duration-500" />
        </div>
    );
};

export default LayerXFeatures;