export interface FormData {
    fullName: string;
    workEmail: string;
    companyName: string;
    companyWebsite: string;
    country: string;
    phoneNumber: string;
    businessType: string;
    monthlyVolume: string;
    helpNeeded: string[];
    message: string;
    contactMethod: string;
}

export interface FormErrors {
    fullName?: string;
    workEmail?: string;
    companyName?: string;
    companyWebsite?: string;
    country?: string;
    phoneNumber?: string;
    businessType?: string;
    monthlyVolume?: string;
    helpNeeded?: string;
    message?: string;
    contactMethod?: string;
}

export interface AccessFormData {
    fullName: string;
    businessEmail: string;
    companyName: string;
    companyWebsite: string;
    businessType: string;
    useCase: string;
    country: string;
    teamSize: string;
    monthlyVolume: string;
    contactMethod: string;
    message: string;
    agreeToTerms: boolean;
}

export interface AccessFormErrors {
    fullName?: string;
    businessEmail?: string;
    companyName?: string;
    companyWebsite?: string;
    businessType?: string;
    useCase?: string;
    country?: string;
    teamSize?: string;
    monthlyVolume?: string;
    contactMethod?: string;
    message?: string;
    agreeToTerms?: string;
}