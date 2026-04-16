import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { SITE } from "@/config";

export const BLOG_PATH = "src/data/blog";

const modelSchema = z.object({
  name: z.string(),
  qty: z.number().or(z.string()),
  sku: z.string().optional().nullable(),
  supplier: z.string().optional().nullable(),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${BLOG_PATH}` }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image().or(z.string()).optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
      hideEditPost: z.boolean().optional(),
      timezone: z.string().optional(),
    }),
});

const army = defineCollection({
  type: "content",
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
    thumbnail: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

const project = defineCollection({
  type: "content",
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
    thumbnail: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

const ruleset = defineCollection({
  type: "content",
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
    thumbnail: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

const supplier = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    scales: z.array(z.string()).optional().default([]),
    website_url: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
    featureImage: z.string().optional(),
    featureImageAlt: z.string().optional(),
    thumbnail: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { blog, army, project, ruleset, supplier };
