import type React from "react"

export function PageContainer({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <div className="mx-auto w-full max-w-5xl px-5 py-10 md:px-10 md:py-16">
      <header className="mb-10 border-b border-border pb-8">
        {eyebrow && (
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            {eyebrow}
          </p>
        )}
        <h1 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </header>
      {children}
    </div>
  )
}
