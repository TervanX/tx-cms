'use client'
import Hero from '@/components/subhelpdeskComponents/Hero'
import ContentLayout from '@/components/subhelpdeskComponents/Content'
import Banner from '@/components/subhelpdeskComponents/Banner'

export default function TxAutomate() {
    return (
        <main>
            <Hero
                title="Tx Automate"
                description="Workflow and settlement automation"
            />
            <ContentLayout />
            <Banner />
        </main>
    )
}