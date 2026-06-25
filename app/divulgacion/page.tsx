import Link from "next/link"
import { ArrowRight, BookOpen } from "lucide-react"
import { PageContainer } from "@/components/page-container"
import { getTopicList } from "@/lib/topics"

export default function DivulgacionPage() {
  const topics = getTopicList()

  return (
    <PageContainer
      eyebrow="Conocimiento abierto"
      title="Divulgación de temas"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Espacio dedicado a explicar temas de forma accesible."
    >
      <section className="mb-10 space-y-4 leading-relaxed text-muted-foreground">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Selecciona un tema para leer la
          información completa con texto e imágenes.
        </p>
      </section>

      <div className="grid gap-5 sm:grid-cols-2">
        {topics.map((t) => (
          <Link
            key={t.slug}
            href={`/divulgacion/${t.slug}`}
            className="group flex gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
              <BookOpen className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-widest text-primary">
                {t.category}
              </p>
              <h2 className="mt-1 font-semibold text-card-foreground">
                {t.title}
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {t.excerpt}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Leer más
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </PageContainer>
  )
}
