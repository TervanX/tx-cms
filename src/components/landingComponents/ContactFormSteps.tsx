"use client";
import FormSteps from "./FormSteps";
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

const contactSteps = [
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
                name: "workEmail",
                type: "email" as const,
                label: "Work Email",
                required: true,
                placeholder: "you@company.com"
            },
            {
                name: "companyName",
                type: "text" as const,
                label: "Company Name",
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
                label: "Company Website",
                placeholder: "https://example.com"
            },
            {
                name: "country",
                type: "select" as const,
                label: "Country / Region",
                required: true,
                options: ["Nigeria", "Ghana", "Kenya", "United Kingdom", "United States", "South Africa", "Canada", "Other"]
            },
            {
                name: "phoneNumber",
                type: "tel" as const,
                label: "Phone Number",
                placeholder: "+234 810 000 0000"
            },
            {
                name: "businessType",
                type: "select" as const,
                label: "Business Type",
                required: true,
                options: ["Fintech or Bank", "Crypto Exchange or Wallet", "Payment Gateway / Processor", "eCommerce or Marketplace", "SaaS / Platform", "NGO / Enterprise / Government", "Other"]
            }
        ]
    },
    {
        fields: [
            {
                name: "monthlyVolume",
                type: "select" as const,
                label: "Monthly Transaction Volume",
                options: ["Less than $10k", "$10k – $50k", "$50k – $250k", "$250k – $1M", "Above $1M"]
            },
            {
                name: "helpNeeded",
                type: "checkbox" as const,
                label: "How can we help you?",
                required: true,
                options: ["Accept Crypto Payments", "Issue Crypto Cards", "Build on Digital Asset Infrastructure (API)", "Use AutoTrade or Plugin Systems", "Integrate TervanX Checkout", "Compliance / KYC Solutions", "Something else"]
            },
            {
                name: "message",
                type: "textarea" as const,
                label: "Message / Use Case",
                required: true,
                placeholder: "Tell us more about your business or project…"
            },
            {
                name: "contactMethod",
                type: "radio" as const,
                label: "Preferred Contact Method",
                options: ["Email", "WhatsApp", "Phone Call"]
            }
        ]
    }
];

const mobileHeading = {
    title: "The compliant, bank-grade digital asset infrastructure built to scale with confidence.",
    description: "Book a meeting with our sales experts to discuss compliant, secure solutions designed for your industry — and see how TervanX can power your financial infrastructure."
};

export default function ContactFormSteps(props: ContactFormStepsProps) {
    const { errors, ...rest } = props;
    return (
        <FormSteps
            {...rest}
            errors={errors as unknown as Record<string, string>}
            steps={contactSteps}
            mobileHeading={mobileHeading}
            submitButtonText="Contact Sales"
        />
    );
}