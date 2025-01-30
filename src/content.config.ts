import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';
import { siteConfig} from '@/site-config';

const docs = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/docs', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string().default(siteConfig.description),
		excerpt: z.string().optional(),
		dateCreated: z.coerce.date(),
		banner: z
			.object({
				src: z.string(),
				alt: z.string(),
			})
			.optional(), // Make the banner field optional
    type: z.string(),
    tags: z.array(z.string()),
    topics: z.array(z.string()),
    book: z.string().optional(),
    chapter: z.string().optional(),
    category: z.string(),
    status: z.enum(['Active', 'Completed', 'On Hold', 'Abandoned']),
	}),
});
export const collections = { docs };