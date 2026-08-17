import { z, defineCollection } from 'astro:content';

const productosCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        image: image(),
        class: z.string().optional(),
    }),
});

export const collections = {
    'productos': productosCollection,
};