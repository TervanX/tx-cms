import React from "react";
import { FeatureSectionProps, FeatureItem } from "@/app/types/product.types";


const FeatureSection: React.FC<FeatureSectionProps> = ({ data, index }) => {
  const isEven = index % 2 === 0;
  return (
    <div
      className={`scroll-mt-20 font-grotesque lg:h-screen ${isEven ? "bg-white" : "bg-bg-blue"
        }`}
    >
      <div className="container">
        <div
          className={`flex flex-col-reverse w-full ${isEven ? " lg:flex-row-reverse" : "lg:flex-row"
            } items-stretch`}
        >
          {/* Text Content */}
          <div className="lg:w-1/2 pl-4 pr-4 lg:pl-20 lg:gap-12 py-6 lg:py-18 px-4 lg:pr-32   lg:h-screen">
            <div className="flex flex-col justify-between h-full space-y-6">
              <div className="space-y-6">
                {/* Tag */}
                <div className="mb-4">
                  <div className="inline-block">
                    <p className="text-base lg:text-lg font-medium text-purple uppercase tracking-wide">
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
            </div>
          </div>
          {/* Image */}
          <div
            className={`lg:w-1/2 flex items-end justify-center `}
            style={{
              backgroundColor: data.imgbg ? data.imgbg : "#fff",
            }}
          >
            <img
              alt={data.image.alt}
              loading="lazy"
              width={data.image.width}
              height={data.image.height}
              decoding="async"
              className={`w-full ${data.image.height ? data.image.height : "h-auto lg:h-screen"
                } `}
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

// Main component that maps through the data
interface FeatureSectionsProps {
  features: FeatureItem[];
}

const FeatureSections: React.FC<FeatureSectionsProps> = ({ features }) => {
  return (
    <div>
      {features.map((feature, index) => (
        <FeatureSection key={feature.id} data={feature} index={index} />
      ))}
    </div>
  );
};

export default FeatureSections;

// data/featuresData.ts
export const featuresData: FeatureItem[] = [
  {
    id: 1,
    tag: "LEAD QUALIFICATION & ROUTING",
    title: "Qualify and route leads like nobody's business",
    description: (
      <>
        Ensure only qualified leads are booking meetings automatically with an
        inbound router that takes only minutes to set up. Choose to assign leads
        by CRM contact owner, or round-robin them to your reps based on
        availability or even distribution. .
      </>
    ),
    ctaText: "Sign up for free",
    ctaLink: "/sign-up",
    image: {
      src: "/assets/submitted.webp",
      alt: "Illustration for Find and Close the Right Buyers with Apollo's B2B Database",
    },
  },
  {
    id: 2,
    tag: "SCHEDULER",
    title: "Stop paying for stand-alone tools",
    description: (
      <>
        Eliminate standalone meeting software. Apollo's scheduler is built right
        into your workflow — so you can find, engage, and book meetings with
        leads all from the same place. Our centralized solution simplifies your
        process while keeping costs in check.
      </>
    ),

    imgbg: "#DCD2FD",
    image: {
      src: "/assets/host.webp",
      alt: "Illustration for Use Apollo's B2B Database Wherever You Work",
      height: "h-[320px]",
    },
  },
  {
    id: 3,
    tag: "PRE & POST MEETING INSIGHTS",
    title: "Move pipeline with pre & post meeting insights",
    imgbg: "#A288FA",
    description: (
      <>
        Get all of the account, contact, buyer signals, and deal insights you
        need before and after your meeting so you can move prospects through the
        pipeline faster, all while syncing with your CRM.
      </>
    ),
    ctaText: "Sign up for free",
    ctaLink: "/sign-up",
    image: {
      src: "/assets/insights.webp",
      alt: "Illustration for bigger deals Apollo's B2B Database ",
    },
  },
  {
    id: 4,
    tag: "FORM ENRICHMENT",
    title: "Reduce friction with your leads",
    description: (
      <>
        Reduce the number of form fields without compromising on data quality
        with Apollo's auto-fill web form enrichment capabilities. Sit back and
        allow us to automatically route leads and surface the right insights
        based on data enriched web forms. work together to find net-new contacts
        who match your best deals.
      </>
    ),
    imgbg: "#A288FA",
    image: {
      src: "/assets/filled.webp",
      alt: "Illustration for bigger deals Apollo's B2B Database ",
    },
  },
];
