import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders'; // <-- Importamos el nuevo cargador

// Definimos el "esquema" (las columnas de nuestra tabla)
const productosCollection = defineCollection({
    // 1. Le decimos a Astro EXACTAMENTE dónde y cómo buscar los registros
    loader: glob({ pattern: "**/*.md", base: "./src/content/productos" }),

    // 2. Mantenemos nuestro esquema de validación intacto (Zod)
    schema: ({ image }) => z.object({
        title: z.string(),
        image: image(),
        class: z.string().optional(),
    }),
});

// Exportamos la colección para que Astro la registre internamente
export const collections = {
    'productos': productosCollection,
};