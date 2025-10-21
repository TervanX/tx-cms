'use client'
import Hero from '@/components/subhelpdeskComponents/Hero'
import ContentLayout from '@/components/subhelpdeskComponents/Content'
import Banner from '@/components/subhelpdeskComponents/Banner'

export default function TxSmartFlow() {
    return (
        <main>
            <Hero
                title="Tx SmartFlow"
                description="Automate business logic and payments"
            />
            <ContentLayout />
            <Banner />
        </main>
    )
}