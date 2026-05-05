type MarqueeProps = {
  items: string[]
  className?: string
}

export function Marquee({ items, className = "" }: MarqueeProps) {
  // Duplicate the items so the loop is seamless when translating -50%.
  const doubled = [...items, ...items]
  return (
    <div className={`overflow-hidden border-y border-border ${className}`}>
      <div className="flex whitespace-nowrap animate-marquee will-change-transform py-3 md:py-4">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-mono uppercase text-xs md:text-sm tracking-wider text-foreground/70 px-6 flex items-center gap-6"
            aria-hidden={i >= items.length}
          >
            {item}
            <span aria-hidden className="inline-block w-1 h-1 bg-foreground/40" />
          </span>
        ))}
      </div>
    </div>
  )
}
