import { z } from 'zod';

export const TestimonialPropsSchema = z.object({
  id: z.number(),
  company: z.string(),
  logo: z.string(),
  title: z.string(),
  quote: z.string(),
  author: z.string(),
  authorRole: z.string(),
  authorImage: z.string(),
  link: z.string(),
});

export const CardItemSchema = z.object({
  id: z.string(),
  title: z.string(),
  image: z.object({
    src: z.string(),
    sizes: z.string(),
    alt: z.string(),
  }),
  button: z.object({
    text: z.string(),
    href: z.string(),
    target: z.enum(['_blank', '_self']).optional(),
  }),
});

export const CardGridPropsSchema = z.object({
  cards: z.array(CardItemSchema),
  className: z.string().optional(),
});

export const ProductSectionPropsSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string(),
  imagePosition: z.enum(['left', 'right']),
});

export const MarqueeItemSchema = z.object({
  id: z.string(),
  alt: z.string(),
  src: z.string(),
  width: z.number(),
  height: z.number(),
});

export const MarqueePropsSchema = z.object({
  items: z.array(MarqueeItemSchema).optional(),
  speed: z.number().optional(),
  pauseOnHover: z.boolean().optional(),
  direction: z.enum(['left', 'right']).optional(),
  className: z.string().optional(),
});

export type TestimonialProps = z.infer<typeof TestimonialPropsSchema>;
export type CardItem = z.infer<typeof CardItemSchema>;
export type CardGridProps = z.infer<typeof CardGridPropsSchema>;
export type ProductSectionProps = z.infer<typeof ProductSectionPropsSchema>;
export type MarqueeItem = z.infer<typeof MarqueeItemSchema>;
export type MarqueeProps = z.infer<typeof MarqueePropsSchema>;

