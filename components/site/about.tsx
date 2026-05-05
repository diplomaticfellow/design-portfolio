export function About() {
  return (
    <section id="info" className="border-b border-border">
      <div className="grid grid-cols-12 gap-4 px-4 md:px-8 py-10 md:py-16 border-b border-border">
        <div className="col-span-12 md:col-span-3">
          <span className="text-mono uppercase text-xs tracking-wider text-foreground/50">[ 04 / Info ]</span>
        </div>
        <div className="col-span-12 md:col-span-9">
          <h2 className="text-display text-[12vw] md:text-[8vw] lg:text-[7vw] leading-[0.85]">About</h2>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-y-8 md:gap-x-8 px-4 md:px-8 py-10 md:py-16">
        <div className="col-span-12 md:col-span-7">
          <p className="text-balance text-2xl md:text-3xl lg:text-4xl leading-snug font-medium max-w-3xl">
            I&apos;m Danial Jeelani — a multidisciplinary visual designer based in the U.A.E.,
            working across posters, motion, 3D and digital interfaces. My practice sits between
            editorial discipline and experimental play; I care about typography, rhythm and the
            small details that make a piece feel inevitable.
          </p>
          <p className="mt-6 md:mt-8 text-foreground/70 leading-relaxed max-w-2xl text-base md:text-lg">
            Soon to be a Computer Science undergraduate, I sit comfortably between design and
            engineering — building systems that look as deliberate as they feel. I work with
            brands, artists and small studios on identity, campaign and product design — from a
            single celebratory poster to full visual systems and websites. Open to selected
            commissions and collaborations.
          </p>
        </div>

        <aside className="col-span-12 md:col-span-5 md:pl-8 md:border-l md:border-border">
          <dl className="grid grid-cols-1 gap-6 text-sm">
            <div>
              <dt className="text-mono text-[11px] uppercase tracking-wider text-foreground/50 mb-2">
                Disciplines
              </dt>
              <dd className="leading-relaxed">
                Poster Design · Motion · 3D · Web &amp; UI · Identity · Print · Editorial
              </dd>
            </div>
            <div>
              <dt className="text-mono text-[11px] uppercase tracking-wider text-foreground/50 mb-2">
                Tools
              </dt>
              <dd className="leading-relaxed">
                Figma · Photoshop · Illustrator · After Effects · Blender
              </dd>
            </div>
            <div>
              <dt className="text-mono text-[11px] uppercase tracking-wider text-foreground/50 mb-2">
                Services
              </dt>
              <dd className="leading-relaxed">
                Posters · Campaign Art · Product Mockups · Website Design · Branding Support
              </dd>
            </div>
            <div>
              <dt className="text-mono text-[11px] uppercase tracking-wider text-foreground/50 mb-2">
                Based In
              </dt>
              <dd className="leading-relaxed">United Arab Emirates · Available Worldwide</dd>
            </div>
            <div>
              <dt className="text-mono text-[11px] uppercase tracking-wider text-foreground/50 mb-2">
                Status
              </dt>
              <dd className="leading-relaxed flex items-center gap-2">
                <span aria-hidden className="inline-block w-2 h-2 bg-foreground animate-pulse" />
                Available for new commissions
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  )
}
