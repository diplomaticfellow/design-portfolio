import Image from "next/image"

export function Hero() {
  return (
    <section id="top" className="relative pt-24 md:pt-28 pb-10 md:pb-16 px-4 md:px-8 border-b border-border">
      {/* Top meta strip */}
      <div className="flex items-start justify-between text-mono text-[11px] uppercase tracking-wider text-foreground/60">
        <div className="flex flex-col gap-1">
          <span>[ Portfolio / 2024—2026 ]</span>
        </div>
        <div className="hidden md:flex flex-col items-end gap-1">
          <span>Based in U.A.E.</span>
          <span className="text-foreground/40">Available Worldwide</span>
        </div>
      </div>

      {/* Display name. Two stacked words for maximum brutalist scale. */}
      <h1
        className="text-display mt-8 md:mt-12 text-foreground"
        aria-label="Danial Jeelani"
      >
        <span className="block text-[20vw] md:text-[18vw] lg:text-[17vw]">Danial</span>
        <span className="block text-[20vw] md:text-[18vw] lg:text-[17vw] -mt-[0.06em] outline-text">
          Jeelani
        </span>
      </h1>

      {/* Sub-row: tagline + cluster image */}
      <div className="mt-8 md:mt-14 grid grid-cols-12 gap-4 md:gap-6 items-end">
        <div className="col-span-12 md:col-span-7 lg:col-span-6">
          <p className="text-pretty text-xl md:text-2xl lg:text-3xl leading-snug font-medium max-w-2xl">
            Visual designer crafting work across <em className="not-italic underline underline-offset-4 decoration-1">print</em>,{" "}
            <em className="not-italic underline underline-offset-4 decoration-1">motion</em>,{" "}
            <em className="not-italic underline underline-offset-4 decoration-1">dimension</em>, and{" "}
            <em className="not-italic underline underline-offset-4 decoration-1">screen</em>.
          </p>
          <div className="mt-6 md:mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-mono text-xs uppercase tracking-wider text-foreground/60">
            <span className="flex items-center gap-2">
              <span aria-hidden className="inline-block w-2 h-2 bg-foreground" /> Open to commissions
            </span>
            <span>Posters · Motion · 3D · Web</span>
          </div>
        </div>

        <div className="col-span-12 md:col-span-5 lg:col-span-6">
          <div className="grid grid-cols-3 gap-2 md:gap-3">
            <ThumbCard src="/posters/echoes.png" alt="Echoes poster preview" />
            <ThumbCard src="/posters/lemans.png" alt="Le Mans poster preview" />
            <ThumbCard src="/posters/hyd.png" alt="HYD poster preview" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="mt-10 md:mt-16 flex items-center justify-between text-mono text-[11px] uppercase tracking-wider text-foreground/50">
        <span>↓ Scroll</span>
        <span>Selected Works</span>
      </div>
    </section>
  )
}

function ThumbCard({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="relative aspect-[3/4] overflow-hidden border border-border bg-muted">
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill
        sizes="(min-width: 768px) 16vw, 30vw"
        className="object-cover"
      />
    </figure>
  )
}
