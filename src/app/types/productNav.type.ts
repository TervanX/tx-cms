interface Feature {
  title: string;
  description: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  companyLogo?: string;
  image: {
    src: string;
    alt: string;
  };
}

export interface ProductivitySectionProps {
  heading: {
    main: string;
    highlighted: string;
  };
  description: string;
  images: {
    mobile: {
      src: string;
      alt: string;
    };
    desktop: {
      src: string;
      alt: string;
    };
    product: {
      src: string;
      alt: string;
    };
  };
  features: Feature[];
  testimonial: Testimonial;
  animationConfig?: {
    margin?: any;
  };
}



interface UsabilityFeature {
  title: string;
  description: string;
  image?: {
    src: string;
    alt: string;
  };
}

export interface UsabilitySectionProps {
  heading: {
    main: string;
    highlighted: string;
  };
  description: string;
  images: {
    mobile: {
      src: string;
      alt: string;
    };
    desktop: {
      src: string;
      alt: string;
    };
    mainFeature: {
      src: string;
      alt: string;
    };
  };
  usabilityFeatures: UsabilityFeature[];
  additionalFeatures: UsabilityFeature[];
  animationConfig?: {
    margin?: any;
  };
  sectionStyle?: {
    backgroundColor?: string;
  };
}



interface OutboundFeature {
  title: string;
  description: string;
}

interface G2ComparisonItem {
  name: string;
  value: number;
  color: string;
}

export interface OutboundSectionProps {
  heading: {
    main: string;
    highlighted: string;
  };
  description: string;
  images: {
    mobile: {
      src: string;
      alt: string;
    };
    desktop: {
      src: string;
      alt: string;
    };
    mainFeature: {
      src: string;
      alt: string;
    };
  };
  outboundFeatures: OutboundFeature[];
  g2Comparison: {
    title: string;
    description: string;
    link: {
      text: string;
      href: string;
      target?: string;
    };
    items: G2ComparisonItem[];
  };
  animationConfig?: {
    margin?: any;
  };
  sectionStyle?: {
    backgroundColor?: string;
  };
}

interface Feature {
    id: string;
    name: string;
    href: string;
    description: string;
    image: string;
}

export interface FeaturesSectionProps {
    title?: string;
    features: Feature[];
    defaultActiveFeature?: string;
    sectionStyle?: {
        backgroundColor?: string;
    };
    linkStyle?: {
        text?: string;
    };
    animationConfig?: {
        margin?: any;
    };
}






