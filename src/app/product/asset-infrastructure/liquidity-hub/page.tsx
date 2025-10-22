'use client'
import Hero from '@/components/subhelpdeskComponents/Hero'
import ContentLayout from '@/components/subhelpdeskComponents/Content'
import Banner from '@/components/subhelpdeskComponents/Banner'

export default function LiquidityHub() {
    return (
        <main>
            <Hero
                title="Liquidity Hub"
                description="Access aggregated liquidity pools"
            />
            <ContentLayout />
            <Banner />
        </main>
    )
}