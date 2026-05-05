import { Gallery } from "@/components/site/gallery"
import { getWorks } from "@/lib/works"

export function Posters() {
  const items = getWorks("posters")
  return (
    <section id="work" className="border-b border-border">
      <div className="grid grid-cols-12 gap-4 px-4 md:px-8 py-10 md:py-16 border-b border-border">
        <div className="col-span-12 md:col-span-3">
          <span className="text-mono uppercase text-xs tracking-wider text-foreground/50">[ 01 / Work ]</span>
        </div>
        <div className="col-span-12 md:col-span-9">
          <h2 className="text-display text-[12vw] md:text-[8vw] lg:text-[7vw] leading-[0.85]">
            Posters
            <span className="text-foreground/30"> &amp; Print</span>
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-foreground/70 text-base md:text-lg leading-relaxed">
            A selected body of typographic, conceptual and editorial poster work — exploring rhythm,
            scale and tension on the page. Click any piece to view it full size.
          </p>
        </div>
      </div>

      <Gallery items={items} layout="posters" />
    </section>
  )
}
