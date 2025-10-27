import { z } from 'zod';

export const PersonSchema = z.object({
  tag: z.string(),
  name: z.string(),
  role: z.string(),
  company: z.string(),
  avatar: z.string(),
  logoText: z.string(),
  longCopy: z.string(),
});

export const FAQItemSchema = z.object({
  question: z.string(),
  answer: z.any(),
});


export const AccordionItemPropsSchema = z.object({
  item: FAQItemSchema,
  isOpen: z.boolean(),
  onToggle: z.function(),
});



export type Person = z.infer<typeof PersonSchema>;
export type FAQItem = z.infer<typeof FAQItemSchema>;
export type AccordionItemProps = z.infer<typeof AccordionItemPropsSchema>;


// types/pricing.ts
export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  monthlyPrice: number;
  priceNote: string;
  monthlyPriceNote: string;
  credits: number;
  creditsNote: string;
  monthlyCreditsNote: string;
  mostPopular: boolean;
  features: string[];
  buttonText: string;
  buttonVariant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'blue';
  CtaText?: string;
  CtaButton?: string;
  detailInfo?: {
    quota: string;
    idealForDescription?: string;
    coreInfrastructure: string[];
    dashboard?: string[];
    compliance: string[];
    policyEngine: string[];
    safeguards?: string[];
    paymentTools?: string[];
    developer?: string[];
    analytics?: string[];
    support: string[];
    idealFor: string[];
    walletInfrastructure?: string[];
    paymentIntegration?: string[];
    automation?: string[];
    reporting?: string[];
    smartContracts?: string[];
    settlement?: string[];
    deployment?: string[];
    customization?: string[];
  };
};

export interface ComparisonFeature {
  name: string;
  values: (string | React.ReactNode | null)[];
}

export interface ComparisonSection {
  items: ComparisonFeature[];
}

export interface PayAsYouGoPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  monthlyPrice: number;
  priceNote: string;
  monthlyPriceNote: string;
  credits: number;
  creditsNote: string;
  monthlyCreditsNote: string;
  mostPopular: boolean;
  features: string[];
  buttonText: string;
  buttonVariant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'blue';
  CtaText?: string;
  detailedPricing: {
    description: string;
    corePricing: Array<{
      feature: string;
      cost: string;
      description: string;
    }>;
    starterBundle: {
      price: string;
      includes: string[];
      description: string;
    };
    freeTier: {
      includes: string[];
      description: string;
    };
    safeguards: string[];
    developerFeatures: string[];
    targetAudience: string[];
    addOns: Array<{
      name: string;
      price: string;
      description: string;
    }>;
  };
}