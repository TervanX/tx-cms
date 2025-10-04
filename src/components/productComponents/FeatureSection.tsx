import React from 'react';
import Link from 'next/link';

interface FeatureItem {
  id: number;
  tag: string;
  title: string;
  description: React.ReactNode;
  ctaText: string;
  ctaLink: string;
  ctaTarget?: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

interface FeatureSectionProps {
  data: FeatureItem;
  index: number;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ data, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`scroll-mt-20 font-grotesque ${isEven ? 'bg-white' : 'bg-bg-blue'} px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-24`}>
      <div className="container mx-auto px-4">
        <div className={`flex flex-col-reverse ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse '}  items-center gap-8 lg:gap-12 py-6 lg:py-18`}>
          {/* Text Content */}
          <div className="lg:w-1/2">
            <div className="flex flex-col justify-between h-full space-y-6">
              {/* Top Section - Tag, Title, Description */}
              <div className="space-y-6">
                {/* Tag */}
                <div className="mb-4">
                  <div className="inline-block">
                    <p className="text-base lg:text-lg font-medium text-blue uppercase tracking-wide">
                      {data.tag}
                    </p>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-4xl lg:text-5xl font-bold text-dark leading-tight">
                  {data.title}
                </h3>

                {/* Description */}
                <div className="text-base lg:text-lg dark leading-relaxed">
                  {data.description}
                </div>
              </div>

