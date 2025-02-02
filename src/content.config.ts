import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';
import { siteConfig } from '@/site-config';

// Define the base schema
const baseSchema = z.object({
  title: z.string().describe("The title of the article."),
  description: z.string().default(siteConfig.description).describe("The description for the article. This is for the meta description."),
  excerpt: z.string().optional().describe("A short excerpt from the article. No character limit, used for previews."),
  dateCreated: z.coerce.date().describe("The date when the article was initially created."),
  dateUpdated: z.coerce.date().describe("The date when the article was last updated."),
  author: z.string().optional().default(siteConfig.author).describe("The author of the article."),
  source: z.string().optional().describe("The original source of the article, if applicable."),
  type: z.enum(['Dashboard', 'Resource', 'Article']).default('Resource').describe("The type of content this article represents."),
  topic: z.array(z.string()).describe("A list of topics related to the article."),
  categories: z.array(z.string()).describe("A list of categories under which the article falls."),
  category: z.string().optional().describe("A single primary category for the article (if applicable)."),
  book: z.string().optional().describe("The book related to the article, if applicable (e.g., for book notes)."),
  chapter: z.string().optional().describe("The chapter related to the article, if applicable."),
  status: z.enum(['Active', 'Archive', 'On Hold', 'Abandoned']).optional().describe("The current status of the article."),
  tags: z.array(z.string()).optional().describe("A list of tags associated with the article for better filtering."),
  banner: z.object({src: z.string().describe("The URL of the banner image."),alt: z.string().describe("The alternative text for the banner image."),}).optional().describe("An optional banner image for the article."),
});

// Define collections using the shared schema
const aviation = defineCollection({
  loader: glob({ base: './src/content/aviation', pattern: '**/*.{md,mdx}' }),
  schema: baseSchema,
});

const infotech = defineCollection({
  loader: glob({ base: './src/content/info-tech', pattern: '**/*.{md,mdx}' }),
  schema: baseSchema,
});


export const collections = { aviation, infotech };

// Category mixin
export function categoryMixin() {
  return z
    .object({
      category: z.string().describe(`Primary category of the article.`),
    })
    .transform(({ category, ...rest }) => ({ category, categories: [category], ...rest }))
    .or(
      z
        .object({
          categories: z.array(z.string()).min(1).describe(`Categories for the article. The first category is considered the primary one.`),
        })
        .transform(({ categories, ...rest }) => ({ category: categories[0], categories, ...rest }))
    );
}

