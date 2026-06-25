import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, FileText, LayoutGrid } from "lucide-react"
import { PageContainer } from "@/components/page-container"

const sections = [
  {
    href: "/articulos",
    title: "Artículos publicados",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    icon: FileText,
  },
  {
    href: "/divulgacion",
    title: "Divulgación de temas",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    icon: BookOpen,
  },
  {
    href: "/paginas",
    title: "Páginas desarrolladas",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
    icon: LayoutGrid,
  },
]

export default function HomePage() {
  return (
    <PageContainer
      eyebrow="Introducción"
      title="Nombre Profesional — Especialidad o Cargo"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
    >
      <section className="mb-12 flex flex-col items-start gap-8 md:flex-row">
        {/* Espacio para la foto de la persona */}
        <figure className="mx-auto w-[220px] shrink-0 md:mx-0">
          <div className="relative h-[293px] w-[220px] overflow-hidden rounded-xl border border-border bg-secondary">
            <Image
              src="/images/portrait-placeholder.png"
              alt="Foto de perfil"
              fill
              sizes="220px"
              className="object-cover"
              priority
            />
          </div>
          <figcaption className="mt-2 text-center text-xs text-muted-foreground">
            Reemplaza esta imagen por tu foto
          </figcaption>
        </figure>

        <div className="flex-1 space-y-4 leading-relaxed text-muted-foreground">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore.
          </p>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Sed ut perspiciatis
            unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam.
          </p>
        </div>
      </section>

      <section aria-label="Secciones del sitio" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((s) => {
          const Icon = s.icon
          return (
            <Link
              key={s.href}
              href={s.href}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary"
            >
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <h2 className="mb-2 text-lg font-semibold text-card-foreground">
                {s.title}
              </h2>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Ver más
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          )
        })}
      </section>
    </PageContainer>
  )
}
