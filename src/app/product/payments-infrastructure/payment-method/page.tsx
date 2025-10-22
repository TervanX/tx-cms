'use client'
import Hero from '@/components/subhelpdeskComponents/Hero'
import ContentLayout from '@/components/subhelpdeskComponents/Content'
import Banner from '@/components/subhelpdeskComponents/Banner'

export default function PaymentMethods() {
    return (
        <main>
            <Hero
                title="Payment Methods"
                description="Cards, wallets, stablecoins, crypto transfers"
            />
            <ContentLayout />
            <Banner />
        </main>
    )
}