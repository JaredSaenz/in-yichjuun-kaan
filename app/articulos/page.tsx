import { CalendarDays } from "lucide-react"
import { PageContainer } from "@/components/page-container"

const articles = [
  { title: "Lorem ipsum dolor sit amet", date: "Enero 2025", tag: "Investigación" },
  { title: "Consectetur adipiscing elit", date: "Marzo 2025", tag: "Análisis" },
  { title: "Sed do eiusmod tempor incididunt", date: "Mayo 2025", tag: "Opinión" },
  { title: "Ut labore et dolore magna aliqua", date: "Julio 2025", tag: "Investigación" },
]

export default function ArticulosPage() {
  return (
    <PageContainer
      eyebrow="Publicaciones"
      title="Artículos publicados"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Recopilación de artículos y publicaciones."
    >
      <ul className="space-y-4">
        {articles.map((a) => (
          <li key={a.title}>
            <article className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary">
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                  {a.tag}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {a.date}
                </span>
              </div>
              <h2 className="text-xl font-semibold text-card-foreground">
                {a.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
            </article>
          </li>
        ))}
      </ul>
    </PageContainer>
  )
}
