'use client'
import Hero from '@/components/subhelpdeskComponents/Hero'
import ContentLayout from '@/components/subhelpdeskComponents/Content'
import Banner from '@/components/subhelpdeskComponents/Banner'

export default function CryptoPayments() {
    return (
        <main>
            <Hero
                title="Crypto Payments"
                description="Accept BTC, ETH, USDT, and more"
            />
            <ContentLayout />
            <Banner />
        </main>
    )
}