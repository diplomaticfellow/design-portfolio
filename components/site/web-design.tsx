import { asset } from "@/lib/asset"

export function WebDesign() {
  return (
    <section id="web" className="border-b border-border">
      <div className="grid grid-cols-12 gap-4 px-4 md:px-8 py-10 md:py-16 border-b border-border">
        <div className="col-span-12 md:col-span-3">
          <span className="text-mono uppercase text-xs tracking-wider text-foreground/50">[ 03 / Digital ]</span>
        </div>
        <div className="col-span-12 md:col-span-9">
          <h2 className="text-display text-[12vw] md:text-[8vw] lg:text-[7vw] leading-[0.85]">
            Web
            <span className="text-foreground/30"> Design</span>
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-foreground/70 text-base md:text-lg leading-relaxed">
            Interface and layout work — full responsive site designs created in Figma. Below is a
            condensed preview of a recent project; download the full file for the complete walkthrough.
          </p>
        </div>
      </div>

      {/* Project meta row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 px-4 md:px-8 py-6 border-b border-border">
        <div className="flex items-baseline gap-4">
          <span className="text-mono text-xs uppercase tracking-wider text-foreground/50">01</span>
          <h3 className="text-2xl md:text-4xl font-bold tracking-tight">Opho — Site Design</h3>
        </div>
        <dl className="flex flex-wrap gap-x-8 gap-y-2 text-mono text-[11px] uppercase tracking-wider text-foreground/60">
          <div className="flex items-baseline gap-2">
            <dt className="text-foreground/40">Role:</dt>
            <dd>Visual Design</dd>
          </div>
          <div className="flex items-baseline gap-2">
            <dt className="text-foreground/40">Tools:</dt>
            <dd>Figma</dd>
          </div>
          <div className="flex items-baseline gap-2">
            <dt className="text-foreground/40">Year:</dt>
            <dd>2026</dd>
          </div>
        </dl>
      </div>

      {/* Browser frame preview */}
      <div className="px-4 md:px-8 py-8 md:py-12">
        <div className="border border-border bg-muted">
          {/* Browser chrome */}
          <div className="flex items-center justify-between border-b border-border px-3 md:px-4 py-2.5">
            <div className="flex items-center gap-1.5">
              <span className="block w-2.5 h-2.5 border border-border" />
              <span className="block w-2.5 h-2.5 border border-border" />
              <span className="block w-2.5 h-2.5 border border-border" />
            </div>
            <div className="text-mono text-[10px] md:text-xs uppercase tracking-wider text-foreground/50">
              opho.design — Figma Export
            </div>
            <div className="text-mono text-[10px] md:text-xs uppercase tracking-wider text-foreground/30 hidden sm:block">
              [ static · 1440 ]
            </div>
          </div>

          {/* Tall preview with bottom fade */}
          <div className="relative max-h-[78vh] overflow-hidden">
            <img
              src={asset("/web/opho-1.png")}
              alt="Opho website design — full page preview by Danial Jeelani"
              className="w-full h-auto block"
            />
            {/* Fade-out at the bottom to invite the user to view full */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-40 md:h-56"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 0%, var(--background) 100%)",
              }}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-wrap items-center gap-3 md:gap-4">
          <a
            href={asset("/web/opho-site.pdf")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-foreground bg-foreground text-background px-4 py-3 text-mono text-xs uppercase tracking-wider hover:bg-background hover:text-foreground transition-colors"
          >
            View Full Design (PDF) →
          </a>
          <a
            href={asset("/web/opho-1.png")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-border px-4 py-3 text-mono text-xs uppercase tracking-wider text-foreground/80 hover:text-foreground hover:border-foreground transition-colors"
          >
            Open Image in New Tab ↗
          </a>
        </div>
      </div>
    </section>
  )
}
