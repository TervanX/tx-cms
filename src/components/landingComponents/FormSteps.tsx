"use client";

interface FormField {
    name: string;
    type: 'text' | 'email' | 'url' | 'tel' | 'select' | 'textarea' | 'checkbox' | 'radio';
    label: string;
    required?: boolean;
    placeholder?: string;
    options?: string[];
    multiple?: boolean;
}

interface FormStep {
    title?: string;
    description?: string;
    fields: FormField[];
}

interface FormStepsProps {
    currentStep: number;
    formData: Record<string, any>;
    errors: Record<string, string>;
    steps: FormStep[];
    mobileHeading?: {
        title: string;
        description: string;
    };
    submitButtonText?: string;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    onCheckboxChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onRadioChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onPrevStep: () => void;
    onNextStep: () => void;
    onSubmit: (e: React.FormEvent) => void;
    isSubmitting?: boolean
}

export default function FormSteps({
    currentStep,
    formData,
    errors,
    steps,
    mobileHeading,
    submitButtonText = "Submit",
    onInputChange,
    onCheckboxChange,
    onRadioChange,
    onPrevStep,
    onNextStep,
    onSubmit,
    isSubmitting
}: FormStepsProps) {

    const renderField = (field: FormField) => {
        const commonProps = {
            name: field.name,
            id: `field-${field.name}`,
            value: formData[field.name] || '',
            onChange: onInputChange,
        };

        switch (field.type) {
            case 'text':
            case 'text':
            case 'email':
            case 'url':
            case 'tel':
                return (
                    <input
                        type={field.type}
                        placeholder={field.placeholder}
                        required={field.required}
                        className={`w-full py-2 border-b focus:outline-none ${errors[field.name] ? 'border-red-700' : ''}`}
                        {...commonProps}
                    />
                );
            case 'select':
                return (
                    <select
                        required={field.required}
                        className={`w-full py-2 border-b focus:outline-none ${errors[field.name] ? 'border-red-700' : ''}`}
                        {...commonProps}
                    >
                        <option value="">{field.placeholder || `Select ${field.label.toLowerCase()}`}</option>
                        {field.options?.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                );

            case 'textarea':
                return (
                    <textarea
                        rows={4}
                        placeholder={field.placeholder}
                        required={field.required}
                        className={`w-full px-3 py-2 border border-gray-300 rounded-lg resize-vertical ${errors[field.name] ? 'border-red-700' : ''}`}
                        {...commonProps}
                    />
                );

            case 'checkbox':
                return (
                    <div className="space-y-3">
                        {field.options?.map(option => (
                            <label key={option} className="flex items-center space-x-3">
                                <input
                                    type="checkbox"
                                    name={field.name}
                                    value={option}
                                    checked={Array.isArray(formData[field.name]) && formData[field.name].includes(option)}
                                    onChange={onCheckboxChange}
                                />
                                <span className="text-sm text-gray-700">{option}</span>
                            </label>
                        ))}
                    </div>
                );

            case 'radio':
                return (
                    <div className="space-y-3">
                        {field.options?.map(option => (
                            <label key={option} className="flex items-center space-x-3">
                                <input
                                    type="radio"
                                    name={field.name}
                                    value={option}
                                    checked={formData[field.name] === option}
                                    onChange={onRadioChange}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                                />
                                <span className="text-sm text-gray-700">{option}</span>
                            </label>
                        ))}
                    </div>
                );

            default:
                return null;
        }
    };

    const renderStep = (stepIndex: number) => {
        const step = steps[stepIndex - 1];
        if (!step) return null;

        return (
            <div className={`flex flex-col gap-5 ${stepIndex === 3 ? 'lg:mt-12' : ''}`}>
                {step.fields.map(field => (
                    <div key={field.name} className="flex flex-col">
                        <label
                            htmlFor={`field-${field.name}`}
                            className={`block font-bold ${errors[field.name] ? 'text-red-700' : ''}`}
                        >
                            {field.label} {field.required && '*'}
                        </label>
                        <div className="relative">
                            {renderField(field)}
                        </div>
                        {errors[field.name] && (
                            <span className="text-red-700 text-sm mt-1">{errors[field.name]}</span>
                        )}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="py-12 md:px-10 lg:px-20 xl:px-20 md:py-16 flex w-full md:justify-center flex-col md:flex-wrap gap-6">
            <div className="w-full md:max-w-[600px] mx-auto">

                {/* Mobile Heading */}
                {mobileHeading && (
                    <div className="md:hidden">
                        <div className="mb-8">
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-6 text-left max-w-[724px]">
                                    <h1 className="font-serif text-3xl font-medium text-left leading-tight">
                                        {mobileHeading.title}
                                    </h1>
                                </div>
                                <p className="text-base text-left text-black max-w-[520px] font-normal leading-relaxed">
                                    {mobileHeading.description}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                <div className="h-full">
                    <div className="md:h-full md:flex md:flex-col md:justify-center">
                        <div className="flex flex-col gap-4 md:gap-8">
                            <div className="md:h-full md:flex md:flex-col md:justify-center">
                                <form onSubmit={currentStep === steps.length ? onSubmit : (e) => e.preventDefault()} className="flex flex-col gap-6">
                                    {renderStep(currentStep)}

                                    {/* Navigation Buttons */}
                                    <div className="flex gap-4 mt-8">
                                        {currentStep > 1 && (
                                            <button
                                                type="button"
                                                onClick={onPrevStep}
                                                className="px-8 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium w-full"
                                            >
                                                Back
                                            </button>
                                        )}

                                        {currentStep < steps.length ? (
                                            <button
                                                type="button"
                                                onClick={onNextStep}
                                                className="px-8 py-3 bg-[#0D07ED] text-white rounded-lg transition-colors font-medium ml-auto w-full"
                                            >
                                                Next
                                            </button>
                                        ) : (
                                            <button
                                                type="submit"
                                                className="px-8 py-3 bg-[#0D07ED] text-white rounded-lg transition-colors font-medium ml-auto w-full"
                                            >
                                                {submitButtonText}
                                            </button>
                                        )}
                                    </div>
                                </form>

                                {/* Progress Bar */}
                                <div className="flex flex-col gap-3 text-center md:text-right my-8">
                                    <div className="relative w-full bg-black/40 overflow-hidden rounded-full h-[1px]">
                                    </div>
                                    <span className="text-gray-600">
                                        Step {currentStep}/{steps.length}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}