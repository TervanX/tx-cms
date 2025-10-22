'use client'
import Hero from '@/components/subhelpdeskComponents/Hero'
import ContentLayout from '@/components/subhelpdeskComponents/Content'
import Banner from '@/components/subhelpdeskComponents/Banner'

export default function AutoTradePlugin() {
    return (
        <main>
            <Hero
                title="Auto Trade Plugin"
                description="Smart auto-trading system for digital assets"
            />
            <ContentLayout />
            <Banner />
        </main>
    )
}