'use client'
import Hero from '@/components/subhelpdeskComponents/Hero'
import ContentLayout from '@/components/subhelpdeskComponents/Content'
import Banner from '@/components/subhelpdeskComponents/Banner'

export default function PayoutsAPI() {
    return (
        <main>
            <Hero
                title="Payouts API"
                description="Send instant local or cross-border payments"
            />
            <ContentLayout />
            <Banner />
        </main>
    )
}