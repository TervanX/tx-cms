"use client"
import PayAsYouGoDetails from '@/components/PricingComponents/PaygDetails';
import { payAsYouGoPlan } from '@/components/PricingComponents/data';
import PricingSection from '@/components/PricingComponents/PricingCards';
import PricingPageHeader from '@/components/PricingComponents/PricingHeader';
export default function PayAsYouGoPage() {
    return (
        <div className="p-0 lg:p-8">
            <div className="bg-white w-full px-4 lg:px-14 pt-12 pb-4 rounded-lg mt-16">
                <PricingPageHeader
                    isAnnualBilling={false}
                    onBillingChange={() => { }}
                />
                <PricingSection
                    isAnnualBilling={false}
                    onBillingChange={() => { }}
                    forceActiveTab="payg"
                />
                {/* <PayAsYouGoDetails plan={payAsYouGoPlan} /> */}
            </div>
        </div>
    )
}