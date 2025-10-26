"use client";
import { useState } from "react";
import JoinWaitlistForm from "@/components/landingComponents/WaitlistFormStep";
import SuccessMessage from "@/components/landingComponents/SuccessMessage";
import FormSidebar from "@/components/landingComponents/FormSidebar";

export default function JoinWaitlistPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        // Step 1
        fullName: "",
        email: "",
        companyName: "",
        role: "",

        // Step 2
        country: "",
        useCase: "",
        monthlyVolume: "",

        // Step 3
        interestReason: "",
        referralCode: "",
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
            newErrors.fullName = "This field is required.";
        }
        if (!formData.email.trim()) {
            newErrors.email = "This field is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
        }
        if (!formData.role.trim()) {
            newErrors.role = "This field is required.";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateStep2 = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.country) {
            newErrors.country = "This field is required.";
        }
        if (!formData.useCase) {
            newErrors.useCase = "This field is required.";
        }
        if (!formData.monthlyVolume) {
            newErrors.monthlyVolume = "This field is required.";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateStep3 = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.agreeToTerms) {
            newErrors.agreeToTerms = "You must accept the Terms & Conditions and Privacy Policy to continue.";
        }

        // Optional field validation for interest reason length
        if (formData.interestReason.trim() && formData.interestReason.trim().length > 1000) {
            newErrors.interestReason = "Please keep your response under 1000 characters.";
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
            const response = await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams({
                    "form-name": "join-waitlist-form",
                    ...formData,
                    agreeToTerms: formData.agreeToTerms ? "Yes" : "No" // Convert boolean to string
                }).toString()
            });

            if (response.ok) {
                console.log("Waitlist form successfully submitted to Netlify");
                setIsSubmitted(true);
                setTimeout(() => {
                    window.history.back();
                }, 3000);
            } else {
                throw new Error("Network response was not ok");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("There was an error joining the waitlist. Please try again or contact us directly.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-[#F0F0F2] flex items-center justify-center">
                <SuccessMessage
                    title="You're on the waitlist!"
                    message="Thank you for joining the waitlist! You'll receive a confirmation email shortly. Stay tuned — we're almost ready to power the next generation of African payment networks."
                />
            </div>
        );
    }

    return (
        <main className="bg-[#F0F0F2] min-h-screen" style={{ margin: '-1px auto 0 auto', padding: '1px 0 0 0' }}>
            {/* Hidden Netlify Form */}
            <form
                name="join-waitlist-form"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="hidden"
            >
                <input type="hidden" name="form-name" value="join-waitlist-form" />
                <input type="hidden" name="fullName" value={formData.fullName} />
                <input type="hidden" name="email" value={formData.email} />
                <input type="hidden" name="companyName" value={formData.companyName} />
                <input type="hidden" name="role" value={formData.role} />
                <input type="hidden" name="country" value={formData.country} />
                <input type="hidden" name="useCase" value={formData.useCase} />
                <input type="hidden" name="monthlyVolume" value={formData.monthlyVolume} />
                <input type="hidden" name="interestReason" value={formData.interestReason} />
                <input type="hidden" name="referralCode" value={formData.referralCode} />
                <input type="hidden" name="agreeToTerms" value={formData.agreeToTerms ? "Yes" : "No"} />
                <input type="text" name="bot-field" style={{ display: 'none' }} />
            </form>

            <div className="px-4 py-12 md:px-0 md:py-0 max-w-[600px] mx-auto md:max-w-none grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 md:min-h-screen">
                <FormSidebar
                    title="Join the future of digital asset infrastructure"
                    description="You'll get early access and private beta updates as we roll out across Africa."
                    showCompanies={false}
                />
                <JoinWaitlistForm
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