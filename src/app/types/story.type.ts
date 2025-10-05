import { z } from 'zod';
import React from 'react';

export const CardPropsSchema = z.object({
  id: z.string(),
  logo: z.any(),
  year: z.string(),
  description: z.string(),
  title: z.string().optional(),
});


export type CardProps = z.infer<typeof CardPropsSchema>;

