"use client";
import FormSteps from "./FormSteps";
import { FormData, FormErrors } from "@/app/types/contact.types";

interface ContactFormStepsProps {
    currentStep: number;
    formData: FormData;
    errors: FormErrors;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    onRadioChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onPrevStep: () => void;
    onNextStep: () => void;
    onSubmit: (e: React.FormEvent) => void;
    isSubmitting?: boolean
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
                name: "subject",
                type: "select" as const,
                label: "Subject",
                required: true,
                options: [
                    "General Inquiry",
                    "Technical Support",
                    "Partnership Opportunity",
                    "Professional Services",
                    "Sales Question",
                    "Other"
                ]
            },
            {
                name: "companyName",
                type: "text" as const,
                label: "Company Name",
                placeholder: "Your company name"
            },
            {
                name: "companyWebsite",
                type: "url" as const,
                label: "Company Website",
                placeholder: "https://example.com"
            }
        ]
    },
    {
        fields: [
            {
                name: "country",
                type: "select" as const,
                label: "Country / Region",
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
                options: ["Fintech or Bank", "Crypto Exchange or Wallet", "Payment Gateway / Processor", "eCommerce or Marketplace", "SaaS / Platform", "NGO / Enterprise / Government", "Other"]
            },
            {
                name: "monthlyVolume",
                type: "select" as const,
                label: "Monthly Transaction Volume",
                options: ["Less than $10k", "$10k – $50k", "$50k – $250k", "$250k – $1M", "Above $1M"]
            }
        ]
    },
    {
        fields: [
            {
                name: "message",
                type: "textarea" as const,
                label: "Message",
                required: true,
                placeholder: "Tell us more about your inquiry..."
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
    title: "Get in Touch with TervanX",
    description: "Have questions about our digital asset infrastructure? Our team is here to help you find the right solution for your business needs."
};

export default function ContactFormSteps(props: ContactFormStepsProps) {
    const { errors, ...rest } = props;
    return (
        <FormSteps
            {...rest}
            errors={errors as unknown as Record<string, string>}
            steps={contactSteps}
            mobileHeading={mobileHeading}
            submitButtonText="Send Message"
            isSubmitting
        />
    );
}