import React from 'react'
import Header from '@/components/reusable/NavBar';
import LogoGrid from '@/components/productComponents/LogoGrid';
const layout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className='bg-white'>
            <Header />
            {children}
            <LogoGrid
                backgroundColor="#ffffff"
                py="py-10" />
        </div>
    )
}

export default layout