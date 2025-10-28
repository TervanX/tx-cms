"use client";
import { useState } from "react";
import ContactFormSteps from "@/components/landingComponents/ContactFormSteps";
import SuccessMessage from "@/components/landingComponents/SuccessMessage";
import FormSidebar from "@/components/landingComponents/FormSidebar";

export default function ContactSalesPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    const { name, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked
        ? [...(prev.helpNeeded as string[]), value]
        : (prev.helpNeeded as string[]).filter((item) => item !== value),
    }));
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
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.country) {
      newErrors.country = "This field is required.";
    }
    if (formData.phoneNumber.trim()) {
      const cleanedPhone = formData.phoneNumber.replace(/\s/g, "");
      if (!/^\+?[\d\s-()]{10,20}$/.test(cleanedPhone)) {
        newErrors.phoneNumber =
          "Please enter a valid phone number (10-20 digits).";
      }
    }
    if (formData.companyWebsite.trim()) {
      try {
        const url = new URL(formData.companyWebsite);
        if (!["http:", "https:"].includes(url.protocol)) {
          newErrors.companyWebsite =
            "Website must start with http:// or https://";
        }
      } catch {
        newErrors.companyWebsite =
          "Please enter a valid website URL (e.g., https://example.com).";
      }
    }
    if (!formData.businessType) {
      newErrors.businessType = "This field is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors: Record<string, string> = {};
    if (formData.helpNeeded.length === 0) {
      newErrors.helpNeeded = "Please select at least one option.";
    } else if (formData.helpNeeded.length > 5) {
      newErrors.helpNeeded = "Please select no more than 5 options.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "This field is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message =
        "Please provide more details (minimum 10 characters).";
    } else if (formData.message.trim().length > 2000) {
      newErrors.message = "Message must be less than 2000 characters.";
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

    try {
      const netlifyForm = new FormData();
      netlifyForm.append("form-name", "contact-sales-form");
      Object.entries(formData).forEach(([key, value]) => {
        if (key === "helpNeeded" && Array.isArray(value)) {
          netlifyForm.append(key, value.join(", "));
        } else if (typeof value === "boolean") {
          netlifyForm.append(key, value ? "Yes" : "No");
        } else {
          netlifyForm.append(key, value as string);
        }
      });

      const response = await fetch("/", {
        method: "POST",
        body: netlifyForm,
      });

      if (response.ok) {
        console.log("Sales form successfully submitted to Netlify");
        setIsSubmitted(true);
        setTimeout(() => {
          window.history.back();
        }, 3000);
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        "There was an error submitting the form. Please try again or contact us directly."
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
          message="Our sales team will get back to you within 24 hours to understand your needs and tailor a LayerX solution for your business."
        />
      </div>
    );
  }

  return (
    <main
      className="bg-[#F0F0F2] min-h-screen"
      style={{ margin: "-1px auto 0 auto", padding: "1px 0 0 0" }}
    >
      <div className="px-4 py-12 md:px-0 md:py-0 max-w-[600px] mx-auto md:max-w-none grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 md:min-h-screen">
        <FormSidebar
          title="The compliant, bank-grade digital asset infrastructure built to scale with confidence"
          description="Book a meeting with our sales experts to discuss compliant, secure solutions designed for your industry — and see how LayerX can power your financial infrastructure."
          showCompanies={true}
        />
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
          isSubmitting={isSubmitting}
        />
      </div>
    </main>
  );
}
