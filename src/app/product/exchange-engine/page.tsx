'use client'
import Hero from '@/components/subhelpdeskComponents/Hero'
import ContentLayout from '@/components/subhelpdeskComponents/Content'
import Banner from '@/components/subhelpdeskComponents/Banner'

export default function ExchangeEngine() {
    return (
        <main>
            <Hero
                title="Exchange Engine"
                description="Swap and trade assets in real-time"
            />
            <ContentLayout />
            <Banner />
        </main>
    )
}