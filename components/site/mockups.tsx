import { Gallery } from "@/components/site/gallery"
import { getWorks } from "@/lib/works"

export function Mockups() {
  const items = getWorks("mockups")
  return (
    <section id="mockups" className="border-b border-border">
      <div className="grid grid-cols-12 gap-4 px-4 md:px-8 py-10 md:py-16 border-b border-border">
        <div className="col-span-12 md:col-span-3">
          <span className="text-mono uppercase text-xs tracking-wider text-foreground/50">[ 02 / In Context ]</span>
        </div>
        <div className="col-span-12 md:col-span-9">
          <h2 className="text-display text-[12vw] md:text-[8vw] lg:text-[7vw] leading-[0.85]">
            Mockups
            <span className="text-foreground/30"> &amp; Products</span>
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-foreground/70 text-base md:text-lg leading-relaxed">
            Designs applied to real surfaces — totes, prints, packaging and product. Where the
            typographic system meets the physical world. Click any piece to view it full size.
          </p>
        </div>
      </div>

      <Gallery items={items} layout="mockups" />
    </section>
  )
}
