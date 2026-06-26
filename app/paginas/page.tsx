import { ExternalLink } from "lucide-react"
import { PageContainer } from "@/components/page-container"

const projects = [
  { 
    name: "Procesador de Microcalorimetría", 
    stack: "Next.js · TypeScript · Plotly.js", 
    href: "/microcalorimetria" 
  },
  { name: "Proyecto Lorem", stack: "Next.js · TypeScript" },
  { name: "Proyecto Ipsum", stack: "React · Tailwind CSS" },
  { name: "Proyecto Dolor", stack: "Node.js · PostgreSQL" },
  { name: "Proyecto Amet", stack: "Vue · Vite" },
]

export default function PaginasPage() {
  return (
    <PageContainer
      eyebrow="Trabajo realizado"
      title="Páginas desarrolladas"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Selección de páginas y proyectos desarrollados."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.name}
            className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary"
          >
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h2 className="text-lg font-semibold text-card-foreground">
                  {p.name}
                </h2>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-primary">
                  {p.stack}
                </p>
              </div>
              <ExternalLink className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </article>
        ))}
      </div>
    </PageContainer>
  )
}
