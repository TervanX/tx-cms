'use client'
import Hero from '@/components/subhelpdeskComponents/Hero'
import ContentLayout from '@/components/subhelpdeskComponents/Content'
import Banner from '@/components/subhelpdeskComponents/Banner'

export default function GlobalPayouts() {
    return (
        <main>
            <Hero
                title="Global Payouts"
                description="Send crypto/fiat anywhere instantly
"
            />
            <ContentLayout />
            <Banner />
        </main>
    )
}