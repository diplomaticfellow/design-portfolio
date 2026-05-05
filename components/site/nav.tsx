"use client"

import { useEffect, useState } from "react"

const links = [
  { href: "#work", label: "Work" },
  { href: "#mockups", label: "Mockups" },
  { href: "#web", label: "Web" },
  { href: "#info", label: "Info" },
  { href: "#contact", label: "Contact" },
]

const EMAIL = "physics16282@gmail.com"

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (!menuOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [menuOpen])

  // Close on Escape
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [menuOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
        scrolled || menuOpen ? "bg-background/95 backdrop-blur border-border" : "bg-transparent border-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-4 md:px-8 h-12 md:h-14 text-mono text-[11px] md:text-xs uppercase tracking-wider">
        <a href="#top" className="link-brutal flex items-center gap-2" onClick={() => setMenuOpen(false)}>
          <span aria-hidden className="inline-block w-1.5 h-1.5 bg-foreground" />
          Danial Jeelani
        </a>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-8">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className="link-brutal flex items-center gap-3 text-foreground/80 hover:text-foreground"
            >
              <span className="text-foreground/40">{String(i + 1).padStart(2, "0")}</span>
              <span>{l.label}</span>
            </a>
          ))}
        </nav>

        <a
          href={`mailto:${EMAIL}`}
          className="link-brutal hidden md:inline-block text-foreground/80 hover:text-foreground"
          aria-label={`Email ${EMAIL}`}
        >
          [ Available for Work ]
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden flex flex-col justify-center items-end gap-1.5 w-8 h-8 -mr-1"
        >
          <span
            aria-hidden
            className={`block h-px bg-foreground transition-all duration-200 ${menuOpen ? "w-6 rotate-45 translate-y-[3px]" : "w-6"}`}
          />
          <span
            aria-hidden
            className={`block h-px bg-foreground transition-all duration-200 ${menuOpen ? "w-6 -rotate-45 -translate-y-[3px]" : "w-4"}`}
          />
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden border-t border-border transition-[max-height] duration-300 ease-out ${
          menuOpen ? "max-h-[80vh]" : "max-h-0 border-transparent"
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-col px-4 py-4">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-4 py-3 text-base font-medium tracking-tight border-b border-border last:border-b-0"
            >
              <span className="text-mono text-xs text-foreground/40 w-6">{String(i + 1).padStart(2, "0")}</span>
              <span>{l.label}</span>
            </a>
          ))}
          <a
            href={`mailto:${EMAIL}`}
            onClick={() => setMenuOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 border border-foreground bg-foreground text-background px-4 py-3 text-mono text-[11px] uppercase tracking-wider"
          >
            [ Available for Work ]
          </a>
        </nav>
      </div>
    </header>
  )
}
