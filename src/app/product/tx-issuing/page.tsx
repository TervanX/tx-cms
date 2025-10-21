'use client'
import Hero from '@/components/subhelpdeskComponents/Hero'
import ContentLayout from '@/components/subhelpdeskComponents/Content'
import Banner from '@/components/subhelpdeskComponents/Banner'

export default function TxIssuing() {
    return (
        <main>
            <Hero
                title="Tx Issuing"
                description="Virtual and physical cards"
            />
            <ContentLayout />
            <Banner />
        </main>
    )
}