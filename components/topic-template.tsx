import Image from "next/image"
import { Calendar, Clock, Tag } from "lucide-react"

export type TopicSection = {
  heading: string
  paragraphs: string[]
  image?: {
    src: string
    alt: string
    caption?: string
  }
}

export type TopicData = {
  category: string
  title: string
  summary: string
  date: string
  readingTime: string
  cover: {
    src: string
    alt: string
  }
  sections: TopicSection[]
}

export function TopicTemplate({ topic }: { topic: TopicData }) {
  return (
    <article className="space-y-8">
      {/* Metadatos */}
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
        <span className="inline-flex items-center gap-2 text-primary">
          <Tag className="h-4 w-4" />
          {topic.category}
        </span>
        <span className="inline-flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          {topic.date}
        </span>
        <span className="inline-flex items-center gap-2">
          <Clock className="h-4 w-4" />
          {topic.readingTime}
        </span>
      </div>

      {/* Imagen de portada */}
      <div className="relative aspect-[16/7] w-full overflow-hidden rounded-xl border border-border bg-card">
        <Image
          src={topic.cover.src || "/placeholder.svg"}
          alt={topic.cover.alt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1024px"
          className="object-cover"
        />
      </div>

      {/* Resumen destacado */}
      <p className="border-l-2 border-primary pl-4 text-lg leading-relaxed text-pretty text-card-foreground">
        {topic.summary}
      </p>

      {/* Secciones de contenido */}
      {topic.sections.map((section) => (
        <section key={section.heading} className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-card-foreground">
            {section.heading}
          </h2>
          {section.paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className="leading-relaxed text-pretty text-muted-foreground"
            >
              {paragraph}
            </p>
          ))}
          {section.image && (
            <figure className="mt-6 space-y-2">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-border bg-card">
                <Image
                  src={section.image.src || "/placeholder.svg"}
                  alt={section.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 1024px"
                  className="object-cover"
                />
              </div>
              {section.image.caption && (
                <figcaption className="text-center text-sm text-muted-foreground">
                  {section.image.caption}
                </figcaption>
              )}
            </figure>
          )}
        </section>
      ))}
    </article>
  )
}
