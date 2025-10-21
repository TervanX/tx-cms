'use client'
import Hero from '@/components/subhelpdeskComponents/Hero'
import ContentLayout from '@/components/subhelpdeskComponents/Content'
import Banner from '@/components/subhelpdeskComponents/Banner'

export default function HealthPlugin() {
    return (
        <main>
            <Hero
                title="Health Plugin"
                description="Healthcare billing & insurance automation"
            />
            <ContentLayout />
            <Banner />
        </main>
    )
}