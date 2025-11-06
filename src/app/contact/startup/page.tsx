"use client";
import { useState } from "react";
import StartupContactFormSteps from "@/components/landingComponents/StartupContactFormSteps";
import SuccessMessage from "@/components/landingComponents/SuccessMessage";
import FormSidebar from "@/components/landingComponents/FormSidebar";
import ErrorToast from "@/components/landingComponents/ErrorToastComponent";

export default function ContactStartupsPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const [formData, setFormData] = useState({
        fullName: "",
        position: "",
        workEmail: "",
        companyName: "",
        project: "",
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: checked,
        }));
    };

    const handleInputChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };


    const validateStep1 = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = "This field is required.";
        }

        if (!formData.workEmail.trim()) {
            newErrors.workEmail = "This field is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
            newErrors.workEmail = "Please enter a valid email address.";
        } else if (
            !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                formData.workEmail
            )
        ) {
            newErrors.workEmail = "Please enter a valid work email address.";
        }
        if (!formData.companyName.trim()) {
            newErrors.companyName = "This field is required.";
        }

        if (!formData.project.trim()) {
            newErrors.project = "This field is required.";
        } else if (formData.project.trim().length < 10) {
            newErrors.project = "Please provide more details about your project (minimum 10 characters).";
        } else if (formData.project.trim().length > 2000) {
            newErrors.project = "Project description must be less than 2000 characters.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const nextStep = () => {
        let isValid = false;
        switch (currentStep) {
            case 1:
                isValid = validateStep1();
                break;
        }
        if (isValid) setCurrentStep((prev) => prev + 1);
    };

    const prevStep = () => {
        setCurrentStep((prev) => prev - 1);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateStep1()) {
            return;
        }

        setIsSubmitting(true);
        setErrorMessage(null);

        try {
            const submissionData = {
                name: formData.fullName,
                position: formData.position,
                email: formData.workEmail,
                companyName: formData.companyName,
                projectDescription: formData.project,
            };

            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/contact/startups`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(submissionData),
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log("Startup form successfully submitted", responseData);
                setIsSubmitted(true);
                setTimeout(() => {
                    window.history.back();
                }, 3000);
            } else {
                const errorData = await response.json();
                console.error("Server error:", errorData);
                const apiErrorMessage = errorData?.message || errorData?.title || "Failed to submit form";
                setErrorMessage(`${apiErrorMessage}. Please check your information and try again.`);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setErrorMessage(
                "Unable to submit the form at this time. Please check your internet connection and try again, or contact us directly."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-[#F0F0F2] flex items-center justify-center">
                <SuccessMessage
                    title="Thank you for reaching out!"
                    message="We've received your information and our team will get back to you soon to discuss how we can support your startup."
                />
            </div>
        );
    }

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: "" }));
        }
    };

    return (
        <main
            className="bg-[#F0F0F2] min-h-screen"
            style={{ margin: "-1px auto 0 auto", padding: "1px 0 0 0" }}
        >
            {/* Error Toast */}
            {errorMessage && (
                <ErrorToast
                    message={errorMessage}
                    onClose={() => setErrorMessage(null)}
                />
            )}

            <div className="px-4 py-12 md:px-0 md:py-0 max-w-[600px] mx-auto md:max-w-none grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 md:min-h-screen">
                <FormSidebar
                    title="Contact Us for Startups"
                    description="Tell us about your startup and how we can help you grow."
                    showCompanies={false}
                />
                <StartupContactFormSteps
                    currentStep={currentStep}
                    formData={formData}
                    errors={errors}
                    onCheckboxChange={handleCheckboxChange}
                    onRadioChange={handleRadioChange}
                    onInputChange={handleInputChange}
                    onPrevStep={prevStep}
                    onNextStep={nextStep}
                    onSubmit={handleSubmit}
                    isSubmitting={isSubmitting}
                />
            </div>
        </main>
    );
}