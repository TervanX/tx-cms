'use client'
import Hero from '@/components/subhelpdeskComponents/Hero'
import ContentLayout from '@/components/subhelpdeskComponents/Content'
import Banner from '@/components/subhelpdeskComponents/Banner'

export default function LogisticsPlugin() {
    return (
        <main>
            <Hero
                title="Logistics Plugin"
                description="Fleet and delivery finance integration"
            />
            <ContentLayout />
            <Banner />
        </main>
    )
}