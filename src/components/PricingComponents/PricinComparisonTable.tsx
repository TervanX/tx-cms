
"use client";
import { FaCheck } from "react-icons/fa6";
import React from "react";
import Button from "../reusable/Button";
import { pricingPlans, comparisonData } from "./data";

interface PricingComparisonTableProps {
    isAnnualBilling?: boolean;
}

const PricingComparisonTable: React.FC<PricingComparisonTableProps> = ({
    isAnnualBilling = true
}) => {
    const CheckIcon = () => (
        <div className="flex items-center justify-center text-white bg-black/70 rounded-full p-1">
            <FaCheck size={10} />
        </div>
    );

    return (
        <div className="w-full bg-white py-12">
            {/* Header */}
            <div className="mb-12">
                <h2 className="font-grotesque text-3xl lg:text-4xl font-normal mb-4">
                    Compare plans
                </h2>
            </div>

            {/* Plans Header */}
            <div className="overflow-x-auto">
                <div className="min-w-[800px]  p-4">
                    {/* Plans Row */}
                    <div className="grid grid-cols-5 border-b border-gray-200">
                        <div className="p-4 border-r border-gray-200">
                            {/* Empty header cell */}
                        </div>
                        {pricingPlans.map((plan, index) => {
                            const currentPrice = isAnnualBilling ? plan.price : plan.monthlyPrice;
                            const priceNote = isAnnualBilling ? plan.priceNote : plan.monthlyPriceNote;
                            const creditsNote = isAnnualBilling
                                ? `${plan.credits.toLocaleString()} credits`
                                : `${Math.round(plan.credits / 12).toLocaleString()} credits`

                            return (
                                <div key={index} className={`p-4 ${index < pricingPlans.length - 1 ? 'border-r border-gray-200' : ''}`}>
                                    <div className="flex gap-2 justify-between items-start w-full">
                                        <h3 className="text-xl font-medium mb-2">{plan.name}</h3>
                                        {plan.mostPopular && (
                                            <div className="flex-shrink-0">
                                                <span className="bg-yellow1 text-black text-xs font-mono py-1 px-2 rounded-lg">
                                                    Most Popular
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="text-2xl font-grotesque mb-2">
                                        ${currentPrice}
                                    </div>
                                    <div className="text-sm text-gray-600 mb-4 min-h-[40px] flex flex-col">
                                        {priceNote}
                                        <span>
                                            {creditsNote}
                                        </span>
                                    </div>
                                    <Button
                                        size="md"
                                        variant={plan.buttonVariant}
                                        type="button"
                                        className="w-full"
                                    >
                                        {plan.buttonText}
                                    </Button>
                                </div>
                            );
                        })}
                    </div>

                    {/* Comparison Data */}
                    {comparisonData.map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                            {section.items.map((item, itemIndex) => (
                                <div key={itemIndex} className="grid text-sm  text-black/80 grid-cols-5 border-b border-gray-200 last:border-b-0">
                                    <div className="border-r p-2 border-gray-200 font-medium">
                                        {item.name}
                                    </div>
                                    {item.values.map((value, valueIndex) => (
                                        <div
                                            key={valueIndex}
                                            className={`p-2 text-center flex items-center justify-center ${valueIndex < item.values.length - 1 ? 'border-r border-gray-200' : ''
                                                }`}
                                        >
                                            {value || "-"}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PricingComparisonTable;