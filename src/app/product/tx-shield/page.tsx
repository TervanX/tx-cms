'use client'
import Hero from '@/components/subhelpdeskComponents/Hero'
import ContentLayout from '@/components/subhelpdeskComponents/Content'
import Banner from '@/components/subhelpdeskComponents/Banner'

export default function TxShield() {
    return (
        <main>
            <Hero
                title="Tx Shield"
                description="AI-powered fraud prevention"
            />
            <ContentLayout />
            <Banner />
        </main>
    )
}