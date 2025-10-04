import React from 'react'
import Header from '../NavBar'
import LogoGrid from '@/components/productComponents/LogoGrid';
const layout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className='bg-bg-footer'>
            <Header />
            {children}
            <LogoGrid
                backgroundColor="#CCC9C6"
                py="py-10" />
        </div>
    )
}

export default layout