'use client'
import Hero from '@/components/subhelpdeskComponents/Hero'
import ContentLayout from '@/components/subhelpdeskComponents/Content'
import Banner from '@/components/subhelpdeskComponents/Banner'

export default function TxLink() {
    return (
        <main>
            <Hero
                title="Tx Link"
                description="1-click user checkout and identity"
            />
            <ContentLayout />
            <Banner />
        </main>
    )
}