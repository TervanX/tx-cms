'use client'
import Hero from '@/components/subhelpdeskComponents/Hero'
import ContentLayout from '@/components/subhelpdeskComponents/Content'
import Banner from '@/components/subhelpdeskComponents/Banner'

export default function RiskComplianceAI() {
    return (
        <main>
            <Hero
                title="Risk & Compliance AI"
                description="Fraud and AML engine"
            />
            <ContentLayout />
            <Banner />
        </main>
    )
}