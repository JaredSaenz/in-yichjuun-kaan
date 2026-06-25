"use client"

import { useEffect } from "react"
import Link from "next/link"
import { AlertTriangle, Home, RotateCcw } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.log("[v0] Error capturado en la página:", error.message)
  }, [error])

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 py-16 text-center">
      <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent text-primary">
        <AlertTriangle className="h-8 w-8" />
      </span>
      <p className="mb-2 font-mono text-sm font-medium uppercase tracking-widest text-primary">
        Algo salió mal
      </p>
      <h1 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
        No se pudo cargar la página
      </h1>
      <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ocurrió un error
        inesperado al procesar tu solicitud. Puedes intentar de nuevo o volver al
        inicio.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          <RotateCcw className="h-4 w-4" />
          Intentar de nuevo
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
        >
          <Home className="h-4 w-4" />
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}
