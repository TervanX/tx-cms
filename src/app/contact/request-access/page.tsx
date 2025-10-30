"use client";
import { useState } from "react";
import AccessFormSteps from "@/components/landingComponents/AccessFormStep";
import FormSidebar from "@/components/landingComponents/FormSidebar";
import SuccessMessage from "@/components/landingComponents/SuccessMessage";
import ErrorToast from "@/components/landingComponents/ErrorToastComponent";
import { ShieldCheck } from "lucide-react";

export default function RequestAccessPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
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

    if (!formData.companyWebsite.trim()) {
      newErrors.companyWebsite = "Company website is required";
    } else if (!formData.companyWebsite.startsWith("http://") && !formData.companyWebsite.startsWith("https://")) {
      newErrors.companyWebsite = "Website must start with http:// or https://";
    }

    if (!formData.businessType) {
      newErrors.businessType = "Business type is required";
    }

    if (!formData.useCase.trim()) {
      newErrors.useCase = "Please describe your use case";
    } else if (formData.useCase.trim().length < 10) {
      newErrors.useCase = "Please provide more details (minimum 10 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.country) {
      newErrors.country = "Country is required";
    }

    if (!formData.teamSize) {
      newErrors.teamSize = "Team size is required";
    }

    if (!formData.monthlyVolume) {
      newErrors.monthlyVolume = "Monthly volume is required";
    }

    if (!formData.contactMethod) {
      newErrors.contactMethod = "Preferred contact method is required";
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
      case 1:
        isValid = validateStep1();
        break;
      case 2:
        isValid = validateStep2();
        break;
      case 3:
        isValid = validateStep3();
        break;
    }
    if (isValid) setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateStep3()) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null); // Clear any previous errors

    try {
      const submissionData = {
        fullName: formData.fullName,
        businessEmail: formData.businessEmail,
        companyOrOrganization: formData.companyName,
        businessType: formData.businessType,
        companyWebsite: formData.companyWebsite,
        whatDoYouWantToBuild: formData.useCase,
        countryOfOperation: formData.country,
        teamSize: formData.teamSize,
        estimatedMonthlyVolumeUSD: formData.monthlyVolume,
        preferredContactMethod: formData.contactMethod,
        additionalDetails: formData.message,
        agreeToTerms: formData.agreeToTerms,
      };

      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/contact/request-access`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        console.log("Access request form successfully submitted");
        setIsSubmitted(true);
        setTimeout(() => {
          window.history.back();
        }, 3000);
      } else {
        const errorData = await response.json();
        console.error("Server error:", errorData);

        // Extract error message from API response
        const apiErrorMessage = errorData?.message || errorData?.title || "Failed to submit form";
        setErrorMessage(`${apiErrorMessage}. Please check your information and try again.`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage(
        "Unable to submit your request at this time. Please check your internet connection and try again, or contact us directly."
      );
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
      {/* Error Toast */}
      {errorMessage && (
        <ErrorToast
          message={errorMessage}
          onClose={() => setErrorMessage(null)}
        />
      )}

      <div className="px-4 py-12 md:px-0 md:py-0 max-w-[600px] mx-auto md:max-w-none grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 md:min-h-screen">
        <FormSidebar
          title="Request Access to TervanX"
          description="Join the next generation of digital asset infrastructure — built for scale, trusted for security."
          showCompanies={true}
          trust="The same world-class infrastructure that powers"
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