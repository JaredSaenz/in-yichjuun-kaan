import type { TopicData } from "@/components/topic-template"

// Plantilla predeterminada de texto e imágenes.
// Se reutiliza para cada tema; basta con sobrescribir los campos necesarios.
const plantillaPredeterminada: Omit<TopicData, "title" | "category"> = {
  summary:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Resumen breve que introduce el tema y capta el interés del lector antes de profundizar en el contenido.",
  date: "1 de enero de 2025",
  readingTime: "5 min de lectura",
  cover: {
    src: "/divulgacion/portada.png",
    alt: "Imagen de portada del tema de divulgación",
  },
  sections: [
    {
      heading: "Introducción",
      paragraphs: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        "Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      ],
    },
    {
      heading: "Desarrollo del tema",
      paragraphs: [
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
      ],
      image: {
        src: "/divulgacion/contenido.png",
        alt: "Imagen ilustrativa del contenido",
        caption: "Pie de imagen opcional para describir el contenido visual.",
      },
    },
    {
      heading: "Conclusión",
      paragraphs: [
        "Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      ],
    },
  ],
}

export type TopicListItem = {
  slug: string
  title: string
  category: string
  excerpt: string
}

// Listado de temas. Cada uno reutiliza la plantilla predeterminada.
export const topics: Record<string, TopicData> = {
  "lorem-ipsum-dolor": {
    ...plantillaPredeterminada,
    category: "Categoría del tema",
    title: "Lorem ipsum dolor sit amet",
  },
  "consectetur-adipiscing": {
    ...plantillaPredeterminada,
    category: "Categoría del tema",
    title: "Consectetur adipiscing elit",
  },
  "sed-do-eiusmod": {
    ...plantillaPredeterminada,
    category: "Categoría del tema",
    title: "Sed do eiusmod tempor",
  },
  "ut-labore-dolore": {
    ...plantillaPredeterminada,
    category: "Categoría del tema",
    title: "Ut labore et dolore magna",
  },
  "quis-nostrud": {
    ...plantillaPredeterminada,
    category: "Categoría del tema",
    title: "Quis nostrud exercitation",
  },
  "duis-aute-irure": {
    ...plantillaPredeterminada,
    category: "Categoría del tema",
    title: "Duis aute irure dolor",
  },
}

export function getTopicList(): TopicListItem[] {
  return Object.entries(topics).map(([slug, t]) => ({
    slug,
    title: t.title,
    category: t.category,
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  }))
}

export function getTopic(slug: string): TopicData | undefined {
  return topics[slug]
}
