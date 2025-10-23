"use client";
import FormSteps from "./FormSteps";
import { AccessFormData, AccessFormErrors } from "@/app/types/contact.types";

interface AccessFormStepsProps {
    currentStep: number;
    formData: AccessFormData;
    errors: AccessFormErrors;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    onCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onRadioChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onPrevStep: () => void;
    onNextStep: () => void;
    onSubmit: (e: React.FormEvent) => void;
}

const accessSteps = [
    {
        fields: [
            {
                name: "fullName",
                type: "text" as const,
                label: "Full Name",
                required: true,
                placeholder: "Enter your full name"
            },
            {
                name: "businessEmail",
                type: "email" as const,
                label: "Business Email",
                required: true,
                placeholder: "you@company.com"
            },
            {
                name: "companyName",
                type: "text" as const,
                label: "Company / Organization",
                required: true,
                placeholder: "Your company name"
            }
        ]
    },
    {
        fields: [
            {
                name: "companyWebsite",
                type: "url" as const,
                label: "Company Website (Optional)",
                placeholder: "https://example.com"
            },
            {
                name: "businessType",
                type: "select" as const,
                label: "Business Type",
                required: true,
                options: ["Fintech", "Crypto Exchange", "Payment Processor", "Merchant", "Developer", "Investor", "Other"]
            },
            {
                name: "useCase",
                type: "textarea" as const,
                label: "What do you want to build?",
                required: true,
                placeholder: "Describe your use case and what you plan to do on TervanX..."
            }
        ]
    },
    {
        fields: [
            {
                name: "country",
                type: "select" as const,
                label: "Country of Operation",
                required: true,
                options: ["United States", "United Kingdom", "Canada", "Germany", "France", "Australia", "Japan", "Nigeria", "Ghana", "Kenya", "South Africa", "Brazil", "Singapore", "United Arab Emirates", "Other"]
            },
            {
                name: "teamSize",
                type: "select" as const,
                label: "Team Size",
                options: ["1–10", "11–50", "51–200", "200+"]
            },
            {
                name: "monthlyVolume",
                type: "select" as const,
                label: "Estimated Monthly Volume (USD)",
                options: ["< $10K", "$10K – $100K", "$100K – $1M", "Above $1M"]
            },
            {
                name: "contactMethod",
                type: "radio" as const,
                label: "Preferred Contact Method",
                options: ["Email", "WhatsApp", "Phone Call"]
            },
            {
                name: "message",
                type: "textarea" as const,
                label: "Additional Details (Optional)",
                placeholder: "Any additional information you'd like to share..."
            },
            {
                name: "agreeToTerms",
                type: "checkbox" as const,
                label: "I agree to the Terms & Conditions and Privacy Policy",
                required: true,
                options: ["I agree to the Terms & Conditions and Privacy Policy *"]
            }
        ]
    }
];

const mobileHeading = {
    title: "Request Access to TervanX",
    description: "Join the next generation of digital asset infrastructure — built for scale, trusted for security."
};

export default function AccessFormSteps(props: AccessFormStepsProps) {
    return (
        <FormSteps
            {...props}
            errors={props.errors as unknown as Record<string, string>}
            steps={accessSteps}
            mobileHeading={mobileHeading}
            submitButtonText="Request Access"
        />
    );
}