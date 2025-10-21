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
