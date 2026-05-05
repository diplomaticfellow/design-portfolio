export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="px-4 md:px-8 py-8 md:py-10">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-mono text-[11px] uppercase tracking-wider text-foreground/50">
        <span>© {year} Danial Jeelani. All Rights Reserved.</span>
        <a href="#top" className="link-brutal text-foreground/70 hover:text-foreground">
          Back to Top ↑
        </a>
      </div>
    </footer>
  )
}
