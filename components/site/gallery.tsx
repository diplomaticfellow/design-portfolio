"use client"

import { useCallback, useEffect, useState } from "react"
import { asset } from "@/lib/asset"
import type { Work } from "@/lib/works"

type Layout = "posters" | "mockups"

function spanFor(layout: Layout, idx: number): string {
  const m = idx % 5
  if (layout === "posters") {
    if (m === 0) return "col-span-12 md:col-span-7"
    if (m === 1) return "col-span-12 md:col-span-5"
    if (m === 2) return "col-span-6 md:col-span-4"
    if (m === 3) return "col-span-6 md:col-span-4"
    return "col-span-12 md:col-span-4"
  }
  // mockups
  if (m === 0) return "col-span-12 md:col-span-8"
  if (m === 1) return "col-span-12 md:col-span-4"
  if (m === 2) return "col-span-6 md:col-span-4"
  if (m === 3) return "col-span-6 md:col-span-4"
  return "col-span-12 md:col-span-4"
}

export function Gallery({ items, layout }: { items: Work[]; layout: Layout }) {
  const [open, setOpen] = useState<number | null>(null)

  const close = useCallback(() => setOpen(null), [])
  const next = useCallback(
    () => setOpen((i) => (i === null ? null : (i + 1) % items.length)),
    [items.length],
  )
  const prev = useCallback(
    () => setOpen((i) => (i === null ? null : (i - 1 + items.length) % items.length)),
    [items.length],
  )

  useEffect(() => {
    if (open === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      else if (e.key === "ArrowRight") next()
      else if (e.key === "ArrowLeft") prev()
    }
    window.addEventListener("keydown", onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open, close, next, prev])

  if (items.length === 0) {
    return (
      <div className="px-4 md:px-8 py-12 text-mono text-xs uppercase tracking-wider text-foreground/50">
        {"// No work in this section yet — drop images into /public/" + layout + "/ to populate."}
      </div>
    )
  }

  const cardAspect = layout === "posters" ? "aspect-[3/4]" : "aspect-[4/3]"
  const active = open !== null ? items[open] : null

  return (
    <>
      <div className="grid grid-cols-12 gap-px bg-border">
        {items.map((p, idx) => (
          <button
            key={p.src}
            type="button"
            onClick={() => setOpen(idx)}
            className={`${spanFor(layout, idx)} group relative bg-background overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-inset`}
            aria-label={`Open ${p.title} full preview`}
          >
            <div className={`relative ${cardAspect} overflow-hidden`}>
              <img
                src={asset(p.src) || "/placeholder.svg"}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors" />
              <span
                aria-hidden
                className="absolute top-2 right-2 md:top-3 md:right-3 text-mono text-[10px] uppercase tracking-wider bg-foreground text-background px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {"Expand ↗"}
              </span>
            </div>
            <div className="flex items-baseline justify-between px-3 md:px-4 py-3 md:py-4 border-t border-border">
              <div className="flex items-baseline gap-3">
                <span className="text-mono text-xs text-foreground/50">{p.id}</span>
                <h3 className="text-base md:text-lg font-medium tracking-tight">{p.title}</h3>
              </div>
              <span className="text-mono text-[10px] md:text-xs uppercase tracking-wider text-foreground/30">
                Click to expand
              </span>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title} full preview`}
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-in fade-in"
          onClick={close}
        >
          {/* Close */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              close()
            }}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-10 border border-foreground bg-background text-foreground px-3 py-2 text-mono text-[11px] uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors"
            aria-label="Close preview"
          >
            {"Close ✕"}
          </button>

          {items.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  prev()
                }}
                className="absolute left-3 md:left-6 z-10 border border-foreground/40 hover:border-foreground bg-background/80 text-foreground w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-lg transition-colors"
                aria-label="Previous image"
              >
                {"←"}
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  next()
                }}
                className="absolute right-3 md:right-6 z-10 border border-foreground/40 hover:border-foreground bg-background/80 text-foreground w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-lg transition-colors"
                aria-label="Next image"
              >
                {"→"}
              </button>
            </>
          )}

          <figure
            className="relative flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              key={active.src}
              src={asset(active.src) || "/placeholder.svg"}
              alt={active.title}
              className="block max-w-[92vw] max-h-[80vh] w-auto h-auto object-contain"
            />
            <figcaption className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-mono text-[11px] uppercase tracking-wider text-foreground/60">
              <span>{active.id}</span>
              <span aria-hidden>—</span>
              <span className="text-foreground">{active.title}</span>
              <span aria-hidden className="text-foreground/30">
                ·
              </span>
              <span>
                {(open ?? 0) + 1} / {items.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  )
}
