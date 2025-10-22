'use client'
import Hero from '@/components/subhelpdeskComponents/Hero'
import ContentLayout from '@/components/subhelpdeskComponents/Content'
import Banner from '@/components/subhelpdeskComponents/Banner'

export default function TxPipeline() {
    return (
        <main>
            <Hero
                title="Tx Pipeline"
                description="Data sync to external BI tools"
            />
            <ContentLayout />
            <Banner />
        </main>
    )
}