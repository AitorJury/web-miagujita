import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const productosCollection = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/productos" }),

    schema: z.object({
        title: z.string(),
        image: z.string(),
        class: z.string().optional(),
    }),
});

export const collections = {
    'productos': productosCollection,
};
