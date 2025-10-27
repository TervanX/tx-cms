// components/PricingComponents/PricingSection.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import { Check, ChevronDown, CoinsIcon } from "lucide-react";
import Button from "../reusable/Button";
import { pricingPlans, payAsYouGoPlan } from "./data";

interface PricingSectionProps {
  isAnnualBilling: boolean;
  onBillingChange: (isAnnual: boolean) => void;
}

const PricingSection: React.FC<PricingSectionProps> = ({
  isAnnualBilling,
  onBillingChange
}) => {
  const [activeTab, setActiveTab] = useState("fixed");



  const tabs = [
    { id: "fixed", label: "Subscription", plans: pricingPlans },
    { id: "payg", label: "Pay As You Go", plans: [payAsYouGoPlan] }
  ];

  return (
    <div className="w-full mx-auto px-4 py-12">
      {/* Tabs Navigation */}
      <div className="flex items-center gap-2 rounded-lg border border-gray-200 p-4 shadow-sm mx-auto overflow-x-auto no-scrollbar">
        <div className="w-full hidden lg:flex flex-col" >
          <h2 className="text-2xl font-medium text-gray-900">
            Explore features by solutions:
          </h2>
          <p className="text-gray-600">
            All tiers include every solution
          </p>
        </div>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`whitespace-nowrap px-6 py-3 text-xs uppercase tracking-wide transition-all w-full ${activeTab === tab.id
              ? "bg-gray-100 text-black shadow-sm"
              : "bg-transparent text-gray-600 hover:text-gray-800"
              }`}
          >
            <span className="text-sm font-medium tracking-normal">
              {tab.label}
            </span>
          </button>
        ))}
      </div>

      {/* Pricing Cards */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-8 w-full">
        {tabs
          .find(tab => tab.id === activeTab)
          ?.plans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              isAnnualBilling={isAnnualBilling}
              isPayg={activeTab === "payg"}
            />
          ))}
      </div>

      <p className="text-base font-medium text-dark/80 text-center mt-8">
        Prices exclude any applicable taxes.
      </p>
    </div>
  );
};

interface PricingCardProps {
  plan: any;
  isAnnualBilling: boolean;
  isPayg?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, isAnnualBilling, isPayg = false }) => {
  const scrollToComparison = () => {
    const comparisonSection = document.getElementById('compare-plans');
    if (comparisonSection) {
      comparisonSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      comparisonSection.classList.add('highlight-section');
      setTimeout(() => {
        comparisonSection.classList.remove('highlight-section');
      }, 2000);
    }
  };

  const currentPrice = isAnnualBilling ? plan.price : plan.monthlyPrice;
  const priceNote = isAnnualBilling ? plan.priceNote : plan.monthlyPriceNote;
  const creditsNote = isAnnualBilling ? plan.creditsNote : plan.monthlyCreditsNote;

  return (
    <div
      className={`border border-solid overflow-hidden rounded-xl font-medium h-full flex flex-col ${plan.mostPopular
        ? "border-[#e0e0e2] border-2 bg-[#FFFFF7]"
        : "border-[#E5E7EB] bg-white"
        }`}
    >
      {plan.mostPopular && (
        <div className="px-6 pt-6">
          <span className="bg-yellow1 text-black text-xs font-mono py-1 px-2 rounded-lg">
            Most Popular
          </span>
        </div>
      )}

      <div className={`flex flex-col flex-1 p-6 ${plan.mostPopular ? '' : 'pt-6'}`}>
        {/* Plan Header */}
        <div className="mb-6">
          <h3 className="text-xl font-medium">{plan.name}</h3>
          <p className="text-sm text-dark mt-2">
            {plan.description}
          </p>
        </div>

        {/* Pricing */}
        <div className="mb-6">
          <div className="text-2xl lg:text-3xl font-grotesque font-medium my-4">
            {currentPrice === 0 ? (isPayg ? "Flexible" : "Free") : `$${currentPrice}`}
            {currentPrice !== 0 && !isPayg && (
              <span className="text-sm ml-1">/mo</span>
            )}
          </div>
          <p className="text-sm text-gray-600">
            {priceNote}
          </p>
        </div>

        {/* Credits/Usage */}
        {!isPayg && (
          <div className="mb-6 py-2 flex items-start gap-2">
            <CoinsIcon className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
            <div className="flex flex-col">
              {plan.credits > 0 && (
                <span className="text-sm text-gray-600">
                  {isAnnualBilling
                    ? `${plan.credits.toLocaleString()} credits`
                    : `${Math.round(plan.credits / 12).toLocaleString()} credits`
                  }
                </span>
              )}
              <span className="text-xs text-gray-600">
                {creditsNote}
              </span>
              <Link href={`/pricing/${plan.id}`} className="text-xs underline mt-1">
                Learn more
              </Link>
            </div>
          </div>
        )}

        {/* Pay-As-You-Go Pricing Breakdown */}
        {isPayg && (
          <div className="mb-6 py-2 flex items-start gap-2">
            <CoinsIcon className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
            <div className="flex flex-col">
              <span className="text-sm text-gray-600">
                Usage-based pricing
              </span>
              <span className="text-xs text-gray-600">
                Pay only for what you use
              </span>
              <Link
                href={{
                  pathname: `/pricing/${plan.id}`,
                  query: {
                    plan: 'payg',
                    details: 'true'
                  }
                }}
                className="text-xs underline mt-1"
              >
                View pricing details
              </Link>
            </div>
          </div>
        )}

        {/* CTA Button */}
        <div className="flex flex-col gap-4 w-full mb-6">
          <Button
            size="md"
            variant={plan.buttonVariant}
            type="button"
            onClick={() => console.log(`Selected ${plan.name}`)}
            className="w-full py-3"
          >
            {plan.buttonText}
          </Button>
          {plan.CtaText && <p className="text-center text-lg text-black text-medium">{plan.CtaText}</p>}
          {plan.CtaButton && (
            <Button
              size="md"
              variant="outline"
              type="button"
              className="w-full py-3"
            >
              {plan.CtaButton}
            </Button>
          )}
        </div>

        {/* Features */}
        <div className="w-full flex flex-col gap-3 mb-6 flex-1">
          {plan.features.map((feature: string, index: number) => (
            <div
              key={index}
              className="flex items-start justify-start w-full gap-2"
            >
              <Check size={16} className="flex-shrink-0 text-green-600 mt-0.5" />
              <p className="text-sm text-dark/80">{feature}</p>
            </div>
          ))}
        </div>

        {/* Compare Plans Button */}
        {!isPayg && (
          <div className="flex items-center justify-center pt-4 border-t border-gray-200">
            <Button
              size="md"
              variant="ghost"
              type="button"
              onClick={scrollToComparison}
              icon={
                <ChevronDown
                  size={14}
                  className="transition-transform"
                />
              }
              iconPosition="right"
              className="text-sm"
            >
              Compare all Plans
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingSection;