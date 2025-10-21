"use client";
import { useState } from "react";
import ContactFormSteps from "@/components/landingComponents/ContactFormSteps";
import SuccessMessage from "@/components/landingComponents/SuccessMessage";
import FormSidebar from "@/components/landingComponents/FormSidebar";

export default function ContactSalesPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // Step 1
        fullName: "",
        workEmail: "",
        companyName: "",

        // Step 2
        companyWebsite: "",
        country: "",
        phoneNumber: "",
        businessType: "",

        // Step 3
        monthlyVolume: "",
        helpNeeded: [] as string[],
        message: "",
        contactMethod: "",
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitted, setIsSubmitted] = useState(false);

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
        const { name, value, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: checked
                ? [...prev.helpNeeded as string[], value]
                : (prev.helpNeeded as string[]).filter(item => item !== value)
        }));
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
        if (!formData.fullName.trim()) newErrors.fullName = "This field is required.";
        if (!formData.workEmail.trim()) newErrors.workEmail = "This field is required.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) newErrors.workEmail = "Please enter a valid email";
        if (!formData.companyName.trim()) newErrors.companyName = "This field is required.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateStep2 = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.country) newErrors.country = "This field is required.";
        if (!formData.businessType) newErrors.businessType = "This field is required.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateStep3 = () => {
        const newErrors: Record<string, string> = {};
        if (formData.helpNeeded.length === 0) newErrors.helpNeeded = "Please select at least one option";
        if (!formData.message.trim()) newErrors.message = "This field is required.";
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateStep3()) {
            console.log("Form submitted:", formData);
            setIsSubmitted(true);
        }
    };

    if (isSubmitted) {
        return <SuccessMessage />;
    }

    return (
        <main className="bg-[#F0F0F2] min-h-screen" style={{ margin: '-1px auto 0 auto', padding: '1px 0 0 0' }}>
            <div className="px-4 py-12 md:px-0 md:py-0 max-w-[600px] mx-auto md:max-w-none grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 md:min-h-screen">

                {/* Left Column - Content */}
                <FormSidebar />

                {/* Right Column - Form */}
                <ContactFormSteps
                    currentStep={currentStep}
                    formData={formData}
                    errors={errors}
                    onInputChange={handleInputChange}
                    onCheckboxChange={handleCheckboxChange}
                    onRadioChange={handleRadioChange}
                    onPrevStep={prevStep}
                    onNextStep={nextStep}
                    onSubmit={handleSubmit}
                />
            </div>
        </main>
    );
}