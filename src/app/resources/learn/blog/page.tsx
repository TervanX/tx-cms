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
export default function Blog() {
    return (
        <div>
            <HeroSection
                title="Blog"
                description="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore."
            />
            <FeaturesSection {...supportData.featuredata} />
            <ProductSection
                {...supportData.productdata}
            />
            <Banner {...supportData.bannerdata} />
            <Testimonial {...supportData.testimonialdata} />
            <Marquee items={supportData.marqueedata.marqueeItems} />
            <Resources {...(supportData.resourcesdata as any)} />
            <CtaBanner
                {...supportData.ctaBanner} />
            <FAQAccordion faqData={supportData.faqData} />
        </div>
    );
}