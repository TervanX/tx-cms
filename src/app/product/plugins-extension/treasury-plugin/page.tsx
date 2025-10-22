'use client'
import Hero from '@/components/subhelpdeskComponents/Hero'
import ContentLayout from '@/components/subhelpdeskComponents/Content'
import Banner from '@/components/subhelpdeskComponents/Banner'

export default function TreasuryPlugin() {
    return (
        <main>
            <Hero
                title="Treasury Plugin"
                description="Manage business reserves and yield"
            />
            <ContentLayout />
            <Banner />
        </main>
    )
}