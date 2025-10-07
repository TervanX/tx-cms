import { z } from 'zod';

export const PersonSchema = z.object({
  tag: z.string(),
  name: z.string(),
  role: z.string(),
  company: z.string(),
  avatar: z.string(),
  logoText: z.string(),
  longCopy: z.string(),
});

export const FAQItemSchema = z.object({
  question: z.string(),
  answer: z.any(), 
});


export const AccordionItemPropsSchema = z.object({
  item: FAQItemSchema,
  isOpen: z.boolean(),
  onToggle: z.function(),
});



export type Person = z.infer<typeof PersonSchema>;
export type FAQItem = z.infer<typeof FAQItemSchema>;
export type AccordionItemProps = z.infer<typeof AccordionItemPropsSchema>;
