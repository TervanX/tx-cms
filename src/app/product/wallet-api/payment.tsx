'use client'
import Hero from '@/components/subhelpdeskComponents/Hero'
import ContentLayout from '@/components/subhelpdeskComponents/Content'
import Banner from '@/components/subhelpdeskComponents/Banner'

export default function WalletsAPI() {
    return (
        <main>
            <Hero
                title="Wallets API"
                description="Create, manage, and secure digital wallets"
            />
            <ContentLayout />
            <Banner />
        </main>
    )
}