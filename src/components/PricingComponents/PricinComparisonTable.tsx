
"use client";
import Link from "next/link";
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
            <div className="overflow-x-auto ">
                <div className="min-w-[800px]  p-4 border-b border-gray-200">
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
                                <div key={index} className={`p-4 grid grid-rows-[auto_auto_1fr_auto] ${index < pricingPlans.length - 1 ? 'border-r border-gray-200' : ''}`}>
                                    {/* This will make all sections equal height across cards */}
                                    <div className="flex gap-2 justify-between items-start w-full min-h-[60px]">
                                        <h3 className="text-xl font-medium">{plan.name}</h3>
                                        {plan.mostPopular && (
                                            <div className="hidden lg:flex flex-shrink-0">
                                                <span className="bg-primary text-white text-xs font-mono py-1 px-2 rounded-lg">
                                                    Most Popular
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="text-2xl font-grotesque my-2">
                                        ${currentPrice}
                                    </div>

                                    <div className="text-sm text-gray-600 min-h-[60px] flex flex-col">
                                        {priceNote}
                                        <span>
                                            {creditsNote}
                                        </span>
                                    </div>
                                    <Link href="/contact/contact-sales">
                                        <Button
                                            size="md"
                                            variant={plan.buttonVariant}
                                            type="button"
                                            className="w-full mt-4"
                                        >
                                            {plan.buttonText}
                                        </Button>
                                    </Link>
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
                                            className={`p-2 text-start flex items-start ${valueIndex < item.values.length - 1 ? 'border-r border-gray-200' : ''
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