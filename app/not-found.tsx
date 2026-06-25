import Link from "next/link"
import { Home, SearchX } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 py-16 text-center">
      <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent text-primary">
        <SearchX className="h-8 w-8" />
      </span>
      <p className="mb-2 font-mono text-sm font-medium uppercase tracking-widest text-primary">
        Error 404
      </p>
      <h1 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
        Página no encontrada
      </h1>
      <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. El enlace que
        seguiste puede estar roto o la página fue movida o eliminada.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
      >
        <Home className="h-4 w-4" />
        Volver al inicio
      </Link>
    </div>
  )
}
