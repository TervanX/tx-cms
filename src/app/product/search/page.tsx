import React from 'react'
import HeroSection from '@/components/productComponents/HeroSection'
import LogoGrid from '@/components/productComponents/LogoGrid'
import FeatureSections from '@/components/productComponents/FeatureSection'
import { featuresData } from '@/components/productComponents/FeatureSection'
import Testimonial from '@/components/productComponents/Testimonial'
import CtaSection from '@/components/productComponents/CtaSection'
import Footer from '@/components/reusable/Footer'
import FAQAccordion from '@/components/reusable/Faq'
import FeaturesShowcase from '@/components/productComponents/FeatureShowcase'
const ProductPage: React.FC = () => {
    return (
        <div><HeroSection />
            <LogoGrid />
            <FeatureSections features={featuresData} />
            <Testimonial />
            <FeaturesShowcase />
            <FAQAccordion />
            <CtaSection />
            <Footer />
        </div>

    )
}

export default ProductPage