"use client";
import FormSteps from "./FormSteps";
import { FormData, FormErrors } from "@/app/types/contact.types";

interface StartupContactFormStepsProps {
    currentStep: number;
    formData: FormData;
    errors: FormErrors;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    onCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onRadioChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onPrevStep: () => void;
    onNextStep: () => void;
    onSubmit: (e: React.FormEvent) => void;
    isSubmitting: boolean
}

const startupContactSteps = [
    {
        fields: [
            {
                name: "name",
                type: "text" as const,
                label: "Full Name",
                required: true,
                placeholder: "Enter your full name"
            },
            {
                name: "position",
                type: "text" as const,
                label: "Position",
                required: true,
                placeholder: "e.g., Founder, CEO, CTO"
            },
            {
                name: "email",
                type: "email" as const,
                label: "Email Address",
                required: true,
                placeholder: "you@startup.com"
            },
            {
                name: "companyName",
                type: "text" as const,
                label: "Company Name",
                required: true,
                placeholder: "Your startup name"
            },
            {
                name: "project",
                type: "textarea" as const,
                label: "What are you working on?",
                required: true,
                placeholder: "Tell us about your project, product, or what you're building..."
            }
        ]
    }
];

const mobileHeading = {
    title: "Contact Us for Startups",
    description: "Tell us about your startup and how we can help you grow.",
};

export default function StartupContactFormSteps(props: StartupContactFormStepsProps) {
    const { errors, ...rest } = props;
    return (
        <FormSteps
            {...rest}
            errors={errors as unknown as Record<string, string>}
            steps={startupContactSteps}
            mobileHeading={mobileHeading}
            submitButtonText="Submit Application"
            isSubmitting={props.isSubmitting}
        />
    );
}