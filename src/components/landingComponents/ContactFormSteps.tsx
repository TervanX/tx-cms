"use client";
import { FormData, FormErrors } from "@/app/types/contact.types";

interface ContactFormStepsProps {
    currentStep: number;
    formData: FormData;
    errors: FormErrors;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    onCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onRadioChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onPrevStep: () => void;
    onNextStep: () => void;
    onSubmit: (e: React.FormEvent) => void;
}

const countries = [
    "Nigeria", "Ghana", "Kenya", "United Kingdom",
    "United States", "South Africa", "Canada", "Other"
];

const businessTypes = [
    "Fintech or Bank",
    "Crypto Exchange or Wallet",
    "Payment Gateway / Processor",
    "eCommerce or Marketplace",
    "SaaS / Platform",
    "NGO / Enterprise / Government",
    "Other"
];

const monthlyVolumes = [
    "Less than $10k",
    "$10k – $50k",
    "$50k – $250k",
    "$250k – $1M",
    "Above $1M"
];

const helpOptions = [
    "Accept Crypto Payments",
    "Issue Crypto Cards",
    "Build on Digital Asset Infrastructure (API)",
    "Use AutoTrade or Plugin Systems",
    "Integrate TervanX Checkout",
    "Compliance / KYC Solutions",
    "Something else"
];

const contactMethods = ["Email", "WhatsApp", "Phone Call"];

