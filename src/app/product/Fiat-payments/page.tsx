'use client'
import Hero from '@/components/subhelpdeskComponents/Hero'
import ContentLayout from '@/components/subhelpdeskComponents/Content'
import Banner from '@/components/subhelpdeskComponents/Banner'

export default function FiatPayments() {
    return (
        <main>
            <Hero
                title="Fiat Payments"
                description="Accept and process local and international currencies"
            />
            <ContentLayout />
            <Banner />
        </main>
    )
}