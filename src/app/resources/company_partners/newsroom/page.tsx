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

export default function Newsroom() {
    return (
        <div>
            <HeroSection
                title="Newsroom"
                description="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore."
            />
            <FeaturesSection />
            <ProductSection />
            <Banner />
            <Testimonial />
            <Marquee />
            <Resources />
            <CtaBanner />
            <FAQAccordion />
        </div>
    );
}