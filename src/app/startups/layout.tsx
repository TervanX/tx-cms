import React from 'react'
import BackgroundImages from '@/components/StartupComponents/BackgroundImage'
import Header from '@/components/StartupComponents/Header'
import Footer from '@/components/reusable/Footer'

const layout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="relative">
            <BackgroundImages />
            <div className="relative z-10">
                <Header />
                {children}
                <Footer />
            </div>
        </div>
    )
}

export default layout