import type React from "react"

import { Mail, MapPin, Phone, Send } from "lucide-react"
import { PageContainer } from "@/components/page-container"

const details = [
  {
    icon: Mail,
    label: "Correo electrónico",
    value: "lorem.ipsum@ejemplo.com",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+00 000 000 0000",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Lorem ipsum, dolor sit amet",
  },
]

export default function ContactoPage() {
  return (
    <PageContainer
      eyebrow="Contacto"
      title="Ponte en contacto"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. ¿Tienes una consulta o propuesta de colaboración? Completa el formulario o usa los datos de contacto."
    >
      <div className="grid gap-10 lg:grid-cols-5">
        {/* Información de contacto */}
        <section aria-label="Datos de contacto" className="space-y-5 lg:col-span-2">
          {details.map((d) => {
            const Icon = d.icon
            return (
              <div
                key={d.label}
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-medium text-card-foreground">
                    {d.label}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{d.value}</p>
                </div>
              </div>
            )
          })}
        </section>

        {/* Formulario */}
        <section aria-label="Formulario de contacto" className="lg:col-span-3">
          <form className="space-y-5 rounded-xl border border-border bg-card p-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="nombre"
                  className="text-sm font-medium text-card-foreground"
                >
                  Nombre
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Lorem ipsum"
                  className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/40"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="correo"
                  className="text-sm font-medium text-card-foreground"
                >
                  Correo electrónico
                </label>
                <input
                  id="correo"
                  name="correo"
                  type="email"
                  placeholder="lorem@ejemplo.com"
                  className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/40"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="asunto"
                className="text-sm font-medium text-card-foreground"
              >
                Asunto
              </label>
              <input
                id="asunto"
                name="asunto"
                type="text"
                placeholder="Lorem ipsum dolor sit"
                className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/40"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="mensaje"
                className="text-sm font-medium text-card-foreground"
              >
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={5}
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                className="w-full resize-y rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/40"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Send className="h-4 w-4" />
              Enviar mensaje
            </button>
          </form>
        </section>
      </div>
    </PageContainer>
  )
}
