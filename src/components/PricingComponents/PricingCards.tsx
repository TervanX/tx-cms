"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Check, ChevronDown, CoinsIcon } from "lucide-react";
import Button from "../reusable/Button";
import { pricingPlans, payAsYouGoPlan } from "./data";

interface PricingSectionProps {
  isAnnualBilling: boolean;
  onBillingChange: (isAnnual: boolean) => void;
  forceActiveTab?: string;
}

const PricingSection: React.FC<PricingSectionProps> = ({
  isAnnualBilling,
  onBillingChange,
  forceActiveTab
}) => {
  const [activeTab, setActiveTab] = useState("fixed");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const tabs = [
    { id: "fixed", label: "Subscription", plans: pricingPlans },
    // { id: "payg", label: "Pay As You Go", plans: [payAsYouGoPlan] }
  ];

  useEffect(() => {
    if (forceActiveTab) {
      setActiveTab(forceActiveTab);
    }
  }, [forceActiveTab]);

  const featurePricing = payAsYouGoPlan.detailedPricing.corePricing.map(item => {
    const costMatch = item.cost.match(/(\d+\.?\d*)/);
    const price = costMatch ? parseFloat(costMatch[1]) : 0;
    const isPercentage = item.cost.includes('%');


    return {
      id: item.feature.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      name: item.feature,
      price,
      isPercentage,
      description: item.description,
      originalCost: item.cost
    };
  });

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures(prev =>
      prev.includes(featureId)
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };
  const router = useRouter()
  const handleTabClick = (tabId: string) => {
    if (tabId === "payg") {
      router.push("/pricing/payg");
    } else {
      router.push("/pricing")
    }
  };

  const calculateTotal = () => {
    return selectedFeatures.reduce((total, featureId) => {
      const feature = featurePricing.find(f => f.id === featureId);
      return total + (feature?.price || 0);
    }, 0);
  };



  return (
    <div className="w-full mx-auto px-4 py-12">
      {/* Tabs Navigation */}
      <div className="flex items-center gap-2 rounded-lg border border-gray-200 p-4 shadow-sm mx-auto overflow-x-auto no-scrollbar">
        <div className="w-full hidden lg:flex flex-col">
          <h2 className="text-2xl font-medium text-gray-900">
            Explore features by solutions:
          </h2>
          <p className="text-gray-600">All tiers include every solution</p>
        </div>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`whitespace-nowrap px-6 py-3 text-xs uppercase tracking-wide bg-gray-100 transition-all w-full ${activeTab === tab.id
              ? "bg-white text-black shadow-sm"
              : " text-black hover:text-gray-800"
              }`}
          >
            <span className="text-sm font-medium tracking-normal">
              {tab.label}
            </span>
          </button>
        ))}
      </div>

      {/* Pay As You Go Calculator Section */}
      {activeTab === "payg" && (
        <div className="mt-12 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-medium text-gray-900 mb-4">
              Build Your Custom Usage Based Plan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select the features you need, LayerX usage-based model lets you
              scale elastically
            </p>
          </div>

          <div className="flex justify-center gap-8 w-full mx-auto">
            {/* Feature Selection */}
            {/* <div className="py-6 px-2 bg-white">
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-xl font-medium text-gray-900">
                  What are you looking for?
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {featurePricing.map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => toggleFeature(feature.id)}
                    className={`rounded-full p-1 text-xs font-bold transition-all border flex items-center justify-center gap-2 ${selectedFeatures.includes(feature.id)
                      ? "border-blue-300 bg-blue-50 text-blue-700"
                      : "bg-white text-gray-700 border-none hover:border-blue-300 hover:bg-blue-50"
                      }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${selectedFeatures.includes(feature.id)
                        ? "bg-blue-500 border-blue-500"
                        : "bg-white border-gray-400"
                        }`}
                    >
                      <Check
                        size={12}
                        className={`text-white transition-all ${selectedFeatures.includes(feature.id)
                          ? "opacity-100"
                          : "opacity-0"
                          }`}
                      />
                    </div>
                    {feature.name}
                  </button>
                ))}
              </div>
            </div> */}

            {/* Pay As You Go Summary */}
            {/* <div className="border border-gray-200 rounded-xl p-6 bg-white overflow-hidden h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-xl font-medium text-gray-900">
                  Pay As You Go
                </h3>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Flexible — pay only for what you use.
              </p>
              <div className="space-y-6">
                <div className="pt-4">
                  <span className="text-3xl font-medium text-black  font-grotesque">
                    ${calculateTotal().toFixed(2)}
                  </span>
                  <p className="text-sm text-gray-600 text-uppercase">
                    per feature
                  </p>
                </div>
                {selectedFeatures.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900 text-sm">
                      Selected Features:
                    </h4>
                    <p className="text-sm text-gray-600 flex items-start">
                      <div className="border-primary border-1  p-1 mr-1 rounded-full">
                        {" "}
                        <Check
                          size={12}
                          className="flex-shrink-0 text-blue-600 "
                        />
                      </div>
                      {selectedFeatures
                        .map((featureId) => {
                          const feature = featurePricing.find(
                            (f) => f.id === featureId
                          );
                          return feature ? feature.name : null;
                        })
                        .filter(Boolean)
                        .join(", ")}
                    </p>
                  </div>
                )}

              
                <Link href="/contact/contact-sales">
                  <Button size="md" variant="primary" className="w-full py-3">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div> */}
            {/* Enterprise Plan Card */}
            <div className="border-2 border-blue-500 rounded-xl bg-gradient-to-br from-blue-50 to-white overflow-hidden h-full flex flex-col">
              <div className="flex flex-col flex-1 p-6">
                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-medium text-gray-900">
                    Pay As You Go
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Flexible — pay only for what you use.
                  </p>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="text-2xl lg:text-3xl font-grotesque font-medium my-4">
                    Custom Pricing
                  </div>
                  <p className="text-sm text-gray-600">
                    Volume-based discounts on Pay As You Go
                  </p>
                </div>
                {/* Features */}
                <div className="w-full flex flex-col gap-3 mb-6 flex-1">
                  {[
                    "Custom volume pricing",
                    ,
                    "Priority 24/7 support",
                    "SLA guarantees",
                    "Advanced analytics",
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start justify-start w-full gap-2"
                    >
                      <Check
                        size={16}
                        className="flex-shrink-0 text-blue-600 mt-0.5"
                      />
                      <p className="text-sm text-gray-700">{feature}</p>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="flex flex-col gap-4 w-full">
                  <Link href="/contact/contact-sales">
                    <Button
                      size="md"
                      variant="primary"
                      type="button"
                      className="w-full py-3 bg-blue-600 hover:bg-blue-700"
                    >
                      Contact Sales
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Subscription Plans (including Enterprise) */}
      {activeTab === "fixed" && (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-8 w-full md:w-[70%] mx-auto">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              isAnnualBilling={isAnnualBilling}
              isPayg={false}
            />
          ))}
        </div>
      )}

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
      className={`overflow-hidden rounded-xl font-medium h-full flex flex-col ${plan.mostPopular
        ? "border border-[#e0e0e2] border-2 bg-[#D1ECFF]/80"
        : pricingPlans.indexOf(plan) === 0
          ? "border-b border-[#E5E7EB] bg-white sm:border-b-0 sm:border-r"
          : pricingPlans.indexOf(plan) < pricingPlans.length - 1
            ? "bg-white sm:border-r border-[#E5E7EB]"
            : "bg-white"
        } ${
        // Small screens: only first item has bottom border
        pricingPlans.indexOf(plan) === 0 ? "border-b border-[#E5E7EB]" : "border-0"
        } ${
        // Medium+ screens: right borders except last item
        pricingPlans.indexOf(plan) < pricingPlans.length - 1 ? "sm:border-r border-[#E5E7EB]" : ""
        }`}
    >
      {plan.mostPopular ? (
        <div className="px-4 pt-2">
          <span className="bg-primary text-white text-xs font-mono py-1 px-2 rounded-lg">
            Most Popular
          </span>
        </div>
      ) : <div className="px-4 pt-2">
        <span className="text-white text-xs font-mono py-1 px-2 rounded-lg">
        </span>
      </div>}
      <div className={`flex flex-col flex-1 px-4 py-2 ${plan.mostPopular ? '' : ''} grid grid-rows-[80px_80px_100px_100px_1fr_60px] `}>
        {/* Plan Header */}
        <div className="mb-0">
          <h3 className="text-xl font-medium">{plan.name}</h3>
          <p className="text-sm text-dark mt-2 ">
            {plan.description}
          </p>
        </div>

        {/* Pricing */}
        <div className="mb-0">
          <div className="text-2xl lg:text-3xl font-grotesque font-medium my-4">
            {currentPrice === 0 ? (isPayg ? "Flexible" : "Free") : `${currentPrice}`}
            {currentPrice !== 0 && !isPayg && (
              <span className="text-sm ml-1">{isAnnualBilling ? "/mo" : "/mo"}</span>
            )}
          </div>
          <p className="text-sm text-gray-600 line-clamp-2">
            {priceNote}
          </p>
        </div>


        {/* Credits/Usage */}
        {!isPayg && (
          <div className="mb-2 py-2 flex items-start gap-2">
            {/* <CoinsIcon className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" /> */}
            <div className="flex flex-col">
              {/* {plan.credits > 0 && (
                <span className="text-sm text-gray-600">
                  {isAnnualBilling
                    ? `${plan.credits.toLocaleString()} credits`
                    : `${Math.round(plan.credits / 12).toLocaleString()} credits`
                  }
                </span>
              )} */}
              {/* <span className="text-xs text-gray-600">
                {creditsNote}
              </span> */}
              {plan.detailInfo &&
                <Link href={`/pricing/${plan.id}`} className="text-xs underline mt-1">
                  Learn more
                </Link>}
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
        <div className="flex flex-col w-full mb-4">

          {plan.CtaButton && (
            <Link href="/contact/contact-sales">
              <Button
                size="md"
                variant={plan.buttonVariant}
                type="button"
                className="w-full py-3"
              >
                {plan.CtaButton}
              </Button>
            </Link>
          )}
        </div>

        {/* Features */}
        <div className="w-full flex flex-col gap-3 mb-6 flex-1">
          {plan.features.map((feature: string, index: number) => (
            <div
              key={index}
              className="flex items-start justify-start w-full gap-2"
            >
              <Check size={16} className="flex-shrink-0 text-black mt-0.5" />
              <p className="text-sm text-dark/80">{feature}</p>
            </div>
          ))}
        </div>

        {/* Compare Plans Button */}
        {!isPayg && (
          <div className="flex items-center justify-center pt-4">
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