              {/* Bottom Section - CTA Button */}
              <div className="pt-6 lg:pt-10 xl:pt-20">
                <Link
                  href={data.ctaLink}
                  target={data.ctaTarget || '_self'}
                  className="inline-block"
                >
                  <div className="flex items-center gap-2 group cursor-pointer">
                    <p className="text-blue font-medium text-base md:text-lg group-hover:text-blue-800 transition-colors">
                      {data.ctaText}
                    </p>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      <path
                        d="M22.375 12.5437C22.375 13.1909 21.8503 13.7156 21.2031 13.7156L4.79687 13.7156C4.14967 13.7156 3.625 13.1909 3.625 12.5437C3.625 11.8965 4.14966 11.3718 4.79687 11.3718L21.2031 11.3718C21.8503 11.3718 22.375 11.8965 22.375 12.5437Z"
                        fill="#105BCC"
                      />
                      <path
                        d="M12.1714 21.5755C11.7137 21.1178 11.7137 20.3758 12.1714 19.9182L19.5458 12.5437L12.1714 5.16922C11.7137 4.71157 11.7137 3.96958 12.1714 3.51194C12.629 3.05429 13.371 3.05429 13.8286 3.51194L22.0318 11.7151C22.4894 12.1727 22.4894 12.9147 22.0318 13.3723L13.8286 21.5755C13.371 22.0331 12.629 22.0331 12.1714 21.5755Z"
                        fill="#105BCC"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2">
            <img
              alt={data.image.alt}
              loading="lazy"
              width={data.image.width}
              height={data.image.height}
              decoding="async"
              className="w-full h-auto"
              srcSet={`
                ${data.image.src}?w=1200&q=75 1x,
                ${data.image.src}?w=3840&q=75 2x
              `}
              src={`${data.image.src}?w=3840&q=75`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface FeatureSectionsProps {
  features: FeatureItem[];
}

const FeatureSections: React.FC<FeatureSectionsProps> = ({ features }) => {
  return (
    <div>
      {features.map((feature, index) => (
        <FeatureSection
          key={feature.id}
          data={feature}
          index={index}
        />
      ))}
    </div>
  );
};

export default FeatureSections;

export const featuresData: FeatureItem[] = [
  {
    id: 1,
    tag: "SEARCH",
    title: "Find and Close the Right Buyers with Apollo's B2B Database",
    description: (
      <>
        Search over 210M+ verified contacts using 65+ precision filters.
        Supercharge your targeting with{' '}
        <Link href="/product/ai-sales-automation" className="hover:border-b-2  hover:border-[#fecf40]">
          AI-powered sales automation
        </Link>
        , tap into real-time{' '}
        <Link href="/product/buying-intent" className="hover:border-b-2  hover:border-[#fecf40]">
          buying intent
        </Link>
        , and keep your CRM fresh with{' '}
        <Link href="/product/data-enrichment" className="hover:border-b-2  hover:border-[#fecf40]">
          data enrichment
        </Link>.
      </>
    ),
    ctaText: "Sign up for free",
    ctaLink: "/sign-up",
    image: {
      src: "/assets/image1.webp",
      alt: "Illustration for Find and Close the Right Buyers with Apollo's B2B Database",
      width: 1184,
      height: 1184
    }
  },
  {
    id: 2,
    tag: "PIPELINE INTEGRATIONS",
    title: "Use Apollo's B2B Database Wherever You Work",
    description: (
      <>
        Access verified contact and company data across Salesforce, Gmail, and Outlook.
        Enrich your records in real time with{' '}
        <Link href="/product/data-enrichment" className="hover:border-b-2  hover:border-[#fecf40]">
          data enrichment
        </Link>
        , uncover high-fit prospects using{' '}
        <Link href="/product/buying-intent" className="hover:border-b-2  hover:border-[#fecf40]">
          buying intent
        </Link>
        , streamline your prospecting with{' '}
        <Link href="/product/ai-sales-automation" className="hover:border-b-2  hover:border-[#fecf40]">
          AI-powered sales automation
        </Link>
        , and connect everything seamlessly through{' '}
        <Link href="/product/integrations" className="hover:border-b-2  hover:border-[#fecf40]">
          CRM integrations
        </Link>.
      </>
    ),
    ctaText: "See how it works",
    ctaLink: "https://chrome.google.com/webstore/detail/apolloio-email-finder-and/alhgpfoeiimagjlnfekdhkjlkiomcapa",
    ctaTarget: "_blank",
    image: {
      src: "/assets/image2.webp",
      alt: "Illustration for Use Apollo's B2B Database Wherever You Work",
      width: 1184,
      height: 1184
    }
  },
  {
    id: 3,
    tag: "ACCOUNT-BASED PROSPECTING",
    title: "Unlock Bigger Deals with Apollo's B2B Database",
    description: (
      <>
        Identify every decision-maker in an account and engage them with precision. Apollo's
        <Link href="/product/data-enrichment" className="hover:border-b-2  hover:border-[#fecf40]">
          B2B data enrichment
        </Link>
        <Link href="/product/buying-intent" className="hover:border-b-2  hover:border-[#fecf40]">
          buying intent
        </Link>
        , and
        <Link href="/product/outreach" className="hover:border-b-2  hover:border-[#fecf40]">
          multi-threaded outreach
        </Link>make it easy to spot opportunities, personalize outreach, and close complex deals faster.
      </>
    ),
    ctaText: "Sign up for free",
    ctaLink: "/sign-up",
    image: {
      src: "/assets/image3.webp",
      alt: "Illustration for bigger deals Apollo's B2B Database ",
      width: 1184,
      height: 1184
    }
  },
  {
    id: 4,
    tag: "RECOMMENDATIONS",
    title: "Fill Your Pipeline with AI-Recommended B2B Prospects",
    description: (
      <>
        Let AI surface the highest-fit leads based on your past success. Apollo's
        <Link href="/product/data-enrichment" className="hover:border-b-2  hover:border-[#fecf40]">
          B2B data enrichment
        </Link>
        <Link href="/product/ai-sales-automation" className="hover:border-b-2  hover:border-[#fecf40]">
          AI-powered sales automation
        </Link>
        , and
        <Link href="/product/buying-intent" className="hover:border-b-2  hover:border-[#fecf40]">
          buying intent
        </Link>
        work together to find net-new contacts who match your best deals.
      </>
    ),
    ctaText: "Sign up for free",
    ctaLink: "/sign-up",
    image: {
      src: "/assets/image4.webp",
      alt: "Illustration for bigger deals Apollo's B2B Database ",
      width: 1184,
      height: 1184
    }
  }
];