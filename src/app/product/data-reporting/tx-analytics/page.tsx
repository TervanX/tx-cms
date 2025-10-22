'use client'
import Hero from '@/components/subhelpdeskComponents/Hero'
import ContentLayout from '@/components/subhelpdeskComponents/Content'
import Banner from '@/components/subhelpdeskComponents/Banner'

export default function TxAnalytics() {
    return (
        <main>
            <Hero
                title="Tx Analytics"
                description="Real-time monitoring dashboard"
            />
            <ContentLayout />
            <Banner />
        </main>
    )
}