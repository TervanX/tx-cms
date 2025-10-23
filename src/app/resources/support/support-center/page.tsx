import React from 'react';
import HeroSection from '@/components/StartupComponents/HeroSection';
import FeaturesSection from '@/components/StartupComponents/FeaturesSection';
import ProductSection from '@/components/StartupComponents/ProductSection';
import Banner from '@/components/StartupComponents/CtaBanner';
import Testimonial from '@/components/StartupComponents/Testimonial';
import CtaBanner from '@/components/StartupComponents/Cta';
import FAQAccordion from '@/components/StartupComponents/Faq';
import { Marquee } from '@/components/StartupComponents/Marquee';
import Resources from '@/components/StartupComponents/Resources';
import { supportData } from '../data';
const ResourcesComponent: any = Resources;
export default function SupportCenter() {
    return (
        <div>
            <HeroSection
                title="Support Center"
                description="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore."
            />
            <FeaturesSection features={supportData.featuredata.features}
                title={supportData.featuredata.title} />
            <ProductSection
                products={supportData.productdata.products}
                title={supportData.productdata.title}
            />
            <Banner title={supportData.bannerdata.title} backgroundImage={supportData.bannerdata.backgroundImage} buttonText={supportData.bannerdata.buttonText} />
            <Testimonial testimonials={supportData.testimonialdata.testimonials}
                title={supportData.testimonialdata.title}
                description={supportData.testimonialdata.description}
            />
            <ResourcesComponent cards={supportData.resourcesdata.cards}
                title={supportData.resourcesdata.title} />
            <CtaBanner
                tagline={supportData.ctaBanner.tagline}
                title={supportData.ctaBanner.title}
                description={supportData.ctaBanner.description}
                buttonText={supportData.ctaBanner.buttonText}
                backgroundImage={supportData.ctaBanner.backgroundImage}
            />
            <FAQAccordion />
        </div>
    );
}