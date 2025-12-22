"use client";
import FormSteps from "./FormSteps";
import { AccessFormData, AccessFormErrors } from "@/app/types/contact.types";

interface JoinWaitlistFormProps {
  currentStep: number;
  formData: AccessFormData;
  errors: AccessFormErrors;
  onInputChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  onCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRadioChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPrevStep: () => void;
  onNextStep: () => void;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting?: boolean;
}

const waitlistSteps = [
  {
    fields: [
      {
        name: "fullName",
        type: "text" as const,
        label: "Full Name",
        required: true,
        placeholder: "Enter your full name",
      },
      {
        name: "email",
        type: "email" as const,
        label: "Email Address",
        required: true,
        placeholder: "you@company.com",
      },
      {
        name: "companyName",
        type: "text" as const,
        label: "Company / Organization (Optional)",
        placeholder: "Your company name",
      },
      {
        name: "role",
        type: "text" as const,
        label: "Role / Position",
        required: true,
        placeholder: "e.g., Developer, Founder, Compliance Lead",
      },
    ],
  },
  {
    fields: [
      {
        name: "country",
        type: "select" as const,
        label: "Country",
        required: true,
        options: [
          "Nigeria",
          "Kenya",
          "Ghana",
          "South Africa",
          "Egypt",
          "Ethiopia",
          "Tanzania",
          "Uganda",
          "Algeria",
          "Morocco",
          "Angola",
          "Mozambique",
          "Ivory Coast",
          "Madagascar",
          "Cameroon",
          "Niger",
          "Senegal",
          "Zimbabwe",
          "Tunisia",
          "Zambia",
          "Other",
        ],
      },
      {
        name: "useCase",
        type: "select" as const,
        label: "Use Case",
        required: true,
        options: [
          "Fintech",
          "Exchange / OTC",
          "Wallet App",
          "Payment Gateway",
          "Bank / MFI",
          "Developer / Other",
        ],
      },
      {
        name: "monthlyVolume",
        type: "select" as const,
        label: "Expected Monthly Volume (USD)",
        required: true,
        options: ["< $10k", "$10k – $100k", "$100k – $1M", "> $1M"],
      },
    ],
  },
  {
    fields: [
      {
        name: "interestReason",
        type: "textarea" as const,
        required: true,
        label: "Why You're Interested in LayerX Switch",
        placeholder:
          "Tell us what you plan to build or any specific use cases...",
      },
      {
        name: "referralCode",
        type: "text" as const,
        label: "Referral Code (Optional)",
        placeholder: "If you were invited by someone",
      },
      {
        name: "agreeToTerms",
        type: "singleCheckbox" as const,
        label: "Accept Terms & Privacy Policy",
        required: true,
        options: ["I agree to the Terms & Conditions and Privacy Policy *"],
      },
    ],
  },
];

const mobileHeading = {
  title: "Join LayerX Switch Waitlist",
  description:
    "Be among the first to access our next-generation digital asset infrastructure. Get early access and exclusive updates.",
};

export default function JoinWaitlistForm(props: JoinWaitlistFormProps) {
  return (
    <FormSteps
      {...props}
      errors={props.errors as unknown as Record<string, string>}
      steps={waitlistSteps}
      mobileHeading={mobileHeading}
      submitButtonText="Join Waitlist"
      isSubmitting={props.isSubmitting}
    />
  );
}
