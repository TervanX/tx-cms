export interface CallProps {
    image?: string;
    backgroundImage?: string;
    primaryButton?: {
        text: string;
        href: string;
    };
    alignLeft?: boolean;
    title?: string;
    tag?: string;
    description?: string;
    cards?: CardItem[];

}

interface LiveChatPropscardItem {
    title: string;
    description: string;
    img: string;
    backgroundAlt?: string;

}

export interface LiveChatProps {
    cards?: LiveChatPropscardItem[];
    backgroundImage?: string;
    title?: string;
    tag?: string;
    description?: string;
}

interface CardItem {
    title: string;
    description: string;
    img: string;
    backgroundImage?: string;
    imageAlt?: string;

}

export interface BrandEmailSupportProps {
    cards?: CardItem[];
    backgroundImage?: string;
    backgroundAlt?: string;
}

interface ColumnItem {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    list?: {
        items: string[
        ]
    };
}

export interface EngageCustomersProps {
    badgeText?: string;
    title?: string;
    columns?: ColumnItem[];
}


export interface GlobalWhatsappProps {
    cards?: CardItem[];
    backgroundImage?: string;
    backgroundAlt?: string;
    title?: string;
    tag?: string;
    description?: string;
}

export interface EngagementSestionCardProps {
    column: ColumnItem;
}

export interface TestimonialCarouselProps {
    title?: string;
    quote?: string;
    role?: string;
    name?: string;
}