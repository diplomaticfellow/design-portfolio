const links = [
  {
    label: "LinkedIn",
    handle: "@danialjeelani",
    href: "https://www.linkedin.com/in/danialjeelani/",
  },
  {
    label: "Original Site",
    handle: "diplomaticfellow.github.io",
    href: "https://diplomaticfellow.github.io/",
  },
  {
    label: "GitHub",
    handle: "@diplomaticfellow",
    href: "https://github.com/diplomaticfellow",
  },
]

export function Contact() {
  return (
    <section id="contact" className="border-b border-border">
      <div className="grid grid-cols-12 gap-4 px-4 md:px-8 py-10 md:py-16 border-b border-border">
        <div className="col-span-12 md:col-span-3">
          <span className="text-mono uppercase text-xs tracking-wider text-foreground/50">[ 05 / Contact ]</span>
        </div>
        <div className="col-span-12 md:col-span-9">
          <h2 className="text-display text-[16vw] md:text-[12vw] lg:text-[11vw] leading-[0.85]">
            Let&apos;s
            <br />
            Work
            <span className="text-foreground/30"> Together.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-pretty text-foreground/70 text-base md:text-lg leading-relaxed">
            Have a poster, campaign, product or website that needs a strong visual point of view?
            Reach out — I&apos;d love to hear about it.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className="group bg-background p-6 md:p-8 flex flex-col justify-between min-h-[180px] hover:bg-foreground hover:text-background transition-colors"
          >
            <span className="text-mono text-[11px] uppercase tracking-wider text-foreground/50 group-hover:text-background/70">
              {l.label}
            </span>
            <div className="flex items-end justify-between gap-4 mt-8">
              <span className="text-2xl md:text-3xl font-bold tracking-tight leading-none">
                {l.handle}
              </span>
              <span aria-hidden className="text-2xl md:text-3xl shrink-0">
                ↗
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
