import { defineCollection, z } from 'astro:content';

const modelSchema = z.object({
  name: z.string(),
  qty: z.number().or(z.string()),
  sku: z.string().optional().nullable(),
  supplier: z.string().optional().nullable(),
});

const post = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    featured: z.boolean().optional().default(false),
    draft: z.boolean().optional().default(false),
    toc: z.boolean().optional().default(false),
    featureImage: z.string().optional(),
    featureImageAlt: z.string().optional(),
    featureImageCap: z.string().optional(),
    thumbnail: z.string().optional(),
    shareImage: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
    usePageBundles: z.boolean().optional(),
    codeMaxLines: z.number().optional(),
    codeLineNumbers: z.boolean().optional(),
    figurePositionShow: z.boolean().optional(),
  }),
});

const army = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    scale: z.string().optional(),
    models: z.array(modelSchema).optional().default([]),
    rulesets: z.array(z.string()).optional().default([]),
    tags: z.array(z.string()).optional().default([]),
    featureImage: z.string().optional(),
    featureImageAlt: z.string().optional(),
    featureImageCap: z.string().optional(),
    thumbnail: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

const project = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    scale: z.string().or(z.number()).optional(),
    suppliers: z.array(z.string()).optional().default([]),
    started: z.coerce.date().optional().nullable(),
    completed: z.coerce.date().optional().nullable(),
    rulesets: z.array(z.string()).optional().default([]),
    models: z.array(modelSchema).optional().default([]),
    tags: z.array(z.string()).optional().default([]),
    featureImage: z.string().optional(),
    featureImageAlt: z.string().optional(),
    featureImageCap: z.string().optional(),
    thumbnail: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

const ruleset = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    supplier: z.string().optional(),
    scales: z.array(z.string()).optional().default([]),
    authors: z.array(z.string()).optional().default([]),
    tags: z.array(z.string()).optional().default([]),
    featureImage: z.string().optional(),
    featureImageAlt: z.string().optional(),
    featureImageCap: z.string().optional(),
    thumbnail: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

const supplier = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    scales: z.array(z.string()).optional().default([]),
    website_url: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
    featureImage: z.string().optional(),
    featureImageAlt: z.string().optional(),
    featureImageCap: z.string().optional(),
    thumbnail: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { post, army, project, ruleset, supplier };
