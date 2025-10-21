'use client'
import Hero from '@/components/subhelpdeskComponents/Hero'
import ContentLayout from '@/components/subhelpdeskComponents/Content'
import Banner from '@/components/subhelpdeskComponents/Banner'

export default function TxID() {
    return (
        <main>
            <Hero
                title="Tx ID"
                description="Blockchain-verified identity layer"
            />
            <ContentLayout />
            <Banner />
        </main>
    )
}