'use client'
import Hero from '@/components/subhelpdeskComponents/Hero'
import ContentLayout from '@/components/subhelpdeskComponents/Content'
import Banner from '@/components/subhelpdeskComponents/Banner'

export default function TxCapital() {
    return (
        <main>
            <Hero
                title="Tx Capital"
                description="On-chain credit and business financing"
            />
            <ContentLayout />
            <Banner />
        </main>
    )
}