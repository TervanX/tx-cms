"use client";
import React from 'react';
import { Check, ArrowLeft, Info } from 'lucide-react';
import Link from 'next/link';
import Button from '../reusable/Button';

type CorePricingItem = {
    feature: string;
    cost: string;
    description?: string;
};

type AddOn = {
    name: string;
    description?: string;
    price?: string;
};

type Bundle = {
    price: string;
    description?: string;
    includes: string[];
};

type FreeTier = {
    description?: string;
    includes: string[];
};

type DetailedPricing = {
    description?: string;
    corePricing: CorePricingItem[];
    starterBundle: Bundle;
    freeTier: FreeTier;
    safeguards: string[];
    developerFeatures: string[];
    targetAudience: string[];
    addOns: AddOn[];
};

type PaygPlan = {
    detailedPricing?: DetailedPricing;
};

interface PayAsYouGoDetailsProps {
    plan: PaygPlan;
}

const PayAsYouGoDetails: React.FC<PayAsYouGoDetailsProps> = ({ plan }) => {
    if (!plan.detailedPricing) return null;

    const {
        detailedPricing: {
            description,
            corePricing,
            starterBundle,
            freeTier,
            safeguards,
            developerFeatures,
            targetAudience,
            addOns
        }
    } = plan;

    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-14 py-12">
          {/* Core Pricing Breakdown */}
          <section className="mb-16">
            <div className="mb-8">
              <h2 className="text-2xl font-medium text-gray-900 mb-2">
                Core Pricing Breakdown
              </h2>
              <p className="text-gray-600">
                Pay only for what you use with our flexible pricing model
              </p>
            </div>
            <div className="border border-[#E5E7EB] rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                        Feature
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                        Unit Cost
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {corePricing.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          {item.feature}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                          {item.cost}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {item.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Grid Layout for Bundles */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Starter Bundle */}
            <div className="border border-[#E5E7EB] rounded-xl p-8 bg-white">
              <div className="mb-6">
                <h2 className="text-2xl font-medium text-gray-900 mb-2">
                  Starter Bundle
                </h2>
                <p className="text-gray-600">
                  Perfect for teams launching MVPs and testing payment rails
                </p>
              </div>
              <div className="flex items-baseline justify-between mb-6">
                <h3 className="text-xl font-medium text-gray-900">
                  {starterBundle.price}
                </h3>
                <span className="text-sm text-gray-600">Billed monthly</span>
              </div>
              <p className="text-gray-600 mb-6">{starterBundle.description}</p>
              <div className="space-y-3 mb-8">
                {starterBundle.includes.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check
                      size={16}
                      className="text-black mt-0.5 flex-shrink-0"
                    />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact/contact-sales">
                <Button size="md" variant="primary" className="w-full">
                  Get Started with Starter Bundle
                </Button>
              </Link>
            </div>

            {/* Free Tier */}
            <div className="border border-[#E5E7EB] rounded-xl p-8 bg-white">
              <div className="mb-6">
                <h2 className="text-2xl font-medium text-gray-900 mb-2">
                  Free Tier
                </h2>
                <p className="text-gray-600">
                  Start building immediately with our sandbox environment
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-900">Free</h3>
                <p className="text-gray-600 text-sm">No credit card required</p>
              </div>
              <p className="text-gray-600 mb-6">{freeTier.description}</p>
              <div className="space-y-3 mb-8">
                {freeTier.includes.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check
                      size={16}
                      className="textblack mt-0.5 flex-shrink-0"
                    />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact/contact-sales">
                <Button size="md" variant="outline" className="w-full">
                  Start with Free Tier
                </Button>
              </Link>
            </div>
          </div>

          {/* Grid Layout for Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Safeguards & Security */}
            <div className="border border-[#E5E7EB] rounded-xl p-6 bg-white">
              <div className="flex items-center gap-3 mb-4">
                <Info size={20} className="text-gray-600" />
                <h2 className="text-xl font-medium text-gray-900">
                  Safeguards & Security
                </h2>
              </div>
              <p className="text-gray-600 mb-4">
                Enterprise-grade security measures to protect your operations
              </p>
              <ul className="space-y-3">
                {safeguards.map((safeguard, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm text-gray-700"
                  >
                    <Check
                      size={16}
                      className="text-black mt-0.5 flex-shrink-0"
                    />
                    {safeguard}
                  </li>
                ))}
              </ul>
            </div>

            {/* Developer Features */}
            <div className="border border-[#E5E7EB] rounded-xl p-6 bg-white">
              <div className="flex items-center gap-3 mb-4">
                <Info size={20} className="text-gray-600" />
                <h2 className="text-xl font-medium text-gray-900">
                  Developer Features
                </h2>
              </div>
              <p className="text-gray-600 mb-4">
                Tools and infrastructure designed for developers
              </p>
              <ul className="space-y-3">
                {developerFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm text-gray-700"
                  >
                    <Check
                      size={16}
                      className="text-black mt-0.5 flex-shrink-0"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Target Audience */}
          <section className="mb-16">
            <div className="mb-8">
              <h2 className="text-2xl font-medium text-gray-900 mb-2">
                Who It's For
              </h2>
              <p className="text-gray-600">
                Ideal for teams building customer-facing financial applications
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {targetAudience.map((audience, index) => (
                <div
                  key={index}
                  className="border border-[#E5E7EB] rounded-xl p-6 bg-white"
                >
                  <div className="flex items-start gap-3">
                    <Check
                      size={16}
                      className="text-black mt-0.5 flex-shrink-0"
                    />
                    <p className="text-gray-700 text-sm">{audience}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Detailed Add-Ons Section */}
          <section className="mb-16">
            <div className="mb-8">
              <h2 className="text-2xl font-medium text-gray-900 mb-2">
                LayerX Add-Ons
              </h2>
              <p className="text-gray-600">
                Enhance your plan with modular extensions for scalability,
                compliance, and deeper integration.
              </p>
            </div>
            <div className="border border-[#E5E7EB] rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                        Add-On
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                        Description
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {addOns.map((addon, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          {addon.name}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {addon.description}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900 font-medium whitespace-pre-line">
                          {addon.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
};

export default PayAsYouGoDetails;