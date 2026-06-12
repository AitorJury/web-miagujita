/**
 * @file products.js
 * @description Capa de Datos Estática (Data Layer) para el catálogo de trabajos.
 * * Arquitectura (Headless approach):
 * - Extraemos el contenido de la capa de presentación (UI) para simular el comportamiento 
 * de un Headless CMS. Esto facilita una futura migración a una base de datos real o 
 * a un CMS como Sanity/Strapi sin refactorizar los componentes de Astro.
 * - Imports de Assets: Importamos las imágenes directamente en JS para que el bundler 
 * de Astro (Vite) las procese, optimice y emita con hashes de caché en tiempo de build.
 */

import galeria1 from '../assets/img/galeria1.jpg'; // Bolso / Neceser
import galeria2 from '../assets/img/galeria2.jpg'; // Falda
import galeria3 from '../assets/img/galeria3.jpg'; // Cortinas moradas
import galeria4 from '../assets/img/galeria4.jpg'; // Bastidor de bordado
import galeria5 from '../assets/img/galeria5.jpg'; // Tote bag (Bolsa de tela)

export const products = [
    {
        id: "neceser-personalizado",
        title: "Neceser personalizado",
        image: galeria1,
        class: "aspect-square",
        description: "Neceser hecho a mano, ideal para guardar tus imprescindibles. Telas 100% algodón y opción de bordar tu nombre o iniciales. Elige los colores que más te gusten y crearemos una pieza única para ti."
    },
    {
        id: "arreglo-falda",
        title: "Arreglo de falda",
        image: galeria2,
        // Mantenemos la estructura del grid asimétrico (masonry pattern)
        class: "aspect-[4/3] md:col-span-2",
        description: "Ajuste de medidas y bajo a medida para que tu falda favorita te vuelva a sentar como un guante. Trabajo delicado, acabados invisibles y cuidado extremo con los tejidos más exigentes."
    },
    {
        id: "cortinas-medida",
        title: "Cortinas a medida",
        image: galeria3,
        class: "aspect-square",
        description: "Confección de cortinas personalizadas para darle un toque cálido y elegante a cualquier rincón de tu hogar. Te asesoro con las medidas y los acabados para que el resultado sea de revista."
    },
    {
        id: "bordado-mano",
        title: "Bordado a mano",
        image: galeria4,
        class: "aspect-square md:col-span-2",
        description: "Detalles que marcan la diferencia. Bordados artesanales con hilos de alta calidad para personalizar prendas, bastidores o complementos. Dime tu idea y la dibujaré con hilo."
    },
    {
        id: "bolsa-tela",
        title: "Bolsa de tela (Tote bag)",
        image: galeria5,
        class: "aspect-[4/3]",
        description: "Tote bag resistente y ecológica. Perfecta para la compra, el día a día o la playa. Costuras reforzadas para aguantar peso sin perder el estilo."
    },
];
