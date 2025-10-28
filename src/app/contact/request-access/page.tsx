"use client";
import { useState } from "react";
import AccessFormSteps from "@/components/landingComponents/AccessFormStep";
import FormSidebar from "@/components/landingComponents/FormSidebar";
import SuccessMessage from "@/components/landingComponents/SuccessMessage";
import { ShieldCheck } from "lucide-react";

export default function RequestAccessPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        // Step 1
        fullName: "",
        businessEmail: "",
        companyName: "",

        // Step 2
        companyWebsite: "",
        businessType: "",
        useCase: "",

        // Step 3
        country: "",
        teamSize: "",
        monthlyVolume: "",
        contactMethod: "",
        message: "",
        agreeToTerms: false,
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: "" }));
        }
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: checked
        }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: "" }));
        }
    };

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validateStep1 = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full name is required";
        }
        if (!formData.businessEmail.trim()) {
            newErrors.businessEmail = "Business email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail)) {
            newErrors.businessEmail = "Please enter a valid email address";
        }
        if (!formData.companyName.trim()) {
            newErrors.companyName = "Company name is required";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateStep2 = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.businessType) {
            newErrors.businessType = "Business type is required";
        }
        if (!formData.useCase.trim()) {
            newErrors.useCase = "Please describe your use case";
        } else if (formData.useCase.trim().length < 10) {
            newErrors.useCase = "Please provide more details (minimum 10 characters)";
        }
        if (formData.companyWebsite.trim() && !formData.companyWebsite.startsWith('http')) {
            newErrors.companyWebsite = "Website must start with http:// or https://";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateStep3 = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.country) {
            newErrors.country = "Country is required";
        }
        if (!formData.agreeToTerms) {
            newErrors.agreeToTerms = "You must agree to the terms and privacy policy";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const nextStep = () => {
        let isValid = false;
        switch (currentStep) {
            case 1: isValid = validateStep1(); break;
            case 2: isValid = validateStep2(); break;
            case 3: isValid = validateStep3(); break;
        }
        if (isValid) setCurrentStep(prev => prev + 1);
    };

    const prevStep = () => {
        setCurrentStep(prev => prev - 1);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateStep3()) {
            return;
        }

        setIsSubmitting(true);

        try {
            const netlifyForm = new FormData();
            netlifyForm.append('form-name', 'request-access-form');
            Object.entries(formData).forEach(([key, value]) => {
                if (typeof value === 'boolean') {
                    netlifyForm.append(key, value ? "Yes" : "No");
                } else {
                    netlifyForm.append(key, value as string);
                }
            });

            const response = await fetch('/', {
                method: 'POST',
                body: netlifyForm,
            });

            if (response.ok) {
                console.log("Access request form successfully submitted to Netlify");
                setIsSubmitted(true);
                setTimeout(() => {
                    window.history.back();
                }, 3000);
            } else {
                throw new Error("Network response was not ok");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("There was an error submitting your request. Please try again or contact us directly.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-[#F0F0F2] flex items-center justify-center">
                <SuccessMessage
                    title="Thank you for your interest in TervanX"
                    message="Our partnerships team will review your request and contact you within 24 to 48 hours to guide you through the onboarding process."
                    icon={<ShieldCheck className="w-20 h-20 text-green-500" />}
                />
            </div>
        );
    }

    return (
        <main className="bg-[#F0F0F2] min-h-screen">
            <div className="px-4 py-12 md:px-0 md:py-0 max-w-[600px] mx-auto md:max-w-none grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 md:min-h-screen">
                <FormSidebar
                    title="Request Access to TervanX"
                    description="Join the next generation of digital asset infrastructure — built for scale, trusted for security."
                    showCompanies={true}
                    trust="Trusted by top fintechs — ISO 27001, GDPR, PCI-DSS compliant."
                />
                <AccessFormSteps
                    currentStep={currentStep}
                    formData={formData}
                    errors={errors}
                    onInputChange={handleInputChange}
                    onCheckboxChange={handleCheckboxChange}
                    onRadioChange={handleRadioChange}
                    onPrevStep={prevStep}
                    onNextStep={nextStep}
                    onSubmit={handleSubmit}
                    isSubmitting={isSubmitting}
                />
            </div>
        </main>
    );
}