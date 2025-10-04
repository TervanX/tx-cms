import React from 'react'
import Header from '../NavBar'
import Footer from '@/components/reusable/Footer'
const layout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default layout