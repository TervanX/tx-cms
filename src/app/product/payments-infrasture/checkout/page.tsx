'use client'
import Hero from '@/components/subhelpdeskComponents/Hero'
import ContentLayout from '@/components/subhelpdeskComponents/Content'
import Banner from '@/components/subhelpdeskComponents/Banner'

export default function Checkout() {
    return (
        <main>
            <Hero
                title="Checkout"
                description="Prebuilt and embeddable checkout page"
            />
            <ContentLayout />
            <Banner />
        </main>
    )
}