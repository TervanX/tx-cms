export interface FormData {
    fullName: string;
    workEmail?: string;
    companyName?: string;
    companyWebsite?: string;
    country?: string;
    phoneNumber?: string;
    businessType?: string;
    monthlyVolume?: string;
    helpNeeded?: string[];
    message?: string;
    contactMethod?: string;
    position?: string;
    project?: string;
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
    businessEmail?: string;
    email?: string;
    role?: string;
    companyName?: string;
    companyWebsite?: string;
    businessType?: string;
    useCase?: string;
    country?: string;
    teamSize?: string;
    monthlyVolume?: string;
    contactMethod?: string;
    message?: string;
    agreeToTerms?: boolean;
    referralCode?: string;
    interestReason?: string;
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
    referralCode?: string;
}