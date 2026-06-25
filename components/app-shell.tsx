"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BookOpen,
  FileText,
  Home,
  LayoutGrid,
  Mail,
  Menu,
  PanelLeftClose,
  PanelLeftOpen,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Inicio", icon: Home },
  { href: "/articulos", label: "Artículos publicados", icon: FileText },
  { href: "/divulgacion", label: "Divulgación de temas", icon: BookOpen },
  { href: "/paginas", label: "Páginas desarrolladas", icon: LayoutGrid },
  { href: "/contacto", label: "Contacto", icon: Mail },
]

export function AppShell({ children }: { children: React.ReactNode }) {
  // Colapsado en escritorio (solo iconos) y panel móvil abierto/cerrado.
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="relative flex min-h-screen bg-background text-foreground">
      {/* Fondo alusivo a biotecnología / bioinformática (decorativo) */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.07]"
        style={{ backgroundImage: "url(/images/bg-biotech.png)" }}
      />

      {/* Overlay para móvil */}
      {mobileOpen && (
        <button
          type="button"
          aria-label="Cerrar menú"
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-30 bg-black/60 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground transition-all duration-300",
          // Ancho según estado colapsado en escritorio
          collapsed ? "md:w-20" : "md:w-72",
          // Comportamiento móvil: panel deslizable
          "w-72 md:translate-x-0",
          mobileOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-16 items-center gap-3 border-b border-sidebar-border px-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary font-mono text-sm font-bold text-primary-foreground">
            PF
          </div>
          {!collapsed && (
            <span className="truncate text-sm font-semibold tracking-tight">
              Portafolio
            </span>
          )}
          {/* Cerrar en móvil */}
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={() => setMobileOpen(false)}
            className="ml-auto rounded-md p-1.5 text-sidebar-foreground hover:bg-sidebar-accent md:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto p-3">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href)
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                aria-current={active ? "page" : undefined}
                title={collapsed ? item.label : undefined}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                  collapsed && "md:justify-center",
                  active
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground/80 hover:bg-sidebar-accent/60 hover:text-sidebar-foreground",
                )}
              >
                <Icon className="h-5 w-5 shrink-0" />
                {!collapsed && <span className="truncate">{item.label}</span>}
              </Link>
            )
          })}
        </nav>

        {/* Botón colapsar (solo escritorio) */}
        <div className="hidden border-t border-sidebar-border p-3 md:block">
          <button
            type="button"
            onClick={() => setCollapsed((v) => !v)}
            aria-label={collapsed ? "Expandir menú" : "Contraer menú"}
            className={cn(
              "flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-sidebar-foreground/80 transition-colors hover:bg-sidebar-accent/60 hover:text-sidebar-foreground",
              collapsed && "justify-center",
            )}
          >
            {collapsed ? (
              <PanelLeftOpen className="h-5 w-5 shrink-0" />
            ) : (
              <>
                <PanelLeftClose className="h-5 w-5 shrink-0" />
                <span>Contraer</span>
              </>
            )}
          </button>
        </div>
      </aside>

      {/* Contenido principal */}
      <div
        className={cn(
          "relative z-10 flex min-h-screen flex-1 flex-col transition-all duration-300",
          collapsed ? "md:pl-20" : "md:pl-72",
        )}
      >
        {/* Barra superior (visible en móvil para abrir el menú) */}
        <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur md:hidden">
          <button
            type="button"
            aria-label="Abrir menú"
            onClick={() => setMobileOpen(true)}
            className="rounded-md p-2 text-foreground hover:bg-muted"
          >
            <Menu className="h-5 w-5" />
          </button>
          <span className="text-sm font-semibold">Portafolio</span>
        </header>

        <main className="flex-1">{children}</main>

        {/* Pie de página global */}
        <footer className="border-t border-border px-6 py-6 text-center text-xs text-muted-foreground md:px-10">
          <p>Esta página fue generada con ayuda de [v0].</p>
        </footer>
      </div>
    </div>
  )
}
