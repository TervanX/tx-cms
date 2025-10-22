
'use client'
import Hero from '@/components/subhelpdeskComponents/Hero'
import ContentLayout from '@/components/subhelpdeskComponents/Content'
import Banner from '@/components/subhelpdeskComponents/Banner'

export default function Home() {
    return (

        <main>
            <Hero
                title="The next-gen Helpdesk"
                span='designed for efficiency'
                description="Helpdesk is a modern, AI-powered platform with the tools, workflows and insights agents need to work faster and deliver the highest quality customer service."
            />
            <ContentLayout />
            <Banner />
        </main>
    )
}