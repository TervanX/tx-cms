'use client'
import Hero from '@/components/subhelpdeskComponents/Hero'
import ContentLayout from '@/components/subhelpdeskComponents/Content'
import Banner from '@/components/subhelpdeskComponents/Banner'

export default function TxSigma() {
    return (
        <main>
            <Hero
                title="Tx Sigma"
                description="Custom financial data reports"
            />
            <ContentLayout />
            <Banner />
        </main>
    )
}