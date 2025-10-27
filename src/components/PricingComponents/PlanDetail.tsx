// components/PricingComponents/PlanDetailPage.tsx
"use client";
import { Check, ArrowLeft, Info } from "lucide-react";
import Button from "../reusable/Button";
import { useRouter } from "next/navigation";
import { pricingPlans } from "./data";

interface PlanDetailPageProps {
    planId: string;
    isAnnualBilling?: boolean;
}

const PlanDetailPage: React.FC<PlanDetailPageProps> = ({ planId, isAnnualBilling = true }) => {
    const router = useRouter();

    const plan = pricingPlans.find(p => p.id === planId);

    if (!plan || !plan.detailInfo) {
        return (
            <div className="min-h-screen bg-white py-8 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-medium text-gray-900 mb-4">Plan not found</h1>
                    <Button onClick={() => router.push('/pricing')}>
                        Back to Pricing
                    </Button>
                </div>
            </div>
        );
    }

    const currentPrice = isAnnualBilling ? plan.price : plan.monthlyPrice;

    // Safe feature sections - only render if features exist and are an array
    const renderFeatureSection = (title: string, features: any[] | undefined) => {
        if (!features || !Array.isArray(features) || features.length === 0) {
            return null;
        }
        return <FeatureSection title={title} features={features} />;
    };

    return (
        <div className="min-h-screen bg-white py-8">
            <div className="max-w-7xl mx-auto px-4 lg:px-14">
                {/* Header */}
                <div className="mb-8">
                    <button
                        onClick={() => router.push('/pricing')}
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
                    >
                        <ArrowLeft size={20} />
                        Back to Pricing
                    </button>

                    <div className="border border-[#E5E7EB] rounded-xl p-8 bg-white">
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                            <div>
                                <h1 className="text-3xl lg:text-4xl font-medium text-gray-900 mb-2">
                                    {plan.name}
                                </h1>
                                <p className="text-lg text-gray-600 mb-4">
                                    {plan.description}
                                </p>
                                {plan.detailInfo.idealForDescription && (
                                    <p className="text-gray-700 mb-4 max-w-2xl">
                                        {plan.detailInfo.idealForDescription}
                                    </p>
                                )}
                                <div className="flex items-center gap-4">
                                    <div className="text-3xl font-medium text-gray-900">
                                        {currentPrice === 0 ? 'Free' : `$${currentPrice}`}
                                        {currentPrice !== 0 && <span className="text-lg font-normal text-gray-600">/month</span>}
                                    </div>
                                    {plan.detailInfo.quota && (
                                        <div className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                                            {plan.detailInfo.quota}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <Button
                                    size="md"
                                    variant={plan.buttonVariant}
                                    className="px-8 py-3"
                                    onClick={() => console.log(`Selected ${plan.name}`)}
                                >
                                    {plan.buttonText}
                                </Button>
                                {plan.CtaText && (
                                    <p className="text-center text-sm text-gray-600">{plan.CtaText}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Features Column */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Core Infrastructure */}
                        {renderFeatureSection(
                            "Core Infrastructure",
                            plan.detailInfo.coreInfrastructure
                        )}

                        {/* Wallet Infrastructure */}
                        {renderFeatureSection(
                            "Wallet & Asset Infrastructure",
                            plan.detailInfo.walletInfrastructure
                        )}

                        {/* Dashboard & Analytics */}
                        {renderFeatureSection(
                            "Dashboard & Analytics",
                            plan.detailInfo.dashboard
                        )}

                        {/* Compliance & Security */}
                        {renderFeatureSection(
                            "Compliance & Security",
                            plan.detailInfo.compliance
                        )}

                        {/* Policy Engine */}
                        {renderFeatureSection(
                            "Policy Engine",
                            plan.detailInfo.policyEngine
                        )}

                        {/* Payment Tools */}
                        {renderFeatureSection(
                            "Payment & Collection Tools",
                            plan.detailInfo.paymentTools
                        )}

                        {/* Payment Integration */}
                        {renderFeatureSection(
                            "Payment Integration",
                            plan.detailInfo.paymentIntegration
                        )}

                        {/* Developer Experience */}
                        {renderFeatureSection(
                            "Developer Experience",
                            plan.detailInfo.developer
                        )}

                        {/* Automation */}
                        {renderFeatureSection(
                            "Automation & Intelligence",
                            plan.detailInfo.automation
                        )}

                        {/* Smart Contracts */}
                        {renderFeatureSection(
                            "Smart Contract & Automation Layer",
                            plan.detailInfo.smartContracts
                        )}

                        {/* Settlement */}
                        {renderFeatureSection(
                            "Settlement & Payment Infrastructure",
                            plan.detailInfo.settlement
                        )}

                        {/* Reporting & Analytics */}
                        {renderFeatureSection(
                            "Reporting & Audit Tools",
                            plan.detailInfo.reporting
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Safeguards */}
                        {plan.detailInfo.safeguards && plan.detailInfo.safeguards.length > 0 && (
                            <div className="border border-[#E5E7EB] rounded-xl p-6 bg-white">
                                <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
                                    <Info size={20} className="text-gray-600" />
                                    Security Safeguards
                                </h3>
                                <ul className="space-y-3">
                                    {plan.detailInfo.safeguards.map((safeguard, index) => (
                                        <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                                            <Check size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                                            {safeguard}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Deployment Options */}
                        {plan.detailInfo.deployment && plan.detailInfo.deployment.length > 0 && (
                            <div className="border border-[#E5E7EB] rounded-xl p-6 bg-white">
                                <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
                                    <Info size={20} className="text-gray-600" />
                                    Deployment & Scalability
                                </h3>
                                <ul className="space-y-3">
                                    {plan.detailInfo.deployment.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                                            <Check size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Customization */}
                        {plan.detailInfo.customization && plan.detailInfo.customization.length > 0 && (
                            <div className="border border-[#E5E7EB] rounded-xl p-6 bg-white">
                                <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
                                    <Info size={20} className="text-gray-600" />
                                    Customization & White-Label
                                </h3>
                                <ul className="space-y-3">
                                    {plan.detailInfo.customization.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                                            <Check size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Support */}
                        {plan.detailInfo.support && plan.detailInfo.support.length > 0 && (
                            <div className="border border-[#E5E7EB] rounded-xl p-6 bg-white">
                                <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
                                    <Info size={20} className="text-gray-600" />
                                    Support
                                </h3>
                                <ul className="space-y-3">
                                    {plan.detailInfo.support.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                                            <Check size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Ideal For */}
                        {plan.detailInfo.idealFor && plan.detailInfo.idealFor.length > 0 && (
                            <div className="border border-[#E5E7EB] rounded-xl p-6 bg-white">
                                <h3 className="text-lg font-medium text-gray-900 mb-4">
                                    Who It's For
                                </h3>
                                <ul className="space-y-2">
                                    {plan.detailInfo.idealFor.map((item, index) => (
                                        <li key={index} className="text-sm text-gray-700 flex items-start gap-3">
                                            <Check size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Feature Section Component
interface FeatureSectionProps {
    title: string;
    features: string[];
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ title, features }) => {
    // Double safety check
    if (!features || !Array.isArray(features) || features.length === 0) {
        return null;
    }

    return (
        <div className="border border-[#E5E7EB] rounded-xl p-6 bg-white">
            <div className="flex items-center gap-3 mb-4">
                <h2 className="text-xl font-medium text-gray-900">{title}</h2>
            </div>
            <ul className="space-y-3">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                        <Check size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PlanDetailPage;