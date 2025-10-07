import { z } from 'zod';

export const ButtonConfigSchema = z.object({
    text: z.string(),
    href: z.string(),
});
export const SsectionSchema = z.object({
    title: z.string(),
    tag: z.string().optional(),
    description: z.string().optional(),
    children: z.any().optional(),
    ctaButton: z.any().optional(),
    alignLeft: z.boolean().optional(),
    primaryButton: ButtonConfigSchema.optional(),

})




export type SectionProps = z.infer<typeof SsectionSchema>