export default function ContactFormSteps({
    currentStep,
    formData,
    errors,
    onInputChange,
    onCheckboxChange,
    onRadioChange,
    onPrevStep,
    onNextStep,
    onSubmit
}: ContactFormStepsProps) {

    const renderStep1 = () => (
        <div className="flex flex-col gap-5">
            {/* Full Name */}
            <div className="flex flex-col ">
                <label htmlFor="field-fullName" className={`block font-bold ${errors.fullName ? 'text-red-700' : ''}`}>
                    Full Name *
                </label>
                <div className="relative">
                    <input
                        name="fullName"
                        type="text"
                        id="field-fullName"
                        placeholder="Enter your full name"
                        required
                        value={formData.fullName}
                        onChange={onInputChange}
                        className={`w-full py-2 border-b focus:outline-none ${errors.fullName ? 'border-red-700' : ''}`}
                    />
                </div>
                {errors.fullName && (
                    <span className="text-red-700 text-sm mt-1">{errors.fullName}</span>
                )}
            </div>

            {/* Work Email */}
            <div className="flex flex-col">
                <label htmlFor="field-workEmail" className={`block font-bold ${errors.workEmail ? 'text-red-700' : ''}`}>
                    Work Email *
                </label>
                <div className="relative">
                    <input
                        name="workEmail"
                        type="email"
                        id="field-workEmail"
                        placeholder="you@company.com"
                        required
                        value={formData.workEmail}
                        onChange={onInputChange}
                        className={`w-full py-2 border-b focus:outline-none ${errors.workEmail ? 'border-red-700' : ''}`}
                    />
                </div>
                {errors.workEmail && (
                    <span className="text-red-700 text-sm mt-1">{errors.workEmail}</span>
                )}
            </div>

            {/* Company Name */}
            <div className="flex flex-col">
                <label htmlFor="field-companyName" className={`block font-bold ${errors.companyName ? 'text-red-700' : ''}`}>
                    Company Name *
                </label>
                <div className="relative">
                    <input
                        name="companyName"
                        type="text"
                        id="field-companyName"
                        placeholder="Your company name"
                        required
                        value={formData.companyName}
                        onChange={onInputChange}
                        className={`w-full py-2 border-b focus:outline-none ${errors.companyName ? 'border-red-700' : ''}`}
                    />
                </div>
                {errors.companyName && (
                    <span className="text-red-700 text-sm mt-1">{errors.companyName}</span>
                )}
            </div>
        </div>
    );

    const renderStep2 = () => (
        <div className="flex flex-col gap-5">
            {/* Company Website */}
            <div className="flex flex-col">
                <label htmlFor="field-companyWebsite" className={`block font-bold ${errors.companyWebsite ? 'text-red-700' : ''}`}>
                    Company Website
                </label>
                <input
                    name="companyWebsite"
                    type="url"
                    id="field-companyWebsite"
                    placeholder="https://example.com"
                    value={formData.companyWebsite}
                    onChange={onInputChange}
                    className={`w-full py-2 border-b focus:outline-none ${errors.companyWebsite ? 'border-red-700' : ''}`}
                />
            </div>

            {/* Country */}
            <div className="flex flex-col ">
                <label htmlFor="field-country" className={`block font-bold ${errors.country ? 'text-red-700' : ''}`}>
                    Country / Region *
                </label>
                <select
                    name="country"
                    id="field-country"
                    required
                    value={formData.country}
                    onChange={onInputChange}
                    className={`w-full py-2 border-b focus:outline-none ${errors.country ? 'border-red-700' : ''}`}
                >
                    <option value="">Select your country</option>
                    {countries.map(country => (
                        <option key={country} value={country}>{country}</option>
                    ))}
                </select>
                {errors.country && (
                    <span className="text-red-700 text-sm mt-1">{errors.country}</span>
                )}
            </div>

            {/* Phone Number */}
            <div className="flex flex-col">
                <label htmlFor="field-phoneNumber" className={`block font-bold ${errors.phoneNumber ? 'text-red-700' : ''}`}>
                    Phone Number*
                </label>
                <input
                    name="phoneNumber"
                    type="tel"
                    id="field-phoneNumber"
                    placeholder="+234 810 000 0000"
                    value={formData.phoneNumber}
                    onChange={onInputChange}
                    className={`w-full py-2 border-b focus:outline-none ${errors.phoneNumber ? 'border-red-700' : ''}`}
                />
            </div>

            {/* Business Type */}
            <div className="flex flex-col">
                <label htmlFor="field-businessType" className={`block font-bold ${errors.businessType ? 'text-red-700' : ''}`}>
                    Business Type *
                </label>
                <select
                    name="businessType"
                    id="field-businessType"
                    required
                    value={formData.businessType}
                    onChange={onInputChange}
                    className={`w-full py-2 border-b focus:outline-none ${errors.businessType ? 'border-red-700' : ''}`}
                >
                    <option value="">Select business type</option>
                    {businessTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                    ))}
                </select>
                {errors.businessType && (
                    <span className="text-red-700 text-sm mt-1">{errors.businessType}</span>
                )}
            </div>
        </div>
    );

    const renderStep3 = () => (
        <div className="flex flex-col gap-5 lg:mt-12">
            {/* Monthly Transaction Volume */}
            <div className="flex flex-col">
                <label htmlFor="field-monthlyVolume" className="block font-bold">
                    Monthly Transaction Volume
                </label>
                <select
                    name="monthlyVolume"
                    id="field-monthlyVolume"
                    value={formData.monthlyVolume}
                    onChange={onInputChange}
                    className={`w-full py-2 border-b focus:outline-none ${errors.monthlyVolume ? 'border-red-700' : ''}`}
                >
                    <option value="">Select volume range</option>
                    {monthlyVolumes.map(volume => (
                        <option key={volume} value={volume}>{volume}</option>
                    ))}
                </select>
            </div>

            {/* How can we help you? */}
            <div className="flex flex-col gap-2">
                <label className={`block font-bold mb-2 ${errors.helpNeeded ? 'text-red-700' : ''}`}>
                    How can we help you? *
                </label>
                <div className="space-y-3">
                    {helpOptions.map(option => (
                        <label key={option} className="flex items-center space-x-3">
                            <input
                                type="checkbox"
                                name="helpNeeded"
                                value={option}
                                checked={formData.helpNeeded.includes(option)}
                                onChange={onCheckboxChange}
                            />
                            <span className="text-sm text-gray-700">{option}</span>
                        </label>
                    ))}
                </div>
                {errors.helpNeeded && (
                    <span className="text-red-700 text-sm mt-1">{errors.helpNeeded}</span>
                )}
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
                <label htmlFor="field-message" className={`block font-bold mb-2 ${errors.message ? 'text-red-700' : ''}`}>
                    Message / Use Case *
                </label>
                <textarea
                    name="message"
                    id="field-message"
                    rows={4}
                    placeholder="Tell us more about your business or project…"
                    required
                    value={formData.message}
                    onChange={onInputChange}
                    className={`w-full px-3 py-2 border border-gray-300 rounded-lg resize-vertical ${errors.message ? 'border-red-700' : ''}`}
                />
                {errors.message && (
                    <span className="text-red-700 text-sm mt-1">{errors.message}</span>
                )}
            </div>

            {/* Preferred Contact Method */}
            <div className="flex flex-col gap-2">
                <label className="block font-bold mb-2">
                    Preferred Contact Method
                </label>
                <div className="space-y-3">
                    {contactMethods.map(method => (
                        <label key={method} className="flex items-center space-x-3">
                            <input
                                type="radio"
                                name="contactMethod"
                                value={method}
                                checked={formData.contactMethod === method}
                                onChange={onRadioChange}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                            />
                            <span className="text-sm text-gray-700">{method}</span>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderStep = () => {
        switch (currentStep) {
            case 1: return renderStep1();
            case 2: return renderStep2();
            case 3: return renderStep3();
            default: return null;
        }
    };

    return (
        <div className="py-12 md:px-10 lg:px-20 xl:px-20 md:py-16 flex w-full md:justify-center flex-col md:flex-wrap gap-6">
            <div className="w-full md:max-w-[600px] mx-auto">

                {/* Mobile Heading */}
                <div className="md:hidden">
                    <div className="mb-8">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-6 text-left max-w-[724px]">
                                <h1 className="font-serif text-3xl font-medium text-left leading-tight">
                                    The compliant, bank-grade digital asset infrastructure built to scale with confidence.
                                </h1>
                            </div>
                            <p className="text-base text-left text-black max-w-[520px] font-normal leading-relaxed">
                                Book a meeting with our sales experts to discuss compliant, secure solutions designed for your industry — and see how TervanX can power your financial infrastructure.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="h-full">
                    <div className="md:h-full md:flex md:flex-col md:justify-center">
                        <div className="flex flex-col gap-4 md:gap-8">
                            <div className="md:h-full md:flex md:flex-col md:justify-center">
                                <form onSubmit={currentStep === 3 ? onSubmit : (e) => e.preventDefault()} className="flex flex-col gap-6">
                                    {renderStep()}

                                    {/* Navigation Buttons */}
                                    <div className="flex gap-4 mt-8">
                                        {currentStep > 1 && (
                                            <button
                                                type="button"
                                                onClick={onPrevStep}
                                                className="px-8 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium w-full"
                                            >
                                                Back
                                            </button>
                                        )}

                                        {currentStep < 3 ? (
                                            <button
                                                type="button"
                                                onClick={onNextStep}
                                                className="px-8 py-3 bg-[#0D07ED] text-white rounded-lg transition-colors font-medium ml-auto w-full"
                                            >
                                                Next
                                            </button>
                                        ) : (
                                            <button
                                                type="submit"
                                                className="px-8 py-3 bg-[#0D07ED] text-white rounded-lg transition-colors font-medium ml-auto w-full"
                                            >
                                                Contact Sales
                                            </button>
                                        )}
                                    </div>
                                </form>

                                {/* Progress Bar */}
                                <div className="flex flex-col gap-3 text-center md:text-right my-8">
                                    <div className="relative w-full bg-black/40 overflow-hidden rounded-full h-[1px]">
                                    </div>
                                    <span className="text-gray-600">
                                        Step {currentStep}/3
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}