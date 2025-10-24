import React from 'react'
import { HeroSection } from '@/components/productComponents/HeroSection'
import LogoGrid from '@/components/productComponents/LogoGrid'
import FeatureSections from '@/components/productComponents/FeatureSection'
import { featuresData } from '@/components/productComponents/FeatureSection'
import Testimonial from '@/components/productComponents/Testimonial'
import CtaSection from '@/components/productComponents/CtaSection'
import FAQAccordion from '@/components/reusable/Faq'
import FeaturesShowcase from '@/components/productComponents/FeatureShowcase'
const ProductPage: React.FC = () => {
    return (
        <div>
            <HeroSection
                backgroundImage="/assets/bg.d.svg"
                backgroundAlt="Gradient background"
                tag="SALES ENGAGEMENT"
                heading="#1 in B2B sales engagement"
                subheading="All your must-have outbound channels in one place, powered by an AI sales assistant to help you automate and personalize outreach.
."
                primaryButton={{
                    text: "Sign up for free",
                    href: "/sign-up"
                }}
                secondaryButton={{
                    text: "Get a demo",
                    href: "/contact/contact-sales"
                }}
                rating={{
                    score: "4.7",
                    reviewCount: "9,015",
                    badge: "GDPR Compliant"
                }}
            />
            <LogoGrid backgroundColor="#0C48A2" svgColor="white" />
            <FeatureSections features={featuresData} />
            <Testimonial />
            <FeaturesShowcase />
            <FAQAccordion />
            <CtaSection />
        </div>

    )
}

export default ProductPage