'use client'
import Hero from '@/components/subhelpdeskComponents/Hero'
import ContentLayout from '@/components/subhelpdeskComponents/Content'
import Banner from '@/components/subhelpdeskComponents/Banner'

export default function TxAccounts() {
    return (
        <main>
            <Hero
                title="Tx Accounts"
                description="Business wallets and sub-accounts"
            />
            <ContentLayout />
            <Banner />
        </main>
    )
}