'use client'
import Hero from '@/components/subhelpdeskComponents/Hero'
import ContentLayout from '@/components/subhelpdeskComponents/Content'
import Banner from '@/components/subhelpdeskComponents/Banner'

export default function Vault() {
    return (
        <main>
            <Hero
                title="Vault"
                description="Multi-asset custodial and non-custodial management"
            />
            <ContentLayout />
            <Banner />
        </main>
    )
}