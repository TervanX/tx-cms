'use client'
import Hero from '@/components/subhelpdeskComponents/Hero'
import ContentLayout from '@/components/subhelpdeskComponents/Content'
import Banner from '@/components/subhelpdeskComponents/Banner'

export default function AuthorizationOptimizer() {
    return (
        <main>
            <Hero
                title="Authorization Optimizer"
                description="Boost payment success rates"
            />
            <ContentLayout />
            <Banner />
        </main>
    )
}