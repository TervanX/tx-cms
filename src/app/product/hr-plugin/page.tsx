'use client'
import Hero from '@/components/subhelpdeskComponents/Hero'
import ContentLayout from '@/components/subhelpdeskComponents/Content'
import Banner from '@/components/subhelpdeskComponents/Banner'

export default function HRPlugin() {
    return (
        <main>
            <Hero
                title="HR Plugin"
                description="Salary payments and employee crypto payroll"
            />
            <ContentLayout />
            <Banner />
        </main>
    )
}