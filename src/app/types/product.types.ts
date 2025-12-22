import { z } from 'zod';

export const ImageSchema = z.object({
  src: z.string(),
  alt: z.string(),
  width: z.union([z.number(), z.string()]).optional(),
  height: z.union([z.number(), z.string()]).optional(),
});


export const FeatureItemSchema = z.object({
  id: z.number(),
  tag: z.string(),
  title: z.string(),
  description: z.any(),
  ctaText: z.string().optional(),
  ctaLink: z.string().optional(),
  ctaTarget: z.string().optional(),
  imgbg: z.string().optional(),
  image: ImageSchema,
});


export const FeatureSectionPropsSchema = z.object({
  data: FeatureItemSchema,
  index: z.number(),
});

export const VideoHeroPropsSchema = z.object({
  thumbnailSrc: z.string(),
  videoSrc: z.string(),
  title: z.string().optional(),
  className: z.string().optional(),
  poster: z.string().optional(),
});

export const ButtonConfigSchema = z.object({
  text: z.string(),
  href: z.string(),
});

export const RatingConfigSchema = z.object({
  score: z.string(),
  reviewCount: z.string(),
  badge: z.string().optional(),
});

export const HeroPropsSchema = z.object({
  backgroundImage: z.string().optional(),
  backgroundAlt: z.string().optional(),
  tag: z.string().optional(),
  heading: z.string().optional(),
  subheading: z.string().optional(),
  primaryButton: ButtonConfigSchema.optional(),
  secondaryButton: ButtonConfigSchema.optional(),
  rating: RatingConfigSchema.optional(),
  showRating: z.boolean().optional(),
  className: z.string().optional(),
});

export const FeatureItemWithIconSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  icon: z.any(), // JSX.Element
  color: z.string(),
  learnMoreLink: z.string().optional(),
  image: z.object({
    src: z.string(),
    alt: z.string(),
  }),
});

export const FeatureCategorySchema = z.object({
  id: z.string(),
  title: z.string(),
  features: z.array(FeatureItemWithIconSchema),
  color: z.string(),
});

export const FeatureItemDetailedSchema = z.object({
  id: z.number(),
  tag: z.string(),
  title: z.string(),
  description: z.any(), // React.ReactNode
  ctaText: z.string(),
  ctaLink: z.string(),
  ctaTarget: z.string().optional(),
  image: z.object({
    src: z.string(),
    alt: z.string(),
    width: z.number(),
    height: z.number(),
  }),
});

export const FeatureSectionPropSchema = z.object({
  data: FeatureItemDetailedSchema,
  index: z.number(),
});

export const FeatureCardPropsSchema = z.object({
  icon: z.any(),
  title: z.string(),
  description: z.string()
})

export const ProductSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  image: z.string(),
  imagePosition: z.string().optional(),
  subtitle: z.string().optional(),
  features: z.array(z.string()).optional(),
  ctaText: z.string().optional(),
  ctaLink: z.string().optional()
});

export const ProductSectionPropsSchema = z.object({
  products: z.array(ProductSchema).optional().default([]),
  title: z.string().optional()
});

// Infer the TypeScript types from the Zod schemas
export type Product = z.infer<typeof ProductSchema>;
export type ProductSectionProps = z.infer<typeof ProductSectionPropsSchema>;

export type FeatureCardProps = z.infer<typeof FeatureCardPropsSchema>;
export type ButtonConfig = z.infer<typeof ButtonConfigSchema>;
export type RatingConfig = z.infer<typeof RatingConfigSchema>;
export type HeroProps = z.infer<typeof HeroPropsSchema>;
export type FeatureItemWithIcon = z.infer<typeof FeatureItemWithIconSchema>;
export type FeatureCategory = z.infer<typeof FeatureCategorySchema>;
export type FeatureItemDetailed = z.infer<typeof FeatureItemDetailedSchema>;
export type FeatureSectionProp = z.infer<typeof FeatureSectionPropSchema>;
export type FeatureItem = z.infer<typeof FeatureItemSchema>;
export type FeatureSectionProps = z.infer<typeof FeatureSectionPropsSchema>;
export type VideoHeroProps = z.infer<typeof VideoHeroPropsSchema>;
export type Image = z.infer<typeof ImageSchema>;

